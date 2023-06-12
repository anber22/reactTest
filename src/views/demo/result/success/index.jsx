import { Button, Result, Steps, Descriptions, Card } from 'antd';

function App() {
  return (
    <Card bordered={false}>
      <Result
        status="success"
        title="提交成功"
        subTitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
        extra={[
          <Button type="primary" key="console">
            返回列表
          </Button>,
          <Button key="buy">查看详情</Button>,
        ]}
      >
        <Descriptions className="mb-6" title="项目名称">
          <Descriptions.Item label="项目 ID">1233123</Descriptions.Item>
          <Descriptions.Item label="负责人">王小明</Descriptions.Item>
          <Descriptions.Item label="生效时间">
            2022-10-22 12:32
          </Descriptions.Item>
        </Descriptions>
        <Steps
          current={1}
          progressDot
          items={[
            {
              title: '创建项目',
              description: '2022-10-22 12:32',
            },
            {
              title: '部门初审',
              description: '进行中',
            },
            {
              title: '安全测试',
              description: '未开始',
            },
            {
              title: '正式上线',
              description: '未开始',
            },
          ]}
        />
      </Result>
    </Card>
  );
}
export default App;
