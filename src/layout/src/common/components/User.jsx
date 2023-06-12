import { Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoginOut } from '@/store/modules/user';

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClick = ({ key }) => {
    if (key === '1') {
      navigate('/account/info');
    }
    if (key === '2') {
      dispatch(userLoginOut());
    }
  };
  const items = [
    {
      key: '1',
      label: <span>个人中心</span>,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: <span>退出登录</span>,
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: itemClick,
      }}
      placement="bottomLeft"
      arrow
    >
      <div className="flex items-center h-full px-2 ">
        <img className="w-8" src="/src/assets/images/avatar.png" alt="" />
        {/* <span className="text-xs">用户名称</span> */}
      </div>
    </Dropdown>
  );
}
export default User;
