import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRouters } from '@/api/login';
import { getPermissionRoutes } from '@/routes/utils/util';
import { menuRoutes } from '@/routes/index';
// 创建一个 Slice
export const permissionSlice = createSlice({
  name: 'permission',
  initialState: {
    permissionRouteList: [],
    breadcrumbNameMap: {},
    menuList: [],
  },
  // 定义 reducers 并生成关联的操作
  reducers: {
    setMenuList: (state, { payload }) => {
      const routeList = getPermissionRoutes(payload);
      state.menuList = [...menuRoutes, ...routeList];
    },
    setRoutes: (state, { payload }) => {
      const routeList = getPermissionRoutes(payload);
      state.permissionRouteList = routeList;
    },
    setBreadcrumb: (state, { payload }) => {
      const routeList = getPermissionRoutes(payload);
      function setForm(arr) {
        arr.forEach((item) => {
          state.breadcrumbNameMap[item.path] = item;
          if (item?.children?.length > 0) {
            setForm(item.children);
          }
        });
      }
      setForm([...menuRoutes, ...routeList]);
    },
  },
});
export const permissionRoutes = createAsyncThunk(
  'permission/permissionRoutes',
  async (data, { dispatch }) =>
    new Promise((resolve, reject) => {
      getRouters()
        .then((res) => {
          dispatch(permissionSlice.actions.setRoutes(res.data));
          dispatch(permissionSlice.actions.setBreadcrumb(res.data));
          dispatch(permissionSlice.actions.setMenuList(res.data));

          resolve(res);
        })
        .catch((error) => reject(error));
    }),
);
// 导出方法
export const { setRoutes, setBreadcrumb, setMenuList } =
  permissionSlice.actions;

// 默认导出
export default permissionSlice.reducer;
