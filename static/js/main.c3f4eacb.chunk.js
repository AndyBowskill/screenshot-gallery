(this.webpackJsonpscreenshot=this.webpackJsonpscreenshot||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),r=n(9),i=n.n(r),o=(n(14),n(1)),c=n.n(o),u=n(2),l=n(4),h=n(5),p=n(7),d=n(6),j=(n(16),n(0)),b=function(e){var t=e.item,n=e.onDeleteButtonClick;return Object(j.jsxs)("article",{className:"item",children:[Object(j.jsx)("img",{alt:t.url,src:t.screenshot,width:"300px",height:"225px"}),Object(j.jsx)("p",{className:"top",children:"Web address:"}),Object(j.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("p",{children:t.url})}),Object(j.jsx)("button",{type:"submit",onClick:function(){return n(t.id)},children:"Delete"})]})},m=(n(18),function(e){var t=e.items,n=e.onDeleteButtonClick;return Object(j.jsx)("div",{className:"itemlist",children:t.map((function(e){return Object(j.jsx)(b,{item:e,onDeleteButtonClick:n},e.id)}))})}),g=(n(19),function(e){var t=e.onRouteChange;return e.isUserSignedIn?Object(j.jsxs)("nav",{className:"navigation",children:[Object(j.jsx)("p",{className:"navigation-logo",children:"Screenshot Gallery"}),Object(j.jsx)("ul",{className:"navigation-links",children:Object(j.jsx)("li",{onClick:function(){return t("signin")},children:"Sign Out"})})]}):Object(j.jsxs)("nav",{className:"navigation",children:[Object(j.jsx)("p",{className:"navigation-logo",children:"Screenshot Gallery"}),Object(j.jsxs)("ul",{className:"navigation-links",children:[Object(j.jsx)("li",{onClick:function(){return t("signin")},children:"Sign In"}),Object(j.jsx)("li",{onClick:function(){return t("register")},children:"Register"})]})]})}),f=(n(20),function(e){var t=e.onInputWebsiteChange,n=e.onSaveButtonClick,s=e.isDisabled;return Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"screenshotform flex",children:[Object(j.jsx)("input",{type:"text",placeholder:"Please enter a website",name:"inputWebsite",id:"inputWebsite",onChange:t}),Object(j.jsx)("button",{disabled:s,onClick:n,children:"Save"})]})})});function x(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(c.a.mark((function e(t,n,s){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://screenshot-gallery-api.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,name:n,password:s})});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(21);var v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onNameChange=function(t){e.setState({name:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onRegisterSumbit=Object(u.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e.state.email,e.state.name,e.state.password);case 2:(n=t.sent).user&&(e.props.loadUser(n.user),e.props.loadScreenshots([]),e.props.onRouteChange("home"));case 4:case"end":return t.stop()}}),t)}))),e.state={email:"",name:"",password:""},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{className:"register flex",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Register"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"text",placeholder:"Please enter email",name:"email",id:"email",required:!0,onChange:this.onEmailChange}),Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",placeholder:"Please enter name",name:"name",id:"name",required:!0,onChange:this.onNameChange}),Object(j.jsx)("label",{htmlFor:"psw",children:"Password"}),Object(j.jsx)("input",{type:"password",placeholder:"Please enter password",name:"psw",id:"psw",required:!0,onChange:this.onPasswordChange}),Object(j.jsx)("button",{type:"submit",onClick:this.onRegisterSumbit,children:"Register"})]})})}}]),n}(a.a.Component);function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(c.a.mark((function e(t,n){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://screenshot-gallery-api.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:return s=e.sent,e.next=5,s.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(22);var w=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onEmailChange=function(t){e.setState({email:t.target.value})},e.onPasswordChange=function(t){e.setState({password:t.target.value})},e.onSignInSumbit=Object(u.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e.state.email,e.state.password);case 2:(n=t.sent).user&&(e.props.loadUser(n.user),e.props.loadScreenshots(n.screenshots),e.props.onRouteChange("home"));case 4:case"end":return t.stop()}}),t)}))),e.state={email:"",password:""},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsx)("section",{className:"signin flex",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"text",placeholder:"Please enter email",name:"email",id:"email",required:!0,onChange:this.onEmailChange}),Object(j.jsx)("label",{htmlFor:"psw",children:"Password"}),Object(j.jsx)("input",{type:"password",placeholder:"Please enter password",name:"psw",id:"psw",required:!0,onChange:this.onPasswordChange}),Object(j.jsx)("button",{type:"submit",onClick:this.onSignInSumbit,children:"Sign In"})]})})}}]),n}(a.a.Component);function y(e,t){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(c.a.mark((function e(t,n){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://screenshot-gallery-api.herokuapp.com/screenshot",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,url:n})});case 2:return s=e.sent,e.next=5,s.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(c.a.mark((function e(t,n){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://screenshot-gallery-api.herokuapp.com/screenshot",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,id:n})});case 2:return s=e.sent,e.next=5,s.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onRouteChange=function(t){e.setState({route:t}),"home"===t?e.setState({isUserSignedIn:!0}):e.setState({isUserSignedIn:!1})},e.loadUser=function(t){e.setState({user:{id:t.id,email:t.email,name:t.name}})},e.loadScreenshots=function(t){e.setState({screenshots:t})},e.onInputWebsiteChange=function(t){e.setState({inputWebsite:t.target.value}),""===t.target.value?e.setState({isDisabled:!0}):e.setState({isDisabled:!1})},e.onSaveButtonClick=Object(u.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isDisabled:!0}),t.next=3,y(e.state.user.email,e.state.inputWebsite);case 3:n=t.sent,e.loadScreenshots(n.screenshots);case 5:case"end":return t.stop()}}),t)}))),e.onDeleteButtonClick=function(){var t=Object(u.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.state.user.email,n);case 2:s=t.sent,e.loadScreenshots(s.screenshots);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={inputWebsite:"",screenshots:[],route:"signin",isUserSignedIn:!1,user:{id:"",email:"",name:""},isDisabled:!0},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{onRouteChange:this.onRouteChange,isUserSignedIn:this.state.isUserSignedIn}),function(){switch(e.state.route){case"register":return Object(j.jsx)(v,{onRouteChange:e.onRouteChange,loadUser:e.loadUser,loadScreenshots:e.loadScreenshots});case"signin":return Object(j.jsx)(w,{onRouteChange:e.onRouteChange,loadUser:e.loadUser,loadScreenshots:e.loadScreenshots});case"home":return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{onInputWebsiteChange:e.onInputWebsiteChange,onSaveButtonClick:e.onSaveButtonClick,isDisabled:e.state.isDisabled}),Object(j.jsx)(m,{items:e.state.screenshots,onDeleteButtonClick:e.onDeleteButtonClick})]})}}()]})}}]),n}(a.a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),R()}],[[23,1,2]]]);
//# sourceMappingURL=main.c3f4eacb.chunk.js.map