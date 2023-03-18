<template>
  <div id="app">
    <Demo />
    <m-card
      imgSrc="bgimg.jpeg"
      summary="组件库开发课程  面授课"
    >
    </m-card>
    <br />
    <m-card
      imgSrc="bgimg2.jpeg"
      summary="C语言系统化精讲  面授课"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </m-card>
    <br />
    <m-card
      imgSrc="bgimg.jpeg"
      :width="370"
      :imgHeight="90"
    >
      本路线旨在帮助大家学习Java。
      <template v-slot:footer>
        <div class="footer">
          <div class="level">初级 · 6门课</div>
          <div class="price">￥25.00</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  .level {
    color: #9199a1;
    margin-bottom: 8px;
  }
  .price {
    color: #f01414;
  }
}
</style>
