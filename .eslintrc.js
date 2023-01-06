module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
    'jest/globals': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
    'jest'
	],
	'rules': {
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
