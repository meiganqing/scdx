(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c30c3b2","chunk-7328af36"],{"22c8":function(t,e,a){},"36ce":function(t,e,a){"use strict";var s=a("3e71");e["a"]=s["default"]},"3e71":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thecolumn"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/TheColumnTwo"}}},[t._v("当前位置：中心首页")]),a("el-breadcrumb-item",[t._v("中心介绍")]),a("el-breadcrumb-item",[t._v("教师平台")])],1),a("div",{staticClass:"tlist"},[a("ul",{staticClass:"textul"},t._l(t.columdata,function(e,s){return a("router-link",{key:s,staticClass:"divr",attrs:{tag:"div",to:"/TheColumnTwo"}},[t._v(" "+t._s(e.标题)+"\n        "),a("span",[t._v(t._s(e.日期))])])}),1)])],1)},n=[],i={name:"TheColumn",data:function(){return{XAction:"GetDataInterface",XKLX:"SCDXXNJX",XDLMCID:"1001",page:1,rows:20,XDLMSID:"DYBH20190529131215121519001",columdata:[]}},mounted:function(){this.ajaxfirst()},methods:{ajaxfirst:function(){var t=this;alert(t.$route.query.teachname),this.PostData({XAction:t.XAction,XKLX:t.XKLX,XDLMCID:t.XDLMCID,page:t.page,rows:t.rows,XDLMSID:"DYBH20190529131215121519001",XDLMA:t.$route.query.teachname},function(e){t.columdata=e.rows})}}},c=i,l=(a("daf6"),a("2877")),r=Object(l["a"])(c,s,n,!1,null,"38af9495",null);e["default"]=r.exports},5359:function(t,e,a){},"6b8f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"teach"},[a("el-aside",{staticStyle:{height:"1000px"}},[a("el-col",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"text-color":"#ffffff","background-color":"#A38638","active-text-color":"#ffffff",router:"","default-openeds":this.zhankai},on:{open:t.handleOpen,close:t.handleClose}},[a("el-submenu",{staticClass:"teach_elsum",attrs:{index:"1"}},[a("template",{attrs:{id:"teach_elsum_title"},slot:"title"},[a("span",{attrs:{id:"teach_elsum_title"}},[t._v("中心简介")])]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("建设概况","中心简介")}}},[t._v("建设概况")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.laoshi("中心简介")}}},[t._v("师资队伍")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("教学平台","中心简介")}}},[t._v("教学平台")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("新闻聚焦","中心简介")}}},[t._v("新闻聚焦")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("中心概况","中心简介")}}},[t._v("中心概况")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("规章制度","中心简介")}}},[t._v("规章制度")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("通知公告","中心简介")}}},[t._v("通知公告")])],2),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/tester"}},[a("span"),t._v("实验制度\n          ")]),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/process"}},[a("span"),t._v("虚拟仿真实验\n          ")]),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/data"}},[a("span"),t._v("资料下载\n          ")]),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/theask"}},[a("span"),t._v("互问互答\n          ")]),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/TheContact"}},[a("span"),t._v("联系我们\n          ")])],1)],1)],1),a("el-main",{staticClass:"TheColumn",staticStyle:{padding:"0"}},[a("div",{staticClass:"thecolumn"},[a("el-breadcrumb",{staticStyle:{background:"#ECECEC","line-height":"40px",padding:"0 20px"},attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("当前位置：首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/teach"}}},[t._v("中心简介")]),a("el-breadcrumb-item",{attrs:{to:{path:"/teacher"}}},[t._v("师资队伍")]),a("el-breadcrumb-item",[a("div",{staticClass:"endcolor",staticStyle:{color:"#A48638"}},[t._v("详情")])])],1),a("div",{staticClass:"tlist"},[a("div",{staticClass:"hhh"},[t._v(t._s(t.columdata.姓名)+t._s(t.columdata.职称))]),a("div",{staticClass:"list_img"},[a("img",{attrs:{src:t.apiurl+t.columdata.附件.replace("ss.","."),alt:""}})]),a("div",{staticClass:"list_text",staticStyle:{"letter-spacing":"4px"},domProps:{innerHTML:t._s(t.columdata.简介)}})])],1)])],1)},n=[],i=a("36ce"),c={name:"Teamdata",data:function(){return{XAction:"GetDataInterface",XKLX:"SCDXXNJX",XDLMCID:"1001",page:1,rows:20,namedata:"",columdata:"",zhankai:["1"],list:[{name:"建设概况"},{name:"师资队伍"},{name:"教学平台"},{name:"中心概况"},{name:"教师风采"},{name:"规章制度"},{name:"课程通告"}]}},components:{TheColumn:i["a"]},mounted:function(){this.ajaxfirst()},methods:{ajaxfirst:function(){var t=this;this.PostData({XAction:t.XAction,XKLX:t.XKLX,XDLMCID:t.XDLMCID,page:t.page,rows:t.rows,XDLMSID:"DYBH201906121039333933107152",XDLMA:t.$route.query.idata},function(e){t.columdata=e.rows[0]})},clicktake:function(t){this.$router.push({path:"/teach",query:{idata:t}})},handleClose:function(t,e){},handleOpen:function(t,e){}}},l=c,r=(a("97a4"),a("2877")),o=Object(r["a"])(l,s,n,!1,null,"f8d6c894",null);e["default"]=o.exports},"97a4":function(t,e,a){"use strict";var s=a("5359"),n=a.n(s);n.a},daf6:function(t,e,a){"use strict";var s=a("22c8"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-7c30c3b2.7a050ffd.js.map