const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://dev.suriname.codefirm.net/",
    "experimentalSessionAndOrigin":true,
  },
  env:{
      accesstoken:'',
      url:"https://dev.surinamefe.codefirm.net/api",
      resp:""
  


  }
});
