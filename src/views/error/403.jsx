import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeRouter } from '@/config/config';

function NotAuth() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HomeRouter);
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="你没有此页面的访问权限"
      extra={
        <Button type="primary" onClick={goHome}>
          回到首页
        </Button>
      }
    />
  );
}

export default NotAuth;
