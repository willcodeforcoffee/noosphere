module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "es5",
      },
    ],
    "react/prop-types": [
      1,
      {
        ignore: ["context", "tracking"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
