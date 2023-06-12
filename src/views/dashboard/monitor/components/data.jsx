export const activityConfig = () => {
  const data = [
    {
      year: '1951 年',
      value: 38,
    },
    {
      year: '1952 年',
      value: 52,
    },
    {
      year: '1956 年',
      value: 61,
    },
    {
      year: '1957 年',
      value: 145,
    },
    {
      year: '1958 年',
      value: 48,
    },
  ];
  return {
    data,

    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
};
export const resourceConfig = () => ({
  percent: 0.25,
  height: 200,
  outline: {
    border: 4,
    distance: 8,
  },
  wave: {
    length: 128,
  },
});
export const realConfig = () => {
  const data = [
    100, 200, 1300, 250, 4002, 300, 3500, 400, 700, 609, 800, 1100, 2000, 3000,
    4000, 5000, 10000,
  ];
  return {
    height: 116,
    autoFit: false,
    data,
    smooth: true,
  };
};
export const hotConfig = () => {
  const data = [
    { value: 9, name: '吉安市' },
    { value: 9, name: '上海市' },
    { value: 9, name: '北京市' },
    { value: 9, name: '成都市' },
    { value: 9, name: '长沙市' },
    { value: 9, name: '武汉市' },
    { value: 9, name: '深圳市' },
    { value: 9, name: '杭州市' },
    { value: 9, name: '南京市' },
    { value: 9, name: '苏州市' },
    { value: 9, name: '北京市' },
    { value: 9, name: '成都市' },
    { value: 9, name: '长沙市' },
    { value: 9, name: '武汉市' },
    { value: 9, name: '深圳市' },
    { value: 9, name: '杭州市' },
    { value: 9, name: '南京市' },
    { value: 9, name: '苏州市' },
    { value: 9, name: '北京市' },
    { value: 9, name: '成都市' },
    { value: 9, name: '长沙市' },
    { value: 9, name: '武汉市' },
    { value: 9, name: '深圳市' },
    { value: 9, name: '杭州市' },
    { value: 9, name: '南京市' },
    { value: 9, name: '苏州市' },
  ];
  const config = {
    data,
    height: 200,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 28],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
  };
  return config;
};
export const categoryConfig = () => {
  const config1 = {
    height: 200,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        formatter: () => '品类1',
      },
    },
  };
  const config2 = {
    height: 200,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#66E0D1', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        formatter: () => '品类2',
      },
    },
  };
  const config3 = {
    height: 200,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#3CC565', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        formatter: () => '品类3',
      },
    },
  };
  return [config1, config2, config3];
};
