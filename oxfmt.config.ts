import { defineConfig } from "oxfmt";

export default defineConfig({
  tabWidth: 2,
  useTabs: false,
  endOfLine: "lf",
  insertFinalNewline: true,
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  ignorePatterns: [
    "node_modules",
    ".agents",
    ".nuxt",
    ".output",
    ".data",
    ".nitro",
    ".cache",
    "dist",
    "pnpm-lock.yaml",
  ],
});
