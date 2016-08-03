/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'em-fb-chat',
    environment: environment,
    // contentSecurityPolicy: {'connect-src' : "'self' wss://*.firebaseio.com"} ,
    firebase: 'https://appchat-970e2.firebaseio.com/',
    // firebaseInit: {
    //   apiKey: "AIzaSyDp2DSW_59bKonjGYVrTHy3kNa4I_4Kj60",
    //   authDomain: "appchat-970e2.firebaseapp.com",
    //   databaseURL: "https://appchat-970e2.firebaseio.com",
    //   storageBucket: "appchat-970e2.appspot.com",
    // },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
