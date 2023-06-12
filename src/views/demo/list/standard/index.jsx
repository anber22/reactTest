import { List, Button, Segmented, Input, Avatar, Space, Card } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { createElement, useState } from 'react';
import Item from './components/Item';
import Total from './components/Total';

const { Search } = Input;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `react ${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  name: '测试员',
  time: '2023-03-21 07:36',
  active: 50,
  description: 'Ant Design, a design language for .',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const list = [
  { title: '我的待办', content: '8个任务' },
  { title: '本周任务平均处理时间', content: '32分钟' },
  { title: '本周完成任务数', content: '24个任务' },
];
function IconText({ icon, text }) {
  return (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  );
}

function App() {
  const [value, setValue] = useState('1');
  return (
    <div>
      <Total list={list} />
      <Card bordered={false} className="mt-6">
        <div className="flex justify-between pb-4">
          <div className="text-lg">标准列表</div>
          <div className="flex space-x-3">
            <Segmented
              value={value}
              onChange={setValue}
              options={[
                { label: '全部', value: '1' },
                { label: '进行中', value: '2' },
                { label: '已完成', value: '3' },
              ]}
            />
            <Search
              placeholder="请输入"
              style={{
                width: 260,
              }}
            />
          </div>
        </div>
        {value === '1' ? (
          <List
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <Item data={item}>
                  <Button type="link">编辑</Button>
                  <Button type="link">删除</Button>
                </Item>
              </List.Item>
            )}
          />
        ) : (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 2,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
}

export default App;
