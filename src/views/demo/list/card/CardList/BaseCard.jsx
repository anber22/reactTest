import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';

const { Meta } = Card;
function App({ titleShow }) {
  const list = [];
  for (let index = 0; index < 7; index++) {
    const data = {
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      title: 'React',
      description: '在中台产品的研发过程中，会出现不同的设计规范和实现方法',
      key: `React${index}`,
    };
    list.push(data);
  }
  return (
    <>
      {titleShow ? <div className="text-base mb-4 mt-4">标准卡片</div> : null}
      <Row gutter={[24, 24]}>
        <Col sm={24} lg={12} xl={8} xxl={6}>
          <Card
            hoverable
            bodyStyle={{
              height: 200,
            }}
          >
            <div className="h-full flex justify-center items-center space-x-2">
              <PlusOutlined className="text-gray-400" />
              <span className="text-gray-400">新增产品</span>
            </div>
          </Card>
        </Col>
        {list.map((item) => (
          <Col sm={24} lg={12} xl={8} xxl={6} key={item.key}>
            <Card
              hoverable
              bodyStyle={{
                height: 150,
              }}
              actions={[
                <span key="operation">操作一</span>,
                <EditOutlined key="edit" />,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.title}
                description={item.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default App;
