import path from 'path'
import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      '/src/': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
}
