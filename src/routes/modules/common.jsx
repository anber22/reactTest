import Login from '@/views/login/index';

const common = [
  {
    path: '/login',
    name: 'login',
    element: <Login />,
    hidden: true,
    meta: {
      title: '登录',
      tagHidden: true,
    },
  },
];
export default common;
export const sort = 99;
