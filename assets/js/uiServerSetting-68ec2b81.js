import{_ as R}from"./notData-2026ca54.js";import{d as f}from"./util-8cf766eb.js";import{u as D}from"./useSelection-1dc1eb7e.js";import{u as U}from"./useAuthButtons-6e5ad93a.js";import{u as E}from"./useTable-6d3cf82e.js";import{I as P}from"./index-7154a9df.js";import{_ as I,e as L,f as A}from"./setting-4a2ee52f.js";import{d as w,b as F,r as g,e as n,f as d,g as K,k as l,h as o,j as e,W as j,w as s,t as h,y as _,Z as O,n as x,V as b}from"./index-3efbb394.js";import"./serviceDict-19376974.js";import"./plugin-vue_export-helper-b2bddca3.js";import"./index-2ef92394.js";const W={class:"table-box"},Z={class:"table-header"},q={class:"header-button-ri"},G={class:"table-empty"},H=l("img",{src:R,alt:"notData"},null,-1),J=w({name:"uiServerSetting"}),pe=w({...J,setup(M){const C=F({}),{tableData:v,pageable:i,getTableList:c,handleSizeChange:y,handleCurrentChange:k}=E(L,C),{selectionChange:S,getRowKeys:$}=D(),{BUTTONS:p}=U(),T=g(),m=g(),z=(t,u={})=>{let r={title:t,rowData:{...u},isView:t==="\u67E5\u770B",apiUrl:t==="\u7F16\u8F91"?A:"",getTableList:c};m.value.acceptParams(r)};return(t,u)=>{const r=n("el-button"),a=n("el-table-column"),V=n("el-table"),B=n("el-pagination");return d(),K("div",W,[l("div",Z,[l("div",q,[o(r,{icon:e(j),circle:"",onClick:e(c)},null,8,["icon","onClick"])])]),o(V,{height:"575",data:e(v),border:!0,onSelectionChange:e(S),"row-key":e($),"row-style":{height:"30px"},"cell-style":{padding:"0px"},stripe:""},{empty:s(()=>[l("div",G,[H,l("div",null,h(t.$t("set.NoData")),1)])]),default:s(()=>[o(a,{prop:"ConfigKey",label:t.$t("set.ConfigKey"),formatter:e(f),"show-overflow-tooltip":"",width:"250"},null,8,["label","formatter"]),o(a,{prop:"ConfigValue",label:t.$t("set.ConfigValue"),"show-overflow-tooltip":"",width:"500",formatter:e(f)},null,8,["label","formatter"]),o(a,{prop:"Remarks",label:t.$t("set.Remarks"),"show-overflow-tooltip":"",width:"400"},null,8,["label"]),o(a,{prop:"AddedTime",label:t.$t("set.AddedTime"),"show-overflow-tooltip":"",width:"200"},null,8,["label"]),o(a,{prop:"LastUpdateTime",label:t.$t("set.LastUpdateTime"),"show-overflow-tooltip":"",width:"200"},null,8,["label"]),e(p).view||e(p).edit?(d(),_(a,{key:0,label:t.$t("set.Operate"),fixed:"right",width:"100"},{default:s(N=>[e(p).edit?(d(),_(r,{key:0,type:"primary",link:"",icon:e(O),onClick:Q=>z(t.$t("set.Edit"),N.row)},{default:s(()=>[x(h(t.$t("set.Edit")),1)]),_:2},1032,["icon","onClick"])):b("",!0)]),_:1},8,["label"])):b("",!0)]),_:1},8,["data","onSelectionChange","row-key"]),o(B,{currentPage:e(i).pageNum,"page-size":e(i).pageSize,"page-sizes":[10,25,50,100,1e3],background:"",layout:"total, sizes, prev, pager, next, jumper",total:e(i).total,onSizeChange:e(y),onCurrentChange:e(k)},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"]),o(I,{ref_key:"drawerRef",ref:m},null,512),o(P,{ref_key:"dialogRef",ref:T},null,512)])}}});export{pe as default};
