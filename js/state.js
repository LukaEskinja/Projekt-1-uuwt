const STORAGE_KEY = 'sfj_queries';

export const state = {
  queries: [],

  init() {
    this.loadFromStorage();
  },

  addQuery(query) {
    const newQuery = {
      id: Date.now(),
      ime: query.ime,
      email: query.email,
      tema: query.tema,
      poruka: query.poruka,
      newsletter: query.newsletter,
      datum: new Date().toLocaleString('hr-HR'),
    };
    this.queries.unshift(newQuery);
    this.saveToStorage();
    return newQuery;
  },

  deleteQuery(id) {
    this.queries = this.queries.filter(q => q.id !== id);
    this.saveToStorage();
  },

  saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.queries));
  },

  loadFromStorage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    this.queries = stored ? JSON.parse(stored) : [];
  },
};
