// FILE: vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      autoImportComponentCase: "combined",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias para la carpeta `src`
      "@components": path.resolve(__dirname, "src/components"), // Alias para `src/components`
      "@store": path.resolve(__dirname, "src/store"), // Alias para `src/store`
      "@views": path.resolve(__dirname, "src/views"), // Alias para `src/store`
    },
  },
});
