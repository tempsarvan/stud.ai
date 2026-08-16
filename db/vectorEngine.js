/**
 * stud.io Local Vector Engine (TF-IDF & Cosine Similarity for Semantic Search & Notes Analysis)
 */
class StudioVectorEngine {
  constructor() {
    this.documents = [];
    this.vocabulary = new Set();
  }

  tokenize(text) {
    if (!text) return [];
    return text.toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 2);
  }

  calculateTF(tokens) {
    const tf = {};
    const total = tokens.length || 1;
    tokens.forEach(term => {
      tf[term] = (tf[term] || 0) + 1;
    });
    for (let term in tf) {
      tf[term] /= total;
    }
    return tf;
  }

  cosineSimilarity(vecA, vecB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    const allKeys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);

    allKeys.forEach(key => {
      const valA = vecA[key] || 0;
      const valB = vecB[key] || 0;
      dotProduct += valA * valB;
      normA += valA * valA;
      normB += valB * valB;
    });

    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  compareTexts(text1, text2) {
    const tokens1 = this.tokenize(text1);
    const tokens2 = this.tokenize(text2);

    const tf1 = this.calculateTF(tokens1);
    const tf2 = this.calculateTF(tokens2);

    const similarity = this.cosineSimilarity(tf1, tf2);

    // Identify key terms in text2 (gold standard) missing from text1
    const missingTerms = tokens2.filter(t => !tokens1.includes(t));
    const uniqueMissing = [...new Set(missingTerms)];

    return {
      similarityScore: Math.round(similarity * 100),
      matchedWords: tokens1.filter(t => tokens2.includes(t)).length,
      missingTerms: uniqueMissing.slice(0, 5)
    };
  }
}

window.studioVectorEngine = new StudioVectorEngine();
