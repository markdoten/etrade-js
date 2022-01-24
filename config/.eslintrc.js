var OFF = 0;
var WARN = 1;
var ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "jsdoc",
    'sort-imports-es6-autofix',
    'unused-imports'
  ],
  rules: {
    // Default supported rules
    'arrow-body-style': ERROR,
    'arrow-parens': ERROR,
    'eol-last': ERROR,
    indent: [ERROR, 2, {
      SwitchCase: 1
    }],
    'lines-between-class-members': [ERROR, 'always', {exceptAfterSingleLine: true}],
    'max-len': [ERROR, 120],
    'multiline-ternary': [ERROR, 'always-multiline'],
    'no-constant-condition': ERROR,
    'no-else-return': ERROR,
    'no-multiple-empty-lines': [ERROR, {max: 1, maxBOF: 0, maxEOF: 1}],
    'no-nested-ternary': ERROR,
    'no-param-reassign': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-useless-escape': ERROR,
    'object-curly-spacing': ERROR,
    'operator-linebreak': [ERROR, "after"],
    'padded-blocks': [ERROR, 'never'],
    'prefer-arrow-callback': ERROR,
    'prefer-const': ERROR,
    'prefer-destructuring': ERROR,
    'prefer-object-spread': ERROR,
    'require-jsdoc': [WARN, {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true
      }
    }],
    semi: ERROR,
    'sort-keys': [ERROR, 'asc', {caseSensitive: false, natural: true}],

    // [PLUGIN] TypeScript rules
    '@typescript-eslint/consistent-type-imports': ERROR,
    '@typescript-eslint/explicit-function-return-type': ERROR,
    '@typescript-eslint/naming-convention': [ERROR, {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {regex: '^I[A-Z]', match: true}
    }, {
      selector: 'typeAlias',
      format: ['PascalCase'],
      custom: {regex: '^T[A-Z]', match: true}
    }],
    '@typescript-eslint/prefer-for-of': ERROR,

    // [PLUGIN] jsdoc rules
    'jsdoc/check-access': ERROR,
    'jsdoc/check-alignment': ERROR,
    'jsdoc/check-examples': ERROR,
    'jsdoc/check-indentation': [ERROR, {excludeTags: ['param', 'returns']}],
    'jsdoc/check-line-alignment': ERROR,
    'jsdoc/check-param-names': ERROR,
    'jsdoc/check-property-names': ERROR,
    'jsdoc/check-syntax': ERROR,
    'jsdoc/check-tag-names': ERROR,
    'jsdoc/check-types': ERROR,
    'jsdoc/check-values': ERROR,
    'jsdoc/empty-tags': ERROR,
    'jsdoc/implements-on-classes': ERROR,
    'jsdoc/match-description': ERROR,
    'jsdoc/multiline-blocks': ERROR,
    'jsdoc/no-bad-blocks': ERROR,
    'jsdoc/no-defaults': ERROR,
    'jsdoc/no-multi-asterisks': ERROR,
    'jsdoc/no-undefined-types': ERROR,
    'jsdoc/require-asterisk-prefix': ERROR,
    'jsdoc/require-description': ERROR,
    'jsdoc/require-description-complete-sentence': ERROR,
    'jsdoc/require-file-overview': ERROR,
    'jsdoc/require-hyphen-before-param-description': ERROR,
    'jsdoc/require-jsdoc': ERROR,
    'jsdoc/require-param': ERROR,
    'jsdoc/require-param-description': ERROR,
    'jsdoc/require-param-name': ERROR,
    'jsdoc/require-property': ERROR,
    'jsdoc/require-property-description': ERROR,
    'jsdoc/require-property-name': ERROR,
    'jsdoc/require-property-type': ERROR,
    'jsdoc/require-returns': ERROR,
    'jsdoc/require-returns-check': ERROR,
    'jsdoc/require-returns-description': ERROR,
    'jsdoc/require-returns-type': ERROR,
    'jsdoc/require-throws': ERROR,
    'jsdoc/require-yields': ERROR,
    'jsdoc/require-yields-check': ERROR,
    'jsdoc/tag-lines': ERROR,
    'jsdoc/valid-types': ERROR,

    // [PLUGIN] Sort import rules
    'sort-imports-es6-autofix/sort-imports-es6': [ERROR, {ignoreCase: true}],

    // [PLUGIN] Unused import rules
    'unused-imports/no-unused-imports': ERROR
  }
}
