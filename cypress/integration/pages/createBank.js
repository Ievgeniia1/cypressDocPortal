class CreateBankAccount {

    getButton(value){
        return cy.get(`#${value}`)
    }

    getCountryDropdown(){
        return cy.get('#react-select-2--value > .Select-value')
    }

    getCurrencyDropdown() {
        return cy.get('#react-select-3--value > .Select-value')
    }


    selectFromDropdown(value){
        return cy.get('.Select-option').contains(value)
    }

    getCurlRequest() {
        return cy.get('#sdkExamples pre.language-json')
    }

    getJavaRequest() {
        return cy.get('#sdkExamples pre.language-java')
    }

    getNodeRequest() {
        return cy.get('#sdkExamples pre.language-javascript')
    }

    getPhpRequest() {
        return cy.get('#sdkExamples pre.language-php')
    }

    getPythonRequest() {
        return cy.get('#sdkExamples pre.language-python')
    }

    getResponse() {
        return cy.get('h4').contains('Response').parent('div').find('code.language-json')
    }


}
export default CreateBankAccount;
