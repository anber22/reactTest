import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function Model({ value, onChange }) {
  const list = [
    {
      model: 'defaultAlgorithm',
      title: '亮色主题',
      key: '0',
    },
    {
      model: 'darkAlgorithm',
      title: '暗色主题',
      key: '1',
    },
    {
      model: 'compactAlgorithm',
      title: '紧凑主题',
      key: '2',
    },
  ];
  return (
    <div className="flex space-x-8">
      {list.map((item) => (
        <Tooltip title={item.title} key={item.key}>
          <div
            className="w-12 h-12 rounded border  border-gray-100  bg-gray-200 relative"
            onClick={() => onChange(item.model)}
          >
            <div
              className={`${
                item.key === '1' ? 'bg-black' : 'bg-white'
              } absolute rounded-l left-0 top-0 h-full  w-3 z-30`}
            />
            <div
              className={`${
                item.key === '1' ? 'bg-black' : 'bg-white'
              } absolute rounded-t left-0 top-0 h-3 w-full z-20`}
            />
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
