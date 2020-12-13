import * as path from 'path'
import { UserConfig } from 'vite'

export default {
  alias: { '/@/': path.resolve(__dirname, './src') },
  optimizeDeps: {
    include: [
      /* apollo stuff */
    ],
  },
  rollupInputOptions: { external: ['react'] },
  proxy: {
    '/api': {
      target: 'http://localhost:5056',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      ws: false
    },
  },
} as UserConfig
