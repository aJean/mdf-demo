/**
 * @file
 */

export function TestPlugin() {
  return {
    name: 'TestPlugin',

    resolveId(importee) {
      console.log('test', importee);
      // 要返回正确路径，下一个插件将不会再处理相同的 importee
      if (importee === './src/index.ts') {
        return '/Users/qy/Sites/mdf-demo/packages/rollup/src/index.ts';
      }

      return null;
    },

    load(id) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // "virtual-module" 的源码
      }

      return null;
    },

    transform(source, id) {
      console.log('t', id);
      // return { code: 'export const number = 123;' };
    },
  };
}

/**
 * 测试 resolveId 的作用
 */
export function QyPlugin() {
  return {
    name: 'QyPlugin',

    resolveId(importee) {
      console.log('qy', importee);

      return null;
    },
  };
}
