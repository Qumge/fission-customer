(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e6c790c"],{2086:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"displayContent"},[a("el-row",[a("el-col",{attrs:{span:9}},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("下单时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)]),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},model:{value:t.typeValue,callback:function(e){t.typeValue=e},expression:"typeValue"}},t._l(t.typeList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},model:{value:t.typeDetailValue,callback:function(e){t.typeDetailValue=e},expression:"typeDetailValue"}},t._l(t.typeDetailList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"inputBox fr"},[a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}},t._l(t.statesList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),"0"==t.stateValue?a("el-input",{attrs:{placeholder:"搜索商品名称",size:"small"},on:{change:t.searchValueChange},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]):t._e(),t._v(" "),"1"==t.stateValue?a("el-input",{attrs:{placeholder:"搜索订单编号",size:"small"},on:{change:t.searchValueChange},model:{value:t.listQuery.no,callback:function(e){t.$set(t.listQuery,"no",e)},expression:"listQuery.no"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]):t._e()],1)])],1),t._v(" "),a("div",{staticClass:"orderList"},[a("ul",t._l(t.tableData,(function(e,l){return a("li",{key:l},[a("el-row",{staticClass:"orderTitle"},[a("el-col",{attrs:{span:24}},[a("h3",[t._v("售后单编号："+t._s(e.no)+"\n                "),a("span",[t._v("下单时间："+t._s(e.created_at))]),t._v(" "),a("span",[t._v("售后类型："+t._s(1===e.data3?"退款":"退货退款"))])])])],1),t._v(" "),t._l(e.order_products,(function(l,s){return a("el-row",{key:s,staticClass:"orderMain"},[a("el-col",{staticClass:"orderName",attrs:{span:12}},[a("div",{staticClass:"orderImg"},[a("img",{attrs:{src:l.product.default_image}})]),t._v(" "),a("div",{staticClass:"orderNum"},[a("p",[t._v(t._s(l.product.name))]),t._v(" "),a("p",[t._v("X"+t._s(l.number))])])]),t._v(" "),a("el-col",{staticClass:"orderCoin orderStyle",attrs:{span:4}},[a("p",[t._v("￥"+t._s(l.view_amount)+"金币")])]),t._v(" "),a("el-col",{staticClass:"orderStyle",attrs:{span:4}},[t._v("\n              "+t._s(1==e.data8?"申请退款":"")+"\n              "+t._s(2==e.data8?"申请退货退款":"")+"\n              "+t._s(3==e.data8?"已同意，退款中":"")+"\n              "+t._s(4==e.data8?"已退款":"")+"\n              "+t._s(5==e.data8?"已同意，待退货":"")+"\n              "+t._s(6==e.data8?"已退货，待退款":"")+"\n              "+t._s(7==e.data8?"已退货退款":"")+"\n              "+t._s(8==e.data8?"已拒绝":"")+"\n              "+t._s(9==e.data8?"已取消":"")+"\n            ")]),t._v(" "),a("el-col",{staticClass:"orderStyle",attrs:{span:4}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.goDetail(e.id,e.data8)}}},[t._v("查看详情")]),t._v(" "),"1"===e.data8||"2"===e.data8?a("el-button",{attrs:{type:"text"}},[t._v("同意")]):t._e(),t._v(" "),"1"===e.data8||"2"===e.data8?a("el-button",{attrs:{type:"text"}},[t._v("拒绝")]):t._e(),t._v(" "),"6"===e.data8?a("el-button",{attrs:{type:"text"}},[t._v("已发货")]):t._e()],1)],1)}))],2)})),0)]),t._v(" "),t.total?a("div",{staticClass:"pagingBox"},[a("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)])},s=[],n=(a("28a5"),a("c5f6"),a("3a10")),r={data:function(){return{statesList:[{value:"0",label:"商品名称"},{value:"1",label:"售后单编号"}],typeList:[{value:"0",label:"全部类型"},{value:"1",label:"退款"},{value:"2",label:"退货退款"}],typeDetailList:[{value:"0",label:"全部类型"},{value:"1",label:"申请退款"},{value:"2",label:"申请退货退款"},{value:"3",label:"已同意，退款中"},{value:"4",label:"已退款"},{value:"5",label:"已同意，待退货"},{value:"6",label:"已退货，待退款"},{value:"7",label:"已退货退款"},{value:"8",label:"已拒绝"},{value:"9",label:"已取消"}],stateValue:"",typeValue:"",typeDetailValue:"",tableData:[],inputSearchContent:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,currentstatus:"",pickerOptions2:{shortcuts:[{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}]},value7:"",form:{name:"0909090",company:""},listQuery:{page:1,type:"Order::CoinOrder",name:"",no:"",status:"",company_id:"",date_from:"",date_to:"",per_page:10}}},watch:{$route:function(t,e){console.log(t)},stateValue:function(t){"0"===t&&(this.listQuery.no=""),"1"===t&&(this.listQuery.name="")}},created:function(){this.getInit()},methods:{getInit:function(){var t=this;this.listQuery.page=this.searchOption.pagination.currentPage,this.listQuery.status="apply_after";var e=this.listQuery;Object(n["c"])(e).then((function(e){console.log(e),t.tableData=e.data,t.total=Number(e.headers["x-total"])}))},handleCurrentChange:function(t){console.log(t)},handleSelectionChange:function(t){console.log(t)},inputSearch:function(){},goDetail:function(t,e){this.$router.push({path:"BusinessPlatformAfterSaleDetail?orderId=".concat(t,"&status=").concat(e)})},dataTimeChange:function(t){t[0]&&t[1]&&(this.listQuery.date_from=this.$formatDate(t[0].getTime()).split(" ")[0],this.listQuery.date_to=this.$formatDate(t[1].getTime()).split(" ")[0],this.getInit())},searchValueChange:function(){this.getInit()}}},i=r,o=(a("cb4a"),a("2877")),u=Object(o["a"])(i,l,s,!1,null,"003ac71a",null);e["default"]=u.exports},"32d8":function(t,e,a){},"3a10":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return i}));var l=a("b775");function s(t){return l["a"].get("orders",{params:t})}function n(t,e){return l["a"].post("orders/".concat(t,"/send"),e)}function r(t){return l["a"].get("orders/".concat(t))}function i(t){return l["a"].get("orders/".concat(t,"/express"))}},cb4a:function(t,e,a){"use strict";var l=a("32d8"),s=a.n(l);s.a}}]);