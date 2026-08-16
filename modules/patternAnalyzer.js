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
