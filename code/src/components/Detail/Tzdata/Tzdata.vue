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
           <el-menu-item index="/teach" class="tem_e">
            <span></span>中心介绍
          </el-menu-item>
          <el-menu-item index="/teach" class="tem_e">
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
    <el-main class="TheColumn" style=" padding:0;">
      <div class="thecolumn">
        <el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">当前位置：首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/Tzdata' }"><div class="endcolor" style="color:#A48638">通知公告</div></el-breadcrumb-item> 
        </el-breadcrumb>
        <div class="tlist">
          <ul class="textul">
            <div
              tag="div"
              class="divr"
           
              @click="XiangQ(item.id,item.分类)"
              v-for="(item,index) in columdata"
              :key="index"
            >
              {{item.标题}}
              <span>{{item.日期}}</span>
            </div>
          </ul>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "Tzdata",
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
      columdata: [],
     
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
XiangQ(data,fenlei){
    this.$router.push({
    path: "/teachdata",
    query: {idata:data,biaoti:fenlei}
              });
},

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
          XDLMSID: "DYBH20190529131215121519001",
          XDLMA: "通知公告" //路由参数
          // XDLMA: "中心概况",//路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.rows;
          console.log( that.columdata)
       
        }
      );
    },

    //
    //页面打开请求
    clicktake(namedata) {
      var that = this;
      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190529131215121519001",
          XDLMA: namedata //路由参数
          // XDLMA: "中心概况",//路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.data.rows;
     
        }
      );
    },
    handleClose(key, keyPath) {
    
    }
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

  .tlist {
    .textul {
      padding: 0px 30px;
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

