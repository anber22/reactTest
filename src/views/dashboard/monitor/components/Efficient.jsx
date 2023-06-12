import { Card } from 'antd';
import { useEffect, useRef } from 'react';
import { Gauge } from '@ant-design/charts';

function App({ className, style }) {
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ['#F4664A', '#FAAD14', '#30BF78'];
  const graphRef = useRef(null);
  useEffect(() => {
    graphRef.current.changeData(1);
  }, []);
  const config = {
    height: 200,
    percent: 0,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      title: {
        formatter: ({ percent }) => {
          if (percent < ticks[1]) {
            return '差';
          }

          if (percent < ticks[2]) {
            return '中';
          }

          return '优';
        },
        style: ({ percent }) => ({
          fontSize: '36px',
          lineHeight: 1,
          color:
            percent < ticks[1]
              ? color[0]
              : percent < ticks[2]
              ? color[1]
              : color[2],
        }),
      },
    },
    onReady: (plot) => {
      graphRef.current = plot;
    },
  };
  return (
    <Card bordered={false} title="券核效率" className={className} style={style}>
      <Gauge {...config} />
    </Card>
  );
}
export default App;
