<template>
  <div class="thecolumn">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/TheColumnTwo' }">当前位置：中心首页</el-breadcrumb-item>
      <el-breadcrumb-item>中心介绍</el-breadcrumb-item>
      <el-breadcrumb-item>教师平台</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="tlist">
      <ul class="textul">
        <router-link
          tag="div"
          class="divr"
          to="/TheColumnTwo"
          v-for="(item,index) in columdata"
          :key="index"
        > {{item.标题}}
          <span>{{item.日期}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheColumn",
  //   watch: {
  //   //监听相同路由下参数变化的时候，从而实现异步刷新
  //   $route() {
  //     this.ajaxfirst();
  //   }
  // },
  data() {
    return {
      XAction: "GetDataInterface",
      XKLX: "SCDXXNJX",
      XDLMCID: "1001",
      page: 1,
      rows: 20,
      XDLMSID: "DYBH20190529131215121519001",
      columdata: []
    };
  },
  mounted() {
    this.ajaxfirst();

  },
  methods: {
    //  点击请求获取后台数据
//  ajaxAxios(urldata, postDta, callback) {
//    console.log(postDta);
//    var postUrl = this.$http + urldata;
//    this.axios
//      .post(postUrl, postDta, {
//        headers: {
//          "Content-Type": "application/x-www-form-urlencoded"
//        }
//      })
//      .then(
//        function(res) {
//          if (callback) {
//            callback(res);
//          }
//        }.bind(this)
//      )
//      .catch(
//        function(err) {
//          if (err.response) {
//            console.log(err.response);
//          }
//        }.bind(this)
//      );
//  },
    //
    //页面打开请求
    ajaxfirst() {
      var that = this;
      alert(that.$route.query.teachname )
      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190529131215121519001",
          XDLMA: that.$route.query.teachname //路由参数
          // XDLMA: "中心概况",//路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.rows;
          
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.thecolumn {
  display: flex;
  flex-direction: column;
  background: white !important;
  height: 100%;

  .tlist {
    .textul {
      padding: 0;
      .divr {
        font-size: 14px;
        padding: 15px 0px;
        border-bottom: 1px solid burlywood;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>

