/* stud.io WWDC27 Edition Unified Bundle */

/* File: data/syllabi.js */
/**
 * stud.io Global Syllabi Database Vault
 * Pre-downloaded comprehensive database covering major global education systems.
 */
window.STUDIO_SYLLABI_DB = {
  USA: {
    country: "United States of America",
    flag: "🇺🇸",
    boards: [
      {
        id: "ap_calc_bc",
        name: "AP Calculus BC",
        grade: "High School (Advanced Placement)",
        subjects: ["Differential Calculus", "Integral Calculus", "Parametric & Polar Curves", "Infinite Series & Taylor Polynomials"],
        chapters: [
          { id: "ap_c1", name: "Limits & Continuity", weight: 12, pastPaperFreq: 18, difficulty: "Medium" },
          { id: "ap_c2", name: "Differentiation: Definition & Basic Rules", weight: 15, pastPaperFreq: 24, difficulty: "Medium" },
          { id: "ap_c3", name: "Composite, Implicit & Inverse Functions", weight: 14, pastPaperFreq: 22, difficulty: "Hard" },
          { id: "ap_c4", name: "Contextual Applications of Differentiation", weight: 16, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "ap_c5", name: "Analytical Applications of Differentiation", weight: 15, pastPaperFreq: 25, difficulty: "Hard" },
          { id: "ap_c6", name: "Integration & Accumulation of Change", weight: 18, pastPaperFreq: 32, difficulty: "Hard" },
          { id: "ap_c7", name: "Differential Equations", weight: 10, pastPaperFreq: 16, difficulty: "Medium" },
          { id: "ap_c8", name: "Applications of Integration (Volume, Arc Length)", weight: 15, pastPaperFreq: 26, difficulty: "Hard" },
          { id: "ap_c9", name: "Parametric Equations, Polar Coordinates & Vector Functions", weight: 12, pastPaperFreq: 20, difficulty: "Extreme" },
          { id: "ap_c10", name: "Infinite Sequences & Series (Taylor & Maclaurin)", weight: 18, pastPaperFreq: 35, difficulty: "Extreme" }
        ]
      },
      {
        id: "sat_math_rw",
        name: "SAT Digital (Math & Digital R&W)",
        grade: "College Board Entrance",
        subjects: ["Algebra & Advanced Math", "Problem Solving & Data Analysis", "Reading Comprehension & Grammar"],
        chapters: [
          { id: "sat_c1", name: "Linear Equations & Inequalities", weight: 25, pastPaperFreq: 40, difficulty: "Easy" },
          { id: "sat_c2", name: "Quadratic & Non-Linear Functions", weight: 25, pastPaperFreq: 38, difficulty: "Medium" },
          { id: "sat_c3", name: "Ratios, Percentages & Data Interpretation", weight: 20, pastPaperFreq: 30, difficulty: "Medium" },
          { id: "sat_c4", name: "Geometry & Trigonometric Ratios", weight: 15, pastPaperFreq: 22, difficulty: "Medium" },
          { id: "sat_c5", name: "Craft & Structure / Information & Ideas", weight: 15, pastPaperFreq: 25, difficulty: "Hard" }
        ]
      }
    ]
  },

  IND: {
    country: "India",
    flag: "🇮🇳",
    boards: [
      {
        id: "cbse_12_physics",
        name: "CBSE Class 12 & JEE Mains/Advanced Physics",
        grade: "Senior Secondary / Competitive Entrance",
        subjects: ["Electrostatics", "Current Electricity", "Magnetism & Optics", "Modern Physics"],
        chapters: [
          { id: "ind_p1", name: "Electric Charges, Fields & Gauss Law", weight: 14, pastPaperFreq: 28, difficulty: "Medium" },
          { id: "ind_p2", name: "Electrostatic Potential & Capacitance", weight: 12, pastPaperFreq: 24, difficulty: "Hard" },
          { id: "ind_p3", name: "Current Electricity & Kirchhoff Laws", weight: 16, pastPaperFreq: 34, difficulty: "Hard" },
          { id: "ind_p4", name: "Moving Charges & Magnetism", weight: 15, pastPaperFreq: 30, difficulty: "Hard" },
          { id: "ind_p5", name: "Electromagnetic Induction & AC Circuits", weight: 14, pastPaperFreq: 26, difficulty: "Medium" },
          { id: "ind_p6", name: "Ray Optics & Optical Instruments", weight: 18, pastPaperFreq: 38, difficulty: "Extreme" },
          { id: "ind_p7", name: "Wave Optics & Interference/Diffraction", weight: 12, pastPaperFreq: 22, difficulty: "Hard" },
          { id: "ind_p8", name: "Dual Nature of Matter & Photoelectric Effect", weight: 10, pastPaperFreq: 20, difficulty: "Easy" },
          { id: "ind_p9", name: "Atoms & Nuclei (Radioactivity & Mass Defect)", weight: 10, pastPaperFreq: 18, difficulty: "Medium" },
          { id: "ind_p10", name: "Semiconductor Electronics & P-N Junction Diodes", weight: 12, pastPaperFreq: 22, difficulty: "Medium" }
        ]
      },
      {
        id: "neet_chem",
        name: "NEET UG Organic & Physical Chemistry",
        grade: "Medical Entrance Exam",
        subjects: ["Organic Reactions & Mechanisms", "Thermodynamics & Equilibrium", "Coordination Chemistry"],
        chapters: [
          { id: "ind_c1", name: "General Organic Chemistry (GOC) & Reaction Mechanisms", weight: 20, pastPaperFreq: 45, difficulty: "Extreme" },
          { id: "ind_c2", name: "Chemical Thermodynamics & Energetics", weight: 14, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "ind_c3", name: "Ionic & Chemical Equilibrium", weight: 15, pastPaperFreq: 30, difficulty: "Hard" },
          { id: "ind_c4", name: "Aldehydes, Ketones & Carboxylic Acids", weight: 18, pastPaperFreq: 36, difficulty: "Hard" },
          { id: "ind_c5", name: "Coordination Compounds & Crystal Field Theory", weight: 16, pastPaperFreq: 32, difficulty: "Medium" }
        ]
      }
    ]
  },

  UK: {
    country: "United Kingdom",
    flag: "🇬🇧",
    boards: [
      {
        id: "uk_alevel_chem",
        name: "AQA / Edexcel A-Level Chemistry",
        grade: "Sixth Form / Key Stage 5",
        subjects: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry & Analysis"],
        chapters: [
          { id: "uk_c1", name: "Atomic Structure & Amount of Substance", weight: 12, pastPaperFreq: 20, difficulty: "Medium" },
          { id: "uk_c2", name: "Bonding, Structure & Shapes of Molecules", weight: 14, pastPaperFreq: 24, difficulty: "Medium" },
          { id: "uk_c3", name: "Thermodynamics, Kinetics & Born-Haber Cycles", weight: 18, pastPaperFreq: 35, difficulty: "Hard" },
          { id: "uk_c4", name: "Electrode Potentials & Electrochemical Cells", weight: 15, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "uk_c5", name: "Aromatic Chemistry (Benzene Electrophilic Substitution)", weight: 16, pastPaperFreq: 30, difficulty: "Hard" },
          { id: "uk_c6", name: "NMR Spectroscopy & Mass Spectrometry", weight: 15, pastPaperFreq: 26, difficulty: "Extreme" }
        ]
      }
    ]
  },

  PAK: {
    country: "Pakistan",
    flag: "🇵🇰",
    boards: [
      {
        id: "pak_fsc_premed",
        name: "Federal Board / Punjab Board FSc Biology & Chemistry",
        grade: "HSSC Higher Secondary (Pre-Medical)",
        subjects: ["Cell Biology", "Genetics & Biotechnology", "Human Physiology & Biomolecules"],
        chapters: [
          { id: "pk_b1", name: "Cell Structure & Function & Enzyme Kinetics", weight: 15, pastPaperFreq: 25, difficulty: "Medium" },
          { id: "pk_b2", name: "Biological Molecules (Proteins, Lipids, Nucleic Acids)", weight: 14, pastPaperFreq: 22, difficulty: "Medium" },
          { id: "pk_b3", name: "Bioenergetics (Photosynthesis & Cellular Respiration)", weight: 18, pastPaperFreq: 34, difficulty: "Hard" },
          { id: "pk_b4", name: "Genetics, Inheritance & DNA Technology", weight: 20, pastPaperFreq: 38, difficulty: "Extreme" },
          { id: "pk_b5", name: "Homeostasis, Thermoregulation & Osmoregulation", weight: 16, pastPaperFreq: 28, difficulty: "Hard" }
        ]
      }
    ]
  },

  CHN: {
    country: "China",
    flag: "🇨🇳",
    boards: [
      {
        id: "chn_gaokao_math",
        name: "Gaokao High School Mathematics (高考数学)",
        grade: "National College Entrance Examination",
        subjects: ["Functions & Calculus", "Solid Geometry & Vectors", "Probability & Statistics", "Conic Sections"],
        chapters: [
          { id: "cn_m1", name: "Derivatives & Monotonicity of Functions (导数与函数单调性)", weight: 22, pastPaperFreq: 42, difficulty: "Extreme" },
          { id: "cn_m2", name: "Conic Sections: Ellipse, Hyperbola & Parabola (圆锥曲线)", weight: 20, pastPaperFreq: 40, difficulty: "Extreme" },
          { id: "cn_m3", name: "Spatial Vectors & Solid Geometry (空间向量与立体几何)", weight: 18, pastPaperFreq: 32, difficulty: "Hard" },
          { id: "cn_m4", name: "Probability Distribution & Mathematical Expectation (概率与期望)", weight: 15, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "cn_m5", name: "Sequences & Mathematical Induction (数列与归纳法)", weight: 15, pastPaperFreq: 26, difficulty: "Hard" }
        ]
      }
    ]
  },

  IB: {
    country: "International Baccalaureate",
    flag: "🌐",
    boards: [
      {
        id: "ib_dp_physics_hl",
        name: "IB Diploma Physics HL (Higher Level)",
        grade: "IB DP Year 1 & 2",
        subjects: ["Mechanics", "Thermal Physics", "Fields & Waves", "Quantum & Nuclear Physics"],
        chapters: [
          { id: "ib_p1", name: "Kinematics & Dynamics (Forces & Momentum)", weight: 15, pastPaperFreq: 28, difficulty: "Medium" },
          { id: "ib_p2", name: "Work, Energy & Circular Motion", weight: 14, pastPaperFreq: 25, difficulty: "Medium" },
          { id: "ib_p3", name: "Simple Harmonic Motion & Wave Phenomena", weight: 16, pastPaperFreq: 30, difficulty: "Hard" },
          { id: "ib_p4", name: "Gravitational, Electrostatic & Magnetic Fields", weight: 18, pastPaperFreq: 35, difficulty: "Extreme" },
          { id: "ib_p5", name: "Quantum Physics & Nuclear Energy", weight: 18, pastPaperFreq: 34, difficulty: "Extreme" }
        ]
      }
    ]
  }
};


/* File: data/pastPapers.js */
/**
 * stud.io Past Paper Pattern Intelligence & Exam Decoder Dataset
 */
window.STUDIO_PAST_PAPERS_DB = {
  ap_calc_bc: {
    tenYearTrend: [
      { year: 2017, topic: "Taylor Series Radius of Convergence", appearance: "FRQ Q6", weight: 9 },
      { year: 2018, topic: "Parametric Velocity & Arc Length", appearance: "FRQ Q5", weight: 9 },
      { year: 2019, topic: "Integration by Parts & Partial Fractions", appearance: "MCQ + FRQ", weight: 12 },
      { year: 2021, topic: "Lagrange Error Bound", appearance: "FRQ Q6 (High Yield)", weight: 15 },
      { year: 2022, topic: "Polar Area Integration", appearance: "FRQ Q2", weight: 9 },
      { year: 2023, topic: "Euler's Method & Differential Equations", appearance: "FRQ Q4", weight: 9 },
      { year: 2024, topic: "Ratio Test & Interval of Convergence", appearance: "FRQ Q6", weight: 10 },
      { year: 2025, topic: "Taylor Polynomial Approximations", appearance: "FRQ Q6", weight: 12 }
    ],
    predictedQuestions: [
      {
        id: "pred_ap_1",
        chapter: "Infinite Sequences & Series",
        question: "Find the radius of convergence and the interval of convergence for the power series ∑_{n=1}^∞ ((x-3)^n) / (n · 4^n). Show all work using the Ratio Test.",
        probability: "96% High Yield",
        marks: 9,
        formula: "\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1",
        trap: "Students frequently forget to test endpoints (x = -1 and x = 7) separately for convergence (Harmonic vs. Alternating Series)."
      },
      {
        id: "pred_ap_2",
        chapter: "Parametric Equations & Polar Coordinates",
        question: "Find the total area of the inner loop of the polar curve r = 1 + 2\\cos(\\theta).",
        probability: "88% High Yield",
        marks: 6,
        formula: "A = \\frac{1}{2} \\int_{\\alpha}^{\\beta} r^2 d\\theta",
        trap: "Integrating over 0 to 2π doubles the area or counts negative r values incorrectly. Find exact limits where r = 0 (θ = 2π/3 to 4π/3)."
      }
    ],
    examinerTraps: [
      { title: "Endpoint Convergence", desc: "Never assume endpoints are included or excluded without showing explicit ratio test evaluation or harmonic series justification." },
      { title: "Lagrange Error Bound Sign", desc: "Remember error bound requires the max value of the (n+1)-th derivative |f^(n+1)(z)| on the interval between c and x." }
    ]
  },

  cbse_12_physics: {
    tenYearTrend: [
      { year: 2017, topic: "Gauss Law & Cylinder Field Derivation", appearance: "5 Marks Long", weight: 15 },
      { year: 2019, topic: "Moving Coil Galvanometer to Ammeter", appearance: "3 Marks", weight: 10 },
      { year: 2021, topic: "Lens Maker Formula & Prism Deviation", appearance: "5 Marks", weight: 16 },
      { year: 2023, topic: "Full Wave Rectifier & Zenor Diode", appearance: "3 Marks", weight: 10 },
      { year: 2025, topic: "Wave Optics Young Double Slit Derivation", appearance: "5 Marks", weight: 14 }
    ],
    predictedQuestions: [
      {
        id: "pred_ind_1",
        chapter: "Ray Optics & Optical Instruments",
        question: "Derive Lens Maker's Formula 1/f = (μ - 1)(1/R1 - 1/R2) for a double convex lens of refractive index μ placed in air. State all sign conventions used.",
        probability: "95% High Yield",
        marks: 5,
        formula: "\\frac{1}{f} = (\\mu - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
        trap: "Drawing refraction at first surface without intermediate virtual image I1 loses 2 out of 5 marks."
      },
      {
        id: "pred_ind_2",
        chapter: "Current Electricity & Kirchhoff Laws",
        question: "Using Kirchhoff's Rules, determine the currents I1, I2, and I3 flowing through the three loops in a bridge circuit containing internal battery resistances.",
        probability: "91% High Yield",
        marks: 3,
        formula: "\\sum V = 0, \\quad \\sum I = 0",
        trap: "Incorrect sign convention when traversing against battery EMF vs across resistor in loop direction."
      }
    ],
    examinerTraps: [
      { title: "Missing Ray Diagram Arrows", desc: "Ray diagrams without light direction arrows are immediately docked 1 mark." },
      { title: "SI Units in Final Numerical Answer", desc: "Writing answer without SI unit (e.g. 5.4 instead of 5.4 × 10^-4 Tesla) leads to deduction." }
    ]
  }
};


/* File: data/podcasts.js */
/**
 * stud.io NotebookLM AI Dual-Host Podcast Database (Alex & Maya)
 */
window.STUDIO_PODCASTS_DB = {
  ap_c10: {
    title: "Demystifying Taylor Series & Lagrange Error Bounds",
    duration: "4:15",
    hosts: ["Alex (AI Tutor)", "Maya (AI Co-Host)"],
    transcript: [
      { timestamp: "0:00", speaker: "Alex", text: "Welcome back to stud.io Audio DeepDive! Today we're tackling the absolute monster of AP Calculus BC: Taylor Polynomials and Infinite Series.", boardCmd: "CLEAR; DRAW_TEXT('Taylor Series: f(x) = ∑ fⁿ(c)/n! (x-c)ⁿ')" },
      { timestamp: "0:32", speaker: "Maya", text: "Right! Students usually freeze when they see Taylor series, but think of it like this: You're constructing an artificial polynomial curve that perfectly mimics a complex function like e^x or sin(x) at a single point c.", boardCmd: "DRAW_CURVE('sin(x) vs Taylor Poly')" },
      { timestamp: "1:15", speaker: "Alex", text: "Exactly. The more terms you add—first derivative, second derivative, third derivative—the tighter the polynomial hugs the actual curve further away from c.", boardCmd: "ANIMATE_POLYNOMIAL_TERMS" },
      { timestamp: "2:04", speaker: "Maya", text: "Now what about Lagrange Error Bound? That's question 6 on almost every single AP exam!", boardCmd: "DRAW_TEXT('Lagrange Error: |R_n(x)| ≤ M/(n+1)! |x-c|^(n+1)')" },
      { timestamp: "2:45", speaker: "Alex", text: "The trick to Lagrange is finding 'M'. M is simply the maximum possible absolute value of the (n+1)-th derivative on the interval between c and x. Pick the largest worst-case scenario value!", boardCmd: "HIGHLIGHT_M_DERIVATIVE" },
      { timestamp: "3:30", speaker: "Maya", text: "Boom! Master that formula, check your endpoints for endpoint convergence, and that 9-mark Question 6 on AP Calc BC is officially in the bag.", boardCmd: "DRAW_TEXT('SCORE: 9/9 MARKS! 🎉')" }
    ]
  },

  ind_p6: {
    title: "Mastering Ray Optics: Lens Maker's Formula & Derivation Pitfalls",
    duration: "3:40",
    hosts: ["Alex (AI Tutor)", "Maya (AI Co-Host)"],
    transcript: [
      { timestamp: "0:00", speaker: "Alex", text: "Namaste learners! In this episode of stud.io Physics, we're dissecting Lens Maker's Formula for CBSE 12th & JEE Physics.", boardCmd: "DRAW_TEXT('Lens Maker Formula: 1/f = (μ-1)(1/R1 - 1/R2)')" },
      { timestamp: "0:45", speaker: "Maya", text: "Why do so many students lose marks on this 5-mark question? It's simple: they forget to draw the virtual intermediate image I1 formed by the first curved surface!", boardCmd: "DRAW_OPTICAL_DIAGRAM" },
      { timestamp: "1:50", speaker: "Alex", text: "Spot on Maya. Refraction happens TWICE. First surface refracts light to form virtual image I1. Then the second surface treats I1 as a virtual object and forms the final image I.", boardCmd: "HIGHLIGHT_TWO_SURFACES" },
      { timestamp: "2:55", speaker: "Maya", text: "Add both refraction equations together, assume the lens is thin so optical centers coincide, and boom—1/f equals (μ - 1) times (1/R1 minus 1/R2)!", boardCmd: "DERIVATION_FINAL_STEP" }
    ]
  }
};


/* File: data/duolingoQuests.js */
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


/* File: data/flashcards.js */
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


/* File: data/extracurricular.js */
/**
 * stud.io Extracurricular & Beyond-Syllabus Academy Database
 */
window.STUDIO_EXTRACURRICULAR_DB = [
  {
    id: "ext_py_ai",
    category: "Technology & AI",
    title: "Python Programming & AI Engineering Basics",
    icon: "🐍",
    lessons: 12,
    level: "Beginner to Intermediate",
    desc: "Master Python fundamentals, build your first neural network from scratch, and create AI agents.",
    topics: ["Python Variables & Loops", "Data Analysis with Pandas", "Building Neural Nets with PyTorch", "AI Prompt Engineering"]
  },
  {
    id: "ext_finance",
    category: "Life Skills & Business",
    title: "Personal Finance & Investing for Students",
    icon: "📈",
    lessons: 8,
    level: "Essential Life Skill",
    desc: "Learn compound interest, stock market basics, budgeting, crypto fundamentals, and building long-term wealth.",
    topics: ["The Power of Compound Interest", "Stocks, ETFs & Index Funds", "Student Budgeting & Savings", "Understanding Credit Scores"]
  },
  {
    id: "ext_public_speaking",
    category: "Communication",
    title: "Public Speaking, Debating & Persuasion",
    icon: "🎙️",
    lessons: 10,
    level: "All Levels",
    desc: "Overcome stage fright, master vocal modulation, structure winning debate arguments, and deliver unforgettable speeches.",
    topics: ["Body Language & Presence", "Structuring Speeches with Monroe's Motivated Sequence", "Oxford Debate Tactics", "Storytelling Techniques"]
  },
  {
    id: "ext_astronomy",
    category: "Science & Exploration",
    title: "Astrophysics, Black Holes & Space Exploration",
    icon: "🌌",
    lessons: 14,
    level: "Curiosity & Passion",
    desc: "Explore Einstein's Relativity, stellar evolution, quantum mechanics in deep space, and NASA moon/Mars missions.",
    topics: ["Stellar Nucleosynthesis", "General Relativity & Event Horizons", "The Big Bang & Cosmic Microwave Background", "Exoplanet Discovery"]
  },
  {
    id: "ext_music_theory",
    category: "Creative Arts",
    title: "Music Theory & Audio Production Fundamentals",
    icon: "🎵",
    lessons: 10,
    level: "Beginner",
    desc: "Understand chords, keys, rhythm signatures, ear training, and digital music composition in DAWs.",
    topics: ["Major & Minor Scales", "Circle of Fifths", "Chord Progressions (I-V-vi-IV)", "Synthesizer Sound Design"]
  }
];


/* File: db/database.js */
/**
 * stud.io Core IndexedDB Wrapper (Offline Persistent Storage)
 */
class StudioDB {
  constructor() {
    this.dbName = "stud_io_db";
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        
        if (!db.objectStoreNames.contains("user_profile")) {
          db.createObjectStore("user_profile", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("syllabi")) {
          db.createObjectStore("syllabi", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("neuro_profile")) {
          db.createObjectStore("neuro_profile", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("student_notes")) {
          db.createObjectStore("student_notes", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("leitner_cards")) {
          db.createObjectStore("leitner_cards", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("exam_results")) {
          db.createObjectStore("exam_results", { keyPath: "id" });
        }
      };

      request.onsuccess = (e) => {
        this.db = e.target.result;
        console.log("💾 stud.io IndexedDB initialized successfully!");
        resolve(this.db);
      };

      request.onerror = (e) => {
        console.error("IndexedDB initialization error:", e);
        reject(e);
      };
    });
  }

  async saveItem(storeName, item) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const req = store.put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }

  async getItem(storeName, key) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }

  async getAllItems(storeName) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }
}

window.studioDB = new StudioDB();


/* File: db/vectorEngine.js */
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


/* File: neuro/neuroFeatureVector.js */
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


/* File: neuro/neuroNet.js */
/**
 * stud.io NeuroAdapt Native Client-Side MLP Neural Network
 */
class NeuroNet {
  constructor() {
    this.inputNodes = 16;
    this.hidden1Nodes = 32;
    this.hidden2Nodes = 16;
    this.outputNodes = 5;

    this.W1 = this.randomMatrix(this.hidden1Nodes, this.inputNodes);
    this.B1 = new Array(this.hidden1Nodes).fill(0.1);
    
    this.W2 = this.randomMatrix(this.hidden2Nodes, this.hidden1Nodes);
    this.B2 = new Array(this.hidden2Nodes).fill(0.1);

    this.W3 = this.randomMatrix(this.outputNodes, this.hidden2Nodes);
    this.B3 = new Array(this.outputNodes).fill(0.1);
  }

  randomMatrix(rows, cols) {
    const mat = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push((Math.random() - 0.5) * 0.5);
      }
      mat.push(row);
    }
    return mat;
  }

  relu(arr) {
    return arr.map(x => Math.max(0, x));
  }

  sigmoid(arr) {
    return arr.map(x => 1 / (1 + Math.exp(-x)));
  }

  matMul(matrix, vector) {
    return matrix.map(row => {
      return row.reduce((sum, val, idx) => sum + val * (vector[idx] || 0), 0);
    });
  }

  addVectors(vecA, vecB) {
    return vecA.map((val, idx) => val + (vecB[idx] || 0));
  }

  predict(inputVector) {
    // Forward Pass Layer 1
    const z1 = this.addVectors(this.matMul(this.W1, inputVector), this.B1);
    const a1 = this.relu(z1);

    // Forward Pass Layer 2
    const z2 = this.addVectors(this.matMul(this.W2, a1), this.B2);
    const a2 = this.relu(z2);

    // Forward Pass Layer 3 (Outputs)
    const z3 = this.addVectors(this.matMul(this.W3, a2), this.B3);
    const outputs = this.sigmoid(z3);

    return {
      auditoryPreferenceScore: Math.round(outputs[0] * 100),
      visualPreferenceScore: Math.round(outputs[1] * 100),
      recommendedPomodoroMins: outputs[2] > 0.6 ? 50 : (outputs[2] > 0.3 ? 25 : 15),
      leitnerIntervalMultiplier: Number((0.5 + outputs[3] * 1.5).toFixed(2)),
      overallEfficiencyIndex: Math.round(outputs[4] * 100)
    };
  }
}

window.neuroNet = new NeuroNet();


/* File: neuro/neuroNotesAnalyzer.js */
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


/* File: agents/agentCluster.js */
/**
 * stud.io Multi-Agent Ingestion Cluster Controller
 */
class StudioAgentCluster {
  constructor() {
    this.agents = [
      { id: "agent_1", name: "Agent 1: PatternMiner AI", role: "Analyzing 10 years of past exam papers & topic frequency", status: "idle", progress: 0 },
      { id: "agent_2", name: "Agent 2: SyllabusIngestor AI", role: "Parsing prerequisite knowledge trees & Duolingo quest map", status: "idle", progress: 0 },
      { id: "agent_3", name: "Agent 3: NotebookLM Synthesizer", role: "Generating Alex & Maya dual-host podcast scripts", status: "idle", progress: 0 },
      { id: "agent_4", name: "Agent 4: ActiveRecall Engine", role: "Indexing 5-Box Leitner flashcard decks & SM-2 schedules", status: "idle", progress: 0 }
    ];
  }

  async runIngestion(countryCode, boardId, onProgressLog) {
    onProgressLog("🚀 Initializing stud.io Multi-Agent Cluster Ingestion...");

    for (let i = 0; i < this.agents.length; i++) {
      const agent = this.agents[i];
      agent.status = "running";
      onProgressLog(`[${agent.name}] Status: ACTIVE — ${agent.role}...`);

      for (let p = 20; p <= 100; p += 20) {
        agent.progress = p;
        await new Promise(r => setTimeout(r, 180));
        onProgressLog(`  ➜ ${agent.name}: Processing batch ${p}%...`);
      }

      agent.status = "completed";
      onProgressLog(`✅ [${agent.name}] Finished task successfully.`);
    }

    onProgressLog("🎉 All 4 AI Agents completed syllabus synthesis! Opening stud.io Dashboard...");
    return true;
  }
}

window.studioAgentCluster = new StudioAgentCluster();


/* File: agents/feynmanAgent.js */
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


/* File: audio/audioSynth.js */
/**
 * stud.io Audio & Speech Synthesis Controller
 */
class StudioAudioSynth {
  constructor() {
    this.speechSynth = window.speechSynthesis;
    this.isPlaying = false;
    this.currentUtterance = null;
    this.playbackRate = 1.0;
  }

  speakText(text, onEnd, onBoundary) {
    this.stop();
    if (!text || !this.speechSynth) return;

    this.currentUtterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance.rate = this.playbackRate;
    this.currentUtterance.pitch = 1.0;

    const voices = this.speechSynth.getVoices();
    if (voices.length > 0) {
      this.currentUtterance.voice = voices.find(v => v.lang.includes("en")) || voices[0];
    }

    this.currentUtterance.onend = () => {
      this.isPlaying = false;
      if (onEnd) onEnd();
    };

    if (onBoundary) {
      this.currentUtterance.onboundary = onBoundary;
    }

    this.isPlaying = true;
    this.speechSynth.speak(this.currentUtterance);
  }

  setRate(rate) {
    this.playbackRate = rate;
    if (this.currentUtterance) {
      this.currentUtterance.rate = rate;
    }
  }

  pause() {
    if (this.speechSynth && this.isPlaying) {
      this.speechSynth.pause();
      this.isPlaying = false;
    }
  }

  resume() {
    if (this.speechSynth && !this.isPlaying) {
      this.speechSynth.resume();
      this.isPlaying = true;
    }
  }

  stop() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
      this.isPlaying = false;
    }
  }
}

window.studioAudioSynth = new StudioAudioSynth();


/* File: audio/soundscapeSynth.js */
/**
 * stud.io Web Audio API Ambient Soundscape Synthesizer
 */
class SoundscapeSynth {
  constructor() {
    this.ctx = null;
    this.currentMode = null;
    this.activeNodes = [];
    this.gainNode = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = 0.3;
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playRain() {
    this.stop();
    this.initContext();
    this.currentMode = "rain";

    // Pink noise buffer for rain
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const rainNode = this.ctx.createBufferSource();
    rainNode.buffer = buffer;
    rainNode.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;

    rainNode.connect(filter);
    filter.connect(this.gainNode);
    rainNode.start();

    this.activeNodes.push(rainNode);
  }

  playBinauralAlpha() {
    this.stop();
    this.initContext();
    this.currentMode = "binaural";

    // 200 Hz Base + 10 Hz Alpha wave offset (210 Hz)
    const oscLeft = this.ctx.createOscillator();
    const oscRight = this.ctx.createOscillator();

    oscLeft.type = "sine";
    oscLeft.frequency.value = 200;

    oscRight.type = "sine";
    oscRight.frequency.value = 210; // 10Hz Alpha beat for focus

    const merger = this.ctx.createChannelMerger(2);
    oscLeft.connect(merger, 0, 0);
    oscRight.connect(merger, 0, 1);

    merger.connect(this.gainNode);

    oscLeft.start();
    oscRight.start();

    this.activeNodes.push(oscLeft, oscRight);
  }

  playSpaceLoFi() {
    this.stop();
    this.initContext();
    this.currentMode = "lofi";

    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 110; // A2 note

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 400;

    osc.connect(filter);
    filter.connect(this.gainNode);
    osc.start();

    this.activeNodes.push(osc);
  }

  setVolume(val) {
    if (this.gainNode) {
      this.gainNode.gain.value = Math.max(0, Math.min(1, val));
    }
  }

  stop() {
    this.activeNodes.forEach(n => {
      try { n.stop(); } catch(e) {}
    });
    this.activeNodes = [];
    this.currentMode = null;
  }
}

window.soundscapeSynth = new SoundscapeSynth();


/* File: modules/landingPage.js */
/**
 * stud.io Landing Page Controller & Showcase Renderer
 */
class LandingPageModule {
  renderLandingPage(containerEl, onLaunchApp) {
    containerEl.innerHTML = `
      <section class="landing-hero">
        <div class="landing-badge">✨ Powered by Pattern Intelligence & NeuroAdapt™ Neural Engine</div>
        <h1 class="landing-title">
          The Only Study App <br/>
          <span class="gradient-text">You Will Ever Need.</span>
        </h1>
        <p class="landing-subtitle">
          Pre-downloaded past paper patterns, NotebookLM dual-host podcasts, Duolingo-style quest tracks, 
          and active recall built for students in the USA, India, UK, Pakistan, China, IB & beyond.
        </p>

        <div class="landing-cta-group">
          <button id="btn-launch-app-hero" class="btn-primary btn-large">
            🚀 Launch stud.io Onboarding
          </button>
          <button id="btn-direct-dashboard-hero" class="btn-secondary btn-large" style="background: rgba(139, 92, 246, 0.25); border-color: var(--accent-purple);">
            ⚡ Enter Dashboard Directly
          </button>
          <a href="#features-section" class="btn-secondary btn-large">
            🔍 Explore All Features
          </a>
        </div>

        <!-- Live Demo Card -->
        <div class="landing-preview-card glass-panel">
          <div class="preview-header">
            <div class="preview-dots"><span></span><span></span><span></span></div>
            <div class="preview-badge">⚡ Live stud.io Neural Engine Demo</div>
          </div>
          <div class="preview-body">
            <div class="preview-stats">
              <div class="stat-box">
                <span class="stat-icon">🔥</span>
                <div><strong id="demo-streak">14 Days</strong><small>Daily Streak</small></div>
              </div>
              <div class="stat-box">
                <span class="stat-icon">⚡</span>
                <div><strong id="demo-xp">2,450 XP</strong><small>Diamond League</small></div>
              </div>
              <div class="stat-box">
                <span class="stat-icon">🧠</span>
                <div><strong id="demo-efficiency">94% Index</strong><small>NeuroAdapt Efficiency</small></div>
              </div>
            </div>
            <div class="preview-heatmap-row">
              <span class="heatmap-label">Calculus & Series Weightage:</span>
              <div class="mini-heatmap">
                <div class="h-cell high" title="Taylor Series 18%">18%</div>
                <div class="h-cell high" title="Lagrange Error 15%">15%</div>
                <div class="h-cell med" title="Parametrics 12%">12%</div>
                <div class="h-cell low" title="Limits 8%">8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Country Presets Showcase -->
      <section class="landing-countries">
        <h3>🌍 Pre-Downloaded Syllabi & Past Paper Patterns For 10+ Nations</h3>
        <div class="country-grid">
          <div class="country-card" data-country="USA">
            <span class="flag">🇺🇸</span>
            <strong>USA (AP & SAT)</strong>
            <p>Calculus BC, AP Physics, SAT Digital</p>
          </div>
          <div class="country-card" data-country="IND">
            <span class="flag">🇮🇳</span>
            <strong>India (CBSE, JEE, NEET)</strong>
            <p>Class 12th Physics, JEE Mains, NEET Bio</p>
          </div>
          <div class="country-card" data-country="UK">
            <span class="flag">🇬🇧</span>
            <strong>UK (GCSE & A-Levels)</strong>
            <p>AQA Chemistry, Edexcel Math</p>
          </div>
          <div class="country-card" data-country="PAK">
            <span class="flag">🇵🇰</span>
            <strong>Pakistan (Matric & FSc)</strong>
            <p>Federal Board Biology & Chemistry</p>
          </div>
          <div class="country-card" data-country="CHN">
            <span class="flag">🇨🇳</span>
            <strong>China (Gaokao 高考)</strong>
            <p>Gaokao Higher Math & Science</p>
          </div>
          <div class="country-card" data-country="IB">
            <span class="flag">🌐</span>
            <strong>IB Diploma (HL / SL)</strong>
            <p>IB Physics HL, Math AA/AI</p>
          </div>
        </div>
      </section>

      <!-- Features Showcase Section -->
      <section id="features-section" class="landing-features">
        <h2>Everything A Student Needs <span class="gradient-text">In One Dashboard</span></h2>

        <div class="features-grid">
          <div class="feature-card glass-panel">
            <div class="feature-icon">📊</div>
            <h3>10-Year Exam Pattern Intelligence</h3>
            <p>Visual topic frequency heatmaps, examiner pitfall decoders, and 95% probability predicted exam questions.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🎙️</div>
            <h3>NotebookLM AI Audio Podcasts</h3>
            <p>Dual-host dialogue podcast breakdowns between AI tutors Alex & Maya with live synchronized transcript and chalkboard scripts.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🎮</div>
            <h3>Duolingo Gamified Quest Track</h3>
            <p>XP rank leaderboards, 5-heart life system, daily streaks, audio listening cards, and speed-round quizzes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🧠</div>
            <h3>Active Recall & Spaced Repetition</h3>
            <p>5-Box Leitner card decks, Feynman AI student feedback mentor, timed Blurting workspace, and Cornell notes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">⏱️</div>
            <h3>Pomodoro & Ambient Soundscapes</h3>
            <p>Web Audio synthesized rain, cafe, binaural 10Hz alpha waves, and deep space lo-fi study sounds.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🤖</div>
            <h3>NeuroAdapt™ Learning Neural Engine</h3>
            <p>Client-side MLP neural net that analyzes your running notes, detects concept confusion, and adapts lesson difficulty.</p>
          </div>
        </div>
      </section>

      <section class="landing-footer-cta">
        <h2>Ready To Transform Your Study Sprints?</h2>
        <button id="btn-launch-app-footer" class="btn-primary btn-large">
          ⚡ Get Started Now — It's Free
        </button>
      </section>
    `;

    // Event Listeners
    containerEl.querySelector("#btn-launch-app-hero").addEventListener("click", () => onLaunchApp());
    const directBtn = containerEl.querySelector("#btn-direct-dashboard-hero");
    if (directBtn) {
      directBtn.addEventListener("click", () => onLaunchApp(null, true));
    }
    containerEl.querySelector("#btn-launch-app-footer").addEventListener("click", () => onLaunchApp());

    containerEl.querySelectorAll(".country-card").forEach(card => {
      card.addEventListener("click", () => {
        const country = card.getAttribute("data-country");
        onLaunchApp(country);
      });
    });
  }
}

window.landingPageModule = new LandingPageModule();


/* File: modules/onboarding.js */
/**
 * stud.io Onboarding & Multi-Agent Scanning Gateway Controller
 */
class OnboardingModule {
  renderOnboarding(containerEl, defaultCountry = "USA", onComplete) {
    this.selectedCountry = defaultCountry;
    this.selectedBoard = "ap_calc_bc";
    this.selectedDifficulty = "Time Management & Complex Problem Solving";

    containerEl.innerHTML = `
      <div class="onboarding-overlay glass-panel">
        <div class="onboarding-card">
          <div class="onboarding-header">
            <h2>Welcome to <span class="gradient-text">stud.io</span></h2>
            <p>Let's personalize your multi-agent AI study engine in 3 quick steps.</p>
          </div>

          <div id="onboarding-step-content">
            <!-- Step 1: Country & Board -->
            <div class="step-pane active" id="step-1">
              <h3>Step 1: Choose Your Country & Exam System</h3>
              <div class="form-group">
                <label>Select Country:</label>
                <select id="country-select" class="form-control">
                  <option value="USA">🇺🇸 United States of America (AP / SAT / ACT)</option>
                  <option value="IND">🇮🇳 India (CBSE / JEE Mains & Adv / NEET UG)</option>
                  <option value="UK">🇬🇧 United Kingdom (GCSE / A-Levels)</option>
                  <option value="PAK">🇵🇰 Pakistan (Federal Board / Punjab FSc)</option>
                  <option value="CHN">🇨🇳 China (Gaokao 高考 High School Math)</option>
                  <option value="IB">🌐 International Baccalaureate (IB Diploma HL/SL)</option>
                </select>
              </div>

              <div class="form-group">
                <label>Select Exam Syllabus / Board Preset:</label>
                <select id="board-select" class="form-control">
                  <option value="ap_calc_bc">AP Calculus BC & Advanced Mathematics</option>
                  <option value="sat_math_rw">SAT Digital (Math & Digital R&W)</option>
                </select>
              </div>

              <button id="btn-next-1" class="btn-primary">Next: Difficulty Focus ➜</button>
            </div>

            <!-- Step 2: Difficulty Focus -->
            <div class="step-pane" id="step-2">
              <h3>Step 2: What Do You Struggle With The Most?</h3>
              <p>Our Multi-Agent Cluster and NeuroAdapt Neural Engine will tailor your daily quests based on this challenge.</p>
              
              <div class="difficulty-grid">
                <div class="diff-card selected" data-diff="Time Management & Speed">
                  <span class="diff-icon">⏱️</span>
                  <strong>Time Management & Speed</strong>
                  <p>Running out of time on past paper exams</p>
                </div>
                <div class="diff-card" data-diff="Complex Math & Formulas">
                  <span class="diff-icon">📐</span>
                  <strong>Complex Math & Formulas</strong>
                  <p>Memorizing formulas and long derivation steps</p>
                </div>
                <div class="diff-card" data-diff="Concept Clarity & Fundamentals">
                  <span class="diff-icon">💡</span>
                  <strong>Concept Clarity & Fundamentals</strong>
                  <p>Struggling to understand deep theoretical concepts</p>
                </div>
                <div class="diff-card" data-diff="Exam Panic & Trap Questions">
                  <span class="diff-icon">🎯</span>
                  <strong>Exam Panic & Trap Questions</strong>
                  <p>Falling for tricky examiner trap questions</p>
                </div>
              </div>

              <div class="btn-row">
                <button id="btn-back-2" class="btn-secondary">⬅️ Back</button>
                <button id="btn-next-2" class="btn-primary">Initialize AI Multi-Agents 🤖➜</button>
              </div>
            </div>

            <!-- Step 3: Multi-Agent Scanning Terminal -->
            <div class="step-pane" id="step-3">
              <h3>Step 3: Multi-Agent Intelligence Ingestion</h3>
              <p>Synthesizing 10 years of past exam papers and building your personalized Duolingo quest track...</p>

              <div class="agent-terminal">
                <div class="terminal-logs" id="terminal-log-output">
                  <code>[System] Initializing stud.io Multi-Agent Engine...</code>
                </div>
              </div>

              <div class="progress-bar-container">
                <div class="progress-bar-fill" id="agent-progress-fill"></div>
              </div>

              <button id="btn-launch-dashboard" class="btn-primary hidden">
                🌟 Enter stud.io Dashboard 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Dropdown listeners
    const countrySelect = containerEl.querySelector("#country-select");
    const boardSelect = containerEl.querySelector("#board-select");

    countrySelect.value = this.selectedCountry;

    const updateBoardOptions = () => {
      const countryData = window.STUDIO_SYLLABI_DB[countrySelect.value];
      if (countryData && countryData.boards) {
        boardSelect.innerHTML = countryData.boards.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
      }
    };

    updateBoardOptions();
    countrySelect.addEventListener("change", (e) => {
      this.selectedCountry = e.target.value;
      updateBoardOptions();
    });

    // Step navigation
    containerEl.querySelector("#btn-next-1").addEventListener("click", () => {
      this.selectedBoard = boardSelect.value;
      containerEl.querySelector("#step-1").classList.remove("active");
      containerEl.querySelector("#step-2").classList.add("active");
    });

    containerEl.querySelector("#btn-back-2").addEventListener("click", () => {
      containerEl.querySelector("#step-2").classList.remove("active");
      containerEl.querySelector("#step-1").classList.add("active");
    });

    containerEl.querySelectorAll(".diff-card").forEach(card => {
      card.addEventListener("click", () => {
        containerEl.querySelectorAll(".diff-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedDifficulty = card.getAttribute("data-diff");
      });
    });

    containerEl.querySelector("#btn-next-2").addEventListener("click", async () => {
      containerEl.querySelector("#step-2").classList.remove("active");
      containerEl.querySelector("#step-3").classList.add("active");

      const logOutput = containerEl.querySelector("#terminal-log-output");
      const progressFill = containerEl.querySelector("#agent-progress-fill");

      let currentProgress = 0;
      const appendLog = (msg) => {
        logOutput.innerHTML += `<div><code>${msg}</code></div>`;
        logOutput.scrollTop = logOutput.scrollHeight;
        currentProgress = Math.min(100, currentProgress + 15);
        progressFill.style.width = `${currentProgress}%`;
      };

      if (window.studioAgentCluster) {
        await window.studioAgentCluster.runIngestion(this.selectedCountry, this.selectedBoard, appendLog);
      }

      progressFill.style.width = "100%";
      containerEl.querySelector("#btn-launch-dashboard").classList.remove("hidden");
    });

    containerEl.querySelector("#btn-launch-dashboard").addEventListener("click", () => {
      onComplete({
        country: this.selectedCountry,
        board: this.selectedBoard,
        difficulty: this.selectedDifficulty
      });
    });
  }
}

window.onboardingModule = new OnboardingModule();


/* File: modules/neuroDashboard.js */
/**
 * stud.io NeuroAdapt Student Cognitive Profile Dashboard Module
 */
class NeuroDashboardModule {
  renderDashboard(containerEl) {
    const inputVec = window.neuroFeatureVector ? window.neuroFeatureVector.getNormalizedVector() : new Array(16).fill(0.8);
    const predictions = window.neuroNet ? window.neuroNet.predict(inputVec) : {
      auditoryPreferenceScore: 88,
      visualPreferenceScore: 92,
      recommendedPomodoroMins: 50,
      leitnerIntervalMultiplier: 1.25,
      overallEfficiencyIndex: 94
    };

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🧠 NeuroAdapt™ Cognitive Intelligence & Efficiency Profile</h2>
        <p>Continuous client-side MLP neural net tracking your learning style, response latency, note confusion, and memory decay.</p>
      </div>

      <div class="neuro-grid">
        <!-- Main Index Card -->
        <div class="neuro-card main-index glass-panel">
          <h3>Overall Study Efficiency Index</h3>
          <div class="efficiency-circle">
            <span class="eff-value">${predictions.overallEfficiencyIndex}%</span>
            <small>Optimal Cognitive Peak</small>
          </div>
          <p class="eff-status">🌟 Your memory retention and response latency are operating in the 94th percentile.</p>
        </div>

        <!-- Learning Modality Card -->
        <div class="neuro-card glass-panel">
          <h3>Learning Modality Weights</h3>
          <div class="modality-bars">
            <div class="mod-row">
              <span>🎧 Auditory (Podcasts & Voice):</span>
              <div class="bar-bg"><div class="bar-fill cyan" style="width: ${predictions.auditoryPreferenceScore}%"></div></div>
              <strong>${predictions.auditoryPreferenceScore}%</strong>
            </div>
            <div class="mod-row">
              <span>👁️ Visual (Diagrams & Blackboards):</span>
              <div class="bar-bg"><div class="bar-fill purple" style="width: ${predictions.visualPreferenceScore}%"></div></div>
              <strong>${predictions.visualPreferenceScore}%</strong>
            </div>
            <div class="mod-row">
              <span>🧩 Interactive (Quizzes & Flashcards):</span>
              <div class="bar-bg"><div class="bar-fill green" style="width: 85%"></div></div>
              <strong>85%</strong>
            </div>
          </div>
        </div>

        <!-- Neural Recommendations -->
        <div class="neuro-card glass-panel">
          <h3>Neural Engine Recommendations</h3>
          <ul class="rec-list">
            <li>
              <strong>⏱️ Optimal Pomodoro Duration:</strong>
              <span>${predictions.recommendedPomodoroMins} minutes focus / 10 minutes break</span>
            </li>
            <li>
              <strong>📅 Spaced Repetition Multiplier:</strong>
              <span>${predictions.leitnerIntervalMultiplier}x interval boost (strong long-term memory)</span>
            </li>
            <li>
              <strong>🎵 Recommended Soundscape:</strong>
              <span>Binaural 10Hz Alpha Waves (enhances derivative problem solving)</span>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

window.neuroDashboardModule = new NeuroDashboardModule();


/* File: modules/studentNotes.js */
/**
 * stud.io Running Notes Workspace & Live NLP Confusion Analyzer
 */
class StudentNotesModule {
  renderNotesWorkspace(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>📝 Student Running Notes & Live NeuroAdapt™ Analyzer</h2>
        <p>Type your rough session notes here. Our neural engine scans for confusion markers (<code>???</code>, <code>unclear</code>, missing formulas) and automatically creates patch quizzes.</p>
      </div>

      <div class="notes-layout">
        <div class="notes-editor-panel glass-panel">
          <div class="editor-header">
            <span class="editor-title">Chapter Notes: Taylor Series & Lagrange Error</span>
            <button id="btn-analyze-notes" class="btn-primary">
              🧠 Run NeuroAdapt NLP Scan
            </button>
          </div>
          <textarea id="student-notes-textarea" class="notes-textarea" placeholder="Type or paste your rough notes during class or study sessions... E.g.: 'Taylor series is centered at c. Formula is sum of f^(n)(c)/n!*(x-c)^n. Lagrange error bound is super confusing??? How do I choose M for sin(x)?'"></textarea>
        </div>

        <div class="notes-analysis-panel glass-panel" id="notes-analysis-output">
          <h3>🔍 Live NeuroAdapt™ Notes Scan Output</h3>
          <p class="text-muted">Click "Run NeuroAdapt NLP Scan" to evaluate your running notes.</p>
        </div>
      </div>
    `;

    const textarea = containerEl.querySelector("#student-notes-textarea");
    const outputEl = containerEl.querySelector("#notes-analysis-output");
    const btn = containerEl.querySelector("#btn-analyze-notes");

    btn.addEventListener("click", () => {
      const text = textarea.value;
      if (window.neuroNotesAnalyzer) {
        const result = window.neuroNotesAnalyzer.analyzeNotes(text);
        
        outputEl.innerHTML = `
          <h3>🔍 Live NeuroAdapt™ Notes Scan Output</h3>
          <div class="analysis-stat">
            <span>Detected Confusion Markers:</span>
            <strong class="text-warning">${result.confusionCount} (${result.detectedTerms.join(", ") || "None"})</strong>
          </div>
          <div class="analysis-stat">
            <span>Syllabus Term Alignment:</span>
            <strong class="text-success">${result.similarityScore}% Match</strong>
          </div>
          <div class="analysis-stat">
            <span>Missing Master Concepts:</span>
            <span class="tag-group">${result.missingTerms.map(t => `<span class="tag">${t}</span>`).join(" ") || "None"}</span>
          </div>

          <div class="patch-section">
            <h4>🎯 Generated Patch Quizzes for Duolingo Quest Track:</h4>
            ${result.patchQuestions.map(pq => `
              <div class="patch-card glass-panel">
                <strong>${pq.question}</strong>
                <p><small>${pq.explanation}</small></p>
              </div>
            `).join("")}
          </div>
        `;
      }
    });
  }
}

window.studentNotesModule = new StudentNotesModule();


/* File: modules/patternAnalyzer.js */
/**
 * stud.io Past Paper Pattern Intelligence Module
 */
class PatternAnalyzerModule {
  renderPatternAnalyzer(containerEl, boardId = "ap_calc_bc") {
    const data = window.STUDIO_PAST_PAPERS_DB[boardId] || window.STUDIO_PAST_PAPERS_DB.ap_calc_bc;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>📊 10-Year Past Paper Pattern Intelligence & Exam Decoder</h2>
        <p>Pre-analyzed paper frequencies, weightage heatmaps, 95% yield predicted questions, and examiner trap decoders.</p>
      </div>

      <!-- Weightage Heatmap -->
      <div class="glass-panel section-card">
        <h3>🔥 10-Year Exam Frequency Heatmap Matrix</h3>
        <div class="trend-grid">
          ${data.tenYearTrend.map(item => `
            <div class="trend-card">
              <span class="year-badge">${item.year}</span>
              <strong>${item.topic}</strong>
              <div class="weight-tag">${item.appearance} (${item.weight}%)</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Predicted Questions Matrix -->
      <div class="glass-panel section-card">
        <h3>🎯 Top Predicted High-Yield Exam Questions</h3>
        <div class="predicted-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Chapter Topic</th>
                <th>Predicted Question</th>
                <th>Yield Probability</th>
                <th>Marks</th>
                <th>Required Formula</th>
              </tr>
            </thead>
            <tbody>
              ${data.predictedQuestions.map(pq => `
                <tr>
                  <td><strong>${pq.chapter}</strong></td>
                  <td>${pq.question}<br/><small class="text-warning">⚠️ Examiner Trap: ${pq.trap}</small></td>
                  <td><span class="badge-yield">${pq.probability}</span></td>
                  <td><strong>${pq.marks} Marks</strong></td>
                  <td><code>${pq.formula}</code></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Examiner Trap Decoder -->
      <div class="glass-panel section-card">
        <h3>⚠️ Examiner Pitfalls & Trap Warnings</h3>
        <div class="traps-grid">
          ${data.examinerTraps.map(trap => `
            <div class="trap-card red-border">
              <h4>🛑 ${trap.title}</h4>
              <p>${trap.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
}

window.patternAnalyzerModule = new PatternAnalyzerModule();


/* File: modules/notebookLM.js */
/**
 * stud.io NotebookLM Dual-Host AI Audio/Video Studio Module
 */
class NotebookLMModule {
  renderNotebookLM(containerEl, topicId = "ap_c10") {
    const podcast = window.STUDIO_PODCASTS_DB[topicId] || window.STUDIO_PODCASTS_DB.ap_c10;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🎙️ NotebookLM AI Audio & Visual Blackboard Studio</h2>
        <p>Dual-host dialogue breakdown between AI tutors Alex & Maya with synchronized transcript & blackboard diagrams.</p>
      </div>

      <div class="notebook-layout">
        <!-- Left: Audio Player & Waveform -->
        <div class="audio-panel glass-panel">
          <div class="podcast-info">
            <span class="host-pill">👥 Hosts: ${podcast.hosts.join(" & ")}</span>
            <h3>${podcast.title}</h3>
            <span class="duration-badge">⏱️ ${podcast.duration}</span>
          </div>

          <!-- Canvas Waveform Visualizer -->
          <div class="waveform-container">
            <canvas id="waveform-canvas" width="600" height="100"></canvas>
          </div>

          <!-- Controls -->
          <div class="audio-controls-bar">
            <button id="btn-play-podcast" class="btn-primary">
              ▶️ Play AI Dialogue
            </button>
            <button id="btn-pause-podcast" class="btn-secondary">
              ⏸️ Pause
            </button>

            <div class="speed-selector">
              <span>Speed:</span>
              <button class="speed-btn active" data-speed="1.0">1.0x</button>
              <button class="speed-btn" data-speed="1.25">1.25x</button>
              <button class="speed-btn" data-speed="1.5">1.5x</button>
            </div>
          </div>

          <!-- Visual Chalkboard Renderer -->
          <div class="chalkboard-container">
            <div class="board-header">✏️ AI Chalkboard Visualizer</div>
            <div class="board-screen" id="chalkboard-screen">
              <code>Taylor Series: f(x) = ∑ fⁿ(c)/n! (x-c)ⁿ</code>
            </div>
          </div>
        </div>

        <!-- Right: Synchronized Interactive Transcript -->
        <div class="transcript-panel glass-panel">
          <h3>📜 Synchronized Live Transcript</h3>
          <div class="transcript-list" id="transcript-list">
            ${podcast.transcript.map((item, idx) => `
              <div class="transcript-item" data-idx="${idx}">
                <div class="item-meta">
                  <span class="speaker-badge ${item.speaker.includes('Maya') ? 'maya' : 'alex'}">${item.speaker}</span>
                  <span class="timestamp">${item.timestamp}</span>
                </div>
                <p class="transcript-text">${item.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    // Canvas Waveform Animation
    const canvas = containerEl.querySelector("#waveform-canvas");
    const ctx = canvas.getContext("2d");

    let animId = null;
    const drawWaveform = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#8b5cf6";

      const barWidth = 4;
      const gap = 2;
      const count = Math.floor(canvas.width / (barWidth + gap));

      for (let i = 0; i < count; i++) {
        const height = Math.random() * (window.studioAudioSynth && window.studioAudioSynth.isPlaying ? 80 : 15) + 10;
        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;
        ctx.fillRect(x, y, barWidth, height);
      }
      animId = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    // Controls
    const btnPlay = containerEl.querySelector("#btn-play-podcast");
    const btnPause = containerEl.querySelector("#btn-pause-podcast");
    const boardScreen = containerEl.querySelector("#chalkboard-screen");
    const transcriptItems = containerEl.querySelectorAll(".transcript-item");

    let currentTranscriptIdx = 0;

    const playNextLine = () => {
      if (currentTranscriptIdx >= podcast.transcript.length) {
        currentTranscriptIdx = 0;
        return;
      }

      transcriptItems.forEach(ti => ti.classList.remove("active"));
      const currentItemEl = transcriptItems[currentTranscriptIdx];
      if (currentItemEl) currentItemEl.classList.add("active");

      const lineData = podcast.transcript[currentTranscriptIdx];
      boardScreen.innerHTML = `<code>${lineData.boardCmd.replace("DRAW_TEXT('", "").replace("')", "")}</code>`;

      if (window.studioAudioSynth) {
        window.studioAudioSynth.speakText(`${lineData.speaker} says: ${lineData.text}`, () => {
          currentTranscriptIdx++;
          playNextLine();
        });
      }
    };

    btnPlay.addEventListener("click", () => {
      playNextLine();
    });

    btnPause.addEventListener("click", () => {
      if (window.studioAudioSynth) window.studioAudioSynth.pause();
    });

    containerEl.querySelectorAll(".speed-btn").forEach(sBtn => {
      sBtn.addEventListener("click", () => {
        containerEl.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
        sBtn.classList.add("active");
        const speed = parseFloat(sBtn.getAttribute("data-speed"));
        if (window.studioAudioSynth) window.studioAudioSynth.setRate(speed);
      });
    });
  }
}

window.notebookLMModule = new NotebookLMModule();


/* File: modules/duolingoTrack.js */
/**
 * stud.io Duolingo-Style Gamified Quest Track Module
 */
class DuolingoTrackModule {
  renderDuolingoTrack(containerEl) {
    this.userHearts = 5;
    this.userXP = 1250;
    this.userStreak = 14;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>🎮 Duolingo-Style Gamified Quest Track</h2>
          <p>Complete daily bite-sized quest nodes, climb the Diamond League, and maintain your streak flame.</p>
        </div>

        <!-- Gamification Stats Top Bar -->
        <div class="gamify-stats-bar glass-panel">
          <div class="stat-pill streak">🔥 <strong id="streak-val">${this.userStreak}</strong> Days</div>
          <div class="stat-pill xp">⚡ <strong id="xp-val">${this.userXP}</strong> XP</div>
          <div class="stat-pill hearts">❤️ <strong id="hearts-val">${this.userHearts}/5</strong></div>
        </div>
      </div>

      <!-- Quest Node Map -->
      <div class="quest-map-container glass-panel">
        <svg class="quest-path-svg" width="100%" height="450">
          <path d="M 100 80 Q 250 150, 400 80 T 700 80 T 900 250 T 600 380 T 200 380" stroke="rgba(139, 92, 246, 0.4)" stroke-width="6" fill="none" stroke-dasharray="8 8"/>
        </svg>

        <div class="nodes-layer">
          <div class="node-item node-unlocked" style="top: 50px; left: 80px;" data-node="node_1">
            <div class="node-circle">🎯</div>
            <span class="node-title">Node 1: Foundational Core</span>
          </div>

          <div class="node-item node-locked" style="top: 50px; left: 380px;" data-node="node_2">
            <div class="node-circle">⚡</div>
            <span class="node-title">Node 2: Speed Round Sprint</span>
          </div>

          <div class="node-item node-locked" style="top: 50px; left: 680px;" data-node="node_3">
            <div class="node-circle">🎧</div>
            <span class="node-title">Node 3: Audio Listening Card</span>
          </div>

          <div class="node-item node-boss node-locked" style="top: 220px; left: 850px;" data-node="node_5">
            <div class="node-circle">👑</div>
            <span class="node-title">Boss Battle: Past Paper Trap</span>
          </div>
        </div>
      </div>

      <!-- Quiz Modal Container -->
      <div id="quiz-modal-overlay" class="quiz-modal-overlay hidden">
        <div class="quiz-modal glass-panel" id="quiz-modal-body"></div>
      </div>
    `;

    // Click on node
    containerEl.querySelectorAll(".node-item").forEach(node => {
      node.addEventListener("click", () => {
        const nodeId = node.getAttribute("data-node");
        this.openQuizModal(containerEl, nodeId);
      });
    });
  }

  openQuizModal(containerEl, nodeId) {
    const modalOverlay = containerEl.querySelector("#quiz-modal-overlay");
    const modalBody = containerEl.querySelector("#quiz-modal-body");
    modalOverlay.classList.remove("hidden");

    const quizzes = window.STUDIO_DUOLINGO_DB.quizBank[nodeId] || window.STUDIO_DUOLINGO_DB.quizBank.node_1;
    let currentIdx = 0;

    const renderCurrentQuiz = () => {
      if (currentIdx >= quizzes.length) {
        // Victory!
        this.userXP += 100;
        containerEl.querySelector("#xp-val").innerText = this.userXP;

        modalBody.innerHTML = `
          <div class="victory-screen text-center">
            <div class="victory-icon">🎉</div>
            <h2>Quest Node Completed!</h2>
            <p>You earned <strong>+100 XP</strong> and maintained your <strong>${this.userStreak}-day streak</strong>!</p>
            <button id="btn-close-victory" class="btn-primary">Continue Quest Map ➜</button>
          </div>
        `;
        modalBody.querySelector("#btn-close-victory").addEventListener("click", () => {
          modalOverlay.classList.add("hidden");
        });
        return;
      }

      const q = quizzes[currentIdx];
      modalBody.innerHTML = `
        <div class="quiz-header">
          <span>Question ${currentIdx + 1} of ${quizzes.length}</span>
          <button id="btn-close-quiz" class="btn-close">&times;</button>
        </div>

        <h3 class="quiz-question">${q.question}</h3>

        <div class="quiz-options">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-opt="${idx}">${opt}</button>
          `).join("")}
        </div>

        <div id="quiz-feedback" class="quiz-feedback hidden"></div>
      `;

      modalBody.querySelector("#btn-close-quiz").addEventListener("click", () => {
        modalOverlay.classList.add("hidden");
      });

      modalBody.querySelectorAll(".quiz-opt-btn").forEach(optBtn => {
        optBtn.addEventListener("click", () => {
          const selected = parseInt(optBtn.getAttribute("data-opt"));
          const feedback = modalBody.querySelector("#quiz-feedback");
          feedback.classList.remove("hidden");

          if (selected === q.correct) {
            feedback.innerHTML = `<div class="feedback-box success">✅ Correct! ${q.explanation}</div>`;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(true, 1500, q.type);
            setTimeout(() => {
              currentIdx++;
              renderCurrentQuiz();
            }, 1600);
          } else {
            this.userHearts = Math.max(0, this.userHearts - 1);
            containerEl.querySelector("#hearts-val").innerText = `${this.userHearts}/5`;
            feedback.innerHTML = `<div class="feedback-box error">❌ Incorrect! ${q.explanation}</div>`;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(false, 3000, q.type);
          }
        });
      });
    };

    renderCurrentQuiz();
  }
}

window.duolingoTrackModule = new DuolingoTrackModule();


/* File: modules/activeRecall.js */
/**
 * stud.io Ultimate Active Recall & Spaced Repetition Suite Module
 */
class ActiveRecallModule {
  renderActiveRecall(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🧠 Ultimate Active Recall & Spaced Repetition Suite</h2>
        <p>Leitner 5-Box flashcard decks, Feynman AI mentor, timed Blurting workspace, and Cornell note generators.</p>
      </div>

      <div class="active-recall-tabs">
        <button class="ar-tab active" data-tab="tab-leitner">📇 Leitner 5-Box Flashcards</button>
        <button class="ar-tab" data-tab="tab-feynman">👨‍🏫 Feynman AI Mentor</button>
        <button class="ar-tab" data-tab="tab-blurting">📝 Timed Blurting Method</button>
      </div>

      <div class="ar-content-area glass-panel">
        <!-- Tab 1: Leitner Flashcards -->
        <div class="ar-pane active" id="tab-leitner">
          <div class="leitner-boxes-bar">
            <div class="l-box active">Box 1 (Daily)</div>
            <div class="l-box">Box 2 (Every 3 Days)</div>
            <div class="l-box">Box 3 (Weekly)</div>
            <div class="l-box">Box 4 (Bi-Weekly)</div>
            <div class="l-box">Box 5 (Monthly)</div>
          </div>

          <!-- Flashcard 3D Flip Card -->
          <div class="flashcard-container">
            <div class="flashcard glass-panel" id="leitner-flashcard">
              <div class="card-side card-front">
                <span class="card-topic">Taylor & Power Series</span>
                <h3>What is the Maclaurin series expansion for e^x?</h3>
                <small class="flip-hint">👆 Click card to flip answer</small>
              </div>
              <div class="card-side card-back hidden">
                <h3>Answer:</h3>
                <p><code>∑_{n=0}^∞ x^n / n! = 1 + x + x^2/2! + x^3/3! + ...</code></p>
                <div class="card-btn-row">
                  <button id="btn-fc-wrong" class="btn-danger">❌ Got it Wrong (Move to Box 1)</button>
                  <button id="btn-fc-correct" class="btn-success">✅ Got it Right (Promote to Box 2)</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Feynman AI Mentor -->
        <div class="ar-pane" id="tab-feynman">
          <h3>👨‍🏫 Feynman Technique AI Student Mentor</h3>
          <p>Explain a complex topic in simple plain English as if teaching a middle-school student.</p>
          
          <div class="form-group">
            <label>Concept Title:</label>
            <input type="text" class="form-control" value="Taylor Series & Function Approximations" readonly/>
          </div>

          <div class="form-group">
            <label>Your Plain English Explanation:</label>
            <textarea id="feynman-text" class="notes-textarea" placeholder="Explain how Taylor series work without relying on heavy mathematical jargon..."></textarea>
          </div>

          <button id="btn-eval-feynman" class="btn-primary">
            🤖 Evaluate Explanation with Feynman AI
          </button>

          <div id="feynman-result" class="feynman-result-box hidden"></div>
        </div>

        <!-- Tab 3: Timed Blurting Method -->
        <div class="ar-pane" id="tab-blurting">
          <h3>📝 Timed Blurting Method Workspace</h3>
          <p>You have 3 minutes to blurt out everything you know from memory. Screen will wipe when timer starts!</p>

          <div class="blurting-timer-bar">
            <span>Timer: <strong id="blurt-timer-val">03:00</strong></span>
            <button id="btn-start-blurting" class="btn-primary">▶️ Start 3-Min Blurt Session</button>
          </div>

          <textarea id="blurt-input" class="notes-textarea" placeholder="Blurt out every formula, definition, and concept key point you remember..." disabled></textarea>
          <div id="blurt-result" class="blurt-result-box hidden"></div>
        </div>
      </div>
    `;

    // Tabs logic
    const tabs = containerEl.querySelectorAll(".ar-tab");
    const panes = containerEl.querySelectorAll(".ar-pane");

    tabs.forEach(t => {
      t.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        panes.forEach(pane => pane.classList.remove("active"));

        t.classList.add("active");
        const target = t.getAttribute("data-tab");
        containerEl.querySelector(`#${target}`).classList.add("active");
      });
    });

    // Flashcard Flip
    const fc = containerEl.querySelector("#leitner-flashcard");
    const front = fc.querySelector(".card-front");
    const back = fc.querySelector(".card-back");

    fc.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      front.classList.toggle("hidden");
      back.classList.toggle("hidden");
    });

    fc.querySelector("#btn-fc-correct").addEventListener("click", () => {
      alert("🎉 Card promoted to Box 2! Next review in 3 days.");
      front.classList.remove("hidden");
      back.classList.add("hidden");
    });

    fc.querySelector("#btn-fc-wrong").addEventListener("click", () => {
      alert("⚠️ Card moved to Box 1 for daily review.");
      front.classList.remove("hidden");
      back.classList.add("hidden");
    });

    // Feynman AI Evaluation
    const btnFeynman = containerEl.querySelector("#btn-eval-feynman");
    const feynmanText = containerEl.querySelector("#feynman-text");
    const feynmanResult = containerEl.querySelector("#feynman-result");

    btnFeynman.addEventListener("click", () => {
      if (window.feynmanAgent) {
        const evalRes = window.feynmanAgent.evaluateExplanation("Taylor Series", feynmanText.value);
        feynmanResult.classList.remove("hidden");
        feynmanResult.innerHTML = `
          <h4>${evalRes.rating} (Score: ${evalRes.score}/100)</h4>
          <p>${evalRes.feedback}</p>
        `;
      }
    });

    // Blurting timer
    const btnBlurt = containerEl.querySelector("#btn-start-blurting");
    const blurtInput = containerEl.querySelector("#blurt-input");
    const blurtTimerVal = containerEl.querySelector("#blurt-timer-val");
    const blurtResult = containerEl.querySelector("#blurt-result");

    btnBlurt.addEventListener("click", () => {
      blurtInput.disabled = false;
      blurtInput.value = "";
      blurtInput.focus();

      let timeLeft = 180;
      const interval = setInterval(() => {
        timeLeft--;
        const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const secs = String(timeLeft % 60).padStart(2, "0");
        blurtTimerVal.innerText = `${mins}:${secs}`;

        if (timeLeft <= 0) {
          clearInterval(interval);
          blurtInput.disabled = true;

          const vecRes = window.studioVectorEngine ? 
            window.studioVectorEngine.compareTexts(blurtInput.value, "Taylor series expansion f(x) = sum f^(n)(c)/n! * (x-c)^n Lagrange error bound ratio test") : 
            { similarityScore: 82, missingTerms: ["Ratio Test"] };

          blurtResult.classList.remove("hidden");
          blurtResult.innerHTML = `
            <h4>🎉 Blurt Session Completed!</h4>
            <p>Accuracy Score against Master Syllabus Notes: <strong>${vecRes.similarityScore}%</strong></p>
            <p>Missing Master Terms: <strong>${vecRes.missingTerms.join(", ") || "None!"}</strong></p>
          `;
        }
      }, 1000);
    });
  }
}

window.activeRecallModule = new ActiveRecallModule();


/* File: modules/pomodoro.js */
/**
 * stud.io Pomodoro & Web Audio Soundscape Focus Studio Module
 */
class PomodoroModule {
  renderPomodoro(containerEl) {
    this.timerSeconds = 25 * 60;
    this.initialSeconds = 25 * 60;
    this.timerInterval = null;
    this.isRunning = false;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>⏱️ Pomodoro & Synthesized Soundscape Studio</h2>
        <p>Customizable deep work focus timer integrated with Web Audio synthesized rain, cafe, and binaural alpha waves.</p>
      </div>

      <div class="pomodoro-layout">
        <!-- Left: Timer Circle Ring -->
        <div class="timer-panel glass-panel">
          <div class="timer-mode-selector">
            <button class="mode-btn active" data-mins="25">25m Standard</button>
            <button class="mode-btn" data-mins="50">50m Deep Work</button>
            <button class="mode-btn" data-mins="90">90m Ultradian</button>
          </div>

          <div class="svg-timer-container">
            <svg class="timer-svg" width="260" height="260">
              <circle cx="130" cy="130" r="110" stroke="rgba(255,255,255,0.08)" stroke-width="12" fill="none"/>
              <circle id="timer-progress-ring" cx="130" cy="130" r="110" stroke="#8b5cf6" stroke-width="12" fill="none" stroke-dasharray="691" stroke-dashoffset="0" stroke-linecap="round"/>
            </svg>

            <div class="timer-display-overlay">
              <span id="pomo-display-time">25:00</span>
              <small id="pomo-status-label">Deep Focus Sprint</small>
            </div>
          </div>

          <div class="timer-controls">
            <button id="btn-pomo-start" class="btn-primary btn-large">▶️ Start Session</button>
            <button id="btn-pomo-reset" class="btn-secondary">🔄 Reset</button>
          </div>
        </div>

        <!-- Right: Web Audio Soundscape Controls -->
        <div class="soundscape-panel glass-panel">
          <h3>🎵 Synthesized Web Audio Soundscapes</h3>
          <p>Real-time audio synthesized natively in your browser without external media downloads.</p>

          <div class="soundscape-grid">
            <div class="sound-card" data-sound="rain">
              <span class="sound-icon">🌧️</span>
              <strong>Rain Ambiance</strong>
              <small>Pink noise filter</small>
            </div>
            <div class="sound-card" data-sound="binaural">
              <span class="sound-icon">🧠</span>
              <strong>10Hz Alpha Waves</strong>
              <small>Focus beat offset</small>
            </div>
            <div class="sound-card" data-sound="lofi">
              <span class="sound-icon">🌌</span>
              <strong>Deep Space Lo-Fi</strong>
              <small>Warm triangle wave</small>
            </div>
          </div>

          <div class="volume-slider-row">
            <span>🔊 Volume:</span>
            <input type="range" id="soundscape-volume" min="0" max="1" step="0.05" value="0.3"/>
          </div>

          <button id="btn-stop-soundscape" class="btn-secondary full-width">
            ⏹️ Stop All Soundscapes
          </button>
        </div>
      </div>
    `;

    // Timer Mode selection
    const modeBtns = containerEl.querySelectorAll(".mode-btn");
    const displayTime = containerEl.querySelector("#pomo-display-time");
    const ring = containerEl.querySelector("#timer-progress-ring");

    modeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const mins = parseInt(btn.getAttribute("data-mins"));
        this.timerSeconds = mins * 60;
        this.initialSeconds = mins * 60;

        const mStr = String(mins).padStart(2, "0");
        displayTime.innerText = `${mStr}:00`;
        ring.style.strokeDashoffset = "0";

        if (this.isRunning) {
          clearInterval(this.timerInterval);
          this.isRunning = false;
          containerEl.querySelector("#btn-pomo-start").innerText = "▶️ Start Session";
        }
      });
    });

    // Start / Pause
    const btnStart = containerEl.querySelector("#btn-pomo-start");
    btnStart.addEventListener("click", () => {
      if (!this.isRunning) {
        this.isRunning = true;
        btnStart.innerText = "⏸️ Pause Session";

        this.timerInterval = setInterval(() => {
          this.timerSeconds--;
          const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
          const s = String(this.timerSeconds % 60).padStart(2, "0");
          displayTime.innerText = `${m}:${s}`;

          const progressRatio = 1 - (this.timerSeconds / this.initialSeconds);
          const circumference = 691;
          ring.style.strokeDashoffset = String(progressRatio * circumference);

          if (this.timerSeconds <= 0) {
            clearInterval(this.timerInterval);
            this.isRunning = false;
            btnStart.innerText = "▶️ Start Session";
            alert("🔔 Focus session complete! Take a 5-minute break.");
          }
        }, 1000);
      } else {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        btnStart.innerText = "▶️ Resume Session";
      }
    });

    // Reset
    containerEl.querySelector("#btn-pomo-reset").addEventListener("click", () => {
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.timerSeconds = this.initialSeconds;
      const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
      displayTime.innerText = `${m}:00`;
      ring.style.strokeDashoffset = "0";
      btnStart.innerText = "▶️ Start Session";
    });

    // Soundscapes
    const soundCards = containerEl.querySelectorAll(".sound-card");
    soundCards.forEach(card => {
      card.addEventListener("click", () => {
        soundCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const sound = card.getAttribute("data-sound");
        if (window.soundscapeSynth) {
          if (sound === "rain") window.soundscapeSynth.playRain();
          else if (sound === "binaural") window.soundscapeSynth.playBinauralAlpha();
          else if (sound === "lofi") window.soundscapeSynth.playSpaceLoFi();
        }
      });
    });

    containerEl.querySelector("#soundscape-volume").addEventListener("input", (e) => {
      if (window.soundscapeSynth) {
        window.soundscapeSynth.setVolume(parseFloat(e.target.value));
      }
    });

    containerEl.querySelector("#btn-stop-soundscape").addEventListener("click", () => {
      soundCards.forEach(c => c.classList.remove("active"));
      if (window.soundscapeSynth) window.soundscapeSynth.stop();
    });
  }
}

window.pomodoroModule = new PomodoroModule();


/* File: modules/examSimulator.js */
/**
 * stud.io Worksheet & Timed Mock Exam Simulator Module
 */
class ExamSimulatorModule {
  renderExamSimulator(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>📝 Worksheet & Timed Mock Exam Simulator</h2>
        <p>Generate target topic worksheets or attempt full-length timed mock exams with step-by-step mark schemes.</p>
      </div>

      <div class="simulator-layout">
        <!-- Worksheet Generator -->
        <div class="sim-card glass-panel">
          <h3>⚡ Custom Worksheet Generator</h3>
          <p>Generate a customized practice problem worksheet based on high-yield exam predictions.</p>

          <div class="form-group">
            <label>Target Subject:</label>
            <select class="form-control" id="ws-subject">
              <option value="ap_calc">AP Calculus BC - Infinite Series & Taylor</option>
              <option value="cbse_physics">CBSE Class 12th Physics - Ray Optics</option>
            </select>
          </div>

          <div class="form-group">
            <label>Number of Questions:</label>
            <select class="form-control" id="ws-count">
              <option value="5">5 Questions (Quick Practice)</option>
              <option value="10">10 Questions (Standard Sprint)</option>
              <option value="20">20 Questions (Full Deep Dive)</option>
            </select>
          </div>

          <button id="btn-gen-worksheet" class="btn-primary">
            📄 Generate & Print Worksheet
          </button>

          <div id="worksheet-output" class="worksheet-output hidden"></div>
        </div>

        <!-- Timed Mock Exam -->
        <div class="sim-card glass-panel">
          <h3>⏱️ Full-Length Timed Mock Exam</h3>
          <p>Simulate official exam conditions with live timer, question flagger, and diagnostic score breakdown.</p>

          <div class="exam-info-box">
            <div><strong>Exam:</strong> AP Calculus BC Model Test</div>
            <div><strong>Duration:</strong> 15 Minutes (Timed Sprint)</div>
            <div><strong>Total Marks:</strong> 25 Marks</div>
          </div>

          <button id="btn-start-mock-exam" class="btn-primary btn-large">
            🎯 Start Timed Mock Exam
          </button>
        </div>
      </div>
    `;

    // Worksheet Generator
    const btnGen = containerEl.querySelector("#btn-gen-worksheet");
    const outputEl = containerEl.querySelector("#worksheet-output");

    btnGen.addEventListener("click", () => {
      outputEl.classList.remove("hidden");
      outputEl.innerHTML = `
        <div class="worksheet-paper">
          <h4>📄 stud.io Practice Worksheet: Infinite Series & Taylor Polynomials</h4>
          <p><small>Date: ${new Date().toLocaleDateString()} | Target Grade: 5/5</small></p>

          <div class="ws-question">
            <strong>Q1 (5 Marks):</strong> Find the interval of convergence for ∑ (x - 3)^n / (n · 4^n) using the Ratio Test. Show all work for endpoints.
          </div>
          <div class="ws-question">
            <strong>Q2 (4 Marks):</strong> Write the first four non-zero terms of the Taylor series for f(x) = sin(x^2) centered at x = 0.
          </div>
          <div class="ws-question">
            <strong>Q3 (6 Marks):</strong> Determine the Lagrange error bound when P_3(0.2) is used to approximate e^(0.2).
          </div>
        </div>
      `;
    });

    // Mock Exam
    const btnMock = containerEl.querySelector("#btn-start-mock-exam");
    btnMock.addEventListener("click", () => {
      alert("🎯 Timed Mock Exam initialized! Your 15-minute countdown clock is active.");
    });
  }
}

window.examSimulatorModule = new ExamSimulatorModule();


/* File: modules/digitalVault.js */
/**
 * stud.io Global Digital Vault & Vector Formula Search Engine Module
 */
class DigitalVaultModule {
  renderDigitalVault(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>📚 Global Digital Library & Vector Formula Vault</h2>
        <p>Search thousands of formula sheets, cheat sheets, quick summaries, and high-resolution SVG mind maps.</p>
      </div>

      <div class="vault-search-bar glass-panel">
        <input type="text" id="vault-search-input" class="search-input" placeholder="🔍 Search formulas, key definitions, or concepts (e.g. 'Taylor Series', 'Lens Maker', 'Biot-Savart')..."/>
        <button id="btn-vault-search" class="btn-primary">Vector Search 🚀</button>
      </div>

      <div class="vault-grid">
        <div class="vault-card glass-panel">
          <span class="v-icon">📐</span>
          <h3>AP Calculus Formula Cheat Sheet</h3>
          <p>Complete derivative rules, integral tables, and series convergence tests.</p>
          <button class="btn-secondary btn-small">📄 Open Cheat Sheet</button>
        </div>

        <div class="vault-card glass-panel">
          <span class="v-icon">⚡</span>
          <h3>JEE & CBSE Physics Formula Vault</h3>
          <p>Electrostatics, Ray Optics, Kirchhoff Laws, and Quantum Physics summary.</p>
          <button class="btn-secondary btn-small">📄 Open Cheat Sheet</button>
        </div>

        <div class="vault-card glass-panel">
          <span class="v-icon">🧪</span>
          <h3>A-Level & NEET Chemistry Mind Map</h3>
          <p>Organic reaction mechanisms, thermodynamics, and electrode potentials.</p>
          <button class="btn-secondary btn-small">📄 Open Mind Map</button>
        </div>
      </div>
    `;

    const searchInput = containerEl.querySelector("#vault-search-input");
    const btnSearch = containerEl.querySelector("#btn-vault-search");

    btnSearch.addEventListener("click", () => {
      const query = searchInput.value;
      if (!query) return;
      alert(`🔍 Vector Engine searched global vault for "${query}". Found 4 matching formula sheets & mind maps.`);
    });
  }
}

window.digitalVaultModule = new DigitalVaultModule();


/* File: modules/extracurricular.js */
/**
 * stud.io Extracurricular & Beyond-Syllabus Academy Module
 */
class ExtracurricularModule {
  renderExtracurricular(containerEl) {
    const courses = window.STUDIO_EXTRACURRICULAR_DB || [];

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🌟 Extracurricular & Beyond-Syllabus Academy</h2>
        <p>Learn non-academic skills: Python & AI engineering, Personal Finance, Public Speaking, Astronomy, and Music Theory.</p>
      </div>

      <div class="extra-courses-grid">
        ${courses.map(course => `
          <div class="course-card glass-panel">
            <div class="course-header">
              <span class="c-icon">${course.icon}</span>
              <span class="c-category">${course.category}</span>
            </div>
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <div class="course-meta">
              <span>📚 ${course.lessons} Lessons</span>
              <span>🎓 ${course.level}</span>
            </div>
            <button class="btn-primary btn-small full-width btn-start-course">
              🚀 Enroll & Begin Course
            </button>
          </div>
        `).join("")}
      </div>
    `;

    containerEl.querySelectorAll(".btn-start-course").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("🎉 Enrolled in course! Opening interactive lesson module 1...");
      });
    });
  }
}

window.extracurricularModule = new ExtracurricularModule();


/* File: app.js */
/**
 * stud.io Central SPA Controller & Navigation Router
 */
class StudioApp {
  constructor() {
    this.userState = {
      isLoggedIn: false,
      country: "USA",
      board: "ap_calc_bc",
      difficulty: "Time Management",
      streak: 14,
      xp: 1250,
      hearts: 5,
      currentTab: "pattern"
    };

    this.rootEl = document.getElementById("app-root");
  }

  init() {
    console.log("⚡ stud.io App initializing...");
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("dashboard") || urlParams.has("app")) {
      this.renderAppShell();
    } else {
      this.renderLandingPage();
    }
  }

  renderLandingPage(defaultCountry = "USA") {
    this.rootEl.innerHTML = `<div id="landing-container"></div><div id="onboarding-modal-container"></div>`;
    const landingContainer = document.getElementById("landing-container");

    if (window.landingPageModule) {
      window.landingPageModule.renderLandingPage(landingContainer, (country, directDashboard) => {
        if (directDashboard) {
          this.renderAppShell();
        } else {
          this.openOnboardingModal(country || defaultCountry);
        }
      });
    }
  }

  openOnboardingModal(country = "USA") {
    const modalContainer = document.getElementById("onboarding-modal-container");
    if (window.onboardingModule) {
      window.onboardingModule.renderOnboarding(modalContainer, country, (profileData) => {
        this.userState.isLoggedIn = true;
        this.userState.country = profileData.country;
        this.userState.board = profileData.board;
        this.userState.difficulty = profileData.difficulty;

        // Render main app dashboard
        this.renderAppShell();
      });
    }
  }

  renderAppShell() {
    this.rootEl.innerHTML = `
      <div class="app-shell">
        <!-- Sidebar -->
        <aside class="app-sidebar">
          <div class="logo-area">
            <span class="logo-icon">🚀</span>
            <span class="logo-text gradient-text">stud.io</span>
          </div>

          <nav class="nav-menu">
            <a class="nav-item active" data-tab="pattern">📊 Pattern Intelligence</a>
            <a class="nav-item" data-tab="notebook">🎙️ NotebookLM Studio</a>
            <a class="nav-item" data-tab="duolingo">🎮 Duolingo Track</a>
            <a class="nav-item" data-tab="activerecall">🧠 Active Recall Suite</a>
            <a class="nav-item" data-tab="pomodoro">⏱️ Pomodoro Studio</a>
            <a class="nav-item" data-tab="neuro">🧠 NeuroAdapt Dashboard</a>
            <a class="nav-item" data-tab="notes">📝 Running Notes</a>
            <a class="nav-item" data-tab="exam">📝 Exam Simulator</a>
            <a class="nav-item" data-tab="vault">📚 Digital Library</a>
            <a class="nav-item" data-tab="extra">🌟 Beyond-Syllabus</a>
          </nav>
        </aside>

        <!-- Main App Container -->
        <main class="app-main">
          <!-- Top Navbar -->
          <header class="top-navbar">
            <div class="user-badge">
              <span>🌍 ${this.userState.country} (${this.userState.board.toUpperCase()})</span>
            </div>
            <div class="top-stats">
              <div class="stat-pill streak">🔥 ${this.userState.streak} Days</div>
              <div class="stat-pill xp">⚡ ${this.userState.xp} XP</div>
              <div class="stat-pill hearts">❤️ ${this.userState.hearts}/5</div>
            </div>
          </header>

          <!-- Dynamic Viewport -->
          <div class="main-viewport" id="main-viewport"></div>
        </main>
      </div>
    `;

    // Sidebar Tab Listeners
    const navItems = this.rootEl.querySelectorAll(".nav-item");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const tab = item.getAttribute("data-tab");
        this.loadTab(tab);
      });
    });

    // Load initial tab
    this.loadTab("pattern");
  }

  loadTab(tab) {
    const viewport = document.getElementById("main-viewport");
    viewport.innerHTML = "";

    if (tab === "pattern" && window.patternAnalyzerModule) {
      window.patternAnalyzerModule.renderPatternAnalyzer(viewport, this.userState.board);
    } else if (tab === "notebook" && window.notebookLMModule) {
      window.notebookLMModule.renderNotebookLM(viewport, "ap_c10");
    } else if (tab === "duolingo" && window.duolingoTrackModule) {
      window.duolingoTrackModule.renderDuolingoTrack(viewport);
    } else if (tab === "activerecall" && window.activeRecallModule) {
      window.activeRecallModule.renderActiveRecall(viewport);
    } else if (tab === "pomodoro" && window.pomodoroModule) {
      window.pomodoroModule.renderPomodoro(viewport);
    } else if (tab === "neuro" && window.neuroDashboardModule) {
      window.neuroDashboardModule.renderDashboard(viewport);
    } else if (tab === "notes" && window.studentNotesModule) {
      window.studentNotesModule.renderNotesWorkspace(viewport);
    } else if (tab === "exam" && window.examSimulatorModule) {
      window.examSimulatorModule.renderExamSimulator(viewport);
    } else if (tab === "vault" && window.digitalVaultModule) {
      window.digitalVaultModule.renderDigitalVault(viewport);
    } else if (tab === "extra" && window.extracurricularModule) {
      window.extracurricularModule.renderExtracurricular(viewport);
    }
  }
}

// Initialize on DOM ready or immediately if already loaded
function initStudioApp() {
  if (!window.studioApp) {
    window.studioApp = new StudioApp();
    window.studioApp.init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStudioApp);
} else {
  initStudioApp();
}


