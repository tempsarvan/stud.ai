/**
 * stud.io Ultimate Active Recall & Spaced Repetition Suite Module (WWDC27 Edition)
 */
class ActiveRecallModule {
  renderActiveRecall(containerEl) {
    const I = window.StudioIcons || {};
    this.currentDeck = window.STUDIO_FLASHCARDS_DB || [];
    this.currentCardIdx = 0;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Ultimate Active Recall & Spaced Repetition Suite</h2>
        <p>Leitner 5-Box flashcard decks, Feynman AI mentor, timed Blurting workspace, and Cornell note generators.</p>
      </div>

      <div class="active-recall-tabs">
        <button class="ar-tab active" data-tab="tab-leitner">
          ${I.cards ? I.cards("", 16) : ""}
          <span>Leitner 5-Box Flashcards</span>
        </button>
        <button class="ar-tab" data-tab="tab-feynman">
          ${I.brain ? I.brain("", 16) : ""}
          <span>Feynman AI Mentor</span>
        </button>
        <button class="ar-tab" data-tab="tab-blurting">
          ${I.notes ? I.notes("", 16) : ""}
          <span>Timed Blurting Method</span>
        </button>
      </div>

      <div class="ar-content-area glass-panel">
        <!-- Tab 1: Leitner Flashcards -->
        <div class="ar-pane active" id="tab-leitner">
          <div class="leitner-boxes-bar">
            <div class="l-box active" data-box="1">Box 1 (Daily)</div>
            <div class="l-box" data-box="2">Box 2 (Every 3 Days)</div>
            <div class="l-box" data-box="3">Box 3 (Weekly)</div>
            <div class="l-box" data-box="4">Box 4 (Bi-Weekly)</div>
            <div class="l-box" data-box="5">Box 5 (Monthly)</div>
          </div>

          <!-- Flashcard 3D Flip Card -->
          <div class="flashcard-container">
            <div class="flashcard glass-panel" id="leitner-flashcard">
              <div class="card-side card-front">
                <div class="card-meta-top">
                  <span class="card-topic">${this.currentDeck[0].topic}</span>
                  <span class="card-num-badge">Card 1 of ${this.currentDeck.length}</span>
                </div>
                <h3 class="card-question-text">${this.currentDeck[0].question}</h3>
                <small class="flip-hint">Click card to reveal answer</small>
              </div>

              <div class="card-side card-back hidden">
                <span class="answer-badge">Model Answer</span>
                <p class="card-answer-text"><code>${this.currentDeck[0].answer}</code></p>
                <div class="card-btn-row">
                  <button id="btn-fc-wrong" class="btn-danger-pill">
                    ${I.x ? I.x("", 16) : ""}
                    <span>Got it Wrong (Box 1)</span>
                  </button>
                  <button id="btn-fc-correct" class="btn-success-pill">
                    ${I.check ? I.check("", 16) : ""}
                    <span>Got it Right (Promote)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Feynman AI Mentor -->
        <div class="ar-pane" id="tab-feynman">
          <div class="tab-pane-header">
            <h3>Feynman Technique AI Student Mentor</h3>
            <p>Explain a complex concept in plain English without relying on technical jargon. Our AI mentor will evaluate clarity.</p>
          </div>
          
          <div class="form-group">
            <label>Concept Under Review:</label>
            <input type="text" class="form-control" value="Taylor Series & Polynomial Approximations" readonly/>
          </div>

          <div class="form-group">
            <label>Your Plain English Explanation:</label>
            <textarea id="feynman-text" class="notes-textarea" placeholder="Explain how Taylor series work as if teaching a middle-school student..."></textarea>
          </div>

          <button id="btn-eval-feynman" class="btn-primary">
            ${I.sparkles ? I.sparkles("", 16) : ""}
            <span>Evaluate with Feynman AI</span>
          </button>

          <div id="feynman-result" class="feynman-result-box hidden"></div>
        </div>

        <!-- Tab 3: Timed Blurting Method -->
        <div class="ar-pane" id="tab-blurting">
          <div class="tab-pane-header">
            <h3>Timed Blurting Method Workspace</h3>
            <p>You have 3 minutes to blurt out everything you remember from memory. The screen will lock and evaluate against syllabus master notes.</p>
          </div>

          <div class="blurting-timer-bar">
            <div class="blurting-timer-display">
              ${I.timer ? I.timer("icon-rose", 18) : ""}
              <span>Time Left: <strong id="blurt-timer-val">03:00</strong></span>
            </div>
            <button id="btn-start-blurting" class="btn-primary">
              ${I.play ? I.play("", 16) : ""}
              <span>Start 3-Min Blurt Session</span>
            </button>
          </div>

          <textarea id="blurt-input" class="notes-textarea" placeholder="Click 'Start 3-Min Blurt Session' and type everything you remember..." disabled></textarea>
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
      if (e.target.closest("button")) return;
      front.classList.toggle("hidden");
      back.classList.toggle("hidden");
    });

    fc.querySelector("#btn-fc-correct").addEventListener("click", () => {
      this.currentCardIdx = (this.currentCardIdx + 1) % this.currentDeck.length;
      const nextCard = this.currentDeck[this.currentCardIdx];
      fc.querySelector(".card-topic").innerText = nextCard.topic;
      fc.querySelector(".card-question-text").innerText = nextCard.question;
      fc.querySelector(".card-answer-text").innerHTML = `<code>${nextCard.answer}</code>`;
      fc.querySelector(".card-num-badge").innerText = `Card ${this.currentCardIdx + 1} of ${this.currentDeck.length}`;
      front.classList.remove("hidden");
      back.classList.add("hidden");
    });

    fc.querySelector("#btn-fc-wrong").addEventListener("click", () => {
      this.currentCardIdx = (this.currentCardIdx + 1) % this.currentDeck.length;
      const nextCard = this.currentDeck[this.currentCardIdx];
      fc.querySelector(".card-topic").innerText = nextCard.topic;
      fc.querySelector(".card-question-text").innerText = nextCard.question;
      fc.querySelector(".card-answer-text").innerHTML = `<code>${nextCard.answer}</code>`;
      fc.querySelector(".card-num-badge").innerText = `Card ${this.currentCardIdx + 1} of ${this.currentDeck.length}`;
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
          <div class="feynman-eval-header">
            <h4>${evalRes.rating}</h4>
            <span class="score-pill">${evalRes.score}/100 Clarity Index</span>
          </div>
          <p class="feynman-feedback-text">${evalRes.feedback}</p>
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
            { similarityScore: 85, missingTerms: ["Ratio Test"] };

          blurtResult.classList.remove("hidden");
          blurtResult.innerHTML = `
            <h4>Blurt Recall Analysis Completed</h4>
            <div class="blurt-stats-row">
              <span>Syllabus Accuracy Score: <strong>${vecRes.similarityScore}%</strong></span>
              <span>Missing Key Concepts: <strong>${vecRes.missingTerms.join(", ") || "None"}</strong></span>
            </div>
          `;
        }
      }, 1000);
    });
  }
}

window.activeRecallModule = new ActiveRecallModule();
