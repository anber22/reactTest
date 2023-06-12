import { Row, Col, Switch } from 'antd';
import { useRef } from 'react';
import CommonCard from './CommonCard';

function App({ titleShow }) {
  const refArray = useRef({});
  const updateChildLoading = (checked, _event, key) => {
    refArray.current[key].changeLoading(checked);
  };
  function getRef(dom, key) {
    if (dom) {
      refArray.current[key] = dom;
    }
  }
  const list = [];
  for (let index = 0; index < 8; index++) {
    const data = {
      title: '事件分析',
      status: 'success',
      description:
        '快速诊断用户人群，地域细分情况，了解数据分布的集中度，以及主要的数据分布的区间段是什么',
      key: `key_${index}`,
    };
    list.push(data);
  }
  return (
    <>
      {titleShow ? <div className="text-base mb-4 mt-4">规则预置</div> : null}
      <Row gutter={[24, 24]}>
        {list.map((item) => (
          <Col sm={24} lg={12} xl={8} xxl={6} key={item.key}>
            <CommonCard
              ref={(ref) => {
                getRef(ref, item.key);
              }}
              data={item}
              key={item.key}
            >
              <Switch
                onChange={(checked, event) =>
                  updateChildLoading(checked, event, item.key)
                }
              />
            </CommonCard>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default App;
