/**
 * stud.io Leitner 5-Box Active Recall Preset Decks
 */
window.STUDIO_FLASHCARDS_DB = [
  {
    id: "fc_1",
    subject: "Calculus & Analysis",
    topic: "Taylor & Power Series",
    box: 1,
    question: "What is the Maclaurin series expansion for e^x?",
    answer: "∑_{n=0}^∞ \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots \\quad (\\text{Converges for all } x \\in \\mathbb{R})"
  },
  {
    id: "fc_2",
    subject: "Calculus & Analysis",
    topic: "Taylor & Power Series",
    box: 1,
    question: "What is the Maclaurin series expansion for sin(x)?",
    answer: "∑_{n=0}^∞ (-1)^n \\frac{x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots"
  },
  {
    id: "fc_3",
    subject: "Physics & Optics",
    topic: "Ray Optics",
    box: 2,
    question: "State Lens Maker's Formula and define all terms.",
    answer: "1/f = (μ - 1)(1/R1 - 1/R2), where f is focal length, μ is relative refractive index, R1 & R2 are radii of curvature of the two surfaces."
  },
  {
    id: "fc_4",
    subject: "Physics & Magnetism",
    topic: "Electromagnetism",
    box: 3,
    question: "What is Biot-Savart Law for magnetic field due to a current element?",
    answer: "dB = (μ_0 / 4π) · (I dl sin θ / r^2). Direction given by Right Hand Thumb Rule."
  },
  {
    id: "fc_5",
    subject: "Organic Chemistry",
    topic: "Reactions & Mechanisms",
    box: 4,
    question: "What is the difference between SN1 and SN2 nucleophilic substitution mechanisms?",
    answer: "SN1 is two-step via carbocation intermediate (racemization, favored by tertiary halides). SN2 is one-step concerted via transition state (inversion of configuration, favored by primary halides)."
  }
];
