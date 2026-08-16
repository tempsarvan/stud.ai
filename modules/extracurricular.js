/**
 * stud.io Extracurricular & Beyond-Syllabus Academy Module (WWDC27 Edition)
 */
class ExtracurricularModule {
  renderExtracurricular(containerEl) {
    const I = window.StudioIcons || {};
    const courses = [
      {
        id: "ext_py_ai",
        category: "Technology & AI",
        title: "Python Programming & AI Engineering Basics",
        iconFunc: () => I.code ? I.code("icon-purple", 24) : "",
        lessons: 12,
        level: "Beginner to Intermediate",
        desc: "Master Python fundamentals, build neural networks from scratch in native JS/PyTorch, and construct AI agent pipelines."
      },
      {
        id: "ext_finance",
        category: "Life Skills & Business",
        title: "Personal Finance & Investing for Students",
        iconFunc: () => I.trendingUp ? I.trendingUp("icon-emerald", 24) : "",
        lessons: 8,
        level: "Essential Life Skill",
        desc: "Understand compound interest, equity markets, ETFs, budgeting systems, and building long-term financial freedom."
      },
      {
        id: "ext_public_speaking",
        category: "Communication",
        title: "Public Speaking, Debating & Persuasion",
        iconFunc: () => I.mic ? I.mic("icon-cyan", 24) : "",
        lessons: 10,
        level: "All Levels",
        desc: "Conquer stage anxiety, master vocal timbre, structure debate arguments with Monroe's sequence, and deliver keynote speeches."
      },
      {
        id: "ext_astronomy",
        category: "Science & Exploration",
        title: "Astrophysics, Black Holes & Deep Space",
        iconFunc: () => I.globe ? I.globe("icon-amber", 24) : "",
        lessons: 14,
        level: "Curiosity & Passion",
        desc: "Explore General Relativity, spacetime curvature, black hole event horizons, and modern exoplanet discovery."
      },
      {
        id: "ext_music_theory",
        category: "Creative Arts",
        title: "Music Theory & Sound Design Fundamentals",
        iconFunc: () => I.music ? I.music("icon-rose", 24) : "",
        lessons: 10,
        level: "Beginner",
        desc: "Learn scales, Circle of Fifths, chord progressions, harmonic rhythm, and synthesizer patch design in DAWs."
      }
    ];

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Extracurricular & Beyond-Syllabus Academy</h2>
        <p>Master high-impact non-academic skills: Python & AI engineering, Personal Finance, Public Speaking, Astronomy, and Music Theory.</p>
      </div>

      <div class="extra-courses-grid">
        ${courses.map(course => `
          <div class="course-card glass-panel">
            <div class="course-header">
              <div class="course-icon-box">
                ${course.iconFunc()}
              </div>
              <span class="c-category">${course.category}</span>
            </div>
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <div class="course-meta">
              <span class="meta-pill">📚 ${course.lessons} Lessons</span>
              <span class="meta-pill">🎓 ${course.level}</span>
            </div>
            <button class="btn-primary btn-small full-width btn-start-course">
              ${I.rocket ? I.rocket("", 14) : ""}
              <span>Enroll & Begin Lesson 1</span>
            </button>
          </div>
        `).join("")}
      </div>
    `;

    containerEl.querySelectorAll(".btn-start-course").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Enrolled in academy course! Opening interactive lesson workspace.");
      });
    });
  }
}

window.extracurricularModule = new ExtracurricularModule();
