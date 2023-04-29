import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), istanbul({
    cypress: true,
    requireEnv: false,
    forceBuildInstrument: true,
    exclude: ['node_modules', 'src/tests/*'],
  }),],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: '/src/client.entry.tsx',
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
