(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b6b4db"],{4205:function(t,e,n){},"5fe3":function(t,e,n){},"66ea":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-container"},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.child.goodList.filter((function(e){return!t.search||e.good.includes(t.search)})),"default-sort":{prop:"date",order:"descending"}}},[n("el-table-column",{attrs:{prop:"good",label:"商品名称",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"price",label:"价格",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"salesVolume",label:"销量",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"stock",label:"库存",sortable:"",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{staticStyle:{color:"#000"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e(),t._v(" "),0==e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,2)}}},[t._v("选择")]):t._e()]}}])})],1),t._v(" "),t.child.total?n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.child.searchOption.pagination.currentPage,"page-sizes":t.child.searchOption.pagination.mode,"page-size":t.child.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.child.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)},o=[],r={props:{child:{type:Object,required:!0}},data:function(){return{search:""}},methods:{SingleOperation:function(t){},handleCurrentChange:function(t){console.log(t)}}},i=r,s=(n("c316"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"044ceb6b",null);e["a"]=c.exports},"6dca":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"EditMain"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"任务时间"}},[n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1),t._v(" "),n("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"剩余金币"}},[n("el-input",{staticStyle:{width:"600px"},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"选择商品"}},[n("el-button",{on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("+从商品库中选择")])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.addStore}},[t._v("提交审核")]),t._v(" "),n("el-button",{on:{click:t.goBack}},[t._v("取消")]),t._v(" "),n("el-button",[t._v("预览")])],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"选择商品",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("choose-good",{attrs:{child:t.form.tableData}})],1)],1)},o=[],r=(n("c5f6"),n("7b94")),i=n("66ea"),s=n("f8a4"),c=n("5f87"),l={components:{TopTitle:r["a"],chooseGood:i["a"]},data:function(){return{title:"",dialogTableVisible:!1,form:{residue_coin:"",valid_from:"",valid_to:"",tableData:{goodList:[],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,company_id:""}}}},created:function(){this.form.valid_from=new Date,this.form.valid_to=this.fun_date(7);var t=Object(c["a"])();this.company_id=t.id,this.getDetails(),this.getProList()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.id){this.title="编辑商品任务";var e=this.$route.query.id;Object(s["o"])(e).then((function(e){console.log(e),t.form=e.data}))}else this.title="添加商品任务"},addStore:function(){var t=this;if(void 0===this.$route.query.id){var e=new FormData;e.append("product_id","3"),e.append("coin",this.form.residue_coin),e.append("valid_from",this.form.valid_from),e.append("valid_to",this.form.valid_to),Object(s["d"])(e).then((function(e){console.log(e),t.$message({message:"添加成功",type:"success"}),t.$router.go(-1)}))}else{var n=this.$route.query.id,a=new FormData;a.append("product_id","3"),a.append("coin",void 0===this.form.coin?"":this.form.coin),a.append("valid_from",this.form.valid_from),a.append("valid_to",this.form.valid_to),Object(s["u"])(n,a).then((function(e){console.log(e),t.$message({message:"修改成功",type:"success"}),t.$router.go(-1)}))}},goBack:function(){this.$router.go(-1)},fun_date:function(t){var e=new Date,n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();console.log(n);var a=new Date(e);a.setDate(e.getDate()+t);var o=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return console.log(o),o},getProList:function(){var t=this,e={type:"",search:"",company_id:this.company_id,status:"up",page:1,per_page:15};Object(s["p"])(e).then((function(e){console.log(e),t.form.tableData.goodList=e.data,t.form.tableData.total=Number(e.headers["x-total"])}))}}},u=l,d=(n("d46f"),n("2877")),f=Object(d["a"])(u,a,o,!1,null,"2578826a",null);e["default"]=f.exports},"7b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],r={props:{title:{type:String,required:!0}},data:function(){return{}}},i=r,s=(n("d98e"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"24a0e96e",null);e["a"]=c.exports},"8e5e":function(t,e,n){},c316:function(t,e,n){"use strict";var a=n("5fe3"),o=n.n(a);o.a},d46f:function(t,e,n){"use strict";var a=n("8e5e"),o=n.n(a);o.a},d98e:function(t,e,n){"use strict";var a=n("4205"),o=n.n(a);o.a},f8a4:function(t,e,n){"use strict";n.d(e,"q",(function(){return o})),n.d(e,"p",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"o",(function(){return s})),n.d(e,"u",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"j",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"r",(function(){return p})),n.d(e,"e",(function(){return m})),n.d(e,"n",(function(){return _})),n.d(e,"c",(function(){return h})),n.d(e,"m",(function(){return v})),n.d(e,"t",(function(){return g})),n.d(e,"g",(function(){return b})),n.d(e,"l",(function(){return k})),n.d(e,"b",(function(){return y})),n.d(e,"k",(function(){return w})),n.d(e,"s",(function(){return x})),n.d(e,"v",(function(){return D})),n.d(e,"f",(function(){return O}));var a=n("b775");function o(t){return a["a"].get("task_products",{params:t})}function r(t){return a["a"].get("products",{params:t})}function i(t){return a["a"].post("task_products",t)}function s(t){return a["a"].get("task_products/".concat(t))}function c(t,e){return a["a"].patch("task_products/".concat(t),e)}function l(t){return a["a"].delete("task_products/".concat(t))}function u(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,e){return a["a"].patch("task_articles/".concat(t),e)}function m(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function h(t){return a["a"].post("task_questionnaires",t)}function v(t){return a["a"].get("task_questionnaires/".concat(t))}function g(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return a["a"].delete("task_questionnaires/".concat(t))}function k(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function x(t,e){return a["a"].patch("task_game/".concat(t),e)}function D(t){return a["a"].post("tasks/audit",t)}function O(t){return a["a"].delete("task_game/".concat(t))}}}]);