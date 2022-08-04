const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportWidth: 2000,
    viewportHeight: 1000,
    specPattern:'**/*.spec.js'


  },
  env:{
    "url":"http://www.abc.com"
  }
});
