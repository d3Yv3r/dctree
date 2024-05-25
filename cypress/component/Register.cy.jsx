import Register from "../../src/pages/Register";
import { MemoryRouter } from "react-router-dom";
import "./../../src/assets/bootstrap.min.css";

const customMount = (component) => {
  cy.mount(<MemoryRouter>{component}</MemoryRouter>);
};

describe("page/Register", () => {
  it("Testando renderização dos itens do formulário", () => {
    customMount(<Register />);

    const label = ["Nome", "Sobrenome", "Email", "Senha", "Confirmar senha"];

    const placeholder = [
      "Digite seu nome",
      "Digite seu sobrenome",
      "Digite sua senha",
      "Digite novamente sua senha",
    ];

    cy.get("label")
      .should("have.length", 5)
      .each((item, index) => cy.wrap(item).should("have.text", label[index]));

    cy.get('input[type="text"]')
      .should("have.length", 2)
      .each((item, index) => {
        cy.wrap(item)
          .should("have.attr", "placeholder")
          .and("include", placeholder[index]);

        cy.get('input[type="email"]')
          .should("have.length", 1)
          .and("have.attr", "placeholder")
          .and("include", "Digite seu email");
      });

    cy.get('input[type="password"]')
      .should("have.length", 2)
      .each((item, index) => {
        cy.wrap(item)
          .should("have.attr", "placeholder")
          .and("include", placeholder[index + 2]);
      });
  });
});
