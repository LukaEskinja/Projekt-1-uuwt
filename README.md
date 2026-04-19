# Sveti Filip i Jakov – Turistički vodič

Statički web turistički vodič za Sveti Filip i Jakov, malo dalmatinsko mjesto kraj Biograda na Moru.

## Stranice

- `index.html` – Naslovnica s hero banerom, kratkim uvodom i kartice s atrakcijama
- `mjesta.html` – Pregled atrakcija: plaže, stara jezgra, restorani
- `prakticno.html` – Praktične informacije: prijevoz, smještaj, radno vrijeme, savjeti
- `kontakt.html` – Kontakt forma s validacijom i podaci ureda

## Kako pokrenuti

Otvori `index.html` u browseru ili koristi **Live Server** u VS Code-u.

## Tehnologije

- HTML5 (semantički tagovi: `header`, `nav`, `main`, `footer`, `article`, `section`, `address`)
- CSS3 (Flexbox, Grid, CSS varijable/tokeni, `clamp()`, `min()`, media queries)
- Vanilla JS (hamburger toggle, ~20 linija)
- Netlify (deploy)

## Zahtjevi projekta – checklist

- [x] 4 stranice međusobno povezane navigacijom
- [x] Semantički HTML (`header`, `nav`, `main`, `footer`, `h1–h3`)
- [x] Globalna navigacija + označena aktivna stavka (`aria-current`)
- [x] Responsive dizajn (375px i 1024px+)
- [x] Hamburger izbornik na mobilnoj verziji
- [x] Kontakt forma s `label`, `required`, tipovi `email`/`tel`/`select`
- [x] CSS varijable (tokeni) + jasna 4-slojna struktura
- [x] Pristupačnost: skip link, vidljiv fokus, `alt` na slikama
- [x] SEO: `<title>`, `meta description`, Open Graph tagovi
- [x] `README.md`
- [ ] Netlify deploy

## Slike

Slike treba postaviti u mapu `img/` s ovim imenima:

| Datoteka           | Opis                             |
| ------------------ | -------------------------------- |
| `hero.jpg`         | Naslovni baner                   |
| `plaza.jpg`        | Plaža – kartica na naslovnici    |
| `crkva.jpg`        | Crkva – kartica na naslovnici    |
| `restoran.jpg`     | Restoran – kartica na naslovnici |
| `plaza-glavna.jpg` | Gradska plaža                    |
| `plaza-uvala.jpg`  | Uvala Soline                     |
| `ronjenje.jpg`     | Ronjenje                         |
| `crkva-big.jpg`    | Crkva (veliki format)            |
| `setnica.jpg`      | Šetnica uz more                  |
| `luka.jpg`         | Ribarska luka                    |
| `riba.jpg`         | Riba s gradela                   |
| `konoba.jpg`       | Dalmatinska konoba               |
| `kava.jpg`         | Kafić uz plažu                   |
| `ured.jpg`         | Turistički ured                  |

## Autor

Luka Eškinja, UNIZD SIT 2026.
