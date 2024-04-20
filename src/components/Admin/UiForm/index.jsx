import Form from "@/components/Form";
import { useState } from "react";
import storage from "@/storage";

export default function UiForm() {
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    storage.setUiStyle({ borderWidth, borderRadius });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Texto</h4>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Cor
        </label>
        <input type="color" className="form-control" />
      </div>
      <hr />
      <h4>Bordas</h4>
      <div className="row">
        <div className="col">
          <label htmlFor="" className="form-label">
            Cor
          </label>
          <input type="color" className="form-control" />
        </div>

        <div className="col">
          <label htmlFor="" className="form-label">
            Largura ({borderWidth}px)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={borderWidth}
            step="1"
            onChange={(event) => setBorderWidth(event.target.value)}
            className="form-range"
          />
        </div>
        <div className="col">
          <label htmlFor="range" className="form-label">
            Radius ({borderRadius}px)
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={borderRadius}
            onChange={(event) => setBorderRadius(event.target.value)}
            className="form-range"
          />
        </div>
        <div>
          <button className="btn btn-dark w-100 mt-3">Salvar</button>
        </div>
      </div>
    </Form>
  );
}
