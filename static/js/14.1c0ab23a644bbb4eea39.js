webpackJsonp([14],{DXkm:function(t,e,a){var n=a("xkKc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("17d0d20a",n,!0,{})},Whzf:function(t,e,a){"use strict";function n(t){a("DXkm")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("bGai"),s={title:"附件列表",pageSize:20,labelWidth:80,permsPrefix:"device",dataUrl:"/sys/attach/list",selection:[],param:{},columns:[{key:"name",title:"附件名",width:300},{key:"size",title:"文件大小",width:140,render:function(t,e){var a=e.row;if(null!=a.size&&a.size>0)return t("span",Math.floor(a.size/1024)+"KB")}},{key:"extention",title:"文件后缀",width:100},{key:"exist",title:"文件是否存在",width:130},{key:"count",title:"文件是否有使用",width:140,enum:["否","是","是","是","是"]},{key:"creatorName",title:"创建人",width:100},{key:"createTime",title:"创建时间",width:160},{key:"path",title:"路径",width:390},{key:"note",title:"备注",width:200}],searchDynamic:[[{name:"path",label:"路径",span:4,type:"text"},{name:"name",label:"附件名",span:4,type:"text"},{name:"size",label:"文件大小",span:4,type:"text"},{name:"extention",label:"文件后缀",span:4,type:"text"},{name:"note",label:"备注",span:4,type:"text"}],[{name:"creatorName",label:"创建人",span:4,type:"text"},{name:"createTime",label:"创建时间",span:5,type:"date"}]]},l={data:function(){return{tableOptions:s}},computed:{},methods:{tableDelData:function(){var t=this;this.$http.apiPost("/sys/attach/deleteRubbish").then(function(e){t.loading=!1,e.success?t.$Message.success("删除成功"):t.$http.handleError(e)})}},mounted:function(){},components:{CrudView:i.d}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CrudView",{ref:"crudView",attrs:{tableOptions:t.tableOptions}},[a("template",{slot:"toolbar"},[a("Poptip",{attrs:{confirm:"",title:"您确认删除选中的内容吗？",placement:"bottom-start",transfer:""},on:{"on-ok":function(e){t.tableDelData()}}},[a("i-button",{attrs:{type:"ghost",shape:"circle",icon:"trash-b",size:t.toolbarSize,disabled:t.isMultiple}},[t._v("删除垃圾文件\n      ")])],1)],1)],2)},r=[],c={render:o,staticRenderFns:r},p=c,d=a("VU/8"),u=n,h=d(l,p,!1,u,"data-v-4a6fffe0",null);e.default=h.exports},xkKc:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])}});