import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/finalProject",
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            nested: resolve(__dirname, 'nested/delivery.html'),
          },
        },
      },
});



