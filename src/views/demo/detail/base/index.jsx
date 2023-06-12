import { Descriptions, Divider, Table, Card } from 'antd';
import { list1, list2, columns, data } from '../data';

function App() {
  return (
    <Card bordered={false}>
      <Descriptions title="退款申请">
        {list1.map((item) => (
          <Descriptions.Item key={item.label} label={item.label}>
            {item.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Divider />
      <Descriptions title="用户信息">
        {list2.map((item) => (
          <Descriptions.Item key={item.label} label={item.label}>
            {item.value}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Divider />
      <Descriptions title="退货商品" />
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
export default App;
