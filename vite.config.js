/* eslint-disable no-param-reassign */
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import alias from "@rollup/plugin-alias";
// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [
      react(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: '[name]',
      }),
      // {
      //   name: 'singleHMR',
      //   handleHotUpdate({ modules }) {
      //     // eslint-disable-next-line array-callback-return
      //     modules.map((m) => {
      //       m.importedModules = new Set();
      //       m.importers = new Set();
      //     });

      //     return modules;
      //   },
      // },
    ],
    build: {
      sourcemap: false,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    test: {
      css: false,
      include: ['src/**/__tests__/*'],
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.js',
      clearMocks: true,
    },
    server: {
      proxy: {
        // 代理所有 /api 的请求
        [env.VITE_API_BASE]: {
          // 代理请求之后的请求地址
          target: env.VITE_API_URL,
          // 跨域配置
          changeOrigin: true,
        },
      },
    },
  });
};
