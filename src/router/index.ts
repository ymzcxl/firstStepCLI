// import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// const routes: Array<RouteRecordRaw> = [

// ];
// // const router = createRouter({
// //   history: createWebHistory(process.env.BASE_URL),
// //   scrollBehavior(to, from, savedPosition) {
// //     // 只有调用了history.pushState()的时候才会触发这个方法，也就是当我们点击浏览器中的“<-” "->"的时候
// //     // 判断如果滚动条的位置存在直接返回当前位置，否则返回到起点
// //     // savedPosition只有当用户点击前进后退，或者go(-1)的时候才会调用
// //     if (savedPosition) {
// //       return savedPosition;
// //     }
// //     return { x: 0, y: 0 };
// //   },
// //   routes
// // });

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// });

// export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainShow from "@/views/main-show/MainShow.vue";
import Vuex from "@/views/vuex/Vuex.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainShow",
    component: MainShow
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios/Axios.vue") // 懒加载组件
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
