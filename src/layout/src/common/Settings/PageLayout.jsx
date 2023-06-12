import { Form, Switch, Button, Slider, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import copy from 'copy-to-clipboard';
import { useEffect } from 'react';
import Model from './components/Model';
import MenuTheme from './components/MenuTheme';
import HeaderTheme from './components/HeaderTheme';
import { setSetting } from '@/store/modules/layout';

function Settings() {
  const dispatch = useDispatch();
  const { setting } = useSelector((state) => state.layout);
  const theme = useSelector((state) => state.theme);
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const data = { ...setting, ...values, ...theme };
    copy(JSON.stringify(data));
    message.success('复制成功');
  };
  const handelValueChange = (_changedValues, allValues) => {
    const data = { ...setting, ...allValues };
    dispatch(setSetting(data));
  };
  useEffect(() => {
    form.setFieldsValue(setting);
  }, [setting, theme]);
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={setting}
      onFinish={handleFinish}
      onValuesChange={handelValueChange}
    >
      <Form.Item label="全局布局" name="model">
        <Model />
      </Form.Item>
      <Form.Item label="导航风格" name={['menu', 'theme']}>
        <MenuTheme disabled={theme.algorithm === 'darkAlgorithm'} />
      </Form.Item>
      <Form.Item label="Header 风格" name={['header', 'theme']}>
        <HeaderTheme disabled={theme.algorithm === 'darkAlgorithm'} />
      </Form.Item>
      <Form.Item
        label="是否固定导航"
        name={['menu', 'fix']}
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        label="是否固定 Header"
        valuePropName="checked"
        name={['header', 'fix']}
      >
        <Switch />
      </Form.Item>
      <Form.Item label="Header 高度" name={['header', 'height']}>
        <Slider min={48} max={60} />
      </Form.Item>
      {/* <Form.Item label="标签列表高度" name={['tags', 'height']}>
        <Slider min={35} max={45} />
      </Form.Item> */}
      <Form.Item
        label="是否显示标签列表"
        valuePropName="checked"
        name={['tags', 'hidden']}
      >
        <Switch />
      </Form.Item>
      <Form.Item
        label="是否显示面包屑导航"
        valuePropName="checked"
        name={['breadcrumb', 'hidden']}
      >
        <Switch />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          复制配置
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Settings;
