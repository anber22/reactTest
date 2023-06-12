import { Form, Row, Col, Input, Card } from 'antd';

function App() {
  return (
    <Card bordered={false} title="任务管理">
      <Row gutter={24}>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="name" label="任务名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}
export default App;
