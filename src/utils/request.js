import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { randomHash } from './utils';
import { ResultCode } from '@/config/http';
import { getToken } from '@/utils/auth';
import { userLoginOut } from '@/store/modules/user';

const Axios = axios.create({
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL,
  // 设置超时时间（10s）
  timeout: ResultCode.TIMEOUT,
  // 跨域时候允许携带凭证
  withCredentials: true,
});
/**
 * @description 请求拦截器
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
 */
Axios.interceptors.request.use(
  (config) => {
    let Authorization = '';
    if (config.headers.Authorization) {
      Authorization = config.headers.Authorization;
    } else {
      Authorization = `Bearer ${getToken()}`;
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        'trace-id': randomHash(),
        Authorization,
      },
    };
  },
  (error) => Promise.reject(error),
);
// 响应拦截器
Axios.interceptors.response.use(
  (response) => {
    if (!response.data.code) {
      return response.data;
    }
    if (ResultCode.ERROR.indexOf(response.data.code) > -1) {
      const dispatch = useDispatch();
      dispatch(userLoginOut());
      return message.error(response.data.msg);
    }
    if (response.data.code !== ResultCode.SUCCESS) {
      return message.error(response.data.msg);
    }
    return response.data;
  },
  (error) => {
    if (!error.response.data) {
      return message.error('未知异常，请联系管理员！');
    }

    if (error.response.data.code === 403) {
      message.error('请求参数异常，请重新输入！');
    } else if (error.response.data.msg) {
      message.error(error.response.data.msg);
    }

    return Promise.reject(error);
  },
);
export default Axios;
