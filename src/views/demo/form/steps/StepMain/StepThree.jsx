import { Button, Result } from 'antd';

function App({ stepChange }) {
  return (
    <Result
      status="success"
      title="操作成功"
      subTitle="表单创建成功"
      extra={[
        <Button type="primary" key="console" onClick={() => stepChange(0)}>
          再次创建
        </Button>,
        <Button key="buy">查看表单</Button>,
      ]}
    />
  );
}
export default App;
