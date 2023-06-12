import { createSlice } from '@reduxjs/toolkit';
// 创建一个 Slice
export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    setting: {
      // model-A端布局: Admin
      // model-B端布局: Business
      // model-C端布局: Customer
      model: 'Business',
      menu: {
        // 风格：light(白色) dark(黑色)
        theme: 'light',
        // 是否固定菜单列表
        fix: true,
      },
      header: {
        // 风格：light(白色) dark(黑色)
        theme: 'light',
        // 是否固定header
        fix: true,
        // header组件高度
        height: 48,
      },
      tags: {
        // 是否显示标签列表
        hidden: true,
        // 标签列表组件高度
        height: 40,
      },
      breadcrumb: {
        // 是否显示面包屑导航
        hidden: true,
      },
    },
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    setSetting: (state, { payload }) => {
      state.setting = { ...state.setting, ...payload };
    },
    checkTheme: (state, { payload }) => {
      if (payload === 'darkAlgorithm') {
        state.setting.menu.theme = 'dark';
        state.setting.header.theme = 'dark';
      } else {
        state.setting.menu.theme = 'light';
        state.setting.header.theme = 'light';
      }
    },
  },
});

export const { setSetting, checkTheme } = layoutSlice.actions;

// 默认导出
export default layoutSlice.reducer;
