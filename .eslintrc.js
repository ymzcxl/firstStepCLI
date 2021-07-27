module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base"
    // "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint", "import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "/"
      }
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "no-console": "off",
    "comma-dangle": [2, "never"],
    quotes: [2, "double"] // 2 违反错误报错并阻止进程
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     mjs: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never'
    //   }
    // ],
    // "quotes": [1, "double"],
    // 'import/extensions': 'off',
    // 'import/no-absolute-path': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 'no-param-reassign': [
    //   'error',
    //   {
    //     props: true,
    //     ignorePropertyModificationsFor: [
    //       'state', // for vuex state
    //       'acc', // for reduce accumulators
    //       'e' // for e.returnvalue
    //     ]
    //   }
    // ]
  }
};
