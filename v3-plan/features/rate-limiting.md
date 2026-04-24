# Rate Limiting

API rate limiting limits abuses in the API

## Access tiers

| Tier            | Requests/min | Image detection |
| --------------- | ------------ | --------------- |
| Unauthenticated | 600  (10/s)  | n/a             |
| Free            | 2400 (40/s)  | -200requests/r  |
| Paying          | 6000 (100/s) | -200requests/r  |

## Headers

Rate limiting follows the standards at https://www.ietf.org/archive/id/draft-polli-ratelimit-headers-02.html

```http
X-RateLimit-Limit: 2400
X-RateLimit-Remaining: 1685
X-RateLimit-Reset: 1713782400
```

## Implementation

- Per-APIKey    rate limiting (API key users)
- Per-IPAddress rate limiting (unauthenticated)
