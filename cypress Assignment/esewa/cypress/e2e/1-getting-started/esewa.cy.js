/// <reference types="cypress" />

describe("esewa testcases", () => {
  beforeEach(() => {
    cy.visit("https://esewa.com.np/");
  });

  it("esewa Invalid login", () => {
    cy.get(".loginPart > :nth-child(1) > .form-control").type("9841111111");
    cy.get(":nth-child(2) > .form-control").type("invalidpassword",{log:false});
    cy.get(".btn-green").click();
    cy.get(".login-error-toast").contains("This eSewa ID is not active."); //This verifies the error message for invalid login
  });

  it("esewa valid login", () => {
    cy.get(".loginPart > :nth-child(1) > .form-control").type("9802321373");
    cy.get(":nth-child(2) > .form-control").type("Deactivated@561320",{log:false});
    cy.get(".btn-green").click();
    cy.get('.head-content > p').contains("You are logging in from a new browser. We have sent an OTP to 9802321373 to add this as your trusted browser.")
    
  });
});
