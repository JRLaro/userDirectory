(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{38:function(e,t,r){"use strict";r.r(t);var s=r(2),c=r(12),a=r.n(c),n=r(14),d=r(0);var l=function(){var e={fontSize:40,textShadow:[3,3,0,"#000",-1,-1,0,"#000",1,-1,0,"#000",-1,1,0,"#000",1,1,0,"#000"]};return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid bg-dark text-white border-bottom border-5 border-dark",style:{fontFamily:["Satisfy","cursive"]},children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"display-4 text-center",style:{fontSize:80},children:"  Employee Directory  "}),Object(d.jsx)("div",{className:"text-center mt-4",children:Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fas fa-users text-center",style:e,children:" "}),Object(d.jsx)("i",{className:"fas fa-phone-alt ml-5",style:e}),Object(d.jsx)("i",{className:"fas fa-mail-bulk ml-5",style:e})]})}),Object(d.jsx)("p",{className:"text-center mt-4",style:{fontSize:20,fontFamily:["Josefin Sans","sans-serif"]},children:"Need to look for an Employee? We can help!"})]})})};function o(e){var t=e.user,r={fontSize:20};return Object(d.jsxs)("tbody",{className:"border border-dark border-5 table",children:[Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("img",{style:{borderRadius:"50%",border:[5,"solid","#555"]},width:"65",height:"65",alt:t.fName,src:t.image})]}),Object(d.jsxs)("td",{style:r,className:"text-center",children:[t.fName," "]}),Object(d.jsx)("td",{style:r,className:"text-center",children:t.lName}),Object(d.jsx)("td",{style:r,className:"text-center",children:t.phone}),Object(d.jsxs)("td",{style:r,className:"text-center",children:[" ",Object(d.jsxs)("a",{href:t.email,children:[" ",t.email,"  "]})]})]})}function i(){var e={fontSize:20};return Object(d.jsx)("thead",{className:"thead text-light border-dark border-5",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",className:"border-end border-dark border-3 text-center bg-secondary",style:e,children:" Image  "}),Object(d.jsx)("th",{scope:"col",className:"border-end border-dark border-3 text-center bg-dark",style:e,children:"First Name"}),Object(d.jsx)("th",{scope:"col",className:"border-end border-dark border-3 text-center bg-secondary",style:e,children:"Last Name"}),Object(d.jsx)("th",{scope:"col",className:"border-end border-dark border-3 text-center bg-dark",style:e,children:"Phone #"}),Object(d.jsx)("th",{scope:"col",className:"border-end border-dark border-3 text-center bg-secondary",style:e,children:"Email"})]})})}function b(e){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("table",{className:"table table-striped border border-dark border-5",children:e.children})})}function j(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{class:"input-group rounded",children:[Object(d.jsx)("input",{type:"search",class:"form-control rounded border-5 border-dark",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}),Object(d.jsx)("span",{class:"input-group-text border-5 bg-success text-white border-success",id:"search-addon",children:Object(d.jsx)("i",{class:"fas fa-search"})})]})})}var h=function(e){var t=e.users;return Object(d.jsxs)("div",{children:[Object(d.jsx)(l,{}),Object(d.jsx)(j,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(b,{children:[Object(d.jsx)(i,{}),t.map((function(e){return Object(d.jsx)(o,{user:e},e.uuid)}))]})]})},m=r(13),u=r.n(m);var x=r(40);var O=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),r=t[0],c=t[1];return Object(s.useEffect)((function(){u.a.get("https://randomuser.me/api/?results=10").then((function(e){return e.data.results})).catch((function(e){return console.log(e)})).then((function(e){var t=e.map((function(e){return{uuid:Object(x.a)(),image:e.picture.thumbnail,fName:e.name.first,lName:e.name.last,email:e.email,phone:e.phone}}));c(t)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{users:r})})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.27942484.chunk.js.map