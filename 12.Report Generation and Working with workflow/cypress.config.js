const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }, 
    
    projectId: "kckprg",
    "experimentalSessionAndOrigin":true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        reporterEnabled: "mochawesome",
        mochawesomeReporterOptions: {
            reportDir: "cypress/reports/mocha",
            quite: true,
            overwrite: false,
            html: true,
            json: true
        }
    }
  },
});
