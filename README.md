# Animated Data Collector & Excel Export

To jeden z moich pierwszych projektów, w którym rozwijam dobre praktyki i optymalizację kodu.

Live demo: https://strona-6.vercel.app

> Nazwa katalogu lokalnego została zmieniona z `Strona_6` na `Data-Collector-Excel-App`.

Interaktywna strona do zbierania danych użytkownika i eksportu do pliku `.xlsx`.
Projekt łączy formularz, dynamiczne opcje wyboru oraz animacje UI.

## Funkcje
- Formularz danych (`imię`, `email`, opcje dodatkowe).
- Dynamiczna edycja i rozbudowa list opcji (`choice1-3`).
- Eksport danych do Excela przez `SheetJS`.
- Intro video + animacje tła i elementów dekoracyjnych.

## Stack
- HTML5
- CSS3
- JavaScript (ES6)
- GSAP
- SheetJS (`xlsx`)

## Struktura projektu
- `index.html` - struktura strony i logika formularza (inline JS).
- `styles.css` - stylizacja i responsywność.
- `animacje.js` - animacja nagłówka oraz SVG "M".
- `mateusz_animacja.js` - starszy/archiwalny skrypt (obecnie niewykorzystywany).
- `MateuszIntro.mp4`, `moje-tlo.png`, `gwiazda.png`, `ksiezyc.png`, `logo Mateusz.png` - assety wizualne.

## Uruchomienie lokalnie
1. Otwórz `index.html` w przeglądarce.
2. (Opcjonalnie) uruchom lokalny serwer statyczny, np. `npx serve`.

## Uwagi
- Repo zawiera duże pliki multimedialne (wideo i obrazy).
- Do eksportu wymagane jest poprawne załadowanie CDN `xlsx`.
