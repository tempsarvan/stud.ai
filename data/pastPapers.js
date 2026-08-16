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
