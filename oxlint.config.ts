import { defineConfig } from "oxlint";

export default defineConfig({
  env: {
    browser: true,
    node: true,
  },
  plugins: ["typescript", "vue"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/ban-types": "off",
  },
});
