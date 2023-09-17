(this["webpackJsonpsurvey-console"]=this["webpackJsonpsurvey-console"]||[]).push([[6],{103:function(e,t,r){"use strict";r.r(t);var n=r(24),a=r(0),l=r(41),o=r(55),c=r(111),i=r(110),d=r(109),b=r(121),u=r(125);var j={openUrlInNewTab:function(e){window.open(e,"_blank")},openOrDownloadPDFFromPDFUrl:function(e){var t=function(e){var t=document.createElement("a");return t.target="_blank",t.rel="noopener noreferrer",t.href=e,document.body.append(t),t}(e);t.click(),t.parentNode.removeChild(t)}},s=r(10),O=r(40),p=r(136),f=r.n(p);function g(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).occupants,t=void 0===e?[]:e,r=Object(n.a)(t,1)[0];return null===r||void 0===r?void 0:r.taxNoticeNumber}function y(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).occupants,t=void 0===e?[]:e,r=Object(n.a)(t,1)[0];return null===r||void 0===r?void 0:r.taxNoticeReference}var h,m={translateHouseholdSituation:function(e){var t;return(t={},Object(O.a)(t,c.d.PRECARITY,"Pr\xe9caire"),Object(O.a)(t,c.d.MODEST,"Modeste"),Object(O.a)(t,c.d.CLASSIC,"Classique"),t)[e]},translateMPRProfile:function(e){var t;return(t={},Object(O.a)(t,c.h.BLUE,"Bleu"),Object(O.a)(t,c.h.NONE,"Aucun"),Object(O.a)(t,c.h.PURPLE,"Violet"),Object(O.a)(t,c.h.PINK,"Rose"),Object(O.a)(t,c.h.YELLOW,"Jaune"),t)[e]},getHouseholdSituationColorScheme:function(e){var t;return(t={},Object(O.a)(t,c.d.PRECARITY,"blue"),Object(O.a)(t,c.d.MODEST,"yellow"),Object(O.a)(t,c.d.CLASSIC,"purple"),t)[e]},formatSurveysForTable:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{customer:e.fullName,taxNoticeNumber:g(e),taxNoticeReference:y(e)})}))},filterCurrentDaySurveysCount:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return f()(e.createdAt).isSame(f()(),"day")})).length},filterCurrentWeekSurveysCount:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return f()(e.createdAt).isBetween(f()().startOf("week"),f()().endOf("week"))})).length},filterCurrentMonthSurveysCount:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return f()(e.createdAt).isBetween(f()().startOf("month"),f()().endOf("month"))})).length}},x=r(120),v=r(38),I=r(39).a.div(h||(h=Object(v.a)([""]))),S=r(126),T=r(116),N=r(4);function C(e){var t=e.surveys,r=void 0===t?[]:t,n=e.profile,a=void 0===n?{}:n,l=e.onOpenCreateSurveyForm;return Object(N.jsx)("div",{className:"surveysHeader",children:Object(N.jsxs)(T.k,{children:[Object(N.jsxs)(T.k.Header,{orientation:"vertical",spacing:1.5,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(T.t.Title,{children:Object(i.b)()}),Object(d.d)(r[0])&&Object(N.jsxs)(T.t.SubTitle,{children:[Object(i.tb)()," ",Object(S.a)(r[0].createdAt)]})]}),Object(N.jsx)(T.d,{onClick:l,children:Object(i.q)()})]}),Object(N.jsx)(T.k.Body,{children:Object(N.jsxs)(T.q,{orientation:"vertical",spacing:1.5,children:[Object(d.d)(a)&&Object(N.jsxs)(T.q,{spacing:.5,children:[Object(N.jsx)(T.t,{children:Object(i.Bb)()}),Object(N.jsxs)(T.t,{weight:"medium",children:[a.fullName," !"]})]}),Object(N.jsxs)(T.q,{spacing:1.5,children:[Object(N.jsx)(T.r,{variant:"default",className:"Today",label:Object(i.s)(),value:m.filterCurrentDaySurveysCount(r)}),Object(N.jsx)(T.r,{variant:"default",className:"Week",label:Object(i.Ab)(),value:m.filterCurrentWeekSurveysCount(r)}),Object(N.jsx)(T.r,{variant:"default",className:"Month",label:Object(i.S)(),value:m.filterCurrentMonthSurveysCount(r)}),Object(N.jsx)(T.r,{variant:"default",className:"Total",label:Object(i.wb)(),value:r.length})]})]})}),Object(N.jsx)(T.k.Footer,{})]})})}function E(e){var t=e.surveys,r=void 0===t?[]:t,n=e.requesting,a=void 0!==n&&n,l=e.profile,o=void 0===l?{}:l,b=e.onPrintSurvey,u=e.onGenerateSurveyReport,j=e.onDeleteSurvey,s=[];return(null===o||void 0===o?void 0:o.role)===c.l.ADMINISTRATOR&&s.push({title:Object(i.o)(),key:"createdBy",dataIndex:"createdBy",sortable:!0,formatter:q,render:function(e){var t=e.createdBy,r=void 0===t?{}:t;return Object(N.jsx)(T.t,{weight:"medium",children:q(r)})}}),Object(N.jsx)(T.e,{children:Object(N.jsx)(T.s,{columns:[{title:Object(i.ib)(),key:"reference",dataIndex:"reference",dataType:"code",sortable:!0},{title:Object(i.n)(),key:"createdAt",dataIndex:"createdAt",dataType:"date",sortable:!0},{title:Object(i.r)(),key:"customer",dataIndex:"customer",sortable:!0},{title:Object(i.ub)(),key:"taxNoticeNumber",dataIndex:"taxNoticeNumber"},{title:Object(i.vb)(),key:"taxNoticeReference",dataIndex:"taxNoticeReference"},{title:Object(i.gb)(),key:"householdSituation",dataIndex:"householdSituation",sortable:!0,formatter:m.translateHouseholdSituation,render:function(e){var t=e.householdSituation;return Object(N.jsx)(T.c,{colorScheme:m.getHouseholdSituationColorScheme(t),children:m.translateHouseholdSituation(t)})}}].concat(s),noDataMessage:Object(i.W)(),dataSource:r,requesting:a,actions:[{icon:Object(N.jsx)(T.h,{name:"print"}),label:Object(i.M)(),isDisabled:function(e){return Object(d.f)(e.fileUrl)},onClick:b},{icon:Object(N.jsx)(T.h,{name:"refresh"}),label:Object(i.N)(),isDisabled:function(e){return Object(d.e)(e.fileUrl)},onClick:u},{icon:Object(N.jsx)(T.h,{name:"delete"}),label:Object(i.L)(),onClick:j}]})})}function q(e){return Object(d.d)(e)?e.lastName:""}var A=r(131),w=r(124),D=r(127),F=(r(117),r(112));function G(e){var t,r,n,a,o,b,u,j,p,f,g,y,h,m,v,I,S,C,E,q,A,w=e.mode,D=e.formState,G=e.formErrors,R=e.onChange,k=e.onSubmit,H=Object(l.b)((function(e){return e.ui.formState})).requesting;function B(e){var t=e.index,r=e.name,n=e.value,a=Object(s.a)({},D).occupants,l=void 0===a?[]:a;Object(d.f)(l[t])&&(l[t]={}),l[t][r]=n,R({name:"occupants",value:l})}return Object(N.jsxs)(x.d,{children:[Object(N.jsxs)(x.d.Body,{children:[Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"operationType",label:Object(i.ab)(),options:Object(F.d)(c.i),defaultOption:Object(F.j)(D.operationType),error:G.operationType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"fullName",label:Object(i.z)(),defaultValue:D.fullName,error:G.fullName,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"buildingAge",label:Object(i.g)(),options:Object(F.d)(c.a,(t={},Object(O.a)(t,c.a.MORE_THAN_FIFTEEN_YEARS,"green"),Object(O.a)(t,c.a.LESS_THAN_FIFTEEN_YEARS,"red"),t)),defaultOption:Object(F.j)(D.buildingAge),error:G.buildingAge,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"number",name:"livingSpaceArea",label:Object(i.C)(),defaultValue:D.livingSpaceArea,error:G.livingSpaceArea,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"loftIncluded",label:Object(i.F)(),options:Object(F.d)(c.q,(r={},Object(O.a)(r,c.q.YES,"green"),Object(O.a)(r,c.q.NO,"red"),r)),defaultOption:Object(F.j)(D.loftIncluded),error:G.loftIncluded,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"loftType",label:Object(i.I)(),options:Object(F.d)(c.g,(n={},Object(O.a)(n,c.g.LOST_ACCESSIBLE,"green"),Object(O.a)(n,c.g.LOST_INACCESSIBLE,"red"),Object(O.a)(n,c.g.FURNISHED,"red"),Object(O.a)(n,c.g.CONVERTIBLE,"green"),n)),defaultOption:Object(F.j)(D.loftType),error:G.loftType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"number",name:"loftArea",label:Object(i.D)(),defaultValue:D.loftArea,error:G.loftArea,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"loftInsulated",label:Object(i.G)(),options:Object(F.d)(c.q),defaultOption:Object(F.j)(D.loftInsulated),error:G.loftInsulated,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"loftInsulationPeriod",label:Object(i.H)(),options:Object(F.d)(c.e,(a={},Object(O.a)(a,c.e.MORE_THAN_TEN_YEARS,"green"),Object(O.a)(a,c.e.LESS_THAN_TEN_YEARS,"red"),a)),defaultOption:Object(F.j)(D.loftInsulationPeriod),error:G.loftInsulationPeriod,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"textarea",name:"loftComments",label:Object(i.E)(),defaultValue:D.loftComments,error:G.loftComments,onChange:R})}),Object(N.jsx)(x.d.Divider,{}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"mprBeneficiary",label:Object(i.T)(),options:Object(F.d)(c.q,(o={},Object(O.a)(o,c.q.YES,"red"),Object(O.a)(o,c.q.NO,"green"),o)),defaultOption:Object(F.j)(D.mprBeneficiary),error:G.mprBeneficiary,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"oneEuroBeneficiary",label:Object(i.Z)(),options:Object(F.d)(c.q,(b={},Object(O.a)(b,c.q.YES,"red"),Object(O.a)(b,c.q.NO,"green"),b)),defaultOption:Object(F.j)(D.oneEuroBeneficiary),error:G.oneEuroBeneficiary,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Divider,{}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"taxNoticeNumber",index:0,label:Object(i.ub)(),defaultValue:D.taxNoticeNumber,error:null===(u=G.occupants)||void 0===u||null===(j=u[0])||void 0===j?void 0:j.taxNoticeNumber,onChange:B})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"taxNoticeReference",index:0,label:Object(i.vb)(),defaultValue:D.taxNoticeReference,error:null===(p=G.occupants)||void 0===p||null===(f=p[0])||void 0===f?void 0:f.taxNoticeReference,onChange:B})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"number",name:"referenceTaxIncome",index:0,label:Object(i.jb)(),defaultValue:D.referenceTaxIncome,error:null===(g=G.occupants)||void 0===g||null===(y=g[0])||void 0===y?void 0:y.referenceTaxIncome,onChange:B})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"date",name:"birthDate",index:0,label:Object(i.f)(),defaultValue:D.birthDate,error:null===(h=G.occupants)||void 0===h||null===(m=h[0])||void 0===m?void 0:m.birthDate,onChange:B})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"number",name:"numberOfDependents",label:Object(i.X)(),defaultValue:D.numberOfDependents,error:G.numberOfDependents,onChange:R})}),Object(N.jsx)(x.d.Text,{children:"Si le foyer se compose de plusieurs avis d'imposition"}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"number",name:"referenceTaxIncome",index:1,label:Object(i.jb)(),defaultValue:D.referenceTaxIncome,error:null===(v=G.occupants)||void 0===v||null===(I=v[1])||void 0===I?void 0:I.referenceTaxIncome,onChange:B})}),Object(N.jsxs)(x.d.Row,{radio:"1fr 2fr",children:[Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"streetNumber",label:Object(i.sb)(),defaultValue:D.streetNumber,error:G.streetNumber,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"streetName",label:Object(i.rb)(),defaultValue:D.streetName,error:G.streetName,onChange:R})})]}),Object(N.jsxs)(x.d.Row,{children:[Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"city",label:Object(i.i)(),defaultValue:D.city,error:G.city,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"postalCode",label:Object(i.fb)(),defaultValue:D.postalCode,error:G.postalCode,onChange:R})})]}),Object(N.jsx)(x.d.Divider,{}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"owningType",label:Object(i.bb)(),options:Object(F.d)(c.j),defaultOption:Object(F.j)(D.owningType),error:G.owningType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"wallInsulationType",label:Object(i.xb)(),options:Object(F.d)(c.o,(S={},Object(O.a)(S,c.o.ITE,"red"),Object(O.a)(S,c.o.ITI,"red"),Object(O.a)(S,c.o.NONE,"green"),S)),defaultOption:Object(F.j)(D.wallInsulationType),error:G.wallInsulationType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"heatingType",label:Object(i.A)(),options:Object(F.d)(c.c,(C={},Object(O.a)(C,c.c.WOOD,"green"),Object(O.a)(C,c.c.GAS,"green"),Object(O.a)(C,c.c.OIL,"green"),Object(O.a)(C,c.c.HEATING_PUMP,"red"),Object(O.a)(C,c.c.ELECTRICITY,"red"),C)),defaultOption:Object(F.j)(D.heatingType),error:G.heatingType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"oilHeatingTypeBoiler",label:Object(i.Y)(),comment:Object(i.Db)(),options:Object(F.d)(c.q,(E={},Object(O.a)(E,c.q.YES,"red"),Object(O.a)(E,c.q.NO,"green"),E)),defaultOption:Object(F.j)(D.oilHeatingTypeBoiler),error:G.oilHeatingTypeBoiler,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"waterHeatingType",label:Object(i.yb)(),options:Object(F.d)(c.p),defaultOption:Object(F.j)(D.waterHeatingType),error:G.waterHeatingType,disabled:w===c.b.EDITION,onChange:R})}),D.waterHeatingType===c.p.OTHER&&Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"text",name:"waterHeatingTypeSpecified",label:Object(i.zb)(),defaultValue:D.waterHeatingTypeSpecified,error:G.waterHeatingTypeSpecified,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"basementIncluded",label:Object(i.e)(),options:Object(F.d)(c.q),defaultOption:Object(F.j)(D.basementIncluded),error:G.basementIncluded,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"lowFloorInsulationPeriod",label:Object(i.J)(),options:Object(F.d)(c.e,(q={},Object(O.a)(q,c.e.MORE_THAN_TEN_YEARS,"green"),Object(O.a)(q,c.e.LESS_THAN_TEN_YEARS,"red"),q)),defaultOption:Object(F.j)(D.lowFloorInsulationPeriod),error:G.lowFloorInsulationPeriod,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"basementAreaForBoiler",label:Object(i.d)(),options:Object(F.d)(c.q,(A={},Object(O.a)(A,c.q.YES,"green"),Object(O.a)(A,c.q.NO,"red"),A)),defaultOption:Object(F.j)(D.basementAreaForBoiler),error:G.basementAreaForBoiler,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"radiatorType",label:Object(i.hb)(),options:Object(F.d)(c.k),defaultOption:Object(F.j)(D.radiatorType),error:G.radiatorType,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"select",name:"fireplaceIncluded",label:Object(i.x)(),options:Object(F.d)(c.q),defaultOption:Object(F.j)(D.fireplaceIncluded),error:G.fireplaceIncluded,disabled:w===c.b.EDITION,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"tel",name:"phone",label:Object(i.eb)(),defaultValue:D.phone,error:G.phone,required:!0,onChange:R})}),Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.g,{fluid:!0,type:"textarea",name:"comments",label:Object(i.j)(),defaultValue:D.comments,error:G.comments,onChange:R})})]}),Object(N.jsx)(x.d.Footer,{children:Object(N.jsx)(x.d.Group,{children:Object(N.jsx)(T.d,{disabled:H,colorScheme:"secondary",onClick:function(){H||k()},children:Object(i.lb)()})})})]})}t.default=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.core.surveysState})),r=t.surveys,s=t.requesting,O=Object(l.c)((function(e){return e.core.authState})).profile,p=Object(A.a)(),f=Object(w.a)(),g=Object(D.a)(),y=g.showAlert,h=g.hideAlert,v=Object(a.useState)({}),S=Object(n.a)(v,2),q=S[0],F=S[1];return Object(a.useEffect)((function(){e(Object(o.e)())}),[e]),Object(N.jsxs)(x.f,{children:[Object(N.jsx)("div",{className:"bodyBox",children:Object(N.jsxs)(I,{children:[Object(N.jsx)(C,{surveys:r,profile:O,onOpenCreateSurveyForm:function(){F({}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.mode;f.setMode(r),f.resetFormState(e),p.handleShow()}({},{mode:c.b.CREATION})}}),Object(N.jsx)(x.b,{}),Object(N.jsx)(E,{surveys:m.formatSurveysForTable(r),requesting:s,profile:O,onPrintSurvey:function(e){j.openUrlInNewTab(e.fileUrl)},onGenerateSurveyReport:function(t){e(Object(o.d)({surveyId:t.id}))},onDeleteSurvey:function(t){y({message:Object(i.v)({survey:t}),actions:Object(N.jsx)(T.d,{colorScheme:"red",onClick:function(){return function(t){h(),e(Object(o.c)({surveyId:t.id}))}(t)},children:Object(i.t)()})})}})]})}),p.shown&&Object(N.jsx)(T.m,{shown:!0,title:Object(i.Cb)(),onHide:p.handleHide,children:Object(N.jsx)(G,{mode:f.mode,formState:f.formState,formErrors:f.formErrors,onChange:f.handleChange,onSubmit:function(){Object(d.d)(q)||function(){var t=f.formState,r=b.a.validateForm(t,Object(u.c)()),n=r.validForm,a=r.formErrors;f.setFormErrors(a),n&&e(Object(o.a)({formState:t,onSurveyCreated:p.handleHide}))}()}})})]})}},121:function(e,t,r){"use strict";var n=r(10),a=r(21),l=r(109),o=["property","label","type","fields","validate","required","minLength"];t.a={validateForm:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).currentIndex;return r.reduce((function(r,i){var d=r.validForm,b=r.formErrors,u=i.property,j=i.label,s=i.type,O=i.fields,p=i.validate,f=i.required,g=i.minLength,y=void 0===g?0:g,h=Object(a.a)(i,o),m=t[u];if("array"===s){(m||[Array(y).fill({})]).forEach((function(t,r){var n=e(t,O,{currentIndex:r});(d=d&&n.validForm)||(b[u]||(b[u]={}),b[u][r]=n.formErrors)}))}else{var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a={validField:!0,errorMessageSuffix:""},o=t.type,c=t.dataType,i=t.pattern,d=t.required,b=void 0!==d&&d,u=t.currentIndex;if(function(e,t,r){var a=e.value,o=e.required,c=e.currentIndex,i="function"===typeof o?o(Object(n.a)(Object(n.a)({},r),{},{currentIndex:c})):o;i&&Object(l.f)(a)&&(t.validField=!1,t.errorMessageSuffix=" obligatoire")}({value:e,required:b,currentIndex:u},a,r),!a.validField||Object(l.f)(e))return a;o&&function(e,t,r){typeof e!==t&&(r.validField=!1,r.errorMessageSuffix=" non valide")}(e,o,a);c&&function(e,t,r){var n={email:l.i,phone:l.j};if(!t||!Object.keys(n).includes(t))return;n[t](e)||(r.validField=!1,r.errorMessageSuffix=" non valide")}(e,c,a);i&&function(e,t,r){t&&!t.test(e)&&(r.validField=!1,r.errorMessageSuffix=" est non valide")}(e,i,a);return a}(m,Object(n.a)({type:s,required:f,currentIndex:c},h),t),v=x.validField,I=x.errorMessageSuffix;d=d&&v,v||(b[u]=j.concat(I))}return p&&(d=d&&p(t,b)),{validForm:d,formErrors:b}}),{validForm:!0,formErrors:{}})},extractFormStateUpdates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={};return Object.keys(t).forEach((function(n){JSON.stringify(t[n])!==JSON.stringify(e[n])&&(r[n]=t[n])})),r}}},124:function(e,t,r){"use strict";var n=r(40),a=r(10),l=r(24),o=r(0),c=r(123);t.a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).onSubmit,t=Object(o.useState)({}),r=Object(l.a)(t,2),i=r[0],d=r[1],b=Object(o.useState)({}),u=Object(l.a)(b,2),j=u[0],s=u[1],O=Object(o.useState)([]),p=Object(l.a)(O,2),f=p[0],g=p[1],y=Object(o.useState)(""),h=Object(l.a)(y,2),m=h[0],x=h[1],v=Object(o.useCallback)((function(e){var t=e.name,r=e.value;d((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},t,r))})),s((function(e){if(e[t]){var r=Object(c.a)(e);return delete r[t],r}return e}))})),I=Object(o.useCallback)((function(t){t&&t.preventDefault(),e(t)}),[]),S=Object(o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.a)({},e);["id","created","updated","deleted","deletedAt"].forEach((function(e){return delete t[e]})),d((function(e){return Object(a.a)(Object(a.a)({},e),t)}))}),[]),T=Object(o.useCallback)((function(){d(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),s({})}),[]);return{formState:i,formErrors:j,formDisabledFields:f,mode:m,setFormErrors:s,setFormDisabledFields:g,handleChange:v,handleSubmit:I,updateFormState:S,resetFormState:T,setMode:x}}},125:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(111),a=r(110),l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).language,t=void 0===e?n.f.FR:e;return[{property:"email",type:"string",label:Object(a.w)({language:t}),required:!0},{property:"password",type:"string",label:Object(a.cb)({language:t}),required:!0}]},o=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).language,t=void 0===e?n.f.FR:e;return[{property:"operationType",type:"string",label:Object(a.ab)({language:t}),required:!0},{property:"fullName",type:"string",label:Object(a.z)({language:t}),required:!0},{property:"buildingAge",type:"string",label:Object(a.g)({language:t}),required:!0},{property:"livingSpaceArea",type:"number",label:Object(a.C)({language:t}),required:!0},{property:"loftIncluded",type:"boolean",label:Object(a.F)({language:t}),required:!0},{property:"loftType",type:"string",label:Object(a.I)({language:t}),required:function(e){return e.loftIncluded}},{property:"loftArea",type:"number",label:Object(a.D)({language:t}),required:function(e){return e.loftIncluded}},{property:"loftInsulated",type:"boolean",label:Object(a.G)({language:t}),required:function(e){return e.loftIncluded}},{property:"loftInsulationPeriod",type:"string",label:Object(a.H)({language:t}),required:function(e){return e.loftInsulated}},{property:"loftComments",type:"string",label:Object(a.E)({language:t})},{property:"mprBeneficiary",type:"boolean",label:Object(a.T)({language:t}),required:!0},{property:"oneEuroBeneficiary",type:"boolean",label:Object(a.Z)({language:t}),required:!0},{property:"occupants",type:"array",required:!0,minLength:1,fields:[{property:"taxNoticeNumber",type:"string",label:Object(a.ub)({language:t}),required:function(e){return 0===e.currentIndex}},{property:"taxNoticeReference",type:"string",label:Object(a.vb)({language:t}),required:function(e){return 0===e.currentIndex}},{property:"referenceTaxIncome",type:"number",label:Object(a.jb)({language:t}),required:function(e){return 0===e.currentIndex}},{property:"birthDate",type:"object",label:Object(a.f)({language:t}),required:function(e){return 0===e.currentIndex}}]},{property:"numberOfDependents",type:"number",label:Object(a.X)({language:t}),required:!0},{property:"streetNumber",type:"string",label:Object(a.sb)({language:t}),required:!0},{property:"streetName",type:"string",label:Object(a.rb)({language:t}),required:!0},{property:"city",type:"string",label:Object(a.i)({language:t}),required:!0},{property:"postalCode",type:"string",label:Object(a.fb)({language:t}),required:!0},{property:"owningType",type:"string",label:Object(a.bb)({language:t}),required:!0},{property:"wallInsulationType",type:"string",label:Object(a.xb)({language:t}),required:!0},{property:"heatingType",type:"string",label:Object(a.A)({language:t}),required:!0},{property:"oilHeatingTypeBoiler",type:"boolean",label:Object(a.Y)({language:t}),required:function(e){return e.heatingType===n.c.GAS}},{property:"waterHeatingType",type:"string",label:Object(a.yb)({language:t}),required:!0},{property:"waterHeatingTypeSpecified",type:"string",label:Object(a.zb)({language:t})},{property:"basementIncluded",type:"boolean",label:Object(a.e)({language:t}),required:!0},{property:"lowFloorInsulationPeriod",type:"string",label:Object(a.J)({language:t}),required:function(e){return e.basementIncluded}},{property:"basementAreaForBoiler",type:"boolean",label:Object(a.d)({language:t}),required:function(e){return e.basementIncluded}},{property:"radiatorType",type:"string",label:Object(a.hb)({language:t})},{property:"fireplaceIncluded",type:"boolean",label:Object(a.x)({language:t}),required:!0},{property:"phone",type:"string",dataType:"phone",label:Object(a.eb)({language:t}),required:!0},{property:"comments",type:"string",label:Object(a.j)({language:t})}]},c=r(109),i=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).language,t=void 0===e?n.f.FR:e;return[{property:"lastName",type:"string",label:Object(a.B)({language:t}),required:!0},{property:"firstName",type:"string",label:Object(a.y)({language:t}),required:!0},{property:"role",type:"string",label:Object(a.kb)({language:t}),required:!0},{property:"email",type:"string",dataType:"email",label:Object(a.w)({language:t}),required:!0},{property:"password",type:"string",label:Object(a.cb)({language:t}),required:!0},{property:"confirmPassword",type:"string",label:Object(a.l)({language:t}),required:!0,validate:function(e){var r=e.password,n=e.confirmPassword,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=Object(c.e)(r)&&Object(c.e)(n)&&r===n;return o||(l.confirmPassword=Object(a.db)({language:t})),o}}]}},131:function(e,t,r){"use strict";var n=r(24),a=r(0);t.a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).initialTitle,t=void 0===e?"":e,r=Object(a.useState)(!1),l=Object(n.a)(r,2),o=l[0],c=l[1],i=Object(a.useState)(t),d=Object(n.a)(i,2);return{shown:o,title:d[0],setTitle:d[1],handleShow:Object(a.useCallback)((function(){c(!0)}),[]),handleHide:Object(a.useCallback)((function(){c(!1)}),[])}}}}]);
//# sourceMappingURL=6.a24df256.chunk.js.map