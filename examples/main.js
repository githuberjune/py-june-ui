import Vue from "vue";
import App from "./App.vue";

//todo 引入公共样式
import "../components/css/demo.scss";
import "../components/css/card.scss";

//! 组件库是插件形式，不再使用引入整个vue来做引入
// import Demo from "../components/lib/src/demo/main.vue";
//todo1 按需引入
// import Demo from "../components/lib/demo/index";
// Vue.use(Demo); // Demo.install -> Vue.component();

// import Card from "../components/lib/card/index";
// Vue.use(Card);

//todo2 组件库整体引入
import API from "../components/lib/index";
API.install(Vue);

//todo 从npm引入
// import "py-june-ui/dist/css/index.css";
// import MUI from "py-june-ui";
// Vue.use(MUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
