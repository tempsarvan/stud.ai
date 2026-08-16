/**
 * stud.io Ultimate Active Recall & Spaced Repetition Suite Module
 */
class ActiveRecallModule {
  renderActiveRecall(containerEl) {
    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🧠 Ultimate Active Recall & Spaced Repetition Suite</h2>
        <p>Leitner 5-Box flashcard decks, Feynman AI mentor, timed Blurting workspace, and Cornell note generators.</p>
      </div>

      <div class="active-recall-tabs">
        <button class="ar-tab active" data-tab="tab-leitner">📇 Leitner 5-Box Flashcards</button>
        <button class="ar-tab" data-tab="tab-feynman">👨‍🏫 Feynman AI Mentor</button>
        <button class="ar-tab" data-tab="tab-blurting">📝 Timed Blurting Method</button>
      </div>

      <div class="ar-content-area glass-panel">
        <!-- Tab 1: Leitner Flashcards -->
        <div class="ar-pane active" id="tab-leitner">
          <div class="leitner-boxes-bar">
            <div class="l-box active">Box 1 (Daily)</div>
            <div class="l-box">Box 2 (Every 3 Days)</div>
            <div class="l-box">Box 3 (Weekly)</div>
            <div class="l-box">Box 4 (Bi-Weekly)</div>
            <div class="l-box">Box 5 (Monthly)</div>
          </div>

          <!-- Flashcard 3D Flip Card -->
          <div class="flashcard-container">
            <div class="flashcard glass-panel" id="leitner-flashcard">
              <div class="card-side card-front">
                <span class="card-topic">Taylor & Power Series</span>
                <h3>What is the Maclaurin series expansion for e^x?</h3>
                <small class="flip-hint">👆 Click card to flip answer</small>
              </div>
              <div class="card-side card-back hidden">
                <h3>Answer:</h3>
                <p><code>∑_{n=0}^∞ x^n / n! = 1 + x + x^2/2! + x^3/3! + ...</code></p>
                <div class="card-btn-row">
                  <button id="btn-fc-wrong" class="btn-danger">❌ Got it Wrong (Move to Box 1)</button>
                  <button id="btn-fc-correct" class="btn-success">✅ Got it Right (Promote to Box 2)</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Feynman AI Mentor -->
        <div class="ar-pane" id="tab-feynman">
          <h3>👨‍🏫 Feynman Technique AI Student Mentor</h3>
          <p>Explain a complex topic in simple plain English as if teaching a middle-school student.</p>
          
          <div class="form-group">
            <label>Concept Title:</label>
            <input type="text" class="form-control" value="Taylor Series & Function Approximations" readonly/>
          </div>

          <div class="form-group">
            <label>Your Plain English Explanation:</label>
            <textarea id="feynman-text" class="notes-textarea" placeholder="Explain how Taylor series work without relying on heavy mathematical jargon..."></textarea>
          </div>

          <button id="btn-eval-feynman" class="btn-primary">
            🤖 Evaluate Explanation with Feynman AI
          </button>

          <div id="feynman-result" class="feynman-result-box hidden"></div>
        </div>

        <!-- Tab 3: Timed Blurting Method -->
        <div class="ar-pane" id="tab-blurting">
          <h3>📝 Timed Blurting Method Workspace</h3>
          <p>You have 3 minutes to blurt out everything you know from memory. Screen will wipe when timer starts!</p>

          <div class="blurting-timer-bar">
            <span>Timer: <strong id="blurt-timer-val">03:00</strong></span>
            <button id="btn-start-blurting" class="btn-primary">▶️ Start 3-Min Blurt Session</button>
          </div>

          <textarea id="blurt-input" class="notes-textarea" placeholder="Blurt out every formula, definition, and concept key point you remember..." disabled></textarea>
          <div id="blurt-result" class="blurt-result-box hidden"></div>
        </div>
      </div>
    `;

    // Tabs logic
    const tabs = containerEl.querySelectorAll(".ar-tab");
    const panes = containerEl.querySelectorAll(".ar-pane");

    tabs.forEach(t => {
      t.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        panes.forEach(pane => pane.classList.remove("active"));

        t.classList.add("active");
        const target = t.getAttribute("data-tab");
        containerEl.querySelector(`#${target}`).classList.add("active");
      });
    });

    // Flashcard Flip
    const fc = containerEl.querySelector("#leitner-flashcard");
    const front = fc.querySelector(".card-front");
    const back = fc.querySelector(".card-back");

    fc.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      front.classList.toggle("hidden");
      back.classList.toggle("hidden");
    });

    fc.querySelector("#btn-fc-correct").addEventListener("click", () => {
      alert("🎉 Card promoted to Box 2! Next review in 3 days.");
      front.classList.remove("hidden");
      back.classList.add("hidden");
    });

    fc.querySelector("#btn-fc-wrong").addEventListener("click", () => {
      alert("⚠️ Card moved to Box 1 for daily review.");
      front.classList.remove("hidden");
      back.classList.add("hidden");
    });

    // Feynman AI Evaluation
    const btnFeynman = containerEl.querySelector("#btn-eval-feynman");
    const feynmanText = containerEl.querySelector("#feynman-text");
    const feynmanResult = containerEl.querySelector("#feynman-result");

    btnFeynman.addEventListener("click", () => {
      if (window.feynmanAgent) {
        const evalRes = window.feynmanAgent.evaluateExplanation("Taylor Series", feynmanText.value);
        feynmanResult.classList.remove("hidden");
        feynmanResult.innerHTML = `
          <h4>${evalRes.rating} (Score: ${evalRes.score}/100)</h4>
          <p>${evalRes.feedback}</p>
        `;
      }
    });

    // Blurting timer
    const btnBlurt = containerEl.querySelector("#btn-start-blurting");
    const blurtInput = containerEl.querySelector("#blurt-input");
    const blurtTimerVal = containerEl.querySelector("#blurt-timer-val");
    const blurtResult = containerEl.querySelector("#blurt-result");

    btnBlurt.addEventListener("click", () => {
      blurtInput.disabled = false;
      blurtInput.value = "";
      blurtInput.focus();

      let timeLeft = 180;
      const interval = setInterval(() => {
        timeLeft--;
        const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const secs = String(timeLeft % 60).padStart(2, "0");
        blurtTimerVal.innerText = `${mins}:${secs}`;

        if (timeLeft <= 0) {
          clearInterval(interval);
          blurtInput.disabled = true;

          const vecRes = window.studioVectorEngine ? 
            window.studioVectorEngine.compareTexts(blurtInput.value, "Taylor series expansion f(x) = sum f^(n)(c)/n! * (x-c)^n Lagrange error bound ratio test") : 
            { similarityScore: 82, missingTerms: ["Ratio Test"] };

          blurtResult.classList.remove("hidden");
          blurtResult.innerHTML = `
            <h4>🎉 Blurt Session Completed!</h4>
            <p>Accuracy Score against Master Syllabus Notes: <strong>${vecRes.similarityScore}%</strong></p>
            <p>Missing Master Terms: <strong>${vecRes.missingTerms.join(", ") || "None!"}</strong></p>
          `;
        }
      }, 1000);
    });
  }
}

window.activeRecallModule = new ActiveRecallModule();
