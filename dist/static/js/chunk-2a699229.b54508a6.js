(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a699229","chunk-600fd891"],{"11c8":function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"h",(function(){return r})),i.d(e,"j",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"l",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"i",(function(){return l})),i.d(e,"k",(function(){return d})),i.d(e,"n",(function(){return f})),i.d(e,"e",(function(){return p})),i.d(e,"f",(function(){return m})),i.d(e,"g",(function(){return g})),i.d(e,"m",(function(){return h})),i.d(e,"a",(function(){return v}));var n=i("b775");function a(t){return n["a"].get("categories",{params:t})}function r(t){return n["a"].post("categories",t)}function o(t){return n["a"].delete("categories/".concat(t))}function s(t,e){return n["a"].patch("categories/".concat(t),e)}function c(t){return n["a"].get("products",{params:t})}function u(t){return n["a"].post("products/destroy",t)}function l(t){return n["a"].post("products",t)}function d(t){return n["a"].delete("products/".concat(t))}function f(t){return n["a"].get("products/".concat(t))}function p(t,e){return n["a"].patch("products/".concat(t),e)}function m(t){return n["a"].post("products/audit",t)}function g(t){return n["a"].post("products/change_status",t)}function h(){return n["a"].get("qiniu/token")}function v(t){return n["a"].post("products/".concat(t.id,"/apply"))}},"1b29":function(t,e,i){"use strict";var n=i("3812"),a=i.n(n);a.a},2341:function(t,e,i){"use strict";var n=i("2de7"),a=i.n(n);a.a},"2ddc":function(t,e,i){"use strict";var n=i("88ad"),a=i.n(n);a.a},"2de7":function(t,e,i){},3387:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("TopTitle",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"EditMain"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"任务时间",required:""}},[i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{prop:"valid_from"}},[i("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择开始日期","picker-options":t.pickerOptionsStart},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1)],1),t._v(" "),i("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{prop:"valid_to"}},[i("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择结束日期","picker-options":t.pickerOptionsEnd},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"关联商品",required:""}},[""!==t.taskName?i("el-button",{attrs:{type:"text",disabled:"disabled"}},[t._v(t._s(t.taskName))]):t._e(),i("el-button",{on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("+从商品库中选择")])],1),t._v(" "),i("el-form-item",{attrs:{label:"金币总数",prop:"residue_coin"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"number"},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"佣金",prop:"commission"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"number"},model:{value:t.form.commission,callback:function(e){t.$set(t.form,"commission",e)},expression:"form.commission"}}),t._v(" "),i("span",{staticClass:"tiptitle"},[t._v("*阅读30秒后获得佣金")])],1),t._v(" "),i("el-form-item",{attrs:{label:"文章标题",prop:"subject"}},[i("el-input",{staticStyle:{width:"600px"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"文章内容",prop:"content"}},[i("Tinymce",{model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"展示图",required:""}},[i("MyUpload",{ref:"uploads",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:1,height:1},"file-limit":1,"images-list":t.imagesFiles}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("form")}}},[t._v("提交审核")]),t._v(" "),i("el-button",{on:{click:t.back}},[t._v("取消")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"选择商品",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("choose-good",{attrs:{child:t.form.tableData},on:{sendChildData:t.getChildData}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.clearData}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("确 定")])],1)],1)],1)},a=[],r=(i("c5f6"),i("7f7f"),i("7b94")),o=i("66ea"),s=i("8256"),c=i("a796"),u=i("f8a4"),l=i("5f87"),d={components:{TopTitle:r["a"],chooseGood:o["a"],Tinymce:s["a"],MyUpload:c["a"]},data:function(){var t=this;return{activeName:"second",taskName:"",title:"",dialogTableVisible:!1,form:{residue_coin:"",content:"",subject:"",valid_from:"",commission:"",valid_to:"",goodsImageUrlList:"",delivery:!1,type:[],resource:"",tableData:{goodList:[],chooseId:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:""},company_id:"",product_id:""},imagesFiles:[],pickerOptionsStart:{disabledDate:function(e){if(t.form.valid_to)return e.getTime()>new Date(t.form.valid_to).getTime()}},pickerOptionsEnd:{disabledDate:function(e){if(t.form.valid_from)return e.getTime()<new Date(t.form.valid_from).getTime()-864e5}},rules:{valid_from:[{required:!0,message:"请选择开始日期",trigger:"change"}],valid_to:[{required:!0,message:"请选择结束日期",trigger:"change"}],residue_coin:[{required:!0,message:"请填写金币数",trigger:"blur"}],subject:[{required:!0,message:"请输入文章标题",trigger:"blur"}],content:[{required:!0,message:"请输入文章内容",trigger:"blur"}],commission:[{required:!0,message:"请输入阅读佣金",trigger:"blur"}]}}},created:function(){var t=Object(l["a"])();this.company_id=JSON.parse(t).id,this.getDetail()},methods:{handleClick:function(t,e){},go_prize:function(){this.$router.push({path:"businessPrizeManagement"})},onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){if(t){if(!e.product_id)return e.$message.error("请选择商品"),!1;if(0===e.$refs.uploads.images.length)return e.$message.error("请上传图片"),!1;var i={product_id:e.product_id,coin:void 0===e.form.residue_coin?"":e.form.residue_coin,valid_from:e.form.valid_from,valid_to:e.form.valid_to,subject:e.form.subject,content:e.form.content,image:e.$refs.uploads.images[0],commission:e.form.commission},n=e.$qs.stringify(i);if(void 0!==e.$route.query.id){var a=e.$route.query.id;Object(u["y"])(a,n).then((function(t){200===t.status&&(e.$message({message:"修改成功",type:"success"}),e.$router.go(-1))}))}else Object(u["a"])(n).then((function(t){200===t.status&&(e.$message({message:"添加成功",type:"success"}),e.$router.go(-1))}))}}))},getDetail:function(){var t=this;if(void 0!==this.$route.query.id){this.title="编辑阅读任务";var e=this.$route.query.id;Object(u["k"])(e).then((function(e){200===e.status&&(t.form.residue_coin=e.data.coin,t.form.valid_from=e.data.valid_from,t.form.valid_to=e.data.valid_to,t.form.tableData.chooseId=e.data.article.product.id,t.form.subject=e.data.article.subject,t.form.content=e.data.article.content,t.imagesFiles.push(e.data.image),t.product_id=e.data.article.product.id,t.taskName=e.data.article.product.name,t.form.commission=e.data.commission)}))}else this.title="发布阅读任务"},back:function(){this.$router.go(-1)},getProList:function(){var t=this,e={type:"",search:"",company_id:"",status:"up",page:1,per_page:15};Object(u["v"])(e).then((function(e){200===e.status&&(t.form.tableData.goodList=e.data,t.form.tableData.total=Number(e.headers["x-total"]))}))},getChildData:function(t,e){this.product_id=t,this.taskName=e},clearData:function(){this.dialogTableVisible=!1}}},f=d,p=(i("2ddc"),i("2877")),m=Object(p["a"])(f,n,a,!1,null,"6afc306c",null);e["default"]=m.exports},3812:function(t,e,i){},"386d":function(t,e,i){"use strict";var n=i("cb7c"),a=i("83a1"),r=i("5f1b");i("214f")("search",1,(function(t,e,i,o){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=o(i,t,this);if(e.done)return e.value;var s=n(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var l=r(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]}))},"66ea":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dialog-container"},[i("div",{staticClass:"searchInput"},[i("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},on:{blur:t.getProList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.child.goodList,"default-sort":{prop:"price",order:"descending"}}},[i("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"price",label:"价格",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"sale",label:"销量",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"stock",label:"库存",sortable:""}}),t._v(" "),i("el-table-column",{attrs:{prop:"chooseStatus",label:"选择"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.currentId===e.row.id?i("el-button",{class:t.currentId===e.row.id?"choose":"",attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,e.row.name,1)}}},[t._v("已选择")]):t._e(),t._v(" "),t.currentId!==e.row.id?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(){return t.SingleOperation(e.row.id,e.row.name,2)}}},[t._v("选择")]):t._e()]}}])})],1),t._v(" "),t.child.total?i("div",{staticClass:"pagingBox"},[i("el-pagination",{attrs:{"current-page":t.child.searchOption.pagination.currentPage,"page-sizes":t.child.searchOption.pagination.mode,"page-size":t.child.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.child.total},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1)},a=[],r=(i("c5f6"),i("386d"),i("f8a4")),o=i("5f87"),s={props:{child:{type:Object,required:!0}},data:function(){return{search:"",tableData:[],currentId:"",company_id:""}},created:function(){var t=Object(o["a"])();this.company_id=JSON.parse(t).id,this.getDetails(),this.getProList()},methods:{SingleOperation:function(t,e,i){2===i?(this.$emit("sendChildData",t,e),this.currentId=t):(this.currentId="",this.$emit("sendChildData","",""))},handleCurrentChange:function(t){this.child.searchOption.pagination.currentPage=t,this.getProList()},getDetails:function(){void 0!==this.child.chooseId&&(this.currentId=this.child.chooseId)},getProList:function(){var t=this,e={type:"",search:this.search,company_id:"",status:"up",page:this.child.searchOption.pagination.currentPage,per_page:15};Object(r["v"])(e).then((function(e){200===e.status&&(t.child.goodList=e.data,t.child.total=Number(e.headers["x-total"]))}))}}},c=s,u=(i("e1a8"),i("2877")),l=Object(u["a"])(c,n,a,!1,null,"786252bf",null);e["a"]=l.exports},"7b94":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topTitle"},[i("span"),i("span",{staticClass:"title"},[t._v(t._s(t.title))])])},a=[],r={props:{title:{type:String,required:!0}},data:function(){return{}}},o=r,s=(i("1b29"),i("2877")),c=Object(s["a"])(o,n,a,!1,null,"b4ebadd8",null);e["a"]=c.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"88ad":function(t,e,i){},a796:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.disabled?i("div",[i("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):i("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"建议图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"建议图片比例是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k,限制上传 "+t.fileLimit+" 张")+"\n    ")])])],1)},a=[],r=(i("28a5"),i("7f7f"),i("ac6a"),i("c5f6"),i("11c8")),o=i("5f87"),s={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)})))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(r["m"])().then((function(e){200===e.status&&(t.QiniuData.token=e.data.qiniu_token)}))},methods:{handleAvatarSuccessSpecifications:function(t,e,i,n){"000"===t.code?this.$set(this.formData.specificationsList[n],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(o["c"])()).concat(t.name),e},handleAvatarSuccess:function(t,e,i){this.uploadPicUrl="".concat(t.key);var n=[];i.forEach((function(t){"aaa"===t.name?n.push(t.url.split("//")[1].split("/")[1]):n.push("".concat(t.response.key))})),this.images=n,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){var i=[];e.forEach((function(t){"aaa"===t.name?i.push(t.url.split("//")[1].split("/")[1]):i.push("".concat(t.response.key))})),this.images=i,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){this.$message.warning("当前限制上传 ".concat(this.fileLimit," 张图片"))}}},c=s,u=(i("2341"),i("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["a"]=l.exports},e1a8:function(t,e,i){"use strict";var n=i("faee"),a=i.n(n);a.a},f8a4:function(t,e,i){"use strict";i.d(e,"x",(function(){return a})),i.d(e,"v",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"u",(function(){return s})),i.d(e,"C",(function(){return c})),i.d(e,"j",(function(){return u})),i.d(e,"l",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"k",(function(){return f})),i.d(e,"y",(function(){return p})),i.d(e,"f",(function(){return m})),i.d(e,"p",(function(){return g})),i.d(e,"c",(function(){return h})),i.d(e,"o",(function(){return v})),i.d(e,"A",(function(){return _})),i.d(e,"h",(function(){return b})),i.d(e,"n",(function(){return k})),i.d(e,"b",(function(){return y})),i.d(e,"m",(function(){return x})),i.d(e,"z",(function(){return O})),i.d(e,"D",(function(){return S})),i.d(e,"g",(function(){return j})),i.d(e,"r",(function(){return $})),i.d(e,"d",(function(){return q})),i.d(e,"q",(function(){return L})),i.d(e,"B",(function(){return w})),i.d(e,"i",(function(){return I})),i.d(e,"w",(function(){return D})),i.d(e,"t",(function(){return C})),i.d(e,"s",(function(){return z}));var n=i("b775");function a(t){return n["a"].get("task_products",{params:t})}function r(t){return n["a"].get("products",{params:t})}function o(t){return n["a"].post("task_products",t)}function s(t){return n["a"].get("task_products/".concat(t))}function c(t,e){return n["a"].patch("task_products/".concat(t),e)}function u(t){return n["a"].delete("task_products/".concat(t))}function l(t){return n["a"].get("task_articles",{params:t})}function d(t){return n["a"].post("task_articles",t)}function f(t){return n["a"].get("task_articles/".concat(t))}function p(t,e){return n["a"].patch("task_articles/".concat(t),e)}function m(t){return n["a"].delete("task_articles/".concat(t))}function g(t){return n["a"].get("task_questionnaires",{params:t})}function h(t){return n["a"].post("task_questionnaires",t)}function v(t){return n["a"].get("task_questionnaires/".concat(t))}function _(t,e){return n["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return n["a"].delete("task_questionnaires/".concat(t))}function k(t){return n["a"].get("task_game",{params:t})}function y(t){return n["a"].post("task_game",t)}function x(t){return n["a"].get("task_game/".concat(t))}function O(t,e){return n["a"].patch("task_game/".concat(t),e)}function S(t){return n["a"].post("tasks/audit",t)}function j(t){return n["a"].delete("task_game/".concat(t))}function $(t){return n["a"].get("task_links",{params:t})}function q(t){return n["a"].post("task_links",t)}function L(t){return n["a"].get("task_links/".concat(t))}function w(t,e){return n["a"].patch("task_links/".concat(t),e)}function I(t){return n["a"].delete("task_links/".concat(t))}function D(t,e){return n["a"].get("task_questionnaires/".concat(t,"/reply"),{params:e})}function C(t){return n["a"].get("task_game/".concat(t,"/prizes"))}function z(t,e){return n["a"].get("task_game/".concat(t,"/prize_logs"),{params:e})}},faee:function(t,e,i){}}]);