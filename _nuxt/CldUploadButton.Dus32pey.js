import{_ as a}from"./CldUploadWidget.vue.xcPU8eoV.js";import{g as u,o as i,x as s,w as c,a as d,m as r,r as l}from"./entry.6C5gcV41.js";const y=["disabled","onClick"],_=u({__name:"CldUploadButton",props:{onClose:{type:Function},onError:{type:Function},onOpen:{type:Function},onUpload:{type:Function},onClick:{type:Function},onAbort:{type:Function},onBatchCancelled:{type:Function},onDisplayChanged:{type:Function},onPublicId:{type:Function},onQueuesEnd:{type:Function},onQueuesStart:{type:Function},onRetry:{type:Function},onShowCompleted:{type:Function},onSourceChanged:{type:Function},onSuccess:{type:Function},onTags:{type:Function},onUploadAdded:{type:Function},options:{},signatureEndpoint:{},uploadPreset:{}},setup(F){return(n,C)=>{const t=a;return i(),s(t,{"upload-preset":n.uploadPreset},{default:c(({open:e,isLoading:p})=>[d("button",r({type:"button"},n.$attrs,{disabled:p,onClick:o=>{o.preventDefault(),e(),typeof n.onClick=="function"&&n.onClick(o)}}),[l(n.$slots,"default")],16,y)]),_:3},8,["upload-preset"])}}});export{_ as default};
