import { Card } from 'antd';
import { WordCloud } from '@ant-design/charts';
import { hotConfig } from './data';

function App({ className, style }) {
  const config = hotConfig();
  return (
    <Card bordered={false} title="热门搜索" className={className} style={style}>
      <WordCloud {...config} />
    </Card>
  );
}
export default App;
