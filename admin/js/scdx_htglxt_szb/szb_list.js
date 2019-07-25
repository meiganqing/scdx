var $, rowid, element, layer, laydate, form, formSelects, limit = 20,
	qx,
	table, tableins;
var database, where;
var type = window.location.href.getQuery("type")
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
	rowid = window.location.href.getQuery("rowid");
	where = {
		XDLMSID: "DYBH201906121039333933176151",
	}
	//获取权限
	qx = GetUserLimitNew("师资队伍")
	getTable("tableList", where, cols);
	//获取查询下拉选项
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH2019062015272309218489",

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
				openWindow("2", "./szb_addlist.html?type=" + type, "添加")
				break;
			case 'allDel':
			if(!qxValue(qx, 3)) {
					return false
				}
				delDataVolume("DYBH201906121039333933192154", function(data) {
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
				openWindow("2", "./szb_addlist.html?rowId=" + data.id + "&type=" + type, "修改")
				break;
			case 'del':
			if(!qxValue(qx, 3)) {
					return false
				}
				delData(data.id, "DYBH201906121039333933192154", function(data) {

					tableins.reload()

				})
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
			field: '姓名',
			title: '姓名',
			width: "20%",
			align: "center",
			templet: '#titleTpl'
		}, {
			field: '职称',
			title: '职称',
			width: "35%",
			align: "center",
			templet: '#userColor'
		},
		{
			field: '添加时间',
			title: '添加时间',
			width: "25%",
			align: "center",
		}, {
			field: '',
			title: '操作',
			width: "14.5%",
			align: "center",
			templet: '#opeTpl'
		}
	]
]