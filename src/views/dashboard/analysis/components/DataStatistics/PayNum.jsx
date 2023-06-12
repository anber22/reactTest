import { Statistic } from 'antd';
import { TinyColumn } from '@ant-design/charts';
import Common from './Common';

function PayNum() {
  const data = [274, 337, 81, 497, 666, 219, 269];
  const config = {
    height: 64,
    autoFit: false,
    data,
    tooltip: {
      customContent(x, _data) {
        return `NO.${x}: ${_data[0]?.data?.y.toFixed(2)}`;
      },
    },
  };
  const BottomChildren = (
    <>
      <span>转化率</span>
      <Statistic
        value={112893}
        suffix="%"
        valueStyle={{
          fontSize: 14,
        }}
      />
    </>
  );
  return (
    <Common
      title="支付笔数"
      tips="统计数据描述"
      total={{ value: 6577 }}
      bottomChildren={BottomChildren}
    >
      <TinyColumn {...config} />
    </Common>
  );
}
export default PayNum;
