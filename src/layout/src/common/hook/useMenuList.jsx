import { getToken } from '@/utils/auth';
import { HomeMeta } from '@/config/config';
import { getMenu } from '@/utils/utils';

const useMenuList = (list) => {
  try {
    if (!getToken()) return getMenu([HomeMeta]);
    const menu = getMenu(list);
    return menu;
  } catch (error) {
    return getMenu([HomeMeta]);
  }
};
export default useMenuList;
