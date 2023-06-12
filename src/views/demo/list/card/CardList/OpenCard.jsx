import { Row, Col, Button } from 'antd';
import CommonCard from './CommonCard';

function App({ titleShow }) {
  const list = [];
  for (let index = 0; index < 8; index++) {
    const data = {
      icon: 'LikeFilled',
      title: '事件分析',
      status: 'success',
      description:
        '快速诊断用户人群，地域细分情况，了解数据分布的集中度，以及主要的数据分布的区间段是什么',
      key: `事件分析${index}`,
    };
    list.push(data);
  }
  return (
    <>
      {titleShow ? <div className="text-base mb-4 mt-4">服务开通</div> : null}
      <Row gutter={[24, 24]}>
        {list.map((item) => (
          <Col sm={24} lg={12} xl={8} xxl={6} key={item.key}>
            <CommonCard data={item} key={item.key}>
              <Button type="primary" ghost>
                续约服务
              </Button>
            </CommonCard>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default App;
