(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76dc29a9"],{"11b8":function(t,n,e){"use strict";var a=e("ab86"),r=e.n(a);r.a},a883:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return s})),e.d(n,"f",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"g",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return l}));var a=e("b775");function r(t){return Object(a["a"])({url:"/companies",method:"post",data:t})}function s(t){return a["a"].get("/companies",{params:t})}function i(t){return a["a"].get("/companies/".concat(t))}function u(t,n){return Object(a["a"])({url:"/companies/".concat(t),method:"patch",data:n})}function o(t){return a["a"].delete("/companies/".concat(t))}function c(t){return a["a"].post("/companies/change_status",t)}function l(t){return a["a"].post("/companies/destroy",t)}},ab86:function(t,n,e){},f8a4:function(t,n,e){"use strict";e.d(n,"x",(function(){return r})),e.d(n,"v",(function(){return s})),e.d(n,"e",(function(){return i})),e.d(n,"u",(function(){return u})),e.d(n,"C",(function(){return o})),e.d(n,"j",(function(){return c})),e.d(n,"l",(function(){return l})),e.d(n,"a",(function(){return p})),e.d(n,"k",(function(){return f})),e.d(n,"y",(function(){return d})),e.d(n,"f",(function(){return h})),e.d(n,"p",(function(){return g})),e.d(n,"c",(function(){return m})),e.d(n,"o",(function(){return _})),e.d(n,"A",(function(){return v})),e.d(n,"h",(function(){return k})),e.d(n,"n",(function(){return y})),e.d(n,"b",(function(){return b})),e.d(n,"m",(function(){return w})),e.d(n,"z",(function(){return x})),e.d(n,"D",(function(){return O})),e.d(n,"g",(function(){return q})),e.d(n,"r",(function(){return C})),e.d(n,"d",(function(){return D})),e.d(n,"q",(function(){return S})),e.d(n,"B",(function(){return B})),e.d(n,"i",(function(){return z})),e.d(n,"w",(function(){return $})),e.d(n,"t",(function(){return L})),e.d(n,"s",(function(){return j}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function s(t){return a["a"].get("products",{params:t})}function i(t){return a["a"].post("task_products",t)}function u(t){return a["a"].get("task_products/".concat(t))}function o(t,n){return a["a"].patch("task_products/".concat(t),n)}function c(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function p(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function d(t,n){return a["a"].patch("task_articles/".concat(t),n)}function h(t){return a["a"].delete("task_articles/".concat(t))}function g(t){return a["a"].get("task_questionnaires",{params:t})}function m(t){return a["a"].post("task_questionnaires",t)}function _(t){return a["a"].get("task_questionnaires/".concat(t))}function v(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function k(t){return a["a"].delete("task_questionnaires/".concat(t))}function y(t){return a["a"].get("task_game",{params:t})}function b(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function x(t,n){return a["a"].patch("task_game/".concat(t),n)}function O(t){return a["a"].post("tasks/audit",t)}function q(t){return a["a"].delete("task_game/".concat(t))}function C(t){return a["a"].get("task_links",{params:t})}function D(t){return a["a"].post("task_links",t)}function S(t){return a["a"].get("task_links/".concat(t))}function B(t,n){return a["a"].patch("task_links/".concat(t),n)}function z(t){return a["a"].delete("task_links/".concat(t))}function $(t,n){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function L(t){return a["a"].get("task_game/".concat(t,"/prizes"))}function j(t,n){return a["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}},fafa:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"displayContent"},[e("el-row",[e("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.getList},model:{value:t.stateValue,callback:function(n){t.stateValue=n},expression:"stateValue"}},t._l(t.statesList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),1==t.currentstatus||4==t.currentstatus?e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(1)}}},[t._v("批量通过")]):t._e(),t._v(" "),1==t.currentstatus?e("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(){return t.BatchOperation(2)}}},[t._v("批量拒绝")]):t._e(),t._v(" "),2==t.currentstatus?e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(3)}}},[t._v("批量结束")]):t._e(),t._v(" "),e("div",{staticClass:"inputBox fr"},[e("el-input",{attrs:{placeholder:"搜索商品名称",size:"small"},on:{blur:t.getList},model:{value:t.inputSearchContent,callback:function(n){t.inputSearchContent=n},expression:"inputSearchContent"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),e("el-table-column",{attrs:{prop:"product.name",label:"商品任务",width:"300"}}),t._v(" "),e("el-table-column",{attrs:{prop:"company.name",label:"商户",width:"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"query",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s("1"==t.query?"待审核":"")+"\n          "+t._s("2"==t.query?"进行中":"")+"\n          "),t._v(" "),"3"==t.query?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:n.row.failed_reason,placement:"top-start"}},[e("el-button",{attrs:{type:"text"}},[t._v("已结束"),e("i",{staticClass:"el-icon-question"})])],1):t._e(),t._v(" "),"4"==t.query?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:n.row.failed_reason,placement:"top-start"}},[e("el-button",{attrs:{type:"text"}},[t._v("已拒绝"),e("i",{staticClass:"el-icon-question"})])],1):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"任务时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(n.row.valid_from)+" - "+t._s(n.row.valid_to)+"\n        ")]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"230",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[1==t.query||4==t.query?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,1)}}},[t._v("通过")]):t._e(),t._v(" "),1==t.query?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,2)}}},[t._v("拒绝")]):t._e(),t._v(" "),2==t.query?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,3)}}},[t._v("结束")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.triggerDelete(n.row.id)}}},[t._v("查看")])]}}])})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},r=[],s=(e("c5f6"),e("ac6a"),e("f8a4")),i=e("a883"),u=e("ed08"),o={props:{query:{type:String,required:!0}},data:function(){return{statesList:[],stateValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",currentstatus:"",arrID:[]}},watch:{$route:function(t,n){var e=this;console.log(t),this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=e.$route.params.id}))}},created:function(){this.getList(),this.getCompaines(),this.currentstatus=this.query},methods:{formatDate:u["d"],getList:function(){var t=this,n="1"===this.query?"wait":"2"===this.query?"active":"3"===this.query?"overtime":"failed",e={page:this.searchOption.pagination.currentPage,per_page:15,company_id:this.stateValue,status:n,name:this.inputSearchContent};Object(s["x"])(e).then((function(n){200===n.status&&(t.tableData=n.data,t.total=Number(n.headers["x-total"]))}))},getCompaines:function(){var t=this,n={page:1,status:"",search:"",per_page:1e5};Object(i["e"])(n).then((function(n){200===n.status&&(t.statesList=n.data)}))},triggerDelete:function(t){this.$router.push({path:"commodityTaskDetails?id=".concat(t,"&type=").concat(this.query)})},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},dataStatistics:function(t){},handleSelectionChange:function(t){var n=[];t.forEach((function(t,e,a){n.push(t.id)})),this.arrID=n},BatchOperation:function(t){var n=this;if(0===this.arrID.length)return this.$message.error("请选择需要批量操作的任务"),!1;if(1===t)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(n.arrID)),t.append("status","success"),t.append("reason",""),Object(s["D"])(t).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))}));else if(2===t||3===t){var e=2===t?"请输入拒绝原因":"请输入结束原因";this.$prompt(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){var a=e.value,r=2===t?"failed":"overtime",i=new FormData;i.append("ids",JSON.stringify(n.arrID)),i.append("status",r),i.append("reason",a),Object(s["D"])(i).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))})).catch((function(){}))}},SingleOperation:function(t,n){var e=this,a=[];if(a.push(t),1===n)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(a)),t.append("status","success"),t.append("reason",""),Object(s["D"])(t).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))}));else if(2===n||3===n){var r=2===n?"请输入拒绝原因":"请输入结束原因";this.$prompt(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var r=t.value,i=2===n?"failed":"overtime",u=new FormData;u.append("ids",JSON.stringify(a)),u.append("status",i),u.append("reason",r),Object(s["D"])(u).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))})).catch((function(){}))}}}},c=o,l=(e("11b8"),e("2877")),p=Object(l["a"])(c,a,r,!1,null,"5ba531a0",null);n["default"]=p.exports}}]);