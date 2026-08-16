/**
 * stud.io Past Paper Pattern Intelligence Module (WWDC27 Edition)
 */
class PatternAnalyzerModule {
  renderPatternAnalyzer(containerEl, boardId = "ap_calc_bc") {
    const I = window.StudioIcons || {};
    const data = window.STUDIO_PAST_PAPERS_DB[boardId] || window.STUDIO_PAST_PAPERS_DB.ap_calc_bc;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>10-Year Past Paper Pattern Intelligence & Exam Decoder</h2>
          <p>Pre-analyzed paper frequencies, weightage heatmaps, 95% yield predicted questions, and examiner trap decoders.</p>
        </div>

        <div class="board-selector-pill glass-panel">
          <label>Curriculum Board:</label>
          <select id="pattern-board-selector" class="pill-select">
            <option value="ap_calc_bc" ${boardId === 'ap_calc_bc' ? 'selected' : ''}>USA: AP Calculus BC</option>
            <option value="cbse_12_physics" ${boardId === 'cbse_12_physics' ? 'selected' : ''}>India: CBSE Class 12th Physics</option>
          </select>
        </div>
      </div>

      <!-- Weightage Heatmap -->
      <div class="glass-panel section-card">
        <div class="card-title-row">
          <div class="card-icon-title">
            ${I.flame ? I.flame("icon-amber", 20) : ""}
            <h3>10-Year Exam Frequency Heatmap Matrix</h3>
          </div>
          <span class="badge-accent">10 Years Mined</span>
        </div>

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
        <div class="card-title-row">
          <div class="card-icon-title">
            ${I.target ? I.target("icon-cyan", 20) : ""}
            <h3>Top Predicted High-Yield Exam Questions</h3>
          </div>
          <span class="badge-yield">95%+ Confidence</span>
        </div>

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
                  <td>
                    <div class="pq-text">${pq.question}</div>
                    <div class="pq-trap">
                      ${I.alert ? I.alert("icon-amber", 14) : ""}
                      <span><strong>Examiner Trap:</strong> ${pq.trap}</span>
                    </div>
                  </td>
                  <td><span class="badge-yield">${pq.probability}</span></td>
                  <td><strong class="marks-badge">${pq.marks} Marks</strong></td>
                  <td><code>${pq.formula}</code></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Examiner Trap Decoder -->
      <div class="glass-panel section-card">
        <div class="card-title-row">
          <div class="card-icon-title">
            ${I.alert ? I.alert("icon-rose", 20) : ""}
            <h3>Examiner Pitfalls & Trap Warnings</h3>
          </div>
          <span class="badge-danger">High Mark Deductions</span>
        </div>

        <div class="traps-grid">
          ${data.examinerTraps.map(trap => `
            <div class="trap-card red-border">
              <h4>${trap.title}</h4>
              <p>${trap.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    containerEl.querySelector("#pattern-board-selector").addEventListener("change", (e) => {
      this.renderPatternAnalyzer(containerEl, e.target.value);
    });
  }
}

window.patternAnalyzerModule = new PatternAnalyzerModule();
