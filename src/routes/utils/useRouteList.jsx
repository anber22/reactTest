import Routes from '@/routes/index';
import { getToken } from '@/utils/auth';
import { lazyLoadRoutes } from '@/routes/utils/util';

const useRoutes = (list) => {
  try {
    if (!getToken()) return Routes;
    const menu = lazyLoadRoutes(list);
    return [...Routes, ...menu];
  } catch (error) {
    return Routes;
  }
};
export default useRoutes;
