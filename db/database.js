/**
 * stud.io Core IndexedDB Wrapper (Offline Persistent Storage)
 */
class StudioDB {
  constructor() {
    this.dbName = "stud_io_db";
    this.version = 1;
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        
        if (!db.objectStoreNames.contains("user_profile")) {
          db.createObjectStore("user_profile", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("syllabi")) {
          db.createObjectStore("syllabi", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("neuro_profile")) {
          db.createObjectStore("neuro_profile", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("student_notes")) {
          db.createObjectStore("student_notes", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("leitner_cards")) {
          db.createObjectStore("leitner_cards", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("exam_results")) {
          db.createObjectStore("exam_results", { keyPath: "id" });
        }
      };

      request.onsuccess = (e) => {
        this.db = e.target.result;
        console.log("💾 stud.io IndexedDB initialized successfully!");
        resolve(this.db);
      };

      request.onerror = (e) => {
        console.error("IndexedDB initialization error:", e);
        reject(e);
      };
    });
  }

  async saveItem(storeName, item) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      const req = store.put(item);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }

  async getItem(storeName, key) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }

  async getAllItems(storeName) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = (e) => reject(e);
    });
  }
}

window.studioDB = new StudioDB();
