# Workstream D: Performance & Data Fixes

## 6.1 Performance Improvements

| Task | Description | Issue Ref | Priority |
|------|-------------|-----------|----------|
| D1.1 | Improve compile time | #1106 | P0 |
| D1.2 | Add parallel compilation | #1106 | P1 |
| D1.3 | Optimize JSON structure | - | P1 |
| D1.4 | Improve query engine | - | P1 |
| D1.5 | Enhance caching strategy | - | P0 |

### Compile Time Improvements

- Parallel file processing
- Optimized JSON structure
- Incremental compilation
- Build caching

## 6.2 Data Fixes

| Task | Description | Issue Ref |
|------|-------------|----------|
| D2.1 | Fix Dex ID numeric sort (not lexicographic) | #997 |
| D2.2 | Fix variant structure for thirdParty IDs | #1392 |
| D2.3 | Fix support for second ability on Pokémon | #1149 |
| D2.4 | Fix mega evolution evolveFrom field | #1105 |
| D2.5 | Fix XY EX names to include dash | #1183 |
| D2.6 | Add Secret Rare / Special Illustration Rare | #1086 |
| D2.7 | Add pull-rate types and derive rates | #1384 |
| D2.8 | Add multiple illustrators support | #38 |
| D2.9 | Convert LEGEND suffix to stage field | #74 |
| D2.10 | Remove deprecated sets (Jumbo, WPromo, Radiant Collection) | #104 |

### Dex ID Sorting Fix (#997)

**Before (v2)**: Lexicographic (1, 10, 100, 11, 2...)  
**After (v3)**: Numeric (1, 2, 3... 10, 11...)

```typescript
// Sorting comparison
const sortByDexId = (a: number, b: number) => a - b;  // Numeric
const sortByDexId = (a: number, b: number) => 
  String(a).localeCompare(String(b), undefined, { numeric: true }); // Lexicographic
```

### Pull-Rate Types (#1384)

Add derived rates from pull data:

- Pull rates per box
- Pull rates per case
- Odds calculation
- Set distribution statistics

### Multiple Illustrators (#38)

Cards with multiple illustrators now return an array:

```json
{
  "illustrators": [
    { "id": "illustrator:ayaka", "name": "Ayaka" },
    { "id": "illustrator:nurumi", "name": "Nurumi" }
  ]
}
```

### LEGEND Stage Fix (#74)

**Before (v2)**: `"name": "Palkia LEGEND"` (LEGEND as suffix)  
**After (v3)**: `"name": "Palkia"`, `"stage": "legend"` (LEGEND as stage)

```json
{
  "id": "xy12-1",
  "name": "Palkia",
  "stage": "legend"
}
```

### Set Migration (#104)

The following sets are converted to variants in v3:

| Set | New Variant |
|-----|-------------|
| Jumbo | `jumbo` |
| Base W Promotional | `wpromo` |
| Black & White/RC | Radiant Collection variant |

The set endpoint returns these cards under their parent set with variant type indicated.