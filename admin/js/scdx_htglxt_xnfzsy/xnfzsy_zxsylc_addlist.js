var $, admin, element, layer, laydate, form, table, ue, laytpl;
var database, where = {};
var type = window.location.href.getQuery("type"); //1新闻 2公告
var rowid = window.location.href.getQuery("rowId");
var editLayer, videoPlayObj = {}
var basePathImg = "/scdx/admin/Widget"; //c文件夹的根目录路径
layui.use(["jquery", "form", "element", "layer", "laydate", "table", "laytpl"], function() {
	$ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table, laytpl = layui.laytpl;

	if(rowid) {
		SetUIValue(rowid)

	}
	$("#addLC").click(function() {
		addLChtml()
		return false
	})

});

function autoTextAreaHeight(o) {
	o.style.height = o.scrollTop + o.scrollHeight + "px";
}

function SetUIValue(rowid) {
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH20190530171857185742132",
		XDLMA: rowid,
		orderby: "id"
	}, function(data) {
		if(data.success && data.rows.length > 0) {
			for(var k in data.rows[0]) {
				console.log(k)
				if($("#" + k).prop("tagName")) {
					if($("#" + k).prop("tagName") == "INPUT" || $("#XDLM" + k).prop("tagName") == "SELECT") {
						$("#" + k).val(data.rows[0][k])
						console.log($("#" + k))
					} else {
						console.log($("#" + k))
						$("#" + k).html(data.rows[0][k])
					}
				}
			}
			lcList(data.rows[0]['库内编号'])
			getLCtype(data.rows[0]['库内编号'])
		}

	})
}

function lcList(bh) {
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH201905301718571857250141",
		XDLMA: bh,
		oderby: "本步序号 "

	}, function(data) {
		var html = ""
		$("#answerContent").empty()
		if(videoPlayObj.isEmptyObject) { //销毁之前的视频插件
			for(var k in videoPlayObj) {
				videoPlayObj[k].dispose()
			}
		}
		if(data.success && data.rows.length > 0) {
			var getTpl = listContent.innerHTML,
				view = document.getElementById('answerContent');
			laytpl(getTpl).render(data.rows, function(html) {
				view.innerHTML = html;
				$.each($(".describe"), function(key, val) { //textarea高度自适应
					autoTextAreaHeight(val)
				})

				//判断头部的高度

				$("#container").css({
					"padding-top": $("#progressListContent").height() * 1 + 5
				})

				initVideo()
			});

		}

	})
}

function addLChtml(id) {
	console.log($("#关联编号").val())
	if(id) {
		openWindow("2", "./xnfzsy_zxsylc_addlc.html?rowId=" + id + "&knbh=" + $("#库内编号").val(), "修改流程")
	} else {
		openWindow("2", "./xnfzsy_zxsylc_addlc.html?" + "&knbh=" + $("#库内编号").val(), "添加流程")
	}
}

function deleteData(id) {
	delData(id, "DYBH201905301718571857182144", function() {
		lcList($("#库内编号").val())
	})
}
var options = {
	"controls": true,
	"autoplay": false,
	"preload": "auto",
	"loop": false,
	controlBar: false
}

function initVideo() {

	$.each($(".video-js"), function(key, val) {
		var videoId = $(val).attr("id")
		videoPlayObj[videoId] = videojs(videoId, options, function onPlayerReady() {

			this.on('ended', function() {
				videojs.log('播放结束了!');

			});
		});
	})

}

function getLCtype(bh) {
	PostData({
		XDLMCID: "1001",
		XDLMSID: "DYBH2019061218293903598882",
		XDLMA: bh,
		oderby: "本步序号 "

	}, function(data) {
		var html = ""
		if(data.success && data.rows.length > 0) {
			for(var i = 0; i < data.rows.length; i++) {
				html += '<li><p onclick=skipCurrentStep("' + data.rows[i].步骤分类 + '")>' + data.rows[i].步骤分类 + '</p></li>'
			}
		}
		$("#progressList").html(html)
	})
}

function skipCurrentStep(data) {
	$('html,body').scrollTop($("#" + data).offset().top - 110);
}
var processTypeArray = []
function idDisplay(data) {
	var flag = false;
	if(processTypeArray.indexOf(data) == -1) {
		processTypeArray.push(data)
		flag = true;
	}
	return flag;
}
function lookPicx(imgSrc, imgSrcIndex) {
//  imgSrc = fileend
//  console.log(imgSrc);
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