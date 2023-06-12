import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function RoleList() {
  const navigate = useNavigate();
  const toRole = () => {
    navigate('/system/role-find');
  };
  return (
    <div className="role-li">
      <Button type="primary" onClick={toRole}>
        去角色详情页面
      </Button>
    </div>
  );
}
export default RoleList;
