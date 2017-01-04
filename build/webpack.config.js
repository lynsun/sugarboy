var path = require('path')

module.exports = {
  entry: {
    app: './index.js',
    button: './packages/button/index.js',
    select: './packages/select/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, use: 'babel-loader'
      }
    ]
  }
}