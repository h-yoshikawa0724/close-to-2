(this["webpackJsonpclose-to-2"]=this["webpackJsonpclose-to-2"]||[]).push([[0],{51:function(e,t,n){e.exports=n(61)},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=n(12),l=n(79),u=n(82),m=n(80),s=n(84),d=n(43),E=n.n(d),O=n(44),f=n.n(O),S=n(40),_=n.n(S),b=n(41),p=n.n(b),A=n(30),T=n.n(A),C=n(42),v=n.n(C),h=n(83),R=n(85),g=function(e){var t=e.difficulty,n=e.onClickAction;return o.a.createElement(o.a.Fragment,null,"EASY"===t&&o.a.createElement(s.a,{variant:"contained",style:{color:"white",backgroundColor:T.a[600]},onClick:function(){return n(t)}},"\u521d\u7d1a\uff08\u6570\u50242\u3064\uff09"),("NORMAL"===t||"HARD"===t)&&o.a.createElement(s.a,{variant:"contained",color:"NORMAL"===t?"primary":"secondary",onClick:function(){return n(t)}},"NORMAL"===t?"\u4e2d\u7d1a\uff08\u6570\u50243\u3064\uff09":"\u4e0a\u7d1a\uff08\u6570\u50245\u3064\uff09"))},j=function(e){var t=e.open,n=e.handleSelectDifficultyAction;return o.a.createElement(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,closeAfterTransition:!0,style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(R.a,{in:t},o.a.createElement(u.a,{p:4,width:400,bgcolor:"background.paper",boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement("h2",{id:"transition-modal-title"},"\u96e3\u6613\u5ea6\u9078\u629e"),o.a.createElement("p",{id:"transition-modal-description"},"\u96e3\u6613\u5ea6\u306b\u5fdc\u3058\u3066\u3001\u5f0f\u304c\u9577\u304f\u306a\u308a\u307e\u3059"),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{p:2},o.a.createElement(g,{difficulty:"EASY",onClickAction:n})),o.a.createElement(u.a,{p:2},o.a.createElement(g,{difficulty:"NORMAL",onClickAction:n})),o.a.createElement(u.a,{p:2},o.a.createElement(g,{difficulty:"HARD",onClickAction:n}))))))},y=function(e){var t=e.text,n=e.onClickAction;return o.a.createElement(s.a,{onClick:n,variant:"contained",color:"secondary"},t)},P=function(e){var t=e.open,n=e.correctAnswerCount,a=e.handleRestartAction;return o.a.createElement(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,closeAfterTransition:!0,style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(R.a,{in:t},o.a.createElement(u.a,{p:4,width:400,bgcolor:"background.paper",boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement("h2",{id:"transition-modal-title"},"".concat(n,"\u56de\u6b63\u89e3\uff01")),o.a.createElement("p",{id:"transition-modal-description"},"\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f\u30fc"),o.a.createElement(u.a,{p:2},o.a.createElement(y,{text:"\u518d\u30c1\u30e3\u30ec\u30f3\u30b8",onClickAction:a})))))},D=function(){var e=[_.a[800],p.a[500],T.a[600],v.a[500]],t=Object(a.useState)(30),n=Object(i.a)(t,2),c=n[0],r=n[1],d=Object(a.useState)(0),O=Object(i.a)(d,2),S=O[0],b=O[1],A=Object(a.useState)(1),C=Object(i.a)(A,2),h=C[0],R=C[1],g=Object(a.useState)([]),y=Object(i.a)(g,2),D=y[0],N=y[1],U=Object(a.useState)(null),k=Object(i.a)(U,2),w=k[0],L=k[1],x=Object(a.useState)(0),W=Object(i.a)(x,2),I=W[0],M=W[1],K=Object(a.useState)(0),H=Object(i.a)(K,2),B=H[0],F=H[1],V=Object(a.useState)(!0),Y=Object(i.a)(V,2),z=Y[0],J=Y[1],$=Object(a.useState)(!1),q=Object(i.a)($,2),G=q[0],Q=q[1],X=Object(a.useState)(!1),Z=Object(i.a)(X,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(!1),ae=Object(i.a)(ne,2),oe=ae[0],ce=ae[1],re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*Math.floor(e)+t)},ie=function(e){for(var t=re(100),n=String(t),a=1;a<=e;a+=1){var o={operator:re(100,1)%2===0?"PLUS":"MINUS",num:re(199,-99)};"PLUS"===o.operator?(t+=o.num,n+=o.num<0?" + (".concat(o.num,")"):" + ".concat(o.num)):"MINUS"===o.operator?(t-=o.num,n+=o.num<0?" - (".concat(o.num,")"):" - ".concat(o.num)):console.log("error")}return{num:t,formula:n,abs:Math.abs(t-2)}},le=function(e){var t=e.map((function(e){return e.abs}));return Array.from(new Set(t)).length<Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BUTTON_COUNT},ue=function(){var e,t=h-1;do{e=[];for(var n=1;n<=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BUTTON_COUNT;n+=1)e.push(ie(t))}while(le(e));!function(e){var t=e.map((function(e,t){return{originalIndex:t,abs:e.abs}}));t.sort((function(e,t){return e.abs<t.abs?-1:1})),L(t[0].originalIndex)}(e),N(e)};Object(a.useEffect)((function(){ue()}),[h,I]),Object(a.useEffect)((function(){0===c&&(clearInterval(S),ce(!0))}),[c]);var me=function(e){!function(e){e===w?(F((function(e){return e+1})),te(!0)):te(!1)}(e),Q(!0),setTimeout((function(){Q(!1),M((function(e){return e+1}))}),1200)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{maxWidth:"sm"},o.a.createElement(u.a,{p:4,my:1,boxShadow:3,borderRadius:16,display:"flex",flexDirection:"column",alignItems:"center"},o.a.createElement(u.a,{display:"flex"},o.a.createElement(u.a,{m:2,fontSize:"1.8rem"},o.a.createElement(E.a,{style:{paddingRight:"5px"}}),o.a.createElement(o.a.Fragment,null,c)),o.a.createElement(u.a,{m:2,fontSize:"1.8rem"},o.a.createElement(f.a,null),o.a.createElement(o.a.Fragment,null,"\uff1a".concat(B)))),o.a.createElement(m.a,null,G&&ee&&"\u6b63\u89e3\uff01",G&&!ee&&"\u4e0d\u6b63\u89e3...",!G&&"\u4e00\u756a\u300c2\u300d\u306b\u8fd1\u3044\u306e\u306f\u3069\u308c\u304b\u306a\uff1f"),D.map((function(t,n){return o.a.createElement(u.a,{p:2,key:t.formula},o.a.createElement(s.a,{variant:"contained",style:{width:"250px",color:"white",backgroundColor:e[n]},onClick:function(){return me(n)}},t.formula),o.a.createElement(u.a,{height:20},G&&o.a.createElement(m.a,{align:"center"},"".concat(t.num," \u2192 2\u307e\u3067").concat(t.abs," ").concat(n===w?"\u3007":"\xd7"))))})))),o.a.createElement(j,{open:z,handleSelectDifficultyAction:function(e){!function(e){switch(e){case"EASY":R(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EASY_FORMULA_PARTS_COUNT);break;case"NORMAL":R(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_NORMAL_FORMULA_PARTS_COUNT);break;case"HARD":R(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_HARD_FORMULA_PARTS_COUNT);break;default:console.log("error")}}(e),J(!1),b(setInterval((function(){r((function(e){return e-1}))}),1e3))}}),o.a.createElement(P,{open:oe,correctAnswerCount:B,handleRestartAction:function(){ce(!1),r(60),F(0),J(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.1ad25a54.chunk.js.map