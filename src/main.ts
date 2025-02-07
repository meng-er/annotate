import { createRouter, createWebHistory } from "vue-router";

// import "@/styles/element/index.scss";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

import { routes } from "vue-router/auto-routes";

import App from "./App.vue";
import "@/styles/index.scss";


import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/message-box.scss";

// createApp(App).mount('#app')

import { createApp } from "vue";

const app = createApp(App);
app.use(
  createRouter({
    history: createWebHistory(),
    routes,
  })
);
app.use(ElementPlus);
app.mount("#app");
