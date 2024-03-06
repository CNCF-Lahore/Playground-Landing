import{_ as Y,o as n,c as l,p as q,f as F,a as L,g as I,h as _,i as z,j as S,n as c,k as e,t as b,l as d,r as u,m as w,q as O,b as k,w as $,s as R,d as A,F as U,v as j,x as C,y as E,z as H,A as J,B as P,C as K,D as Q,E as W,G as Z,H as ee,I as D,J as te,K as ne,L as se,e as X,M as V,N as ie,O as ae,P as le,Q as re,R as oe}from"./entry.CunEf2Ar.js";import{_ as G}from"./Card.B11glSZJ.js";import{u as ce,q as de}from"./query.VvEmxoN0.js";import"./preview.DNh8ZT5Q.js";const ue={name:"CloudinaryVideo"},ge=t=>(q("data-v-b816a276"),t=t(),F(),t),pe={class:"video-container"},fe=ge(()=>L("video",{playsinline:"",autoplay:"",muted:"",loop:"",class:"responsive-video",src:"https://res.cloudinary.com/dcfz8rw5v/video/upload/v1709383272/s8xmrkqsx7vsxgjbg4kh.mov"}," Your browser does not support the video tag. ",-1)),ye=[fe];function me(t,i,p,s,o,a){return n(),l("div",pe,ye)}const he=Y(ue,[["render",me],["__scopeId","data-v-b816a276"]]),ke=I({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=t,p=_(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[i.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:s,attrs:o}=z("landing.logos",S(i,"ui"),p,S(i,"class"),!0);return(a,r)=>(n(),l("div",w({class:e(s).wrapper},e(o)),[t.title?(n(),l("h2",{key:0,class:c(e(s).title)},b(t.title),3)):d("",!0),L("div",{class:c(e(s).images)},[u(a.$slots,"default")],2)],16))}}),be=I({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=t,p=_(()=>{const a=O("gap-16 sm:gap-y-24",i.orientation==="vertical"&&"flex flex-col",i.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),r=i.orientation==="vertical"?"text-center":"",m=O("mt-10 flex flex-wrap gap-x-6 gap-y-3",i.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:a,base:r,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:m}}),{ui:s,attrs:o}=z("landing.hero",S(i,"ui"),p,S(i,"class"),!0);return(a,r)=>{const m=E,h=R;return n(),l("div",w({class:e(s).wrapper},e(o)),[u(a.$slots,"top"),k(h,{class:c(e(s).container)},{default:$(()=>{var y;return[L("div",{class:c(e(s).base)},[a.$slots.headline?(n(),l("div",{key:0,class:c(e(s).headline)},[u(a.$slots,"headline")],2)):d("",!0),L("h1",{class:c(e(s).title)},[u(a.$slots,"title",{},()=>[A(b(t.title),1)])],2),t.description||a.$slots.description?(n(),l("p",{key:1,class:c(e(s).description)},[u(a.$slots,"description",{},()=>[A(b(t.description),1)])],2)):d("",!0),(y=t.links)!=null&&y.length||a.$slots.links?(n(),l("div",{key:2,class:c(e(s).links)},[u(a.$slots,"links",{},()=>[(n(!0),l(U,null,j(t.links,(x,v)=>(n(),C(m,w({key:v},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2),u(a.$slots,"default")]}),_:3},8,["class"]),u(a.$slots,"bottom")],16)}}}),xe=H(J);function ve(t,i={}){const{x:p,y:s}=xe(i),o=P(t??(window==null?void 0:window.document.body)),a=P(0),r=P(0);return K&&Q([o,p,s],()=>{const m=W(o);if(!m)return;const{left:h,top:y}=m.getBoundingClientRect(),x=p.value-(h+window.scrollX),v=s.value-(y+window.scrollY);Math.abs(x)>1500||Math.abs(v)>1500||window.screen.width<=800||(a.value=x,r.value=v)},{immediate:!0,throttle:50}),{x:p,y:s,elementX:a,elementY:r}}const $e=t=>(q("data-v-53db7729"),t=t(),F(),t),we=$e(()=>L("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),Se=I({inheritAttrs:!1,__name:"LandingCard",props:{...Z,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){ee(f=>({fb9dae28:e(p),"674828e0":e(s)}));const i=t,p=_(()=>{var f;return i.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((f=D[i.color])==null?void 0:f["500"])||D[i.color]||i.color}),s=_(()=>{var f;return i.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((f=D[i.color])==null?void 0:f["400"])||D[i.color]||i.color}),o=_(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",i.orientation==="vertical"&&"flex flex-col",!!r.default&&i.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),a=P(),r=te(),{elementX:m,elementY:h}=ve(a),{ui:y,attrs:x}=z("landing.card",S(i,"ui"),o,S(i,"class"),!0),v=_(()=>ne(i)),M=_(()=>(i.title||r.title&&se(r.title())||"Card link").trim());return(f,N)=>{const T=X,g=V,B=G;return n(),l("div",w({ref_key:"el",ref:a,style:{"--x":`${e(m)}px`,"--y":`${e(h)}px`},class:[e(y).wrapper,f.to&&e(y).to]},e(x)),[k(B,{ui:e(y)},{default:$(()=>[L("div",{class:c(e(y).container)},[f.to?(n(),C(T,w({key:0,"aria-label":e(M)},e(v),{class:"focus:outline-none",tabindex:"-1"}),{default:$(()=>[we]),_:1},16,["aria-label"])):d("",!0),t.icon||f.$slots.icon?(n(),l("div",{key:1,class:c(e(y).icon.wrapper)},[u(f.$slots,"icon",{},()=>[k(g,{name:t.icon,class:c(e(y).icon.base)},null,8,["name","class"])],!0)],2)):d("",!0),t.title||f.$slots.title?(n(),l("p",{key:2,class:c(e(y).title)},[u(f.$slots,"title",{},()=>[A(b(t.title),1)],!0)],2)):d("",!0),t.description||f.$slots.description?(n(),l("p",{key:3,class:c(e(y).description)},[u(f.$slots,"description",{},()=>[A(b(t.description),1)],!0)],2)):d("",!0),u(f.$slots,"container",{},void 0,!0)],2),f.$slots.default?u(f.$slots,"default",{key:0},void 0,!0):d("",!0)]),_:3},8,["ui"])],16)}}}),Ce=Y(Se,[["__scopeId","data-v-53db7729"]]),Ae=I({inheritAttrs:!1,__name:"PageGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},p=t,{ui:s,attrs:o}=z("page.grid",S(p,"ui"),i,S(p,"class"),!0);return(a,r)=>(n(),l("div",w({class:e(s).wrapper},e(o)),[u(a.$slots,"default")],16))}}),Le={key:0},_e={key:2},Ue={key:0},je=I({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=ie(),p=t,s=_(()=>{const r=O("gap-16 sm:gap-y-24",p.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),m=O("",p.align==="center"&&"text-center flex flex-col items-center",p.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:r,base:m,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:i.ui.icons.check}}}}),{ui:o,attrs:a}=z("landing.section",S(p,"ui"),s,S(p,"class"),!0);return(r,m)=>{const h=V,y=E,x=R;return n(),l("div",w({class:e(o).wrapper},e(a)),[u(r.$slots,"top"),k(x,{class:c(e(o).container)},{default:$(()=>{var v,M,f,N,T;return[t.icon||r.$slots.icon||t.headline||r.$slots.headline||t.title||r.$slots.title||t.description||r.$slots.description||(v=t.links)!=null&&v.length||r.$slots.links?(n(),l("div",{key:0,class:c(e(o).base)},[t.icon||r.$slots.icon?(n(),l("div",{key:0,class:c(e(o).icon.wrapper)},[u(r.$slots,"icon",{},()=>[k(h,{name:t.icon,class:c(e(o).icon.base)},null,8,["name","class"])])],2)):t.headline||r.$slots.headline?(n(),l("div",{key:1,class:c(e(o).headline)},[u(r.$slots,"headline",{},()=>[A(b(t.headline),1)])],2)):d("",!0),t.title||r.$slots.title?(n(),l("h2",{key:2,class:c(e(o).title)},[u(r.$slots,"title",{},()=>[A(b(t.title),1)])],2)):d("",!0),t.description||r.$slots.description?(n(),l("p",{key:3,class:c(e(o).description)},[u(r.$slots,"description",{},()=>[A(b(t.description),1)])],2)):d("",!0),t.align!=="center"&&((M=t.features)!=null&&M.length)?(n(),l("dl",{key:4,class:c([e(o).features.wrapper.base,e(o).features.wrapper.list])},[(n(!0),l(U,null,j(t.features,g=>(n(),l("div",{key:g.name,class:c(e(o).features.base)},[L("dt",{class:c(e(o).features.name)},[k(h,{name:g.icon||e(o).features.icon.name,class:c(e(o).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),g.name?(n(),l("span",Le,b(g.name),1)):d("",!0)],2),g.description?(n(),l("dd",{key:0,class:c(e(o).features.description)},b(g.description),3)):d("",!0)],2))),128))],2)):d("",!0),t.align!=="center"&&((f=t.links)!=null&&f.length||r.$slots.links)?(n(),l("div",{key:5,class:c(e(o).links)},[u(r.$slots,"links",{},()=>[(n(!0),l(U,null,j(t.links,(g,B)=>(n(),C(y,w({key:B},g,{onClick:g.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2)):d("",!0),r.$slots[t.slot||"default"]?u(r.$slots,t.slot||"default",{key:1}):t.align==="right"?(n(),l("div",_e)):d("",!0),t.align==="center"&&((N=t.features)!=null&&N.length)?(n(),l("dl",{key:3,class:c([e(o).features.wrapper.base,e(o).features.wrapper.grid])},[(n(!0),l(U,null,j(t.features,g=>(n(),l("div",{key:g.name,class:c(e(o).features.base)},[L("dt",{class:c(e(o).features.name)},[k(h,{name:g.icon||e(o).features.icon.name,class:c(e(o).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),g.name?(n(),l("span",Ue,b(g.name),1)):d("",!0)],2),g.description?(n(),l("dd",{key:0,class:c(e(o).features.description)},b(g.description),3)):d("",!0)],2))),128))],2)):d("",!0),t.align==="center"&&((T=t.links)!=null&&T.length||r.$slots.links)?(n(),l("div",{key:4,class:c(e(ae)(e(o).links,"mt-0 justify-center"))},[u(r.$slots,"links",{},()=>[(n(!0),l(U,null,j(t.links,(g,B)=>(n(),C(y,w({key:B},g,{onClick:g.click}),null,16,["onClick"]))),128))])],2)):d("",!0)]}),_:3},8,["class"]),u(r.$slots,"bottom")],16)}}}),Oe={key:1},Be=I({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=t,p=_(()=>{const a={};i.card?a.rounded="rounded-xl":(a.ring="",a.rounded="",a.background="",a.shadow="",a.divide="");const r=O("",i.align==="center"&&"text-center",i.align==="right"&&"lg:order-last"),m=O("flex flex-col",i.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),h=i.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",y=O("mt-10 flex items-center gap-x-6",i.align==="center"&&"justify-center");return{...a,wrapper:"relative",container:r,body:{base:m,padding:h},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:y}}),{ui:s,attrs:o}=z("landing.cta",S(i,"ui"),p,S(i,"class"),!0);return(a,r)=>{const m=E,h=G;return n(),C(h,w({class:e(s).wrapper},e(o),{ui:e(s)}),{default:$(()=>{var y;return[L("div",{class:c(e(s).container)},[t.title||a.$slots.title?(n(),l("h2",{key:0,class:c(e(s).title)},[u(a.$slots,"title",{},()=>[A(b(t.title),1)])],2)):d("",!0),t.description||a.$slots.description?(n(),l("p",{key:1,class:c(e(s).description)},[u(a.$slots,"description",{},()=>[A(b(t.description),1)])],2)):d("",!0),(y=t.links)!=null&&y.length||a.$slots.links?(n(),l("div",{key:2,class:c(e(s).links)},[u(a.$slots,"links",{},()=>[(n(!0),l(U,null,j(t.links,(x,v)=>(n(),C(m,w({key:v},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):d("",!0)],2),a.$slots.default?u(a.$slots,"default",{key:0}):t.align==="right"?(n(),l("div",Oe)):d("",!0)]}),_:3},16,["class","ui"])}}}),Ie=L("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),De=I({__name:"index",async setup(t){let i,p;const{data:s}=([i,p]=le(()=>ce("index",()=>de("/").findOne())),i=await i,p(),i);return re({title:s.value.title,ogTitle:s.value.title,description:s.value.description,ogDescription:s.value.description}),(o,a)=>{const r=X,m=V,h=oe,y=he,x=ke,v=be,M=Ce,f=Ae,N=je,T=Be;return n(),l("div",null,[k(v,{title:e(s).hero.title,description:e(s).hero.description,links:e(s).hero.links},{headline:$(()=>[e(s).hero.headline?(n(),C(h,{key:0,variant:"subtle",size:"lg",class:"relative rounded-full font-semibold"},{default:$(()=>[k(r,{to:e(s).hero.headline.to,target:"_blank",class:"focus:outline-none",tabindex:"-1"},{default:$(()=>[Ie]),_:1},8,["to"]),A(" "+b(e(s).hero.headline.label)+" ",1),e(s).hero.headline.icon?(n(),C(m,{key:0,name:e(s).hero.headline.icon,class:"ml-1 w-4 h-4 pointer-events-none"},null,8,["name"])):d("",!0)]),_:1})):d("",!0)]),default:$(()=>[k(y),k(x,{title:e(s).logos.title,align:"center"},{default:$(()=>[(n(!0),l(U,null,j(e(s).logos.icons,g=>(n(),C(m,{key:g,name:g,class:"w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white"},null,8,["name"]))),128))]),_:1},8,["title"])]),_:1},8,["title","description","links"]),k(N,{title:e(s).features.title,description:e(s).features.description,headline:e(s).features.headline},{default:$(()=>[k(f,{id:"features",class:"scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"},{default:$(()=>[(n(!0),l(U,null,j(e(s).features.items,(g,B)=>(n(),C(M,w({key:B},g),null,16))),128))]),_:1})]),_:1},8,["title","description","headline"]),k(N,{class:"bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"},{default:$(()=>[k(T,w(e(s).cta,{card:!1}),null,16)]),_:1})])}}});export{De as default};