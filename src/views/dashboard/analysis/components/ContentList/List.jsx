import { Card, Table, DatePicker } from 'antd';
import { columns, contentRanking } from './data';

const { RangePicker } = DatePicker;
function List() {
  return (
    <Card bordered={false} title="热门作者榜单" extra={<RangePicker />}>
      <div className="" style={{ height: 400 }}>
        <Table
          size="small"
          pagination={false}
          columns={columns}
          dataSource={contentRanking}
          rowKey="key"
        />
      </div>
    </Card>
  );
}
export default List;
