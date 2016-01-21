module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'bka/src/**/*.js',
      'build/index.js', // load compiled files due to the CommonJS module style
      'test/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['mocha', 'chai'],

    plugins : [
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha'
          ]
  });
};
