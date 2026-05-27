// Cursor-following contextual hints, ported from the portfolio project.

window.MateuszCursorHint = (() => {
  function createCursorHintController({ cursorHint, prefersReducedMotion = false, getFallbackHint = () => "" }) {
    let cursorHintX = -999;
    let cursorHintY = -999;
    let cursorHintTargetX = -999;
    let cursorHintTargetY = -999;
    let cursorHintFrame = null;

    function isDisabled() {
      return !cursorHint
        || prefersReducedMotion
        || window.matchMedia("(pointer: coarse)").matches;
    }

    function getCurrentLang() {
      return (document.documentElement.lang || "pl").toLowerCase().startsWith("en") ? "en" : "pl";
    }

    function getHintText(el) {
      const lang = getCurrentLang();
      const langKey = lang === "en" ? "hintEn" : "hintPl";
      return el.dataset[langKey]
        || el.dataset.hint
        || getFallbackHint()
        || "";
    }

    function moveCursorHint(x, y) {
      if (!cursorHint) return;
      const style = getComputedStyle(cursorHint);
      const parsedOffsetX = parseInt(style.getPropertyValue("--hint-offset-x"), 10);
      const parsedOffsetY = parseInt(style.getPropertyValue("--hint-offset-y"), 10);
      const offsetX = Number.isNaN(parsedOffsetX) ? 22 : parsedOffsetX;
      const offsetY = Number.isNaN(parsedOffsetY) ? 18 : parsedOffsetY;

      cursorHintTargetX = x + offsetX;
      cursorHintTargetY = y - offsetY;
      if (cursorHintFrame !== null) return;

      const animateHint = () => {
        cursorHintX += (cursorHintTargetX - cursorHintX) * 0.24;
        cursorHintY += (cursorHintTargetY - cursorHintY) * 0.24;

        if (Math.abs(cursorHintTargetX - cursorHintX) < 0.2) cursorHintX = cursorHintTargetX;
        if (Math.abs(cursorHintTargetY - cursorHintY) < 0.2) cursorHintY = cursorHintTargetY;

        cursorHint.style.transform = `translate3d(${cursorHintX}px, ${cursorHintY}px, 0)`;

        if (cursorHintX !== cursorHintTargetX || cursorHintY !== cursorHintTargetY) {
          cursorHintFrame = window.requestAnimationFrame(animateHint);
        } else {
          cursorHintFrame = null;
        }
      };

      cursorHintFrame = window.requestAnimationFrame(animateHint);
    }

    function setHintText(hintContent) {
      const span = cursorHint && cursorHint.querySelector("span");
      if (!span) return;

      span.textContent = "";
      String(hintContent).split("/|").forEach((line, index) => {
        if (index > 0) span.appendChild(document.createElement("br"));
        span.appendChild(document.createTextNode(line.trim()));
      });
    }

    function setupCursorHint(elements, clickCallback = null) {
      elements.forEach((el) => {
        if (!el || el.dataset.cursorHintBound === "1") return;
        el.dataset.cursorHintBound = "1";

        el.addEventListener("pointerenter", (event) => {
          event.stopPropagation();
          if (isDisabled()) return;

          setHintText(getHintText(el));
          cursorHint.className = `cursor-hint is-visible ${el.dataset.hintClass || ""}`.trim();
          cursorHint.style.transformOrigin = "left bottom";
          moveCursorHint(event.clientX, event.clientY);
        });

        el.addEventListener("pointermove", (event) => {
          event.stopPropagation();
          if (isDisabled()) return;
          moveCursorHint(event.clientX, event.clientY);
        });

        el.addEventListener("pointerleave", () => {
          if (!cursorHint) return;
          cursorHint.classList.remove("is-visible");
          cursorHintTargetX = -999;
          cursorHintTargetY = -999;
          moveCursorHint(-999, -999);
        });

        if (clickCallback) {
          el.addEventListener("click", () => clickCallback(el));
        }
      });
    }

    return { setupCursorHint };
  }

  function initCursorHints({
    selector = "[data-hint], [data-hint-pl], [data-hint-en]",
    fallbackHint = "",
  } = {}) {
    const cursorHint = document.getElementById("cursorHint") || document.getElementById("cursor-hint");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controller = createCursorHintController({
      cursorHint,
      prefersReducedMotion,
      getFallbackHint: () => fallbackHint,
    });
    const bindTargets = () => controller.setupCursorHint(document.querySelectorAll(selector));
    bindTargets();
    if ("MutationObserver" in window) {
      const observer = new MutationObserver(bindTargets);
      observer.observe(document.body, { childList: true, subtree: true });
    }
    return controller;
  }

  return { createCursorHintController, initCursorHints };
})();
