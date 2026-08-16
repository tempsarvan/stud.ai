/**
 * stud.io Worksheet & Timed Mock Exam Simulator Module (WWDC27 Edition)
 */
class ExamSimulatorModule {
  renderExamSimulator(containerEl) {
    const I = window.StudioIcons || {};

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Worksheet & Timed Mock Exam Simulator</h2>
        <p>Generate target topic practice worksheets or attempt full-length timed mock exams with step-by-step marking rubrics.</p>
      </div>

      <div class="simulator-layout">
        <!-- Worksheet Generator -->
        <div class="sim-card glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.notes ? I.notes("icon-purple", 22) : ""}
              <h3>Custom Practice Worksheet Generator</h3>
            </div>
            <span class="badge-accent">Print Ready</span>
          </div>

          <p class="sim-desc">Synthesize customized practice problems based on high-yield exam predictions.</p>

          <div class="form-group">
            <label>Target Subject & Chapter:</label>
            <select class="form-control" id="ws-subject">
              <option value="ap_calc">AP Calculus BC - Infinite Series & Taylor Polynomials</option>
              <option value="cbse_physics">CBSE Class 12th Physics - Ray Optics & Wave Optics</option>
            </select>
          </div>

          <div class="form-group">
            <label>Question Volume:</label>
            <select class="form-control" id="ws-count">
              <option value="5">5 Questions (Quick Practice Sprint)</option>
              <option value="10">10 Questions (Standard Drill)</option>
              <option value="20">20 Questions (Full Deep Exam Session)</option>
            </select>
          </div>

          <button id="btn-gen-worksheet" class="btn-primary full-width">
            ${I.exam ? I.exam("", 16) : ""}
            <span>Generate & Render Worksheet</span>
          </button>

          <div id="worksheet-output" class="worksheet-output hidden"></div>
        </div>

        <!-- Timed Mock Exam -->
        <div class="sim-card glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.timer ? I.timer("icon-rose", 22) : ""}
              <h3>Full-Length Timed Mock Exam</h3>
            </div>
            <span class="badge-danger">Exam Conditions</span>
          </div>

          <p class="sim-desc">Simulate official testing conditions with live countdown clock, question flagger, and diagnostic score breakdown.</p>

          <div class="exam-info-box">
            <div class="info-row"><span>Target Exam:</span><strong>AP Calculus BC Model Sprint</strong></div>
            <div class="info-row"><span>Time Limit:</span><strong>15 Minutes</strong></div>
            <div class="info-row"><span>Total Marks:</span><strong>25 Marks</strong></div>
          </div>

          <button id="btn-start-mock-exam" class="btn-primary btn-large full-width">
            ${I.target ? I.target("", 18) : ""}
            <span>Start Timed Mock Exam</span>
          </button>
        </div>
      </div>
    `;

    // Worksheet Generator
    const btnGen = containerEl.querySelector("#btn-gen-worksheet");
    const outputEl = containerEl.querySelector("#worksheet-output");

    btnGen.addEventListener("click", () => {
      outputEl.classList.remove("hidden");
      outputEl.innerHTML = `
        <div class="worksheet-paper glass-panel">
          <div class="ws-header">
            <h4>stud.io High-Yield Practice Worksheet: Infinite Series</h4>
            <span class="badge-yield">Grade Target: 5/5</span>
          </div>

          <div class="ws-question">
            <strong>Question 1 (5 Marks):</strong> Find the interval of convergence for ∑ (x - 3)^n / (n · 4^n) using the Ratio Test. Show all endpoint tests explicitly.
          </div>
          <div class="ws-question">
            <strong>Question 2 (4 Marks):</strong> Write the first four non-zero terms of the Taylor series for f(x) = sin(x^2) centered at x = 0.
          </div>
          <div class="ws-question">
            <strong>Question 3 (6 Marks):</strong> Determine the Lagrange error bound when P_3(0.2) is used to approximate e^(0.2).
          </div>
        </div>
      `;
    });

    // Mock Exam
    const btnMock = containerEl.querySelector("#btn-start-mock-exam");
    btnMock.addEventListener("click", () => {
      alert("Timed Mock Exam initialized! Your 15-minute countdown clock is active.");
    });
  }
}

window.examSimulatorModule = new ExamSimulatorModule();
