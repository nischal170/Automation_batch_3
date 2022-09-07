const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        checkfile_exists(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8')
          }
      
          return null
        },
      })
      // implement node event listeners here
    },
    projectId: "ogxye3",
    baseUrl: "https://uat.ordering-dalle.ekbana.net/api/v4/"
  },
  env:{
    apikey:"q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6",
    accesstoken:''

  }
});
