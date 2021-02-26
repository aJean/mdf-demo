import typescript from 'rollup-plugin-typescript2';
import { TestPlugin, QyPlugin } from './src/rollup-plugin-test.ts';

/**
 * @file config
 */

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
    },
    {
      format: 'es',
      file: 'lib/bundle.esm.js',
    },
  ],
  plugins: [typescript(), TestPlugin(), QyPlugin()],
};
