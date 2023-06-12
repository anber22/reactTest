import screenfull from 'screenfull';
import { ExpandOutlined, CompressOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import { useEffect, useState } from 'react';

function Fullscreen({ theme, bg }) {
  const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen);

  useEffect(() => {
    screenfull.on('change', () => {
      if (screenfull.isFullscreen) setFullScreen(true);
      else setFullScreen(false);
      return () => screenfull.off('change', () => {});
    });
  }, []);

  const handleFullScreen = () => {
    if (!screenfull.isEnabled) message.warning('当前您的浏览器不支持全屏 ❌');
    screenfull.toggle();
  };
  return (
    <Tooltip
      title={fullScreen ? '取消全屏' : '全屏'}
      color="blue"
      placement="bottom"
    >
      <div
        className={`${bg} w-8 h-8 flex justify-center items-center rounded-full  cursor-pointer`}
      >
        {fullScreen ? (
          <CompressOutlined className={theme} onClick={handleFullScreen} />
        ) : (
          <ExpandOutlined className={theme} onClick={handleFullScreen} />
        )}
      </div>
    </Tooltip>
  );
}
export default Fullscreen;
