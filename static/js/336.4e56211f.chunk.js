"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{377:function(e,n,r){r.d(n,{Df:function(){return u},TP:function(){return f},XT:function(){return l},tx:function(){return v},zv:function(){return p}});var t=r(861),a=r(757),c=r.n(a),i=r(340),s="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjBlZDdlNTI2NzRlZGI0NDFiZmQ1ZGNlZmRkOGEyMSIsInN1YiI6IjY1NzBhZDQ5ZGNiNmEzMDBlNDM5MTFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1hnyZJ0MflZFHZy5PeT8M3MwymRTggn_ollHZIX_XQ"}},u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(s,"trending/movie/day?language=en-US"),e.next=3,i.Z.get(n,o);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"search/movie?query=").concat(n,"&include_adult=false&language=en-US"),e.next=3,i.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(n,"?language=en-US"),e.next=3,i.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(n,"/credits?language=en-US"),e.next=3,i.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"movie/").concat(n,"/reviews?language=en-US&page=1"),e.next=3,i.Z.get(r,o);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},336:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(861),a=r(439),c=r(757),i=r.n(c),s=r(689),o=r(791),u=r(377),l="MovieBasicInfo_movieInfo__bKHnn",f="MovieBasicInfo_poster__hvLOo",p="MovieBasicInfo_movieDetails__ocpwg",v=r(87),d=r(184),h=function(e){var n,r,t=e.data,a=e.genres,c=Math.floor(10*t.vote_average),i=null!==(n=null===(r=(0,s.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";return(0,d.jsxs)("div",{children:[(0,d.jsx)(v.rU,{to:i,children:"Go back"}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{alt:"".concat(t.title," poster"),className:f,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path)}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("h2",{children:t.title}),(0,d.jsxs)("p",{children:["User Score: ",c,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:t.overview}),(0,d.jsx)("h4",{children:"Genres"}),null===a||void 0===a?void 0:a.map((function(e){return(0,d.jsx)("span",{children:e.name},e.id)}))]})]})]})},m="MovieMoreInfo_moreInfo__Oh7SC",x=function(){return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(s.j3,{})]})},g=function(){var e=(0,o.useState)({}),n=(0,a.Z)(e,2),r=n[0],c=n[1],l=(0,o.useState)([]),f=(0,a.Z)(l,2),p=f[0],v=f[1],m=(0,s.UO)().movieId,g=function(){var e=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.TP)(m);case 3:n=e.sent,c(n.data),r=n.data.genres,v(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){g()}),[m]),(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{data:r,genres:p}),(0,d.jsx)(x,{})]})}}}]);
//# sourceMappingURL=336.4e56211f.chunk.js.map