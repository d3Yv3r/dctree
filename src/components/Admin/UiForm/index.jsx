import Form from "@/components/Form";
import AdminSection from "../AdminSection";
import LinkItem from "@/components/LinkItem";
import { useContext } from "react";
import PreviewContext from "@/context/PreviewContext";
import { Preview } from "@/context/PreviewContext";

export default function UiForm() {
  const uploadHandler = () => {};

  const {
    uiStyle,
    setUiStyle,
    uiStyleLive,
    setUiStyleLive,
    styleHover,
    setStyleHover,
    hoverEnabled,
    setHoverEnabled,
    handleSubmit,
    options,
    statusOption,
  } = useContext(Preview);

  return (
    <>
      <h1>Ui</h1>
      <div className="row">
        <LinkItem label="Botão de Teste" />
      </div>
      <Form onSubmit={handleSubmit}>
        <AdminSection title="Rede Sociais e Logo">
          <div>
            <label htmlFor="" className="form-label">
              Logo
            </label>
            <input
              type="file"
              className="form-control form-control-color w-100"
              onChange={uploadHandler}
            />
          </div>

          {uiStyle.logoImg && (
            <div className="mt-3">
              <img src={uiStyle.logoImg} alt="" width="200px" />
            </div>
          )}
        </AdminSection>

        <AdminSection title="Texto e Cor de Fundo">
          <div className="col">
            <label htmlFor="" className="form-label">
              Cor
            </label>
            <input
              type="color"
              value={uiStyle.color}
              onChange={(event) => {
                setUiStyle({ ...uiStyle, color: event.target.value });
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
              value={uiStyle.backgroundColor}
              onChange={(event) => {
                setUiStyle({ ...uiStyle, backgroundColor: event.target.value });
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
              value={uiStyle.textAlign}
              onChange={(event) => {
                setUiStyle({ ...uiStyle, textAlign: event.target.value });
              }}
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
              Tamanho ({uiStyle.fontSize}px)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={uiStyle.fontSize}
              step="1"
              onChange={(event) => {
                setUiStyle({ ...uiStyle, fontSize: event.target.value });
              }}
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
              value={uiStyle.borderColor}
              onChange={(event) => {
                setUiStyle({ ...uiStyle, borderColor: event.target.value });
              }}
              className="form-control form-control-color w-100"
            />
          </div>

          <div className="col">
            <label htmlFor="" className="form-label">
              Largura ({uiStyle.borderWidth}px)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={uiStyle.borderWidth}
              step="1"
              onChange={(event) => {
                setUiStyle({ ...uiStyle, borderWidth: event.target.value });
              }}
              className="form-range"
            />
          </div>

          <div className="col">
            <label htmlFor="range" className="form-label">
              Radius ({uiStyle.borderRadius}px)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={uiStyle.borderRadius}
              onChange={(event) => {
                setUiStyle({ ...uiStyle, borderRadius: event.target.value });
              }}
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
              Cor do Fundo
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
