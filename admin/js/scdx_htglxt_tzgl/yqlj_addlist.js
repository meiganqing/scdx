var basePathImg = "/scdx/admin/Widget"; //c文件夹的根目录路径
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
    //判断修改还是添加
    if (rowid) {
        SetUIValue(rowid)
        $("#submit").html("修改")
    } 

    form.on("submit(submit)", function(data) {
       
        data.field.XDLM首页图片地址 = filedpath;
      
      
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
            fileend = data.rows[0]['首页图片地址'];
            $("#HomepageImg").attr("src", data.rows[0]['首页图片地址'].replace("ss.", "."))


        }
    })
}

function mAddNewData(where) {
    where.XDLM分类 = configData["type" + type].title
        // where.XDLM首页图片地址 = ""
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


function uploadFile() {
    // var loading;
    layui.use('upload', function() {
        var upload = layui.upload;
        //执行实例
        var uploadInst = upload.render({
            elem: '#uploadFile', //绑定元素				
            url: '/xddata/xdFileAllSysUpload.ashx?XKLX=SCDXXNJX', //上传接口		
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
                fileend = ipUrl_ + res.filepath;
                console.log(res.filepath);
                $("#HomepageImg").attr("src",  res.filepath.replace("ss.", "."))
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
        // var url = basePathImg + "/video/ShowVideo.html?path=" + mpath;
        url = basePathImg + '/imgTools/ShowImage.html?path=' + mpath.replace("ss.", ".");
        console.log(url)
        yl = true;
    }

    if (yl) {
        if (clobtn) {
            clobtn = 1;
        } else {
            clobtn = clobtn;
        }
        var index = parent.layer.open({
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