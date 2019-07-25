var $, element, layer, form, table, laytpl, IndexPagecolorList;
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, form = layui.form, table = layui.table, laytpl = layui.laytpl;
	IndexPagecolorList = [
		'#52B1F3', '#AFD548', '#FFB55C', '#46BFBD', '#8BA3E9',
		'#BDD98B', '#FF935C', '#58C1DF', '#FFD578', '#A1B395',
	];
	var chart1 = echarts.init(document.getElementById("kctgEchart"))
	//获取新闻
	PostData({
		XDLMCID: "1001",
		page: 1,
		rows: 5,
		XDLMSID: "DYBH20190529131215121519001",
		XDLMA: "通知公告",
	}, function(data) {
		getTpl("xw", data.rows)
	})
	PostData({
		XDLMCID: "1001",
		page: 1,
		rows: 5,
		XDLMSID: "DYBH20190529131215121519001",
		XDLMA: "新闻聚焦"
	}, function(data) {
		getTpl("gg", data.rows)
	})
	PostData({
		XDLMCID: "1001",
		page: 1,
		rows: 4,
		XDLMSID: "DYBH2019052913121512157721"
	}, function(data) {
		getTplquestion("wt", data.rows)
	})
	//获取流程
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH201905301718571857250141",
		XDLMA: "2019060511114105058994",
		oderby: "本步序号"
	}, function(data) {
		//		getTplquestion("wt", data.rows)

		console.log(800 / 13)

		getTemplate("process", data.rows, lcTpl)
		var lcLength = data.rows.length;
		if(lcLength < 25) {
			$(".lc-module").find("li").css({
				"margin-left": 900 / 13 + "px"
			})

		}

	})

	PostDataEchart({
		XDLMCID: "8000",
		XDLMSID: "DYBH2019062614044602086044",
		XDLMTID: 8001,
		XDTJLX: "count",
		XDTJMC: "分类",

	}, function(returnData) {
		console.log(returnData)
//		if(returnData) {
			var datax = returnData.category,
				datay = returnData.series[0].data;
				console.log(datax)
				console.log(datay)
//			for(var i = 0; i < returnData.data.length; i++) {
//
//				datax.push(returnData.data[i][charttype[j]])
//				datay.push(returnData.data[i]['tj'])
//			}

			getChartxx(chart1, datax, datay, 'bar')

//		}
	})

});

function getTemplate(view, data, tpl) {
	$("#" + view).empty()
	var getTpl = tpl.innerHTML;
	laytpl(getTpl).render(data, function(html) {
		$("#" + view).append(html)
	});
}

function getTpl(view, data) {
	$("#" + view).empty()
	var getTpl = listTpl.innerHTML;
	laytpl(getTpl).render(data, function(html) {
		$("#" + view).append(html)
	});
}

function getTplquestion(view, data) {
	$("#" + view).empty()
	var getTpl = questionTpl.innerHTML;
	laytpl(getTpl).render(data, function(html) {
		$("#" + view).append(html)
	});
}

function skipUrl(type, id) {

	var skipUrl
	if(type == "通知公告") {
		skipUrl = "./page/scdx_htglxt_tzgl/tzgl_addlist.html?rowId=" + id + "&type=3"
	} else {
		skipUrl = "./page/scdx_htglxt_tzgl/tzgl_addlist_img.html?rowId=" + id + "&type=2"
	}
	newTab(skipUrl, type)
}
var typeArray = []
var flag

function checkLcType(data) {
	flag = "top"
	//	console.log(typeArray.indexOf(data))
	if(typeArray.indexOf(data) == -1) {
		if(typeArray.length > 0) {
			flag = "md2" //单个li+闭合的idv
		}
		typeArray.push(data)
	} else {
		flag = "middle1"; //单个的li
	}
	console.log(flag)
	return flag;
}

function lastType() {
	return flag
}
function PostDataEchart(requestData, callback, action, baseUrl) { //异步的ajax请求
	var rv = '';
	try {
		$.ajax({
			async: true,
			cache: false,
			type: "post",
			url: ipUrl,
			data: requestData, // $('#mkufang').val() 
			dataType: 'json',
			headers: {
				Authorization: getAuth()
			},
			success: function(returnData) {
				if(callback) {
					callback(returnData, this)
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
}
function getChartxx(myChartInit, datax, datay, type, j) {
	var colorList = ['#46A7ED', '#AFD548'];
	var optionBar = {
		title: {

		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ["出版社"]
		},
		toolbox: {
			show: true,
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		xAxis: {
			data: datax,
			axisLabel: {  
                                interval: 0,  
                                formatter:function(value,index)  
                                {  
                                    debugger  
                                    if (index % 2 != 0) {  
                                        return '\n\n' + value;  
                                    }  
                                    else {  
                                        return value;  
                                    }  
                                }  
                            }  
		},
		yAxis: {},

		 grid: {
                x: 50,
//              y: 25,
                x2: 30,
//              left: '10%',  
//bottom:'35%'  
//              y2: 35
              },
		series: [{
			name: "数量",
			type: type,
			data: datay,
			areaStyle: {},
			itemStyle: {
				normal: {
					barBorderRadius: 5,
					color: function(params) {

						var chartColor
						var index = params.dataIndex
						if(index <= IndexPagecolorList.length) {
							chartColor = IndexPagecolorList[index]

						} else {
							var index_ = index % IndexPagecolorList.length
							chartColor = IndexPagecolorList[index_]

						}

						return chartColor
					}
				}
			},
			label: {
				symbol: 'pin',
				normal: {
					show: true,
					position: 'top'
				}
			}
		}]
	};

	myChartInit.setOption(optionBar);
}