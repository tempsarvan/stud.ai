/**
 * stud.io Running Notes NLP Confusion & Concept Gap Detector
 */
class NeuroNotesAnalyzer {
  constructor() {
    this.confusionMarkers = ["???", "confused", "hard", "don't get", "unclear", "difficult", "forget", "help"];
  }

  analyzeNotes(noteText, masterTopicText = "") {
    if (!noteText) return { confusionCount: 0, gapScore: 0, patchQuestions: [] };

    const lower = noteText.toLowerCase();
    const words = lower.split(/\s+/);
    
    let confusionCount = 0;
    const detectedTerms = [];

    this.confusionMarkers.forEach(marker => {
      if (lower.includes(marker)) {
        confusionCount++;
        detectedTerms.push(marker);
      }
    });

    // Vector comparison against master syllabus text
    const vectorResult = window.studioVectorEngine ? 
      window.studioVectorEngine.compareTexts(noteText, masterTopicText || "calculus derivatives limit integration ratio test series taylor") : 
      { similarityScore: 70, missingTerms: ["Ratio Test", "Taylor Series"] };

    // Update feature vector
    if (window.neuroFeatureVector) {
      window.neuroFeatureVector.updateFromNotes(confusionCount, words.length);
    }

    // Generate Patch Questions
    const patchQuestions = vectorResult.missingTerms.map((term, idx) => ({
      id: `patch_${Date.now()}_${idx}`,
      type: "multiple_choice",
      question: `[Patch Question from Your Notes]: What is the core application of "${term}"?`,
      options: [
        `Mastering key steps of ${term} in exam problems`,
        `Ignoring ${term} as low yield`,
        `Substituting ${term} with basic algebra`,
        `Calculating general limits without derivatives`
      ],
      correct: 0,
      explanation: `Targeted review generated automatically by NeuroAdapt because your running notes indicated a gap in ${term}.`
    }));

    return {
      confusionCount,
      detectedTerms,
      similarityScore: vectorResult.similarityScore,
      missingTerms: vectorResult.missingTerms,
      patchQuestions
    };
  }
}

window.neuroNotesAnalyzer = new NeuroNotesAnalyzer();
