<template>
  <div class="bottom">
    <div class="list">
     
       <div class="text">博物馆陈列设计虚拟仿真实验实验名称</div>
       <div class="lean">最近在学<span>1123</span></div>
       <div class="answer">互问互答</div>
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
  height: 70px;
  background: url("../../assets/xmimage/index-img/bottom.png") no-repeat;
  background-size: 100% 100%；;
  color: white;
  .list {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 8%;
    .text{
      font-size: 18px;
    }
    .lean{
      display: flex;
      justify-content: space-around;
      width: 10%;
      font-size: 12px;
      margin-left: 4%;
      position: relative;
        &::before{
        position: absolute;
        content: "";
        width: 2px;
        height: 18px;
        background: white;
        top: 0px;
        right: -20px;
      }
      }
      span{
        margin-left: 4%;
    
    }
    .answer{
      font-size: 12px;
        margin-left: 4%;
    }
    
  }
}
</style>

