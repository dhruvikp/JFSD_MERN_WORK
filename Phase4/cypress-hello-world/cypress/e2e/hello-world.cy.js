describe("Example.com Hello WOrld", () => {
    beforeEach(() => {
        cy.visit("https://example.com")
    });

    it("should open example.com", () => {
        cy.contains("Example Domain").should("be.visible")
        cy.contains("This domain is for use in documentation").should("be.visible")
        cy.title().should("eq", "Example Domain");
        cy.url().should("eq", "https://example.com/")
        cy.contains("Learn more").should("be.visible");
        cy.contains("Learn more").should("have.attr", "href","https://iana.org/domains/example")
        cy.get("h1").should("be.visible");
        cy.get("h1").should("have.text", "Example Domain");
    });

    it("should navigate when Learn more is clicked", () => {
  
  
        cy.get("a").contains("Learn more").click({force:true});
    })
});