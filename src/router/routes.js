/**
 * 定义基础路由
 * @type { *[] }
 */
const fs = require("fs");
const path = require("path");

const defaultRoutes = [];

const filesList = [];
function readFileList(dir) {
  const files = fs.readdirSync(dir);
  console.log(files);
  files.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); // 递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

readFileList("./modules", filesList);

console.log(filesList, "点短短");
// 以下方法是读取./modules/目录下的所有js文件
// const routerContext = require.context("./modules/", true, /\.ts$/);
// routerContext.keys().forEach((filePath) => {
//   // const routerModule = routerContext(filePath);
//   // 兼容 import export 和 require module.export 两种规范 Es modules commonjs
//   // defaultRoutes = [...defaultRoutes, ...(routerModule.default || routerModule)];
// });

// const baseRoutes = [
//   {
//     path: "/",
//     name: "showMain",
//     meta: {
//       title: "FirstStep首页展示"
//     },
//     component: () => import("@/views/main-show/MainShow.vue")
//   },
//   {
//     path: "/404",
//     name: "404",
//     meta: {
//       title: "404页面"
//     },
//     component: () => import(/* webpackChunkName: "exception" */ "@/views/exception/404.vue")
//   }
// ];

// defaultRoutes = [...moduleRoutes, ...baseRoutes];

export default defaultRoutes;
