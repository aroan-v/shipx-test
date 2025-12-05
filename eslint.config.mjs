import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  // 1. Load Next.js defaults
  ...nextVitals,

  // 2. Define your Rules Override (Must be its own object in the main array)
  {
    rules: {
      'react/prop-types': 'off',
    },
  },

  // 3. Define Ignores (Must contain only strings)
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
