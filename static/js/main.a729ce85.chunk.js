(this.webpackJsonpfirstportfolio=this.webpackJsonpfirstportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),r=a.n(o),i=(a(20),a(2)),c=a(6),s=a(3),u=a(5),m=a(4),g=(a(21),a(22),a(23),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"info-header"}," Hej"),l.a.createElement("div",{className:"info-headline"},"tja tja tja"),l.a.createElement("div",{className:"info-text"},l.a.createElement("div",null,l.a.createElement("h3",null,"tjenare"),"hejsan tjo tjo gott de ska bli med kaffe och fika och vem \xe4r det som har baka di h\xe4r bullorna")),l.a.createElement("div",{className:"info-links"},l.a.createElement("div",{className:"logo1",placeholder:"facebook"},"facebook"),l.a.createElement("div",{className:"logo1",placeholder:"instagram"},"instagram"),l.a.createElement("div",{className:"logo1",placeholder:"github"},"github"),l.a.createElement("div",{className:"logo1",placeholder:"linkedin"},"linkedin")),l.a.createElement("div",{className:"info-footer"},"RingMig@hvaftrudner.com"))}}]),a}(l.a.Component)),f=(a(24),a(1));var d=function(){var e=Object(f.b)({config:{duration:2e3},opacity:1,from:{opacity:0}});return l.a.createElement(f.a.div,{style:e},l.a.createElement("div",{className:"try"},l.a.createElement("p",null,"First try for animated box"),l.a.createElement("p",null,"tja tja vem har baka di h\xe4r bullorna"),l.a.createElement("a",{className:"box",href:"https://google.com",target:"_blank",rel:"noopener noreferrer"},"tja"),l.a.createElement("div",{className:"box"},"hej"),l.a.createElement("div",{className:"box"},"ola"),l.a.createElement("div",{className:"box"},"tjo")))},p=a(9),b=a(12),v=a(10),h=(a(25),["tja","tjo","tjimm"]),E={mass:30,tension:1500,friction:200};var j=function(){var e=Object(n.useState)(!0),t=Object(v.a)(e,2),a=t[0],o=(t[1],Object(f.c)(h.length,{config:E,opacity:a?1:0,x:a?0:20,height:a?80:0,width:a?200:0,from:{opacity:0,x:20,height:0,width:0}}));return l.a.createElement("div",null,o.map((function(e,t){var a=e.x,n=e.height,o=Object(b.a)(e,["x","height"]);return l.a.createElement(f.a.div,{key:h[t],className:"test",style:Object(p.a)({},o,{transform:a.interpolate((function(e){return"translate3d(0,".concat(e,"px,0)")}))})},l.a.createElement(f.a.div,{style:{height:n}},h[t]))})))},k=(a(26),function(){return l.a.createElement("div",{className:"neon-login"},l.a.createElement("input",{placeholder:"Username",type:"text",className:"username-input"}),l.a.createElement("input",{placeholder:"Password",type:"password",className:"password-input"}),l.a.createElement("div",{className:"login-form"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),"login"))}),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isToggleOn:!1,isToggleOnDropBar:!1,isToggleOnProjects:!1,isToggleLogin:!1},n.renderInfo=n.renderInfo.bind(Object(s.a)(n)),n.toggleClick=n.toggleClick.bind(Object(s.a)(n)),n.toggleClickDropBar=n.toggleClickDropBar.bind(Object(s.a)(n)),n.toggleClickProjects=n.toggleClickProjects.bind(Object(s.a)(n)),n.toggleClickLogin=n.toggleClickLogin.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"renderInfo",value:function(){return l.a.createElement("div",{className:"render-info"},"Info")}},{key:"toggleClick",value:function(){this.setState({isToggleOn:!this.state.isToggleOn,isToggleOnDropBar:!1,isToggleOnProjects:!1})}},{key:"toggleClickDropBar",value:function(){this.setState({isToggleOnDropBar:!this.state.isToggleOnDropBar,isToggleOn:!1,isToggleOnProjects:!1})}},{key:"toggleClickProjects",value:function(){this.setState({isToggleOnProjects:!this.state.isToggleOnProjects,isToggleOn:!1,isToggleOnDropBar:!1})}},{key:"toggleClickLogin",value:function(){this.setState({isToggleOnProjects:!1,isToggleOn:!1,isToggleOnDropBar:!1,isToggleLogin:!this.state.isToggleLogin})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"firstDiv"},l.a.createElement("p",null,"Kuken"),l.a.createElement("div",{className:"flexbox1",onClick:this.toggleClick},l.a.createElement("h3",null,"About me")),l.a.createElement("div",{className:"flexbox1",onClick:this.toggleClickDropBar},l.a.createElement("h3",null,"CV")),l.a.createElement("div",{className:"flexbox1",onClick:this.toggleClickProjects},l.a.createElement("h3",null,"projects")),l.a.createElement("div",{className:"flexbox1"},l.a.createElement("h3",null,"capability")),l.a.createElement("div",{className:"flexbox1"},l.a.createElement("h3",null,"private")),l.a.createElement("div",{className:"flexbox1",onClick:this.toggleClickLogin},l.a.createElement("h3",null,"login")),this.state.isToggleOn?l.a.createElement(g,null):null,this.state.isToggleOnDropBar?l.a.createElement(d,null):null,this.state.isToggleLogin?l.a.createElement(k,null):null),l.a.createElement("div",{className:"navBar-renderbox"},this.state.isToggleOnProjects?l.a.createElement(j,null):null))}}]),a}(l.a.Component);a(27);var x=function(){var e=Object(f.b)({config:{duration:1e4},opacity:1,from:{opacity:0}}),t=Object(f.b)({config:{duration:5e3},opacity:1,from:{opacity:0}});return l.a.createElement(f.a.div,{style:e},l.a.createElement("div",{className:"first"},l.a.createElement("h3",null,"tja"),l.a.createElement(f.a.div,{style:t,className:"second"}," Tjena ")))},y=(a(28),[{id:0,backgroundColor:"black"},{id:1,backgroundColor:"red"},{id:2,backgroundColor:"yellow"},{id:3,backgroundColor:"green"}]),N={mass:1,tension:280,friction:120},C=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],o=t[1],r=Object(f.d)(y[a],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:N});return Object(n.useEffect)((function(){return setInterval((function(){return o((function(e){return(e+1)%4}))}),2e3)}),[]),r.map((function(e){var t=e.item,a=e.props,n=e.key;return l.a.createElement(f.a.div,{key:n,className:"slider",style:Object(p.a)({},a,{backgroundColor:"".concat(t.backgroundColor)})},l.a.createElement("p",null,"Hvaftrudner first portfolio prototype."))}))},T=(a(29),[{id:0,text:"hall\xe5 d\xe4r"},{id:1,text:"hejsan svejsan"},{id:2,text:"v\xe4lkommen!"},{id:3,text:"tjo \xe5 tjimm"}]),S={mass:20,tension:400,friction:200},w=function(){var e=Object(n.useState)(0),t=Object(v.a)(e,2),a=t[0],o=t[1],r=Object(f.d)(T[a],(function(e){return e.id}),{from:{opacity:0,textShadow:"0 0 10px #ff4da6",boxShadow:"0px 0px 5px #e60073, 0 0 5px #ff4da6 inset"},enter:{opacity:1,textShadow:"0 0 20px #ff4da6",color:"white",boxShadow:"0px 0px 30px #e60073, 0 0 30px #ff4da6 inset"},leave:{opacity:0,textShadow:"0 0 20px #ff4da6",boxShadow:"0px 0px 5px #e60073, 0 0 5px #ff4da6 inset"},config:S});return Object(n.useEffect)((function(){return setInterval((function(){return o((function(e){return(e+1)%4}))}),1e3)}),[]),r.map((function(e){e.item;var t=e.props,n=(e.key,Object(b.a)(e,["item","props","key"]));return l.a.createElement(f.a.div,{key:T[a],className:"neonsign",style:Object(p.a)({},t,{},n)},"TJENIS")}))};var B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleInfo=function(){n.setState({info:!n.state.info})},n.state={info:!1},n.toggleInfo=n.toggleInfo.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"testrender",value:function(){Object(n.useState)(!0)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement("p",null,"Hvaftrudner first portfolio prototype."),l.a.createElement(x,null),l.a.createElement("a",{className:"App-link",href:"https://hvaftrudner.io",target:"_blank",rel:"noopener noreferrer"},"Hvaftrudner.io"),l.a.createElement(O,null),l.a.createElement(w,null),l.a.createElement(k,null)))}}]),a}(l.a.Component);r.a.render(l.a.createElement(B,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.a729ce85.chunk.js.map