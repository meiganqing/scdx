var $, admin, element, layer, laydate, form;
layui.config({
	base: './layuiadmin/' //静态资源所在路径
}).extend({
	index: 'lib/index' //主入口模块
}).use(['index'], function() {
	$ = layui.$, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form;
	$("#userName").html(getCookieName("mUserName"));

	//获取当前登录人的角色

	//退出
	$("#signOut").click(function() {
	
		
		

		delCookie("mUserId")
		delCookie("mUserName")
		delCookie("mUserPassword")
		console.log("删除cookie")
		if(window.location.hostname == "localhost") {
			window.location.href = "./login.html"
		} else {
			window.location.href = "./login.html"
		}

	})
});