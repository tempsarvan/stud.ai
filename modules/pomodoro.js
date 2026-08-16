/**
 * stud.io Pomodoro & Web Audio Soundscape Focus Studio Module (WWDC27 Edition)
 */
class PomodoroModule {
  renderPomodoro(containerEl) {
    const I = window.StudioIcons || {};
    this.timerSeconds = 25 * 60;
    this.initialSeconds = 25 * 60;
    this.timerInterval = null;
    this.isRunning = false;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Pomodoro & Synthesized Soundscape Studio</h2>
        <p>Customizable deep work focus timer integrated with Web Audio synthesized rain, cafe, and binaural alpha waves.</p>
      </div>

      <div class="pomodoro-layout">
        <!-- Left: Timer Circle Ring -->
        <div class="timer-panel glass-panel">
          <div class="timer-mode-selector">
            <button class="mode-btn active" data-mins="25">25m Standard</button>
            <button class="mode-btn" data-mins="50">50m Deep Work</button>
            <button class="mode-btn" data-mins="90">90m Ultradian</button>
          </div>

          <div class="svg-timer-container">
            <svg class="timer-svg" width="260" height="260">
              <circle cx="130" cy="130" r="110" stroke="rgba(255,255,255,0.06)" stroke-width="12" fill="none"/>
              <circle id="timer-progress-ring" cx="130" cy="130" r="110" stroke="url(#timer-gradient)" stroke-width="12" fill="none" stroke-dasharray="691" stroke-dashoffset="0" stroke-linecap="round"/>
              <defs>
                <linearGradient id="timer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#c084fc" />
                  <stop offset="100%" stop-color="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>

            <div class="timer-display-overlay">
              <span id="pomo-display-time">25:00</span>
              <small id="pomo-status-label">Deep Focus Sprint</small>
            </div>
          </div>

          <div class="timer-controls">
            <button id="btn-pomo-start" class="btn-primary btn-large">
              ${I.play ? I.play("", 18) : ""}
              <span id="pomo-start-text">Start Session</span>
            </button>
            <button id="btn-pomo-reset" class="btn-secondary">
              ${I.rotate ? I.rotate("", 18) : ""}
              <span>Reset</span>
            </button>
          </div>
        </div>

        <!-- Right: Web Audio Soundscape Controls -->
        <div class="soundscape-panel glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.music ? I.music("icon-cyan", 20) : ""}
              <h3>Synthesized Web Audio Soundscapes</h3>
            </div>
            <span class="badge-accent">Native Audio Synthesis</span>
          </div>

          <p class="soundscape-desc">Real-time frequencies synthesized directly in your browser without network audio streaming.</p>

          <div class="soundscape-grid">
            <div class="sound-card" data-sound="rain">
              <div class="sound-icon-box">
                ${I.cloudRain ? I.cloudRain("icon-cyan", 24) : ""}
              </div>
              <strong>Rain Ambiance</strong>
              <small>Lowpass filtered pink noise</small>
            </div>

            <div class="sound-card" data-sound="binaural">
              <div class="sound-icon-box">
                ${I.brain ? I.brain("icon-purple", 24) : ""}
              </div>
              <strong>10Hz Alpha Waves</strong>
              <small>Phase offset focus beat</small>
            </div>

            <div class="sound-card" data-sound="lofi">
              <div class="sound-icon-box">
                ${I.music ? I.music("icon-amber", 24) : ""}
              </div>
              <strong>Deep Space Lo-Fi</strong>
              <small>Warm triangle wave</small>
            </div>
          </div>

          <div class="volume-slider-row">
            <div class="volume-label">
              ${I.volume ? I.volume("icon-muted", 16) : ""}
              <span>Master Volume</span>
            </div>
            <input type="range" id="soundscape-volume" min="0" max="1" step="0.05" value="0.3"/>
          </div>

          <button id="btn-stop-soundscape" class="btn-secondary full-width">
            ${I.stop ? I.stop("", 14) : ""}
            <span>Mute All Soundscapes</span>
          </button>
        </div>
      </div>
    `;

    // Timer Mode selection
    const modeBtns = containerEl.querySelectorAll(".mode-btn");
    const displayTime = containerEl.querySelector("#pomo-display-time");
    const ring = containerEl.querySelector("#timer-progress-ring");
    const startText = containerEl.querySelector("#pomo-start-text");

    modeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const mins = parseInt(btn.getAttribute("data-mins"));
        this.timerSeconds = mins * 60;
        this.initialSeconds = mins * 60;

        const mStr = String(mins).padStart(2, "0");
        displayTime.innerText = `${mStr}:00`;
        ring.style.strokeDashoffset = "0";

        if (this.isRunning) {
          clearInterval(this.timerInterval);
          this.isRunning = false;
          startText.innerText = "Start Session";
        }
      });
    });

    // Start / Pause
    const btnStart = containerEl.querySelector("#btn-pomo-start");
    btnStart.addEventListener("click", () => {
      if (!this.isRunning) {
        this.isRunning = true;
        startText.innerText = "Pause Session";

        this.timerInterval = setInterval(() => {
          this.timerSeconds--;
          const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
          const s = String(this.timerSeconds % 60).padStart(2, "0");
          displayTime.innerText = `${m}:${s}`;

          const progressRatio = 1 - (this.timerSeconds / this.initialSeconds);
          const circumference = 691;
          ring.style.strokeDashoffset = String(progressRatio * circumference);

          if (this.timerSeconds <= 0) {
            clearInterval(this.timerInterval);
            this.isRunning = false;
            startText.innerText = "Start Session";
            alert("Focus session complete! Take a 5-minute break.");
          }
        }, 1000);
      } else {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        startText.innerText = "Resume Session";
      }
    });

    // Reset
    containerEl.querySelector("#btn-pomo-reset").addEventListener("click", () => {
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.timerSeconds = this.initialSeconds;
      const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, "0");
      displayTime.innerText = `${m}:00`;
      ring.style.strokeDashoffset = "0";
      startText.innerText = "Start Session";
    });

    // Soundscapes
    const soundCards = containerEl.querySelectorAll(".sound-card");
    soundCards.forEach(card => {
      card.addEventListener("click", () => {
        soundCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const sound = card.getAttribute("data-sound");
        if (window.soundscapeSynth) {
          if (sound === "rain") window.soundscapeSynth.playRain();
          else if (sound === "binaural") window.soundscapeSynth.playBinauralAlpha();
          else if (sound === "lofi") window.soundscapeSynth.playSpaceLoFi();
        }
      });
    });

    containerEl.querySelector("#soundscape-volume").addEventListener("input", (e) => {
      if (window.soundscapeSynth) {
        window.soundscapeSynth.setVolume(parseFloat(e.target.value));
      }
    });

    containerEl.querySelector("#btn-stop-soundscape").addEventListener("click", () => {
      soundCards.forEach(c => c.classList.remove("active"));
      if (window.soundscapeSynth) window.soundscapeSynth.stop();
    });
  }
}

window.pomodoroModule = new PomodoroModule();
