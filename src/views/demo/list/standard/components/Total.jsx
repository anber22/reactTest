import { Card } from 'antd';

function Total({ list }) {
  return (
    <Card bordered={false}>
      <div className="flex justify-evenly divide-x divide-gray-200 rounded">
        {list.map((item) => (
          <div
            className="flex-1 flex justify-center flex-col items-center space-y-3"
            key={item.title}
          >
            <div className="text-sm text-gray-300">{item.title}</div>
            <div className="text-2xl">{item.content}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
export default Total;
