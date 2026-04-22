# Historical Pricing

Access historical pricing data for cards.

## Endpoints

```
GET /v3/{lang}/cards/{id}/pricing/history
GET /v3/{lang}/cards/{id}/pricing/history?from=2026-01-01&to=2026-04-01
GET /v3/{lang}/cards/{id}/pricing/trends
```

## Response Format

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

## Features

- Time-series queries
- Price trend calculations (up/down/stable)
- 6 months of historical data integration