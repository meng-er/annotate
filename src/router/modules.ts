import { RouteRecordRaw } from "vue-router";

export const defaultRouter: Array<RouteRecordRaw> = [
  { path: "/:catchall(.*)", redirect: "/404" },
  {
    path: "/",
    name: "/",
    redirect: "/report",
    // component: () => import('@/views/home.vue'),
    meta: {
      title: "首页",
      keepAlive: false, //组件在切换时是否缓存
      index: 1,
      transition: {
        enable: true,
        name: "",
      },
    },
  },
  {
    path: "/404",
    name: "/404",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404",
      keepAlive: false,
      index: 1,
      transition: {
        enable: true,
        name: "van-fade",
      },
    },
  },
  // {
  // 	path: '/website',
  // 	name: '/website',
  // 	component: () => import('@/components/Website/index.vue'),
  // 	meta: {
  // 		title: '',
  // 		keepAlive: false,
  // 		index: 1,
  // 		transition: {
  // 			enable: true,
  // 			name: 'van-fade'
  // 		}
  // 	}
  // }
];
