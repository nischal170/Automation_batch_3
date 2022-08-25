const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://uat.ordering-dalle.ekbana.net/",
    "experimentalSessionAndOrigin":true
  },
  env:{
    "email":"",
    "password":""
    
  }
  

});