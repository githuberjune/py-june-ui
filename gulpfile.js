const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); // sass-> css
const minifyCSS = require("gulp-minify-css"); //压缩css
const uglify = require("gulp-uglify"); //注释处理

gulp.task("sass", async function () {
  return (
    gulp
      .src("components/css/**/*.s[ac]ss")
      // .pipe(
      //   uglify({
      //     output: {
      //       comments: function (node, comment) {
      //         //含有@desc字符 部分的注释进行保留
      //         return comment.value.indexOf("@desc") >= 0;
      //       },
      //     },
      //   })
      // )
      //   .pipe(
      //     uglify({
      //       output: {
      //         preamble: "/** \r\n 版本所有 \r\n 填写日期 \r\n 填写作者信息 */",
      //       },
      //     })
      //   )
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(gulp.dest("dist/css"))
  );
});
