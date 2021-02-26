import { defineConfig } from 'mdf';

/**
 * @file 用户配置文件
 */

export default defineConfig({
  history: {
    type: 'hash',
  },

  publicPath: '/',

  framework: {
    type: 'vuex',
  },

  devServer: {
    port: 3000,
  },
});
