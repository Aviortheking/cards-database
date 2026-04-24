# Technology Stack

| Component       | Technology                  | Notes                           |
| --------------- | --------------------------- | ------------------------------- |
| Master Server   | Astro + Bun                 | Management interface            |
| Edge Servers    | Express + Bun               | Current v2 + L0 cache           |
| GraphQL         | GraphQL-HTTP                | Current v2                      |
| Card Detection  | YOLOv8 + CLIP               | NEW                             |
| Vector Search   | FAISS                       | NEW                             |
| Rate Limiting   | Redis/Bucket (per edge)     | NEW                             |
| API Keys        | Redis + JWT (master)        | NEW                             |
| Pricing History | SQLite                      | Local                           |
| Caching         | Cachex (in-memory per edge) | Current v2                      |
| Sync            | WebSocket / Redis PubSub    | NEW                             |

---

## Error Response Format

All errors follow RFC 9457:

```json
{
  "type": "https://tcgdex.dev/errors/not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The requested card could not be found",
  "endpoint": "/v3/en/cards/invalid-id",
  "method": "GET"
}
```
