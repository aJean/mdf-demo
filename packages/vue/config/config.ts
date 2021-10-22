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

  // 工程配置
  project: {
    type: 'web',
    framework: 'vue',
    smp: true,
    // 多入口配置
    multi: {
      index: 'pages',
      other: 'pages-other',
    },
  },

  devServer: {
    port: 3000,
  },

  // 工作服务器以及需要加载的中间件
  workServer: {
    port: 9200,
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
  },
});
