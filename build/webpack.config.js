var path = require('path')

module.exports = {
  entry: {
    app: './index.js',
    button: './packages/button/index.js',
    select: './packages/select/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader'
      }
    ]
  }
}