import{g as r,h as n,am as c,a8 as h,a7 as o,an as l,o as u,c as d,k as g}from"./entry.B9frmCOK.js";const f=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const a=c(h(o().app.baseURL));if(a!=="/"&&!t.src.startsWith(a))return l(a,t.src)}return t.src});return(s,a)=>(u(),d("img",{src:g(i),alt:e.alt,width:e.width,height:e.height},null,8,f))}});export{p as default};