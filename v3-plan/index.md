# TCGdex API v3 Implementation Plan

> Version: 1.0.2  
> Last updated: April 2026  
> Status: Planned

---

## Executive Summary

This document outlines the implementation plan for TCGdex API v3, a major breaking release that introduces significant architectural changes, new features, and performance improvements while deprecating v2.

### Key Objectives

1. **Breaking Changes**: Clean up deprecated fields and restructure APIs
2. **Pricing Upgrade**: Move pricing to variants, add historical data, enhance providers
3. **New Features**: Card detection, extended filters, GraphQL improvements
4. **Infrastructure**: Add API Keys, Rate Limiting, dedicated inference server
5. **Performance**: Improve compile times, caching, query optimization
6. **SDK Updates**: Update existing SDKs and add new C# SDK
7. **Language Codes**: Migrate from `fr` to `fr-fr` (ISO locale format)
8. **ID System**: Unified IDs for attacks, types, abilities, etc.

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | April 2026 | Initial v3 plan |
| 1.0.1 | April 2026 | Added intl language support |
| 1.0.2 | April 2026 | Added ISO language codes + ID system + milestone issues |
| 1.0.3 | April 2026 | Added Pull Rates feature |
| 1.0.4 | April 2026 | Added Products feature |

---

## Workstreams

The implementation is organized into 5 parallel workstreams:

```
┌──────────────────────────────────────────────────┐
│                    v3 IMPLEMENTATION             │
├──────────────────────────────────────────────────┤
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │ Workstream │  │ Workstream │  │ Workstream │  │
│  │     A      │  │     B      │  │     C      │  │
│  │────────────│  │────────────│  │────────────│  │
│  │ Schemas &  │  │  Pricing   │  │  Card      │  │
│  │ Endpoints  │  │  Upgrade   │  │ Detection  │  │
│  │  + GraphQL │  │            │  │            │  │
│  └────────────┘  └────────────┘  └────────────┘  │
│                                                  │
│  ┌────────────┐  ┌────────────┐                  │
│  │ Workstream │  │ Workstream │                  │
│  │     D      │  │     E      │                  │
│  │────────────│  │────────────│                  │
│  │Performance │  │   SDK      │                  │
│  │  + Fixes   │  │  Updates   │                  │
│  └────────────┘  └────────────┘                  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │       Phase 5: Release & Deprecation       │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### Workstream Summary

| Workstream | Focus | Priority |
|-----------|-------|----------|
| A | Schemas, Endpoints & GraphQL v3 | P0 |
| B | Pricing Upgrade | P0 |
| C | Card Detection (Self-Hosted) | P0 |
| D | Performance & Data Fixes | P0 |
| E | SDK Updates | P1 |

---

## Project Structure

```
v3-plan/
├── index.md                    # This file
├── workstreams/
│   ├── workstream-a.md        # Schemas, Endpoints & GraphQL v3
│   ├── workstream-b.md        # Pricing Upgrade
│   ├── workstream-c.md        # Card Detection
│   ├── workstream-d.md        # Performance & Data Fixes
│   └── workstream-e.md        # SDK Updates
├── architecture/
│   ├── system-architecture.md # Master/Edge server architecture
│   └── tech-stack.md         # Technology choices
├── implementation/
│   └── phases.md            # Implementation phases & timelines
└── reference/
    ├── issues.md           # Related GitHub issues
    └── breaking-changes.md # Breaking changes & migration
```

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────────────────────────┐
│                         v3 SERVER CLUSTER                                  │
├────────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────────────────────────────────┐                │
│  │              MASTER SERVER                        │                │
│  │  ┌─────────────┐  ┌───────────────────────────┐   │                │
│  │  │   Write     │  │      Sync Engine          │   │                │
│  │  │   API       │  │   (broadcast to edges)    │   │                │
│  │  └─────────────┘  └───────────────────────────┘   │                │
│  └───────────────────────────────────────────────────┘                │
│                          │ Sync (write)                             │
│    ┌─────────────────────┼─────────────────────┐                  │
│    ▼                   ▼                   ▼                              │
│ ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐   │
│ │  Edge    │     │  Edge    │     │  Edge    │     │  Edge    │   │
│ │ Server   │     │ Server   │     │ Server   │     │ Server   │   │
│ │  (US)    │     │  (EU)    │     │ (ASIA)   │     │(LATAM)   │   │
│ └──────────┘     └──────────┘     └──────────┘     └──────────┘   │
│        │               │               │               │               │
│        └───────────────┴───────────────┴───────────────┘               │
│                      │                                           │
│              Card Detection Proxy                               │
│                      ▼                                           │
│         ┌─────────────────────┐                              │
│         │ Inference Server    │                              │
│         └─────────────────────┘                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Phases

| Phase | Timeline | Focus |
|-------|-----------|-------|
| 1 | Weeks 1-2 | Preparation |
| 2 | Weeks 3-8 | Core Development |
| 3 | Weeks 6-10 | Card Detection |
| 4 | Weeks 11-12 | Testing & Polish |
| 5 | Week 13+ | Release & Deprecation |

See [implementation/phases.md](./implementation/phases.md) for details.

---

## Breaking Changes

| # | Change | Migration |
|---|--------|-----------|
| 1 | Pricing moved from card root to variants only | Update client to access `card.variants[n].pricing` |
| 2 | Endpoints moved from `/v2/` to `/v3/` | Update base URL |
| 3 | GraphQL schema changes (Brief/Full removed) | Update queries |
| 4 | API Key required (optional initially) | No action needed yet |
| 5 | Language codes migrate `fr` → `fr-fr` (ISO format) | Update API calls to use full locale codes |
| 6 | Unified ID system for attacks, types, abilities, etc. | Update clients to use new ID fields |

See [reference/breaking-changes.md](./reference/breaking-changes.md) for migration guide.

---

## Related Issues

See [reference/issues.md](./reference/issues.md) for all GitHub issues addressed in v3.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | April 2026 | Initial plan |
| 1.0.1 | April 2026 | Added intl language support |

---

*This document will be updated as implementation progresses.*
