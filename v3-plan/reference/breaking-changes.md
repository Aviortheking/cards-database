# Breaking Changes

| # | Change | Migration |
|---|--------|-----------|
| 1 | Pricing moved from card root to variants only | Update client to access `card.variants[n].pricing` |
| 2 | Endpoints moved from `/v2/` to `/v3/` | Update base URL |
| 3 | GraphQL schema changes (Brief/Full removed) | Update queries |
| 4 | API Key required (optional initially) | No action needed yet |
| 5 | Language codes migrate `fr` → `fr-fr` (ISO format) | Update API calls to use full locale codes |
| 6 | Unified ID system for attacks, types, abilities, etc. | Update clients to use new ID fields |
| 7 | Multiple illustrators now returns array | Update code to handle array |
| 8 | LEGEND now uses `stage` field instead of name suffix | Use `stage: "legend"` field |
| 9 | Deprecated sets removed → converted to variants | Access via parent set with variant |

---

## Migration Guide

### Pricing Migration

```typescript
// v2
const price = card.pricing?.tcgplayer?.normal?.mid;

// v3
const price = card.variants?.find(v => v.type === 'normal')?.pricing?.tcgplayer?.normal?.mid;
```

### Base URL Migration

```typescript
// v2
const client = new TCGdexClient('en');

// v3
const client = new TCGdexClient('en', { baseUrl: 'https://api.tcgdex.dev/v3' });
```

### GraphQL Migration

```graphql
# v2
query {
  card(id: "base1-1") {
    id
    name {
      en
      fr
    }
  }
}

# v3 (using locales object)
query {
  card(id: "base1-1") {
    id
    locales(langs: ["en", "fr"]) {
      lang
      name
    }
  }
}

# v3 or using intl
query {
  card(id: "base1-1", lang: "intl") {
    id
    name
  }
}
```

### Language Code Migration

```typescript
// v2
const client = new TCGdexClient('fr');

// v3 (ISO format)
const client = new TCGdexClient('fr-fr');
```

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

### ID System Migration

```json
// v2
{
  "attacks": [
    { "name": "Psyshic Blaster" }
  ]
}

// v3
{
  "attacks": [
    {
      "id": "attack:psycic-blaster",
      "name": "Psyshic Blaster"
    }
  ]
}
```

- Attacks now have `id` field: `attack:fire-ball`
- Abilities now have `id` field: `ability:pokemon-power`
- Types now have `id` field: `type:pokemon-card`
- Rarities now have `id` field: `rarity:ultra-rare`
- Illustrators now have `id` field: `illustrator:ayaka`
- Stages now have `id` field: `stage:legend`

### Multiple Illustrators Migration

```json
// v2
{ "illustrator": "Ayaka" }

// v3
{ "illustrators": [{ "id": "illustrator:ayaka", "name": "Ayaka" }] }
```

```json
// v2 (multiple artists)
{ "illustrator": "Ayaka & Nurumi" }

// v3 (multiple artists)
{
  "illustrators": [
    { "id": "illustrator:ayaka", "name": "Ayaka" },
    { "id": "illustrator:nurumi", "name": "Nurumi" }
  ]
}
```

### LEGEND Stage Migration

```json
// v2
{ "name": "Palkia LEGEND" }

// v3
{ "name": "Palkia", "stage": "legend", "stageId": "stage:legend" }
```

### Set Migration

```json
// v2 - Separate set endpoint
GET /v2/en/sets/jumbo

// v3 - Access via parent set with variant
GET /v3/en/cards/base1-1?variant=jumbo
```

---

## Testing Strategy

### Test Coverage

| Test Type | Target |
|-----------|--------|
| Unit Tests | 80%+ coverage |
| Integration Tests | All endpoints |
| E2E Tests | Critical paths |
| Load Tests | 10k RPS |

### Test Environments

| Environment | Purpose |
|-------------|---------|
| Development | Local development |
| Staging | Pre-production testing |
| Production | Live traffic |

---

## Monitoring

### Key Metrics

| Metric | Target |
|--------|--------|
| API Response Time | < 100ms (p50) |
| Error Rate | < 0.1% |
| Uptime | 99.9% |
| Card Detection Accuracy | 95%+ |

### Monitoring Tools

- [ ] Sentry (error tracking)
- [ ] Custom metrics dashboard
- [ ] Usage analytics
- [ ] Rate limit monitoring