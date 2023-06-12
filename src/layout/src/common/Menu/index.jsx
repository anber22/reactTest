import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOpenKeys } from '@/utils/utils';
import useMenuList from '@/layout/src/common/hook/useMenuList';

function Menus() {
  const navigate = useNavigate();
  const { isCollapse } = useSelector((state) => state.menu);
  const { setting } = useSelector((state) => state.layout);
  const { menuList } = useSelector((state) => state.permission);
  const [menu, setMenu] = useState([]);
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const nowModel = setting.model === 'Customer';

  useEffect(() => {
    const keys = getOpenKeys(pathname);
    setSelectedKeys(pathname);
    if (!isCollapse && !nowModel) {
      setOpenKeys(keys);
    }
  }, [pathname, isCollapse]);
  useEffect(() => {
    const list = useMenuList(menuList);
    setMenu(list);
  }, [menuList]);
  const handleMenuClick = (data) => {
    navigate(data.key);
  };
  // 设置当前展开的 subMenu
  const onOpenChange = (_openKeys) => {
    if (_openKeys.length === 0 || _openKeys.length === 1)
      return setOpenKeys(_openKeys);
    const latestOpenKey = _openKeys[_openKeys.length - 1];
    if (latestOpenKey.includes(_openKeys[0])) return setOpenKeys(_openKeys);
    return setOpenKeys([latestOpenKey]);
  };
  return (
    <div className={nowModel ? 'h-full' : 'flex-1'}>
      <Menu
        theme={nowModel ? setting.header.theme : setting.menu.theme}
        className={nowModel ? 'h-full' : 'h-full w-full'}
        mode={nowModel ? 'horizontal' : 'inline'}
        triggerSubMenuAction="hover"
        onClick={handleMenuClick}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        items={menu}
        inlineCollapsed={nowModel ? undefined : isCollapse}
      />
    </div>
  );
}
export default Menus;
