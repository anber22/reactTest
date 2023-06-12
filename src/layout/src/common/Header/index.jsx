import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Operation from '@/layout/src/common/Operation';

function Header({ children }) {
  const { isCollapse } = useSelector((state) => state.menu);
  const { algorithm } = useSelector((state) => state.theme);
  const { setting } = useSelector((state) => state.layout);
  return (
    <div
      style={{
        height: `${setting.header.height}px`,
      }}
    >
      <div
        className={`${
          setting.header.fix ? 'fixed top-0 right-0 z-50' : 'w-full'
        } `}
        style={{
          width:
            setting.model === 'Business' && setting.header.fix
              ? `calc(100% - ${isCollapse ? '48px' : '208px'})`
              : '100%',
          height: `${setting.header.height}px`,
        }}
      >
        <Layout.Header
          className={`${
            setting.header.theme === 'light' && algorithm !== 'darkAlgorithm'
              ? 'bg-white'
              : 'bg-dark'
          }  px-4 flex items-center justify-between space-x-4 `}
          style={{
            height: `${setting.header.height}px`,
          }}
        >
          {children}
          <Operation />
        </Layout.Header>
      </div>
    </div>
  );
}
export default Header;
