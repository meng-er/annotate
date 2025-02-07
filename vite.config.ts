import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";


import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
        api: "modern-compiler",
      },
    },
  },
  plugins: [
    vue(),

    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typed-router.d.ts",
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      dts: "src/components.d.ts",
    }),
  ],
});
