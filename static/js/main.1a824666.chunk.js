(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{25:function(e,t){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(6),r=n(8),s=n(7),j=n(1),u=n.n(j),i=n(21),o=n.n(i),b=n(12),l=n.n(b),O=n(22),d=n(4),h=n(3),p=n(23),f=n.n(p),x=(n(49),n(0)),v=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:"RESTy"})})}}]),n}(u.a.Component),m=v,y=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)("footer",{children:"Dario V \xa9 2021-2022"})}}]),n}(u.a.Component),g=y,S=(n(51),function(e){var t=Object(j.useState)(""),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(j.useState)("https://pokeapi.co/api/v2/pokemon"),s=Object(d.a)(r,2),u=s[0],i=s[1],o=Object(j.useState)(!1),b=Object(d.a)(o,2),l=b[0],O=b[1],h=Object(j.useState)(""),p=Object(d.a)(h,2),f=p[0],v=p[1],m=function(e){e.preventDefault(),c(e.target.id)},y=function(e){O(!l),c(e.target.id)};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={method:a,url:u};e.handleApiCall(n,f)},children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"URL: "}),Object(x.jsx)("input",{onChange:function(e){e.preventDefault(),i(e.target.value)},name:"url",type:"text"}),Object(x.jsx)("button",{type:"submit",children:"GO!"})]}),Object(x.jsxs)("label",{className:"methods",children:[Object(x.jsx)("span",{onClick:m,id:"get",children:"GET"}),Object(x.jsx)("span",{onClick:y,id:"post",children:"POST"}),Object(x.jsx)("span",{onClick:y,id:"put",children:"PUT"}),Object(x.jsx)("span",{onClick:m,id:"delete",children:"DELETE"})]}),l&&Object(x.jsx)("textarea",{name:"postput",rows:"10",cols:"29",onChange:function(e){v(e.target.id)}})]})})}),k=(n(52),n(24)),C=n.n(k),T=function(e){return Object(x.jsx)("section",{children:Object(x.jsx)("pre",{"data-testid":"data",children:e.data?Object(x.jsx)(C.a,{src:e.data,theme:"greenscreen"}):Object(x.jsx)("p",{children:"Loading..."})})})},A=n(25),D=n.n(A),R={data:null,requestParams:{},history:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA":return Object(h.a)(Object(h.a)({},e),{},{data:Object(h.a)({},t.payload)});case"REQUESTPARAMS":return Object(h.a)(Object(h.a)({},e),{},{requestParams:Object(h.a)({},t.payload)});case"HISTORY":return Object(h.a)(Object(h.a)({},e),{},{history:Object(h.a)({},t.payload)});default:return e}},w=function(){var e=Object(j.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(j.useState)({}),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(j.useReducer)(E,R),b=Object(d.a)(o,2),p=b[0],v=b[1],y=function(){var e=Object(O.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,f.a.get(n);case 3:c=e.sent,v({type:"APIDATA",payload:c}),r={headers:c.headers,count:c.data.count,response:c.data.results},a(r),i(Object(h.a)(Object(h.a)({},s),t));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(u.a.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)(S,{handleApiCall:y}),Object(x.jsxs)("div",{id:"requestMethod",children:["Request Method: ",s.method]}),Object(x.jsxs)("div",{id:"url",children:["URL: ",s.url]}),Object(x.jsx)(D.a,{handleHistory:function(e,t,n){return{type:"ADDTOHISTORY",payload:{method:e,url:t,results:n,state:p}}}}),Object(x.jsx)(T,{data:n}),Object(x.jsx)(g,{})]})},P=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)(w,{})}}]),n}(u.a.Component),q=document.getElementById("root");o.a.render(Object(x.jsx)(P,{}),q)}},[[53,1,2]]]);
//# sourceMappingURL=main.1a824666.chunk.js.map