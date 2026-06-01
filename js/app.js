import { state } from './state.js';
import { renderQueries, showMessage, renderRecommendations } from './render.js';
import { fetchRecommendations } from './api.js';

function init() {
  state.init();
  setupFormHandler();
  render();
  loadRecommendations();
}

async function loadRecommendations() {
  if (!document.getElementById('recommendations-container')) return;

  try {
    const recommendations = await fetchRecommendations();
    renderRecommendations(recommendations);
  } catch (error) {
    renderRecommendations({ error: error.message });
  }
}

function setupFormHandler() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      showMessage('Molim popunite sva obavezna polja ispravno.', false);
      return;
    }

    const formData = new FormData(form);
    const query = {
      ime: formData.get('ime').trim(),
      email: formData.get('email').trim(),
      tema: formData.get('tema'),
      poruka: formData.get('poruka').trim(),
      newsletter: formData.get('newsletter') === 'on',
    };

    if (!query.ime || !query.email || !query.tema || !query.poruka) {
      showMessage('Molim popunite sva obavezna polja.', false);
      return;
    }

    state.addQuery(query);
    showMessage('✓ Vaš upit je spremljen. Odgovorit ćemo vam brže što se može!', true);
    form.reset();
    render();
  });
}

function handleDeleteQuery(id) {
  if (confirm('Želite li obrisati ovaj upit?')) {
    state.deleteQuery(id);
    render();
  }
}

function render() {
  if (document.getElementById('queries-container')) {
    renderQueries(state.queries, handleDeleteQuery);
  }
}

document.addEventListener('DOMContentLoaded', init);
