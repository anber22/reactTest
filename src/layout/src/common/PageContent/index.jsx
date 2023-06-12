import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

function PageContent() {
  return (
    <Layout.Content>
      <div className="p-6 h-full relative">
        <Outlet />
      </div>
    </Layout.Content>
  );
}
export default PageContent;
