var $, admin, element, layer, laydate, form, table, ue, laytpl;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
var glbh = window.location.href.getQuery("knbh")
var editLayer, player1
//var httpurl = "http://192.168.28.251:8111/"
layui.use(["jquery", "form", "element", "layer", "laydate", "table", "laytpl"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table, laytpl = layui.laytpl;
    uploadFile()

    if (rowid) {
        SetUIValue(rowid)
        $("#submit").val("修改")
    } else {
        $("#submit").val("添加")
    }
    form.on("select(dataType)", function(data) {
        if (data.value == "图片") {
            $("#bgVideo").addClass("layui-hide");
            $("#picture").removeClass("layui-hide");
        } else if (data.value == "视频") {
            $("#bgVideo").removeClass("layui-hide");
            $("#picture").addClass("layui-hide");
        }
    })
    form.on("submit(submit)", function(data) {
        $("#步骤状态").prop("checked") == true ? data.field.XDLM步骤状态 = "启用" : data.field.XDLM步骤状态 = "停用";
        console.log($("#数据类型").val() == "视频")
        if ($("#数据类型").val() == "图片") {
            data.field.XDLM步骤背景文件 = $("#picture").attr("datasrc");
        } else if ($("#数据类型").val() == "视频") {
            data.field.XDLM步骤背景文件 = $("#bgVideo").find("source").attr("datasrc");
            console.log($("#bgVideo").find("source").attr("datasrc"))
        }
        console.log(data.field)
        data.field.XDLM关联编号 = glbh;
        mAddNewData(data.field)
        return false
    })
});

function autoTextAreaHeight(o) {
    o.style.height = o.scrollTop + o.scrollHeight + "px";
}

function SetUIValue(rowid) {
    PostData({
        XDLMCID: 1001,
        XDLMSID: "DYBH20190530171857185769142",
        XDLMA: rowid,
    }, function(data) {
        if (data.success) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }
            if (data.rows[0]['步骤状态'] == "启用") {
                $("#步骤状态").prop("checked", true)
            } else {
                $("#步骤状态").prop("checked", false)
            }
            if (data.rows[0]['步骤背景文件']) {
                if ($("#数据类型").val() == "图片") {
                    $("#bgVideo").addClass("layui-hide");
                    $("#picture").removeClass("layui-hide");
                    $("#picture").attr("src", httpurl + data.rows[0]['步骤背景文件'].replace("ss.", "."))
                    $("#picture").attr("datasrc", data.rows[0]['步骤背景文件'])
                } else if ($("#数据类型").val() == "视频") {
                    $("#bgVideo").removeClass("layui-hide");
                    $("#picture").addClass("layui-hide");
                    if (player1) {
                        player1.src(httpurl + res.filepath);
                        //重新加载播放器
                        player1.load();
                    } else {
                        $("#bgVideo").find("source").attr("src", httpurl + data.rows[0]['步骤背景文件'])
                        $("#bgVideo").find("source").attr("datasrc", data.rows[0]['步骤背景文件'])

                        initVideo()
                    }

                }

            }

        }
        form.render()
    })
}

function mAddNewData(where) {
    var tip;
    if (rowid) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH20190530171857185740145";
        where.XDLMID = rowid;
        tip = "确定要修改流程步骤吗？"
    } else {
        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH201905301718571857241143";
        tip = "确定要添加流程步骤吗？"
    }
    submitDataTip(tip, function() {
        PostData(where, function(data) {
            tipMsg(data, function() {
                    layer.close(editLayer)
                })
                //			parent.lcList(glbh)
            parent.location.reload()
            QXALL()

        })
    })
}

function uploadFile() {
    var loading;
    layui.use('upload', function() {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#uploadFile', //绑定元素				
            url: httpurl + 'xddata/xdFileAllSysUpload.ashx?XKLX=SCDXXNJX', //上传接口		
            accept: 'file',
         
            before: function(obj) {
                var files = obj.pushFile();
                loading = layer.msg("正在上传...", {
                        time: 3000
                    })
                    //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function(index, file, result) {
                    console.log(index); //得到文件索引
                    console.log(file); //得到文件对象
                    if ($("#数据类型").val() == "图片") {
                        if (file.type.indexOf("image") == -1) {
                            layer.msg("请选择图片类型文件")
                            return false
                        }
                    } else if ($("#数据类型").val() == "视频") {
                        if (file.type.indexOf("video") == -1) {
                            layer.msg("请选择视频类型文件")
                            return false
                        }

                    }

                });
            },
            done: function(res) {
                //上传完毕回调
                if ($("#数据类型").val() == "图片") {
                    $("#picture").attr("src", httpurl + res.filepath)
                    $("#picture").attr("datasrc", res.filepath)
                } else if ($("#数据类型").val() == "视频") {
                    if (player1) {
                        player1.src(httpurl + res.filepath);
                        //重新加载播放器
                        player1.load();
                    } else {
                        $("#bgVideo").find("source").attr("src", httpurl + res.filepath)

                        initVideo()
                    }
                    $("#bgVideo").find("source").attr("datasrc", res.filepath)

                }
                layer.close(loading)

            },
            error: function() {
                //请求异常回调
            }
        });
    });
}

function initVideo() {
    var options = {
        "controls": true,
        "autoplay": false,
        "preload": "auto",
        "loop": false,
        controlBar: false
    }
    player1 = videojs('bgVideo', options, function onPlayerReady() {
        videojs.log('播放器1已经准备好了!');
        // How about an event listener?<br>  // 如何使用事件监听？
        this.on('ended', function() {
            videojs.log('播放结束了!');
            //			this.dispose()
            //			$(".video1").addClass("hide")
            //			$(".video2").removeClass("hide")
            //			player2.play()
            //			this.dispose()
        });
    });
}