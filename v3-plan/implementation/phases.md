# Implementation Phases

## Phase 1: Preparation (Weeks 1-2)

- [ ] Finalize OpenAPI v3 schemas
- [ ] Design API Key + Rate Limiting architecture
- [ ] Plan card detection model training
- [ ] Audit all v2 deprecated fields
- [ ] Set up development environment

**Deliverables:**
- [ ] OpenAPI v3 draft specification
- [ ] API Key architecture document
- [ ] Training data audit complete

---

## Phase 2: Core Development (Weeks 3-8)

- [ ] Create v3 endpoints
- [ ] Implement pricing restructure
- [ ] Build GraphQL v3 schema
- [ ] Add API Keys + Rate Limiting
- [ ] Build card detection inference server
- [ ] Add data fixes (D2.1-D2.7)

**Deliverables:**
- [ ] Working v3 API preview
- [ ] GraphQL v3 playground
- [ ] Card detection endpoint

---

## Phase 3: Card Detection (Weeks 6-10)

- [ ] Train YOLOv8 model
- [ ] Build FAISS index
- [ ] Create inference server
- [ ] Expose `/detect` endpoint

**Deliverables:**
- [ ] Trained model (95%+ accuracy)
- [ ] FAISS index
- [ ] `/detect` endpoint live

---

## Phase 4: Testing & Polish (Weeks 11-12)

- [ ] Integration testing
- [ ] Load testing
- [ ] Documentation updates
- [ ] Migration guides
- [ ] SDK updates

**Deliverables:**
- [ ] Test report
- [ ] Updated documentation
- [ ] Migration guide for users
- [ ] SDKs updated

---

## Phase 5: Release (Week 13+)

- [ ] Deploy v3 to production
- [ ] Monitor metrics
- [ ] Announce deprecation of v2
- [ ] Set up v2 usage tracking
- [ ] Gradual user migration

**Deliverables:**
- [ ] v3 in production
- [ ] Deprecation announcement
- [ ] Usage dashboard

---

## Deprecation Timeline

```
┌─────────────────────────────────────────────────────────────────┐
│                     v2 DEPRECATION TIMELINE                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  v3 Launch ────────► Monitor ───────────► Deprecate ───────────► Remove │
│      │                │                    │                  │         │
│      │                │                    │                  │         │
│      └────────────────┴────────────────────┘                  │
│      (full support)        (fixes only)           (final)        │
│                                                                 │
│   Expected: 3-6 months                                           │
└─────────────────────────────────────────────────────────────────┘
```

### Deprecation Milestones

1. **v3 Launch** - v2 remains fully functional
2. **Month 1-2** - Monitor usage patterns
3. **Month 3** - Announce deprecation
4. **Month 4-5** - v2 receives only critical fixes
5. **Month 6+** - Remove v2 when usage < 5%