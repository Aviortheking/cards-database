# Unified ID System

All entities now have unique IDs for better referencing.

## ID Format

```
{entity-type}:{unique-id}
```

## Entities with IDs

| Entity | ID Example |
|--------|------------|
| Attack | `attack:psycic-blaster` |
| Ability | `ability:pokemon-power` |
| Type | `type:pokemon-card` |
| Rarity | `rarity:ultra-rare` |
| Energy Type | `energy-type:fire` |
| Illustrator | `illustrator:ayaka` |
| Stage | `stage:legend` |

## Examples

```json
{
  "id": "base1-1",
  "attacks": [
    {
      "id": "attack:psycic-blaster",
      "name": "Psyshic Blaster",
      "damage": "80",
      "cost": ["psychic", "psychic", "psychic"]
    }
  ],
  "abilities": [
    {
      "id": "ability:protean",
      "name": "Protean",
      "effect": "When this Pokemon..."
    }
  ],
  "types": ["type:pokemon-card"],
  "rarity": "rarity:ultra-rare"
}
```