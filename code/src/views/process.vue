<!--  -->
<template>
  <div class="laboratory">
    <el-container style="height:930px" class="labone">
      <el-header style="height:100px">
        <div class="log">
          <div tag="div" class="top_left">
            <img src="../assets/xmimage/lab/top.png" alt />
          </div>
          <!-- 动画 -->
          <div class="anime"></div>
          <div class="footer_top">
            <div class="foota foota_one">
              欢迎您:
              <span class="foot_span">{{sytopname}}</span>
            </div>

            <div class="foota two">
              <span class="foot_span" @click="tujichu()">退出</span>
            </div>
          </div>
        </div>
      </el-header>
      <!-- content -->
      <el-container style="height:900px" class="labbottm">
        <!-- 下 -->
        <el-container style="height:800px " class="lab_cont">
          <!-- 左 -->
          <el-container class="lab_left">
            <!-- 标题 -->
            <div class="lap_top">
              <img src="../assets/xmimage/lab/x-l.png" alt class="lap_l" />
              <div class="text">
                <span class="text_spanh">{{ headtop}}</span>
                <!-- <div class="text_span">
                  <span class="span_p">策划：四川大学历史文化学院</span>
                  <span class="span_p">制作：陕西十月文物保护有限公司</span>
                </div>-->
              </div>
              <img src="../assets/xmimage/lab/x-r.png" alt class="lap_r" />
            </div>
            <!-- Main -->
            <el-main style="height:760px" class="sy_main">
              <router-view />
            </el-main>
          </el-container>
        </el-container>

        <!-- 右菜单 -->
        <el-aside width="300px" class="menubar">
          <div class="menubar_text">实验步骤</div>
          <el-menu
            padding-left="0px"
            unique-opened
            class="theelele"
            text-color="#fff"
            active-text-color="#ffffff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-submenu
              class="Temp"
              :index="''+ subindex "
              v-for="(navItem ,subindex) in buzhoudata"
              :key="subindex"
            >
              <template slot="title">
                <div class="dianji" @click="step(navItem.步骤分类,subindex)">
                  <img src="../assets/xmimage/lab/list-1.png" alt class="dianji_img" />

                  <img
                    src="../assets/xmimage/lab/list.png"
                    alt
                    v-show="showimga==subindex"
                    class="dianji_imgt"
                  />
                  {{navItem.步骤分类}}
                </div>
              </template>
              <el-menu-item
                v-show="showIndex==subindex"
                class="el_item"
                v-for="(liItem,index) in alldata"
                :key="index"
                @click="buzhouSy(liItem.关联编号,liItem.id)"
                id="{navItem.id}"
                num="{navItem.库内编号}"
              >{{liItem.步骤名称}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 获取数据
import { iprocess } from "@/request/api";
export default {
  name: "process",
  components: {},
  data() {
    return {
      // 获取数据
      firstdata: "", //传值
      headtop:"",
      gettopdata: [], //1
      alldata: "", //1-1
      getnextdata: [], // 1-1-1
      buzhoudata: [],
      dataid: "",
      sytopname: "", //登陆这名字
      showIndex: "0",
      showimga: "-1",
      showimgb: "",
      headtop: "",
      knbh: "" //库内编号
    };
  },

  mounted() {
   
          if(localStorage.getItem("knbh")){
       this.headtop = localStorage.getItem("headtop")
         this.ingajax()
          this.buzhouajax() 
    }
      
    this.sytopname = this.getCookieName("UserName"); //登陆者名字
 
    // 步骤分类
 
  },
  methods: {
       //首次默认传入
    ingajax() {
      var that = this;
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH201905301718571857250141",
          // XDLMA:that.$route.query.logknbh ,
          XDLMA:localStorage.getItem("knbh"),
          XDLME: "1"
        },
        function(retunrData) {
          that.firstdata = retunrData.rows;
    
          if (retunrData.rows[0].数据类型 === "图片") {
            that.$router.push({
              path: "/Thebagimg",
              query: {
                buxh: "1",
                xdlma:localStorage.getItem("knbh"),
                 
              }
            });
          } else {
            that.$router.push({
              path: "/Thevideo",
              query: { buxh: "1",
               xdlma:localStorage.getItem("knbh"),
                 }
            });
          }
        }
      );
    },
    kkk(key) {
      this.showimga = key;
    },
    bbb(key) {
      this.showimga = key + 1000000000000000000000000;
    },
    getCookieName: function(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

      if ((arr = document.cookie.match(reg))) {
        return decodeURIComponent(arr[2]);
      } else {
      }
    },
    
    // 步骤分类
    buzhouajax() {
      var that = this;
  
      this.PostDataVertify(
        {
          XAction: "GetDataInterface",
          XKLX: "SCDXXNJX",
          XDLMCID: "1001",
          XDLMSID: "DYBH2019061218293903598882",
          // XDLMA:that.knbh,
          XDLMA:localStorage.getItem("knbh")
        
        },
        function(retunrData) {
          that.buzhoudata = retunrData.rows;
      
        }
      );
    },

 
    // 退出
    tujichu() {
      localStorage.removeItem('knbh');
      localStorage.removeItem('headtop');
      this.delCookie("UserName");
      this.delCookie("UserId");
      localStorage.removeItem("Usytoken");
     this.$router.push({
        path: "/Virtal",
        query: {idata:"在线实验流程",parent:"虚拟仿真实验"}
      });
    },

    ajaxprocess() {
      iprocess({
        XAction: "GetDataInterface",
        XKLX: "SCDXXNJX",
        XDLMCID: "1001",
        XDLMSID: "DYBH2019061218293903598882",
        XDLMA: "2019060511114105058994"
      }).then(res => {
        this.gettopdata = res.rows;
      });
    },

    handleOpen(key, keyPath) {
      this.kkk(key);
    },
    handleClose(key, keyPath) {
      this.bbb(key);
    },
    //  点击请求获取后台数据
    ajaxAxios(urldata, postDta, callback) {
      // console.log(postDta);
      var postUrl = this.$http + urldata;
      this.axios
        .post(postUrl, postDta, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(
          function(res) {
            if (callback) {
              callback(res);
            }
          }.bind(this)
        )
        .catch(
          function(err) {
            if (err.response) {
            }
          }.bind(this)
        );
    },
 
    //1-1
    step(fenl, index) {
      var that = this;
      this.showIndex = index;
      this.PostDataVertify(
        {
          XDLMCID: "1001",
          XDLMSID: "DYBH201905301718571857250141",
          XDLMC: fenl //步骤分类
        },
        function(retunrData) {
          that.alldata = retunrData.rows;
        }
      );
    },
    //
    //1-1-1
    buzhouSy(knbh, stepNum) {
      var that = this;
      this.PostDataVertify(
        {
          XDLMCID: "1001",
          XDLMSID: "DYBH201905301718571857250141",
          XDLMA: knbh, //关联编号
          XDLMD: stepNum //本步id
        },
        function(retunrData) {
          that.getnextdata = retunrData.rows;
          if (retunrData.rows.length > 0) {
            if (retunrData.rows[0].数据类型 == "图片") {
              that.$router.push({
                path: "/Thebagimg",
                query: { luid: retunrData.rows[0].id, xdlma: knbh }
              });
            } else {
              that.$router.push({
                path: "/Thevideo",
                query: { luid: retunrData.rows[0].id, xdlma: knbh }
              });
            }
          }
        }
      );
    },
    //删除cookies
    delCookie: function(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookieName(name);
      if (cval != null) {
        document.cookie =
          name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
      } else {
        //跳到登录页的路由
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import url("../../Shiyan.css");
#app {
  .element.style {
    padding-left: 0px !important;
  }
}

//头部
.el-header {
  height: 100px;
  width: 100%;
}
.log {
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 34px 0px 10px 0px;
  .top_left {
    width: 60%;
    height: 100%;
    cursor: pointer;
  }
  .top_right {
    margin-left: 5%;
    height: 100%;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
      border: 1px solid white;
      border-radius: 50%;
      display: block;
      color: white;
      float: left;
    }
    span {
      color: white;
      font-size: 18px;
      float: left;
      margin-left: 5px;
    }
  }
}
.foota_one {
  &::before {
    position: absolute;
    content: "";
    width: 2px;
    height: 15px;
    background: white;
    top: 9px;
    right: -5px;
  }
}
.foota {
  color: white;
  font-size: 16px;
  padding: 5px;
  position: relative;
}
.foot_span {
  cursor: pointer;
  font-size: 16px;
}
// 虚拟实验
.el-main {
  padding: 0;
}
</style>