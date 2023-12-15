import{_ as m}from"./app-6N94MfgU.js";function w(c={}){const{immediate:d=!1,onNeedRefresh:u,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=c;let t,n;const p=async(o=!0)=>{await n};async function l(){if("serviceWorker"in navigator){const{Workbox:o}=await m(()=>import("./workbox-window.prod.es5-prqDwDSL.js"),__vite__mapDeps([]));t=new o("/number-zh-app/sw.js",{scope:"/number-zh-app/",type:"classic"}),t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||i==null||i()}),t.register({immediate:d}).then(e=>{s?s("/number-zh-app/sw.js",e):r==null||r(e)}).catch(e=>{a==null||a(e)})}}return n=l(),p}export{w as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}