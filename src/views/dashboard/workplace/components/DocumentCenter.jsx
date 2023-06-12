import { Card, Typography, Button } from 'antd';
import { documentList } from './data';

function App({ className, style }) {
  return (
    <Card
      bordered={false}
      title="文档中心"
      extra={<Typography.Link>查看更多</Typography.Link>}
      className={className}
      style={style}
    >
      <div className="flex flex-wrap">
        {documentList.map((item) => (
          <div className="flex-1/2" key={item.key}>
            <Button type="text">{item.text}</Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
export default App;
