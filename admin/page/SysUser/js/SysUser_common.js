var ipUrl = ""; //公用的ip地址，公用的图片地址

baseUrl = "/library"
var dataUrl = ipUrl + "/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=SCDXXNJX";
//请求数据ajax

function PostDataAsync(requestData, callback, action, baseUrl) { //同步的ajax请求
	console.log(789)
	var rv = '';
	try {
		$.ajax({
			async: false,
			cache: false,
			type: "post",
			url: dataUrl,
			data: requestData, // $('#mkufang').val() 
			dataType: 'json',
			   headers:{
            	Authorization:getAuth()
            },
			success: function(returnData) {
				console.log(returnData)
				if(returnData.success || returnData.msg) {
					if(callback) {
						callback(returnData, this)
					}
					rv = returnData
				} else {
					rv = returnData.message;
					if(rv == "NOTLOGIN") {
						parent.location.href = baseUrl + "/login.html"
					} else {
						layer.msg(rv)
					}
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				rv = XMLHttpRequest.responseText;
				layer.msg(rv)

			}
		});
	} catch(e) {

		rv = e.message;
	}
	return rv
}

function PostData(requestData, callback, action, baseUrl) { //异步的ajax请求
	var rv = '';
	try {
		$.ajax({
			async: false,
			cache: false,
			type: "post",
			url: dataUrl,
			data: requestData, // $('#mkufang').val() 
			dataType: 'json',
			   headers:{
            	Authorization:getAuth()
            },
			success: function(returnData) {

				if(returnData.success || returnData.msg) {

					if(callback) {
						callback(returnData, this)
					}
					rv = returnData
				} else {
					rv = returnData.message;
					if(rv == "NOTLOGIN") {

						var isQcode = window.location.href.getQuery("ewm"); //是否手机打开的

						if(isQcode) {

							window.location.href = window.location.origin + basePath + "/login-app.html?nextUrl=" + escape(window.location.href)
						} else {
							parent.location.href = baseUrl + "/login.html"
						}
					} else {
						layer.msg(rv)
					}
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				rv = XMLHttpRequest.responseText;
				layer.msg(rv)

			}
		});
	} catch(e) {

		rv = e.message;
	}
	return rv
}
function getAuth(){
	if(localStorage.getItem("mSytoken")){
		return localStorage.getItem("mSytoken")
	}else {
		window.location.href="/login.html"
	}
	
}
String.prototype.getQuery = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = this.substr(this.indexOf("?") + 1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
//刷新
function updateData() {
	window.location.reload()
	return false
}

function updateDataTable() {
	tableins.reload()
	return false
}

//时间设置
function currentDate() {
	var d = new Date(),
		str = '';
	str += d.getFullYear() + '-';

	if((d.getMonth() + 1) < 10) {

		str += '0' + parseInt(d.getMonth() + 1) + '-';
	} else {
		str += d.getMonth() + 1 + '-';
	}
	if(d.getDate() < 10) {
		str += '0' + d.getDate();
	} else {
		str += d.getDate();
	}
	return str;
}

function currentDateMonth() {
	var d = new Date(),
		str = '';
	str += d.getFullYear() + '-';

	if((d.getMonth() + 1) < 10) {

		str += '0' + parseInt(d.getMonth() + 1);
	} else {
		str += d.getMonth() + 1;
	}

	return str;
}

function lastcurrentDate() {
	var d = new Date(),
		str = '';
	str += d.getFullYear() - 1 + '-';

	if((d.getMonth() + 1) < 10) {

		str += '0' + parseInt(d.getMonth() + 1) + '-';
	} else {
		str += d.getMonth() + 1 + '-';
	}
	if(d.getDate() < 10) {
		str += '0' + d.getDate();
	} else {
		str += d.getDate();
	}
	return str;
}

function curDateTime() {
	var d = new Date();
	var year = d.getFullYear() + "";
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var Hours = d.getHours(); //获取当前小时数(0-23)
	var Minutes = d.getMinutes(); //获取当前分钟数(0-59)
	var Seconds = d.getSeconds(); //获取当前秒数(0-59)
	var Milliseconds = d.getMilliseconds();
	var curDateTime = year;
	if(month > 9) {
		curDateTime = curDateTime + month;

	} else {
		curDateTime = curDateTime + "0" + month;
	}
	if(date > 9)
		curDateTime = curDateTime + date;
	else
		curDateTime = curDateTime + "0" + date;
	if(Hours > 9)
		curDateTime = curDateTime + Hours;
	else
		curDateTime = curDateTime + "0" + Hours;
	if(Minutes > 9)
		curDateTime = curDateTime + Minutes;
	else
		curDateTime = curDateTime + "0" + Minutes;
	if(Seconds > 9)
		curDateTime = curDateTime + Seconds;
	else
		curDateTime = curDateTime + "0" + Seconds;
	curDateTime = curDateTime + "0" + Milliseconds;
	//alert(curDateTime);
	//document.getElementByIdx_x("NumberNo").value=curDateTime;
	return curDateTime;
}

function RndNum(n) {
	var rnd = "";
	for(var i = 0; i < n; i++) {
		rnd += Math.floor(Math.random() * 10);
	}

	return rnd;
}

function getTimeAndRandom() {
	return curDateTime() + RndNum(4);
}

function QueryKeyColor(field) {

	var dd = $('#keyWords').val().split(" ");
	if(field != null) {
		for(var i = 0; i < dd.length; i++) {
			field = field.replace(dd[i], "<span style='color:red;'>" + dd[i] + "</span>");
		}
	}

	return field;
}

function currentTime() {
	var d = new Date(),
		str = '';
	var times = d.toLocaleDateString();
	if(d.getHours() < '10') {
		str += '0' + d.getHours() + ':';
	} else {
		str += d.getHours() + ':';
	}
	if(d.getMinutes() < '10') {
		str += '0' + d.getMinutes() + ':';
	} else {
		str += d.getMinutes() + ':';
	}
	if(d.getSeconds() < '10') {
		str += '0' + d.getSeconds() + '';
	} else {
		str += d.getSeconds() + '';
	}
	return str;
}

function currentYear() {
	var d = new Date(),
		str = '';
	str += d.getFullYear() - 1;
	return str;
}

//时间格式化
function timeEXchange(obj) {

	if(obj == '') {
		return '';
	} else {

		if(obj.split(' ')[0].indexOf('-') != '-1') {
			var arrTime = obj.split(' ')[0].trim().split('-');
		} else {
			var arrTime = obj.split(' ')[0].trim().split('/');
		}

		return arrTime[0] + '年' + arrTime[1] + '月' + arrTime[2] + '日';
	}

}
//查询变色
function QueryKeyColor(field) {

	var dd = $('#keyWords').val().split(" ");
	if(field != null) {
		for(var i = 0; i < dd.length; i++) {
			field = field.replace(dd[i], "<span style='color:red;'>" + dd[i] + "</span>");
		}
	}

	return field;
}

function getSelect(id, data, key, attr, attrValue) { //获取下拉框形式的模板
	var select = key
	if(attrValue) {
		select = attrValue
	}
	var xmmcTemplate = "";
	$('#' + id).empty()
	if(data.length > 0) {
		if(attr) {
			for(var i = 0; i < data.length; i++) {
				xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '" attrData="' + data[i][attr] + '">' + data[i][key] + '</option>'
			}
		} else {
			for(var i = 0; i < data.length; i++) {
				xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '">' + data[i][key] + '</option>'
			}
		}

	}

	$('#' + id).append(xmmcTemplate)

}

function getSelectDefined(id, data, key, attr, attrValue) { //获取默认为空的下拉框形式的模板
	var select = key
	if(attrValue) {
		select = attrValue
	}
	var xmmcTemplate = "<option value=''>全部</option>";
	$('#' + id).empty()
	if(data.length > 0) {
		//		data.reverse()
		if(attr) {
			for(var i = 0; i < data.length; i++) {

				xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '" attrData="' + data[i][attr] + '">' + data[i][key] + '</option>'
			}
		} else {
			for(var i = 0; i < data.length; i++) {
				xmmcTemplate += '<option value="' + data[i][select] + '" id="' + data[i][select] + '">' + data[i][key] + '</option>'
			}
		}

	}

	$('#' + id).append(xmmcTemplate)

}
//写cookies 
//这是有设定过期时间的使用示例： 
//s20是代表20秒 
//h是指小时，如12小时则是：h12 
//d是天数，30天则：d30 
function setCookiee(name, value, time) {
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec * 1);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getsec(str) {
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
}

//删除cookies 
function delCookie(name) {
	console.log("shanchu");
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookieName(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function getUserName() {
	var name = 'mUserName';
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if(arr = document.cookie.match(reg)) {
		return decodeURIComponent(arr[2]);
	} else {

	}
	//		window.parent.location.href = "/kf/login.html";
}

function getCookie(c_name) {
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
}

function QXALL() {
	// window.parent.location.reload();
	console.log(window.name)
	console.log(parent)
	console.log(parent.layer)
	var indexlayer = parent.layer.getFrameIndex(window.name); //获取窗口索引
	console.log(indexlayer)
	if(parent.tableins) {
		parent.tableins.reload();
	}
	parent.layer.close(indexlayer);

}
//弹出窗口新页面
function openWindow(type, url, title, w, h, anim) {
	let maxmin = true;
	if(title == null || title == '') {
		title = false;
		maxmin = false;
	};
	if(url == null || url == '') {
		url = "/404.html";
	};
	if(w == null || w == '') {
		w = ($(window).width() - 200);
	};
	if(h == null || h == '') {
		h = ($(window).height() - 50);
	};
	if(anim == null || anim == "") {
		anim = 5
	}
	var layerPage = layer.open({
		type: type * 1,
		area: [w + 'px', h + 'px'],
		fix: false, //不固定
		maxmin: maxmin,
		shade: 0.4,
		title: title,
		content: url,
		anim: anim,
		success: function(layero) {},
		end: function() {

		}

	});
	return layerPage
}

function delData(id, XDLMSID, callback) { //删除数据
	layui.use(['layer'], function() {
		layer.confirm('确定要删除？删除后不可恢复！！', {
				btn: ['确定删除', '再想想'] //按钮
			},
			function() //确定
			{
				layer.msg('确定删除，请稍等...', {
					icon: 1,
					time: 500,
					success: function() {

						PostData({

							XDLMCID: 4000,
							XDLMROWID: id,
							XDLMSID: XDLMSID
						}, function(data) {
							if(data.msg || data.success) {
								tipMsg(data, callback)
							}
						})
					}
				});

			}
		);
	});

}

function delDataByJson(json, callback) { //删除数据
	layui.use(['layer'], function() {
		
		      submitDataVertifyModule("确定要删除吗", function() {
              PostData(json, function(data) {
							if(data.msg || data.success) {
								tipMsg(data, callback)
							}
						})
            })
		
		
		
		
		
//		layer.confirm('确定要删除？删除后不可恢复！！', {
//				btn: ['确定删除', '再想想'] //按钮
//			},
//			function() //确定
//			{
//				layer.msg('确定删除，请稍等...', {
//					icon: 1,
//					time: 500,
//					success: function() {
//
//						PostData(json, function(data) {
//							if(data.msg || data.success) {
//								tipMsg(data, callback)
//							}
//						})
//					}
//				});
//
//			}
//		);
	});

}

//批量删除

function delDataVolume(XDLMSID, callback) {
    var ids = [];
    layui.use('table', function() {
        var table = layui.table;
        var checkStatus = table.checkStatus('tableLayui'),
            data = checkStatus.data;
        for (var i = 0; i < data.length; i++) {
            ids.push(data[i].id);
        }
        if (ids.length < 1) {
            layer.msg("请选中行")
        } else {
            submitDataVertifyModule("确定要批量删除吗", function() {
                PostData({
                    XDLMCID: 4000,
                    XDLMROWID: ids.join(","),
                    XDLMSID: XDLMSID
                }, function(data) {
                    if (data.msg || data.success) {
                        tipMsg(data, callback)
                    }
                })
            })
        }
    });
}

function tipMsg(data, callback) {
	console.log(data)
	var iconType = "";
	var tipMessage = data.message;

	if(data.msg || data.success) {
		iconType = 1;
		if(data.message) {

		} else {
			tipMessage = "操作成功"
		}
	} else {
		iconType = 5;
		if(data.message) {

		} else {
			tipMessage = "操作失败"
		}
	}

	layer.msg(tipMessage, {
		icon: iconType,
		time: 500
	}, function() {
		if(callback) {
			callback()
		} else {
			QXALL()
		

		}

	});
}

function newTab(url, tit) {
	if(top.layui.index) {
		top.layui.index.openTabsPage(url, tit)
	} else {
		window.open(url)
	}
}

function getTable(id, where, cols, action, height, xklx) {

	var height_ = $(document).height() - 140;

	height == "" ? height_ = "" : ""

	layui.use(["table"], function() {
		var table = layui.table;


		tableins = table.render({
			elem: '#' + id,
			url: dataUrl + "&XDLMCID=1001",
			where: where,
			method: 'post',
			cols: cols,
			skin: 'row', //表格风格
			even: true,
			size: 'sm',
			toolbar: '#toolbarDemo',
			   headers:{
            	Authorization:getAuth()
            },
			//			data: testData,
			//			toolbar: true, //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
			//			width: $(window).width() - 40,
			height: height_,
			request: {
				pageName: 'page' //页码的参数名称，默认：page
					,
				limitName: 'rows' //每页数据量的参数名，默认：limit
			},
			response: {
				//				statusName: 'success', //规定数据状态的字段名称，默认：code					
				//				statusCode: true, //规定成功的状态码，默认：0					
				//				msgName: 'success', //规定状态信息的字段名称，默认：msg					
				countName: 'total', //规定数据总数的字段名称，默认：count					
				dataName: 'rows' //规定数据列表的字段名称，默认：data
			},
			loading: true,
			cellMinWidth: 30,
			//				height: 'full-70',
			page: true, //是否显示分页
			limits: [limit, 50, 100, 200, 500, 1000],
			limit: limit, //每页默认显示的数量
			id: "tableLayui",
			done: function(res, curr, count) {
				if(res.message == "NOTLOGIN") {
					
						parent.location.href = baseUrl + "/login.html"

				}
			},
			error: function() {

			}
		});

	})

}

function checkTable(TblNum, ids, t) { //选中table
	if(ids.length == 0) {
		layer.msg('请先选中行！', {
			title: '提示框',
			icon: 0,
			time: 800
		});
	} else {

		var index002 = layer.confirm('确定要导出吗？', {
			btn: ['确定', '再想想'] //按钮
		}, function() {
			var index3 = layer.msg('正在导出,请稍等...', {
				time: 0,
				shade: 0.3,
				//content: '测试回调',
				success: function(index, layero) {

					postData("wwTableSaveToExcel", {
						TblNum: TblNum,
						[t]: "in (" + ids.join(',') + ")"
					}, function(returnData) {
						if(returnData.success || returnData.msg) {
							layer.msg('导出完成', {
								time: 500,
								icon: 1
							}, function() {
								layer.closeAll();
								window.location = returnData.FilePath;

							});

						} else {
							layer.msg(returnData, {
								icon: 0,
								time: 2000
							});

						}
					}, "/xdGetData/DataHandler.ashx");

				}
			});

		}, function() {
			layer.close(index002);
		});

	}
}

function submitDataTip(tip, callback, data) { //没有验证码的弹框	
	layer.confirm(tip, {
			btn: ['确定', '再想想'] //按钮
		},
		function() //确定
		{
			var index000002 = layer.msg('正在提交，请稍等...', {
				icon: 1,
				time: 500,
				success: function() {
					layer.close(index000002)
					callback(data)

				}
			});
		}

	);

}

function submitDataVertifyModule(tip, callback) { //有验证码的弹框

	layer.open({
		title: tip,
		type: 1,
		content: `<div id='vertifyCode' style="padding-top:15px;padding-right:30px;"></div>
		<div class="layui-layer-btn layui-layer-btn-" style="position:absolute;bottom:0px;left:55px;"><a class="layui-layer-btn0" id="confirmBtn">确定</a><a class="layui-layer-btn1">再想想</a></div>
				`, //这里content是一个普通的String
		area: ['280px', '260px'],
		success: function() {

			$('#vertifyCode').codeVerify({
				type: 1,
				width: '200px',
				height: '50px',
				fontSize: '30px',
				codeLength: 4,
				btnId: 'confirmBtn',
				ready: function() {},
				success: function() {
					callback()
				},
				error: function() {
					layer.msg('验证码不匹配！');
					return false;
				}
			});

		}
	});

}

function submitDataVertifyPassword(tip, callback) { //验证密码的弹框

	var index002 = layer.prompt({
		formType: 1,
		value: '',
		title: '警告！系统关键操作，必须再次输入确认密码',

	}, function(value, index, elem) {
		if(value == "3.1415") {
			layer.close(index002);
			if(callback) {
				callback()
			}
		} else {
			layer.msg("密码错误")
		}

	});
}
//搜索
function searchTableData(where, tableins) {
	where.QueryType = $("#cxlb").val();
	where.QueryKey = $("#keyWords").val();
	tableins.reload({
		where: where,
		page: {
			curr: 1
		}
	});
}

function GetUserLimitNew(itemname) {
console.log(13)
	try {
		var returnData = PostDataAsync({
			XDLMCID: 7000,
			XDLMSID: "DYBH2019053120181502738839",
			XDLMTID: 7002,
			XDLMUserID: getCookie('mUserId'),
			XDLMItemName: itemname,
			XDLMxmbh: "scdx"
		});

		if((typeof returnData) == "string") {

		} else {
			if(returnData.qx == undefined) {
				//				window.location.href = "/login.html";
			}
			if(returnData.qx == "") {
				//				window.location.href = "/login.html";
			}
			if(returnData.qx == "undefined") {
				//				window.location.href = "/login.html";
			}
			return returnData.qx;
		}
	} catch(e) {
		console.log("错误而")
		//		window.location.href = "/login.html";
	}

}

function qxValue(qx, index) {

	let tip, flag = true;
	let qx_ = qx.split("")
	switch(index) {
		case 2:
			tip = "编辑";
			break;
		case 3:
			tip = "删除";
			break;
		case 4:
			tip = "导出";
			break;
		case 5:
			tip = "审核";
			break;
		case 1:
			tip = "访问";
			break;
	}

	if(qx_[index] != "1") {
		layer.msg("您没有" + tip + "权限")
		flag = false
	}
	return flag;
}