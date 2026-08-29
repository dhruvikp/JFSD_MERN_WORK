describe("Hello world", () => {
    it("should open the application", () => {
        cy.visit("http://localhost:3000")
        cy.contains("cypress testing playground").should("be.visible")
    })

})