import React from 'react';
import Wrapper from '@/components/wrapper';
import { whoami } from '@/qy.history';

/**
 * @file 用户针对应用层框架的配置
 */

export default {
  // 这里的 args 只覆盖应用插件 config
  beforeRender(...args: any) {
    console.log('参数哦：', args);
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
