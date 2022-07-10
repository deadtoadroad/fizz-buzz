module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  overrides: [
    {
      files: ["**/*.spec.js"],
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
  ],
};
