(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f2f3902","chunk-600fd891"],{"1b29":function(t,n,e){"use strict";var a=e("3812"),r=e.n(a);r.a},3812:function(t,n,e){},"7b94":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},o=i,s=(e("1b29"),e("2877")),c=Object(s["a"])(o,a,r,!1,null,"b4ebadd8",null);n["a"]=c.exports},"8c76":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"EditMain"},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"任务时间"}},[e("el-col",{attrs:{span:5}},[e("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期",disabled:""},model:{value:t.form.valid_from,callback:function(n){t.$set(t.form,"valid_from",n)},expression:"form.valid_from"}})],1),t._v(" "),e("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-date-picker",{staticStyle:{},attrs:{type:"date",placeholder:"选择日期",disabled:""},model:{value:t.form.valid_to,callback:function(n){t.$set(t.form,"valid_to",n)},expression:"form.valid_to"}})],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"金币总数"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{disabled:""},model:{value:t.form.coin,callback:function(n){t.$set(t.form,"coin",n)},expression:"form.coin"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"一次游戏消耗金币","label-width":"150px"}},[e("el-input",{staticStyle:{width:"600px"},attrs:{disabled:""},model:{value:t.form.game.coin,callback:function(n){t.$set(t.form.game,"coin",n)},expression:"form.game.coin"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"中奖设置"}},[e("div",{staticClass:"prizeList"},[e("el-row",[e("el-col",{attrs:{span:5}},[t._v("\n              奖品\n            ")]),t._v(" "),e("el-col",{attrs:{span:5}},[t._v("\n              中奖概率\n            ")])],1),t._v(" "),t._l(t.form.game.prizes,(function(n,a){return e("div",{key:a,staticClass:"gameList"},[null!==n.product?e("el-row",[e("el-col",{attrs:{span:5}},[t._v("\n                实物："+t._s(n.product.name)+"\n              ")]),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-input",{staticStyle:{width:"100px"},attrs:{disabled:""},model:{value:n.probability,callback:function(e){t.$set(n,"probability",e)},expression:"gameItem.probability"}})],1)],1):t._e(),t._v(" "),null===n.product?e("el-row",[e("el-col",{attrs:{span:5}},[t._v("\n                金币："+t._s(n.coin)+"\n              ")]),t._v(" "),e("el-col",{attrs:{span:5}},[e("el-input",{staticStyle:{width:"100px"},attrs:{disabled:""},model:{value:n.probability,callback:function(e){t.$set(n,"probability",e)},expression:"gameItem.probability"}})],1)],1):t._e()],1)}))],2)]),t._v(" "),e("el-form-item",{attrs:{label:"游戏说明"}},[e("el-input",{staticStyle:{width:"600px",resize:"none"},attrs:{type:"textarea",rows:4,disabled:""},model:{value:t.form.game.desc,callback:function(n){t.$set(t.form.game,"desc",n)},expression:"form.game.desc"}})],1),t._v(" "),e("el-form-item",[1==t.type||4==t.type?e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.SingleOperation(1)}}},[t._v("通过")]):t._e(),t._v(" "),1==t.type?e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.SingleOperation(2)}}},[t._v("拒绝")]):t._e(),t._v(" "),2==t.type?e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.SingleOperation(3)}}},[t._v("结束")]):t._e(),t._v(" "),e("el-button",{on:{click:t.shareDetail}},[t._v("分享日志详情")]),t._v(" "),e("el-button",{on:{click:t.back}},[t._v("返回")])],1)],1)],1)],1)},r=[],i=e("7b94"),o=e("f8a4"),s={components:{TopTitle:i["a"]},data:function(){return{activeName:"second",title:"查看游戏任务",form:{coin:"",valid_from:"",valid_to:"",data4:100,game:{desc:"",prizes:[],cost:""}},type:""}},created:function(){this.type=this.$route.query.type,this.getDetails()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.id){var n=this.$route.query.id;Object(o["m"])(n).then((function(n){200===n.status&&(t.form=n.data)}))}},back:function(){this.$router.go(-1)},SingleOperation:function(t){var n=this;if(void 0!==this.$route.query.id){var e=[];if(e.push(this.$route.query.id),1===t){var a="该任务将审核通过, 是否继续?";this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="success",a=new FormData;a.append("ids",JSON.stringify(e)),a.append("status",t),a.append("reason",""),Object(o["D"])(a).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.$router.go(-1))}))}))}else if(2===t||3===t){var r=2===t?"请输入拒绝原因":"请输入结束原因";this.$prompt(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(a){var r=a.value,i=2===t?"failed":"overtime",s=new FormData;s.append("ids",JSON.stringify(e)),s.append("status",i),s.append("reason",r),Object(o["D"])(s).then((function(t){200===t.status&&(n.$message({message:"操作成功",type:"success"}),n.$router.go(-1))}))})).catch((function(){}))}}},shareDetail:function(){this.$router.push({path:"/shareLog?id=".concat(this.$route.query.id)})}}},c=s,u=(e("ae8a"),e("2877")),l=Object(u["a"])(c,a,r,!1,null,"1b91e181",null);n["default"]=l.exports},a725:function(t,n,e){},ae8a:function(t,n,e){"use strict";var a=e("a725"),r=e.n(a);r.a},f8a4:function(t,n,e){"use strict";e.d(n,"x",(function(){return r})),e.d(n,"v",(function(){return i})),e.d(n,"e",(function(){return o})),e.d(n,"u",(function(){return s})),e.d(n,"C",(function(){return c})),e.d(n,"j",(function(){return u})),e.d(n,"l",(function(){return l})),e.d(n,"a",(function(){return f})),e.d(n,"k",(function(){return p})),e.d(n,"y",(function(){return d})),e.d(n,"f",(function(){return m})),e.d(n,"p",(function(){return _})),e.d(n,"c",(function(){return v})),e.d(n,"o",(function(){return b})),e.d(n,"A",(function(){return k})),e.d(n,"h",(function(){return g})),e.d(n,"n",(function(){return h})),e.d(n,"b",(function(){return y})),e.d(n,"m",(function(){return $})),e.d(n,"z",(function(){return x})),e.d(n,"D",(function(){return w})),e.d(n,"g",(function(){return q})),e.d(n,"r",(function(){return S})),e.d(n,"d",(function(){return O})),e.d(n,"q",(function(){return D})),e.d(n,"B",(function(){return T})),e.d(n,"i",(function(){return C})),e.d(n,"w",(function(){return z})),e.d(n,"t",(function(){return j})),e.d(n,"s",(function(){return B}));var a=e("b775");function r(t){return a["a"].get("task_products",{params:t})}function i(t){return a["a"].get("products",{params:t})}function o(t){return a["a"].post("task_products",t)}function s(t){return a["a"].get("task_products/".concat(t))}function c(t,n){return a["a"].patch("task_products/".concat(t),n)}function u(t){return a["a"].delete("task_products/".concat(t))}function l(t){return a["a"].get("task_articles",{params:t})}function f(t){return a["a"].post("task_articles",t)}function p(t){return a["a"].get("task_articles/".concat(t))}function d(t,n){return a["a"].patch("task_articles/".concat(t),n)}function m(t){return a["a"].delete("task_articles/".concat(t))}function _(t){return a["a"].get("task_questionnaires",{params:t})}function v(t){return a["a"].post("task_questionnaires",t)}function b(t){return a["a"].get("task_questionnaires/".concat(t))}function k(t,n){return a["a"].patch("task_questionnaires/".concat(t),n)}function g(t){return a["a"].delete("task_questionnaires/".concat(t))}function h(t){return a["a"].get("task_game",{params:t})}function y(t){return a["a"].post("task_game",t)}function $(t){return a["a"].get("task_game/".concat(t))}function x(t,n){return a["a"].patch("task_game/".concat(t),n)}function w(t){return a["a"].post("tasks/audit",t)}function q(t){return a["a"].delete("task_game/".concat(t))}function S(t){return a["a"].get("task_links",{params:t})}function O(t){return a["a"].post("task_links",t)}function D(t){return a["a"].get("task_links/".concat(t))}function T(t,n){return a["a"].patch("task_links/".concat(t),n)}function C(t){return a["a"].delete("task_links/".concat(t))}function z(t,n){return a["a"].get("task_questionnaires/".concat(t,"/reply"),{params:n})}function j(t){return a["a"].get("task_game/".concat(t,"/prizes"))}function B(t,n){return a["a"].get("task_game/".concat(t,"/prize_logs"),{params:n})}}}]);