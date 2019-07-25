var $, admin, element, layer, laydate, form, formSelects,
	table, tableins, where = {},
	rowid, qx;
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
	rowid = window.location.href.getQuery("rowid");
	//获取权限
	qx = GetUserLimitNew("用户列表")

	getDataTable();
	//头工具栏事件
	table.on('toolbar(tableList)', function(obj) {
		var checkStatus = table.checkStatus(obj.config.id);
		switch(obj.event) {
			case 'add':
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_USERLIST_ADD.html", "添加", 500, 400)
				break;
			case 'allDel':
				if(!qxValue(qx, 3)) {
					return false
				}
				 delDataVolume("DYBH201905300939263926201104", function(data) {

				    tableins.reload()

				 })

			

				break;

		};
	});

	//监听行工具事件
	table.on('tool(tableList)', function(obj) {
		// var checkStatus = table.checkStatus(obj.config.id);
		var data = obj.data;
		switch(obj.event) {
			case 'setting':
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_USERLIST_ADD.html?rowId=" + data.id, "修改", 500, 400)
				break;
			case 'edit':
				if(!qxValue(qx, 2)) {
					return false
				}
				openWindow("2", "./SY_SYS_USERROLE_SET_LIST.html?uid=" + data.id, "权限设置", 400, 500)
				break;
			case 'del':
				if(!qxValue(qx, 3)) {
					return false
				}
				// delDataVolume(data.id, "DYBH201905300939263926201104", function(data) {

				//     tableins.reload()

				// })
				let json = {
					XDLMCID: "4000",
					XDLMSID: "DYBH201905300939263926201104",
					//                  XDLMTID: "7008",
					XDLMROWID: data.id,
					//                  XDLMrolename: data.rolename,
				};
				delDataByJson(json, function(data) {

					tableins.reload()

				})
				break;
				break;
				// case "detail":
				//     openWindow("2", "./tzgl_listxq.html?rowId=" + data.id, "详情")
				//     break;

		};
	});

})

function showEditBtn() {
	var flag = type
	return flag
}

function getDataTable() {
	var cols = [
		[ //表头 
			{
				checkbox: true,
				LAY_CHECKED: false
			},
			{
				type: 'numbers',
				title: "序号",
				width: "7%",
				align: "center"
			},
			{
				field: 'mUserName',
				title: '用户名',
				width: "20%",
				align: "center"
			}, {
				field: 'wPhoneNum',
				title: '用户电话',
				width: "20%",
				align: "center"
			}, {
				field: 'rolename',
				title: '用户角色',
				width: "20%",
				align: "center"
			}, {
				field: 'mState',
				title: '用户状态',
				width: "10%",
				align: "center"
			}, {
				field: '操作',
				title: '操作',
				width: "20%",
				align: "center",
				templet: '#opeTpl'
			}
		]
	];
	where = {
		XDLMSID: "DYBH201905300939263926166101",
		XDLMCID: "1001",
		XDLMA: "scdx"
	};

	tableins = table.render({
		elem: '#tableList',
		url: dataUrl,
		where: where,
		toolbar: '#mTableToolbar',
		title: '',
		cols: cols,
		id: 'tableLayui',
		size: 'sm',
		   headers:{
            	Authorization:getAuth()
            },
		page: {
			limits: [25, 50, 100, 300, 500],
			groups: 18
		},
		limit: 18, //每页默认显示的数量
		request: {
			pageName: 'page' //页码的参数名称，默认：page
				,
			limitName: 'rows' //每页数据量的参数名，默认：limit
		},
		response: {
			//    statusName: 'code' //规定数据状态的字段名称，默认：code
			//, statusCode: 0 //规定成功的状态码，默认：0
			//,msgName: 'message' //规定状态信息的字段名称，默认：msg
			countName: 'total' //规定数据总数的字段名称，默认：count
				,
			dataName: 'rows' //规定数据列表的字段名称，默认：data
		},
		done: function(res, curr, count) {
			// console.log(11);
		},
	});
}