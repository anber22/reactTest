import { Card } from 'antd';
import { RingProgress } from '@ant-design/charts';
import { categoryConfig } from './data';

function App({ className, style }) {
  const [config1, config2, config3] = categoryConfig();
  return (
    <Card
      bordered={false}
      title="各品类占比"
      className={className}
      style={style}
    >
      <div className="flex justify-evenly">
        <RingProgress {...config1} />
        <RingProgress {...config2} />
        <RingProgress {...config3} />
      </div>
    </Card>
  );
}
export default App;
