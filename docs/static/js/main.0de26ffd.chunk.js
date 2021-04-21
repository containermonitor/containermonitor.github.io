(this["webpackJsonpcra-template-rb"]=this["webpackJsonpcra-template-rb"]||[]).push([[0],{229:function(e){e.exports=JSON.parse('{"title":"welcome"}')},645:function(e,a,t){"use strict";t.r(a);t(342),t(352);var n,r=t(0),s=t.n(r),i=t(20),o=t(27),c=(t(546),t(159)),l=t(79),m=t(30),u=t(312),d=t(232),p=Object(d.a)(n||(n=Object(u.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .loginPage {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  }\n\n  .authHeader {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  text-align: center;\n  }\n\n  .loginWrapper {\n  padding: 10px;\n  width: 33vw;\n  min-height: 45vh;\n  align-items: center;\n  justify-content: space-evenly;\n  display: flex;\n  flex-direction: column;\n  }\n  .chartsLayout {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  min-width: 80vw;\n  min-height: 80vh;\n  align-items: center;\n  justify-content: space-between;\n  }\n  .chartsDiv {\n  min-width: 45%;\n  height: 50%;\n  text-align: center;\n  margin: 20px;\n  }\n"]))),g=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},n=e;a&&(n=function(){return e().then((function(e){return{default:a(e)}}))});var i=Object(r.lazy)(n);return function(e){return s.a.createElement(r.Suspense,{fallback:t.fallback},s.a.createElement(i,e))}},h=g((function(){return t.e(4).then(t.bind(null,715))}),(function(e){return e.IndexPage})),f=g((function(){return t.e(3).then(t.bind(null,717))}),(function(e){return e.NotFoundPage})),b=t(710),E=t(686),v=t(687),w=t(646),y=t(712),j=t(181),x=t(706),O=t(691),k=t(121),C=t(175),A=t.n(C),S=t(705);function N(e){return r.createElement(r.Fragment,null,r.createElement(S.a,{style:{width:"100%",marginTop:"5px",marginBottom:"5px"},severity:e.type},e.message))}var I=t(174),_=t(33),D=t(685),W=t(711),B=240,T=Object(D.a)((function(e){return Object(W.a)({root:{display:"flex"},authroot:{display:"flex",height:"100vh"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:B,width:"calc(100% - ".concat(B,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:B,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:B,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(_.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(I.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(10,5,10,3)},tableRoot:{width:"100%"},container:{maxHeight:440},centerAlign:{width:"100%",textAlign:"center",margin:"3px"},image:{backgroundImage:"url(https://s27389.pcdn.co/wp-content/uploads/2018/01/AdobeStock_119913056.jpeg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},chartTitle:{width:"100%",textAlign:"left",padding:e.spacing(1)}})})),F=t(59),L=function(e){return Object(F.b)(e)},P=t(141);function R(e){return Object(P.b)(e)}function q(e){return Object(P.c)(e)}var H=t(10),z=t.n(H),U=t(28),M=z.a.mark(Z);function Z(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),M)}var V={alertOpen:!1,alertType:"success",alertMessage:"",jwtToken:""},G=L({name:"globalApplication",initialState:V,reducers:{openAlert:function(e,a){e.alertOpen=!0,e.alertType=a.payload.type,e.alertMessage=a.payload.message},alertClose:function(e){e.alertOpen=!1},makeLogin:function(e,a){e.jwtToken=a.payload.jwt},makeLogout:function(e,a){e.jwtToken=""}}}),J=G.actions,Y=t(68),$=Object(Y.a)([function(e){return e.login||oe}],(function(e){return e})),X="container/login",K="container/users/register",Q="container/docker/listContainersInit",ee=function(e){return"".concat("https://containermonitor.pagekite.me","/").concat(e)},ae=t(46),te=Object(ae.b)(),ne=z.a.mark(se),re=z.a.mark(ie);function se(){var e,a,t,n,r;return z.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(U.b)($);case 2:return e=s.sent,(a=new Headers).append("Content-Type","application/json"),t=JSON.stringify({userName:e.data.email,password:e.data.password}),s.next=8,fetch(ee(X),{method:"POST",headers:a,body:t,redirect:"follow"});case 8:return n=s.sent,s.next=11,n.json();case 11:if(r=s.sent,200!==n.status){s.next=21;break}return localStorage.setItem("token",r.jwt),s.next=16,Object(U.a)(le.handleSuccess());case 16:return s.next=18,Object(U.a)(J.makeLogin({jwt:r.jwt}));case 18:te.push("/system/dashboard"),s.next=28;break;case 21:if(401!==n.status){s.next=26;break}return s.next=24,Object(U.a)(le.handleServerErrors({errors:["Bad Credentials"]}));case 24:s.next=28;break;case 26:return s.next=28,Object(U.a)(le.handleServerErrors({errors:["Unexpected error! please try again Later"]}));case 28:case"end":return s.stop()}}),ne)}function ie(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(le.makeLogin.type,se);case 2:case"end":return e.stop()}}),re)}var oe={serverErrors:[],success:{message:"success",status:!1},data:{email:"",password:""}},ce=L({name:"login",initialState:oe,reducers:{someAction:function(e,a){},makeLogin:function(e,a){e.data.email=a.payload.email,e.data.password=a.payload.password},handleServerErrors:function(e,a){e.serverErrors=a.payload.errors},handleSuccess:function(e){e.serverErrors=[]}}}),le=ce.actions,me=Object(r.memo)((function(e){var a=Object(m.f)(),t=(R({key:ce.name,reducer:ce.reducer}),q({key:ce.name,saga:ie}),{loginActions:ce.actions}).loginActions,n=Object(k.a)(),r=n.register,i=n.handleSubmit,c=n.errors,l=Object(o.c)(),u=T(),d=(R({key:G.name,reducer:G.reducer}),q({key:G.name,saga:Z}),G.actions,Object(o.d)($));return s.a.createElement(E.a,{container:!0,component:"main",className:u.authroot},s.a.createElement(v.a,null),s.a.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:u.image}),s.a.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0},s.a.createElement("div",{className:u.paper},s.a.createElement(y.a,{className:u.avatar},s.a.createElement(A.a,null)),s.a.createElement(j.a,{component:"h1",variant:"h5"},"Log In"),d.serverErrors.map((function(e,a){return s.a.createElement(N,{message:e,type:"error",key:a})})),d.success.status&&s.a.createElement(N,{message:d.success.message,type:"success"}),s.a.createElement("form",{className:u.form,onSubmit:i((function(e){console.log(e),l(t.makeLogin({email:e.email,password:e.password}))})),noValidate:!0},s.a.createElement(x.a,{variant:"outlined",helperText:Boolean(c.email)&&"Please Enter Valid Email",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:r({required:!0,maxLength:30,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),error:Boolean(c.email)}),s.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",error:c.password,helperText:Boolean(c.password)&&"Please Enter Password",type:"password",inputRef:r({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}})}),s.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:u.submit},"Sign in"),s.a.createElement(E.a,{container:!0},s.a.createElement(O.a,{onClick:function(){a.push("/auth/signup")},fullWidth:!0,variant:"contained",color:"primary",className:u.submit},"Sign Up"))))))})),ue=t(69),de=Object(Y.a)([function(e){return e.signup||be}],(function(e){return e})),pe=z.a.mark(he),ge=z.a.mark(fe);function he(){var e,a,t,n,r,s,i;return z.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(U.b)(de);case 2:return e=o.sent,console.log(e),(a=new Headers).append("Content-Type","application/json"),t=JSON.stringify({userName:e.data.email,password:e.data.password}),o.next=9,fetch(ee(K),{method:"POST",headers:a,body:t,redirect:"follow"});case 9:return n=o.sent,console.log(n),o.next=13,n.json();case 13:if(r=o.sent,200!==n.status){o.next=26;break}if(200!==r.statusCode){o.next=20;break}return o.next=18,Object(U.a)(ve.successHandler({message:"You have succesfully registered"}));case 18:o.next=24;break;case 20:if(201!==r.statusCode){o.next=24;break}return s=[r.message],o.next=24,Object(U.a)(ve.serverErrorHandler({errors:s}));case 24:o.next=30;break;case 26:if(400!==n.status){o.next=30;break}return i=Object.values(r.errors),o.next=30,Object(U.a)(ve.serverErrorHandler({errors:i}));case 30:case"end":return o.stop()}}),pe)}function fe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(ve.signupAction,he);case 2:case"end":return e.stop()}}),ge)}var be={data:{email:"",password:""},errors:{confirmPassword:"",email:"",password:""},success:{status:!1,message:""},serverErrors:[]},Ee=L({name:"signup",initialState:be,reducers:{someAction:function(e,a){},signupAction:function(e,a){e.data.email=a.payload.email,e.data.password=a.payload.password},serverErrorHandler:function(e,a){e.serverErrors=a.payload.errors},successHandler:function(e,a){e.success.status=!0,e.success.message=a.payload.message,e.serverErrors=[]}}}),ve=Ee.actions,we=Object(r.memo)((function(e){var a=Object(m.f)(),t=Object(o.c)(),n=Object(k.a)(),i=n.register,c=n.handleSubmit,l=n.errors,u=n.watch,d=(R({key:Ee.name,reducer:Ee.reducer}),q({key:Ee.name,saga:fe}),{signupActions:Ee.actions}).signupActions,p=Object(o.d)(de),g=Object(r.useRef)({});g.current=u("password","");var h=T(),f=function(){var e=Object(ue.a)(z.a.mark((function e(a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(d.signupAction({email:a.email,password:a.password}));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(E.a,{container:!0,component:"main",className:h.authroot},s.a.createElement(v.a,null),s.a.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:h.image}),s.a.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0},s.a.createElement("div",{className:h.paper},s.a.createElement(y.a,{className:h.avatar},s.a.createElement(A.a,null)),s.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign up"),p.serverErrors.map((function(e,a){return s.a.createElement(N,{message:e,type:"error",key:a})})),p.success.status&&s.a.createElement(N,{message:p.success.message,type:"success"}),s.a.createElement("form",{className:h.form,onSubmit:c(f),noValidate:!0},s.a.createElement(x.a,{variant:"outlined",helperText:Boolean(l.email)&&"Please Enter Valid Email",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:i({required:!0,maxLength:30,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),error:Boolean(l.email)}),s.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",error:l.password,helperText:Boolean(l.password)&&"Please Enter Password",type:"password",inputRef:i({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}})}),s.a.createElement(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Confirm Password",type:"password",id:"cpassword",name:"cpassword",error:l.cpassword,helperText:l.cpassword?"confirm password should match with password":"",inputRef:i({validate:function(e){return e===g.current||"The passwords do not match"}})}),s.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:h.submit},"Sign Up"),s.a.createElement(E.a,{container:!0},s.a.createElement(O.a,{onClick:function(){a.goBack()},fullWidth:!0,variant:"contained",color:"primary",className:h.submit},"Go Back"))))))})),ye=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/auth/login",component:me}),s.a.createElement(m.a,{exact:!0,path:"/auth/signup",component:we}),s.a.createElement(m.a,{component:f})))},je=z.a.mark(xe);function xe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),je)}var Oe={labels:["11-26-2020","11-27-2020","11-28-2020"],stats:{cpu:{backgroundColor:"#F34213",borderColor:"#34435E",stats:[{time:"11-26-2020",value:"11"},{time:"11-27-2020",value:"1"},{time:"11-28-2020",value:"13"}]},disk:{backgroundColor:"#0496FF",borderColor:"#00487C",stats:[{time:"11-26-2020",value:"21"},{time:"11-27-2020",value:"65"},{time:"11-28-2020",value:"19"}]},io:{backgroundColor:"#FF4F79",borderColor:"#2B193D",stats:[{time:"11-26-2020",value:"31"},{time:"11-27-2020",value:"19"},{time:"11-28-2020",value:"34"}]},memory:{backgroundColor:"#FFE74C",borderColor:"#35A7FF",stats:[{time:"11-26-2020",value:"11"},{time:"11-27-2020",value:"1"},{time:"11-28-2020",value:"13"}]}},apifetch:{loading:!1}},ke=L({name:"dashboard",initialState:Oe,reducers:{someAction:function(e,a){}}}),Ce=(ke.actions,Object(Y.a)([function(e){return e.dashboard||Oe}],(function(e){return e}))),Ae=t(318);function Se(e){var a=T();return console.log({props:e}),r.createElement(r.Fragment,null,r.createElement(w.a,{className:"chartsDiv"},r.createElement(j.a,{className:a.chartTitle},e.name),r.createElement(Ae.Line,{data:e.data,options:{responsive:!0,maintainAspectRatio:!0}})))}var Ne=function(e,a,t,n,r){return{labels:t,datasets:[{label:a,data:e,fill:!0,backgroundColor:n,borderColor:r}]}};function Ie(e){var a=e.chartsData.labels;return console.log({labels:a}),r.createElement(r.Fragment,null,r.createElement(w.a,{className:"chartsLayout"},r.createElement(Se,{data:Ne(e.chartsData.stats.cpu.stats.map((function(e){return parseInt(e.value)})),"Cpu Usage",a,e.chartsData.stats.cpu.backgroundColor,e.chartsData.stats.cpu.borderColor),name:"Cpu Usage"}),r.createElement(Se,{data:Ne(e.chartsData.stats.disk.stats.map((function(e){return e.value})),"Disk Usage",a,e.chartsData.stats.disk.backgroundColor,e.chartsData.stats.disk.borderColor),name:"Disk Usage"}),r.createElement(Se,{data:Ne(e.chartsData.stats.memory.stats.map((function(e){return e.value})),"Memory Usage",a,e.chartsData.stats.memory.backgroundColor,e.chartsData.stats.memory.borderColor),name:"Memory Usage"}),r.createElement(Se,{data:Ne(e.chartsData.stats.io.stats.map((function(e){return e.value})),"IO Usage",a,e.chartsData.stats.io.backgroundColor,e.chartsData.stats.io.borderColor),name:"IO Usage"})))}var _e=Object(r.memo)((function(e){T(),R({key:ke.name,reducer:ke.reducer}),q({key:ke.name,saga:xe}),ke.actions;var a=Object(o.d)(Ce);return s.a.createElement(s.a.Fragment,null,s.a.createElement(Ie,{chartsData:a}))}));function De(e){var a=Object(m.g)().id;return Object(r.useEffect)((function(){console.log(a)}),[a]),r.createElement("div",null,a)}var We=t(40),Be=t(692),Te=t(693),Fe=t(694),Le=t(695),Pe=t(696),Re=t(697),qe=t(708);function He(e){var a=T(),t=r.useState(0),n=Object(We.a)(t,2),s=n[0],i=n[1],o=e.columns,c=e.rows,l=e.header,m=r.useState(10),u=Object(We.a)(m,2),d=u[0],p=u[1];return r.createElement(r.Fragment,null,r.createElement(j.a,{variant:"h5",className:a.centerAlign},l),r.createElement(w.a,{className:a.tableRoot},r.createElement(Be.a,{className:a.container},r.createElement(Te.a,{stickyHeader:!0,"aria-label":"sticky table"},r.createElement(Fe.a,null,r.createElement(Le.a,null,o.map((function(e){return r.createElement(Pe.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.createElement(Re.a,null,c.slice(s*d,s*d+d).map((function(e){return r.createElement(Le.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},o.map((function(a){var t=e[a.id];return r.createElement(Pe.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)})))}))))),r.createElement(qe.a,{rowsPerPageOptions:[10,25,100],component:"div",count:c.length,rowsPerPage:d,page:s,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){p(+e.target.value),i(0)}})))}var ze=Object(Y.a)([function(e){return e.globalApplication||V}],(function(e){return e})),Ue=z.a.mark(Ze),Me=z.a.mark(Ve);function Ze(){var e,a,t,n,r,s;return z.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(U.b)($e);case 2:return i.sent,i.next=5,Object(U.b)(ze);case 5:return e=i.sent,(a=new Headers).append("Authorization",e.jwtToken),i.next=10,fetch(ee(Q),{method:"GET",headers:a,redirect:"follow"});case 10:return t=i.sent,i.next=13,t.json();case 13:if(n=i.sent,console.log(n),200!==n.status){i.next=21;break}return r=[],s=[],n.containers.map((function(e,a){Boolean(e.isAlive)?r.push({base_image:e.baseImage,container_id:e.containerId,created_at:e.startedAt,sr_no:a+1,started_at:e.startedAt}):s.push({base_image:e.baseImage,container_id:e.containerId,created_at:e.createdAt,sr_no:a+1,stopped_at:e.startedAt})})),i.next=21,Object(U.a)(Ye.loadContainers({runningContainers:r,stoppedContainers:s}));case 21:case"end":return i.stop()}}),Ue)}function Ve(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(Ye.fetchContainers.type,Ze);case 2:case"end":return e.stop()}}),Me)}var Ge={runningColumns:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"container_id",label:"Container Id",minWidth:100},{id:"base_image",label:"Base Image",minWidth:100,align:"right"},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"started_at",label:"Started At",minWidth:150,align:"right"}],stoppedColumns:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"container_id",label:"Container Id",minWidth:100},{id:"base_image",label:"Base Image",minWidth:100,align:"right"},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"stopped_at",label:"Stopped At",minWidth:150,align:"right"}],runningContainerData:[{base_image:"base",container_id:"c_id",created_at:"10-11-2019",sr_no:1,started_at:"10-03-2021"}],stoppedContainerData:[],fetchApi:{loading:!1}},Je=L({name:"containerlist",initialState:Ge,reducers:{fetchContainers:function(e){e.fetchApi.loading=!0},loadContainers:function(e,a){e.fetchApi.loading=!1,e.runningContainerData=a.payload.runningContainers,e.stoppedContainerData=a.payload.stoppedContainers}}}),Ye=Je.actions,$e=Object(Y.a)([function(e){return e.containerlist||Ge}],(function(e){return e}));function Xe(e){var a=(R({key:Je.name,reducer:Je.reducer}),q({key:Je.name,saga:Ve}),{actions:Je.actions}).actions,t=Object(o.c)(),n=Object(r.useState)(0),s=Object(We.a)(n,2),i=s[0],c=(s[1],Object(o.d)($e));return Object(r.useEffect)((function(){t(a.fetchContainers())}),[i]),r.createElement(r.Fragment,null,r.createElement(He,{columns:c.runningColumns,rows:c.runningContainerData,header:"Running Containers"}),r.createElement(He,{columns:c.stoppedColumns,rows:c.stoppedContainerData,header:"Stopped Containers"}))}var Ke=z.a.mark(ea),Qe=z.a.mark(aa);function ea(){var e;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(U.b)(sa);case 2:return a.sent,e={status:200,images:[{size:1,imageId:1,createdAt:"1",baseImage:"1"},{size:2,imageId:2,createdAt:"2",baseImage:"2"}]}.images.map((function(e,a){return{size:e.size,sr_no:a+1,images_id:e.imageId,created_at:e.createdAt,base_image:e.baseImage}})),a.next=7,Object(U.a)(ra.loadImages({imagesListData:e}));case 7:case"end":return a.stop()}}),Ke)}function aa(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(ra.fetchImages.type,ea);case 2:case"end":return e.stop()}}),Qe)}var ta={imagesListColumn:[{id:"sr_no",label:"Sr No.",minWidth:50},{id:"images_id",label:"Image Id",minWidth:100,align:"left"},{id:"base_image",label:"Base Image",minWidth:100},{id:"created_at",label:"Created At",minWidth:100,align:"right"},{id:"size",label:"Size",minWidth:150,align:"right"}],imagesListData:[],fetchApi:{loading:!1}},na=L({name:"imagesList",initialState:ta,reducers:{fetchImages:function(e){e.fetchApi.loading=!0},loadImages:function(e,a){e.fetchApi.loading=!1,e.imagesListData=a.payload.imagesListData}}}),ra=na.actions,sa=Object(Y.a)([function(e){return e.imagesList||ta}],(function(e){return e}));function ia(e){var a=(R({key:na.name,reducer:na.reducer}),q({key:na.name,saga:aa}),{actions:na.actions}).actions,t=Object(o.d)(sa),n=Object(r.useState)(0),s=Object(We.a)(n,2),i=s[0],c=(s[1],Object(o.c)());return Object(r.useEffect)((function(){c(a.fetchImages())}),[i]),r.createElement(r.Fragment,null,r.createElement(He,{columns:t.imagesListColumn,rows:t.imagesListData,header:"All Images"}))}var oa=t(320),ca=t.n(oa),la=t(321),ma=t.n(la),ua=t(319);var da=[{name:"Dashboard",path:"/system/dashboard",icon:t.n(ua).a},{name:"containers",path:"/system/containers",icon:ca.a},{name:"images",path:"/system/images",icon:ma.a}],pa=t(43),ga=t(700),ha=t(699),fa=t(684),ba=t(709),Ea=t(701),va=t(690),wa=t(322),ya=t.n(wa),ja=t(324),xa=t.n(ja),Oa=t(323),ka=t.n(Oa),Ca=t(698),Aa=t(702),Sa=t(703),Na=t(5);function Ia(e){var a,t,n=T(),s=Object(pa.a)(),i=r.useState(!1),o=Object(We.a)(i,2),c=o[0],l=o[1],u=Object(m.f)();return r.createElement(r.Fragment,null,r.createElement(ga.a,{position:"fixed",className:Object(Na.a)(n.appBar,Object(_.a)({},n.appBarShift,c))},r.createElement(ha.a,null,r.createElement(fa.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(Na.a)(n.menuButton,Object(_.a)({},n.hide,c))},r.createElement(ya.a,null)),r.createElement(j.a,{variant:"h6",noWrap:!0},"Container Resource Monitor"))),r.createElement(ba.a,{variant:"permanent",className:Object(Na.a)(n.drawer,(a={},Object(_.a)(a,n.drawerOpen,c),Object(_.a)(a,n.drawerClose,!c),a)),classes:{paper:Object(Na.a)((t={},Object(_.a)(t,n.drawerOpen,c),Object(_.a)(t,n.drawerClose,!c),t))}},r.createElement("div",{className:n.toolbar},r.createElement(fa.a,{onClick:function(){l(!1)}},"rtl"===s.direction?r.createElement(ka.a,null):r.createElement(xa.a,null))),r.createElement(Ea.a,null),r.createElement(va.a,null,da.map((function(e,a){return r.createElement(Ca.a,{button:!0,key:a,selected:u.location.pathname===e.path,onClick:function(){u.location.pathname!==e.path&&u.push(e.path)}},r.createElement(Aa.a,null,r.createElement(e.icon)),r.createElement(Sa.a,{primary:e.name}))})))))}var _a=function(e){var a=T();return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:a.root},s.a.createElement(v.a,null),s.a.createElement(Ia,null),s.a.createElement("main",{className:a.content},s.a.createElement(m.c,null,[{path:"/system/dashboard",routeComponent:_e,isExact:!0},{path:"/system/container/:id",routeComponent:De,isExact:!0},{path:"/system/containers",routeComponent:Xe,isExact:!0},{path:"/system/images",routeComponent:ia,isExact:!0}].map((function(e,a){return s.a.createElement(m.a,{exact:e.isExact,path:e.path,component:e.routeComponent})})),s.a.createElement(m.a,{component:f})))))};function Da(e){var a=T(),t=Object(m.f)(),n=Object(k.a)(),s=n.register,i=n.handleSubmit,c=n.errors;Object(o.c)();return r.createElement(r.Fragment,null,r.createElement(E.a,{container:!0,component:"main",className:a.authroot},r.createElement(v.a,null),r.createElement(E.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.createElement(E.a,{item:!0,xs:12,sm:8,md:5,component:w.a,elevation:6,square:!0},r.createElement("div",{className:a.paper},r.createElement(j.a,{component:"h1",variant:"h5"},"Register Your Email with us"),r.createElement("form",{className:a.form,onSubmit:i((function(e){console.log(e)})),noValidate:!0},r.createElement(x.a,{variant:"outlined",helperText:Boolean(c.message)&&"Please Enter Name",margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",autoComplete:"name",autoFocus:!0,inputRef:s({required:!0}),error:Boolean(c.name)}),r.createElement(x.a,{variant:"outlined",helperText:Boolean(c.email)&&"Please Enter Valid Email",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:s({required:!0,maxLength:30,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),error:Boolean(c.email)}),r.createElement(x.a,{variant:"outlined",helperText:Boolean(c.message)&&"Please Enter Valid Message",margin:"normal",multiline:!0,rows:3,required:!0,fullWidth:!0,label:"Message",name:"message",autoComplete:"message",autoFocus:!0,inputRef:s({required:!0,minLength:10}),error:Boolean(c.message)}),r.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Contact Us"),r.createElement(E.a,{container:!0},r.createElement(O.a,{onClick:function(){t.goBack()},fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Go Back")))))))}function Wa(){var e=Object(b.a)().i18n;return r.createElement(l.a,{hashType:"slash"},r.createElement(c.a,{titleTemplate:"%s - Resource Monitor",defaultTitle:"Resource Monitor",htmlAttributes:{lang:e.language}},r.createElement("meta",{name:"description",content:"A React Boilerplate application"})),r.createElement(m.c,null,r.createElement(m.a,{exact:!0,path:"/",component:h}),r.createElement(m.a,{path:"/auth",component:ye}),r.createElement(m.a,{path:"/system",component:_a}),r.createElement(m.a,{path:"/contact-us",component:Da}),r.createElement(m.a,{component:f})),r.createElement(p,null))}var Ba=t(31),Ta=t(330),Fa=t(53);function La(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(Fa.c)(Object(I.a)({},e))}var Pa=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,716)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),r(e),s(e),i(e)}))},Ra=t(329),qa=t(142),Ha=t(328),za=t(229),Ua={},Ma={en:{translation:za}};!function e(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ua,n=arguments.length>2?arguments[2]:void 0;Object.keys(a).forEach((function(r){var s=n?"".concat(n,".").concat(r):r;"object"===typeof a[r]?(t[r]={},e(a[r],t[r],s)):t[r]=s}))}(za);Ra.a.use(qa.e).use(Ha.a).init({resources:Ma,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var Za=function(){var e=Object(Ta.a)({}),a=e.run,t=[e],n=[Object(P.a)({createReducer:La,runSaga:a})];return Object(F.a)({reducer:La(),middleware:[].concat(Object(Ba.a)(Object(F.c)()),t),devTools:!1,enhancers:n})}(),Va=document.getElementById("root");i.render(r.createElement(o.a,{store:Za},r.createElement(c.b,null,r.createElement(r.StrictMode,null,r.createElement(Wa,null)))),Va),Pa()}},[[645,1,2]]]);