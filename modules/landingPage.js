/**
 * stud.io Landing Page Controller & Showcase Renderer (WWDC27 Apple Design Standard)
 * Clean vector iconography, spatial glass surfaces, and responsive interactive cards.
 */
class LandingPageModule {
  renderLandingPage(containerEl, onLaunchApp) {
    const I = window.StudioIcons || {};

    containerEl.innerHTML = `
      <section class="landing-hero">
        <div class="landing-badge">
          ${I.sparkles ? I.sparkles("icon-gold", 16) : ""}
          <span>Powered by Pattern Intelligence & NeuroAdapt™ Neural Engine</span>
        </div>

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
            ${I.rocket ? I.rocket("", 18) : ""}
            <span>Personalize with AI Onboarding</span>
          </button>

          <button id="btn-direct-dashboard-hero" class="btn-secondary btn-large glow-btn">
            ${I.zap ? I.zap("icon-accent", 18) : ""}
            <span>Enter Dashboard Directly</span>
          </button>

          <a href="#features-section" class="btn-secondary btn-large">
            ${I.search ? I.search("", 18) : ""}
            <span>Explore All Features</span>
          </a>
        </div>

        <!-- Live Demo Card -->
        <div class="landing-preview-card glass-panel">
          <div class="preview-header">
            <div class="preview-dots"><span></span><span></span><span></span></div>
            <div class="preview-badge">
              ${I.radio ? I.radio("icon-cyan", 14) : ""}
              <span>Live NeuroAdapt™ Engine Active</span>
            </div>
          </div>

          <div class="preview-body">
            <div class="preview-stats">
              <div class="stat-box">
                <div class="stat-icon-wrapper flame-glow">
                  ${I.flame ? I.flame("icon-amber", 24) : ""}
                </div>
                <div>
                  <strong id="demo-streak">14 Days</strong>
                  <small>Daily Streak</small>
                </div>
              </div>

              <div class="stat-box">
                <div class="stat-icon-wrapper xp-glow">
                  ${I.zap ? I.zap("icon-purple", 24) : ""}
                </div>
                <div>
                  <strong id="demo-xp">2,450 XP</strong>
                  <small>Diamond League</small>
                </div>
              </div>

              <div class="stat-box">
                <div class="stat-icon-wrapper brain-glow">
                  ${I.brain ? I.brain("icon-cyan", 24) : ""}
                </div>
                <div>
                  <strong id="demo-efficiency">94% Index</strong>
                  <small>NeuroAdapt Efficiency</small>
                </div>
              </div>
            </div>

            <div class="preview-heatmap-row">
              <span class="heatmap-label">Calculus & Series Weightage:</span>
              <div class="mini-heatmap">
                <div class="h-cell high" title="Taylor Series 18%">18% High Yield</div>
                <div class="h-cell high" title="Lagrange Error 15%">15% High Yield</div>
                <div class="h-cell med" title="Parametrics 12%">12% Med</div>
                <div class="h-cell low" title="Limits 8%">8% Low</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Country Presets Showcase -->
      <section class="landing-countries">
        <div class="section-title-badge">
          ${I.globe ? I.globe("icon-cyan", 16) : ""}
          <span>Global Coverage</span>
        </div>
        <h3>Pre-Downloaded Syllabi & Past Paper Patterns For 10+ Nations</h3>
        <p class="section-subtitle">Click any educational system to instantly launch personalized study intelligence.</p>

        <div class="country-grid">
          <div class="country-card" data-country="USA">
            <div class="country-code-pill">US</div>
            <strong>USA (AP & SAT)</strong>
            <p>Calculus BC, AP Physics, SAT Digital</p>
          </div>
          <div class="country-card" data-country="IND">
            <div class="country-code-pill">IN</div>
            <strong>India (CBSE, JEE, NEET)</strong>
            <p>Class 12th Physics, JEE Mains, NEET Bio</p>
          </div>
          <div class="country-card" data-country="UK">
            <div class="country-code-pill">GB</div>
            <strong>UK (GCSE & A-Levels)</strong>
            <p>AQA Chemistry, Edexcel Math</p>
          </div>
          <div class="country-card" data-country="PAK">
            <div class="country-code-pill">PK</div>
            <strong>Pakistan (Matric & FSc)</strong>
            <p>Federal Board Biology & Chemistry</p>
          </div>
          <div class="country-card" data-country="CHN">
            <div class="country-code-pill">CN</div>
            <strong>China (Gaokao)</strong>
            <p>Gaokao Higher Math & Science</p>
          </div>
          <div class="country-card" data-country="IB">
            <div class="country-code-pill">IB</div>
            <strong>IB Diploma (HL / SL)</strong>
            <p>IB Physics HL, Math AA/AI</p>
          </div>
        </div>
      </section>

      <!-- Features Showcase Section -->
      <section id="features-section" class="landing-features">
        <div class="section-title-badge">
          ${I.sparkles ? I.sparkles("icon-purple", 16) : ""}
          <span>Full Academic Suite</span>
        </div>
        <h2>Everything A Student Needs <span class="gradient-text">In One Dashboard</span></h2>

        <div class="features-grid">
          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.chart ? I.chart("icon-purple", 28) : ""}
            </div>
            <h3>10-Year Exam Pattern Intelligence</h3>
            <p>Visual topic frequency heatmaps, examiner pitfall decoders, and 95% probability predicted exam questions.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.mic ? I.mic("icon-cyan", 28) : ""}
            </div>
            <h3>NotebookLM AI Audio Podcasts</h3>
            <p>Dual-host dialogue podcast breakdowns between AI tutors Alex & Maya with live synchronized transcript and chalkboard scripts.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.gamepad ? I.gamepad("icon-emerald", 28) : ""}
            </div>
            <h3>Duolingo Gamified Quest Track</h3>
            <p>XP rank leaderboards, 5-heart life system, daily streaks, audio listening cards, and speed-round quizzes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.brain ? I.brain("icon-amber", 28) : ""}
            </div>
            <h3>Active Recall & Spaced Repetition</h3>
            <p>5-Box Leitner card decks, Feynman AI student feedback mentor, timed Blurting workspace, and Cornell notes.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.timer ? I.timer("icon-rose", 28) : ""}
            </div>
            <h3>Pomodoro & Ambient Soundscapes</h3>
            <p>Web Audio synthesized rain, cafe, binaural 10Hz alpha waves, and deep space lo-fi study sounds.</p>
          </div>

          <div class="feature-card glass-panel">
            <div class="feature-icon-box">
              ${I.zap ? I.zap("icon-purple", 28) : ""}
            </div>
            <h3>NeuroAdapt™ Learning Neural Engine</h3>
            <p>Client-side MLP neural net that analyzes your running notes, detects concept confusion, and adapts lesson difficulty.</p>
          </div>
        </div>
      </section>

      <section class="landing-footer-cta">
        <h2>Ready To Transform Your Study Sprints?</h2>
        <div class="footer-btn-group">
          <button id="btn-launch-app-footer" class="btn-primary btn-large">
            ${I.rocket ? I.rocket("", 18) : ""}
            <span>Launch stud.io — It's Free</span>
          </button>
        </div>
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
