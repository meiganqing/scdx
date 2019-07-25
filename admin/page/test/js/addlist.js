
var rowid,formSubmit;//必须声明的变量
layui.config({
	base: "../../layuiadmin/lib/"
}).use(["formSubmit"], function() {
	formSubmit = layui.formSubmit,		//使用封装好的表单提交的js
	rowid = window.location.href.getQuery("rowId");//表单提交页面-修改需要的传递的id	
	//init的数据的参数格式：对象格式，三个键值对，
	//【对象】键1命名必须为：addData 值为区分添加时的后台入参数据  
	//【对象】 键2命名必须为：editData 值为区分修改时的后台入参数据 
	//【函数】键3必须命名：beforeSubmitCallback 函数的参数的data值为data.field中的带name的值，要做其它赋值修改操作在该函数内部修改即可
	formSubmit.init({
		addData: {
			XDLMCID: "5000",
			XDLMSID: "DYBH20190529131215121511603"
		},
		editData: {
			XDLMCID: "1001",
			XDLMSID: "DYBH20190529131215121515902",
			XDLMA: rowid
		},
		beforeSubmitCallback:function (data){
			console.log(data)
			data.XDLM图片="789789789789"//修改的示例
		}
	})

});