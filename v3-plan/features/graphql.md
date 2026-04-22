# GraphQL v3

Complete redesign of the GraphQL schema.

## Changes

- New GraphQL schema from scratch
- Multi-lang support (locales object)
- Remove Brief/Full object structure
- Top-down and bottom-up searching
- Full filtering support
- Pagination to all list queries
- Future subscriptions support

## Example Queries

```graphql
# Multi-lang support
query {
  cards(filters: { id: "eq:base1-1" }) {
    id
    locales(langs: ["en", "fr", "de"]) {
      lang
      name
      attacks {
        name
        damage
        effect
        cost
      }
      description
    }
  }
}

# Using intl
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

## Features

- Full filtering support in GraphQL
- Pagination to all list queries
- Subscriptions for future updates