import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeRouter } from '@/config/config';

function NotNetwork() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HomeRouter);
  };
  return (
    <Result
      status="500"
      title="500"
      subTitle="服务器发生了错误"
      extra={
        <Button type="primary" onClick={goHome}>
          回到首页
        </Button>
      }
    />
  );
}

export default NotNetwork;
