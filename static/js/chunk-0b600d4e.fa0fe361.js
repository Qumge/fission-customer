(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b600d4e","chunk-600fd891"],{"09f4":function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),Math.easeInOutQuad=function(t,n,e,r){return t/=r/2,t<1?e/2*t*t+n:(t--,-e/2*(t*(t-2)-1)+n)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,n,e){var u=i(),o=t-u,s=20,c=0;n="undefined"===typeof n?500:n;var l=function t(){c+=s;var i=Math.easeInOutQuad(c,u,o,n);a(i),c<n?r(t):e&&"function"===typeof e&&e()};l()}},"1b29":function(t,n,e){"use strict";var r=e("3812"),a=e.n(r);a.a},3812:function(t,n,e){},"407e":function(t,n,e){"use strict";var r=e("8c96"),a=e.n(r);a.a},"5ad2":function(t,n,e){"use strict";e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return o})),e.d(n,"r",(function(){return s})),e.d(n,"g",(function(){return c})),e.d(n,"k",(function(){return l})),e.d(n,"j",(function(){return d})),e.d(n,"p",(function(){return p})),e.d(n,"a",(function(){return f})),e.d(n,"d",(function(){return m})),e.d(n,"m",(function(){return _})),e.d(n,"h",(function(){return g})),e.d(n,"q",(function(){return v})),e.d(n,"e",(function(){return h})),e.d(n,"l",(function(){return b})),e.d(n,"n",(function(){return y})),e.d(n,"o",(function(){return w}));var r=e("b775");function a(){return r["a"].get("addresses")}function i(t){return r["a"].post("addresses",t)}function u(t,n){return r["a"].patch("addresses/".concat(t),n)}function o(t){return r["a"].delete("addresses/".concat(t))}function s(t,n){return r["a"].post("addresses/".concat(t,"/set_tag"),n)}function c(t){return r["a"].post("cash_rules",t)}function l(t){return r["a"].get("cash",{params:t})}function d(){return r["a"].get("cash_rules")}function p(){return r["a"].get("share_rules")}function f(t){return r["a"].post("share_rules",t)}function m(t){return r["a"].post("cash/audit",t)}function _(t){return r["a"].get("games/show_game",{params:t})}function g(t){return r["a"].post("games",t)}function v(t){return r["a"].get("sign_rules",{params:t})}function h(t){return r["a"].post("sign_rules",t)}function b(t){return r["a"].get("games/data",{params:t})}function y(t){return r["a"].get("games/prizes",{params:t})}function w(t){return r["a"].get("games/prize_logs",{params:t})}},"7b94":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},a=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},u=i,o=(e("1b29"),e("2877")),s=Object(o["a"])(u,r,a,!1,null,"b4ebadd8",null);n["a"]=s.exports},"8c96":function(t,n,e){},9443:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"displayContent"},[e("div",{staticClass:"outer_box"},[e("div",{staticClass:"inner_box"},[e("h4",[t._v("中奖数")]),t._v(" "),e("p",[t._v(t._s(t.prize.number))])]),t._v(" "),e("div",{staticClass:"inner_box"},[e("h4",[t._v("游戏消耗金币")]),t._v(" "),e("p",[t._v(t._s(t.prize.coin))])]),t._v(" "),e("div",{staticClass:"inner_box"},[e("h4",[t._v("中奖消耗金币")]),t._v(" "),e("p",[t._v(t._s(t.prize.product_number))])])]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"coin",label:"中奖金币","min-width":"180"}}),t._v(" "),e("el-table-column",{attrs:{prop:"user.nick_name",label:"用户","min-width":"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"created_at",label:"中奖时间","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n          "+t._s(n.row.created_at)+"\n        ")]}}])})],1),t._v(" "),e("div",{staticClass:"pagingBox"},[e("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(n){return t.$set(t.listQuery,"page",n)},"update:limit":function(n){return t.$set(t.listQuery,"limit",n)},pagination:t.getLogs}})],1)],1)],1)},a=[],i=e("7b94"),u=e("333d"),o=e("5ad2"),s={components:{TopTitle:i["a"],Pagination:u["a"]},data:function(){return{title:"",tableData:[],listQuery:{page:1,limit:10},type:"",total:0,prize:{coin:"",number:"",product_number:""}}},created:function(){var t={1:"大转盘",2:"砸金蛋",3:"老虎机"};this.title="".concat(t[this.$route.query.type],"-奖品管理"),this.type="1"===this.$route.query.type?"Game::Wheel":"2"===this.afferentdata.type?"Game::Egg":"Game::Tiger",this.getList(),this.getLogs()},methods:{getList:function(){var t=this,n={type:this.type};Object(o["n"])(n).then((function(n){console.log(n),200===n.status&&(t.prize=n.data)}))},getLogs:function(){var t=this,n={type:this.type};Object(o["o"])(n).then((function(n){console.log(n),200===n.status&&(t.tableData=n.data)}))}}},c=s,l=(e("407e"),e("2877")),d=Object(l["a"])(c,r,a,!1,null,"10d027be",null);n["default"]=d.exports}}]);