import CreateBankAccount from "./pages/createBank";
const inputData = require("/Users/ievgeniia_ganzina/IntellijWorkspace/uitesting/cypress/fixtures/inputData.json");

describe('Create Bank Account - Verify Request and Response examples for selected filters', function() {

    before(function() {
        cy.visit('https://qarelease-portal.paylution.com/docs/api/v3/resources/bank-accounts/create',{timeout:10000});

        cy.server().route("POST", '/graphql').as('dataGet');
        cy.wait('@dataGet',{timeout: 10000 }).its('status').should('eq', 200)
    });

    Object.keys(inputData).forEach(function(dataSet){
        it(`Test Case For: ${dataSet}`, function() {
            const createBankAccount = new CreateBankAccount();
            const set = inputData[dataSet];

            const requestExamples = 'cypress/fixtures/createBank/'
                +set.transferMethodCountry+"/"
                +set.transferMethodCurrency+"/"
                +set.type+"/"
                +set.profileType;


            createBankAccount.getButton(set.profileType).click();
            createBankAccount.getCountryDropdown().click();
            createBankAccount.selectFromDropdown(set.countryName).click();
            createBankAccount.getCurrencyDropdown().click();
            createBankAccount.selectFromDropdown(set.transferMethodCurrency).click();


            cy.compareRequest(requestExamples+'/javaRequest.txt','#sdkExamples pre.language-java');
            cy.compareRequest(requestExamples+'/curlRequest.txt','#sdkExamples pre.language-json');
            cy.compareRequest(requestExamples+'/nodeRequest.txt','#sdkExamples pre.language-javascript');
            cy.compareRequest(requestExamples+'/phpRequest.txt','#sdkExamples pre.language-php');
            cy.compareRequest(requestExamples+'/pythonRequest.txt','#sdkExamples pre.language-python');
        })
    });
});
