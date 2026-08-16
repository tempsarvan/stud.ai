/**
 * stud.io Central SPA Controller & Navigation Router
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
    console.log("⚡ stud.io App initializing...");
    this.renderLandingPage();
  }

  renderLandingPage(defaultCountry = "USA") {
    this.rootEl.innerHTML = `<div id="landing-container"></div><div id="onboarding-modal-container"></div>`;
    const landingContainer = document.getElementById("landing-container");

    if (window.landingPageModule) {
      window.landingPageModule.renderLandingPage(landingContainer, (country) => {
        this.openOnboardingModal(country || defaultCountry);
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
    this.rootEl.innerHTML = `
      <div class="app-shell">
        <!-- Sidebar -->
        <aside class="app-sidebar">
          <div class="logo-area">
            <span class="logo-icon">🚀</span>
            <span class="logo-text gradient-text">stud.io</span>
          </div>

          <nav class="nav-menu">
            <a class="nav-item active" data-tab="pattern">📊 Pattern Intelligence</a>
            <a class="nav-item" data-tab="notebook">🎙️ NotebookLM Studio</a>
            <a class="nav-item" data-tab="duolingo">🎮 Duolingo Track</a>
            <a class="nav-item" data-tab="activerecall">🧠 Active Recall Suite</a>
            <a class="nav-item" data-tab="pomodoro">⏱️ Pomodoro Studio</a>
            <a class="nav-item" data-tab="neuro">🧠 NeuroAdapt Dashboard</a>
            <a class="nav-item" data-tab="notes">📝 Running Notes</a>
            <a class="nav-item" data-tab="exam">📝 Exam Simulator</a>
            <a class="nav-item" data-tab="vault">📚 Digital Library</a>
            <a class="nav-item" data-tab="extra">🌟 Beyond-Syllabus</a>
          </nav>
        </aside>

        <!-- Main App Container -->
        <main class="app-main">
          <!-- Top Navbar -->
          <header class="top-navbar">
            <div class="user-badge">
              <span>🌍 ${this.userState.country} (${this.userState.board.toUpperCase()})</span>
            </div>
            <div class="top-stats">
              <div class="stat-pill streak">🔥 ${this.userState.streak} Days</div>
              <div class="stat-pill xp">⚡ ${this.userState.xp} XP</div>
              <div class="stat-pill hearts">❤️ ${this.userState.hearts}/5</div>
            </div>
          </header>

          <!-- Dynamic Viewport -->
          <div class="main-viewport" id="main-viewport"></div>
        </main>
      </div>
    `;

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

