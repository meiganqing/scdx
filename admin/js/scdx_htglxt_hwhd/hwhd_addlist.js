var $, admin, element, layer, laydate, form, table, ue;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;

    //实例化编辑器
    ue = UE.getEditor('container', {});
    //日期选择器
    laydate.render({
        elem: '#提问时间',
        type: 'datetime' //默认，可不填
            ,
        format: 'yyyy/MM/dd HH:mm:ss',
        value: new Date()
            // value: currentDate()
    });
    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#submit").html("修改")
    } else {
        console.log(getTimeAndRandom())
        $("#问题编号").val(getTimeAndRandom())

    }


    form.on("submit(submit)", function(data) {

        var textData = ue.getContent();
        data.field.XDLM问题内容 = textData;
        console.log($("#sort").prop("checked"))
        $("#sort").prop("checked") == true ? data.field.XDLM排序 = 999 : data.field.XDLM排序 = 1
            //		data.field.XDLM排序
        delete data.field.editorValue;
        if (!textData) {
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
        XDLMSID: "DYBH2019052913121512154322",
        XDLMA: rowid

    }, function(data) {
        if (data.success && data.rows.length > 0) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }
            ue.ready(function() {
                ue.setContent(data.rows[0]['问题内容']);
            });
        }
    })
}

function mAddNewData(where) {

    //判断添加还是修改
    var tipMsg;
    if (rowid != null) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH20190529131215121522925";
        where.XDLMID = rowid
        tipMsg = "确定要修改吗？"
    } else {
        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH201905291312151215223";
        tipMsg = "确定要添加吗？"
    }
    submitDataTip(tipMsg, function() {
        PostData(where, function(data) {
            if (data.success) {
                QXALL()
            }
        })
    })
}