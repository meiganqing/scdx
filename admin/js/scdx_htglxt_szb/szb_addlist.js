var $, admin, element, layer, laydate, form, table;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
//var httpurl = "http://192.168.28.251:8111/";
var fileend = {};
var filedpath = {};
var index = "";
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
    uploadFile()
        //实例化编辑器
    ue = UE.getEditor('container', {});

    // //日期选择器
    // laydate.render({
    //     elem: '#日期',
    //     type: 'datetime', //默认，可不填
    //     format: 'yyyy/MM/dd HH:mm:ss',
    //     value: new Date(),
    // });

    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#submit").html("修改")
    } else {

    }

    form.on("submit(submit)", function(data) {
        var textData = ue.getContent();
        // console.log(textData);
        data.field.XDLM简介 = textData;
        data.field.XDLM附件 = filedpath;
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
        XDLMSID: "DYBH201906121039333933107152",
        XDLMA: rowid

    }, function(data) {
        if (data.success && data.rows.length > 0) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }

            fileend = data.rows[0]['附件'];

            console.log(httpurl + data.rows[0]['附件'].replace("ss.", "."));
            $("#HomepageImg").attr("src", httpurl + data.rows[0]['附件'].replace("ss.", "."))
            ue.ready(function() {
                ue.setContent(data.rows[0]['简介']);
            });
        }
    })
}

function mAddNewData(where) {
    // where.XDLM分类 = configData["type" + type].title

    //判断添加还是修改
    var tip;
    if (rowid != null) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH201906121039333933136155";
        where.XDLMID = rowid
        tip = "确定要修改吗？"
    } else {
        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH2019061210393339331153";
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


function uploadFile() {
    // var loading;
    layui.use('upload', function() {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#uploadFile', //绑定元素				
            url: httpurl + 'xddata/xdFileAllSysUpload.ashx?XKLX=SCDXXNJX', //上传接口		
            accept: 'images',
            before: function(obj) {
                var files = obj.pushFile();
                // loading = layer.msg("正在上传...", {
                //         time: 3000
                //     })
                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function(index, file, result) {

                });
            },
            done: function(res) {
                //上传完毕回调
                filedpath = res.filepath;
                fileend = httpurl + res.filepath;
                console.log(res.filepath);
                $("#HomepageImg").attr("src", httpurl + res.filepath.replace("ss.", "."))
                    // layer.close(loading)
            },
            error: function() {
                //请求异常回调
            }
        });
    });
}