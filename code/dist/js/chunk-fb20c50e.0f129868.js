(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb20c50e","chunk-7328af36"],{"1ab6":function(t,e,a){"use strict";var s=a("8c52"),i=a.n(s);i.a},"22c8":function(t,e,a){},"36ce":function(t,e,a){"use strict";var s=a("3e71");e["a"]=s["default"]},"3e71":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"thecolumn"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/TheColumnTwo"}}},[t._v("当前位置：中心首页")]),a("el-breadcrumb-item",[t._v("中心介绍")]),a("el-breadcrumb-item",[t._v("教师平台")])],1),a("div",{staticClass:"tlist"},[a("ul",{staticClass:"textul"},t._l(t.columdata,function(e,s){return a("router-link",{key:s,staticClass:"divr",attrs:{tag:"div",to:"/TheColumnTwo"}},[t._v(" "+t._s(e.标题)+"\n        "),a("span",[t._v(t._s(e.日期))])])}),1)])],1)},i=[],n={name:"TheColumn",data:function(){return{XAction:"GetDataInterface",XKLX:"SCDXXNJX",XDLMCID:"1001",page:1,rows:20,XDLMSID:"DYBH20190529131215121519001",columdata:[]}},mounted:function(){this.ajaxfirst()},methods:{ajaxfirst:function(){var t=this;alert(t.$route.query.teachname),this.PostData({XAction:t.XAction,XKLX:t.XKLX,XDLMCID:t.XDLMCID,page:t.page,rows:t.rows,XDLMSID:"DYBH20190529131215121519001",XDLMA:t.$route.query.teachname},function(e){t.columdata=e.rows})}}},l=n,c=(a("daf6"),a("2877")),r=Object(c["a"])(l,s,i,!1,null,"38af9495",null);e["default"]=r.exports},"8c52":function(t,e,a){},cecb:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"teach"},[a("el-aside",{staticStyle:{height:"1000px"}},[a("el-col",[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"unique-opened":"","text-color":"#ffffff","background-color":"#A38638","active-text-color":"#ffffff",router:"","default-openeds":this.zhankai},on:{close:t.handleClose}},[a("el-submenu",{staticClass:"teach_elsum",attrs:{index:"1"}},[a("template",{attrs:{id:"teach_elsum_title"},slot:"title"},[a("span",{attrs:{id:"teach_elsum_title"}},[t._v("中心简介")])]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("建设概况","中心简介")}}},[t._v("建设概况")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.laoshi("中心简介")}}},[t._v("师资队伍")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("教学平台","中心简介")}}},[t._v("教学平台")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("新闻聚焦","中心简介")}}},[t._v("新闻聚焦")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("中心概况","中心简介")}}},[t._v("中心概况")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("规章制度","中心简介")}}},[t._v("规章制度")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.tza("通知公告","中心简介")}}},[t._v("通知公告")])],2),a("el-submenu",{staticClass:"teach_elsum",attrs:{index:"2"}},[a("template",{attrs:{id:"teach_elsum_title"},slot:"title"},[a("span",{attrs:{id:"teach_elsum_title"}},[t._v("实验制度")])]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.taket("实验制度")}}},[t._v("实验制度")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.taket("实验制度")}}},[t._v("实验室管理")])],2),a("el-submenu",{staticClass:"tem_e",attrs:{index:"3"}},[a("template",{attrs:{id:"teach_elsum_title"},slot:"title"},[a("span",{attrs:{id:"teach_elsum_title"}},[t._v("虚拟仿真实验")])]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("在线实验介绍","虚拟仿真实验")}}},[t._v("在线实验介绍")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("在线实验流程","虚拟仿真实验")}}},[t._v("在线实验流程")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.clicktake("线下实验介绍","虚拟仿真实验")}}},[t._v("线下实验介绍")])],2),a("el-submenu",{staticClass:"teach_elsum",attrs:{index:"4"}},[a("template",{attrs:{id:"teach_elsum_title"},slot:"title"},[a("span",{attrs:{id:"teach_elsum_title"}},[t._v("资料下载")])]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.taketzl("教学资料")}}},[t._v("教学资料")]),a("el-menu-item",{staticClass:"tem_el",on:{click:function(e){return t.taketzl("图纸下载")}}},[t._v("图纸下载")])],2),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/theask"}},[t._v("\n\t\t\t\t\t\t互问互答\n\t\t\t\t\t")]),a("el-menu-item",{staticClass:"tem_e",attrs:{index:"/TheContact"}},[t._v("\n\t\t\t\t\t\t联系我们\n\t\t\t\t\t")])],1)],1)],1),a("el-main",{staticClass:"TheColumn",staticStyle:{padding:"0"}},[a("div",{staticClass:"thecolumn"},[a("el-breadcrumb",{staticStyle:{background:"#ECECEC","line-height":"40px",padding:"0 20px"},attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("当前位置：首页")]),a("el-breadcrumb-item",[t._v("资料下载")]),a("el-breadcrumb-item",{attrs:{to:{path:"/virtal",query:{idata:this.Titlenemr,sh:0}}}},[t._v(t._s(this.Titlenemr))]),a("el-breadcrumb-item",[a("div",{staticClass:"endcolor",staticStyle:{color:"#A48638"}},[t._v("详情")])])],1),a("div",{staticClass:"tlist"},[a("div",{staticClass:"hhh"},[t._v(t._s(t.columdata.标题))]),a("div",{staticClass:"list_text",staticStyle:{"letter-spacing":"3px"},domProps:{innerHTML:t._s(t.columdata.内容)}})])],1)])],1)},i=[],n=a("36ce"),l={name:"Downdata",data:function(){return{XAction:"GetDataInterface",XKLX:"SCDXXNJX",XDLMCID:"1001",page:1,rows:20,namedata:"",columdata:"",Titlenemr:"",zhankai:["3"],list:[{name:"建设概况"},{name:"师资队伍"},{name:"教学平台"},{name:"中心概况"},{name:"教师风采"},{name:"规章制度"},{name:"课程通告"}]}},components:{TheColumn:n["a"]},mounted:function(){this.ajaxfirst()},methods:{laoshi:function(t){this.$router.push({path:"/teacher",query:{parent:t}})},tza:function(t,e){this.$router.push({path:"/teach",query:{idata:t}})},taketzl:function(t){this.$router.push({path:"/data",query:{idata:t}})},taket:function(t){this.$router.push({path:"/tester",query:{idata:t}})},ajaxfirst:function(){var t=this;t.Titlenemr=t.$route.query.biaoti,this.PostData({XAction:t.XAction,XKLX:t.XKLX,XDLMCID:t.XDLMCID,XDLMSID:"DYBH20190529131215121515902",XDLMA:t.$route.query.idata},function(e){t.columdata=e.rows[0]})},clicktake:function(t){this.$router.push({path:"/Virtal",query:{idata:t}})},handleClose:function(t,e){}}},c=l,r=(a("1ab6"),a("2877")),u=Object(r["a"])(c,s,i,!1,null,"5e522565",null);e["default"]=u.exports},daf6:function(t,e,a){"use strict";var s=a("22c8"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-fb20c50e.0f129868.js.map