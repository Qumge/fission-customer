(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-123c9454"],{"1b29":function(t,o,e){"use strict";var a=e("3812"),s=e.n(a);s.a},3812:function(t,o,e){},"7a51":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app-container"},[e("TopTitle",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"displayContent"},[e("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"180px"}},[e("el-form-item",{attrs:{label:"一次游戏消耗金币",prop:"goodsClassifyTwo"}},[e("el-input",{attrs:{disabled:t.disabled},model:{value:t.formData.jinbi,callback:function(o){t.$set(t.formData,"jinbi",o)},expression:"formData.jinbi"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"中奖设置",prop:"brandName"}},[e("div",{staticClass:"winningSettings"},[e("div",{staticClass:"top"},[e("span",[t._v("金币数")]),e("span",[t._v("中奖概率（%）")])]),t._v(" "),t._l(t.winningSettings,(function(o,a){return e("div",{key:a,staticClass:"content"},[e("el-input",{attrs:{type:"number",maxlength:"3",placeholder:"请输入内容"},on:{blur:function(){return t.changeGoldNumber(a,o.goldNumber)}},model:{value:o.goldNumber,callback:function(e){t.$set(o,"goldNumber",e)},expression:"item.goldNumber"}}),t._v(" "),e("el-input",{attrs:{type:"number",maxlength:"5",placeholder:"请输入内容"},on:{blur:function(){return t.changeProbability(a,o.probability)}},model:{value:o.probability,callback:function(e){t.$set(o,"probability",e)},expression:"item.probability"}}),t._v(" "),e("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-delete"},on:{click:function(){return t.deleteLine(a)}}})],1)})),t._v(" "),e("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"primary",size:"small"},on:{click:t.addLine}},[t._v("新增")]),e("span",[t._v("中奖概率必须为100%")])],2)]),t._v(" "),e("el-form-item",{attrs:{label:"背景图片",prop:"goodsImageUrlList"}},[t.disabled?e("div",[e("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):e("el-upload",{attrs:{"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:5,"on-exceed":t.handleExceed,action:t.BASE_API+"function/file/upload/product","list-type":"picture-card"}},[e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("345*345 图片大小不超过60k")])])],1),t._v(" "),e("el-form-item",{attrs:{label:"游戏说明",prop:"goodsNames"}},[e("el-input",{attrs:{rows:"4",type:"textarea",disabled:t.disabled},model:{value:t.formData.goodsNames,callback:function(o){t.$set(t.formData,"goodsNames",o)},expression:"formData.goodsNames"}})],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{size:"mini",type:"primary"},on:{clcik:function(o){return t.operationButton(1)}}},[t._v("保存")]),t._v(" "),e("el-button",{attrs:{size:"mini",type:"primary"},on:{clcik:function(o){return t.operationButton(2)}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{size:"mini",type:"primary"},on:{clcik:function(o){return t.operationButton(3)}}},[t._v("预览")])],1)],1)],1)],1)},s=[],i=(e("a481"),e("20d6"),e("c5f6"),e("ac6a"),e("7b94")),n={components:{TopTitle:i["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,formData:{goodsId:"",brandName:"",goodsName:"",goodsNames:"",goodsClassifyOne:null,goodsClassifyTwo:null,classifyId:null,goodsType:null,goodsImageUrlList:[],specificationsList:[],limitCounts:null,description:"",freightTemplateId:1,own:null,invoice:null,useCoupon:0,returnIntegral:0,integralMultiple:null,recommendGoods:0,cartRecommend:0,goodsStatus:null},formOption:{hasModifyGoodsImage:!1,goodsImageList:[],goodsImageUrlList:[],goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],classifySelectList:[],freightTemplateIdSelectList:[],goodsStatusSelectList:[{value:1,label:"上架"},{value:2,label:"下架"}]},formRules:{aaa:[{required:!0,message:"zzz不能为空",trigger:"change"}]},title:"发布/编辑商品",disabled:!1,winningSettings:[{probability:"100",goldNumber:"10"},{probability:"100",goldNumber:"10"},{probability:"100",goldNumber:"10"},{probability:"100",goldNumber:"10"}]}},created:function(){console.log(this.$route.query);var t={first:"刮刮卡",second:"老虎机",third:"掷骰子"};this.title="编辑".concat(t[this.$route.query.type]),console.log("当前组件渲染完成:"),console.log(this.$route)},methods:{init:function(){console.log("加载默认数据");var t={};this.$webApi.parent("API",t).then((function(t){console.log(t)}))},onSubmit:function(t){var o=this;this.$refs[t].validate((function(e){if(e){console.log("提交表单:"),console.log(o.formData),o.formData.goodsImageUrlList=[],console.log(o.formOption.goodsImageUrlList),o.formOption.hasModifyGoodsImage?o.formOption.goodsImageUrlList.forEach((function(t){t.response&&t.response.data?o.formData.goodsImageUrlList.push(t.response.data):o.formData.goodsImageUrlList.push(t.url)})):o.formOption.goodsImageList.forEach((function(t){o.formData.goodsImageUrlList.push(t.url)}));var a={goodsId:o.formData.goodsId,goodsNames:o.formData.goodsNames,goodsClassifyOne:o.formData.goodsClassifyOne,goodsClassifyTwo:o.formData.goodsClassifyTwo,classifyId:o.formData.classifyId,goodsImageUrlList:o.formData.goodsImageUrlList,specificationsList:o.formData.specificationsList,limitCounts:o.formData.limitCounts>0?parseInt(o.formData.limitCounts):0,description:o.formData.description,freightTemplateId:o.formData.freightTemplateId?o.formData.freightTemplateId:1,useCoupon:o.formData.useCoupon?1:0,returnIntegral:o.formData.returnIntegral?1:0,integralMultiple:o.formData.returnIntegral?Number(o.formData.integralMultiple):null,recommendGoods:o.formData.recommendGoods?1:0,cartRecommend:o.formData.cartRecommend?1:0,goodsStatus:o.formData.goodsStatus};a.specificationsList.forEach((function(t){""===t.pricingRmb&&t.pricingRmb}));var s={platformId:o.$route.params.qid};o.$webApi.product("update",a,s).then((function(e){console.log(e),o.$store.dispatch("setLoadingStatus",!1),o.$refs[t].resetFields(),o.$message({type:"success",message:"编辑成功!"}),o.reload()})).catch((function(){o.$store.dispatch("setLoadingStatus",!1)}))}}))},remoteMethodBrandName:function(t){var o=this;if(console.log("模糊搜索-品牌"),""!==t){var e={brandName:t};this.productOption.brandNameLoading=!0,this.$webApi.public("brandList",e).then((function(t){console.log(t),o.productOption.brandNameLoading=!1,t.data&&t.data.length>0&&(o.productOption.brandNameSelectList=t.data)}))}},resetForm:function(t,o){console.log("重置表单:"),this[o]=!1,this.$refs[t].resetFields()},getProductInof:function(t){var o=this;console.log("选择当前商品为发布的商品，并获取商品信息:");var e={goodsId:t},a={platformId:this.$route.params.qid};this.$webApi.product("detail",e,a).then((function(e){if(console.log("加载默认数据："),console.log("res"),e.data&&(o.formData.goodsId=t,o.formData=e.data,o.queryClassifyListByParentId(0,1,e.data.goodsClassifyOne),e.goodsClassifyTwo&&o.queryClassifyListByParentId(e.goodsClassifyOne,1,e.data.goodsClassifyTwo),e.classifyId&&o.queryClassifyListByParentId(e.goodsClassifyTwo,1,e.data.classifyId),o.formOption.hasModifyGoodsImage=!1,e.data&&e.data.goodsImageUrlList&&e.data.goodsImageUrlList.length>0&&e.data.goodsImageUrlList.forEach((function(t){var e={name:"aaa",url:t};o.formOption.goodsImageList.push(e),o.formData.goodsImageUrlList.push(e)})),o.formData.specificationsList&&o.formData.specificationsList.length>0)){var a=o.formData.specificationsList.findIndex((function(t){return 1===Number(t.defaultSpecification)}));-1===a&&(o.formData.specificationsList[0].defaultSpecification=1)}o.formOption.categoryOneName=e.data.categoryOneName,o.formOption.categoryTwoName=e.data.categoryTwoName,o.formOption.categoryThreeName=e.data.categoryThreeName}))},handleAvatarSuccessSpecifications:function(t,o,e,a){console.log("文件上传成功:"),console.log(t),console.log(o),console.log(e),console.log(a),"000"===t.code?this.$set(this.formData.specificationsList[a],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var o="image/jpeg"===t.type||"image/png"===t.type;return o||this.$message.error("上传图片只能是 JPG/PNG 格式!"),o},queryClassifyListByParentId:function(t,o,e){var a=this,s={parentId:t},i={platformId:this.$route.params.qid};this.$webApi.public("queryClassifyListByParentId",s,i).then((function(t){console.log("商品分类列表查询-"+o+"级："),console.log(t),1===o?(a.formData.goodsClassifyOne="",a.formData.goodsClassifyTwo="",a.formData.classifyId="",a.formOption.goodsClassifyOneSelectList=t.data&&t.data.length>0?t.data:[],a.formData.goodsClassifyOne=e||""):2===o?(a.formData.goodsClassifyTwo="",a.formData.classifyId="",a.formOption.goodsClassifyTwoSelectList=t.data&&t.data.length>0?t.data:[],a.formData.goodsClassifyTwo=e||""):3===o&&(a.formData.classifyId="",a.formOption.classifySelectList=t.data&&t.data.length>0?t.data:[],a.formData.classifyId=e||"")}))},setDefaultDisplay:function(t){var o=this;this.formData.specificationsList.forEach((function(e,a){o.formData.specificationsList[a].defaultSpecification=t===a?1:0,console.log(o.formData.specificationsList)}))},beforeAvatarUpload:function(t){var o=this;console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024<60;e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 60KB!");var s=new Promise((function(o,e){var a=345,s=345,i=window.URL||window.webkitURL,n=new Image;n.onload=function(){var t=n.width===a&&n.height===s;console.log("valid:"),console.log(t),t?o():e()},n.src=i.createObjectURL(t),console.log("img.src:"),console.log(n.src)})).then((function(){return t}),(function(){return o.$message.error("上传的图片大小必须是345*345!"),Promise.reject()}));return e&&a&&s},handleAvatarSuccess:function(t,o,e){console.log("文件上传成功:"),console.log(t),console.log(o),console.log(e),"000"===t.code?(this.formOption.goodsImageUrlList=e,this.formOption.hasModifyGoodsImage=!0):this.$message.error(t.message)},handleRemove:function(t,o){console.log("文件列表移除文件:"),console.log(t,o),this.formOption.goodsImageUrlList=o,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,o){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 5 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+o.length," 个文件"))},operationButton:function(t){},deleteLine:function(t){var o=this.winningSettings;o.splice(t,1),this.winningSettings=o,console.log(o)},addLine:function(){var t=this.winningSettings;t.push({probability:"",goldNumber:""})},changeProbability:function(t,o){console.log(e+"---"+o);var e=o.replace(/[^\d.]/g,"");console.log(e),e>=1&&e<=100&&(this.winningSettings[t].probability=e),e>100&&(this.winningSettings[t].probability=100),e<1&&(this.winningSettings[t].probability=1),e||(console.log(e),this.winningSettings[t].probability=" ")},changeGoldNumber:function(t,o){var e=o.replace(/[^\d.]/g,"");console.log(e+"---"+t),e>=1&&e<=1e4&&(this.winningSettings[t].goldNumber=e),e>1e4&&(this.winningSettings[t].goldNumber=1e4),e<1&&(this.winningSettings[t].goldNumber=1),e||(this.winningSettings[t].goldNumber=" ")}}},r=n,l=(e("a165"),e("2877")),c=Object(l["a"])(r,a,s,!1,null,null,null);o["default"]=c.exports},"7b94":function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"topTitle"},[e("span"),e("span",{staticClass:"title"},[t._v(t._s(t.title))])])},s=[],i={props:{title:{type:String,required:!0}},data:function(){return{}}},n=i,r=(e("1b29"),e("2877")),l=Object(r["a"])(n,a,s,!1,null,"b4ebadd8",null);o["a"]=l.exports},a165:function(t,o,e){"use strict";var a=e("da43"),s=e.n(a);s.a},da43:function(t,o,e){}}]);