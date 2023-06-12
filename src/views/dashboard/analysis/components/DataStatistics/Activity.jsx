import { Progress } from '@ant-design/charts';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Common from './Common';

function Activity() {
  const config = {
    height: 64,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  const BottomChildren = (
    <div
      className="w-full flex justify-between"
      style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      <div className="flex items-end space-x-2">
        <span>周同比 12%</span>
        <CaretUpOutlined className="text-red-500" />
      </div>

      <div className="flex items-end space-x-2">
        <span>日同比 12%</span>
        <CaretDownOutlined className="text-green-500" />
      </div>
    </div>
  );
  return (
    <Common
      title="运营活动效果"
      tips="统计数据描述"
      total={{ value: 78, suffix: '%' }}
      bottomChildren={BottomChildren}
    >
      <Progress {...config} />
    </Common>
  );
}
export default Activity;
