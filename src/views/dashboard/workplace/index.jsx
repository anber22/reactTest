import { Row, Col } from 'antd';
import Announcement from './components/Announcement';
import ContentCarousel from './components/ContentCarousel';
import ContentCategory from './components/ContentCategory';
import DataTotal from './components/DataTotal';
import DocumentCenter from './components/DocumentCenter';
import FastEntrance from './components/FastEntrance';
import OnlineHotContent from './components/OnlineHotContent';

function App() {
  return (
    <div className="w-full">
      <Row gutter={[24, 0]}>
        <Col lg={24} xl={18} className="space-y-6">
          <DataTotal />
          <Row gutter={[24, 0]}>
            <Col lg={24} xl={12}>
              <OnlineHotContent />
            </Col>
            <Col lg={24} xl={12}>
              <ContentCategory />
            </Col>
          </Row>
        </Col>
        <Col lg={24} xl={6} className="space-y-6">
          <FastEntrance />
          <ContentCarousel />
          <Announcement />
          <DocumentCenter />
        </Col>
      </Row>
    </div>
  );
}
export default App;
