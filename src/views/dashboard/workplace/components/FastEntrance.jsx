import { Card, Typography } from 'antd';
import { fastList } from './data';
import { getIcon } from '@/utils/utils';

function App({ className, style }) {
  return (
    <Card
      bordered={false}
      className={className}
      style={style}
      title="快捷入口"
      extra={<Typography.Link>查看更多</Typography.Link>}
    >
      <div className="flex flex-wrap">
        {fastList.map((item) => (
          <div
            className="w-1/3 flex justify-center items-center flex-col space-y-2 mb-5 cursor-pointer group"
            key={`${item.text}-11`}
          >
            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded group-hover:bg-blue-100">
              {getIcon(item.icon)}
            </div>
            <div className="text-xs text-gray-500 group-hover:text-blue-500">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
export default App;
