import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Separate from './separate';
import { getIcon } from '@/utils/utils';

function Bread() {
  const { breadcrumbNameMap } = useSelector((state) => state.permission);
  console.log('breadcrumbNameMap', breadcrumbNameMap);
  const { setting } = useSelector((state) => state.layout);
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets
    .map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return breadcrumbNameMap[url] ? breadcrumbNameMap[url] : undefined;
    })
    .filter((i) => i);

  extraBreadcrumbItems.unshift({
    meta: {
      title: getIcon(extraBreadcrumbItems[0].meta.icon),
    },
  });

  const color =
    setting.header.theme === 'light' ? 'text-gray-300' : 'text-gray-400';
  const confirmColor =
    setting.header.theme === 'light' ? 'text-gray-700' : 'text-gray-50';
  const items = extraBreadcrumbItems.map((item, index) => ({
    title: (
      <span
        className={`${
          index === extraBreadcrumbItems.length - 1 ? confirmColor : color
        }`}
        style={{ height: '17px' }}
      >
        {item.meta.title}
      </span>
    ),
    onClick: item.onClick,
  }));

  return setting.breadcrumb.hidden ? (
    <Breadcrumb separator={<Separate className={color} />} items={items} />
  ) : null;
}
export default Bread;
