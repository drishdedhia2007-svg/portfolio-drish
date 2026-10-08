"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const themeEvent = "drish-portfolio-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  return () => window.removeEventListener(themeEvent, callback);
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("drish-portfolio-theme", next); } catch { /* Storage may be unavailable. */ }
      window.dispatchEvent(new Event(themeEvent));
    };

    const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (motionAllowed && "startViewTransition" in document) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}><span className="theme-toggle-symbol" aria-hidden="true">{theme === "dark" ? "☼" : "◑"}</span><span>{theme === "dark" ? "Light" : "Dark"}</span></button>;
}
