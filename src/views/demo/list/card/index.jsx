import { Segmented, Input, Card } from 'antd';
import { useState } from 'react';
import CardList from './CardList';

const { Search } = Input;
function App() {
  const [value, setValue] = useState('1');
  return (
    <Card bordered={false}>
      <div className="text-lg ">卡片列表</div>
      <div className="flex justify-between mb-5 mt-5">
        <Segmented
          value={value}
          onChange={setValue}
          options={[
            { label: '全部', value: '1' },
            { label: '标准卡片', value: '2' },
            { label: '内容质检', value: '3' },
            { label: '服务开通', value: '4' },
            { label: '规则预置', value: '5' },
          ]}
        />
        <Search
          placeholder="请输入"
          style={{
            width: 260,
          }}
        />
      </div>
      <CardList value={value} />
    </Card>
  );
}
export default App;
