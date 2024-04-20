export default {
  getItem(key) {
    let result = window.localStorage.getItem(key);
    return JSON.parse(result) ?? [];
  },

  setItem(key, value) {
    value = JSON.stringify(value);
    window.localStorage.setItem(key, value);
  },

  getAccountLinks() {
    return this.getItem("account-links");
  },

  setAccountLinks(links) {
    this.setItem("account-links", links);
  },

  setUiStyle(data) {
    this.setItem("ui-style", data);
  },

  getUiStyle() {
    let result = this.getItem("ui-style");
    let uiStyle = {};
    Object.entries(result).forEach((item) => {
      let [key, value] = item;
      if (value === 0 || Number(value)) {
        value += "px";
      }
      uiStyle[key] = value;
    });
    return uiStyle;
  },
};
