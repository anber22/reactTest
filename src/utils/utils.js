import React from 'react';
import * as Icons from '@ant-design/icons';
/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path) => {
  try {
    let newStr = '';
    const newArr = [];
    const arr = path
      .split('/')
      .filter((f) => f)
      .map((i) => `/${i}`);
    arr.forEach((i) => {
      newStr += i;
      newArr.push(newStr);
    });
    return newArr;
  } catch (error) {
    return [];
  }
};
export const getIcon = (name, props) => React.createElement(Icons[name], props);
/**
 * @description 获取侧边导航菜单列表
 * @param {String} list 需要处理的路由列表
 * @returns array
 */
export const getMenu = (list) => {
  function setRoutes(arr) {
    return arr
      .map((item) => ({
        path: item.path,
        name: item.name,
        hidden: item.hidden,
        key: item.path,
        label: item.meta.title,
        icon:
          !item.meta.icon || item.meta.icon === '#'
            ? undefined
            : getIcon(item.meta.icon),
        children: item.children?.length > 0 ? setRoutes(item.children) : null,
      }))
      .filter((i) => !i.hidden);
  }
  const menuList = setRoutes(list);
  return menuList;
};
// 回显数据字典
export function selectDictLabel(data, value, labelKey) {
  try {
    const common = {};
    data.map((item) => {
      common[item.dictValue] = item[labelKey || 'dictLabel'];
      return item[labelKey || 'dictLabel'];
    });
    if (value === null || value === undefined || !data) {
      return common.all || '';
    }
    return common[`${value}`] || common.all;
  } catch (error) {
    return '';
  }
}
export function randomHash() {
  const arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const timestamp =
    new Date().valueOf() -
    Math.round(Math.random() * 100) +
    Math.round(Math.random() * 100);
  const strArr = ['', '', ''];
  for (let i = 0; i < 8; i += 1) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    strArr[0] += arr[pos];
  }
  for (let j = 0; j < 4; j += 1) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    strArr[1] += arr[pos];
  }
  for (let o = 0; o < 4; o += 1) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    strArr[2] += arr[pos];
  }
  strArr.push(timestamp.toString());
  return strArr.join('_');
}
