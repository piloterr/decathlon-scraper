// Decathlon Product API – Node.js example (Node 18+, native fetch, ES module)
// Usage: PILOTERR_API_KEY=your-key node product.mjs

const params = new URLSearchParams({
  "query": "https://www.decathlon.fr/p/gourde-alu-1l-avec-bouchon-instantane-composee-a-100percent-dalu-recycle-bleu/330041/c98m8612536",
});

const response = await fetch(`https://api.piloterr.com/v2/decathlon/product?${params}`, {
  headers: { "x-api-key": process.env.PILOTERR_API_KEY },
  signal: AbortSignal.timeout(120_000),
});

if (!response.ok) {
  console.error(`Piloterr error ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
