(function(t){function e(e){for(var a,o,r=e[0],l=e[1],s=e[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},c={app:0},i=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-0826fd36":"74239dd7"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-0826fd36":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0826fd36":"1e24b672"}[t]+".css",c=l.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var s=i[r],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){s=u[r],d=s.getAttribute("data-href");if(d===a||d===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],f.parentNode.removeChild(f),n(i)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"17f5":function(t,e,n){"use strict";var a=n("d17e"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i={name:"App",mounted:function(){console.log("APp mounted")}},r=i,l=(n("034f"),n("2877")),s=Object(l["a"])(r,o,c,!1,null,null,null),d=s.exports,u=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("h1",{staticClass:"contacts__title"},[t._v("Contacts")]),t.contacts.length?n("ul",t._l(t.contacts,(function(e,a){return n("Item",{key:e.title+"_"+a,attrs:{data:e,id:a},on:{"confirm-delete":t.openConfirm}})})),1):n("p",[t._v("Contacts list empty")]),n("button",{staticClass:"contacts__add-btn",attrs:{type:"button"},on:{click:t.addContact}},[t._v(" Add contact ")]),t.showModal?n("ConfirmModal",{attrs:{question:t.modalQuestion,title:"Delete contact",confirmText:"Delete",cancelText:"Cancel"},on:{close:t.closeConfirm,cancel:t.closeConfirm,confirm:t.confirmDelete}}):t._e()],1)},m=[],p=n("5530"),h=n("da16"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"contacts__item"},[n("router-link",{staticClass:"contacts__item-link",attrs:{to:"details?id="+t.id}},[n("span",{staticClass:"contacts__item-title"},[t._v(" "+t._s(t.data.title)+" ")])]),n("button",{staticClass:"contacts__item-del",on:{click:function(e){return t.$emit("confirm-delete",t.data.title,t.id)}}},[t._v("×")])],1)},C=[],g={props:["data","id"]},_=g,b=(n("cd96"),Object(l["a"])(_,v,C,!1,null,"127dda2b",null)),y=b.exports,x=n("2f62"),w={name:"Contacts",props:["list"],computed:{contacts:function(){return this.$store.getters.allContacts}},data:function(){return{showModal:!1,modalQuestion:"Do you want to delete this contact?",defaultQuestion:"Do you want to delete this contact?",deleteContactId:void 0}},components:{Item:y,ConfirmModal:h["a"]},methods:Object(p["a"])(Object(p["a"])({},Object(x["b"])(["addContact","deleteContact"])),{},{closeConfirm:function(){this.showModal=!1,this.modalQuestion=this.defaultQuestion,this.deleteContactId=void 0},openConfirm:function(t,e){this.showModal=!0,this.deleteContactId=e,this.modalQuestion="Do you want to delete ".concat(t,"?")},confirmDelete:function(){this.deleteContact(this.deleteContactId),this.closeConfirm()}})},k=w,I=(n("17f5"),Object(l["a"])(k,f,m,!1,null,"41f020b8",null)),O=I.exports;a["a"].use(u["a"]);var j=new u["a"]({mode:"history",routes:[{path:"/tr-logic-llc",component:O},{path:"/tr-logic-llc/details",component:function(){return n.e("chunk-0826fd36").then(n.bind(null,"2959"))}}]}),T=(n("4de4"),n("a434"),n("b0c0"),{actions:{addContact:function(t){t.commit("addContact")},deleteContact:function(t,e){t.commit("deleteContact",e)},addField:function(t,e){t.commit("addField",e)},deleteField:function(t,e){t.commit("deleteField",e)},editField:function(t,e){t.commit("editField",e)},cancelLastChange:function(t){t.commit("cancelLastChange")}},mutations:{addContact:function(t){var e={title:"New Contact ".concat(t.contacts.length+1),idx:t.contacts.length,fields:[]};t.contacts.push(e)},deleteContact:function(t,e){t.contacts=t.contacts.filter((function(t,n){return n!==e}))},addField:function(t,e){var n=e.contactIdx,a=e.name,o=e.value;t.lastChange={changeType:"add",data:{from:null,to:{name:a,value:o},contactIdx:n}},t.contacts[n].fields.push({name:a,value:o})},deleteField:function(t,e){var n=e.contactIdx,a=e.fieldIdx;t.lastChange={changeType:"delete",data:{from:{name:t.contacts[n].fields[a].name,value:t.contacts[n].fields[a].value},to:null,contactIdx:n,fieldIdx:a}},t.contacts[n].fields.splice(a,1)},editField:function(t,e){var n=e.newName,a=e.newValue,o=e.contactIdx,c=e.fieldIdx;t.lastChange={changeType:"edit",data:{from:{name:t.contacts[o].fields[c].name,value:t.contacts[o].fields[c].value},to:{name:n,value:a},contactIdx:o,fieldIdx:c}},t.contacts[o].fields[c].name=n,t.contacts[o].fields[c].value=a},cancelLastChange:function(t){if(null!==t.lastChange){switch(t.lastChange.changeType){case"delete":var e=t.lastChange.data,n=e.contactIdx,a=e.fieldIdx,o=e.from;t.contacts[n].fields.splice(a,0,o);break;case"add":var c=t.lastChange.data,i=c.contactIdx;c.fieldIdx;t.contacts[i].fields.splice(-1,1);break;case"edit":var r=t.lastChange.data,l=r.contactIdx,s=r.fieldIdx,d=r.from;t.contacts[l].fields[s].name=d.name,t.contacts[l].fields[s].value=d.value;break}t.lastChange=null}}},state:{contacts:[],lastChange:null},getters:{allContacts:function(t){return t.contacts},contactDetails:function(t){return function(e){return t.contacts[e]}},lastChange:function(t){return t.lastChange}}});a["a"].use(x["a"]);var E=new x["a"].Store({modules:{contacts:T}});a["a"].config.productionTip=!1,new a["a"]({router:j,store:E,render:function(t){return t(d)}}).$mount("#app")},8317:function(t,e,n){},"85ec":function(t,e,n){},cd96:function(t,e,n){"use strict";var a=n("d4ee"),o=n.n(a);o.a},d17e:function(t,e,n){},d4ee:function(t,e,n){},d5f8:function(t,e,n){"use strict";var a=n("8317"),o=n.n(a);o.a},da16:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"confirm-modal"},[n("div",{staticClass:"confirm-modal__body"},[n("h3",[t._v(t._s(t.title))]),n("button",{staticClass:"confirm-modal__close",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v("×")]),n("hr"),n("p",[t._v(t._s(t.question))]),n("hr"),n("button",{staticClass:"confirm-modal__btns",attrs:{type:"button"},on:{click:function(e){return t.$emit("confirm")}}},[t._v(t._s(t.confirmText))]),n("button",{staticClass:"confirm-modal__btns",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))])])])},o=[],c={props:["title","question","confirmText","cancelText"]},i=c,r=(n("d5f8"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports}});
//# sourceMappingURL=app.b78fe043.js.map