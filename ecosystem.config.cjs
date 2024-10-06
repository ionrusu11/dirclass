module.exports = {
	apps: [
		{
			name: 'dirclass',
			port: '3005',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
		},
	],
}
