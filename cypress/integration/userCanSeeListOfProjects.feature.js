describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#projects-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#project-1').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'CAR CENTRAL');
        cy.get('.description').should('contain', 'We buy and sell cars for the best price. We are the most reliable car trading company worldwide. We buy and sell cars for the best price. We are the most reliable car trading company worldwide');
      })
    });
  
    it('displays second project', () => {
      cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'BMI Calculator');
        cy.get('.description').should('contain', 'BMI calcuator is for measuring body fat based on height and weight that applies to adult men and women.');
      })
    });
  
    it('displays third project', () => {
      cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Fizz buzz');
        cy.get('.description').should('contain', "A fun game to play and improve your mathematics skills.");
      })
    });  
  });