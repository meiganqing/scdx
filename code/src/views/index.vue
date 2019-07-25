<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="block">
      <el-carousel height="460px" arrow="never">
        <el-carousel-item>
          <img src="../assets/xmimage/index-img/banner01.png" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/xmimage/index-img/banner2.png" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/xmimage/index-img/banner01.png" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/xmimage/index-img/banner2.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="connent_news">
      <div class="box_one">
        <!-- 视频 -->
        <div class="box_one_video" style="object-fit:fill">
          <video style="width:100%; height:100%; object-fit:fill" id="myVideo" class="video-js">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          </video>
        </div>
        <!-- 通知公告 -->
        <div class="box_one_gonggao">
          <div class="notice_top">
            <div class="top_text">
              <div class="xlb">
                <img src="../assets/xmimage/index-img/tzgg-red.png" alt />
              </div>
              <div class="top_text_add">通知公告</div>
              <span>/Announcements</span>
            </div>
            <router-link
              tag="div"
              :to="{path:'/teach', query:{idata:'通知公告',parent:'中心简介'}}"
              class="notice_more"
            >more>></router-link>
          </div>
          <!-- 内容列 -->
          <div class="notice_text">
            <router-link
              :to="{path:'/teachdata', query:{idata:item.id,biaoti:item.分类,parent:'中心简介'}}"
              class="notic_a"
              tag="div"
              v-for="(item,index) in getindexdata"
              :key="index"
            >
              <div class="ntp">{{item.标题}}</div>
              <span>{{item.日期.substring(0,item.日期.indexOf(" "))}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 新闻 -->
      <div class="box_two">
        <div class="box_two_new">
          <div class="new">
            <!-- 4.2 -->
            <div class="new_content">
              <ul class="net_contentul" v-for="(item,index) in getnewdata" :key="index">
                <li class="nlione">
                  <img :src="item.首页图片地址" alt />
                </li>
                <li class="nlitwo">
                  <router-link
                    :to="{path:'/teachdata', query:{idata:item.id,biaoti:item.分类,parent:'中心简介'}}"
                    class="lifour"
                    tag="div"
                  >{{item.标题}}</router-link>
                </li>
                <!-- <li class="nlithree" v-html="item.内容"></li> -->
                <li class="nlofour">
                  <img src="../assets/xmimage/index-img/date.png" alt />
                  <div>{{item.日期.substring(0,item.日期.indexOf(" "))}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <router-link
          :to="{path:'/teach', query:{idata:'新闻聚焦'}}"
          tag="div"
          class="box_two_button"
        >查看更多</router-link>
      </div>
    </div>
    <!-- 内容 -->
    <div class="connent">
      <!-- 在线学习 -->
      <div class="box_three">
        <div class="box_three_left">
          <img src="../assets/xmimage/index-img/xnfz.png" class="xnfz" alt />
          <div class="box_three_left_h1">
            <router-link
              style="cursor: pointer;"
              :to="{path:'/Virtal', query:{idata:'在线实验介绍',parent:'虚拟仿真实验'}}"
              tag="div"
            >虚拟仿真实验介绍</router-link>
          </div>
          <div class="box_three_left_h2">INTRODUCTION TO VIRTUAL</div>
          <div class="box_three_left_h2">SIMULATION EXPERIMENT</div>
        </div>
        <div class="box_three_right">
          <img src="../assets/xmimage/index-img/图层 349.png" alt />
          <router-link
            :to="{path:'/Virtal', query:{idata:'在线实验流程',parent:'虚拟仿真实验'}}"
            tag="div"
            class="box_three_button"
          >查看更多</router-link>
        </div>
      </div>
      <!-- 线下实践-->
      <div class="box_xianxia">
        <div class="box_xianxi_left">
          <img src="../assets/xmimage/index-img/2.png" alt />
        </div>
        <div class="box_xianxi_right">
          <img src="../assets/xmimage/index-img/xxsy.png" alt class="box_xianxi_right_img" />
          <div class="box_xianxi_right_h1">
            <router-link
              style="cursor: pointer;"
              :to="{path:'/Virtal', query:{idata:'线下实验介绍',parent:'虚拟仿真实验'}}"
              tag="div"
            >线下实践平台介绍</router-link>
          </div>
          <div class="box_xianxi_right_h2">OFFLINE PRACTICE PLATFORM</div>
          <div class="box_xianxi_right_h2">INTRODUCTION</div>
        </div>
      </div>
    </div>
    <!-- 资料下载互问互答 -->
    <div class="box_ziliao">
      <div class="ziliao_one">
        <div class="box_ziliao_left">
          <div class="box_ziliao_top">
            <div class="box_ziliao_top_left">
              <span>
                <img src="../assets/xmimage/index-img/xz.png" alt />
              </span>
              <div class="box_ziliao_down">
                <label>资料下载</label>
                <span>Data download</span>
              </div>
            </div>

            <div class="box_ziliao_top_right">
              <router-link :to="{path:'/data',query:{idata:'教学资料',parent:'资料下载'}}">MORE>></router-link>
            </div>
          </div>
          <div class="box_ziliao_bottom">
            <div class="box_ziliao_bottom_zl">
              <div class="box_ziliao_bottom_zl_top">
                <img src="../assets/xmimage/index-img/教学资料.png" alt />
              </div>
              <div class="box_ziliao_bottom_zl_bottom">
                <a
                  :href="apiurl+item.文件地址"
                  target="_blank"
                  tag="div"
                  class="data_text"
                  v-for="(item,index) in getteachdata"
                  :key="index"
                >
                  <p>{{item.资料名称 | snippet}}</p>
                </a>
              </div>
            </div>

            <div class="box_ziliao_bottom_tz">
              <div class="box_ziliao_bottom_tz_top">
                <img src="../assets/xmimage/index-img/图纸下载.png" alt />
              </div>
              <div class="box_ziliao_bottom_tz_bottom">
                <a
                  :href="apiurl+item.文件地址"
                  target="_blank"
                  tag="div"
                  class="data_text"
                  v-for="(item,index) in getdrawdata"
                  :key="index"
                >
                  <p>{{item.资料名称 | snippet}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span class="ziliao_one_span"></span>
        <div class="box_ziliao_right">
          <div class="box_ziliao_top box_hw_top">
            <div class="box_ziliao_top_left">
              <span>
                <img src="../assets/xmimage/index-img/wd.png" alt />
              </span>
              <div class="box_ziliao_down">
                <label>互问互答</label>
                <span>Ask and answer</span>
              </div>
            </div>
            <div class="box_ziliao_top_right">
              <router-link :to="{path:'/theask',query:{parent:'互问互答'}}">MORE>></router-link>
            </div>
          </div>
          <div class="box_ask_bottom">
            <div class="box_ask_bottom_wt">
              <ul class="mf_ul">
                <li v-for="(item,index) in gethwhddata" :key="index">
                  <router-link
                    :to="{path:'Askdata/', query:{idata:item.id,parent:'互问互答'}}"
                  >问：{{item.问题名称}}</router-link>
                </li>
              </ul>
            </div>
            <div class="box_ask_bottom_img">
              <img src="../assets/xmimage/index-img/wd-bg.png" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- 六大学连接 -->
      <div class="univer">
        <div class="univer_box">
          <div class="univer_img">
            <router-link
              :to="{name:''}"
              tag="div"
              class="univer_img_a one"
              v-for="(item,index) in getYQLJ1"
              :key="index"
            >
              <img class="school_img" :src="ipUrl+item.首页图片地址" @click="skipYQLJ(item.内容)"  alt />
              <span>{{item.标题}}</span>
            </router-link>
            <!-- 6.2 -->
            <!--<router-link :to="{name:''}" tag="div" class="univer_img_a two">
              <span>历史文化学院（旅游学院）</span>
            </router-link>-->
            <!-- 6.3 -->
            <!--<router-link :to="{name:''}" tag="div" class="univer_img_a three">
              <span>四川大学博物馆</span>
            </router-link>-->
          </div>
          <div class="univer_link">
            <div class="link_h">常用链接</div>
            <div class="ul_box">
              <div class="link_ul">
                <div
                  v-for="(item,index) in getYQLJ1"
                  :key="index"
                  @click="skipYQLJ(item.内容)"
                  class="link_ul_a"
                >
                  <span>{{item.标题}}</span>
                </div>
                <!--<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
                <router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>-->
              </div>
              <div class="link_ul">
                <div
                  v-for="(item,index) in getYQLJ2"
                  :key="index"
                  @click="skipYQLJ(item.内容)"
                  class="link_ul_a"
                >
                  <span>{{item.标题}}</span>
                </div>
                <!--<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
                <router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>-->
              </div>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="bottom">
          <div class="list">
            <img src="../assets/xmimage/index-img/logo-6.png" alt />
            <span></span>
            <div class="right">
              <div>四川大学文化历史学院 .版权所有 ，地址：四川省成都市武侯区望江路29号。邮编：610064</div>
              <div>
                技术支持：陕西十月文化有限公司
                <a
                  style="cursor: pointer;"
                  :href="houtai"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <!-- <div style="cursor: pointer;"
              @click="text()"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div> -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getindex,
  getnew,
  introduced,
  online,
  system,
  teaching,
  drawing,
  team,
  hwhd,
  postDataYQLJ
} from "@/request/api";
export default {
  name: "index",
  components: {},
  data() {
    return {
      houtai:"",
      ipUrl: this.apiurl,
      XAction: "GetDataInterface",
      XKLX: "SCDXXNJX",
      XDLMCID: "1001",
      page: 1,
      rows: 20,
      XDLMSID: "DYBH20190529131215121519001",
      XDnew: "新闻聚焦",
      XDSYJS: "在线实验介绍",
      XDonlin: "在线实验介绍",
      //数据
      getonlinedata: [], //线上实验
      getintroudata: [], //线下实验
      getindexdata: [], //实验公告
      getsystemdata: [], //实验制度
      getnewdata: [], //新闻焦距
      getteachdata: [], //教学资料
      getdrawdata: [], //图纸下载
      getteamdata: [], //师资队伍
      gethwhddata: [], //问题列表
      getYQLJ1: [], //友情链接
      getYQLJ2: []
    };
  },
  mounted() {
     this.houtai=this.apiurl+"/scdx/admin/index.html"
    this.initVideo();
    this.ajaxGetindex();
    this.ajaxGetnew();
    this.ajaxIntroduced();
    this.ajaxonline();
    this.ajaxSymtem();
    this.ajaxTeach();
    this.ajaxDraw();
    this.ajaxteam();
    this.ajaxhwhd();
    this.ajaxyqlj();
  },
  methods: {
//     text(){
// window.location.href=this.apiurl+"/scdx/admin/index.html"
//     },
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        autoplay: false,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
    },
    //线上实验介绍
    ajaxonline() {
      online({
        XAction: "GetDataInterface",
        XKLX: "SCDXXNJX",
        XDLMCID: "1001",
        page: "1",
        rows: "20",
        XDLMSID: "DYBH20190529131215121519001",
        XDLMA: "线下实验介绍"
      }).then(res => {
        // console.log(res);
        this.getonlinedata = res.rows[0];
        // console.log("123");
        // console.log(this.getonlinedata);
      });
    },

    // 线下实验介绍
    ajaxIntroduced() {
      introduced({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH20190529131215121519001",
        XDLMA: "在线实验介绍"
      }).then(res => {
        this.getintroudata = res.rows[0];
      });
    },
    // 师资队伍
    ajaxteam() {
      team({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH201906121039333933176151"
      }).then(res => {
        this.getteamdata = res.rows;
        // console.log(this.getteamdata);
      });
    },
    //通知公告
    ajaxGetindex() {
      getindex({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: this.XDLMSID,
        XDLMA: "通知公告"
      }).then(res => {
        this.getindexdata = res.rows.slice(0, 7);
      });
    },
    //实验制度
    ajaxSymtem() {
      system({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH20190529131215121519001",
        XDLMA: "实验制度"
      }).then(res => {
        // console.log(res);
        this.getsystemdata = res.rows;
      });
    },
    // 新闻焦距
    ajaxGetnew() {
      getnew({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: this.XDLMSID,
        XDLMA: this.XDnew
      }).then(res => {
        this.getnewdata = res.rows.slice(0, 4);
      });
    },
    //教学资料下载
    ajaxTeach() {
      teaching({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH20190529131215121510011",
        QueryType: "资料类型",
        QueryKey: "教学资料"
      }).then(res => {
        this.getteachdata = res.rows.slice(0, 3);
        // console.log(this.getteachdata);
      });
    },
    //图纸下载
    ajaxDraw() {
      drawing({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH20190529131215121510011",
        QueryType: "资料类型",
        QueryKey: "图纸下载"
      }).then(res => {
        this.getdrawdata = res.rows.slice(0, 3);
      });
    },
    //互问互答
    ajaxhwhd() {
      hwhd({
        XAction: this.XAction,
        XKLX: this.XKLX,
        XDLMCID: this.XDLMCID,
        page: this.page,
        rows: this.rows,
        XDLMSID: "DYBH2019052913121512157721"
      }).then(res => {
        // console.log(res);
        this.gethwhddata = res.rows.slice(0, 5);
      });
    },
    //友情链接
    ajaxyqlj() {
      var that = this;
      this.PostData(
        {
          XAction: this.XAction,
          XKLX: this.XKLX,
          XDLMCID: this.XDLMCID,
          page: 1,
          rows: 6,
          XDLMSID: "DYBH20190529131215121519001",
          XDLMA: "友情链接"
        },
        function(res) {
          if (res.rows.length > 3) {
            that.getYQLJ1 = res.rows.slice(0, 3);
            that.getYQLJ2 = res.rows.slice(3, 6);
          } else {
            that.getYQLJ1 = res.rows;
          }

          // console.log(res.rows.slice(0, 3));
        }
      );
    },
    skipYQLJ(data) {
      // console.log(data);
      // window.location.href=data
      window.open(data, "_blank");
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("../../index.css");
.home {
  width: 100%;
  min-height: 1000px;
}
// 轮播
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__button {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
}

// 通知公告
.connent_news {
  padding: 20px 15.8% 0 15.8%;
  min-height: 838px;
  background: url("../assets/xmimage/index-img/tz-bg.jpg") no-repeat;
  background-size: 100% 100%;
  .box_one {
    height: 320px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // 视频
    .box_one_video {
      width: 43%;
      height: 320px;
      background: #475669;
      margin-right: 20px;
    }
    // 通知公告
    .box_one_gonggao {
      width: 54%;
      height: 320px;
      // background: yellow;2
      padding: 0 27px;
      font-family: Microsoft Yahei;
      .notice_top {
        width: 100%;
        height: 47px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #a48638;
        margin-top: 14px;
        .notice_more {
          cursor: pointer;
        }
        .top_text {
          width: 100%;
          display: flex;
          align-items: center;
          .xlb {
            margin-right: 10px;
            span {
              font-size: 16px;
              color: #444444;
              margin-left: 8px;
            }
          }
          .top_text_add {
            font-size: 18px;
            font-weight: 700;
            color: #a60d0d;
          }
        }
        a {
          font-size: 14px;
          color: #444444;
          cursor: pointer;
        }
      }
      .notice_text {
        width: 100%;
        margin-top: 14px;
        height: 241px;
        overflow: hidden;
        .notic_a {
          display: flex;
          cursor: pointer;

          .ntp {
            width: 60%;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            color: #333333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-family: "Microsoft YaHei";
          }
          span {
            width: 40%;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            color: #666666;
            text-align: right;
          }
        }
      }
    }
  }
  .box_two {
    clear: both;
    margin-top: 30px;
    width: 100%;
    height: 500px;
    background-size: 100% 100%;

    .box_two_button {
      box-sizing: border-box;
      display: block;
      text-align: center;
      line-height: 44px;
      margin: auto;
      width: 170px;
      height: 44px;
      // background: white;
      border: 2px solid #dadada;
      border-radius: 4px;
      color: #666666;
      font-size: 14px;
      margin-top: 38px;
      cursor: pointer;
    }
  }
}

.box_one_gonggao .notice_text .ntp:hover {
  color: #a48638 !important;
}
// 内容
.connent {
  padding: 40px 15.8% 40px 15.8%;
  min-height: 1000px;
  background: #f9f3eb;
  // 在线
  .box_three {
    display: flex;
    width: 100%;
    // height: 510px;
    // background: blue;
    .box_three_left {
      width: 43%;
      // height: 510px;
      background: #c5a44f;
      .xnfz {
        display: block;
        width: 60%;
      }

      .box_three_left_h1 {
        // margin-top: 5%;
        color: white;
        font-size: 42px;
        margin-left: 8%;
        cursor: pointer;
      }
      .box_three_left_h2 {
        color: white;
        font-size: 20px;
        margin-left: 8%;
      }
    }
    .box_three_right {
      flex: 1;
      // height: 510px;
      img {
        display: block;
        width: 100%;
      }
      // background: url("../assets/xmimage/index-img/图层 349.png") no-repeat;
      // background-size: 100% 100%;
      border-left: 4px solid #a60d0d;
      box-sizing: border-box;
      position: relative;
      .box_three_button {
        display: block;
        width: 23%;
        height: 50px;
        background: rgba($color: #000000, $alpha: 0.5);
        text-align: center;
        line-height: 50px;
        color: #ffd36f;
        font-size: 20px;
        border-radius: 5px;
        border: 1px solid #c9a95b;
        position: absolute;
        cursor: pointer;
        bottom: 6%;
        right: 6%;
      }
    }
  }

  //   线下实践平台
  .box_xianxia {
    width: 100%;
    // height: 510px;
    margin-top: 30px;
    background: #666666;
    display: flex;
    .box_xianxi_left {
      width: 65%;
      // height: 510px;
      // background: url("../assets/xmimage/index-img/2.png")
      img {
        display: block;
        width: 100%;
      }
    }
    .box_xianxi_right {
      width: 35%;
      // height: 510px;
      border-left: 4px solid #c5a44f;
      box-sizing: border-box;
      overflow: hidden;
      .box_xianxi_right_img {
        width: 65%;
        float: right;
        margin: 2%;
      }
      .box_xianxi_right_h1 {
        margin-top: 50px;
        float: right;
        color: white;
        font-size: 42px;
        margin-right: 8%;
        cursor: pointer;
      }
      .box_xianxi_right_h2 {
        float: right;
        color: white;
        font-size: 20px;
        margin-right: 8%;
      }
    }
  }
 
}

//六大学连接
.univer {
  height: 545px;
  padding-top: 50px;
  background: url("../assets/xmimage/index-img/bg-bottom.png") no-repeat;
  background-size: 100% 100%；;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .bottom {
    clear: both;
    height: 126px;
    background: rgba(113, 101, 66, 0.4);
    color: white;
    font-size: 20px;
    .list {
      width: 100%;
      height: 126px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: block;
      }
      span {
        width: 2px;
        height: 70px;
        background: rgba($color: #ffffff, $alpha: 0.1);
        margin: 0 28px;
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
      }
    }
  }
  //
  .univer_box {
    height: 364px;
    display: flex;
    align-items: center;
    padding: 0 12.2%;
    .univer_img {
      // padding: 0px 50px;
      width: 78%;
      display: flex;
      justify-content: space-around;
      .univer_img_a.one {
        width: 320px;
        height: 190px;
        /*background: url("../assets/xmimage/index-img/lj-bwg.jpg") no-repeat;*/
        background-size: 100% 100%;
        cursor: pointer;
        .school_img {
          width: 100%;
          overflow: hidden;
        }
        span {
          padding: 0 15px;
          height: 55px;
          font-size: 18px;
        }
      }
      .univer_img_a.two {
        width: 320px;
        height: 190px;
        background: url("../assets/xmimage/index-img/lj-lswhxy.jpg") no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        span {
          padding: 0 15px;
          height: 55px;
          font-size: 18px;
        }
      }
      .univer_img_a.three {
        width: 320px;
        height: 190px;
        background: url("../assets/xmimage/index-img/lj-scdx.jpg") no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        span {
          padding: 0 15px;
          height: 55px;
          font-size: 18px;
        }
      }
      .univer_img_a {
        display: block;
        width: 25%;
        height: 130px;
        position: relative;
        span {
          position: absolute;
          top: 40px;
          right: 0;
          height: 55px;
          background: rgba(206,149,39,0.8);
          /*opacity: 0.8;*/
          color: white;
          text-align: center;
          font-size: 18px;
          line-height: 55px;
        }
      }
    }
    .univer_link {
      width: 22%;
      height: 150px;
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      padding: 0 0 0 40px;
      margin-left: 40px;
      .link_h {
        font-size: 20px;
        color: white;
        padding-left: 10px;
      }
      .ul_box {
        display: flex;
        .link_ul {
          display: flex;
          flex-direction: column;
          .link_ul_a {
            color: white;
            font-size: 14px;
            padding: 10px;
            cursor: pointer;
            span:hover {
              color: "#a60d0d";
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1450px) {
  .ul_box {
    flex-direction: column;
  }
}

//  四新闻焦距
.new {
  width: 100%;
  .new_content {
    display: flex;
    height: 380px;
    overflow: hidden;
    width: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    .net_contentul {
      width: 23.8%;
      padding: 0;
      background-color: #f8f8f8;
      margin-right: 1.6%;
      margin-top: 0px !important;
      .nlione {
        width: 100%;
        height: 210px;
        border-bottom: 4px solid #a48638;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .nlitwo {
        height: 42px;
        /*height: 80px;*/
        font-size: 16px;
        color: #a48638;
        margin-top: 38px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 22px;
        .lifour {
          font-size: 16px;
          color: #666666;
          cursor: pointer;
          height: 44px;
          overflow: hidden;
          /*white-space: nowrap;*/
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          font-family: "Microsoft YaHei";
        }
      }
      .nlithree {
        // height: 110px;
        overflow: hidden;
        font-size: 12px;
        color: #414141;
        margin-top: 24px;
        letter-spacing: 2px;
        line-height: 20px;
        text-indent: 12px;
        padding: 0 22px;
      }
      .nlofour {
        margin-top: 32px;
        margin-bottom: 30px;
        display: flex;
        justify-content: flex-start;
        color: #a50c0c;
        font-size: 14px;
        padding: 0 22px;
        img {
          margin-right: 20px;
        }
        .lifour {
          display: flex;
          .att {
            color: #a48638;
            margin: 0 8px;
            img {
              display: block;
            }
          }
        }
      }
    }
  }
}
.net_contentul .nlitwo .lifour:hover {
  color: #a48638 !important;
}
.new_content .net_contentul:nth-child(4n) {
  margin-right: 0;
}

@media screen and (max-width: 1367px) {
  .box_three_left_h1 {
    font-size: 20px !important;
  }
  .box_three_left_h2 {
    font-size: 16px !important;
  }

  // 右
  .box_xianxi_right_h1 {
    font-size: 20px !important;
  }
  .box_xianxi_right_h2 {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 920px) {
  .box_three_left_h1 {
    font-size: 16px !important;
  }
  .box_three_left_h2 {
    font-size: 14px !important;
  }
  // 右
  .box_xianxi_right_h1 {
    font-size: 16px !important;
  }
  .box_xianxi_right_h2 {
    font-size: 14px !important;
  }
}
@media screen and (max-width: 920px) {
  .box_three_left_h1 {
    font-size: 12px !important;
  }
  .box_three_left_h2 {
    font-size: 10px !important;
  }
  // 右
  .box_xianxi_right_h1 {
    font-size: 12px !important;
  }
  .box_xianxi_right_h2 {
    font-size: 10px !important;
  }
}

//  @media screen and (max-width: 1367px) {
//     section.main { float: none; width: auto; } }
</style>