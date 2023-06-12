import {
  Button,
  Form,
  Row,
  Col,
  Input,
  Divider,
  Typography,
  Space,
  Select,
  DatePicker,
  Card,
} from 'antd';

const { RangePicker } = DatePicker;
const { Title } = Typography;
function QueryList({
  children,
  title,
  query,
  onSearch,
  onReset,
  pageSize,
  pageNum,
}) {
  const [form] = Form.useForm();
  const params = {
    pageNum: pageNum || 1,
    pageSize: pageSize || 10,
  };
  const onFinish = (values) => {
    onSearch({ ...params, ...values });
  };
  const handelReset = () => {
    form.resetFields();
    onReset({ ...params });
  };
  const components = { Input, Select, DatePicker, RangePicker };
  return (
    <Card bordered={false}>
      {title ? (
        <Title className="pb-2" level={5}>
          {title}
        </Title>
      ) : null}
      {/* --- 查询表单区域 ---*/}
      <Form form={form} name="query_search" onFinish={onFinish}>
        <Row gutter={24}>
          {query.map((item) => {
            const Comp = components[item.component];
            return (
              <Col span={item.span || 6} key={item.fieId}>
                <Form.Item name={item.fieId} label={item.label}>
                  <Comp {...item.props} />
                </Form.Item>
              </Col>
            );
          })}
          <Col span={6}>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button onClick={handelReset}>重置</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      {/* --- 查询表单区域 ---*/}
      <Divider style={{ marginTop: 0 }} />
      <div className="space-y-5">{children}</div>
    </Card>
  );
}
export default QueryList;
