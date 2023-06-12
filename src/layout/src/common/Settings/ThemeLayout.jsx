import { Form, Slider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme, setToken } from '@/store/modules/theme';
import Theme from './components/Theme';
import ThemeColor from './components/ThemeColor';

function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const [form] = Form.useForm();

  const handelValueChange = (_changedValues, allValues) => {
    dispatch(setTheme(allValues.algorithm));
    dispatch(setToken(allValues.token));
  };
  useEffect(() => {
    form.setFieldsValue(theme);
  }, [theme]);
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={theme}
      onValuesChange={handelValueChange}
    >
      <Form.Item label="整体风格设置" name={['algorithm']}>
        <Theme />
      </Form.Item>
      <Form.Item label="主题色" name={['token', 'colorPrimary']}>
        <ThemeColor />
      </Form.Item>
      <Form.Item label="默认字号" name={['token', 'fontSize']}>
        <Slider min={12} max={30} />
      </Form.Item>
    </Form>
  );
}
export default Settings;
