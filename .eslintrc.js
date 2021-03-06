module.exports = {
	'env': {
		'es6': true,
		'node': true,
		'jest': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 2018 
	},
	'rules': {
		'object-curly-spacing': ['error', 'always'],
		'object-curly-newline': ['error', {
			'ObjectExpression': {
				'minProperties': 1 
			},
			'ObjectPattern': {
				'multiline': true 
			},
			'ImportDeclaration': 'never',
			'ExportDeclaration': {
				'multiline': true, 'minProperties': 3 
			}
		}],
		'no-prototype-builtins': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};