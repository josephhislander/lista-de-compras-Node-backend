(this["webpackJsonplista-de-compras-app"]=this["webpackJsonplista-de-compras-app"]||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),s=n.n(a),r=n(3),o=n(14),i=n(5),u=n(4),l=n.n(u),d=n(9),b=n(7),j=n.n(b),p="https://shopping-list-app0.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(p,"/").concat(e);return"GET"===n?fetch(c):fetch(c,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",c="".concat(p,"/").concat(e),a=localStorage.getItem("token")||"";return"GET"===n?fetch(c,{method:n,headers:{"x-token":a,"user-id":t.uid,"list-id":t.list_id}}):fetch(c,{method:n,headers:{"Content-type":"application/json","x-token":a,"user-id":t.uid,"list-id":t.list_id,"producto-id":t.product_id},body:JSON.stringify(t)})},h="[auth] Login",O="[auth] Logout",x="[auth] Finish checking login state",v="[event] New List",g="[event] Get Lists",y="[event] Delete List",N="[event] Update List",k="[event] New Active List",w="[event] Update Product Budge",C="[event] New Product",L="[event] Get Products",_="[event] Delete Product",E="[event] New Active Product",S="[event] Update Product Price",P="[event] Check Product",T="[event] Logout",I=n(2),B=n(17),F=n.n(B);F()().format();var A=function(e){return{type:v,payload:e.lista}},R=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var c,a,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={uid:e},t.next=4,m("listas",c,"GET");case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,r=s.listas,n(D(r)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return{type:g,payload:e}},V=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n,c){var a,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c().auth.uid,t.prev=1,t.next=4,m("listas/".concat(e),{uid:a},"DELETE");case 4:return s=t.sent,t.next=7,s.json();case 7:!1===(r=t.sent).estado?(n(Y(e)),n(R(a))):j.a.fire({icon:"error",title:r.msg,text:"error fetch"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()},Y=function(e){return{type:y,payload:e}},G=function(e,t,n){var c={nombre:t,uid:e.usuario,presupuesto:0};return function(){var t=Object(d.a)(l.a.mark((function t(a){var s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m("listas/".concat(e._id),c,"PUT");case 3:return s=t.sent,t.next=6,s.json();case 6:r=t.sent,console.log(r),a(U(r.lista,n)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e,t){return{type:N,payload:{id:e._id,list:Object(I.a)(Object(I.a)({},e),{},{productos:t})}}},q=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(M(e)),t.next=4,n(H(e));case 4:c=t.sent,console.log(c),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return{type:k,payload:e}},J=function(e,t,n){var c={nombre:e,cantidad:n,lista:t};return function(){var e=Object(d.a)(l.a.mark((function e(n){var a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("productos",c,"POST");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,r=s.producto,n($(r,t)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},$=function(e,t){return{type:C,payload:{activeList:t,producto:e}}},H=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var c,a,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c={uid:e.usuario,list_id:e._id},t.next=4,m("productos",c,"GET");case 4:return a=t.sent,t.next=7,a.json();case 7:s=t.sent,r=s.productos,n(X(e,r)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},X=function(e,t){return{type:L,payload:{id:e._id,list:Object(I.a)(Object(I.a)({},e),{},{productos:t})}}},z=function(e,t){return{type:_,payload:{id:t._id,list:Object(I.a)(Object(I.a)({},t),{},{productos:t.productos.filter((function(t){return t._id!==e}))})}}},K=function(e,t,n,c){return{type:S,payload:{id:e._id,list:Object(I.a)(Object(I.a)({},e),{},{productos:e.productos.map((function(e){return e._id===t._id?Object(I.a)(Object(I.a)({},t),{},{precio:n,impuesto:c}):e}))})}}},Q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a={uid:e.usuario,precio:n,impuesto:c};return function(){var s=Object(d.a)(l.a.mark((function s(r){var o,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,m("productos/".concat(t._id),a,"PUT");case 3:return o=s.sent,s.next=6,o.json();case 6:i=s.sent,console.log(i),r(K(e,t,n,c)),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),console.log(s.t0);case 14:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(e){return s.apply(this,arguments)}}()},W=function(e,t){return{type:w,payload:{id:e.id,list:Object(I.a)(Object(I.a)({},e),{},{presupuesto:t})}}},Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c={uid:e.usuario,checked:n};return function(){var a=Object(d.a)(l.a.mark((function a(s){var r,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m("productos/".concat(t._id),c,"PUT");case 3:return r=a.sent,a.next=6,r.json();case 6:o=a.sent,console.log(o),s(ee(e,t,n)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()},ee=function(e,t,n){return{type:P,payload:{id:e._id,list:Object(I.a)(Object(I.a)({},e),{},{productos:e.productos.map((function(e){return e._id===t._id?Object(I.a)(Object(I.a)({},t),{},{checked:n}):e}))})}}},te=function(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(c){var a,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("auth/login",{correo:e,password:t},"POST");case 2:return a=n.sent,n.next=5,a.json();case 5:(s=n.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),c(ce({uid:s.id,name:s.usuario.nombre}))):j.a.fire("Error",s.msg,"error");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ne=function(){return{type:x}},ce=function(e){return{type:h,payload:e}},ae=function(){return function(e){localStorage.clear(),e(se()),e({type:T})}},se=function(){return{type:O}},re=(n(59),n(8)),oe=n(24),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(re.a)(t,2),a=n[0],s=n[1],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";s(Object(I.a)(Object(I.a)({},a),{},{nameValue:e,amountValue:t,Cost:n}))},o=function(e){var t=e.target;s(Object(I.a)(Object(I.a)({},a),{},Object(oe.a)({},t.name,t.value)))};return[a,o,r]},ue=n(0),le=function(){var e=Object(r.b)(),t=ie({Email:"",Password:""}),n=Object(re.a)(t,2),c=n[0],a=n[1],s=c.Email,o=c.Password;return Object(ue.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(te(s,o))},className:"animate__animated animate__fadeIn",children:[Object(ue.jsx)("div",{className:"form-group mt-5 i-email",children:Object(ue.jsx)("input",{className:"form-control fs-4 ",name:"Email",onChange:a,placeholder:"Email",type:"text",value:s})}),Object(ue.jsx)("div",{className:"form-group mt-4",children:Object(ue.jsx)("input",{className:"form-control fs-4",name:"Password",onChange:a,placeholder:"Password",type:"password",value:o})}),Object(ue.jsx)("div",{className:"form-group d-grid gap-2 col-6 mx-auto mt-5 ",children:Object(ue.jsx)("input",{type:"submit",className:"btn btn-success fs-4 ",value:"LogIn"})})]})},de=n(37),be=function(){var e=Object(r.b)();return Object(ue.jsx)("div",{className:" mt-5 text-center auth__social-networks ",children:Object(ue.jsx)(de.GoogleLogin,{clientId:"153363051251-ns1m9qcf2e3qrm2j0ho9ipcq18ta6eah.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){var n={id_token:t.tokenId};fetch("http://localhost:8080/api/auth/google",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("email",t.usuario.correo),localStorage.setItem("token",t.token),localStorage.setItem("token-init-date",(new Date).getTime()),e(ce({uid:t.usuario.uid,name:t.usuario.nombre}))})).catch(console.warn)},onFailure:function(){console.log("Failure")},cookiePolicy:"single_host_origin"})})},je=function(){var e=Object(r.b)(),t=ie({Name:"",Email:"",Password1:"",Password2:""}),n=Object(re.a)(t,2),c=n[0],a=n[1],s=c.Name,o=c.Email,i=c.Password1,u=c.Password2;return Object(ue.jsx)("div",{children:Object(ue.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i!==u)return j.a.fire("Error","Las contrase\xf1as deben de ser iguales");e(function(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"USER_ROLE";return function(){var s=Object(d.a)(l.a.mark((function s(r){var o,i;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,f("usuarios",{nombre:e,correo:t,password:n,password2:c,rol:a},"POST");case 2:return o=s.sent,s.next=5,o.json();case 5:"Creado"===(i=s.sent).msg?r(te(t,n)):j.a.fire("Error",i.errors[0].msg,"error");case 7:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(s,o,i,u))},className:"animate__animated animate__fadeIn",children:[Object(ue.jsx)("div",{className:"form-group mt-5 ",children:Object(ue.jsx)("input",{className:"form-control fs-4 ",name:"Name",onChange:a,placeholder:"Name",type:"text",value:s})}),Object(ue.jsx)("div",{className:"form-group mt-4 i-email",children:Object(ue.jsx)("input",{className:"form-control fs-4 ",name:"Email",onChange:a,placeholder:"Email",type:"text",value:o})}),Object(ue.jsx)("div",{className:"form-group mt-4",children:Object(ue.jsx)("input",{className:"form-control fs-4",name:"Password1",onChange:a,placeholder:"Password",type:"password",value:i})}),Object(ue.jsx)("div",{className:"form-group mt-4",children:Object(ue.jsx)("input",{className:"form-control fs-4",name:"Password2",onChange:a,placeholder:"Confirm Password",type:"password",value:u})}),Object(ue.jsx)("div",{className:"form-group d-grid gap-2 col-6 mx-auto mt-5",children:Object(ue.jsx)("input",{type:"submit",className:"btn btn-success fs-4",value:"Register"})})]})})},pe=function(){return Object(ue.jsx)("div",{children:Object(ue.jsxs)(i.d,{children:[Object(ue.jsx)(i.b,{path:"/auth/login",component:le}),Object(ue.jsx)(i.b,{path:"/auth/loginG",component:be}),Object(ue.jsx)(i.b,{path:"/auth/register",component:je}),Object(ue.jsx)(i.a,{to:"/auth/login"})]})})},fe=function(){return Object(ue.jsx)("div",{className:"login-container ",children:Object(ue.jsx)("div",{className:"transparencia d-flex justify-content-center align-items-center",children:Object(ue.jsxs)("div",{className:"form-container",children:[Object(ue.jsxs)("div",{className:"text-center",children:[Object(ue.jsx)("i",{className:"bi bi-cart-check "}),Object(ue.jsx)("span",{className:"font-brand navbar-brand text-light fs-1 m-4",children:"Shopping List"})]}),Object(ue.jsx)("nav",{children:Object(ue.jsxs)("div",{className:"fs-3",children:[Object(ue.jsx)(o.b,{className:"button",type:"button",to:"/auth/login",children:"LogIn"}),Object(ue.jsxs)(o.b,{className:"button",type:"button",to:"/auth/loginG",children:["LogIn with ",Object(ue.jsx)("span",{className:"google-blue",children:"G"}),Object(ue.jsx)("span",{className:"google-red",children:"o"}),Object(ue.jsx)("span",{className:"google-yellow",children:"o"}),Object(ue.jsx)("span",{className:"google-blue",children:"g"}),Object(ue.jsx)("span",{className:"google-green",children:"l"}),Object(ue.jsx)("span",{className:"google-red",children:"e"})]}),Object(ue.jsx)(o.b,{className:"button",type:"button",to:"/auth/register",children:"Register"})]})}),Object(ue.jsx)("div",{className:" router-container",children:Object(ue.jsx)(pe,{})})]})})})},me=function(e){var t=F()(e.fecha).format("D/MM/YYYY"),n=Object(i.g)().push,c=Object(r.b)();return Object(ue.jsxs)("li",{className:"list-item ",children:[Object(ue.jsxs)("button",{className:"list-group-item list-group-item-action list-group-item-success rounded d-flex justify-content-between",type:"button",onClick:function(){return function(e){c(q(e)),n("list/useList")}(e)},children:[e.nombre,Object(ue.jsxs)("span",{children:[" ",t]})]}),Object(ue.jsx)("i",{className:"bi bi-pencil-square fs-3 text-warning pt-2  pl-2",onClick:function(){c(q(e)),n("/list/updateList")}}),Object(ue.jsx)("i",{className:"bi bi-trash fs-3 text-danger pt-2 pl-2",onClick:function(){j.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#198754;",cancelButtonColor:"#db3236",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&(c(V(e._id)),j.a.fire("Deleted!","Your product has been deleted.","success"))}))}})]})},he=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.auth})).uid,n=Object(r.c)((function(e){return e.shoppingListReducer})),a=n.lists;n.activeList;return Object(c.useEffect)((function(){e(R(t))}),[]),Object(ue.jsx)("ul",{className:"list-group p-3",children:a.map((function(e){return Object(ue.jsx)(me,Object(I.a)({},e),e._id)}))})},Oe=n(16),xe=n.n(Oe),ve={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1rem",boxShadow:"1rem"}};xe.a.defaultStyles.overlay.backgroundColor="#000000d5",xe.a.setAppElement("#root");var ge=function(e){var t=e.modalIsOpen,n=(e.setIsOpen,e.closeModal),c=e.Product,a=e.checkId,s=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,o=Object(r.b)(),i=ie({Cost:0,itbms:.07}),u=Object(re.a)(i,3),l=u[0],d=u[1],b=u[2],j=l.Cost,p=l.itbms;return Object(ue.jsxs)(xe.a,{isOpen:t,onRequestClose:n,style:ve,contentLabel:"Example Modal",shouldCloseOnOverlayClick:!1,children:[Object(ue.jsxs)("div",{className:"row g-3 d-flex justify-content-around  mb-3",children:[Object(ue.jsx)("div",{className:"col-auto d-flex align-self-center fs-1",children:Object(ue.jsx)("label",{htmlFor:"",children:"Cost"})}),Object(ue.jsx)("div",{className:"col-auto ",children:Object(ue.jsx)("input",{className:"form-control fs-3",name:"Cost",onChange:d,onFocus:function(){console.log("hola mundo"),b(j,"")},placeholder:"$",type:"text",value:j})})]}),Object(ue.jsx)("div",{children:Object(ue.jsx)("div",{className:"row  mb-3",children:Object(ue.jsxs)("form",{className:"d-flex justify-content-around fs-3",children:[Object(ue.jsx)("span",{children:"Itbms: "}),Object(ue.jsxs)("span",{children:[Object(ue.jsx)("label",{className:"form-check-label mr-4 ml-4",htmlFor:"7%",children:"7%"}),Object(ue.jsx)("input",{className:"form-check-input",id:"7%",name:"itbms",onChange:d,type:"radio",value:.07,defaultChecked:!0})]}),Object(ue.jsxs)("span",{children:[Object(ue.jsx)("label",{className:"form-check-label mr-4 ml-4",htmlFor:"10%",children:"10%"}),Object(ue.jsx)("input",{className:"form-check-input",id:"10%",name:"itbms",onChange:d,type:"radio",value:.1})]}),Object(ue.jsxs)("span",{children:[Object(ue.jsx)("label",{className:"form-check-label mr-4 ml-4",htmlFor:"exento",children:"Exento"}),Object(ue.jsx)("input",{className:"form-check-input",id:"exento",name:"itbms",onChange:d,type:"radio",value:0})]})]})})}),Object(ue.jsxs)("div",{className:"footer d-flex justify-content-center",children:[Object(ue.jsx)("button",{className:"btn btn-success fs-1 mr-2",onClick:function(){var e=document.getElementById(a);console.log(e.checked),o(Z(s,c)),n(),e.checked=!1},children:"Back"}),Object(ue.jsx)("button",{className:"btn btn-success fs-1",onClick:function(){o(Q(s,c,j,p)),n()},id:"cancelBtn",children:"Save"})]})]})},ye=function(e){var t=e.nombre,n=e._id,a=(e.products,e.cantidad),s=e.Product,o=Object(c.useState)(),u=Object(re.a)(o,2),b=u[0],p=u[1],f=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,h=Object(r.b)(),O=Object(i.g)().location,x="flexCheck".concat(n),v=function(e){var t=e.target.checked;e.target.checked?p(!0):h(Q(f,s)),h(Z(f,s,t))};return Object(ue.jsxs)("div",{className:" list-group-item-action list-group-item-success form-check d-flex justify-content-between pl-5 pr-3 ",children:["/list/useList"===O.pathname?s.checked?Object(ue.jsx)("input",{className:"form-check-input check ",type:"checkbox",value:"Hola",id:"flexCheck".concat(n),onClick:v,defaultChecked:!0}):Object(ue.jsx)("input",{className:"form-check-input check ",type:"checkbox",value:"Hola",id:"flexCheck".concat(n),onClick:v}):Object(ue.jsx)("input",{className:"form-check-input check ",type:"checkbox",value:"",id:"flexCheck".concat(n),disabled:!0}),Object(ue.jsxs)("label",{className:" ml-3",htmlFor:"flexCheck".concat(n),children:[t,"  ",a>1&&"x"+a]}),Object(ue.jsx)("div",{children:Object(ue.jsx)("i",{className:"bi bi-trash fs-3 text-danger  float-end",onClick:function(){j.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#198754;",cancelButtonColor:"#db3236",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(console.log(f.usuario,n),h(function(e,t){console.log(t,e);var n={uid:t.usuario,product_id:e};return function(){var c=Object(d.a)(l.a.mark((function c(a){var s,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,m("productos/product",n,"DELETE");case 3:return s=c.sent,c.next=6,s.json();case 6:r=c.sent,console.log(r),a(z(e,t)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()}(n,f)),j.a.fire("Deleted!","Your product has been deleted.","success"))}))},type:"button",children:" "})}),Object(ue.jsx)(ge,{closeModal:function(){p(!1)},modalIsOpen:b,Product:s,setIsOpen:p,checkId:x})]})},Ne=function(){var e=Object(r.c)((function(e){return e.shoppingListReducer.activeList})).productos;return Object(ue.jsx)("div",{className:"list-check-container min-h m-0 border-bottom-0",children:e&&e.map((function(t){return Object(ue.jsx)(ye,Object(I.a)(Object(I.a)({},t),{},{Product:t,products:e}),t._id)}))})};F()().format();var ke=function(e){var t=e.handleNewList,n=void 0!==t&&t,a=e.handleSubmit,s=(e.activeTitle,e.activeProducts,Object(r.b)()),o=Object(r.c)((function(e){return e.auth})).uid,u=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,b=Object(i.g)(),p=b.push,f=b.location,h=Object(c.useState)([]),O=Object(re.a)(h,2),x=O[0],v=O[1],g=ie({title:"",nameValue:"",amountValue:1}),y=Object(re.a)(g,3),N=y[0],k=y[1],w=y[2],C=N.nameValue,L=N.amountValue,_=N.title;Object(c.useEffect)((function(){"/list/newList"===f.pathname&&n(o)}),[]);var E=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==C){e.next=2;break}return e.abrupt("return",j.a.fire({title:"The product name cannot be empty",icon:"warning"}));case 2:return e.next=4,s(J(C,u,L));case 4:w();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(ue.jsxs)("form",{className:"m-2",children:[Object(ue.jsx)("div",{className:"form-group ",children:Object(ue.jsx)("input",{className:"form-control fs-4 border-success text-success",name:"title",onChange:k,type:"text",placeholder:"Title",value:_})}),Object(ue.jsx)(Ne,{products:x,setProducts:v}),Object(ue.jsx)("div",{className:"form-group mt-3 mr-3 d-inline-block input-w",children:Object(ue.jsx)("input",{className:"form-control fs-4 border-success  text-success",name:"nameValue",onChange:k,placeholder:"Add product",type:"text",value:C,title:"Add product"})}),Object(ue.jsx)("div",{className:"form-group m-3 d-inline-block input-w",children:Object(ue.jsx)("input",{className:"form-control fs-4 border-success  text-success",name:"amountValue",onChange:k,onBlur:function(){""===L&&w(C)},onFocus:function(){w(C,"")},placeholder:"Amount",type:"text",value:L,title:"Add product"})}),Object(ue.jsx)("button",{className:"btn btn-success fs-4 ",type:"button",onClick:E,children:Object(ue.jsx)("i",{className:"bi bi-plus-lg text-light "})}),Object(ue.jsx)("button",{className:"btn btn-success fs-4 mt-3  float-end",type:"button",onClick:function(e){if(e.target.focus(),""===_)return j.a.fire({title:"The title cannot be empty",icon:"warning"});console.log(_),a(u,_,o,x)},children:"Save"}),Object(ue.jsx)("button",{className:"btn btn-success fs-4 mt-3 mr-3 float-end",type:"button",onClick:function(){"/list/newList"===f.pathname?j.a.fire({title:"Are you sure?",text:"do you want delete this list?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#81DFDD",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(s(V(u._id)),s(function(e){var t=e._id,n=e.usuario;console.log(t,n);var c={uid:n,list_id:t};return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("productos",c,"DELETE");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}(u)),j.a.fire("Deleted!","Your file has been deleted.","success"),p("/list"))})):p("/list")},children:"Back"})]})},we=function(){var e=Object(i.g)().push,t=Object(r.b)();return Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(ke,{handleNewList:function(e){t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"noName",t=arguments.length>1?arguments[1]:void 0;return function(){var n=Object(d.a)(l.a.mark((function n(c){var a,s,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a={nombre:e,uid:t,presupuesto:1},n.next=4,m("listas",a,"POST");case 4:return s=n.sent,n.next=7,s.json();case 7:r=n.sent,console.log(r),c(A(r)),j.a.fire("Save!","Your list has been created.","success"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0+" algo paso con el fetch");case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()}("noName",e))},handleSubmit:function(n,c,a,s){t(G(n,c,s)),e("/list")}})})},Ce=function(){var e=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,t=Object(r.b)(),n=ie({title:"activeTitle",nameValue:"",amountValue:1}),c=Object(re.a)(n,3),a=c[0],s=c[1],o=c[2],i=a.nameValue,u=a.amountValue,b=function(){var n=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==i){n.next=2;break}return n.abrupt("return",j.a.fire({title:"The product name cannot be empty",icon:"warning"}));case 2:return n.next=4,t(J(i,e,u));case 4:o();case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(ue.jsxs)("div",{children:[Object(ue.jsx)("div",{className:"form-group mt-3 mr-3 d-inline-block input-w",children:Object(ue.jsx)("input",{className:"form-control fs-4 border-success  text-success",name:"nameValue",onChange:s,placeholder:"Add product",type:"text",value:i,title:"Add product"})}),Object(ue.jsx)("div",{className:"form-group m-3 d-inline-block input-w",children:Object(ue.jsx)("input",{className:"form-control fs-4 border-success  text-success",name:"amountValue",onChange:s,onBlur:function(){""===u&&o(i,1)},onFocus:function(){o(i,"")},placeholder:"Amount",type:"text",value:u,title:"Add product"})}),Object(ue.jsx)("button",{className:"btn btn-success fs-4 ",type:"button",onClick:b,children:Object(ue.jsx)("i",{className:"bi bi-plus-lg text-light "})})]})},Le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",borderRadius:"1rem",boxShadow:"1rem"}};xe.a.defaultStyles.overlay.backgroundColor="#000000d5",xe.a.setAppElement("#root");var _e=function(e){var t=e.modalIsOpen,n=e.setIsOpen,c=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,a=Object(r.b)(),s=ie({Budget:c.presupuesto}),o=Object(re.a)(s,2),i=o[0],u=o[1],b=i.Budget;return Object(ue.jsxs)(xe.a,{isOpen:t,style:Le,contentLabel:"Example Modal",children:[Object(ue.jsx)("div",{className:"d-flex justify-content-end",children:Object(ue.jsx)("button",{className:"btn bi bi-x text-success fs-1",onClick:function(){n(!1)}})}),Object(ue.jsxs)("div",{className:"row g-3 d-flex justify-content-around  mb-3",children:[Object(ue.jsx)("div",{className:"col-auto d-flex align-self-center fs-1",children:Object(ue.jsx)("label",{htmlFor:"Budget",children:"Budget"})}),Object(ue.jsx)("div",{className:"col-auto ",children:Object(ue.jsx)("input",{className:"form-control fs-3",id:"Budget",name:"Budget",onChange:u,placeholder:"$",type:"text",value:b})})]}),Object(ue.jsx)("div",{className:"footer d-flex justify-content-center",children:Object(ue.jsx)("button",{className:"btn btn-success fs-1",onClick:function(){a(function(e,t){var n={presupuesto:t,uid:e.usuario,nombre:e.nombre};return console.log(n),function(){var c=Object(d.a)(l.a.mark((function c(a){var s,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,m("listas/".concat(e._id),n,"PUT");case 3:return s=c.sent,c.next=6,s.json();case 6:r=c.sent,console.log(r),a(W(e,t)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.log(c.t0);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()}(c,b)),n(!1)},id:"cancelBtn",children:"Save"})})]})},Ee=function(){var e=function(){return 0},t=Object(r.c)((function(e){return e.shoppingListReducer.activeList})),n=t.title,a=t.productos,s=t.presupuesto,o=Object(c.useState)(!1),u=Object(re.a)(o,2),l=u[0],d=u[1],b=Object(c.useState)(s),p=Object(re.a)(b,2),f=p[0],m=p[1],h=Object(c.useState)(0),O=Object(re.a)(h,2),x=O[0],v=O[1],g=Object(i.g)().push,y=parseFloat(s).toFixed(2);Object(c.useEffect)((function(){0===s&&d(!0)}),[s]),Object(c.useEffect)((function(){v(e()),function(){var t=(s-e()).toFixed(2);m(t)}()}),[v,a,s]),Object(c.useEffect)((function(){f>0&&f<s/10&&j.a.fire({title:"your budget is running out",icon:"warning"}),0!==s&&f<0&&j.a.fire({title:"your budget ran out",icon:"warning"})}),[s,f]),e=function(){var e=a.map((function(e){var t=e.precio*e.impuesto,n=(parseFloat(e.precio)+parseFloat(t))*e.cantidad;return parseFloat(n)})).reduce((function(e,t){return e+t}),0);return e.toFixed(2)};return Object(ue.jsxs)("div",{className:"list-check-container  container-vh-85 text-center p-0  ",children:[Object(ue.jsxs)("div",{className:"bg-success text-white m-0 p-2 title-h",children:[Object(ue.jsx)("i",{className:"bi bi-arrow-left-square float-start fs-2",onClick:function(){g("./list")}}),Object(ue.jsxs)("h2",{className:"d-inline ",children:[n," "]})]}),Object(ue.jsx)("div",{className:"list-h",children:Object(ue.jsx)(Ne,{})}),Object(ue.jsx)("div",{className:"add-h",children:Object(ue.jsx)(Ce,{})}),Object(ue.jsx)("div",{className:"bg-success text-white text-start p-2 footer-h ",children:Object(ue.jsxs)("div",{className:"w-50",children:[Object(ue.jsxs)("p",{className:"m-0",children:["Budget :    ",Object(ue.jsx)("i",{className:"bi bi-pencil-square fs-3 text-warning pt-2  pl-2 float-center",onClick:function(){d(!0)}}),Object(ue.jsxs)("span",{className:"fw-bold text-warning  float-end",children:[" ","$"+y," "]})]}),Object(ue.jsxs)("p",{className:"m-0",children:["Remaining budget:  ",Object(ue.jsxs)("span",{className:"fw-bold text-danger float-end",children:[" ","$"+f]})]}),Object(ue.jsxs)("p",{className:"m-0",children:["Current total: ",Object(ue.jsxs)("span",{className:"fw-bold text-warning float-end",children:[" ","$"+x," "]})]})]})}),Object(ue.jsx)(_e,{modalIsOpen:l,setIsOpen:d})]})},Se=function(){var e=Object(r.c)((function(e){return e.shoppingListReducer})).activeList,t=Object(r.b)(),n=Object(i.g)().push,c=e.nombre,a=e.productos;return Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(ke,{handleSubmit:function(e,c,a){t(G(e,c,a)),n("/list")},activeProducts:a,activeTitle:c})})},Pe=function(){return Object(ue.jsx)("div",{children:Object(ue.jsxs)(i.d,{children:[Object(ue.jsx)(i.b,{exact:!0,path:"/list",component:he}),Object(ue.jsx)(i.b,{path:"/list/newList",component:we}),Object(ue.jsx)(i.b,{path:"/list/useList",component:Ee}),Object(ue.jsx)(i.b,{path:"/list/updateList",component:Se}),Object(ue.jsx)(i.a,{to:"/list"})]})})},Te=function(){return Object(ue.jsx)(o.b,{className:"btn btn-success fab fs-1 ",type:"button",to:"/list/newList",children:Object(ue.jsx)("i",{className:"bi bi-plus-lg "})})},Ie=function(){var e=Object(r.b)();return Object(ue.jsxs)("div",{className:"navbar navbar-light bg-success ",children:[Object(ue.jsx)("span",{className:"navbar-brand fs-2 "}),Object(ue.jsx)("span",{className:"font-brand navbar-brand text-center  text-light",children:"Shopping List"}),Object(ue.jsx)("i",{className:"bi bi-power btn-logout mr-3",onClick:function(){e(ae())},type:"button"})]})},Be=function(e){var t=e.history;return Object(ue.jsx)("div",{className:"list-container",children:Object(ue.jsxs)("div",{className:"transparencia",children:[Object(ue.jsx)(Ie,{}),Object(ue.jsx)("div",{className:"list-router-container",children:Object(ue.jsx)(Pe,{})}),"/list"===t.location.pathname&&Object(ue.jsx)(Te,{})]})})},Fe=n(26),Ae=["isAuthenticated","component"],Re=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Fe.a)(e,Ae);return Object(ue.jsx)(i.b,Object(I.a)(Object(I.a)({},c),{},{component:function(e){return t?Object(ue.jsx)(n,Object(I.a)({},e)):Object(ue.jsx)(i.a,{to:"/auth"})}}))},De=["isAuthenticated","component"],Ve=function(e){var t=e.isAuthenticated,n=e.component,c=Object(Fe.a)(e,De);return Object(ue.jsx)(i.b,Object(I.a)(Object(I.a)({},c),{},{component:function(e){return t?Object(ue.jsx)(i.a,{to:"/"}):Object(ue.jsx)(n,Object(I.a)({},e))}}))},Ye=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.auth})),n=t.checking,a=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(ce({uid:c.id,name:c.name}))):t(ne());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ue.jsx)("h5",{children:"Espere..."}):Object(ue.jsx)(o.a,{children:Object(ue.jsx)("div",{children:Object(ue.jsxs)(i.d,{children:[Object(ue.jsx)(Ve,{path:"/auth",component:fe,isAuthenticated:!!a}),Object(ue.jsx)(Re,{path:"/",component:Be,isAuthenticated:!!a}),Object(ue.jsx)(i.a,{to:"/auth"})]})})})},Ge=n(18),Ue=n(39),qe={checking:!0},Me=n(22),Je={lists:[],activeList:{}},$e=Object(Ge.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(I.a)(Object(I.a)(Object(I.a)({},e),t.payload),{},{checking:!1});case x:return Object(I.a)(Object(I.a)({},e),{},{checking:!1});case O:return{checking:!1};default:return e}},shoppingListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(I.a)(Object(I.a)({},e),{},{lists:[].concat(Object(Me.a)(e.lists),[t.payload]),activeList:Object(I.a)({},t.payload)});case g:return Object(I.a)(Object(I.a)({},e),{},{lists:Object(Me.a)(t.payload)});case y:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.filter((function(e){return e._id!==t.payload.id}))});case N:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.map((function(e){return e._id===t.payload.id?t.payload.list:e})),activeList:t.payload.list});case k:return Object(I.a)(Object(I.a)({},e),{},{activeList:Object(I.a)({},t.payload)});case w:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.map((function(e){return e._id===t.payload.id?t.payload.list:e})),activeList:t.payload.list});case C:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.map((function(e){return e._id===t.payload.activeList._id?Object(I.a)(Object(I.a)({},e),{},{productos:[].concat(Object(Me.a)(e.productos),[t.payload.producto])}):e})),activeList:Object(I.a)(Object(I.a)({},t.payload.activeList),{},{productos:[].concat(Object(Me.a)(t.payload.activeList.productos),[t.payload.producto])})});case L:case _:case E:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.map((function(e){return e._id===t.payload.id?t.payload.list:e})),activeList:Object(I.a)({},t.payload.list)});case S:case P:return Object(I.a)(Object(I.a)({},e),{},{lists:e.lists.map((function(e){return e._id===t.payload.id?t.payload.list:e})),activeList:t.payload.list});case T:return Object(I.a)({},Je);default:return e}}}),He="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ge.c,Xe=Object(Ge.d)($e,He(Object(Ge.a)(Ue.a))),ze=function(){return Object(ue.jsx)(r.a,{store:Xe,children:Object(ue.jsx)(Ye,{})})};n(72),n(73);s.a.render(Object(ue.jsx)(ze,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.2a9a9461.chunk.js.map