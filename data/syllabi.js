/**
 * stud.io Global Syllabi Database Vault (Comprehensive Grade 5 to Grade 12 Edition)
 * Pre-downloaded curriculum matrices spanning elementary, middle school, high school,
 * competitive entrances, and international diploma programs.
 */
window.STUDIO_SYLLABI_DB = {
  USA: {
    country: "United States of America",
    flag: "🇺🇸",
    boards: [
      // Grade 5
      {
        id: "us_grade_5",
        name: "Grade 5: Elementary Mathematics & General Science",
        grade: "Grade 5 (Elementary)",
        subjects: ["Fractions & Decimals", "Volume & Measurement", "Earth & Space Systems", "Matter & Energy Flow in Ecosystems"],
        chapters: [
          { id: "us5_m1", name: "Fractions Addition, Subtraction & Division", weight: 25, pastPaperFreq: 30, difficulty: "Easy" },
          { id: "us5_m2", name: "Decimals Place Value & Multiplication", weight: 20, pastPaperFreq: 25, difficulty: "Easy" },
          { id: "us5_m3", name: "Volume & 3D Geometric Measurement", weight: 15, pastPaperFreq: 20, difficulty: "Medium" },
          { id: "us5_s1", name: "Earth's Spheres & Water Cycle", weight: 20, pastPaperFreq: 22, difficulty: "Easy" },
          { id: "us5_s2", name: "Plant Photosynthesis & Food Chains", weight: 20, pastPaperFreq: 24, difficulty: "Easy" }
        ]
      },
      // Grade 6
      {
        id: "us_grade_6",
        name: "Grade 6: Pre-Algebra & Earth/Space Science",
        grade: "Grade 6 (Middle School)",
        subjects: ["Ratios & Proportional Reasoning", "Algebraic Expressions", "Plate Tectonics & Rock Cycle", "Weather Patterns & Climate"],
        chapters: [
          { id: "us6_m1", name: "Ratios, Unit Rates & Percentages", weight: 25, pastPaperFreq: 32, difficulty: "Medium" },
          { id: "us6_m2", name: "One-Variable Equations & Inequalities", weight: 25, pastPaperFreq: 35, difficulty: "Medium" },
          { id: "us6_s1", name: "Earth's Interior & Plate Tectonics", weight: 25, pastPaperFreq: 28, difficulty: "Medium" },
          { id: "us6_s2", name: "Solar System & Planetary Motion", weight: 25, pastPaperFreq: 26, difficulty: "Medium" }
        ]
      },
      // Grade 7
      {
        id: "us_grade_7",
        name: "Grade 7: Pre-Algebra II & Life Science / Genetics",
        grade: "Grade 7 (Middle School)",
        subjects: ["Linear Expressions & Equations", "Probability & Statistics", "Cell Structure & Heredity", "Human Body Systems"],
        chapters: [
          { id: "us7_m1", name: "Multi-Step Linear Equations & Slope", weight: 30, pastPaperFreq: 40, difficulty: "Medium" },
          { id: "us7_m2", name: "Probability Models & Random Sampling", weight: 20, pastPaperFreq: 25, difficulty: "Medium" },
          { id: "us7_s1", name: "Cellular Structure, Organelles & Mitosis", weight: 25, pastPaperFreq: 30, difficulty: "Medium" },
          { id: "us7_s2", name: "Genetics, Punnett Squares & DNA Heredity", weight: 25, pastPaperFreq: 32, difficulty: "Hard" }
        ]
      },
      // Grade 8
      {
        id: "us_grade_8",
        name: "Grade 8: Algebra I & Physical Science",
        grade: "Grade 8 (Middle School Capstone)",
        subjects: ["Linear Systems & Functions", "Exponents & Scientific Notation", "Newtonian Motion & Forces", "Energy & Waves"],
        chapters: [
          { id: "us8_m1", name: "Systems of Linear Equations & Inequalities", weight: 25, pastPaperFreq: 36, difficulty: "Hard" },
          { id: "us8_m2", name: "Exponents, Radicals & Pythagorean Theorem", weight: 25, pastPaperFreq: 34, difficulty: "Medium" },
          { id: "us8_s1", name: "Newton's Laws of Motion & Net Force", weight: 25, pastPaperFreq: 32, difficulty: "Hard" },
          { id: "us8_s2", name: "Electromagnetic Spectrum & Wave Mechanics", weight: 25, pastPaperFreq: 30, difficulty: "Medium" }
        ]
      },
      // Grade 9
      {
        id: "us_grade_9",
        name: "Grade 9: Geometry, Algebra II & High School Biology",
        grade: "Grade 9 (Freshman)",
        subjects: ["Geometric Proofs & Trigonometry", "Quadratic Functions", "Ecology & Evolution", "Molecular Genetics"],
        chapters: [
          { id: "us9_g1", name: "Congruence, Similarity & Triangle Proofs", weight: 25, pastPaperFreq: 35, difficulty: "Hard" },
          { id: "us9_a1", name: "Quadratic Equations & Complex Numbers", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "us9_b1", name: "DNA Replication, Transcription & Translation", weight: 25, pastPaperFreq: 36, difficulty: "Hard" },
          { id: "us9_b2", name: "Natural Selection & Population Genetics", weight: 25, pastPaperFreq: 30, difficulty: "Medium" }
        ]
      },
      // Grade 10
      {
        id: "us_grade_10",
        name: "Grade 10: Pre-Calculus & High School Chemistry",
        grade: "Grade 10 (Sophomore)",
        subjects: ["Trigonometric Functions", "Vectors & Matrices", "Stoichiometry & Bonding", "Thermochemistry"],
        chapters: [
          { id: "us10_m1", name: "Unit Circle Trigonometry & Trig Identities", weight: 25, pastPaperFreq: 40, difficulty: "Hard" },
          { id: "us10_m2", name: "Matrices, Vectors & Parametric Equations", weight: 25, pastPaperFreq: 32, difficulty: "Hard" },
          { id: "us10_c1", name: "Stoichiometry, Molar Mass & Gas Laws", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "us10_c2", name: "Chemical Equilibrium & Le Chatelier's Principle", weight: 25, pastPaperFreq: 35, difficulty: "Extreme" }
        ]
      },
      // Grade 11 & 12 Advanced
      {
        id: "ap_calc_bc",
        name: "Grade 11/12: AP Calculus BC & Advanced Mathematics",
        grade: "Grade 11/12 (AP)",
        subjects: ["Differential Calculus", "Integral Calculus", "Parametric & Polar Curves", "Infinite Series & Taylor Polynomials"],
        chapters: [
          { id: "ap_c1", name: "Limits & Continuity", weight: 12, pastPaperFreq: 18, difficulty: "Medium" },
          { id: "ap_c2", name: "Differentiation: Definition & Rules", weight: 15, pastPaperFreq: 24, difficulty: "Medium" },
          { id: "ap_c3", name: "Composite, Implicit & Inverse Functions", weight: 14, pastPaperFreq: 22, difficulty: "Hard" },
          { id: "ap_c4", name: "Contextual Applications of Derivatives", weight: 16, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "ap_c5", name: "Analytical Applications of Differentiation", weight: 15, pastPaperFreq: 25, difficulty: "Hard" },
          { id: "ap_c6", name: "Integration & Fundamental Theorem", weight: 18, pastPaperFreq: 32, difficulty: "Hard" },
          { id: "ap_c7", name: "Differential Equations & Slope Fields", weight: 10, pastPaperFreq: 16, difficulty: "Medium" },
          { id: "ap_c8", name: "Applications of Integration (Volume, Arc Length)", weight: 15, pastPaperFreq: 26, difficulty: "Hard" },
          { id: "ap_c9", name: "Parametric, Polar & Vector Functions", weight: 12, pastPaperFreq: 20, difficulty: "Extreme" },
          { id: "ap_c10", name: "Infinite Sequences & Series (Taylor & Maclaurin)", weight: 18, pastPaperFreq: 35, difficulty: "Extreme" }
        ]
      },
      {
        id: "sat_math_rw",
        name: "College Board Entrance: SAT Digital (Math & R&W)",
        grade: "Standardized Entrance",
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
      // Grade 5 to 8 (CBSE / ICSE Middle School)
      {
        id: "ind_middle_school",
        name: "Class 5 to 8: CBSE Foundation Math & Science",
        grade: "Class 5 - 8 (Middle School)",
        subjects: ["Rational Numbers & Linear Equations", "Algebraic Identities & Factorisation", "Cell Structure & Microorganisms", "Force, Pressure & Sound"],
        chapters: [
          { id: "in_m1", name: "Rational Numbers & Linear Equations in One Variable", weight: 25, pastPaperFreq: 30, difficulty: "Medium" },
          { id: "in_m2", name: "Factorisation & Algebraic Expressions", weight: 25, pastPaperFreq: 35, difficulty: "Medium" },
          { id: "in_s1", name: "Microorganisms: Friend and Foe & Cell Division", weight: 25, pastPaperFreq: 28, difficulty: "Easy" },
          { id: "in_s2", name: "Force, Friction, Pressure & Acoustic Waves", weight: 25, pastPaperFreq: 32, difficulty: "Medium" }
        ]
      },
      // Class 9 & 10 (Secondary Board)
      {
        id: "cbse_10_board",
        name: "Class 9 & 10: CBSE Board Exam Math & Science",
        grade: "Class 9 & 10 (Secondary)",
        subjects: ["Real Numbers & Polynomials", "Quadratic Equations & Trigonometry", "Chemical Reactions & Carbon Compounds", "Light Reflection/Refraction & Electricity"],
        chapters: [
          { id: "in10_m1", name: "Real Numbers, Polynomials & Quadratic Equations", weight: 25, pastPaperFreq: 40, difficulty: "Medium" },
          { id: "in10_m2", name: "Introduction to Trigonometry & Heights and Distances", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "in10_s1", name: "Chemical Reactions, Acids/Bases & Carbon Compounds", weight: 25, pastPaperFreq: 42, difficulty: "Hard" },
          { id: "in10_s2", name: "Light (Ray Optics), Human Eye & Electric Current", weight: 25, pastPaperFreq: 45, difficulty: "Hard" }
        ]
      },
      // Class 11 & 12 (JEE & NEET)
      {
        id: "cbse_12_physics",
        name: "Class 11 & 12: CBSE / JEE Physics & Mathematics",
        grade: "Senior Secondary / JEE Advanced",
        subjects: ["Mechanics & Thermodynamics", "Electrostatics & Magnetism", "Ray & Wave Optics", "Modern Physics & Calculus"],
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
          { id: "ind_p10", name: "Semiconductor Electronics & Logic Gates", weight: 12, pastPaperFreq: 22, difficulty: "Medium" }
        ]
      },
      {
        id: "neet_chem",
        name: "Class 11 & 12: NEET UG Chemistry & Biology Pre-Med",
        grade: "Medical Entrance",
        subjects: ["Organic Mechanisms (GOC)", "Thermodynamics & Equilibrium", "Coordination Chemistry", "Human Physiology & Genetics"],
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
        id: "uk_ks3",
        name: "Key Stage 3 (Year 7 - 9): Foundation Math & Science",
        grade: "KS3 (Grade 6 - 8)",
        subjects: ["Algebra & Geometry", "Forces & Energy", "Organisms & Ecosystems", "Chemical Reactions"],
        chapters: [
          { id: "uk3_m1", name: "Linear Equations, Graphs & Sequences", weight: 25, pastPaperFreq: 28, difficulty: "Medium" },
          { id: "uk3_s1", name: "Particles, Separation Techniques & Acids/Alkalis", weight: 25, pastPaperFreq: 25, difficulty: "Medium" },
          { id: "uk3_s2", name: "Cells, Digestive System & Photosynthesis", weight: 25, pastPaperFreq: 26, difficulty: "Easy" },
          { id: "uk3_s3", name: "Electricity, Magnetism & Wave Energy", weight: 25, pastPaperFreq: 30, difficulty: "Medium" }
        ]
      },
      {
        id: "uk_gcse",
        name: "GCSE (Year 10 - 11): Edexcel / AQA Triple Science & Math",
        grade: "GCSE (Grade 9 - 10)",
        subjects: ["Higher Mathematics", "Physics (Motion & Radioactivity)", "Chemistry (Quantitative & Organic)", "Biology (Genetics)"],
        chapters: [
          { id: "uk_g1", name: "Quadratic Equations, Sine/Cosine Rule & Vectors", weight: 30, pastPaperFreq: 45, difficulty: "Hard" },
          { id: "uk_g2", name: "Electrolysis, Energetics & Chemical Bonding", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "uk_g3", name: "Forces, Acceleration & Fleming's Left-Hand Rule", weight: 25, pastPaperFreq: 40, difficulty: "Hard" },
          { id: "uk_g4", name: "Inheritance, Variation & Monoclonal Antibodies", weight: 20, pastPaperFreq: 32, difficulty: "Medium" }
        ]
      },
      {
        id: "uk_alevel_chem",
        name: "A-Levels (Year 12 - 13): AQA / OCR / Edexcel A-Level Chemistry & Math",
        grade: "A-Levels (Grade 11 - 12)",
        subjects: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry & Analysis", "Pure Calculus & Mechanics"],
        chapters: [
          { id: "uk_c1", name: "Atomic Structure & Amount of Substance", weight: 12, pastPaperFreq: 20, difficulty: "Medium" },
          { id: "uk_c2", name: "Bonding, Structure & Shapes of Molecules", weight: 14, pastPaperFreq: 24, difficulty: "Medium" },
          { id: "uk_c3", name: "Thermodynamics, Kinetics & Born-Haber Cycles", weight: 18, pastPaperFreq: 35, difficulty: "Hard" },
          { id: "uk_c4", name: "Electrode Potentials & Electrochemical Cells", weight: 15, pastPaperFreq: 28, difficulty: "Hard" },
          { id: "uk_c5", name: "Aromatic Chemistry (Benzene Substitution)", weight: 16, pastPaperFreq: 30, difficulty: "Hard" },
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
        id: "pak_matric",
        name: "Class 9 & 10: Federal / Punjab Board Matriculation",
        grade: "Matric (Class 9 - 10)",
        subjects: ["General & Advanced Mathematics", "Physics (Vectors, Heat & Optics)", "Chemistry (Periodic Table & Electrochemistry)", "Biology"],
        chapters: [
          { id: "pk_m1", name: "Matrices & Determinants / Quadratic Equations", weight: 25, pastPaperFreq: 35, difficulty: "Medium" },
          { id: "pk_p1", name: "Kinematics, Dynamics & Turning Effect of Forces", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "pk_c1", name: "Structure of Atoms, Chemical Reactivity & Solutions", weight: 25, pastPaperFreq: 32, difficulty: "Medium" },
          { id: "pk_b1_mat", name: "Cell Cycle, Enzymes & Bioenergetics", weight: 25, pastPaperFreq: 30, difficulty: "Medium" }
        ]
      },
      {
        id: "pak_fsc_premed",
        name: "Class 11 & 12: FSc Pre-Medical & Pre-Engineering",
        grade: "FSc (Class 11 - 12)",
        subjects: ["Cell Biology & Biotechnology", "Human Physiology & Biomolecules", "Organic & Physical Chemistry", "Calculus & Analytical Geometry"],
        chapters: [
          { id: "pk_b1", name: "Cell Structure, Function & Enzyme Kinetics", weight: 15, pastPaperFreq: 25, difficulty: "Medium" },
          { id: "pk_b2", name: "Biological Molecules (Proteins, Lipids, DNA)", weight: 14, pastPaperFreq: 22, difficulty: "Medium" },
          { id: "pk_b3", name: "Bioenergetics (Photosynthesis & Respiration)", weight: 18, pastPaperFreq: 34, difficulty: "Hard" },
          { id: "pk_b4", name: "Genetics, Inheritance & Recombinant DNA", weight: 20, pastPaperFreq: 38, difficulty: "Extreme" },
          { id: "pk_b5", name: "Homeostasis & Thermoregulation", weight: 16, pastPaperFreq: 28, difficulty: "Hard" }
        ]
      }
    ]
  },

  CHN: {
    country: "China",
    flag: "🇨🇳",
    boards: [
      {
        id: "chn_zhongkao",
        name: "Zhongkao (中考): Grade 7 - 9 Junior High Science & Math",
        grade: "Grade 7 - 9 (Junior High)",
        subjects: ["Algebraic Operations & Quadratic Functions", "Euclidean Geometry & Circles", "Mechanical Energy & Optics", "Acid-Base Salt Reactions"],
        chapters: [
          { id: "cn_z1", name: "Quadratic Functions & Parabolic Curve Analysis (二次函数)", weight: 30, pastPaperFreq: 45, difficulty: "Hard" },
          { id: "cn_z2", name: "Circle Theorems, Tangents & Inscribed Angles (圆与几何)", weight: 25, pastPaperFreq: 38, difficulty: "Hard" },
          { id: "cn_z3", name: "Buoyancy, Pressure & Archimedes Principle (浮力与压强)", weight: 25, pastPaperFreq: 40, difficulty: "Hard" },
          { id: "cn_z4", name: "Chemical Equations, Neutralization & Metals (化学方程式)", weight: 20, pastPaperFreq: 32, difficulty: "Medium" }
        ]
      },
      {
        id: "chn_gaokao_math",
        name: "Gaokao (高考): Senior High Higher Mathematics & Science",
        grade: "Grade 10 - 12 (Senior High)",
        subjects: ["Functions & Calculus", "Solid Geometry & Spatial Vectors", "Probability & Mathematical Expectation", "Conic Sections"],
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
    country: "International Baccalaureate (IB)",
    flag: "🌐",
    boards: [
      {
        id: "ib_myp",
        name: "IB MYP (Middle Years Programme): Grade 5 - 10",
        grade: "Grade 5 - 10 (MYP)",
        subjects: ["Integrated Mathematics", "Integrated Sciences (Physics, Chem, Bio)", "Individuals & Societies", "Language & Literature"],
        chapters: [
          { id: "ib_m1", name: "Coordinate Geometry, Trigonometry & Quad Modelling", weight: 30, pastPaperFreq: 35, difficulty: "Medium" },
          { id: "ib_s1", name: "Energy Cycles, Ecosystems & Chemical Systems", weight: 35, pastPaperFreq: 38, difficulty: "Medium" },
          { id: "ib_s2", name: "Scientific Investigation & Experimental Analysis (Criterion B/C)", weight: 35, pastPaperFreq: 40, difficulty: "Hard" }
        ]
      },
      {
        id: "ib_dp_physics_hl",
        name: "IB Diploma Programme (DP): Grade 11 - 12 (HL & SL)",
        grade: "Grade 11 - 12 (IB DP)",
        subjects: ["Mechanics & Thermodynamics", "Fields (Gravitational & Electric)", "Simple Harmonic Motion & Wave Phenomena", "Quantum & Nuclear Physics"],
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
