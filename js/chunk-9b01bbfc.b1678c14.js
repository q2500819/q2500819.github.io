(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b01bbfc"],{"013f":function(t,e,n){},"1a04":function(t,e,n){},4598:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return o}));var i=n("a142"),a=Date.now();function s(t){var e=Date.now(),n=Math.max(0,16-(e-a)),i=setTimeout(t,n);return a=e+n,i}var r=i["e"]?t:window,c=r.requestAnimationFrame||s;r.cancelAnimationFrame||r.clearTimeout;function l(t){return c.call(r,t)}function o(t){l((function(){l(t)}))}}).call(this,n("c8ba"))},bff0:function(t,e,n){},cd48:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.project,(function(e,i){return n("van-collapse-item",{key:i,attrs:{title:e.name,name:e.name}},[n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("负责模块：")]),t._v("所有模块")]),n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("服务端口：")]),t._v(t._s(e.port))]),n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("项目周期：")]),t._v(t._s(e.startTime)+" — "+t._s(e.endTime))]),n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("相关技术：")]),t._v(t._s(e.technology))]),n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("项目介绍：")])]),n("div",{staticClass:"text indent"},[t._v(t._s(e.introduction))]),e.difficulty?n("div",{staticClass:"text"},[n("span",{staticClass:"bold"},[t._v("相关难点：")])]):t._e(),n("div",{staticClass:"text indent"},[t._v(t._s(e.difficulty))])])})),1)],1)},a=[],s=(n("b0c0"),n("ade3")),r=(n("68ef"),n("9d70"),n("3743"),n("1a04"),n("bff0"),n("c31d")),c=n("d282"),l=n("a142"),o=n("b1d2"),u=n("4598"),d=n("9884"),f=n("2638"),v=n.n(f),h=n("ba31");function p(t,e){var n=e.to,i=e.url,a=e.replace;if(n&&t){var s=t[a?"replace":"push"](n);s&&s.catch&&s.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else i&&(a?location.replace(i):location.href=i)}function b(t){p(t.parent&&t.parent.$router,t.props)}var m={url:String,replace:Boolean,to:[String,Object]},x={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},w=n("ad06"),C=Object(c["a"])("cell"),g=C[0],j=C[1];function _(t,e,n,i){var a=e.icon,s=e.size,r=e.title,c=e.label,o=e.value,u=e.isLink,d=n.title||Object(l["b"])(r);function f(){var i=n.label||Object(l["b"])(c);if(i)return t("div",{class:[j("label"),e.labelClass]},[n.label?n.label():c])}function p(){if(d)return t("div",{class:[j("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[r]),f()])}function m(){var i=n.default||Object(l["b"])(o);if(i)return t("div",{class:[j("value",{alone:!d}),e.valueClass]},[n.default?n.default():t("span",[o])])}function x(){return n.icon?n.icon():a?t(w["a"],{class:j("left-icon"),attrs:{name:a,classPrefix:e.iconPrefix}}):void 0}function C(){var i=n["right-icon"];if(i)return i();if(u){var a=e.arrowDirection;return t(w["a"],{class:j("right-icon"),attrs:{name:a?"arrow-"+a:"arrow"}})}}function g(t){Object(h["a"])(i,"click",t),b(i)}var _=u||e.clickable,O={clickable:_,center:e.center,required:e.required,borderless:!e.border};return s&&(O[s]=s),t("div",v()([{class:j(O),attrs:{role:_?"button":null,tabindex:_?0:null},on:{click:g}},Object(h["b"])(i)]),[x(),p(),m(),C(),null==n.extra?void 0:n.extra()])}_.props=Object(r["a"])({},x,{},m);var O,k=g(_),y=Object(c["a"])("collapse-item"),S=y[0],N=y[1],B=["title","icon","right-icon"],T=S({mixins:[Object(d["a"])("vanCollapse")],props:Object(r["a"])({},x,{name:[Number,String],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){return Object(l["b"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent,n=e.value,i=e.accordion;return i?n===this.currentName:n.some((function(e){return e===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var n=this;if(null!==e){t&&(this.show=!0,this.inited=!0);var i=t?this.$nextTick:u["b"];i((function(){var e=n.$refs,i=e.content,a=e.wrapper;if(i&&a){var s=i.offsetHeight;if(s){var r=s+"px";a.style.height=t?0:r,Object(u["a"])((function(){a.style.height=t?r:0}))}else n.onTransitionEnd()}}))}}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=this.currentName,n=t.accordion&&e===t.value,i=n?"":e;t.switch(i,!this.expanded)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,e=this.$createElement,n=this.disabled,i=this.expanded,a=B.reduce((function(e,n){return t.slots(n)&&(e[n]=function(){return t.slots(n)}),e}),{});return this.slots("value")&&(a.default=function(){return t.slots("value")}),e(k,{attrs:{role:"button",tabindex:n?-1:0,"aria-expanded":String(i)},class:N("title",{disabled:n,expanded:i}),on:{click:this.onClick},scopedSlots:a,props:Object(r["a"])({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:N("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:N("content")},[this.slots()])])}},render:function(){var t,e=arguments[0];return e("div",{class:[N(),(t={},t[o["b"]]=this.index,t)]},[this.genTitle(),this.genContent()])}}),$=Object(c["a"])("collapse"),E=$[0],q=$[1],D=E({mixins:[Object(d["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,e=arguments[0];return e("div",{class:[q(),(t={},t[o["c"]]=this.border,t)]},[this.slots()])}}),A={name:"index-project",components:(O={},Object(s["a"])(O,D.name,D),Object(s["a"])(O,T.name,T),O),props:{project:{type:Array,required:!0}},data:function(){return{activeNames:["1","2"]}}},L=A,P=(n("d73c"),n("2877")),z=Object(P["a"])(L,i,a,!1,null,"6c211580",null);e["default"]=z.exports},d73c:function(t,e,n){"use strict";var i=n("013f"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-9b01bbfc.b1678c14.js.map