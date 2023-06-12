import { Card, Divider, Typography } from 'antd';
import { Area } from '@ant-design/charts';
import { useState, useEffect } from 'react';
import { dataIconList } from './data';
import { getIcon } from '@/utils/utils';

function App({ className, style }) {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  return (
    <Card bordered={false} className={className} style={style}>
      <Typography.Title level={4}>欢迎回来，吴彦祖</Typography.Title>
      <Divider />
      <div className="flex justify-around  divide-x">
        {dataIconList.map((item) => (
          <div
            className="space-x-2 flex-1 flex items-center justify-center"
            key={item.label}
          >
            <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-full flex justify-center items-center">
              {getIcon(item.icon, {
                twoToneColor: item.color,
                className: 'text-3xl',
              })}
            </div>
            <div className="space-y-1">
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className="space-x-1">
                <span className="text-lg font-mono">{item.value}</span>
                <span className="text-xs text-gray-400">{item.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <Typography.Title level={5}>内容数据</Typography.Title>
      <Area {...config} />
    </Card>
  );
}
export default App;
