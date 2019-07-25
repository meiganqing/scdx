var $, admin, element, layer, laydate, form, table, ue;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;



    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#addUsers").html("修改")
    } else {

    }

    form.on("submit(addUsers)", function(data) {
        delete data.field.editorValue;
        mAddNewData(data.field)
        console.log(data.field);
        return false
    })

});

function SetUIValue(rowid) {
    PostData({
        XDLMCID: "1001",
        XDLMSID: "DYBH201905300939263926110102",
        XDLMA: rowid

    }, function(data) {
        console.log(data);
        if (data.success && data.rows.length > 0) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }

        }
    })
}

function mAddNewData(where) {
    //判断添加还是修改
    console.log(where)
    if(where.XDLMmState=="on"){
    	where.XDLMmState="正常"
    }else {
    	where.XDLMmState="禁用"
    }
    var tip;
    if (rowid != null) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH201905300939263926168105";
        where.XDLMID = rowid
        tip = "确定要修改吗？"
    } else {
        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH201905300939263926112103";
        tip = "确定要添加吗？"
    }
    submitDataTip(tip, function() {
        PostData(where, function(data) {
            if (data.success) {
                tipMsg(data)
                    // QXALL()
            }
        })
    })
}