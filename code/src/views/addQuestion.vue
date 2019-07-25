<template>
	<el-container class="teach">
		<el-aside>
			<!-- 侧边菜单栏目 -->
			<el-col>
				<el-menu unique-opened class="el-menu-vertical-demo" text-color="#ffffff" background-color="#A38638" active-text-color="#ffffff" router>
					<!-- <el-menu-item index="/teach?parent=中心简介" class="tem_e">
						<span></span>中心简介
					</el-menu-item>
					<el-menu-item index="/tester?parent=实验制度" class="tem_e">
						<span></span>实验制度
					</el-menu-item>
					<el-menu-item index="/process?parent=虚拟仿真实验" class="tem_e">
						<span></span>虚拟仿真实验
					</el-menu-item>
					<el-menu-item index="/data?parent=资料下载" class="tem_e">
						<span></span>资料下载
					</el-menu-item>
					<el-menu-item index="/theask?parent=互问互答" class="tem_e">
						<span></span>互问互答
					</el-menu-item>
					<el-menu-item index="/TheContact?parent=联系我们" class="tem_e">
						<span></span>联系我们
					</el-menu-item> -->
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
						<el-menu-item class="tem_el" @click="clicktake('课程通告')">课程通告</el-menu-item>
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
				<el-breadcrumb separator-class="el-icon-arrow-right" style=" background:  #ECECEC;line-height: 40px;padding: 0 20px;">
					<el-breadcrumb-item :to="{ path: '/' ,query:{parent:'首页'}}">当前位置：首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/theask',query:{parent:'互问互答'} }">互问互答</el-breadcrumb-item>
					<el-breadcrumb-item>
						<div style="color:#A48638">发表问题</div>
					</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="tlist">
					<el-row>
						<el-col :span="24">
							<div class="demo-input-suffix input-module">
								<span class="input-label">标题：</span>
								<el-input placeholder="请输入标题" v-model="title">
								</el-input>

							</div>
						</el-col>
						<el-col :span="24">
							<div class="demo-input-suffix input-module">
								<span class="input-label">作者：</span>
								<el-input placeholder="请输入作者" v-model="user">
								</el-input>

							</div>
						</el-col>
					</el-row>
					<el-row class="edit-module">
						<div class="demo-input-suffix input-module">
							<span class="input-label">内容：</span>
							<quill-editor class="edit-content" ref="myTextEditor" @focus="onEditorFocus($event)" v-model="content" :options="editorOption" @ready="onEditorReady($event)">
							</quill-editor>

						</div>

					</el-row>
				</div>
				<div class="right-btn">
					<el-button @click.native="submitData" type="primary">提交问题</el-button>
				</div>

			</div>

		</el-main>
	</el-container>
</template>

<script>
	import TheColumn from "@/components/TheColumn";

	export default {
		name: "addQuestion",
		data() {
			return {
				title: "",
				user: "",
				namedata: "",
				columdata: [],
				content: "",
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
		computed: {
			editor() {
				return this.$refs.myQuillEditor.quill;
			},
		},
		computed: {
			editor() {

				return this.$refs.myTextEditor.quill;
			},
		},
		methods: {
		
			onEditorBlur() {}, // 失去焦点事件
			onEditorFocus() {

			}, // 获得焦点事件
			onEditorChange() {}, // 内容改变事件

			onEditorReady(editor) { // 准备编辑器
				console.log(editor)
			},
			//添加问题
			addQuestion() {
				console.log("添加问题")
				this.$router.push({
					path: "/addQuestion",
					query: {
						//										syname: this.userName
					}
				});
			},
			submitData() {
				if(this.title) {

				} else {
					this.$message.error("请输入标题")
					return false
				}
				if(this.user) {

				} else {
					this.$message.error("请输入作者")
					return false
				}
				if(this.content) {

				} else {
					this.$message.error("请输入问题内容")
					return false
				}
				this.getData(this.title, this.content, this.user)

			},

			//首次进入
			getData(name, content, user) {
				console.log("获取数据")
				var that = this;
				var where = {
					XAction: "GetDataInterface",
					XKLX: "SCDXXNJX",
					XDLMCID: "5000",
					XDLMSID: "DYBH201905291312151215223",
					XDLM问题编号: that.getTimeAndRandom(),
					XDLM问题名称: name,
					XDLM提问时间: new Date(),
					XDLM提问人: user,
					XDLM问题内容: content,

				}
				this.PostDataNoToken(
					where,
					function(retunrData) {

						if(retunrData.success) {
							that.$message({
								message: '操作成功',
								type: 'success'
							});
							that.$router.push({
								path: "/Theask",
								query: {
									//										syname: this.userName
								}
							});
						} else {
							this.$message.error("提交失败")
						}
					}
				);
			},
			RndNum(n) {
				var rnd = "";
				for(var i = 0; i < n; i++) {
					rnd += Math.floor(Math.random() * 10);
				}

				return rnd;
			},

			getTimeAndRandom() {
				return this.curDateTime() + this.RndNum(4);
			},

			curDateTime() {
				var d = new Date();
				var year = d.getFullYear() + "";
				var month = d.getMonth() + 1;
				var date = d.getDate();
				var day = d.getDay();
				var Hours = d.getHours(); //获取当前小时数(0-23)
				var Minutes = d.getMinutes(); //获取当前分钟数(0-59)
				var Seconds = d.getSeconds(); //获取当前秒数(0-59)
				var Milliseconds = d.getMilliseconds();
				var curDateTime = year;
				if(month > 9) {
					curDateTime = curDateTime + month;

				} else {
					curDateTime = curDateTime + "0" + month;
				}
				if(date > 9)
					curDateTime = curDateTime + date;
				else
					curDateTime = curDateTime + "0" + date;
				if(Hours > 9)
					curDateTime = curDateTime + Hours;
				else
					curDateTime = curDateTime + "0" + Hours;
				if(Minutes > 9)
					curDateTime = curDateTime + Minutes;
				else
					curDateTime = curDateTime + "0" + Minutes;
				if(Seconds > 9)
					curDateTime = curDateTime + Seconds;
				else
					curDateTime = curDateTime + "0" + Seconds;
				curDateTime = curDateTime + "0" + Milliseconds;
				return curDateTime;
			},
			clicktake(namedata) {
				var that = this;
				that.Titlenemr = namedata;
				that.$router.push({
					path: "/teach",
					query: {
						biaoti: that.Titlenemr,
						parent: "中心简介"
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
		height: 100%;
		position: relative;
		.tlist {
			padding: 15px;
			/*height: 450px;*/
			.edit-content {
				height: 300px;
			}
			.edit-module {
				padding-bottom: 80px;
			}
			.el-col {
				padding: 5px 0px;
			}
			.input-module {
				padding-left: 60px;
				box-sizing: border-box;
				position: relative;
				.input-label {
					position: absolute;
					left: 0px;
					top: 0px;
					line-height: 40px;
					text-align: right;
				}
			}
		}
		.right-btn {
			padding: 0px 15px;
			text-align: center;
			.el-button {
				background: #a48638;
				color: #FFFFFF;
				border: none;
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
			padding: 15px 80px 15px 15px;
			box-sizing: border-box;
		}
		.pagination-module {}
		.el-submenu__title {
			font-size: 0 !important;
		}
	}
</style>