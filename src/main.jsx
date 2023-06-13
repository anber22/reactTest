import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store/index';
import App from '@/App';
import 'virtual:svg-icons-register';
import '@/styles/base.css';
import '@/styles/main.css';
import '@/styles/antd.less';

// if (import.meta.env.MODE === 'development') {
//   worker.start();
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
