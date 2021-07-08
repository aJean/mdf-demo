import { Helper } from '@mdfjs/node';
import OneModule from './one/one.module';

/**
 * @file 启动模块
 */

export default Helper.createAppModule({ imports: [OneModule] });
