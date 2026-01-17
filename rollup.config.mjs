import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'grocy-chores-card.js',
  output: {
    file: 'output/grocy-chores-card.js',
    format: 'es'
  },
  plugins: [nodeResolve()]
};