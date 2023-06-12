import { createSlice } from '@reduxjs/toolkit';
import { getLocalTheme, setLocalTheme } from '@/utils/auth';
// 创建一个 Slice
export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    // 5.0 版本中默认提供三套预设算法，分别是默认算法 theme.defaultAlgorithm,暗色算法 theme.darkAlgorithm 和紧凑算法 theme.compactAlgorithm
    algorithm: getLocalTheme(),
    token: {
      // 默认字号
      fontSize: 14,
      // 品牌主色
      colorPrimary: '#1677ff',
      // 成功色
      // colorSuccess: '#52c41a',
      // // 警戒色
      // colorWarning: '#faad14',
      // // 错误色
      // colorError: '#ff4d4f',
      // // 信息色
      // colorInfo: '#1677ff',

      // // 间距-尺寸步长
      // sizeStep: 4,
      // // 间距-尺寸变化单位
      // sizeUnit: 4,
      // // 基础圆角
      // borderRadius: 6,
    },
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    setTheme: (state, { payload }) => {
      state.algorithm = payload;
      setLocalTheme(payload);
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { setTheme, setToken } = themeSlice.actions;

// 默认导出
export default themeSlice.reducer;
