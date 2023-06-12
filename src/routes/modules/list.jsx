import Layout from '@/layout';
import ListQuery from '@/views/demo/list/query';
import ListStandard from '@/views/demo/list/standard';
import ListCard from '@/views/demo/list/card';

const list = [
  {
    path: '/list',
    redirect: '/list/query',
    element: <Layout />,
    meta: {
      title: '列表页',
      icon: 'TableOutlined',
    },
    children: [
      {
        path: '/list/query',
        name: 'ListQuery',
        element: <ListQuery />,
        meta: {
          title: '查询列表',
        },
      },
      {
        path: '/list/standard',
        name: 'ListStandard',
        element: <ListStandard />,
        meta: {
          title: '标准列表',
        },
      },
      {
        path: '/list/card',
        name: 'ListCard',
        element: <ListCard />,
        meta: {
          title: '卡片列表',
        },
      },
    ],
  },
];
export default list;
export const sort = 3;
