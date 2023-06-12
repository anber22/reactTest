import { Typography, Descriptions, Table } from 'antd';
import { infoList, columns, data } from '../data';

function Certification() {
  return (
    <div>
      <Typography.Title level={5}>企业实名认证</Typography.Title>
      <div className="bg-gray-100 dark:bg-dark rounded px-4 py-4 mb-4">
        <Descriptions>
          {infoList.map((item) => (
            <Descriptions.Item key={item.label} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
      <Typography.Title level={5}>认证记录</Typography.Title>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default Certification;
