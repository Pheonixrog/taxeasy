import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get current file and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize compat for ESLint config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Disable all ESLint rules
const eslintConfig = {
  extends: [],
  rules: {},
};

export default eslintConfig;
