// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
  config.set({

    plugins: [
      require("karma-jasmine"),
      require("karma-jasmine-given"),
      require("karma-firefox-launcher"),
      // require('karma-chrome-launcher'),
      require("karma-mocha-reporter"),
      require("karma-jasmine-diff-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma")
    ],

    // TRIGGER
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,

    // BUILD
    frameworks: ["jasmine-given", "jasmine", "@angular-devkit/build-angular"],
    basePath: "",
    // angularCli: {
    //   environment: 'dev'
    // },

    // RUN
    port: 9876,
    // browsers: ['ChromeHeadless'],
    browsers: ["FirefoxHeadless"],
    customLaunchers: {
      FirefoxHeadless: {
        base: "Firefox",
        flags: ["-headless"],
      },
    },

    // REPORT
    colors: true,
    logLevel: config.LOG_INFO,

    reporters: ["jasmine-diff", "mocha"],

    jasmineDiffReporter: {
      color: {
        actualBg: "bgBlue",
        actualWhitespaceBg: "bgBlue",
        expectedBg: "bgMagenta",
        expectedWhitespaceBg: "bgMagenta",
      }
    },

    mochaReporter: {
      output: "minimal",
    },

    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/lso-cockpit"),
      fixWebpackSourcePaths: true,
      reports: ["html", "lcovonly", "text-summary"],
    }
  });
};
