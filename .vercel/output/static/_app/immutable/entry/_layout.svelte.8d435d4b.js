import{C as ne,S as O,i as U,s as T,D as G,E,F as ie,e as H,G as ue,m as v,h as m,H as R,b as I,I as g,J,K,L as Q,M as Y,g as $,d as N,N as pe,O as oe,P as B,y as D,z as L,A as V,Q as fe,B as P,k as p,l as b,n as k,R as be,v as ke,f as $e,T as Ne,a as w,q as z,c as C,r as M,U as he,V as _e,W as q}from"../chunks/index.bd770e55.js";import{t as me}from"../chunks/config.ee338b43.js";import{w as Ee}from"../chunks/index.633d3211.js";function ye(o){const e=o-1;return e*e*e+1}function de(o,{delay:e=0,duration:s=400,easing:l=ye,x:t=0,y:n=0,opacity:c=0}={}){const a=getComputedStyle(o),f=+a.opacity,r=a.transform==="none"?"":a.transform,u=f*(1-c),[_,i]=ne(t),[h,d]=ne(n);return{delay:e,duration:s,easing:l,css:(y,S)=>`
			transform: ${r} translate(${(1-y)*_}${i}, ${(1-y)*h}${d});
			opacity: ${f-u*S}`}}const ae={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function re(o,e,s){const l=o.slice();return l[10]=e[s][0],l[11]=e[s][1],l}function Z(o){let e,s=[o[11]],l={};for(let t=0;t<s.length;t+=1)l=E(l,s[t]);return{c(){e=ie(o[10]),this.h()},l(t){e=ue(t,o[10],{}),v(e).forEach(m),this.h()},h(){R(e,l)},m(t,n){I(t,e,n)},p(t,n){R(e,l=Y(s,[n&32&&t[11]]))},d(t){t&&m(e)}}}function ce(o){let e=o[10],s,l=o[10]&&Z(o);return{c(){l&&l.c(),s=H()},l(t){l&&l.l(t),s=H()},m(t,n){l&&l.m(t,n),I(t,s,n)},p(t,n){t[10]?e?T(e,t[10])?(l.d(1),l=Z(t),e=t[10],l.c(),l.m(s.parentNode,s)):l.p(t,n):(l=Z(t),e=t[10],l.c(),l.m(s.parentNode,s)):e&&(l.d(1),l=null,e=t[10])},d(t){t&&m(s),l&&l.d(t)}}}function Se(o){let e,s,l,t,n,c=o[5],a=[];for(let i=0;i<c.length;i+=1)a[i]=ce(re(o,c,i));const f=o[9].default,r=G(f,o,o[8],null);let u=[ae,o[6],{width:o[2]},{height:o[2]},{stroke:o[1]},{"stroke-width":l=o[4]?Number(o[3])*24/Number(o[2]):o[3]},{class:t=`lucide-icon lucide lucide-${o[0]} ${o[7].class??""}`}],_={};for(let i=0;i<u.length;i+=1)_=E(_,u[i]);return{c(){e=ie("svg");for(let i=0;i<a.length;i+=1)a[i].c();s=H(),r&&r.c(),this.h()},l(i){e=ue(i,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var h=v(e);for(let d=0;d<a.length;d+=1)a[d].l(h);s=H(),r&&r.l(h),h.forEach(m),this.h()},h(){R(e,_)},m(i,h){I(i,e,h);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(e,null);g(e,s),r&&r.m(e,null),n=!0},p(i,[h]){if(h&32){c=i[5];let d;for(d=0;d<c.length;d+=1){const y=re(i,c,d);a[d]?a[d].p(y,h):(a[d]=ce(y),a[d].c(),a[d].m(e,s))}for(;d<a.length;d+=1)a[d].d(1);a.length=c.length}r&&r.p&&(!n||h&256)&&J(r,f,i,i[8],n?Q(f,i[8],h,null):K(i[8]),null),R(e,_=Y(u,[ae,h&64&&i[6],(!n||h&4)&&{width:i[2]},(!n||h&4)&&{height:i[2]},(!n||h&2)&&{stroke:i[1]},(!n||h&28&&l!==(l=i[4]?Number(i[3])*24/Number(i[2]):i[3]))&&{"stroke-width":l},(!n||h&129&&t!==(t=`lucide-icon lucide lucide-${i[0]} ${i[7].class??""}`))&&{class:t}]))},i(i){n||($(r,i),n=!0)},o(i){N(r,i),n=!1},d(i){i&&m(e),pe(a,i),r&&r.d(i)}}}function Ae(o,e,s){const l=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let t=oe(e,l),{$$slots:n={},$$scope:c}=e,{name:a}=e,{color:f="currentColor"}=e,{size:r=24}=e,{strokeWidth:u=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:i}=e;return o.$$set=h=>{s(7,e=E(E({},e),B(h))),s(6,t=oe(e,l)),"name"in h&&s(0,a=h.name),"color"in h&&s(1,f=h.color),"size"in h&&s(2,r=h.size),"strokeWidth"in h&&s(3,u=h.strokeWidth),"absoluteStrokeWidth"in h&&s(4,_=h.absoluteStrokeWidth),"iconNode"in h&&s(5,i=h.iconNode),"$$scope"in h&&s(8,c=h.$$scope)},e=B(e),[a,f,r,u,_,i,t,e,c,n]}class Ie extends O{constructor(e){super(),U(this,e,Ae,Se,T,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const ge=Ie;function We(o){let e;const s=o[2].default,l=G(s,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&J(l,s,t,t[3],e?Q(s,t[3],n,null):K(t[3]),null)},i(t){e||($(l,t),e=!0)},o(t){N(l,t),e=!1},d(t){l&&l.d(t)}}}function ze(o){let e,s;const l=[{name:"moon"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[We]},$$scope:{ctx:o}};for(let n=0;n<l.length;n+=1)t=E(t,l[n]);return e=new ge({props:t}),{c(){D(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,c){V(e,n,c),s=!0},p(n,[c]){const a=c&3?Y(l,[l[0],c&2&&fe(n[1]),c&1&&{iconNode:n[0]}]):{};c&8&&(a.$$scope={dirty:c,ctx:n}),e.$set(a)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){N(e.$$.fragment,n),s=!1},d(n){P(e,n)}}}function Me(o,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["path",{d:"M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return o.$$set=c=>{s(1,e=E(E({},e),B(c))),"$$scope"in c&&s(3,t=c.$$scope)},e=B(e),[n,e,l,t]}class Te extends O{constructor(e){super(),U(this,e,Me,ze,T,{})}}const we=Te;function Ce(o){let e;const s=o[2].default,l=G(s,o,o[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,n){l&&l.p&&(!e||n&8)&&J(l,s,t,t[3],e?Q(s,t[3],n,null):K(t[3]),null)},i(t){e||($(l,t),e=!0)},o(t){N(l,t),e=!1},d(t){l&&l.d(t)}}}function De(o){let e,s;const l=[{name:"sun"},o[1],{iconNode:o[0]}];let t={$$slots:{default:[Ce]},$$scope:{ctx:o}};for(let n=0;n<l.length;n+=1)t=E(t,l[n]);return e=new ge({props:t}),{c(){D(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,c){V(e,n,c),s=!0},p(n,[c]){const a=c&3?Y(l,[l[0],c&2&&fe(n[1]),c&1&&{iconNode:n[0]}]):{};c&8&&(a.$$scope={dirty:c,ctx:n}),e.$set(a)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){N(e.$$.fragment,n),s=!1},d(n){P(e,n)}}}function Le(o,e,s){let{$$slots:l={},$$scope:t}=e;const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return o.$$set=c=>{s(1,e=E(E({},e),B(c))),"$$scope"in c&&s(3,t=c.$$scope)},e=B(e),[n,e,l,t]}class Ve extends O{constructor(e){super(),U(this,e,Le,De,T,{})}}const Pe=Ve,Oe=localStorage.getItem("color-scheme"),ve=Ee(Oe??"dark");function Ue(){ve.update(o=>{const e=o==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function Be(o){let e,s,l,t,n,c,a;return s=new we({}),{c(){e=p("div"),D(s.$$.fragment),l=w(),t=p("span"),n=z("Dark"),this.h()},l(f){e=b(f,"DIV",{class:!0});var r=v(e);L(s.$$.fragment,r),l=C(r),t=b(r,"SPAN",{});var u=v(t);n=M(u,"Dark"),u.forEach(m),r.forEach(m),this.h()},h(){k(e,"class","svelte-114mtci")},m(f,r){I(f,e,r),V(s,e,null),g(e,l),g(e,t),g(t,n),a=!0},i(f){a||($(s.$$.fragment,f),c||he(()=>{c=_e(e,de,{y:-10}),c.start()}),a=!0)},o(f){N(s.$$.fragment,f),a=!1},d(f){f&&m(e),P(s)}}}function Fe(o){let e,s,l,t,n,c,a;return s=new Pe({}),{c(){e=p("div"),D(s.$$.fragment),l=w(),t=p("span"),n=z("Light"),this.h()},l(f){e=b(f,"DIV",{class:!0});var r=v(e);L(s.$$.fragment,r),l=C(r),t=b(r,"SPAN",{});var u=v(t);n=M(u,"Light"),u.forEach(m),r.forEach(m),this.h()},h(){k(e,"class","svelte-114mtci")},m(f,r){I(f,e,r),V(s,e,null),g(e,l),g(e,t),g(t,n),a=!0},i(f){a||($(s.$$.fragment,f),c||he(()=>{c=_e(e,de,{y:10}),c.start()}),a=!0)},o(f){N(s.$$.fragment,f),a=!1},d(f){f&&m(e),P(s)}}}function je(o){let e,s,l,t,n,c;const a=[Fe,Be],f=[];function r(u,_){return u[0]==="dark"?0:1}return s=r(o),l=f[s]=a[s](o),{c(){e=p("button"),l.c(),this.h()},l(u){e=b(u,"BUTTON",{"aria-label":!0,class:!0});var _=v(e);l.l(_),_.forEach(m),this.h()},h(){k(e,"aria-label","Toggle theme"),k(e,"class","svelte-114mtci")},m(u,_){I(u,e,_),f[s].m(e,null),t=!0,n||(c=be(e,"click",Ue),n=!0)},p(u,[_]){let i=s;s=r(u),s!==i&&(ke(),N(f[i],1,1,()=>{f[i]=null}),$e(),l=f[s],l||(l=f[s]=a[s](u),l.c()),$(l,1),l.m(e,null))},i(u){t||($(l),t=!0)},o(u){N(l),t=!1},d(u){u&&m(e),f[s].d(),n=!1,c()}}}function qe(o,e,s){let l;return Ne(o,ve,t=>s(0,l=t)),[l]}class He extends O{constructor(e){super(),U(this,e,qe,je,T,{})}}function Re(o){let e,s,l,t=me+"",n,c,a,f,r,u,_,i,h,d,y,S,F;return S=new He({}),{c(){e=p("nav"),s=p("a"),l=p("b"),n=z(t),c=w(),a=p("ul"),f=p("li"),r=p("a"),u=z("About"),_=w(),i=p("li"),h=p("a"),d=z("Contact"),y=w(),D(S.$$.fragment),this.h()},l(A){e=b(A,"NAV",{class:!0});var W=v(e);s=b(W,"A",{href:!0,class:!0});var X=v(s);l=b(X,"B",{});var x=v(l);n=M(x,t),x.forEach(m),X.forEach(m),c=C(W),a=b(W,"UL",{class:!0});var j=v(a);f=b(j,"LI",{});var ee=v(f);r=b(ee,"A",{href:!0,class:!0});var te=v(r);u=M(te,"About"),te.forEach(m),ee.forEach(m),_=C(j),i=b(j,"LI",{});var le=v(i);h=b(le,"A",{href:!0,class:!0});var se=v(h);d=M(se,"Contact"),se.forEach(m),le.forEach(m),j.forEach(m),y=C(W),L(S.$$.fragment,W),W.forEach(m),this.h()},h(){k(s,"href","/"),k(s,"class","title svelte-scea26"),k(r,"href","/about"),k(r,"class","svelte-scea26"),k(h,"href","/contact"),k(h,"class","svelte-scea26"),k(a,"class","links svelte-scea26"),k(e,"class","svelte-scea26")},m(A,W){I(A,e,W),g(e,s),g(s,l),g(l,n),g(e,c),g(e,a),g(a,f),g(f,r),g(r,u),g(a,_),g(a,i),g(i,h),g(h,d),g(e,y),V(S,e,null),F=!0},p:q,i(A){F||($(S.$$.fragment,A),F=!0)},o(A){N(S.$$.fragment,A),F=!1},d(A){A&&m(e),P(S)}}}class Ge extends O{constructor(e){super(),U(this,e,null,Re,T,{})}}function Je(o){let e,s,l=me+"",t,n,c=new Date().getFullYear()+"",a;return{c(){e=p("footer"),s=p("p"),t=z(l),n=z(" © "),a=z(c),this.h()},l(f){e=b(f,"FOOTER",{class:!0});var r=v(e);s=b(r,"P",{class:!0});var u=v(s);t=M(u,l),n=M(u," © "),a=M(u,c),u.forEach(m),r.forEach(m),this.h()},h(){k(s,"class","svelte-1a82mgg"),k(e,"class","svelte-1a82mgg")},m(f,r){I(f,e,r),g(e,s),g(s,t),g(s,n),g(s,a)},p:q,i:q,o:q,d(f){f&&m(e)}}}class Ke extends O{constructor(e){super(),U(this,e,null,Je,T,{})}}function Qe(o){let e,s,l,t,n,c,a;s=new Ge({});const f=o[1].default,r=G(f,o,o[0],null);return c=new Ke({}),{c(){e=p("div"),D(s.$$.fragment),l=w(),t=p("main"),r&&r.c(),n=w(),D(c.$$.fragment),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=v(e);L(s.$$.fragment,_),l=C(_),t=b(_,"MAIN",{class:!0});var i=v(t);r&&r.l(i),i.forEach(m),n=C(_),L(c.$$.fragment,_),_.forEach(m),this.h()},h(){k(t,"class","svelte-plfzno"),k(e,"class","layout svelte-plfzno")},m(u,_){I(u,e,_),V(s,e,null),g(e,l),g(e,t),r&&r.m(t,null),g(e,n),V(c,e,null),a=!0},p(u,[_]){r&&r.p&&(!a||_&1)&&J(r,f,u,u[0],a?Q(f,u[0],_,null):K(u[0]),null)},i(u){a||($(s.$$.fragment,u),$(r,u),$(c.$$.fragment,u),a=!0)},o(u){N(s.$$.fragment,u),N(r,u),N(c.$$.fragment,u),a=!1},d(u){u&&m(e),P(s),r&&r.d(u),P(c)}}}function Ye(o,e,s){let{$$slots:l={},$$scope:t}=e;return o.$$set=n=>{"$$scope"in n&&s(0,t=n.$$scope)},[t,l]}class et extends O{constructor(e){super(),U(this,e,Ye,Qe,T,{})}}export{et as default};