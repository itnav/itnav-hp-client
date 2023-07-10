/** @see https://github.com/microsoft/rushstack#readme */
require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 'latest',
    warnOnUnsupportedTypeScriptVersion: false,
  },

  plugins: [
    /** @npm https://www.npmjs.com/package/eslint-plugin-import */
    'import',

    /** @npm https://www.npmjs.com/package/eslint-plugin-sort-keys-custom-order */
    'sort-keys-custom-order',
  ],

  extends: [
    /** @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts */
    'eslint:recommended',

    /** @config https://github.com/import-js/eslint-plugin-import/blob/main/config/recommended.js */
    'plugin:import/recommended',

    /**
     * @npm https://www.npmjs.com/package/eslint-config-prettier
     * @config https://github.com/prettier/eslint-config-prettier/blob/main/index.js
     */
    'prettier',
  ],

  rules: {
    /** @docs https://eslint.org/docs/latest/rules */
    'no-console': 'off',
    'no-debugger': 'off',

    /** @docs https://github.com/import-js/eslint-plugin-import#rules */
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'internal',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '+/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'never',
      },
    ],

    /** @docs https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order#usage */
    'sort-keys-custom-order/import-object-keys': 'warn',
    'sort-keys-custom-order/export-object-keys': 'warn',
  },

  overrides: [
    {
      files: ['**/*.{cjs,cts}'],
      env: { node: true },
    },

    {
      files: ['**/*.{ts,cts,mts,astro}'],

      plugins: [
        /** @npm https://www.npmjs.com/package/@typescript-eslint/eslint-plugin */
        '@typescript-eslint',
      ],

      extends: [
        /** @config https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts */
        'plugin:@typescript-eslint/recommended',
      ],

      settings: {
        /** @docs https://github.com/import-js/eslint-import-resolver-typescript#configuration */
        'import/resolver': { typescript: {} },
      },

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: true,
          },
        ],

        /** @docs https://github.com/import-js/eslint-plugin-import#rules */
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
      },
    },

    {
      files: ['**/*.astro'],

      plugins: [
        /** @npm https://www.npmjs.com/package/eslint-plugin-astro */
        'astro',
      ],

      extends: [
        /**
         * @docs https://ota-meshi.github.io/eslint-plugin-astro
         * @config https://github.com/ota-meshi/eslint-plugin-astro/blob/main/src/configs/recommended.ts
         */
        'plugin:astro/recommended',
      ],
    },

    {
      files: ['**/scripts/**/*'],

      rules: {
        /** @docs https://eslint.org/docs/latest/rules */
        'no-var': 'off',
      },
    },

    {
      files: ['**/components/**/*.{ts,cts,mts,astro}'],

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
      },
    },

    {
      files: ['**/fragments/**/*.{ts,cts,mts,astro}'],

      rules: {
        /** @docs https://typescript-eslint.io/rules */
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      },
    },
  ],
};
