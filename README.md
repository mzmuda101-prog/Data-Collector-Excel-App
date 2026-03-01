# 📊 Data Collector & Excel Export - Portfolio Showcase

Interaktywna strona demonstracyjna (project-first), która łączy animowany interfejs z praktycznym workflow: zbieranie danych + eksport do pliku Excel (`.xlsx`).  
Interactive project-first demo website combining animated UI with practical workflow: data collection + Excel export (`.xlsx`).

To jeden z projektów mojego portfolio na GitHubie, pokazujący frontend, UX i pracę z danymi po stronie klienta.  
One of my GitHub portfolio projects, showcasing frontend, UX, and client-side data handling.

## 🌍 Live Demo
🔗 https://strona-6.vercel.app

> Lokalna nazwa katalogu została zmieniona z `Strona_6` na `Data-Collector-Excel-App`. / Local folder name was changed from `Strona_6` to `Data-Collector-Excel-App`.

## ✨ Najważniejsze funkcje
- ✅ Formularz danych (`imię`, `email`, 3 pola wyboru). / Data form (`name`, `email`, 3 choice fields).
- ✅ Dynamiczna edycja opcji bez przeładowania strony. / Dynamic option editing without page reload.
- ✅ Eksport danych do Excela przez SheetJS (`xlsx`). / Excel export powered by SheetJS (`xlsx`).
- ✅ Intro video + animowane tło (gwiazdy, księżyc, parallax). / Intro video + animated background (stars, moon, parallax).
- ✅ `horizontal-flow` reveal przy scrollu. / `horizontal-flow` reveal on scroll.
- ✅ Cofanie ostatniego wpisu + podgląd listy. / Undo last entry + list preview.
- ✅ Responsywność + fallbacki (`prefers-reduced-motion`, bez `IntersectionObserver`). / Responsive + fallbacks (`prefers-reduced-motion`, no `IntersectionObserver`).
- ✅ Układ `portfolio-showcase` (hero, highlights, stack, live demo, project notes). / `portfolio-showcase` layout (hero, highlights, stack, live demo, project notes).

## 🧰 Stack
- HTML5
- CSS3
- JavaScript (ES6)
- GSAP
- SheetJS (`xlsx`)

## 📁 Struktura projektu
- `index.html` - layout strony, sekcje showcase, logika formularza i eksportu, scroll/reveal. / Page layout, showcase sections, form/export logic, scroll/reveal.
- `styles.css` - design system, layout, responsywność, animacje i komponenty UI. / Design system, layout, responsiveness, animations and UI components.
- `animacje.js` - animacje nagłówka i elementów wizualnych. / Header and visual animations.
- `mateusz_animacja.js` - starszy/archiwalny skrypt. / Legacy/archived script.
- `MateuszIntro.mp4`, `moje-tlo.png`, `gwiazda.png`, `ksiezyc.png`, `logo Mateusz przezroczyste.png` - assety. / Assets.

## 🆕 Recent Improvements
- Portfolio direction:
  - przebudowa layoutu na **project-first showcase** zamiast klasycznego „about me”. / Rebuilt layout into **project-first showcase** instead of classic “about me”.
- Logo / navbar:
  - większe logo, lepsze wyrównanie pionowe. / Larger logo, improved vertical alignment.
  - pełna transparentność PNG w UI. / Full PNG transparency preserved in UI.
  - dopracowany hover z kontrolowanym odsuwaniem tytułu. / Refined hover with controlled title spacing.
- Performance & code quality:
  - batching scroll/resize przez `requestAnimationFrame`. / Scroll/resize batching via `requestAnimationFrame`.
  - cache kluczowych elementów DOM. / Cached key DOM elements.
  - delegacja eventów w panelach edycji opcji. / Event delegation in options edit panels.
  - render list i selectów przez `DocumentFragment`. / List/select rendering via `DocumentFragment`.
- Motion polish:
  - subtelnie zróżnicowany ruch sekcji (`data-flow-factor`) bez efektu „nierównego” layoutu. / Subtly varied section movement (`data-flow-factor`) without uneven layout feel.

## 🔧 Placeholdery do podmiany
W `index.html` podmień: / In `index.html`, replace:
- link do repo (`Zobacz repo`) / repo link (`Zobacz repo`)
- adres e-mail (`mailto:`) / email address (`mailto:`)

## ⚙️ Uruchomienie lokalnie
1. Otwórz `index.html` w przeglądarce. / Open `index.html` in your browser.
2. Opcjonalnie uruchom serwer statyczny, np. `npx serve`. / Optionally run a static server, e.g. `npx serve`.

## 🗺️ Roadmap
- [ ] Rozdzielenie JS na moduły (`UI`, `form`, `export`, `effects`).
- [ ] Lżejsza warstwa testów manualnych / checklista regresji.
- [ ] Dalszy polish mikrointerakcji i dostępności.

## 👤 Autor
Mateusz Zmuda / Author

## 📄 Licencja
MIT / License
