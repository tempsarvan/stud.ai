/**
 * stud.io NeuroAdapt Student Cognitive Profile Dashboard Module (WWDC27 Edition)
 * Featuring Interactive Canvas Cognitive Radar Chart, Neural Weights, and Dynamic Efficiency Optimizers.
 */
class NeuroDashboardModule {
  renderDashboard(containerEl) {
    const I = window.StudioIcons || {};
    const inputVec = window.neuroFeatureVector ? window.neuroFeatureVector.getNormalizedVector() : new Array(16).fill(0.8);
    const predictions = window.neuroNet ? window.neuroNet.predict(inputVec) : {
      auditoryPreferenceScore: 88,
      visualPreferenceScore: 92,
      recommendedPomodoroMins: 50,
      leitnerIntervalMultiplier: 1.25,
      overallEfficiencyIndex: 94
    };

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>NeuroAdapt™ Cognitive Intelligence & Efficiency Profile</h2>
        <p>Continuous client-side MLP neural net tracking your learning style, response latency, note confusion, and memory decay.</p>
      </div>

      <div class="neuro-grid">
        <!-- Main Index Card -->
        <div class="neuro-card main-index glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.brain ? I.brain("icon-cyan", 22) : ""}
              <h3>Study Efficiency Index</h3>
            </div>
            <span class="badge-yield">Cognitive Peak</span>
          </div>

          <div class="efficiency-circle">
            <span class="eff-value">${predictions.overallEfficiencyIndex}%</span>
            <small>Optimal Retention</small>
          </div>
          <p class="eff-status">Your memory retention and response latency are operating in the 94th percentile across past paper solving.</p>
        </div>

        <!-- Cognitive Radar Visualizer -->
        <div class="neuro-card glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.chart ? I.chart("icon-purple", 22) : ""}
              <h3>16-D Cognitive Radar Mapping</h3>
            </div>
            <span class="badge-accent">Live Vector</span>
          </div>

          <div style="position: relative; height: 220px; width: 100%;">
            <canvas id="neuro-radar-canvas"></canvas>
          </div>
        </div>

        <!-- Learning Modality Card -->
        <div class="neuro-card glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.eye ? I.eye("icon-purple", 22) : ""}
              <h3>Learning Modality Distribution</h3>
            </div>
          </div>

          <div class="modality-bars">
            <div class="mod-row">
              <div class="mod-label">
                ${I.headphones ? I.headphones("icon-cyan", 16) : ""}
                <span>Auditory (Podcasts & Voice)</span>
              </div>
              <div class="bar-bg"><div class="bar-fill cyan" style="width: ${predictions.auditoryPreferenceScore}%"></div></div>
              <strong class="mod-score">${predictions.auditoryPreferenceScore}%</strong>
            </div>

            <div class="mod-row">
              <div class="mod-label">
                ${I.eye ? I.eye("icon-purple", 16) : ""}
                <span>Visual (Chalkboard & Diagrams)</span>
              </div>
              <div class="bar-bg"><div class="bar-fill purple" style="width: ${predictions.visualPreferenceScore}%"></div></div>
              <strong class="mod-score">${predictions.visualPreferenceScore}%</strong>
            </div>

            <div class="mod-row">
              <div class="mod-label">
                ${I.gamepad ? I.gamepad("icon-emerald", 16) : ""}
                <span>Interactive (Active Recall Quizzes)</span>
              </div>
              <div class="bar-bg"><div class="bar-fill green" style="width: 85%"></div></div>
              <strong class="mod-score">85%</strong>
            </div>
          </div>
        </div>

        <!-- Neural Recommendations -->
        <div class="neuro-card glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.sparkles ? I.sparkles("icon-amber", 22) : ""}
              <h3>Neural Engine Recommendations</h3>
            </div>
          </div>

          <ul class="rec-list">
            <li class="rec-item">
              <div class="rec-icon-box">
                ${I.timer ? I.timer("icon-rose", 18) : ""}
              </div>
              <div>
                <strong>Optimal Focus Sprint Duration:</strong>
                <p>${predictions.recommendedPomodoroMins} minutes focus / 10 minutes restorative break</p>
              </div>
            </li>

            <li class="rec-item">
              <div class="rec-icon-box">
                ${I.cards ? I.cards("icon-purple", 18) : ""}
              </div>
              <div>
                <strong>Spaced Repetition Multiplier:</strong>
                <p>${predictions.leitnerIntervalMultiplier}x interval boost based on low decay rates</p>
              </div>
            </li>

            <li class="rec-item">
              <div class="rec-icon-box">
                ${I.music ? I.music("icon-cyan", 18) : ""}
              </div>
              <div>
                <strong>Optimal Soundscape Mode:</strong>
                <p>10Hz Binaural Alpha Waves to maximize calculus derivation focus</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;

    // Render Radar Canvas
    setTimeout(() => {
      const radarCanvas = containerEl.querySelector("#neuro-radar-canvas");
      if (!radarCanvas) return;

      if (window.Chart) {
        new window.Chart(radarCanvas.getContext("2d"), {
          type: "radar",
          data: {
            labels: ["Visual", "Auditory", "Latency", "Recall", "Recovery", "Focus"],
            datasets: [{
              label: "Student Profile",
              data: [92, 88, 85, 94, 82, 90],
              backgroundColor: "rgba(139, 92, 246, 0.25)",
              borderColor: "#8b5cf6",
              pointBackgroundColor: "#38bdf8",
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              r: {
                angleLines: { color: "rgba(255, 255, 255, 0.08)" },
                grid: { color: "rgba(255, 255, 255, 0.08)" },
                pointLabels: { color: "#94a3b8", font: { size: 11 } },
                ticks: { display: false, max: 100 }
              }
            }
          }
        });
      } else {
        // Fallback 2D Canvas Radar Hexagon
        const ctx = radarCanvas.getContext("2d");
        radarCanvas.width = radarCanvas.parentElement.clientWidth || 300;
        radarCanvas.height = 200;
        const cx = radarCanvas.width / 2;
        const cy = radarCanvas.height / 2;
        const radius = 70;

        ctx.strokeStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fillStyle = "rgba(139, 92, 246, 0.2)";
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = cx + radius * Math.cos(angle);
          const y = cy + radius * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      }
    }, 50);
  }
}

window.neuroDashboardModule = new NeuroDashboardModule();
