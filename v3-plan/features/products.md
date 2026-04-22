# Products

Product listings (booster boxes, ETBs, pre-releases, etc.) for Pokemon TCG sets.

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /v3/{lang}/products` | List all products |
| `GET /v3/{lang}/products/{id}` | Single product details |
| `GET /v3/{lang}/products/{id}/pull-rates` | Pull rates scaled to pack count |
| `GET /v3/{lang}/products/{id}/pricing` | Pricing from providers |
| `GET /v3/{lang}/sets/{id}/products` | Products for a set |

## GraphQL

```graphql
query {
  products(setId: "sv11") {
    id
    name
    packCount
    type
    pricing {
      tcgplayer { low mid high currency }
      cardmarket { avg }
    }
  }
}
```

## Data Schema

```typescript
interface Product {
  id: string;
  name: string;
  setId: string;
  setName: string;
  type: ProductType;
  packCount: number;
  pricing?: {
    tcgplayer?: PricingData;
    cardmarket?: PricingData;
  };
  source?: "tcgplayer" | "cardmarket";
  releaseDate?: string;
  image?: string;
  variants?: ProductVariant[];
}

type ProductType = 
  | "booster-box"
  | "elite-trainer-box"
  | "prerelease"
  | "collection"
  | "tin"
  | "blister"
  | "tournament-cap"

interface PricingData {
  low?: number;
  mid?: number;
  high?: number;
  currency?: string;
}

interface ProductVariant {
  id: string;
  name: string;
  region?: string;
  image?: string;
}
```

## Coverage

- **All sets**: Base Set (1999) through Scarlet & Violet (2026+)
- **~500-1000 products** total
- **Detailed data**: pricing, images, variants, release dates

## Product Types Per Set

| Product | Pack Count | Type |
|---------|------------|------|
| Booster Box | 36 | `booster-box` |
| Elite Trainer Box | 8 | `elite-trainer-box` |
| Pre-release Box | 4 | `prerelease` |
| Collection Box | ~18-24 | `collection` |
| Tournament Cap | 1 | `tournament-cap` |
| Blister Pack | 1 | `blister` |
| Tin | 4 | `tin` |

## Products + Pull Rates Integration

Products inherit pull rates from their parent set, scaled to pack count:

```
GET /products/{id}/pull-rates
  → Returns: set.pullRates × (product.packCount / set.basePackCount)
```

Example: Booster Box (36 packs) vs ETB (8 packs)

| Product | V Typical | VMAX Typical |
|---------|----------|------------|
| ETB (8) | 3-4 | 1 |
| Booster Box (36) | 15 | 4 |

## Example Response

```json
{
  "id": "sv11-booster-box",
  "name": "Booster Box",
  "setId": "sv11",
  "setName": "Lost Origin",
  "type": "booster-box",
  "packCount": 36,
  "pricing": {
    "tcgplayer": { "low": 140, "mid": 160, "high": 180, "currency": "USD" },
    "cardmarket": { "avg": 155 }
  },
  "source": "tcgplayer",
  "releaseDate": "2022-09-09",
  "pullRates": {
    "rare": { "v": "1/8", "vmax": "1/25" },
    "boxOdds": { "v": { "min": 9, "typical": 15, "max": 18 } }
  }
}
```

## Workstream

| Task | Description | Priority |
|------|-------------|----------|
| PR1.1 | Design product database schema | P0 |
| PR1.2 | Add product data for all sets (~500-1000 products) | P0 |
| PR1.3 | Create REST endpoints | P0 |
| PR1.4 | Link pull rates scaling | P0 |
| PR1.5 | Add pricing providers (tcgplayer, cardmarket) | P0 |
| PR1.6 | GraphQL integration | P1 |
| PR1.7 | Update SDKs | P1 |

## Related Features

- [Pull Rates](./pull-rates.md) - Products inherit pull rates, scaled to pack count
- [Pricing Restructure](./pricing-restructure.md) - Uses same provider format