// @ts-check
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default tsEslint.config(
  {
    // Configurações globais
    languageOptions: {
      globals: {
        node: true,
        es2022: true,
      },
    },
    ignores: ['**/node_modules/', '**/dist/', '**/.git/', '**/coverage/'],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    // Configurações específicas do projeto
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
    },
  },
);
