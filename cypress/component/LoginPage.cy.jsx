import Login from "../../src/pages/Login";
import { MemoryRouter } from "react-router-dom";
import "./../../src/assets/bootstrap.min.css";

const customMount = (component) => {
  cy.mount(<MemoryRouter>{component}</MemoryRouter>);
};

describe("page/Login", () => {
  it("Testando renderização dos elementos", () => {
    customMount(<Login />);

    const label = ["Email", "Senha"];

    cy.get("label")
      .should("have.length", 2)
      .each((item, index) => {
        cy.wrap(item).should("have.text", label[index]);
      });

    cy.get('input[type="email"]').should("have.length", 1);

    cy.get('input[type="password"]').should("have.length", 1);
  });

  it("Testando a validação de campo obrigatório", () => {
    customMount(<Login />);

    cy.get("form button").click();

    cy.get("div.invalid-feedback.d-block")
      .should("have.length", 2)
      .each((item) => {
        cy.wrap(item).should("have.text", "Campo obrigatório!");
      });
  });

  it("Testando validação do campo email", () => {
    customMount(<Login />);

    cy.get('input[type="password"]').type("123456");

    cy.get("form button").click();

    cy.get('input[type="email"]')
      .parent()
      .find("div.invalid-feedback.d-block")
      .should("have.length", 1)
      .and("have.text", "Campo obrigatório!");
  });

  it("Testando validação do campo senha", () => {
    customMount(<Login />);

    cy.get('input[type="email"]').type("test@email.com");

    cy.get("form button").click();

    cy.get('input[type="password"')
      .parent()
      .find("div.invalid-feedback.d-block")
      .should("have.length", 1)
      .and("have.text", "Campo obrigatório!");
  });
});
