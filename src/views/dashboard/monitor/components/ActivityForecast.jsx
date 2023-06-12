import { Card, Statistic } from 'antd';
import CountUp from 'react-countup';
import { Bar } from '@ant-design/charts';
import { activityConfig } from './data';

const formatter = (value) => <CountUp end={value} separator="," />;

function App({ className, style }) {
  const config = activityConfig();
  return (
    <Card
      bordered={false}
      title="活动实时交易情况"
      className={className}
      style={style}
    >
      <div className="flex justify-between mb-6">
        <Statistic
          title="今日交易总额"
          value={112893}
          precision={2}
          suffix="元"
        />
        <Statistic
          title="销售目标完成率"
          value={92}
          precision={2}
          formatter={formatter}
          suffix="%"
        />
        <Statistic.Countdown
          title="活动剩余时间"
          value={Date.now() + 10 * 1000}
          formatter={formatter}
        />
        <Statistic
          title="每秒交易总额"
          value={234}
          precision={2}
          formatter={formatter}
          suffix="元"
        />
      </div>
      <Bar {...config} />
    </Card>
  );
}
export default App;
