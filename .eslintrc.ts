import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
// @ts-ignore
import tsParser from '@typescript-eslint/parser';
import tseslint from "@typescript-eslint/eslint-plugin";


// @ts-ignore
/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    "compilerOptions": {
      "target": "es2015",
      "module": "esnext",  // Or any other module system you're using
      // Other options
    }
  },
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable unused vars
      "no-constant-condition": ["warn", { checkLoops: false }], // Warn on constant conditions
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
      "@typescript-eslint/no-empty-interface": "off", //
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // @ts-ignore
  pluginReact.configs.flat.recommended,
];
