import { Statistic } from 'antd';
import { TinyArea } from '@ant-design/charts';
import Common from './Common';

function Visit() {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
    546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 64,
    autoFit: false,
    data,
    smooth: true,
    areaStyle: {
      fill: '#d6e3fd',
    },
  };
  const BottomChildren = (
    <>
      <span>日访问量</span>
      <Statistic
        value={112893}
        valueStyle={{
          fontSize: 14,
        }}
      />
    </>
  );
  return (
    <Common
      title="访问量"
      tips="统计数据描述"
      total={{ value: 8846 }}
      bottomChildren={BottomChildren}
    >
      <TinyArea {...config} />
    </Common>
  );
}
export default Visit;
