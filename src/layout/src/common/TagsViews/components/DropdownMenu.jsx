import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  deleteTags,
  emptyTags,
  otherTags,
  closeRightTags,
} from '@/store/modules/tagsViews';
import { HomeRouter } from '@/config/config';

function DropdownMenu({ className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const itemClick = ({ key }) => {
    if (key === '1') {
      dispatch(deleteTags(pathname));
      navigate(HomeRouter);
    }
    if (key === '2') {
      dispatch(closeRightTags(pathname));
    }
    if (key === '3') {
      dispatch(otherTags(pathname));
    }
    if (key === '4') {
      dispatch(emptyTags());
      navigate(HomeRouter);
    }
  };
  const items = [
    {
      key: '1',
      label: <span>关闭当前</span>,
    },
    {
      key: '2',
      label: <span>关闭右侧标签</span>,
    },
    {
      key: '3',
      label: <span>关闭其他</span>,
    },
    {
      key: '4',
      label: <span>关闭所有</span>,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: itemClick,
      }}
      placement="bottomLeft"
      trigger="hover"
    >
      <div
        className={`${className} group absolute right-0 top-0 h-full w-10 flex justify-center items-center border-l border-gray-100 dark:border-gray-800`}
      >
        <DownOutlined className="text-l text-gray-400 group-hover:border-blue-500" />
      </div>
    </Dropdown>
  );
}
export default DropdownMenu;
