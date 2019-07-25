<template>
	<el-container class="teach">
		<el-aside style="height:1000px">
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu class="el-menu-vertical-demo" text-color="#ffffff" :default-openeds="this.zhankai" background-color="#A38638" active-text-color="#ffffff" router>
					<el-submenu index="1" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">中心简介</span>
						</template>
						<el-menu-item class="tem_el" @click="clicktake('建设概况')">建设概况</el-menu-item>
						<el-menu-item class="tem_el">
							<router-link to="/teacher?parent=师资队伍">师资队伍</router-link>
						</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('教学平台')">教学平台</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('新闻聚焦')">新闻聚焦</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('中心概况')">中心概况</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('规章制度')">规章制度</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('通知公告')">通知公告</el-menu-item>
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
					<el-submenu index="4" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">资料下载</span>
						</template>
						<el-menu-item class="tem_el" @click="taketzl('教学资料',资料下载)">教学资料</el-menu-item>
						<el-menu-item class="tem_el" @click="taketzl('图纸下载','资料下载')">图纸下载</el-menu-item>
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
		<el-main class="TheColumn" style="  padding:0;">
			<div class="thecolumn">
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;
line-height: 40px;
padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/TheColumnTwo',query:{parent:'首页'} }">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/teach',query:{parent:'中心简介'} }">中心简介</el-breadcrumb-item>
					<el-breadcrumb-item>
						<div class="endcolor" style="color:#A48638">师资队伍</div>
					</el-breadcrumb-item>
				</el-breadcrumb>

				<!-- 师资列表 -->
				<div class="teacher_list">
					<div class="teacher_list_one" v-for="(item,index) in getteamdata" :key="index">
						<div class="teacher_list_one_img">
							<router-link :to="{path:'Teamdata/', query:{idata:item.id}}">
								<img :src="apiurl+item.附件.replace('ss.','.')" alt="">
							</router-link>
						</div>
						<p class="teacher_list_one_text">
							<label for="">{{item.姓名}}</label>
							<span>-{{item.职称}}</span>
						</p>
					</div>

				</div>
				<!--分页-->
				<div class="block pagination-module">
					<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="rows" layout="total, prev, pager, next" :total="total"></el-pagination>
				</div>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	import {
		team
	} from "@/request/api";
	export default {
		name: "home",
		components: {},
		data() {
			return {
				zhankai: ["1"],

				XDLMCID: "1001",
				currentPage1: 1,
				total: 0,
				listNum: 1, //分页总条数
				page: 1,
				rows: 20,
				XDLMSID: "DYBH20190529131215121519001",
				XDnew: "新闻聚焦",
				XDSYJS: "在线实验介绍",
				XDonlin: "在线实验介绍",
				Titlenemr: '',
				//数据
				getteamdata: [] //师资队伍
			};
		},
		mounted() {
			this.ajaxteam(this.page);
			// console.log(this.apiurl)
		},
		methods: {
			//分页
			handleSizeChange(val) {},
			handleCurrentChange(val) {
				console.log(val);
				this.page = val;
				this.ajaxteam(this.page); //第一次请求数据
			},
			// 师资队伍
			ajaxteam(page) {
				var that = this
				this.PostData({
					XAction: this.XAction,
					XKLX: this.XKLX,
					XDLMCID: this.XDLMCID,
					page: page,
					rows: this.rows,
					XDLMSID: "DYBH201906121039333933176151"
				}, function(retrundata) {
					that.getteamdata = retrundata.rows;
					if(page == 1) {
						that.total = retrundata.total;
					}
				})
			},
			clicktake(namedata) {
				var that = this;
				that.Titlenemr = namedata;
				that.$router.push({
					path: "/teach",
					query: {
//						biaoti: that.Titlenemr,
						parent: "中心简介",
						idata: that.Titlenemr,
					}
				})

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
		min-height: 100%;
		.teacher_list {
			width: 100%;
			padding: 4% 2% 0 2%;
			display: flex;
			flex-wrap: wrap;
			.teacher_list_one {
				width: 20.5%;
				margin-right: 6%;
				.teacher_list_one_img {
					width: 100%;
					height: 270px;
					/*padding:0px 10px;*/
					box-sizing:border-box;
					background:#F6F6F6;
					line-height:270px;
					
					img {
						max-width: 100%;
						max-height: 100%;
						vertical-align: middle;
					}
				}
			}
			.teacher_list_one_text {
				width: 100%;
				display: flex;
				justify-content: center;
				label {
					font-size: 18px;
					font-weight: 600;
					margin-right: 5%;
					color: #a48638;
				}
				span {
					font-size: 14px;
					color: #888888;
				}
			}
		}
	}
	
	.thecolumn .teacher_list .teacher_list_one:nth-child(4n) {
		margin-right: 0;
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
		.el-submenu__title {
			font-size: 0 !important;
		}
	}
	
	.pagination-module {
		text-align: center;
		padding: 15px;
		box-sizing: border-box;
	}
</style>