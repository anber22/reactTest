import { Input, DatePicker, Form, Select, Button } from 'antd';

const formItemLayout = {
  layout: 'vertical',
  style: { width: '500px' },
};
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
function App({ stepChange }) {
  const onFinish = (values) => {
    console.log('表单数据', values);
    stepChange(1);
  };
  return (
    <div className="flex justify-center py-6">
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <Form.Item name="title" label="活动名称">
          <Input placeholder="输入汉字、字母或数字，最多20字符" />
        </Form.Item>
        <Form.Item name="member" label="渠道类型">
          <Select
            placeholder="请选择"
            options={[
              {
                value: '1',
                label: 'APP渠道',
              },
              {
                value: '2',
                label: '网页渠道',
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="time" label="推广时间">
          <RangePicker className="w-full" format={dateFormat} />
        </Form.Item>
        <Form.Item
          name="desc"
          label="推广地址"
          extra="跳转URL，网址必须以 http:// 或 https:// 开头"
        >
          <Input placeholder="请输入推广地址" />
        </Form.Item>

        <Form.Item>
          <div className="space-x-3">
            <Button type="primary" htmlType="submit">
              下一步
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
export default App;
