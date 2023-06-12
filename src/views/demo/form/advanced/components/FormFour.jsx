import { Form, Row, Col, Input, Card } from 'antd';

const { TextArea } = Input;
function App() {
  return (
    <Card title="填写说明" bordered={false}>
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item name="desc" label="参数说明">
            <TextArea
              rows={4}
              placeholder="请填写参数说明，最多不超过200字"
              maxLength={200}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}
export default App;
