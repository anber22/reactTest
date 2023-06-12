import { Row, Col } from 'antd';
import ActivityForecast from './components/ActivityForecast';
import CategoryProportion from './components/CategoryProportion';
import Efficient from './components/Efficient';
import HotSearch from './components/HotSearch';
import RealTimeDeal from './components/RealTimeDeal';
import ResourceSurplus from './components/ResourceSurplus';

function App() {
  return (
    <div className="space-y-6">
      <Row gutter={[24, 24]}>
        <Col lg={24} xl={18} className="h-full">
          <ActivityForecast />
        </Col>
        <Col lg={24} xl={6} className="space-y-6">
          <RealTimeDeal />
          <Efficient />
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col lg={24} xl={12}>
          <CategoryProportion />
        </Col>
        <Col lg={24} xl={6}>
          <HotSearch />
        </Col>
        <Col lg={24} xl={6}>
          <ResourceSurplus />
        </Col>
      </Row>
    </div>
  );
}
export default App;
