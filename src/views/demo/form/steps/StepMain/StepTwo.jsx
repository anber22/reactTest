import { Button, Form, Input } from 'antd';

const formItemLayout = {
  layout: 'vertical',
  style: { width: '500px' },
};

const { TextArea } = Input;

function App({ stepChange }) {
  const onFinish = (values) => {
    console.log('表单数据', values);
    stepChange(2);
  };
  return (
    <div className="flex justify-center  py-4">
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <Form.Item name="title" label="广告来源">
          <Input placeholder="请输入广告来源" />
        </Form.Item>
        <Form.Item name="title" label="广告媒介">
          <Input placeholder="请输入广告媒介" />
        </Form.Item>

        <Form.Item name="desc" label="描述(选填)" tooltip="对于表单的描述">
          <TextArea rows={4} placeholder="只显示四行" />
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
