<template>
  <el-container class="teach">
    <el-aside style="height:1000px">
      <!-- 侧边菜单栏目 -->
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          text-color="#ffffff"
          @close="handleClose"
          background-color="#A38638"
          active-text-color="#ffffff"
          router
        >
          <el-submenu index="1" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">中心介绍</span>
            </template>
            <el-menu-item
              class="tem_el"
              v-for="(itemname,index) in list"
              :key="index"
              @click="clicktake(itemname.name)"
            >{{itemname.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="/tester" class="tem_e">
            <span></span>实验制度
          </el-menu-item>
          <el-menu-item index="/process" class="tem_e">
            <span></span>虚拟仿真实验
          </el-menu-item>
          <el-menu-item index="/data" class="tem_e">
            <span></span>资料下载
          </el-menu-item>
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
    <el-main class="TheColumn">
      <div class="thecolumn">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/TheColumnTwo' }">当前位置：中心首页</el-breadcrumb-item>
          <el-breadcrumb-item>中心介绍</el-breadcrumb-item>
          <el-breadcrumb-item>教师平台</el-breadcrumb-item>
        </el-breadcrumb>

         <!-- 详情内容 -->
        <div class="tlist">
           <h2>{{columdata.标题}}</h2>
          <div class="list_text" v-html="columdata.内容">

          </div>
        </div>



        <div class="bottomlink">
          <div class="aaa">分享到：</div>
          <router-link to tag="div" class="aaa">微博</router-link>
          <router-link to tag="div" class="aaa">微信</router-link>
          <router-link to tag="div" class="aaa">QQ</router-link>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "TheColumnTwo",
  data() {
    return {
      //
      XAction: "GetDataInterface",
      XKLX: "SCDXXNJX",
      XDLMCID: "1001",
      page: 1,
      rows: 20,
      XDLMSID: "DYBH20190529131215121519001",
      namedata: "",
      columdata: "",
      //改变
      list: [
        { name: "建设概况" },
        { name: "师资队伍" },
        { name: "教学平台" },
        { name: "中心概况" },
        { name: "教师风采" },
        { name: "规章制度" },
        { name: "课程通告" }
      ]
    };
  },
  components: { TheColumn },
  mounted() {
    this.ajaxfirst();
  },

  methods: {
  
    //首次进入
    ajaxfirst() {
      var that = this;
      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190529131215121515902",
          XDLMA:that.$route.query.idata//路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.rows[0];
        }
      );
    },

    //
    //页面打开请求
    clicktake(namedata) {
      // var that = this;
      // this.ajaxAxios(
      //   "",
      //   {
      //     XAction: that.XAction,
      //     XKLX: that.XKLX,
      //     XDLMCID: that.XDLMCID,
      //     page: that.page,
      //     rows: that.rows,
      //     XDLMSID: "DYBH20190529131215121519001",
      //     XDLMA: namedata 
      //   },
      //   function(retunrData) {
      //     that.columdata = retunrData.data.rows;
      //   }
      // );
      alert(namedata)
      this.$router.push({
    path: "/teach",
    query: {idata:namedata }
              });

    },

    //

    handleClose(key, keyPath) {}
  

  }

  //
};
</script>
<style lang="scss" scoped>
@import url("../../../Teach.css");
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
    .textul {
      padding: 0;
      .divr {
        font-size: 14px;
        padding: 15px 0px;
        border-bottom: 1px solid burlywood;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
    }
  }
}

//
.teach {
  width: 100%;
  height: 1000px;
  padding: 0 300px;
  background: url("../../assets/xmimage/twoimg/bg.png") no-repeat;
  background-size: 100% 100%;
  .el-aside {
    width: 13% !important;
  }

  .el-submenu__title {
    font-size: 0 !important;
  }
}
</style>

