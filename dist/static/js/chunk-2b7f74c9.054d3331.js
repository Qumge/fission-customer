(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b7f74c9"],{"1b29":function(t,e,n){"use strict";var a=n("3812"),o=n.n(a);o.a},3812:function(t,e,n){},"61e4":function(t,e,n){"use strict";var a=n("d64b"),o=n.n(a);o.a},"66ea":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-container"},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.child.goodList.filter((function(e){return!t.search||e.name.includes(t.search)})),"default-sort":{prop:"price",order:"descending"}}},[n("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"price",label:"价格",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"sale",label:"销量",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"stock",label:"库存",sortable:""}}),t._v(" "),n("el-table-column",{attrs:{prop:"chooseStatus",label:"选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.currentId===e.row.id?n("el-button",{class:t.currentId===e.row.id?"choose":"",attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("已选择")]):t._e(),t._v(" "),t.currentId!==e.row.id?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("选择")]):t._e()]}}])})],1),t._v(" "),t.child.total?n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.child.searchOption.pagination.currentPage,"page-sizes":t.child.searchOption.pagination.mode,"page-size":t.child.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.child.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)},o=[],i=(n("c5f6"),n("f8a4")),r=n("5f87"),c={props:{child:{type:Object,required:!0}},data:function(){return{search:"",tableData:[],currentId:"",company_id:""}},created:function(){var t=Object(r["a"])();this.company_id=JSON.parse(t).id,this.getDetails(),this.getProList()},methods:{SingleOperation:function(t){this.$emit("sendChildData",t),this.currentId=t},handleCurrentChange:function(t){console.log(t),this.child.searchOption.pagination.currentPage=t,this.getProList()},getDetails:function(){void 0!==this.child.chooseId&&(this.currentId=this.child.chooseId)},getProList:function(){var t=this,e={type:"",search:"",company_id:this.company_id,status:"up",page:this.child.searchOption.pagination.currentPage,per_page:15};Object(i["t"])(e).then((function(e){console.log(e),t.child.goodList=e.data,t.child.total=Number(e.headers["x-total"])}))}}},s=c,u=(n("de9b"),n("2877")),l=Object(u["a"])(s,a,o,!1,null,"16aa538f",null);e["a"]=l.exports},"6dca":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"EditMain"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"任务时间"}},[n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择开始日期"},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1),t._v(" "),n("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择结束日期"},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"剩余金币",prop:"residue_coin"}},[n("el-input",{staticStyle:{width:"600px"},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"选择商品"}},[n("el-button",{on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("+从商品库中选择")])],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addStore("form")}}},[t._v("提交审核")]),t._v(" "),n("el-button",{on:{click:t.goBack}},[t._v("取消")]),t._v(" "),n("el-button",[t._v("预览")])],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"选择商品",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("choose-good",{attrs:{child:t.form.tableData},on:{sendChildData:t.getChildData}}),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.clearData}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)},o=[],i=(n("c5f6"),n("7b94")),r=n("66ea"),c=n("f8a4"),s=n("5f87"),u={components:{TopTitle:i["a"],chooseGood:r["a"]},data:function(){return{title:"",dialogTableVisible:!1,form:{residue_coin:"",valid_from:"",valid_to:"",tableData:{goodList:[],chooseId:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100},company_id:"",product_id:""}}},created:function(){var t=Object(s["a"])();this.company_id=JSON.parse(t).id,this.getDetails()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.id){this.title="编辑商品任务";var e=this.$route.query.id;Object(c["s"])(e).then((function(e){console.log(e),t.form.residue_coin=e.data.residue_coin,t.form.valid_from=e.data.valid_from,t.form.valid_to=e.data.valid_to,t.form.tableData.chooseId=e.data.product.id}))}else this.title="添加商品任务"},addStore:function(t){var e=this;if(void 0===this.$route.query.id){var n=new FormData;n.append("product_id",this.product_id),n.append("coin",this.form.residue_coin),n.append("valid_from",this.form.valid_from),n.append("valid_to",this.form.valid_to),Object(c["e"])(n).then((function(t){console.log(t),e.$message({message:"添加成功",type:"success"}),e.$router.go(-1)}))}else{var a=this.$route.query.id,o=new FormData;o.append("product_id",this.product_id),o.append("coin",void 0===this.form.coin?"":this.form.coin),o.append("valid_from",this.form.valid_from),o.append("valid_to",this.form.valid_to),Object(c["z"])(a,o).then((function(t){console.log(t),e.$message({message:"修改成功",type:"success"}),e.$router.go(-1)}))}},goBack:function(){this.$router.go(-1)},getProList:function(){var t=this,e={type:"",search:"",company_id:this.company_id,status:"up",page:1,per_page:15};Object(c["t"])(e).then((function(e){console.log(e),t.form.tableData.goodList=e.data,t.form.tableData.total=Number(e.headers["x-total"])}))},getChildData:function(t){console.log(t),this.product_id=t},clearData:function(){this.product_id="",this.dialogTableVisible=!1}}},l=u,d=(n("61e4"),n("2877")),f=Object(d["a"])(l,a,o,!1,null,"cbe5d5c8",null);e["default"]=f.exports},"7b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},r=i,c=(n("1b29"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"b4ebadd8",null);e["a"]=s.exports},d64b:function(t,e,n){},de9b:function(t,e,n){"use strict";var a=n("fde3"),o=n.n(a);o.a},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return o})),n.d(e,"t",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"s",(function(){return c})),n.d(e,"z",(function(){return s})),n.d(e,"j",(function(){return u})),n.d(e,"l",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"p",(function(){return _})),n.d(e,"c",(function(){return m})),n.d(e,"o",(function(){return v})),n.d(e,"x",(function(){return g})),n.d(e,"h",(function(){return b})),n.d(e,"n",(function(){return k})),n.d(e,"b",(function(){return y})),n.d(e,"m",(function(){return O})),n.d(e,"w",(function(){return x})),n.d(e,"A",(function(){return D})),n.d(e,"g",(function(){return w})),n.d(e,"r",(function(){return C})),n.d(e,"d",(function(){return $})),n.d(e,"q",(function(){return S})),n.d(e,"y",(function(){return j})),n.d(e,"i",(function(){return q}));var a=n("b775");function o(t){return a["a"].get("task_products",{params:t})}function i(t){return a["a"].get("products",{params:t})}function r(t){return a["a"].post("task_products",t)}function c(t){return a["a"].get("task_products/".concat(t))}function s(t,e){return a["a"].patch("task_products/".concat(t),e)}function u(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,e){return a["a"].patch("task_articles/".concat(t),e)}function h(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function m(t){return a["a"].post("task_questionnaires",t)}function v(t){return a["a"].get("task_questionnaires/".concat(t))}function g(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return a["a"].delete("task_questionnaires/".concat(t))}function k(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function O(t){return a["a"].get("task_game/".concat(t))}function x(t,e){return a["a"].patch("task_game/".concat(t),e)}function D(t){return a["a"].post("tasks/audit",t)}function w(t){return a["a"].delete("task_game/".concat(t))}function C(t){return a["a"].get("task_links",{params:t})}function $(t){return a["a"].post("task_links",t)}function S(t){return a["a"].get("task_links/".concat(t))}function j(t,e){return a["a"].patch("task_links/".concat(t),e)}function q(t){return a["a"].delete("task_links/".concat(t))}},fde3:function(t,e,n){}}]);