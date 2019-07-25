<template>
  <div class="log">
    <div class="top_left"><img src="../../assets/xmimage/index-img/index-top-title.png" alt=""></div>
    <div class="top_right"><img src="../../assets/xmimage/index-img/index-top-bg.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.log {
  height: 100px;
  background: #e0d4b6;
  display: flex;
  // padding-top: 10px;
  .top_left {
    width: 66%;
    height: 100%;
    position: relative;

    // background: url("../../assets/xmimage/index-img/index-top-title.png")  no-repeat;
    // background-size: 100% 100%;
  }
  .top_left img{
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .top_right {
    margin-left: 3%;
    width: 20%;
   
    height:100%;
    //   background: url("../../assets/xmimage/index-img/index-top-bg.png")  no-repeat;
    // background-size: 100% 100%;
  }
}
</style>

