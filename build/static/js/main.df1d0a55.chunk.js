(this["webpackJsonpscreen-shot-ui"]=this["webpackJsonpscreen-shot-ui"]||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(2),r=n.n(a),i=n(14),s=n.n(i),u=(n(25),n(4)),o=n.n(u),l=n(15),h=n(18),b=(n(27),n(5)),j=n(19);function p(t){var e=t.title,n=t.handleClick,a=Object(j.a)(t,["title","handleClick"]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",Object(b.a)(Object(b.a)({},a),{},{onClick:n,type:"button",children:e}))})}p.defaultProps={handleClick:function(){return null},title:""};var f=p,d=n(16),O=n.n(d),g=n(17),v=n.n(g);var x=function(){var t=Object(a.useState)(""),e=Object(h.a)(t,2),n=e[0],r=e[1],i=function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("http://localhost:3001/api/screenshot?weburi=".concat(n),{responseType:"arraybuffer"});case 2:e=t.sent,v.a.saveAs(new Blob([e.data]),"test.png");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{value:n,type:"text",onChange:function(t){r(t.target.value)}}),Object(c.jsx)(f,{title:"Take a screenshot",handleClick:i})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.df1d0a55.chunk.js.map