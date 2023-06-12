import { Tag } from 'antd';

export const userList = [
  {
    label: '用户名',
    value: '王立群',
  },
  {
    label: '实名认证',
    value: '已认证',
  },
  {
    label: '账号ID',
    value: 'wjlx-64751574',
  },
  {
    label: '手机号码',
    value: '177******73',
  },
  {
    label: '注册时间',
    value: '1995-06-30 21:27:03',
  },
];
export const infoList = [
  {
    label: '账号类型',
    value: '企业账号',
  },
  {
    label: '实名认证',
    value: '已认证',
  },
  {
    label: '认证时间',
    value: '1980-01-13 17:35:43',
  },
  {
    label: '法人姓名',
    value: '贺**',
  },
  {
    label: '法人证件类型',
    value: '中国身份证',
  },
  {
    label: '法人认证号码',
    value: '288************496',
  },
  {
    label: '企业名称',
    value: '院你越织格海',
  },
  {
    label: '企业证件类型',
    value: '企业营业执照',
  },
  {
    label: '组织机构代码',
    value: '4*******5',
  },
];
export const list = [
  {
    label: '登陆密码',
    description:
      '已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。',
  },
  {
    label: '密保问题',
    description: '您暂未设置密保问题，密保问题可以有效的保护账号的安全。',
  },
  { label: '安全手机', description: '已绑定： 177******73' },
  {
    label: '安全邮箱',
    description: '您暂未设置邮箱，绑定邮箱可以用来找回密码、接收通知等。',
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
