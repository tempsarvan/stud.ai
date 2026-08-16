/**
 * stud.io NotebookLM Dual-Host AI Audio/Video Studio Module (WWDC27 Edition)
 */
class NotebookLMModule {
  renderNotebookLM(containerEl, topicId = "ap_c10") {
    const I = window.StudioIcons || {};
    const podcast = window.STUDIO_PODCASTS_DB[topicId] || window.STUDIO_PODCASTS_DB.ap_c10;

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>NotebookLM AI Audio & Visual Blackboard Studio</h2>
          <p>Dual-host conversational breakdown between AI tutors Alex & Maya with live synchronized transcript and chalkboard diagrams.</p>
        </div>

        <div class="board-selector-pill glass-panel">
          <label>Topic Episode:</label>
          <select id="podcast-topic-selector" class="pill-select">
            <option value="ap_c10" ${topicId === 'ap_c10' ? 'selected' : ''}>AP Calc BC: Taylor Series & Lagrange Error</option>
            <option value="ind_p6" ${topicId === 'ind_p6' ? 'selected' : ''}>CBSE Physics: Ray Optics & Lens Maker Derivation</option>
          </select>
        </div>
      </div>

      <div class="notebook-layout">
        <!-- Left: Audio Player & Waveform -->
        <div class="audio-panel glass-panel">
          <div class="podcast-info">
            <div class="host-pill">
              ${I.users ? I.users("icon-cyan", 16) : ""}
              <span>Hosts: ${podcast.hosts.join(" & ")}</span>
            </div>
            <h3>${podcast.title}</h3>
            <span class="duration-badge">
              ${I.timer ? I.timer("", 14) : ""}
              <span>${podcast.duration}</span>
            </span>
          </div>

          <!-- Canvas Waveform Visualizer -->
          <div class="waveform-container">
            <canvas id="waveform-canvas" width="600" height="90"></canvas>
          </div>

          <!-- Controls -->
          <div class="audio-controls-bar">
            <div class="playback-btn-group">
              <button id="btn-play-podcast" class="btn-primary">
                ${I.play ? I.play("", 16) : ""}
                <span id="play-btn-text">Play AI Dialogue</span>
              </button>
              <button id="btn-pause-podcast" class="btn-secondary">
                ${I.pause ? I.pause("", 16) : ""}
                <span>Pause</span>
              </button>
            </div>

            <div class="speed-selector">
              <span class="speed-label">Speed:</span>
              <button class="speed-btn active" data-speed="1.0">1.0x</button>
              <button class="speed-btn" data-speed="1.25">1.25x</button>
              <button class="speed-btn" data-speed="1.5">1.5x</button>
            </div>
          </div>

          <!-- Visual Chalkboard Renderer -->
          <div class="chalkboard-container">
            <div class="board-header">
              ${I.chalkboard ? I.chalkboard("icon-cyan", 16) : ""}
              <span>AI Chalkboard Visualizer</span>
            </div>
            <div class="board-screen" id="chalkboard-screen">
              <code>${podcast.transcript[0] ? podcast.transcript[0].boardCmd.replace("CLEAR; ", "").replace("DRAW_TEXT('", "").replace("')", "") : "Initializing Chalkboard..."}</code>
            </div>
          </div>
        </div>

        <!-- Right: Synchronized Interactive Transcript -->
        <div class="transcript-panel glass-panel">
          <div class="card-title-row">
            <div class="card-icon-title">
              ${I.notes ? I.notes("icon-purple", 18) : ""}
              <h3>Synchronized Live Transcript</h3>
            </div>
            <span class="badge-accent">Click line to jump</span>
          </div>

          <div class="transcript-list" id="transcript-list">
            ${podcast.transcript.map((item, idx) => `
              <div class="transcript-item" data-idx="${idx}">
                <div class="item-meta">
                  <span class="speaker-badge ${item.speaker.includes('Maya') ? 'maya' : 'alex'}">${item.speaker}</span>
                  <span class="timestamp">${item.timestamp}</span>
                </div>
                <p class="transcript-text">${item.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    // Canvas Waveform Animation
    const canvas = containerEl.querySelector("#waveform-canvas");
    const ctx = canvas.getContext("2d");

    let animId = null;
    const drawWaveform = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = 4;
      const gap = 3;
      const count = Math.floor(canvas.width / (barWidth + gap));
      const isPlaying = window.studioAudioSynth && window.studioAudioSynth.isPlaying;

      for (let i = 0; i < count; i++) {
        const height = Math.random() * (isPlaying ? 70 : 12) + (isPlaying ? 15 : 6);
        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, "#c084fc");
        gradient.addColorStop(1, "#38bdf8");

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);
      }
      animId = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    // Controls
    const btnPlay = containerEl.querySelector("#btn-play-podcast");
    const btnPause = containerEl.querySelector("#btn-pause-podcast");
    const playBtnText = containerEl.querySelector("#play-btn-text");
    const boardScreen = containerEl.querySelector("#chalkboard-screen");
    const transcriptItems = containerEl.querySelectorAll(".transcript-item");

    let currentTranscriptIdx = 0;

    const playLineAt = (idx) => {
      currentTranscriptIdx = idx;
      if (currentTranscriptIdx >= podcast.transcript.length) {
        currentTranscriptIdx = 0;
        playBtnText.innerText = "Play AI Dialogue";
        return;
      }

      transcriptItems.forEach(ti => ti.classList.remove("active"));
      const currentItemEl = transcriptItems[currentTranscriptIdx];
      if (currentItemEl) {
        currentItemEl.classList.add("active");
        currentItemEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      const lineData = podcast.transcript[currentTranscriptIdx];
      boardScreen.innerHTML = `<code>${lineData.boardCmd.replace("CLEAR; ", "").replace("DRAW_TEXT('", "").replace("')", "")}</code>`;

      playBtnText.innerText = "Playing...";
      if (window.studioAudioSynth) {
        window.studioAudioSynth.speakText(`${lineData.speaker} says: ${lineData.text}`, () => {
          currentTranscriptIdx++;
          playLineAt(currentTranscriptIdx);
        });
      }
    };

    btnPlay.addEventListener("click", () => {
      playLineAt(currentTranscriptIdx);
    });

    btnPause.addEventListener("click", () => {
      if (window.studioAudioSynth) {
        window.studioAudioSynth.pause();
        playBtnText.innerText = "Resume Dialogue";
      }
    });

    transcriptItems.forEach(item => {
      item.addEventListener("click", () => {
        const idx = parseInt(item.getAttribute("data-idx"));
        playLineAt(idx);
      });
    });

    containerEl.querySelectorAll(".speed-btn").forEach(sBtn => {
      sBtn.addEventListener("click", () => {
        containerEl.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
        sBtn.classList.add("active");
        const speed = parseFloat(sBtn.getAttribute("data-speed"));
        if (window.studioAudioSynth) window.studioAudioSynth.setRate(speed);
      });
    });

    containerEl.querySelector("#podcast-topic-selector").addEventListener("change", (e) => {
      if (window.studioAudioSynth) window.studioAudioSynth.stop();
      this.renderNotebookLM(containerEl, e.target.value);
    });
  }
}

window.notebookLMModule = new NotebookLMModule();
