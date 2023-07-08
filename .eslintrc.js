/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    parser: '@typescript-eslint/parser',
    root: true
}
