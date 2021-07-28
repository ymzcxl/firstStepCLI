/**
 * 项目展示页面
 */
export default [
  {
    path: "/show",
    name: "MainShow",
    meta: {
      title: "FirstStep首页展示"
    },
    component: () => import("@/views/main-show/MainShow.vue")
  }
];
