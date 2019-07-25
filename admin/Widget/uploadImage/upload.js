var basePathImg = "/scdx/SY_scdx_htglxt/Widget"; //c文件夹的根目录路径
if (window.location.hostname == "localhost") {
    basePathImg = "/scdx/SY_scdx_htglxt/Widget";
} else {
    basePathImg = "/scdx/SY_scdx_htglxt/Widget";
}

function UploadFilex(obj) {

    this.oldName = obj.oldName; //图片的原始名称key：dog.jpg
    this.newName = obj.newName; //后台返回的图片路径的key
    //	this.url = obj.url; //上传图片请求的地址

    this.url = "/xddata/xdFileAllSysUpload.ashx?XKLX=SCDXXNJX"
    this.chooseBtn = obj.chooseBtn; //选择按钮的id
    this.tableId = obj.tableId; //显示图片列表的table的id

    //回显图片要用到的
    this.echoImgUrl = obj.echoImgUrl;

    obj.echooldName !== undefined ? this.echooldName = obj.echooldName : this.echooldName = this.oldName; //回显图片的原始名称
    obj.echonewName !== undefined ? this.echonewName = obj.echonewName : this.echonewName = this.newName; //回显图片的新名称

    //返回数据的属性名:默认为data
    obj.returnDataKey !== undefined ? this.returnDataKey = obj.returnDataKey : this.returnDataKey = "data";

}

UploadFilex.prototype = {

    uploadFile: function(data) { //上传附件	
        var that = this
        var indexload = ""
        layui.use(["form", "upload", "element"], function() {
            var upload = layui.upload,
                element = layui.element;
            fileend = {}

            uploadListIns = upload.render({
                elem: $("#" + that.chooseBtn),
                url: that.url,
                accept: 'file',
                multiple: true,
                auto: true,
                method: "POST",
                choose: function(obj) {
                    var files = obj.pushFile();
                },
                before: function(obj) {

                    obj.preview(function(index, file, result) { //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                        var res = file.name
                            // console.log(res);
                        console.log(index);
                        var h = res.substring(res.lastIndexOf('.') + 1);
                        // console.log(h);
                        // console.log(h.toLowerCase());

                        switch (h.toLowerCase()) {
                            case "doc":
                            case "docx":
                            case "txt":
                            case "zip":
                            case "rar":
                            case "xls":
                            case "xlsx":
                            case "pdf":
                                var tr = $(['<tr type="new" id="upload-' + index + '" oldName="' + res.name + '" newName="">',
                                    '<td  onclick=lookPicx("' + index + '","' + index + '") id="uploadImg' + index + '">' + res + '</td>',
                                    '</tr>'
                                ].join(''));
                                $(that.tableId).append(tr);
                                break;
                            case "png":
                            case "jpg":
                            case "bmp":
                            case "gif":
                            case "jpeg":
                            case "tiff":
                            case "psd":
                            case "svg":
                                var tr = $(['<tr type="new" id="upload-' + index + '" oldName="' + res.name + '" newName="">',
                                    '<td><div class="imgDiv" style="cursor: pointer;">',
                                    '<div class="layadmin-homepage-pad-ver" >',
                                    '<img onclick=lookPicx("' + index + '","' + index + '") id="uploadImg' + index + '"  class="layadmin-homepage-pad-img" src="" width="113" height="113">',
                                    '</div>',
                                    '</div></td>',
                                    '</tr>'
                                ].join(''));
                                $(that.tableId).append(tr);
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
                                var tr = $(['<tr type="new" id="upload-' + index + '" oldName="' + res.name + '" newName="">',
                                    '<td  onclick=lookPicx("' + index + '","' + index + '") id="uploadImg' + index + '">' + res + '</td>',
                                    '</tr>'
                                ].join(''));
                                $(that.tableId).append(tr);
                                break;
                            default:
                                var tr = $(['<tr type="new" id="upload-' + index + '" oldName="' + res.name + '" newName="">',
                                    '<td  onclick=lookPicx("' + index + '","' + index + '") id="uploadImg' + index + '">' + res + '</td>',
                                    '</tr>'
                                ].join(''));
                                $(that.tableId).append(tr);


                        }

                    });
                },
                done: function(res, index, upload) {

                    fileend[index] = res[that.newName]
                    $("#upload-" + index).attr("newName", res[that.newName]);
                    $("#uploadImg" + index).attr("src",  res[that.newName])
                    console.log(res[that.newName]);
                    layer.closeAll('loading'); //关闭loading
                    return;
                    this.error(index, upload);
                },
                error: function(index, upload) {
                    layer.closeAll('loading'); //关闭loading
                    layer.msg("上传失败")
                        //					var tr = $(demoListView).find('tr#upload-' + index),
                        //						tds = tr.children();
                        //					tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');

                }
            });
        })

    },



    addFileData: function(type) { //tr的ID，附件加到数据库里
        console.log(type)
        var that = this;
        var pictureUrl = ""; //调用该函数会返回图片的地址，多个图片用|隔开
        var type_ = ""
        if (type) {
            type_ = "," + type
        }
        if ($(that.tableId).find("tr").length > 0) {
            $.each($(that.tableId).find("tr"), function(key, val) {
                if ($(that.tableId).find("tr").length - 1 == key) { //最后一个不加|
                    pictureUrl += $(val).attr("newName") + "," + $(val).attr("oldName") + type_
                } else {
                    pictureUrl += $(val).attr("newName") + "," + $(val).attr("oldName") + type_ + "|"
                }
            })
        }
        console.log(type_)
        console.log(pictureUrl)
        return pictureUrl
    },


    // echoDataFile: function(objData, type, type2) { //回显附加信息
    //     var that = this
    //     that.postData(objData, function(data) {
    //         var html = ""
    //         for (var i = 0; i < data[that.returnDataKey].length; i++) {

    //             html += `
    // 		<tr id="upload-old${i}" oldName="${data[that.returnDataKey][i][that.echooldName]}" newName="${data[that.returnDataKey][i][that.echonewName]}">

    // 			<td>
    // 			<div style="cursor: pointer;">
    // 				<div class="layadmin-homepage-pad-ver imgDiv" >
    // 					<img onclick="lookPicx('${data[that.returnDataKey][i][that.echonewName]}')" type="${type}" class="layadmin-homepage-pad-img" src="${data[that.returnDataKey][i][that.echonewName].replace('ss.','.')}" width="66" height="66">
    // 				</div>
    // 			</div>
    // 			</td>
    // 			<td>${data[that.returnDataKey][i][that.echooldName]}</td>


    // 		 	<td>
    // 		 		<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>
    // 				<span class="layui-btn layui-btn-xs layui-btn-danger " id="delete${i}" onclick="deleteFilex('${data[that.returnDataKey][i][that.echonewName]}','old${i}','edit','${data[that.returnDataKey][i].id}')">删除</span>
    // 				<span class="layui-btn layui-btn-xs layui-btn-warm demo-look"  onclick="lookPicx('${data[that.returnDataKey][i][that.echonewName]}')" >预览</span>
    //             /td>
    //         </tr>`
    //         }

    //         $(that.tableId).append(html)
    //     })
    // },
    postData: function(mActionData, callback) {
        var rv;
        var that = this;
        try {
            $.ajax({
                async: false,
                cache: false,
                type: "post",
                url: that.echoImgUrl,
                data: mActionData,
                dataType: 'json',
                success: function(returnValue) {
                    callback(returnValue)
                    if (returnValue.msg || returnValue.success) {
                        rv = returnValue
                    } else {
                        rv = returnValue.message;
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    rv = XMLHttpRequest.responseText;
                }
            });
        } catch (e) {
            rv = e.message;
        }
        return rv;
    }
}


function lookPicx(imgSrc, imgSrcIndex) {
    imgSrc = fileend[imgSrcIndex]
    ShowVideox(false, imgSrc, '90%', '90%', 1, "02");
}

function ShowVideox(mtitle, mpath, w, h, clobtn, system) {
    if (mpath == '') {
        layer.msg('未找到文件');
    } else {
        console.log(mpath);
        var yl = false;
        var index = mpath.lastIndexOf("\.");
        var r = mpath.substring(index + 1, mpath.length);
        // console.log(r);
        // console.log(r.toLowerCase());
        var url = basePathImg + "/video/ShowVideo.html?path=" + mpath;
        switch (r.toLowerCase()) {
            case "doc":
            case "docx":
            case "txt":
            case "zip":
            case "rar":
            case "xls":
            case "xlsx":
                break;
            case "pdf":
                url = basePathImg + '/pdfViewer/pdfView.html?path=' + mpath;
                yl = true;
                break;
            case "png":
            case "jpg":
            case "bmp":
            case "gif":
            case "jpeg":
            case "tiff":
            case "psd":
            case "svg":

                url = basePathImg + '/imgTools/ShowImage.html?path=' + mpath;
                // console.log(url)
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
                title: mtitle,
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