<template>
	<el-container class="teach">
		<el-aside>
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu unique-opened class="el-menu-vertical-demo" text-color="#ffffff" background-color="#A38638" active-text-color="#ffffff" router @close="handleClose" :default-openeds="this.zhankai">
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
					<!-- <el-menu-item index="/data" class="tem_e">
            资料下载
          </el-menu-item>-->
					<el-submenu index="/data?parent=资料下载" class="tem_e">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">资料下载</span>
						</template>
						<el-menu-item class="tem_el" @click="clicktake('教学资料','资料下载')">教学资料</el-menu-item>
						<el-menu-item class="tem_el" @click="clicktake('图纸下载','资料下载')">图纸下载</el-menu-item>
					</el-submenu>
					<el-menu-item index="/theask?parent=互问互答" class="tem_e">互问互答</el-menu-item>
					<el-menu-item index="/TheContact?parent=联系我们" class="tem_e">联系我们</el-menu-item>
				</el-menu>
			</el-col>
		</el-aside>

		<!-- 子组件 -->
		<el-main class="TheColumn" style="padding:0;">
			<div class="thecolumn">
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;line-height: 40px;padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/' ,query:{parent:'首页'}}">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/data',query:{parent:'资料下载'} }">资料下载</el-breadcrumb-item>
					<!-- <el-breadcrumb-item v-show="jianshe=='1'">教学资料</el-breadcrumb-item> -->
					<el-breadcrumb-item>
						<div class="endcolor" style="color:#A48638">{{ this.Titlenemr}}</div>
					</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="tlist">
					<!-- :to="{path:'/Downdata', query:{idata:item.id,biaoti:item.资料类型}}" -->
					<ul class="textul">
						<div tag="div" class="divr" to v-for="(item,index) in columdata" :key="index">
							<div class="divq">
								<span id="spanq1">
                  <span id="spanq2"></span>
								</span>
								&nbsp;&nbsp;{{item.资料名称}}
							</div>
							<div class="spp">
								<a @click="lookPic(item.文件地址)" class="spany spany1">预览</a>
								<!-- <a class="spany spany2" :href="'http://192.168.28.251:8111'+item.文件地址" download="">下载</a> -->
								<a class="spany spany2" :href="apiurl+item.文件地址" download="">下载</a>
								<span class="lastspan">{{item.添加时间}}</span>
							</div>
						</div>
					</ul>
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
	import TheColumn from "@/components/TheColumn";
	export default {
		name: "adata", //资料下载
		data() {
			return {
				//分页
				currentPage1: 1,
				total: 0,
				listNum: 1, //分页总条数
				page: 1,
				rows: 10,
				XAction: "GetDataInterface",
				XKLX: "SCDXXNJX",
				XDLMCID: "1001",
				XDLMSID: "DYBH20190529131215121510011",
				namedata: "",
				columdata: [],
				Titlenemr: "",
				zhankai: ["/data?parent=资料下载"],
				jianshe: "1",
				type: ""
			};
		},

		components: {
			TheColumn
		},
		mounted() {
	
			if(this.$route.query.bt) {
				this.ajaxfirst(this.page, this.$route.query.bt);
			} else if(this.$route.query.sh) {
				this.ajaxfirst(this.page, this.$route.query.sh);
			} else if(this.$route.query.idata) {
				this.ajaxfirst(this.page, this.$route.query.idata);
				this.Titlenemr = this.$route.query.idata

			}


		},

		watch: {
			$route(to, from) {
				// console.log("路由发生了变化")
				// console.log()
				this.page=1;
				this.ajaxfirst(this.page, this.$route.query.idata);
				this.Titlenemr = this.$route.query.idata
			}
		},

		methods: {
			daohang() {
				// console.log("导航")
				this.Titlenemr = this.$route.query.idata;
				// console.log(this.Titlenemr) //从标题和详情页面跳转过来名字

			},

			lookPic(mpath) {
				var index = mpath.lastIndexOf(".");
				var r = mpath.substring(index + 1, mpath.length);
				var realPath = mpath.substring(0, index);
				var pictureSrc;
				var fileType = "";
				var otherType = ["doc", "docx", "txt", "zip", "xls", "xlsx"];
				if(otherType.indexOf(r.toLowerCase()) != -1) {
					
						pictureSrc = this.apiurl + realPath + ".pdf";
				} else {
					pictureSrc =
					
							this.apiurl + realPath + "." + r.toLowerCase();
				}

				window.open(pictureSrc, "_blank");
				//   window.location.href = pictureSrc;
			},
			//    师资队伍
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
						idata: name,
						parent: name
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
			taketsy(name, parent) {
				this.$router.push({
					path: "/virtal",
					query: {
						idata: name,
						parent: parent
					}
				});
			},
			//分页
			handleSizeChange(val) {},
			handleCurrentChange(val) {
				console.log(val);
				this.page = val;
				this.ajaxfirst(this.page, this.type); //第一次请求数据
			},
			XiangQ(data) {
				this.$router.push({
					path: "/Testerdata",
					query: {
						idata: data,
						biaoti: this.Titlenemr
					}
				});
			},

			//首次进入
			ajaxfirst(page, type) {
				var that = this;
				var where = {
					XAction: that.XAction,
					XKLX: that.XKLX,
					XDLMCID: that.XDLMCID,
					page: that.page,
					rows: that.rows,
					XDLMSID: "DYBH20190529131215121510011",
					QueryType: "资料类型"
					//路由参数
				};
//				if(type) {
//					where.QueryKey = that.$route.query.bt;
//				}
console.log(type)
				if(type) {
					where.QueryKey = type;
				}
				this.PostData(where, function(retunrData) {
					that.total = retunrData.total;
					that.columdata = retunrData.rows;
				});
			},
			//页面打开请求
			clicktake(namedata, parent) {
				var that = this;
				that.Titlenemr = namedata;
				this.page = 1;
				console.log(namedata)
//				this.ajaxfirst(this.page, namedata);

				this.$router.push({

					query: {

						parent: parent,
						idata:namedata
						//传给详情的标题名字
					}
				});
			},

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
					width: 70%;
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
					width: 100%;
					font-size: 14px;
					padding: 15px 0px;
					border-bottom: 1px solid burlywood;
					display: flex;
					justify-content: space-between;
					cursor: pointer;
					.spp {
						.spany {
							display: block;
							margin-right: 10px;
							float: left;
						
						}
						.spany1{
							color:#990000;
						}
						.spany2{
							color:#957B28;
						}
						.lastspan {
							float: right;
						}
					}
				}
		
				.spany:hover {
					color: burlywood;
				}
				.divr:hover {
					// color: burlywood;
				}
			}
		}
	}
	
	//
	.teach {
		width: 100%;
		height: 1000px;
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
		.pagination-module {
			padding: 15px;
			box-sizing: border-box;
		}
		.el-submenu__title {
			font-size: 0 !important;
		}
	}
</style>