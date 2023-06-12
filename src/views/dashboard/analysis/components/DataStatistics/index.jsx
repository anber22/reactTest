import { Row, Col } from 'antd';
import Sales from './Sales';
import Visit from './Visit';
import PayNum from './PayNum';
import Activity from './Activity';

function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col md={24} lg={12} xl={6}>
        <Sales />
      </Col>
      <Col md={24} lg={12} xl={6}>
        <Visit />
      </Col>
      <Col md={24} lg={12} xl={6}>
        <PayNum />
      </Col>
      <Col md={24} lg={12} xl={6}>
        <Activity />
      </Col>
    </Row>
  );
}
export default App;
