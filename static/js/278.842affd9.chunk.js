"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{377:function(e,t,n){n.d(t,{Df:function(){return s},TP:function(){return l},XT:function(){return f},tx:function(){return h},zv:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(340),i="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjBlZDdlNTI2NzRlZGI0NDFiZmQ1ZGNlZmRkOGEyMSIsInN1YiI6IjY1NzBhZDQ5ZGNiNmEzMDBlNDM5MTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1hnyZJ0MflZFHZy5PeT8M3MwymRTggn_ollHZIX_XQ"}},s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"trending/movie/day?language=en-US"),e.next=3,c.Z.get(t,o);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"search/movie?query=").concat(t,"&include_adult=false&language=en-US"),e.next=3,c.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"?language=en-US"),e.next=3,c.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/credits?language=en-US"),e.next=3,c.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/reviews?language=en-US&page=1"),e.next=3,c.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},278:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),i=n(791),o=n(87),s=n(689),f=n(377),l=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,o.lr)(),h=(0,a.Z)(p,2),v=h[0],d=h[1],m=v.get("query")||"",Z=(0,s.TH)(),g=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.XT)(m);case 3:t=e.sent,u(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){g(m)}),[m]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({query:e.target.firstElementChild.value})},children:[(0,l.jsx)("input",{defaultValue:m,type:"text",autoComplete:"off",placeholder:"Search movies"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"".concat(e.id),state:{from:Z},children:e.title})},"".concat(e.id))}))})]})}}}]);
//# sourceMappingURL=278.842affd9.chunk.js.map