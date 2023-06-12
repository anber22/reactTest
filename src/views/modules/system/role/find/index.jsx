import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function RoleFind() {
  const navigate = useNavigate();
  const toRole = () => {
    navigate('/system/roleList');
  };
  return (
    <div className="role-li">
      <Button type="primary" onClick={toRole}>
        去角色列表
      </Button>
    </div>
  );
}
export default RoleFind;
