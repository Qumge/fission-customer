(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6001534c"],{1514:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"displayContent"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"user_name",label:"收益人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"share_name",label:"分享人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"channel",label:"渠道"}}),t._v(" "),e("el-table-column",{attrs:{prop:"coin",label:"金币数"}})],1),t._v(" "),t.total?e("div",{staticClass:"pagingBox"},[e("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},o=[],r=(e("c5f6"),e("ac6a"),e("a3f3")),i=e("5f87"),s={data:function(){return{tableData:[],searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100}},watch:{$route:function(t,a){var e=this;console.log(t),this.currentstatus=this.$route.params.id,this.tableData.forEach((function(t){t.data3=e.$route.params.id}))}},created:function(){var t=Object(i["a"])();this.company_id=JSON.parse(t).id,console.log(this.company_id,t),this.getlist()},methods:{getlist:function(){var t=this;console.log(this.company_id);var a={company_id:"",page:this.searchOption.pagination.currentPage,per_page:15};Object(r["a"])(a).then((function(a){console.log(a),t.tableData=a.data,t.total=Number(a.headers["x-total"])}))},handleCurrentChange:function(t){console.log(t),this.searchOption.pagination.currentPage=t,this.getlist()}}},c=s,l=(e("7ef0"),e("2877")),u=Object(l["a"])(c,n,o,!1,null,"cd8929c6",null);a["default"]=u.exports},"7ef0":function(t,a,e){"use strict";var n=e("9917"),o=e.n(n);o.a},9917:function(t,a,e){},a3f3:function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"a",(function(){return r}));var n=e("b775");function o(t){return n["a"].get("share_logs",{params:t})}function r(t){return n["a"].get("coin_logs",{params:t})}}}]);