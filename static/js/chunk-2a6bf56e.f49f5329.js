(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a6bf56e"],{"07a0":function(t,e,a){},"183a":function(t,e,a){},"28b9":function(t,e,a){"use strict";var n=a("07a0"),i=a.n(n);i.a},"2f3b":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r}));var n=a("b775");function i(t){return n["a"].get("stat_records/tasks",{params:t})}function r(t){return n["a"].get("stat_records/orders",{params:t})}},4073:function(t,e,a){"use strict";var n=a("fc1d"),i=a.n(n);i.a},"5cc8":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return s}));var n=a("b775");function i(t){return n["a"].get("stat_records",{params:t})}function r(t){return n["a"].get("stat_records/companies",{params:t})}function s(t){return n["a"].get("stat_records/users",{params:t})}},"6d2c":function(t,e,a){},"817d":function(t,e,a){var n,i,r;(function(s,o){i=[e,a("313e")],n=o,r="function"===typeof n?n.apply(e,i):n,void 0===r||(t.exports=r)})(0,(function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var n=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],i={color:n,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:n[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:n},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",i)}else a("ECharts is not Loaded")}))},"96f2":function(t,e,a){"use strict";var n=a("d990"),i=a.n(n);i.a},a257:function(t,e,a){"use strict";var n=a("183a"),i=a.n(n);i.a},a5d5:function(t,e,a){"use strict";var n=a("6d2c"),i=a.n(n);i.a},a883:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"g",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u}));var n=a("b775");function i(t){return Object(n["a"])({url:"/companies",method:"post",data:t})}function r(t){return n["a"].get("/companies",{params:t})}function s(t){return n["a"].get("/companies/".concat(t))}function o(t,e){return Object(n["a"])({url:"/companies/".concat(t),method:"patch",data:e})}function l(t){return n["a"].delete("/companies/".concat(t))}function c(t){return n["a"].post("/companies/change_status",t)}function u(t){return n["a"].post("/companies/destroy",t)}},ba8f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component",attrs:{datatype:t.query}})],1)},i=[],r=a("db72"),s=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:"dashboard-main"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("span",{staticStyle:{marginRight:"30px"}},[t._v("统计时段")]),t._v(" "),a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},on:{change:t.dataTimeChange},model:{value:t.dataTime,callback:function(e){t.dataTime=e},expression:"dataTime"}}),t._v(" "),a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.stateValueChange},model:{value:t.stateValue,callback:function(e){t.stateValue=e},expression:"stateValue"}},[a("el-option",{attrs:{label:"所有商户",value:""}}),t._v(" "),t._l(t.statesList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],2),t._v(" "),"Task::GameTask"===t.listQuery.type?a("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.stateValue2Change},model:{value:t.stateValue2,callback:function(e){t.stateValue2=e},expression:"stateValue2"}},[a("el-option",{attrs:{label:"所有游戏",value:""}}),t._v(" "),t._l(t.statesList2,(function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}))],2):t._e()],1),t._v(" "),a("el-col",{staticStyle:{textAlign:"right"},attrs:{span:4}},[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("导出")])],1)],1),t._v(" "),a("h3",[t._v("\n      汇总数据"),a("span",[t._v("("+t._s(t.listQuery.date_from)+" ~ "+t._s(t.listQuery.date_to)+")")])]),t._v(" "),a("aggregate-data",{attrs:{aggregate:t.lineChartData},on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),a("h3",{staticClass:"history"},[t._v("\n      历史数据"),a("span",[t._v("（"+t._s(t.listQuery.date_from)+" ~ "+t._s(t.listQuery.date_to)+"）")])]),t._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"30px","margin-top":"20px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1),t._v(" "),a("h3",[t._v("\n      数据明细"),a("span",[t._v("("+t._s(t.listQuery.date_from)+" ~ "+t._s(t.listQuery.date_to)+")")])]),t._v(" "),a("Table",{attrs:{"table-datas":t.lineChartData,"table-total":t.tableTotal},on:{triggerpagination:t.getData}})],1)])},l=[],c=(a("ac6a"),a("28a5"),a("6b54"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-content",attrs:{gutter:20}},[a("el-col",{staticClass:"panel-left",attrs:{xs:24,sm:24,lg:24}},[t.aggregate?a("el-row",{staticClass:"panel-group",attrs:{gutter:80}},t._l(t.aggregate.chart_data,(function(e,n){return a("el-col",{key:n,staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.sum(e.data),duration:2600}})],1)])])})),1):t._e()],1)],1)}),u=[],d=a("ec1b"),h=a.n(d),f={components:{CountTo:h.a},props:{aggregate:{type:Object,required:!0}},data:function(){return{}},computed:{sum:function(t){return function(t){var e=0;return t.forEach((function(t,a){"number"===typeof t&&(e+=t)})),e}}},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},p=f,m=(a("a257"),a("2877")),b=Object(m["a"])(p,c,u,!1,null,"45e9d52c",null),g=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},y=[],_=(a("7f7f"),a("313e")),C=a.n(_),F=a("ed08"),D={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(F["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var w={mixins:[D],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,week:[]}},watch:{chartData:{deep:!0,handler:function(t){console.log(t),this.setOptions(t.chart_data)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},created:function(){},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),console.log(this.chartData),this.setOptions(this.chartData.chart_data)},setOptions:function(t){if(t){this.week=this.chartData.date_headers,console.log(this.week);var e=[],a=[];t.forEach((function(t,n){e.push({name:t.name,itemStyle:{normal:{color:t.color,lineStyle:{color:t.color,width:2}}},smooth:!1,type:"line",data:t.data,animationDuration:2800,animationEasing:"cubicInOut"}),a.push(t.name)})),this.chart.setOption({xAxis:{data:this.week,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:a},series:e})}},getDay:function(t){var e=new Date,a=e.getTime()+864e5*t;e.setTime(a);var n=e.getFullYear(),i=e.getMonth(),r=e.getDate();return i=this.doHandleMonth(i+1),r=this.doHandleMonth(r),n+"-"+i+"-"+r},doHandleMonth:function(t){var e=t;return 1===t.toString().length&&(e="0"+t),e}}},E=w,x=Object(m["a"])(E,v,y,!1,null,null,null),S=x.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.Table_DATA}},t._l(t.tableArr,(function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,"min-width":"180"}})})),1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:Number(t.tableTotal)},on:{"current-change":t.getList}})],1)},T=[],k={props:{tableDatas:{type:Object,required:!0},tableTotal:{type:String,required:!0}},data:function(){return{tableData:[],listQuery:{page:1,limit:20},total:100,Table_DATA:[],tableArr:[]}},watch:{tableDatas:{handler:function(t){this.editTableData(t)},deep:!0}},created:function(){console.log(this.tableDatas),this.editTableData(this.tableDatas)},methods:{getList:function(t){this.$emit("triggerpagination",t)},editTableData:function(t){if(t&&Array.isArray(t.table_data)&&t.table_data.length>0){var e=[];t.table_data[0].forEach((function(t,a){if(0===a){var n={prop:"data0",label:"日期"};e.push(n)}1===a&&t.forEach((function(t,a){var n={};n["prop"]="data".concat(a+1),n["label"]=t.name,e.push(n)}))})),console.log(e),this.tableArr=e;var a=[];t.table_data.forEach((function(t,e){var n={};t.forEach((function(t,e){0===e&&(n["data0"]=t),1===e&&t.forEach((function(t,e){n["data".concat(e+1)]=t.data}))})),a.push(n)})),console.log(a),this.Table_DATA=a}}}},V=k,$=(a("a5d5"),Object(m["a"])(V,A,T,!1,null,"6d03129c",null)),O=$.exports,B=a("5cc8"),z=a("a883"),L=a("2f3b"),j={name:"DashboardAdmin",components:{AggregateData:g,LineChart:S,Table:O},props:{datatype:{type:String,required:!0}},data:function(){return{lineChartData:{},pickerOptions2:{shortcuts:[{text:"今天",onClick:function(t){var e=new Date,a=new Date;t.$emit("pick",[a,e])}},{text:"昨天",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-864e5),t.$emit("pick",[a,e])}},{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"这个月",onClick:function(t){var e=i(),a=n();function n(){var t=new Date;return console.log(t),t.setDate(1),t}function i(){var t=new Date,e=t.getMonth(),a=++e,n=new Date(t.getFullYear(),a,1),i=864e5;return new Date(n-i)}t.$emit("pick",[a,e])}},{text:"上个月",onClick:function(t){var e=i(),a=n();function n(){var t=new Date,e=t.getFullYear(),a=t.getMonth();0===a&&(a=12,e-=1),a<10&&(a="0"+a);var n=e+"-"+a+"-01";return n=n.toString(),new Date(n)}function i(){var t=new Date,e=t.getFullYear(),a=t.getMonth();0===a&&(a=12,e-=1),a<10&&(a="0"+a);var n=new Date(e,a,0),i=e+"-"+a+"-"+n.getDate();return i=i.toString(),new Date(i)}t.$emit("pick",[a,e])}}]},dataTime:"",statesList:[],stateValue:"所有商户",stateValue2:"所有游戏",statesList2:[{value:"Game::Wheel",label:"大转盘"},{value:"Game::Scratch",label:"刮刮卡"},{value:"Game::Tiger",label:"老虎机"},{value:"Game::egg",label:"砸金蛋"}],obj:{1:"Task::ProductTask",2:"Task::GameTask",3:"Task::QuestionnaireTask",4:"Task::ArticleTask",platformGame:"Task::GameTask"},listQuery:{page:1,type:"",game_type:"",task_id:"",company_id:"",date_from:"",date_to:"",per_page:10},tableTotal:"0"}},created:function(){this.listQuery.type=this.obj[this.datatype];var t=new Date;t=t.getTime()-6048e5,this.listQuery.date_from=this.$formatDate(t).split(" ")[0],this.listQuery.date_to=this.$formatDate((new Date).getTime()).split(" ")[0],this.getData(),this.getCompaines()},methods:{getData:function(t){var e=this;this.listQuery.page=t||1;var a=this.listQuery;"transactionData"===this.datatype?Object(L["a"])(a).then((function(t){if(200===t.status){var a=["#E7BCF3","#A696F5","#32C5E9","#FFDB5C","#FF9F7F","#E7BCF3","#A696F5","#7D84EE","#89B6FC","#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#E062AE"],n=t.data.chart_data;n.forEach((function(t,e){t.color=a[e]})),t.data.chart_data=n,e.tableTotal=t.headers["x-total"],e.lineChartData=t.data}})):"merchantData"===this.datatype?Object(B["a"])(a).then((function(t){if(200===t.status){var a=["#E7BCF3","#A696F5","#32C5E9","#FFDB5C","#FF9F7F","#E7BCF3","#A696F5","#7D84EE","#89B6FC","#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#E062AE"],n=t.data.chart_data;n.forEach((function(t,e){t.color=a[e]})),t.data.chart_data=n,e.tableTotal=t.headers["x-total"],e.lineChartData=t.data}})):"userData"===this.datatype?Object(B["c"])(a).then((function(t){if(200===t.status){var a=["#E7BCF3","#A696F5","#32C5E9","#FFDB5C","#FF9F7F","#E7BCF3","#A696F5","#7D84EE","#89B6FC","#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#E062AE"],n=t.data.chart_data;n.forEach((function(t,e){t.color=a[e]})),t.data.chart_data=n,e.tableTotal=t.headers["x-total"],e.lineChartData=t.data}})):Object(B["b"])(a).then((function(t){if(200===t.status){var a=["#E7BCF3","#A696F5","#32C5E9","#FFDB5C","#FF9F7F","#E7BCF3","#A696F5","#7D84EE","#89B6FC","#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#FF9F7F","#E062AE"],n=t.data.chart_data;n.forEach((function(t,e){t.color=a[e]})),console.log(t.headers["x-total"]),e.tableTotal=t.headers["x-total"],t.data.chart_data=n,e.lineChartData=t.data}}))},handleSetLineChartData:function(t){this.lineChartData=this.lineChartData},getCompaines:function(){var t=this,e={page:1,status:"",search:"",per_page:1e5};Object(z["e"])(e).then((function(e){200===e.status&&(t.statesList=e.data)}))},dataTimeChange:function(t){t[0]&&t[1]&&(this.listQuery.date_from=this.$formatDate(t[0].getTime()).split(" ")[0],this.listQuery.date_to=this.$formatDate(t[1].getTime()).split(" ")[0],this.getData())},stateValueChange:function(t){this.listQuery.company_id=t,this.getData()},stateValue2Change:function(t){this.listQuery.game_type=t,this.getData()}}},q=j,R=(a("28b9"),Object(m["a"])(q,o,l,!1,null,"2c3c59aa",null)),M=R.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:" clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v("\n      Your roles:\n      "),t._l(t.roles,(function(e){return a("span",{key:e,staticClass:"pan-info-roles"},[t._v(t._s(e))])}))],2),t._v(" "),a("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),t._v(" "),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},N=[],G=a("3cbc"),H=a("f168"),P={name:"DashboardEditor",components:{PanThumb:G["a"],GithubCorner:H["a"]},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(r["a"])({},Object(s["b"])(["name","avatar","roles"]))},Y=P,J=(a("4073"),Object(m["a"])(Y,Q,N,!1,null,"1dd7232c",null)),W=J.exports,Z={name:"Dashboard",components:{adminDashboard:M,editorDashboard:W},props:{query:{type:String,required:!0}},data:function(){return{currentRole:"adminDashboard"}},computed:Object(r["a"])({},Object(s["b"])(["roles"])),created:function(){}},I=Z,K=Object(m["a"])(I,n,i,!1,null,null,null);e["default"]=K.exports},d990:function(t,e,a){},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var o=void 0,l=0;l<i.length&&(!r||!s);l++)o=i[l],e.requestAnimationFrame=r=r||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout((function(){t(e+a)}),a);return n=e+a,i},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var l=Object.create(o.computed||null);Object.keys(n).forEach((function(t){var e=n[t];l[t]=function(){return e}})),o.computed=l}return{esModule:i,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},f168:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},i=[],r=(a("96f2"),a("2877")),s={},o=Object(r["a"])(s,n,i,!1,null,"09fe1acc",null);e["a"]=o.exports},fc1d:function(t,e,a){}}]);