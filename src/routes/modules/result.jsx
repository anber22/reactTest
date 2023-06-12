import Layout from '@/layout';
import ResultSuccess from '@/views/demo/result/success';
import ResultError from '@/views/demo/result/error';

const result = [
  {
    path: '/result',
    redirect: '/result/success',
    element: <Layout />,
    meta: {
      title: '结果页',
      icon: 'TrademarkOutlined',
    },
    children: [
      {
        path: '/result/success',
        name: 'ResultSuccess',
        element: <ResultSuccess />,
        meta: {
          title: '成功结果页',
        },
      },
      {
        path: '/result/error',
        name: 'ResultError',
        element: <ResultError />,
        meta: {
          title: '失败结果页',
        },
      },
    ],
  },
];
export default result;
export const sort = 6;
