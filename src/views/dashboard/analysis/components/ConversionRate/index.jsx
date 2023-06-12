import { Tabs, Card } from 'antd';
import { Line } from '@ant-design/charts';
import { useState, useEffect } from 'react';

const items = [
  {
    key: '1',
    label: `销售额`,
  },
  {
    key: '2',
    label: `访问量`,
  },
  {
    key: '3',
    label: `转化率`,
  },
];
function App() {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
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
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  return (
    <Card bordered={false}>
      <Tabs defaultActiveKey="1" items={items} />
      <Line {...config} />
    </Card>
  );
}
export default App;
