(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(14),c(3)),d=(c(15),c(8)),r=function(t){var e=t.inputText,c=t.setInputText,n=t.todos,s=t.setTodos,a=t.setStatus;return Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:e,onChange:function(t){c(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(d.a)(n),[{text:e,completed:!1,id:1e3*Math.random()}])),c("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"incomplete",children:"Incomplete"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todo,n=t.todos,s=t.setTodos;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:e}),Object(o.jsx)("button",{onClick:function(){s(n.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){s(n.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.setTodos,n=t.filteredTodos;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:n.map((function(t){return Object(o.jsx)(j,{todos:e,todo:t,setTodos:c,text:t.text},t.id)}))})})};var f=function(){var t=Object(n.useState)(""),e=Object(l.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(n.useState)("all"),f=Object(l.a)(j,2),m=f[0],O=f[1],p=Object(n.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(n.useEffect)((function(){S()}),[]),Object(n.useEffect)((function(){g(),N()}),[d,m]);var g=function(){switch(m){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"incomplete":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}},N=function(){localStorage.setItem("todos",JSON.stringify(d))},S=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"My Todo List"})}),Object(o.jsx)(r,{todos:d,setTodos:u,inputText:c,setInputText:s,setStatus:O}),Object(o.jsx)(b,{todos:d,setTodos:u,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),o(t),n(t),s(t),a(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.d76a4aa6.chunk.js.map