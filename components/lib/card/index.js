import Card from "./src/main.vue";

//单独引用组件，单入口
Card.install = function (Vue) {
  // Vue.component(模板中使用的标签名, Vue文件)
  Vue.component(Card.name, Card);
};

export default Card;
