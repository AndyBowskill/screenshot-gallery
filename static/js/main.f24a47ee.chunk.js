(this.webpackJsonpscreenshot=this.webpackJsonpscreenshot||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(7),o=n.n(a),r=(n(12),n(2)),c=n(3),l=n(5),h=n(4),u=(n(13),n(0)),d=function(e){return Object(u.jsxs)("article",{className:"item",children:[Object(u.jsx)("img",{alt:e.item.url,src:e.item.screenshot,width:"300px",height:"225px"}),Object(u.jsx)("p",{children:"Web address:"}),Object(u.jsx)("a",{href:e.item.url,target:"_blank",rel:"noopener",children:Object(u.jsx)("p",{children:e.item.url})})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"itemlist",children:e.items.map((function(e){return Object(u.jsx)(d,{item:e})}))})}),b=(n(16),function(e){var t=e.onRouteChange;return e.isUserSignedIn?Object(u.jsxs)("nav",{className:"navigation",children:[Object(u.jsx)("p",{className:"navigation-logo",children:"Screenshot Gallery"}),Object(u.jsx)("ul",{className:"navigation-links",children:Object(u.jsx)("li",{onClick:function(){return t("signin")},children:"Sign Out"})})]}):Object(u.jsxs)("nav",{className:"navigation",children:[Object(u.jsx)("p",{className:"navigation-logo",children:"Screenshot Gallery"}),Object(u.jsxs)("ul",{className:"navigation-links",children:[Object(u.jsx)("li",{onClick:function(){return t("signin")},children:"Sign In"}),Object(u.jsx)("li",{onClick:function(){return t("register")},children:"Register"})]})]})}),p=(n(17),function(e){var t=e.onInputWebsiteChange,n=e.onSaveButtonClick,s=e.isDisabled;return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"screenshotform flex",children:[Object(u.jsx)("input",{type:"text",placeholder:"Please enter a website",name:"inputWebsite",id:"inputWebsite",onChange:t}),Object(u.jsx)("button",{disabled:s,onClick:n,children:"Save"})]})})}),m=(n(18),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onRegisterSumbit=function(){fetch("https://screenshot-gallery-api.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,name:e.state.name,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){t.id&&(e.props.loadUser(t),e.props.loadScreenshots([]),e.props.onRouteChange("home"))}))},e.state={email:"",name:"",password:""},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsx)("section",{className:"register flex",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Register"}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"text",placeholder:"Please enter email",name:"email",id:"email",required:!0,onChange:this.onEmailChange}),Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",placeholder:"Please enter name",name:"name",id:"name",required:!0,onChange:this.onNameChange}),Object(u.jsx)("label",{htmlFor:"psw",children:"Password"}),Object(u.jsx)("input",{type:"password",placeholder:"Please enter password",name:"psw",id:"psw",required:!0,onChange:this.onPasswordChange}),Object(u.jsx)("button",{type:"submit",onClick:this.onRegisterSumbit,children:"Register"})]})})}}]),n}(i.a.Component)),g=(n(19),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSignInSumbit=function(){fetch("https://screenshot-gallery-api.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})}).then((function(e){return e.json()})).then((function(t){t.user&&(e.props.loadUser(t.user),e.props.loadScreenshots(t.screenshots),e.props.onRouteChange("home"))}))},e.state={email:"",password:""},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsx)("section",{className:"signin flex",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Sign In"}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"text",placeholder:"Please enter email",name:"email",id:"email",required:!0,onChange:this.onEmailChange}),Object(u.jsx)("label",{htmlFor:"psw",children:"Password"}),Object(u.jsx)("input",{type:"password",placeholder:"Please enter password",name:"psw",id:"psw",required:!0,onChange:this.onPasswordChange}),Object(u.jsx)("button",{type:"submit",onClick:this.onSignInSumbit,children:"Sign In"})]})})}}]),n}(i.a.Component)),O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t}),"home"===t?e.setState({isUserSignedIn:!0}):e.setState({isUserSignedIn:!1})},e.loadUser=function(t){e.setState({user:{id:t.id,email:t.email,name:t.name}})},e.loadScreenshots=function(t){e.setState({screenshots:t})},e.onInputWebsiteChange=function(t){e.setState({inputWebsite:t.target.value}),""===t.target.value?e.setState({isDisabled:!0}):e.setState({isDisabled:!1})},e.onSaveButtonClick=function(){e.setState({isDisabled:!0}),fetch("https://screenshot-gallery-api.herokuapp.com/screenshot",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.user.email,url:e.state.inputWebsite})}).then((function(e){return e.json()})).then((function(t){e.loadScreenshots(t.screenshots)}))},e.state={inputWebsite:"",screenshots:[],route:"signin",isUserSignedIn:!1,user:{id:"",email:"",name:""},isDisabled:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{onRouteChange:this.onRouteChange,isUserSignedIn:this.state.isUserSignedIn}),function(){switch(e.state.route){case"register":return Object(u.jsx)(m,{onRouteChange:e.onRouteChange,loadUser:e.loadUser,loadScreenshots:e.loadScreenshots});case"signin":return Object(u.jsx)(g,{onRouteChange:e.onRouteChange,loadUser:e.loadUser,loadScreenshots:e.loadScreenshots});case"home":return Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{onInputWebsiteChange:e.onInputWebsiteChange,onSaveButtonClick:e.onSaveButtonClick,isDisabled:e.state.isDisabled}),Object(u.jsx)(j,{items:e.state.screenshots})]})}}()]})}}]),n}(i.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.f24a47ee.chunk.js.map