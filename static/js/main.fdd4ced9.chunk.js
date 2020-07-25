(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),m=t.n(l),c=(t(85),t(86),t(87),t(141)),o=t(67),i=t(68),s=t(75),u=t(74),d=t(38),E=function(e){return r.a.createElement(d.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},p=t(145),b=t(6),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E,{pad:{left:"medium",right:"small",vertical:"medium"}},r.a.createElement(d.a,{className:"logo-nav",direction:"row",background:"brand",style:{cursor:"hand"}},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){e.props.history.push("/")}},"We"),r.a.createElement("span",{onClick:function(){e.props.history.push("/")}},"-\u0936\u094d\u0935\u093e\u0938"))),r.a.createElement(p.a,{default:!0,label:"Register a Patient",onClick:function(){e.props.history.push("/registration")}}))}}]),t}(r.a.Component),h=Object(b.e)(g),f=t(125),y=t(126),v=t(127),S=t(154),k=t(129),x=t(130),w=t(147),C=function(){return r.a.createElement(d.a,{direction:"row",gap:"xxsmall",justify:"center"},r.a.createElement(S.a,{a11yTitle:"Share feedback on Github",href:"https://www.instagram.com/",icon:r.a.createElement(f.a,{color:"white"})}),r.a.createElement(S.a,{a11yTitle:"Chat with us on Slack",href:"https://www.facebook.com/",icon:r.a.createElement(y.a,{color:"white"})}),r.a.createElement(S.a,{a11yTitle:"Follow us on Twitter",href:"https://twitter.com/",icon:r.a.createElement(v.a,{color:"white"})}))},O=function(){return r.a.createElement(c.a,{theme:k.a},r.a.createElement(x.a,{background:"brand",pad:"small"},r.a.createElement(d.a,{direction:"row",gap:"small"},r.a.createElement(S.a,{textAlign:"center",href:"https://docs.google.com/presentation/d/1hcvVueuLn2wVje5yD4WDm5b7TBJSpLE5D8bz9ckqLrY/edit?usp=sharing",size:"xsmall"},"About Us"),r.a.createElement(w.a,{textAlign:"center",size:"xsmall"},"\xa9Copyright")),r.a.createElement(C,null),r.a.createElement(d.a,{align:"center",direction:"row",gap:"xsmall"},r.a.createElement(w.a,{alignSelf:"center",color:"white",size:"xx-large",style:{fontFamily:"Kalam"}},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"We"),r.a.createElement("span",null,"-\u0936\u094d\u0935\u093e\u0938"))))))},j=t(53),q=t(14),P=t(72),R=t(1),A=t(135),I=t(133),_=t(140),D=t(146),H=t(148),B=t(142),V=t(149),z=t(150),F=t(151),M=t(52),N=t(73),T=t(131),$=t(132),J=t(144),L=function(e){var a=r.a.useState(!0),t=Object(q.a)(a,2),n=t[0],l=t[1],m=function(){l(void 0),e.setNotification(!1)};return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(J.a,{position:"top",modal:!0,margin:{vertical:"medium",horizontal:"small"},onEsc:m,responsive:!1,plain:!0},r.a.createElement(d.a,{align:"center",direction:"row",gap:"small",justify:"between",round:"medium",elevation:"medium",pad:{vertical:"xsmall",horizontal:"small"},background:"status-ok"},r.a.createElement(d.a,{align:"center",direction:"row",gap:"xsmall"},r.a.createElement(T.a,null),r.a.createElement(w.a,null,e.message)),r.a.createElement(p.a,{icon:r.a.createElement($.a,null),onClick:m,plain:!0}))))};function W(){var e=Object(P.a)(["\n      border-top-left-radius: ___CSS_0___;\n      border-top-right-radius: ___CSS_1___;\n      font-weight: bold;\n    "]);return W=function(){return e},e}var G=Object(N.deepMerge)(M.grommet,{tab:{color:"text",active:{background:"background-back"},hover:{background:"background-back",color:"control"},border:{side:"bottom",color:"background-back",active:{color:"border"},hover:{color:"control"}},pad:"small",margin:"none",extend:function(e){e.theme;return Object(R.css)(W())}}}),U=function(e){var a={name:"",email:"",sex:"",comorbities:"",age:"",smoking:""},t=r.a.useState(a),n=Object(q.a)(t,2),l=n[0],m=n[1];return r.a.createElement(d.a,{fill:!0,align:"center"},r.a.createElement(d.a,{width:"large"},r.a.createElement(I.a,{value:l,onChange:function(e){m(e)},onReset:function(){return m(a)},onSubmit:function(a){console.log("Submit",a.value,a.touched),e.nextIndex(1)}},r.a.createElement(_.a,{label:"Name",name:"name"},r.a.createElement(D.a,{name:"name",required:!0})),r.a.createElement(_.a,{label:"Email",name:"email",required:!0},r.a.createElement(H.a,{name:"email",mask:[{regexp:/^[\w\-_.]+$/,placeholder:"example"},{fixed:"@"},{regexp:/^[\w]+$/,placeholder:"my"},{fixed:"."},{regexp:/^[\w]+$/,placeholder:"com"}]})),r.a.createElement(_.a,{label:"Sex",name:"Sex"},r.a.createElement(B.a,{name:"sex",options:["male","female","other"],required:!0})),r.a.createElement(_.a,{label:"Age",name:"age",pad:!0},r.a.createElement(D.a,{name:"age",required:!0,type:"number"})),r.a.createElement(_.a,{label:"Smoking History",name:"smoking",pad:!0},r.a.createElement(D.a,{name:"smoking",required:!0,type:"number"})),r.a.createElement(_.a,{label:"Any other co-morbidities",name:"comorbities"},r.a.createElement(V.a,{name:"comorbities"})),r.a.createElement(d.a,{direction:"row",justify:"center",gap:"small",margin:{top:"medium"}},r.a.createElement(p.a,{type:"reset",label:"Reset"}),r.a.createElement(p.a,{type:"submit",label:"Continue",primary:!0})))))},Y=function(e){var a={temperature:"",pulse:"",resprirationRate:"",breathingPattern:"",bloodPressure:""},t=r.a.useState(a),n=Object(q.a)(t,2),l=n[0],m=n[1];return r.a.createElement(d.a,{fill:!0,align:"center"},r.a.createElement(d.a,{width:"large"},r.a.createElement(I.a,{value:l,onChange:function(e){m(e)},onReset:function(){return m(a)},onSubmit:function(a){console.log("Submit",a.value,a.touched),e.nextIndex(2)}},r.a.createElement(_.a,{label:"Temperature",name:"temperature"},r.a.createElement(D.a,{name:"temperature",placeholder:"37\u2103",required:!0})),r.a.createElement(_.a,{label:"Blood Pressure",name:"bloodPressure",required:!0},r.a.createElement(H.a,{name:"bloodPressure",mask:[{regexp:/^[\d]+$/,placeholder:"80"},{fixed:"/"},{regexp:/^[\d]+$/,placeholder:"120"}]})),r.a.createElement(_.a,{label:"Breathing Pattern",name:"breathingPattern"},r.a.createElement(D.a,{name:"breathingPattern",required:!0})),r.a.createElement(_.a,{label:"Respiration Rate",name:"respirationRate",pad:!0},r.a.createElement(D.a,{name:"respirationRate",required:!0,type:"number"})),r.a.createElement(_.a,{label:"Pulse",name:"pulse",pad:!0},r.a.createElement(D.a,{name:"pulse",required:!0,type:"number"})),r.a.createElement(d.a,{direction:"row",justify:"center",gap:"small",margin:{top:"medium"}},r.a.createElement(p.a,{type:"reset",label:"Reset"}),r.a.createElement(p.a,{type:"submit",label:"Continue",primary:!0})))))},K=function(e){var a={cough:"",sputumConsistency:"",sputumAmount:"",sputumColor:"",sputumSmell:"",sputumPostural:"",blessOnset:"",blessDuration:"",blessSeverity:"",blessVariation:"",chestSite:"",chestOnset:"",chestDuration:"",chestSeverity:"",others:"",hemoptysis:""},t=r.a.useState(a),n=Object(q.a)(t,2),l=n[0],m=n[1];return r.a.createElement(d.a,{fill:!0,align:"center"},r.a.createElement(d.a,{width:"large"},r.a.createElement(I.a,{value:l,onChange:function(e){m(e)},onReset:function(){return m(a)},onSubmit:function(a){console.log("Submit",a.value,a.touched),e.nextIndex(3)}},r.a.createElement(_.a,{label:"Cough",name:"cough"},r.a.createElement(B.a,{name:"cough",options:["Acute","Sub-Acute","Chronic","Noctural"],required:!0})),r.a.createElement(_.a,{label:"Sputum Consistency",name:"sputumConsistency"},r.a.createElement(D.a,{name:"sputumConsistency",required:!0})),r.a.createElement(_.a,{label:"Sputum Amount",name:"sputumAmount"},r.a.createElement(D.a,{name:"sputumAmount",required:!0})),r.a.createElement(_.a,{label:"Sputum Color",name:"sputumColor"},r.a.createElement(D.a,{name:"sputumColor",required:!0})),r.a.createElement(_.a,{label:"Sputum Smell",name:"sputumSmell"},r.a.createElement(D.a,{name:"sputumSmell",required:!0})),r.a.createElement(_.a,{label:"Sputum Postural Variations",name:"sputumPostural"},r.a.createElement(D.a,{name:"sputumPostural",required:!0})),r.a.createElement(_.a,{label:"Breathlessness Onset",name:"blessOnset"},r.a.createElement(D.a,{name:"blessOnset",required:!0})),r.a.createElement(_.a,{label:"Breathlessness Duration",name:"blessDuration"},r.a.createElement(D.a,{name:"breathingPattern",required:!0})),r.a.createElement(_.a,{label:"Breathlessness Severity",name:"blessSeverity",pad:!0},r.a.createElement(D.a,{name:"blessSeverity",required:!0})),r.a.createElement(_.a,{label:"Breathlessness Variation",name:"blessVariation",pad:!0},r.a.createElement(D.a,{name:"blessVariation",required:!0})),r.a.createElement(_.a,{label:"Chest Pain Site",name:"chestSite",pad:!0},r.a.createElement(D.a,{name:"chestSite",required:!0})),r.a.createElement(_.a,{label:"Chest Pain Onset",name:"chestOnset",pad:!0},r.a.createElement(D.a,{name:"chestOnset",required:!0})),r.a.createElement(_.a,{label:"Chest Pain Duration",name:"chestDuration",pad:!0},r.a.createElement(D.a,{name:"chestDuration",required:!0})),r.a.createElement(_.a,{label:"Chest Pain Severity",name:"chestSeverity",pad:!0},r.a.createElement(D.a,{name:"chestSeverity",required:!0})),r.a.createElement(_.a,{label:"Other observations",name:"others",pad:!0},r.a.createElement(V.a,{name:"others"})),r.a.createElement(_.a,{label:"Hemoptysis",name:"hemoptysis"},r.a.createElement(B.a,{name:"hemoptysis",options:["Frank","Spurious","Sudo-Hemoptysis"],required:!0})),r.a.createElement(d.a,{direction:"row",justify:"center",gap:"small",margin:{top:"medium"}},r.a.createElement(p.a,{type:"reset",label:"Reset"}),r.a.createElement(p.a,{type:"submit",label:"Continue",primary:!0})))))},Q=function(e){var a=r.a.useState({sample1:"",sample2:"",sample3:""}),t=Object(q.a)(a,2);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{align:"center"},r.a.createElement(d.a,{width:"large",gap:"medium"},r.a.createElement(p.a,{label:"Record Sample 1"}),r.a.createElement(p.a,{label:"Record Sample 2"}),r.a.createElement(p.a,{label:"Record Sample 3"}))),r.a.createElement(d.a,{direction:"row",justify:"center",gap:"small",margin:{top:"medium"}},r.a.createElement(p.a,{type:"reset",label:"Reset"}),r.a.createElement(p.a,{type:"submit",onClick:function(){return e.setNotification(!0)},label:"Submit",primary:!0})))},X=function(){var e=r.a.useState(),a=Object(q.a)(e,2),t=a[0],n=a[1],l=function(e){return n(e)},m=r.a.useState(!1),o=Object(q.a)(m,2),i=o[0],s=o[1];return r.a.createElement(c.a,{theme:G,background:"dark-1",style:{minHeight:"79vh"}},r.a.createElement(d.a,{background:"dark-1",height:"auto",style:{overflow:"auto"},margin:{bottom:"medium"},fill:!0},r.a.createElement(z.a,{margin:"none",activeIndex:t,onActive:l,flex:!0},r.a.createElement(F.a,{title:"General History",icon:r.a.createElement(A.a,null)},r.a.createElement(d.a,{fill:!0,pad:"large",background:"dark-1"},r.a.createElement(U,{nextIndex:l}))),r.a.createElement(F.a,{title:"Vitals",icon:r.a.createElement(A.a,null)},r.a.createElement(d.a,{fill:!0,pad:"large",align:"center",background:"dark-1"},r.a.createElement(Y,{nextIndex:l}))),r.a.createElement(F.a,{title:"Systemic History",icon:r.a.createElement(A.a,null)},r.a.createElement(d.a,{fill:!0,pad:"large",align:"center",background:"dark-1"},r.a.createElement(K,{nextIndex:l}))),r.a.createElement(F.a,{title:"Sounds",icon:r.a.createElement(A.a,null)},r.a.createElement(d.a,{pad:"large",align:"center",background:"dark-1"},r.a.createElement(Q,{setNotification:s})))),i&&r.a.createElement(L,{setNotification:s,message:"Your auscultation samples suggest that you are COVID -ve with a 80% confidence"})))},Z=t(152),ee=t(153),ae=t(139),te=t(136),ne=t(137),re=t(138),le={global:{font:{family:'Comic Sans MS, -apple-system,\n         BlinkMacSystemFont, \n         "Segoe UI", \n         Roboto'}},card:{elevation:"none",background:"light-2",footer:{pad:"medium"}}},me=function(e){var a=r.a.useState(!1),t=Object(q.a)(a,2),n=t[0],l=t[1],m=r.a.useState(!1),o=Object(q.a)(m,2),i=o[0],s=o[1],u=e.vals,E=function(e){var a=Object.assign({},e),t=n?te.a:A.a;return r.a.createElement(p.a,Object.assign({hoverIndicator:"dark-2",icon:r.a.createElement(t,{color:"brand"})},a))};return r.a.createElement(c.a,{theme:le},r.a.createElement(d.a,{pad:"medium",align:"start"},r.a.createElement(d.a,{elevation:"large",width:"medium"},r.a.createElement(d.a,{pad:{horizontal:"medium"},responsive:!1},r.a.createElement(Z.a,{level:"3",margin:{vertical:"medium"}},u.name),r.a.createElement(ee.a,{margin:{top:"none"}},r.a.createElement("em",null,"Latest Result"),": COVID Positive with 60% confidence",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("em",null,"Recorded Auscultations"),": ",u.auscultations,r.a.createElement("br",null))),r.a.createElement(d.a,null,r.a.createElement(d.a,{direction:"row",align:"center",gap:"small"},r.a.createElement(p.a,{icon:r.a.createElement(ne.a,{color:i?"red":void 0}),hoverIndicator:!0,onClick:function(){s(!i)}}),r.a.createElement(p.a,{icon:r.a.createElement(re.a,{color:"plain"}),hoverIndicator:!0}),r.a.createElement(ee.a,null,"Learn More"),r.a.createElement(E,{onClick:function(){return l(!n)}}))),r.a.createElement(ae.a,{open:n},r.a.createElement(d.a,null,r.a.createElement(w.a,{margin:"medium",color:"dark-3"},"Email: ",u.email,r.a.createElement("br",null),"Sex: ",u.sex,r.a.createElement("br",null),"Smoking History: ",u.smokingHistory," pack-years",r.a.createElement("br",null),r.a.createElement(S.a,{label:"Get Medical History",href:"#"})))))))},ce=function(){return r.a.createElement(d.a,{direction:"row",flex:"true"},[{name:"Mat Henry",email:"mat@gmail.com",sex:"Male",smokingHistory:"0",auscultations:20},{name:"John Doe",email:"jdoe@gmail.com",sex:"Male",auscultations:3,smokingHistory:"10"},{name:"Jane Doe",email:"janedoe@gmail.com",sex:"Female",auscultations:5,smokingHistory:"2"}].map((function(e){return r.a.createElement(me,{vals:e})})))},oe=function(){return r.a.createElement(d.a,{fill:!0,style:{width:"100%",textAlign:"left",color:"white"},margin:"medium"},r.a.createElement(Z.a,{level:"1"},"Current Patients"),r.a.createElement(ce,null))},ie={global:{colors:{"custom-dark":"#282c34"},font:{family:"Raleway",size:"18px",height:"20px"}}};var se=function(){return r.a.createElement(c.a,{theme:ie},r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement(b.a,{exact:!0,path:"/",component:oe}),r.a.createElement(b.a,{exact:!0,path:"/registration",component:X})),r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){e.exports=t(115)},85:function(e,a,t){},86:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},87:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.fdd4ced9.chunk.js.map