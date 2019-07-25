<template>
  <div class="bottom">

    <div class="toplist">
      友情链接：
      <span><a href="javscript::">四川大学官方网站</a></span>|
      <span><a href="javscript::">四川大学文化历史学院</a></span>|
      <span><a href="javscript::">四川大学博物馆</a></span>|
      <span><a href="javscript::">四川大学藏学院</a></span>|
      <span><a href="javscript::">考古教学实验中心</a></span>
    </div>
    <div class="list">
      <img src="../../assets/xmimage/index-img/logo-6.png" alt>
       <span></span>
      <div class="right">
        <div>四川大学文化历史学院 .版权所有 ，地址：四川省成都市武侯区望江路29号。邮编：610064</div>
        <div>技术支持：陕西十月文化有限公司</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "thebottom",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bottom {
  height: 158px;
  background: url("../../assets/xmimage/index-img/bottom-bg.png") no-repeat;
  background-size: 100% 100%；;
  color: white;
  font-size: 20px;
  .toplist{
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    span a{
      font-size: 14px;
      color: #ffffff;
      text-decoration: none;
      margin: 0 3px;
    }
  }
  .list {
    width: 100%;
    height: 126px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color: #000000, $alpha: 0.2);
    img {
      display: block;
    }
     span{
        width: 2px;
        height: 70px;
        background: rgba($color: #FFFFFF, $alpha: 0.1);
         margin:0 28px;
      }
    .right {
      display: flex;
      flex-direction: column;
      font-size: 14px;
     
     
    }
  }
}
</style>

