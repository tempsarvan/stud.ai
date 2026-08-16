/**
 * stud.io 16-Dimensional Student Cognitive Feature Vector Extractor
 */
class NeuroFeatureVector {
  constructor() {
    this.vector = {
      visualAccuracy: 0.85,
      auditoryRetention: 0.90,
      interactiveSpeedMs: 1200,
      notesConfusionDensity: 0.15,
      forgettingDecayRate: 0.05,
      peakFocusHour: 10,
      errorRecoveryRate: 0.75,
      quizPreferenceRatio: 0.60,
      leitnerSuccessRate: 0.82,
      feynmanJargonScore: 0.30,
      blurtingPrecision: 0.78,
      pomodoroSessionStreak: 4,
      streakMultiplier: 1.2,
      difficultyTolerance: 0.8,
      bossBattleWinRate: 0.9,
      dailyMinutesLogged: 45
    };
  }

  updateFromQuiz(isCorrect, responseTimeMs, cardType) {
    if (cardType === "audio") {
      this.vector.auditoryRetention = isCorrect ? Math.min(1.0, this.vector.auditoryRetention + 0.05) : Math.max(0.0, this.vector.auditoryRetention - 0.08);
    } else {
      this.vector.visualAccuracy = isCorrect ? Math.min(1.0, this.vector.visualAccuracy + 0.05) : Math.max(0.0, this.vector.visualAccuracy - 0.08);
    }

    this.vector.interactiveSpeedMs = Math.round((this.vector.interactiveSpeedMs + responseTimeMs) / 2);
  }

  updateFromNotes(confusionCount, totalWords) {
    if (totalWords > 0) {
      this.vector.notesConfusionDensity = Number((confusionCount / totalWords).toFixed(2));
    }
  }

  getNormalizedVector() {
    return [
      this.vector.visualAccuracy,
      this.vector.auditoryRetention,
      Math.min(1.0, this.vector.interactiveSpeedMs / 5000),
      this.vector.notesConfusionDensity,
      this.vector.forgettingDecayRate,
      this.vector.peakFocusHour / 24,
      this.vector.errorRecoveryRate,
      this.vector.quizPreferenceRatio,
      this.vector.leitnerSuccessRate,
      this.vector.feynmanJargonScore,
      this.vector.blurtingPrecision,
      Math.min(1.0, this.vector.pomodoroSessionStreak / 10),
      this.vector.streakMultiplier / 2,
      this.vector.difficultyTolerance,
      this.vector.bossBattleWinRate,
      Math.min(1.0, this.vector.dailyMinutesLogged / 180)
    ];
  }
}

window.neuroFeatureVector = new NeuroFeatureVector();
