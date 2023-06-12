import { createSlice } from '@reduxjs/toolkit';
// 创建一个 Slice
export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isCollapse: false,
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    setCollapsed: (state, { payload }) => {
      state.isCollapse = payload;
    },
  },
});

export const { setCollapsed } = menuSlice.actions;

// 默认导出
export default menuSlice.reducer;
