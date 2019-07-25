<!--  -->
<template>
  <div class="four">
    <div class="video_box">
      <video id="myVideo" class="video-js" style="width:100%; height:693px; object-fit:fill">
        <source :src="apiurl+sysj.步骤背景文件" type="video/mp4">
      </video>
      <!-- 问题 -->
      <el-dialog width="533px" style :visible.sync="myModal">
        <div class="content">
          <p>{{proData.problem}}</p>
          <el-button
            @click="checkAnswer(item,index)"
            :key="index"
            v-for="(item,index) in proData.check"
          >{{item}}</el-button>
        </div>
        <div slot="footer" class="dialog-footer">
          <!-- <el-button type="primary" @click="myModal = false">确 定</el-button> -->
        </div>
      </el-dialog>
      <!-- 描述 -->

      <div
        class="active"
        :style="{position:'absolute',top:topp,left:leftt,right:rightt,bottom:bottomm}"
      >{{sysj.步骤描述}}</div>

      
      <!-- 下一步按钮 -->
      <img src="../../assets/xmimage/index-img/下一步.png" alt class="nextimg" @click="gonext()">
      <!-- 上一步按钮 -->
      <!-- 上一步按钮 -->
      <img src="../../assets/xmimage/index-img/上一步.png" alt class="gongback" @click="goback()">
             <!-- 标题 -->
     <div class="biaoti">
      {{sysj.步骤名称}}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thevideo",
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route() {
      this.ajaxfirst();
    }
  },
  data() {
    return {
      retunrrows:"",
      topp: "",
      leftt: "",
      rightt: "",
      bottomm: "",
      sysj: [],
      myPlayer: "",
      problem: "",
      wtdata: "",
      proData: {},
      myModal: false,
      videotime: "",
      datata:1,
       knbhimg: "" , //库内编号
      number:"",//步骤序号
      sysj:"",
     wtdata :""
    };
  },
  created() {},
  mounted() {
    this.ajaxfirst();
    // this.video = setTimeout(this.initVideo, 500);
  },
  updated(){
    this.initVideo()
  },
  methods: {
    //  点击请求获取后台数据方法

    //页面打开请求
    ajaxfirst() {
      var that = this;
        that.knbhimg = that.$route.query.xdlma
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH201905301718571857250141",
          XDLMA: that.$route.query.xdlma,
          XDLMD: that.$route.query.luid,
          XDLME: that.$route.query.buxh
        },
        function(retunrData) {
          that.number = retunrData.rows[0].本步序号;
          that.sysj = retunrData.rows[0];
          that.wtdata = that.sysj.问答题;
              // if(that.sysj[0].步骤描述=='无'){
              //   that.miaoshu=2
              // }else{
              //   that.miaoshu=1
              // }
          if (that.sysj.描述位置 === "居中") {
            that.topp = "30%";
            that.leftt = "30%";
            that.rightt = null;
            that.bottomm = null;
          }
          if (that.sysj.描述位置 === "左上") {
            that.topp = "2%";
            that.rightt = null;
            that.leftt = "2%";
            that.bottomm = null;
          }
          if (that.sysj.描述位置 === "左下") {
            that.topp = null;
            that.rightt = null;
            that.leftt = "2%";
            that.bottomm = "2%";
          }
          if (that.sysj.描述位置 === "右下") {
            that.topp = null;
            that.rightt = "10%";
            that.leftt = null;
            that.bottomm = "2%";
          }
          if (that.sysj.描述位置 === "右上") {
            that.topp = "2%";
            that.rightt = "2%";
            that.leftt = null;
            that.bottomm = null;
          }
          // 描述是否为空
              if(that.sysj[0].步骤描述=='无'){
                that.miaoshu=2
              }else{
                that.miaoshu=1
              }
          
        }
      );
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
      console.log(str)
      //截取问题
      this.proData.problem = str.split('&')[1];
        console.log(this.proData.problem )
      //截取选项数组
      this.proData.check = str
        .split('&')[2]
        .split("/");
      //截取正确答案
      this.proData.answer = str.slice(str.lastIndexOf("&") +1 );
    },
    checkAnswer(val) {
      // 判断选择答案'是否正确'
      if (val.indexOf(this.proData.answer) > -1) {
        this.$message.success("恭喜你,答案正确,点击按钮进入下一步");
          this.myModal=false
      } else {
        this.$message.error("很抱歉,答案错误");
      }
    },
    //初始化视频方法
    initVideo() {
      var that = this;
      let myPlayer = this.$video(myVideo, {
        autoplay: true,
        controls: false,
        muted: false, //是否拥有控制条
        preload: "auto",
        width: "100%"
      });
      // 视频结束
      myPlayer.on("ended", function() { 
        // console.log("end", this.currentTime());
        // 视频结束答题弹框出现
                 // 问题
              if (that.sysj.问答题 != "无") {
                let type = that.sysj.问答题.split("&");
                if (type[0] =="填空") {
                  that
                    .$prompt(type[1], "问答题", {
                      confirmButtonText: "确定",
                      cancelButtonText: "取消",
                      inputValidator:type[2],
                      inputErrorMessage: "答案不正确"
                    })
                    .then(({ value }) => {
                      that.$message({
                        type: "success",
                        message: value
                      });
                    })
                    .catch(() => {
                      that.$message({
                        type: "info",
                        message: "取消输入"
                      });
                    });
                }
                if(type[0]=="选择"){
                    that.goProblem()
                }
              }
         
      });
    },
    //
    // 点击事件
    gonext() {
      var that = this;
      console.log(that.dataid);
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH2019061311341509412608",
          // XDLMB: "2019060511114105058994", //路由的id参数
 
          // XDLMA: that.number //本步序号
            XDLMB: that.knbhimg, //关联编号
          XDLMA: that.number //本步序号
        },
        function(retunrData) {
         
          that.dataid = retunrData.rows[0].下步编号;
          that.number = retunrData.rows[0].本步序号;

          if (retunrData.rows[0].步骤状态 === "启用") {
            if (retunrData.rows[0].数据类型 === "视频") {
              that.sysj = retunrData.rows; //数据给到页面
           
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
                if(that.sysj[0].步骤描述=='无'){
                that.miaoshu=2
              }else{
                that.miaoshu=1
              }
            } else {
              that.$router.push({
                path: "/Thebagimg",
                query: {
                  buxh: that.number,
                  xdlma:  that.knbhimg
                }
              });
            }
          }
        }
      );
    },
    //上一步按钮
    goback() {
      var that = this;
      // console.log(that.dataid);
      this.PostDataVertify(
        {
          XDLMCID: 1001,
          XDLMSID: "DYBH2019061311283009588111",
          // XDLMB: "2019060511114105058994", //路由的编号
           XDLMB: that.knbhimg,
          XDLMA: that.number //本步序号
        },
        function(retunrData) {
          console.log(retunrData);
          // that.retunrrows=retunrData.rows
          that.dataid = retunrData.rows[0].下步编号;
          that.number = retunrData.rows[0].本步序号;
          if (retunrData.rows[0].步骤状态 === "启用") {
            if (retunrData.rows[0].数据类型 === "视频") {
              that.sysj = retunrData.rows;
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
              if(that.sysj[0].步骤描述=='无'){
                that.miaoshu=2
              }else{
                that.miaoshu=1
              }
            } else {
              that.$router.push({
                path: "/Thebagimg",
                query: {
                  buxh: that.number,
                  xdlma: that.knbhimg,
                }
              });
            }
          }
        }
      );
    }
  }
};
</script>
<style lang='scss' scoped>
// <!-- 第四步视频-->
@import url("../../../Thevideo.css");
.four {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;

  .video_box {
    width: 100%;
    height: 100%;
    .video-js {
      width: 100%;
    }
    .nextimg {
      position: absolute;
      display: block;
      width: 160px;
      height: 60px;
      right: 10px;
      bottom: 10px;
 
      cursor: pointer;
      z-index: 100;
    }
    .gongback {
      position: absolute;
      display: block;
      width: 160px;
      height: 60px;
      left: 10px;
      bottom: 10px;
   
      cursor: pointer;
      z-index: 100;
    }
    // 描述
    .active {
      color: white;
      width: 30%;
      border-radius: 25px;
      border: 1px solid burlywood;
      box-sizing: border-box;
      font-size: 16px;
      text-indent: 20px;
      background-color: rgba(229, 241, 251, 0.5);
      letter-spacing: 3px;
      z-index: 1000;
    }
  }
}
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