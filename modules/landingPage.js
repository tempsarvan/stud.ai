/**
 * stud.io Landing Page Controller & Showcase Renderer
 */
class LandingPageModule {
  renderLandingPage(containerEl, onLaunchApp) {
    containerEl.innerHTML = `
      <section class="landing-hero">
        <div class="landing-badge">✨ Powered by Pattern Intelligence & NeuroAdapt™ Neural Engine</div>
        <h1 class="landing-title">
          The Only Study App <br/>
          <span class="gradient-text">You Will Ever Need.</span>
        </h1>
        <p class="landing-subtitle">
          Pre-downloaded past paper patterns, NotebookLM dual-host podcasts, Duolingo-style quest tracks, 
          and active recall built for students in the USA, India, UK, Pakistan, China, IB & beyond.
        </p>

        <div class="landing-cta-group">
          <button id="btn-launch-app-hero" class="btn-primary btn-large">
            🚀 Launch stud.io Onboarding
          </button>
          <button id="btn-direct-dashboard-hero" class="btn-secondary btn-large" style="background: rgba(139, 92, 246, 0.25); border-color: var(--accent-purple);">
            ⚡ Enter Dashboard Directly
          </button>
          <a href="#features-section" class="btn-secondary btn-large">
            🔍 Explore All Features
          </a>
        </div>

        <!-- Live Demo Card -->
        <div class="landing-preview-card glass-panel">
          <div class="preview-header">
            <div class="preview-dots"><span></span><span></span><span></span></div>
            <div class="preview-badge">⚡ Live stud.io Neural Engine Demo</div>
          </div>
          <div class="preview-body">
            <div class="preview-stats">
              <div class="stat-box">
                <span class="stat-icon">🔥</span>
                <div><strong id="demo-streak">14 Days</strong><small>Daily Streak</small></div>
              </div>
              <div class="stat-box">
                <span class="stat-icon">⚡</span>
                <div><strong id="demo-xp">2,450 XP</strong><small>Diamond League</small></div>
              </div>
              <div class="stat-box">
                <span class="stat-icon">🧠</span>
                <div><strong id="demo-efficiency">94% Index</strong><small>NeuroAdapt Efficiency</small></div>
              </div>
            </div>
            <div class="preview-heatmap-row">
              <span class="heatmap-label">Calculus & Series Weightage:</span>
              <div class="mini-heatmap">
                <div class="h-cell high" title="Taylor Series 18%">18%</div>
                <div class="h-cell high" title="Lagrange Error 15%">15%</div>
                <div class="h-cell med" title="Parametrics 12%">12%</div>
                <div class="h-cell low" title="Limits 8%">8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Country Presets Showcase -->
      <section class="landing-countries">
        <h3>🌍 Pre-Downloaded Syllabi & Past Paper Patterns For 10+ Nations</h3>
        <div class="country-grid">
          <div class="country-card" data-country="USA">
            <span class="flag">🇺🇸</span>
            <strong>USA (AP & SAT)</strong>
            <p>Calculus BC, AP Physics, SAT Digital</p>
          </div>
          <div class="country-card" data-country="IND">
            <span class="flag">🇮🇳</span>
            <strong>India (CBSE, JEE, NEET)</strong>
            <p>Class 12th Physics, JEE Mains, NEET Bio</p>
          </div>
          <div class="country-card" data-country="UK">
            <span class="flag">🇬🇧</span>
            <strong>UK (GCSE & A-Levels)</strong>
            <p>AQA Chemistry, Edexcel Math</p>
          </div>
          <div class="country-card" data-country="PAK">
            <span class="flag">🇵🇰</span>
            <strong>Pakistan (Matric & FSc)</strong>
            <p>Federal Board Biology & Chemistry</p>
          </div>
          <div class="country-card" data-country="CHN">
            <span class="flag">🇨🇳</span>
            <strong>China (Gaokao 高考)</strong>
            <p>Gaokao Higher Math & Science</p>
          </div>
          <div class="country-card" data-country="IB">
            <span class="flag">🌐</span>
            <strong>IB Diploma (HL / SL)</strong>
            <p>IB Physics HL, Math AA/AI</p>
          </div>
        </div>
      </section>

      <!-- Features Showcase Section -->
      <section id="features-section" class="landing-features">
        <h2>Everything A Student Needs <span class="gradient-text">In One Dashboard</span></h2>

        <div class="features-grid">
          <div class="feature-card glass-panel">
            <div class="feature-icon">📊</div>
            <h3>10-Year Exam Pattern Intelligence</h3>
            <p>Visual topic frequency heatmaps, examiner pitfall decoders, and 95% probability predicted exam questions.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🎙️</div>
            <h3>NotebookLM AI Audio Podcasts</h3>
            <p>Dual-host dialogue podcast breakdowns between AI tutors Alex & Maya with live synchronized transcript and chalkboard scripts.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🎮</div>
            <h3>Duolingo Gamified Quest Track</h3>
            <p>XP rank leaderboards, 5-heart life system, daily streaks, audio listening cards, and speed-round quizzes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🧠</div>
            <h3>Active Recall & Spaced Repetition</h3>
            <p>5-Box Leitner card decks, Feynman AI student feedback mentor, timed Blurting workspace, and Cornell notes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">⏱️</div>
            <h3>Pomodoro & Ambient Soundscapes</h3>
            <p>Web Audio synthesized rain, cafe, binaural 10Hz alpha waves, and deep space lo-fi study sounds.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon">🤖</div>
            <h3>NeuroAdapt™ Learning Neural Engine</h3>
            <p>Client-side MLP neural net that analyzes your running notes, detects concept confusion, and adapts lesson difficulty.</p>
          </div>
        </div>
      </section>

      <section class="landing-footer-cta">
        <h2>Ready To Transform Your Study Sprints?</h2>
        <button id="btn-launch-app-footer" class="btn-primary btn-large">
          ⚡ Get Started Now — It's Free
        </button>
      </section>
    `;

    // Event Listeners
    containerEl.querySelector("#btn-launch-app-hero").addEventListener("click", () => onLaunchApp());
    const directBtn = containerEl.querySelector("#btn-direct-dashboard-hero");
    if (directBtn) {
      directBtn.addEventListener("click", () => onLaunchApp(null, true));
    }
    containerEl.querySelector("#btn-launch-app-footer").addEventListener("click", () => onLaunchApp());

    containerEl.querySelectorAll(".country-card").forEach(card => {
      card.addEventListener("click", () => {
        const country = card.getAttribute("data-country");
        onLaunchApp(country);
      });
    });
  }
}

window.landingPageModule = new LandingPageModule();
