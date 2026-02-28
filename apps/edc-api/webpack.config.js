const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/edc-api'),
  },
  devtool: isProduction ? 'hidden-source-map' : 'eval-cheap-module-source-map',
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: isProduction,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
