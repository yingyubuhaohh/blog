"use strict";(self["webpackChunkblog2_0"]=self["webpackChunkblog2_0"]||[]).push([[907],{4907:function(e,t,l){l.r(t),l.d(t,{default:function(){return V}});var s=l(3396),a={test:function(){let e=document.getElementById("transfetBtn");e.addEventListener("click",(function(){let t=document.querySelector(".login-box"),l=document.querySelector(".reg-box"),s=document.querySelector(".transtion-box"),a=document.querySelector(".transferToReg"),o=document.querySelector(".title"),r=document.querySelector(".subTitle");"注册"===e.innerText?(()=>{a.style.left=0,s.style.left="260px",e.innerText="登录",o.innerText="已有帐号？",r.innerText="有帐号就登录吧，好久不见了！",setTimeout((()=>{t.style.display="none",l.style.display="flex"}),300)})():(()=>{a.style.left="640px",s.style.left=0,e.innerText="注册",o.innerText="还未注册？",r.innerText="立即注册，就可以使用更多的功能了！",setTimeout((()=>{t.style.display="flex",l.style.display="none"}),300)})()}))}},o=l(4870),r=(l(494),l(65)),n=l(1120);const u=e=>((0,s.dD)("data-v-86587a00"),e=e(),(0,s.Cn)(),e),m={class:"bg bg-blur"},i={class:"container"},d={class:"box"},c={class:"transtion-box"},p={class:"login-box"},f=u((()=>(0,s._)("h1",null,"欢迎回来",-1))),b={class:"reg-box",style:{display:"none"}},y=u((()=>(0,s._)("h1",null,"立即注册",-1))),g=u((()=>(0,s._)("div",{class:"transferToReg"},[(0,s._)("h1",{class:"title"},"还未注册？"),(0,s._)("span",{class:"subTitle"},"立即注册，就可以使用更多的功能了！"),(0,s._)("button",{type:"button",id:"transfetBtn"},"注册")],-1)));var _={__name:"index",setup(e){const t=(0,r.oR)(),l=(0,o.qj)({userName:"",userPwd:"",userDisplayName:"",userEmail:""}),u=(0,o.qj)({userName:"",userPwd:""});function _(){t.dispatch("register",l).then((e=>{alert(e.data.data)})).catch((e=>{alert("系统错误！")}))}function x(){t.dispatch("login",u).then((e=>{n.Z.go(0)}))}return(0,s.bv)((()=>{a.test()})),(e,t)=>{const a=(0,s.up)("el-input"),o=(0,s.up)("el-form-item"),r=(0,s.up)("el-form");return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",i,[(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("div",p,[f,(0,s.Wm)(r,{ref:"form",model:u,"label-width":"auto","label-position":"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"register-form-item",label:"账号"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:u.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>u.userName=e),class:"register-form-input",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1}),(0,s.Wm)(o,{class:"register-form-item",label:"密码"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:u.userPwd,"onUpdate:modelValue":t[1]||(t[1]=e=>u.userPwd=e),class:"register-form-input",type:"password",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),(0,s._)("button",{type:"button",onClick:t[2]||(t[2]=e=>x())},"登录")]),(0,s._)("div",b,[y,(0,s.Wm)(r,{ref:"form",model:l,"label-width":"auto","label-position":"top"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"register-form-item",label:"账号"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:l.userName,"onUpdate:modelValue":t[3]||(t[3]=e=>l.userName=e),class:"register-form-input",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1}),(0,s.Wm)(o,{class:"register-form-item",label:"密码"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:l.userPwd,"onUpdate:modelValue":t[4]||(t[4]=e=>l.userPwd=e),class:"register-form-input",type:"password",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1}),(0,s.Wm)(o,{class:"register-form-item",label:"昵称"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:l.userDisplayName,"onUpdate:modelValue":t[5]||(t[5]=e=>l.userDisplayName=e),class:"register-form-input",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1}),(0,s.Wm)(o,{class:"register-form-item",label:"邮箱"},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{modelValue:l.userEmail,"onUpdate:modelValue":t[6]||(t[6]=e=>l.userEmail=e),class:"register-form-input",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),(0,s._)("button",{type:"button",onClick:t[7]||(t[7]=e=>_())},"注册")])]),g])])])}}},x=l(89);const w=(0,x.Z)(_,[["__scopeId","data-v-86587a00"]]);var V=w}}]);
//# sourceMappingURL=907.5b09dc00.js.map