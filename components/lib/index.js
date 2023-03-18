import Demo from "./demo/index.js";
import Card from "./card/index.js";

const components = {
  Demo,
  Card,
};

// 整个组件库整体引入，整体入口
const install = function (Vue) {
  if (install.installed) return; // 避免重复安装
  Object.keys(components).forEach((key) => {
    // 注册统一引入的组件
    Vue.component(components[key].name, components[key]);
  });
};

const API = {
  install,
};

export default API;
