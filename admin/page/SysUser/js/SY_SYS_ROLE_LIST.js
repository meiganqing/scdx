var $, admin, element, layer, laydate, form, formSelects, limit = 25,
	table, tableins, rowid, database, where,qx;
var type = window.location.href.getQuery("type")
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element,
		layer = layui.layer,
		laydate = layui.laydate,
		form = layui.form,
		table = layui.table;
	rowid = window.location.href.getQuery("rowid");
	where = {
		XDLMSID: "DYBH2019053009580409844239",
		XDLMCID: "1001",
		XDLMA: "scdx"
	}
	//获取权限
	qx = GetUserLimitNew("角色列表")
	getTable("tableList", where, cols);

	// //获取查询下拉选项

	// PostData({
	//     XDLMCID: "1001",
	//     XDLMSID: "DYBH2019052913414402039284",

	// }, function(data) {
	//     if (data.success && data.rows.length > 0) {
	//         getSelect("cxlb", data.rows, "查询显示名")
	//         form.render("select")
	//     }
	// })

	//头工具栏事件
	table.on('toolbar(tableList)', function(obj) {

		var checkStatus = table.checkStatus(obj.config.id);
		
		switch(obj.event) {
			case 'add':
			if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_ROLE_ADD.html?type=" + type, "添加", 500, 300)
				break;
			case 'allDel':
			if(!qxValue(qx, 3)) {
					return false
				}
			 delDataVolume("DYBH2019061017184807722273", function(data) {

				    tableins.reload()

				 })
//				let rolenameList = [];
//
//				for(var i = 0; i < checkStatus.data.length; i++) {
//					rolenameList.push(checkStatus.data[i].rolename);
//				}
//				if(rolenameList.length < 1) {
//					layer.msg("请选中行")
//				} else {
//					submitDataVertifyModule("确定要批量删除吗", function() {
//						PostData({
//							XDLMCID: "7000",
//							XDLMSID: "DYBH2019061017184807722273",
//							XDLMTID: "7008",
//							XDLMxmbh: "scdx",
//							XDLMrolename: rolenameList.join(","),
//						}, function(data) {
//							tableins.reload()
//						})
//					})
//					// delDataByJson({
//					//     XDLMCID: "7000",
//					//     XDLMSID: "DYBH2019061017184807722273",
//					//     XDLMTID: "7008",
//					//     XDLMxmbh: "scdx",
//					//     XDLMrolename: rolenameList.join(","),
//					// }, function(data) {
//
//					//     tableins.reload()
//
//					// })
//
//				}

				break;
		};
	});

	//监听行工具事件
	table.on('tool(tableList)', function(obj) {
		var data = obj.data;
		switch(obj.event) {
			case 'setting':
			if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_ROLE_ADD.html?rowId=" + data.id + "&type=" + type, "编辑", 500, 300)
				break;
			case 'edit':
			if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_ROLELIMIT_LIST.html?rolename=" + escape(data.rolename), "权限设置")
				break;
			case 'del':
			if(!qxValue(qx, 3)) {
					return false
				}
				let json = {
					XDLMCID: "7000",
					XDLMSID: "DYBH2019061017184807722273",
					XDLMTID: "7008",
					XDLMxmbh: "scdx",
					XDLMrolename: data.rolename
				};
				delDataByJson(json, function(data) {

					tableins.reload()

				})
				break;
				// case "detail":
				//     openWindow("2", "./tzgl_listxq.html?rowId=" + data.id, "详情")
				//     break;

		};
	});

	// 查询
	// $("#searchData").click(function() {
	//     searchTableData(where, tableins)
	// })
})

function showEditBtn() {
	var flag = type
	return flag
}
var cols = [
	[ //表头
		{
			checkbox: true,
			LAY_CHECKED: false
		},
		{
			type: 'numbers',
			title: "序号",
			width: "8%",
			align: "center"
		},
		{
			field: 'rolename',
			title: '角色名称',
			width: "20%",
			align: "center"
		}, {
			field: 'miaoshu',
			title: '角色描述',
			width: "50%",
			templet: '#colorJSMS',
			align: "center"
		}, {
			field: '操作',
			title: '操作',
			width: "19%",
			align: "center",
			templet: '#opeTpl'
		}
	]
]