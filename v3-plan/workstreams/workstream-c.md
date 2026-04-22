# Workstream C: Card Detection (Self-Hosted)

## 5.1 Model Architecture

| Task | Description |
|------|-------------|
| C1.1 | Design detection pipeline |
| C1.2 | Plan YOLOv8 training |
| C1.3 | Plan CLIP + FAISS setup |

### Detection Pipeline

```
Image Input
    │
    ▼
┌─────────────┐
│  YOLOv8     │  ← Object detection (bounding boxes)
│  Detector    │
└─────────────┘
    │
    ▼ (crops)
┌─────────────┐
│   CLIP      │  ← Generate embeddings
│ Embeddings  │
└─────────────┘
    │
    ▼ (vectors)
┌─────────────┐
│   FAISS     │  ← Nearest neighbor search
│   Index     │
└─────────────┘
    │
    ▼ (card IDs)
┌─────────────┐
│   TCGdex    │  ← Lookup card details
│    API      │
└─────────────┘
    │
    ▼
Detection Result
```

## 5.2 Model Training

| Task | Description |
|------|-------------|
| C2.1 | Use existing 60k card images |
| C2.2 | Annotate training data (if needed) |
| C2.3 | Train YOLOv8 model |
| C2.4 | Evaluate model accuracy |
| C2.5 | Fine-tune if necessary |
| C2.6 | Export model weights |

### Training Data Summary

- **Available**: ~60,000 card images
- **Format**: JPG/PNG
- **BackupSource**: eBay (if more needed)
- **Target Accuracy**: 95%+

## 5.3 CLIP + FAISS Index

| Task | Description |
|------|-------------|
| C3.1 | Generate CLIP embeddings for all cards |
| C3.2 | Build FAISS index |
| C3.3 | Optimize index for search speed |
| C3.4 | Add index update mechanism |

## 5.4 Inference Server

| Task | Description | Priority |
|------|-------------|----------|
| C4.1 | Create dedicated inference server | P0 |
| C4.2 | Implement image preprocessing | P0 |
| C4.3 | Implement batch inference | P1 |
| C4.4 | Add GPU acceleration support | P1 |
| C4.5 | Add model hot-reload | P1 |
| C4.6 | Configure server scaling | P1 |

### Inference Server Architecture

```
┌────────────────────────────────────────────┐
│         INFERENCE SERVER                   │
├────────────────────────────────────────────┤
│                                            │
│  ┌─────────────┐     ┌─────────────┐       │
│  │   FastAPI   │────►│  YOLOv8     │       │
│  │   Service   │     │  Runner     │       │
│  └─────────────┘     └─────────────┘       │
│         │                    │             │
│         │              ┌────┴────┐         │
│         │              │ CLIP    │         │
│         │              │ Engine  │         │
│         │              └────┬────┘         │
│         │                   │              │
│         │              ┌────┴────┐         │
│         │              │ FAISS   │         │
│         │              │ Index   │         │
│         │              └─────────┘         │
│         │                                  │
│         ▼                                  │
│  ┌─────────────┐                           │
│  │  Response   │                           │
│  │  Writer     │                           │
│  └─────────────┘                           │
│                                            │
└────────────────────────────────────────────┘
```

## 5.5 Detection Endpoint

| Task | Description | Priority |
|------|-------------|----------|
| C5.1 | Create POST `/detect` endpoint | P0 |
| C5.2 | Accept image upload (multipart/form-data) | P0 |
| C5.3 | Accept image URL | P0 |
| C5.4 | Return confidence scores | P0 |
| C5.5 | Handle multiple cards in image | P0 |
| C5.6 | Add language parameter | P1 |

### Detection Endpoint

```
POST /v3/{lang}/detect
Content-Type: multipart/form-data

Body:
  image: <file>
  language?: string (default: en)
  minConfidence?: number (default: 0.8)
```

### Detection Response

```json
{
  "cards": [
    {
      "id": "base1-1",
      "confidence": 0.98,
      "boundingBox": {
        "x": 100,
        "y": 150,
        "width": 200,
        "height": 300
      },
      "card": {
        "name": "Alakazam",
        "set": { " name": "Base Set" },
        "image": "https://assets.tcgdex.net/en/base/base1/1"
      }
    }
  ]
}
```
