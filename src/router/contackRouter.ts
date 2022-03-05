// 融合其他模块路由
interface routerObj {
  path: string,
  name: string,
  [propName:string]:any;
}
const moduleRouter = ():Array<routerObj> => {
  // 引入modules文件夹的路由ts
  const files = import.meta.globEager("./modules/*.ts");
  const modulesRouter:Array<routerObj> = [];
  Object.keys(files).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
      modulesRouter.push(...files[key].default);
    }
  });
  return modulesRouter;
};

export default moduleRouter;
