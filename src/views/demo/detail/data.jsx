import { Tag } from 'antd';

export const list1 = [
  {
    label: '取货单号',
    value: '1000000000',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  { label: '状态', value: '已取货', span: 1, labelStyle: '', contentStyle: '' },
  {
    label: '销售单号',
    value: '1234123421',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  {
    label: '子订单',
    value: '1231233',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
];
export const list2 = [
  {
    label: '用户姓名',
    value: '王小明',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  {
    label: '联系电话',
    value: '18200000000',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  {
    label: '常用快递',
    value: '菜鸟仓储',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  {
    label: '取货地址',
    value: '浙江省杭州市西湖区',
    span: 1,
    labelStyle: '',
    contentStyle: '',
  },
  { label: '备注', value: '无', span: 1, labelStyle: '', contentStyle: '' },
];
export const tabList = [
  {
    key: 'tab1',
    tab: '操作日志一',
  },
  {
    key: 'tab2',
    tab: '操作日志二',
  },
  {
    key: 'tab3',
    tab: '操作日志三',
  },
];
export const columns = [
  {
    title: '商品编号',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{`111${text}`}</a>,
  },
  {
    title: '商品名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '商品条码',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '状态',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];
export const data = [
  {
    key: '1',
    name: '1234561',
    age: '矿泉水 550ml',
    address: '12421432143214321',
    tags: ['成功'],
  },
  {
    key: '2',
    name: '123112323412321561',
    age: '凉茶 300ml',
    address: '12421432143214321',
    tags: ['成功'],
  },
  {
    key: '3',
    name: '65571234561',
    age: '薯片',
    address: '12421432143214321',
    tags: ['成功'],
  },
];
