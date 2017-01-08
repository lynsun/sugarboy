var path = require('path')

var defaultConfig = {
  entry: {
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

if (process.env.NODE_ENV === 'comp') {
  defaultConfig.externals = {
    'sugar-button':'sugar-button',
    'sugar-select':'sugar-select'
  }
}

if (process.env.NODE_ENV === 'common') {
  defaultConfig.entry = {
    app: './index.js'
  }
}



module.exports = defaultConfig;
