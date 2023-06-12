import { Card } from 'antd';
import { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

function Content() {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json',
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
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <Card bordered={false} title="内容发布比例">
      <Column {...config} />
    </Card>
  );
}
export default Content;
