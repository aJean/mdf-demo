// import { join } from 'path';
// import { writeFileSync } from 'fs';
// import { getRoutes } from './cli/routes';
// import { routesToJSON } from './cli/routesToJSON';

// let res: any = getRoutes({ root: join(__dirname, 'src/pages'), relDir: '' });
// // res = routesToJSON({ routes: res, config: {} });
// console.log(res);

// // writeFileSync(join(__dirname, '.tmp/routes.ts'), res, { encoding: 'utf-8' });

const code =
  '\n' +
  '{\n' +
  '  meta: {\n' +
  '    test: 12\n' +
  '  },\n' +
  '  async: true,\n' +
  "  chunkName: 'ddd',\n" +
  '  props(params) {\n' +
  '     console.log(params);\n' +
  '  }\n' +
  '}\n';
const propsReg = /props\s{0,}\(.*\)/gm
const res = code.replace(propsReg, `props: function(params)`)
console.log(res);
