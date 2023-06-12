import { useState } from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import System from '../components/System';
import PageLayout from './PageLayout';
import ThemeLayout from './ThemeLayout';

function Settings() {
  const { token } = useSelector((state) => state.theme);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer autoFocus={false} placement="right" open={open} closable={false}>
        <div className="text-gray-400 text-xs mb-4">
          以下配置只在开发环境使用
        </div>
        <ThemeLayout />
        <PageLayout />
        <div
          className="absolute top-1/2 -left-8 w-8 h-8 flex items-center justify-center rounded-l cursor-pointer"
          onClick={onClose}
          style={{ background: token.colorPrimary }}
        >
          <CloseOutlined className="text-white text-xl" />
        </div>
      </Drawer>
      <div
        className="fixed top-1/2 right-0 rounded-full"
        style={{ zIndex: 999, background: token.colorPrimary }}
        onClick={showDrawer}
      >
        <System />
      </div>
    </>
  );
}
export default Settings;
