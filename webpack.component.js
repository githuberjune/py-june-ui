const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

//#region 多入口工程化
const glob = require("glob");
const list = {};
// 逐个写组件打包入口，显然很蠢
// {
//     card: './components/lib/card/index.js',
//     demo: './components/lib/demo/index.js'
// }
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    //组件文件夹的名字
    const component = file.split(/[/.]/)[2];
    //key组件dir名字，value补充匹配的完整相对路径
    list[component] = `./${file}`;
  }
}
//自上而下并且用了async
makeList("components/lib", list);
//#endregion

module.exports = {
  entry: list,
  output: {
    filename: "[name].umd.js", // [name]入口名字,>>> card.umd.js
    path: path.resolve(__dirname, "dist"),
    // 处理成umd的形式
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
    ],
  },
  mode: "development",
};
