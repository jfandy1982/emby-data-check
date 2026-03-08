import type { Configuration } from 'webpack';

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        options: {
          plugins: ['istanbul'],
          configFile: false,
          babelrc: false,
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.(ts|js)$/,
      },
    ],
  },
} satisfies Configuration;
