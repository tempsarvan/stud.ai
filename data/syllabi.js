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
