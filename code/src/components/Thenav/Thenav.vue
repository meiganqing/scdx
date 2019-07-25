<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#ffffff"
    router
    style="max-height:40px;with:100%"
    background-color="#a48638"
    active-text-color="#ffffff"
    @select="handleSelect" >
    <el-menu-item  index="/">
      <img src="../../assets/xmimage/index-img/icon-home.png" class="el-img" >&nbsp;
      <div :class="{activenav:openIndex=='0'}">首&nbsp;页</div>
    </el-menu-item >
    <el-submenu index="1">
       <template slot="title" id="hight-light" ><div :class="{activenav:openIndex=='1'}">中心简介</div></template>
      <el-menu-item id="jianjie" @click="tabclick('建设概况','中心简介')" >建设概况</el-menu-item>
      <el-menu-item @click="laoshi('中心简介')"  >师资队伍</el-menu-item>
      <el-menu-item @click="tabclick('教学平台','中心简介')">教学平台</el-menu-item>
      <el-menu-item @click="tabclick('新闻聚焦','中心简介')">新闻聚焦</el-menu-item>
      <el-menu-item @click="tabclick('中心概况','中心简介')">中心概况</el-menu-item>
      <el-menu-item @click="tabclick('规章制度','中心简介')">规章制度</el-menu-item>
      <el-menu-item @click="tabclick('通知公告','中心简介')">通知公告</el-menu-item>
    </el-submenu>
    <el-submenu  index='/tester'>
      <template slot="title"><div :class="{activenav:openIndex=='2'}">实验制度</div></template>
      <el-menu-item id="shiyan" @click="syclick('实验制度','实验制度')">实验制度</el-menu-item>
      <el-menu-item @click="syclick('实验室管理','实验制度')">实验室管理</el-menu-item>
    </el-submenu >
    <el-submenu  index="/Virtal">
      <template slot="title"><div :class="{activenav:openIndex=='3'}">虚拟仿真实验</div></template>
      <el-menu-item id="xnfz" @click="xnclick('在线实验介绍','虚拟仿真实验')">在线实验介绍</el-menu-item>
      <el-menu-item @click="xnclick('在线实验流程','虚拟仿真实验')">在线实验流程</el-menu-item>
      <el-menu-item @click="xnclick('线下实验介绍','虚拟仿真实验')">线下实验介绍</el-menu-item>
    </el-submenu >
    <el-submenu  index="/data">
      <template slot="title"><div :class="{activenav:openIndex=='4'}">资料下载</div></template>
      <el-menu-item  id="ziliao" @click="zyclick('教学资料','资料下载')">教学资料</el-menu-item>
      <el-menu-item @click="zyclick('图纸下载','资料下载')">图纸下载</el-menu-item>
    </el-submenu >
    <el-menu-item  index="/theask?parent=互问互答">
      <div :class="{activenav:openIndex=='5'}">互问互答</div>
    </el-menu-item>
    <el-menu-item  index="/TheContact?parent=联系我们">
      <div :class="{activenav:openIndex=='6'}">联系我们</div>
    </el-menu-item >
  </el-menu>
</template>

<script>
export default {
  name: "Thenav",
  data() {
    return {
      activeIndex: "1",
			openIndex:0
    };
  },
  watch:{
  $route(to,from){
    // console.log(to.query.parent);
    let parentIndex=to.query.parent
    let navObj={
    	"首页":0,
    	"中心简介":1,
    	"实验制度":2,
    	"虚拟仿真实验":3,
    	"资料下载":4,
    	"互问互答":5,
    	"联系我们":6
    }
    this.openIndex=navObj[parentIndex]
  
  }
},
  //方法
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    // 教师平台
      laoshi(parent) {
				this.$router.push({
					path: "/teacher",
					query: {parent:parent}
				})
			},
     tabclick(namedata,parent) { 
      // window.location.reload(); 
      console.log(namedata)
      this.$router.push({
        path: "/teach",
        query: {idata: namedata ,
        	parent:parent}
      });
    },
    xnclick(namedata,parent){
    	console.log(namedata)
      this.$router.push({
        path: "/Virtal",
        query: {idata: namedata,parent:parent }
      });
    },
     syclick(namedata,parent) {
      this.$router.push({
        path: "/tester",
        query: {idata: namedata,parent:parent }
      });
      
    },

     zyclick(namedata,parent) {
      this.$router.push({
        path: "/data",
        query:{idata:namedata,parent:parent}
      });
    },
  },
  collapse: function() {
    this.collapsed = !this.collapsed;
    var menuWidth = document.getElementById("submenu");
    if (menuWidth.offsetHeight === 0) {
      menuWidth.style.height = "40px";
    }
  }
};
</script>

<style lang="scss">
.el-menu--popup{
  display: flex;
  background-color: rgba(92, 73, 22, 0)!important;
  padding: 0!important;
  .el-menu-item{
    background-color: rgba(92, 73, 22, 0)!important;
  }
}
.el-menu--popup .el-menu-item:hover{
  color: #a48638!important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 40px!important;
    line-height: 40px!important;
}
.el-menu--horizontal>.el-menu-item {
    height: 40px!important;
    line-height: 40px!important;
} 
.el-menu--horizontal{
  left: 0!important;
  width: 100%;
  overflow: hidden;
  background-color: rgba(92, 73, 22, 0.6)!important;
}

.el-menu--popup-bottom-start {
    margin-top: 1px!important;
}
.el-menu-demo{
      background-color: rgb(164, 134, 56)!important;
}
</style>
<style lang="scss" scoped>
@import url("../../../thenav.css");
.el-menu--horizontal > .el-menu-item {
  border-bottom: 0 !important;
}

.el-menu-item.is-active {
  // color: #fff !important;
  background: #a48638 !important;
  outline: none !important;
}

.el-menu-item:hover {

  outline: 0 !important;
  // color: #a48638!important;
  // background: #a48638 !important;
 
}

.el-menu {
  width: 100%!important;
  height: 40px;
  padding: 0 214px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  border-bottom: 2px solid #a60d0d !important;
  .el-menu-item {
    width: 116px;
    height: 40px !important;
    line-height: 40px !important;
    padding: 0px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-img {
      width: 20px;
      height: 20px;
      padding: 1px;
      margin-right: 4px;
    }
    span {
      width: 6px;
      height: 6px;
      background: #e0d4b6;
      margin-right: 4px;
    }
  }
}
</style>

