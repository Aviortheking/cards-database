# Pull Rates

Comprehensive pull rate data for all Pokemon TCG sets.

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /v3/{lang}/sets/{id}/pull-rates` | Get pull rates for a set |
| `GET /v3/{lang}/sets/{id}/pack-structure` | Get pack composition |
| `GET /v3/{lang}/sets/{id}/box-odds` | Get box expectations |

## GraphQL

```graphql
query {
  set(id: "sv11") {
    id
    name
    pullRates {
      pack {
        slots
        commons
        uncommons
        reverseHolo
        basicEnergy
        rareSlot
      }
      rarity {
        ... on RarityRates {
          ultraRare
          vmax
          v
        }
      }
      box {
        v { min typical max }
        vmax { min typical max }
      }
    }
  }
}
```

## Data Schema

```typescript
interface PullRates {
  setId: string;
  pack: PackStructure;
  rarity: RarityRates;
  box: BoxExpectations;
}

interface PackStructure {
  slots: number;
  commons: number;
  uncommons: number;
  reverseHolo: number;
  basicEnergy: number;
  rareSlot: number;
  specialSlots?: SpecialSlot[];
}

interface RarityRates {
  // Key: rarity name, Value: "1/X" odds
  [rarityName: string]: string;
}

interface BoxExpectations {
  // Key: hit type, Value: expected range per box
  [hitType: string]: {
    min: number;
    typical: number;
    max: number;
  };
}
```

## Coverage

- **All sets**: Base Set (1999) through Scarlet & Violet (2026+)
- **~100+ sets** with historical data
- Different pack structures per era

## Rarity Types by Era

| Era | Rarities |
|-----|----------|
| Gen 1-3 | Holo, Rare, Secret Rare |
| Gen 4-5 | Lv.X, Ultra Rare, Secret |
| Gen 6-8 | EX, GX, V, VMAX, Secret, Gold, Rainbow |
| Gen 9 | Ultra Rare, V, VMAX, VSTAR, Special Illustration, Hyper |

## Integration

- Embedded in Set object
- Queryable via: `?rarity=ultra-rare` or `?hitType=vmax`

## Example Response

```json
{
  "set": "sv11",
  "name": "Lost Origin",
  "pack": {
    "slots": 11,
    "commons": 5,
    "uncommons": 3,
    "reverseHolo": 1,
    "basicEnergy": 1,
    "rareSlot": 1
  },
  "pullRates": {
    "rare": {
      "secretRare": "1/252",
      "altArtV": "1/118",
      "gold": "1/71",
      "rainbow": "1/30",
      "fullArt": "1/29",
      "vmax": "1/25",
      "v": "1/8"
    },
    "reverse": {
      "tgSecret": "1/122",
      "tgVMax": "1/56",
      "radiant": "1/20"
    }
  },
  "boxOdds": {
    "v": { "min": 3, "typical": 5, "max": 6 },
    "vmax": { "min": 0, "typical": 2, "max": 3 },
    "tgHolo": { "min": 2, "typical": 3, "max": 5 }
  }
}
```

## Workstream

| Task | Description | Priority |
|------|-------------|----------|
| P1.1 | Design database schema for pull rates | P0 |
| P1.2 | Import existing data from CSV/JSON repos | P0 |
| P1.3 | Add pack structure for all sets | P0 |
| P1.4 | Add per-pack odds | P0 |
| P1.5 | Add per-box expectations | P0 |
| P1.6 | Create REST endpoints | P0 |
| P1.7 | Add GraphQL integration | P1 |
| P1.8 | Update SDKs | P1 |

## Related Issues

- #1384 - Pull-rate types

## Related Features

- [Products](./products.md) - Products inherit pull rates, scaled to pack count