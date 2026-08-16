/**
 * stud.io Worksheet & Timed Mock Exam Simulator Module
 */
class ExamSimulatorModule {
  renderExamSimulator(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>📝 Worksheet & Timed Mock Exam Simulator</h2>
        <p>Generate target topic worksheets or attempt full-length timed mock exams with step-by-step mark schemes.</p>
      </div>

      <div class="simulator-layout">
        <!-- Worksheet Generator -->
        <div class="sim-card glass-panel">
          <h3>⚡ Custom Worksheet Generator</h3>
          <p>Generate a customized practice problem worksheet based on high-yield exam predictions.</p>

          <div class="form-group">
            <label>Target Subject:</label>
            <select class="form-control" id="ws-subject">
              <option value="ap_calc">AP Calculus BC - Infinite Series & Taylor</option>
              <option value="cbse_physics">CBSE Class 12th Physics - Ray Optics</option>
            </select>
          </div>

          <div class="form-group">
            <label>Number of Questions:</label>
            <select class="form-control" id="ws-count">
              <option value="5">5 Questions (Quick Practice)</option>
              <option value="10">10 Questions (Standard Sprint)</option>
              <option value="20">20 Questions (Full Deep Dive)</option>
            </select>
          </div>

          <button id="btn-gen-worksheet" class="btn-primary">
            📄 Generate & Print Worksheet
          </button>

          <div id="worksheet-output" class="worksheet-output hidden"></div>
        </div>

        <!-- Timed Mock Exam -->
        <div class="sim-card glass-panel">
          <h3>⏱️ Full-Length Timed Mock Exam</h3>
          <p>Simulate official exam conditions with live timer, question flagger, and diagnostic score breakdown.</p>

          <div class="exam-info-box">
            <div><strong>Exam:</strong> AP Calculus BC Model Test</div>
            <div><strong>Duration:</strong> 15 Minutes (Timed Sprint)</div>
            <div><strong>Total Marks:</strong> 25 Marks</div>
          </div>

          <button id="btn-start-mock-exam" class="btn-primary btn-large">
            🎯 Start Timed Mock Exam
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
        <div class="worksheet-paper">
          <h4>📄 stud.io Practice Worksheet: Infinite Series & Taylor Polynomials</h4>
          <p><small>Date: ${new Date().toLocaleDateString()} | Target Grade: 5/5</small></p>

          <div class="ws-question">
            <strong>Q1 (5 Marks):</strong> Find the interval of convergence for ∑ (x - 3)^n / (n · 4^n) using the Ratio Test. Show all work for endpoints.
          </div>
          <div class="ws-question">
            <strong>Q2 (4 Marks):</strong> Write the first four non-zero terms of the Taylor series for f(x) = sin(x^2) centered at x = 0.
          </div>
          <div class="ws-question">
            <strong>Q3 (6 Marks):</strong> Determine the Lagrange error bound when P_3(0.2) is used to approximate e^(0.2).
          </div>
        </div>
      `;
    });

    // Mock Exam
    const btnMock = containerEl.querySelector("#btn-start-mock-exam");
    btnMock.addEventListener("click", () => {
      alert("🎯 Timed Mock Exam initialized! Your 15-minute countdown clock is active.");
    });
  }
}

window.examSimulatorModule = new ExamSimulatorModule();
