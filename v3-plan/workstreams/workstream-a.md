# Workstream A: Schemas, Endpoints & GraphQL v3

## 3.1 Endpoint Migration

| Task | Description | Priority |
|------|------------|----------|
| A1.1 | Create new `/v3/` base endpoint | P0 |
| A1.2 | Migrate all `/v2/{lang}/cards` → `/v3/{lang}/cards` | P0 |
| A1.3 | Migrate all `/v2/{lang}/sets` → `/v3/{lang}/sets` | P0 |
| A1.4 | Migrate all `/v2/{lang}/series` → `/v3/{lang}/series` | P0 |
| A1.5 | Migrate all filter endpoints (`/types/`, `/rarities/`, etc.) | P0 |
| A1.6 | Migrate GraphQL endpoint `/v2/graphql` → `/v3/graphql` | P0 |
| A1.7 | Add new `/v3/graphql` with multi-lang support | P0 |
| A1.8 | Set up redirect from `/v2/` → `/v3/` (temporary) | P1 |
| A1.9 | Migrate language codes `{lang}` from `fr` → `fr-fr` (ISO format) | P0 |

## 3.2 OpenAPI Schema

| Task | Description | Priority |
|------|------------|----------|
| A2.1 | Create new `public/v3/openapi.yaml` | P0 |
| A2.2 | Define breaking changes in schema | P0 |
| A2.3 | Update Card schema (remove pricing root) | P0 |
| A2.4 | Update Set schema (add new fields) | P1 |
| A2.5 | Add CardDetection schema | P0 |
| A2.6 | Document new filter parameters | P1 |
| A2.7 | Generate TypeScript types from OpenAPI | P0 |

## 3.3 GraphQL v3

| Task | Description | Priority |
|------|------------|----------|
| A3.1 | Design new GraphQL schema from scratch | P0 |
| A3.2 | Implement multi-lang support (locales object) | P0 |
| A3.3 | Remove Brief/Full object structure | P0 |
| A3.4 | Add top-down and bottom-up searching | P1 |
| A3.5 | Add full filtering support in GraphQL | P0 |
| A3.6 | Add pagination to all list queries | P1 |
| A3.7 | Implement subscriptions for future updates | P2 |

### GraphQL v3 Multi-Lang Example

```graphql
# Example query showing multi-lang support
query {
  cards(filters: { id: "eq:base1-1" }) {
    id
    locales(langs: ["en", "fr", "de"]) {
      lang
      name
      attacks {
        name
        damage
        effect
        cost
      }
      description
    }
  }
}
```

## 3.4 API Key Authentication

| Task | Description | Priority |
|------|------------|----------|
| A4.1 | Design API Key structure | P0 |
| A4.2 | Create key generation mechanism | P0 |
| A4.3 | Implement key storage | P0 |
| A4.4 | Add key validation middleware | P0 |
| A4.5 | Create key management endpoints (admin) | P1 |
| A4.6 | Add key rotation support | P1 |
| A4.7 | Document API Keys for users | P1 |
| A4.8 | Build Master Server admin interface | P0 |
| A4.9 | Implement API Key management UI | P0 |
| A4.10 | Implement rate limit configuration UI | P0 |
| A4.11 | Add usage analytics dashboard | P1 |
| A4.12 | Add server health monitoring | P1 |

### API Key Features

- Optional initially (graceful adoption)
- Per-key rate limits
- Usage tracking
- Expiration dates
- Admin dashboard endpoints

## 3.5 Rate Limiting

| Task | Description | Priority |
|------|------------|----------|
| A5.1 | Choose rate limiting strategy (token bucket/sliding window) | P0 |
| A5.2 | Implement rate limit middleware | P0 |
| A5.3 | Add per-user rate limiting (unauthenticated) | P0 |
| A5.4 | Add per-key rate limiting (API key users) | P0 |
| A5.5 | Add per-endpoint rate limiting | P1 |
| A5.6 | Add rate limit headers (X-RateLimit-*) | P0 |
| A5.7 | Handle rate limit exceeded responses | P0 |
| A5.8 | Make rate limits configurable | P1 |

### Rate Limit Headers

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1713782400
```

### Rate Limit Structure

#### Without API Key (Unauthenticated)

| Tier | Requests/min | Endpoints |
|------|--------------|-----------|
| Anonymous | 60 | GET only |

#### With API Key (Authenticated)

| Tier | Requests/min | Endpoints |
|------|--------------|-----------|
| Free | 100 | GET only |
| Basic | 500 | All |
| Pro | 2000 | All |
| Enterprise | 10000 | All |

### Access Without API Key

Users can access the API without an API key with reduced rate limits:
- **60 requests/minute** for unauthenticated users
- **GET requests only** (no write endpoints)
- Higher limits available via API key registration

## 3.6 New Card Fields

| Task | Description | Issue Ref |
|------|------------|-----------|
| A6.1 | Expose `set_number` on Card | #891 |
| A6.2 | Document `set_number` in schema | #891 |

```typescript
interface Card {
  // ... existing fields
  setNumber: number;  // Card number within the set (e.g., 1/100)
}
```

## 3.7 New Set Fields

| Task | Description | Issue Ref |
|------|------------|-----------|
| A7.1 | Expose `releaseDate` on Set list view | #1079 |
| A7.2 | Add `abbreviation` to SetResume | #928 |

```typescript
interface SetResume {
  // ... existing fields
  releaseDate: string;  // ISO 8601 date
  abbreviation: {
    official: string;
    localized: string;
  };
}
```

## 3.8 ThirdParty IDs

| Task | Description | Issue Ref |
|------|------------|-----------|
| A8.1 | Expose cardmarket ID on cards | #946 |
| A8.2 | Expose tcgplayer ID on cards | #946 |
| A8.3 | Add to Card schema documentation | #946 |

```typescript
interface Card {
  // ... existing fields
  thirdPartyIds?: {
    cardmarket?: string;
    tcgplayer?: string;
  };
}
```

## 3.9 Image Resolution

| Task | Description | Issue Ref |
|------|------------|-----------|
| A9.1 | Add "original" resolution option | #1360 |
| A9.2 | Support `?format=original` query param | #1360 |
| A9.3 | Document resolution options | #1360 |

### Available Resolutions

| Format | Description |
|--------|-------------|
| `low` | 128px (existing) |
| `high` | 512px (existing) |
| `original` | Full resolution (NEW) |

## 3.10 Cross-Language Search

| Task | Description | Issue Ref |
|------|-------------|----------|
| A10.1 | Add search by name across all languages | #1181 |
| A10.2 | Implement locale-agnostic name filtering | #1181 |

## 3.11 International Language (intl)

| Task | Description | Priority |
|------|------------|----------|
| A11.1 | Implement new `intl` language support | P0 |
| A11.2 | Return all available languages in single request | P0 |
| A11.3 | Add `intl` to supported languages list | P0 |
| A11.4 | Update Card schema for multi-lang response | P0 |
| A11.5 | Update Set schema for multi-lang response | P0 |
| A11.6 | Update Serie schema for multi-lang response | P0 |
| A11.7 | Update GraphQL schema for locales object | P0 |

### intl Language Feature

The `intl` language allows users to fetch data from all available languages in a single request without making multiple API calls.

```
GET /v3/intl/cards/base1-1
```

### Response Format

```json
{
  "id": "base1-1",
  "localId": "1",
  "name": {
    "en": "Alakazam",
    "fr": "Alakazam",
    "es": "Alakazam",
    "de": "Simsala",
    "it": "Alakazam",
    "pt": "Alakazam",
    "ja": "アーカイEX",
    "ko": "лка자임",
    "zh": "超梦"
  },
  "image": {
    "en": "https://assets.tcgdex.net/en/base/base1/1",
    "fr": "https://assets.tcgdex.net/fr/base/base1/1",
    "es": "https://assets.tcgdex.net/es/base/base1/1"
  },
  "description": {
    "en": null,
    "fr": "Son super cerveau peut effectuer des opérations plus rapidement qu'un super ordinateur.",
    "de": null,
    "es": null
  },
  "set": {
    "id": "base1",
    "name": {
      "en": "Base Set",
      "fr": "Collection de Base",
      "de": "Grundkarten-Sets"
    }
  }
}
```

### Available Languages per Card

The API will return only languages that have data available for each card. If a translation doesn't exist, that language key will be omitted from the response.

### GraphQL Support

```graphql
# Using intl in GraphQL
query {
  card(id: "base1-1", lang: "intl") {
    id
    name
    description
    set {
      name
    }
  }
}
```

## 3.12 Language Code Migration (ISO Format)

| Task | Description | Priority |
|------|------------|----------|
| A12.1 | Migrate language codes from `fr` to `fr-fr` | P0 |
| A12.2 | Update all endpoints to accept ISO locale format | P0 |
| A12.3 | Add backwards compatibility for old short codes | P1 |
| A12.4 | Update SDKs to use ISO locale format | P0 |
| A12.5 | Update GraphQL schema for ISO locales | P0 |
| A12.6 | Add unique IDs to attacks, types, abilities, etc. | P0 |

### Language Code Migration

| v2 (Old) | v3 (New) |
|----------|----------|
| `en` | `en-us` |
| `fr` | `fr-fr` |
| `es` | `es-es` |
| `de` | `de-de` |
| `it` | `it-it` |
| `pt` | `pt-br` |
| `ja` | `ja-jp` |
| `ko` | `ko-kr` |
| `zh` | `zh-hans` |

### Endpoint Migration

```
# v2
GET /v2/fr/cards/base1-1

# v3
GET /v3/fr-fr/cards/base1-1
```

## 3.13 Unified ID System

| Task | Description | Priority |
|------|------------|----------|
| A13.1 | Add unique IDs to attack objects | P0 |
| A13.2 | Add unique IDs to ability objects | P0 |
| A13.3 | Add unique IDs to type objects | P0 |
| A13.4 | Add unique IDs to rarity objects | P0 |
| A13.5 | Add unique IDs to energy types | P0 |
| A13.6 | Add unique IDs to illustrator objects | P0 |
| A13.7 | Add unique IDs to stage objects | P0 |

### ID Format

```
{entity-type}:{unique-id}

# Examples:
attack:fire-ball
ability:pokemon-power
type:pokemon-card
rarity:ultra-rare
energy-type:fire
```

### Example Card with IDs

```json
{
  "id": "base1-1",
  "attacks": [
    {
      "id": "attack:psycic-blaster",
      "name": "Psyshic Blaster",
      "damage": "80",
      "cost": ["psychic", "psychic", "psychic"]
    }
  ],
  "abilities": [
    {
      "id": "ability:protean",
      "name": "Protean",
      "effect": "When this Pokemon..."
    }
  ],
  "types": ["type:psychic"],
  "rarity": "rarity:ultra-rare"
}
```