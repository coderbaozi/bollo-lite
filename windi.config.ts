import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  extract: {
    include: ['src/**/*.{vue,html}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [formsPlugin],
})