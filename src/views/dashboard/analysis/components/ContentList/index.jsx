import { Row, Col } from 'antd';
import Content from './Content';
import List from './List';

function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col lg={24} xl={12}>
        <Content />
      </Col>
      <Col lg={24} xl={12}>
        <List />
      </Col>
    </Row>
  );
}
export default App;
