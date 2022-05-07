module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  globals: {
    // 全局
    global: 'readonly',
    // web
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  plugins: ['@typescript-eslint', 'import', 'n', 'promise', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  rules: {
    // eslint
    'no-prototype-builtins': 0, // 允许使用原型方法
    'no-case-declarations': 0, // 允许 case 块中声明变量
    'no-console': 0, // 允许 log
    'no-empty-function': 0, // 允许定义空方法
    // import
    'import/named': 0,
    'import/namespace': 0,
    'import/default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
    // 有些 ts 重载
    'import/export': 0,
    'import/order': 1,
    'import/first': 2,
    'import/no-mutable-exports': 2,
    // prettier
    'prettier/prettier': 2,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    // typescript
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
  },
}
