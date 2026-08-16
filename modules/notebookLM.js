/**
 * stud.io NotebookLM Dual-Host AI Audio/Video Studio Module
 */
class NotebookLMModule {
  renderNotebookLM(containerEl, topicId = "ap_c10") {
    const podcast = window.STUDIO_PODCASTS_DB[topicId] || window.STUDIO_PODCASTS_DB.ap_c10;

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>🎙️ NotebookLM AI Audio & Visual Blackboard Studio</h2>
        <p>Dual-host dialogue breakdown between AI tutors Alex & Maya with synchronized transcript & blackboard diagrams.</p>
      </div>

      <div class="notebook-layout">
        <!-- Left: Audio Player & Waveform -->
        <div class="audio-panel glass-panel">
          <div class="podcast-info">
            <span class="host-pill">👥 Hosts: ${podcast.hosts.join(" & ")}</span>
            <h3>${podcast.title}</h3>
            <span class="duration-badge">⏱️ ${podcast.duration}</span>
          </div>

          <!-- Canvas Waveform Visualizer -->
          <div class="waveform-container">
            <canvas id="waveform-canvas" width="600" height="100"></canvas>
          </div>

          <!-- Controls -->
          <div class="audio-controls-bar">
            <button id="btn-play-podcast" class="btn-primary">
              ▶️ Play AI Dialogue
            </button>
            <button id="btn-pause-podcast" class="btn-secondary">
              ⏸️ Pause
            </button>

            <div class="speed-selector">
              <span>Speed:</span>
              <button class="speed-btn active" data-speed="1.0">1.0x</button>
              <button class="speed-btn" data-speed="1.25">1.25x</button>
              <button class="speed-btn" data-speed="1.5">1.5x</button>
            </div>
          </div>

          <!-- Visual Chalkboard Renderer -->
          <div class="chalkboard-container">
            <div class="board-header">✏️ AI Chalkboard Visualizer</div>
            <div class="board-screen" id="chalkboard-screen">
              <code>Taylor Series: f(x) = ∑ fⁿ(c)/n! (x-c)ⁿ</code>
            </div>
          </div>
        </div>

        <!-- Right: Synchronized Interactive Transcript -->
        <div class="transcript-panel glass-panel">
          <h3>📜 Synchronized Live Transcript</h3>
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
      ctx.fillStyle = "#8b5cf6";

      const barWidth = 4;
      const gap = 2;
      const count = Math.floor(canvas.width / (barWidth + gap));

      for (let i = 0; i < count; i++) {
        const height = Math.random() * (window.studioAudioSynth && window.studioAudioSynth.isPlaying ? 80 : 15) + 10;
        const x = i * (barWidth + gap);
        const y = (canvas.height - height) / 2;
        ctx.fillRect(x, y, barWidth, height);
      }
      animId = requestAnimationFrame(drawWaveform);
    };

    drawWaveform();

    // Controls
    const btnPlay = containerEl.querySelector("#btn-play-podcast");
    const btnPause = containerEl.querySelector("#btn-pause-podcast");
    const boardScreen = containerEl.querySelector("#chalkboard-screen");
    const transcriptItems = containerEl.querySelectorAll(".transcript-item");

    let currentTranscriptIdx = 0;

    const playNextLine = () => {
      if (currentTranscriptIdx >= podcast.transcript.length) {
        currentTranscriptIdx = 0;
        return;
      }

      transcriptItems.forEach(ti => ti.classList.remove("active"));
      const currentItemEl = transcriptItems[currentTranscriptIdx];
      if (currentItemEl) currentItemEl.classList.add("active");

      const lineData = podcast.transcript[currentTranscriptIdx];
      boardScreen.innerHTML = `<code>${lineData.boardCmd.replace("DRAW_TEXT('", "").replace("')", "")}</code>`;

      if (window.studioAudioSynth) {
        window.studioAudioSynth.speakText(`${lineData.speaker} says: ${lineData.text}`, () => {
          currentTranscriptIdx++;
          playNextLine();
        });
      }
    };

    btnPlay.addEventListener("click", () => {
      playNextLine();
    });

    btnPause.addEventListener("click", () => {
      if (window.studioAudioSynth) window.studioAudioSynth.pause();
    });

    containerEl.querySelectorAll(".speed-btn").forEach(sBtn => {
      sBtn.addEventListener("click", () => {
        containerEl.querySelectorAll(".speed-btn").forEach(b => b.classList.remove("active"));
        sBtn.classList.add("active");
        const speed = parseFloat(sBtn.getAttribute("data-speed"));
        if (window.studioAudioSynth) window.studioAudioSynth.setRate(speed);
      });
    });
  }
}

window.notebookLMModule = new NotebookLMModule();
