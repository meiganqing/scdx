<template>
	<el-container class="teach">
		<el-aside>
			<!-- 侧边菜单栏目 -->
			<el-col class="teachel">
				<el-menu unique-opened text-color="#ffffff" background-color="#A38638" active-text-color="#ffffff" router class="el-menu-vertical-demo" default-active="2" @open="handleOpen" @close="handleClose" :default-openeds="this.zhankai">
					<el-submenu index="1" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">中心简介</span>
						</template>
						<el-menu-item class="tem_el" @click="clicktake('建设概况','中心简介')">建设概况</el-menu-item>
						<el-menu-item class="tem_el" @click="laoshi('中心简介','师资队伍')">师资队伍</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('教学平台','中心简介')">教学平台</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('新闻聚焦','中心简介')">新闻聚焦</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('中心概况','中心简介')">中心概况</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('规章制度','中心简介')">规章制度</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('通知公告','中心简介')">通知公告</el-menu-item>
					</el-submenu>
					<el-submenu index="2" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">实验制度</span>
						</template>
						<el-menu-item class="tem_el" @click="taket('实验制度','实验制度')">实验制度</el-menu-item>
						<el-menu-item class="tem_el" @click="taket('实验制度','实验制度')">实验室管理</el-menu-item>
					</el-submenu>

					<el-submenu index="3" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">虚拟仿真实验</span>
						</template>
						<el-menu-item class="tem_el" @click="taketsy('在线实验介绍','虚拟仿真实验')">在线实验介绍</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('在线实验流程','虚拟仿真实验')">在线实验流程</el-menu-item>
						<el-menu-item class="tem_el" @click="taketsy('线下实验介绍','虚拟仿真实验')">线下实验介绍</el-menu-item>
					</el-submenu>
					<!-- <el-menu-item index="/Virtal?parent=虚拟仿真实验" class="tem_e">虚拟仿真实验</el-menu-item> -->
					<!-- 资料下载 -->
					<el-submenu index="4" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">资料下载</span>
						</template>
						<el-menu-item class="tem_el" @click="taketzl('教学资料','资料下载')">教学资料</el-menu-item>
						<el-menu-item class="tem_el" @click="taketzl('图纸下载','资料下载')">图纸下载</el-menu-item>
					</el-submenu>
					<!-- <el-menu-item index="/data?parent=资料下载" class="tem_e">资料下载</el-menu-item> -->
					<el-menu-item index="/theask?parent=互问互答" class="tem_e">互问互答</el-menu-item>
					<el-menu-item index="/TheContact?parent=联系我们" class="tem_e">联系我们</el-menu-item>
				</el-menu>
			</el-col>
		</el-aside>
		<!-- 子组件 -->
		<el-main class="TheColumn" style="  padding:0;">
			<div class="thecolumn">
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;line-height: 40px;padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/' ,query:{parent:'首页'}}">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/teach',query:{parent:'中心简介'}}">中心简介</el-breadcrumb-item>
					<!-- <el-breadcrumb-item  v-show="jianshe=='1'">建设概况</el-breadcrumb-item> -->
					<el-breadcrumb-item>
						<div class="endcolor" style="color:#A48638">{{ this.Titlenemr}}</div>
					</el-breadcrumb-item>
					<!-- <el-breadcrumb-item>{{ this.$route.query.biaoti}}</el-breadcrumb-item> -->
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
						<!-- </el-table> -->
					</ul>
				</div>

				<!--分页-->
				<div class="block pagination-module">
					<el-pagination 
					
					background 
					@size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="20" layout="total, prev, pager, next" :total="total">
						
					</el-pagination>
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
				userList: [],
				tabdata: [],
				currentPage1: 1,
				total: 0,
				listNum: 1, //分页总条数
				page: 1,
				rows: 20,
				zhankai: ["1"],
				uniqueOpened: false,
				//
				XAction: "GetDataInterface",
				XKLX: "SCDXXNJX",
				XDLMCID: "1001",
				XDLMSID: "DYBH20190529131215121519001",
				namedata: "",
				columdata: [],
				Titlenemr: "",
				// jianshe:'1',
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
		// 计算属性分页
		computed: {},
		watch: {

			$route(to, from) {
				console.log("路由发生了变化")
				console.log(this.$route.query.idata)
				this.Titlenemr=this.$route.query.idata
				this.page = 1

				this.ajaxfirst(this.$route.query.idata, this.page); //第一次请求数据


			}
		},
		components: {
			TheColumn
		},
		mounted() {
			this.xiangqing();
			var type=""
			if(this.$route.query.idata) {
				this.Titlenemr = this.$route.query.idata;
				this.ajaxfirst(this.$route.query.idata, this.page); //第一次请求数据
			} else if(this.$route.query.biaoti) {
				this.Titlenemr = this.$route.query.biaoti;
				this.ajaxfirst(this.$route.query.biaoti, this.page); //第一次请求数据
			} else if(this.$route.query.Tc) {
				this.Titlenemr = this.$route.query.Tc;
				this.ajaxfirst(this.$route.query.Tc, this.page); //第一次请求数据
			} else {
				this.ajaxfirst("", this.page); //第一次请求数据
			}

		

			this.listNum = this.tabdata.length;
			this.$router.push({

				query: {

					parent: "中心简介",
					idata:this.Titlenemr
					//传给详情的标题名字
				}
			});
		},

		methods: {
			laoshi(parent) {
				this.$router.push({
					path: "/teacher",
					query: {
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
			// 虚拟实验
			taketsy(name) {
				this.$router.push({
					path: "/virtal",
					query: {
						idata: name
					}
				});
			},

			//分页
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(val);
				this.page = val;
				this.ajaxfirst(this.page);
			},

			// 路由跳转
			XiangQ(data) {
				this.$router.push({
					path: "/Teachdata",
					query: {
						idata: data,
						biaoti: this.Titlenemr
					}
				});
			},

			//首次进入
			ajaxfirst(type, page) {
				var that = this;
				// that.Titlenemr=that.$route.query.Tc
console.log(type)
				let where = {
					XAction: that.XAction,
					XKLX: that.XKLX,
					XDLMCID: that.XDLMCID,
					rows: that.rows,
					page: page,
					XDLMSID: "DYBH20190529131215121519001",
//					XDLMA: that.$route.query.biaoti
					// XDLMA:"建设概况"
				};
				if(type) {
					where.XDLMA = type;
				}

				this.PostData(where, function(retunrData) {
					that.columdata = retunrData.rows;
					if(page == 1) {
						that.total = retunrData.total;
					}
					that.userList = that.columdata;
					that.tabdata = that.columdata;
				});
			},

			xiangqing() {
				this.Titlenemr = this.$route.query.biaoti;
			},
			//页面打开请求
			clicktake(namedata) {
				this.Titlenemr = namedata;
				this.page = 1;
				this.$router.push({
					query: {
						parent: "中心简介",
						idata:this.Titlenemr
					}
				});
//				this.ajaxfirst(namedata, this.page);
				
			},
			handleClose(key, keyPath) {},
			handleOpen(key, keyPath) {}
		}
	};
</script>
<style lang="scss" scoped>
	@import url("../../Teach.css");
	// 右侧
	.thecolumn {
		display: flex;
		flex-direction: column;
		background: white !important;
		// height: 1200px;
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
					align-items: center;
					cursor: pointer;
				}
			}
		}
	}
	
	//
	.teach {
		width: 100%;
		padding: 0 15.8%;
		min-height: 1000px;
		background: url("../assets/xmimage/twoimg/bg.png") no-repeat;
		// background-size: 100% 100%;
		background-position: left bottom;
		background-color: #f6f6f6;
		.el-aside {
			width: 13% !important;
			margin-right: 1%;
		}
		.el-submenu__title {
			font-size: 0 !important;
		}
		.block {
			margin: 0 auto;
		}
		.pagination-module {
			padding: 15px;
			box-sizing: border-box;
		}
	}
	
	.el-breadcrumb__separator {
		color: #000000;
		font-size: 16px;
	}
	
	.el-breadcrumb__separator[class*="icon"] {
		font-weight: 700;
	}
</style>