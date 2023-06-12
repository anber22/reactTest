import { Statistic } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import Common from './Common';

function Sales() {
  const BottomChildren = (
    <>
      <span>日销售额</span>
      <Statistic
        value={112893}
        prefix="￥"
        valueStyle={{
          fontSize: 14,
        }}
      />
    </>
  );
  return (
    <Common
      title="总销售额"
      tips="统计数据描述"
      total={{ value: 112893, prefix: '￥' }}
      bottomChildren={BottomChildren}
    >
      <div
        className="flex justify-between"
        style={{ height: 64, whiteSpace: 'nowrap', overflow: 'hidden' }}
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
    </Common>
  );
}
export default Sales;
