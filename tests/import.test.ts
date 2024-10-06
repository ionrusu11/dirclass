describe('import', () => {
	test('normal imports as expected', async () => {
		const cmp = await import('../components/TestComponent.vue')
		expect(cmp).toBeDefined()
	})
})
