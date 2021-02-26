import React from 'react';
import Wrapper from '@/components/wrapper';
import { whoami } from '@/qy.history';

/**
 * @file 用户针对应用层框架的配置
 */

export default {
  // config 只覆盖应用插件
  beforeRender(...args: any) {
    console.log('参数：', args);
  },

  // wrap render function
  render(oldRender: Function) {
    console.log('custom-render', whoami());
    oldRender();
  },

  // add parent react root element
  appElement(Child: React.Component) {
    return React.createElement(Wrapper, null, Child);
  },

  // config app
  appOpts(opts: any) {
    opts.onError = function (e: any) {
      alert(e.message);
      e.preventDefault();
    };

    return opts;
  },
};
