import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import Layout from '@/layout';
import DefaultDom from '@/views/default/index';
import Routes from '@/routes/index';

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
export const lazyLoad = (Comp) => (
  <Suspense
    fallback={
      <Spin
        size="large"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      />
    }
  >
    <Comp />
  </Suspense>
);
/**
 * @description 获取全部页面，根据后台component生成路由页面表单
 * @returns menu
 */
export const getModules = () => {
  const modules = import.meta.glob('@/views/modules/**/*.jsx');
  const menu = {};
  Object.keys(modules).forEach((item) => {
    const arr = item.substring(0, item.indexOf('.jsx')).split('/');
    const index = arr.map((i) => i).indexOf('modules');
    const len = arr[arr.length - 1] === 'index' ? arr.length - 1 : arr.length;
    const label = arr.slice(index + 1, len).join('/');
    menu[label] = modules[item];
  });
  return menu;
};
/**
 * @description 根据后台返回的名称，返回不同的组件
 * @returns Component
 */
const getLazyComponent = (component, sub) => {
  const modules = getModules();
  if (component === 'Layout' && sub === 0) {
    return <Layout />;
  }
  if (component === 'Layout' && sub !== 0) {
    return <DefaultDom />;
  }
  return lazyLoad(lazy(modules[component]));
};
/**
 * @description 设置全部的路由页面，不包含懒加载组件
 * @param list 后台返回的路由列表
 * @returns routes
 */
export const getPermissionRoutes = (list, element) => {
  function setRoutes(arr, pathName, sub) {
    return arr.map((item) => {
      const path = pathName ? `${pathName}/${item.path}` : `/${item.path}`;
      const elementDom = item.component
        ? getLazyComponent(item.component, sub)
        : item.element;
      return {
        ...item,
        sub,
        key: path,
        element: element ? elementDom : undefined,
        label: item.meta.title,
        path,
        redirect:
          item.component === 'Layout'
            ? `${path}/${item.children[0].path}`
            : undefined,
        children:
          item.children?.length > 0
            ? setRoutes(item.children, path, sub + 1)
            : [],
      };
    });
  }
  const routes = setRoutes(list, '', 0);
  return [...routes];
};
/**
 * @description 全部的路由列表组件懒加载赋值
 * @param list 后台返回的路由列表
 * @returns routes
 */
export const lazyLoadRoutes = (list) => {
  function setRoutes(arr) {
    return arr.map((item) => {
      const element = item.component
        ? getLazyComponent(item.component, item.sub)
        : item.element;
      return {
        ...item,
        element,
        children: item.children?.length > 0 ? setRoutes(item.children) : [],
      };
    });
  }
  const routes = setRoutes(list);
  return routes;
};
/**
 * @description 返回当前路由的全部信息
 * @param pathName 路由路径
 * @returns data
 */
export const searchRoute = (pathName, location) => {
  const data = {};
  function getRouter(list) {
    list.forEach((item) => {
      data[item.path] = item;
      if (item.children?.length > 0) {
        getRouter(item.children);
      }
    });
  }
  try {
    const { permissionRouteList } = useSelector((state) => state.permission);
    getRouter([...Routes, ...permissionRouteList]);
    return data[pathName] ? { ...location, ...data[pathName] } : undefined;
  } catch (error) {
    return undefined;
  }
};
