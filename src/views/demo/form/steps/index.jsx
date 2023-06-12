import { Steps, Divider, Typography, Card } from 'antd';
import { useState } from 'react';
import StepMain from './StepMain/index';

const { Title, Paragraph } = Typography;
const steps = [
  {
    title: '基本信息',
    key: '1',
    description: '创建活动渠道',
  },
  {
    title: '输入渠道信息',
    key: '2',
    description: '输入详细的渠道内容',
  },
  {
    title: '完成创建',
    key: '3',
    description: '创建成功',
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <Card bordered={false}>
      <Steps current={current} items={steps} />
      <StepMain current={current} stepChange={(active) => setCurrent(active)} />
      <Divider />
      <Title level={5}>说明</Title>
      <Paragraph>
        <blockquote>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </blockquote>
      </Paragraph>
    </Card>
  );
}
export default App;
