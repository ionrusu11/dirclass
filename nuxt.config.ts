// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	tailwindcss: {
		cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
	},
	devServer: {
		port: 3005,
		host: '0.0.0.0',
	},
	runtimeConfig: {
		public: {
			port: 3005,
			host: '0.0.0.0',
		},
	},
})
