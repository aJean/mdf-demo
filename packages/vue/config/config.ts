import { defineConfig } from 'mdf';

/**
 * @file 用户配置文件
 */

const MDF_ENV = process.env.MDF_ENV;
export default defineConfig({
  history: {
    type: 'hash',
  },

  publicPath: '/',

  // 工程配置
  project: {
    type: 'web',
    framework: 'vuex',
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
    enable: Boolean(MDF_ENV === 'prod'),
    dsn: 'http://0a81c3acc6764e4fae5eabbf127238a1@8.140.126.5:9000/2',
    org: 'sentry',
    project: 'ugc-panel',
  },
});
