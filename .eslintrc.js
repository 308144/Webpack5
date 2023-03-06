module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true //.eslintec.js文件也有红色报错，报错是 'module' is not defined.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime' //看App.tsx页面会发现jsx部分有红色报红，提示 'React' must be in scope when using JSX
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off' //看到main.tsx文件带有警告颜色，看警告提示是Forbidden non-null assertion。
  },
  //除此之外再解决一个问题就是eslint报的警告React version not specified in eslint-plugin-react settings,需要告诉eslint使用的react版本，在 .eslintrc.js和rules平级添加settings配置，让eslint自己检测react版本,对应issuse
  settings: {
    react: {
      version: 'detect'
    }
  }
}
