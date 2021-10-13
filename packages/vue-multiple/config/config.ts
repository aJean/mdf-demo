import { defineConfig } from 'mdf';

/**
 * @file 用户配置文件
 */

const MDF_ENV = process.env.MDF_ENV;
export default defineConfig({
  history: {
    type: 'browser',
  },

  publicPath: '/',

  // 多入口模式
  multi: {
    index: 'pages',
    print: 'prints',
  },

  // 工程配置
  project: {
    type: 'web',
    framework: 'vue',
    smp: true,
  },

  devServer: {
    port: 3000,
  },

  // 工作服务器以及需要加载的中间件
  workServer: {
    port: 9100,
    proxy: true,
  },

  vconsole: {
    enable: false,
  },

  // 响应式方案
  rem: {
    enable: false,
  },

  // 异常收集
  sentry: {
    enable: false,
    dsn: 'https://0a81c3acc6764e4fae5eabbf127238a1@sentry.ai101test.com/2',
    org: 'sentry',
    project: 'ugc-panel',
  },
});
