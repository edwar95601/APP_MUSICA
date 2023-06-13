module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,js,css,ogg,md,wav}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};