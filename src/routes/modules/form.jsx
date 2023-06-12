import Layout from '@/layout';
import FormBase from '@/views/demo/form/base';
import FormSteps from '@/views/demo/form/steps';
import FormAdvanced from '@/views/demo/form/advanced';

const form = [
  {
    path: '/form',
    redirect: '/form/base',
    element: <Layout />,
    meta: {
      title: '表单页',
      icon: 'UnorderedListOutlined',
    },
    children: [
      {
        path: '/form/base',
        name: 'FormBase',
        element: <FormBase />,
        meta: {
          title: '基础表单',
        },
      },
      {
        path: '/form/steps',
        name: 'FormSteps',
        element: <FormSteps />,
        meta: {
          title: '分步表单',
        },
      },
      {
        path: '/form/advanced',
        name: 'FormAdvanced',
        element: <FormAdvanced />,
        meta: {
          title: '高级表单',
        },
      },
    ],
  },
];
export default form;
export const sort = 4;
