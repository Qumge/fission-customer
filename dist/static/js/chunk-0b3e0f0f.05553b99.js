(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b3e0f0f"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var s=i(),r=t-s,l=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=l;var i=Math.easeInOutQuad(c,s,r,e);o(i),c<e?a(t):n&&"function"===typeof n&&n()};u()}},"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3206:function(t,e,n){},"393d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-container"},[n("el-row",[n("div",{staticClass:"inputBox fr"},[n("el-input",{attrs:{placeholder:"搜索任务名称",size:"small"},on:{blur:function(e){return t.getList()}},model:{value:t.listQuery.condition1,callback:function(e){t.$set(t.listQuery,"condition1",e)},expression:"listQuery.condition1"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{prop:"name",label:t.child.firstColumnName,"min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"coin",label:"金币数",sortable:"custom","class-name":t.getSortClass("coin"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"number",label:"领取量",sortable:"custom","class-name":t.getSortClass("number"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"任务时间","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.valid_from)+" - "+t._s(e.row.valid_to)+"\n      ")]}}])}),t._v(" "),"0"===t.child.type?n("el-table-column",{attrs:{prop:"id",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id!==t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.id===t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,616375394)}):t._e(),t._v(" "),"1"===t.child.type?n("el-table-column",{attrs:{prop:"id",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.game.id!==t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.game.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.game.id===t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,2893651586)}):t._e(),t._v(" "),"2"===t.child.type?n("el-table-column",{attrs:{prop:"id",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.questionnaire.id!==t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.questionnaire.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.questionnaire.id===t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,1284381971)}):t._e(),t._v(" "),"3"===t.child.type?n("el-table-column",{attrs:{prop:"id",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.article.id!==t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.article.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.article.id===t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,3673380872)}):t._e()],1),t._v(" "),t.total?n("div",{staticClass:"pagingBox"},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticStyle:{padding:"0"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1):t._e()],1)},o=[],i=(n("55dd"),n("c5f6"),n("db72")),s=n("333d"),r=n("f8a4"),l={components:{Pagination:s["a"]},props:{child:{type:Object,required:!0}},data:function(){return{search:"",listQuery:{page:1,limit:20,condition1:void 0,title:void 0,type:void 0,sort:"+id"},data:[],total:100,currentId:""}},watch:{child:{handler:function(t,e){console.log(t,e),this.getList()},deep:!0}},created:function(){console.log(this.child),this.currentId=this.child.taskId,console.log(this.currentId),this.getList()},methods:{getList:function(t){var e=Object(i["a"])({page:this.listQuery.page,per_page:15,company_id:"",status:"success",type:"",name:this.listQuery.condition1},t);"0"===this.child.type?this.getProductList(e):"1"===this.child.type?this.getGameList(e):"2"===this.child.type?this.getInvestList(e):"3"===this.child.type&&this.getArticleList(e)},getProductList:function(t){var e=this;Object(r["u"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getGameList:function(t){var e=this;Object(r["n"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getInvestList:function(t){var e=this;Object(r["p"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getArticleList:function(t){var e=this;Object(r["l"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},SingleOperation:function(t){this.currentId=t,this.$emit("updataId",t)},handleCurrentChange:function(t){console.log(t)},sortChange:function(t){var e=t.prop,n=t.order;e&&this.sortByID(n,e)},sortByID:function(t,e){this.listQuery.sort="ascending"===t?"+".concat(e):"-".concat(e),console.log(t,e);var n={sorts:JSON.stringify([{column:e,sort:"descending"===t?"desc":"asc"}])};this.getList(n)},getSortClass:function(t){console.log(t);var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":e==="-".concat(t)?"descending":""}}},c=l,u=(n("43d8"),n("2877")),d=Object(u["a"])(c,a,o,!1,null,"f13ae7ca",null);e["a"]=d.exports},"43d8":function(t,e,n){"use strict";var a=n("3206"),o=n.n(a);o.a},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),o=n("d8e8"),i=n("4bf8"),s=n("79e5"),r=[].sort,l=[1,2,3];a(a.P+a.F*(s((function(){l.sort(void 0)}))||!s((function(){l.sort(null)}))||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),o(t))}})},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return o})),n.d(e,"t",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"s",(function(){return r})),n.d(e,"z",(function(){return l})),n.d(e,"j",(function(){return c})),n.d(e,"l",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"o",(function(){return b})),n.d(e,"x",(function(){return _})),n.d(e,"h",(function(){return y})),n.d(e,"n",(function(){return v})),n.d(e,"b",(function(){return w})),n.d(e,"m",(function(){return k})),n.d(e,"w",(function(){return C})),n.d(e,"A",(function(){return I})),n.d(e,"g",(function(){return D})),n.d(e,"r",(function(){return T})),n.d(e,"d",(function(){return L})),n.d(e,"q",(function(){return S})),n.d(e,"y",(function(){return x})),n.d(e,"i",(function(){return N}));var a=n("b775");function o(t){return a["a"].get("task_products",{params:t})}function i(t){return a["a"].get("products",{params:t})}function s(t){return a["a"].post("task_products",t)}function r(t){return a["a"].get("task_products/".concat(t))}function l(t,e){return a["a"].patch("task_products/".concat(t),e)}function c(t){return a["a"].delete("task_products/".concat(t))}function u(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,e){return a["a"].patch("task_articles/".concat(t),e)}function m(t){return a["a"].delete("task_articles/".concat(t))}function g(t){return a["a"].get("task_questionnaires",{params:t})}function h(t){return a["a"].post("task_questionnaires",t)}function b(t){return a["a"].get("task_questionnaires/".concat(t))}function _(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function y(t){return a["a"].delete("task_questionnaires/".concat(t))}function v(t){return a["a"].get("task_game",{params:t})}function w(t){return a["a"].post("task_game",t)}function k(t){return a["a"].get("task_game/".concat(t))}function C(t,e){return a["a"].patch("task_game/".concat(t),e)}function I(t){return a["a"].post("tasks/audit",t)}function D(t){return a["a"].delete("task_game/".concat(t))}function T(t){return a["a"].get("task_links",{params:t})}function L(t){return a["a"].post("task_links",t)}function S(t){return a["a"].get("task_links/".concat(t))}function x(t,e){return a["a"].patch("task_links/".concat(t),e)}function N(t){return a["a"].delete("task_links/".concat(t))}},fded:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"displayContent"},[n("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"180px"}},[n("el-form-item",{attrs:{label:"每日签到奖励",prop:"goodsClassifyTwo"}}),t._v(" "),n("el-form-item",{attrs:{label:"",prop:"goodsClassifyTwo"}},[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.formData.goodsClassifyTwo,callback:function(e){t.$set(t.formData,"goodsClassifyTwo",e)},expression:"formData.goodsClassifyTwo"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"连续签到奖励",prop:"brandName"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.formData.brandName,callback:function(e){t.$set(t.formData,"brandName",e)},expression:"formData.brandName"}})],1),t._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.formData.brandName,expression:"formData.brandName"}],attrs:{label:"",prop:"brandName"}},[n("div",[t._l(t.awardRules,(function(e,a){return n("div",{key:a},[n("span",[t._v("连续签到")]),t._v(" "),n("el-input",{attrs:{type:"number"},on:{blur:function(){return t.changeDays(e.days,a)}},model:{value:e.days,callback:function(n){t.$set(e,"days",n)},expression:"item.days"}}),t._v(" "),n("span",[t._v(",奖励")]),t._v(" "),n("el-input",{attrs:{type:"number"},on:{blur:function(){return t.changeGoldCoin(e.goldCoin,a)}},model:{value:e.goldCoin,callback:function(n){t.$set(e,"goldCoin",n)},expression:"item.goldCoin"}}),t._v(" "),n("span",[t._v("金币")]),t._v(" "),n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(){return t.triggerDialog("0",a)}}},[t._v("删除")])],1)})),t._v(" "),n("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(){return t.triggerDialog("1")}}},[t._v("增加规则")]),t._v(" "),n("span",[t._v("最多添加20个")])],2)]),t._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{clcik:function(e){return t.operationButton(1)}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{clcik:function(e){return t.operationButton(2)}}},[t._v("取消")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("chooseTask",{attrs:{child:t.tableData},on:{updataId:t.changeTaskId}})],1)],1)],1)},o=[],i=(n("c5f6"),n("ac6a"),n("7b94")),s=n("393d"),r={components:{TopTitle:i["a"],chooseTask:s["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,dialogTableVisible:!1,formData:{goodsClassifyTwo:"",brandName:!1,goodsImageUrlList:""},awardRules:[{days:"",goldCoin:""}],tableData:{type:"",firstColumnName:"",taskId:""},formOption:{goodsImageList:[]},formRules:{aaa:[{required:!0,message:"zzz不能为空",trigger:"change"}]},title:"添加/编辑任务广告",disabled:!1,dialogTitle:""}},created:function(){console.log("当前组件渲染完成:")},methods:{init:function(){console.log("加载默认数据");var t={};this.$webApi.parent("API",t).then((function(t){console.log(t)}))},onSubmit:function(t){var e=this;this.$refs[t].validate((function(n){if(n){console.log("提交表单:"),console.log(e.formData);var a={goodsClassifyTwo:e.formData.goodsClassifyTwo,brandName:e.formData.brandName,goodsImageUrlList:e.formData.goodsImageUrlList};a.specificationsList.forEach((function(t){""===t.pricingRmb&&t.pricingRmb}));var o={platformId:e.$route.params.qid};e.$webApi.product("update",a,o).then((function(n){console.log(n),e.$store.dispatch("setLoadingStatus",!1),e.$refs[t].resetFields(),e.$message({type:"success",message:"编辑成功!"}),e.reload()})).catch((function(){e.$store.dispatch("setLoadingStatus",!1)}))}}))},resetForm:function(t,e){console.log("重置表单:"),this[e]=!1,this.$refs[t].resetFields()},queryClassifyListByParentId:function(t,e,n){var a=this,o={parentId:t},i={platformId:this.$route.params.qid};this.$webApi.public("queryClassifyListByParentId",o,i).then((function(t){console.log("商品分类列表查询-"+e+"级："),console.log(t),1===e?(a.formData.goodsClassifyOne="",a.formData.goodsClassifyTwo="",a.formData.classifyId="",a.formOption.goodsClassifyOneSelectList=t.data&&t.data.length>0?t.data:[],a.formData.goodsClassifyOne=n||""):2===e?(a.formData.goodsClassifyTwo="",a.formData.classifyId="",a.formOption.goodsClassifyTwoSelectList=t.data&&t.data.length>0?t.data:[],a.formData.goodsClassifyTwo=n||""):3===e&&(a.formData.classifyId="",a.formOption.classifySelectList=t.data&&t.data.length>0?t.data:[],a.formData.classifyId=n||"")}))},setDefaultDisplay:function(t){var e=this;this.formData.specificationsList.forEach((function(n,a){e.formData.specificationsList[a].defaultSpecification=t===a?1:0,console.log(e.formData.specificationsList)}))},operationButton:function(t){},changeType:function(t){console.log(t),this.tableData.type=t,this.dialogTitle="选择".concat(this.statesList[t].label),this.tableData.firstColumnName=this.statesList[t].label},triggerDialog:function(t,e){if("0"===t){if(this.awardRules.length<=1)return this.$message.error("最少保留一条奖励规则");this.awardRules.splice(e,1)}else this.awardRules.length<20?this.awardRules.push({days:"",goldCoin:""}):this.$message.error("最多只能添加20条奖励规则")},changeTaskId:function(t){console.log(t),this.tableData.taskId=t},changeDays:function(t,e){if(console.log(t),0!==e&&Number(t)<=Number(this.awardRules[e-1].days))return this.awardRules[e].days="",this.$message.error("奖励不可小于上一级")},changeGoldCoin:function(t,e){if(0!==e&&Number(t)<=Number(this.awardRules[e-1].goldCoin))return this.awardRules[e].goldCoin="",this.$message.error("奖励不可小于上一级")}}},l=r,c=n("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=u.exports}}]);