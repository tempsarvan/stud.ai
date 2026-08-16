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
