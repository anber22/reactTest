import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import Menu from '@/layout/src/common/Menu';
import Collapse from '@/layout/src/common/Collapse';
import PageContent from '@/layout/src/common/PageContent';
import TagsViews from '@/layout/src/common/TagsViews';
import Logo from '@/layout/src/common/Logo';
import Header from '@/layout/src/common/Header';
import Breadcrumb from '@/layout/src/common/Breadcrumb/index';

function App() {
  const { setting } = useSelector((state) => state.layout);
  const { isCollapse } = useSelector((state) => state.menu);
  const { algorithm } = useSelector((state) => state.theme);
  return (
    <section className="min-h-full flex flex-col">
      <Header height={setting.header.height}>
        <Logo theme={setting.header.theme} />
        <Breadcrumb />
      </Header>

      <div className="flex flex-1">
        <div
          style={{
            width: isCollapse ? '48px' : '208px',
          }}
          className="transition-all duration-300 ease-in-out relative"
        >
          <div
            style={{
              width: isCollapse ? '48px' : '208px',
              height: `${
                setting.menu.fix
                  ? `calc(100% - ${setting.header.height}px)`
                  : '100%'
              }`,
              top: `${setting.header.height}px`,
            }}
            className={`${setting.menu.fix ? 'fixed left-0' : ''}  ${
              setting.menu.theme === 'light' && algorithm !== 'darkAlgorithm'
                ? ' border-t border-gray-50'
                : ''
            } flex flex-col`}
          >
            <Menu />
            <Collapse />
          </div>
        </div>
        <Layout>
          {setting.tags.hidden ? <TagsViews /> : null}
          <Layout>
            <PageContent />
          </Layout>
        </Layout>
      </div>
    </section>
  );
}
export default App;
