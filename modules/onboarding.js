/**
 * stud.io Onboarding & Multi-Agent Scanning Gateway Controller (WWDC27 Neurological Edition)
 */
class OnboardingModule {
  renderOnboarding(containerEl, defaultCountry = "USA", onComplete) {
    const I = window.StudioIcons || {};
    this.selectedCountry = defaultCountry;
    this.selectedBoard = "ap_calc_bc";
    this.selectedDifficulty = "Time Management & Speed";

    containerEl.innerHTML = `
      <div class="onboarding-overlay">
        <div class="onboarding-card glass-panel">
          <div class="onboarding-header">
            <div class="onboarding-logo-badge">
              ${I.rocket ? I.rocket("icon-purple", 20) : ""}
              <span>stud.io Agent Setup</span>
            </div>
            <h2>Welcome to <span class="gradient-text">stud.io</span></h2>
            <p>Personalize your cognitive multi-agent study engine in 3 simple steps.</p>
          </div>

          <div id="onboarding-step-content">
            <!-- Step 1: Country & Board -->
            <div class="step-pane active" id="step-1">
              <div class="step-indicator">
                <span class="step-num active">1</span>
                <span class="step-line"></span>
                <span class="step-num">2</span>
                <span class="step-line"></span>
                <span class="step-num">3</span>
              </div>

              <h3>Select Educational System & Syllabus</h3>
              <p class="step-desc">Our multi-agent cluster automatically matches past paper patterns for your regional curriculum.</p>
              
              <div class="form-group">
                <label>Country / Region:</label>
                <select id="country-select" class="form-control">
                  <option value="USA">United States of America (AP / SAT / ACT)</option>
                  <option value="IND">India (CBSE / JEE Mains & Adv / NEET UG)</option>
                  <option value="UK">United Kingdom (GCSE / A-Levels)</option>
                  <option value="PAK">Pakistan (Federal Board / Punjab FSc)</option>
                  <option value="CHN">China (Gaokao High School Math)</option>
                  <option value="IB">International Baccalaureate (IB Diploma HL/SL)</option>
                </select>
              </div>

              <div class="form-group">
                <label>Target Exam Board / Curriculum:</label>
                <select id="board-select" class="form-control">
                  <option value="ap_calc_bc">AP Calculus BC & Advanced Mathematics</option>
                  <option value="sat_math_rw">SAT Digital (Math & Digital R&W)</option>
                </select>
              </div>

              <button id="btn-next-1" class="btn-primary full-width">
                <span>Continue to Difficulty Focus</span>
                ${I.arrowRight ? I.arrowRight("", 16) : ""}
              </button>
            </div>

            <!-- Step 2: Difficulty Focus -->
            <div class="step-pane" id="step-2">
              <div class="step-indicator">
                <span class="step-num completed">${I.check ? I.check("", 12) : "1"}</span>
                <span class="step-line completed"></span>
                <span class="step-num active">2</span>
                <span class="step-line"></span>
                <span class="step-num">3</span>
              </div>

              <h3>What Do You Struggle With The Most?</h3>
              <p class="step-desc">Our NeuroAdapt Engine dynamically calibrates your daily quest cards based on your primary cognitive hurdle.</p>
              
              <div class="difficulty-grid">
                <div class="diff-card selected" data-diff="Time Management & Speed">
                  <div class="diff-icon-box">
                    ${I.timer ? I.timer("icon-rose", 22) : ""}
                  </div>
                  <strong>Time Management & Speed</strong>
                  <p>Running out of time on past paper questions</p>
                </div>

                <div class="diff-card" data-diff="Complex Math & Formulas">
                  <div class="diff-icon-box">
                    ${I.code ? I.code("icon-purple", 22) : ""}
                  </div>
                  <strong>Complex Math & Formulas</strong>
                  <p>Memorizing long derivations and theorems</p>
                </div>

                <div class="diff-card" data-diff="Concept Clarity & Fundamentals">
                  <div class="diff-icon-box">
                    ${I.brain ? I.brain("icon-cyan", 22) : ""}
                  </div>
                  <strong>Concept Clarity & Fundamentals</strong>
                  <p>Struggling with deep theoretical principles</p>
                </div>

                <div class="diff-card" data-diff="Exam Panic & Trap Questions">
                  <div class="diff-icon-box">
                    ${I.alert ? I.alert("icon-amber", 22) : ""}
                  </div>
                  <strong>Exam Panic & Trap Questions</strong>
                  <p>Falling for tricky examiner trap questions</p>
                </div>
              </div>

              <div class="btn-row">
                <button id="btn-back-2" class="btn-secondary">
                  ${I.arrowLeft ? I.arrowLeft("", 16) : ""}
                  <span>Back</span>
                </button>
                <button id="btn-next-2" class="btn-primary">
                  <span>Initialize AI Multi-Agents</span>
                  ${I.sparkles ? I.sparkles("", 16) : ""}
                </button>
              </div>
            </div>

            <!-- Step 3: Multi-Agent Scanning Terminal -->
            <div class="step-pane" id="step-3">
              <div class="step-indicator">
                <span class="step-num completed">${I.check ? I.check("", 12) : "1"}</span>
                <span class="step-line completed"></span>
                <span class="step-num completed">${I.check ? I.check("", 12) : "2"}</span>
                <span class="step-line completed"></span>
                <span class="step-num active">3</span>
              </div>

              <h3>Multi-Agent Intelligence Ingestion</h3>
              <p class="step-desc">Mining 10 years of exam papers, parsing syllabus dependency trees, and synthesizing podcast scripts...</p>

              <div class="agent-terminal">
                <div class="terminal-header">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                  <span class="terminal-title">AgentCluster Orchestrator Terminal</span>
                </div>
                <div class="terminal-logs" id="terminal-log-output">
                  <div><code>[System] Initializing stud.io Multi-Agent Engine...</code></div>
                </div>
              </div>

              <div class="progress-bar-container">
                <div class="progress-bar-fill" id="agent-progress-fill"></div>
              </div>

              <button id="btn-launch-dashboard" class="btn-primary full-width hidden">
                ${I.rocket ? I.rocket("", 18) : ""}
                <span>Enter stud.io Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Dropdown listeners
    const countrySelect = containerEl.querySelector("#country-select");
    const boardSelect = containerEl.querySelector("#board-select");

    countrySelect.value = this.selectedCountry;

    const updateBoardOptions = () => {
      const countryData = window.STUDIO_SYLLABI_DB[countrySelect.value];
      if (countryData && countryData.boards) {
        boardSelect.innerHTML = countryData.boards.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
      }
    };

    updateBoardOptions();
    countrySelect.addEventListener("change", (e) => {
      this.selectedCountry = e.target.value;
      updateBoardOptions();
    });

    // Step navigation
    containerEl.querySelector("#btn-next-1").addEventListener("click", () => {
      if (window.studioSoundFX) window.studioSoundFX.playTap();
      this.selectedBoard = boardSelect.value;
      containerEl.querySelector("#step-1").classList.remove("active");
      containerEl.querySelector("#step-2").classList.add("active");
    });

    containerEl.querySelector("#btn-back-2").addEventListener("click", () => {
      if (window.studioSoundFX) window.studioSoundFX.playTap();
      containerEl.querySelector("#step-2").classList.remove("active");
      containerEl.querySelector("#step-1").classList.add("active");
    });

    containerEl.querySelectorAll(".diff-card").forEach(card => {
      card.addEventListener("click", () => {
        if (window.studioSoundFX) window.studioSoundFX.playTap();
        containerEl.querySelectorAll(".diff-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedDifficulty = card.getAttribute("data-diff");
      });
    });

    containerEl.querySelector("#btn-next-2").addEventListener("click", async () => {
      if (window.studioSoundFX) window.studioSoundFX.playTap();
      containerEl.querySelector("#step-2").classList.remove("active");
      containerEl.querySelector("#step-3").classList.add("active");

      const logOutput = containerEl.querySelector("#terminal-log-output");
      const progressFill = containerEl.querySelector("#agent-progress-fill");

      let currentProgress = 0;
      const appendLog = (msg) => {
        logOutput.innerHTML += `<div><code>${msg}</code></div>`;
        logOutput.scrollTop = logOutput.scrollHeight;
        currentProgress = Math.min(100, currentProgress + 15);
        progressFill.style.width = `${currentProgress}%`;
      };

      if (window.studioAgentCluster) {
        await window.studioAgentCluster.runIngestion(this.selectedCountry, this.selectedBoard, appendLog);
      }

      progressFill.style.width = "100%";
      const launchBtn = containerEl.querySelector("#btn-launch-dashboard");
      launchBtn.classList.remove("hidden");
      if (window.studioSoundFX) window.studioSoundFX.playLevelUp();
    });

    containerEl.querySelector("#btn-launch-dashboard").addEventListener("click", () => {
      if (window.studioSoundFX) window.studioSoundFX.playTap();
      onComplete({
        country: this.selectedCountry,
        board: this.selectedBoard,
        difficulty: this.selectedDifficulty
      });
    });
  }
}

window.onboardingModule = new OnboardingModule();
