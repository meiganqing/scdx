var $, element, layer, laydate, form, limit = 20,
    table, tableins, where, type, qx;
layui.use(["jquery", "form", "element", "layer", "laydate", "table"], function() {
    $ = layui.jquery, element = layui.element, layer = layui.layer, laydate = layui.laydate, form = layui.form, table = layui.table;
    var rowid = window.location.href.getQuery("rowid")
    where = {
        XDLMSID: "DYBH20190529131215121510011"
    }
    type = window.location.href.getQuery("type");
    //获取权限
    qx = GetUserLimitNew("在线实验流程")
        // 获取查询下拉选项
    PostData({
        XDLMCID: "1001",
        XDLMSID: "DYBH201905291343300374745",

    }, function(data) {
        console.log(data);
        if (data.success && data.rows.length > 0) {
            getSelect("cxlb", data.rows, "查询显示名")
            console.log(data.rows);
            form.render("select")
        }
    })
    where.QueryType = "资料类型";
    where.QueryKey = configData["type" + type].title;
    getTable("tableList", where, cols)
        //头工具栏事件
    table.on('toolbar(tableList)', function(obj) {
        var checkStatus = table.checkStatus(obj.config.id);
        switch (obj.event) {
            case 'add':
                if (!qxValue(qx, 2)) {
                    return false
                }
                openWindow("2", "./zlgl_addlist.html?type=" + type, "添加", 1200, 800)
                break;
            case 'allDel':
                if (!qxValue(qx, 3)) {
                    return false
                }
                delDataVolume("DYBH20190529131215121520514", function(data) {

                    tableins.reload()

                })
                break;

        };
    });

    //监听行工具事件
    table.on('tool(tableList)', function(obj) {
        var data = obj.data;
        switch (obj.event) {
            case 'edit':
                if (!qxValue(qx, 2)) {
                    return false
                }
                openWindow("2", "./zlgl_addlist.html?rowId=" + data.id + "&type=" + type, "修改", 1200, 800)
                break;
            case 'del':
                if (!qxValue(qx, 3)) {
                    return false
                }
                delData(data.id, "DYBH20190529131215121520514", function(data) {

                    tableins.reload()

                })
                break;
            case 'previewBtu':
                lookPicx();
                break;

        };
    });

    //查询
    $("#searchData").click(function() {

        searchTableData(where, tableins)
    })

});

function showEditBtn() {
    var flag = type
    return flag
}
var cols = [
        [ //表头
            {
                checkbox: true,
                LAY_CHECKED: false
            }, {
                type: 'numbers',
                title: "序号"
            },
            {
                field: '资料名称',
                title: '资料名称',
                width: "50%",
                templet: '#titleTpl',
                align: "center"
            }, {
                field: '添加时间',
                title: '添加时间',
                width: "30%",
                align: "center",
                templet: '#addData'
            }, {
                field: '',
                title: '操作',
                width: "14.5%",
                align: "center",
                templet: '#opeTpl'
            }
        ]
    ]
    // window.addEventListener('message', function(e) {
    //     //let target = e.target;
    //     let data = e.data;
    //     console.log(data);
    //     if (true) {
    //         //****
    //     }
    // }, false);