import React, { useState } from "react";
import Form from "@/components/Form";

export default function CreateLinkForm() {
  const [label, setLabel] = useState();
  const [link, setLink] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  let productLinks = window.localStorage.getItem("account-links");
  productLinks = JSON.parse(productLinks) ?? [];

  // productLinks = JSON.parse(productLinks) ? productLinks : []; -> mesma verificação que a de cima.

  console.log(productLinks);

  const handleSubmit = (event) => {
    event.preventDefault();

    productLinks.push({
      label,
      title,
      description,
      link,
    });

    window.localStorage.setItem("account-links", JSON.stringify(productLinks));
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Label
        </label>
        <input
          onChange={(event) => setLabel(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Link
        </label>
        <input
          onChange={(event) => setLink(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Título
        </label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Descrição
        </label>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
        ></textarea>
      </div>

      <div>
        <button className="btn btn-dark w-100">Criar Link</button>
      </div>
    </Form>
  );
}
