(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-606d2dd7"],{"11c8":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return a})),n.d(e,"i",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"k",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"m",(function(){return p})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"f",(function(){return g})),n.d(e,"l",(function(){return h}));var o=n("b775");function i(t){return o["a"].get("categories",{params:t})}function a(t){return o["a"].post("categories",t)}function r(t){return o["a"].delete("categories/".concat(t))}function s(t,e){return o["a"].patch("categories/".concat(t),e)}function c(t){return o["a"].get("products",{params:t})}function l(t){return o["a"].post("products/destroy",t)}function u(t){return o["a"].post("products",t)}function d(t){return o["a"].delete("products/".concat(t))}function p(t){return o["a"].get("products/".concat(t))}function f(t,e){return o["a"].patch("products/".concat(t),e)}function m(t){return o["a"].post("products/audit",t)}function g(t){return o["a"].post("products/change_status",t)}function h(){return o["a"].get("qiniu/token")}},"1b29":function(t,e,n){"use strict";var o=n("3812"),i=n.n(o);i.a},2341:function(t,e,n){"use strict";var o=n("2de7"),i=n.n(o);i.a},"2de7":function(t,e,n){},"2fce":function(t,e,n){"use strict";var o=n("6261"),i=n.n(o);i.a},3812:function(t,e,n){},"386d":function(t,e,n){"use strict";var o=n("cb7c"),i=n("83a1"),a=n("5f1b");n("214f")("search",1,(function(t,e,n,r){return[function(n){var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o):new RegExp(n)[e](String(o))},function(t){var e=r(n,t,this);if(e.done)return e.value;var s=o(t),c=String(this),l=s.lastIndex;i(l,0)||(s.lastIndex=0);var u=a(s,c);return i(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},6261:function(t,e,n){},"7b94":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTitle"},[n("span"),n("span",{staticClass:"title"},[t._v(t._s(t.title))])])},i=[],a={props:{title:{type:String,required:!0}},data:function(){return{}}},r=a,s=(n("1b29"),n("2877")),c=Object(s["a"])(r,o,i,!1,null,"b4ebadd8",null);e["a"]=c.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"9a53":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("TopTitle",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"EditMain"},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"活动名称"}},[n("el-input",{staticStyle:{width:"600px"},model:{value:t.form.game.name,callback:function(e){t.$set(t.form.game,"name",e)},expression:"form.game.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"任务时间"}},[n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1),t._v(" "),n("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"剩余金币"}},[n("el-input",{staticStyle:{width:"600px"},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"中奖设置"}},[n("div",{staticClass:"prizeList"},[n("el-row",[n("el-col",{attrs:{span:6}},[t._v("\n              奖品\n            ")]),t._v(" "),n("el-col",{attrs:{span:6}},[t._v("\n              中奖概率\n            ")])],1),t._v(" "),t._l(t.prizes,(function(e,o){return n("div",{key:o,staticClass:"gameList"},[n("el-row",[1===e.type?n("el-col",{attrs:{span:3}},[n("el-button",{on:{click:function(e){return t.choosePrize(o)}}},[t._v("+选择奖励")])],1):t._e(),t._v(" "),2===e.type?n("el-col",{attrs:{span:3}},[t._v("\n                金币："+t._s(e.coin)+"\n              ")]):t._e(),t._v(" "),3===e.type?n("el-col",{attrs:{span:3}},[t._v("\n                "+t._s(e.product_name)+"\n              ")]):t._e(),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"text"}},[t._v("修改")])],1),t._v(" "),n("el-col",{attrs:{span:3,offset:1}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},on:{blur:function(e){return t.computedNum(o)}},model:{value:e.num,callback:function(n){t.$set(e,"num",n)},expression:"gameItem.num"}}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("%")])],1),t._v(" "),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.deleteGamesPrizes(o)}}})],1)],1)],1)})),t._v(" "),n("div",{staticStyle:{"font-size":"12px"}},[n("el-button",{staticStyle:{"font-size":"12px","margin-right":"10px"},attrs:{type:"text"},on:{click:t.addGamesPrizes}},[t._v("+新增")]),t._v("中奖概率之和必须为100%")],1)],2)]),t._v(" "),n("el-form-item",{attrs:{label:"商品头图",prop:"images"}},[t.disabled?n("div",[n("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):n("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:1,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("345*345 图片大小不超过60k")])])],1),t._v(" "),n("el-form-item",{attrs:{label:"游戏说明"}},[n("el-input",{staticStyle:{width:"600px",resize:"none"},attrs:{type:"textarea",rows:4},model:{value:t.form.game.desc,callback:function(e){t.$set(t.form.game,"desc",e)},expression:"form.game.desc"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.SingleOptions}},[t._v("提交审核")]),t._v(" "),n("el-button",{on:{click:t.back}},[t._v("取消")]),t._v(" "),n("el-button",[t._v("预览")])],1)],1),t._v(" "),n("MyUpload",{ref:"uploads",attrs:{"file-size":100,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":1,"images-list":t.imagesFiles}})],1),t._v(" "),n("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[n("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"金币奖励",name:"first"}},[n("div",{staticClass:"demo-input-suffix",staticStyle:{margin:"20px","text-align":"center"}},[t._v("\n          奖励金币数：\n          "),n("el-input",{attrs:{placeholder:"请输入内容",type:"number"},model:{value:t.form.coinNum,callback:function(e){t.$set(t.form,"coinNum",e)},expression:"form.coinNum"}})],1)]),t._v(" "),n("el-tab-pane",{staticClass:"goodsMain",attrs:{label:"实物奖励",name:"second"}},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},on:{blur:t.getGoodList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("el-row",t._l(t.goodItme,(function(e,o){return n("el-col",{key:o,staticClass:"goodStyle",class:e.id==t.product_id?"active":"",attrs:{span:11,offset:o%2===0?0:2}},[n("div",{on:{click:function(n){return t.chooseGood(e.id,e.name)}}},[0!==e.images.length?n("img",{staticClass:"goodsImg",attrs:{src:e.images[0].file_path}}):t._e(),t._v(" "),n("span",[t._v(t._s(e.name))])])])})),1),t._v(" "),n("div",{staticClass:"pagingBox"},[n("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.commitPrize}},[t._v("确 定")])],1)],1)],1)},i=[],a=(n("c5f6"),n("386d"),n("ac6a"),n("7f7f"),n("7b94")),r=n("a796"),s=n("11c8"),c=n("f8a4"),l=n("5f87"),u={components:{TopTitle:a["a"],MyUpload:r["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,activeName:"first",title:"",centerDialogVisible:!1,search:"",form:{residue_coin:"",valid_from:"",valid_to:"",game:{name:"",desc:"",prizes:[]},images:"",coinNum:""},formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/",disabled:!1,prizes:[],currentIndex:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:100,goodItme:[],isActive:!1,product_id:"",product_name:"",totalNum:"",imagesFiles:[]}},mounted:function(){var t=this;Object(s["l"])().then((function(e){t.QiniuData.token=e.data.qiniu_token}))},created:function(){this.title=void 0===this.$route.query.id?"发布游戏任务":"编辑游戏任务",this.form.valid_from=new Date,this.form.valid_to=this.fun_date(7),this.getDetails(),this.getGoodList()},methods:{fun_date:function(t){var e=new Date,n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();console.log(n);var o=new Date(e);o.setDate(e.getDate()+t);var i=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate();return console.log(i),i},handleClick:function(t,e){console.log(t,e)},handleCurrentChange:function(t){console.log(t)},handleRemove:function(t,e){console.log("文件列表移除文件:"),console.log(t,e),this.form.images=e,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},handleAvatarSuccessSpecifications:function(t,e,n,o){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),console.log(o)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){var e=this;console.log("上传文件之前:");var n="image/jpeg"===t.type||"image/png"===t.type,o=t.size/1024<60;n||this.$message.error("上传图片只能是 JPG/PNG 格式!"),o||this.$message.error("上传图片大小不能超过 60KB!");var i=new Promise((function(e,n){var o=345,i=345,a=window.URL||window.webkitURL,r=new Image;r.onload=function(){var t=r.width===o&&r.height===i;console.log("valid:"),console.log(t),t?e():n()},r.src=a.createObjectURL(t),console.log("img.src:"),console.log(r.src)})).then((function(){return t}),(function(){return e.$message.error("上传的图片大小必须是345*345!"),Promise.reject()}));return this.QiniuData.key="".concat(Object(l["c"])()).concat(t.name),n&&o&&i},handleAvatarSuccess:function(t,e,n){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),this.uploadPicUrl="".concat(t.key),console.log(this.uploadPicUrl);var o=[];n.forEach((function(t){o.push(t.response.key)})),this.form.images=o,this.formOption.hasModifyGoodsImage=!0},getDetails:function(){var t=this;if(void 0!==this.$route.query.id){var e=this.$route.query.id;Object(c["m"])(e).then((function(e){console.log(e),t.form=e.data;var n=e.data.game.prizes,o=[];if(console.log(n),t.uploadPicUrl=e.data.game.image.image_path,t.formOption.hasModifyGoodsImage=!1,e.data&&e.data.game.image){var i={name:"aaa",url:e.data.game.image.image_path};t.formOption.goodsImageList.push(i),t.form.images=e.data.game.image.file_path,t.formOption.hasModifyGoodsImage=!0}n.forEach((function(t,e){if(null!==t.product){var n={type:3,product_id:t.product.id,number:1,num:"",product_name:t.product.name};o.push(n)}else if(null===t.product&&null!==t.coin){var i={type:2,coin:t.coin,number:t.number};o.push(i)}})),t.prizes=o,console.log(t.prizes)}))}},getGoodList:function(){var t=this,e={type:"",search:this.search,company_id:"",status:"",page:this.searchOption.pagination.currentPage,per_page:8};Object(c["t"])(e).then((function(e){console.log(e),t.goodItme=e.data,t.total=Number(e.headers["x-total"])}))},addGamesPrizes:function(){this.prizes.push({type:1,num:""}),console.log(this.prizes)},deleteGamesPrizes:function(t){console.log(this.prizes,t),this.prizes.splice(t,1)},choosePrize:function(t){this.centerDialogVisible=!0,this.currentIndex=t},commitPrize:function(){this.centerDialogVisible=!1,"first"===this.activeName?(console.log(this.prizes),this.prizes[this.currentIndex].type=2,this.prizes[this.currentIndex].coin=this.form.coinNum,this.prizes[this.currentIndex].number=1):"second"===this.activeName&&(this.prizes[this.currentIndex].type=3,this.prizes[this.currentIndex].product_id=this.product_id,this.prizes[this.currentIndex].number=1,this.prizes[this.currentIndex].product_name=this.product_name)},chooseGood:function(t,e){console.log(t,e),this.isActive=t,this.product_id=t,this.product_name=e},computedNum:function(t){var e=0;this.prizes.forEach((function(t,n){e+=Number(t.num)})),console.log(e),this.totalNum=e,e>100&&(this.prizes[t].num="")},SingleOptions:function(){var t=this;console.log(this.$refs.uploads.images);var e=[];this.prizes.forEach((function(n,o){if(2===n.type)e.push({coin:Number(n.coin),number:n.number,probability:Number(n.num)});else{if(3!==n.type)return t.$message.error("请输入完整中奖奖励"),!1;e.push({product_id:n.product_id,number:n.number,probability:Number(n.num)})}})),console.log(e);var n="1"===this.$route.query.type?"Game::Wheel":"2"===this.$route.query.type?"Game::Egg":"Game::Scratch";if(void 0!==this.$route.query.id){console.log(1);var o=new FormData;o.append("name",this.form.game.name),o.append("coin",this.form.residue_coin),o.append("game_coin",this.form.residue_coin),o.append("valid_from",this.form.valid_from),o.append("valid_to",this.form.valid_to),o.append("image",this.uploadPicUrl),o.append("desc",this.form.game.desc),o.append("prizes",JSON.stringify(e));var i=this.$route.query.id;Object(c["w"])(i,o).then((function(e){t.$message({message:"修改成功",type:"success"}),t.$router.go(-1)}))}else{var a=new FormData;a.append("type",n),a.append("name",this.form.game.name),a.append("coin",this.form.residue_coin),a.append("game_coin",this.form.residue_coin),a.append("valid_from",this.form.valid_from),a.append("valid_to",this.form.valid_to),a.append("image",this.uploadPicUrl),a.append("desc",this.form.game.desc),a.append("prizes",JSON.stringify(e)),Object(c["b"])(a).then((function(e){console.log(e),t.$message({message:"添加成功",type:"success"}),t.$router.go(-1)}))}},back:function(){this.$router.go(-1)}}},d=u,p=(n("2fce"),n("2877")),f=Object(p["a"])(d,o,i,!1,null,"3727ec54",null);e["default"]=f.exports},a796:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.disabled?n("div",[n("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):n("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus"}),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"图片比例必须是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k")+"\n    ")])])],1)},i=[],a=(n("28a5"),n("7f7f"),n("ac6a"),n("c5f6"),n("11c8")),r=n("5f87"),s={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&this.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)}))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var n={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(n),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(a["l"])().then((function(e){t.QiniuData.token=e.data.qiniu_token}))},methods:{handleAvatarSuccessSpecifications:function(t,e,n,o){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),console.log(o),"000"===t.code?this.$set(this.formData.specificationsList[o],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){var e=this;console.log("上传文件之前:");var n="image/jpeg"===t.type||"image/png"===t.type,o=t.size/1024<this.fileSize;n||this.$message.error("上传图片只能是 JPG/PNG 格式!"),o||this.$message.error("上传图片大小不能超过 ".concat(this.fileSize,"KB!"));var i=new Promise((function(n,o){if(e.fixedSize){var i=Number(e.size.width),a=Number(e.size.height),r=window.URL||window.webkitURL,s=new Image;s.onload=function(){var t=s.width===i&&s.height===a;console.log("valid:"),console.log(t),t?n():o()},s.src=r.createObjectURL(t)}else{var c=Number(e.proportion.width),l=Number(e.proportion.height),u=window.URL||window.webkitURL,d=new Image;d.onload=function(){console.log(d.width/d.height),console.log(c/l);var t=d.width/d.height===c/l;console.log("valid:"),console.log(t),t?n():o()},d.src=u.createObjectURL(t)}})).then((function(){return t}),(function(){return e.fixedSize?e.$message.error("上传的图片大小必须是".concat(e.size.width,"*").concat(e.size.height,"!")):e.$message.error("上传的图片尺寸必须是".concat(e.proportion.width,"（宽）：").concat(e.proportion.height,"（高）!")),Promise.reject()}));return this.QiniuData.key="".concat(Object(r["c"])()).concat(t.name),n&&o&&i},handleAvatarSuccess:function(t,e,n){console.log("文件上传成功:"),console.log(t),console.log(e),console.log(n),this.uploadPicUrl="".concat(t.key),console.log(this.uploadPicUrl);var o=[];console.log(n),n.forEach((function(t){"aaa"===t.name?o.push(t.url.split("//")[1].split("/")[1]):o.push("".concat(t.response.key))})),this.images=o,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){console.log("文件列表移除文件:");var n=[];console.log(e),e.forEach((function(t){"aaa"===t.name?n.push(t.url.split("//")[1].split("/")[1]):n.push("".concat(t.response.key))})),this.images=n,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))}}},c=s,l=(n("2341"),n("2877")),u=Object(l["a"])(c,o,i,!1,null,null,null);e["a"]=u.exports},f8a4:function(t,e,n){"use strict";n.d(e,"u",(function(){return i})),n.d(e,"t",(function(){return a})),n.d(e,"e",(function(){return r})),n.d(e,"s",(function(){return s})),n.d(e,"z",(function(){return c})),n.d(e,"j",(function(){return l})),n.d(e,"l",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"k",(function(){return p})),n.d(e,"v",(function(){return f})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"o",(function(){return v})),n.d(e,"x",(function(){return _})),n.d(e,"h",(function(){return b})),n.d(e,"n",(function(){return y})),n.d(e,"b",(function(){return k})),n.d(e,"m",(function(){return x})),n.d(e,"w",(function(){return z})),n.d(e,"A",(function(){return w})),n.d(e,"g",(function(){return S})),n.d(e,"r",(function(){return I})),n.d(e,"d",(function(){return O})),n.d(e,"q",(function(){return P})),n.d(e,"y",(function(){return L})),n.d(e,"i",(function(){return $}));var o=n("b775");function i(t){return o["a"].get("task_products",{params:t})}function a(t){return o["a"].get("products",{params:t})}function r(t){return o["a"].post("task_products",t)}function s(t){return o["a"].get("task_products/".concat(t))}function c(t,e){return o["a"].patch("task_products/".concat(t),e)}function l(t){return o["a"].delete("task_products/".concat(t))}function u(t){return o["a"].get("task_articles",{params:t})}function d(t){return o["a"].post("task_articles",t)}function p(t){return o["a"].get("task_articles/".concat(t))}function f(t,e){return o["a"].patch("task_articles/".concat(t),e)}function m(t){return o["a"].delete("task_articles/".concat(t))}function g(t){return o["a"].get("task_questionnaires",{params:t})}function h(t){return o["a"].post("task_questionnaires",t)}function v(t){return o["a"].get("task_questionnaires/".concat(t))}function _(t,e){return o["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return o["a"].delete("task_questionnaires/".concat(t))}function y(t){return o["a"].get("task_game",{params:t})}function k(t){return o["a"].post("task_game",t)}function x(t){return o["a"].get("task_game/".concat(t))}function z(t,e){return o["a"].patch("task_game/".concat(t),e)}function w(t){return o["a"].post("tasks/audit",t)}function S(t){return o["a"].delete("task_game/".concat(t))}function I(t){return o["a"].get("task_links",{params:t})}function O(t){return o["a"].post("task_links",t)}function P(t){return o["a"].get("task_links/".concat(t))}function L(t,e){return o["a"].patch("task_links/".concat(t),e)}function $(t){return o["a"].delete("task_links/".concat(t))}}}]);