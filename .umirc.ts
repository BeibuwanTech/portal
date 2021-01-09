import { defineConfig } from 'umi';

export default defineConfig({
  title: '综合科技服务平台',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // ssr: {},
  // exportStatic: {},
});
