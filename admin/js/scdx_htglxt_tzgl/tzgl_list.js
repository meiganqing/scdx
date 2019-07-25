var $, admin, element, layer, laydate, form, formSelects, limit = 20,
	qx,
	table, tableins;
var database, where = {
	XDLMSID: "DYBH20190529131215121519001"
}
var type = window.location.href.getQuery("type")
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
	var rowid = window.location.href.getQuery("rowid");
	where.XDLMA = configData["type" + type].title
	getTable("tableList", where, cols);
	//获取权限
	qx = GetUserLimitNew("课程平台")

	//获取查询下拉选项

	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH2019052913414402039284",

	}, function(data) {
		if(data.success && data.rows.length > 0) {
			getSelect("cxlb", data.rows, "查询显示名")
			form.render("select")
		}
	})

	//头工具栏事件
	table.on('toolbar(tableList)', function(obj) {
		var checkStatus = table.checkStatus(obj.config.id);
		switch(obj.event) {
			case 'add':
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./tzgl_addlist.html?type=" + type, "添加");
				break;
			case 'allDel':
				if(!qxValue(qx, 3)) {
					return false
				}
				delDataVolume("DYBH2019052913121512153704", function(data) {
					tableins.reload()
				})
				break;
		};
	});

	//监听行工具事件
	table.on('tool(tableList)', function(obj) {
		var data = obj.data;
		switch(obj.event) {
			case 'edit':
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./tzgl_addlist.html?rowId=" + data.id + "&type=" + type, "修改")
				break;
			case 'del':
			if(!qxValue(qx, 3)) {
					return false
				}
				delData(data.id, "DYBH2019052913121512153704", function(data) {

					tableins.reload()

				})
				break;
				// case "detail":
				//     openWindow("2", "./tzgl_listxq.html?rowId=" + data.id, "详情")
				//     break;

		};
	});
	//查询
	$("#searchData").click(function() {
		searchTableData(where, tableins)
	})

});


function showEditBtn() {
	var flag = type
	return flag
}
var cols = [
	[ //表头
		{
			checkbox: true,
			LAY_CHECKED: false
		}, {
			type: 'numbers',
			title: "序号"
		},
		{
			field: '标题',
			title: '标题',
			width: "60%",
			templet: '#titleTpl',
			align: "center"
		}, {
			field: '日期',
			title: '添加时间',
			width: "10%",
			align: "center",

		}, {
			field: '作者',
			title: '作者',
			width: "10%",
			align: "center",
			templet: '#userColor'
		}, {
			field: '',
			title: '操作',
			width: "14.5%",
			align: "center",
			templet: '#opeTpl'
		}
	]
]