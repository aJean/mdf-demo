import { version } from './utils';

/**
 * @file 测试循环引用
 */

export function delay() {
  setTimeout(function () {
    console.log(version);
  }, 100);
}
