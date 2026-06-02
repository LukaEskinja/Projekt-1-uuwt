# Sveti Filip i Jakov – Turistički vodič

Statički web turistički vodič za Sveti Filip i Jakov, malo dalmatinsko mjesto kraj Biograda na Moru.

## Stranice

- `index.html` – Naslovnica s hero banerom, kratkim uvodom i karticama s atrakcijama
- `mjesta.html` – Pregled atrakcija: plaže, stara jezgra, restorani
- `prakticno.html` – Praktične informacije: prijevoz, smještaj, radno vrijeme, savjeti
- `kontakt.html` – Kontakt forma s validacijom, lokalnim spremanjem upita i preporukama atrakcija

## Funkcionalnosti

- Kontakt forma s klijentskom validacijom i porukama o uspjehu/grešci
- Spremanje poslanih upita u `localStorage` kako bi korisnik mogao vidjeti prethodne upite
- Mogućnost brisanja spremljenog upita iz liste
- Dinamično učitavanje preporuka atrakcija iz lokalne datoteke `data/attractions.json`
- Fetch API s `AbortController` timeoutom i korisnim prikazom grešaka
- Modularna JavaScript arhitektura preko `js/app.js`, `js/render.js`, `js/api.js` i `js/state.js`

## Kako pokrenuti

Otvori `index.html` u browseru ili koristi **Live Server** u VS Code-u.

## Tehnologije

- HTML5 (semantički tagovi: `header`, `nav`, `main`, `footer`, `article`, `section`, `address`)
- CSS3 (Flexbox, Grid, CSS varijable/tokeni, `clamp()`, `min()`, media queries)
- Vanilla JS (modularni kod s `import`/`export`)
- Fetch API i `AbortController`
- `localStorage` za trajnu pohranu korisničkih upita
- Netlify (deploy)

## Struktura koda

- `js/app.js` – inicijalizira aplikaciju, sluša slanje forme i upravlja prikazom
- `js/state.js` – model stanja aplikacije i pohrana u `localStorage`
- `js/api.js` – dohvat preporuka atrakcija iz lokalnog JSON-a
- `js/render.js` – generiranje HTML-a za upite i preporuke

## Zahtjevi projekta – checklist

- [x] 4 stranice međusobno povezane navigacijom
- [x] Semantički HTML (`header`, `nav`, `main`, `footer`, `h1–h3`)
- [x] Globalna navigacija + označena aktivna stavka (`aria-current`)
- [x] Responsive dizajn (375px i 1024px+)
- [x] Hamburger izbornik na mobilnoj verziji
- [x] Kontakt forma s `label`, `required`, tipovi `email`/`tel`/`select`
- [x] Kontakt forma s klijentskom validacijom i uspješnim porukama
- [x] `localStorage` spremanje upita i prikaz spremljenih upita
- [x] Brisanje spremljenih upita putem gumba
- [x] Dohvat lokalnih podataka iz `data/attractions.json`
- [x] Graceful error handling za dohvat podataka
- [x] CSS varijable (tokeni) + jasna 4-slojna struktura
- [x] Pristupačnost: skip link, vidljiv fokus, `alt` na slikama
- [x] SEO: `<title>`, `meta description`, Open Graph tagovi
- [x] `README.md`
- [x] Netlify deploy

## Autor

Luka Eškinja, UNIZD SIT 2026.
