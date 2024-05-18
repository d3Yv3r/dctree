import Home from "../../src/pages/Home";
import { MemoryRouter } from "react-router-dom";

const customMount = (component) => {
  cy.mount(<MemoryRouter>{component}</MemoryRouter>);
};

describe("HomePage.cy.jsx", () => {
  it("playground", () => {
    customMount(<Home />);

    cy.get(":nth-child(1) > a").should("have.text", "Dashboard");
  });
});
