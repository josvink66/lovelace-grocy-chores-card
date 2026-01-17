import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'grocy-chores-card.js',
  output: {
    dir: 'output',       // build-output blijft in output/
    format: 'es'
  },
  plugins: [nodeResolve()]
};
