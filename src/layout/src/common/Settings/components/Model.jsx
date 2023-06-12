import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function Model({ value, onChange }) {
  const list = [
    {
      model: 'Business',
      title: '侧边菜单布局',
      key: '1',
    },

    {
      model: 'Customer',
      title: '顶部菜单布局',
      key: '2',
    },
    {
      model: 'Admin',
      title: '混合菜单布局',
      key: '0',
    },
  ];
  return (
    <div className="flex space-x-8">
      {list.map((item) => (
        <Tooltip title={item.title} key={item.key}>
          <div
            className="w-12 h-12 rounded border border-1 border-gray-50  bg-gray-200 relative"
            onClick={() => onChange(item.model)}
          >
            {item.key === '0' ? (
              <div className="bg-light absolute rounded-l left-0 top-0 h-full  w-3 z-10" />
            ) : null}
            {item.key === '1' ? (
              <div className="bg-light absolute rounded-l left-0 top-0 h-full  w-3 z-30" />
            ) : null}
            <div className="bg-dark absolute rounded-t left-0 top-0 h-3 w-full z-20" />
            {value === item.model ? (
              <CheckOutlined className="absolute text-black bottom-1 right-1" />
            ) : null}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
export default Model;
