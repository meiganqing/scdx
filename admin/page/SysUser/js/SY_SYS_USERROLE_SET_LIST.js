var colsName;
var tableins;
var where;
 
 var uid;
layui.use(['table', 'layer', 'jquery', 'form'], function () {
    table = layui.table,
        layer = layui.layer,
        form = layui.form,
        $ = layui.jquery;


    uid = window.location.href.getQuery("uid");

    $("#saveRole").click(function (rows) {
        saveRoleBind();
    })
    where = {
        XDLMCID: "1001",
        XDLMSID: "DYBH2019053009580409844239",
        XDLMA: "scdx"
    };
    colsName = [
        [{
            field: 'rolename',
            title: '角色名称',
            width: '50%',
            align: 'center',
            templet: "#itemlm"
        },
        {
            field: '',
            title: '绑定权限',
            width: '50%',
            align: 'center',
            templet: "#shqx"
        }
        ]
    ];
    // console.log(ipUrl + databaseType),
    tableins = table.render({
        elem: '#demo',
        url: dataUrl+ "&XDLMCID=1001",

        //			url: '/xdData/xdDataManageGR.ashx?XAction=SqlRun&XKLX=syyh',
        where: where,
        method: 'post',
        	   headers:{
            	Authorization:getAuth()
            },
        response: {
            //				statusName: 'success', //规定数据状态的字段名称，默认：code					
            //				statusCode: true, //规定成功的状态码，默认：0					
            //				msgName: 'success', //规定状态信息的字段名称，默认：msg					
            countName: 'total', //规定数据总数的字段名称，默认：count					
            dataName: 'rows' //规定数据列表的字段名称，默认：data
        },
        cols: colsName,
        skin: 'row', //表格风格
        even: true,
        size: 'sm',
        height: $(document).height() - 240,
        page: true, //是否显示分页
        limits: [10, 20, 30, 40, 50],
        limit: 10, //每页默认显示的数量
        id: "tableLayui",
        done: function (res, curr, count) {

            SetUserRoleChecked();
        }
    });
}); //初始化end
function SetUserRoleChecked() {
    //获取当前用户都有哪些角色的权限
    var reData = PostData({
        // TblNum: 7014,
        // X94: onlynum

        XDLMCID: "1001",
        XDLMSID: "DYBH20190530093926392620992",
        XDLMB:uid,
        XDLMC: "scdx"
    });
    console.log(reData)
    $("input[name='checkedValue']").each(function (i, elem) {
        console.log(elem)
        for (var i in reData.rows) {
            if (reData.rows[i].rolename == elem.value) {
                if (elem.checked) { } else {
                    elem.checked = true;
                }
            }
        }

    });
    layui.use(['form'], function () {
        let form = layui.form;
        form.render();
    });
}
var checkedIDs = [];

function saveRoleBind() {

    let rolelist = "";
    $("input[name='checkedValue']").each(function (i, elem) {
        if (elem.checked == true) {
            rolelist += elem.value + ",";
        }
    });
    rolelist = rolelist.substring(0, rolelist.length - 1);

    PostData({
        XDLMCID: "7000",
        XDLMSID: "DYBH2019053117182603306147",
        XDLMTID: "7005",
        XDLMLUID: uid,
        XDLMXMBH: "scdx",
        XDLMRLIST: rolelist
    }, function (data) {
            if (data.code == 0) {
                layer.msg('设置完成！', {
                    title: '提示框',
                    icon: 1,
                    time: 800
                }, function (alertindex) {
                    QXALL();
                });
            }
            else {
                layer.msg('出错啦！'+data.message, {
                    title: '提示框',
                    icon: 1,
                    time: 800
                }, function (alertindex) {
                    QXALL();
                });
            }
    })
  
}