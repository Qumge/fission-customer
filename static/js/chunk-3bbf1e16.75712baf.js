(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bbf1e16","chunk-600fd891"],{"11c8":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"h",(function(){return o})),a.d(e,"j",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"l",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"i",(function(){return u})),a.d(e,"k",(function(){return f})),a.d(e,"n",(function(){return d})),a.d(e,"e",(function(){return m})),a.d(e,"f",(function(){return p})),a.d(e,"g",(function(){return g})),a.d(e,"m",(function(){return h})),a.d(e,"a",(function(){return v}));var s=a("b775");function i(t){return s["a"].get("categories",{params:t})}function o(t){return s["a"].post("categories",t)}function n(t){return s["a"].delete("categories/".concat(t))}function r(t,e){return s["a"].patch("categories/".concat(t),e)}function c(t){return s["a"].get("products",{params:t})}function l(t){return s["a"].post("products/destroy",t)}function u(t){return s["a"].post("products",t)}function f(t){return s["a"].delete("products/".concat(t))}function d(t){return s["a"].get("products/".concat(t))}function m(t,e){return s["a"].patch("products/".concat(t),e)}function p(t){return s["a"].post("products/audit",t)}function g(t){return s["a"].post("products/change_status",t)}function h(){return s["a"].get("qiniu/token")}function v(t){return s["a"].post("products/".concat(t.id,"/apply"))}},"1b29":function(t,e,a){"use strict";var s=a("3812"),i=a.n(s);i.a},2341:function(t,e,a){"use strict";var s=a("2de7"),i=a.n(s);i.a},"2de7":function(t,e,a){},3812:function(t,e,a){},"66b2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"商品类目",prop:"goodsClassifyTwo"}},[a("el-select",{attrs:{disabled:t.disabled,placeholder:"请选择"},on:{change:t.changeOneSelect},model:{value:t.formData.goodsClassifyOne,callback:function(e){t.$set(t.formData,"goodsClassifyOne",e)},expression:"formData.goodsClassifyOne"}},t._l(t.formOption.goodsClassifyOneSelectList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),a("el-select",{attrs:{disabled:t.disabled,placeholder:"请选择"},on:{change:t.changeTwoSelect},model:{value:t.formData.goodsClassifyTwo,callback:function(e){t.$set(t.formData,"goodsClassifyTwo",e)},expression:"formData.goodsClassifyTwo"}},t._l(t.formOption.goodsClassifyTwoSelectList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"50",disabled:t.disabled},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品头图",prop:"images"}},[a("MyUpload",{ref:"uploads",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":5,"images-list":t.imagesFiles}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品价格（金币）",prop:"price"}},[a("el-input",{attrs:{disabled:t.disabled},model:{value:t.formData.price,callback:function(e){t.$set(t.formData,"price",e)},expression:"formData.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"库存",prop:"stock"}},[a("el-input",{attrs:{disabled:t.disabled},model:{value:t.formData.stock,callback:function(e){t.$set(t.formData,"stock",e)},expression:"formData.stock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"desc"}},[a("Tinymce",{attrs:{disabled:t.disabled},model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(1)}}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(2)}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.operationButton(3)}}},[t._v("预览")])],1)],1)],1)],1)},i=[],o=(a("28a5"),a("ac6a"),a("7f7f"),a("8256")),n=a("7b94"),r=a("a796"),c=a("11c8"),l={components:{Tinymce:o["a"],TopTitle:n["a"],MyUpload:r["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,formData:{goodsClassifyOne:null,goodsClassifyTwo:null,images:[],category_id:"",name:"",desc:"",price:"",stock:"",specs:[],norms:[]},selectValue:{},formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[]},selectData:"",formRules:{goodsClassifyTwo:[{required:!0,message:"请选择商品类目",trigger:"change"}],name:[{required:!0,message:"请填写商品名称",trigger:"change"}],images:[{required:!0,message:"请选择商品头图",trigger:"change"}],price:[{required:!0,message:"请填写商品价格",trigger:"change"}],stock:[{required:!0,message:"请填写商品库存",trigger:"change"}],desc:[{required:!0,message:"请填写商品详情",trigger:"change"}]},title:"发布/编辑商品",disabled:!1,imagesFiles:[]}},created:function(){var t=this;Object(c["c"])().then((function(e){t.selectData=e.data,t.formOption.goodsClassifyOneSelectList=e.data})),this.$route.query.id&&this.getInfo()},methods:{getInfo:function(){var t=this;Object(c["n"])(this.$route.query.id).then((function(e){t.formData.name=e.data.name,t.formData.desc=e.data.desc,t.formData.price=e.data.price,t.formData.stock=e.data.stock,t.formData.goodsClassifyOne=e.data.category.parent.id,t.changeOneSelect(e.data.category.parent.id),t.formData.goodsClassifyTwo=e.data.category.id,e.data&&e.data.images&&e.data.images.length>0&&(t.imagesFiles=[],t.imagesFiles=e.data.images);for(var a=e.data.specs,s=function(e){t.formData.specs.push({name:a[e].name,values:[]}),a[e].spec_values.length>0&&a[e].spec_values.forEach((function(a){t.formData.specs[e].values.push({name:a.name})}))},i=0;i<a.length;i++)s(i);var o=e.data.norms;o.forEach((function(e,a){var s=e.spec_attr_names.split("/");s.forEach((function(e,s){t.selectValue["name".concat(a,"-").concat(s)]=e}))}));var n=e.data.norms,r=[];n.forEach((function(t){r.push({name:[],stock:t.stock,price:t.price})})),t.formData.norms=r}))},addNormsRow:function(){if(!(this.formData.specs.length>0))return this.$message.error("请完善规格信息");var t=!0;if(this.formData.specs.forEach((function(e,a){(e.values.filter((function(t){return""===t.name})).length>0||""===e.name)&&(t=!1)})),!t)return this.$message.error("请完善规格信息");this.formData.norms.push({name:[],price:"",stock:""})},addSpecsRow:function(){this.formData.specs.push({name:"",values:[{name:""}]})},addSpecsLine:function(t){this.formData.specs[t].values.push({name:""})},onSubmit:function(t){var e=this;this.formData.images=this.$refs.uploads.images,this.$refs[t].validate((function(a){if(a){var s={category_id:e.formData.goodsClassifyTwo,images:JSON.stringify(e.formData.images),name:e.formData.name,desc:e.formData.desc,price:e.formData.price,stock:e.formData.stock,type:"CoinProduct"},i=e.$qs.stringify(s);e.$route.query.id?Object(c["e"])(e.$route.query.id,i).then((function(a){200===a.status&&(e.$refs[t].resetFields(),e.$message({type:"success",message:"编辑商品成功!"}),e.$router.push("/commodity/goldCoinMall/1"))})):Object(c["i"])(i).then((function(t){200===t.status&&(e.$message({type:"success",message:"创建商品成功!"}),e.$router.push("/commodity/goldCoinMall/1"))})).catch((function(){}))}}))},changeOneSelect:function(t){for(var e=0;e<this.selectData.length;e++)this.selectData[e].id===t&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[e].children,this.formData.goodsClassifyTwo=this.formOption.goodsClassifyTwoSelectList[0].id)},changeTwoSelect:function(t){for(var e=0;e<this.selectData.length;e++)this.selectData[e].id===t&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[e].children)},resetForm:function(t,e){console.log("重置表单:"),this[e]=!1,this.$refs[t].resetFields()},operationButton:function(t){1===t&&this.onSubmit("formNode")}}},u=l,f=(a("f8a9"),a("2877")),d=Object(f["a"])(u,s,i,!1,null,null,null);e["default"]=d.exports},"7b94":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},i=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},n=o,r=(a("1b29"),a("2877")),c=Object(r["a"])(n,s,i,!1,null,"b4ebadd8",null);e["a"]=c.exports},a796:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.disabled?a("div",[a("img",{staticClass:"goodsPhone",attrs:{src:t.$commonImg}})]):a("el-upload",{attrs:{data:t.QiniuData,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"on-success":t.handleAvatarSuccess,"file-list":t.formOption.goodsImageList,limit:t.fileLimit,"on-exceed":t.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n      "+t._s(t.fixedSize?"建议图片尺寸"+t.size.width+"*"+t.size.height+"px ，大小不超过"+t.fileSize+"k":"建议图片比例是"+t.proportion.width+"（宽）："+t.proportion.height+"（高），大小不超过"+t.fileSize+"k")+"\n    ")])])],1)},i=[],o=(a("28a5"),a("7f7f"),a("ac6a"),a("c5f6"),a("11c8")),n=a("5f87"),r={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var t=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(e){var a={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(a),t.images.push(e.file_path)})))},deep:!0}},created:function(){var t=this;this.$nextTick((function(){console.log(t.imagesList),t.imagesList&&t.imagesList.length>0&&t.imagesList.forEach((function(e){var a={name:"aaa",url:e.image_path};t.formOption.goodsImageList.push(a),t.images.push(e.file_path)}))}))},mounted:function(){var t=this;Object(o["m"])().then((function(e){200===e.status&&(t.QiniuData.token=e.data.qiniu_token)}))},methods:{handleAvatarSuccessSpecifications:function(t,e,a,s){"000"===t.code?this.$set(this.formData.specificationsList[s],"thumbnailUrl",t.data):this.$message.error(t.message)},beforeAvatarUploadSpecifications:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),e},beforeAvatarUpload:function(t){console.log("上传文件之前:");var e="image/jpeg"===t.type||"image/png"===t.type;return e||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(n["c"])()).concat(t.name),e},handleAvatarSuccess:function(t,e,a){this.uploadPicUrl="".concat(t.key);var s=[];a.forEach((function(t){"aaa"===t.name?s.push(t.url.split("//")[1].split("/")[1]):s.push("".concat(t.response.key))})),this.images=s,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(t,e){var a=[];e.forEach((function(t){"aaa"===t.name?a.push(t.url.split("//")[1].split("/")[1]):a.push("".concat(t.response.key))})),this.images=a,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(t,e){this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))}}},c=r,l=(a("2341"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,null,null);e["a"]=u.exports},a983:function(t,e,a){},f8a9:function(t,e,a){"use strict";var s=a("a983"),i=a.n(s);i.a}}]);