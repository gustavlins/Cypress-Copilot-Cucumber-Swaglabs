const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
    // Altere para buscar apenas arquivos .feature
    specPattern: "cypress/e2e/**/*.feature",
    // Garante que o Cypress ignore os arquivos de passos JS no menu de testes
    excludeSpecPattern: "*.js"
  },
});
