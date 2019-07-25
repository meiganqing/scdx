var basePathImg = "/scdx/admin/Widget"; //c文件夹的根目录路径
if (window.location.hostname == "localhost") {
    basePathImg = "/scdx/admin/Widget";
} else {
    basePathImg = "/scdx/admin/Widget";
}
var $, admin, element, layer, laydate, form, table, uploadImg;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
var ipUrl_ = "/";
var fileend = {};
var filedpath = {};
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
    uploadFile()
    laydate.render({
        elem: '#添加时间',
        type: 'datetime', //默认，可不填 
        format: 'yyyy/MM/dd HH:mm:ss',
        value: new Date()
    });

    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#submit").html("修改")
    } else {

    }

    form.on("submit(submit)", function(data) {
        data.field.XDLM文件地址 = filedpath;
        delete data.field.editorValue;
        console.log(data.field)
        mAddNewData(data.field)
        return false
    })

});

function SetUIValue(rowid) {
    PostData({
        XDLMCID: "1001",
        XDLMSID: "DYBH20190529131215121512012",
        XDLMA: rowid
    }, function(data, res, index) {
        if (data.success && data.rows.length > 0) {
            for (var k in data.rows[0]) {
                $("#" + k).val(data.rows[0][k])
            }
            fileend = data.rows[0]['文件地址'];
            console.log(data.rows[0]['文件地址'].replace("ss.", "."))
            console.log(fileend);
            var fh = fileend.substring(fileend.lastIndexOf('.') + 1);
            // console.log(h);
            switch (fh.toLowerCase()) {
                case "doc":
                case "docx":
                case "txt":
                case "zip":
                case "rar":
                case "xls":
                case "xlsx":
                case "pdf":
                    $("#fileImg").attr("src", '../../images/wordimg.jpg');
                    break;
                case "png":
                case "jpg":
                case "bmp":
                case "gif":
                case "jpeg":
                case "tiff":
                case "psd":
                case "svg":
                    $("#fileImg").attr("src", data.rows[0]['文件地址'].replace("ss.", "."));
                    break;
                case "3gp":
                case "asf":
                case "avi":
                case "flv":
                case "mkv":
                case "mov":
                case "mp4":
                case "mpeg":
                case "n avi":
                case "rmvb":
                case "wmv":
                case "swf":
                case "mp5":
                    $("#fileImg").attr("src", '../../images/MP4img.jpg');
                    break;
                default:
                    $("#fileImg").attr("src", '');
            }
            console.log(data.rows[0]['文件地址']);
            // $("#uploadElse").attr("value", data.rows[0]['XDLM文件地址']);
        }
    })
}

function mAddNewData(where) {
    where.XDLM资料类型 = configData["type" + type].title
    where.XDLMA
        //判断添加还是修改
    var tipMsg;
    if (rowid != null) {
        where.XDLMCID = "6000";
        where.XDLMSID = "DYBH2019052913121512158915";
        where.XDLMID = rowid
        tipMsg = "确定要修改吗？"
    } else {

        where.XDLMCID = "5000";
        where.XDLMSID = "DYBH20190529131215121522613";
        tipMsg = "确定要添加吗？"
    }
    submitDataTip(tipMsg, function() {
        PostData(where, function(data) {
            if (data.success) {
                // console.log(data);
                QXALL()
            }
        })
    })
}

// //上传图片
var oldname = "";

function uploadFile() {
    // var loading;
    layui.use('upload', function() {
        var upload = layui.upload;

        //执行实例
        var uploadInst = upload.render({
            elem: '#changefileFJ', //绑定元素				
            url: ipUrl_ + 'xddata/xdFileAllSysUpload.ashx?XKLX=SCDXXNJX', //上传接口		
            accept: 'file',
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
                fileend =  res.filepath;
                console.log(res);
                oldname = res.filename;
                filedpath = res.filepath;
                console.log(oldname);
                $("#资料名称").val(oldname)
                var h = res.filepath.substring(res.filepath.lastIndexOf('.') + 1);
                // console.log(h);
                switch (h.toLowerCase()) {
                    case "doc":
                    case "docx":
                    case "txt":
                    case "zip":
                    case "rar":
                    case "xls":
                    case "xlsx":
                    case "pdf":
                        $("#fileImg").attr("src", '../../images/wordimg.jpg');
                        break;
                    case "png":
                    case "jpg":
                    case "bmp":
                    case "gif":
                    case "jpeg":
                    case "tiff":
                    case "psd":
                    case "svg":
                        $("#fileImg").attr("src", res.filepath.replace("ss.", "."));
                        break;
                    case "3gp":
                    case "asf":
                    case "avi":
                    case "flv":
                    case "mkv":
                    case "mov":
                    case "mp4":
                    case "mpeg":
                    case "n avi":
                    case "rmvb":
                    case "wmv":
                    case "swf":
                    case "mp5":
                        $("#fileImg").attr("src", '../../images/MP4img.jpg');
                        break;
                    default:
                        $("#fileImg").attr("src", '');
                }

                // layer.close(loading)
            },
            error: function() {
                //请求异常回调
            }
        });
    });
}

function lookPicx(imgSrc, imgSrcIndex) {
    imgSrc = fileend
    console.log(imgSrc);
    ShowVideox(false, imgSrc, '90%', '90%', 1, "02");
}

function ShowVideox(mtitle, mpath, w, h, clobtn, system) {
    if (mpath == '') {
        layer.msg('未找到文件');
    } else {
        console.log(mpath);
        var yl = false;
        var r = mpath.substring(mpath.lastIndexOf('.') + 1);
        console.log(r);

        console.log(r.toLowerCase());
        // var url = basePathImg + "/video/ShowVideo.html?path=" + mpath;

        switch (r.toLowerCase()) {
            case "doc":
            case "docx":
            case "txt":
            case "zip":
            case "rar":
            case "xls":
            case "xlsx":
                var mpaths = mpath.substring(0, mpath.lastIndexOf(".") + 1)
                console.log(mpaths);
                url = basePathImg + '/pdfViewer/pdfView.html?path=' + mpaths + 'pdf';
                yl = true;
                break;
            case "pdf":
                url = basePathImg + '/pdfViewer/pdfView.html?path=' + mpath;
                yl = true;
                console.log(url);
                break;
            case "png":
            case "jpg":
            case "bmp":
            case "gif":
            case "jpeg":
            case "tiff":
            case "psd":
            case "svg":
                url = basePathImg + '/imgTools/ShowImage.html?path=' + mpath.replace("ss.", ".");
                console.log(url)
                yl = true;
                break;
            case "3gp":
            case "asf":
            case "avi":
            case "flv":
            case "mkv":
            case "mov":
            case "mp4":
            case "mpeg":
            case "n avi":
            case "rmvb":
            case "wmv":
            case "swf":
            case "mp5":
                url = basePathImg + "/video/ShowVideo.html?path=" + mpath;
                yl = true;
                console.log(url);
                break;
            default:
                yl = false;

        }

        if (yl) {
            if (clobtn) {
                clobtn = 1;
            } else {
                clobtn = clobtn;
            }
            var index = layer.open({
                type: 2,
                //      maxmin: true,
                content: url,
                area: [w, h],
                title: "查看",
                closeBtn: clobtn,
                shadeClose: true
            });
        } else {
            layer.msg('当前格式暂不支持预览', {
                icon: 2,
                time: 2000,
                anim: 5
            });
        }

    }

}