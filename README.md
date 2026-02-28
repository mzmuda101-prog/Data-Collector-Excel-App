# 📊 Animated Data Collector & Excel Export

Interaktywna aplikacja webowa do zbierania danych użytkowników i eksportu do plików Excel (`.xlsx`).  
To jeden z moich pierwszych projektów, w którym rozwijam dobre praktyki, czytelność i optymalizację kodu.

## 🌍 Live Demo
🔗 https://strona-6.vercel.app

> Lokalna nazwa katalogu została zmieniona z `Strona_6` na `Data-Collector-Excel-App`.

## ✨ Funkcje
- ✅ Formularz danych (`imię`, `email`, 3 pola wyboru).
- ✅ Dynamiczna edycja opcji w `choice1`, `choice2`, `choice3`.
- ✅ Eksport danych do Excela przez `SheetJS`.
- ✅ Intro video i animowane tło (gwiazdy + księżyc).
- ✅ Przycisk cofania ostatniego wpisu i podgląd listy.

## 🧰 Stack
- HTML5
- CSS3
- JavaScript (ES6)
- GSAP
- SheetJS (`xlsx`)

## 📁 Struktura projektu
- `index.html` - struktura strony i logika formularza.
- `styles.css` - stylizacja, layout i responsywność.
- `animacje.js` - animacje nagłówka i elementów wizualnych.
- `mateusz_animacja.js` - starszy/archiwalny skrypt.
- `MateuszIntro.mp4`, `moje-tlo.png`, `gwiazda.png`, `ksiezyc.png`, `logo Mateusz.png` - assety.

## ⚙️ Uruchomienie lokalnie
1. Otwórz `index.html` w przeglądarce.
2. Opcjonalnie uruchom serwer statyczny, np. `npx serve`.

## 🗺️ Roadmap
- [ ] Refactor części JS do osobnych modułów.
- [ ] Dodanie prostych testów walidacji formularza.
- [ ] Lepsza obsługa błędów i komunikatów użytkownika.

## 👤 Autor
Mateusz Zmuda

## 📄 Licencja
MIT
