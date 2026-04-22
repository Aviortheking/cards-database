# International Language (intl)

Fetch data from all available translations in a single request.

## Usage

```
GET /v3/intl/cards/base1-1
```

## Response Format

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

## Behavior

- Returns only languages that have data available for each card
- If a translation doesn't exist, that language key will be omitted

## GraphQL Support

```graphql
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