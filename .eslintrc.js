module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier',
        'react'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
    ],
    rules: {
        "prettier/prettier": "error"
    },
    settings: {
        "react": {
            "version": "detect"
        }
    }
};