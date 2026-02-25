// =======================================
// Poprawiona smooth animacja GSAP TYLKO dla nagłówka h1.
// --- JAK PODPIĄĆ TEN SKRYPT DO TWOJEGO index.html ---
// 1. W head lub przed </body> WSTAW NAJPIERW GSAP, potem animacje.js, np.:
//    <script src="https://unpkg.com/gsap@3.12.5/dist/gsap.min.js"></script>
//    <script src="animacje.js"></script>
// 2. NIE używaj atrybutu integrity!
// 3. Upewnij się, że style.css nie ustawia opacity:0 lub transform na h1!
// 4. Jeśli efektu nie widać: wyczyść cache przeglądarki i sprawdź konsolę.
//
// =======================================

// Funkcja: animacja nagłówka h1 (jak wcześniej)
function coolHeaderAnimation() {
  const h1 = document.querySelector('h1');
  if (!h1 || typeof gsap === 'undefined') return;

  // Reset początkowy stanu nagłówka
  gsap.set(h1, { y: -80, opacity: 0, rotate: -7 });

  gsap.to(h1, {
    y: 0,
    opacity: 1,
    rotate: 0,
    duration: 1.2,
    ease: "bounce.out"
  });
}

// Funkcja: wstaw SVG z literą "M" i animuj jej "rysowanie"
function createAndAnimateM() {
  if (typeof gsap === 'undefined') return;

  // Tworzenie kontenera na SVG, pozycjonowanie po prawej stronie jako fixed
  let mContainer = document.createElement('div');
  mContainer.id = 'm-svg-anim-container';
  Object.assign(mContainer.style, {
    position: 'fixed',
    top: '44px',
    right: '2.3vw',
    zIndex: 100,
    pointerEvents: 'none',
    width: '66px',       // Lecko zmniejszone  
    height: '74px',      // Lecko zmniejszone  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.97'
  });

  // Prosty SVG litery "M" (jako path)
  // Path - pojedyncza kreska "M" w stylu odręcznym/czcionkowym
  let svgNS = "http://www.w3.org/2000/svg";
  let svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "60");     // zmniejszony
  svg.setAttribute("height", "70");    // zmniejszony
  svg.setAttribute("viewBox", "0 0 80 90");
  svg.setAttribute("style", "display:block;");
  // Path: prosta litera M - od dołu lewej, szczyt, dół, szczyt, dół prawej
  let path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", "M10 80 L20 20 L40 60 L60 20 L70 80");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#E94560");
  path.setAttribute("stroke-width", "12"); // pogrubienie!
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("id", "path-m-anim");

  svg.appendChild(path);
  mContainer.appendChild(svg);

  // Dodanie do body jeśli jeszcze nie istnieje
  if (!document.getElementById('m-svg-anim-container')) {
    document.body.appendChild(mContainer);
  }

  // Ustawienie path do animacji "drawSVG": początek (niewidoczny)
  const pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  // Animacja "rysowania" M za pomocą GSAP
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: "power2.inOut",
    delay: 0.45 // Później niż h1
  });

  // (opcjonalnie fade-in całego SVG)
  gsap.fromTo(mContainer, { autoAlpha: 0 }, {
    autoAlpha: 0.97,
    duration: 1.0,
    ease: "power1.inOut"
  });

  // Magnetyczny efekt dla litery "M" (podobny do logo)
  setupMagneticEffect(mContainer, {
    activationRadius: 150,
    maxOffset: 26,
    strengthFactor: 0.24,
    enableClickRepel: true,
    repelStrength: 52
  });
}

// Reuzywalny efekt "magnesu" dla dowolnego elementu
function setupMagneticEffect(element, config = {}) {
  if (!element || !window.matchMedia("(pointer: fine)").matches) return;

  const activationRadius = config.activationRadius ?? 140;
  const maxOffset = config.maxOffset ?? 24;
  const strengthFactor = config.strengthFactor ?? 0.22;
  const enableClickRepel = config.enableClickRepel ?? false;
  const repelStrength = config.repelStrength ?? 40;

  let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
  let animating = false;

  function animateMagnet() {
    currentX += (targetX - currentX) * 0.22;
    currentY += (targetY - currentY) * 0.22;
    element.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

    if (Math.abs(targetX - currentX) > 0.08 || Math.abs(targetY - currentY) > 0.08) {
      requestAnimationFrame(animateMagnet);
    } else {
      currentX = targetX; currentY = targetY;
      element.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      animating = false;
    }
  }

  function moveToTarget() {
    if (!animating) { animating = true; requestAnimationFrame(animateMagnet); }
  }

  function resetMagnet() {
    targetX = 0; targetY = 0;
    moveToTarget();
  }

  document.addEventListener("mousemove", e => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance <= activationRadius) {
      const strength = (activationRadius - distance) / activationRadius;
      targetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX * strengthFactor * strength));
      targetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY * strengthFactor * strength));
    } else {
      targetX = 0; targetY = 0;
    }
    moveToTarget();
  });

  // Krótki "odskok" elementu od kursora po kliknięciu blisko elementu
  if (enableClickRepel) {
    document.addEventListener("pointerdown", e => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Reakcja tylko na kliknięcie w pobliżu elementu
      if (distance <= activationRadius) {
        const normX = distance ? deltaX / distance : 0;
        const normY = distance ? deltaY / distance : 0;
        // Odepchnięcie w stronę przeciwną do kliknięcia
        targetX = Math.max(-maxOffset, Math.min(maxOffset, -normX * repelStrength));
        targetY = Math.max(-maxOffset, Math.min(maxOffset, -normY * repelStrength));
        moveToTarget();
      }
    });
  }

  window.addEventListener("blur", resetMagnet);
}

window.addEventListener("DOMContentLoaded", () => {
  coolHeaderAnimation();
  createAndAnimateM();
});

// =======================================
