(this["webpackJsonpsurvey-console"]=this["webpackJsonpsurvey-console"]||[]).push([[2],{101:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(26),c=r.n(a),u=r(41),s=(r(64),r(65),r(5)),o=r(18),i=(r(73),r(43)),d=r(55),p=r(56),l=Object(s.c)({name:"loading",initialState:{shown:!1},reducers:{showLoading:function(e){e.shown=!0},hideLoading:function(e){e.shown=!1}}}),f=l.actions,b=(f.showLoading,f.hideLoading,l.reducer),v=r(6),j=r(16);r(92);var O,h=function(e){e&&e instanceof Function&&r.e(10).then(r.bind(null,181)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;r(e),n(e),a(e),c(e),u(e)}))},g=r(10),y=r(21),S=r(25),m=r(7),w=r(27),x=r(54),C=r(38),A=r(39).a.div(O||(O=Object(C.a)([""]))),E=r(44),k=r(24);function R(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var T=r(4),_=["key"];function D(){return function(e){return e>1200}(function(){var e=Object(n.useState)(R()),t=Object(k.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a(R())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),r}().width)?Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(A,{children:Object(T.jsx)(x.b,{children:Object(T.jsx)(S.a,{children:Object(T.jsx)(m.d,{children:w.c.map((function(e){var t=e.key,r=Object(y.a)(e,_);return Object(T.jsx)(E.b,Object(g.a)({},r),t)}))})})})})}):Object(T.jsx)("div",{children:"Hello"})}c.a.render(Object(T.jsx)(u.a,{store:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).preloadedState,t=void 0===e?{}:e,r=[];return Object(s.a)({reducer:{core:Object(o.b)({authState:i.a,surveysState:d.b,accountsState:p.b}),ui:Object(o.b)({loadingState:b,formState:v.a,dialogState:j.a})},middleware:function(e){return e().concat(r)},preloadedState:t})}(),children:Object(T.jsx)(D,{})}),document.getElementById("root")),h()},11:function(e,t,r){"use strict";r.r(t),r.d(t,"HTTP_STATUS_NOT_FOUND",(function(){return s})),r.d(t,"httpClient",(function(){return o})),r.d(t,"jsonContentTypeHeader",(function(){return i})),r.d(t,"processHttpErrorResponse",(function(){return d})),r.d(t,"parseErrorResponse",(function(){return l})),r.d(t,"isNotFoundError",(function(){return p}));var n=r(59),a=r.n(n),c=r(16),u=r(6),s=404,o=a.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL?"".concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL,"/v1"):"/v1",withCredentials:!0}),i={"Content-Type":"application/json"};function d(e){var t=e.dispatch,r=e.error,n=e.failureDialogShown,a=void 0===n||n,s=l(r),o=s.errorMessage,i=s.errors;t(Object(u.c)({errorMessage:o,errors:i})),a&&o&&t(Object(c.c)({message:o}))}function p(e){var t;return(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)===s}function l(e){var t,r,n,a,c;return{errorMessage:null!==(t=null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)&&void 0!==t?t:e.message,errors:null===(a=e.response)||void 0===a||null===(c=a.data)||void 0===c?void 0:c.data}}},16:function(e,t,r){"use strict";r.d(t,"d",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return o}));var n=r(5),a=Object(n.c)({name:"dialog",initialState:{successDialogShown:!1,failureDialogShown:!1,dialogArgs:{}},reducers:{showSuccessDialog:function(e,t){var r=t.payload,n=(void 0===r?{}:r).message;e.successDialogShown=!0,e.dialogArgs={message:n}},showFailureDialog:function(e,t){var r=t.payload,n=(void 0===r?{}:r).message;e.failureDialogShown=!0,e.dialogArgs={message:n}},hideDialog:function(e){e.successDialogShown=!1,e.failureDialogShown=!1,e.dialogArgs={}}}}),c=a.actions,u=c.showSuccessDialog,s=c.showFailureDialog,o=c.hideDialog;t.a=a.reducer},20:function(e,t,r){"use strict";var n="survey.authenticated";t.a={isAuthenticated:function(){return localStorage.getItem(n)},createSession:function(){localStorage.setItem(n,!0)},clearSession:function(){localStorage.clear(n)}}},27:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(22),a=Object(n.a)((function(){return Promise.all([r.e(0),r.e(1),r.e(7)]).then(r.bind(null,105))})),c=Object(n.a)((function(){return Promise.all([r.e(0),r.e(1),r.e(8)]).then(r.bind(null,106))})),u=Object(n.a)((function(){return Promise.all([r.e(0),r.e(1),r.e(6)]).then(r.bind(null,103))})),s=Object(n.a)((function(){return r.e(9).then(r.bind(null,102))})),o=Object(n.a)((function(){return Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,104))})),i="/sign-in",d=[{key:"sign-in",path:i,component:a},{key:"home",path:"/",component:c}],p=[{key:"home",path:"/",exact:!0,redirectTo:"/surveys"},{key:"surveys",path:"/surveys",component:u},{key:"survey",path:"/surveys/:surveyId",component:s},{key:"accounts",path:"/accounts",component:o}]},43:function(e,t,r){"use strict";r.d(t,"c",(function(){return S})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return w}));var n,a,c,u,s=r(1),o=r(3),i=r(5),d=r(11),p=d.httpClient,l=d.jsonContentTypeHeader;var f,b,v,j={signUp:function(e){return(n=n||Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.post("/auth/sign-up",t,{headers:l}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},signIn:function(e){return(a=a||Object(o.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.post("/auth/sign-in",t,{headers:l}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getProfile:function(){return(c=c||Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.get("/auth/profile"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},signOut:function(){return(u=u||Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.put("/auth/sign-out"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},O=r(6),h=r(11),g=r(20),y=Object(i.b)("auth/signUp",(function(e,t){return(f=f||Object(o.a)(Object(s.a)().mark((function e(t,r){var n,a,c,u,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.dispatch,a=r.rejectWithValue,n(Object(O.b)()),e.prev=2,e.next=5,j.signUp(t);case 5:return c=e.sent,u=c.data.data,n(Object(O.c)()),g.a.createSession(),e.abrupt("return",{profile:u});case 12:return e.prev=12,e.t0=e.catch(2),Object(h.processHttpErrorResponse)({dispatch:n,error:e.t0,failureDialogShown:!1}),e.abrupt("return",a(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.data));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)})),S=Object(i.b)("auth/signIn",(function(e,t){return(b=b||Object(o.a)(Object(s.a)().mark((function e(t,r){var n,a,c,u,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.dispatch,a=r.rejectWithValue,n(Object(O.b)()),e.prev=2,e.next=5,j.signIn(t);case 5:return c=e.sent,u=c.data.data,n(Object(O.c)()),g.a.createSession(),e.abrupt("return",{profile:u});case 12:return e.prev=12,e.t0=e.catch(2),Object(h.processHttpErrorResponse)({dispatch:n,error:e.t0,failureDialogShown:!1}),e.abrupt("return",a(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.data));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)})),m=Object(i.b)("auth/getProfile",(function(e,t){return(v=v||Object(o.a)(Object(s.a)().mark((function e(t,r){var n,a,c,u,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.dispatch,a=r.rejectWithValue,e.prev=1,e.next=4,j.getProfile();case 4:return c=e.sent,u=c.data.data,e.abrupt("return",{profile:u});case 9:return e.prev=9,e.t0=e.catch(1),Object(h.isNotFoundError)(e.t0)&&n(w({signOutFromServer:!1})),e.abrupt("return",a(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.data));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)})),w=Object(i.b)("auth/signOut",Object(o.a)(Object(s.a)().mark((function e(){var t,r,n,a,c,u,o=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(o.length>0&&void 0!==o[0]?o[0]:{}).signOutFromServer,r=void 0===t||t,a=(n=o.length>1?o[1]:void 0).dispatch,c=n.rejectWithValue,a(Object(O.b)()),e.prev=3,!r){e.next=7;break}return e.next=7,j.signOut();case 7:return a(Object(O.c)()),g.a.clearSession(),e.abrupt("return",{});case 12:return e.prev=12,e.t0=e.catch(3),Object(h.processHttpErrorResponse)({dispatch:a,error:e.t0}),e.abrupt("return",c(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u?void 0:u.data));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})))),x=Object(i.c)({name:"auth",initialState:{profile:{}},reducers:{},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,t){var r=t.payload;e.profile=r.profile})),e.addCase(S.fulfilled,(function(e,t){var r=t.payload;e.profile=r.profile})),e.addCase(m.fulfilled,(function(e,t){var r=t.payload;e.profile=r.profile})),e.addCase(w.fulfilled,(function(e){e.profile={}}))}});t.a=x.reducer},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(10),a=r(21),c=(r(0),r(7)),u=r(20),s=r(27),o=r(4),i=["component","redirectTo"];function d(e){var t=e.component,r=e.redirectTo,d=Object(a.a)(e,i);return Object(o.jsx)(c.b,Object(n.a)(Object(n.a)({},d),{},{render:function(e){return u.a.isAuthenticated()?r?Object(o.jsx)(c.a,{to:p(e,r)}):Object(o.jsx)(t,Object(n.a)({},e)):Object(o.jsx)(c.a,{to:s.a})}}))}function p(e,t){var r=e.match.params,n=void 0===r?{}:r;return n.surveyId?t.replace(":surveyId",n.surveyId):t}var l=["path","redirectTo","component"];function f(e){var t=e.path,r=e.redirectTo,s=e.component,i=Object(a.a)(e,l);return Object(o.jsx)(c.b,Object(n.a)(Object(n.a)({path:t},i),{},{render:function(e){return u.a.isAuthenticated()&&"/"!==t?Object(o.jsx)(c.a,{to:"/"}):r?Object(o.jsx)(c.a,{to:r}):Object(o.jsx)(s,Object(n.a)({},e))}}))}},54:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(24),a=r(0),c=r(4),u=Object(a.createContext)({alertShown:!1,alertArgs:{},setAlertShown:function(){},setAlertArgs:function(){}});function s(e){var t=e.children,r=Object(a.useState)(!1),s=Object(n.a)(r,2),o=s[0],i=s[1],d=Object(a.useState)({}),p=Object(n.a)(d,2),l=p[0],f=p[1],b=Object(a.useMemo)((function(){return{alertShown:o,alertArgs:l,setAlertShown:i,setAlertArgs:f}}),[o,l]);return Object(c.jsx)(u.Provider,{value:b,children:t})}},55:function(e,t,r){"use strict";r.d(t,"e",(function(){return x})),r.d(t,"a",(function(){return C})),r.d(t,"c",(function(){return A})),r.d(t,"d",(function(){return E}));var n,a,c,u,s=r(10),o=r(1),i=r(3),d=r(5),p=r(11),l=r(16),f=r(6),b=r(11),v=b.httpClient,j=b.jsonContentTypeHeader,O="/surveys";function h(e){return O.concat("/".concat(e))}var g,y,S,m,w={createSurvey:function(e){return(n=n||Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.post(O,t,{headers:j}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getSurveys:function(){return(a=a||Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.get(O));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},deleteSurvey:function(e){return(c=c||Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.delete(h(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},generateSurveyReport:function(e){return(u=u||Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.put(h(t).concat("/generate")));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},x=Object(d.b)("surveys/getSurveys",(function(e,t){return(g=g||Object(i.a)(Object(o.a)().mark((function e(t,r){var n,a,c,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,w.getSurveys();case 4:return a=e.sent,c=a.data.data,e.abrupt("return",{surveys:c});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",n(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u?void 0:u.data));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)})),C=Object(d.b)("surveys/createSurvey",(function(e,t){return(y=y||Object(i.a)(Object(o.a)().mark((function e(t,r){var n,a,c,u,s,i,d,b,v;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.formState,a=t.onSurveyCreated,c=r.dispatch,u=r.rejectWithValue,c(Object(f.b)()),e.prev=3,e.next=6,w.createSurvey(n);case 6:return s=e.sent,i=s.data,d=i.data,b=i.message,a&&a(),c(Object(f.c)()),c(Object(l.d)({message:b})),e.abrupt("return",{survey:d});case 16:return e.prev=16,e.t0=e.catch(3),Object(p.processHttpErrorResponse)({dispatch:c,error:e.t0}),e.abrupt("return",u(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.data));case 20:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)})),A=Object(d.b)("surveys/deleteSurvey",(function(e,t){return(S=S||Object(i.a)(Object(o.a)().mark((function e(t,r){var n,a,c,u,s,i,d,b;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.surveyId,a=r.dispatch,c=r.rejectWithValue,a(Object(f.b)()),e.prev=3,e.next=6,w.deleteSurvey(n);case 6:return u=e.sent,s=u.data,i=s.data,d=s.message,a(Object(f.c)()),a(Object(l.d)({message:d})),e.abrupt("return",{survey:i});case 15:return e.prev=15,e.t0=e.catch(3),Object(p.processHttpErrorResponse)({dispatch:a,error:e.t0}),e.abrupt("return",c(null===e.t0||void 0===e.t0||null===(b=e.t0.response)||void 0===b?void 0:b.data));case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)})),E=Object(d.b)("surveys/generateSurveyReport",(function(e,t){return(m=m||Object(i.a)(Object(o.a)().mark((function e(t,r){var n,a,c,u,s,i,d,b;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.surveyId,a=r.dispatch,c=r.rejectWithValue,a(Object(f.b)()),e.prev=3,e.next=6,w.generateSurveyReport(n);case 6:return u=e.sent,s=u.data,i=s.data,d=s.message,a(Object(f.c)()),a(Object(l.d)({message:d})),e.abrupt("return",{survey:i});case 15:return e.prev=15,e.t0=e.catch(3),Object(p.processHttpErrorResponse)({dispatch:a,error:e.t0}),e.abrupt("return",c(null===e.t0||void 0===e.t0||null===(b=e.t0.response)||void 0===b?void 0:b.data));case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)})),k=Object(d.c)({name:"surveys",initialState:{surveys:[],requesting:!1,analytics:{}},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e){e.requesting=!0})),e.addCase(x.fulfilled,(function(e,t){var r=t.payload;e.requesting=!1,e.surveys=r.surveys})),e.addCase(x.rejected,(function(e){e.requesting=!1})),e.addCase(C.fulfilled,(function(e,t){var r=t.payload;e.surveys.unshift(r.survey)})),e.addCase(A.fulfilled,(function(e,t){var r=t.payload;e.surveys=e.surveys.filter((function(e){return e.id!==r.survey.id}))})),e.addCase(E.fulfilled,(function(e,t){var r=t.payload;e.surveys=e.surveys.map((function(e){return e.id===r.survey.id?Object(s.a)(Object(s.a)({},e),r.survey):e}))}))}});t.b=k.reducer},56:function(e,t,r){"use strict";r.d(t,"d",(function(){return S})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return w}));var n,a,c,u=r(1),s=r(3),o=r(5),i=r(11),d=r(16),p=r(6),l=r(11),f=l.httpClient,b=l.jsonContentTypeHeader,v="/accounts";function j(e){return v.concat("/".concat(e))}var O,h,g,y={createAccount:function(e){return(n=n||Object(s.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.post(v,t,{headers:b}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getAccounts:function(){return(a=a||Object(s.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.get(v));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},deleteAccount:function(e){return(c=c||Object(s.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.delete(j(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},S=Object(o.b)("accounts/getAccounts",(function(e,t){return(O=O||Object(s.a)(Object(u.a)().mark((function e(t,r){var n,a,c,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.rejectWithValue,e.prev=1,e.next=4,y.getAccounts();case 4:return a=e.sent,c=a.data.data,e.abrupt("return",{accounts:c});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",n(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s?void 0:s.data));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)})),m=Object(o.b)("accounts/createAccount",(function(e,t){return(h=h||Object(s.a)(Object(u.a)().mark((function e(t,r){var n,a,c,s,o,l,f,b,v;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.formState,a=t.onAccountCreated,c=r.dispatch,s=r.rejectWithValue,c(Object(p.b)()),e.prev=3,e.next=6,y.createAccount(n);case 6:return o=e.sent,l=o.data,f=l.data,b=l.message,a&&a(),c(Object(p.c)()),c(Object(d.d)({message:b})),e.abrupt("return",{account:f});case 16:return e.prev=16,e.t0=e.catch(3),Object(i.processHttpErrorResponse)({dispatch:c,error:e.t0}),e.abrupt("return",s(null===e.t0||void 0===e.t0||null===(v=e.t0.response)||void 0===v?void 0:v.data));case 20:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)})),w=Object(o.b)("accounts/deleteAccount",(function(e,t){return(g=g||Object(s.a)(Object(u.a)().mark((function e(t,r){var n,a,c,s,o,l,f,b;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.accountId,a=r.dispatch,c=r.rejectWithValue,a(Object(p.b)()),e.prev=3,e.next=6,y.deleteAccount(n);case 6:return s=e.sent,o=s.data,l=o.data,f=o.message,a(Object(p.c)()),a(Object(d.d)({message:f})),e.abrupt("return",{account:l});case 15:return e.prev=15,e.t0=e.catch(3),Object(i.processHttpErrorResponse)({dispatch:a,error:e.t0}),e.abrupt("return",c(null===e.t0||void 0===e.t0||null===(b=e.t0.response)||void 0===b?void 0:b.data));case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)})),x=Object(o.c)({name:"accounts",initialState:{accounts:[],requesting:!1,analytics:{}},reducers:{},extraReducers:function(e){e.addCase(S.pending,(function(e){e.requesting=!0})),e.addCase(S.fulfilled,(function(e,t){var r=t.payload;e.requesting=!1,e.accounts=r.accounts})),e.addCase(S.rejected,(function(e){e.requesting=!1})),e.addCase(m.fulfilled,(function(e,t){var r=t.payload;e.accounts.unshift(r.account)})),e.addCase(w.fulfilled,(function(e,t){var r=t.payload;e.accounts=e.accounts.filter((function(e){return e.id!==r.account.id}))}))}});t.b=x.reducer},6:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return s}));var n=r(5),a=Object(n.c)({name:"form",initialState:{requesting:!1,errorMessage:"",errors:{}},reducers:{startRequesting:function(e){e.requesting=!0,e.errorMessage="",e.errors={}},stopRequesting:function(e,t){var r=t.payload,n=void 0===r?{}:r,a=n.errorMessage,c=n.errors;e.requesting=!1,a&&(e.errorMessage=a),c&&(e.errors=c)}}}),c=a.actions,u=c.startRequesting,s=c.stopRequesting;t.a=a.reducer},92:function(e,t,r){}},[[101,3,4]]]);
//# sourceMappingURL=main.0a86913c.chunk.js.map