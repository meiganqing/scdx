import {
    post,
    get,
 
} from '../http'


//虚拟教学
export const iprocess = ({
    XAction,
    XKLX,
    XDLMCID,

    XDLMSID,
    XDLMA
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        XDLMSID,
        XDLMA
    }
    return post('iprocess', data);
}


// 线上实验介绍
export const online = ({
    XAction,
    XKLX,
    XDLMCID,
    page,
    rows,
    XDLMSID,
    XDLMA
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA
    }
    return post('online', data);
}

// 线下实验介绍
export const introduced = ({
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA
    }) => {
        let data = {
            XAction,
            XKLX,
            XDLMCID,
            page,
            rows,
            XDLMSID,
            XDLMA
        }
        return post('introduced', data);
    }
    // 师资队伍
export const team = ({
    XAction,
    XKLX,
    XDLMCID,
    page,
    rows,
    XDLMSID,

}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,

    }
    return post('team', data);
}


//实验公告
export const getindex = ({
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA
    }) => {
        let data = {
            XAction,
            XKLX,
            XDLMCID,
            page,
            rows,
            XDLMSID,
            XDLMA
        }
        return post('getindex', data);
    }
    //实验制度
export const system = ({
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA
    }) => {
        let data = {
            XAction,
            XKLX,
            XDLMCID,
            page,
            rows,
            XDLMSID,
            XDLMA
        }
        return post('system', data);
    }
    //新闻焦距
export const getnew = ({
    XAction,
    XKLX,
    XDLMCID,
    page,
    rows,
    XDLMSID,
    XDLMA
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA
    }
    return post('getnew', data);
}

//教学资料
export const teaching = ({
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA,
        QueryType,
        QueryKey
    }) => {
        let data = {
            XAction,
            XKLX,
            XDLMCID,
            page,
            rows,
            XDLMSID,
            QueryType,
            QueryKey,
            XDLMA
        }
        return post('teaching', data);
    }
    //图纸下载
export const drawing = ({
        XAction,
        XKLX,
        XDLMCID,
        page,
        rows,
        XDLMSID,
        XDLMA,
        QueryType,
        QueryKey
    }) => {
        let data = {
            XAction,
            XKLX,
            XDLMCID,
            page,
            rows,
            XDLMSID,
            XDLMA,
            QueryType,
            QueryKey
        }
        return post('drawing', data);
    }
    //登陆注册

export const login = ({
    XAction,
    XKLX,
    XDLMCID,
    XDLMSID,
    XDLMTID,
    XDLMPassword,
    XDLMUserName,
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        XDLMSID,
        XDLMTID,
        XDLMPassword,
        XDLMUserName,
    }
    return post('login', data);
}

//互问互答

export const hwhd = ({
    XAction,
    XKLX,
    XDLMCID,
    XDLMSID,
    XDLMTID,
    page,
    rows
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        XDLMSID,
        XDLMTID,
        page,
        rows
    }
    return post('hwhd', data);
}
//友情链接

export const postDataYQLJ = ({
    XAction,
    XKLX,
    XDLMCID,
    XDLMSID,
    XDLMTID,
    page,
    rows
}) => {
    let data = {
        XAction,
        XKLX,
        XDLMCID,
        XDLMSID,
        XDLMTID,
        page,
        rows
    }
    return post('postDataYQLJ', data);
}
//公用ajax请求
//console.log("请求数据")
//console.log(postCommon("/xdDataManage.ashx",{XAction:"GetDataInterface",
//XKLX:"SCDXXNJX",
//page: 1,
//rows: 20,
//XDLMSID: "DYBH20190529131215121519001",
//XDLMA: "课程平台",
//XDLMCID:"1001"}))



