import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function Model({ value, onChange, disabled }) {
  const list = [
    {
      model: 'light',
      title: '亮色',
      key: '1',
    },
    {
      model: 'dark',
      title: '暗色',
      key: '2',
    },
  ];
  return (
    <div className="flex space-x-8">
      {list.map((item) => (
        <Tooltip title={item.title} key={item.key}>
          <div
            className={`${
              disabled ? 'cursor-not-allowed' : ''
            } w-12 h-12 rounded border border-1 border-gray-50  bg-gray-200 relative`}
            onClick={() => (disabled ? null : onChange(item.model))}
          >
            {item.key === '1' ? (
              <div className="bg-light absolute rounded-t left-0 top-0 h-3 w-full" />
            ) : (
              <div className="bg-dark absolute rounded-t left-0 top-0 h-3 w-full" />
            )}

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
