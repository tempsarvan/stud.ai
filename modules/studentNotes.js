/**
 * stud.io Running Notes Workspace & Live NLP Confusion Analyzer (WWDC27 Edition)
 */
class StudentNotesModule {
  renderNotesWorkspace(containerEl) {
    const I = window.StudioIcons || {};

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Student Running Notes & Live NeuroAdapt™ Analyzer</h2>
        <p>Type your rough session notes here. Our neural engine scans for confusion markers (<code>???</code>, <code>unclear</code>, missing formulas) and automatically creates patch quizzes.</p>
      </div>

      <div class="notes-layout">
        <div class="notes-editor-panel glass-panel">
          <div class="editor-header">
            <div class="card-icon-title">
              ${I.notes ? I.notes("icon-purple", 20) : ""}
              <span class="editor-title">Chapter Notes: Taylor Series & Lagrange Error</span>
            </div>
            <button id="btn-analyze-notes" class="btn-primary">
              ${I.brain ? I.brain("", 16) : ""}
              <span>Run NeuroAdapt NLP Scan</span>
            </button>
          </div>
          <textarea id="student-notes-textarea" class="notes-textarea" placeholder="Type or paste your rough notes during class or study sessions... E.g.: 'Taylor series is centered at c. Formula is sum of f^(n)(c)/n!*(x-c)^n. Lagrange error bound is super confusing??? How do I choose M for sin(x)?'"></textarea>
        </div>

        <div class="notes-analysis-panel glass-panel" id="notes-analysis-output">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.sparkles ? I.sparkles("icon-cyan", 20) : ""}
              <h3>Live NeuroAdapt™ Notes Scan Output</h3>
            </div>
          </div>
          <p class="text-muted">Click "Run NeuroAdapt NLP Scan" to evaluate your running notes and detect knowledge gaps.</p>
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
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.sparkles ? I.sparkles("icon-cyan", 20) : ""}
              <h3>Live NeuroAdapt™ Notes Scan Output</h3>
            </div>
          </div>

          <div class="analysis-stat-row">
            <div class="stat-card">
              <span class="stat-label">Confusion Markers Detected</span>
              <strong class="text-warning">${result.confusionCount} (${result.detectedTerms.join(", ") || "None"})</strong>
            </div>
            <div class="stat-card">
              <span class="stat-label">Syllabus Term Alignment</span>
              <strong class="text-success">${result.similarityScore}% Match</strong>
            </div>
          </div>

          <div class="analysis-stat">
            <span>Missing Master Concepts:</span>
            <span class="tag-group">${result.missingTerms.map(t => `<span class="tag">${t}</span>`).join(" ") || "None"}</span>
          </div>

          <div class="patch-section">
            <div class="patch-header">
              ${I.target ? I.target("icon-purple", 18) : ""}
              <h4>Generated Patch Quizzes Injected into Duolingo Track</h4>
            </div>
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
