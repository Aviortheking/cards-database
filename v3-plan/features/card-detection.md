# Card Detection

Self-hosted card detection using YOLOv8 + CLIP + FAISS.

## Architecture

```
Image Input → YOLOv8 (bounding boxes) → CLIP (embeddings) → FAISS (search) → TCGdex API → Results
```

## Model Training

- **Training Data**: ~60,000 card images
- **Target Accuracy**: 95%+
- **Backup Source**: eBay (if more needed)

## Inference Server

- Dedicated server with FastAPI
- GPU acceleration support
- Batch inference
- Model hot-reload

## Detection Endpoint

```
POST /v3/{lang}/detect
Content-Type: multipart/form-data

Body:
  image: <file>
  language?: string (default: en)
  minConfidence?: number (default: 0.8)
```

## Response

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
        "set": { "name": "Base Set" },
        "image": "https://assets.tcgdex.net/en/base/base1/1"
      }
    }
  ]
}
```

## Features

- Multiple cards detection in single image
- Confidence scores
- Bounding box coordinates
- Language parameter support