var webpack = require('./webpack.config.js');
webpack.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap'],
    },
    webpack: webpack,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
