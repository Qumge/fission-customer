(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-272d9e4e","chunk-600fd891"],{"1b29":function(t,e,a){"use strict";var r=a("3812"),s=a.n(r);s.a},"1b77":function(t,e,a){"use strict";var r=a("f858"),s=a.n(r);s.a},"278f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("TopTitle",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"displayContent"},[a("el-form",{ref:"formNode",staticClass:"form-item",attrs:{model:t.formData,rules:t.formRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"登录账号",prop:"login"}},[a("el-input",{model:{value:t.formData.login,callback:function(e){t.$set(t.formData,"login",e)},expression:"formData.login"}})],1),t._v(" "),a("el-form-item",{staticClass:"radio_block",attrs:{label:"角色",prop:"role_id"}},t._l(t.roleList,(function(e,r){return a("el-radio-group",{key:r,model:{value:t.formData.role_id,callback:function(e){t.$set(t.formData,"role_id",e)},expression:"formData.role_id"}},[a("el-radio",{attrs:{label:e.id}},[t._v(t._s(e.name))])],1)})),1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:"active"}},[t._v("正常")]),t._v(" "),a("el-radio",{attrs:{label:"locked"}},[t._v("冻结")])],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.resetForm("formNode")}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.onSubmit("formNode")}}},[t._v("保存")])],1)],1)],1)],1)},s=[],o=(a("7f7f"),a("072e")),i=a("7b94"),n={components:{TopTitle:i["a"]},data:function(){return{BASE_API:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://api.shjietui.com",BASE_URL:"/"}).BASE_API,title:"添加 / 编辑账号",formData:{name:"",login:"",role_id:"",status:""},roleList:"",formRules:{name:[{required:!0,message:"登录账号不能为空",trigger:"change"}],login:[{required:!0,message:"姓名不能为空",trigger:"change"}],role_id:[{required:!0,message:"角色不能为空",trigger:"change"}],status:[{required:!0,message:"状态不能为空",trigger:"change"}]}}},created:function(){this.getRoleList()},methods:{onSubmit:function(t){var e=this;this.$refs[t].validate((function(a){if(a){var r={name:e.formData.name,login:e.formData.login,role_id:e.formData.role_id,status:e.formData.status},s=e.$qs.stringify(r);e.$route.query.id?Object(o["b"])(e.$route.query.id,s).then((function(t){200===t.status&&(e.$message({type:"success",message:"编辑成功!"}),e.$router.push("/system/accountManagement"))})):Object(o["e"])(s).then((function(a){200===a.status&&(e.$refs[t].resetFields(),e.$message({type:"success",message:"新建成功!"}),e.$router.push("/system/accountManagement"))}))}}))},resetForm:function(t,e){this[e]=!1,this.$refs[t].resetFields()},getRoleList:function(t){var e=this,a={page:1};Object(o["n"])(a).then((function(t){200===t.status&&(e.roleList=t.data,e.$route.query.id&&Object(o["g"])({id:e.$route.query.id}).then((function(t){200===t.status&&(console.log(t),e.formData={name:t.data.name,login:t.data.login,role_id:t.data.role.id,status:t.data.status})})))}))}}},l=n,u=(a("1b77"),a("d2bb"),a("2877")),c=Object(u["a"])(l,r,s,!1,null,"cace87d6",null);e["default"]=c.exports},3812:function(t,e,a){},"7b94":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topTitle"},[a("span"),a("span",{staticClass:"title"},[t._v(t._s(t.title))])])},s=[],o={props:{title:{type:String,required:!0}},data:function(){return{}}},i=o,n=(a("1b29"),a("2877")),l=Object(n["a"])(i,r,s,!1,null,"b4ebadd8",null);e["a"]=l.exports},a60d:function(t,e,a){},d2bb:function(t,e,a){"use strict";var r=a("a60d"),s=a.n(r);s.a},f858:function(t,e,a){}}]);