import { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Badge, Popover, Tabs, List, Avatar } from 'antd';

const data = [
  {
    title: '内容不要超过两行字，超出时自动截断',
  },
  {
    title: '你收到了 14 份新周报',
  },
  {
    title: '你收到了 14 份新周报',
  },
  {
    title: '你收到了 14 份新周报',
  },
];
const items = [
  {
    key: '1',
    label: `通知(5)`,
    children: (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="一天前"
            />
          </List.Item>
        )}
      />
    ),
  },
  {
    key: '2',
    label: `消息(2)`,
    children: (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="一天前"
            />
          </List.Item>
        )}
      />
    ),
  },
  {
    key: '3',
    label: `待办(4)`,
    children: (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="一天前"
            />
          </List.Item>
        )}
      />
    ),
  },
];
const content = (
  <div className="w-80">
    <Tabs defaultActiveKey="1" items={items} />
  </div>
);
function Info({ theme, bg }) {
  const [show, setShow] = useState(true);
  return (
    <Popover content={content}>
      <div
        className={`${bg} w-8 h-8 flex justify-center items-center rounded-full  cursor-pointer`}
      >
        <Badge dot={show}>
          <BellOutlined className={theme} onClick={() => setShow(!show)} />
        </Badge>
      </div>
    </Popover>
  );
}
export default Info;
