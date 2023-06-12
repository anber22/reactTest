import { Row, Col } from 'antd';
import Category from './Category';
import Search from './Search';

function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col lg={24} xl={12}>
        <Search />
      </Col>
      <Col lg={24} xl={12}>
        <Category />
      </Col>
    </Row>
  );
}
export default App;
