(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21b4439c","chunk-600fd891"],{"1b29":function(t,n,e){"use strict";var a=e("3812"),r=e.n(a);r.a},3812:function(t,n,e){},"7a2b":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"tableContainer"},[e("h3",[e("span",[t._v("问卷标题：")]),t._v(t._s(t.name))]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"created_at",label:"提交时间"},scopedSlots:t._u([{key:"default",fn:function(n){return n.row.created_at?[t._v("\n          "+t._s(n.row.created_at)+"\n        ")]:void 0}}],null,!0)}),t._v(" "),e("el-table-column",{attrs:{prop:"user.nick_name",label:"提交人"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(n.row.id,1)}}},[t._v("查看")])]}}])})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)],1)},r=[],u=(e("c5f6"),e("7f7f"),e("7b94")),o=e("f8a4"),c=e("ed08"),i={components:{TopTitle:u["a"]},data:function(){return{title:"",name:"",tableData:[],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100}},watch:{$route:function(t,n){console.log(t)}},created:function(){this.title="问卷收集",this.getList()},methods:{formatDate:c["d"],getList:function(){var t=this,n={page:this.searchOption.pagination.currentPage,per_page:15},e=this.$route.query.id;Object(o["u"])(e,n).then((function(n){console.log(n),t.tableData=n.data,t.name=n.data[0].questionnaire.name,t.total=Number(n.headers["x-total"])}))},handleCurrentChange:function(t){console.log(t),this.searchOption.pagination.currentPage=t,this.getList()},SingleOperation:function(t,n){console.log("查看")}}},s=i,f=(e("fdc4"),e("2877")),l=Object(f["a"])(s,a,r,!1,null,"359a4450",null);n["default"]=l.exports},"7b94":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],u={props:{title:{type:String,required:!0}},data:function(){return{}}},o=u,c=(e("1b29"),e("2877")),i=Object(c["a"])(o,a,r,!1,null,"b4ebadd8",null);n["a"]=i.exports},f8a4:function(t,n,e){"use strict";e.d(n,"v",(function(){return r})),e.d(n,"t",(function(){return u})),e.d(n,"e",(function(){return o})),e.d(n,"s",(function(){return c})),e.d(n,"A",(function(){return i})),e.d(n,"j",(function(){return s})),e.d(n,"l",(function(){return f})),e.d(n,"a",(function(){return l})),e.d(n,"k",(function(){return d})),e.d(n,"w",(function(){return p})),e.d(n,"f",(function(){return g})),e.d(n,"p",(function(){return _})),e.d(n,"c",(function(){return k})),e.d(n,"o",(function(){return h})),e.d(n,"y",(function(){return m})),e.d(n,"h",(function(){return b})),e.d(n,"n",(function(){return v})),e.d(n,"b",(function(){return w})),e.d(n,"m",(function(){return O})),e.d(n,"x",(function(){return q})),e.d(n,"B",(function(){return x})),e.d(n,"g",(function(){return C})),e.d(n,"r",(function(){return y})),e.d(n,"d",(function(){return S})),e.d(n,"q",(function(){return j})),e.d(n,"z",(function(){return T})),e.d(n,"i",(function(){return z})),e.d(n,"u",(function(){return D}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function u(t){return a["a"].get("products",{params:t})}function o(t){return a["a"].post("task_products",t)}function c(t){return a["a"].get("task_products/".concat(t))}function i(t,n){return a["a"].patch("task_products/".concat(t),n)}function s(t){return a["a"].delete("task_products/".concat(t))}function f(t){return a["a"].get("task_articles",{params:t})}function l(t){return a["a"].post("task_articles",t)}function d(t){return a["a"].get("task_articles/".concat(t))}function p(t,n){return a["a"].patch("task_articles/".concat(t),n)}function g(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function k(t){return a["a"].post("task_questionnaires",t)}function h(t){return a["a"].get("task_questionnaires/".concat(t))}function m(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function b(t){return a["a"].delete("task_questionnaires/".concat(t))}function v(t){return a["a"].get("task_game",{params:t})}function w(t){return a["a"].post("task_game",t)}function O(t){return a["a"].get("task_game/".concat(t))}function q(t,n){return a["a"].patch("task_game/".concat(t),n)}function x(t){return a["a"].post("tasks/audit",t)}function C(t){return a["a"].delete("task_game/".concat(t))}function y(t){return a["a"].get("task_links",{params:t})}function S(t){return a["a"].post("task_links",t)}function j(t){return a["a"].get("task_links/".concat(t))}function T(t,n){return a["a"].patch("task_links/".concat(t),n)}function z(t){return a["a"].delete("task_links/".concat(t))}function D(t,n){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}},f9f7:function(t,n,e){},fdc4:function(t,n,e){"use strict";var a=e("f9f7"),r=e.n(a);r.a}}]);