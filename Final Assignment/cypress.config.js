const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://dev.suriname.codefirm.net/",
    "experimentalSessionAndOrigin":true,
    projectId: "71t4uk",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "mochawesome",
        mochawesomeReporterOptions: {
            reportDir: "cypress/reports/mocha",
            quite: true,
            overwrite: true,
            html: true,
            json: true
        }
    }
  },
  env:{
      accesstoken:'',
      url:"https://dev.surinamefe.codefirm.net/api",
      resp:"",
      email:"rajit@mailinator.com",
      password:"Admin@123",
      otp:"ae7Dpa"
  }
});
