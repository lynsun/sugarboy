var path = require('path')

var defaultConfig = {
  entry: {
    index: './index.js'
  },
  output: {
    path: './lib',
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

if (process.env.NODE_ENV === 'standalone') {

  defaultConfig.entry = {
    'sugar-button': './packages/button/index.js',
    'sugar-select': './packages/select/index.js'
  }

  defaultConfig.output.path = './dist';

  defaultConfig.externals = {
    'sugar-button':'sugar-button',
    'sugar-select':'sugar-select'
  }
}

if (process.env.NODE_ENV === 'integrated') {
  defaultConfig.entry = {
    'button': './packages/button/index.js',
    'select': './packages/select/index.js'
  }

  defaultConfig.externals = {
    'sugar-button': 'lib/button',
    'sugar-select': 'lib/select'
  }
}

if (process.env.NODE_ENV == 'dist') {
  defaultConfig.entry = {
    index: './index.js'
  }
}



module.exports = defaultConfig;
