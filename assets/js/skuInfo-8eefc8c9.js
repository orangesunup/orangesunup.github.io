import{d as q,b as z,r as D,e as d,f as k,y as h,w as r,h as l,n as v,t as w,Q as B,R as Y,j as e,E as le,G as te,a as oe,i as F,g as P,k as V,S as ae,_ as R,U as re,V as L,P as ue,N as ne,W as se,M as de,X as ie,Y as me,Z as pe}from"./index-3efbb394.js";import{_ as fe}from"./notData-2026ca54.js";import{I as be,u as we}from"./index-7154a9df.js";import{d as b}from"./util-8cf766eb.js";import{u as ve}from"./useSelection-1dc1eb7e.js";import{u as ge}from"./useAuthButtons-6e5ad93a.js";import{u as ce}from"./useTable-6d3cf82e.js";import{g as Se,e as ke,a as Ve,i as $e,b as he,m as Le,d as ye}from"./basicInfo-e79afad1.js";import{u as Ue}from"./useHandleData-6dfe8d42.js";import"./plugin-vue_export-helper-b2bddca3.js";import"./serviceDict-19376974.js";import"./index-2ef92394.js";const De=q({setup(M,{expose:I}){const K=z({SkuId:[{required:!0,trigger:"blur"}],WarehouseId:[{required:!0,trigger:"blur"}],Owner:[{required:!0,trigger:"blur"}],SkuName:[{required:!0,trigger:"blur"}],Lot01:[{required:!0,trigger:"blur"}],Lot02:[{required:!0,trigger:"blur"}],Lot03:[{required:!0,trigger:"blur"}],Lot04:[{required:!0,trigger:"blur"}],Lot05:[{required:!0,trigger:"blur"}],Lot06:[{required:!0,trigger:"blur"}],Lot07:[{required:!0,trigger:"blur"}]}),g=D(!1),o=D({isView:!1,title:""}),N=u=>{o.value=u,g.value=!0},$=D(),y=()=>{$.value.validate(async u=>{if(!!u)try{if(!o.value.apiUrl)return;await o.value.apiUrl(o.value.rowData),le.success({message:`${o.value.title}\u6210\u529F\uFF01`}),o.value.getTableList&&o.value.getTableList(),g.value=!1}catch(a){}})};return I({acceptParams:N}),(u,a)=>{const i=d("el-input"),m=d("el-form-item"),O=d("el-form"),_=d("el-button"),T=d("el-drawer");return k(),h(T,{modelValue:g.value,"onUpdate:modelValue":a[12]||(a[12]=n=>g.value=n),"destroy-on-close":!0,size:"550px",title:o.value.title+u.$t("set.SKUInfo")},{footer:r(()=>[l(_,{onClick:a[11]||(a[11]=n=>g.value=!1)},{default:r(()=>[v(w(u.$t("set.Cancel")),1)]),_:1}),B(l(_,{type:"primary",onClick:y},{default:r(()=>[v(w(u.$t("set.Confirm")),1)]),_:1},512),[[Y,!o.value.isView]])]),default:r(()=>[l(O,{ref_key:"ruleFormRef",ref:$,rules:e(K),disabled:o.value.isView,model:o.value.rowData,"label-width":"150px"},{default:r(()=>[l(m,{label:u.$t("set.SKU"),prop:"SkuId",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.SkuId,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value.rowData.SkuId=n),disabled:o.value.title!==u.$t("set.Add")},null,8,["modelValue","disabled"])]),_:1},8,["label"]),l(m,{label:u.$t("set.WarehouseId"),prop:"WarehouseId",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.WarehouseId,"onUpdate:modelValue":a[1]||(a[1]=n=>o.value.rowData.WarehouseId=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.Owner"),prop:"Owner",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Owner,"onUpdate:modelValue":a[2]||(a[2]=n=>o.value.rowData.Owner=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SkuName"),prop:"SkuName",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.SkuName,"onUpdate:modelValue":a[3]||(a[3]=n=>o.value.rowData.SkuName=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot01"),prop:"Lot01",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot01,"onUpdate:modelValue":a[4]||(a[4]=n=>o.value.rowData.Lot01=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot02"),prop:"Lot02",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot02,"onUpdate:modelValue":a[5]||(a[5]=n=>o.value.rowData.Lot02=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot03"),prop:"Lot03",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot03,"onUpdate:modelValue":a[6]||(a[6]=n=>o.value.rowData.Lot03=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot04"),prop:"Lot04",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot04,"onUpdate:modelValue":a[7]||(a[7]=n=>o.value.rowData.Lot04=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot05"),prop:"Lot05",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot05,"onUpdate:modelValue":a[8]||(a[8]=n=>o.value.rowData.Lot05=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot06"),prop:"Lot06",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot06,"onUpdate:modelValue":a[9]||(a[9]=n=>o.value.rowData.Lot06=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:u.$t("set.SKULot07"),prop:"Lot07",clearable:""},{default:r(()=>[l(i,{modelValue:o.value.rowData.Lot07,"onUpdate:modelValue":a[10]||(a[10]=n=>o.value.rowData.Lot07=n)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["rules","disabled","model"])]),_:1},8,["modelValue","title"])}}}),_e={class:"table-box"},Ce={class:"table-search"},Ie={class:"more-item"},Ke={class:"search-operation"},Ne={class:"table-header"},Oe={class:"header-button-lf"},Te={class:"header-button-ri"},qe={key:2},We={class:"table-empty"},Ae=V("img",{src:fe,alt:"notData"},null,-1),Ee=q({name:"skuInfo"}),Ze=q({...Ee,setup(M){const I=te(),K=oe(()=>I.language);F.global.locale=K.value;const{t:g}=F.global,o=z({}),{tableData:N,searchShow:$,pageable:y,searchParam:u,getTableList:a,search:i,reset:m,handleSizeChange:O,handleCurrentChange:_}=ce(Se,o),{selectionChange:T,getRowKeys:n}=ve(),{BUTTONS:c}=ge(),H=async()=>{we(ke,"\u7269\u6599\u57FA\u7840\u8D44\u6599",u.value)},W=D(),j=()=>{let t={title:g("set.SKUInfo"),tempApi:Ve,importApi:$e,getTableList:a};W.value.acceptParams(t)},G=async t=>{await Ue(ye,{id:t.SerialKey},g("set.Delete")+`\u3010${t.SkuId}\u3011`+g("set.SKU")),a()},A=D(),E=(t,s={})=>{let U={title:t,rowData:{...s},isView:t==="\u67E5\u770B",apiUrl:t==="\u65B0\u589E"?he:t==="\u7F16\u8F91"?Le:"",getTableList:a};A.value.acceptParams(U)};return(t,s)=>{const U=d("el-input"),C=d("el-form-item"),Q=d("el-date-picker"),X=d("el-form"),S=d("el-button"),Z=d("el-icon"),p=d("el-table-column"),J=d("el-table"),x=d("el-pagination");return k(),P("div",_e,[V("div",Ce,[l(X,{ref:"formRef",model:e(u),inline:!0,"label-width":"100px"},{default:r(()=>[l(C,{label:t.$t("set.SKU")},{default:r(()=>[l(U,{modelValue:e(u).SkuId,"onUpdate:modelValue":s[0]||(s[0]=f=>e(u).SkuId=f),clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(C,{label:t.$t("set.WarehouseId")},{default:r(()=>[l(U,{modelValue:e(u).WarehouseId,"onUpdate:modelValue":s[1]||(s[1]=f=>e(u).WarehouseId=f),clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(C,{label:t.$t("set.Owner")},{default:r(()=>[l(U,{modelValue:e(u).Owner,"onUpdate:modelValue":s[2]||(s[2]=f=>e(u).Owner=f),clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),B(V("div",Ie,[l(C,{label:t.$t("set.AddedTime")},{default:r(()=>[l(Q,{modelValue:e(u).AddedTime,"onUpdate:modelValue":s[3]||(s[3]=f=>e(u).AddedTime=f),type:"datetimerange","start-placeholder":t.$t("set.StartTime"),"end-placeholder":t.$t("set.EndTime"),"value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"])],512),[[Y,e($)]])]),_:1},8,["model"]),V("div",Ke,[l(S,{type:"primary",icon:e(ae),onClick:e(i)},{default:r(()=>[v(w(t.$t("set.Search")),1)]),_:1},8,["icon","onClick"]),l(S,{icon:e(R),onClick:e(m)},{default:r(()=>[v(w(t.$t("set.Reset")),1)]),_:1},8,["icon","onClick"]),l(S,{type:"primary",link:"",class:"search-isOpen",onClick:s[4]||(s[4]=f=>$.value=!e($))},{default:r(()=>[v(w(e($)?t.$t("set.Close"):t.$t("set.Open"))+" ",1),l(Z,{class:"el-icon--right"},{default:r(()=>[(k(),h(de(e($)?e(ie):e(me))))]),_:1})]),_:1})])]),V("div",Ne,[V("div",Oe,[e(c).add?(k(),h(S,{key:0,type:"primary",icon:e(re),onClick:s[5]||(s[5]=f=>E(t.$t("set.Add")))},{default:r(()=>[v(w(t.$t("set.AddSKUInfo")),1)]),_:1},8,["icon"])):L("",!0),e(c).export?(k(),h(S,{key:1,type:"primary",icon:e(ue),plain:"",onClick:H},{default:r(()=>[v(w(t.$t("set.SKUInfoExport")),1)]),_:1},8,["icon"])):L("",!0),e(c).import?(k(),h(S,{key:2,type:"primary",icon:e(ne),plain:"",onClick:j},{default:r(()=>[v(w(t.$t("set.BatchImport")),1)]),_:1},8,["icon"])):L("",!0)]),V("div",Te,[l(S,{icon:e(se),circle:"",onClick:e(a)},null,8,["icon","onClick"])])]),l(J,{height:"575",data:e(N),border:!0,onSelectionChange:e(T),"row-key":e(n),"row-style":{height:"30px"},"cell-style":{padding:"0px"},stripe:""},{empty:r(()=>[V("div",We,[Ae,V("div",null,w(t.$t("set.NoData")),1)])]),default:r(()=>[l(p,{prop:"SkuId",label:t.$t("set.SKU"),formatter:e(b),"show-overflow-tooltip":"",width:"200",sortable:"","sort-orders":["descending","ascending"]},null,8,["label","formatter"]),l(p,{prop:"WarehouseId",label:t.$t("set.WarehouseId"),formatter:e(b),"show-overflow-tooltip":"",width:"150"},null,8,["label","formatter"]),l(p,{prop:"Owner",label:t.$t("set.Owner"),formatter:e(b),"show-overflow-tooltip":"",width:"150"},null,8,["label","formatter"]),l(p,{prop:"SkuName",label:t.$t("set.SkuName"),formatter:e(b),"show-overflow-tooltip":"",width:"100"},null,8,["label","formatter"]),l(p,{prop:"Lot01",label:t.$t("set.SKULot01"),formatter:e(b),"show-overflow-tooltip":"",width:"200"},null,8,["label","formatter"]),l(p,{prop:"Lot02",label:t.$t("set.SKULot02"),formatter:e(b),"show-overflow-tooltip":"",width:"200"},null,8,["label","formatter"]),l(p,{prop:"Lot03",label:t.$t("set.SKULot03"),formatter:e(b),"show-overflow-tooltip":"",width:"200"},null,8,["label","formatter"]),l(p,{prop:"Lot04",label:t.$t("set.SKULot04"),formatter:e(b),"show-overflow-tooltip":"",width:"200"},null,8,["label","formatter"]),l(p,{prop:"Lot05",label:t.$t("set.SKULot05"),formatter:e(b),"show-overflow-tooltip":"",width:"200"},null,8,["label","formatter"]),l(p,{prop:"Lot06",label:t.$t("set.SKULot06"),formatter:e(b),"show-overflow-tooltip":"",width:"100"},null,8,["label","formatter"]),l(p,{prop:"Lot07",label:t.$t("set.SKULot07"),formatter:e(b),"show-overflow-tooltip":"",width:"100"},null,8,["label","formatter"]),l(p,{label:t.$t("set.Operate"),fixed:"right",width:"200"},{default:r(f=>[e(c).edit?(k(),h(S,{key:0,type:"primary",link:"",icon:e(pe),onClick:ee=>E(t.$t("set.Edit"),f.row)},{default:r(()=>[v(w(t.$t("set.Edit")),1)]),_:2},1032,["icon","onClick"])):L("",!0),e(c).delete?(k(),h(S,{key:1,type:"primary",link:"",icon:e(R),onClick:ee=>G(f.row)},{default:r(()=>[v(w(t.$t("set.Delete")),1)]),_:2},1032,["icon","onClick"])):L("",!0),!e(c).view&&!e(c).edit&&!e(c).reset&&!e(c).delete?(k(),P("span",qe,"--")):L("",!0)]),_:1},8,["label"])]),_:1},8,["data","onSelectionChange","row-key"]),l(x,{currentPage:e(y).pageNum,"page-size":e(y).pageSize,"page-sizes":[10,25,50,100,1e3],background:"",layout:"total, sizes, prev, pager, next, jumper",total:e(y).total,onSizeChange:e(O),onCurrentChange:e(_)},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"]),l(De,{ref_key:"drawerRef",ref:A},null,512),l(be,{ref_key:"dialogRef",ref:W},null,512)])}}});export{Ze as default};
