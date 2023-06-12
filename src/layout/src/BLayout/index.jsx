import { useSelector } from 'react-redux';
import Menu from '@/layout/src/common/Menu';
import Logo from '@/layout/src/common/Logo';
import Collapse from '@/layout/src/common/Collapse';
import Main from '@/layout/src/common/Main';

function App() {
  const { setting } = useSelector((state) => state.layout);
  const fixLeftClass = 'fixed top-0 left-0';
  const { isCollapse } = useSelector((state) => state.menu);

  return (
    <section className="min-h-full flex">
      <div
        style={{ width: isCollapse ? '48px' : '208px' }}
        className="transition-all duration-300 ease-in-out min-h-full relative"
      >
        <div
          style={{
            width: isCollapse ? '48px' : '208px',
          }}
          className={`${
            setting.menu.fix ? fixLeftClass : ''
          } h-full flex flex-col`}
        >
          <Logo
            isCollapse={isCollapse ? '1' : '2'}
            theme={setting.menu.theme}
            className="shadow-inner"
          />
          <Menu />
          <Collapse />
        </div>
      </div>
      <Main />
    </section>
  );
}
export default App;
