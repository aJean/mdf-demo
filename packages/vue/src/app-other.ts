/**
 * @file other 项目配置
 */

export default {
  // config 只覆盖应用插件
  beforeRender(config: any, app: any) {
    console.log(`应用插件配置【${process.env.PRO_NAME!}】`, config);
  },
};