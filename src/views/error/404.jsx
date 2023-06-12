import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeRouter } from '@/config/config';

function NotFound() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HomeRouter);
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，此页面未找到"
      extra={
        <Button type="primary" onClick={goHome}>
          回到首页
        </Button>
      }
    />
  );
}

export default NotFound;
