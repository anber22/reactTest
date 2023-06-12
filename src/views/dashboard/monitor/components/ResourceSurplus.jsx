import { Card } from 'antd';
import { Liquid } from '@ant-design/charts';
import { resourceConfig } from './data';

function App({ className, style }) {
  const config = resourceConfig();
  return (
    <Card bordered={false} title="资源剩余" className={className} style={style}>
      <Liquid {...config} />
    </Card>
  );
}
export default App;
