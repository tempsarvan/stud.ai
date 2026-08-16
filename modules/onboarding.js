/**
 * stud.io Onboarding & Multi-Agent Scanning Gateway Controller
 */
class OnboardingModule {
  renderOnboarding(containerEl, defaultCountry = "USA", onComplete) {
    this.selectedCountry = defaultCountry;
    this.selectedBoard = "ap_calc_bc";
    this.selectedDifficulty = "Time Management & Complex Problem Solving";

    containerEl.innerHTML = `
      <div class="onboarding-overlay glass-panel">
        <div class="onboarding-card">
          <div class="onboarding-header">
            <h2>Welcome to <span class="gradient-text">stud.io</span></h2>
            <p>Let's personalize your multi-agent AI study engine in 3 quick steps.</p>
          </div>

          <div id="onboarding-step-content">
            <!-- Step 1: Country & Board -->
            <div class="step-pane active" id="step-1">
              <h3>Step 1: Choose Your Country & Exam System</h3>
              <div class="form-group">
                <label>Select Country:</label>
                <select id="country-select" class="form-control">
                  <option value="USA">🇺🇸 United States of America (AP / SAT / ACT)</option>
                  <option value="IND">🇮🇳 India (CBSE / JEE Mains & Adv / NEET UG)</option>
                  <option value="UK">🇬🇧 United Kingdom (GCSE / A-Levels)</option>
                  <option value="PAK">🇵🇰 Pakistan (Federal Board / Punjab FSc)</option>
                  <option value="CHN">🇨🇳 China (Gaokao 高考 High School Math)</option>
                  <option value="IB">🌐 International Baccalaureate (IB Diploma HL/SL)</option>
                </select>
              </div>

              <div class="form-group">
                <label>Select Exam Syllabus / Board Preset:</label>
                <select id="board-select" class="form-control">
                  <option value="ap_calc_bc">AP Calculus BC & Advanced Mathematics</option>
                  <option value="sat_math_rw">SAT Digital (Math & Digital R&W)</option>
                </select>
              </div>

              <button id="btn-next-1" class="btn-primary">Next: Difficulty Focus ➜</button>
            </div>

            <!-- Step 2: Difficulty Focus -->
            <div class="step-pane" id="step-2">
              <h3>Step 2: What Do You Struggle With The Most?</h3>
              <p>Our Multi-Agent Cluster and NeuroAdapt Neural Engine will tailor your daily quests based on this challenge.</p>
              
              <div class="difficulty-grid">
                <div class="diff-card selected" data-diff="Time Management & Speed">
                  <span class="diff-icon">⏱️</span>
                  <strong>Time Management & Speed</strong>
                  <p>Running out of time on past paper exams</p>
                </div>
                <div class="diff-card" data-diff="Complex Math & Formulas">
                  <span class="diff-icon">📐</span>
                  <strong>Complex Math & Formulas</strong>
                  <p>Memorizing formulas and long derivation steps</p>
                </div>
                <div class="diff-card" data-diff="Concept Clarity & Fundamentals">
                  <span class="diff-icon">💡</span>
                  <strong>Concept Clarity & Fundamentals</strong>
                  <p>Struggling to understand deep theoretical concepts</p>
                </div>
                <div class="diff-card" data-diff="Exam Panic & Trap Questions">
                  <span class="diff-icon">🎯</span>
                  <strong>Exam Panic & Trap Questions</strong>
                  <p>Falling for tricky examiner trap questions</p>
                </div>
              </div>

              <div class="btn-row">
                <button id="btn-back-2" class="btn-secondary">⬅️ Back</button>
                <button id="btn-next-2" class="btn-primary">Initialize AI Multi-Agents 🤖➜</button>
              </div>
            </div>

            <!-- Step 3: Multi-Agent Scanning Terminal -->
            <div class="step-pane" id="step-3">
              <h3>Step 3: Multi-Agent Intelligence Ingestion</h3>
              <p>Synthesizing 10 years of past exam papers and building your personalized Duolingo quest track...</p>

              <div class="agent-terminal">
                <div class="terminal-logs" id="terminal-log-output">
                  <code>[System] Initializing stud.io Multi-Agent Engine...</code>
                </div>
              </div>

              <div class="progress-bar-container">
                <div class="progress-bar-fill" id="agent-progress-fill"></div>
              </div>

              <button id="btn-launch-dashboard" class="btn-primary hidden">
                🌟 Enter stud.io Dashboard 🚀
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
      this.selectedBoard = boardSelect.value;
      containerEl.querySelector("#step-1").classList.remove("active");
      containerEl.querySelector("#step-2").classList.add("active");
    });

    containerEl.querySelector("#btn-back-2").addEventListener("click", () => {
      containerEl.querySelector("#step-2").classList.remove("active");
      containerEl.querySelector("#step-1").classList.add("active");
    });

    containerEl.querySelectorAll(".diff-card").forEach(card => {
      card.addEventListener("click", () => {
        containerEl.querySelectorAll(".diff-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedDifficulty = card.getAttribute("data-diff");
      });
    });

    containerEl.querySelector("#btn-next-2").addEventListener("click", async () => {
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
      containerEl.querySelector("#btn-launch-dashboard").classList.remove("hidden");
    });

    containerEl.querySelector("#btn-launch-dashboard").addEventListener("click", () => {
      onComplete({
        country: this.selectedCountry,
        board: this.selectedBoard,
        difficulty: this.selectedDifficulty
      });
    });
  }
}

window.onboardingModule = new OnboardingModule();
