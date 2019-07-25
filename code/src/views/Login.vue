<!--  -->
<template>
	<div class="login">
		<div  @click="tujichu()" tag="div" class="lonintop">
			<img src="../assets/xmimage/lab/logintop.png" alt="">
		</div>
		<div class="login_form">
			<img src="../assets/xmimage/lab/用户登录.png" alt="" class="login_form_img">
			<input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="userName">
			<input type="password" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password">
			<div class="yzm-div">
				<input type="text" class="qxs-ic_yam qxs-icon" placeholder="验证码" v-model="yzm">
				<span class="yzm-value" @click="generatedCode">{{ccode}}</span>
			</div>
			<el-button class="login_btn" @click.native="ajaxlong" type="primary">登录</el-button>
	
		</div>
	</div>
</template>

<script>
	import { login } from "@/request/api";
	export default {
		name: "login",
		data() {
			return {
				userName: "",
				password: "",
				XAction: "GetDataInterface",
				XKLX: "SCDXXNJX",
				yzm: "",
				ccode: ""
				
			};
		},

		beforeUpdate() {
			 
// sessionStorage.setItem('headtop',this.$route.query.syname);
// sessionStorage.setItem('knbh',this.$route.query.knbh );

		 },
		mounted() {
		    localStorage.setItem('headtop', this.$route.query.syname);
			 localStorage.setItem('knbh',this.$route.query.knbh );
			 this.generatedCode()
		
		},
		methods: {
			 // 退出
    tujichu() {
    //   sessionStorage.removeItem('knbh');
	//    sessionStorage.removeItem('headtop');
	   localStorage.removeItem('knbh');
	   localStorage.removeItem('headtop');
	   this.$router.push({
        path: "/Virtal",
        query: {idata:"在线实验流程",parent:"虚拟仿真实验"}
      });
     
    },
			//   请求数据对比
			ajaxlong() {
				this.logina();

			},

			//
			logina() {
				var that=this;
				if(!this.userName) {
					this.$message.error("请输入用户名");
					return;
				}
				if(!this.password) {
					this.$message.error("请输入密码");
					return;
				}
				if(!this.yzm) {
					this.$message.error("验证码不正确");
					return;
				} else {
					//判断验证码是否正确
					if(this.yzm.toUpperCase() != this.ccode) {
						this.$message.error("验证码不正确");
						return;
					}
				}
				if(this.userName == null & this.userName == null) {

				} else {
					 
					that.PostData({
							XAction: "GetDataInterface",
							XKLX: "SCDXXNJX",
							XDLMCID: "7000",
							XDLMSID: "DYBH201905300944050905412",
							XDLMTID: "7001",
							XDLMPassword: this.password,
							XDLMUserName: this.userName
					},function (res){
							if(res.success == true) {
								that.setCookiee("UserName", res.data[0].mUserName, "d7")   
								that.setCookiee("UserId", res.data[0].id, "d7")   
//								that.setCookiee("Usytoken", res.sytoken, "d7") 
								localStorage.setItem("Usytoken", res.sytoken)
								console.log(localStorage.getItem("Usytoken"))
								that.$router.push({
									path: "/process",
									query: {
										topna: that.$route.query.syname,
										logknbh: that.$route.query.knbh,//实验流程传库内编号
										
//										
									}
								});
							} else {

								that.$alert(res.message, {
									confirmButtonText: '确定',

								});
							}
						
						})
						
				}
			},

			//写cookies 
			//这是有设定过期时间的使用示例： 
			//s20是代表20秒 
			//h是指小时，如12小时则是：h12 
			//d是天数，30天则：d30 
			//setCookie("name","hayden","s20");
			setCookiee: function(name, value, time) {
				let strsec = this.getsec(time);
				let exp = new Date();
				exp.setTime(exp.getTime() + strsec * 1);
				document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
			},

			getsec: function(str) {
				// alert(str);
				var str1 = str.substring(1, str.length) * 1;
				var str2 = str.substring(0, 1);
				if(str2 == "s") {
					return str1 * 1000;
				} else if(str2 == "h") {
					return str1 * 60 * 60 * 1000;
				} else if(str2 == "d") {
					return str1 * 24 * 60 * 60 * 1000;
				}
			},

			//删除cookies 
			delCookie: function(name) {

				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = this.getCookieName(name);
				if(cval != null) {

					document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
				} else {
					//跳到登录页的路由
				}

			},

			getCookie: function(c_name) {
				var c_start;
				if(document.cookie.length > 0) {
					c_start = document.cookie.indexOf(c_name + "=");
					if(c_start != -1) {
						c_start = c_start + c_name.length + 1;
						c_end = document.cookie.indexOf(";", c_start);
						if(c_end == -1) c_end = document.cookie.length;
						return unescape(document.cookie.substring(c_start, c_end))
					}
				}
				return ""
			},

			getCookieName: function(name) {

				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

				if(arr = document.cookie.match(reg)) {

					return decodeURIComponent(arr[2]);
				} else {

				}

			},
			generatedCode() {
				const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
					'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				]
				let code = ''
				for(let i = 0; i < 4; i++) {
					let index = Math.floor(Math.random() * 36)
					code += random[index]
				}
				this.ccode = code
			}

		}
	};
</script>
<style lang='scss' scoped>
	.login {
		width: 100%;
		height: 940px;
		background: url("../assets/xmimage/lab/bg001.jpg") no-repeat;
		background-size: 100% 100%;
		padding: 88px 64px;
	}
	
	.lonintop {
		cursor: pointer;
	}
	
	.login_form {
		width: 440px;
		height: 410px;
		margin-top: 50px;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: url("../assets/xmimage/lab/Rounded Rectangle 2.png")no-repeat;
		background-size: 100% 100%;
	}
	
	.login_form_img {
		margin-bottom: 20px;
		cursor: pointer;
	}
	
	.qxs-ic_user {
		display: block;
		width: 350px;
		height: 50px;
		background-size: 20px 15px;
		margin-bottom: 20px;
	}
	
	.qxs-ic_password {
		display: block;
		width: 350px;
		height: 50px;
		background-size: 20px 15px;
		margin-bottom: 20px;
	}
	
	.login_logo {
		height: 100%;
	}
	
	.login_btn {
		width: 350px;
		font-size: 28px;
		background: url("../assets/xmimage/lab/login.png") no-repeat;
		
		border: none;
		box-sizing: border-box;
		border-bottom: 3px solid rgba($color: #CAB489, $alpha: 0.7)
	}
	
	.qxs-icon {
		border: none;
		padding: 0px 10px;
		background-color: rgba($color: #ffffff, $alpha: 0.7)
	}
	
	.qxs-icon:focus {
		outline: none!important;
	}
	
	.qxs-ic_yam {
		width: 230px;
		display: inline-block;
		margin-bottom: 20px;
		height: 50px;
	}
	
	.yzm-div {
		width: 350px;
	}
	
	.yzm-value {
		display: inline-block;
		width: 100px;
		height: 50px;
		float: right;
		line-height: 50px;
		background: #A48B45;
		text-align: center;
		color: #fff;
		cursor: pointer;
	}
</style>