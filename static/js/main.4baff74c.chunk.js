(this["webpackJsonpgoogle-books-client"]=this["webpackJsonpgoogle-books-client"]||[]).push([[0],{55:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(5),s=a(54),u=a(22),m=a(18),i=a(29),b=a(20),p=Object(n.createContext)(),E=function(){var e=Object(n.useContext)(p).setUser;return r.a.createElement(i.a,{bg:"dark",variant:"dark"},r.a.createElement(b.LinkContainer,{to:"/home"},r.a.createElement(i.a.Brand,null,"Covid-Tracker")),r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(b.LinkContainer,{to:"/home"},r.a.createElement(m.a.Link,null,"Home")),r.a.createElement(b.LinkContainer,{to:"/my-books"},r.a.createElement(m.a.Link,null,"My Books")),r.a.createElement(m.a.Link,{onClick:function(){localStorage.removeItem("bibliography"),e({})}},"Logout")))},d=function(){return Object(n.useContext)(p).user.token?r.a.createElement(E,null):r.a.createElement(i.a,{bg:"dark",variant:"dark"},r.a.createElement(b.LinkContainer,{to:"/login"},r.a.createElement(i.a.Brand,null,"Biblio-Graphy")),r.a.createElement(m.a,{className:"justify-content-end",style:{width:"100%"}},r.a.createElement(b.LinkContainer,{to:"/login"},r.a.createElement(m.a.Link,null,"Login")),r.a.createElement(b.LinkContainer,{to:"/register"},r.a.createElement(m.a.Link,null,"Register"))))},v=a(7),h=a(9),f=a.n(h),g=a(14),k=a(15),j=a.n(k),x=a(6),O=a(35),y=a(31),N=a(34),C=a(25),S="https://calm-fjord-01191.herokuapp.com",w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],i=s[1],b=Object(n.useState)(""),p=Object(o.a)(b,2),E=p[0],d=p[1],v=Object(n.useState)(""),h=Object(o.a)(v,2),k=h[0],w=h[1],L=Object(n.useState)(""),B=Object(o.a)(L,2),G=B[0],P=B[1],T=Object(n.useState)(""),F=Object(o.a)(T,2),z=F[0],A=F[1],D=function(){var e=Object(g.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.post("".concat(S,"/auth/register"),{firstName:a,lastName:m,email:E,password:k});case 4:n=e.sent,r=n.data,c=r.message,r.success?A(c):P(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),P("Failed to create account. Please try again.");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(N.a,{className:"mt-4"},r.a.createElement(C.a,{md:{span:6,offset:3}},r.a.createElement(x.a,{onSubmit:D},r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"First Name"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter first name",onChange:function(e){c(e.target.value)},value:a})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Last Name"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter last name",onChange:function(e){i(e.target.value)},value:m})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Email address"),r.a.createElement(x.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){d(e.target.value)},value:E})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Password"),r.a.createElement(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){w(e.target.value)},value:k})),r.a.createElement(O.a,{variant:"primary",type:"submit"},"Submit")),G?r.a.createElement(y.a,{className:"my-3",variant:"danger"},G):null,z?r.a.createElement(y.a,{className:"my-3 text-center",variant:"primary"},r.a.createElement("p",null,z),r.a.createElement(u.Link,{to:"/login"},"Go to login page")):null))},L=function(){var e=Object(n.useContext)(p).setUser,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],i=u[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),d=E[0],v=E[1],h=function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,j.a.post("".concat(S,"/auth/login"),{email:c,password:m});case 4:n=t.sent,r=n.data,localStorage.setItem("bibliography",JSON.stringify(r)),e(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),v("Failed to login. Please try again.");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(N.a,{className:"mt-4"},r.a.createElement(C.a,{md:{span:6,offset:3}},r.a.createElement(x.a,{onSubmit:h},r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Email address"),r.a.createElement(x.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){l(e.target.value)},value:c})),r.a.createElement(x.a.Group,null,r.a.createElement(x.a.Label,null,"Password"),r.a.createElement(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){i(e.target.value)},value:m})),r.a.createElement(O.a,{variant:"primary",type:"submit"},"Submit")),d?r.a.createElement(y.a,{className:"my-3",variant:"danger"},d):null))},B=function(e){var t=e.title,a=e.subTitle,n=e.authors,c=e.description,l=e.image,o=e.link,s=e.btnControls,u=e.id;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row p-4"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Written By ",function(e){return e.join(" & ")}(n)))),r.a.createElement("div",{className:"col-md-3 text-right"},function(e,t,a){return e.map((function(e,n){var c=e.text,l=e.onClick,o=e.className;return"View"===c?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",key:n},r.a.createElement("button",{type:"button",className:o,id:a},c)):r.a.createElement("button",{type:"button",className:o,onClick:l,key:n,id:a},c)}))}(s,o,u))),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:l,className:"card-img",alt:t,style:{maxHeight:"280px",objectFit:"contain"}})),r.a.createElement("div",{className:"col-md-8 px-4"},c)))},G=function(e){var t=e.title,a=e.books,n=void 0===a?[]:a,c=e.btnControls;return r.a.createElement("div",{className:"border p-4"},r.a.createElement("h4",null,t),n.map((function(e,t){return r.a.createElement(B,Object.assign({},e,{btnControls:c,id:t,key:t}))})))},P=function(e){var t=e.onSubmit,a=e.onChange,n=e.searchTerm;return r.a.createElement("div",{className:"my-4"},r.a.createElement("h5",{className:"my-4"},"Book Search"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"book"},"Book Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"book",onChange:a,value:n})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search")))},T=function(){var e=Object(n.useContext)(p).user,t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],i=u[1],b=Object(n.useState)(!1),E=Object(o.a)(b,2),d=E[0],v=E[1],h=Object(n.useState)(""),k=Object(o.a)(h,2),x=k[0],O=k[1],y=[{text:"View",className:"btn btn-primary mx-1"},{text:"Save",onClick:function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target,r="".concat(S,"/api/save"),l=c[n.id],t.next=5,j.a.post(r,l,{headers:{Authorization:"Bearer ".concat(e.token)}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),className:"btn btn-success mx-1"}],N=function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),n="".concat(S,"/api/books"),r={searchTerm:m},v(!0),l(),t.next=8,j.a.post(n,r,{headers:{Authorization:"Bearer ".concat(e.token)}});case 8:c=t.sent,o=c.data,v(!1),l(o.results),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),v(!1),l(),O(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(P,{onSubmit:N,searchTerm:m,onChange:function(e){var t=e.target;i(t.value)}}),d?r.a.createElement("div",null,"Loading..."):null,x?r.a.createElement("div",{className:"text-danger"},x):null,d||x||c?d||x||c.length?d||x||!c.length?void 0:r.a.createElement(G,{title:"Results",books:c,btnControls:y}):r.a.createElement("div",null,"Sorry no results found :("):null)},F=function(){var e=Object(n.useContext)(p).user,t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],i=u[1],b=Object(n.useState)(""),E=Object(o.a)(b,2),d=E[0],v=E[1],h=[{text:"View",className:"btn btn-primary mx-1"},{text:"Delete",onClick:function(){var t=Object(g.a)(f.a.mark((function t(a){var n,r,o,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target,r=c[n.id]._id,o="".concat(S,"/api/books/").concat(r),t.next=5,j.a.delete(o,{headers:{Authorization:"Bearer ".concat(e.token)}});case 5:s=t.sent,u=s.data,l(u.results);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),className:"btn btn-danger mx-1"}];return Object(n.useEffect)((function(){(function(){var t=Object(g.a)(f.a.mark((function t(){var a,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(S,"/api/save"),i(!0),l([]),t.next=6,j.a.get(a,{headers:{Authorization:"Bearer ".concat(e.token)}});case 6:n=t.sent,r=n.data,i(!1),l(r.results),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),i(!1),l([]),v(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[]),m?r.a.createElement("div",null,"Loading..."):!m&&d?r.a.createElement("div",{className:"text-danger"},d):m||d||!c.length?r.a.createElement("div",null,"You have no saved books"):r.a.createElement(G,{title:"Saved Books",books:c,btnControls:h})},z=function(){var e=Object(n.useContext)(p).user;return r.a.createElement(v.g,null,r.a.createElement(v.d,{path:"/",exact:!0},e.token?r.a.createElement(v.c,{to:"/home"}):r.a.createElement(L,null)),r.a.createElement(v.d,{path:"/login",exact:!0},e.token?r.a.createElement(v.c,{to:"/home"}):r.a.createElement(L,null)),r.a.createElement(v.d,{path:"/register",exact:!0},e.token?r.a.createElement(v.c,{to:"/home"}):r.a.createElement(w,null)),r.a.createElement(v.d,{path:"/home",exact:!0},e.token?r.a.createElement(T,null):r.a.createElement(v.c,{to:"/login"})),r.a.createElement(v.d,{path:"/my-books",exact:!0},e.token?r.a.createElement(F,null):r.a.createElement(v.c,{to:"/login"})))},A=function(){var e=localStorage.getItem("bibliography"),t=JSON.parse(e),a=Object(n.useState)(t||{}),c=Object(o.a)(a,2),l=c[0],m=c[1];return r.a.createElement(u.HashRouter,null,r.a.createElement(p.Provider,{value:{user:l,setUser:m}},r.a.createElement(s.a,{fluid:!0},r.a.createElement(d,null),r.a.createElement(z,null))))};a(85);l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4baff74c.chunk.js.map