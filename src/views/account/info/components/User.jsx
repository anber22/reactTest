import { Divider, Tag, Space, Row, Col, Avatar, Typography } from 'antd';
import { getIcon } from '@/utils/utils';

function User({ data }) {
  return (
    <div>
      <div className="flex flex-col items-center space-y-3">
        <div className="w-24 h-24">
          <img src="/src/assets/images/avatar.png" alt="" />
        </div>
        <Typography.Title level={4}>{data.name} </Typography.Title>
        <Typography.Paragraph>{data.desc}</Typography.Paragraph>
      </div>
      <Space direction="vertical" className="pl-4 pt-4">
        {data.titleList.map((item) => (
          <div
            key={item.label}
            className="space-x-1 text-gray-600 dark:text-gray-200"
          >
            {getIcon(item.icon)}
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </Space>
      <Divider />
      <div className="text-sm mb-4">标签</div>

      <div className="flex flex-wrap space-x-2 ">
        {data.tagList.map((item) => (
          <Tag className="mb-2" key={item}>
            {item}
          </Tag>
        ))}
      </div>

      <Divider />
      <div className="text-sm mb-4">团队</div>
      <Row gutter={[8, 8]}>
        {data.teamList.map((item) => (
          <Col span={12} key={item.key}>
            <Space>
              <Avatar src={item.img} />
              <span className="text-gray-600 dark:text-gray-200">
                {item.label}
              </span>
            </Space>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default User;
