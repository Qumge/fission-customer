(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef6fefe8"],{"2ebc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"displayContent"},[n("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.games,(function(e,a){return n("el-tab-pane",{key:a,attrs:{label:e.title,name:e.name}},[n("el-row",[n("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.getList},model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}},t._l(t.statesList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),1==t.currentstatus||4==t.currentstatus?n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(1)}}},[t._v("批量通过")]):t._e(),t._v(" "),1==t.currentstatus?n("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(){return t.BatchOperation(2)}}},[t._v("批量拒绝")]):t._e(),t._v(" "),2==t.currentstatus?n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(){return t.BatchOperation(3)}}},[t._v("批量结束")]):t._e()],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"30"}}),t._v(" "),n("el-table-column",{attrs:{prop:"game.name",label:"游戏任务",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"company.name",label:"商户",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s("wait"==e.row.status?"待审核":"")+"\n              "+t._s("success"==e.row.status?"进行中":"")+"\n              "),t._v(" "),"overtime"==e.row.status?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.failed_reason,placement:"top-start"}},[n("el-button",{attrs:{type:"text"}},[t._v("已结束"),n("i",{staticClass:"el-icon-question"})])],1):t._e(),t._v(" "),"failed"==e.row.status?n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.failed_reason,placement:"top-start"}},[n("el-button",{attrs:{type:"text"}},[t._v("已拒绝"),n("i",{staticClass:"el-icon-question"})])],1):t._e()]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"任务时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.valid_from)+" - "+t._s(e.row.valid_to)+"\n            ")]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{prop:"status",width:"230",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return["wait"==e.row.status||"failed"==e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,1)}}},[t._v("通过")]):t._e(),t._v(" "),"wait"==e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,2)}}},[t._v("拒绝")]):t._e(),t._v(" "),"success"==e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,3)}}},[t._v("结束")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.triggerDelete(e.row.id)}}},[t._v("查看")])]}}],null,!0)})],1),t._v(" "),t.total?n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)})),1)],1)])},r=[],s=(n("c5f6"),n("ac6a"),n("ed08")),i=n("f8a4"),u=n("a883"),c={props:{query:{type:String,required:!0}},data:function(){return{games:[{title:"大转盘",name:"Game::Wheel"},{title:"砸金蛋",name:"Game::Egg"},{title:"刮刮卡",name:"Game::Scratch"}],statesList:[],stateValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",activeName:"Game::Wheel",currentstatus:"",arrID:""}},created:function(){var t=this;this.currentstatus=this.query,this.tableData.forEach((function(e){e.data3=t.query})),this.totle=1e3,this.getList(),this.getCompaines()},methods:{formatDate:s["d"],triggerEdit:function(t){return!1},triggerRecovery:function(t){},triggerDelete:function(t){this.$router.push({path:"gameTaskDetails?id=".concat(t,"&type=").concat(this.query)})},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getList()},dataStatistics:function(t){},handleSelectionChange:function(t){var e=[];t.forEach((function(t,n,a){e.push(t.id)})),this.arrID=e},handleClick:function(t){this.getList()},BatchOperation:function(t){var e=this;if(0===this.arrID.length)return this.$message.error("请选择需要批量操作的任务"),!1;if(1===t)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(e.arrID)),t.append("status","success"),t.append("reason",""),Object(i["D"])(t).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))}));else if(2===t||3===t){var n=2===t?"请输入拒绝原因":"请输入结束原因";this.$prompt(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(n){var a=n.value,r=2===t?"failed":"overtime",s=new FormData;s.append("ids",JSON.stringify(e.arrID)),s.append("status",r),s.append("reason",a),Object(i["D"])(s).then((function(t){200===t.status&&(e.$message({message:"操作成功",type:"success"}),e.getList())}))})).catch((function(){}))}},SingleOperation:function(t,e){var n=this,a=[];if(a.push(t),1===e)this.$confirm("该任务将审核通过, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=new FormData;t.append("ids",JSON.stringify(a)),t.append("status","success"),t.append("reason",""),Object(i["D"])(t).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))}));else if(2===e||3===e){var r=2===e?"请输入拒绝原因":"请输入结束原因";this.$prompt(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){var r=t.value,s=2===e?"failed":"overtime",u=new FormData;u.append("ids",JSON.stringify(a)),u.append("status",s),u.append("reason",r),Object(i["D"])(u).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.getList())}))})).catch((function(){}))}},getList:function(){var t=this,e="1"===this.query?"wait":"2"===this.query?"active":"3"===this.query?"overtime":"failed",n={type:this.activeName,company_id:this.stateValue,status:e,page:this.searchOption.pagination.currentPage,per_page:15};Object(i["n"])(n).then((function(e){200===e.status&&(t.tableData=e.data,t.total=Number(e.headers["x-total"]))}))},getCompaines:function(){var t=this,e={page:1,status:"",search:"",per_page:1e5};Object(u["e"])(e).then((function(e){200===e.status&&(t.statesList=e.data)}))}}},o=c,l=(n("83b5"),n("2877")),f=Object(l["a"])(o,a,r,!1,null,"1f80ef3a",null);e["default"]=f.exports},"83b5":function(t,e,n){"use strict";var a=n("9d7d"),r=n.n(a);r.a},"9d7d":function(t,e,n){},a883:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var a=n("b775");function r(t){return Object(a["a"])({url:"/companies",method:"post",data:t})}function s(t){return a["a"].get("/companies",{params:t})}function i(t){return a["a"].get("/companies/".concat(t))}function u(t,e){return Object(a["a"])({url:"/companies/".concat(t),method:"patch",data:e})}function c(t){return a["a"].delete("/companies/".concat(t))}function o(t){return a["a"].post("/companies/change_status",t)}function l(t){return a["a"].post("/companies/destroy",t)}},f8a4:function(t,e,n){"use strict";n.d(e,"x",(function(){return r})),n.d(e,"v",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"u",(function(){return u})),n.d(e,"C",(function(){return c})),n.d(e,"j",(function(){return o})),n.d(e,"l",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"y",(function(){return d})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"o",(function(){return _})),n.d(e,"A",(function(){return v})),n.d(e,"h",(function(){return k})),n.d(e,"n",(function(){return b})),n.d(e,"b",(function(){return y})),n.d(e,"m",(function(){return w})),n.d(e,"z",(function(){return O})),n.d(e,"D",(function(){return x})),n.d(e,"g",(function(){return D})),n.d(e,"r",(function(){return C})),n.d(e,"d",(function(){return S})),n.d(e,"q",(function(){return q})),n.d(e,"B",(function(){return B})),n.d(e,"i",(function(){return z})),n.d(e,"w",(function(){return L})),n.d(e,"t",(function(){return j})),n.d(e,"s",(function(){return $}));var a=n("b775");function r(t){return a["a"].get("task_products",{params:t})}function s(t){return a["a"].get("products",{params:t})}function i(t){return a["a"].post("task_products",t)}function u(t){return a["a"].get("task_products/".concat(t))}function c(t,e){return a["a"].patch("task_products/".concat(t),e)}function o(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function f(t){return a["a"].post("task_articles",t)}function p(t){return a["a"].get("task_articles/".concat(t))}function d(t,e){return a["a"].patch("task_articles/".concat(t),e)}function m(t){return a["a"].delete("task_articles/".concat(t))}function g(t){return a["a"].get("task_questionnaires",{params:t})}function h(t){return a["a"].post("task_questionnaires",t)}function _(t){return a["a"].get("task_questionnaires/".concat(t))}function v(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function k(t){return a["a"].delete("task_questionnaires/".concat(t))}function b(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function O(t,e){return a["a"].patch("task_game/".concat(t),e)}function x(t){return a["a"].post("tasks/audit",t)}function D(t){return a["a"].delete("task_game/".concat(t))}function C(t){return a["a"].get("task_links",{params:t})}function S(t){return a["a"].post("task_links",t)}function q(t){return a["a"].get("task_links/".concat(t))}function B(t,e){return a["a"].patch("task_links/".concat(t),e)}function z(t){return a["a"].delete("task_links/".concat(t))}function L(t,e){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:e})}function j(t){return a["a"].get("task_game/".concat(t,"/prizes"))}function $(t,e){return a["a"].get("task_game/".concat(t,"/prize_logs"),{params:e})}}}]);