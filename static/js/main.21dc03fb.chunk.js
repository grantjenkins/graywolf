(this.webpackJsonpgraywolf=this.webpackJsonpgraywolf||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),i=n.n(a),s=(n(23),n(18)),o=n(12),l=n.n(o),j=n(9),d=n(2),u=(n.p,n(24),n(0)),m=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("h1",{children:["Gray Wolf ",Object(u.jsx)("code",{children:"Dev"})]})})})},h=function(e){var t=e.to,n=e.title;return Object(u.jsx)(j.b,{className:"button",to:t,children:n})},b=function(){return Object(u.jsx)("nav",{className:"nav light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{to:"/",title:"Home"}),Object(u.jsx)(h,{to:"/programs",title:"Programs"})]})})},p=function(){return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("h1",{children:["Welcome to Gray Wolf ",Object(u.jsx)("code",{children:"Dev"})]}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})},x=function(e){var t=e.program;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("a",{className:"program",href:t.url,target:"_blank",children:[Object(u.jsx)("div",{className:"program-image",children:Object(u.jsx)("img",{src:"https://www.khanacademy.org"+t.thumb})}),Object(u.jsx)("div",{className:"program-details",children:Object(u.jsx)("h3",{children:t.title})}),Object(u.jsx)("div",{className:"program-footer",children:Object(u.jsx)("span",{children:t.sumVotesIncremented+" Votes \xb7 "+t.spinoffCount+" Spin-offs"})})]})})},O=function(e){var t=e.programs;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Programs"}),Object(u.jsx)("div",{className:"programs",children:t.map((function(e,t){return Object(u.jsx)(x,{program:e},t)}))})]})},f=function(){var e=Object(c.useState)((function(){return[]})),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){l.a.when(l.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(){})).done((function(e){return e}))).then((function(e){a(e.scratchpads)}))}),[]),Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsx)(b,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(d.a,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(p,{})}}),Object(u.jsx)(d.a,{path:"/programs",children:n&&n.length>0?Object(u.jsx)(O,{programs:n}):"No programs to show"})]})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.21dc03fb.chunk.js.map