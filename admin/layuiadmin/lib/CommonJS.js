layui.define("form", function(exports) {
	var MOD_NAME = "CommonJS",
		$ = layui.jquery,
		form = layui.form,
		table = layui.table,
		CommonJS = function() {
			return new Common()
		},
		Common = function() {
			this.postUrl = "http://192.168.28.251:8111/xdData/xdDataManage.ashx"; //请求的地址
			this.fileBaseUrl = ""; //文件的绝对路径的地址

		}
	var baseData = {
		//参数内容:1)requestData请求的data数据 【必输】   2）callback请求成功的回调函数，【非必输】
		PostData: function(requestData, callback) { //异步的ajax请求
			let that = this;
			try {
				$.ajax({
					async: true,
					cache: false,
					type: "post",
					url: that.postUrl,
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
		},
		PostDataAsync: function(requestData, callback) { //同步的ajax请求,调用之后有返回值
			//异步的ajax请求
			let that = this;
			let rv;
			try {
				$.ajax({
					async: true,
					cache: false,
					type: "post",
					url: that.postUrl,
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
			return rv;

		},
		updateData: function() {
			window.location.reload()
			return false
		},

		updateDataTable: function() {
			tableins.reload()
			return false
		},
		currentDate: function() {
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
		},

		currentDateMonth: function() {
			var d = new Date(),
				str = '';
			str += d.getFullYear() + '-';

			if((d.getMonth() + 1) < 10) {

				str += '0' + parseInt(d.getMonth() + 1);
			} else {
				str += d.getMonth() + 1;
			}

			return str;
		},
		lastcurrentDate: function() {
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
		},

		curDateTime: function() {
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
			return curDateTime;
		},
		RndNum: function(n) {
			var rnd = "";
			for(var i = 0; i < n; i++) {
				rnd += Math.floor(Math.this.random() * 10);
			}
			return rnd;
		},
		getTimeAndRandom: function() {
			return this.curDateTime() + this.RndNum(4);
		},
		currentTime: function() {
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
		},
		currentYear: function() {
			var d = new Date(),
				str = '';
			str += d.getFullYear() - 1;
			return str;
		},

		//时间格式化
		timeEXchange: function(obj) {

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

		},
		//查询变色
		QueryKeyColor: function(field) {

			var dd = $('#keyWords').val().split(" ");
			if(field != null) {
				for(var i = 0; i < dd.length; i++) {
					field = field.replace(dd[i], "<span style='color:red;'>" + dd[i] + "</span>");
				}
			}

			return field;
		},
		getSelect: function(id, data, key, attr, attrValue) { //获取下拉框形式的模板
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

		},
		getSelectDefined: function(id, data, key, attr, attrValue) { //获取默认为空的下拉框形式的模板
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

		},

		//写cookies 
		//这是有设定过期时间的使用示例： 
		//s20是代表20秒 
		//h是指小时，如12小时则是：h12 
		//d是天数，30天则：d30 
		//setCookie("name","hayden","s20");
		setCookiee: function(name, value, time) {
			var strsec = this.getsec(time);
			var exp = new Date();
			exp.setTime(exp.getTime() + strsec * 1);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		},

		getsec: function(str) {
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
		},

		//删除cookies 
		delCookie: function(name) {

			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var cval = getCookieName(name);
			if(cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		},

		getUserName: function() {
			var name = 'mUserName';
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

			if(arr = document.cookie.match(reg)) {
				return decodeURIComponent(arr[2]);
			} else {

			}
			//		window.parent.location.href = "/kf/login.html";
		},

		getCookieName: function(name) {

			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

			if(arr = document.cookie.match(reg)) {
				return decodeURIComponent(arr[2]);

			} else {

				// var isQcode = window.location.href.getQuery("ewm"); //是否手机打开的
				// if (isQcode) {
				//     window.location.href = window.location.origin + basePath + "/login-app.html?nextUrl=" + escape(window.location.href)
				// } else {
				//     parent.location.href = basePath + "/login.html"
				// }

			}

		},
		QXALL: function() { //关闭当前弹窗，刷新父页面

			var indexlayer = parent.layer.getFrameIndex(window.name); //获取窗口索引

			if(parent.tableins) {
				parent.tableins.reload();
			}
			parent.layer.close(indexlayer);

		},
		//弹出窗口新页面
		openWindow: function(type, url, title, w, h, anim) {
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
				h = ($(window).height() - 100);
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
				success: function(layero) {
					//弹窗自适应
					$(window).resize(function() {
						let layerInitWidth = $("#layui-layer-iframe" + index).width()
						var docWidth = $(document).width();
						var minWidth = layerInitWidth > docWidth ? docWidth : layerInitWidth;
						layer.style(index, {
							top: 0,
							width: minWidth,

						});
					});
				},
				end: function() {

				}

			});
			return layerPage
		},
		delData: function(id, XDLMSID, callback) { //删除数据
			var that = this;
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

								that.PostData({

									XDLMCID: 4000,
									XDLMROWID: id,
									XDLMSID: XDLMSID
								}, function(data) {
									if(data.msg || data.success) {
										that.tipMsg(data, callback)
									}
								})
							}
						});

					}
				);
			});

		},
		//批量删除
		delDataVolume: function(XDLMSID, callback) {
			var ids = [],
				that = this;
			layui.use(['table', 'layer'],function() {
				var table = layui.table,
					layer = layui.layer;
				var checkStatus = table.checkStatus('tableLayui'),
					data = checkStatus.data;
				for(var i = 0; i < data.length; i++) {
					ids.push(data[i].id);
				}
				if(ids.length < 1) {
					layer.msg("请选中行")
				} else {
					submitDataVertifyModule("确定要批量删除吗", function() {
						that.PostData({
							XDLMCID: 4000,
							XDLMROWID: ids.join(","),
							XDLMSID: XDLMSID
						}, function(data) {
							if(data.msg || data.success) {
								that.tipMsg(data, callback)
							}
						})
					})

				}
			});
		},
		tipMsg: function(data, callback) {
			var iconType = "",
				tipMessage = data.message,
				that = this;

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
		submitDataVertifyModule: function(tip, callback) { //有验证码的弹框
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

		},
		submitDataVertifyPassword: function(tip, callback) { //验证密码的弹框

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
		},
		//搜索
		searchTableData: function(where, tableins) {
			where.QueryType = $("#cxlb").val();
			where.QueryKey = $("#keyWords").val();
			tableins.reload({
				where: where,
				page: {
					curr: 1
				}
			});
		}

	}

	Common.prototype = baseData;

	var i = new CommonJS();

	exports(MOD_NAME, i);
});