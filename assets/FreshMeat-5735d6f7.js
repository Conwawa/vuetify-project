import{_ as d,x as p,Y as u,aA as i,a2 as t,a3 as n,c as e,a5 as o,a8 as m,a9 as f,a4 as b,aF as h,aG as v,au as g,av as x,a7 as k}from"./index-2802028b.js";import{_ as y}from"./ProductCard-39c5d21d.js";import{V}from"./VContainer-376f5167.js";import{V as w,a as r}from"./VRow-3c50d4c9.js";/* empty css              */const B=s=>(g("data-v-89bcbd44"),s=s(),x(),s),F={style:{"padding-bottom":"100px"},class:"background"},S=B(()=>k("div",{class:"routename"},null,-1)),C={__name:"FreshMeat",setup(s){const c=p([]),_=u();return(async()=>{try{const{data:a}=await i.get("/products/meat");console.log(a),c.value.push(...a.result)}catch(a){_({text:a.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}})(),(a,I)=>(t(),n("div",F,[S,e(V,null,{default:o(()=>[e(w,{class:"d-flex justify-center"},{default:o(()=>[e(r,{cols:"12"}),e(r,{cols:"12"}),(t(!0),n(m,null,f(c.value,l=>(t(),b(r,{cols:"12",md:"6",lg:"3",key:l._id},{default:o(()=>[e(y,h(v(l)),null,16)]),_:2},1024))),128))]),_:1})]),_:1})]))}},z=d(C,[["__scopeId","data-v-89bcbd44"]]);export{z as default};