# v3 Features

New and modified features for TCGdex API v3.

## Core Features

| Feature | Description |
|---------|-------------|
| [API Keys](./api-keys.md) | Authentication with higher rate limits |
| [Rate Limiting](./rate-limiting.md) | Fair usage across users (60/min unauthenticated) |

## New Features

| Feature | Description |
|---------|-------------|
| [intl Language](./intl-language.md) | Fetch all translations in single request |
| [Card Detection](./card-detection.md) | Self-hosted card identification |
| [Historical Pricing](./historical-pricing.md) | Access 6 months pricing history |
| [GraphQL](./graphql.md) | Complete GraphQL redesign |

## Data Changes

| Feature | Description |
|---------|-------------|
| [Pricing Restructure](./pricing-restructure.md) | Pricing moved to variants |
| [New Card Fields](./new-card-fields.md) | setNumber, thirdPartyIds, etc. |

## Breaking Changes

| Feature | Description |
|---------|-------------|
| [Multiple Illustrators](./multiple-illustrators.md) | Array instead of string |
| [LEGEND Stage](./legend-stage.md) | Stage field instead of suffix |
| [Set Migration](./set-migration.md) | Deprecated sets → variants |

## Small Changes

Minor schema changes:
- [Language Codes](./small-changes.md#language-codes) - `fr` → `fr-fr`
- [Unified IDs](./small-changes.md#unified-ids) - `attack:fire-ball` format
- [Set Migration](./small-changes.md#set-migration) - Deprecated sets → variants
- LEGEND stage fix
- Pull-rate types
- Dex ID sorting
