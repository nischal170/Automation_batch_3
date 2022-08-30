const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://uat.ordering-dalle.ekbana.net/api/v4/"
  },
  env:{
    apikey:"q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6",
    accesstoken:''

  }
});
