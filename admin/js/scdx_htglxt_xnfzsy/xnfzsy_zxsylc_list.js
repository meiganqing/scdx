var $, element, layer, laydate, form, formSelects, limit = 20,
	table, tableins, database, where, rowid, type, qx;
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
	rowid = window.location.href.getQuery("rowid");
	type = window.location.href.getQuery("type")
	where = {
		XDLMSID: "DYBH20190530171857185730131"
	}
	//获取权限
	qx = GetUserLimitNew("在线实验流程")
	getTable("tableList", where, cols);
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
				openWindow("2", "./xnfzsy_syjs_addlist.html?type=" + type, "添加")
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
				openWindow("2", "./xnfzsy_syjs_addlist.html?rowId=" + data.id + "&type=" + type, "修改")
				break;
			case 'del':
				if(!qxValue(qx, 3)) {
					return false
				}
				delData(data.id, "DYBH201905301718571857148134", function(returndata) {

						tableins.reload()

				})
				break;
			case "addSYLC":
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./xnfzsy_zxsylc_addlist.html?rowId=" + data.id, "实验流程")
				break;
			case "detail":
				if(!qxValue(qx, 1)) {
					return false
				}
				openWindow("2", "./hwhd_listxq.html?rowId=" + data.id, "详情")
				break;

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
			field: '实验名称',
			title: '实验名称',
			width: "80%",
			templet: '#titleTpl',

			align: "center"
		}, {
			field: '',
			title: '操作',
			width: "14.5%",
			align: "center",
			templet: '#opeTpl'
		}
	]
]