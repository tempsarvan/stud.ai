/**
 * stud.io Duolingo-Style Gamified Quest Track Module
 */
class DuolingoTrackModule {
  renderDuolingoTrack(containerEl) {
    this.userHearts = 5;
    this.userXP = 1250;
    this.userStreak = 14;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>🎮 Duolingo-Style Gamified Quest Track</h2>
          <p>Complete daily bite-sized quest nodes, climb the Diamond League, and maintain your streak flame.</p>
        </div>

        <!-- Gamification Stats Top Bar -->
        <div class="gamify-stats-bar glass-panel">
          <div class="stat-pill streak">🔥 <strong id="streak-val">${this.userStreak}</strong> Days</div>
          <div class="stat-pill xp">⚡ <strong id="xp-val">${this.userXP}</strong> XP</div>
          <div class="stat-pill hearts">❤️ <strong id="hearts-val">${this.userHearts}/5</strong></div>
        </div>
      </div>

      <!-- Quest Node Map -->
      <div class="quest-map-container glass-panel">
        <svg class="quest-path-svg" width="100%" height="450">
          <path d="M 100 80 Q 250 150, 400 80 T 700 80 T 900 250 T 600 380 T 200 380" stroke="rgba(139, 92, 246, 0.4)" stroke-width="6" fill="none" stroke-dasharray="8 8"/>
        </svg>

        <div class="nodes-layer">
          <div class="node-item node-unlocked" style="top: 50px; left: 80px;" data-node="node_1">
            <div class="node-circle">🎯</div>
            <span class="node-title">Node 1: Foundational Core</span>
          </div>

          <div class="node-item node-locked" style="top: 50px; left: 380px;" data-node="node_2">
            <div class="node-circle">⚡</div>
            <span class="node-title">Node 2: Speed Round Sprint</span>
          </div>

          <div class="node-item node-locked" style="top: 50px; left: 680px;" data-node="node_3">
            <div class="node-circle">🎧</div>
            <span class="node-title">Node 3: Audio Listening Card</span>
          </div>

          <div class="node-item node-boss node-locked" style="top: 220px; left: 850px;" data-node="node_5">
            <div class="node-circle">👑</div>
            <span class="node-title">Boss Battle: Past Paper Trap</span>
          </div>
        </div>
      </div>

      <!-- Quiz Modal Container -->
      <div id="quiz-modal-overlay" class="quiz-modal-overlay hidden">
        <div class="quiz-modal glass-panel" id="quiz-modal-body"></div>
      </div>
    `;

    // Click on node
    containerEl.querySelectorAll(".node-item").forEach(node => {
      node.addEventListener("click", () => {
        const nodeId = node.getAttribute("data-node");
        this.openQuizModal(containerEl, nodeId);
      });
    });
  }

  openQuizModal(containerEl, nodeId) {
    const modalOverlay = containerEl.querySelector("#quiz-modal-overlay");
    const modalBody = containerEl.querySelector("#quiz-modal-body");
    modalOverlay.classList.remove("hidden");

    const quizzes = window.STUDIO_DUOLINGO_DB.quizBank[nodeId] || window.STUDIO_DUOLINGO_DB.quizBank.node_1;
    let currentIdx = 0;

    const renderCurrentQuiz = () => {
      if (currentIdx >= quizzes.length) {
        // Victory!
        this.userXP += 100;
        containerEl.querySelector("#xp-val").innerText = this.userXP;

        modalBody.innerHTML = `
          <div class="victory-screen text-center">
            <div class="victory-icon">🎉</div>
            <h2>Quest Node Completed!</h2>
            <p>You earned <strong>+100 XP</strong> and maintained your <strong>${this.userStreak}-day streak</strong>!</p>
            <button id="btn-close-victory" class="btn-primary">Continue Quest Map ➜</button>
          </div>
        `;
        modalBody.querySelector("#btn-close-victory").addEventListener("click", () => {
          modalOverlay.classList.add("hidden");
        });
        return;
      }

      const q = quizzes[currentIdx];
      modalBody.innerHTML = `
        <div class="quiz-header">
          <span>Question ${currentIdx + 1} of ${quizzes.length}</span>
          <button id="btn-close-quiz" class="btn-close">&times;</button>
        </div>

        <h3 class="quiz-question">${q.question}</h3>

        <div class="quiz-options">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-opt="${idx}">${opt}</button>
          `).join("")}
        </div>

        <div id="quiz-feedback" class="quiz-feedback hidden"></div>
      `;

      modalBody.querySelector("#btn-close-quiz").addEventListener("click", () => {
        modalOverlay.classList.add("hidden");
      });

      modalBody.querySelectorAll(".quiz-opt-btn").forEach(optBtn => {
        optBtn.addEventListener("click", () => {
          const selected = parseInt(optBtn.getAttribute("data-opt"));
          const feedback = modalBody.querySelector("#quiz-feedback");
          feedback.classList.remove("hidden");

          if (selected === q.correct) {
            feedback.innerHTML = `<div class="feedback-box success">✅ Correct! ${q.explanation}</div>`;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(true, 1500, q.type);
            setTimeout(() => {
              currentIdx++;
              renderCurrentQuiz();
            }, 1600);
          } else {
            this.userHearts = Math.max(0, this.userHearts - 1);
            containerEl.querySelector("#hearts-val").innerText = `${this.userHearts}/5`;
            feedback.innerHTML = `<div class="feedback-box error">❌ Incorrect! ${q.explanation}</div>`;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(false, 3000, q.type);
          }
        });
      });
    };

    renderCurrentQuiz();
  }
}

window.duolingoTrackModule = new DuolingoTrackModule();
