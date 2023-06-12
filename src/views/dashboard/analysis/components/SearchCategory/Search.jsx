import { Card, Table } from 'antd';
import { columns, contentRanking } from './data';

function Search() {
  return (
    <Card bordered={false} title="线上热门搜索">
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
export default Search;
