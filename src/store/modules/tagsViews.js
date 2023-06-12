import { createSlice } from '@reduxjs/toolkit';
// 创建一个 Slice
export const tagsViewSlice = createSlice({
  name: 'tagsViews',
  initialState: {
    tagList: [],
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    closeRightTags: (state, { payload }) => {
      state.tagList.forEach((item, index) => {
        if (item.path === payload) {
          state.tagList.splice(index + 1, state.tagList.length);
        }
      });
    },
    otherTags: (state, { payload }) => {
      state.tagList = state.tagList.filter((item) => item.path === payload);
    },
    emptyTags: (state) => {
      state.tagList = [];
    },
    deleteTags: (state, { payload }) => {
      state.tagList = state.tagList.filter((item) => item.path !== payload);
    },
    updateTags: (state, { payload }) => {
      if (!payload || payload?.meta?.tagHidden) return;
      const bool = state.tagList.some((item, idx) => {
        if (payload.path === item.path) {
          state.tagList.splice(idx, 1, payload);
        }
        return payload.path === item.path;
      });
      if (!bool) {
        state.tagList.push(payload);
      }
    },
  },
});
// 导出加减的方法
export const { updateTags, deleteTags, closeRightTags, otherTags, emptyTags } =
  tagsViewSlice.actions;

// 默认导出
export default tagsViewSlice.reducer;
