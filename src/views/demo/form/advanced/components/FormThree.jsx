import { Form, Input, Table, Typography, Card } from 'antd';
import { useState, useEffect } from 'react';

function EditableCell({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  editingKey,
  ...restProps
}) {
  let childNode = children;
  childNode =
    editable && record.key === editingKey ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
      >
        {children}
      </div>
    );
  return <td {...restProps}>{childNode}</td>;
}
function App({ value, onChange }) {
  const [form] = Form.useForm();
  const [data, setData] = useState(value || []);
  const [count, setCount] = useState(1);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  useEffect(() => {
    onChange(data);
  }, [data]);
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };
  const handleAdd = () => {
    const newData = {
      key: count,
      myName: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...newData,
    });
    setEditingKey(count);
    setData([...data, newData]);
    setCount(count + 1);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const defaultColumns = [
    {
      title: '姓名',
      dataIndex: 'myName',
      width: '25%',
      editable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Typography.Link title="Sure to cancel?" onClick={() => cancel()}>
              取消
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            修改
          </Typography.Link>
        );
      },
    },
  ];
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        editingKey,
        handleSave: save,
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Card bordered={false} title="成员管理">
        <Table
          pagination={false}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={columns}
          dataSource={data}
        />
        <div
          onClick={handleAdd}
          className="flex border rounded border-dashed cursor-pointer justify-center items-center py-1 mt-4"
        >
          <span> + 添加一行数据</span>
        </div>
      </Card>
    </Form>
  );
}
export default App;
