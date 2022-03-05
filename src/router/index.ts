import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainShow from "@/views/main-show/MainShow.vue";
import Vuex from "@/views/vuex/Vuex.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainShow",
    component: MainShow
  },
  {
    path: "/vuex",
    name: "Vuex",
    meta: {
      title: "测试"
    },
    component: Vuex
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("@/views/axios/Axios.vue") // 懒加载组件
  }
];
// 引入modules文件夹的路由ts
const files = import.meta.globEager("./modules/*.ts");

Object.keys(files).forEach((key) => {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    routes.push(...files[key].default);
  }
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  interface passPath {
    path: string;
  }
  const tabArr = [
    {
      path: "/"
    },
    {
      path: "/home"
    },
    {
      path: "/classify"
    },
    {
      path: "/map"
    },
    {
      path: "/mine"
    }
  ];
  const isFlag:passPath = tabArr.find((item) => to.path === item.path);
  // 判断是否在一级页面: 一级页面不清楚tab栏
  if (isFlag) {
    store.commit("allowTabShow", true);
  } else {
    store.commit("allowTabShow", false);
  }
  // 判断目标路由是否需要登录验证
  // if (to.meta.requireAuth) {
  //   // if (Vue.ls.get(ACCESS_TOKEN)) {
  //   //   next()
  //   // } else {
  //   //   next({ path: '/login', query: { redirect: to.fullPath } })
  //   // }
  // } else {
  next();
  // }
  if (to.meta.title) {
    // 设置标题
    const doc:any = document;
    doc.title = to.meta.title;
  }
});

export default router;
