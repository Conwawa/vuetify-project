import{_ as h,Y as w,ax as x,Z as y,aB as S,a2 as k,a3 as B,c as s,a5 as t,ae as a,az as C,aA as i,a7 as p,K as N,aa as F,av as I,aw as E}from"./index-a6f3639f.js";import{c as L,a as d,u as M,b as m}from"./index.esm-f13cad4e.js";import{v as U}from"./index-6fc8fe85.js";import{V as q}from"./VContainer-d42c8fe3.js";import{V as P,a as R}from"./VRow-1744d4d5.js";import{V as T}from"./VForm-50e82838.js";import"./_commonjsHelpers-39b5b250.js";/* empty css              */const $=r=>(I("data-v-d84b876d"),r=r(),E(),r),j={class:"background"},z=$(()=>p("h1",{class:"text-center",style:{color:"#333"}},"登入會員",-1)),A={class:"text-center"},K={__name:"LoginView",setup(r){const u=w(),_=x(),b=y(),V=L({account:d().required("帳號必填").test("isEmail","信箱格式錯誤",o=>U.isEmail(o)),password:d().required("密碼必填").min(6,"密碼最少 6 個字").max(20,"密碼最多 20 個字")}),{handleSubmit:f,isSubmitting:g}=M({validationSchema:V}),l=m("account"),c=m("password"),v=f(async o=>{try{const{data:e}=await S.post("/users/login",{account:o.account,password:o.password});b.login({token:e.result.token,account:e.result.account,cart:e.result.cart,phoneNumber:e.result.phoneNumber,role:e.result.role}),u({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),_.push("/")}catch(e){console.log(e),u({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(o,e)=>(k(),B("div",j,[s(q,{class:"mt-4 h-100"},{default:t(()=>[s(P,{class:"h-100",justify:"center","align-content":"center"},{default:t(()=>[s(R,{cols:"11",md:"6",class:"backdrop-filter",style:{padding:"50px 20px"}},{default:t(()=>[z,s(T,{disabled:a(g),onSubmit:C(a(v),["prevent"])},{default:t(()=>[s(i,{label:"帳號",type:"email",modelValue:a(l).value.value,"onUpdate:modelValue":e[0]||(e[0]=n=>a(l).value.value=n),"error-messages":a(l).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{label:"密碼",counter:"",maxlength:"20",type:"password",modelValue:a(c).value.value,"onUpdate:modelValue":e[1]||(e[1]=n=>a(c).value.value=n),"error-messages":a(c).errorMessage.value},null,8,["modelValue","error-messages"]),p("div",A,[s(N,{color:"primary",type:"submit"},{default:t(()=>[F("登入")]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]))}},W=h(K,[["__scopeId","data-v-d84b876d"]]);export{W as default};