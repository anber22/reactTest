import { Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function ThemeColor({ value, onChange }) {
  const list = [
    {
      color: '#1677ff',
      title: '拂晓蓝(默认)',
    },
    {
      color: '#A71B1E',
      title: '薄暮',
    },
    {
      color: '#AE3E17',
      title: '火山',
    },
    {
      color: '#B8831C',
      title: '日暮',
    },
    {
      color: '#279794',
      title: '明青',
    },
    {
      color: '#509826',
      title: '极光绿',
    },
    {
      color: '#22399C',
      title: '极客蓝',
    },
    {
      color: '#60339A',
      title: '酱紫',
    },
  ];
  return (
    <div className="flex space-x-3">
      {list.map((item) => (
        <Tooltip title={item.title} key={item.color}>
          <div className="relative">
            <div
              className="w-6 h-6 rounded"
              style={{ background: item.color }}
              onClick={() => onChange(item.color)}
            />
            {value === item.color ? (
              <CheckOutlined className="absolute text-white text-xs bottom-1 right-1" />
            ) : null}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}
export default ThemeColor;
