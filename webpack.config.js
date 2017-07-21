'use strict'

const path = require('path');
const webpack = require("webpack");
const env = process.env.NODE_ENV;

let config = {
  /*entry: {
    mid :'./Data.unity3d.localized/ts/mid/main.ts',
    back:'./Data.unity3d.localized/ts/back/back.ts',
    popup:'./Data.unity3d.localized/ts/popup/popup.ts'
  },
  output: {
    filename: '[name].js'
  },*/
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      {
          test: /\.ts$/,
          exclude: /(node_modules)/,
          loader: 'ts-loader'
        }
    ]
  }
}

module.exports = config;
