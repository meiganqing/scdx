<template>
	<el-container class="teach">
		<el-aside style="height:1000px">
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu @open="handleOpen" @close="handleClose" 
				unique-opened
				class="el-menu-vertical-demo" text-color="#ffffff" background-color="#A38638" active-text-color="#ffffff" router :default-openeds="this.zhankai">
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
						<el-menu-item class="tem_el" @click="clicktake('建设概况')">建设概况</el-menu-item>
						<el-menu-item class="tem_el" @click="laoshi">师资队伍</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('教学平台')">教学平台</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('中心概况')">中心概况</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('规章制度')">规章制度</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('通知公告')">通知公告</el-menu-item>
					</el-submenu>
				 <el-submenu index="2" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">实验制度</span>
            </template>
            <el-menu-item class="tem_el" @click="taket('实验制度')">实验制度</el-menu-item>
             <el-menu-item  class="tem_el"  @click="taket('实验制度')">实验室管理</el-menu-item>
          </el-submenu>
          
           <el-submenu index="3" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">虚拟仿真实验</span>
            </template>
            <el-menu-item class="tem_el" @click="taketsy('在线实验介绍')">在线实验介绍</el-menu-item>
             <el-menu-item  class="tem_el"  @click="taketsy('在线实验流程')">在线实验流程</el-menu-item>
              <el-menu-item  class="tem_el"  @click="taketsy('线下实验介绍')">线下实验介绍</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/Virtal?parent=虚拟仿真实验" class="tem_e">虚拟仿真实验</el-menu-item> -->
          <!-- 资料下载 -->
            <el-submenu index="4" class="teach_elsum">
            <template slot="title" id="teach_elsum_title">
              <span id="teach_elsum_title">资料下载</span>
            </template>
            <el-menu-item class="tem_el" @click="taketzl('教学资料')">教学资料</el-menu-item>
             <el-menu-item  class="tem_el"  @click="taketzl('图纸下载')">图纸下载</el-menu-item>
          </el-submenu>
					<el-menu-item index="/theask" class="tem_e">
						互问互答
					</el-menu-item>
					<el-menu-item index="/TheContact" class="tem_e">
						联系我们
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-aside>

		<!-- 子组件 -->
		<el-main class="TheColumn" style="  padding:0 ">
			<div class="thecolumn">
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/' }">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/teach' }">中心简介</el-breadcrumb-item>

					<el-breadcrumb-item :to="{ path:'/teach', query:{ idata:this.Titlenemr}}">{{this.$route.query.biaoti}}</el-breadcrumb-item>
					<el-breadcrumb-item><div class="endcolor" style="color:#A48638">详情</div></el-breadcrumb-item>
				</el-breadcrumb>
				<!-- 详情内容 -->
				<div class="tlist">
					<div class="hhh">{{columdata.标题}}</div>
					<div class="list_text" v-html="columdata.内容" style=" letter-spacing: 3px"></div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>Titlenemr
<script>
	import TheColumn from "@/components/TheColumn";
	export default {
		name: "Teachdata",
		data() {
			return {
				XDLMCID: "1001",
				page: 1,
				rows: 20,
				namedata: "",
				columdata: "",
				Titlenemr: "", //返回列表页带的名字
				zhankai: ["1"],
				jianshe: '1',
				//改变
				list: [{
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
		mounted() {
			this.ajaxfirst();
		},

		methods: {
			    // 实验制度
taket(name){
 this.$router.push({
        path: "/tester",
        query: {
          idata:name
        }
      });
},
// 资料下载
taketzl(name){
this.$router.push({
        path: "/data",
        query: {
          idata:name
        }
      });
},
// 虚拟实验
taketsy(name){
  this.$router.push({
        path: "/virtal",
        query: {
          idata:name
        }
      });
},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},

			//首次进入
			ajaxfirst() {
				var that = this;
				that.Titlenemr = that.$route.query.biaoti;//面包屑
				this.PostData({
						XAction: that.XAction,
						XKLX: that.XKLX,
						XDLMCID: that.XDLMCID,
						page: that.page,
						rows: that.rows,
						XDLMSID: "DYBH20190529131215121515902",
						XDLMA: that.$route.query.idata //路由参数id名字
					},
					function(retunrData) {
						that.columdata = retunrData.rows[0];

					}
				);
			},
			laoshi() {
				this.$router.push({
					path: "/teacher"
				})
			},
			clicktake(namedata) {

				this.$router.push({
					path: "/teach",
					query: {
						idata: namedata
					}
				});
			},

			handleClose(key, keyPath) {}
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
			padding: 40px;
			.hhh {
				text-align: center;
				font-weight: 700px;
				font-size: 25px;
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