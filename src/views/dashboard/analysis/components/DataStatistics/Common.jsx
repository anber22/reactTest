import { Card, Tooltip, Statistic } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;

function Common({ title, tips, total, children, bottomChildren }) {
  return (
    <Card bordered={false}>
      <div className="flex justify-between">
        <div className="text-sm text-gray-400">{title}</div>
        <Tooltip title={tips}>
          <InfoCircleOutlined />
        </Tooltip>
      </div>
      <Statistic
        prefix={total.prefix}
        suffix={total.suffix}
        value={total.value}
        formatter={formatter}
      />
      {children}
      <div className="border-t flex space-x-2 items-center pt-2 mt-3">
        {bottomChildren}
      </div>
    </Card>
  );
}
export default Common;
