(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d0957a6"],{"1b29":function(t,n,e){"use strict";var a=e("3812"),r=e.n(a);r.a},"2cea":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"EditMain"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"标题"}},[e("el-input",{staticStyle:{width:"600px"},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"链接"}},[e("el-input",{staticStyle:{width:"600px"},model:{value:t.form.share_link,callback:function(n){t.$set(t.form,"share_link",n)},expression:"form.share_link"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"任务时间"}},[e("el-col",{attrs:{span:5}},[e("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.valid_from,callback:function(n){t.$set(t.form,"valid_from",n)},expression:"form.valid_from"}})],1),t._v(" "),e("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.valid_to,callback:function(n){t.$set(t.form,"valid_to",n)},expression:"form.valid_to"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"金币总数"}},[e("el-input",{staticStyle:{width:"600px"},model:{value:t.form.coin,callback:function(n){t.$set(t.form,"coin",n)},expression:"form.coin"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.addStore}},[t._v("提交审核")]),t._v(" "),e("el-button",{on:{click:t.goBack}},[t._v("取消")]),t._v(" "),e("el-button",[t._v("预览")])],1)],1)],1)],1)},r=[],o=(e("7f7f"),e("7b94")),i=e("f8a4"),c=e("5f87"),s={components:{TopTitle:o["a"]},data:function(){return{title:"",dialogTableVisible:!1,form:{name:"",share_link:"",coin:"",valid_from:"",valid_to:""}}},created:function(){this.form.valid_from=new Date,this.form.valid_to=this.fun_date(7);var t=Object(c["a"])();this.company_id=t.id,this.getDetails()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.id){this.title="编辑商品任务";var n=this.$route.query.id;Object(i["q"])(n).then((function(n){console.log(n),t.form=n.data}))}else this.title="添加商品任务"},addStore:function(){var t=this;if(void 0===this.$route.query.id){var n=new FormData;n.append("name",this.form.name),n.append("share_link",this.form.share_link),n.append("coin",this.form.coin),n.append("valid_from",this.form.valid_from),n.append("valid_to",this.form.valid_to),Object(i["d"])(n).then((function(n){console.log(n),t.$message({message:"添加成功",type:"success"}),t.$router.go(-1)}))}else{var e=this.$route.query.id,a=new FormData;a.append("name",this.form.name),a.append("share_link",this.form.share_link),a.append("coin",this.form.coin),a.append("valid_from",this.form.valid_from),a.append("valid_to",this.form.valid_to),Object(i["y"])(e,a).then((function(n){console.log(n),t.$message({message:"修改成功",type:"success"}),t.$router.go(-1)}))}},goBack:function(){this.$router.go(-1)},fun_date:function(t){var n=new Date,e=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();console.log(e);var a=new Date(n);a.setDate(n.getDate()+t);var r=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return console.log(r),r}}},u=s,l=(e("ee64"),e("2877")),f=Object(l["a"])(u,a,r,!1,null,"a2035f2e",null);n["default"]=f.exports},3812:function(t,n,e){},6340:function(t,n,e){},"7b94":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},i=o,c=(e("1b29"),e("2877")),s=Object(c["a"])(i,a,r,!1,null,"b4ebadd8",null);n["a"]=s.exports},ee64:function(t,n,e){"use strict";var a=e("6340"),r=e.n(a);r.a},f8a4:function(t,n,e){"use strict";e.d(n,"u",(function(){return r})),e.d(n,"t",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"s",(function(){return c})),e.d(n,"z",(function(){return s})),e.d(n,"j",(function(){return u})),e.d(n,"l",(function(){return l})),e.d(n,"a",(function(){return f})),e.d(n,"k",(function(){return d})),e.d(n,"v",(function(){return m})),e.d(n,"f",(function(){return p})),e.d(n,"p",(function(){return _})),e.d(n,"c",(function(){return v})),e.d(n,"o",(function(){return h})),e.d(n,"x",(function(){return k})),e.d(n,"h",(function(){return g})),e.d(n,"n",(function(){return b})),e.d(n,"b",(function(){return y})),e.d(n,"m",(function(){return w})),e.d(n,"w",(function(){return $})),e.d(n,"A",(function(){return q})),e.d(n,"g",(function(){return x})),e.d(n,"r",(function(){return D})),e.d(n,"d",(function(){return S})),e.d(n,"q",(function(){return j})),e.d(n,"y",(function(){return O})),e.d(n,"i",(function(){return T}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function o(t){return a["a"].get("products",{params:t})}function i(t){return a["a"].post("task_products",t)}function c(t){return a["a"].get("task_products/".concat(t))}function s(t,n){return a["a"].patch("task_products/".concat(t),n)}function u(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function f(t){return a["a"].post("task_articles",t)}function d(t){return a["a"].get("task_articles/".concat(t))}function m(t,n){return a["a"].patch("task_articles/".concat(t),n)}function p(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function v(t){return a["a"].post("task_questionnaires",t)}function h(t){return a["a"].get("task_questionnaires/".concat(t))}function k(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function g(t){return a["a"].delete("task_questionnaires/".concat(t))}function b(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function $(t,n){return a["a"].patch("task_game/".concat(t),n)}function q(t){return a["a"].post("tasks/audit",t)}function x(t){return a["a"].delete("task_game/".concat(t))}function D(t){return a["a"].get("task_links",{params:t})}function S(t){return a["a"].post("task_links",t)}function j(t){return a["a"].get("task_links/".concat(t))}function O(t,n){return a["a"].patch("task_links/".concat(t),n)}function T(t){return a["a"].delete("task_links/".concat(t))}}}]);