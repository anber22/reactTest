import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCollapsed } from '@/store/modules/menu';

function Collapse() {
  const dispatch = useDispatch();
  const { isCollapse } = useSelector((state) => state.menu);
  const toggleCollapsed = () => {
    dispatch(setCollapsed(!isCollapse));
  };
  return (
    <div className="absolute bg-gray-300 bg-opacity-10 rounded p-2 bottom-3 left-2 flex justify-end">
      {isCollapse ? (
        <MenuUnfoldOutlined
          className="text-l text-gray-400 hover:text-blue-500"
          onClick={toggleCollapsed}
        />
      ) : (
        <MenuFoldOutlined
          className="text-l text-gray-400  hover:text-blue-500"
          onClick={toggleCollapsed}
        />
      )}
    </div>
  );
}
export default Collapse;
