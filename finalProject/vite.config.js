import { resolve } from 'path'
import { defineConfig } from 'vite'




export default defineConfig({
    build: {
      base: "/finalProject",
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'nested/delivery.html'),
        },
      },
    },
  })
