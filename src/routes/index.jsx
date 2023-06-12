import { sortBy } from 'lodash';
// * 导入所有的静态路由
const metaRouters = import.meta.globEager('./modules/*.jsx');

const routerArray = [];
const metaList = [];

Object.keys(metaRouters).forEach((item) => {
  metaList.push({
    routes: metaRouters[item].default,
    sort: metaRouters[item].sort,
  });
});
// * 数组排序
const arr = sortBy(metaList, 'sort');
arr.forEach((item) => {
  routerArray.push(...item.routes);
});

// * 配置路由列表
export const commonRoutes = [...routerArray];
// * 配置路由转换函数
export const menuRoutes = routerArray.map((item) => ({
  ...item,
  element: undefined,
}));

export default commonRoutes;
