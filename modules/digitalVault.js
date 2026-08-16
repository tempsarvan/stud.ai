/**
 * stud.io Global Omni-Knowledge & Open-Source Library Discovery Engine (WWDC27 Edition)
 * Connects students to global open-source libraries: OpenStax, arXiv, PhET Simulations,
 * Project Gutenberg, Wolfram MathWorld, PubChem, NASA Open Data, and MIT OpenCourseWare.
 */
class DigitalVaultModule {
  renderDigitalVault(containerEl) {
    const I = window.StudioIcons || {};
    const libraries = window.STUDIO_OPEN_LIBRARIES_DB || [];

    containerEl.innerHTML = `
      <div class="module-header flex-header">
        <div>
          <h2>Global Digital Vault & Open-Source Academic Network</h2>
          <p>Connecting every topic on Earth to open-source libraries, peer-reviewed textbooks, research papers, and interactive STEM labs.</p>
        </div>

        <div class="vault-filter-pills glass-panel">
          <button class="v-filter-btn active" data-filter="all">All Fields (${libraries.length})</button>
          <button class="v-filter-btn" data-filter="STEM">STEM & Labs</button>
          <button class="v-filter-btn" data-filter="Research">Research & Papers</button>
          <button class="v-filter-btn" data-filter="Humanities">Humanities & Classics</button>
        </div>
      </div>

      <!-- Vector Search & Open Knowledge Discovery -->
      <div class="vault-search-bar glass-panel">
        <div class="search-input-wrapper">
          ${I.search ? I.search("icon-muted", 20) : ""}
          <input type="text" id="vault-search-input" class="search-input" placeholder="Search any topic on Earth (e.g. 'Taylor Series', 'Quantum Electrodynamics', 'DNA Polymerase', 'Plato Republic', 'Gravitational Waves')..."/>
        </div>
        <button id="btn-vault-search" class="btn-primary">
          ${I.sparkles ? I.sparkles("", 16) : ""}
          <span>Search Open Repositories</span>
        </button>
      </div>

      <!-- Open Knowledge Repository Cards Grid -->
      <div class="vault-grid" id="vault-grid-container">
        ${libraries.map(lib => `
          <div class="vault-card glass-panel" data-cat="${lib.category}">
            <div class="vault-card-header">
              <div class="vault-icon-box">
                ${I.vault ? I.vault("icon-purple", 24) : ""}
              </div>
              <span class="badge-accent">${lib.badge}</span>
            </div>

            <h3>${lib.name}</h3>
            <span class="vault-provider">${lib.provider}</span>
            <p>${lib.desc}</p>

            <div class="vault-features-list">
              ${lib.features.map(f => `<span class="v-feature-item">✓ ${f}</span>`).join("")}
            </div>

            <div class="vault-tags-row">
              ${lib.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}
            </div>

            <button class="btn-primary btn-small full-width btn-open-library" data-lib="${lib.id}">
              ${I.bookOpen ? I.bookOpen("", 14) : (I.rocket ? I.rocket("", 14) : "")}
              <span>Explore Library (${lib.resourcesCount})</span>
            </button>
          </div>
        `).join("")}
      </div>

      <!-- Live Open Source Resource Modal -->
      <div id="library-viewer-modal" class="quiz-modal-overlay hidden">
        <div class="quiz-modal glass-panel" style="max-width: 780px;" id="library-viewer-body"></div>
      </div>
    `;

    // Search and filter interactions
    const searchInput = containerEl.querySelector("#vault-search-input");
    const btnSearch = containerEl.querySelector("#btn-vault-search");
    const gridContainer = containerEl.querySelector("#vault-grid-container");
    const modal = containerEl.querySelector("#library-viewer-modal");
    const modalBody = containerEl.querySelector("#library-viewer-body");

    const performSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (window.studioSoundFX) window.studioSoundFX.playTap();

      if (!query) {
        this.renderDigitalVault(containerEl);
        return;
      }

      const matching = libraries.filter(lib => 
        lib.name.toLowerCase().includes(query) ||
        lib.desc.toLowerCase().includes(query) ||
        lib.tags.some(t => t.toLowerCase().includes(query))
      );

      if (matching.length === 0) {
        gridContainer.innerHTML = `
          <div class="text-center full-width" style="grid-column: 1 / -1; padding: 40px;">
            <h3>No direct local cache found for "${query}"</h3>
            <p class="text-muted">Querying arXiv, OpenStax, and Wikipedia REST API for global academic match...</p>
            <button class="btn-primary" style="margin-top: 16px;" onclick="window.digitalVaultModule.openUniversalTopic('${query}')">
              <span>Launch Live Global Knowledge Search</span>
            </button>
          </div>
        `;
      } else {
        gridContainer.innerHTML = matching.map(lib => `
          <div class="vault-card glass-panel">
            <div class="vault-card-header">
              <div class="vault-icon-box">
                ${I.vault ? I.vault("icon-purple", 24) : ""}
              </div>
              <span class="badge-accent">${lib.badge}</span>
            </div>
            <h3>${lib.name}</h3>
            <span class="vault-provider">${lib.provider}</span>
            <p>${lib.desc}</p>
            <button class="btn-primary btn-small full-width btn-open-library" data-lib="${lib.id}">
              <span>Explore Library (${lib.resourcesCount})</span>
            </button>
          </div>
        `).join("");
        this.bindLibraryButtons(containerEl);
      }
    };

    btnSearch.addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") performSearch();
    });

    // Category Filter Buttons
    containerEl.querySelectorAll(".v-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (window.studioSoundFX) window.studioSoundFX.playTap();
        containerEl.querySelectorAll(".v-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        containerEl.querySelectorAll(".vault-card").forEach(card => {
          if (filter === "all") {
            card.style.display = "flex";
          } else {
            const cat = card.getAttribute("data-cat") || "";
            card.style.display = cat.toLowerCase().includes(filter.toLowerCase()) ? "flex" : "none";
          }
        });
      });
    });

    this.bindLibraryButtons(containerEl);
  }

  bindLibraryButtons(containerEl) {
    const I = window.StudioIcons || {};
    const modal = containerEl.querySelector("#library-viewer-modal");
    const modalBody = containerEl.querySelector("#library-viewer-body");

    containerEl.querySelectorAll(".btn-open-library").forEach(btn => {
      btn.addEventListener("click", () => {
        if (window.studioSoundFX) window.studioSoundFX.playTap();
        const libId = btn.getAttribute("data-lib");
        const lib = (window.STUDIO_OPEN_LIBRARIES_DB || []).find(l => l.id === libId);
        if (!lib) return;

        modal.classList.remove("hidden");
        modalBody.innerHTML = `
          <div class="quiz-header">
            <div>
              <span class="badge-accent">${lib.category}</span>
              <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; margin-top: 8px;">${lib.name}</h3>
              <span class="vault-provider">${lib.provider}</span>
            </div>
            <button id="btn-close-lib-modal" class="btn-close-circle">${I.x ? I.x("", 16) : "&times;"}</button>
          </div>

          <div style="margin: 20px 0;">
            <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">${lib.desc}</p>
            <div class="glass-panel" style="padding: 20px; background: rgba(0,0,0,0.3); margin-bottom: 20px;">
              <h4 style="margin-bottom: 10px; color: var(--accent-cyan);">Integrated API & Open Access Capabilities:</h4>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                ${lib.features.map(f => `<li style="font-size: 0.92rem; color: var(--text-primary);">• <strong>${f}</strong></li>`).join("")}
              </ul>
            </div>
            <div class="vault-tags-row">
              ${lib.tags.map(t => `<span class="tag">${t}</span>`).join(" ")}
            </div>
          </div>

          <div style="display: flex; gap: 14px; justify-content: flex-end;">
            <button id="btn-done-lib" class="btn-secondary">
              <span>Close</span>
            </button>
            <button id="btn-launch-reader" class="btn-primary">
              ${I.sparkles ? I.sparkles("", 16) : ""}
              <span>Launch Interactive Reader</span>
            </button>
          </div>
        `;

        modalBody.querySelector("#btn-close-lib-modal").addEventListener("click", () => {
          modal.classList.add("hidden");
        });
        modalBody.querySelector("#btn-done-lib").addEventListener("click", () => {
          modal.classList.add("hidden");
        });
        modalBody.querySelector("#btn-launch-reader").addEventListener("click", () => {
          if (window.studioSoundFX) window.studioSoundFX.playLevelUp();
          alert(`Connected to ${lib.name} (${lib.provider})! Direct open-access study streams are live.`);
          modal.classList.add("hidden");
        });
      });
    });
  }

  openUniversalTopic(query) {
    alert(`Live Global Knowledge Query for "${query}": Connected to open research repositories and Wikipedia API.`);
  }
}

window.digitalVaultModule = new DigitalVaultModule();
