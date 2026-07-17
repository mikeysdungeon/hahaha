import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In production the site is served from https://mikeysdungeon.github.io/hahaha/,
// so every asset URL needs the repo name prefixed. If you move to a custom
// domain or rename the repo, change this (the router basename and asset()
// helper both follow automatically via import.meta.env.BASE_URL).
//
// Dev stays at "/" so the local server is plain http://localhost:5173/.
// Applying the prefix in dev too would serve the app at /hahaha/ and leave the
// bare root blank, since the router's basename would not match the URL.
const PROD_BASE = "/hahaha/";

// GitHub Pages has no server-side routing: a request for /hahaha/projects/foo
// finds no such file and falls back to 404.html. Publishing a copy of the app
// shell as 404.html therefore lets deep links and refreshes boot the SPA,
// which then renders the right route from the URL.
function spa404Fallback() {
  return {
    name: "spa-404-fallback",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      const shell = bundle["index.html"];
      if (!shell) return;
      this.emitFile({
        type: "asset",
        fileName: "404.html",
        source: shell.source,
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? PROD_BASE : "/",
  plugins: [react(), spa404Fallback()],
}));
