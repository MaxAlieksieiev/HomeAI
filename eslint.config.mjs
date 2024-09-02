import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "import/no-unresolved": 0,
      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".ts", ".tsx"],
        },
      ],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/prop-types": 0,
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "react/react-in-jsx-scope": "off",
      "react/style-prop-object": "off",
    },
  },
  {
    ignores: [
      "*.md",
      "**/*{.,-}min.js",
      "node_modules/",
      "/lib/",
      "/example/lib/",
      "/native-example/lib/",
      "/native-package/lib/",
      "/expo-package/lib/",
      "/flow-typed/",
      "/docs/",
      "/.git/",
      "package.json",
      "*.lock.yaml",
      "app.json",
      "babel.config.js",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
