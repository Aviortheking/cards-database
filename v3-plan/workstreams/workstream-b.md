# Workstream B: Pricing Upgrade

## 4.1 Pricing Restructure

| Task | Description |
|------|-------------|
| B1.1 | Remove pricing from card root level |
| B1.2 | Move pricing data to variants array only |
| B1.3 | Update Card.ts mapping logic |
| B1.4 | Update OpenAPI Card schema |
| B1.5 | Update REST responses |
| B1.6 | Update GraphQL schema |

### Current (v2)
```json
{
  "id": "base1-1",
  "pricing": {
    "cardmarket": { ... },
    "tcgplayer": { ... }
  },
  "variants": [ ... ]
}
```

### Target (v3)
```json
{
  "id": "base1-1",
  "variants": [
    {
      "id": "base1-1",
      "type": "normal",
      "pricing": {  // Pricing now on variant
        "cardmarket": { ... },
        "tcgplayer": { ... }
      }
    }
  ]
}
```

## 4.2 Historical Pricing

| Task | Description |
|------|-------------|
| B2.1 | Integrate existing CSV repos (6 months) |
| B2.2 | Integrate existing JSON repos (6 months) |
| B2.3 | Design historical pricing API endpoint |
| B2.4 | Implement time-series queries |
| B2.5 | Add price trend calculations |

### Historical Pricing Endpoints

```
GET /v3/{lang}/cards/{id}/pricing/history
GET /v3/{lang}/cards/{id}/pricing/history?from=2026-01-01&to=2026-04-01
GET /v3/{lang}/cards/{id}/pricing/trends
```

### Historical Response Format

```json
{
  "cardId": "base1-1",
  "currency": "USD",
  "history": [
    {
      "date": "2026-04-01",
      "tcgplayer": {
        "low": 1.99,
        "mid": 2.99,
        "high": 3.99
      },
      "cardmarket": {
        "avg": 2.50
      }
    },
    {
      "date": "2026-03-31",
      "tcgplayer": { ... },
      "cardmarket": { ... }
    }
  ]
}
```

## 4.3 Provider Enhancement

| Task | Description |
|------|-------------|
| B3.1 | Improve CardMarket API fallback |
| B3.2 | Improve TCGPlayer API fallback |
| B3.3 | Add retry logic with exponential backoff |
| B3.4 | Add provider health checks |
| B3.5 | Implement circuit breaker pattern |

### Provider Fallback Chain

```
TCGPlayer → CardMarket → Cached Value → null
```

## 4.4 Price Metadata

| Task | Description |
|------|-------------|
| B4.1 | Add timestamp to each price update |
| B4.2 | Calculate price trends (up/down/stable) |
| B4.3 | Add confidence scores |
| B4.4 | Document price currency options |

### Enhanced Price Response

```json
{
  "pricing": {
    "tcgplayer": {
      "updated": "2026-04-01T12:00:00Z",
      "currency": "USD",
      "normal": {
        "low": 1.99,
        "mid": 2.99,
        "high": 3.99
      },
      "trend": "up",
      "trendPercent": 5.2
    }
  }
}
```