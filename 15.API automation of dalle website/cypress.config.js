const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://dalle.com.np/api/v4/"
  },
  env:{
    apikey:"HzTXzarpsGmmCOUpj2fGnBmL1AEtSxII68JhaCozg8b9OXufVk"

  }
});
