(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53a6143f","chunk-600fd891"],{"06e1":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"data-prize"},[a("h3",{staticClass:"title"},[t._v("数据")]),t._v(" "),a("div",{staticClass:"prize-right"},[a("el-row",[a("el-col",{staticClass:"dataItme",attrs:{span:4}},[a("h3",[t._v("中奖人数")]),t._v(" "),a("h3",{staticStyle:{"padding-top":"0px !important"}},[t._v(t._s(t.prize.number))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:4}},[a("h3",[t._v("中奖金币数")]),t._v(" "),a("h3",{staticStyle:{"padding-top":"0px !important"}},[t._v(t._s(t.prize.coin))])]),t._v(" "),a("el-col",{staticClass:"dataItme",attrs:{span:4}},[a("h3",[t._v("中奖商品数")]),t._v(" "),a("h3",{staticStyle:{"padding-top":"0px !important"}},[t._v(t._s(t.prize.product_number))])])],1)],1)]),t._v(" "),a("div",{staticClass:"prize-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"prize",label:"奖品"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(null===n.row.prize.product?n.row.prize.coin+"金币":n.row.prize.product.name)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"user.nick_name",label:"用户"}}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"中奖时间"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(n.row.created_at)+"\n        ")]}}])})],1),t._v(" "),t.total?a("div",{staticClass:"pagingBox"},[a("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)],1)},r=[],u=(a("c5f6"),a("7b94")),i=a("ed08"),c=a("f8a4"),o={components:{TopTitle:u["a"]},data:function(){return{title:"奖品管理",tableData:[{data1:"data1",data2:"data2",data3:"1",data4:"1573574564524",data5:"data5",data6:"data6",id:1}],prize:{coin:0,number:0,product_number:0},searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100}},created:function(){this.getList(),this.getInit()},methods:{formatDate:i["d"],handleCurrentChange:function(t){},getList:function(){var t=this,n=this.$route.query.id;Object(c["t"])(n).then((function(n){200===n.status&&(t.prize=n.data)}))},getInit:function(){var t=this,n={page:this.searchOption.pagination.currentPage,pre_page:15},a=this.$route.query.id;Object(c["s"])(a,n).then((function(n){200===n.status&&(t.tableData=n.data,t.total=Number(n.headers["x-total"]))}))}}},s=o,d=(a("2965"),a("2877")),p=Object(d["a"])(s,e,r,!1,null,"373fd1fe",null);n["default"]=p.exports},"1b29":function(t,n,a){"use strict";var e=a("3812"),r=a.n(e);r.a},2965:function(t,n,a){"use strict";var e=a("e9e9"),r=a.n(e);r.a},3812:function(t,n,a){},"7b94":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],u={props:{title:{type:String,required:!0}},data:function(){return{}}},i=u,c=(a("1b29"),a("2877")),o=Object(c["a"])(i,e,r,!1,null,"b4ebadd8",null);n["a"]=o.exports},e9e9:function(t,n,a){},f8a4:function(t,n,a){"use strict";a.d(n,"x",(function(){return r})),a.d(n,"v",(function(){return u})),a.d(n,"e",(function(){return i})),a.d(n,"u",(function(){return c})),a.d(n,"C",(function(){return o})),a.d(n,"j",(function(){return s})),a.d(n,"l",(function(){return d})),a.d(n,"a",(function(){return p})),a.d(n,"k",(function(){return l})),a.d(n,"y",(function(){return f})),a.d(n,"f",(function(){return _})),a.d(n,"p",(function(){return g})),a.d(n,"c",(function(){return k})),a.d(n,"o",(function(){return h})),a.d(n,"A",(function(){return m})),a.d(n,"h",(function(){return v})),a.d(n,"n",(function(){return b})),a.d(n,"b",(function(){return z})),a.d(n,"m",(function(){return C})),a.d(n,"z",(function(){return w})),a.d(n,"D",(function(){return x})),a.d(n,"g",(function(){return y})),a.d(n,"r",(function(){return q})),a.d(n,"d",(function(){return O})),a.d(n,"q",(function(){return S})),a.d(n,"B",(function(){return j})),a.d(n,"i",(function(){return D})),a.d(n,"w",(function(){return I})),a.d(n,"t",(function(){return T})),a.d(n,"s",(function(){return $}));var e=a("b775");function r(t){return e["a"].get("task_products",{params:t})}function u(t){return e["a"].get("products",{params:t})}function i(t){return e["a"].post("task_products",t)}function c(t){return e["a"].get("task_products/".concat(t))}function o(t,n){return e["a"].patch("task_products/".concat(t),n)}function s(t){return e["a"].delete("task_products/".concat(t))}function d(t){return e["a"].get("task_articles",{params:t})}function p(t){return e["a"].post("task_articles",t)}function l(t){return e["a"].get("task_articles/".concat(t))}function f(t,n){return e["a"].patch("task_articles/".concat(t),n)}function _(t){return e["a"].delete("task_articles/".concat(t))}function g(t){return e["a"].get("task_questionnaires",{params:t})}function k(t){return e["a"].post("task_questionnaires",t)}function h(t){return e["a"].get("task_questionnaires/".concat(t))}function m(t,n){return e["a"].patch("task_questionnaires/".concat(t),n)}function v(t){return e["a"].delete("task_questionnaires/".concat(t))}function b(t){return e["a"].get("task_game",{params:t})}function z(t){return e["a"].post("task_game",t)}function C(t){return e["a"].get("task_game/".concat(t))}function w(t,n){return e["a"].patch("task_game/".concat(t),n)}function x(t){return e["a"].post("tasks/audit",t)}function y(t){return e["a"].delete("task_game/".concat(t))}function q(t){return e["a"].get("task_links",{params:t})}function O(t){return e["a"].post("task_links",t)}function S(t){return e["a"].get("task_links/".concat(t))}function j(t,n){return e["a"].patch("task_links/".concat(t),n)}function D(t){return e["a"].delete("task_links/".concat(t))}function I(t,n){return e["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function T(t){return e["a"].get("task_game/".concat(t,"/prizes"))}function $(t,n){return e["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}}}]);