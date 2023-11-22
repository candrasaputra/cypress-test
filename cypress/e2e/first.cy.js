describe('my first interaction with web', () => {
    it('Submit Form', () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });

        cy.visit('https://demoqa.com/automation-practice-form');

        // import example fixtures
        cy.fixture('example').then((data) => {
            cy.get('#firstName').type(data.firstName);
            cy.get('input[placeholder="Last Name"').type(data.lastName);
        });

        // select first gender
        cy.get('input[name=gender][value=Male]').click({force: true});
        // input random phone number
        cy.get('#userNumber').type('0123456789');
        // select a subject
        cy.get('#subjectsInput').type('Maths');
        // select maths from dropdown
        cy.get('#react-select-2-option-0').click();
        // select one hobies
        cy.get('#hobbiesWrapper > div:nth-child(2)').click();
        // select a state
        cy.get('#state').click();
        // select on of state
        cy.get('#react-select-3-option-0').click();
        // select city
        cy.get('#city').click();
        // select one of city
        cy.get('#react-select-4-option-0').click();
        // click submit
        cy.get('#submit').click();


    })
});