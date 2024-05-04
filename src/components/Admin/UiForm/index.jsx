import Form from "@/components/Form";
import { useState } from "react";
import storage from "@/storage";
import AdminSection from "../AdminSection";

export default function UiForm() {
  const [color, setColor] = useState(storage.getUiStyle("color"));
  const [backgroundColor, setBackgroundColor] = useState(
    storage.getUiStyle("backgroundColor")
  );
  const [textAlign, setTextAlign] = useState(
    storage.getUiStyle("textAlign", "start")
  );
  const [fontSize, setFontSize] = useState(storage.getUiStyle("fontSize", 14));
  const [borderColor, setBorderColor] = useState(
    storage.getUiStyle("borderColor")
  );
  const [borderWidth, setBorderWidth] = useState(
    storage.getUiStyle("borderWidth", 1)
  );
  const [borderRadius, setBorderRadius] = useState(
    storage.getUiStyle("borderRadius", 1)
  );

  const [hoverEnabled, setHoverEnabled] = useState(false);

  const [styleHover, setStyleHover] = useState(storage.getUiStyleHover());

  const options = [
    {
      text: "Começo",
      value: "start",
    },
    {
      text: "Centro",
      value: "center",
    },
    {
      text: "Final",
      value: "end",
    },
  ];

  const statusOption = [
    { text: "Desabilitado", value: "0" },
    { text: "Habilitado", value: "1" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    storage.setUiStyle({
      color,
      textAlign,
      fontSize,
      borderColor,
      borderWidth,
      borderRadius,
      backgroundColor,
    });

    if (!hoverEnabled) {
      storage.setUiStyleHover({});
      return;
    }

    storage.setUiStyleHover(styleHover);
  };

  return (
    <>
      <h1>Ui</h1>
      <Form onSubmit={handleSubmit}>
        <AdminSection title="Texto e Cor de Fundo">
          <div className="col">
            <label htmlFor="" className="form-label">
              Cor
            </label>
            <input
              type="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
              className="form-control form-control-color w-100"
            />
          </div>
          <div className="col">
            <label htmlFor="" className="form-label">
              Cor de Fundo
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(event) => {
                setBackgroundColor(event.target.value);
              }}
              className="form-control form-control-color w-100"
            />
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Posicionamento
            </label>
            <select
              className="form-control"
              value={textAlign}
              onChange={(event) => setTextAlign(event.target.value)}
            >
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Tamanho ({fontSize}px)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={fontSize}
              step="1"
              onChange={(event) => setFontSize(event.target.value)}
              className="form-range"
            />
          </div>
        </AdminSection>

        <AdminSection title="Bordas">
          <div className="col">
            <label htmlFor="" className="form-label">
              Cor
            </label>
            <input
              type="color"
              value={borderColor}
              onChange={(event) => setBorderColor(event.target.value)}
              className="form-control form-control-color w-100"
            />
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
        </AdminSection>

        <AdminSection title="Hover" lastSection>
          <div className="col">
            <label className="form-label">Status</label>
            <select
              className="form-control"
              value={hoverEnabled}
              onChange={(event) => setHoverEnabled(Number(event.target.value))}
            >
              {statusOption.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              ))}
              {/* <option value="0">Desabilitado</option>
              <option value="1">Habilitado</option> */}
            </select>
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Cor do Texto
            </label>
            <input
              type="color"
              value={styleHover.color ?? ""}
              onChange={(event) => {
                setStyleHover({ ...styleHover, color: event.target.value });
              }}
              className="form-control form-control-color w-100"
              disabled={Boolean(!hoverEnabled)}
            />
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Cor da Borda
            </label>
            <input
              type="color"
              value={styleHover.borderColor ?? ""}
              onChange={(event) => {
                setStyleHover({
                  ...styleHover,
                  borderColor: event.target.value,
                });
              }}
              className="form-control form-control-color w-100"
              disabled={Boolean(!hoverEnabled)}
            />
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Cor do Texto
            </label>
            <input
              type="color"
              value={styleHover.backgroundColor ?? ""}
              onChange={(event) => {
                setStyleHover({
                  ...styleHover,
                  backgroundColor: event.target.value,
                });
              }}
              className="form-control form-control-color w-100"
              disabled={Boolean(!hoverEnabled)}
            />
          </div>

          <button className="btn btn-dark w-100 mt-3">Salvar</button>
        </AdminSection>
      </Form>
    </>
  );
}
