<template>
  <el-container class="teach">
    <el-aside>
      <!-- 侧边菜单栏目 -->
      <el-col>
        <el-menu
          unique-opened
          class="el-menu-vertical-demo"
          text-color="#ffffff"
          background-color="#A38638"
          active-text-color="#ffffff"
          router
          @close="handleClose"
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
          <!-- 实验制度 -->
          <el-submenu index="2" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">实验制度</span>
            </template>
            <el-menu-item class="tem_el" @click="taket('实验制度','实验制度')">实验制度</el-menu-item>
            <el-menu-item class="tem_el" @click="taket('实验室管理','实验制度')">实验室管理</el-menu-item>
          </el-submenu>

          <!-- 虚拟仿真实验 -->

          <el-submenu index="3" class="tem_e">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">虚拟仿真实验</span>
            </template>
            <el-menu-item class="tem_el" @click="clicktake('在线实验介绍','虚拟仿真实验')">在线实验介绍</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktakezaixian('在线实验流程','虚拟仿真实验')">在线实验流程</el-menu-item>
            <el-menu-item class="tem_el" @click="clicktake('线下实验介绍','虚拟仿真实验')">线下实验介绍</el-menu-item>
          </el-submenu>
          <!-- 资料下载 -->
          <el-submenu index="4" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">资料下载</span>
            </template>
            <el-menu-item class="tem_el" @click="taketzl('教学资料','资料下载')">教学资料</el-menu-item>
            <el-menu-item class="tem_el" @click="taketzl('图纸下载','资料下载')">图纸下载</el-menu-item>
          </el-submenu>

          <el-menu-item index="/theask?parent=互问互答" class="tem_e">互问互答</el-menu-item>
          <el-menu-item index="/TheContact?parent=联系我们" class="tem_e">联系我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>

    <!-- 子组件 -->
    <el-main class="TheColumn" style="  padding:0;">
      <div class="thecolumn">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;"
        >
          <el-breadcrumb-item :to="{ path: '/',query:{parent:'首页'} }">当前位置：首页</el-breadcrumb-item>
          <el-breadcrumb-item>虚拟仿真实验</el-breadcrumb-item>

          <div class="endcolor" style="color:#A48638">{{this.Titlenemr}}</div>

          <!-- <div class="Routerto'" tag="div" style="float:right; background: #A48638;color:#ffffff;width: 100px;height: 30px;   border-radius: 10px;  text-align: center;cursor: pointer;
            margin-top:5px;
          line-height: 30px;" @click="enterSy()">进入实验</div>-->
        </el-breadcrumb>

        <!-- 详情内容 -->
        <div class="tlist" v-show="showtime==0">
          <ul class="textul">
            <div
              tag="div"
              class="divr"
              @click="XiangQ(item.id,item.分类)"
              v-for="(item,index) in columdata"
              :key="index"
            >
              <div class="divq">
                <span id="spanq1">
                  <span id="spanq2"></span>
                </span>
                &nbsp;&nbsp;{{item.标题}}
              </div>
              <span>{{item.日期}}</span>
            </div>
            <!-- </el-table> -->
          </ul>
        </div>

        <!-- 在线实验流程 -->
        <div class="tlist" v-show="showtime==1">
          <ul class="textul">
            <div tag="div" class="divr" v-for="(item,index) in columdata" :key="index">
              <div class="divq">
                <span id="spanq1">
                  <span id="spanq2"></span>
                </span>
                &nbsp;&nbsp;{{item.实验名称}}
              </div>
              <span>
                <div
                  class="Routerto'"
                  tag="div"
                  style="float:right; color: #A48638;width: 98px;height: 28px;  border: 1px solid #A48638; border-radius: 10px;  text-align: center;cursor: pointer;
            margin-top:5px;
            line-height: 30px;"
                  @click="enterSy(item.实验名称,item.库内编号 )"
                >进入实验</div>
              </span>
            </div>
            <!-- </el-table> -->
          </ul>
        </div>

        <!--分页-->
        <div class="block pagination-module">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="rows"
            layout="total, prev, pager, next"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "virtal", //资料下载
  data() {
    return {
      showtime: 0,
      XDLMCID: "1001",
      currentPage1: 1,
      total: 0,
      listNum: 1, //分页总条数
      page: 1,
      rows: 20,
      namedata: "",
      columdata: [],
      zhankai: ["3"],
      Titlenemr: "",
      //改变
      list: [
        {
          name: "建设概况"
        },
        {
          name: "师资队伍"
        },
        {
          name: "教学平台"
        },
        {
          name: "中心概况"
        },
        {
          name: "教师风采"
        },
        {
          name: "规章制度"
        },
        {
          name: "课程通告"
        }
      ]
    };
  },
  components: {
    TheColumn
  },
  watch: {
    $route(to, from) {
      this.page = 1;
      this.ajaxfirst(this.$route.query.idata, this.page);
      this.Titlenemr = this.$route.query.idata;
    }
  },
  mounted() {
    if (this.$route.query.idata) {
      this.Titlenemr = this.$route.query.idata;
      if (this.$route.query.idata == "在线实验流程") {
        this.clicktakezaixian();
      } else {
        this.ajaxfirst(this.$route.query.idata, this.page);
      }
    }
    this.$router.push({
      query: {
        idata: this.Titlenemr,
        parent: "虚拟仿真实验"
        //传给详情的标题名字
      }
    });
  },

  methods: {
    enterSy(name, number) {
      //进入实验
      if (this.getCookieName("UserName")) {
        this.$router.push({
          path: "/process",
          query: {
            parent: parent,
            syname: name, //实验名称
            knbh: number //库内编号
          }
        });
      } else {
        this.$router.push({
          path: "/login",
          query: {
            parent: parent,
            syname: name, //实验名称
            knbh: number //库内编号
          }
        });
      }
    },
    //分页
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      // console.log(val);
      this.page = val;
      this.ajaxfirst(this.Titlenemr, this.page); //第一次请求数据
    },
    laoshi(parent) {
      this.$router.push({
        path: "/teacher",
        query: {
          parent: parent
        }
      });
    },
    // 中心简介
    tza(name, parent) {
      this.$router.push({
        path: "/teach",
        query: {
          idata: name,
          parent: parent
          //传给详情的标题名字
        }
      });
    },
    // 资料下载
    taketzl(name, parent) {
      this.$router.push({
        path: "/data",
        query: {
          idata: name,
          parent: parent
        }
      });
    },
    // 实验制度
    taket(name, parent) {
      this.$router.push({
        path: "/tester",
        query: {
          idata: name,
          parent: parent
        }
      });
    },

    // 路由跳转
    XiangQ(data, leixing) {
      this.$router.push({
        path: "/Downdata",
        query: {
          idata: data, //id
          biaoti: leixing
        }
      });
    },
    getCookieName: function(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

      if ((arr = document.cookie.match(reg))) {
        return decodeURIComponent(arr[2]);
      } else {
      }
    },
    //首次进入
    ajaxfirst(namedata, page) {
      var that = this;
      // that.$route.query.idata=that.Titlenemr

      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190529131215121519001",
          //						XDLMA: that.$route.query.idata, //路由参数
          XDLMA: namedata
        },
        function(retunrData) {
          that.columdata = retunrData.rows;
          that.total = retunrData.total;
          console.log(retunrData.rows);
        }
      );
    },

    clicktake(namedata, parent) {
      this.Titlenemr = namedata;
      this.page = 1;
      this.showtime = 0;
      //				this.ajaxfirst(namedata, this.page);
      this.$router.push({
        query: {
          parent: parent,
          idata: namedata
        }
      });
    },

    // 在线实验流程
    clicktakezaixian() {
      var that = this;
      // that.$route.query.idata=that.Titlenemr

      // XDLMSID: DYBH20190530171857185730131
      this.PostData(
        {
          XAction: that.XAction,
          XKLX: that.XKLX,
          XDLMCID: that.XDLMCID,
          page: that.page,
          rows: that.rows,
          XDLMSID: "DYBH20190530171857185730131"
          //						XDLMA: that.$route.query.idata, //路由参数
          // XDLMA: namedata
        },
        function(retunrData) {
          that.columdata = retunrData.rows;
          that.total = retunrData.total;
          that.showtime = 1;
          console.log(retunrData.rows);
        }
      );
    },

    handleClose(key, keyPath) {},
    handleOpen(key, keyPath) {}
  }
};
</script>
<style lang="scss" scoped>
@import url("../../Teach.css");
.endcolor {
  display: inline;
}

.bottomlink {
  display: flex;
  justify-content: flex-end;
  .aaa {
    padding: 10px;
  }
}

.tlist {
  padding: 0px 48px;
  .textul {
    .divq {
      display: flex;
      align-items: center;
      #spanq1 {
        width: 11px;
        height: 11px;
        background-color: #a48638;
        line-height: 51px;
        border-radius: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #spanq2 {
        width: 9px;
        height: 9px;
        background-color: #ffffff;
        line-height: 51px;
        border-radius: 9px;
      }
    }
    .divr {
      font-size: 14px;
      padding: 15px 0px;
      border-bottom: 1px solid burlywood;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
}

// 右侧
.thecolumn {
  display: flex;
  flex-direction: column;
  background: white !important;
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

//
.teach {
  width: 100%;
  min-height: 1000px;
  padding: 0 15.8%;
  background: url("../assets/xmimage/twoimg/bg.png") no-repeat;
  background-position: left bottom;
  background-color: #f6f6f6;
  .el-aside {
    width: 13% !important;
    margin-right: 1%;
  }
}

.Routerto {
  display: block;
  background: blue !important;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}
.pagination-module {
  margin: auto;
  padding: 15px;
  box-sizing: border-box;
}
</style>