import{s as d,v as f,G as r,a as l,x as g,d as u,e as C,f as _,y as k,j as n,z as v,A}from"./index-3efbb394.js";import{h as a}from"./index-2ef92394.js";const L=d({id:"MenuState",state:()=>({isCollapse:!1,menuList:[]}),getters:{},actions:{async setCollapse(){this.isCollapse=!this.isCollapse},async setMenuList(e){this.menuList=e}},persist:f("MenuState")}),w=e=>a.post("/User/Login",e),y=e=>a.get("/User/GetButtonsAuth",e),B=e=>a.get("/User/GetAsideList",e),D=()=>{const e=r(),s=l(()=>e.themeConfig),o=()=>{const t=document.documentElement;s.value.isDark?t.setAttribute("class","dark"):t.setAttribute("class","")};return g(()=>{o()}),{switchTheme:o}},M=u({name:"switchDark"}),G=u({...M,setup(e){const s=r(),{switchTheme:o}=D(),t=l(()=>s.themeConfig),m=i=>{s.setThemeConfig({...t.value,isDark:i}),o()};return(i,c)=>{const p=C("el-switch");return _(),k(p,{modelValue:n(t).isDark,"onUpdate:modelValue":c[0]||(c[0]=h=>n(t).isDark=h),onChange:m,"inline-prompt":"","active-color":"#0a0a0a","inactive-color":"#dcdfe6","active-icon":n(v),"inactive-icon":n(A)},null,8,["modelValue","active-icon","inactive-icon"])}}});export{L as M,G as _,y as a,B as g,w as l,D as u};
