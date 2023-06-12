import { HomeMeta } from '@/config/config';

export const itemClass =
  'flex items-center border-t border-l border-r group px-3 py-1 space-x-1.5 cursor-auto fill-current hover:border-blue-500  rounded-t text-sm';

export const getTags = (arr, pathname, colorPrimary) => {
  function fn(array) {
    return array
      .filter((i) => i)
      .map((item) => ({
        ...item,
        itemClass:
          itemClass +
          (item.path === pathname
            ? ' font-bold text-white'
            : `text-gray-600 border-gray-100 dark:text-gray-50 dark:border-gray-800`),
        hoverClass:
          item.path === pathname
            ? 'group-hover:text-white'
            : 'group-hover:text-blue-500 group-hover:font-medium',
        style: {
          background: item.path === pathname ? colorPrimary : undefined,
          borderColor: item.path === pathname ? colorPrimary : undefined,
        },
      }));
  }
  try {
    return fn([HomeMeta, ...arr]);
  } catch (error) {
    return fn([HomeMeta]);
  }
};
