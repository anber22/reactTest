import { Avatar, List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { data } from '../data';

function IconText({ icon, text }) {
  return (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
}
function App() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
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
            title={item.title}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}
export default App;
