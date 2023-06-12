import { useSelector } from 'react-redux';
import User from '../components/User';
import FullScreen from '../components/FullScreen';
import Info from '../components/Info';
import ThemeCheck from '../components/ThemeCheck';

function App() {
  const { setting } = useSelector((state) => state.layout);
  const theme =
    setting.header.theme === 'light'
      ? 'text-black text-sm'
      : 'text-white text-sm';
  const bg = setting.header.theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
  return (
    <div className="flex  flex-1 h-full items-center justify-end  space-x-5">
      <Info theme={theme} bg={bg} />
      <FullScreen theme={theme} bg={bg} />
      <ThemeCheck theme={theme} bg={bg} />
      <User />
    </div>
  );
}
export default App;
