var $, element, layer, laydate, form, formSelects, limit = 17,
	table, tableins, database, where, type, qx;
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
	var rowid = window.location.href.getQuery("rowid");
	where = {
		XDLMSID: "DYBH2019052913121512157721"
	}
	type = window.location.href.getQuery("type")
	//获取权限
	qx = GetUserLimitNew("互问互答问题列表")
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
				openWindow("2", "./hwhd_addlist.html?type=" + type, "添加")
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
				openWindow("2", "./hwhd_addlist.html?rowId=" + data.id + "&type=" + type, "修改")
				break;
			case 'del':
				if(!qxValue(qx, 3)) {
					return false
				}

				delData(data.id, "DYBH20190529131215121525134", function(data) {

					tableins.reload()

				})
				break;
			case "sortFirst":
				if(!qxValue(qx, 2)) {
					return false
				}
				var tip = "";
				sortValue = "1"
				if(data.排序 == "1") {
					tip = "确定添加置顶？"
					sortValue = "999"
				} else if(data.排序 == "999") {
					tip = "确定取消置顶？";
					sortValue = "1"
				}
				var whereSort = {
					XDLMCID: "6000",
					XDLMSID: "DYBH20190529131215121522925",
					XDLMID: data.id,
					XDLM排序: sortValue

				}
				submitDataTip(tip, function() {
					PostData(whereSort, function(data) {
						if(data.success) {
							tableins.reload()
						}
					})
				})
				break;
			case "detail":
				if(!qxValue(qx, 1)) {
					return false
				}
				openWindow("2", "./hwhd_listxq.html?rowId=" + data.id, "详情")
				break;
			case "answer":
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./hwhd_hd.html?rowId=" + data.id, "回复")
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
			field: '问题名称',
			title: '问题名称',
			width: "50%",
			templet: '#titleTpl',

			align: "center"
		}, {
			field: '提问时间',
			title: '提问时间',
			width: "10%",
			align: "center"
		}, {
			field: '提问人',
			title: '提问人',
			width: "10%",
			align: "center"
		}, {
			field: '排序',
			title: '是否置顶',
			width: "10%",
			align: "center",
			templet: '#sortTpl'
		}, {
			field: '',
			title: '操作',
			width: "14.5%",
			align: "center",
			templet: '#opeTpl'
		}
	]
]