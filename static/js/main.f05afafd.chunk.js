(this.webpackJsonpgraywolf=this.webpackJsonpgraywolf||[]).push([[0],{23:function(e,t,i){},24:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(16),r=i.n(c),s=(i(23),i(18)),o=i(12),l=i.n(o),u=i(9),d=i(2),m=(i.p,i(24),i(0)),j=function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("h1",{children:["Gray Wolf ",Object(m.jsx)("code",{children:"Dev"})]})})})},p=function(e){var t=e.to,i=e.title,a=e.icon;return Object(m.jsxs)(u.b,{className:"button",to:t,children:[Object(m.jsx)("span",{class:"material-icons",children:a}),i]})},b=function(){return Object(m.jsx)("nav",{className:"nav light",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(p,{to:"/",title:"",icon:"home"}),Object(m.jsx)(p,{to:"/programs",title:"Programs",icon:"tips_and_updates"})]})})},h=i.p+"static/media/gjshade.55dae57f.png",x=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("section",{children:Object(m.jsxs)("article",{className:"container",children:[Object(m.jsxs)("h1",{class:"title",children:["Welcome to Gray Wolf ",Object(m.jsx)("code",{children:"Dev"})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"gj-photo",children:Object(m.jsx)("img",{className:"photo gj",src:h})}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})]})}),Object(m.jsx)("section",{className:"light",children:Object(m.jsx)("article",{className:"container",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Object(m.jsx)("section",{children:Object(m.jsx)("article",{className:"container",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Object(m.jsx)("section",{className:"dark",children:Object(m.jsx)("article",{className:"container",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),Object(m.jsx)("section",{children:Object(m.jsx)("article",{className:"container",children:Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})]})},O=function(e){var t=e.program;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("a",{className:"program",href:t.url,target:"_blank",children:[Object(m.jsx)("div",{className:"program-image",children:Object(m.jsx)("img",{src:"https://www.khanacademy.org"+t.thumb})}),Object(m.jsx)("div",{className:"program-details",children:Object(m.jsx)("h3",{children:t.title})}),Object(m.jsx)("div",{className:"program-footer",children:Object(m.jsx)("span",{children:t.sumVotesIncremented+" Votes \xb7 "+t.spinoffCount+" Spin-offs"})})]})})},g=function(e){var t=e.programs;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Programs"}),Object(m.jsx)("div",{className:"programs",children:t.map((function(e,t){return Object(m.jsx)(O,{program:e},t)}))})]})},f=function(){var e=Object(a.useState)((function(){return[]})),t=Object(s.a)(e,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){l.a.when(l.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(){})).done((function(e){return e}))).then((function(e){c(e.scratchpads)}))}),[]),Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(u.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{}),Object(m.jsx)(b,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(d.a,{path:"/",exact:!0,render:function(e){return Object(m.jsx)(x,{})}}),Object(m.jsx)(d.a,{path:"/programs",children:i&&i.length>0?Object(m.jsx)(g,{programs:i}):"No programs to show"})]})]})})})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.f05afafd.chunk.js.map