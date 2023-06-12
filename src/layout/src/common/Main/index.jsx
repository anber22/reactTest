import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import PageContent from '@/layout/src/common/PageContent';
import Menu from '@/layout/src/common/Menu';
import TagsViews from '@/layout/src/common/TagsViews';
import Logo from '@/layout/src/common/Logo';
import Header from '@/layout/src/common/Header';
import Breadcrumb from '@/layout/src/common/Breadcrumb/index';

function App() {
  const { setting } = useSelector((state) => state.layout);

  return (
    <Layout className="flex-1">
      {setting.model === 'Customer' ? (
        <Header>
          <Logo theme={setting.header.theme} />
          <Menu />
        </Header>
      ) : (
        <Header>
          <Breadcrumb />
        </Header>
      )}
      {setting.tags.hidden ? <TagsViews /> : null}
      <Layout>
        <PageContent />
      </Layout>
    </Layout>
  );
}
export default App;
