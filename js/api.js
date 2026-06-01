const API_URL = '/data/attractions.json';
const REQUEST_TIMEOUT = 5000;

export async function fetchRecommendations() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    const response = await fetch(API_URL, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Greška pri učitavanju: ${response.status}`);
    }

    const data = await response.json();
    return data.slice(0, 4);
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Zahtjev je istekao. Molim pokušajte ponovno.');
    }
    throw new Error('Nisu mogli biti učitani podaci. Molim pokušajte ponovno naknadno.');
  }
}
