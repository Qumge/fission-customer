(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14360dfe"],{"11c8":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"g",(function(){return s})),a.d(t,"i",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"k",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"h",(function(){return u})),a.d(t,"j",(function(){return d})),a.d(t,"m",(function(){return f})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"f",(function(){return g})),a.d(t,"l",(function(){return h}));var o=a("b775");function i(e){return o["a"].get("categories",{params:e})}function s(e){return o["a"].post("categories",e)}function n(e){return o["a"].delete("categories/".concat(e))}function r(e,t){return o["a"].patch("categories/".concat(e),t)}function l(e){return o["a"].get("products",{params:e})}function c(e){return o["a"].post("products/destroy",e)}function u(e){return o["a"].post("products",e)}function d(e){return o["a"].delete("products/".concat(e))}function f(e){return o["a"].get("products/".concat(e))}function m(e,t){return o["a"].patch("products/".concat(e),t)}function p(e){return o["a"].post("products/audit",e)}function g(e){return o["a"].post("products/change_status",e)}function h(){return o["a"].get("qiniu/token")}},"1b29":function(e,t,a){"use strict";var o=a("3812"),i=a.n(o);i.a},2341:function(e,t,a){"use strict";var o=a("2de7"),i=a.n(o);i.a},"2de7":function(e,t,a){},3812:function(e,t,a){},4626:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:e.title}}),e._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:e.formData,rules:e.formRules,"label-width":"180px"}},[a("el-form-item",{attrs:{label:"商品类目",prop:"goodsClassifyTwo"}},[a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择"},on:{change:e.changeOneSelect},model:{value:e.formData.goodsClassifyOne,callback:function(t){e.$set(e.formData,"goodsClassifyOne",t)},expression:"formData.goodsClassifyOne"}},e._l(e.formOption.goodsClassifyOneSelectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择"},on:{change:e.changeTwoSelect},model:{value:e.formData.goodsClassifyTwo,callback:function(t){e.$set(e.formData,"goodsClassifyTwo",t)},expression:"formData.goodsClassifyTwo"}},e._l(e.formOption.goodsClassifyTwoSelectList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"50",disabled:e.disabled},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品头图",prop:"images"}},[e.disabled?a("div",{staticClass:"images_box"},e._l(e.imagesFiles,(function(e,t){return a("img",{key:t,attrs:{src:e.image_path,alt:""}})})),0):a("MyUpload",{ref:"uploads",attrs:{"file-size":1e3,"fixed-size":!1,size:{width:300,height:300},proportion:{width:2,height:1},"file-limit":5,"images-list":e.imagesFiles}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"购买返金币",prop:"coin"}},[a("el-input",{attrs:{disabled:e.disabled},model:{value:e.formData.coin,callback:function(t){e.$set(e.formData,"coin",t)},expression:"formData.coin"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"规格",prop:"specs"}},[e.disabled?e._e():a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addSpecsRow}},[e._v("添加规格")]),e._v(" "),e._l(e.formData.specs,(function(t,o){return a("div",{key:o,staticClass:"demo-input-suffix"},[a("span",[e._v("规格名：")]),e._v(" "),a("el-input",{attrs:{disabled:e.disabled,placeholder:"请输入内容"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}}),e._v(" "),a("div",{staticClass:"demo-input-suffix guige"},[a("span",[e._v("规    格：")]),e._v(" "),e._l(t.values,(function(t,o){return a("el-input",{key:o,attrs:{value:t.name,disabled:e.disabled,placeholder:"请输入内容"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item2.name"}})}))],2),e._v(" "),e.disabled?e._e():a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.addSpecsLine(o)}}},[e._v("添加项")])],1)}))],2),e._v(" "),a("el-form-item",{attrs:{label:"规格详细",prop:"norms"}},[e.disabled?e._e():a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.addNormsRow()}}},[e._v("+添加规格详细")]),e._v(" "),e.formData.norms.length>0?a("el-table",{staticStyle:{width:"100%line-height:36px"},attrs:{border:"",data:e.formData.norms}},[e._l(e.formData.specs,(function(t,o){return a("el-table-column",{key:o,attrs:{label:t.name,"min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(i){return[a("el-select",{attrs:{disabled:e.disabled,placeholder:"请选择"},model:{value:e.selectValue["name"+i.$index+"-"+o],callback:function(t){e.$set(e.selectValue,"name"+i.$index+"-"+o,t)},expression:"selectValue[`name${scope.$index}-${index}`]"}},e._l(t.values,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)]}}],null,!0)})})),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:e.disabled,value:t.row.price},model:{value:t.row.price,callback:function(a){e.$set(t.row,"price",a)},expression:"scope.row.price"}})]}}],null,!1,4182707326)}),e._v(" "),a("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:e.disabled,value:t.row.stock},model:{value:t.row.stock,callback:function(a){e.$set(t.row,"stock",a)},expression:"scope.row.stock"}})]}}],null,!1,2617543774)})],2):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"商品详情",prop:"desc"}},[e.disabled?a("div",{domProps:{innerHTML:e._s(e.formData.desc)}}):a("Tinymce",{model:{value:e.formData.desc,callback:function(t){e.$set(e.formData,"desc",t)},expression:"formData.desc"}})],1),e._v(" "),e.disabled?a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.operationButton(1)}}},[e._v("通过")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.operationButton(2)}}},[e._v("拒绝")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.operationButton(3)}}},[e._v("编辑")])],1):a("el-form-item",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.cancelButton}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.submitButtonTip}},[e._v("保存")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTipContent.title,visible:e.dialogTipContent.visible,width:"30%",center:""},on:{"update:visible":function(t){return e.$set(e.dialogTipContent,"visible",t)}}},[a("el-input",{attrs:{type:e.dialogTipContent.type,rows:2,maxlength:e.dialogTipContent.maxlength,placeholder:e.dialogTipContent.placeholder},model:{value:e.dialogTipContent.content,callback:function(t){e.$set(e.dialogTipContent,"content",t)},expression:"dialogTipContent.content"}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTipContent.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.confirmButton(e.dialogTipContent.data)}}},[e._v("确 定")])],1)],1)],1)],1)},i=[],s=(a("28a5"),a("ac6a"),a("7f7f"),a("8256")),n=a("7b94"),r=a("a796"),l=a("11c8"),c={components:{Tinymce:s["a"],TopTitle:n["a"],MyUpload:r["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,formData:{goodsClassifyOne:null,goodsClassifyTwo:null,images:[],category_id:"",name:"",coin:"",desc:"",price:"",specs:[],norms:[]},selectValue:{},formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[]},selectData:"",formRules:{goodsClassifyTwo:[{required:!0,message:"请选择商品类目",trigger:"change"}],name:[{required:!0,message:"请填写商品名称",trigger:"change"}],images:[{required:!0,message:"请选择商品头图",trigger:"change"}],price:[{required:!0,message:"请填写商品价格",trigger:"change"}],coin:[{required:!0,message:"请填写购买返金币",trigger:"change"}],specs:[{required:!0,message:"请填写规格",trigger:"change"}],norms:[{required:!0,message:"请填写规格详细",trigger:"change"}],desc:[{required:!0,message:"请填写商品详情",trigger:"change"}]},title:"发布/编辑商品",disabled:!0,imagesFiles:[],dialogTipContent:{maxlength:50,content:"",title:"",placeholder:"",type:"",visible:!1}}},created:function(){var e=this;console.log("当前组件渲染完成:"),console.log(this.$route),Object(l["b"])().then((function(t){e.selectData=t.data,e.formOption.goodsClassifyOneSelectList=t.data})),this.$route.query.id&&this.getInfo()},methods:{getInfo:function(){var e=this;Object(l["m"])(this.$route.query.id).then((function(t){console.log(t),e.formData.name=t.data.name,e.formData.coin=t.data.coin,e.formData.desc=t.data.desc,e.formData.price=t.data.price,e.formData.goodsClassifyOne=t.data.category.parent.id,e.changeOneSelect(t.data.category.parent.id),e.formData.goodsClassifyTwo=t.data.category.id,t.data&&t.data.images&&t.data.images.length>0&&(e.imagesFiles=[],e.imagesFiles=t.data.images);for(var a=t.data.specs,o=function(t){e.formData.specs.push({name:a[t].name,values:[]}),a[t].spec_values.length>0&&a[t].spec_values.forEach((function(a){console.log(e.formData.specs),e.formData.specs[t].values.push({name:a.name})}))},i=0;i<a.length;i++)o(i);var s=t.data.norms;console.log(s),s.forEach((function(t,a){var o=t.spec_attr_names.split("/");o.forEach((function(t,o){e.selectValue["name".concat(a,"-").concat(o)]=t}))}));var n=t.data.norms,r=[];n.forEach((function(e){r.push({name:[],stock:e.stock,price:e.price})})),console.log(r),e.formData.norms=r}))},addNormsRow:function(){if(!(this.formData.specs.length>0))return this.$message.error("请完善规格信息");var e=!0;if(this.formData.specs.forEach((function(t,a){console.log(t.values.filter((function(e){return""===e.name}))),(t.values.filter((function(e){return""===e.name})).length>0||""===t.name)&&(e=!1)})),!e)return this.$message.error("请完善规格信息");this.formData.norms.push({name:[],price:"",stock:""})},addSpecsRow:function(){this.formData.specs.push({name:"",values:[{name:""}]})},addSpecsLine:function(e){this.formData.specs[e].values.push({name:""})},onSubmit:function(e){var t=this;this.formData.images=this.$refs.uploads.images,this.$refs[e].validate((function(a){if(a){console.log("提交表单:"),console.log(t.formData),console.log(t.selectValue);for(var o=t.formData.specs,i=0;i<o.length;i++){for(var s=[],n=0;n<o[i].values.length;n++)s.push(o[i].values[n].name);o[i].values=s}for(var r=o,c=t.formData.norms,u=0;u<c.length;u++)for(var d in t.selectValue)d.split("-")[0]==="name".concat(u)&&c[u].name.push(t.selectValue[d]);var f=c,m={category_id:t.formData.goodsClassifyTwo,images:JSON.stringify(t.formData.images),name:t.formData.name,coin:t.formData.coin,desc:t.formData.desc,price:t.formData.price,type:"MoneyProduct",specs:JSON.stringify(r),norms:JSON.stringify(f)};console.log(m);var p=t.$qs.stringify(m);t.$route.query.id?Object(l["d"])(t.$route.query.id,p).then((function(a){console.log(a),t.$refs[e].resetFields(),t.$message({type:"success",message:"编辑商品成功!"}),t.getInfo()})):Object(l["h"])(p).then((function(e){t.$message({type:"success",message:"创建商品成功!"})})).catch((function(){}))}}))},changeOneSelect:function(e){for(var t=0;t<this.selectData.length;t++)this.selectData[t].id===e&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[t].children,this.formData.goodsClassifyTwo=this.formOption.goodsClassifyTwoSelectList[0].id)},changeTwoSelect:function(e){for(var t=0;t<this.selectData.length;t++)this.selectData[t].id===e&&(this.formOption.goodsClassifyTwoSelectList=this.selectData[t].children)},resetForm:function(e,t){console.log("重置表单:"),this[t]=!1,this.$refs[e].resetFields()},operationButton:function(e){var t=this;if(1===e){var a=this.$qs.stringify({ids:JSON.stringify([this.$route.query.id]),status:"success"});Object(l["e"])(a).then((function(e){console.log(e),t.$message({type:"success",message:"已通过"}),t.$router.history.go(-1)}))}if(2===e){var o={title:"请输入拒绝理由",placeholder:"请输入拒绝理由,不能为空,最多50字",type:"textarea",visible:!0,data:{type:"batch",value:2}};return Object.assign(this.dialogTipContent,o),!1}3===e&&(this.disabled=!1)},confirmButton:function(e){var t=this;if(""===this.dialogTipContent.content)return this.$message.error("请填写理由后再进行操作");var a=this.$qs.stringify({ids:JSON.stringify([this.$route.query.id]),status:"failed",reason:this.dialogTipContent.content});Object(l["e"])(a).then((function(e){console.log(e),t.$message({type:"success",message:"已拒绝"}),t.$router.history.go(-1)}))},submitButtonTip:function(){var e=this;this.$confirm("若保存，则商品变为已发布状态","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.onSubmit("formNode")})).catch((function(){}))},cancelButton:function(){this.disabled=!0}}},u=c,d=(a("57be"),a("2877")),f=Object(d["a"])(u,o,i,!1,null,null,null);t["default"]=f.exports},"57be":function(e,t,a){"use strict";var o=a("8848"),i=a.n(o);i.a},"7b94":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[e._v(e._s(e.title))])])},i=[],s={props:{title:{type:String,required:!0}},data:function(){return{}}},n=s,r=(a("1b29"),a("2877")),l=Object(r["a"])(n,o,i,!1,null,"b4ebadd8",null);t["a"]=l.exports},8848:function(e,t,a){},a796:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.disabled?a("div",[a("img",{staticClass:"goodsPhone",attrs:{src:e.$commonImg}})]):a("el-upload",{attrs:{data:e.QiniuData,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"on-success":e.handleAvatarSuccess,"file-list":e.formOption.goodsImageList,limit:e.fileLimit,"on-exceed":e.handleExceed,action:"https://upload-z2.qiniup.com","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n      "+e._s(e.fixedSize?"建议图片尺寸"+e.size.width+"*"+e.size.height+"px ，大小不超过"+e.fileSize+"k":"建议图片比例是"+e.proportion.width+"（宽）："+e.proportion.height+"（高），大小不超过"+e.fileSize+"k")+"\n    ")])])],1)},i=[],s=(a("28a5"),a("7f7f"),a("ac6a"),a("c5f6"),a("11c8")),n=a("5f87"),r={props:{size:{type:Object,required:!0},fixedSize:{type:Boolean,required:!0},proportion:{type:Object,required:!0},fileSize:{type:Number,required:!0},fileLimit:{type:Number,required:!0},imagesList:{type:Array,required:!0}},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,images:[],formOption:{goodsClassifyOneSelectList:[],goodsClassifyTwoSelectList:[],hasModifyGoodsImage:"",goodsImageList:[]},disabled:!1,QiniuData:{key:"",token:""},uploadPicUrl:"",qiniuaddr:"http://file.shjietui.com/"}},watch:{imagesList:{handler:function(){var e=this;this.imagesList&&this.imagesList.length>0&&(this.images=[],this.formOption.goodsImageList=[],this.imagesList.forEach((function(t){var a={name:"aaa",url:t.image_path};e.formOption.goodsImageList.push(a),e.images.push(t.file_path)})))},deep:!0}},created:function(){var e=this;this.$nextTick((function(){console.log(e.imagesList),e.imagesList&&e.imagesList.length>0&&e.imagesList.forEach((function(t){var a={name:"aaa",url:t.image_path};e.formOption.goodsImageList.push(a),e.images.push(t.file_path)}))}))},mounted:function(){var e=this;Object(s["l"])().then((function(t){e.QiniuData.token=t.data.qiniu_token}))},methods:{handleAvatarSuccessSpecifications:function(e,t,a,o){console.log("文件上传成功:"),console.log(e),console.log(t),console.log(a),console.log(o),"000"===e.code?this.$set(this.formData.specificationsList[o],"thumbnailUrl",e.data):this.$message.error(e.message)},beforeAvatarUploadSpecifications:function(e){console.log("上传文件之前:");var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),t},beforeAvatarUpload:function(e){console.log("上传文件之前:");var t="image/jpeg"===e.type||"image/png"===e.type;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),this.QiniuData.key="".concat(Object(n["c"])()).concat(e.name),t},handleAvatarSuccess:function(e,t,a){console.log("文件上传成功:"),console.log(e),console.log(t),console.log(a),this.uploadPicUrl="".concat(e.key),console.log(this.uploadPicUrl);var o=[];console.log(a),a.forEach((function(e){"aaa"===e.name?o.push(e.url.split("//")[1].split("/")[1]):o.push("".concat(e.response.key))})),this.images=o,this.formOption.hasModifyGoodsImage=!0},handleRemove:function(e,t){console.log("文件列表移除文件:");var a=[];console.log(t),t.forEach((function(e){"aaa"===e.name?a.push(e.url.split("//")[1].split("/")[1]):a.push("".concat(e.response.key))})),this.images=a,this.formOption.hasModifyGoodsImage=!0},handleExceed:function(e,t){console.log("文件超出个数限:"),this.$message.warning("当前限制选择 ".concat(this.fileLimit," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))}}},l=r,c=(a("2341"),a("2877")),u=Object(c["a"])(l,o,i,!1,null,null,null);t["a"]=u.exports}}]);