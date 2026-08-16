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
