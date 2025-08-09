export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
  ],
};
