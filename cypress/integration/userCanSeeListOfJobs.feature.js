describe('User can see job list', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('#cv-tab').click();
    })

    it('displays coding school', () => {
        cy.get('#cv-1').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Craft Academy');
            cy.get('.description').should('contain', 'Full Stack Developer');
        })
    })

    it('displays university', () => {
        cy.get('#cv-2').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'University of Technology, Jamaica');
            cy.get('.description').should('contain', 'Forensic Chemistry');
        })
    })

    it('displays college', () => {
        cy.get('#cv-3').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Portmore Community College');
            cy.get('.description').should('contain', 'Applied Science');
        })
    })

    it('displays wahlburger', () => {
        cy.get('#cv-4').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Wahlburger,USA');
            cy.get('.description').should('contain', 'Cook');
        })
    })

    it('displays Dennys', () => {
        cy.get('#cv-5').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Dennys,USA');
            cy.get('.description').should('contain', 'Cook');
        })
    })

    it('displays walmart', () => {
        cy.get('#cv-6').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Walmart,USA');
            cy.get('.description').should('contain', 'Store Clerk');
        })
    })

    it('displays Broadway Grand Prix', () => {
        cy.get('#cv-7').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Broadway Grand Prix, USA');
            cy.get('.description').should('contain', 'Park Attendant');
        })
    })

    it('displays chula vista', () => {
        cy.get('#cv-8').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Chula Vista Resort Water & Theme Park, USA');
            cy.get('.description').should('contain', 'Life Guard');
        })
    })

})
