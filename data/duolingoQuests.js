/**
 * stud.io Duolingo-Style Quest Map & Gamified Quiz Database
 */
window.STUDIO_DUOLINGO_DB = {
  levels: [
    { id: "node_1", title: "Chapter 1: Foundational Core", type: "start", xp: 50, icon: "🎯", status: "unlocked" },
    { id: "node_2", title: "Speed Round: Formula Sprint", type: "quiz", xp: 75, icon: "⚡", status: "locked" },
    { id: "node_3", title: "Audio Match: Listening Challenge", type: "audio", xp: 100, icon: "🎧", status: "locked" },
    { id: "node_4", title: "Drag & Drop: Diagram Assembly", type: "interactive", xp: 125, icon: "🧩", status: "locked" },
    { id: "node_5", title: "Boss Battle: Past Paper Trap", type: "boss", xp: 200, icon: "👑", status: "locked" }
  ],

  quizBank: {
    node_1: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "What is the Ratio Test condition for absolute convergence of a power series ∑ a_n?",
        options: [
          "lim |a_{n+1} / a_n| < 1",
          "lim |a_{n+1} / a_n| > 1",
          "lim |a_{n+1} / a_n| = 1",
          "lim a_n = 0"
        ],
        correct: 0,
        explanation: "If L < 1, the series converges absolutely. If L > 1, it diverges. If L = 1, the test is inconclusive."
      },
      {
        id: "q2",
        type: "true_false",
        question: "True or False: If the Ratio Test yields L = 1, the series is guaranteed to diverge.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False! When L = 1, the test is INCONCLUSIVE. You must use p-series, harmonic test, or comparison tests."
      }
    ],
    node_2: [
      {
        id: "q3",
        type: "audio_card",
        question: "Listen to the audio clip and select the correct formula spoken:",
        audioSnippet: "Taylor polynomial formula centered at c...",
        options: [
          "f(c) + f'(c)(x-c) + f''(c)/2! (x-c)^2 + ...",
          "f(x) + f'(x) + f''(x)",
          "1 / (1 - x)",
          "int f(x) dx"
        ],
        correct: 0,
        explanation: "Correct! The Taylor polynomial terms are f^(n)(c) / n! * (x-c)^n."
      }
    ],
    node_3: [
      {
        id: "q4",
        type: "drag_drop",
        question: "Match the formula components to their meaning in Lagrange Error Bound:",
        pairs: [
          { left: "|R_n(x)|", right: "Maximum Remainder / Error" },
          { left: "M", right: "Max value of |f^(n+1)(z)| on interval" },
          { left: "(n+1)!", right: "Factorial denominator" }
        ]
      }
    ]
  }
};
