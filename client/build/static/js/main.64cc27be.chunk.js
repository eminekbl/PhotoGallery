(this.webpackJsonpphotogallery=this.webpackJsonpphotogallery||[]).push([[0],{26:function(e,t,s){},36:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},88:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(25),r=s.n(n),i=(s(60),s(8)),o=s(9),l=(s(35),s(61),s(90)),j=s(91),u=s(50),h=s(92),b=s(0),d=s.p+"static/media/image.3426dbaa.jpg",p=s(32),m=s(2);var O=function(e){return Object(m.jsx)(l.a,{children:Object(m.jsx)(b.b.Provider,{value:{color:"black"},children:Object(m.jsx)(j.a,{className:"justify-content-center text-center mt-3",children:Object(m.jsxs)(u.a,{sm:6,children:[Object(m.jsx)("h1",{children:"CONTACT ME"}),Object(m.jsx)(h.a,{id:"ppImg",src:d,thumbnail:!0}),Object(m.jsx)("h4",{children:"Emine Kebeli"}),Object(m.jsxs)(j.a,{className:"justify-content-center text-center mt-3",children:[Object(m.jsx)(u.a,{xs:1,children:Object(m.jsx)("a",{id:"mediaIcon",href:"https://tr.linkedin.com/in/eminekebeli",children:Object(m.jsx)(p.c,{size:"2em"})})}),Object(m.jsx)(u.a,{xs:1,className:"mx-5",children:Object(m.jsx)("a",{id:"mediaIcon",href:"https://www.instagram.com/kbl.emine/",children:Object(m.jsx)(p.b,{size:"2em"})})}),Object(m.jsx)(u.a,{xs:1,children:Object(m.jsx)("a",{id:"mediaIcon",href:"https://www.facebook.com/emine.kebeli/",children:Object(m.jsx)(p.a,{size:"2em"})})})]})]})})})})};var x=function(e){return Object(m.jsx)(l.a,{className:"mt-4",children:Object(m.jsx)(j.a,{className:"justify-content-center",children:Object(m.jsxs)(u.a,{sm:5,id:"block",children:[Object(m.jsx)("h1",{children:"ABOUT THIS PROJECT"}),Object(m.jsx)("p",{children:"Find the photos you are interested in by searching keywords. You can find the photographer's name, biography if available, and a photo description. You can also check out the photographer's Unsplash portfolio. This website uses unsplash-api, be sure to change API Key before cloning."}),Object(m.jsx)("a",{id:"license",href:"https://unsplash.com/license",children:"Read More About Unsplash License "})]})})})},f=s(7),g=s(97),v=s(93);s(36);var k=function(e){var t=Object(i.g)();return Object(m.jsx)(o.a,{children:e.images.length>0?Object(m.jsx)(l.a,{children:Object(m.jsx)(j.a,{children:e.images.map((function(e,s){return Object(m.jsx)(u.a,{id:"cardColumns",md:6,className:"mt-3",children:Object(m.jsxs)(g.a,{id:"card",children:[Object(m.jsx)(g.a.Img,{id:"cardImg",src:"https://source.unsplash.com/".concat(e.id,"/600x500"),alt:""},s),Object(m.jsxs)(g.a.Body,{children:[Object(m.jsx)("div",{className:"overlay"}),Object(m.jsx)(v.a,{className:"text-center",id:"button",onClick:function(){var s;s=e.id,t.push("/search/detail/".concat(s))},children:"See More"},s)]})]})},s)}))})}):Object(m.jsx)(l.a,{className:"mt-4",children:Object(m.jsx)(j.a,{className:"justify-content-center",children:Object(m.jsx)(u.a,{sm:5,id:"block",children:Object(m.jsx)("h4",{children:"Sorry, no images matching your search were found."})})})})})},w="LVywVa9oJPn6trZK2CbfbjwHeVJ2AkISKSIcqSQWDic";var y=function(e){var t=c.a.useState([]),s=Object(f.a)(t,2),n=s[0],r=s[1];return Object(a.useEffect)((function(){fetch("https://api.unsplash.com/search/photos?client_id=".concat(w,"&page=1&query=").concat(e.value)).then((function(e){return e.json()})).then((function(e){r(e.results),console.log("images:: ".concat(e.results)),console.log(n)}))}),[]),Object(m.jsx)(l.a,{children:Object(m.jsx)(k,{images:n})})};var S=function(e){var t=Object(i.h)().query;return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{value:t}),Object(m.jsx)("a",{id:"license",href:"https://unsplash.com/license",children:"Read More About Unsplash License"})]})},N=c.a.createContext();function C(e){var t=Object(a.useState)(!1),s=Object(f.a)(t,2),c=s[0],n=s[1];return Object(m.jsx)(N.Provider,{value:{auth:c,setAuth:n},children:e.children})}var E=function(e){var t=c.a.useContext(N);return Object(a.useEffect)((function(){localStorage.getItem("token")&&t.setAuth(!0)}),[t,t.auth]),Object(m.jsxs)(l.a,{className:"mt-5",children:[Object(m.jsx)(j.a,{children:[{title:"nature",url:"https://source.unsplash.com/JgOeRuGD_Y4/706X270"},{title:"portrait",url:"https://source.unsplash.com/Ex1TxrV6NBA/706X270"},{title:"fashion",url:"https://source.unsplash.com/dlxLGIy-2VU/706X270"},{title:"sports",url:"https://source.unsplash.com/dVhM3o9BVeg/706X270"},{title:"animals",url:"https://source.unsplash.com/Hnq1Q3Dv2Ls/706X270"},{title:"Food & Drink",url:"https://source.unsplash.com/_79ZJS8pV70/706X270"}].map((function(e,t){return Object(m.jsx)(u.a,{id:"cardColumns",md:6,className:"mb-3",children:Object(m.jsxs)(g.a,{id:"card",className:"bg-dark text-white",as:o.b,to:"/search/".concat(e.title),children:[Object(m.jsx)(g.a.Img,{id:"cardImg",src:e.url,alt:"Card image"}),Object(m.jsx)(g.a.ImgOverlay,{className:"overlay",children:Object(m.jsx)(g.a.Title,{id:"title",children:e.title.toUpperCase()})})]})},t)}))}),Object(m.jsx)("a",{id:"license",href:"https://unsplash.com/license",children:"Read More About Unsplash License"})]})};var P=function(e){var t=Object(i.h)().photoID,s=c.a.useState({}),n=Object(f.a)(s,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://api.unsplash.com/photos/".concat(t,"?client_id=").concat(w)).then((function(e){return e.json()})).then((function(e){o({user:e.user.name,id:e.id,description:e.description,url:"https://source.unsplash.com/".concat(e.id,"/900x800"),portfolio_url:e.user.links.html,bio:e.user.bio,location:e.user.location,full:e.urls.full})}))}),[]),Object(m.jsxs)(l.a,{className:"mt-3",children:[Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(u.a,{md:3,id:"block",children:[Object(m.jsx)("p",{id:"bold",children:"Phorographer:"}),Object(m.jsx)("h4",{id:"bold",children:r.user}),r.location?Object(m.jsx)("h5",{children:"From: ".concat(r.location)}):"",Object(m.jsx)("br",{}),r.description?Object(m.jsx)("p",{id:"description",children:"Photo Description: \n                        ".concat(r.description)}):"",r.bio?Object(m.jsx)("p",{id:"details",children:r.bio}):"",Object(m.jsx)("hr",{}),r.portfolio_url?Object(m.jsx)("a",{href:r.portfolio_url,children:"See Photographer Portfolio on Unsplash"}):""]}),Object(m.jsx)(u.a,{md:9,children:Object(m.jsx)("a",{href:r.full,children:Object(m.jsx)("img",{className:"",id:"detailImg",src:r.url,alt:""})})})]}),Object(m.jsx)("a",{id:"license",href:"https://unsplash.com/license",children:"Read More About Unsplash License"})]})};var I=function(e){return Object(m.jsx)(l.a,{children:Object(m.jsx)(j.a,{className:"justify-content-center",children:Object(m.jsx)(u.a,{sm:3,children:Object(m.jsx)("h1",{children:"404 NOT FOUND"})})})})},L=s(16),T=s.n(L),A=s(20),q=s(95),D=s(21),G=s.n(D);s(26);var U=[{link:"/",title:"Photo Gallery",component:E,isExact:!0,islink:!1},{link:"/about",title:"About",component:x,isExact:!1,islink:!0},{link:"/contact",title:"Contact",component:O,isExact:!1,islink:!0},{link:"/search",title:"Search",component:S,isExact:!0,islink:!1},{link:"/search/:query",title:"Search",component:S,isExact:!0,isLink:!1},{link:"/search/detail/:photoID",title:"Search",component:P,isExact:!1,isLink:!1},{link:"/login",title:"Login",component:function(e){var t=e.history,s=Object(a.useState)(""),c=Object(f.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(""),l=Object(f.a)(i,2),j=l[0],u=l[1],h=Object(a.useState)(""),b=Object(f.a)(h,2),d=b[0],p=b[1];Object(a.useEffect)((function(){localStorage.getItem("token")&&t.push("/")}),[t]);var O=function(){var e=Object(A.a)(T.a.mark((function e(s){var a,c,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),a={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,G.a.post("/api/auth/login",{email:j,password:n},a);case 5:c=e.sent,r=c.data,localStorage.setItem("token",r.token),t.push("/"),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),p(e.t0.response.data.error),setTimeout((function(){p("")}),5e3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"submit-screen",children:Object(m.jsxs)(q.a,{className:"submit-form",onSubmit:O,children:[Object(m.jsx)("h3",{className:"text-center submit-title",children:"Login"}),d&&Object(m.jsx)("span",{className:"error-message",children:d}),Object(m.jsxs)(q.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(q.a.Label,{children:"Email address"}),Object(m.jsx)(q.a.Control,{type:"email",required:!0,placeholder:"Enter email",value:j,onChange:function(e){return u(e.target.value)}}),Object(m.jsx)(q.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)(q.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsxs)(q.a.Label,{className:"password-label",children:["Password"," ",Object(m.jsx)(o.b,{to:"/forgotpassword",className:"forgotpassword",children:"Forgot Password?"})]}),Object(m.jsx)(q.a.Control,{type:"password",placeholder:"Password",required:!0,value:n,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsx)(v.a,{className:"submit-button",variant:"primary",type:"submit",children:"Submit"}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Dont have an account? ",Object(m.jsx)(o.b,{to:"/signup",children:"Signup"})]})]})})},isExact:!0,islink:!1},{link:"/signup",title:"SignUp",component:function(e){var t=e.history,s=Object(a.useState)(""),c=Object(f.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(""),l=Object(f.a)(i,2),j=l[0],u=l[1],h=Object(a.useState)(""),b=Object(f.a)(h,2),d=b[0],p=b[1],O=Object(a.useState)(""),x=Object(f.a)(O,2),g=x[0],k=x[1],w=Object(a.useState)(""),y=Object(f.a)(w,2),S=y[0],N=y[1];function C(){return(C=Object(A.a)(T.a.mark((function e(s){var a,c,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),a={headers:{"Content-Type":"application/json"}},n===g){e.next=7;break}return r(""),k(""),setTimeout((function(){N("")}),5e3),e.abrupt("return",N("Passwords do not match"));case 7:return e.prev=7,e.next=10,G.a.post("api/auth/register",{username:d,email:j,password:n},a);case 10:c=e.sent,i=c.data,localStorage.setItem("token",i.token),t.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),N(e.t0.response.data.error),setTimeout((function(){N("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){localStorage.getItem("token")&&t.push("/")}),[t]),Object(m.jsx)("div",{className:"submit-screen",children:Object(m.jsxs)(q.a,{className:"submit-form",onSubmit:function(e){return C.apply(this,arguments)},children:[Object(m.jsx)("h3",{className:"text-center submit-title",children:"Signup"}),S&&Object(m.jsx)("span",{className:"error-message",children:S}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"Username"}),Object(m.jsx)(q.a.Control,{type:"text",placeholder:"Enter username",value:d,required:!0,onChange:function(e){return p(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"Email address"}),Object(m.jsx)(q.a.Control,{type:"email",placeholder:"Enter email",value:j,required:!0,onChange:function(e){return u(e.target.value)}}),Object(m.jsx)(q.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"Password"}),Object(m.jsx)(q.a.Control,{type:"password",placeholder:"Password",value:n,required:!0,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"Confirm Password"}),Object(m.jsx)(q.a.Control,{type:"password",placeholder:"Confirm Password",value:g,required:!0,onChange:function(e){return k(e.target.value)}})]}),Object(m.jsx)(v.a,{className:"submit-button",variant:"primary",type:"submit",children:"Signup"}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["Already have an account? ",Object(m.jsx)(o.b,{to:"/login",children:"Login"})," "]})]})})},isExact:!0,islink:!1},{link:"/forgotpassword",title:"FotgotPassword",component:function(e){var t=e.history,s=Object(a.useState)(""),c=Object(f.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(""),o=Object(f.a)(i,2),l=o[0],j=o[1],u=Object(a.useState)(""),h=Object(f.a)(u,2),b=h[0],d=h[1];Object(a.useEffect)((function(){localStorage.getItem("token")&&t.push("/")}),[t]);var p=function(){var e=Object(A.a)(T.a.mark((function e(t){var s,a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,G.a.post("/api/auth/forgotpassword",{email:n},s);case 5:a=e.sent,c=a.data,d(c.data),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),j(e.t0.response.data.error),r(""),setTimeout((function(){j("")}),5e3),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"submit-screen",children:Object(m.jsxs)(q.a,{className:"submit-form",onSubmit:p,children:[Object(m.jsx)("h3",{className:"text-center submit-title",children:"Forgot Password"}),l&&Object(m.jsx)("span",{className:"error-message",children:l}),b&&Object(m.jsx)("span",{className:"success-message",children:b}),Object(m.jsxs)(q.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)("p",{className:"forgotpassword",children:"Please enter the email address you register your account with. We will send you reset password confirmation to this email"}),Object(m.jsx)(q.a.Label,{children:"Email address:"}),Object(m.jsx)(q.a.Control,{type:"email",required:!0,placeholder:"Enter email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsx)(v.a,{className:"submit-button",variant:"primary",type:"submit",children:"Send Email"})]})})},isExact:!0,islink:!1},{link:"/resetpassword/:resetToken",title:"ResetPassword",component:function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(f.a)(n,2),l=r[0],j=r[1],u=Object(a.useState)(""),h=Object(f.a)(u,2),b=h[0],d=h[1],p=Object(a.useState)(""),O=Object(f.a)(p,2),x=O[0],g=O[1],k=Object(i.h)().resetToken,w=function(){var e=Object(A.a)(T.a.mark((function e(t){var a,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={header:{"Content-Type":"application/json"}},s===l){e.next=7;break}return c(""),j(""),setTimeout((function(){d("")}),5e3),e.abrupt("return",d("Passwords don't match"));case 7:return e.prev=7,e.next=10,G.a.put("/api/auth/resetpassword/".concat(k),{password:s},a);case 10:n=e.sent,r=n.data,g(r.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(7),d(e.t0.response.data.error),setTimeout((function(){d("")}),5e3);case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"submit-screen",children:Object(m.jsxs)(q.a,{onSubmit:w,className:"submit-form",children:[Object(m.jsx)("h3",{className:"submit-title text-center",children:"Forgot Password"}),b&&Object(m.jsxs)("span",{className:"error-message",children:[b," "]}),x&&Object(m.jsxs)("span",{className:"success-message",children:[x," ",Object(m.jsx)(o.b,{to:"/login",children:"Login"})]}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"New Password:"}),Object(m.jsx)(q.a.Control,{type:"password",required:!0,id:"password",placeholder:"Enter new password",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)(q.a.Group,{children:[Object(m.jsx)(q.a.Label,{children:"Confirm New Password:"}),Object(m.jsx)(q.a.Control,{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(m.jsx)(v.a,{type:"submit",className:"btn btn-primary submit-button",children:"Reset Password"})]})})},isExact:!0,islink:!1},{link:"/404",title:"404",component:I,isExact:!1,islink:!1}],B=s(96),F=s(94),M=s(52),R=s(55);var V=function(e){var t=Object(i.g)(),s=c.a.useContext(N),n=c.a.useState(""),r=Object(f.a)(n,2),l=r[0],j=r[1],u=e.links.filter((function(e){return e.islink})).map((function(e,t){return Object(m.jsx)(B.a.Link,{as:o.b,to:e.link,children:e.title},t)}));return Object(a.useEffect)((function(){localStorage.getItem("token")?(s.setAuth(!0),console.log("auth")):s.setAuth(!1)}),[s,s.auth]),Object(m.jsx)("div",{children:Object(m.jsxs)(F.a,{className:"navbar",variant:"dark",expand:"lg",children:[Object(m.jsxs)(F.a.Brand,{as:o.b,to:"/",children:[Object(m.jsx)(R.a,{size:"2em"})," PhotoGallery"]}),Object(m.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(F.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(B.a,{className:"mr-auto",children:[u,s.auth?Object(m.jsx)(B.a.Link,{onClick:function(){localStorage.removeItem("token"),s.setAuth(!1)},children:"Logout"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(B.a.Link,{as:o.b,to:"/login",children:"Login"}),Object(m.jsx)(B.a.Link,{as:o.b,to:"/signup",children:"Signup"})]})]}),Object(m.jsxs)(q.a,{inline:!0,onSubmit:function(e){j(l.toLowerCase()),t.push("/search/".concat(l))},children:[Object(m.jsx)(M.a,{className:"mr-sm-2",placeholder:"Search Photos","aria-label":"Search",value:l,onChange:function(e){j(e.target.value)}}),Object(m.jsx)(v.a,{variant:"outline-light",type:"submit",children:"Search"})]})]})]})})};var J=function(){var e=U.map((function(e,t){return Object(m.jsx)(i.b,{exact:e.isExact,path:e.link,component:e.component},t)}));return Object(m.jsx)(o.a,{children:Object(m.jsxs)(C,{children:[Object(m.jsx)(V,{links:U}),Object(m.jsxs)(i.d,{children:[e,Object(m.jsx)(i.b,{children:Object(m.jsx)(i.a,{to:"/404"})})]})]})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.64cc27be.chunk.js.map