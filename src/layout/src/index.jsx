import { useSelector } from 'react-redux';
import ALayout from './ALayout';
import BLayout from './BLayout/index';
import CLayout from './CLayout/index';

function Layout() {
  const { setting } = useSelector((state) => state.layout);
  if (setting.model === 'Admin') return <ALayout />;
  if (setting.model === 'Business') return <BLayout />;
  if (setting.model === 'Customer') return <CLayout />;
}
export default Layout;
