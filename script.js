"use strict";

(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const preference = window.matchMedia("(prefers-color-scheme: light)");
  let chosenTheme = null;

  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") chosenTheme = savedTheme;
  } catch {
    // Storage restrictions do not prevent switching the visible theme.
  }

  function applyTheme() {
    const theme = chosenTheme || (preference.matches ? "light" : "dark");
    root.dataset.theme = theme;
    if (!toggle) return;
    const nextLabel = theme === "dark" ? "라이트 모드" : "다크 모드";
    toggle.textContent = nextLabel;
    toggle.setAttribute("aria-label", `${nextLabel}로 전환`);
  }

  applyTheme();
  if (!toggle) return;
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    chosenTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme();
    try {
      window.localStorage.setItem("portfolio-theme", chosenTheme);
    } catch {
      // The current page retains the choice even if persistence is unavailable.
    }
  });
  preference.addEventListener("change", () => {
    if (!chosenTheme) applyTheme();
  });
})();
