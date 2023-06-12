import { List, Button } from 'antd';
import { list } from '../data';

function SafetySetting() {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button key="update" type="link">
              修改
            </Button>,
          ]}
        >
          <List.Item.Meta avatar={item.label} description={item.description} />
        </List.Item>
      )}
    />
  );
}
export default SafetySetting;
