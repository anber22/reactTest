import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import user from './modules/user';
import permission from './modules/permission';
import tagsViews from './modules/tagsViews';
import menu from './modules/menu';
import layout from './modules/layout';
import theme from './modules/theme';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['menu', 'layout', 'theme'],
};
const reducer = combineReducers({
  permission,
  tagsViews,
  user,
  menu,
  layout,
  theme,
});
const persistedReducer = persistReducer(persistConfig, reducer);
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
