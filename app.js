/**
 * stud.io Central SPA Controller & Navigation Router (WWDC27 Edition)
 */
class StudioApp {
  constructor() {
    this.userState = {
      isLoggedIn: false,
      country: "USA",
      board: "ap_calc_bc",
      difficulty: "Time Management",
      streak: 14,
      xp: 1250,
      hearts: 5,
      currentTab: "pattern"
    };

    this.rootEl = document.getElementById("app-root");
  }

  init() {
    console.log("stud.io App initializing with WWDC27 Spatial Glass System...");
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("dashboard") || urlParams.has("app")) {
      this.renderAppShell();
    } else {
      this.renderLandingPage();
    }
  }

  renderLandingPage(defaultCountry = "USA") {
    this.rootEl.innerHTML = `<div id="landing-container"></div><div id="onboarding-modal-container"></div>`;
    const landingContainer = document.getElementById("landing-container");

    if (window.landingPageModule) {
      window.landingPageModule.renderLandingPage(landingContainer, (country, directDashboard) => {
        if (directDashboard) {
          this.renderAppShell();
        } else {
          this.openOnboardingModal(country || defaultCountry);
        }
      });
    }
  }

  openOnboardingModal(country = "USA") {
    const modalContainer = document.getElementById("onboarding-modal-container");
    if (window.onboardingModule) {
      window.onboardingModule.renderOnboarding(modalContainer, country, (profileData) => {
        this.userState.isLoggedIn = true;
        this.userState.country = profileData.country;
        this.userState.board = profileData.board;
        this.userState.difficulty = profileData.difficulty;

        // Render main app dashboard
        this.renderAppShell();
      });
    }
  }

  renderAppShell() {
    const I = window.StudioIcons || {};

    this.rootEl.innerHTML = `
      <div class="app-shell">
        <!-- Sidebar -->
        <aside class="app-sidebar">
          <div class="logo-area" id="logo-home-btn" style="cursor: pointer;">
            <div class="logo-icon-box">
              ${I.rocket ? I.rocket("icon-purple", 24) : ""}
            </div>
            <span class="logo-text gradient-text">stud.io</span>
          </div>

          <nav class="nav-menu">
            <a class="nav-item active" data-tab="pattern">
              ${I.chart ? I.chart("nav-icon", 18) : ""}
              <span>Pattern Intelligence</span>
            </a>
            <a class="nav-item" data-tab="notebook">
              ${I.mic ? I.mic("nav-icon", 18) : ""}
              <span>NotebookLM Studio</span>
            </a>
            <a class="nav-item" data-tab="duolingo">
              ${I.gamepad ? I.gamepad("nav-icon", 18) : ""}
              <span>Duolingo Track</span>
            </a>
            <a class="nav-item" data-tab="activerecall">
              ${I.brain ? I.brain("nav-icon", 18) : ""}
              <span>Active Recall Suite</span>
            </a>
            <a class="nav-item" data-tab="pomodoro">
              ${I.timer ? I.timer("nav-icon", 18) : ""}
              <span>Pomodoro Studio</span>
            </a>
            <a class="nav-item" data-tab="neuro">
              ${I.zap ? I.zap("nav-icon", 18) : ""}
              <span>NeuroAdapt Profile</span>
            </a>
            <a class="nav-item" data-tab="notes">
              ${I.notes ? I.notes("nav-icon", 18) : ""}
              <span>Running Notes</span>
            </a>
            <a class="nav-item" data-tab="exam">
              ${I.exam ? I.exam("nav-icon", 18) : ""}
              <span>Exam Simulator</span>
            </a>
            <a class="nav-item" data-tab="vault">
              ${I.vault ? I.vault("nav-icon", 18) : ""}
              <span>Digital Library</span>
            </a>
            <a class="nav-item" data-tab="extra">
              ${I.sparkles ? I.sparkles("nav-icon", 18) : ""}
              <span>Beyond-Syllabus</span>
            </a>
          </nav>
        </aside>

        <!-- Main App Container -->
        <main class="app-main">
          <!-- Top Navbar -->
          <header class="top-navbar">
            <div class="user-badge glass-panel">
              ${I.globe ? I.globe("icon-cyan", 16) : ""}
              <span><strong>${this.userState.country}</strong> (${this.userState.board.toUpperCase()})</span>
            </div>

            <div class="top-stats">
              <div class="stat-pill streak">
                ${I.flame ? I.flame("icon-amber", 16) : ""}
                <span><strong>${this.userState.streak}</strong> Days</span>
              </div>
              <div class="stat-pill xp">
                ${I.zap ? I.zap("icon-purple", 16) : ""}
                <span><strong>${this.userState.xp}</strong> XP</span>
              </div>
              <div class="stat-pill hearts">
                ${I.heart ? I.heart("icon-rose", 16) : ""}
                <span><strong>${this.userState.hearts}/5</strong></span>
              </div>
            </div>
          </header>

          <!-- Dynamic Viewport -->
          <div class="main-viewport" id="main-viewport"></div>
        </main>
      </div>
    `;

    // Logo returns to landing page
    this.rootEl.querySelector("#logo-home-btn").addEventListener("click", () => {
      this.renderLandingPage();
    });

    // Sidebar Tab Listeners
    const navItems = this.rootEl.querySelectorAll(".nav-item");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const tab = item.getAttribute("data-tab");
        this.loadTab(tab);
      });
    });

    // Load initial tab
    this.loadTab("pattern");
  }

  loadTab(tab) {
    const viewport = document.getElementById("main-viewport");
    viewport.innerHTML = "";

    if (tab === "pattern" && window.patternAnalyzerModule) {
      window.patternAnalyzerModule.renderPatternAnalyzer(viewport, this.userState.board);
    } else if (tab === "notebook" && window.notebookLMModule) {
      window.notebookLMModule.renderNotebookLM(viewport, "ap_c10");
    } else if (tab === "duolingo" && window.duolingoTrackModule) {
      window.duolingoTrackModule.renderDuolingoTrack(viewport);
    } else if (tab === "activerecall" && window.activeRecallModule) {
      window.activeRecallModule.renderActiveRecall(viewport);
    } else if (tab === "pomodoro" && window.pomodoroModule) {
      window.pomodoroModule.renderPomodoro(viewport);
    } else if (tab === "neuro" && window.neuroDashboardModule) {
      window.neuroDashboardModule.renderDashboard(viewport);
    } else if (tab === "notes" && window.studentNotesModule) {
      window.studentNotesModule.renderNotesWorkspace(viewport);
    } else if (tab === "exam" && window.examSimulatorModule) {
      window.examSimulatorModule.renderExamSimulator(viewport);
    } else if (tab === "vault" && window.digitalVaultModule) {
      window.digitalVaultModule.renderDigitalVault(viewport);
    } else if (tab === "extra" && window.extracurricularModule) {
      window.extracurricularModule.renderExtracurricular(viewport);
    }
  }
}

// Initialize on DOM ready or immediately if already loaded
function initStudioApp() {
  if (!window.studioApp) {
    window.studioApp = new StudioApp();
    window.studioApp.init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStudioApp);
} else {
  initStudioApp();
}
