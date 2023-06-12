/**
 * @description：请求配置
 */
export const ResultCode = {
  // 请求成功code
  SUCCESS: '000000',
  // 鉴权失败，需要重新登陆
  ERROR: ['000016', '000017'],
  // 请求超时时间
  TIMEOUT: 10000,
};

/**
 * @description：常用的contentTyp类型
 */
export const ContentType = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // text
  TEXT: 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 上传
  FORM_DATA: 'multipart/form-data;charset=UTF-8',
};
