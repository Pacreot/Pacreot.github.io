(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-deaf314a"],{"0122":function(t,e,n){"use strict";n("d25d")},3920:function(t,e,n){"use strict";n("758b")},4353:function(t,e,n){},"52e8":function(t,e,n){"use strict";var o=n("7a23");function c(t,e,n,c,i,u){return n.isOpen?(Object(o["q"])(),Object(o["e"])("div",{key:0,onClick:e[1]||(e[1]=Object(o["C"])((function(){}),["stop"])),style:{top:n.position.top+"px",left:n.position.left+"px"},class:"context-menu"},[Object(o["v"])(t.$slots,"default")],4)):Object(o["f"])("",!0)}var i={name:"ContextMenu",props:{position:{type:Object,required:!0},isOpen:{type:Boolean,required:!0}},emits:{close:null,open:null},beforeUpdate:function(t){var e=this;this.isOpen?setTimeout((function(){document.addEventListener("click",e.hideContextMenu),document.addEventListener("contextmenu",e.hideContextMenu),document.addEventListener("keydown",e.hideByKeyboard),e.isOpen||e.$emit("open")}),0):(document.removeEventListener("click",this.hideContextMenu),document.removeEventListener("contextmenu",this.hideContextMenu),document.removeEventListener("keydown",this.hideByKeyboard)),document.documentElement.clientWidth-this.position.left<=250&&(this.position.left-=250)},methods:{hideContextMenu:function(){this.$emit("close")},hideByKeyboard:function(t){"Escape"===t.key&&this.hideContextMenu()}}};n("3920");i.render=c;e["a"]=i},7286:function(t,e,n){"use strict";var o=n("7a23"),c=Object(o["h"])("li",null,"Удалить",-1),i=Object(o["h"])("li",null,"Пункт 1",-1),u=Object(o["h"])("li",null,"Пункт 1",-1),l=Object(o["h"])("li",null,"Пункт 1",-1),s=Object(o["h"])("li",null,"Пункт 1",-1),r={class:"project-layout-title"};function a(t,e,n,a,b,d){var h=Object(o["w"])("context-menu"),j=Object(o["w"])("router-link"),O=Object(o["w"])("font-awesome-icon");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(o["b"],{name:"fade"},{default:Object(o["B"])((function(){return[Object(o["h"])(h,{isOpen:b.contextMenu,position:b.contextMenuPosition,onClose:e[1]||(e[1]=function(t){return b.contextMenu=!1}),onOpen:e[2]||(e[2]=function(t){return b.contextMenu=!0})},{default:Object(o["B"])((function(){return[Object(o["h"])("nav",null,[Object(o["h"])("li",null,"Переименовать "+Object(o["y"])(n.meta.id),1),c,i,u,l,s])]})),_:1},8,["isOpen","position"])]})),_:1}),Object(o["h"])("div",{class:["project-layout",{"background-image":b.bgImage}],style:d.backgroundImage,onContextmenu:e[4]||(e[4]=Object(o["C"])((function(t){return d.showContextMenu(t)}),["prevent"]))},[Object(o["h"])(j,{to:"/projects/"+n.meta.id},null,8,["to"]),Object(o["h"])("div",r,[Object(o["h"])("h4",null,Object(o["y"])(n.meta.title),1)]),Object(o["h"])("div",{class:"project-layout-settings",onClick:e[3]||(e[3]=function(t){return d.showContextMenu(t)})},[Object(o["h"])(O,{icon:"ellipsis-v"})])],38)],64)}var b=n("52e8"),d={name:"ProjectLayout",components:{contextMenu:b["a"]},data:function(){return{bgImage:!1,contextMenu:!1,contextMenuPosition:{top:null,left:null}}},computed:{backgroundImage:function(){return void 0!==this.meta.background&&null!==this.meta.background&&""!==this.meta.background?(this.bgImage=!0,"--background: url(".concat(this.meta.background,")")):""}},methods:{showContextMenu:function(t){this.contextMenu=!0,this.contextMenuPosition.top=t.clientY,this.contextMenuPosition.left=t.clientX}},props:{meta:{type:Object,required:!0}}};n("cf36");d.render=a;e["a"]=d},"758b":function(t,e,n){},acca:function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("7a23"),c=Object(o["h"])("nav",null,[Object(o["h"])("li",null,"Переименовать"),Object(o["h"])("li",null,"Удалить"),Object(o["h"])("li",null,"Пункт 1"),Object(o["h"])("li",null,"Пункт 1"),Object(o["h"])("li",null,"Пункт 1"),Object(o["h"])("li",null,"Пункт 1")],-1),i={class:"projects-page"};function u(t,e,n,u,l,s){var r=Object(o["w"])("context-menu"),a=Object(o["w"])("ProjectIcon");return Object(o["q"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(o["b"],{name:"fade"},{default:Object(o["B"])((function(){return[Object(o["h"])(r,{isOpen:l.contextMenu,position:l.contextMenuPosition,onClose:e[1]||(e[1]=function(t){return l.contextMenu=!1}),onOpen:e[2]||(e[2]=function(t){return l.contextMenu=!0})},{default:Object(o["B"])((function(){return[c]})),_:1},8,["isOpen","position"])]})),_:1}),Object(o["h"])("h2",null,Object(o["y"])(this.$route.name),1),Object(o["h"])("div",i,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(t.$store.state.projectsList,(function(t){return Object(o["q"])(),Object(o["e"])(a,{key:t.id,meta:t},null,8,["meta"])})),128))])],64)}var l=n("7286"),s=n("52e8"),r={name:"Projects",data:function(){return{contextMenu:!1,contextMenuPosition:{top:null,left:null}}},components:{ProjectIcon:l["a"],contextMenu:s["a"]},methods:{handler:function(t){this.contextMenu=!0,this.contextMenuPosition.top=t.pageY,this.contextMenuPosition.left=t.pageX}}};n("0122");r.render=u;e["default"]=r},cf36:function(t,e,n){"use strict";n("4353")},d25d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-deaf314a.7ed88ffe.js.map