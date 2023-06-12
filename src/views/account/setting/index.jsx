import { Card, Descriptions, Segmented } from 'antd';
import { useState } from 'react';
import { userList } from './data';
import Main from './Main';

function Account() {
  const [value, setValue] = useState('user1');
  return (
    <div className="space-y-4">
      <Card bordered={false}>
        <div className="flex items-center px-6">
          <div className="w-24 h-24 mr-20">
            <img src="/src/assets/images/avatar.png" alt="" />
          </div>
          <Descriptions className="flex-1" column={2}>
            {userList.map((item) => (
              <Descriptions.Item key={item.label} label={item.label}>
                {item.value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </div>
      </Card>
      <Card bordered={false}>
        <Segmented
          className="mb-8"
          options={[
            { label: '基本信息', value: 'user1', key: 'user1' },
            { label: '安全设置', value: 'user2', key: 'user2' },
            { label: '实名认证', value: 'user3', key: 'user3' },
          ]}
          value={value}
          onChange={setValue}
        />
        <Main active={value} />
      </Card>
    </div>
  );
}
export default Account;
