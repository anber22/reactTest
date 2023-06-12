import { PlusOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';
import CommonCard from './CommonCard';

function App({ titleShow }) {
  const list = [];
  for (let index = 0; index < 7; index++) {
    const data = {
      title: '事件分析',
      time: '2023-02-21 16:50:29',
      list: [
        { label: '待质检数', value: '495' },
        { label: '积压时长', value: '117s' },
        { label: '待抽检数', value: '46' },
      ],
      key: `事件分析${index}`,
    };
    list.push(data);
  }
  return (
    <>
      {titleShow ? <div className="text-base mb-4 mt-4">内容质检</div> : null}
      <Row gutter={[24, 24]}>
        <Col sm={24} lg={12} xl={8} xxl={6}>
          <Card
            hoverable
            bodyStyle={{
              height: 200,
            }}
          >
            <div className="h-full flex flex-col justify-center items-center space-y-4">
              <PlusOutlined className="text-gray-400" />
              <span className="text-gray-400">新增内容质检</span>
            </div>
          </Card>
        </Col>
        {list.map((item) => (
          <Col sm={24} lg={12} xl={8} xxl={6} key={item.key}>
            <CommonCard data={item} key={item.key}>
              <Button>删除</Button>
              <Button type="primary">质检</Button>
            </CommonCard>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default App;
