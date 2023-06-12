import { Card, Row, Col } from 'antd';
import List from './components/List';
import User from './components/User';
import { user, tabList } from './data';

function Account() {
  return (
    <Row gutter={[24, 0]}>
      <Col lg={24} xl={8} xxl={6}>
        <Card bordered={false}>
          <User data={user} />
        </Card>
      </Col>

      <Col lg={24} xl={16} xxl={18}>
        <Card bordered={false} tabList={tabList}>
          <List />
        </Card>
      </Col>
    </Row>
  );
}
export default Account;
