import { Input, Button, Form, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, userInfoGet } from '@/store/modules/user';
import { permissionRoutes } from '@/store/modules/permission';

function Login() {
  const { algorithm } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toRole = () => {
    navigate('/system/roleList');
  };
  const onFinish = (values) => {
    const params = {
      vc_token: '',
      auth_type: 'vc',
      flag: '1',
      vc_code: '',
      ...values,
    };
    dispatch(userLogin(params)).then(() => {
      dispatch(userInfoGet());
      dispatch(permissionRoutes()).then(() => {
        toRole();
      });
    });
  };

  return (
    <div
      className="h-full"
      style={{
        background: `url(@/assets/login/${
          algorithm !== 'darkAlgorithm' ? 'light' : 'dark'
        }.png) no-repeat`,
        backgroundSize: '100% 100%',
      }}
    >
      <div className="flex h-full justify-end items-center transition-all duration-300 ease-in-out">
        <div className="w-1/3 mr-28 px-24 py-28 rounded flex flex-col justify-center bg-blue-500 bg-opacity-10 dark:bg-dark">
          <div className="flex items-end justify-center space-x-2 mb-14">
            <img src="/src/assets/images/ico.png" alt="UZI Admin" />
            <div className="text-xl font-semibold">UZI Admin</div>
          </div>
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              username: 'admin',
              password: 'admin123',
              code: '1234',
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '账号名称不能为空',
                },
              ]}
            >
              <Input
                placeholder="请输入账号名称"
                size="large"
                type="icon-yonghu"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '登录密码不能为空',
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="请输入登录密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <div className="flex space-x-2">
                <Form.Item
                  className="flex-1"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: '验证码不能为空',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    maxLength={4}
                    placeholder="请输入验证码"
                  />
                </Form.Item>

                <Image width={120} height={40} src="error" preview={false} />
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                className="w-full"
                htmlType="submit"
                type="primary"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
