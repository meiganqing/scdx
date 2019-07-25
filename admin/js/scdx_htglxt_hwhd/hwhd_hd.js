var $, admin, element, layer, laydate, form, table, ue,layedit,editContent;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
var editLayer
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;

	//实例化编辑器


	if(rowid) {
		SetUIValue(rowid)
	}
	$("#editSubmit").click(function() {
		editData()
	})
	editInit()
	form.on("submit(submit)", function(data) {

		mAddNewData(data.field)
		return false
	})

});

function SetUIValue(rowid) {
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH2019052913121512154322",
		XDLMA: rowid,
		orderby: "id"

	}, function(data) {
		if(data.success && data.rows.length > 0) {
			for(var k in data.rows[0]) {
				//				$("#" + k).html(data.rows[0][k])
				if($("#" + k).prop("tagName")) {
					if($("#" + k).prop("tagName") == "INPUT" || $("#XDLM" + k).prop("tagName") == "SELECT") {
						$("#" + k).val(data.rows[0][k])

					} else {
						$("#" + k).html(data.rows[0][k])
					}
				}
			}
			answerList(data.rows[0]['问题编号'])

		}

	})
}

function answerList(bh) {
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH20190529131215121521731",
		XDLMA: bh

	}, function(data) {
		var html = ""
		$("#answerContent").empty()
		if(data.success && data.rows.length > 0) {
			for(var i = 0; i < data.rows.length; i++) {
				html += '<li class="layui-timeline-item">' +
					'<i class="layui-icon layui-timeline-axis">&#xe63f;</i>' +
					'<div class="layui-timeline-content layui-text">' +
					'<h3 class="layui-timeline-title">' + '【' + data.rows[i]['回答人'] + '】' + data.rows[i]['回答时间'] + '</h3>' +
					'<p id="content' + data.rows[i].id + '">' + data.rows[i]['回答内容'] + '</p>' +
					'<div class="btn-content"><div class="layui-btn-group" style="padding: 5px 0px;">' +
					'<a onclick=openEditHtml("' + data.rows[i].id + '") class="layui-btn layui-btn-sm btn-small"><i class="layui-icon">&#xe642;</i></a>' +
					'<a onclick=deleteData("' + data.rows[i].id + '") class="layui-btn layui-btn-sm btn-small"><i class="layui-icon">&#xe640;</i></a>' +
					'</div></div>' +
					'</div></li>'

			}

			$("#answerContent").append(html)
		}

	})
}

function editData() {
	PostData({
		XDLMCID: 6000,
		XDLMSID: "DYBH20190529131215121510335",
		XDLMID: $("#editId").val(),
		XDLM回答内容: $("#修改内容").val()
	}, function(data) {
		if(data.success) {
			answerList($("#问题编号").val())
			layer.close(editLayer)
		}
	})
}

function openEditHtml(id) {
	$("#editId").val(id)
	$("#修改内容").val($("#content" + id).html())
	editLayer = openWindow("1", $("#editDisplay"), "修改", 400, 200)
}

function deleteData(id) {
	delData(id, "DYBH20190529131215121525134", function() {
		answerList($("#问题编号").val())
	})
}

function mAddNewData(where) {

	var tipMsg;
	if(rowid) {
		where.XDLMCID = "5000";
		where.XDLMSID = "DYBH2019052913121512152933";
		tipMsg = "确定要添加回复吗？"
	}
	where.XDLM回答内容 = layedit.getContent(editContent);
	where.XDLM回答人 = getCookieName("mUserName");
	where.XDLM回答时间 = currentDate() + " " + currentTime();
	submitDataTip(tipMsg, function() {
		PostData(where, function(data) {
			if(data.success) {
			
				answerList($("#问题编号").val())
				$("#回答内容").val("")
				editInit()
			}
		})
	})
}
function editInit(){
	
	layui.use("layedit",function (){
		layedit=layui.layedit;
		  editContent=layedit.build('回答内容'); //建立编辑器
	})
}
