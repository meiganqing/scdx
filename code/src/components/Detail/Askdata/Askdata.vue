<template>
	<el-container class="teach">
		<el-aside style="height:1000px">
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu class="el-menu-vertical-demo" text-color="#ffffff" background-color="#A38638" active-text-color="#ffffff" router>
					<!-- <el-submenu index="1" class="teach_elsum">
						<template slot="title" id="teach_elsum_title">
							<span id="teach_elsum_title">中心介绍</span>
						</template>
						<el-menu-item class="tem_el" v-for="(itemname,index) in list" :key="index" @click="clicktake(itemname.name)">{{itemname.name}}</el-menu-item>
					</el-submenu>
					<el-menu-item index="/tester" class="tem_e">
						<span></span>实验制度
					</el-menu-item>
					<el-menu-item index="/process" class="tem_e">
						<span></span>虚拟仿真实验
					</el-menu-item>
					<el-menu-item index="/data" class="tem_e">
						<span></span>资料下载
					</el-menu-item> -->
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
            <!-- <el-menu-item index="/tester?parent=实验制度" class="tem_e">
						<span></span>实验制度
            </el-menu-item>-->
            <el-submenu index="2" class="teach_elsum">
              <template slot="title" id="teach_elsum_title">
                <span id="teach_elsum_title">实验制度</span>
              </template>
              <el-menu-item class="tem_el" @click="taket('实验制度')">实验制度</el-menu-item>
              <el-menu-item class="tem_el" @click="taket('实验制度')">实验室管理</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/process?parent=虚拟仿真实验" class="tem_e">
						<span></span>虚拟仿真实验
            </el-menu-item>-->
            <!-- <el-menu-item index="/data?parent=资料下载" class="tem_e">
						<span></span>资料下载
            </el-menu-item>-->
            <!-- 资料下载 -->
            <el-submenu index="4" class="teach_elsum">
              <template slot="title" id="teach_elsum_title">
                <span id="teach_elsum_title">资料下载</span>
              </template>
              <el-menu-item class="tem_el" @click="taketzl('教学资料')">教学资料</el-menu-item>
              <el-menu-item class="tem_el" @click="taketzl('图纸下载')">图纸下载</el-menu-item>
            </el-submenu>
					<el-menu-item index="/theask" class="tem_e">
						<span></span>互问互答
					</el-menu-item>
					<el-menu-item index="/TheContact" class="tem_e">
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
					<el-breadcrumb-item :to="{ path: '/' }">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/theask' }">互问互答</el-breadcrumb-item>
					<el-breadcrumb-item><div class="endcolor" style="color:#A48638">详情</div></el-breadcrumb-item>
				</el-breadcrumb>

				<!-- 详情内容 -->
				<div class="tlist">
					<div class="hhh">{{columdata.问题名称}}</div>
					<div class="list_text" v-html="columdata.问题内容" style=" letter-spacing: 3px"></div>
				</div>
				<!--回复-->
				<el-row>
					<el-col :span="24">
						<fieldset class="field-title" style="text-align: center;">
							<legend>回帖</legend>
						</fieldset>
						<ul class="textul">
							<li v-for="(item,index) in replyData" :key="index">
								<div class="question-module">
									<span class="circle" id="circle"></span>
									<p class="time">{{item.回答时间}}</p>
									<div class="content" v-html="item.回答内容"></div>
								</div>
							</li>
						</ul>
					</el-col>
				</el-row>
				<fieldset class="field-title" style="text-align: center;">
					<legend></legend>
				</fieldset>
						<el-row>
				
						<el-col :span="24">
							<div class="demo-input-suffix input-module">
								<span class="input-label">作者：</span>
								<el-input placeholder="请输入作者" v-model="user">
								</el-input>

							</div>
						</el-col>
					</el-row>
				<el-row class="edit-module">

					<quill-editor class="edit-content" ref="myTextEditor" v-model="content" :options="editorOption" @ready="onEditorReady($event)">
					</quill-editor>

				</el-row>
				<div class="right-btn">
					<el-button @click.native="submitData">提交回复</el-button>
				</div>

			</div>
		</el-main>
	</el-container>
</template>

<script>
	import TheColumn from "@/components/TheColumn";
	export default {
		name: "Askdata",
		data() {
			return {

				XDLMCID: "1001",
				page: 1,
				rows: 20,
				namedata: "",
				columdata: "",
				replyData: "",
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
				],
				content: "",
				questionNum: "",
				user:"",
				editorOption: {
					modules: {
						toolbar: [
							['bold', 'italic', 'underline', 'strike'], // toggled buttons
							['blockquote', 'code-block'],

							[{
								'header': 1
							}, {
								'header': 2
							}], // custom button values
							[{
								'list': 'ordered'
							}, {
								'list': 'bullet'
							}],
							[{
								'script': 'sub'
							}, {
								'script': 'super'
							}], // superscript/subscript
							[{
								'indent': '-1'
							}, {
								'indent': '+1'
							}], // outdent/indent
							[{
								'direction': 'rtl'
							}], // text direction

							[{
								'size': ['small', false, 'large', 'huge']
							}], // custom dropdown
							[{
								'header': [1, 2, 3, 4, 5, 6, false]
							}],

							[{
								'color': []
							}, {
								'background': []
							}], // dropdown with defaults from theme
							[{
								'font': []
							}],
							[{
								'align': []
							}],

						]
					}

				}
			};
		},
		components: {
			TheColumn
		},
		mounted() {
			this.ajaxfirst();

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
          idata: name
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
    taketsy(name) {
      this.$router.push({
        path: "/virtal",
        query: {
          idata: name
        }
      });
    },
	submitData() {	
		if(!this.user){
					this.$message.error("请输入作者")
					return false;
				}
				if(this.content) {					
				} else {
					this.$message.error("请输入回复内容")
					return false
				}
				
				this.postReplyData(this.user, this.content)

			},

			onEditorReady(editor) { // 准备编辑器
				console.log(editor)
			},

			//首次进入
			ajaxfirst() {
				var that = this;
				this.PostData({
						XAction: that.XAction,
						XKLX: that.XKLX,
						XDLMCID: that.XDLMCID,
						page: that.page,
						rows: that.rows,
						XDLMSID: "DYBH2019052913121512154322",
						XDLMA: that.$route.query.idata //路由参数
					},
					function(retunrData) {
						that.columdata = retunrData.rows[0];
						that.questionNum = retunrData.rows[0].问题编号;
						that.getReplyData(retunrData.rows[0].问题编号); //请求该问题的回复内容
					}
				);

			},
			//请求回复内容
			getReplyData(data) {
				var that = this;
				this.PostData({
						XAction: that.XAction,
						XKLX: that.XKLX,
						XDLMCID: "1001",
						page: that.page,
						rows: that.rows,
						XDLMSID: "DYBH20190529131215121521731",
						XDLMA: data //路由参数

					},
					function(retunrData) {
						that.replyData = retunrData.rows;
					}
				);
			},
			postReplyData(user, content) {

				var that = this;
				var where = {
					XAction: "GetDataInterface",
					XKLX: "SCDXXNJX",
					XDLMCID: "5000",
					XDLMSID: "DYBH2019052913121512152933",
					XDLM问题编号: that.questionNum,
					XDLM回答时间: new Date(),
					XDLM回答人: user,
					XDLM回答内容: content,
				}
				this.PostData(where,
					function(retunrData) {

						if(retunrData.success) {
							that.$message({
								message: '操作成功',
								type: 'success'
							});
							that.getReplyData(that.questionNum); //请求该问题的回复内容
							that.content = ""; //请求

						} else {
							this.$message.error("提交失败")
						}
					}
				);

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
		.field-title {
			border-width: 1px;
			border: none;
			border-top: 1px solid #e6e6e6;
		}
		.edit-module {
			padding: 0px 15px 80px 15px;
			.edit-content {
				height: 200px;
			}
		}
		.right-btn {
			padding: 0px 15px;
			text-align: center;
			.el-button {
				background: #a48638;
				color: #FFFFFF;
			}
		}
	}
	
	li {
		position: relative;
		.question-module {
			box-sizing: border-box;
			.circle {
				width: 9px;
				height: 9px;
				background-color: #ffffff;
				/*line-height: 51px;*/
				border-radius: 9px;
				display: inline-block;
				border: 1px solid #a48638;
				position: absolute;
				top: 5px;
				left: -5px;
			}
			.time {
				color: #a48638;
				padding-left: 10px;
				box-sizing: border-box;
			}
			.content {
				padding: 0px 10px 0px 10px;
			}
		}
	}
	
	li::before {
		content: '';
		position: absolute;
		left: 0px;
		top: 5px;
		z-index: 0;
		width: 1px;
		height: 98%;
		background-color: #e6e6e6;
	}
	
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
		.input-module {
			padding: 5px 15px;
				padding-left: 60px;
				box-sizing: border-box;
				position: relative;
				.input-label {
					position: absolute;
					left: 15px;
					top: 2px;
					line-height: 40px;
					text-align: right;
				}
			}
</style>