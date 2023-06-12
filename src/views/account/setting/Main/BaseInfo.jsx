import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: '王小明',
      gender: 'male',
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 500,
      }}
    >
      <Form.Item
        name="note"
        label="姓名"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item
        name="gender"
        label="所属部门"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="请选择部门" allowClear>
          <Option value="male">技术部</Option>
          <Option value="female">事业部</Option>
          <Option value="other">业务部</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="个人职务"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="请输入个人职务" />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item>
        <div className="space-x-2">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置表单
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            默认赋值
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}
export default App;
