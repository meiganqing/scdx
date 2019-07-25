<!--  -->
<template>
  <div class="twobox">
    <router-view />
    <div v-for="(imgItem ,index) in sysj" :key="index" class="Thebag_box">
      <div class="imgtu">
        <img :src="apiurl+imgItem.步骤背景文件" />
      </div>
      <!-- 选择问题 -->
      <el-dialog width="500px" style :visible.sync="myModal">
        <div class="content">
          <p>{{proData.problem}}</p>
          <el-button
            @click="checkAnswer(item,index)"
            :key="index"
            v-for="(item,index) in proData.check"
          >{{item}}</el-button>
        </div>
        <div slot="footer" class="dialog-footer">
          <!-- <el-button type="primary" >确 定</el-button> -->
        </div>
      </el-dialog>
      <!-- 下一步按钮 -->
      <img src="../../assets/xmimage/index-img/下一步.png" alt class="nextimg" @click="panduan()" />
      <!-- 上一步按钮 -->
      <img src="../../assets/xmimage/index-img/上一步.png" alt class="gongback" @click="goback()" />
      <!-- 描述-->
      <div
        class="active"
        v-show="miaoshu=='1'"
        :style="{position:'absolute',top:topp,left:leftt,right:rightt,bottom:bottomm}"
      >{{imgItem.步骤描述}}</div>
      <!-- 标题 -->
      <div class="biaoti">{{imgItem.步骤名称}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thebagimg",
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route() {
      this.ajaxfirst();
    }
  },
  data() {
    return {
      miaoshu: "1",
      dclick: "",
      topp: "",
      leftt: "",
      rightt: "",
      bottomm: "",
      sysj: [],
      dataxh: "",
      proData: {},
      myModal: false,
      wtdata: "", //问题数据
      type: "",
      knbhimg: "" , //库内编号
      number:"",//步骤序号
      sysj:"",
     wtdata :""
    };
  },
  //  注册
  components: {},
  //
  mounted() {
    // 请求数据
    this.ajaxfirst();

  },
  // 点击切换图片
  methods: {
    //页面打开请求
    ajaxfirst() {
      var that = this;
    that.knbhimg = that.$route.query.xdlma
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH201905301718571857250141",
          XDLMA: that.$route.query.xdlma, //接受的编号
          XDLMD: that.$route.query.luid, //路由的id参数
          XDLME: that.$route.query.buxh,
        },
        function(retunrData) {
          console.log(retunrData)
          that.number = retunrData.rows[0].本步序号;
          that.sysj = retunrData.rows;
          that.wtdata = that.sysj[0].问答题;
          if (that.sysj[0].步骤描述 == "无") {
            that.miaoshu = 2;
          } else {
            that.miaoshu = 1;
          }
          if (that.sysj[0].描述位置 === "居中") {
            that.topp = "40%";
            that.leftt = "40%";
            that.rightt = null;
            that.bottomm = null;
          }
          if (that.sysj[0].描述位置 === "左上") {
            that.topp = "2% ";
            that.leftt = "2% !important";
            that.rightt = null;
            that.bottomm = null;
          }
          if (that.sysj[0].描述位置 === "左下") {
            that.bottomm = "2%";
            that.leftt = "2%";
            that.topp = null;
            that.rightt = null;
          }
          if (that.sysj[0].描述位置 === "右下") {
            that.bottomm = "2%";
            that.rightt = "2%";
            that.leftt = null;
            that.topp = null;
          }
          if (that.sysj[0].描述位置 === "右上") {
            that.topp = "2%";
            that.rightt = "2%";
            that.leftt = null;
            that.bottomm = null;
            // that.leftt = "100 !important";
          }
        }
      );
    },
    //  点击请求获取后台数据方法
    //  PostData(urldata, postDta, callback) {
    //    var postUrl = this.$http + urldata;
    //    this.axios
    //      //  .post(postUrl, this.qs.stringify(postDta),
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
    //          }
    //        }.bind(this)
    //      );
    //  },
    // 下一步答题判断
    panduan() {
      var that = this;
      that.dclick = 0;
      if (that.sysj[0].问答题 != "无") {
        let type = that.type;
        that.type = that.sysj[0].问答题.split("&");
        that.type[2] = "/" + that.type[2] + "/";

        if (that.type[0] == "填空") {
          that
            .$prompt(that.type[1], "问答题", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              // inputValidator:that.type[2],
              inputPattern:eval(that.type[2]),
              inputErrorMessage: "答案不正确,正确答案是" + that.type[2] + ""
            })
            .then(({ value}) => {
              that.gonext();
            });
        }
        if (that.type[0] == "选择") {
          that.goProblem();
        }
      } else {
        that.gonext();
      }
      //
    },
    // 返回答题判断
    panduanT() {
      // 问题
      var that = this;
      that.dclick = 1;
      console.log(that.sysj[0].问答题);
      if (that.sysj[0].问答题 !== "无") {
        let type = that.type;
        that.type = that.sysj[0].问答题.split("&");
        if (that.type[0] == "填空") {
          that
            .$prompt(that.type[1], "问答题", {
              showCancelButton: true,
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              inputValidator: that.type[2],
              inputErrorMessage: "答案不正确"
            })
            .then(({ value, answer }) => {
              if (value == that.type[2]) {
                that.$alert("回答正确，返回上一步", {
                  confirmButtonText: "确定",
                  callback:instance => {
                    that.goback();
                  }
                });
              } else {
                that.$alert("回答错误", {
                  confirmButtonText: "确定"
                });
              }
            });
        }
        if (that.type[0] == "选择") {
          that.goProblem();
        }
      } else {
        that.goback();
      }
    },
    // 问答题
    goProblem() {
      //弹窗显示
      this.myModal = true;
      //获取到你的数据
      this.proData = {
        problem: this.wtdata
      };
      let str = this.proData.problem;
      console.log(str);
      //截取问题
      this.proData.problem = str.split("&")[1];
      console.log(this.proData.problem);
      //截取选项数组
      this.proData.check = str.split("&")[2].split("/");
      //截取正确答案
      this.proData.answer = str.slice(str.lastIndexOf("&") + 1);
    },
    checkAnswer(val) {
      // 判断选择答案'是否正确'
      if (val.indexOf(this.proData.answer) > -1) {
        this.$message.success("恭喜你,答案正确");
        if (this.dclick == 0) {
          this.gonext();
          this.myModal = false;
        }
        //  }else{
        //      this.goback();
        //     this.myModal = false;
        //  }
      } else {
        this.$message.error("很抱歉,答案错误");
      }
    },
    // 点击下一步执行
    gonext() {
      var that = this;
      console.log("关联编号")
      console.log( that.knbhimg)
       console.log("本步序号")
      console.log(that.number)
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH2019061311341509412608",
          XDLMB: that.knbhimg, //关联编号
          XDLMA: that.number //本步序号
        },
        function(retunrData) {
          console.log("下一步数据")
          console.log(retunrData)
          that.number = retunrData.rows[0].本步序号;
          if (retunrData.rows[0].步骤状态 === "启用") {
            if (retunrData.rows[0].数据类型 === "图片") {
              that.sysj = retunrData.rows; //数据给到页面
              that.wtdata = that.sysj[0].问答题;
              // 步骤描述为空的时候
              console.log(that.sysj);
              console.log(that.sysj[0].步骤描述);
              if (that.sysj[0].步骤描述 == "无") {
                that.miaoshu = 2;
              } else {
                that.miaoshu = 1;
              }

              if (that.sysj[0].描述位置 === "居中") {
                that.topp = "35%";
                that.leftt = "35%";
                that.rightt = null;
                that.bottomm = null;
              }
              if (that.sysj[0].描述位置 === "左上") {
                that.topp = "2% ";
                that.leftt = "2% !important";
                that.rightt = null;
                that.bottomm = null;
              }
              if (that.sysj[0].描述位置 === "左下") {
                that.bottomm = "2%";
                that.leftt = "2%";
                that.topp = null;
                that.rightt = null;
              }
              if (that.sysj[0].描述位置 === "右下") {
                that.bottomm = "2%";
                that.rightt = "2%";
                that.leftt = null;
                that.topp = null;
              }
              if (that.sysj[0].描述位置 === "右上") {
                that.topp = "2%";
                that.rightt = "2%";
                that.leftt = null;
                that.bottomm = null;
              }
            } else {
              that.$router.push({
                path: "/Thevideo",
                query: { buxh: that.number, xdlma:that.knbhimg }
              });
            }
          }
        }
      );
    },
    //上一步
    goback() {
      var that = this;
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH2019061311283009588111",
          XDLMB: that.knbhimg, //关联编号
          XDLMA: that.number //本步序号
        },
        function(retunrData) {
          that.number = retunrData.rows[0].本步序号;
          if (retunrData.rows[0].步骤状态 === "启用") {
            if (retunrData.rows[0].数据类型 === "图片") {
              that.sysj = retunrData.rows; //数据给到页面
              that.wtdata = that.sysj[0].问答题;
              //
              if (that.sysj[0].步骤描述 == "无") {
                that.miaoshu = 2;
              } else {
                that.miaoshu = 1;
              }
              if (that.sysj[0].描述位置 === "居中") {
                that.topp = "30%";
                that.leftt = "30%";
                that.rightt = null;
                that.bottomm = null;
              }
              if (that.sysj[0].描述位置 === "左上") {
                that.topp = 0;
                that.rightt = null;
                that.leftt = 0;
                that.bottomm = null;
              }
              if (that.sysj[0].描述位置 === "左下") {
                that.topp = null;
                that.rightt = null;
                that.leftt = 0;
                that.bottomm = 0;
              }
              if (that.sysj[0].描述位置 === "右下") {
                that.topp = null;
                that.rightt = "10%";
                that.leftt = null;
                that.bottomm = 0;
              }
              if (that.sysj[0].描述位置 === "右上") {
                that.topp = 0;
                that.rightt = 0;
                that.leftt = null;
                that.bottomm = null;
              }
            } else {
              that.$router.push({
                path: "/Thevideo",
                query: { buxh: that.number, xdlma: that.knbhimg }
              });
            }
          }
        }
      );
    }
  }
  //
};
</script>
<style lang='scss' scoped>
@import url("../../../Thevideo.css");
@import "../../../img.css";
.twobox {
  width: 100%;
  height: 100%;
  position: relative;
  // 下一步按钮
  .nextimg {
    position: absolute;
    display: block;
    width: 160px;
    height: 60px;
    right: 10px;
    bottom: 10px;

    cursor: pointer;
  }
  //上一步按钮
  .gongback {
    position: absolute;
    display: block;
    width: 160px;
    height: 60px;
    left: 10px;
    bottom: 10px;

    cursor: pointer;
  }
  //
  // 描述
  .active {
    border-radius: 25px;
    padding: 10px;
    max-width: 30%;
    border: 1px solid burlywood;
    box-sizing: border-box;
    font-size: 16px;
    text-indent: 20px;
    background-color: rgba(229, 241, 251, 0.5);
    letter-spacing: 3px;
  }

  // 图片
  .Thebag_box {
    width: 100%;
    height: 100%;
  }
  .twobutton {
    position: absolute;
  }
  .imgtu {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

// 标题
.biaoti {
  position: absolute;
  color: white;
  width: 290px;
  height: 60px;
  text-align: center;
  top: 10px;
  left: 40%;
  font-size: 26px;
  font-weight: 700;
  background-color: #463813;
  border: 2px solid burlywood;
  padding: 8px;
}
</style>