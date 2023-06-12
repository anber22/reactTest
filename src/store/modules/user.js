import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';
// 创建一个 Slice
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: getToken(),
    userInfo: {},
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    setUserToken: (state, { payload }) => {
      state.token = payload;
      setToken(payload);
    },
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});
export const userLogin = createAsyncThunk(
  'user/userLogin',
  (data, { dispatch }) =>
    new Promise((resolve, reject) => {
      login(data)
        .then((res) => {
          dispatch(userSlice.actions.setUserToken(res.data.access_token));
          resolve(res);
        })
        .catch((error) => reject(error));
    }),
);
export const userInfoGet = createAsyncThunk(
  'user/userInfoGet',
  async (data, { dispatch }) =>
    new Promise((resolve, reject) => {
      getInfo()
        .then((res) => {
          dispatch(userSlice.actions.setUserInfo(res.data));
          resolve(res);
        })
        .catch((error) => reject(error));
    }),
);
export const userLoginOut = createAsyncThunk(
  'user/userLoginOut',
  async () =>
    new Promise(() => {
      logout().finally(() => {
        removeToken();
        localStorage.removeItem('persist:root');
        window.location.reload();
      });
    }),
);
// 导出加减的方法
export const { setUserToken, setUserInfo } = userSlice.actions;

// 默认导出
export default userSlice.reducer;
