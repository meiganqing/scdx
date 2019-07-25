<template>
  <el-container class="teach">
    <el-aside style="height:1000px">
      <!-- 侧边菜单栏目 -->
      <el-col>
        <el-menu
         unique-opened
          class="el-menu-vertical-demo"
          text-color="#ffffff"
          @close="handleClose"
          background-color="#A38638"
          active-text-color="#ffffff"
          router
          :default-openeds="this.zhankai"
        >
        <!-- 中心简介 -->
              <el-submenu index="1" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">中心简介</span>
            </template>
            <el-menu-item class="tem_el" @click="tza('建设概况','中心简介')">建设概况</el-menu-item>
            <el-menu-item class="tem_el" @click="laoshi('中心简介')">师资队伍</el-menu-item>
            <el-menu-item class="tem_el" @click="tza('教学平台','中心简介')">教学平台</el-menu-item>
            <el-menu-item class="tem_el" @click="tza('新闻聚焦','中心简介')">新闻聚焦</el-menu-item>
            <el-menu-item class="tem_el" @click="tza('中心概况','中心简介')">中心概况</el-menu-item>
            <el-menu-item class="tem_el" @click="tza('规章制度','中心简介')">规章制度</el-menu-item>
            <el-menu-item class="tem_el" @click="tza('通知公告','中心简介')">通知公告</el-menu-item>
          </el-submenu>
          <el-submenu index="/tester" class="tem_e">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">实验制度</span>
            </template>
            <el-menu-item class="tem_el" @click="clicktake('实验制度')">实验制度</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('实验室管理')">实验室管理</el-menu-item>
          </el-submenu>
             <el-submenu index="3" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">虚拟仿真实验</span>
            </template>
            <el-menu-item class="tem_el" @click="taketsy('在线实验介绍')">在线实验介绍</el-menu-item>
             <el-menu-item  class="tem_el"  @click="taketsy('在线实验流程')">在线实验流程</el-menu-item>
              <el-menu-item  class="tem_el"  @click="taketsy('线下实验介绍')">线下实验介绍</el-menu-item>
          </el-submenu>
          <!-- 资料下载 -->
		          <el-submenu index="4" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">资料下载</span>
            </template>
            <el-menu-item class="tem_el" @click="taketzl('教学资料')">教学资料</el-menu-item>
             <el-menu-item  class="tem_el"  @click="taketzl('图纸下载')">图纸下载</el-menu-item>
          </el-submenu>
          <el-menu-item index="/theask" class="tem_e">
            <span></span>互问互答
          </el-menu-item>
          <el-menu-item index="/TheContact" class="tem_e">
            <span></span>联系我们
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    <!-- 子组件 -->
    <el-main class="TheColumn" style="  padding:0;">
      <div class="thecolumn">
        <el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">当前位置：首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/tester' }">实验制度</el-breadcrumb-item>
           <el-breadcrumb-item  :to="{ path:'/tester', query: {idata:syzd,tt:0}}">{{this.$route.query.biaoti}}</el-breadcrumb-item>
        <el-breadcrumb-item><div class="endcolor" style="color:#A48638">详情</div></el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 详情内容 -->
        <div class="tlist">
          <div class="hhh" >{{columdata.标题}}</div>
          <div class="list_text" v-html="columdata.内容"  style=" letter-spacing: 3px"></div>
        </div>

      </div>
    </el-main>
  </el-container>
</template>
<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "Testerdata",
  data() {
    return {
      syzd:'',
      XAction: "GetDataInterface",
      XKLX: "SCDXXNJX",
      XDLMCID: "1001",
      page: 1,
      rows: 20,
      XDLMSID: "DYBH20190529131215121515902",
      namedata: "",
      columdata: "",
      Titlenemr:"",
      zhankai: ["/tester"],
      //改变

    };
  },
  components: { TheColumn },
  mounted() {
    this.ajaxfirst();
  },
  methods: {
      //   跳转中心简介
    //  老师
	  laoshi(parent) {
      this.$router.push({
        path: "/teacher",
        query: {
          parent: parent
        }
      });
    },
// 中心简介
tza(name,light){
this.$router.push({
        path: "/teach",
        query: {
          idata: name,
           //传给详情的标题名字
        }
      });
},
// 资料下载
taketzl(name){
this.$router.push({
        path: "/data",
        query: {
          idata:name
        }
      });
},
// 虚拟仿真
taketsy(name){
  this.$router.push({
        path: "/virtal",
        query: {
          idata:name
        }
      });
},

    //首次进入
    ajaxfirst() {
      var that=this;
      that.syzd=that.$route.query.biaoti
      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190529131215121515902",
          XDLMA: that.$route.query.idata //路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.rows[0];
        }
      );
    },

    clicktake(namedata) {
      this.$router.push({
        path: "/tester",
        query: { idata: namedata }
      });
      
    },

    handleClose(key, keyPath) {}
  }


};
</script>
<style lang="scss" scoped>
@import url("../../../../Teach.css");
// 右侧
.thecolumn {
  display: flex;
  flex-direction: column;
  background: white !important;
  height: 100%;
  .bottomlink {
    display: flex;
    justify-content: flex-end;
    .aaa {
      padding: 10px;
    }
  }

  .tlist {
    padding: 40px;
.hhh{
  margin:  auto;
  text-align: center;
}
  }
}

//
.teach {
  width: 100%;
  min-height: 1000px;
  padding: 0 15.8%;
  background: url("../../../assets/xmimage/twoimg/bg.png") no-repeat;
  background-position: left bottom;
  background-color: #f6f6f6;
  .el-aside {
    width: 13% !important;
    margin-right: 1%;
  }

  .el-submenu__title {
    font-size: 0 !important;
  }
}
</style>

