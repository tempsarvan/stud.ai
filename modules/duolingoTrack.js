/**
 * stud.io Duolingo-Style Gamified Quest Track Module (WWDC27 Edition)
 * Featuring Interactive SVG Quest Tree, Audio Chimes, Confetti Particles, and 4 Quiz Modalities.
 */
class DuolingoTrackModule {
  renderDuolingoTrack(containerEl) {
    const I = window.StudioIcons || {};
    this.userHearts = 5;
    this.userXP = 1250;
    this.userStreak = 14;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>Duolingo-Style Gamified Quest Track</h2>
          <p>Complete daily bite-sized quest nodes, climb the Diamond League, and maintain your streak flame.</p>
        </div>

        <!-- Gamification Stats Top Bar -->
        <div class="gamify-stats-bar glass-panel">
          <div class="stat-pill streak">
            ${I.flame ? I.flame("icon-amber", 16) : ""}
            <span><strong id="streak-val">${this.userStreak}</strong> Days</span>
          </div>
          <div class="stat-pill xp">
            ${I.zap ? I.zap("icon-purple", 16) : ""}
            <span><strong id="xp-val">${this.userXP}</strong> XP</span>
          </div>
          <div class="stat-pill hearts">
            ${I.heart ? I.heart("icon-rose", 16) : ""}
            <span><strong id="hearts-val">${this.userHearts}/5</strong></span>
          </div>
        </div>
      </div>

      <!-- Quest Node Map -->
      <div class="quest-map-container glass-panel">
        <svg class="quest-path-svg" width="100%" height="450">
          <path d="M 120 80 Q 280 160, 440 80 T 740 80 T 940 260 T 640 380 T 220 380" stroke="rgba(139, 92, 246, 0.35)" stroke-width="6" fill="none" stroke-dasharray="8 8"/>
        </svg>

        <div class="nodes-layer">
          <div class="node-item node-unlocked" style="top: 40px; left: 80px;" data-node="node_1">
            <div class="node-circle active-pulse">
              ${I.target ? I.target("", 26) : ""}
            </div>
            <span class="node-title">Foundational Core</span>
            <span class="node-badge unlocked">Start</span>
          </div>

          <div class="node-item node-unlocked" style="top: 40px; left: 400px;" data-node="node_2">
            <div class="node-circle">
              ${I.zap ? I.zap("", 26) : ""}
            </div>
            <span class="node-title">Formula Sprint</span>
            <span class="node-badge">75 XP</span>
          </div>

          <div class="node-item node-unlocked" style="top: 40px; left: 700px;" data-node="node_3">
            <div class="node-circle">
              ${I.headphones ? I.headphones("", 26) : ""}
            </div>
            <span class="node-title">Audio Listening Card</span>
            <span class="node-badge">100 XP</span>
          </div>

          <div class="node-item node-boss node-unlocked" style="top: 220px; left: 880px;" data-node="node_5">
            <div class="node-circle boss-gold">
              ${I.crown ? I.crown("", 28) : ""}
            </div>
            <span class="node-title">Boss Battle: Exam Trap</span>
            <span class="node-badge boss-badge">200 XP</span>
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
        if (window.studioSoundFX) window.studioSoundFX.playTap();
        const nodeId = node.getAttribute("data-node");
        this.openQuizModal(containerEl, nodeId);
      });
    });
  }

  openQuizModal(containerEl, nodeId) {
    const I = window.StudioIcons || {};
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

        if (window.studioSoundFX) window.studioSoundFX.playLevelUp();

        modalBody.innerHTML = `
          <div class="victory-screen text-center">
            <div class="victory-icon-wrapper">
              ${I.trophy ? I.trophy("icon-amber", 48) : ""}
            </div>
            <h2>Quest Node Completed!</h2>
            <p>You earned <strong class="text-accent">+100 XP</strong> and maintained your <strong class="text-amber">${this.userStreak}-day streak</strong>!</p>
            <button id="btn-close-victory" class="btn-primary btn-large">
              <span>Continue Quest Map</span>
              ${I.arrowRight ? I.arrowRight("", 16) : ""}
            </button>
          </div>
        `;
        modalBody.querySelector("#btn-close-victory").addEventListener("click", () => {
          if (window.studioSoundFX) window.studioSoundFX.playTap();
          modalOverlay.classList.add("hidden");
        });
        return;
      }

      const q = quizzes[currentIdx];
      modalBody.innerHTML = `
        <div class="quiz-header">
          <span class="quiz-step-count">Question ${currentIdx + 1} of ${quizzes.length}</span>
          <button id="btn-close-quiz" class="btn-close-circle">${I.x ? I.x("", 16) : "&times;"}</button>
        </div>

        <h3 class="quiz-question">${q.question}</h3>

        ${q.type === "audio_card" ? `
          <div class="audio-quiz-pill" style="margin-bottom: 20px;">
            <button id="btn-play-quiz-audio" class="btn-secondary btn-small" style="display: inline-flex; align-items: center; gap: 8px;">
              ${I.volume ? I.volume("icon-cyan", 16) : ""}
              <span>Play Audio Formula Snippet</span>
            </button>
          </div>
        ` : ""}

        <div class="quiz-options">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" data-opt="${idx}">
              <span class="opt-key">${String.fromCharCode(65 + idx)}</span>
              <span class="opt-label">${opt}</span>
            </button>
          `).join("")}
        </div>

        <div id="quiz-feedback" class="quiz-feedback hidden"></div>
      `;

      if (q.type === "audio_card") {
        modalBody.querySelector("#btn-play-quiz-audio").addEventListener("click", () => {
          if (window.studioAudioSynth) {
            window.studioAudioSynth.speakText("The Taylor polynomial centered at c is equal to the sum of f n of c over n factorial times x minus c to the n.");
          }
        });
      }

      modalBody.querySelector("#btn-close-quiz").addEventListener("click", () => {
        if (window.studioSoundFX) window.studioSoundFX.playTap();
        modalOverlay.classList.add("hidden");
      });

      modalBody.querySelectorAll(".quiz-opt-btn").forEach(optBtn => {
        optBtn.addEventListener("click", () => {
          const selected = parseInt(optBtn.getAttribute("data-opt"));
          const feedback = modalBody.querySelector("#quiz-feedback");
          feedback.classList.remove("hidden");

          if (selected === q.correct) {
            if (window.studioSoundFX) window.studioSoundFX.playCorrect();
            feedback.innerHTML = `
              <div class="feedback-box success">
                ${I.checkCircle ? I.checkCircle("icon-emerald", 18) : ""}
                <div><strong>Correct!</strong> ${q.explanation}</div>
              </div>
            `;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(true, 1200, q.type);
            setTimeout(() => {
              currentIdx++;
              renderCurrentQuiz();
            }, 1500);
          } else {
            if (window.studioSoundFX) window.studioSoundFX.playWrong();
            this.userHearts = Math.max(0, this.userHearts - 1);
            containerEl.querySelector("#hearts-val").innerText = `${this.userHearts}/5`;
            feedback.innerHTML = `
              <div class="feedback-box error">
                ${I.alert ? I.alert("icon-rose", 18) : ""}
                <div><strong>Incorrect!</strong> ${q.explanation}</div>
              </div>
            `;
            if (window.neuroFeatureVector) window.neuroFeatureVector.updateFromQuiz(false, 2800, q.type);
          }
        });
      });
    };

    renderCurrentQuiz();
  }
}

window.duolingoTrackModule = new DuolingoTrackModule();
