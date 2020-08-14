module.exports = {
    rules: {
        // specify the maximum cyclomatic complexity allowed in a program
        complexity: ['error', 11],

        // Enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        'default-case-last': 'error',

        // https://eslint.org/docs/rules/default-param-last
        'default-param-last': 'error',

        // Require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/rules/grouped-accessor-pairs
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'error',

        // Disallow returning value in constructor
        // https://eslint.org/docs/rules/no-constructor-return
        'no-constructor-return': 'error',

        // disallow division operators explicitly at beginning of regular expression
        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'error',

        // enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],

        // enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': ['error', {
            ArrayExpression: { multiline: true, minItems: 3 },
            ArrayPattern: { multiline: true, minItems: 5 },
        }],

        // require trailing commas in multiline object literals
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // https://eslint.org/docs/rules/function-call-argument-newline
        'function-call-argument-newline': ['error', 'consistent'],

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': ['error', 'expression'],

        // specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-double'],

        // specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': ['error', {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['error', 'starred-block'],

        // require multiline ternary
        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': ['error', 'always-multiline'],

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'error',

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'FunctionExpression',
                message: 'Use arrow functions wherever possible.',
            },
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // Disallow the use of Math.pow in favor of the ** operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 'error',

        // import sorting
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
        }],

        // Disallow duplicate conditions in if-else-if chains
        // https://eslint.org/docs/rules/no-dupe-else-if
        'no-dupe-else-if': 'error',

        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 'error',

        // Disallow Number Literals That Lose Precision
        // https://eslint.org/docs/rules/no-loss-of-precision
        'no-loss-of-precision': 'error',

        // Disallow returning values from Promise executor functions
        // https://eslint.org/docs/rules/no-promise-executor-return
        'no-promise-executor-return': 'error',

        // Disallow returning values from setters
        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 'error',

        // Disallow loops with a body that allows only one iteration
        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': 'error',

        // Disallow useless backreferences in regular expressions
        // https://eslint.org/docs/rules/no-useless-backreference
        'no-useless-backreference': 'error',

        // disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': ['error', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // https://eslint.org/docs/rules/prefer-regex-literals
        'prefer-regex-literals': 'error',
    }
};
