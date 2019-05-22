module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "prettier/flowtype"],
  plugins: ["react-hooks"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "import/no-extraneous-dependencies": 0,
    "react/prop-types": 0,
    "arrow-parens": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "no-console": ["error", { allow: ["error"] }],
    "prefer-template": "off",
    "no-plusplus": 0,
    "no-underscore-dangle": "off",
    "no-nested-ternary": "warn",
    "react/require-default-props": "off",
    "import/no-named-default": 0,
    "import/no-webpack-loader-syntax": 0,
    "import/extensions": [
      "error",
      "always",
      {
        ts: "never",
        tsx: "never",
        js: "never"
      }
    ],
    "no-param-reassign": ["error", { props: false }],
    camelcase: "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
