(this["webpackJsonpinsta-linkedin-frontend"]=this["webpackJsonpinsta-linkedin-frontend"]||[]).push([[0],{40:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),s=a.n(r),c=a(10),l=a(14),i=a(15),u=a(18),d=a(17),m=a(72),h=a(66),f=a(67),p=a(34),g=a(68),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1},e.setRedirect=function(){e.setState({redirect:!0})},e.renderRedirect=function(){if(e.state.redirect)return o.a.createElement(c.a,{to:"/Instagram"})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,this.renderRedirect(),o.a.createElement(m.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},className:"text-center"},o.a.createElement(m.a.Header,null,"Select login option"),o.a.createElement(m.a.Body,null,o.a.createElement(h.a,{fluid:!0},o.a.createElement(f.a,{style:{padding:20}},o.a.createElement(p.a,null,o.a.createElement(g.a,{size:"lg",variant:"outline-danger",onClick:this.setRedirect},"INSTAGRAM"))),o.a.createElement(f.a,{style:{padding:20}},o.a.createElement(p.a,null,o.a.createElement("a",{href:"https://mysterious-reaches-98129.herokuapp.com/linkedin"},o.a.createElement(g.a,{size:"lg",variant:"outline-primary"},"LINKEDIN"))))))),o.a.createElement(m.a,{title:"Select login options"}))}}]),a}(n.Component),w=a(71),v=a(70),y=a(69),b=a(50),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,success:!1,code:"",two_factor_identifier:"",verificationMethod:""},e.handleUsername=function(t){e.setState({username:t.target.value})},e.handleCode=function(t){var a=t.target,n=a.value,o=a.maxLength,r=n.slice(0,o);e.setState({code:r})},e.handlePassword=function(t){e.setState({password:t.target.value})},e.onShowAlert=function(){e.setState({showAlert:!0},(function(){window.setTimeout((function(){e.setState({showAlert:!1})}),3e3)}))},e.handleClick=function(t){t.preventDefault(),e.setState({loading:!0}),fetch("https://mysterious-reaches-98129.herokuapp.com/insta",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:b.stringify(e.state)}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({message:t.message},(function(){e.onShowAlert()})),t.success?t.twoFactor?e.setState({twoFactor:!0,loading:!0,two_factor_identifier:t.two_factor_identifier,verificationMethod:t.verificationMethod}):e.setState({success:!0}):e.setState({loading:!1})}))},e.handleCodeClick=function(t){0===e.state.code.length||e.state.code.length>6?e.setState({message:"Code length should be equal to 6"},(function(){e.onShowAlert()})):fetch("https://mysterious-reaches-98129.herokuapp.com/insta/submitCode?username=".concat(e.state.username,"&code=").concat(e.state.code,"&two_factor_identifier=").concat(e.state.two_factor_identifier,"&verificationMethod=").concat(e.state.verificationMethod),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success?e.setState({success:!0}):e.setState({message:t.message},(function(){e.onShowAlert()}))}))},e.handleLogoutClick=function(t){fetch("https://mysterious-reaches-98129.herokuapp.com/logout/insta",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),t.success&&e.setState({username:"",password:"",showAlert:!1,loading:!1,message:"",twoFactor:!1,success:!1})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.showAlert?o.a.createElement(w.a,{variant:"danger"},this.state.message):"",o.a.createElement(h.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},this.state.success?o.a.createElement("div",null,o.a.createElement("h1",null,"Login Sucess"),o.a.createElement("h3",null,"please check console"),o.a.createElement(g.a,{variant:"warning",onClick:function(){e.handleLogoutClick()}},"Logout")):o.a.createElement(f.a,null,o.a.createElement(p.a,null,o.a.createElement(v.a,{onSubmit:function(t){return e.handleClick(t)}},o.a.createElement(v.a.Group,{controlId:"formBasicEmail"},o.a.createElement(v.a.Label,null,"Username"),o.a.createElement(v.a.Control,{value:this.state.username,onChange:function(t){e.handleUsername(t)},type:"username",placeholder:"Enter username"}),o.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),o.a.createElement(v.a.Group,{controlId:"formBasicPassword"},o.a.createElement(v.a.Label,null,"Password"),o.a.createElement(v.a.Control,{onChange:function(t){return e.handlePassword(t)},value:this.state.password,type:"password",placeholder:"Password"})),this.state.loading?o.a.createElement(g.a,{variant:"primary",type:"submit",disabled:!0},o.a.createElement(y.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):o.a.createElement(g.a,{variant:"primary",type:"submit"},"Login"),this.state.twoFactor?o.a.createElement("div",null,o.a.createElement(v.a.Group,null,o.a.createElement(v.a.Label,null,"Enter two factor code recieved"),o.a.createElement(v.a.Control,{value:this.state.code,onChange:function(t){e.handleCode(t)},type:"number",maxLength:"11"}),o.a.createElement(v.a.Text,{className:"text-muted"},"Please enter the code used for two factor login!")),o.a.createElement(g.a,{variant:"outline-success",onClick:function(){e.handleCodeClick()}},"submit code")," "):"")))))}}]),a}(n.Component);var C=function(){return o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/",component:E,exact:!0}),o.a.createElement(c.b,{path:"/Instagram",component:S,exact:!0}))},k=a(12),A=a(6),j=Object(A.a)();s.a.render(o.a.createElement(k.a,{history:j},o.a.createElement(C,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7d29e87d.chunk.js.map