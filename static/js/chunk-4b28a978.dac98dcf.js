(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b28a978"],{"2ec1":function(e,t,n){},"5ad2":function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"n",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"h",(function(){return g})),n.d(t,"m",(function(){return h})),n.d(t,"e",(function(){return v}));var i=n("b775");function a(){return i["a"].get("addresses")}function s(e){return i["a"].post("addresses",e)}function o(e,t){return i["a"].patch("addresses/".concat(e),t)}function r(e){return i["a"].delete("addresses/".concat(e))}function l(e,t){return i["a"].post("addresses/".concat(e,"/set_tag"),t)}function c(e){return i["a"].post("cash_rules",e)}function u(e){return i["a"].get("cash",{params:e})}function d(){return i["a"].get("share_rules")}function p(e){return i["a"].post("share_rules",e)}function f(e){return i["a"].post("cash/audit",e)}function m(e){return i["a"].get("games/show_game",{params:e})}function g(e){return i["a"].post("games",e)}function h(e){return i["a"].get("sign_rules",{params:e})}function v(e){return i["a"].post("sign_rules",e)}},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",s.appendChild(r)),a.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(n.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(n.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=a.color,r.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var s={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(o)),s.install=o;t["a"]=s},"8d41":function(e,t,n){},a50a:function(e,t,n){"use strict";var i=n("2ec1"),a=n.n(i);a.a},e329:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"app-back"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n        新建地址\n      ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"联系人","min-width":"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"电话","min-width":"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.phone))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"地址","min-width":"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(i.content))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"默认设置","class-name":"status-col","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",[!1===t.row["send?"]?n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(n){return e.setAddress(t.row.id,1)}}},[e._v("发货地址")]):e._e()],1),e._v(" "),n("div",[!1===t.row["receive?"]?n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(n){return e.setAddress(t.row.id,2)}}},[e._v("退货地址")]):e._e()],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","min-width":"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v("\n            编辑\n          ")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleModifyStatus(i,"deleted")}}},[e._v("\n            删除\n          ")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"联系人",prop:"name"}},[n("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"电话",prop:"phone"}},[n("el-input",{model:{value:e.temp.phone,callback:function(t){e.$set(e.temp,"phone",t)},expression:"temp.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"地址",prop:"content"}},[n("el-input",{model:{value:e.temp.content,callback:function(t){e.$set(e.temp,"content",t)},expression:"temp.content"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确定\n      ")])],1)],1)],1)},a=[],s=(n("7f7f"),n("5ad2")),o=n("6724"),r={name:"ComplexTable",directives:{waves:o["a"]},data:function(){return{tableKey:0,list:null,listLoading:!1,temp:{},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新建"},rules:{name:[{required:!0,message:"请填写联系人",trigger:"blur"}],phone:[{required:!0,message:"请填写电话",trigger:"blur"}],content:[{required:!0,message:"请填写地址",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(s["i"])().then((function(t){console.log(t),e.list=t.data}))},handleModifyStatus:function(e,t){var n=this;if("deleted"===t){var i=e.id;this.$confirm("是否将改地址删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["b"])(i).then((function(e){console.log(e),n.$message({message:"删除成功",type:"success"}),n.getList()}))}))}},resetTemp:function(){this.temp={id:void 0,name:"",phone:"",content:""}},handleCreate:function(){this.list.length>20?this.$message.error("最多添加20个地址"):(this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0)},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n={name:e.temp.name,phone:e.temp.phone,content:e.temp.content},i=e.$qs.stringify(n);Object(s["f"])(i).then((function(t){console.log(t),e.$message({message:"添加成功",type:"success"}),e.dialogFormVisible=!1,e.getList()}))}}))},handleUpdate:function(e){this.temp=Object.assign({},e),console.log(this.temp),this.dialogStatus="update",this.dialogFormVisible=!0},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n={name:e.temp.name,phone:e.temp.phone,content:e.temp.content},i=e.temp.id,a=e.$qs.stringify(n);Object(s["c"])(i,a).then((function(t){console.log(t),e.$message({message:"修改成功",type:"success"}),e.dialogFormVisible=!1,e.getList()}))}}))},setAddress:function(e,t){var n=this;console.log(e);var i=1===t?"send":"receive",a={tag:i},o=this.$qs.stringify(a),r=1===t?"是否将该地址设置为默认发货地址？":"是否将该地址设置为默认退货地址";this.$confirm(r,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["n"])(e,o).then((function(e){console.log(e),n.$message({message:"设置成功",type:"success"}),n.getList()}))}))}}},l=r,c=(n("a50a"),n("2877")),u=Object(c["a"])(l,i,a,!1,null,"1a3e8b90",null);t["default"]=u.exports}}]);