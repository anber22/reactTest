import { Button, Form } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import FormFour from './components/FormFour';

function App() {
  const [form] = Form.useForm();
  const { setting } = useSelector((state) => state.layout);
  const { isCollapse } = useSelector((state) => state.menu);
  const [width, setWidth] = useState('');
  useEffect(() => {
    if (setting.model === 'Customer') {
      setWidth('0px');
    } else {
      setWidth(isCollapse ? '48px' : '208px');
    }
  }, [isCollapse, setting.model]);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        name="advanced_search"
        onFinish={onFinish}
      >
        <div className="space-y-5">
          <FormOne />
          <FormTwo />
          <Form.Item name="data">
            <FormThree />
          </Form.Item>
          <FormFour />
        </div>

        <div className="h-14">
          <div
            className="fixed bottom-0 right-0 bg-light dark:bg-dark py-3 px-3 space-x-3 flex justify-end"
            style={{
              width: `calc(100% - ${width})`,
            }}
          >
            <Button>重置</Button>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default App;
