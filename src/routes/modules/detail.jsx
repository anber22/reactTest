import Layout from '@/layout';
import DetailBase from '@/views/demo/detail/base';
import DetailAdvanced from '@/views/demo/detail/advanced';

const detail = [
  {
    path: '/detail',
    redirect: '/detail/base',
    element: <Layout />,
    meta: {
      title: '详情页',
      icon: 'ProfileOutlined',
    },
    children: [
      {
        path: '/detail/base',
        name: 'DetailBase',
        element: <DetailBase />,
        meta: {
          title: '基础详情页',
        },
      },
      {
        path: '/detail/advanced',
        name: 'DetailAdvanced',
        element: <DetailAdvanced />,
        meta: {
          title: '高级详情页',
        },
      },
    ],
  },
];
export default detail;
export const sort = 5;
