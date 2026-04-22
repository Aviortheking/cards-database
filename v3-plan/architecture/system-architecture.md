# System Architecture

## v3 Server Cluster

```
┌───────────────────────────────────────────────────────────────────┐
│                         v3 SERVER CLUSTER                         │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌───────────────────────────────────────────────┐                │
│  │              MASTER SERVER                    │                │
│  │  ┌────────────┐  ┌─────────────────────────┐  │                │
│  │  │   Write    │  │      Sync Engine        │  │                │
│  │  │   API      │  │   (broadcast to edges)  │  │                │
│  │  │(API Keys)  │  │                         │  │                │
│  │  └────────────┘  └─────────┬───────────────┘  │                │
│  │                            │                  │                │
│  │      ┌─────────────────────┴──────────────┐   │                │
│  │      │      Master DB (cards data)        │   │                │
│  │      │      SQLite/JSON                   │   │                │
│  │      └────────────────────┬───────────────┘   │                │
│  └───────────────────────────┼───────────────────┘                │
│                              │ Sync (write)                       │
│        ┌─────────────────────┼─────────────────────┐              │
│        ▼                     ▼                     ▼              │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐  │
│  │   Edge   │     │   Edge   │     │   Edge   │     │   Edge   │  │
│  │  Server  │     │  Server  │     │  Server  │     │  Server  │  │
│  │   (US)   │     │   (EU)   │     │  (ASIA)  │     │ (LATAM)  │  │
│  │          │     │          │     │          │     │          │  │
│  │ L0 Cache │     │ L0 Cache │     │ L0 Cache │     │ L0 Cache │  │
│  │(API Keys │     │(API Keys │     │(API Keys │     │(API Keys │  │
│  │  Rate    │     │   Rate   │     │  Rate    │     │  Rate    │  │
│  │ Limits)  │     │ Limits)  │     │ Limits)  │     │ Limits)  │  │
│  └──────────┘     └──────────┘     └──────────┘     └──────────┘  │
│        │               │               │               │          │
│        └───────────────┼───────────────┴───────────────┘          │
│                        │                                          │
│               Read Requests (cache)                               │
│                        │                                          │
│                Card Detection Proxy                               │
│                        ▼                                          │
│               ┌─────────────────────┐                             │
│               │  Inference Server   │                             │
│               │  ┌───────────────┐  │                             │
│               │  │  YOLOv8       │  │                             │
│               │  │  CLIP         │  │                             │
│               │  │  FAISS        │  │                             │
│               │  └───────────────┘  │                             │
│               └─────────────────────┘                             │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

## Data Flow

| Request Type | Path |
|-------------|------|
| **Read** | Client → Edge Server → Check L0 Cache → Master DB (if miss) |
| **Write** | Client → Edge Server → Master → Broadcast to all Edge Servers (update caches) |
| **Card Detection** | Client → Edge Server (proxy) → Inference Server → Return results |

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
