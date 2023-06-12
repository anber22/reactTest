import { Image, Progress } from 'antd';

function Item({ data, children }) {
  return (
    <div className="w-full flex justify-around px-3 space-x-3">
      <div className="flex space-x-2 flex-1 ">
        <Image
          width={48}
          src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
        />
        <div className="space-y-2 flex-1">
          <div className="text-sm">{data.title}</div>
          <div className="text-sm text-gray-400">{data.description}</div>
        </div>
      </div>

      <div className="space-y-2 px-5">
        <div className="text-sm text-gray-400">负责人</div>
        <div className="text-sm text-gray-400">{data.name}</div>
      </div>
      <div className="space-y-2 px-5">
        <div className="text-sm text-gray-400">开始时间</div>
        <div className="text-sm text-gray-400">{data.time}</div>
      </div>
      <div className="w-60">
        <Progress percent={data.active} size="small" status="active" />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
}
export default Item;
