import React from 'react';

/**
 * @file 用户针对应用层框架的配置
 */

export default {
  // config 只覆盖应用插件
  beforeRender(config: any) {
    console.log('hybrid 项目 -- client', config);
  },
};