#!/usr/bin/env bash
# Decathlon Product API – cURL example
# Usage: PILOTERR_API_KEY=your-key ./product.sh
set -euo pipefail

curl -sS --fail-with-body -G "https://api.piloterr.com/v2/decathlon/product" \
  -H "x-api-key: ${PILOTERR_API_KEY}" \
  --data-urlencode query=https://www.decathlon.fr/p/gourde-alu-1l-avec-bouchon-instantane-composee-a-100percent-dalu-recycle-bleu/330041/c98m8612536
