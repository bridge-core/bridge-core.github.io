(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Brf":function(t,e,n){"use strict";var r=n("I+eb"),o=n("g6v/"),i=n("2oRo"),s=n("UTVS"),a=n("hh1v"),c=n("m/L8").f,l=n("6JNq"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(p,u);var f=p.prototype=u.prototype;f.constructor=p;var h=f.toString,g="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(s(d,t))return"";var n=g?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},"51lp":function(t,e){t.exports=[{name:"editor",sections:[{title:"Editor",items:["/editor-docs/","/editor-docs/features/","/editor-docs/team/","/editor-docs/getting-started/","/editor-docs/faq/","/editor-docs/no-cache/"]},{title:"Other",items:["/editor-docs/other/molang/"]}]},{name:"plugins",sections:[{title:"General",items:["/plugin-docs/","/plugin-docs/other/default-file-types/","/plugin-docs/custom-commands/","/plugin-docs/custom-components/","/plugin-docs/json/file-definitions/","/plugin-docs/json/lightning-cache/","/plugin-docs/json/presets/","/plugin-docs/json/snippets/","/plugin-docs/other/styles/","/plugin-docs/json/themes/"]},{title:"Plugin Modules",items:["/plugin-docs/modules/","/plugin-docs/other/common-types/","/plugin-docs/modules/compare-versions/","/plugin-docs/modules/env/","/plugin-docs/modules/fetch-definition/","/plugin-docs/modules/file-importer/","/plugin-docs/modules/footer/","/plugin-docs/modules/fs/","/plugin-docs/modules/globals/","/plugin-docs/modules/path/","/plugin-docs/modules/sidebar/","/plugin-docs/modules/ui/","/plugin-docs/modules/utils/","/plugin-docs/modules/windows/"]},{title:"Auto-Completions",items:["/plugin-docs/auto-completions/","/plugin-docs/auto-completions/dynamic-references/"]}]}]},"5Tg+":function(t,e,n){var r=n("tiKp");e.f=r},"BX/b":function(t,e,n){var r=n("/GqU"),o=n("JBy8").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(r(t))}},O3Wj:function(t,e,n){"use strict";var r={components:{GithubIcon:n("CjXH").f},props:{githubLink:String,smallIcon:{default:!1,type:Boolean}}},o=n("KHd+"),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"flex items-center text-ui-primary",attrs:{href:this.githubLink,target:"_blank",rel:"noopener noreferrer",title:"Edit on GitHub",name:"Edit on GitHub"}},[e("GithubIcon",{staticClass:"inline mr-1",attrs:{size:this.smallIcon?"1.0x":"1.5x"}}),e("span",{staticClass:"underline pr-1 text-center"},[this._v("\n\t\tEdit this page on GitHub\n\t")])],1)}),[],!1,null,null,null);e.a=i.exports},"dG/n":function(t,e,n){var r=n("Qo9l"),o=n("UTVS"),i=n("5Tg+"),s=n("m/L8").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},pNMO:function(t,e,n){"use strict";var r=n("I+eb"),o=n("2oRo"),i=n("0GbY"),s=n("xDBR"),a=n("g6v/"),c=n("STAE"),l=n("/b8u"),u=n("0Dky"),d=n("UTVS"),p=n("6LWA"),f=n("hh1v"),h=n("glrk"),g=n("ewvW"),m=n("/GqU"),b=n("wE6v"),v=n("XGwC"),y=n("fHMY"),w=n("33Wh"),x=n("JBy8"),O=n("BX/b"),k=n("dBg+"),S=n("Bs8V"),j=n("m/L8"),C=n("0eef"),P=n("kRJp"),_=n("busE"),E=n("VpIT"),I=n("93I0"),$=n("0BK2"),T=n("kOOl"),L=n("tiKp"),A=n("5Tg+"),G=n("dG/n"),B=n("1E5z"),N=n("afO8"),J=n("tycR").forEach,H=I("hidden"),M=L("toPrimitive"),R=N.set,W=N.getterFor("Symbol"),U=Object.prototype,V=o.Symbol,X=i("JSON","stringify"),q=S.f,z=j.f,K=O.f,F=C.f,D=E("symbols"),Q=E("op-symbols"),Y=E("string-to-symbol-registry"),Z=E("symbol-to-string-registry"),tt=E("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=q(U,e);r&&delete U[e],z(t,e,n),r&&t!==U&&z(U,e,r)}:z,ot=function(t,e){var n=D[t]=y(V.prototype);return R(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},st=function(t,e,n){t===U&&st(Q,e,n),h(t);var r=b(e,!0);return h(n),d(D,r)?(n.enumerable?(d(t,H)&&t[H][r]&&(t[H][r]=!1),n=y(n,{enumerable:v(0,!1)})):(d(t,H)||z(t,H,v(1,{})),t[H][r]=!0),rt(t,r,n)):z(t,r,n)},at=function(t,e){h(t);var n=m(e),r=w(n).concat(dt(n));return J(r,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=b(t,!0),n=F.call(this,e);return!(this===U&&d(D,e)&&!d(Q,e))&&(!(n||!d(this,e)||!d(D,e)||d(this,H)&&this[H][e])||n)},lt=function(t,e){var n=m(t),r=b(e,!0);if(n!==U||!d(D,r)||d(Q,r)){var o=q(n,r);return!o||!d(D,r)||d(n,H)&&n[H][r]||(o.enumerable=!0),o}},ut=function(t){var e=K(m(t)),n=[];return J(e,(function(t){d(D,t)||d($,t)||n.push(t)})),n},dt=function(t){var e=t===U,n=K(e?Q:m(t)),r=[];return J(n,(function(t){!d(D,t)||e&&!d(U,t)||r.push(D[t])})),r};(c||(_((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===U&&n.call(Q,t),d(this,H)&&d(this[H],e)&&(this[H][e]=!1),rt(this,e,v(1,t))};return a&&nt&&rt(U,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return W(this).tag})),_(V,"withoutSetter",(function(t){return ot(T(t),t)})),C.f=ct,j.f=st,S.f=lt,x.f=O.f=ut,k.f=dt,A.f=function(t){return ot(L(t),t)},a&&(z(V.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),s||_(U,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),J(w(tt),(function(t){G(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(Y,e))return Y[e];var n=V(e);return Y[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(d(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?y(t):at(y(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ut,getOwnPropertySymbols:dt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(g(t))}}),X)&&r({target:"JSON",stat:!0,forced:!c||u((function(){var t=V();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(f(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,X.apply(null,o)}});V.prototype[M]||P(V.prototype,M,V.prototype.valueOf),B(V,"Symbol"),$[H]=!0},zwLt:function(t,e,n){"use strict";n.r(e);n("pNMO"),n("4Brf"),n("TeQF");var r={data:function(){return{activeAnchor:"",observer:null}},computed:{page:function(){return this.$page.markdownPage},headings:function(){return this.page.headings.filter((function(t){return t.depth>1}))}},watch:{$route:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.observer.disconnect(),this.$nextTick(this.initObserver)}},methods:{observerCallback:function(t,e){if(!(t.length>1)){var n=t[0].target.id;n&&(this.activeAnchor="#"+n,history.replaceState&&history.replaceState(null,null,"#"+n))}},initObserver:function(){if(window.IntersectionObserver){this.observer=new IntersectionObserver(this.observerCallback,{rootMargin:"0px 0px 99999px",threshold:1});for(var t=document.querySelectorAll(".content h2, .content h3, .content h4, .content h5, .content h6"),e=0;e<t.length;e++)this.observer.observe(t[e])}}},mounted:function(){window.location.hash&&(this.activeAnchor=window.location.hash),this.$nextTick(this.initObserver)}},o=n("KHd+"),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0"},[n("h3",{staticClass:"pt-0 mt-0 text-sm tracking-wide uppercase border-none"},[t._v("\n\t\tOn this page\n\t")]),n("div",[n("ul",t._l(t.headings,(function(e,r){var o;return n("li",{key:""+t.page.path+e.anchor,class:(o={"border-t border-dashed border-ui-border pt-2 mt-2":r>0&&2===e.depth,"font-semibold":2===e.depth},o["depth-"+e.depth]=!0,o)},[n("g-link",{staticClass:"relative flex items-center py-1 text-sm transition transform hover:translate-x-1",class:{"pl-2":3===e.depth,"pl-3":4===e.depth,"pl-4":5===e.depth,"pl-5":6===e.depth,"font-bold text-ui-primary":t.activeAnchor===e.anchor},attrs:{to:""+t.page.path+e.anchor}},[n("span",{staticClass:"absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center",class:{"opacity-100 scale-100":t.activeAnchor===e.anchor}}),t._v("\n\t\t\t\t\t"+t._s(e.value)+"\n\t\t\t\t")])],1)})),0)])])}),[],!1,null,null,null).exports,s=(n("fbCW"),n("yXV3"),n("2B1R"),n("uFwe")),a=n("CjXH"),c=n("51lp"),l=n.n(c);function u(t){var e,n=Object(s.a)(l.a);try{for(n.s();!(e=n.n()).done;){var r,o=e.value,i=Object(s.a)(o.sections);try{for(i.s();!(r=i.n()).done;){var a=r.value,c=a.items.indexOf(t);if(-1!==c)return{items:a.items,index:c}}}catch(t){i.e(t)}finally{i.f()}}}catch(t){n.e(t)}finally{n.f()}return{items:[],index:-1}}var d={components:{ArrowLeftIcon:a.a,ArrowRightIcon:a.b},computed:{page:function(){return this.$page.markdownPage},pages:function(){return this.$page.allMarkdownPage.edges.map((function(t){return t.node}))},next:function(){var t=this.page.next||function(t){var e=u(t),n=e.items,r=e.index;if(-1!==r&&r!==n.length-1)return n[r+1]}(this.page.path);return!(this.pages&&!t)&&this.pages.find((function(e){return e.path===t}))},prev:function(){var t=this.page.prev||function(t){var e=u(t),n=e.items,r=e.index;if(-1!==r&&0!==r)return n[r-1]}(this.page.path);return!(this.pages&&!t)&&this.pages.find((function(e){return e.path===t}))}}},p={components:{OnThisPage:i,NextPrevLinks:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col sm:flex-row justify-between items-center"},[t.prev?n("g-link",{staticClass:"mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.prev.path}},[n("ArrowLeftIcon",{staticClass:"mr-2",attrs:{size:"1x"}}),t._v("\n\t\t\t"+t._s(t.prev.title)+"\n\t\t")],1):t._e(),t.next?n("g-link",{staticClass:"flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors",attrs:{to:t.next.path}},[t._v("\n\t\t\t"+t._s(t.next.title)+"\n\t\t\t"),n("ArrowRightIcon",{staticClass:"ml-2",attrs:{size:"1x"}})],1):t._e()],1)])}),[],!1,null,null,null).exports,GithubEdit:n("O3Wj").a},metaInfo:function(){var t=this.$page.markdownPage.title,e=this.$page.markdownPage.description||this.$page.markdownPage.excerpt||"bridge. is a powerful add-on editor designed to speed up your development process. It provides a rich editing experience for all files inside behavior and resource packs (JavaScript, JSON and functions) and provides a powerful work environment. Unleash the full power of add-ons with bridge. plugins and make use of rich auto-completions provided as you navigate through a file. Creating Minecraft add-ons was never more convenient!";return{title:t,meta:[{name:"description",content:e},{key:"og:title",name:"og:title",content:t+" - bridge."},{key:"twitter:title",name:"twitter:title",content:t+" - bridge."},{key:"og:description",name:"og:description",content:e},{key:"twitter:description",name:"twitter:description",content:e}]}},computed:{githubLink:function(){return"https://github.com/bridge-core/bridge-core.github.io/blob/master/content/docs/"+this.$page.markdownPage.fileInfo.path},author:function(){return this.$page.markdownPage.author}}},f=null,h=Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"flex flex-wrap items-start justify-start"},[n("div",{staticClass:"order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky",staticStyle:{top:"4rem"}},[n("OnThisPage")],1),n("div",{staticClass:"order-1 w-full md:w-2/3"},[n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.$page.markdownPage.content)}}),n("div",{staticClass:"flex items-center mt-8 mb-4 lg:mt-12 lg:mb-6"},[t.author?n("AuthorTag",{attrs:{author:t.author}}):t._e(),t.author?n("span",{staticClass:"mx-8 border-r border-ui-border"},[t._v("\n\t\t\t\t\t \n\t\t\t\t")]):t._e(),n("GithubEdit",{attrs:{githubLink:t.githubLink}})],1),n("div",{staticClass:"pt-8 lg:pt-12 border-t border-ui-border"},[n("NextPrevLinks")],1)])])])}),[],!1,null,null,null);"function"==typeof f&&f(h);e.default=h.exports}}]);