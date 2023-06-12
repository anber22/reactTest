import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography, Card } from 'antd';

const { Paragraph, Text } = Typography;
function App() {
  return (
    <Card bordered={false}>
      <Result
        status="error"
        title="提交失败"
        subTitle="请核对并修改以下信息后，再重新提交。"
        extra={[
          <Button type="primary" key="console">
            返回修改
          </Button>,
          <Button key="buy">回到列表</Button>,
        ]}
      >
        <div>
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16,
              }}
            >
              您提交的内容有如下错误：
            </Text>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined className="text-pink-400 mr-2" />
            <span>您的账户已被冻结</span>
            <Button type="link">立即解冻</Button>
          </Paragraph>
          <Paragraph>
            <CloseCircleOutlined className="text-pink-400 mr-2" />
            <span>您的账户还不具备申请资格</span>
            <Button type="link">立即升级</Button>
          </Paragraph>
        </div>
      </Result>
    </Card>
  );
}
export default App;
