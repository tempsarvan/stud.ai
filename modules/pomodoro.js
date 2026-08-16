/**
 * stud.io Pomodoro & Web Audio Soundscape Focus Studio Module
 */
class PomodoroModule {
  renderPomodoro(containerEl) {
    this.timerSeconds = 25 * 60;
    this.initialSeconds = 25 * 60;
    this.timerInterval = null;
    this.isRunning = false;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>⏱️ Pomodoro & Synthesized Soundscape Studio</h2>
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
              <circle cx="130" cy="130" r="110" stroke="rgba(255,255,255,0.08)" stroke-width="12" fill="none"/>
              <circle id="timer-progress-ring" cx="130" cy="130" r="110" stroke="#8b5cf6" stroke-width="12" fill="none" stroke-dasharray="691" stroke-dashoffset="0" stroke-linecap="round"/>
            </svg>

            <div class="timer-display-overlay">
              <span id="pomo-display-time">25:00</span>
              <small id="pomo-status-label">Deep Focus Sprint</small>
            </div>
          </div>

          <div class="timer-controls">
            <button id="btn-pomo-start" class="btn-primary btn-large">▶️ Start Session</button>
            <button id="btn-pomo-reset" class="btn-secondary">🔄 Reset</button>
          </div>
        </div>

        <!-- Right: Web Audio Soundscape Controls -->
        <div class="soundscape-panel glass-panel">
          <h3>🎵 Synthesized Web Audio Soundscapes</h3>
          <p>Real-time audio synthesized natively in your browser without external media downloads.</p>

          <div class="soundscape-grid">
            <div class="sound-card" data-sound="rain">
              <span class="sound-icon">🌧️</span>
              <strong>Rain Ambiance</strong>
              <small>Pink noise filter</small>
            </div>
            <div class="sound-card" data-sound="binaural">
              <span class="sound-icon">🧠</span>
              <strong>10Hz Alpha Waves</strong>
              <small>Focus beat offset</small>
            </div>
            <div class="sound-card" data-sound="lofi">
              <span class="sound-icon">🌌</span>
              <strong>Deep Space Lo-Fi</strong>
              <small>Warm triangle wave</small>
            </div>
          </div>

          <div class="volume-slider-row">
            <span>🔊 Volume:</span>
            <input type="range" id="soundscape-volume" min="0" max="1" step="0.05" value="0.3"/>
          </div>

          <button id="btn-stop-soundscape" class="btn-secondary full-width">
            ⏹️ Stop All Soundscapes
          </button>
        </div>
      </div>
    `;

    // Timer Mode selection
    const modeBtns = containerEl.querySelectorAll(".mode-btn");
    const displayTime = containerEl.querySelector("#pomo-display-time");
    const ring = containerEl.querySelector("#timer-progress-ring");

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
          containerEl.querySelector("#btn-pomo-start").innerText = "▶️ Start Session";
        }
      });
    });

    // Start / Pause
    const btnStart = containerEl.querySelector("#btn-pomo-start");
    btnStart.addEventListener("click", () => {
      if (!this.isRunning) {
        this.isRunning = true;
        btnStart.innerText = "⏸️ Pause Session";

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
            btnStart.innerText = "▶️ Start Session";
            alert("🔔 Focus session complete! Take a 5-minute break.");
          }
        }, 1000);
      } else {
        clearInterval(this.timerInterval);
        this.isRunning = false;
        btnStart.innerText = "▶️ Resume Session";
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
      btnStart.innerText = "▶️ Start Session";
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
