(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(13),i=n.n(r),l=(n(20),n(21),n(3)),o=s.a.createContext({employees:[{}],filteredEmployees:[{}],sortEmployees:"",headings:[{}],handleInputChange:function(){},handleSort:function(){}}),d=function(){var e=Object(c.useContext)(o).filteredEmployees,t=function(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")};return Object(a.jsx)("tbody",{children:void 0!==e[0]&&void 0!==e[0].name?e.map((function(e){var n=e.login,c=e.name,s=e.picture,r=e.phone,i=e.email,l=e.dob;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{"data-header":"Image",className:"align-middle",children:Object(a.jsx)("img",{src:s.medium,alt:"profile image for"+c.first+" "+c.last})}),Object(a.jsxs)("td",{"data-header":"Name",className:"name-cell align-middle",children:[c.first," ",c.last]}),Object(a.jsx)("td",{"data-header":"Phone",className:"align-middle",children:r}),Object(a.jsx)("td",{"data-header":"Email",className:"align-middle",children:i}),Object(a.jsx)("td",{"data-header":"DOB",children:t(l.date)})]},n.uuid)})):Object(a.jsx)(a.Fragment,{})})},j=function(){var e=Object(c.useContext)(o),t=e.headings,n=e.handleSort;return Object(a.jsx)("div",{className:"datatable mt-5",children:Object(a.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:t.map((function(e){var t=e.name,c=e.width;return Object(a.jsxs)("th",{className:"col",style:{width:c},onClick:function(){n(t.toLowerCase())},children:[t,Object(a.jsx)("span",{className:"pointer"})]},t)}))})}),Object(a.jsx)(d,{})]})})},u=n(14),m=n.n(u),h={getEmployees:function(){return m.a.get("https://randomuser.me/api/?results=100&nat=us")}},b=(n(39),function(){var e=Object(c.useContext)(o).handleInputChange;return Object(a.jsx)("div",{className:"searchbox",children:Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",children:"Search"})}),Object(a.jsx)("input",{className:"form-control mr-sm-2",type:"serach",placeholder:"Name","aria-label":"search",onChange:function(t){return e(t)}})]})})}),f=function(){var e=Object(c.useState)([{}]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([{}]),i=Object(l.a)(r,2),d=i[0],u=i[1],m=Object(c.useState)("ascending"),f=Object(l.a)(m,2),O=f[0],p=f[1],x=Object(c.useState)([{name:"Image",width:"10%"},{name:"Name",width:"20%"},{name:"Phone",width:"10%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]),g=Object(l.a)(x,2),v=g[0];g[1];Object(c.useEffect)((function(){console.log("hello"),h.getEmployees().then((function(e){s(e.data.results),u(e.data.results)})).catch((function(e){console.log(e)}))}),[]);return Object(c.useEffect)((function(){console.log("Filtered",d)}),[d]),Object(a.jsxs)(o.Provider,{value:{employees:n,filteredEmployees:d,sortEmployees:O,headings:v,handleInputChange:function(e){var t=e.target.value,a=n.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));u(a)},handleSort:function(){"ascending"===O?(d.sort((function(e,t){return e.name.first>t.name.first||e.name.first===t.name.first&&e.name.last>t.name.last?1:-1})),p("descending")):(d.sort((function(e,t){return e.name.first<t.name.first||e.name.first===t.name.first&&e.name.last<t.name.last?1:-1})),p("ascending"))}},children:[Object(a.jsx)(b,{}),Object(a.jsx)(j,{})]})},O=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(f,{})})},p=(n(40),n(41),function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("p",{children:"Filter or Search by Name"})]})}),x=function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(p,{}),Object(a.jsx)(O,{})]})};var g=function(){return Object(a.jsxs)(x,{children:[Object(a.jsx)(p,{}),Object(a.jsx)(O,{children:Object(a.jsx)(f,{})})]})},v=(n(42),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))});i.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.c9cb3d95.chunk.js.map