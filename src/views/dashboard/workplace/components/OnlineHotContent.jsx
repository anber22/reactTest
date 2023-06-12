import { Card, Typography, Segmented, Table } from 'antd';
import { contentRanking, columns } from './data';

function App({ className, style }) {
  return (
    <Card
      bordered={false}
      title="内容数据"
      extra={<Typography.Link>查看更多</Typography.Link>}
      className={className}
      style={style}
    >
      <Segmented options={['文本', '图片', '视频']} className="my-4" />
      <Table columns={columns} dataSource={contentRanking} rowKey="key" />
    </Card>
  );
}
export default App;
