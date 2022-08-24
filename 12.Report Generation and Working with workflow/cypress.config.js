const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://koklassv4-orderingdev-ms.ekbana.net/system/login",
    
    projectId: "kckprg",
    "experimentalSessionAndOrigin":true,
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
});
