import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import useRouteList from '@/routes/utils/useRouteList';
import AuthRouter from '@/routes/utils/authRouter';
// import { checkTheme } from '@/store/modules/layout';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

function App() {
  const dispatch = useDispatch();
  const { algorithm, token } = useSelector((state) => state.theme);
  const { permissionRouteList } = useSelector((state) => state.permission);
  const [routes, setRoutes] = useState([]);
  const GetRoutes = () => useRoutes(routes);
  useEffect(() => {
    setRoutes(useRouteList(permissionRouteList));
  }, [permissionRouteList]);

  useEffect(() => {
    if (algorithm === 'darkAlgorithm') {
      document.documentElement.classList.add(
        'dark',
        'bg-black',
        'text-gray-100',
      );
      document.documentElement.classList.remove('bg-gray-50', 'text-black');
    } else {
      document.documentElement.classList.remove(
        'dark',
        'bg-black',
        'text-gray-100',
      );
      document.documentElement.classList.add('bg-gray-50', 'text-black');
    }
    // dispatch(checkTheme(algorithm));
  }, [algorithm]);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme[algorithm],
          token,
        }}
        locale={zhCN}
      >
        <Router>
          <AuthRouter>
            <GetRoutes />
          </AuthRouter>
        </Router>
      </ConfigProvider>
      {/* {import.meta.env.MODE === 'development' ? <Settings /> : null} */}
    </>
  );
}

export default App;
