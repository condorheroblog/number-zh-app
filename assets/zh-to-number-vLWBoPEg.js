import{d as O,a as B,k as M,l as S,o as N,c as L,e,t as d,f as n,w as m,v as F,m as f,n as p}from"./app-W5btj_4R.js";function k(t,a){for(let s=0;s<t.length;s++){const r=t[s];if(!a.includes(r))return!1}return!0}function E(t,a){const s=BigInt(t),r=BigInt(a);return(s+r).toString()}const G=["","十","百","千"],$=["","万","亿","兆"],V="负",j="点",K=["零","一","二","三","四","五","六","七","八","九"],q=["","拾","佰","仟"],J=["","万","亿","兆"],Q="负",X="点",Y=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],T=["","十","百","千"],y=["","萬","億","兆"],A="負",W="點",D=["零","一","二","三","四","五","六","七","八","九"],U=["","拾","佰","仟"],w=["","萬","億","兆"],R="負",z="點",H=["零","壹","貳","參","肆","伍","陸","柒","捌","玖"],Z={"zh-CN-lowercase":{digitsList:G,magnitudeList:$,minusSign:V,decimalPoint:j,baseNumerals:K},"zh-CN-uppercase":{digitsList:q,magnitudeList:J,minusSign:Q,decimalPoint:X,baseNumerals:Y},"zh-TW-lowercase":{digitsList:T,magnitudeList:y,minusSign:A,decimalPoint:W,baseNumerals:D},"zh-TW-uppercase":{digitsList:U,magnitudeList:w,minusSign:R,decimalPoint:z,baseNumerals:H},"zh-HK-lowercase":{digitsList:T,magnitudeList:y,minusSign:A,decimalPoint:W,baseNumerals:D},"zh-HK-uppercase":{digitsList:U,magnitudeList:w,minusSign:R,decimalPoint:z,baseNumerals:H}},ee="正";function se(t){const a=t.language??"zh-CN-lowercase";if(!Z.hasOwnProperty(a))throw new Error(`${a} does not appear in resources`);const s=Z[a];return{thousandsSeparator:t.thousandsSeparator??!1,digitsList:t.digitsList??s.digitsList,magnitudeList:t.magnitudeList??s.magnitudeList,baseNumerals:t.baseNumerals??s.baseNumerals,minusSign:t.minusSign??s.minusSign,decimalPoint:t.decimalPoint??s.decimalPoint,positive:t.positive??ee}}function te(t,a,s){if(typeof t!="string")throw new Error("Invalid input. Please provide a valid string.");const r={sign:"",integerPart:"",fractionalPart:""};t.startsWith(a)?r.sign="-":r.sign="+";const _=t.split(s);return r.integerPart=_[0],_.length>1&&(r.fractionalPart=_[1]),r}function ie(t,a={}){if(typeof t=="string"){t=t.trim();const s=se(a),r=[s.minusSign,...s.baseNumerals,...s.digitsList,...s.magnitudeList,s.decimalPoint,s.positive];if(k(t,r.join(","))){t.startsWith(`${s.digitsList[1]}`)?t=s.baseNumerals[1]+t:(t.startsWith(`${s.positive}${s.digitsList[1]}`)||t.startsWith(`${s.minusSign}${s.digitsList[1]}`))&&(t=t.charAt(0)+s.baseNumerals[1]+t.slice(1)),t===`${s.minusSign}${s.baseNumerals[0]}`&&(t=t.slice(1));const{sign:h,integerPart:g,fractionalPart:l}=te(t,s.minusSign,s.decimalPoint);let u="",c="",i="",o=1/0;for(let x=0;x<g.length;x+=1){const v=g[x],I=s.baseNumerals.indexOf(v);if(I>-1)i=String(I);else{const b=s.digitsList.indexOf(v);if(b>-1)i+=new Array(b+1).join("0"),c=E(c,i),i="";else{const C=s.magnitudeList.indexOf(v);if(C>-1){c=E(c,i);const P=new Array(1+C*4).join("0");o<=C?u=E(u,c)+P:u=E(u,`${c}${P}`),o=C,c="",i=""}}}}if(u=E(u,E(c,i)),i="",c="",s.thousandsSeparator&&(u=new Intl.NumberFormat("en-US").format(u)),l){u+=".";for(const x of l)u+=s.baseNumerals.indexOf(x)}return h==="-"?`-${u}`:u}else return NaN}else return NaN}const ae={class:"my-6 mr-5 flex flex-col gap-6"},ne={class:"flex items-center justify-center gap-4"},oe={for:"input",class:"basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300"},le={class:"flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset"},ue={class:"flex items-center justify-center gap-4"},re={class:"basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300"},ce={class:"flex-1"},de={class:"space-x-4"},_e={class:"inline-flex gap-x-2"},ge={for:"zh-CN-lowercase",class:"text-sm"},me={class:"inline-flex gap-x-2"},fe={for:"zh-CN-uppercase",class:"text-sm"},pe={class:"space-x-4"},Ee={class:"inline-flex gap-x-2"},he={for:"zh-TW-lowercase",class:"text-sm"},xe={class:"inline-flex gap-x-2"},Ce={for:"zh-TW-uppercase",class:"text-sm"},Se={class:"flex items-center justify-center gap-4"},ve={class:"basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300"},Ne={class:"flex flex-1 items-center gap-4"},Le={class:"inline-flex gap-x-2"},Ie={for:"yes",class:"text-sm"},be={class:"inline-flex gap-x-2"},Pe={for:"no",class:"text-sm"},Te={class:"flex items-center justify-center gap-4"},ye={for:"output",class:"basis-1/6 text-center text-sm text-slate-600 leading-6 dark:text-slate-300"},Ae={class:"flex flex-1 items-center"},We={class:"inline-flex flex-1 rounded-md shadow-sm ring-1 ring-gray-300 ring-inset"},De=["value"],Ue={key:1,class:"relative inline-flex basis-1/6 items-center"},we=e("svg",{"aria-hidden":"true",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","data-view-component":"true",class:"octicon octicon-check js-clipboard-check-icon color-fg-success m-2"},[e("path",{d:"M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"})],-1),Re=e("span",{absolute:"","left-8":"","text-sm":""},"Copied!",-1),ze=[we,Re],He={class:"text-center"},Ze=["disabled"],Be=O({__name:"zh-to-number",setup(t){const{t:a}=B(),{copy:s,copied:r}=M(),_=S(""),h=S(""),g=S(!1),l=S("zh-CN-lowercase");function u(){const c=_.value;c.length&&(h.value=ie(c,{thousandsSeparator:g.value,language:l.value}))}return(c,i)=>(N(),L("div",ae,[e("div",ne,[e("label",oe,d(n(a)("input")),1),e("div",le,[m(e("input",{id:"input","onUpdate:modelValue":i[0]||(i[0]=o=>f(_)?_.value=o:null),type:"text",name:"input",autocomplete:"false",class:"flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0",placeholder:"Enter a Chinese numeral"},null,512),[[F,n(_)]])])]),e("div",ue,[e("label",re,d(n(a)("language")),1),e("div",ce,[e("div",de,[e("div",_e,[m(e("input",{id:"zh-CN-lowercase","onUpdate:modelValue":i[1]||(i[1]=o=>f(l)?l.value=o:null),value:"zh-CN-lowercase",name:"language",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(l)]]),e("label",ge,d(n(a)("zh-CN-lowercase")),1)]),e("div",me,[m(e("input",{id:"zh-CN-uppercase","onUpdate:modelValue":i[2]||(i[2]=o=>f(l)?l.value=o:null),value:"zh-CN-uppercase",name:"language",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(l)]]),e("label",fe,d(n(a)("zh-CN-uppercase")),1)])]),e("div",pe,[e("div",Ee,[m(e("input",{id:"zh-TW-lowercase","onUpdate:modelValue":i[3]||(i[3]=o=>f(l)?l.value=o:null),value:"zh-TW-lowercase",name:"language",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(l)]]),e("label",he,d(n(a)("zh-TW-lowercase")),1)]),e("div",xe,[m(e("input",{id:"zh-TW-uppercase","onUpdate:modelValue":i[4]||(i[4]=o=>f(l)?l.value=o:null),value:"zh-TW-uppercase",name:"language",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(l)]]),e("label",Ce,d(n(a)("zh-TW-uppercase")),1)])])])]),e("div",Se,[e("label",ve,d(n(a)("comma-separator")),1),e("div",Ne,[e("div",Le,[m(e("input",{id:"yes","onUpdate:modelValue":i[5]||(i[5]=o=>f(g)?g.value=o:null),value:!0,name:"thousandsSeparator",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(g)]]),e("label",Ie,d(n(a)("yes")),1)]),e("div",be,[m(e("input",{id:"no","onUpdate:modelValue":i[6]||(i[6]=o=>f(g)?g.value=o:null),value:!1,name:"thousandsSeparator",type:"radio",class:"border-gray-300 text-indigo-600 focus:ring-indigo-600"},null,512),[[p,n(g)]]),e("label",Pe,d(n(a)("no")),1)])])]),e("div",Te,[e("label",ye,d(n(a)("output")),1),e("div",Ae,[e("div",We,[e("input",{id:"output",readonly:"",value:n(h),type:"text",name:"output",autocomplete:"false",class:"flex-1 bg-transparent px-3 py-1.5 sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-0"},null,8,De)]),n(r)?(N(),L("div",Ue,ze)):(N(),L("div",{key:0,class:"basis-1/6","i-carbon-copy":"","cursor-copy":"",onClick:i[7]||(i[7]=o=>n(s)(n(h).toString()))}))])]),e("div",He,[e("button",{type:"button",class:"btn",disabled:!n(_).length,onClick:u},d(n(a)("transform")),9,Ze)])]))}});export{Be as default};