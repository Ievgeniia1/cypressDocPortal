import CreateBankAccount from "./pages/createBank";
const data = require("/Users/ievgeniia_ganzina/IntellijWorkspace/uitesting/cypress/fixtures/inputData.json");

describe('Update Bank Account - Verify Request and Response examples for selected filters', function() {

    before(function() {
        cy.visit('https://beta-portal.hyperwallet.com/docs/api/v3/resources/bank-accounts/update');

        //Wait for dropdowns load
        cy.get('#react-select-2--value-item', {timeout: 10000}).should('exist');
        cy.get('#react-select-3--value-item', {timeout: 10000}).should('exist');
    });



    Object.keys(data).forEach(function(dataSet){
        it(`Test Case For: ${dataSet}`, function() {

            const createBankAccount = new CreateBankAccount();

            createBankAccount.getButton(data[dataSet].profileType).click();
            createBankAccount.getCountryDropdown().click();
            createBankAccount.selectFromDropdown(data[dataSet].countryName).click();
            createBankAccount.getCurrencyDropdown().click();
            createBankAccount.selectFromDropdown(data[dataSet].transferMethodCurrency).click();


            // function (filename, selector)
            // cy.readFile('cypress/fixtures/updateBank/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/javaRequest.txt').then(function (data) {
            //     createBankAccount.getJavaRequest().should('have.text', data.trim());
            // });
            //
            // cy.readFile('cypress/fixtures/updateBank/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/curlRequest.txt').then(function (data) {
            //     createBankAccount.getCurlRequest().should('have.text', data.trim());
            // });
            //
            // cy.readFile('cypress/fixtures/updateBank/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/nodeRequest.txt').then(function (data) {
            //     createBankAccount.getNodeRequest().should('have.text', data.trim());
            // });
            //
            // cy.readFile('cypress/fixtures/updateBank/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/phpRequest.txt').then(function (data) {
            //     createBankAccount.getPhpRequest().should('have.text', data.trim());
            // });
            //
            // cy.readFile('cypress/fixtures/updateBank/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/pythonRequest.txt').then(function (data) {
            //     createBankAccount.getPythonRequest().should('have.text', data.trim());
            // });


            // this prints data to console to copy from there

            // cy.get('pre.language-python').then(function (data1) {
            //     console.log('Python');
            //     console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD')
            //     console.log((data1).text().trim());
            // });




        })
    });
});
