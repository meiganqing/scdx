<template>
	<el-container class="teach">
		<el-aside style="height:1000px">
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu unique-opened default-active="1" class="el-menu-vertical-demo" text-color="#ffffff" @close="handleClose" background-color="#A38638" active-text-color="#ffffff" router :default-openeds="this.zhankai">
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

					<el-submenu index="/tester" class="tem_e">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">实验制度</span>
						</template>
						<el-menu-item class="tem_el" @click="clicktake('实验制度')">实验制度</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('实验室管理')">实验室管理</el-menu-item>
					</el-submenu>
					<!-- 虚拟仿真 -->
					<el-submenu index="3" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">虚拟仿真实验</span>
						</template>
						<el-menu-item class="tem_el" @click="taketsy('在线实验介绍')">在线实验介绍</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('在线实验流程')">在线实验流程</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('线下实验介绍')">线下实验介绍</el-menu-item>
					</el-submenu>
					<!-- 资料下载 -->
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
		<el-main class="TheColumn" style=" padding:0;">
			<div class="thecolumn">
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/',query:{parent:'首页'} }">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/tester',query:{parent:'实验制度'} }">实验制度</el-breadcrumb-item>
					<el-breadcrumb-item>
						<div class="endcolor" style="color:#A48638">{{ this.Titlenemr}}</div>
					</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="tlist">
					<ul class="textul">
						<div tag="div" class="divr" @click="XiangQ(item.id)" v-for="(item,index) in columdata" :key="index">
							<div class="divq">
								<span id="spanq1">
                  <span id="spanq2"></span>
								</span>
								&nbsp;&nbsp;{{item.标题}}
							</div>
							<span>{{item.日期}}</span>
						</div>
					</ul>
					<!--分页-->
					<div class="block pagination-module">
						<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="rows" layout="total, prev, pager, next" :total="total"></el-pagination>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	import TheColumn from "@/components/TheColumn";
	export default {
		inject: ["reload"],
		name: "teach",
		data() {
			return {
				//分页
				currentPage1: 1,
				total: 0,
				listNum: 1, //分页总条数
				page: 1,
				rows: 20,
				XDLMCID: "1001",
				XDLMSID: "DYBH20190529131215121519001",
				namedata: "",
				columdata: [],
				Titlenemr: "",
				zhankai: ["/tester"]
				//改变
			};
		},

		components: {
			TheColumn
		},
		mounted() {
			this.xiangqing();
			this.Titlenemr = this.$route.query.idata;
			if(this.$route.query.idata) {
				this.ajaxfirst(this.page, this.$route.query.idata);
			} else {
				this.ajaxfirst(this.page);
			}
			this.$router.push({

				query: {
					idata: this.Titlenemr,
					parent: "实验制度"
					//传给详情的标题名字
				}
			});
		},
		watch: {
			$route(to, from) {
				this.page = 1
				this.ajaxfirst(this.page, this.$route.query.idata);
			}
		},
		methods: {
			// 虚拟仿真
			taketsy(name) {
				this.$router.push({
					path: "/virtal",
					query: {
						idata: name
					}
				});
			},

			laoshi(parent) {
				this.$router.push({
					path: "/teacher",
					query: {
						parent: parent
					}
				});
			},
			//   跳转中心简介
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
			taketzl(name) {
				this.$router.push({
					path: "/data",
					query: {
						idata: name
					}
				});
			},

			// 接受标题
			jieshou() {
				this.Titlenemr = this.$route.query.idata;
			},
			//分页
			handleSizeChange(val) {},
			handleCurrentChange(val) {

				this.page = val;
				this.ajaxfirst(this.page, this.type); //第一次请求数据
			},
			XiangQ(data) {
				this.$router.push({
					path: "/Testerdata",
					query: {
						idata: data,
						biaoti: this.Titlenemr //传给详情的标题名字
					}
				});
			},

			//首次进入
			ajaxfirst(page, type) {
				var that = this;
				this.Titlenemr = this.$route.query.idata;
				this.PostData({
						XAction: that.XAction,
						XKLX: that.XKLX,
						XDLMCID: that.XDLMCID,
						page: page,
						rows: that.rows,
						XDLMSID: "DYBH20190529131215121519001",
						XDLMA: type
					},
					function(retunrData) {
						if(page == 1) {
							that.total = retunrData.total;
						}
						that.columdata = retunrData.rows;
					}
				);
			},
			//
			//页面打开请求
			clicktake(namedata) {
				var that = this;
				that.page = 1
				//				this.ajaxfirst(that.page, namedata);
				that.Titlenemr = namedata;
				this.$router.push({
					query: {
						parent: "实验制度",
						idata: namedata
					}
				});
			},
			xiangqing() {
				//从标题和详情页面跳转过来名字
				this.Titlenemr = this.$route.query.idata;
			},
			//
			handleClose(key, keyPath) {}
		}

		//
	};
</script>
<style lang="scss" scoped>
	@import url("../../Teach.css");
	// 右侧
	.thecolumn {
		display: flex;
		flex-direction: column;
		background: white !important;
		height: 100%;
		.tlist {
			.textul {
				padding: 0px 48px;
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
				}
			}
			.pagination-module {
				text-align: center;
				padding: 15px;
				box-sizing: border-box;
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
		.el-submenu__title {
			font-size: 0 !important;
		}
	}
</style>