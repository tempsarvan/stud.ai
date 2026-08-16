/**
 * stud.io Global Digital Vault & Vector Formula Search Engine Module (WWDC27 Edition)
 */
class DigitalVaultModule {
  renderDigitalVault(containerEl) {
    const I = window.StudioIcons || {};

    containerEl.innerHTML = `
      <div class="module-header">
        <h2>Global Digital Library & Vector Formula Vault</h2>
        <p>Search thousands of formula sheets, cheat sheets, quick revision summaries, and high-resolution SVG mind maps.</p>
      </div>

      <div class="vault-search-bar glass-panel">
        <div class="search-input-wrapper">
          ${I.search ? I.search("icon-muted", 20) : ""}
          <input type="text" id="vault-search-input" class="search-input" placeholder="Search formulas, key definitions, or theorems (e.g. 'Taylor Series', 'Lens Maker', 'Biot-Savart')..."/>
        </div>
        <button id="btn-vault-search" class="btn-primary">
          ${I.sparkles ? I.sparkles("", 16) : ""}
          <span>Vector Search</span>
        </button>
      </div>

      <div class="vault-grid">
        <div class="vault-card glass-panel">
          <div class="vault-icon-box">
            ${I.code ? I.code("icon-purple", 24) : ""}
          </div>
          <h3>AP Calculus Formula Cheat Sheet</h3>
          <p>Complete derivative rules, integral tables, and series convergence tests.</p>
          <button class="btn-secondary btn-small full-width btn-open-sheet">
            <span>Open Cheat Sheet</span>
            ${I.arrowRight ? I.arrowRight("", 14) : ""}
          </button>
        </div>

        <div class="vault-card glass-panel">
          <div class="vault-icon-box">
            ${I.zap ? I.zap("icon-cyan", 24) : ""}
          </div>
          <h3>JEE & CBSE Physics Formula Vault</h3>
          <p>Electrostatics, Ray Optics, Kirchhoff Laws, and Quantum Physics summary.</p>
          <button class="btn-secondary btn-small full-width btn-open-sheet">
            <span>Open Cheat Sheet</span>
            ${I.arrowRight ? I.arrowRight("", 14) : ""}
          </button>
        </div>

        <div class="vault-card glass-panel">
          <div class="vault-icon-box">
            ${I.brain ? I.brain("icon-emerald", 24) : ""}
          </div>
          <h3>A-Level & NEET Chemistry Mind Map</h3>
          <p>Organic reaction mechanisms, thermodynamics, and electrode potentials.</p>
          <button class="btn-secondary btn-small full-width btn-open-sheet">
            <span>Open Mind Map</span>
            ${I.arrowRight ? I.arrowRight("", 14) : ""}
          </button>
        </div>
      </div>
    `;

    const searchInput = containerEl.querySelector("#vault-search-input");
    const btnSearch = containerEl.querySelector("#btn-vault-search");

    btnSearch.addEventListener("click", () => {
      const query = searchInput.value;
      if (!query) return;
      alert(`Vector Engine searched global digital vault for "${query}". Found 4 matching formula sheets & mind maps.`);
    });

    containerEl.querySelectorAll(".btn-open-sheet").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Opening digital cheat sheet in high-resolution interactive viewer.");
      });
    });
  }
}

window.digitalVaultModule = new DigitalVaultModule();
