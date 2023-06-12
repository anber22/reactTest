import DashboardMonitor from '@/views/dashboard/monitor';
import DashboardWorkplace from '@/views/dashboard/workplace';
import DashboardAnalysis from '@/views/dashboard/analysis';
import Layout from '@/layout';
import { HomeRouter, HomeMeta } from '@/config/config';

const dashboard = [
  {
    path: '/dashboard',
    element: <Layout />,
    redirect: HomeRouter,
    meta: {
      tagHidden: true,
      title: '仪表盘',
      icon: 'DashboardOutlined',
    },
    children: [
      {
        ...HomeMeta,
        element: <DashboardWorkplace />,
      },
      {
        path: '/dashboard/analysis',
        name: 'DashboardAnalysis',
        element: <DashboardAnalysis />,
        meta: {
          title: '分析页',
        },
      },
      {
        path: '/dashboard/monitor',
        name: 'DashboardMonitor',
        element: <DashboardMonitor />,
        meta: {
          title: '实时监控',
        },
      },
    ],
  },
];
export default dashboard;
export const sort = 1;
