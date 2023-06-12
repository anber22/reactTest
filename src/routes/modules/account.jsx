import Layout from '@/layout';
import AccountInfo from '@/views/account/info';
import AccountSetting from '@/views/account/setting';

const account = [
  {
    path: '/account',
    redirect: '/account/info',
    element: <Layout />,
    meta: {
      title: '个人中心',
      icon: 'UserOutlined',
    },
    children: [
      {
        path: '/account/info',
        name: 'AccountInfo',
        element: <AccountInfo />,
        meta: {
          title: '用户信息',
        },
      },
      {
        path: '/account/setting',
        name: 'AccountSetting',
        element: <AccountSetting />,
        meta: {
          title: '用户设置',
        },
      },
    ],
  },
];
export default account;
export const sort = 7;
