import {
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Radio,
  Card,
} from 'antd';
import { useState } from 'react';

const formItemLayout = {
  layout: 'vertical',
};
const dateFormat = 'YYYY/MM/DD';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const options = [
  {
    label: '公开',
    value: '1',
  },
  {
    label: '部分公开',
    value: '2',
  },
  {
    label: '不公开',
    value: '3',
  },
];

const onFinish = (values) => {
  console.log('表单数据', values);
};
function App() {
  const [selectShow, setSelectShow] = useState(false);
  return (
    <Card bordered={false} className="flex justify-center">
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <Form.Item name="title" label="标题">
          <Input placeholder="给目标取个名字吧" />
        </Form.Item>
        <Form.Item name="time" label="起止时间">
          <RangePicker className="w-full" format={dateFormat} />
        </Form.Item>
        <Form.Item name="desc" label="描述(选填)" tooltip="对于表单的描述">
          <TextArea rows={4} placeholder="只显示四行" />
        </Form.Item>
        <Form.Item name="num" label="权重">
          <InputNumber min={1} max={10} defaultValue={3} />
        </Form.Item>
        <Form.Item name="radio" label="目标公开" extra="客户、邀评人默认被分享">
          <Radio.Group
            options={options}
            onChange={(e) => {
              setSelectShow(e.target.value === '2');
            }}
          />
        </Form.Item>
        {selectShow ? (
          <Form.Item name="member">
            <Select
              placeholder="请选择"
              options={[
                {
                  value: '1',
                  label: '同事甲',
                },
                {
                  value: '2',
                  label: '同事乙',
                },
              ]}
            />
          </Form.Item>
        ) : null}

        <Form.Item>
          <div className="space-x-3">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button>重置</Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
}
export default App;
