Cypress.Commands.add("compareRequest", (filepath, selector) => {
        cy.readFile(filepath).then(function (data) {
        cy.get(selector).should('have.text', data.trim());
    });
});

Cypress.Commands.add("dropdownContainsValue", (selector) => {
       cy.get(selector, {timeout: 20000}).should('exist');
});
