import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		Vue(),
		AutoImport({
			imports: ['vue'],
		}),
	],
	test: {
		globals: true,
		environment: 'happy-dom',
	},
})
