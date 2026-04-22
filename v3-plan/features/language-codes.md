# Language Code Migration

Language codes now use ISO locale format (e.g., `fr-fr` instead of `fr`).

## Mapping

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

## Endpoint Migration

```
# v2
GET /v2/fr/cards/base1-1

# v3
GET /v3/fr-fr/cards/base1-1
```

## Backwards Compatibility

- Optional backwards compatibility for old short codes (P1)