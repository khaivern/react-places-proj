"use strict";(self.webpackChunkplaces_project=self.webpackChunkplaces_project||[]).push([[99],{1099:function(e,n,t){t.r(n);var r=t(5861),a=t(7757),i=t.n(a),o=t(2791),l=t(6860),s=t(291),u=t(5945),c=(t(8055),t(5094)),d=t(9508),f=t(6871),p=t(654),v=t(5152),h=t(8984),m=t(4683),x=t(184);n.default=function(){var e=(0,o.useContext)(p.Z),n=(0,f.s0)(),t=(0,c.Z)({inputs:{title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},overallForm:!1}),a=t.formState,g=t.inputHandler,y=(0,d.Z)(),j=y.isLoading,Z=y.error,b=y.sendRequest,C=y.resetError,w=function(){var t=(0,r.Z)(i().mark((function t(r){var o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,(o=new FormData).append("title",a.inputs.title.value),o.append("description",a.inputs.description.value),o.append("address",a.inputs.address.value),o.append("image",a.inputs.image.value),t.next=9,b("https://places-project-1.herokuapp.com/api/places","POST",o,{Authorization:"Bearer "+e.token});case 9:t.sent.error||n("/".concat(e.userId,"/places")),t.next=15;break;case 13:t.prev=13,t.t0=t.catch(1);case 15:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{onClear:C,error:Z}),(0,x.jsxs)("form",{className:"place-form",onSubmit:w,children:[j&&(0,x.jsx)(v.Z,{asOverlay:!0}),(0,x.jsx)(l.Z,{element:"input",label:"Title",id:"title",validators:[(0,s.hg)()],errorText:"Please enter a valid title",onInput:g}),(0,x.jsx)(l.Z,{element:"textarea",label:"Description",id:"description",validators:[(0,s.CP)(5)],errorText:"Please enter a valid description of 5 chars at least",onInput:g}),(0,x.jsx)(l.Z,{element:"input",label:"Address",id:"address",validators:[(0,s.hg)()],errorText:"Please enter a valid address",onInput:g}),(0,x.jsx)(m.Z,{id:"image",onInput:g,errorText:"Please enter a valid image"}),(0,x.jsx)(u.Z,{type:"submit",disabled:!a.overallForm,children:"ADD PLACE"})]})]})}},4683:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(885),a=t(2791),i=t(5945),o=t(184),l=function(e){var n=(0,a.useRef)(),t=(0,a.useState)(),l=(0,r.Z)(t,2),s=l[0],u=l[1],c=(0,a.useState)(),d=(0,r.Z)(c,2),f=d[0],p=d[1],v=(0,a.useState)(!1),h=(0,r.Z)(v,2),m=h[0],x=h[1];(0,a.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(s)}}),[s]);return(0,o.jsxs)("div",{className:"form-control",children:[(0,o.jsx)("input",{ref:n,type:"file",style:{display:"none"},id:e.id,accept:".jpg,.png,.jpeg",onChange:function(n){var t,r;n.target.files&&1===n.target.files.length?(t=n.target.files[0],u(t),r=!0,x(!0)):(r=!1,x(!1)),e.onInput(e.id,t,r)}}),(0,o.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,o.jsxs)("div",{className:"image-upload__preview",children:[f&&(0,o.jsx)("img",{src:f,alt:"Preview"}),!f&&(0,o.jsx)("p",{children:"Pick an image"})]}),(0,o.jsx)(i.Z,{type:"button",onClick:function(){n.current.click()},children:"Pick Image"})]}),s&&!m&&(0,o.jsx)("p",{children:e.errorText})]})}},6860:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(885),a=t(1413),i=t(2791),o=t(291),l=t(184),s=function(e,n){switch(n.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.val,isValid:(0,o.Gu)(n.val,n.validators)});case"TOUCHED":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},u=function(e){var n=(0,i.useReducer)(s,{value:e.initialValue||"",isValid:e.initialValidity||!1,isTouched:!1}),t=(0,r.Z)(n,2),a=t[0],o=t[1],u=e.id,c=e.onInput,d=a.value,f=a.isValid;(0,i.useEffect)((function(){c(u,d,f)}),[c,u,d,f]);var p=function(n){o({type:"CHANGE",val:n.target.value,validators:e.validators})},v=function(){o({type:"TOUCHED"})},h="input"===e.element?(0,l.jsx)("input",{type:e.type,id:e.id,onChange:p,onBlur:v,value:a.value}):(0,l.jsx)("textarea",{id:e.id,rows:e.rows||"3",onChange:p,onBlur:v,value:a.value});return(0,l.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),h,!a.isValid&&a.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},8984:function(e,n,t){t(2791);var r=t(4127),a=t(5945),i=t(184);n.Z=function(e){return(0,i.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},4127:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),a=(t(2791),t(4164)),i=t(1300),o=t(1776),l=t(184),s=function(e){var n=(0,l.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,l.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,l.jsx)("h2",{children:e.header})}),(0,l.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,l.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,l.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(n,document.querySelector("#modal"))},u=function(e){return(0,l.jsxs)(l.Fragment,{children:[e.show&&(0,l.jsx)(i.Z,{onClick:e.onCancel}),(0,l.jsx)(o.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,l.jsx)(s,(0,r.Z)({},e))})]})}},5094:function(e,n,t){var r=t(885),a=t(4942),i=t(1413),o=t(2791),l=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===n.id?t&&n.isValid:t&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},n.id,{value:n.val,isValid:n.isValid})),overallForm:t});case"SET_DATA":return{inputs:n.inputs,overallForm:n.overallForm};default:return e}};n.Z=function(e){var n=(0,o.useReducer)(l,e),t=(0,r.Z)(n,2),a=t[0],i=t[1];return{formState:a,inputHandler:(0,o.useCallback)((function(e,n,t){i({type:"INPUT_CHANGE",id:e,val:n,isValid:t})}),[]),setData:(0,o.useCallback)((function(e,n){i({type:"SET_DATA",inputs:e,overallForm:n})}),[])}}},9508:function(e,n,t){var r=t(5861),a=t(885),i=t(7757),o=t.n(i),l=t(4569),s=t.n(l),u=t(2791);n.Z=function(){var e=(0,u.useState)(!1),n=(0,a.Z)(e,2),t=n[0],i=n[1],l=(0,u.useState)(null),c=(0,a.Z)(l,2),d=c[0],f=c[1],p=(0,u.useRef)([]),v=(0,u.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(n){var t,r,a,l,u,c,d=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:"GET",r=d.length>2&&void 0!==d[2]?d[2]:null,a=d.length>3&&void 0!==d[3]?d[3]:{},i(!0),l=new AbortController,p.current.push(l),e.prev=6,e.next=9,s()({method:t,url:n,data:r,headers:a,signal:l.signal});case 9:return u=e.sent,c=u.data,p.current=p.current.filter((function(e){return e!==l})),i(!1),e.abrupt("return",c);case 16:return e.prev=16,e.t0=e.catch(6),i(!1),f(e.t0.response.data.message||"Something went wrong"),e.abrupt("return",{error:e.t0.response.data.message||"Something went wrong"});case 21:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(n){return e.apply(this,arguments)}}(),[]),h=(0,u.useCallback)((function(){return f(null)}),[]);return(0,u.useEffect)((function(){return function(){p.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:t,error:d,sendRequest:v,resetError:h}}},291:function(e,n,t){t.d(n,{Ox:function(){return c},CP:function(){return u},hg:function(){return s},Gu:function(){return d}});var r=t(8192);var a="REQUIRE",i="MINLENGTH",o="MAXLENGTH",l="EMAIL",s=function(){return{type:a}},u=function(e){return{type:i,val:e}},c=function(){return{type:l}},d=function(e,n){var t,s=!0,u=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){s=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(s)throw o}}}}(n);try{for(u.s();!(t=u.n()).done;){var c=t.value;c.type===a&&(s=s&&e.trim().length>0),c.type===i&&(s=s&&e.trim().length>=c.val),c.type===o&&(s=s&&e.trim().length<=c.val),"MIN"===c.type&&(s=s&&+e>=c.val),"MAX"===c.type&&(s=s&&+e<=c.val),c.type===l&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return s}},8055:function(){}}]);
//# sourceMappingURL=99.0367d4bb.chunk.js.map