import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
        profile: "./profile/index.html",
        feed: "./feed/index.html",
      },
    },
  },
});
