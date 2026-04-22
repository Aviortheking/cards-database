# Small Changes

Minor schema changes and additions for v3.

## Language Codes

| v2 | v3 |
|---|-----|
| `en` | `en-us` |
| `fr` | `fr-fr` |
| `es` | `es-es` |
| `de` | `de-de` |
| `it` | `it-it` |
| `pt` | `pt-br` |
| `ja` | `ja-jp` |
| `ko` | `ko-kr` |
| `zh` | `zh-hans` |

## Unified IDs

```
attack:psycic-blaster
ability:pokemon-power
type:pokemon-card
rarity:ultra-rare
energy-type:fire
illustrator:ayaka
stage:legend
```

## New Card Fields

```typescript
setNumber: number;
thirdPartyIds?: {
  cardmarket?: string;
  tcgplayer?: string;
};
```

Image resolution: `low` | `high` | `original`

## Set Migration

| Set | → Variant | Parent |
|-----|----------|--------|
| Jumbo | `jumbo` | base1 |
| W Promotional | `wpromo` | base1 |
| RC (Black & White) | `radiant-collection` | legendary-treasures |

## LEGEND Stage Fix

```json
// v2: "Palkia LEGEND"
// v3: { "name": "Palkia", "stage": "legend" }
```

## Dex ID Sorting

```
// v2: 1, 10, 100, 11, 2 (lexicographic)
// v3: 1, 2, 3, 10, 11 (numeric)
```