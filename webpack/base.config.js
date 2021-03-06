var project = require('../project.config');
var path = require('path');
var rules = require('./rules');


module.exports = {
  entry: {
    index: './src/js/'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(project.root, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json']
  },
  module: {
    rules: [
      rules.scssLoader,
      rules.awesomeTypeScriptLoader,
      rules.sourceMapLoader
    ]
  }
};
