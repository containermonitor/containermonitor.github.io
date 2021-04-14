(this["webpackJsonpcra-template-rb"]=this["webpackJsonpcra-template-rb"]||[]).push([[0],{223:function(e){e.exports=JSON.parse('{"title":"welcome"}')},639:function(e,a,t){"use strict";t.r(a);t(336),t(346);var n,r=t(0),i=t.n(r),c=t(16),o=t(62),s=(t(540),t(155)),l=t(83),m=t(25),u=t(306),d=t(226),p=Object(d.a)(n||(n=Object(u.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .loginPage {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  }\n\n  .authHeader {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  }\n\n  .loginWrapper {\n  padding: 10px;\n  width: 33vw;\n  min-height: 45vh;\n  align-items: center;\n  justify-content: space-evenly;\n  display: flex;\n  flex-direction: column;\n  }\n  .chartsLayout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  min-width: 80vw;\n  min-height: 80vh;\n  align-items: center;\n  justify-content: space-between;\n  }\n  .chartsDiv {\n  min-width: 45%;\n  height: 50%;\n  text-align: center;\n  margin: 20px;\n  }\n"]))),h=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},n=e;a&&(n=function(){return e().then((function(e){return{default:a(e)}}))});var c=Object(r.lazy)(n);return function(e){return i.a.createElement(r.Suspense,{fallback:t.fallback},i.a.createElement(c,e))}},g=h((function(){return t.e(4).then(t.bind(null,706))}),(function(e){return e.IndexPage})),b=h((function(){return t.e(3).then(t.bind(null,708))}),(function(e){return e.NotFoundPage})),f=t(702),E=t(35),w=t(640),v=t(698),y=t(681),j=t(173),O="/container/login",x="/container/registerUser",C=function(e){return"".concat("http","://").concat("35.175.119.86",":").concat(9090,"/").concat(e)},S=t(697),k=Object(r.memo)((function(e){var a=Object(m.f)(),t=Object(j.a)(),n=t.register,c=t.handleSubmit,o=t.errors,s=Object(r.useState)({success:!1,error:!1}),l=Object(E.a)(s,2),u=l[0],d=l[1];return i.a.createElement("div",{className:"loginPage"},(u.success||u.error)&&i.a.createElement(i.a.Fragment,null,u.error&&i.a.createElement(S.a,{severity:"error"},"Error while singup!")),i.a.createElement("form",{onSubmit:c((function(e){var t=new Headers;t.append("Content-Type","application/json");var n=JSON.stringify({userName:e.email,password:e.password});fetch("".concat(C(O)),{method:"POST",headers:t,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){200===e.status?a.push("/system/dashboard"):d({error:!0,success:!1})})).catch((function(e){console.log("error",e),d({error:!0,success:!1})}))}))},i.a.createElement(w.a,{className:"loginWrapper"},i.a.createElement("span",{className:"authHeader"},"Login Page"),i.a.createElement(v.a,{id:"standard-basic",label:"Email",type:"email",name:"email",inputRef:n({required:!0,maxLength:30,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),error:Boolean(o.email),helperText:Boolean(o.email)&&"Email is required"}),i.a.createElement(v.a,{id:"standard-basic",label:"Password",type:"password",name:"password",inputRef:n({required:!0,maxLength:30}),error:Boolean(o.password),helperText:Boolean(o.password)&&"Password is required"}),i.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary"},"Login"),i.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){a.push("/auth/signup")}},"Signup"))))})),N=t(19),_=t.n(N),P=t(64),B=Object(r.memo)((function(e){var a=Object(m.f)(),t=Object(j.a)(),n=t.register,c=t.handleSubmit,o=t.errors,s=t.watch,l=Object(r.useRef)({});l.current=s("password","");var u=Object(r.useState)({success:!1,error:!1}),d=Object(E.a)(u,2),p=d[0],h=d[1],g=function(){var e=Object(P.a)(_.a.mark((function e(a){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Headers).append("Content-Type","application/json"),n=JSON.stringify({id:"2",userName:a.username,password:a.password}),fetch(C(x),{method:"POST",headers:t,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){200===e.status?h({error:!1,success:!0}):h({error:!0,success:!1})})).catch((function(e){console.log("error",e),h({error:!0,success:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement("form",{onSubmit:c(g)},i.a.createElement("div",{className:"loginPage"},(p.success||p.error)&&i.a.createElement(i.a.Fragment,null,p.success&&i.a.createElement(S.a,{severity:"success"},"You have successfully signed up"),p.error&&i.a.createElement(S.a,{severity:"error"},"Error while singup!")),i.a.createElement(w.a,{className:"loginWrapper"},i.a.createElement("span",{className:"authHeader"},"Signup Page"),i.a.createElement(v.a,{id:"standard-basic",label:"Email",type:"email",name:"email",inputRef:n({required:!0,maxLength:30,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),error:Boolean(o.email),helperText:Boolean(o.email)&&"Email is required"}),i.a.createElement(v.a,{id:"standard-basic",label:"Password",type:"password",name:"password",inputRef:n({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),error:Boolean(o.password),helperText:Boolean(o.password)&&"Password is required"}),i.a.createElement("br",null),i.a.createElement(v.a,{type:"password",name:"cpassword",error:o.cpassword,helperText:o.cpassword?"confirm password should match with password":"",inputRef:n({validate:function(e){return e===l.current||"The passwords do not match"}}),label:"Confirm Password",variant:"outlined"}),i.a.createElement(y.a,{variant:"contained",type:"submit",color:"primary"},"Signup"),i.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){a.goBack()}},"Go Back"))))})),A=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/auth/login",component:k}),i.a.createElement(m.a,{exact:!0,path:"/auth/signup",component:B}),i.a.createElement(m.a,{component:b})))},L=t(137),W=Object(r.memo)((function(e){var a={labels:["Jan","Feb","Mar","Apr","May","Jun"],datasets:[{label:"First dataset",data:[33,53,85,41,44,65],fill:!0,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(75,192,192,1)"},{label:"Second dataset",data:[33,25,35,51,54,76],fill:!1,borderColor:"#742774"}]};return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{className:"chartsLayout"},i.a.createElement(w.a,{className:"chartsDiv"},i.a.createElement(L.Line,{data:a,options:{responsive:!0,maintainAspectRatio:!0}})),i.a.createElement(w.a,{className:"chartsDiv"},i.a.createElement(L.Line,{data:a})),i.a.createElement(w.a,{className:"chartsDiv"},i.a.createElement(L.Line,{data:a})),i.a.createElement(w.a,{className:"chartsDiv"},i.a.createElement(L.Line,{data:a}))))}));function R(e){var a=Object(m.g)().id;return Object(r.useEffect)((function(){console.log(a)}),[a]),r.createElement("div",null,a)}var T=t(176),F=t(683),I=t(684),D=t(685),H=t(686),q=t(687),z=t(688),J=t(700),M=t(170),Z=t(28),G=t(682),Y=t(704),$=240,U=Object(G.a)((function(e){return Object(Y.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:$,width:"calc(100% - ".concat($,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:$,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:$,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(Z.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(M.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(10,5,10,3)},tableRoot:{width:"100%"},container:{maxHeight:440},centerAlign:{width:"100%",textAlign:"center",margin:"3px"}})}));function V(e){var a=U(),t=r.useState(0),n=Object(E.a)(t,2),i=n[0],c=n[1],o=e.columns,s=e.rows,l=e.header,m=r.useState(10),u=Object(E.a)(m,2),d=u[0],p=u[1];return r.createElement(r.Fragment,null,r.createElement(T.a,{variant:"h5",className:a.centerAlign},l),r.createElement(w.a,{className:a.tableRoot},r.createElement(F.a,{className:a.container},r.createElement(I.a,{stickyHeader:!0,"aria-label":"sticky table"},r.createElement(D.a,null,r.createElement(H.a,null,o.map((function(e){return r.createElement(q.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.createElement(z.a,null,s.slice(i*d,i*d+d).map((function(e){return r.createElement(H.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},o.map((function(a){var t=e[a.id];return r.createElement(q.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.createElement(J.a,{rowsPerPageOptions:[10,25,100],component:"div",count:s.length,rowsPerPage:d,page:i,onChangePage:function(e,a){c(a)},onChangeRowsPerPage:function(e){p(+e.target.value),c(0)}})))}var X=t(63),K=t(85),Q=function(e){return Object(K.b)(e)},ee=t(136);function ae(e){return Object(ee.b)(e)}function te(e){return Object(ee.c)(e)}var ne=_.a.mark(re);function re(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),ne)}var ie={runningColumns:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"container_id",label:"Container Id",minWidth:100},{id:"base_image",label:"Base Image",minWidth:100,align:"right"},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"started_at",label:"Started At",minWidth:150,align:"right"}],stoppedColumns:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"container_id",label:"Container Id",minWidth:100},{id:"base_image",label:"Base Image",minWidth:100,align:"right"},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"stopped_at",label:"Stopped At",minWidth:150,align:"right"}],runningContainerData:[{base_image:"base",container_id:"c_id",created_at:"10-11-2019",sr_no:1,started_at:"10-03-2021"}],stoppedContainerData:[]},ce=Q({name:"containerlist",initialState:ie,reducers:{someAction:function(e,a){}}}),oe=(ce.actions,Object(X.a)([function(e){return e.containerlist||ie}],(function(e){return e})));function se(e){ae({key:ce.name,reducer:ce.reducer}),te({key:ce.name,saga:re}),ce.actions;var a=Object(o.c)(oe);return Object(r.useEffect)((function(){console.log(a)}),[a]),r.createElement(r.Fragment,null,r.createElement(V,{columns:a.runningColumns,rows:a.runningContainerData,header:"Running Containers"}),r.createElement(V,{columns:a.stoppedColumns,rows:a.stoppedContainerData,header:"Stopped Containers"}))}var le=_.a.mark(me);function me(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),le)}var ue={imagesListColumn:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"images_id",label:"Image Id",minWidth:100,align:"left"},{id:"base_image",label:"Base Image",minWidth:100},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"size",label:"Size",minWidth:150,align:"right"}],imagesListData:[{base_image:"base Image",created_at:"11-03-2019",images_id:"bcd342",sr_no:1,size:"24MB"}]},de=Q({name:"imagesList",initialState:ue,reducers:{someAction:function(e,a){}}}),pe=(de.actions,Object(X.a)([function(e){return e.imagesList||ue}],(function(e){return e})));function he(e){ae({key:de.name,reducer:de.reducer}),te({key:de.name,saga:me}),de.actions;var a=Object(o.c)(pe);return r.createElement(r.Fragment,null,r.createElement(V,{columns:a.imagesListColumn,rows:a.imagesListData,header:"All Images"}))}var ge=t(313),be=t.n(ge),fe=t(314),Ee=t.n(fe),we=t(312);var ve=[{name:"Dashboard",path:"/system/dashboard",icon:t.n(we).a},{name:"containers",path:"/system/containers",icon:be.a},{name:"images",path:"/system/images",icon:Ee.a}],ye=t(38),je=t(691),Oe=t(690),xe=t(677),Ce=t(701),Se=t(692),ke=t(680),Ne=t(315),_e=t.n(Ne),Pe=t(317),Be=t.n(Pe),Ae=t(316),Le=t.n(Ae),We=t(689),Re=t(693),Te=t(694),Fe=t(4);function Ie(e){var a,t,n=U(),i=Object(ye.a)(),c=r.useState(!1),o=Object(E.a)(c,2),s=o[0],l=o[1],u=Object(m.f)();return r.createElement(r.Fragment,null,r.createElement(je.a,{position:"fixed",className:Object(Fe.a)(n.appBar,Object(Z.a)({},n.appBarShift,s))},r.createElement(Oe.a,null,r.createElement(xe.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(Fe.a)(n.menuButton,Object(Z.a)({},n.hide,s))},r.createElement(_e.a,null)),r.createElement(T.a,{variant:"h6",noWrap:!0},"Mini variant drawer"))),r.createElement(Ce.a,{variant:"permanent",className:Object(Fe.a)(n.drawer,(a={},Object(Z.a)(a,n.drawerOpen,s),Object(Z.a)(a,n.drawerClose,!s),a)),classes:{paper:Object(Fe.a)((t={},Object(Z.a)(t,n.drawerOpen,s),Object(Z.a)(t,n.drawerClose,!s),t))}},r.createElement("div",{className:n.toolbar},r.createElement(xe.a,{onClick:function(){l(!1)}},"rtl"===i.direction?r.createElement(Le.a,null):r.createElement(Be.a,null))),r.createElement(Se.a,null),r.createElement(ke.a,null,ve.map((function(e,a){return r.createElement(We.a,{button:!0,key:a,selected:u.location.pathname===e.path,onClick:function(){u.location.pathname!==e.path&&u.push(e.path)}},r.createElement(Re.a,null,r.createElement(e.icon)),r.createElement(Te.a,{primary:e.name}))})))))}var De=t(695),He=function(e){var a=U();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.root},i.a.createElement(De.a,null),i.a.createElement(Ie,null),i.a.createElement("main",{className:a.content},i.a.createElement(m.c,null,[{path:"/system/dashboard",routeComponent:W,isExact:!0},{path:"/system/container/:id",routeComponent:R,isExact:!0},{path:"/system/containers",routeComponent:se,isExact:!0},{path:"/system/images",routeComponent:he,isExact:!0}].map((function(e,a){return i.a.createElement(m.a,{exact:e.isExact,path:e.path,component:e.routeComponent})})),i.a.createElement(m.a,{component:b})))))};function qe(){var e=Object(f.a)().i18n;return r.createElement(l.a,null,r.createElement(s.a,{titleTemplate:"%s - Resource Monitor",defaultTitle:"Resource Monitor",htmlAttributes:{lang:e.language}},r.createElement("meta",{name:"description",content:"A React Boilerplate application"})),r.createElement(m.c,null,r.createElement(m.a,{exact:!0,path:"/",component:g}),r.createElement(m.a,{path:"/auth",component:A}),r.createElement(m.a,{path:"/system",component:He}),r.createElement(m.a,{component:b})),r.createElement(p,null))}var ze=t(26),Je=t(322),Me=t(47);function Ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(Me.c)(Object(M.a)({},e))}var Ge=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,707)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),i(e),c(e)}))},Ye=t(323),$e=t(138),Ue=t(321),Ve=t(223),Xe={},Ke={en:{translation:Ve}};!function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Xe,n=arguments.length>2?arguments[2]:void 0;Object.keys(a).forEach((function(r){var i=n?"".concat(n,".").concat(r):r;"object"===typeof a[r]?(t[r]={},e(a[r],t[r],i)):t[r]=i}))}(Ve);Ye.a.use($e.e).use(Ue.a).init({resources:Ke,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var Qe=function(){var e=Object(Je.a)({}),a=e.run,t=[e],n=[Object(ee.a)({createReducer:Ze,runSaga:a})];return Object(K.a)({reducer:Ze(),middleware:[].concat(Object(ze.a)(Object(K.c)()),t),devTools:!1,enhancers:n})}(),ea=document.getElementById("root");c.render(r.createElement(o.a,{store:Qe},r.createElement(s.b,null,r.createElement(r.StrictMode,null,r.createElement(qe,null)))),ea),Ge()}},[[639,1,2]]]);