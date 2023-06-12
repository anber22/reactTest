import request from '@/utils/request';
import { ContentType } from '@/config/http';
// 登录
export function login(data) {
  return request({
    params: data,
    method: 'post',
    url: '/auth/custom/authorize',
    headers: {
      Authorization: 'Basic ZGF0YV9zaGFyZTpmcm9udGVuZA==',
      'Content-Type': ContentType.FORM_URLENCODED,
    },
  });
}
// 获取路由
export function getRouters() {
  return request({
    url: '/customer/mesMenu/getRouters',
    method: 'get',
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/auth/user/userInfo',
    method: 'get',
  });
}
// 退出方法
export function logout() {
  return request({
    url: '/auth/logout/token',
    method: 'post',
  });
}
