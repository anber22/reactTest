import { Space, Table, Tag, Button } from 'antd';
import { useState, useEffect } from 'react';
import QueryList from '@/components/QueryList';

const query = [
  {
    fieId: 'name',
    label: '姓名',
    component: 'Input',
    span: 6,
    props: {
      maxLength: 20,
      placeholder: '请输入姓名',
    },
  },
  {
    fieId: 'age',
    label: '年龄',
    component: 'Input',
    span: 6,
    props: {
      maxLength: 20,
      placeholder: '请输入',
    },
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
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
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
function App() {
  const [data, setData] = useState([]);
  const getList = (params) => {
    console.log('params', params);
    setData(tableData);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <QueryList
      title="查询表单"
      query={query}
      onSearch={(params) => getList(params)}
      onReset={(params) => getList(params)}
    >
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <Button type="primary">新增</Button>
          <Button>批量导入</Button>
        </div>
        <Button>批量下载</Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </QueryList>
  );
}
export default App;
