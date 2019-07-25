layui.define("form", function(exports) {
	var MOD_NAME = "formSubmit",
		$ = layui.jquery,
		form = layui.form,
		table = layui.table
	var Class = function() { //挂载的类
		this.dataUrl = "http://192.168.28.251:8111/xdData/xdDataManage.ashx?XAction=GetDataInterface&XKLX=SCDXXNJX";
		this.addData = "";
		this.editData = "";
	}
	var baseData = {
		//obj的key包含（addData，editData，submitChangeData）
		//addData:是添加数据的接口的固定参数,比如：{XDLMCID: "5000",XDLMSID: "DYBH20190529131215121511603"}【对象格式】
		//editData:是修改数据的接口的固定参数,比如：{XDLMCID: "1001",XDLMSID: "DYBH20190529131215121515902"}【对象格式】
		//submitChangeData：是最后的表单提交（修改）的时候部分表单数据的自定义修改【对象格式】
		init: function(obj) {
			var that = this
			if(obj && obj.constructor === Object && obj.isEmptyObject != {}) {
				obj.addData ? that.addData = obj.addData : console.error("请出入init函数的添加参数");
				obj.editData ? that.editData = obj.editData : console.error("请出入init函数的修改参数");
			} else {
				console.error("formSubmit.init()传参不是正确格式，请参考文档");
			}
			var rowid = window.location.href.getQuery("rowId")
			//1)判断修改还是添加
			if(rowid) {
				that.SetUIValue(that.editData)
				$("#submit").html("修改")
			} else {
				//				$("#" + id).val(getTimeAndRandom())
			}
			//2)提交数据
			form.on("submit(submit)", function(data) {
				//第三个参数有值，并且是函数，解决特殊处理的数据
				if(obj.beforeSubmitCallback && obj.beforeSubmitCallback instanceof Function) {
					obj.beforeSubmitCallback(data.field);
					console.log("*****提交前的数据*******")
					console.log(data.field)
				}
				that.mAddNewData(data.field)
				return false
			})
		},
		SetUIValue: function(SetUIValuedata) {
			var that = this;
			that.PostData(SetUIValuedata, function(data) {
				if(data.success && data.rows.length > 0) {
					for(var k in data.rows[0]) {
						//判断标签的类型
						switch($("#" + k).prop("tagName")) {
							case "DIV":
							case "SPAN":
							case "P":
							case "li":
								$("#" + k).html(data.rows[0][k])
								break;
							case "INPUT":
								$("#" + k).val(data.rows[0][k]);
							case "IMG":
								$("#" + k).attr("src", data.rows[0][k]);
								break;
						}
						$("#" + k).val(data.rows[0][k])
					}
					form.render()
				}
			})

		},
		PostData: function(requestData, callback) { //异步的ajax请求
			var that = this;
			try {
				$.ajax({
					async: true,
					cache: false,
					type: "post",
					url: that.dataUrl,
					data: requestData,
					dataType: 'json',
					success: function(returnData) {
						if(returnData.success || returnData.msg) {
							if(callback) {
								callback(returnData, this)
							}
							rv = returnData
						} else {
							rv = returnData.message;
							if(rv == "NOTLOGIN") {
								//								var isQcode = window.location.href.getQuery("ewm"); //是否手机打开的
								//								if(isQcode) {
								//									window.location.href = window.location.origin + basePath + "/login-app.html?nextUrl=" + escape(window.location.href)
								//								} else {
								//									parent.location.href = baseUrl + "/login.html"
								//								}
								parent.location.href = "/login.html"
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
		},
		mAddNewData: function(where) {
			//判断添加还是修改
			var tip, that = this;
			if(rowid != null) {
				//合并两个对象，参数传添加和修改的必要参数和提交前的data.field的数据
				Object.assign(where, that.addData);
				tip = "确定要修改吗？"
			} else {
				Object.assign(where, that.editData);
				tip = "确定要添加吗？"
			}
			that.submitDataTip(tip, function() {
				that.PostData(where, function(data) {
					if(data.success) {
						that.tipMsg(data)

					}
				})
			})
		},
		submitDataTip: function(tip, callback, data) { //没有验证码的弹框	
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

		},
		tipMsg: function(data, callback) {
			var that = this;
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
					that.QXALL()
				}

			});
		},
		QXALL: function() {
			var indexlayer = parent.layer.getFrameIndex(window.name); //获取窗口索引
			if(parent.tableins) {
				parent.tableins.reload();
			}
			parent.layer.close(indexlayer);
		}
	}
	Class.prototype = baseData;
	String.prototype.getQuery = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = this.substr(this.indexOf("?") + 1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}
	var i = new Class();
	exports(MOD_NAME, i);
});