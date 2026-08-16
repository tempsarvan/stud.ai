/**
 * stud.io Feynman Technique AI Student Mentor Agent
 */
class FeynmanAgent {
  evaluateExplanation(conceptTitle, studentText) {
    if (!studentText || studentText.length < 15) {
      return {
        rating: "Needs Work ⚠️",
        score: 40,
        feedback: "Your explanation is too brief. Try explaining the concept step-by-step as if teaching a 12-year-old.",
        jargonDetected: [],
        missingConcepts: ["Step-by-step breakdown", "Analogy / Real-world example"]
      };
    }

    const lower = studentText.toLowerCase();
    const jargonList = ["orthogonal", "eigenvector", "isomorphic", "thermodynamic", "electrophilic", "polynomial", "derivative"];
    
    const detectedJargon = jargonList.filter(j => lower.includes(j));
    const wordCount = studentText.split(/\s+/).length;

    let score = 85;
    if (detectedJargon.length > 2) score -= 15;
    if (wordCount > 100) score += 10;

    score = Math.min(98, Math.max(50, score));

    return {
      rating: score > 80 ? "Mastery! 🌟" : "Good Progress 👍",
      score,
      feedback: detectedJargon.length > 0 ? 
        `Great explanation! However, try replacing technical jargon terms (${detectedJargon.join(", ")}) with simpler everyday words to prove 100% conceptual mastery.` :
        "Outstanding! You explained this concept cleanly without relying on confusing jargon. Great job!",
      jargonDetected: detectedJargon,
      missingConcepts: score < 80 ? ["Simple real-world analogy"] : []
    };
  }
}

window.feynmanAgent = new FeynmanAgent();
