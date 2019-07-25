var colsName;
var tableins;
var database, where;
var editUrl = '';
var qxList;
var rolenames;
var dataId = "",rolenames,
    table;
layui.use(['table', 'layer', 'jquery', 'form'], function() {
    layer = layui.layer,
        form = layui.form,
        $ = layui.jquery;
    table = layui.table;
    // onlynum = window.location.href.getQuery('onlynum');
    // miaoshus = unescape(window.location.href.getQuery('miaoshu'));
    // dataId = window.location.href.getQuery('id')

    rolenames = unescape(window.location.href.getQuery("rolename"));

    $("#uesrsName").html(rolenames) //当前角色赋值
  
	getLM()


    form.on('select(itemlm)', function(data) {
        where.XDLMB = data.value;

        tableins.reload({
            where: where
        });

    });

    //table操作事件
    table.on('tool(grid_table)', function(obj) {
        var data = obj.data;
        if (obj.event == "edit") {
            addTeamMList(data.id);
        } else if (obj.event == "del") {
            //单行删除
            let json = {
                XDLMCID: "7000",
                XDLMSID: "DYBH20190530093926392622584",
                XDLMTID: "7007",
                XDLMROWID: data.id,
            };
            delDataByJson(json, function(data) {

                tableins.reload()

            });

        }

    })

    //添加角色
    $("#add_RolePower").click(function() {
        openWindow("2", "./SY_SYS_ITEM_ADD.html", "权限设置", 400, 500)
    })

    $('#PLSC').click(function() {
        //批量删除
        var checkStatus = table.checkStatus('mDataTable');
        let idList = [];
        for (var i = 0; i < checkStatus.data.length; i++) {
            idList.push(checkStatus.data[i].id);
        }
        if (idList.length < 1) {
            layer.msg("请选中行")
        } else {
            delDataByJson({
                XDLMCID: "7000",
                XDLMSID: "DYBH20190530093926392622584",
                XDLMTID: "7007",
                XDLMROWID: idList.join(","),
            }, function(data) {
                tableins.reload()
            })
        }
    });

    form.on("checkbox(all_fw)", function(data) {
        var rowsData = table.cache.mDataTable;
        if (data.elem.checked) {
            for (var i in rowsData) {
                $("#fw" + rowsData[i].id).prop('checked', true)
            }
        } else {
            for (var i in rowsData) {
                $("#fw" + rowsData[i].id).prop("checked", false)
            }
        }
        form.render();
    })
    form.on("checkbox(all_bj)", function(data) {
        var rowsData = table.cache.mDataTable;
        if (data.elem.checked) {
            for (var i in rowsData) {
                $("#bj" + rowsData[i].id).prop('checked', true)
            }
        } else {
            for (var i in rowsData) {
                $("#bj" + rowsData[i].id).prop("checked", false)
            }
        }
        form.render();
    })
    form.on("checkbox(all_sc)", function(data) {
        var rowsData = table.cache.mDataTable;
        if (data.elem.checked) {
            for (var i in rowsData) {
                $("#sc" + rowsData[i].id).prop('checked', true)
            }
        } else {
            for (var i in rowsData) {
                $("#sc" + rowsData[i].id).prop("checked", false)
            }
        }
        form.render();
    })
    form.on("checkbox(all_dc)", function(data) {
        var rowsData = table.cache.mDataTable;
        if (data.elem.checked) {
            for (var i in rowsData) {
                $("#dc" + rowsData[i].id).prop('checked', true)
            }
        } else {
            for (var i in rowsData) {
                $("#dc" + rowsData[i].id).prop("checked", false)
            }
        }
        form.render();
    })
    form.on("checkbox(all_sh)", function(data) {
        var rowsData = table.cache.mDataTable;
        if (data.elem.checked) {
            for (var i in rowsData) {
                $("#sh" + rowsData[i].id).prop('checked', true)
            }

        } else {
            for (var i in rowsData) {
                $("#sh" + rowsData[i].id).prop("checked", false)
            }
        }
        form.render();
    })

    $('#saveRole').click(function() {
        let lmids = "";
        let qxlist = "";
        var rowsData = table.cache.mDataTable;
        if (rowsData.length > 0) {
            for (var i in rowsData) {
                var qx = 900000;
                if ($("#fw" + rowsData[i].id).prop('checked')) {
                    qx = qx + 10000;
                }
                if ($("#bj" + rowsData[i].id).prop('checked')) {
                    qx = qx + 1000;
                }
                if ($("#sc" + rowsData[i].id).prop('checked')) {
                    qx = qx + 100;
                }
                if ($("#dc" + rowsData[i].id).prop('checked')) {
                    qx = qx + 10;
                }
                if ($("#sh" + rowsData[i].id).prop('checked')) {
                    qx = qx + 1;
                }
                lmids += rowsData[i].id + ",";
                qxlist += qx + ",";
            }

            lmids = lmids.substring(0, lmids.length - 1);
            qxlist = qxlist.substring(0, qxlist.length - 1);
            PostData({
                XDLMCID: "7000",
                XDLMSID: "DYBH2019053009481108782119",
                XDLMTID: "7004",
                XDLMLMIDS: lmids,
                XDLMQX: qxlist,
                XDLMXMBH: "scdx",
                XDLMRN: rolenames
            }, function(data) {
                layer.msg(data.message);
            })
        }
    });

    form.render();
});
function getLM(){
	console.log(rolenames)
		PostData({
      		XDLMCID: "1001",
      		XDLMSID: "DYBH2019061419461107662292",
      	}, function(data) {
      		if(data.rows.length > 0) {
      			getSelect("itemlm", data.rows, "itemlm");
      			 //getTable(rolenames, $("#itemlm").val(), "后台管理")
      			getDataTable(rolenames, data.rows[0].itemlm, "后台管理");
      			form.render("select")
      		}
      	})
}
function getColsName() {
    var colsName = [
        [{
                checkbox: true,
                LAY_CHECKED: true,
                width: '5%',
            },
            {
                field: 'itemlm',
                title: '栏目分类',
                width: '15%',
                align: 'center',

            },
            {
                field: 'itemname',
                title: '栏目名称',
                width: '15%',
                align: 'center'
            }, {
                field: 'id',
                title: '访问',
                width: '10%',
                align: 'center',
//              type: 'checkbox',
                templet: function(d) {
                    let cc = "";
                    console.log(d)
                    if (d.qx.substring(1, 2) == "1") {
                        cc = "checked";
                    }
                    return '<input type="checkbox" lay-skin="switch" lay-text="允许|禁止" title="显示本级标注"  id="fw' + d.id + '"   lay-filter="xianshi"  ' + cc + '  }>'
                }
            },{
                field: 'id',
                title: '编辑',
                width: '10%',
                align: 'center',
                templet: function(d) {
                    let cc = "";
                    if (d.qx.substring(2, 3) == "1") {
                        cc = "checked";
                    }
                    return '<input type="checkbox" lay-skin="switch" lay-text="允许|禁止" title="显示本级标注"   id="bj' + d.id + '"   lay-filter="xianshi"  ' + cc + '  }>'

                }
            },  {
                field: 'id',
                title: '删除',
                width: '10%',
                align: 'center',
                templet: function(d) {
                    let cc = "";
                    if (d.qx.substring(3, 4) == "1") {
                        cc = "checked";
                    }
                    return '<input type="checkbox" lay-skin="switch" lay-text="允许|禁止" title="显示本级标注"   id="sc' + d.id + '"   lay-filter="xianshi"  ' + cc + '  }>'

                }
            }, {
                field: 'id',
                title: '导出',
                width: '10%',
                align: 'center',
                templet: function(d) {
                    let cc = "";
                    if (d.qx.substring(4, 5) == "1") {
                        cc = "checked";
                    }
                    return '<input type="checkbox" lay-skin="switch" lay-text="允许|禁止" title="显示本级标注"   id="dc' + d.id + '"   lay-filter="xianshi"  ' + cc + '  }>'

                }
            }, {
                field: 'id',
                title: '审核',
                width: '10%',
                align: 'center',
                templet: function(d) {
                    let cc = "";
                    if (d.qx.substring(5, 6) == "1") {
                        cc = "checked";
                    }
                    return '<input type="checkbox" lay-skin="switch" lay-text="允许|禁止" title="显示本级标注"   id="sh' + d.id + '"   lay-filter="xianshi"  ' + cc + '  }>'

                }
            }, {
                title: '管理',
                width: '15%',
                align: 'center',
                toolbar: '#opeTpllcjd'
            }
        ]
    ];
    return colsName;
}

function getDataTable(a, b, c) {

    where = {
        XDLMSID: "DYBH2019053009543202106273",
        //		XDLMCID: "10001",
        XDLMCID: "7000",
        XDLMTID: "7006",
        XDLMA: a,
        XDLMB: b,
        XDLMC: c,
        XDLMD: "scdx"
    };
    tableins = table.render({
        elem: '#grid_table',
        url: dataUrl,
        where: where,
        toolbar: '#mTableToolbar',
        title: '',
        cols: getColsName(),
        id: 'mDataTable',
//      size: 'sm',
        page: {
            limits: [25, 50, 100, 300, 500],
            groups: 20
        },
           headers:{
            	Authorization:getAuth()
            },
        limit: 20, //每页默认显示的数量
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
            console.log(11);
        },
    });
}