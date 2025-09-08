import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: [],
    globals: true,
    css: false,
  },
  resolve: {
    alias: {
      '@': __dirname,
    },
  },
})


