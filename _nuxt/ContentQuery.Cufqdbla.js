import{u as g,q as m}from"./query.Bo-i6v-x.js";import{g as C,ac as S,h as b,a7 as _,a4 as k,aa as A,J as N,a9 as O}from"./entry.6C5gcV41.js";import"./preview.xRT4ko0Z.js";const Q=C({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:o,where:u,sort:l,limit:f,skip:d,locale:s,find:h}=S(i),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),p=!_().public.content.experimental.advanceQuery;k(()=>i,()=>n(),{deep:!0});const a=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await g(`content-query-${A(i)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),u.value&&(e=e.where(u.value)),l.value&&(e=e.sort(l.value)),f.value&&(e=e.limit(f.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(a):h.value==="surround"?t.value?p?e.findSurround(t.value):e.withSurround(t.value).findOne().then(a):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(a)):e.find().then(a)});return{isPartial:y,data:v,refresh:n}},render(i){var c;const t=N(),{data:r,refresh:o,isPartial:u,path:l,only:f,without:d,where:s,sort:h,limit:y,skip:p,locale:a,find:v}=i,n={path:l,only:f,without:d,where:s,sort:h,limit:y,skip:p,locale:a,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:u,props:n,...this.$attrs}):((w,q)=>O("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:u})}}),x=Q;export{x as default};
