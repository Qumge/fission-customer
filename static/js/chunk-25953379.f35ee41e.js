(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25953379","chunk-600fd891"],{"11c8":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"k",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"j",(function(){return p})),n.d(e,"m",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return g})),n.d(e,"l",(function(){return h}));var i=n("b775");function r(t){return i["a"].get("categories",{params:t})}function o(t){return i["a"].post("categories",t)}function a(t){return i["a"].delete("categories/".concat(t))}function s(t,e){return i["a"].patch("categories/".concat(t),e)}function c(t){return i["a"].get("products",{params:t})}function u(t){return i["a"].post("products/destroy",t)}function l(t){return i["a"].post("products",t)}function p(t){return i["a"].delete("products/".concat(t))}function d(t){return i["a"].get("products/".concat(t))}function f(t,e){return i["a"].patch("products/".concat(t),e)}function m(t){return i["a"].post("products/audit",t)}function g(t){return i["a"].post("products/change_status",t)}function h(){return i["a"].get("qiniu/token")}},"1a57":function(t,e,n){"use strict";var i=n("254c"),r=n.n(i);r.a},"1b29":function(t,e,n){"use strict";var i=n("3812"),r=n.n(i);r.a},2341:function(t,e,n){"use strict";var i=n("2de7"),r=n.n(i);r.a},"254c":function(t,e,n){},"2de7":function(t,e,n){},3812:function(t,e,n){},"386d":function(t,e,n){"use strict";var i=n("cb7c"),r=n("83a1"),o=n("5f1b");n("214f")("search",1,(function(t,e,n,a){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=i(t),c=String(this),u=s.lastIndex;r(u,0)||(s.lastIndex=0);var l=o(s,c);return r(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]}))},"5ad2":function(t,e,n){"use strict";n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"n",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"k",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"m",(function(){return h})),n.d(e,"e",(function(){return _}));var i=n("b775");function r(){return i["a"].get("addresses")}function o(t){return i["a"].post("addresses",t)}function a(t,e){return i["a"].patch("addresses/".concat(t),e)}function s(t){return i["a"].delete("addresses/".concat(t))}function c(t,e){return i["a"].post("addresses/".concat(t,"/set_tag"),e)}function u(t){return i["a"].post("cash_rules",t)}function l(t){return i["a"].get("cash",{params:t})}function p(){return i["a"].get("share_rules")}function d(t){return i["a"].post("share_rules",t)}function f(t){return i["a"].post("cash/audit",t)}function m(t){return i["a"].get("games/show_game",{params:t})}function g(t){return i["a"].post("games",t)}function h(t){return i["a"].get("sign_rules",{params:t})}function _(t){return i["a"].post("sign_rules",t)}},"7a51":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"EditMain"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"180px"}},[n("el-form-item",{attrs:{label:"游戏名",prop:"name"}},[n("el-input",{staticStyle:{width:"600px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"一次游戏消耗金币",prop:"cost"}},[n("el-input",{staticStyle:{width:"600px"},attrs:{type:"number"},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"中奖设置",required:""}},[n("div",{staticClass:"prizeList"},[n("el-row",[n("el-col",{attrs:{span:6}},[t._v("\n              奖品\n            ")]),t._v(" "),n("el-col",{attrs:{span:6}},[t._v("\n              中奖概率\n            ")])],1),t._v(" "),t._l(t.prizes,(function(e,i){return n("div",{key:i,staticClass:"gameList"},[n("el-row",[1===e.type?n("el-col",{attrs:{span:3}},[n("el-button",{on:{click:function(e){return t.choosePrize(i)}}},[t._v("+选择奖励")])],1):t._e(),t._v(" "),2===e.type?n("el-col",{attrs:{span:3}},[t._v("\n                金币："+t._s(e.coin)+"\n              ")]):t._e(),t._v(" "),3===e.type?n("el-col",{attrs:{span:3}},[t._v("\n                "+t._s(e.product_name)+"\n              ")]):t._e(),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"text"}},[t._v("修改")])],1),t._v(" "),n("el-col",{attrs:{span:3,offset:1}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},on:{blur:function(e){return t.computedNum(i)}},model:{value:e.num,callback:function(n){t.$set(e,"num",n)},expression:"gameItem.num"}}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("%")])],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.deleteGamesPrizes(i)}}})],1)],1)],1)})),t._v(" "),n("div",{staticStyle:{"font-size":"12px"}},[n("el-button",{staticStyle:{"font-size":"12px","margin-right":"10px"},attrs:{type:"text"},on:{click:t.addGamesPrizes}},[t._v("+新增")]),t._v("中奖概率之和必须为100%")],1)],2)]),t._v(" "),n("el-form-item",{attrs:{label:"背景图",prop:"image"}},[n("MyUpload",{ref:"uploads1",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":1,"images-list":t.imagesFiles}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.SingleOptions}},[t._v("提交审核")]),t._v(" "),n("el-button",{on:{click:t.back}},[t._v("取消")]),t._v(" "),n("el-button",[t._v("预览")])],1)],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[n("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"金币奖励",name:"first"}},[n("div",{staticClass:"demo-input-suffix",staticStyle:{margin:"20px","text-align":"center"}},[t._v("\n          奖励金币数：\n          "),n("el-input",{attrs:{placeholder:"请输入内容",type:"number"},model:{value:t.form.coinNum,callback:function(e){t.$set(t.form,"coinNum",e)},expression:"form.coinNum"}})],1)]),t._v(" "),n("el-tab-pane",{staticClass:"goodsMain",attrs:{label:"实物奖励",name:"second"}},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},on:{blur:t.getGoodList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("el-row",t._l(t.goodItme,(function(e,i){return n("el-col",{key:i,staticClass:"goodStyle",class:e.id==t.product_id?"active":"",attrs:{span:11,offset:i%2===0?0:2}},[n("div",{on:{click:function(n){return t.chooseGood(e.id,e.name)}}},[0!==e.images.length?n("img",{staticClass:"goodsImg",attrs:{src:e.images[0].image_path}}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])})),1),t._v(" "),n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.commitPrize}},[t._v("确 定")])],1)],1)],1)},r=[],o=(n("c5f6"),n("386d"),n("7f7f"),n("ac6a"),n("7b94")),a=n("a796"),s=n("f8a4"),c=n("5ad2"),u={components:{TopTitle:o["a"],MyUpload:a["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,activeName:"first",title:"",centerDialogVisible:!1,search:"",form:{cost:"",name:"",game:{desc:"",prizes:[]},images:"",coinNum:"",image:""},rules:{cost:[{required:!0,message:"请填写金币数",trigger:"blur"}],name:[{required:!0,message:"请输入游戏名称",trigger:"blur"}],image:[{required:!0,message:"请上传背景图",trigger:"blur"}]},disabled:!1,prizes:[],currentIndex:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,goodItme:[],isActive:!1,product_id:"",product_name:"",totalNum:"",imagesFiles:[]}},created:function(){this.title="编辑游戏",this.getDetails(),this.getGoodList()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.type){var e="1"===this.$route.query.type?"Game::Wheel":"2"===this.$route.query.type?"Game::Egg":"Game::Tiger",n={type:e};Object(c["k"])(n).then((function(e){if(console.log(e),null===e.data)return!1;t.form=e.data,null!==e.data.image&&t.imagesFiles.push(e.data.image);var n=e.data.prizes,i=[];n.forEach((function(t,e){if(null!==t.product){var n={type:3,product_id:t.product.id,number:1,num:t.probability,product_name:t.product.name};i.push(n)}else if(null===t.product&&null!==t.coin){var r={type:2,coin:t.coin,number:t.number,num:t.probability};i.push(r)}})),t.prizes=i,console.log(t.prizes)}))}},getGoodList:function(){var t=this,e={type:"",search:this.search,company_id:"",status:"",page:this.searchOption.pagination.currentPage,per_page:8};Object(s["t"])(e).then((function(e){console.log(e),t.goodItme=e.data,t.total=Number(e.headers["x-total"])}))},handleClick:function(t,e){this.getGoodList()},handleCurrentChange:function(t){console.log(t),this.searchOption.pagination.currentPage=t,this.getGoodList()},addGamesPrizes:function(){this.prizes.push({type:1,num:""}),console.log(this.prizes)},deleteGamesPrizes:function(t){console.log(this.prizes,t),this.prizes.splice(t,1)},choosePrize:function(t){this.centerDialogVisible=!0,this.currentIndex=t},commitPrize:function(){this.centerDialogVisible=!1,"first"===this.activeName?(console.log(this.prizes),this.prizes[this.currentIndex].type=2,this.prizes[this.currentIndex].coin=this.form.coinNum,this.prizes[this.currentIndex].number=1):"second"===this.activeName&&(this.prizes[this.currentIndex].type=3,this.prizes[this.currentIndex].product_id=this.product_id,this.prizes[this.currentIndex].number=1,this.prizes[this.currentIndex].product_name=this.product_name)},chooseGood:function(t,e){console.log(t,e),this.isActive=t,this.product_id=t,this.product_name=e},computedNum:function(t){var e=0;this.prizes.forEach((function(t,n){e+=Number(t.num)})),console.log(e),this.totalNum=e,e>100&&(this.prizes[t].num="")},SingleOptions:function(){var t=this;this.form.image=this.$refs.uploads1.images[0],this.$refs["form"].validate((function(e){if(e){var n=[];if(0===t.prizes.length)return t.$message.error("请输入中奖设置"),!1;t.prizes.forEach((function(e,i){if(2===e.type)n.push({coin:Number(e.coin),number:e.number,probability:Number(e.num)});else{if(3!==e.type)return t.$message.error("请输入完整中奖奖励"),!1;n.push({product_id:e.product_id,number:e.number,probability:Number(e.num)})}}));var i="1"===t.$route.query.type?"Game::Wheel":"2"===t.$route.query.type?"Game::Egg":"Game::Tiger";console.log(1);var r={name:t.form.name,cost:t.form.cost,prizes:JSON.stringify(n),image:t.form.image,type:i},o=t.$qs.stringify(r);Object(c["h"])(o).then((function(e){t.$message({message:"操作成功",type:"success"}),t.$router.go(-1)}))}}))},back:function(){this.$router.go(-1)}}},l=u,p=(n("1a57"),n("2877")),d=Object(p["a"])(l,i,r,!1,null,"4c22060c",null);e["default"]=d.exports},"7b94":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},r=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},a=o,s=(n("1b29"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,"b4ebadd8",null);e["a"]=c.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a796:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.disabled?n("div",[n("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):n("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"建议图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"建议图片比例是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k")+"\n    ")])])],1)},r=[],o=(n("28a5"),n("7f7f"),n("ac6a"),n("c5f6"),n("11c8")),a=n("5f87"),s={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)})))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(o["l"])().then((function(e){t.QiniuData.token=e.data.qiniu_token}))},methods:{handleAvatarSuccessSpecifications:function(t,e,n,i){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),console.log(i),"000"===t.code?this.$set(this.formData.specificationsList[i],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(a["c"])()).concat(t.name),e},handleAvatarSuccess:function(t,e,n){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),this.uploadPicUrl="".concat(t.key),console.log(this.uploadPicUrl);var i=[];console.log(n),n.forEach((function(t){"aaa"===t.name?i.push(t.url.split("//")[1].split("/")[1]):i.push("".concat(t.response.key))})),this.images=i,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){console.log("文件列表移除文件:");var n=[];console.log(e),e.forEach((function(t){"aaa"===t.name?n.push(t.url.split("//")[1].split("/")[1]):n.push("".concat(t.response.key))})),this.images=n,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))}}},c=s,u=(n("2341"),n("2877")),l=Object(u["a"])(c,i,r,!1,null,null,null);e["a"]=l.exports},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return r})),n.d(e,"t",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"s",(function(){return s})),n.d(e,"z",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"l",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"v",(function(){return f})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"o",(function(){return _})),n.d(e,"x",(function(){return v})),n.d(e,"h",(function(){return b})),n.d(e,"n",(function(){return y})),n.d(e,"b",(function(){return k})),n.d(e,"m",(function(){return x})),n.d(e,"w",(function(){return z})),n.d(e,"A",(function(){return I})),n.d(e,"g",(function(){return S})),n.d(e,"r",(function(){return O})),n.d(e,"d",(function(){return E})),n.d(e,"q",(function(){return P})),n.d(e,"y",(function(){return L})),n.d(e,"i",(function(){return N}));var i=n("b775");function r(t){return i["a"].get("task_products",{params:t})}function o(t){return i["a"].get("products",{params:t})}function a(t){return i["a"].post("task_products",t)}function s(t){return i["a"].get("task_products/".concat(t))}function c(t,e){return i["a"].patch("task_products/".concat(t),e)}function u(t){return i["a"].delete("task_products/".concat(t))}function l(t){return i["a"].get("task_articles",{params:t})}function p(t){return i["a"].post("task_articles",t)}function d(t){return i["a"].get("task_articles/".concat(t))}function f(t,e){return i["a"].patch("task_articles/".concat(t),e)}function m(t){return i["a"].delete("task_articles/".concat(t))}function g(t){return i["a"].get("task_questionnaires",{params:t})}function h(t){return i["a"].post("task_questionnaires",t)}function _(t){return i["a"].get("task_questionnaires/".concat(t))}function v(t,e){return i["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return i["a"].delete("task_questionnaires/".concat(t))}function y(t){return i["a"].get("task_game",{params:t})}function k(t){return i["a"].post("task_game",t)}function x(t){return i["a"].get("task_game/".concat(t))}function z(t,e){return i["a"].patch("task_game/".concat(t),e)}function I(t){return i["a"].post("tasks/audit",t)}function S(t){return i["a"].delete("task_game/".concat(t))}function O(t){return i["a"].get("task_links",{params:t})}function E(t){return i["a"].post("task_links",t)}function P(t){return i["a"].get("task_links/".concat(t))}function L(t,e){return i["a"].patch("task_links/".concat(t),e)}function N(t){return i["a"].delete("task_links/".concat(t))}}}]);