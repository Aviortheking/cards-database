# Rate Limiting

API rate limiting ensures fair usage across all users.

## Unauthenticated Access

Users can access the API without an API key:

| Limit | Value |
|-------|-------|
| Requests/minute | 60 |
| Endpoints | GET only |

## Authenticated Access (With API Key)

| Tier | Requests/min | Endpoints |
|------|--------------|-----------|
| Free | 100 | GET only |
| Basic | 500 | All |
| Pro | 2000 | All |
| Enterprise | 10000 | All |

## Headers

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1713782400
```

## Implementation

- Token bucket or sliding window strategy
- Per-user rate limiting (unauthenticated)
- Per-key rate limiting (API key users)
- Configurable limits via admin interface