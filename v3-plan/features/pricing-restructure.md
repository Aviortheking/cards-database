# Pricing Restructure

Pricing data moved from card root to variants array.

## Current (v2)

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

## Target (v3)

```json
{
  "id": "base1-1",
  "variants": [
    {
      "id": "base1-1",
      "type": "normal",
      "pricing": {
        "cardmarket": { ... },
        "tcgplayer": { ... }
      }
    }
  ]
}
```

## Implementation

- Remove pricing from card root level
- Move pricing data to variants array only
- Update Card.ts mapping logic
- Update OpenAPI Card schema
- Update REST responses
- Update GraphQL schema