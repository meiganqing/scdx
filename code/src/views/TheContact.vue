<template>
  <div>
    <div class="m-header">
      <img src="../assets/xmimage/index-img/banner1.jpg" alt />
    </div>
    <el-container class="teach">
      <el-aside>
        <!-- 侧边菜单栏目 -->
        <el-col>
          <el-menu
            class="el-menu-vertical-demo"
            text-color="#ffffff"
            background-color="#A38638"
            active-text-color="#ffffff"
            router
            @close="handleClose"
          >
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
          
            <el-submenu index="2" class="teach_elsum">
              <template slot="title" id="teach_elsum_title">
                <span id="teach_elsum_title">实验制度</span>
              </template>
              <el-menu-item class="tem_el" @click="taket('实验制度')">实验制度</el-menu-item>
              <el-menu-item class="tem_el" @click="taket('实验制度')">实验室管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">虚拟仿真实验</span>
						</template>
						<el-menu-item class="tem_el" @click="taketsy('在线实验介绍','虚拟仿真实验')">在线实验介绍</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('在线实验流程','虚拟仿真实验')">在线实验流程</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('线下实验介绍','虚拟仿真实验')">线下实验介绍</el-menu-item>
					</el-submenu>
            <el-submenu index="4" class="teach_elsum">
              <template slot="title" id="teach_elsum_title">
                <span id="teach_elsum_title">资料下载</span>
              </template>
              <el-menu-item class="tem_el" @click="taketzl('教学资料')">教学资料</el-menu-item>
              <el-menu-item class="tem_el" @click="taketzl('图纸下载')">图纸下载</el-menu-item>
            </el-submenu>
            <el-menu-item index="/theask?parent=互问互答" class="tem_e">
              <span></span>互问互答
            </el-menu-item>
            <el-menu-item index="/TheContact?parent=联系我们" class="tem_e">
              <span></span>联系我们
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <!-- 子组件 -->
      <el-main class="TheColumn" style=" height: 1000px; padding:0;">
        <el-breadcrumb
          separator-class="el-icon-arrow-right"
          style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;"
        >
          <el-breadcrumb-item :to="{ path: '/' ,query:{parent:'首页'}}">当前位置：首页</el-breadcrumb-item>
          <el-breadcrumb-item class="impp">
            <div class="endcolor" style="color:#A48638">联系我们</div>
          </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="top">
          <div class="box_b_b">
            <div class="box_b_b_img">
              <img src="../assets/xmimage/index-img/address.png" alt />
            </div>
            <div class="box_add">
              <div>望江校区:四川省成都市望江路29号</div>
              <div>江安校区:四川省成都市双流区川大路</div>
              <!--<div class="top_two_a"></div>
              <div class="top_two"></div>-->
            </div>
          </div>

          <div class="box_b">
            <img src="../assets/xmimage/index-img/管理员.png" class="box_b_img" alt />
            <!--<div class="top_two"></div>-->
            <span>管理员:张娟娟老师</span>
          </div>

          <div class="box_b">
            <img src="../assets/xmimage/index-img/phone.png" class="box_b_img" alt />
            <!--<div class="top_two"></div>-->
            <span>电话：028-8541-7695</span>
          </div>

          <div class="box_b">
            <img src="../assets/xmimage/index-img/postcode.png" class="box_b_img" alt />
            <!--<div class="top_two"></div>-->
            <span>邮箱：history@scu.edu.cn</span>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TheColumn from "@/components/TheColumn";
export default {
  name: "TheContact",
  data() {
    return {
      openeds: ["1"],
      uniqueOpened: false
      //
    };
  },
  components: {
    TheColumn
  },
  mounted() {},

  methods: {
    laoshi(parent) {
      this.$router.push({
        path: "/teacher",
        query: {
          parent: parent
        }
      });
    },
    tza(name, light) {
      this.$router.push({
        path: "/teach",
        query: {
          idata: name
          //传给详情的标题名字
        }
      });
    },
    // 实验制度
    taket(name) {
      this.$router.push({
        path: "/tester",
        query: {
          idata: name
        }
      });
    },
    // 资料下载
    taketzl(name) {
      this.$router.push({
        path: "/data",
        query: {
          idata: name
        }
      });
    },
    // 虚拟实验
    taketsy(name) {
      this.$router.push({
        path: "/virtal",
        query: {
          idata: name
        }
      });
    },
    //添加问题
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

  //
};
</script>
<style lang="scss" scoped>
@import url("../../Teach.css");
.m-header {
  img {
    width: 100%;
  }
}

// 右侧
.thecolumn {
  display: flex;
  flex-direction: column;
  background: white !important;
  height: 1000px;
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
  .block {
    margin: 0 auto;
  }
}

// 主内容
.el-breadcrumb {
  background: #ececec;
  line-height: 40px;
  padding: 0 20px;
}

.top {
  text-align: center;
  padding: 0px 35px;
}

.box_b_b {
  height: 90px;
  border-bottom: 1px solid #ededed;
  line-height: 30px;
  display: flex;
  justify-content: center;
  .box_add {
    /*position: relative;*/
    height: 90px;

    /*flex-direction:column;*/
    padding: 15px 0px;
    div {
      /*display: inline-block;*/
    }
  }
  .box_b_b_img {
    /*position: absolute;
			top: 50%;
			left: -20px;*/
    width: 20px;
    /*	height: 20px;*/
    height: 100%;
    line-height: 90px;
    margin-right: 25px;
  }
  img {
    height: 20px;
  }
}

.box_bb {
  height: 70px;
  /*display: flex;*/
  /*align-items: center;*/
  text-align: center;
  /*margin-left: 20%;*/
  border-bottom: 1px solid #ededed;
  .box_add {
    display: inline-block;
    /*height:140px;*/
    .top_two {
      font-size: 18px;
      color: #333333;
    }
    .top_two_a {
      font-size: 18px;
      color: #333333;
      float: left;
    }
  }
  .box_b_img {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 22px;
  }
}

.box_b {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #ededed;
  .top_two {
    font-size: 18px;
    line-height: 35px;
    color: #333333;
  }
  .box_b_img {
    // width: 20px;
    // height: 18px;
    margin-right: 25px;
  }
}
</style>