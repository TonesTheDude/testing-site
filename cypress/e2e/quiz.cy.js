describe('Quiz Component', () => {
    beforeEach(() => {
        cy.visit('/') 
         
    })

   it ("should start the quiz", () => {

        cy.get(`button`).contains('Start Quiz').click();
   })
   it ("should pick the right answer", () => {

        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
   })
   it ("should show score", () => {

        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
   })
      it ("should restart the quiz", () => {

        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('2').click();
        cy.get(`button`).contains('Take New Quiz').click();
   })
});
