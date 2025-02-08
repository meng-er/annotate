/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑     永不宕机     永无BUG
 */
import { createRouter, createWebHistory } from "vue-router";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";
// import "@/styles/element/index.scss";

import { routes } from "vue-router/auto-routes";

import App from "./App.vue";
import router from "./router";

import "@/styles/index.scss";

// import "element-plus/theme-chalk/src/message.scss";
// import "element-plus/theme-chalk/src/message-box.scss";

// createApp(App).mount('#app')

import { createApp } from "vue";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
