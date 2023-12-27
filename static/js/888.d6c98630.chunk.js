"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888,76,638],{76:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(340),l=t(689),u="Cast_castList__ARoWn",d=t(184),v=function(){var e=(0,l.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),s=t[0],v=t[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,"34696298a8c2c13903b901c47d5a708f",t="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),n={api_key:"34696298a8c2c13903b901c47d5a708f"},r.next=6,o.Z.get(t,{params:n});case 6:a=r.sent,v(a.data.cast),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error",r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:u,children:s.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:"https://www.themoviedb.org/t/p/w138_and_h175_face".concat(e.profile_path),alt:e.name}),(0,d.jsx)("p",{children:e.name}),(0,d.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})})}},888:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(340),l=t(689),u=t(87),d=t(76),v=t(638),h="MovieDetails_container__o8VqJ",p="MovieDetails_details__tmd20",f="MovieDetails_movieInfo__XAfDM",m=t(184),x=function(){var e=(0,l.UO)().movieId,r=(0,i.useState)(null),t=(0,a.Z)(r,2),s=t[0],x=t[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,"34696298a8c2c13903b901c47d5a708f",t="https://api.themoviedb.org/3/movie/".concat(e),n={api_key:"34696298a8c2c13903b901c47d5a708f"},r.next=6,o.Z.get(t,{params:n});case 6:a=r.sent,x(a.data),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error",r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),s?(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("h1",{children:s.title}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(s.poster_path),alt:s.title}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{children:[" ",(0,m.jsx)("span",{children:"Score:"})," ",s.vote_average]}),(0,m.jsxs)("p",{children:[" ",(0,m.jsx)("span",{children:"Overview:"})," ",s.overview]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{children:"Genres: "}),s.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,m.jsxs)("nav",{className:f,children:[(0,m.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"}),(0,m.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),children:"Review"})]}),(0,m.jsxs)(l.Z5,{children:[(0,m.jsx)(l.AW,{path:"cast",element:(0,m.jsx)(d.default,{})}),(0,m.jsx)(l.AW,{path:"reviews",element:(0,m.jsx)(v.default,{})})]})]}):(0,m.jsx)("div",{children:"Loading..."})}},638:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(340),l=t(689),u="Review_reviewList__H0IS2",d=t(184),v=function(){var e=(0,l.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),s=t[0],v=t[1],h=(0,i.useState)(null),p=(0,a.Z)(h,2),f=p[0],m=p[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,"34696298a8c2c13903b901c47d5a708f",t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),n={api_key:"34696298a8c2c13903b901c47d5a708f"},r.next=6,o.Z.get(t,{params:n});case 6:(a=r.sent).data.results.length>0?v(a.data.results):m("There are no reviews available for this film."),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error retrieving data for reviews:",r.t0.message),m("Error loading reviews. Please try again later.");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,d.jsx)("div",{children:f?(0,d.jsx)("p",{children:f}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:u,children:s.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("p",{children:["Author: ",e.author]}),(0,d.jsx)("p",{children:e.content})]},e.id)}))})})})}}}]);
//# sourceMappingURL=888.d6c98630.chunk.js.map