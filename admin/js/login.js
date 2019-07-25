var url = "/api/lib/user"
var $, form, imgIp = location.origin;
var database, where = {};
$(function() {
    layui.use(["jquery", "form"], function() {
        $ = layui.jquery, form = layui.form;
        form.on('submit(LAY-user-login-submit)', function(data) {
            data.field.XDLMUserName = $("#UserName").val();
            data.field.XDLMPassword = $("#Password").val();
            userLogin(data.field);

        })
        form.on('checkbox(rmbUser)', function(data) {
            if (data.elem.checked) {
                var loginCode = getCookieName_("mUserName"); //获取cookie中的用户名             
                var pwd = getCookieName_("mUserPassword"); //获取cookie中的登陆密码 
                $("#UserName").val(loginCode);  
                $("#Password").val(pwd); 
            } else {
                $("#UserName").val(""); 
                $("#Password").val(""); 
            }
         
        });
    })
})

function userLogin(where) {
    console.log(where);
    where.XDLMCID = "7000";
    where.XDLMSID = "DYBH201905300944050905412";
    where.XDLMTID = "7001";
    //判断是否要记住密码,选中状态为选中密码
    console.log($("#rmbUser").prop("checked"))
    if ($("#rmbUser").prop("checked") == true) {
        setCookiee("mUserPassword", pwd, "d7") 
    } else {
        //		delCookie("mUserPassword")
    }
    PostDataLogin(where, function(data) {
        if (data.message = "登录成功") {
            setCookie()
            setCookiee("mUserId", data.data[0].id, "d7")  
            localStorage.setItem("mSytoken", data.sytoken)

            layer.msg(data.message);
            window.location.href = "./index.html";
        } else {
            layer.msg(data.message)
        }
    })
}

//设置cookie  
function setCookie() {  

    var loginCode = $("#UserName").val(); //获取用户名信息
    var pwd = $("#Password").val(); //获取登陆密码信息    
    setCookiee("mUserName", loginCode, "d7")   
    setCookiee("mUserPassword", pwd, "d7")          
}                           
function getCookieName_(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {

        return decodeURIComponent(arr[2]);
    }

} 
//存入缓存

function PostDataLogin(requestData, callback, action, baseUrl) {
    var rv = '';
    try {
        $.ajax({
            async: true,
            cache: false,
            type: "post",
            url: ipUrl,
            data: requestData, // $('#mkufang').val() 
            dataType: 'json',
            headers: {
                "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ4ZCIsImF1ZCI6Im9jdG9iZXIiLCJzdWIiOiJ0eWtnIiwianRpIjoieGQifQ.hBTpg2lDbRawh_BVUOfi8aXbA3wxVMsFbB800N7TFQs"
            },
            success: function(returnData) {

                if (returnData.success || returnData.msg) {

                    if (callback) {
                        callback(returnData, this)
                    }
                    rv = returnData
                } else {
                    rv = returnData.message;
                    if (rv == "NOTLOGIN") {

                        var isQcode = window.location.href.getQuery("ewm"); //是否手机打开的

                        if (isQcode) {

                            window.location.href = window.location.origin + basePath + "/login-app.html?nextUrl=" + escape(window.location.href)
                        } else {
                            parent.location.href = baseUrl + "/login.html"
                        }
                    } else {
                        layer.msg(rv)
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                rv = XMLHttpRequest.responseText;
                layer.msg(rv)

            }
        });
    } catch (e) {

        rv = e.message;
    }
}