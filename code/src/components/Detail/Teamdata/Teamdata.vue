<template>
  <el-container class="teach">
    <el-aside style="height:1000px">
      <!-- 侧边菜单栏目 -->
      <el-col>
        <el-menu
 
          class="el-menu-vertical-demo"
          text-color="#ffffff"
         
          background-color="#A38638"
          active-text-color="#ffffff"
          router
           @open="handleOpen" 
           @close="handleClose" 
           :default-openeds="this.zhankai"
        >
          <el-submenu index="1" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">中心简介</span>
            </template>
            <!-- <el-menu-item
              class="tem_el"
              v-for="(itemname,index) in list"
              :key="index"
              @click="clicktake(itemname.name)"
            >{{itemname.name}}</el-menu-item> -->
         <el-menu-item class="tem_el" @click="clicktake('建设概况','中心简介')">建设概况</el-menu-item>
            <el-menu-item class="tem_el" @click="laoshi('中心简介')">师资队伍</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('教学平台','中心简介')">教学平台</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('新闻聚焦','中心简介')">新闻聚焦</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('中心概况','中心简介')">中心概况</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('规章制度','中心简介')">规章制度</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('通知公告','中心简介')">通知公告</el-menu-item>
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
    <el-main class="TheColumn" style="  padding:0;">
      <div class="thecolumn">
        <el-breadcrumb separator-class="el-icon-arrow-right"  style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
          <el-breadcrumb-item :to="{ path: '/' }">当前位置：首页</el-breadcrumb-item>
           <el-breadcrumb-item   :to="{ path: '/teach' }">中心简介</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/teacher' }">师资队伍</el-breadcrumb-item>
          <el-breadcrumb-item><div class="endcolor" style="color:#A48638">详情</div></el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 详情内容 -->
        <div class="tlist">
          <div class="hhh" >{{columdata.姓名}}{{columdata.职称}}</div>
          <div class="list_img" ><img :src="apiurl+columdata.附件.replace('ss.','.')" alt=""></div>
  
          <div class="list_text" v-html="columdata.简介" style=" letter-spacing:4px"></div>
        </div>

      </div>
    </el-main>
  </el-container>
</template>

<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "Teamdata",
  data() {
    return {
      //
      XAction: "GetDataInterface",
      XKLX: "SCDXXNJX",
      XDLMCID: "1001",
      page: 1,
      rows: 20,
      namedata: "",
      columdata: "",
      zhankai: ["1"],
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
          XDLMSID: "DYBH201906121039333933107152",
          XDLMA: that.$route.query.idata //路由参数
        },
        function(retunrData) {
          that.columdata = retunrData.rows[0];
          // console.log( that.columdata)
        }
      );
    },

    clicktake(namedata) {

      this.$router.push({
        path: "/teach",
        query: { idata: namedata }
      });
    },

    handleClose(key, keyPath) {},
    	handleOpen(key, keyPath) {}
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
    width: 100% !important;
    padding: 40px;
      display: flex;
  flex-direction: column;
    .list_img{
      display: block;
      width: 220px !important;
      height: 270px  !important;
      padding-top: 20px;
      margin: auto;
      img{
        display: block;
         max-height: 100%;
         max-width: 100%;
      
      margin: auto;

      }
    }
.hhh{
  font-size: 28px;
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

