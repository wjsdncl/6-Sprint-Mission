module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
};
