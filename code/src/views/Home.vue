<template>
	<div class="home">
		<!-- Top -->
		<div class="banner">
			<div class="banner_tran">
				<!-- left -->
				<div class="tran_left">
					<!-- 介绍标题 -->
					<div class="optim">
						<img src="../assets/xmimage/index-img/ipad-optimised-l.png">
						<p>线下实验室介绍</p>
						<img src="../assets/xmimage/index-img/ipad-optimised-r.png">
					</div>
					<!-- 0.2 -->
					<div class="kuang">{{getonlinedata.标题}}</div>
					<!-- 0.3 -->
					<div class="line"></div>
					<!-- 0.3 -->
					<ul class="tran_ul">
						<div class="tran_ul_div">
							<li v-html="getonlinedata.内容"></li>
						</div>
					</ul>
				</div>
				<!-- righ -->
				<router-link to="/index" class="yuyue" tag="div">
					<img src="../assets/xmimage/index-img/实验 介绍.png" alt class="yuyue_img">
					<div class="yuebag">
					</div>
				</router-link>

			</div>
		</div>
		<!-- 二，content -->
		<div class="connent">
			<!-- 虚拟仿真 -->
			<div class="simulat">
				<!-- title -->
				<!-- <div class="title">
          <span></span>
          <div class="title_p">虚拟仿真实验室</div>
          <span></span>
        </div> -->
				<!-- main -->
				<div class="main">
					<!-- left -->
					<div class="main_left">
						<div class="left_regual">
							<div class="regual_fist">
								虚拟仿真实验
							</div>
							<div class="regual_fist_two">
								<span></span>
								<div class="regual_fist_js">实验介绍</div>
								<span></span>
							</div>
							<div class="regulal_second">{{getintroudata.标题}}</div>
							<div>
								<ul class="regulal_ul">
									<li v-html="getintroudata.内容"></li>
								</ul>
							</div>
							<router-link tag="div" to="/login" class="leaning">在线学习</router-link>
						</div>
					</div>
					<div class="main_right">
						<div class="mf_first"></div>
						<ul class="mf_ul">
							<li v-for="(item,index) in gethwhddata" :key="index">
								<router-link :to="{path:'Askdata/', query:{idata:item.id}}">
									{{item.问题名称}}
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 师资队伍 -->
			<div class="simulat teacher">
				<!-- title -->
				<div class="title">
					<span></span>
					<div class="title_p">师资队伍</div>
					<span></span>
				</div>
				<!-- teacher_main -->
				<div class="teacher_team">
					<ul class="team_jiesao" v-for="(item,index) in getteamdata" :key="index">
						<li class="lione">
							<img :src="apiurl+item.附件">
						</li>
						<li class="litwo">
							<div class="name">{{item.姓名}}</div>
							<div class="zhichen">-{{item.职称}}</div>
						</li>
						<!-- <li class="lithree">
			              <div class="biaoti">主要学术成果</div>
			              <div class="textnr" v-html="item.简介"></div>
			            </li> -->
						<li class=".lifour">
							<router-link :to="{path:'Teamdata/', query:{idata:item.id}}" class="lifour" tag="div">
								<div class="att">详情</div>
								<img src="../assets/xmimage/index-img/icon-xq.png" alt>
							</router-link>
						</li>
					</ul>
					<!-- // -->
				</div>
			</div>
		</div>
		<!-- 三，通知公告 -->
		<div class="ment">
			<div class="ment_connent">
				<div class="notice">
					<div class="notice_top">
						<div class="top_text">
							<div class="xlb">
								<img src="../assets/xmimage/index-img/tzgg-red.png" alt>
							</div>
							<div>通知公告</div>
							<span>/Announcements</span>
						</div>
						<router-link tag="div" :to="{path:'/Tzdata', query:{idata:'通知公告'}}" class="notice_more">更多>></router-link>
					</div>
					<!-- 内容列 -->
					<div class="notice_text">
						<router-link :to="{path:'/Testerdata', query:{idata:item.id}}" class="notic_a" tag="div" v-for="(item,index) in getindexdata" :key="index">
							<div class="ntp">{{item.标题}}</div>
							<span>{{item.日期}}</span>
						</router-link>
					</div>
				</div>
				<!-- 2 实验制度-->
				<div class="notice">
					<div class="notice_top">
						<div class="top_text">
							<div class="xlb">
								<img src="../assets/xmimage/index-img/tzgg-red.png" alt>
							</div>
							<div>实验制度</div>
							<span>/Experimental system</span>
						</div>
						<router-link tag="div" :to="{path:'Tester/', query:{}}" class="notice_more">更多>></router-link>
					</div>
					<!-- 内容列 -->
					<div class="notice_text">
						<router-link :to="{path:'Testerdata/', query:{idata:item.id}}" class="notic_a" tag="div" v-for="(item,index) in getsystemdata" :key="index">
							<div class="ntp">{{item.标题}}</div>
							<span>{{item.日期}}</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 四新闻焦距 -->
		<div class="new">
			<div class="title">
				<span></span>
				<div class="title_p">新闻焦距</div>
				<span></span>
			</div>
			<!-- 4.2 -->
			<div class="new_content">
				<ul class="net_contentul" v-for="(item,index) in getnewdata" :key="index">
					<li class="nlione">
						<img :src="item.首页图片地址" alt>
					</li>
					<li class="nlitwo">{{item.标题}}</li>
					<!-- <li class="nlithree" v-html="item.内容"></li> -->
					<li class="nlofour">
						<div>2019-05-26</div>
						<router-link :to="{path:'/teachdata', query:{idata:item.id}}" class="lifour" tag="div">
							<div class="att">详情</div>
							<img src="../assets/xmimage/index-img/icon-xq.png" alt>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 五资料下载 -->
		<div class="footer">
			<div class="ziliao">
				<div class="ziliao_top">
					<span class="span_left"></span>
					<div class="ziliao_top_h">资料下载</div>
					<span class="span_right"></span>
				</div>
				<div class="zl-connent">
					<!-- 教学资料 -->
					<div class="data">
						<img src="../assets/xmimage/index-img/icon-jxzl.png">
						<div class="data_right">
							<div class="right_h">教学资料</div>
							<a :href="apiurl+item.文件地址" target="_blank" tag="div" class="data_text" v-for="(item,index) in getteachdata" :key="index">
								<p>{{item.资料名称}}</p>
								<span>{{item.添加时间}}</span>
							</a>
						</div>
					</div>
					<!-- 图纸下载 -->
					<div class="data">
						<img src="../assets/xmimage/index-img/icon-map.png">
						<div class="data_right">
							<div class="right_h">图纸下载</div>
							<a :href="apiurl+item.文件地址" target="_blank" tag="div" class="data_text" v-for="(item,index) in getdrawdata" :key="index">
								<p>{{item.资料名称}}</p>
								<span>{{item.添加时间}}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<!-- 六大学连接 -->
			<div class="univer">
				<div class="univer_box">
					<div class="univer_img">
						<router-link :to="{name:''}" tag="div" class="univer_img_a one">
							<span>四川大学</span>
						</router-link>
						<!-- 6.2 -->
						<router-link :to="{name:''}" tag="div" class="univer_img_a two">
							<span>历史文化学院（旅游学院）</span>
						</router-link>
						<!-- 6.3 -->
						<router-link :to="{name:''}" tag="div" class="univer_img_a three">
							<span>四川大学博物馆</span>
						</router-link>
					</div>
					<div class="univer_link">
						<div class="link_h">常用链接</div>
						<div class="ul_box">
							<div class="link_ul">
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
							</div>
							<div class="link_ul">
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
								<router-link tag="div" :to="{name:''}" class="link_ul_a">四川大学藏学所</router-link>
							</div>
						</div>
					</div>
				</div>
				<!-- 底部 -->
				<div class="bottom">
					<div class="list">
						<img src="../assets/xmimage/index-img/logo-6.png" alt>
						<span></span>
						<div class="right">
							<div>四川大学文化历史学院 .版权所有 ，地址：四川省成都市武侯区望江路29号。邮编：610064</div>
							<div>技术支持：陕西十月文化有限公司</div>
						</div>
					</div>
				</div>
			</div>
			<!-- footer -->
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
		name: "home",
		components: {},
		data() {
			return {
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
				getYQLJ: [] //友情链接
			};
		},
		mounted() {
			this.ajaxGetindex();
			this.ajaxGetnew();
			this.ajaxIntroduced();
			this.ajaxonline();
			this.ajaxSymtem();
			this.ajaxTeach();
			this.ajaxDraw();
			this.ajaxteam();
			this.ajaxhwhd();
			this.ajaxyqlj()
		},
		methods: {
			//线上实验介绍
			ajaxonline() {
				online({
					XAction: 'GetDataInterface',
					XKLX: 'SCDXXNJX',
					XDLMCID: '1001',
					page: '1',
					rows: '20',
					XDLMSID: 'DYBH20190529131215121519001',
					XDLMA: '线下实验介绍'
				}).then(res => {
					// console.log(res);
					this.getonlinedata = res.rows[0];
					console.log("123")
					console.log(this.getonlinedata)
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
					this.getindexdata = res.rows;
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
					this.getnewdata = res.rows;
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
					QueryType: '资料类型',
					QueryKey: "教学资料"
				}).then(res => {
					this.getteachdata = res.rows;
					console.log(this.getteachdata)
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
					QueryType: '资料类型',
					QueryKey: "图纸下载"
				}).then(res => {
					this.getdrawdata = res.rows;
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
					XDLMSID: "DYBH2019052913121512157721",
				}).then(res => {
					// console.log(res);
					this.gethwhddata = res.rows;
				});
			},
			//友情链接
			ajaxyqlj() {

				postDataYQLJ({
					XAction: this.XAction,
					XKLX: this.XKLX,
					XDLMCID: this.XDLMCID,
					page: 1,
					rows: 3,
					XDLMSID: "DYBH20190529131215121519001",
					XDLMA:"友情链接"
				}).then(res => {
					// console.log(res);
					this.getYQLJ = res.rows;
				});
			}
		}
	};
</script>
<style lang="scss" scoped>
	.home {
		width: 100%;
		height: 100%;
		// height: ;
		// 1 topBox
		.banner {
			width: 100%;
			height: 770px;
			background: url("../assets/xmimage/index-img/banner-img.png") no-repeat;
			background-size: 100% 100%;
			position: relative;
			.banner_tran {
				width: 1168px;
				position: absolute;
				display: flex;
				bottom: 0px;
				right: 0;
				border-bottom: 364px solid rgba(165, 145, 92, 0.5);
				border-left: 72px solid transparent;
				// left
				.tran_left {
					position: absolute;
					margin-left: 60px;
					.optim {
						display: flex !important;
						align-items: center;
						color: white;
						font-size: 24px;
						margin-top: 40px;
						margin-bottom: 35px;
						p {
							padding: 0px 8px;
							margin: 0;
						}
					}
					.kuang {
						height: 40px;
						width: 421px;
						background: url("../assets/xmimage/index-img/QQ图片20190606101952.png") no-repeat;
						background-size: 100% 100%;
						line-height: 40px;
						color: white;
						font-size: 18px;
						text-align: center;
					}
					.line {
						margin-left: -93px;
						margin-top: 34px;
						width: 140%;
						height: 2px;
						background: white;
						opacity: 0.1;
					}
					.tran_ul {
						color: white;
						margin-top: 34px;
						font-size: 16px;
						margin-bottom: 0;
						padding-left: 0;
						// .tran_ul_div{
						//   overflow: hidden;
						//   width: 399px;
						li {
							width: 421px;
							height: 112px;
							// overflow-y:scroll;
							// overflow-x: hidden;
							overflow: hidden;
						}
						// }
					}
				}
				//right
				.yuebag {
					background-size: 100% 100%;
					position: absolute;
					right: 0px;
					top: 0px;
					//@at-root
					background: url("../assets/xmimage/index-img/1234567.png") no-repeat;
					width: 240px;
					height: 240px;
					background-position: center center;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 50%;
					vertical-align: middle;
				}
				.yuyue:hover .yuebag {
					-webkit-transform: rotate(100deg);
					transform: rotate(90deg);
					-webkit-transition: -webkit-transform 1s linear;
					transition: transform 0.8s linear;
				}
				.yuyue {
					position: absolute;
					right: 301px;
					top: 60px;
					float: right;
					width: 270px;
					height: 270px;
					.yuyue_img {
						position: absolute;
						right: 95px;
						top: 85px;
						z-index: 100;
						cursor: pointer;
					}
				}
			}
		}
		// 内容
		.connent {
			padding: 0px 15.8%;
			background: white;
			display: flex;
			flex-direction: column;
			.simulat {
				.title {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 80px;
					.title_p {
						font-size: 36px;
						padding: 0 10px;
						color: #555555;
					}
					span {
						display: block;
						width: 62px;
						height: 1px;
						background: #9b9b9b;
					}
				}
				.main {
					margin-top: 80px;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					.main_left {
						width: 66.5%;
						height: 510px;
						background: url("../assets/xmimage/index-img/00.jpg") no-repeat;
						background-size: cover;
						float: left;
						.left_regual {
							border-left: 4px solid rgba(164, 134, 56, 0.5);
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							width: 48.6%;
							height: 100%;
							float: right;
							background-color: rgba(29, 23, 13, 0.3);
							color: white;
							.regual_fist {
								font-size: 36px;
								color: #FFFFFF;
							}
							.regual_fist_two {
								display: flex;
								align-items: center;
								margin-top: 5px;
								span {
									display: inline-block;
									height: 1px;
									width: 37px;
									background-color: #FFFFFF;
								}
								.regual_fist_js {
									font-size: 18px;
									color: #FFFFFF;
									margin: 0 7px;
									font-family: 'DengXian-Regular';
								}
							}
							.regulal_second {
								font-size: 22px;
								margin-top: 55px;
							}
							.regulal_ul {
								margin-top: 20px;
								font-size: 14px;
								padding-left: 0;
								li {
									line-height: 26px;
									width: 100%;
									text-align: center;
									overflow: hidden;
									height: 121px;
								}
							}
							.leaning {
								// margin-top: 40px;
								width: 170px;
								height: 50px;
								font-size: 16px;
								line-height: 50px;
								text-align: center;
								border: 1px solid white;
								border-radius: 5px;
								cursor: pointer;
							}
						}
					}
					.main_right {
						width: 32%;
						height: 510px;
						overflow-y: auto;
						background: #f8f8f8;
						float: right;
						.mf_first {
							height: 80px;
							background: url("../assets/xmimage/index-img/sylc.png") no-repeat;
							background-size: 100% 100%;
							border-bottom: 4px solid #ce9527;
						}
						.mf_ul {
							padding: 0 18px;
							margin-top: 0px;
							height: 411px;
							overflow: hidden;
							li {
								display: flex;
								border-bottom: 1px solid #e0e0e0;
								font-size: 16px;
								color: #666666;
								height: 60px;
								align-items: center;
								padding: 0 10px;
								justify-content: space-between;
								box-sizing: border-box;
								a {
									text-decoration: none;
									color: #666666;
									font-size: 16px;
								}
							}
						}
					}
				}
			}
			.main_right .mf_ul li a:hover {
				color: #a48638!important;
			}
			// <!-- 师资队伍 -->
			.teacher_team {
				display: flex;
				margin-top: 34px;
				margin-bottom: 80px;
				// justify-content: space-between;
				padding: 0;
				width: 100%;
				height: 527px;
				overflow: hidden;
				flex-wrap: wrap;
				.team_jiesao {
					width: 23.8%;
					padding: 0;
					background-color: #f8f8f8;
					margin-right: 1.6%;
					.lione {
						width: 100%;
						height: 356px;
						border-bottom: 4px solid #a48638;
						box-sizing: border-box;
						background-color: #f8f8f8;
						img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}
					.litwo {
						margin-top: 40px;
						display: flex;
						align-items: center;
						background-color: #f8f8f8;
						padding: 0 22px;
						.name {
							font-size: 24px;
							color: #a48638;
						}
						.zhichen {
							font-size: 16px;
							color: #888888;
							margin-left: 10px;
						}
					}
					.lithree {
						font-size: 12px;
						color: #414141;
						margin-top: 40px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						/*显示几行*/
						overflow: hidden;
						background-color: #f8f8f8;
						padding: 0 22px;
						.textnr {
							letter-spacing: 2px;
							line-height: 20px;
						}
					}
					.lifour {
						display: flex;
						justify-content: flex-end;
						margin-top: 30px;
						cursor: pointer;
						padding: 0 22px;
						.att {
							font-size: 12px;
							color: #a48638;
							margin-right: 10px;
						}
					}
				}
			}
		}
		.teacher_team .team_jiesao:nth-child(4n) {
			margin-right: 0;
		}
		// 三通知公告/实验制度
		.ment {
			width: 100%;
			background: url("../assets/xmimage/index-img/tz-bg.jpg") no-repeat;
			background-size: 100% 100%;
			.ment_connent {
				padding: 70px 15.8%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				.notice {
					width: 46%;
					box-sizing: border-box;
					.notice_top {
						width: 100%;
						height: 50px;
						line-height: 50px;
						border-bottom: 2px solid #cecece;
						display: flex;
						align-items: center;
						justify-content: space-between;
						border-bottom: 1.5px solid #ededed;
						margin-bottom: 15px;
						// 标题
						.top_text {
							font-size: 24px;
							font-weight: bold;
							display: flex;
							align-items: center;
							.xlb {
								margin-right: 10px;
								img {
									display: block;
									width: 34px;
									height: 32px;
								}
							}
							span {
								font-size: 14px;
								color: #cecece;
								cursor: pointer;
							}
						}
						.notice_more {
							font-size: 14px;
							color: #bfab9e;
							cursor: pointer;
							padding-right: 20px;
						}
					}
					// 公告内容列
					.notice_text {
						.notic_a {
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							line-height: 42px;
							cursor: pointer;
							.ntp {
								width: 60%;
								font-size: 14px;
								color: #212838;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							span {
								width: 22%;
								font-size: 14px;
								color: #a39fa4;
							}
						}
					}
				}
			}
		}
	}
	
	//  四新闻焦距
	.new {
		width: 100%;
		padding: 0 15.8% 80px 15.8%;
		.title {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 80px;
			.title_p {
				font-size: 36px;
				padding: 0 10px;
				color: #555555;
			}
			span {
				display: block;
				width: 62px;
				height: 1px;
				background: black;
			}
		}
		// 4.2
		.new_content {
			margin-top: 34px;
			display: flex;
			// justify-content: space-between;
			height: 387px;
			overflow: hidden;
			width: 100%;
			overflow: hidden;
			flex-wrap: wrap;
			.net_contentul {
				width: 23.8%;
				padding: 0;
				background-color: #f8f8f8;
				margin-right: 1.6%;
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
					font-size: 16px;
					color: #a48638;
					margin-top: 38px;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					padding: 0 22px;
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
					justify-content: space-between;
					color: #414141;
					font-size: 12px;
					padding: 0 22px;
					cursor: pointer;
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
	
	.new_content .net_contentul:nth-child(4n) {
		margin-right: 0;
	}
	
	//五资料下载
	.footer {
		background: url("../assets/xmimage/index-img/图层 339 拷贝.jpg")no-repeat;
		background-size: 100% 100%;
	}
	
	.ziliao {
		width: 100%;
		padding: 0 15.8% 108px 15.8%;
		.ziliao_top {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 62px;
			.ziliao_top_h {
				font-size: 36px;
				padding: 10px;
				color: #555555;
			}
			span {
				width: 62px;
				height: 1px;
				background: #9b9b9b;
			}
		}
		// 资料
		.zl-connent {
			width: 100%;
			display: flex;
			margin-top: 68px;
			display: flex;
			justify-content: space-between;
			.data {
				display: flex;
				width: 40%;
				align-items: center;
				box-sizing: border-box;
				padding: 10px;
				img {
					display: block;
					width: 136px;
					height: 136px;
					border-radius: 50%;
				}
				.data_right {
					margin-left: 5%;
					height: 136px;
					flex: 1;
					overflow: hidden;
					padding-top: 8px;
					.right_h {
						font-size: 24px;
						color: #ce9527;
						margin-bottom: 12px;
					}
					.data_text {
						display: flex;
						align-items: center;
						justify-content: space-between;
						width: 100%;
						height: 28px;
						cursor: pointer;
						p {
							width: 60%;
							font-size: 12px;
							color: #666666;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							text-align: left;
						}
						span {
							width: 40%;
							font-size: 12px;
							color: #666666;
							text-align: right;
						}
					}
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
					background: rgba($color: #FFFFFF, $alpha: 0.1);
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
					background: url("../assets/xmimage/index-img/lj-bwg.jpg") no-repeat;
					background-size: 100% 100%;
					cursor: pointer;
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
						background: #ce9527;
						opacity: 0.8;
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
						}
					}
				}
			}
		}
	}
</style>