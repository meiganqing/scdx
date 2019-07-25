var $, admin, element, layer, laydate, form, table, ue;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
layui.use(["jquery", "form", "element", "layer", "laydate", "table", "layedit"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;

    //实例化编辑器
    ue = UE.getEditor('container', {});

    //日期选择器
    laydate.render({
        elem: '#日期',
        type: 'datetime', //默认，可不填
        format: 'yyyy/MM/dd HH:mm:ss',
        value: new Date()
    });

    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#submit").html("修改")
    } else {
        $("#作者").val(getCookie("mUserName")); 
    }

    form.on("submit(submit)", function(data) {
        var textData = ue.getContent();
        data.field.XDLM内容 = textData;
        delete data.field.editorValue;
        if (textData == "") {
            layer.msg("您还没有输入内容")
            return false
        }
        mAddNewData(data.field)
        return false
    })

                   
});

function SetUIValue(rowid) {
    PostData({
        XDLMCID: "1001",
        XDLMSID: "DYBH20190529131215121515902",
        XDLMA: rowid

    }, function(data) {
        if (data.success && data.rows.length > 0) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }
            ue.ready(function() {
                ue.setContent(data.rows[0]['内容']);
            });
        }
    })
}

function mAddNewData(where) {
    where.XDLM分类 = configData["type" + type].title

    //判断添加还是修改
    var tip;
    if (rowid != null) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH20190529131215121519805";
        where.XDLMID = rowid
        tip = "确定要修改吗？"
    } else {
        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH20190529131215121511603";
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