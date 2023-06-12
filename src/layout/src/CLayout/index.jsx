import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCollapsed } from '@/store/modules/menu';
import Main from '@/layout/src/common/Main';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCollapsed(false));
  }, []);
  return (
    <section className="min-h-screen flex">
      <Main />
    </section>
  );
}
export default App;
