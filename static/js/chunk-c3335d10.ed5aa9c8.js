(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3335d10"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var s=o(),r=t-s,c=20,l=0;e="undefined"===typeof e?500:e;var u=function t(){l+=c;var o=Math.easeInOutQuad(l,s,r,e);i(o),l<e?a(t):n&&"function"===typeof n&&n()};u()}},"11c8":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"k",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return g})),n.d(e,"f",(function(){return h})),n.d(e,"l",(function(){return m}));var a=n("b775");function i(t){return a["a"].get("categories",{params:t})}function o(t){return a["a"].post("categories",t)}function s(t){return a["a"].delete("categories/".concat(t))}function r(t,e){return a["a"].patch("categories/".concat(t),e)}function c(t){return a["a"].get("products",{params:t})}function l(t){return a["a"].post("products/destroy",t)}function u(t){return a["a"].post("products",t)}function d(t){return a["a"].delete("products/".concat(t))}function f(t){return a["a"].get("products/".concat(t))}function p(t,e){return a["a"].patch("products/".concat(t),e)}function g(t){return a["a"].post("products/audit",t)}function h(t){return a["a"].post("products/change_status",t)}function m(){return a["a"].get("qiniu/token")}},"1b29":function(t,e,n){"use strict";var a=n("3812"),i=n.n(a);i.a},2341:function(t,e,n){"use strict";var a=n("2de7"),i=n.n(a);i.a},"2de7":function(t,e,n){},"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3812:function(t,e,n){},"393d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-container"},[n("el-row",[n("div",{staticClass:"inputBox fr"},[n("el-input",{attrs:{placeholder:"搜索任务名称",size:"small"},model:{value:t.listQuery.condition1,callback:function(e){t.$set(t.listQuery,"condition1",e)},expression:"listQuery.condition1"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})])],1)]),t._v(" "),2===t.child.tableType?n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data.filter((function(e){return!t.listQuery.condition1||e.name.includes(t.listQuery.condition1)}))},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{prop:"name",label:t.child.firstColumnName,"min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"coin",label:"金币数",sortable:"custom","class-name":t.getSortClass("coin"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"number",label:"领取量",sortable:"custom","class-name":t.getSortClass("number"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"任务时间","min-width":"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.valid_from)+" - "+t._s(e.row.valid_to)+"\n      ")]}}],null,!1,2406984272)}),t._v(" "),n("el-table-column",{attrs:{prop:"data5",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id!=t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.id==t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,3903819170)})],1):t._e(),t._v(" "),1===t.child.tableType?n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data.filter((function(e){return!t.listQuery.condition1||e.name.includes(t.listQuery.condition1)}))},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{prop:"data1",label:t.child.firstColumnName,"min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"data2",label:"阅读数",sortable:"custom","class-name":t.getSortClass("data5"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"data3",label:"分享数",sortable:"custom","class-name":t.getSortClass("data6"),"min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"data4",label:"帖子发布时间","min-width":"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"data5",width:"230",label:"选择","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.id!=t.child.taskId?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id)}}},[t._v("选择")]):t._e(),t._v(" "),e.row.id==t.child.taskId?n("el-button",{staticStyle:{color:"#ccc"},attrs:{type:"text",size:"small"}},[t._v("已选择")]):t._e()]}}],null,!1,3903819170)})],1):t._e(),t._v(" "),t.total?n("div",{staticClass:"pagingBox"},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticStyle:{padding:"0"},attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1):t._e()],1)},i=[],o=(n("55dd"),n("c5f6"),n("db72")),s=n("333d"),r=n("f8a4"),c={components:{Pagination:s["a"]},props:{child:{type:Object,required:!0}},data:function(){return{search:"",listQuery:{page:1,limit:20,condition1:void 0,title:void 0,type:void 0,sort:"+id"},data:[],total:100,currentId:""}},watch:{child:{handler:function(t,e){console.log(t,e),this.getList()},deep:!0}},created:function(){console.log(this.child),this.getList()},methods:{getList:function(t){var e=Object(o["a"])({page:this.listQuery.page,per_page:15,company_id:"",status:"success",type:""},t);"0"===this.child.type?this.getProductList(e):"1"===this.child.type?this.getGameList(e):"2"===this.child.type?this.getInvestList(e):"3"===this.child.type&&this.getArticleList(e),console.log(this.listQuery)},getProductList:function(t){var e=this;Object(r["u"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getGameList:function(t){var e=this;Object(r["n"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getInvestList:function(t){var e=this;Object(r["p"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},getArticleList:function(t){var e=this;Object(r["l"])(t).then((function(t){console.log(t),e.data=t.data,e.total=Number(t.headers["x-total"])}))},SingleOperation:function(t){this.currentId=t,this.$emit("updataId",t)},handleCurrentChange:function(t){console.log(t)},sortChange:function(t){var e=t.prop,n=t.order;e&&this.sortByID(n,e)},sortByID:function(t,e){this.listQuery.sort="ascending"===t?"+".concat(e):"-".concat(e),console.log(t,e);var n={sorts:JSON.stringify([{column:e,sort:"descending"===t?"desc":"asc"}])};this.getList(n)},getSortClass:function(t){console.log(t);var e=this.listQuery.sort;return e==="+".concat(t)?"ascending":e==="-".concat(t)?"descending":""}}},l=c,u=(n("d1b0"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"80032310",null);e["a"]=d.exports},"404f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"displayContent"},[n("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,"label-width":"180px"}},["1"!==t.type?n("el-form-item",{attrs:{label:"任务类型",prop:"goodsClassifyTwo"}},[n("el-select",{staticClass:"statusBarBtn",attrs:{size:"small",placeholder:"请选择"},on:{change:t.changeType},model:{value:t.formData.goodsClassifyTwo,callback:function(e){t.$set(t.formData,"goodsClassifyTwo",e)},expression:"formData.goodsClassifyTwo"}},t._l(t.statesList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),t._v(" "),"1"!==t.type?n("el-form-item",{attrs:{label:"选择任务",prop:"brandName"}},[n("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:t.triggerDialog}},[t._v("从任务库中选择")])],1):t._e(),t._v(" "),"1"===t.type?n("el-form-item",{attrs:{label:"选择帖子",prop:"brandName"}},[n("el-button",{attrs:{type:"text",icon:"el-icon-plus"},on:{click:t.triggerDialogBanner}},[t._v("从帖子中选择")])],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"banner图片",prop:"goodsImageUrlList"}},[n("MyUpload",{ref:"uploads",attrs:{"file-size":100,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":1,"images-list":t.imagesFiles}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(1)}}},[t._v("保存")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(2)}}},[t._v("取消")])],1)],1),t._v(" "),n("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[n("chooseTask",{attrs:{child:t.tableData},on:{updataId:t.changeTaskId}}),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)],1)},i=[],o=n("7b94"),s=n("393d"),r=n("a796"),c=n("f6c5"),l={components:{TopTitle:o["a"],chooseTask:s["a"],MyUpload:r["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,dialogTableVisible:!1,formData:{goodsClassifyTwo:"",brandName:"",goodsImageUrlList:""},imagesFiles:[],statesList:[{value:"0",label:"商品任务"},{value:"1",label:"游戏任务"},{value:"2",label:"调查任务"},{value:"3",label:"阅读任务"}],tableData:{type:"",firstColumnName:"",taskId:"",tableType:""},formOption:{goodsImageList:[]},formRules:{aaa:[{required:!0,message:"zzz不能为空",trigger:"change"}]},title:"添加/编辑任务广告",disabled:!1,dialogTitle:"",type:""}},created:function(){console.log("当前组件渲染完成:"),this.type=this.$route.query.type,console.log(this.type),this.getDetail()},methods:{operationButton:function(t){var e=this;console.log(this.$refs.uploads.images);var n="1"===this.type?"Banner::PostBanner":"2"===this.type?"Banner::TaskBanner":"3"===this.type?"Banner::HotBanner":"Banner::CompanyBanner",a={type:n,image:this.$refs.uploads.images[0],task_id:this.tableData.taskId},i=this.$qs.stringify(a);if(void 0===this.$route.query.id)Object(c["a"])(i).then((function(t){console.log(t),e.$message({message:"添加成功",type:"success"})}));else{var o=this.$route.query.id;Object(c["f"])(o,i).then((function(t){console.log(t),e.$message({message:"修改成功",type:"success"})}))}},changeType:function(t){console.log(t),this.tableData.type=t,this.dialogTitle="选择".concat(this.statesList[t].label),this.tableData.firstColumnName=this.statesList[t].label,this.tableData.tableType=2},triggerDialog:function(){this.tableData.type?this.dialogTableVisible=!0:this.$message.error("请先选择任务类型")},triggerDialogBanner:function(){this.dialogTableVisible=!0,this.dialogTitle="选择帖子",this.tableData.firstColumnName="帖子标题",this.tableData.tableType=1},changeTaskId:function(t){console.log(t),this.tableData.taskId=t},getDetail:function(){var t=this;if(void 0!==this.$route.query.id){var e=this.$route.query.id,n="1"===this.type?"Banner::PostBanner":"2"===this.type?"Banner::TaskBanner":"3"===this.type?"Banner::HotBanner":"Banner::CompanyBanner",a={type:n};Object(c["c"])(e,a).then((function(e){console.log(e.data.image),t.imagesFiles.push(e.data.image);var n="Task::ProductTask"===e.data.task.type?"0":"Task::GameTask"===e.data.task.type?"1":"Task::ArticleTask"===e.data.task.type?"3":"2";t.formData.goodsClassifyTwo="Task::ProductTask"===e.data.task.type?"0":"Task::GameTask"===e.data.task.type?"1":"Task::ArticleTask"===e.data.task.type?"3":"2";var a=["product","game","questionnaire","article"];t.tableData.taskId=e.data.task[a[t.type]].id,console.log(t.tableData.taskId),t.changeType(n)}))}}}},u=l,d=n("2877"),f=Object(d["a"])(u,a,i,!1,null,null,null);e["default"]=f.exports},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),i=n("d8e8"),o=n("4bf8"),s=n("79e5"),r=[].sort,c=[1,2,3];a(a.P+a.F*(s((function(){c.sort(void 0)}))||!s((function(){c.sort(null)}))||!n("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(o(this)):r.call(o(this),i(t))}})},"7b94":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},i=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},s=o,r=(n("1b29"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"b4ebadd8",null);e["a"]=c.exports},a796:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.disabled?n("div",[n("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):n("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"图片比例必须是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k")+"\n    ")])])],1)},i=[],o=(n("28a5"),n("7f7f"),n("ac6a"),n("c5f6"),n("11c8")),s=n("5f87"),r={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&this.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)}))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(o["l"])().then((function(e){t.QiniuData.token=e.data.qiniu_token}))},methods:{handleAvatarSuccessSpecifications:function(t,e,n,a){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),console.log(a),"000"===t.code?this.$set(this.formData.specificationsList[a],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){var e=this;console.log("上传文件之前:");var n="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024<this.fileSize;n||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 ".concat(this.fileSize,"KB!"));var i=new Promise((function(n,a){if(e.fixedSize){var i=Number(e.size.width),o=Number(e.size.height),s=window.URL||window.webkitURL,r=new Image;r.onload=function(){var t=r.width===i&&r.height===o;console.log("valid:"),console.log(t),t?n():a()},r.src=s.createObjectURL(t)}else{var c=Number(e.proportion.width),l=Number(e.proportion.height),u=window.URL||window.webkitURL,d=new Image;d.onload=function(){console.log(d.width/d.height),console.log(c/l);var t=d.width/d.height===c/l;console.log("valid:"),console.log(t),t?n():a()},d.src=u.createObjectURL(t)}})).then((function(){return t}),(function(){return e.fixedSize?e.$message.error("上传的图片大小必须是".concat(e.size.width,"*").concat(e.size.height,"!")):e.$message.error("上传的图片尺寸必须是".concat(e.proportion.width,"（宽）：").concat(e.proportion.height,"（高）!")),Promise.reject()}));return this.QiniuData.key="".concat(Object(s["c"])()).concat(t.name),n&&a&&i},handleAvatarSuccess:function(t,e,n){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),this.uploadPicUrl="".concat(t.key),console.log(this.uploadPicUrl);var a=[];console.log(n),n.forEach((function(t){"aaa"===t.name?a.push(t.url.split("//")[1].split("/")[1]):a.push("".concat(t.response.key))})),this.images=a,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){console.log("文件列表移除文件:");var n=[];console.log(e),e.forEach((function(t){"aaa"===t.name?n.push(t.url.split("//")[1].split("/")[1]):n.push("".concat(t.response.key))})),this.images=n,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))}}},c=r,l=(n("2341"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null);e["a"]=u.exports},bda2:function(t,e,n){},d1b0:function(t,e,n){"use strict";var a=n("bda2"),i=n.n(a);i.a},f6c5:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"b",(function(){return l}));var a=n("b775");function i(t){return a["a"].get("banners",{params:t})}function o(t){return a["a"].post("banners",t)}function s(t,e){return a["a"].get("banners/".concat(t),{params:e})}function r(t,e){return a["a"].post("banners/".concat(t,"/sort"),e)}function c(t,e){return a["a"].patch("banners/".concat(t),e)}function l(t,e){return a["a"].delete("banners/".concat(t),{params:e})}},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return i})),n.d(e,"t",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"s",(function(){return r})),n.d(e,"z",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"v",(function(){return p})),n.d(e,"f",(function(){return g})),n.d(e,"p",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"o",(function(){return b})),n.d(e,"x",(function(){return v})),n.d(e,"h",(function(){return y})),n.d(e,"n",(function(){return _})),n.d(e,"b",(function(){return k})),n.d(e,"m",(function(){return w})),n.d(e,"w",(function(){return T})),n.d(e,"A",(function(){return L})),n.d(e,"g",(function(){return S})),n.d(e,"r",(function(){return C})),n.d(e,"d",(function(){return I})),n.d(e,"q",(function(){return B})),n.d(e,"y",(function(){return O})),n.d(e,"i",(function(){return x}));var a=n("b775");function i(t){return a["a"].get("task_products",{params:t})}function o(t){return a["a"].get("products",{params:t})}function s(t){return a["a"].post("task_products",t)}function r(t){return a["a"].get("task_products/".concat(t))}function c(t,e){return a["a"].patch("task_products/".concat(t),e)}function l(t){return a["a"].delete("task_products/".concat(t))}function u(t){return a["a"].get("task_articles",{params:t})}function d(t){return a["a"].post("task_articles",t)}function f(t){return a["a"].get("task_articles/".concat(t))}function p(t,e){return a["a"].patch("task_articles/".concat(t),e)}function g(t){return a["a"].delete("task_articles/".concat(t))}function h(t){return a["a"].get("task_questionnaires",{params:t})}function m(t){return a["a"].post("task_questionnaires",t)}function b(t){return a["a"].get("task_questionnaires/".concat(t))}function v(t,e){return a["a"].patch("task_questionnaires/".concat(t),e)}function y(t){return a["a"].delete("task_questionnaires/".concat(t))}function _(t){return a["a"].get("task_game",{params:t})}function k(t){return a["a"].post("task_game",t)}function w(t){return a["a"].get("task_game/".concat(t))}function T(t,e){return a["a"].patch("task_game/".concat(t),e)}function L(t){return a["a"].post("tasks/audit",t)}function S(t){return a["a"].delete("task_game/".concat(t))}function C(t){return a["a"].get("task_links",{params:t})}function I(t){return a["a"].post("task_links",t)}function B(t){return a["a"].get("task_links/".concat(t))}function O(t,e){return a["a"].patch("task_links/".concat(t),e)}function x(t){return a["a"].delete("task_links/".concat(t))}}}]);