import { createContext, useEffect, useState } from "react";
import storage from "@/storage";

export const Preview = createContext({
  uiStyle: {},
  setUiStyle: () => {},
  uiStyleLive: {},
  setUiStyleLive: () => {},
  styleHover: {},
  setStyleHover: () => {},
  hoverEnabled: false,
  setHoverEnabled: () => {},
  handleSubmit: () => {},
  options: [],
  statusOption: [],
});

export default function PreviewContext({ children }) {
  const [uiStyle, setUiStyle] = useState({
    color: storage.getUiStyle("color", "#000000"),
    backgroundColor: storage.getUiStyle("backgroundColor", "#ffffff"),
    textAlign: storage.getUiStyle("textAlign", "start"),
    fontSize: storage.getUiStyle("fontSize", 12),
    borderColor: storage.getUiStyle("borderColor", "#000000"),
    borderWidth: storage.getUiStyle("borderWidth", 0),
    borderRadius: storage.getUiStyle("borderRadius", 0),
    logoImg: storage.getItem("logo-img"),
  });

  const [uiStyleLive, setUiStyleLive] = useState({});

  useEffect(() => {
    setUiStyleLive(uiStyle);
  }, [uiStyle]);

  const [hoverEnabled, setHoverEnabled] = useState();
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

    storage.setItem("logo-img", uiStyle.logoImg);

    storage.setUiStyle(uiStyle);

    if (!hoverEnabled) {
      storage.setUiStyleHover({});
      return;
    }

    storage.setUiStyleHover(styleHover);
  };

  const uploadHandler = (event) => {
    let fileReader = new FileReader();

    fileReader.onload = (file) => {
      setLogoImg(file.target.result);
    };

    fileReader.readAsDataURL(event.target.files[0]);
  };

  return (
    <Preview.Provider
      value={{
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
      }}
    >
      {children}
    </Preview.Provider>
  );
}
