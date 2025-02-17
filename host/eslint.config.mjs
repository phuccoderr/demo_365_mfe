import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: ["dist", ".eslintrc.config.mjs"] },
  {
    rules: {
      "react/prop-types": 0,
      "no-underscore-dangle": 0,
      camelcase: "off",
      "no-new": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      indent: ["error", 2],
      "@typescript-eslint/no-explicit-any": "off",
      "eslint-comments/disable-enable-pair": "off",
      "eslint-comments/no-unlimited-disable": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "prefer-const": "off",
    },
  },
];
