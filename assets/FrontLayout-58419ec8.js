import{p as I,m as z,a as X,g as L,u as A,c as a,b as ne,d as se,e as K,f as Q,h as W,t as D,i as re,j as ie,k as Z,l as ue,n as ce,s as w,o as y,q as de,V as ee,r as F,v as M,w as ve,x as j,y as me,z as U,A as ge,B as fe,C as be,D as he,E as ye,F as _e,G as Ve,H as N,I as xe,J as ke,K as P,L as Se,M as Be,N as pe,O as Te,P as Ce,Q as we,R as Ne,S as Pe,T as Ie,U as Le,W as Ae,X as te,_ as Re,Y as Ee,Z as $e,$ as He,a0 as De,a1 as Me,a2 as v,a3 as $,a4 as b,a5 as o,a6 as V,a7 as q,a8 as H,a9 as Y,aa as h,ab as p,ac as G,ad as Ue,ae as f,af as O,ag as Fe,ah as Ye}from"./index-37d901bc.js";import{V as ze,a as Xe}from"./VNavigationDrawer-bea4056f.js";import{V as je}from"./VContainer-ade5f72f.js";/* empty css              */const ae=I({text:String,...z(),...X()},"VToolbarTitle"),le=L()({name:"VToolbarTitle",props:ae(),setup(e,d){let{slots:t}=d;return A(()=>{const i=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[i&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),qe=[null,"prominent","default","comfortable","compact"],oe=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>qe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ne(),...z(),...se(),...K(),...X({tag:"header"}),...Q()},"VToolbar"),J=L()({name:"VToolbar",props:oe(),setup(e,d){var u;let{slots:t}=d;const{backgroundColorClasses:i,backgroundColorStyles:s}=W(D(e,"color")),{borderClasses:n}=re(e),{elevationClasses:x}=ie(e),{roundedClasses:m}=Z(e),{themeClasses:_}=ue(e),{rtlClasses:k}=ce(),r=w(!!(e.extended||(u=t.extension)!=null&&u.call(t))),S=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=y(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return de({VBtn:{variant:"text"}}),A(()=>{var c;const B=!!(e.title||t.title),l=!!(t.image||e.image),T=(c=t.extension)==null?void 0:c.call(t);return r.value=!!(e.extended||T),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,n.value,x.value,m.value,_.value,k.value,e.class],style:[s.value,e.style]},{default:()=>[l&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ee,{key:"image-img",cover:!0,src:e.image},null)]),a(F,{defaults:{VTabs:{height:M(S.value)}}},{default:()=>{var C,R,E;return[a("div",{class:"v-toolbar__content",style:{height:M(S.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),B&&a(le,{key:"title",text:e.title},{text:t.title}),(R=t.default)==null?void 0:R.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),a(F,{defaults:{VTabs:{height:M(g.value)}}},{default:()=>[a(ve,null,{default:()=>[r.value&&a("div",{class:"v-toolbar__extension",style:{height:M(g.value)}},[T])]})]})]})}),{contentHeight:S,extensionHeight:g}}}),Ge=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Oe(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let i=0;const s=j(null),n=w(0),x=w(0),m=w(0),_=w(!1),k=w(!1),r=y(()=>Number(e.scrollThreshold)),S=y(()=>me((r.value-n.value)/r.value||0)),g=()=>{const u=s.value;!u||t&&!t.value||(i=n.value,n.value="window"in u?u.pageYOffset:u.scrollTop,k.value=n.value<i,m.value=Math.abs(n.value-r.value))};return U(k,()=>{x.value=x.value||n.value}),U(_,()=>{x.value=0}),ge(()=>{U(()=>e.scrollTarget,u=>{var l;const B=u?document.querySelector(u):window;B&&B!==s.value&&((l=s.value)==null||l.removeEventListener("scroll",g),s.value=B,s.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),fe(()=>{var u;(u=s.value)==null||u.removeEventListener("scroll",g)}),t&&U(t,g,{immediate:!0}),{scrollThreshold:r,currentScroll:n,currentThreshold:m,isScrollActive:_,scrollRatio:S,isScrollingUp:k,savedScroll:x}}const Je=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...oe(),...be(),...Ge(),height:{type:[Number,String],default:64}},"VAppBar"),Ke=L()({name:"VAppBar",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const i=j(),s=he(e,"modelValue"),n=y(()=>{var C;const c=new Set(((C=e.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),x=y(()=>{const c=n.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!s.value}),{currentScroll:m,scrollThreshold:_,isScrollingUp:k,scrollRatio:r}=Oe(e,{canScroll:x}),S=y(()=>e.collapse||n.value.collapse&&(n.value.inverted?r.value>0:r.value===0)),g=y(()=>e.flat||n.value.elevate&&(n.value.inverted?m.value>0:m.value===0)),u=y(()=>n.value.fadeImage?n.value.inverted?1-r.value:r.value:void 0),B=y(()=>{var R,E;if(n.value.hide&&n.value.inverted)return 0;const c=((R=i.value)==null?void 0:R.contentHeight)??0,C=((E=i.value)==null?void 0:E.extensionHeight)??0;return c+C});ye(y(()=>!!e.scrollBehavior),()=>{xe(()=>{n.value.hide?n.value.inverted?s.value=m.value>_.value:s.value=k.value||m.value<_.value:s.value=!0})});const{ssrBootStyles:l}=_e(),{layoutItemStyles:T}=Ve({id:e.name,order:y(()=>parseInt(e.order,10)),position:D(e,"location"),layoutSize:B,elementSize:w(void 0),active:s,absolute:D(e,"absolute")});return A(()=>{const[c]=J.filterProps(e);return a(J,N({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":u.value,height:void 0,...l.value},e.style]},c,{collapse:S.value,flat:g.value}),t)}),{}}}),Qe=I({...ke({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),We=L()({name:"VAppBarNavIcon",props:Qe(),setup(e,d){let{slots:t}=d;return A(()=>a(P,N(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Ze=L()({name:"VAppBarTitle",props:ae(),setup(e,d){let{slots:t}=d;return A(()=>a(le,N(e,{class:"v-app-bar-title"}),t)),{}}});const et=I({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Se,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...z(),...Be({location:"top end"}),...K(),...X(),...Q(),...pe({transition:"scale-rotate-transition"})},"VBadge"),tt=L()({name:"VBadge",inheritAttrs:!1,props:et(),setup(e,d){const{backgroundColorClasses:t,backgroundColorStyles:i}=W(D(e,"color")),{roundedClasses:s}=Z(e),{t:n}=Te(),{textColorClasses:x,textColorStyles:m}=Ce(D(e,"textColor")),{themeClasses:_}=we(),{locationStyles:k}=Ne(e,!0,r=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(r)?+(e.offsetY??0):["left","right"].includes(r)?+(e.offsetX??0):0));return A(()=>{const r=Number(e.content),S=!e.max||isNaN(r)?e.content:r<=+e.max?r:`${e.max}+`,[g,u]=Pe(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,N({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},u,{style:e.style}),{default:()=>{var B,l;return[a("div",{class:"v-badge__wrapper"},[(l=(B=d.slots).default)==null?void 0:l.call(B),a(Ie,{transition:e.transition},{default:()=>{var T,c;return[Le(a("span",N({class:["v-badge__badge",_.value,t.value,s.value,x.value],style:[i.value,m.value,e.inline?{}:k.value],"aria-atomic":"true","aria-label":n(e.label,r),"aria-live":"polite",role:"status"},g),[e.dot?void 0:d.slots.badge?(c=(T=d.slots).badge)==null?void 0:c.call(T):e.icon?a(te,{icon:e.icon},null):S]),[[Ae,e.modelValue]])]}})])]}})}),{}}}),at=""+new URL("logo-2f53526e.png",import.meta.url).href;const lt={class:"footer"},ot={__name:"FrontLayout",setup(e){const d=Ee(),t=$e(),{isLogin:i,isAdmin:s,cart:n}=He(t),{mobile:x}=De(),m=y(()=>x.value),_=j(!1),k=y(()=>[{to:"/fish",text:"鮮魚本舖"},{to:"/shrimpcrab",text:"鮮蝦螃蟹"},{to:"/shellmollusk",text:"貝類軟體"},{to:"/preparedfood",text:"調理珍饌"},{to:"/meat",text:"嚴選肉品"},{to:"/othersitems",text:"其他鮮貨"}]),r=async()=>{try{await Ye.delete("/users/logout"),t.logout(),d({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(g){d({text:g.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},S=["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"];return(g,u)=>{const B=Me("RouterView");return v(),$(H,null,[m.value?(v(),b(ze,{key:0,modelValue:_.value,"onUpdate:modelValue":u[0]||(u[0]=l=>_.value=l),location:"left",temporary:"",style:{position:"absolute",left:"0px"}},{default:o(()=>[a(O,null,{default:o(()=>[(v(!0),$(H,null,Y(k.value,l=>(v(),b(p,{key:l.to,to:l.to},{default:o(()=>[h(G(l.text),1)]),_:2},1032,["to"]))),128)),a(Ue,{value:"會員專區"},{activator:o(({props:l})=>[a(p,N(l,{title:"會員專區",style:{color:"dark"}}),null,16)]),default:o(()=>[f(i)?V("",!0):(v(),b(p,{key:0,to:"/register","prepend-icon":"mdi-account-plus"},{default:o(()=>[h("註冊")]),_:1})),f(i)?V("",!0):(v(),b(p,{key:1,to:"/login","prepend-icon":"mdi-login"},{default:o(()=>[h("登入")]),_:1})),f(i)&&!f(s)?(v(),b(p,{key:2,to:"/order","prepend-icon":"mdi-format-list-numbered"},{default:o(()=>[h("訂單")]),_:1})):V("",!0),f(i)&&f(s)?(v(),b(p,{key:3,to:"/admin","prepend-icon":"mdi-cog"},{default:o(()=>[h("管理")]),_:1})):V("",!0),f(t).isLogin?(v(),b(p,{key:4,"prepend-icon":"mdi-logout",onClick:r},{default:o(()=>[h("登出")]),_:1})):V("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])):V("",!0),a(Ke,{class:"p-1 app-bar",elevation:7},{default:o(()=>[a(P,{to:"/",active:!1,class:"logo-absolute",height:"86px",width:"86px"},{default:o(()=>[a(Ze,{style:{color:"secondary"}},{default:o(()=>[a(ee,{src:at,width:"85px"})]),_:1})]),_:1}),a(je,{class:"d-flex align-center justify-lg-center"},{default:o(()=>[m.value?(v(),b(We,{key:0,onClick:u[1]||(u[1]=l=>_.value=!0)})):V("",!0),m.value?V("",!0):(v(),$(H,{key:1},[(v(!0),$(H,null,Y(k.value,l=>(v(),b(P,{key:l.to,to:l.to,class:"app-bar-text"},{default:o(()=>[h(G(l.text),1)]),_:2},1032,["to"]))),128)),a(Fe,{location:"bottom"},{activator:o(({props:l})=>[a(P,N(l,{class:"app-bar-text"}),{default:o(()=>[h("會員專區")]),_:2},1040)]),default:o(()=>[a(O,null,{default:o(()=>[f(i)?V("",!0):(v(),b(p,{key:0,to:"/register",color:"primary"},{default:o(()=>[h("註冊")]),_:1})),f(i)?V("",!0):(v(),b(p,{key:1,to:"/login"},{default:o(()=>[h("登入")]),_:1})),f(i)&&!f(s)?(v(),b(p,{key:2,to:"/orders"},{default:o(()=>[h("訂單")]),_:1})):V("",!0),f(i)&&f(s)?(v(),b(p,{key:3,to:"/admin"},{default:o(()=>[h("管理")]),_:1})):V("",!0),!m.value&&f(i)?(v(),b(p,{key:4,onClick:r},{default:o(()=>[h("登出")]),_:1})):V("",!0)]),_:1})]),_:1})],64))]),_:1}),a(P,{to:"/cart"},{default:o(()=>[a(tt,{floating:"",content:f(n).toString(),color:"danger"},{default:o(()=>[a(te,{icon:"mdi-cart"})]),_:1},8,["content"])]),_:1})]),_:1}),a(Xe,null,{default:o(()=>[a(B,{key:"$route.path"})]),_:1}),q("div",lt,[q("div",null,[(v(),$(H,null,Y(S,l=>a(P,{key:l,class:"mx-4",icon:l,variant:"text"},null,8,["icon"])),64))]),h(" Copyright © 僅為泰山網頁前端班蘇莉鈞做專題用 ")])],64)}}},ut=Re(ot,[["__scopeId","data-v-464e10ae"]]);export{ut as default};
