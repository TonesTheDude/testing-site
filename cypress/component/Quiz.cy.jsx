import Quiz from '../../client/src/components/Quiz';
describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', {
            fixture: 'questions.json',
        }).as('getQuiz');
    })

   it("should render the quiz component", () => {
        cy.mount(<Quiz />);
   })
   it ("should start the quiz", () => {
        cy.mount(<Quiz />);
        cy.get(`button`).contains('Start Quiz').click();
   })
   it ("should pick the right answer", () => {
        cy.mount(<Quiz />);
        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
   })
   it ("should show score", () => {
        cy.mount(<Quiz />);
        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
        cy.get('.alert').contains(`Your score: 1/1`)
   })
      it ("should restart the quiz", () => {
        cy.mount(<Quiz />);
        cy.get(`button`).contains('Start Quiz').click();
        cy.get(`button`).contains('2').click();
        cy.get('.alert').contains(`Your score: 1/1`)
        cy.get(`button`).contains('Take New Quiz').click();
   })
});