(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-603f51f5","chunk-600fd891"],{"11c8":function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"h",(function(){return r})),i.d(e,"j",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"l",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"i",(function(){return l})),i.d(e,"k",(function(){return d})),i.d(e,"n",(function(){return m})),i.d(e,"e",(function(){return p})),i.d(e,"f",(function(){return f})),i.d(e,"g",(function(){return g})),i.d(e,"m",(function(){return h})),i.d(e,"a",(function(){return _}));var n=i("b775");function a(t){return n["a"].get("categories",{params:t})}function r(t){return n["a"].post("categories",t)}function o(t){return n["a"].delete("categories/".concat(t))}function s(t,e){return n["a"].patch("categories/".concat(t),e)}function c(t){return n["a"].get("products",{params:t})}function u(t){return n["a"].post("products/destroy",t)}function l(t){return n["a"].post("products",t)}function d(t){return n["a"].delete("products/".concat(t))}function m(t){return n["a"].get("products/".concat(t))}function p(t,e){return n["a"].patch("products/".concat(t),e)}function f(t){return n["a"].post("products/audit",t)}function g(t){return n["a"].post("products/change_status",t)}function h(){return n["a"].get("qiniu/token")}function _(t){return n["a"].post("products/".concat(t.id,"/apply"))}},"1b29":function(t,e,i){"use strict";var n=i("3812"),a=i.n(n);a.a},2341:function(t,e,i){"use strict";var n=i("2de7"),a=i.n(n);a.a},"2d8e":function(t,e,i){"use strict";var n=i("c89b"),a=i.n(n);a.a},"2de7":function(t,e,i){},3812:function(t,e,i){},"386d":function(t,e,i){"use strict";var n=i("cb7c"),a=i("83a1"),r=i("5f1b");i("214f")("search",1,(function(t,e,i,o){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=o(i,t,this);if(e.done)return e.value;var s=n(t),c=String(this),u=s.lastIndex;a(u,0)||(s.lastIndex=0);var l=r(s,c);return a(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]}))},"7b94":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topTitle"},[i("span"),i("span",{staticClass:"title"},[t._v(t._s(t.title))])])},a=[],r={props:{title:{type:String,required:!0}},data:function(){return{}}},o=r,s=(i("1b29"),i("2877")),c=Object(s["a"])(o,n,a,!1,null,"b4ebadd8",null);e["a"]=c.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"9a53":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("TopTitle",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"EditMain"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[i("el-input",{staticStyle:{width:"600px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"任务时间",required:""}},[i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{prop:"valid_from"}},[i("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择开始日期","picker-options":t.pickerOptionsStart},model:{value:t.form.valid_from,callback:function(e){t.$set(t.form,"valid_from",e)},expression:"form.valid_from"}})],1)],1),t._v(" "),i("el-col",{staticClass:"line",attrs:{span:1}},[t._v("至")]),t._v(" "),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{prop:"valid_to"}},[i("el-date-picker",{staticStyle:{},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",type:"date",placeholder:"选择结束日期","picker-options":t.pickerOptionsEnd},model:{value:t.form.valid_to,callback:function(e){t.$set(t.form,"valid_to",e)},expression:"form.valid_to"}})],1)],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"金币总数",prop:"residue_coin"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"number"},model:{value:t.form.residue_coin,callback:function(e){t.$set(t.form,"residue_coin",e)},expression:"form.residue_coin"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"游戏金币",prop:"game_coin"}},[i("el-input",{staticStyle:{width:"600px"},attrs:{type:"number"},model:{value:t.form.game_coin,callback:function(e){t.$set(t.form,"game_coin",e)},expression:"form.game_coin"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"中奖设置",required:""}},[i("div",{staticClass:"prizeList"},[i("el-row",[i("el-col",{attrs:{span:6}},[t._v("\n              奖品\n            ")]),t._v(" "),i("el-col",{attrs:{span:4}},[t._v("\n              中奖概率\n            ")]),t._v(" "),i("el-col",{attrs:{span:4}},[t._v("\n              奖品数量\n            ")])],1),t._v(" "),t._l(t.prizes,(function(e,n){return i("div",{key:n,staticClass:"gameList"},[i("el-row",[1===e.type?i("el-col",{attrs:{span:3}},[i("el-button",{on:{click:function(e){return t.choosePrize(n)}}},[t._v("+选择奖励")])],1):t._e(),t._v(" "),2===e.type?i("el-col",{attrs:{span:3}},[t._v("\n                金币："+t._s(e.coin)+"\n              ")]):t._e(),t._v(" "),3===e.type?i("el-col",{attrs:{span:3}},[t._v("\n                "+t._s(e.product_name)+"\n              ")]):t._e(),t._v(" "),i("el-col",{attrs:{span:2}},[i("el-button",{attrs:{type:"text"}},[t._v("修改")])],1),t._v(" "),i("el-col",{attrs:{span:3,offset:1}},[i("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},on:{blur:function(e){return t.computedNum(n)}},model:{value:e.num,callback:function(i){t.$set(e,"num",i)},expression:"gameItem.num"}}),i("span",{staticStyle:{"margin-left":"10px"}},[t._v("%")])],1),t._v(" "),i("el-col",{attrs:{span:3,offset:1}},[3===e.type?i("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:e.number,callback:function(i){t.$set(e,"number",i)},expression:"gameItem.number"}}):i("el-input",{staticStyle:{width:"100px"},attrs:{disabled:"",type:"number"}})],1),t._v(" "),i("el-col",{attrs:{span:2}},[i("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.deleteGamesPrizes(n)}}})],1)],1)],1)})),t._v(" "),i("div",{staticStyle:{"font-size":"12px"}},[i("el-button",{staticStyle:{"font-size":"12px","margin-right":"10px"},attrs:{type:"text"},on:{click:t.addGamesPrizes}},[t._v("+新增")])],1)],2)]),t._v(" "),i("el-form-item",{attrs:{label:"背景图",prop:"image"}},[i("MyUpload",{ref:"uploads1",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:1,height:1},"file-limit":1,"images-list":t.imagesFiles1}})],1),t._v(" "),i("el-form-item",{attrs:{label:"游戏说明"}},[i("el-input",{staticStyle:{width:"600px",resize:"none"},attrs:{type:"textarea",rows:4},model:{value:t.form.game.desc,callback:function(e){t.$set(t.form.game,"desc",e)},expression:"form.game.desc"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"任务展示图",prop:"task_image","label-width":"180"}},[i("MyUpload",{ref:"uploads2",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:1,height:1},"file-limit":1,"images-list":t.imagesFiles2}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.SingleOptions}},[t._v("提交审核")]),t._v(" "),i("el-button",{on:{click:t.back}},[t._v("取消")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"金币奖励",name:"first"}},[i("div",{staticClass:"demo-input-suffix",staticStyle:{margin:"20px","text-align":"center"}},[t._v("\n          奖励金币数：\n          "),i("el-input",{attrs:{placeholder:"请输入内容",type:"number"},model:{value:t.form.coinNum,callback:function(e){t.$set(t.form,"coinNum",e)},expression:"form.coinNum"}})],1)]),t._v(" "),i("el-tab-pane",{staticClass:"goodsMain",attrs:{label:"实物奖励",name:"second"}},[i("div",{staticClass:"searchInput"},[i("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索","suffix-icon":"el-icon-search"},on:{blur:t.getGoodList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),i("el-row",t._l(t.goodItme,(function(e,n){return i("el-col",{key:n,staticClass:"goodStyle",class:e.id==t.product_id?"active":"",attrs:{span:11,offset:n%2===0?0:2}},[i("div",{on:{click:function(i){return t.chooseGood(e.id,e.name)}}},[0!==e.images.length?i("img",{staticClass:"goodsImg",attrs:{src:e.images[0].image_path}}):t._e(),t._v(" "),i("span",{staticClass:"spanStyle"},[t._v(t._s(e.name))])])])})),1),t._v(" "),i("div",{staticClass:"pagingBox"},[i("el-pagination",{attrs:{"current-page":t.searchOption.pagination.currentPage,"page-sizes":t.searchOption.pagination.mode,"page-size":t.searchOption.pagination.defaultMode,background:"","prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.commitPrize}},[t._v("确 定")])],1)],1)],1)},a=[],r=(i("c5f6"),i("386d"),i("7f7f"),i("ac6a"),i("7b94")),o=i("a796"),s=i("f8a4"),c={components:{TopTitle:r["a"],MyUpload:o["a"]},data:function(){var t=this;return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,activeName:"first",title:"",centerDialogVisible:!1,search:"",form:{residue_coin:"",game_coin:"",valid_from:"",valid_to:"",name:"",game:{desc:"",prizes:[]},images:"",coinNum:"",image:"",task_image:""},rules:{valid_from:[{required:!0,message:"请选择开始日期",trigger:"change"}],valid_to:[{required:!0,message:"请选择结束日期",trigger:"change"}],residue_coin:[{required:!0,message:"请填写金币数",trigger:"blur"}],game_coin:[{required:!0,message:"请填写游戏金币数",trigger:"blur"}],name:[{required:!0,message:"请输入活动名称",trigger:"blur"}],image:[{required:!0,message:"请选择商品头图",trigger:"blur"}],task_image:[{required:!0,message:"请选择展示图",trigger:"blur"}]},pickerOptionsStart:{disabledDate:function(e){if(t.form.valid_to)return e.getTime()>new Date(t.form.valid_to).getTime()}},pickerOptionsEnd:{disabledDate:function(e){if(t.form.valid_from)return e.getTime()<new Date(t.form.valid_from).getTime()-864e5}},disabled:!1,prizes:[],currentIndex:"",searchOption:{pagination:{currentPage:1,mode:[10,20,50,100],defaultMode:10}},total:"",goodItme:[],isActive:!1,product_id:"",product_name:"",totalNum:"",imagesFiles1:[],imagesFiles2:[]}},created:function(){this.title=void 0===this.$route.query.id?"发布游戏任务":"编辑游戏任务",this.getDetails(),this.getGoodList()},methods:{getDetails:function(){var t=this;if(void 0!==this.$route.query.id){var e=this.$route.query.id;Object(s["m"])(e).then((function(e){if(200===e.status){t.form=e.data,t.form.residue_coin=e.data.coin,t.form.game_coin=e.data.game.coin,t.imagesFiles1.push(e.data.game.image),t.imagesFiles2.push(e.data.image);var i=e.data.game.prizes,n=[];i.forEach((function(t,e){if(null!==t.product){var i={type:3,product_id:t.product.id,number:t.number,num:t.probability,product_name:t.product.name};n.push(i)}else if(null===t.product&&null!==t.coin){var a={type:2,coin:t.coin,number:t.number,num:t.probability};n.push(a)}})),t.prizes=n}}))}},getGoodList:function(){var t=this,e={type:"",search:this.search,company_id:"",status:"",page:this.searchOption.pagination.currentPage,per_page:8};Object(s["v"])(e).then((function(e){200===e.status&&(t.goodItme=e.data,t.total=Number(e.headers["x-total"]))}))},handleClick:function(t,e){this.getGoodList()},handleCurrentChange:function(t){this.searchOption.pagination.currentPage=t,this.getGoodList()},addGamesPrizes:function(){this.prizes.push({type:1,num:"",number:""})},deleteGamesPrizes:function(t){this.prizes.splice(t,1)},choosePrize:function(t){this.centerDialogVisible=!0,this.currentIndex=t},commitPrize:function(){this.centerDialogVisible=!1,"first"===this.activeName?(this.prizes[this.currentIndex].type=2,this.prizes[this.currentIndex].coin=this.form.coinNum):"second"===this.activeName&&(this.prizes[this.currentIndex].type=3,this.prizes[this.currentIndex].product_id=this.product_id,this.prizes[this.currentIndex].product_name=this.product_name)},chooseGood:function(t,e){this.isActive=t,this.product_id=t,this.product_name=e},computedNum:function(t){var e=0;this.prizes.forEach((function(t,i){e+=Number(t.num)})),this.totalNum=e,e>100&&(this.prizes[t].num="")},SingleOptions:function(){var t=this;this.form.image=this.$refs.uploads1.images[0],this.form.task_image=this.$refs.uploads2.images[0],this.$refs["form"].validate((function(e){if(e){var i=[];if(0===t.prizes.length)return t.$message.error("请输入中奖设置"),!1;t.prizes.forEach((function(e,n){if(2===e.type)i.push({coin:Number(e.coin),probability:Number(e.num)});else{if(3!==e.type)return t.$message.error("请输入完整中奖奖励"),!1;i.push({product_id:e.product_id,number:e.number,probability:Number(e.num)})}}));var n="1"===t.$route.query.type?"Game::Wheel":"2"===t.$route.query.type?"Game::Egg":"3"===t.$route.query.type?"Game::Scratch":"4"===t.$route.query.type?"Game::Tiger":"Game::Dice";if(void 0!==t.$route.query.id){var a={name:t.form.name,coin:t.form.residue_coin,game_coin:t.form.game_coin,valid_from:t.form.valid_from,valid_to:t.form.valid_to,desc:t.form.game.desc,prizes:JSON.stringify(i),image:t.form.image,task_image:t.form.task_image},r=t.$qs.stringify(a),o=t.$route.query.id;Object(s["z"])(o,r).then((function(e){200===e.status&&(t.$message({message:"修改成功",type:"success"}),t.$router.go(-1))}))}else{var c={type:n,name:t.form.name,coin:t.form.residue_coin,game_coin:t.form.residue_coin,valid_from:t.form.valid_from,valid_to:t.form.valid_to,desc:t.form.game.desc,prizes:JSON.stringify(i),image:t.form.image,task_image:t.form.task_image},u=t.$qs.stringify(c);Object(s["b"])(u).then((function(e){200===e.status&&(t.$message({message:"添加成功",type:"success"}),t.$router.go(-1))}))}}}))},back:function(){this.$router.go(-1)}}},u=c,l=(i("2d8e"),i("2877")),d=Object(l["a"])(u,n,a,!1,null,"76565f7f",null);e["default"]=d.exports},a796:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.disabled?i("div",[i("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):i("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[i("i",{staticClass:"el-icon-plus"}),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"建议图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"建议图片比例是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k,限制上传 "+t.fileLimit+" 张")+"\n    ")])])],1)},a=[],r=(i("28a5"),i("7f7f"),i("ac6a"),i("c5f6"),i("11c8")),o=i("5f87"),s={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)})))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var i={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(i),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(r["m"])().then((function(e){200===e.status&&(t.QiniuData.token=e.data.qiniu_token)}))},methods:{handleAvatarSuccessSpecifications:function(t,e,i,n){"000"===t.code?this.$set(this.formData.specificationsList[n],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){console.log(t),console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(o["c"])()).concat(t.name),e},handleAvatarSuccess:function(t,e,i){this.uploadPicUrl="".concat(t.key);var n=[];i.forEach((function(t){"aaa"===t.name?n.push(t.url.split("//")[1].split("/")[1]):n.push("".concat(t.response.key))})),this.images=n,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){var i=[];e.forEach((function(t){"aaa"===t.name?i.push(t.url.split("//")[1].split("/")[1]):i.push("".concat(t.response.key))})),this.images=i,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){this.$message.warning("当前限制上传 ".concat(this.fileLimit," 张图片"))}}},c=s,u=(i("2341"),i("2877")),l=Object(u["a"])(c,n,a,!1,null,null,null);e["a"]=l.exports},c89b:function(t,e,i){},f8a4:function(t,e,i){"use strict";i.d(e,"x",(function(){return a})),i.d(e,"v",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"u",(function(){return s})),i.d(e,"C",(function(){return c})),i.d(e,"j",(function(){return u})),i.d(e,"l",(function(){return l})),i.d(e,"a",(function(){return d})),i.d(e,"k",(function(){return m})),i.d(e,"y",(function(){return p})),i.d(e,"f",(function(){return f})),i.d(e,"p",(function(){return g})),i.d(e,"c",(function(){return h})),i.d(e,"o",(function(){return _})),i.d(e,"A",(function(){return v})),i.d(e,"h",(function(){return b})),i.d(e,"n",(function(){return y})),i.d(e,"b",(function(){return k})),i.d(e,"m",(function(){return x})),i.d(e,"z",(function(){return z})),i.d(e,"D",(function(){return S})),i.d(e,"g",(function(){return $})),i.d(e,"r",(function(){return q})),i.d(e,"d",(function(){return O})),i.d(e,"q",(function(){return w})),i.d(e,"B",(function(){return I})),i.d(e,"i",(function(){return E})),i.d(e,"w",(function(){return L})),i.d(e,"t",(function(){return N})),i.d(e,"s",(function(){return P}));var n=i("b775");function a(t){return n["a"].get("task_products",{params:t})}function r(t){return n["a"].get("products",{params:t})}function o(t){return n["a"].post("task_products",t)}function s(t){return n["a"].get("task_products/".concat(t))}function c(t,e){return n["a"].patch("task_products/".concat(t),e)}function u(t){return n["a"].delete("task_products/".concat(t))}function l(t){return n["a"].get("task_articles",{params:t})}function d(t){return n["a"].post("task_articles",t)}function m(t){return n["a"].get("task_articles/".concat(t))}function p(t,e){return n["a"].patch("task_articles/".concat(t),e)}function f(t){return n["a"].delete("task_articles/".concat(t))}function g(t){return n["a"].get("task_questionnaires",{params:t})}function h(t){return n["a"].post("task_questionnaires",t)}function _(t){return n["a"].get("task_questionnaires/".concat(t))}function v(t,e){return n["a"].patch("task_questionnaires/".concat(t),e)}function b(t){return n["a"].delete("task_questionnaires/".concat(t))}function y(t){return n["a"].get("task_game",{params:t})}function k(t){return n["a"].post("task_game",t)}function x(t){return n["a"].get("task_game/".concat(t))}function z(t,e){return n["a"].patch("task_game/".concat(t),e)}function S(t){return n["a"].post("tasks/audit",t)}function $(t){return n["a"].delete("task_game/".concat(t))}function q(t){return n["a"].get("task_links",{params:t})}function O(t){return n["a"].post("task_links",t)}function w(t){return n["a"].get("task_links/".concat(t))}function I(t,e){return n["a"].patch("task_links/".concat(t),e)}function E(t){return n["a"].delete("task_links/".concat(t))}function L(t,e){return n["a"].get("task_questionnaires/".concat(t,"/reply"),{params:e})}function N(t){return n["a"].get("task_game/".concat(t,"/prizes"))}function P(t,e){return n["a"].get("task_game/".concat(t,"/prize_logs"),{params:e})}}}]);