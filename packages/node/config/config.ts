import { defineConfig } from 'mdf';

/**
 * @file 用户配置文件
 */

const MDF_ENV = process.env.MDF_ENV;
export default defineConfig({
  defines: {
    APP_AUTHOR: 'qy',
  },

  // fundamental | dva
  project: {
    type: 'hybrid',
    framework: 'dva',
    // persist: true, 持久化 redux
  },

  history: {
    type: 'hash',
  },

  publicPath: '/',

  devServer: {
    port: 3000,
  },

  chainWebpack(chain: any) {},

  vconsole: {
    enable: false,
  },

  // 响应式方案
  rem: {
    enable: true,
  },

  // 统计
  growingio: {
    enable: MDF_ENV === 'prod',
    // growingio 的 key
    key: 'ad6251cfbfcc4d7c',
    // 是否启用 hash 路由
    hashtag: true,
    // debug 模式
    debug: false,
  },
});
