import baseConfig from './base';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactAntTreeSelect'
  }),
  externals: externals.node(),
  plugins: [
    plugins.clean(),
    plugins.copyStyles()
  ]
});
