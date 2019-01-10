'use strict'; // eslint-disable-line strict

const path = require('path');
const fs = require('fs');
const packageJson = require('./package.json');

const fileInfo = path.parse(packageJson.main);

const makesure = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return dir;
};

module.exports = {
  mode: 'production',
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    libraryTarget: 'umd',
    path: path.join(process.cwd(), makesure(fileInfo.dir)),
    filename: fileInfo.base
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  module: {
    rules: [
      // Process application JS with Babel.
      // The preset includes JSX, Flow, TypeScript and some ESnext features.
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.join(process.cwd(), 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                  }
                }
              }
            ]
          ],
          cacheDirectory: true,
          // Save disk space when time isn't as important
          cacheCompression: true,
          compact: true
        }
      }
    ]
  }
};
