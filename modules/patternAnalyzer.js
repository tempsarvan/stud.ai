/**
 * stud.io Past Paper Pattern Intelligence Module (WWDC27 Edition)
 * Featuring Interactive 10-Year Trend Charts, Predicted Question Drawers & Examiner Trap Analyzers.
 */
class PatternAnalyzerModule {
  renderPatternAnalyzer(containerEl, boardId = "ap_calc_bc") {
    const I = window.StudioIcons || {};
    const data = window.STUDIO_PAST_PAPERS_DB[boardId] || window.STUDIO_PAST_PAPERS_DB.ap_calc_bc;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>10-Year Past Paper Pattern Intelligence & Exam Decoder</h2>
          <p>Pre-analyzed paper frequencies, interactive 10-year trend visualizers, 95% yield predicted questions, and examiner trap decoders.</p>
        </div>

        <div class="board-selector-pill glass-panel">
          <label>Curriculum Board:</label>
          <select id="pattern-board-selector" class="pill-select">
            <option value="ap_calc_bc" ${boardId === 'ap_calc_bc' ? 'selected' : ''}>USA: AP Calculus BC</option>
            <option value="cbse_12_physics" ${boardId === 'cbse_12_physics' ? 'selected' : ''}>India: CBSE Class 12th Physics</option>
          </select>
        </div>
      </div>

      <!-- Interactive 10-Year Trend Chart -->
      <div class="glass-panel section-card">
        <div class="card-title-row">
          <div class="card-icon-title">
            ${I.chart ? I.chart("icon-purple", 22) : ""}
            <h3>10-Year Exam Topic Weightage Distribution</h3>
          </div>
          <div class="chart-legend-pills">
            <span class="legend-pill purple">Exam Frequency %</span>
          </div>
        </div>

        <div class="chart-canvas-container" style="position: relative; height: 260px; width: 100%;">
          <canvas id="trend-chart-canvas"></canvas>
        </div>

        <!-- Heatmap Badges Grid -->
        <div class="trend-grid" style="margin-top: 24px;">
          ${data.tenYearTrend.map(item => `
            <div class="trend-card">
              <div class="trend-card-header">
                <span class="year-badge">${item.year}</span>
                <span class="weight-tag">${item.appearance}</span>
              </div>
              <strong>${item.topic}</strong>
              <div class="progress-bar-container" style="height: 6px; margin: 8px 0 0;">
                <div class="progress-bar-fill" style="width: ${Math.min(100, item.weight * 6)}%;"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Predicted Questions Matrix -->
      <div class="glass-panel section-card">
        <div class="card-title-row">
          <div class="card-icon-title">
            ${I.target ? I.target("icon-cyan", 22) : ""}
            <h3>Top Predicted High-Yield Exam Questions</h3>
          </div>
          <span class="badge-yield">95%+ Confidence Rating</span>
        </div>

        <div class="predicted-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Chapter Topic</th>
                <th>Predicted Question & Examiner Trap</th>
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
            ${I.alert ? I.alert("icon-rose", 22) : ""}
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

    // Dropdown Switcher
    containerEl.querySelector("#pattern-board-selector").addEventListener("change", (e) => {
      if (window.studioSoundFX) window.studioSoundFX.playTap();
      this.renderPatternAnalyzer(containerEl, e.target.value);
    });

    // Render Canvas Chart
    setTimeout(() => {
      const chartCanvas = containerEl.querySelector("#trend-chart-canvas");
      if (!chartCanvas) return;

      if (window.Chart) {
        new window.Chart(chartCanvas.getContext("2d"), {
          type: "bar",
          data: {
            labels: data.tenYearTrend.map(t => `${t.year} (${t.topic.slice(0, 15)}...)`),
            datasets: [{
              label: "Exam Weight %",
              data: data.tenYearTrend.map(t => t.weight),
              backgroundColor: "rgba(139, 92, 246, 0.4)",
              borderColor: "#8b5cf6",
              borderWidth: 2,
              borderRadius: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "rgba(255, 255, 255, 0.06)" },
                ticks: { color: "#94a3b8" }
              },
              x: {
                grid: { display: false },
                ticks: { color: "#94a3b8", maxRotation: 45, minRotation: 0 }
              }
            }
          }
        });
      } else {
        // Fallback drawing on 2D Canvas if CDN Chart.js isn't loaded
        const ctx = chartCanvas.getContext("2d");
        chartCanvas.width = chartCanvas.parentElement.clientWidth || 600;
        chartCanvas.height = 240;
        ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);
        
        const barWidth = Math.floor(chartCanvas.width / (data.tenYearTrend.length * 1.6));
        const gap = 16;
        data.tenYearTrend.forEach((item, idx) => {
          const barHeight = (item.weight / 20) * 160;
          const x = idx * (barWidth + gap) + 40;
          const y = chartCanvas.height - barHeight - 30;

          const grad = ctx.createLinearGradient(0, y, 0, y + barHeight);
          grad.addColorStop(0, "#c084fc");
          grad.addColorStop(1, "#6366f1");
          ctx.fillStyle = grad;
          ctx.fillRect(x, y, barWidth, barHeight);

          ctx.fillStyle = "#94a3b8";
          ctx.font = "11px Inter, sans-serif";
          ctx.fillText(`${item.year}`, x + 4, chartCanvas.height - 10);
        });
      }
    }, 50);
  }
}

window.patternAnalyzerModule = new PatternAnalyzerModule();
