export function renderQueries(queries, onDeleteCallback) {
  const container = document.getElementById('queries-container');

  if (!container) return;

  if (queries.length === 0) {
    container.innerHTML = `
      <p style="color: var(--color-muted); text-align: center; padding: 2rem;">
        Nema spremljenih upita. Pošaljite novi upit gornjom formom.
      </p>
    `;
    return;
  }

  container.innerHTML = `
    <h3 id="queries-heading" style="margin-bottom: 1rem;">Vaši spremljeni upiti (${queries.length})</h3>
    <div class="queries-list">
      ${queries.map(query => `
        <article class="query-card" style="border: 1px solid var(--color-border); border-radius: var(--radius); padding: 1.25rem; margin-bottom: 1rem; background: var(--color-sand);">
          <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
            <div style="flex: 1;">
              <p style="margin: 0 0 0.5rem 0;"><strong>${escapeHtml(query.ime)}</strong></p>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--color-muted);">
                📧 ${escapeHtml(query.email)}
              </p>
              <p style="margin: 0 0 0.75rem 0; font-size: 0.85rem; color: var(--color-muted);">
                ${query.datum}
              </p>
              <p style="margin: 0 0 0.5rem 0;"><strong>Tema:</strong> ${escapeHtml(query.tema)}</p>
              <p style="margin: 0; word-break: break-word; white-space: pre-wrap;">${escapeHtml(query.poruka)}</p>
              ${query.newsletter ? '<p style="margin-top: 0.5rem; font-size: 0.85rem;">✓ Prijavljen na newsletter</p>' : ''}
            </div>
            <button
              type="button"
              class="btn-delete"
              data-id="${query.id}"
              style="background: var(--color-accent); color: white; border: none; padding: 0.5rem 1rem; border-radius: var(--radius); cursor: pointer; white-space: nowrap; flex-shrink: 0;"
            >
              Obriši
            </button>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      onDeleteCallback(id);
    });
  });
}

export function renderRecommendations(recommendations) {
  const container = document.getElementById('recommendations-container');
  if (!container) return;

  if (!recommendations) {
    container.innerHTML = `
      <p style="color: var(--color-muted); text-align: center; padding: 2rem;">
        📍 Učitavanje atrakcija...
      </p>
    `;
    return;
  }

  if (recommendations.error) {
    container.innerHTML = `
      <div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: var(--radius); padding: 1.5rem; color: #721c24;">
        <p><strong>⚠️ Greška pri učitavanju</strong></p>
        <p>${escapeHtml(recommendations.error)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      ${recommendations.map(rec => `
        <article style="background: var(--color-sand); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 1.5rem; animation: slideIn 0.3s ease;">
          <p style="font-size: 2.5rem; margin: 0 0 0.75rem 0;">${rec.icon}</p>
          <h3 style="margin: 0 0 0.75rem 0; color: var(--color-sea); font-size: 1.1rem;">${escapeHtml(rec.title)}</h3>
          <p style="margin: 0; font-size: 0.95rem; color: var(--color-muted); line-height: 1.6;">
            ${escapeHtml(rec.description)}
          </p>
        </article>
      `).join('')}
    </div>
  `;
}

export function showMessage(message, isSuccess = true) {
  const messageEl = document.getElementById('form-message');
  if (!messageEl) return;

  messageEl.textContent = message;
  messageEl.style.padding = '1rem';
  messageEl.style.borderRadius = 'var(--radius)';
  messageEl.style.marginTop = '1rem';
  messageEl.style.backgroundColor = isSuccess ? '#d4edda' : '#f8d7da';
  messageEl.style.color = isSuccess ? '#155724' : '#721c24';
  messageEl.style.border = `1px solid ${isSuccess ? '#c3e6cb' : '#f5c6cb'}`;

  setTimeout(() => {
    messageEl.textContent = '';
    messageEl.style.backgroundColor = 'transparent';
  }, 3000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
