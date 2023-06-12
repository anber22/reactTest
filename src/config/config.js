// 全局不动配置项 只做导出不做修改

// * 首页地址（默认）
export const HomeRouter = '/dashboard/workplace';

// 不需要token的白名单地址
export const WhiteList = ['/404', '/login'];

export const HomeMeta = {
  path: HomeRouter,
  name: 'DashboardWorkplace',
  meta: {
    title: '工作台',
    tagHidden: true,
  },
};
