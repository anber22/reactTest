import { Card } from 'antd';
import { TinyArea } from '@ant-design/charts';
import { realConfig } from './data';

function App({ className, style }) {
  const config = realConfig();
  return (
    <Card
      bordered={false}
      title="活动情况预测"
      className={className}
      style={style}
    >
      <div className="relative">
        <div className="text-xs text-gray-400">目标评估</div>
        <div className="text-lg">有望达到预期</div>
        <div className="w-full absolute bottom-12 left-0 z-50">
          <div className="text-sm border-b border-dashed py-1"> 1416 亿元</div>
          <div className="text-sm border-b  border-dashed py-1"> 800 亿元</div>
        </div>

        <TinyArea {...config} />
      </div>
    </Card>
  );
}
export default App;
