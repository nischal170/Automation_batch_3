const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const {addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      const options = {
        webpackOptions: {
          module: {
            rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,
              },
            ],
          },
        ],
      },
    },
  };
  on('file:preprocessor', webpackPreprocessor(options));

      // implement node event listeners here
    },
    specPattern:"**/*.feature"
  },
});
