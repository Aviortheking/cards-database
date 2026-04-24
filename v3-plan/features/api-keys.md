# API Keys

API keys enable authenticated access with higher rate limits.

## Features

- Optional (graceful adoption)
- Per-key rate limits
- Usage tracking
- Expiration dates
- Key rotation support

## Structure

```typescript
interface ApiKey {
  id: string;
  key: string;
  tier: 'free' | 'basic' | 'pro' | 'enterprise';
  rateLimit: number;
  createdAt: Date;
  expiresAt: Date;
  usage: {
    requests: number;
    lastUsed: Date;
  };
}
```

## Management

- Key generation mechanism
- Key storage (Redis + JWT for master)
- Key validation middleware
- Admin dashboard endpoints
