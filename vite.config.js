import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// CHANGE this to your repo name:
const repoName = "JessicaWebsite";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});