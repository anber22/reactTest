import { Card, Typography, Tag } from 'antd';
import { noticeList } from './data';

function App({ className, style }) {
  return (
    <Card
      bordered={false}
      className={className}
      style={style}
      title="公告"
      extra={<Typography.Link>查看更多</Typography.Link>}
    >
      {noticeList.map((item) => (
        <div className="flex items-center mb-2" key={item.key}>
          <Tag color={item.color}>{item.value}</Tag>
          <span className="flex-1 truncate text-gray-500 text-xs">
            {item.label}
          </span>
        </div>
      ))}
    </Card>
  );
}
export default App;
