import { Card, Steps, Descriptions, Divider, Table, Segmented } from 'antd';
import { list1, list2, columns, data } from '../data';

function App() {
  return (
    <div className="space-y-5">
      <Card bordered={false}>
        <Descriptions title="流程进度" />
        <Steps
          current={1}
          progressDot
          items={[
            {
              title: '创建项目',
              description: '2022-10-22 12:32',
            },
            {
              title: '部门初审',
              description: '进行中',
            },
            {
              title: '安全测试',
              description: '未开始',
            },
            {
              title: '正式上线',
              description: '未开始',
            },
          ]}
        />
      </Card>
      <Card title="用户信息" bordered={false}>
        <Descriptions>
          {list2.map((item) => (
            <Descriptions.Item key={item.label} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
        <Descriptions title="信息组">
          {list1.map((item) => (
            <Descriptions.Item key={item.label} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
        <Descriptions title="信息组" />
        <Card type="inner" title="多层级信息组">
          <Descriptions title="信息组">
            {list2.map((item) => (
              <Descriptions.Item key={item.label} label={item.label}>
                {item.value}
              </Descriptions.Item>
            ))}
          </Descriptions>
          <Divider />
          <Descriptions title="信息组">
            {list1.map((item) => (
              <Descriptions.Item key={item.label} label={item.label}>
                {item.value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Card>
      </Card>
      <Card title="用户近半年消费记录" bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
      <Card bordered={false}>
        <Segmented
          className="mb-8"
          options={[
            { label: '操作日志一', value: 'user1' },
            { label: '操作日志二', value: 'user2' },
            { label: '操作日志三', value: 'user3' },
          ]}
        />
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}
export default App;
