(this.webpackJsonpgraywolf=this.webpackJsonpgraywolf||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(16),a=n.n(i),s=(n(23),n(18)),o=n(12),l=n.n(o),j=n(9),u=n(2),d=(n.p,n(24),n(1)),m=function(e){var t=e.title;return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h1",{children:t})})})},b=function(e){var t=e.to,n=e.title;return Object(d.jsx)(j.b,{className:"button",to:t,children:n})},h=function(){return Object(d.jsx)("nav",{className:"nav light",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{to:"/",title:"Home"}),Object(d.jsx)(b,{to:"/programs",title:"Programs"})]})})},p=function(){return Object(d.jsx)("section",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h1",{children:["Welcome to Gray Wolf ",Object(d.jsx)("code",{children:"Dev"})]}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})},x=function(e){var t=e.program;return Object(d.jsxs)("a",{className:"program",href:t.url,target:"_blank",children:[Object(d.jsx)("div",{className:"program-image",children:Object(d.jsx)("img",{src:"https://www.khanacademy.org"+t.thumb})}),Object(d.jsx)("div",{className:"program-details",children:Object(d.jsx)("h3",{children:t.title})}),Object(d.jsx)("div",{className:"program-footer",children:Object(d.jsx)("span",{children:t.sumVotesIncremented+" Votes \xb7 "+t.spinoffCount+" Spin-offs"})})]})},O=function(e){var t=e.programs;return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"programs",children:t.map((function(e,t){return Object(d.jsx)(x,{tile:e},t)}))})})},f=function(){var e=Object(c.useState)((function(){return[]})),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){l.a.when(l.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(){})).done((function(e){return e}))).then((function(e){i(e.scratchpads)}))}),[]),Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{title:"Gray Wolf <code>Dev</code>"}),Object(d.jsx)(h,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(d.jsx)(p,{})}}),Object(d.jsx)(u.a,{path:"/programs",children:Object(d.jsx)(O,{programs:n})})]})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.4b1f24cc.chunk.js.map