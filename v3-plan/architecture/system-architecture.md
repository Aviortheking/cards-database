# System Architecture

## v3 Server Cluster

```
┌───────────────────────────────────────────────────────────────────┐
│                         v3 SERVER CLUSTER                         │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│         ┌───────────────────────────────────────────────┐         │
│         │                 MASTER SERVER                 │         │
│         │  ┌─────────────────────────────────────────┐  │         │
│         │  │            Management server            │  │         │
│         │  │        Allows to manage API keys        │  │         │
│         │  │     Subscriptions & see rate limits     │  │         │
│         │  └─────────────────────┬───────────────────┘  │         │
│         │                        │                      │         │
│         │           ┌────────────┴──────────┐           │         │
│         │           │     Valkey Cluster    │           │         │
│         │           │  (Master + Replicas)  │           │         │
│         │           │  - Keys               │           │         │
│         │           │  - Accounts           │           │         │
│         │           │  - Rate Limits        │           │         │
│         │           └────────────┼──────────┘           │         │
│         └────────────────────────┼──────────────────────┘         │
│                      Cached Read │ Pub/Sub, Background Write Sync │
│       ┌────────────────┬─────────┴─────┬────────────────┐         │
│       ▼                ▼               ▼                ▼         │
│  ┌────┴─────┐     ┌────┴──────     ┌───┴──────┐     ┌───┴──────┐  │
│  │   Edge   │     │   Edge   │     │   Edge   │     │   Edge   │  │
│  │  Server  │     │  Server  │     │  Server  │     │  Server  │  │
│  │   (US)   │     │   (EU)   │     │  (ASIA)  │     │ (LATAM)  │  │
│  │          │     │          │     │          │     │          │  │
│  │  Valkey  │     │  Valkey  │     │  Valkey  │     │  Valkey  │  │
│  │  Cache   │     │  Cache   │     │  Cache   │     │  Cache   │  │
│  └─────┬────┘     └─────┬────┘     └────┬─────┘     └────┬─────┘  │
│        ▲                ▲               ▲                ▲        │
│        └────────────────┴───────┬───────┴────────────────┘        │
│                                 │                                 │
│                        Card Detection Proxy                       │
│                                 │                                 │
│                      ┌──────────┴──────────┐                      │
│                      │   Image detection   │                      │
│                      │  ┌───────────────┐  │                      │
│                      │  │     YOLOv8    │  │                      │
│                      │  │      CLIP     │  │                      │
│                      │  │     FAISS     │  │                      │
│                      │  └───────────────┘  │                      │
│                      └─────────────────────┘                      │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

## Data Flow

| Request Type       | Path                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **Read**           | Client → Edge Server → Check L0 Cache → Master DB (if miss)                   |
| **Write**          | Client → Edge Server → Master → Broadcast to all Edge Servers (update caches) |
| **Card Detection** | Client → Edge Server → Inference Server → Return results                      |

## Component Responsibilities

### Master Server

- **Write API**: API Key creation, updates, deletions
- **Admin Interface**: Web dashboard for management
- **Master DB**: Primary data store for all cards, sets, series
- **Sync Engine**: Broadcasts cache invalidation to all edge servers when writes occur

### Edge Servers

- **Read API**: REST + GraphQL endpoints
- **L0 Cache**: In-memory cache for API Keys + Rate Limit counters
- **Proxy**: Forwards card detection requests to inference server

### Inference Server

- **YOLOv8**: Card detection model
- **CLIP + FAISS**: Card identification via embeddings

## Master Server Admin Interface

| Feature | Description | Priority |
|---------|-------------|----------|
| A4.8 | Build Master Server admin interface | P0 |
| A4.9 | API Key management UI | P0 |
| A4.10 | Rate limit configuration UI | P0 |
| A4.11 | Usage analytics dashboard | P1 |
| A4.12 | Server health monitoring | P1 |

### Admin Interface Features

- **Dashboard**: Overview of all edge servers, usage stats, API key metrics
- **API Key Management**: Create, edit, delete, rotate keys
- **Rate Limits**: Configure limits per key tier
- **Health Monitoring**: Real-time server status from all edges
- **Logs**: Access to server logs and errors

## API Key Flow

```
┌─────────────────────────────────────────┐
│         API KEY AUTHENTICATION          │
├─────────────────────────────────────────┤
│                                         │
│         Client                          │
│           │                             │
│           │ POST /v3/cards              │
│           │ X-API-Key: key_xxx          │
│           ▼                             │
│  ┌─────────────────┐                    │
│  │  Validate Key   │                    │
│  │  + Check Rate   │                    │
│  └────────┬────────┘                    │
│           │                             │
│    ┌──────┴──────┐                      │
│    ▼             ▼                      │
│  Valid        Invalid                   │
│    │             │                      │
│    ▼             ▼                      │
│ Process      401 Error                  │
│                                         │
└─────────────────────────────────────────┘
```

## Valkey Cache Architecture

### Cluster Setup

```
┌─────────────────────────────────────────────┐
│         VALKEY CLUSTER                      │
├─────────────────────────────────────────────┤
│  ┌─────────┐     ┌─────────┐                │
│  │ Master  │────▶│Replica 1│                │
│  │  (EU)   │────▶│  (US)   │                │
│  └─────────┘     └─────────┘                │
│       │              │                      │
│       └──────────────┤                      │
│                      │                      │
│              ┌───────┴─────┐                │
│              │ Replica 2   │                │
│              │   (ASIA)    │                │
│              └─────────────┘                │
└─────────────────────────────────────────────┘
```

### Data Storage

| Data Type | Master | Edge Local | TTL | Sync Method |
|-----------|--------|------------|-----|-------------|
| API Keys | ✅ | ✅ (cached) | 24h | Pub/Sub (invalidate) |
| Accounts | ✅ | ✅ (cached) | 24h | Pub/Sub (update) |
| Rate Limits | ✅ (aggregate) | ✅ (counters) | 1min | Background sync (10s) |

### Sync Mechanisms

| Data | Method | Frequency |
|------|--------|-----------|
| Key Invalidation | Pub/Sub | Instant |
| Account Updates | Pub/Sub | Instant |
| Rate Limit Counters | Background sync | 10s |

### Rate Limits (Per Tier)

| Tier | Per Minute | Per Second | Abuse Detection |
|------|-----------|------------|-----------------|
| Logged Out | 600/m | 10/s | Central (background) |
| Free API | 2400/m | 40/s | Central (background) |
| Paying | 6000/m | 100/s | Central (background) |

### Request Flow

```
Request → Local Valkey (INCR rate_limit:user:minute)
            │
            ▼ (every 10s, background)
Central Valkey (aggregate for abuse detection)
            │
            ▼ (Pub/Sub: only for invalidation)
All Edges (invalidate revoked keys)
```
┌─────────────────────────────────────────┐
│         API KEY AUTHENTICATION          │
├─────────────────────────────────────────┤
│                                         │
│         Client                          │
│           │                             │
│           │ POST /v3/cards              │
│           │ X-API-Key: key_xxx          │
│           ▼                             │
│  ┌─────────────────┐                    │
│  │  Validate Key   │                    │
│  │  + Check Rate   │                    │
│  └────────┬────────┘                    │
│           │                             │
│    ┌──────┴──────┐                      │
│    ▼             ▼                      │
│  Valid        Invalid                   │
│    │             │                      │
│    ▼             ▼                      │
│ Process      401 Error                  │
│                                         │
└─────────────────────────────────────────┘
```
