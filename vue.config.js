const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //修正项目结构
  pages: {
    //todo 由于以前直接用src会产生项目结构歧义，组件库改用examples语义化
    //编译入口
    index: {
      entry: "examples/main.js",
      //使用模板
      template: "public/index.html",
      filename: "index.html",
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
});
