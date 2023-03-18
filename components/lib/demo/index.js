import Demo from "./src/main.vue";

Demo.install = function (Vue) {
  // Vue.component(模板中使用的标签名, Vue文件)
  Vue.component(Demo.name, Demo);
};

export default Demo;
