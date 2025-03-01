const nx = require('@nx/eslint-plugin');
const sheriff = require('@softarc/eslint-plugin-sheriff');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  sheriff.configs.all,
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: ['type:api', 'type:feature', 'type:ui', 'type:domain-logic', 'type:util'],
            },
            {
              sourceTag: 'type:api',
              onlyDependOnLibsWithTags: ['type:ui', 'type:domain-logic', 'type:util'],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: ['type:ui', 'type:domain-logic', 'type:util'],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:domain-logic', 'type:util'],
            },
            {
              sourceTag: 'type:domain-logic',
              onlyDependOnLibsWithTags: ['type:util'],
            },
            {
              sourceTag: 'domain:shared',
              onlyDependOnLibsWithTags: ['domain:shared'],
            },
            {
              sourceTag: 'ui:angular',
              onlyDependOnLibsWithTags: ['ui:angular'],
            },
            {
              sourceTag: 'ui:fundamentals',
              onlyDependOnLibsWithTags: ['ui:fundamentals'],
            },
            {
              sourceTag: 'ui:nord',
              onlyDependOnLibsWithTags: ['ui:nord'],
            },
            {
              sourceTag: 'ui:paper-design',
              onlyDependOnLibsWithTags: ['ui:paper-design'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    // Override or add rules here
    rules: {},
  },
];
