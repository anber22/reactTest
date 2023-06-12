import { Form, Row, Col, Input, Card } from 'antd';

function App() {
  return (
    <Card title="仓库管理" bordered={false}>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item name="name" label="仓库名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="name" label="仓库名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="name" label="仓库名">
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}
export default App;
