import NotAuth from '@/views/error/403';
import NotFound from '@/views/error/404';
import NotNetwork from '@/views/error/500';
// 错误页面模块
const errorRouter = [
  {
    path: '/403',
    element: <NotAuth />,
    meta: {
      title: '403页面',
      tagHidden: true,
    },
    hidden: true,
  },
  {
    path: '/404',
    element: <NotFound />,
    meta: {
      title: '404页面',
      tagHidden: true,
    },
    hidden: true,
  },
  {
    path: '/500',
    element: <NotNetwork />,
    meta: {
      title: '500页面',
      tagHidden: true,
    },
    hidden: true,
  },
];

export default errorRouter;
export const sort = 99;
