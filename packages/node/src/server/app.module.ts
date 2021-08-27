import { Helper } from '@mdfjs/node';
import OneModule from './one/one.module';
import PromModule from './prom/prom.module';
import PromMiddleware from './prom.middleware';

/**
 * @file 启动模块
 */

export default Helper.createAppModule({
  imports: [OneModule, PromModule],
  middlewares: [PromMiddleware],

  /**
   * 自定义 http 异常处理
   */
  handleHttpError(err, req, res) {
    res.send({
      code: 200,
      msg: err.message,
      from: 'mdf-node',
    });
  },
});
