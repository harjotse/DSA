(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3945],{10990:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Nt},p8:function(){return Nt}});var r,i,a,s,o,l,u,c,f=n(25317),p={},d=180/Math.PI,h=Math.PI/180,g=Math.atan2,E=/([A-Z])/g,b=/(left|right|width|margin|padding|x)/i,O=/[\s,\(]\S/,y={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},m=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},T=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},I=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},N=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},A=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},v=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},S=function(t,e,n){return t.style[e]=n},R=function(t,e,n){return t.style.setProperty(e,n)},L=function(t,e,n){return t._gsap[e]=n},_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},C=function(t,e,n,r,i){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},x=function(t,e,n,r,i){var a=t._gsap;a[e]=n,a.renderTransform(i,a)},P="transform",w=P+"Origin",M=function(t){var e=this,n=this.target,r=n.style;if(t in p){if(this.tfm=this.tfm||{},"transform"!==t&&(~(t=y[t]||t).indexOf(",")?t.split(",").forEach((function(t){return e.tfm[t]=Q(n,t)})):this.tfm[t]=n._gsap.x?n._gsap[t]:Q(n,t)),this.props.indexOf(P)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(w,"")),t=P}r&&this.props.push(t,r[t])},D=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},F=function(){var t,e,n=this.props,r=this.target,i=r.style,a=r._gsap;for(t=0;t<n.length;t+=2)n[t+1]?i[n[t]]=n[t+1]:i.removeProperty(n[t].replace(E,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),!(t=u())||t.isStart||i[P]||(D(i),a.uncache=1)}},U=function(t,e){var n={target:t,props:[],revert:F,save:M};return e&&e.split(",").forEach((function(t){return n.save(t)})),n},B=function(t,e){var n=i.createElementNS?i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):i.createElement(t);return n.style?n:i.createElement(t)},k=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(E,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,G(n)||n,1)||""},Y="O,Moz,ms,Ms,Webkit".split(","),G=function(t,e,n){var r=(e||o).style,i=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(Y[i]+t in r););return i<0?null:(3===i?"ms":i>=0?Y[i]:"")+t},X=function(){"undefined"!==typeof window&&window.document&&(r=window,i=r.document,a=i.documentElement,o=B("div")||{style:{}},B("div"),P=G(P),w=P+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",c=!!G("perspective"),u=f.p8.core.reverting,s=1)},V=function t(e){var n,r=B("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,o=this.style.cssText;if(a.appendChild(r),r.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(l){}else this._gsapBBox&&(n=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),a.removeChild(r),this.style.cssText=o,n},H=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},W=function(t){var e;try{e=t.getBBox()}catch(n){e=V.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===V||(e=V.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+H(t,["x","cx","x1"])||0,y:+H(t,["y","cy","y1"])||0,width:0,height:0}},j=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!W(t))},K=function(t,e){if(e){var n=t.style;e in p&&e!==w&&(e=P),n.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),n.removeProperty(e.replace(E,"-$1").toLowerCase())):n.removeAttribute(e)}},z=function(t,e,n,r,i,a){var s=new f.Fo(t._pt,e,n,0,1,a?v:A);return t._pt=s,s.b=r,s.e=i,t._props.push(n),s},$={deg:1,rad:1,turn:1},Z={grid:1,flex:1},q=function t(e,n,r,a){var s,l,u,c,d=parseFloat(r)||0,h=(r+"").trim().substr((d+"").length)||"px",g=o.style,E=b.test(n),O="svg"===e.tagName.toLowerCase(),y=(O?"client":"offset")+(E?"Width":"Height"),m=100,T="px"===a,I="%"===a;return a===h||!d||$[a]||$[h]?d:("px"!==h&&!T&&(d=t(e,n,r,"px")),c=e.getCTM&&j(e),!I&&"%"!==h||!p[n]&&!~n.indexOf("adius")?(g[E?"width":"height"]=m+(T?h:a),l=~n.indexOf("adius")||"em"===a&&e.appendChild&&!O?e:e.parentNode,c&&(l=(e.ownerSVGElement||{}).parentNode),l&&l!==i&&l.appendChild||(l=i.body),(u=l._gsap)&&I&&u.width&&E&&u.time===f.xr.time&&!u.uncache?(0,f.Pr)(d/u.width*m):((I||"%"===h)&&!Z[k(l,"display")]&&(g.position=k(e,"position")),l===e&&(g.position="static"),l.appendChild(o),s=o[y],l.removeChild(o),g.position="absolute",E&&I&&((u=(0,f.DY)(l)).time=f.xr.time,u.width=l[y]),(0,f.Pr)(T?s*d/m:s&&d?m/s*d:0))):(s=c?e.getBBox()[E?"width":"height"]:e[y],(0,f.Pr)(I?d/s*m:d/100*s)))},Q=function(t,e,n,r){var i;return s||X(),e in y&&"transform"!==e&&~(e=y[e]).indexOf(",")&&(e=e.split(",")[0]),p[e]&&"transform"!==e?(i=ct(t,r),i="transformOrigin"!==e?i[e]:i.svg?i.origin:ft(k(t,w))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=rt[e]&&rt[e](t,e,n)||k(t,e)||(0,f.Ok)(t,e)||("opacity"===e?1:0)),n&&!~(i+"").trim().indexOf(" ")?q(t,e,i,n)+n:i},J=function(t,e,n,r){if(!n||"none"===n){var i=G(e,t,1),a=i&&k(t,i,1);a&&a!==n?(e=i,n=a):"borderColor"===e&&(n=k(t,"borderTopColor"))}var s,o,l,u,c,p,d,h,g,E,b,O=new f.Fo(this._pt,t.style,e,0,1,f.Ks),y=0,m=0;if(O.b=n,O.e=r,n+="","auto"===(r+="")&&(t.style[e]=r,r=k(t,e)||r,t.style[e]=n),s=[n,r],(0,f.kr)(s),r=s[1],l=(n=s[0]).match(f.d4)||[],(r.match(f.d4)||[]).length){for(;o=f.d4.exec(r);)d=o[0],g=r.substring(y,o.index),c?c=(c+1)%5:"rgba("!==g.substr(-5)&&"hsla("!==g.substr(-5)||(c=1),d!==(p=l[m++]||"")&&(u=parseFloat(p)||0,b=p.substr((u+"").length),"="===d.charAt(1)&&(d=(0,f.cy)(u,d)+b),h=parseFloat(d),E=d.substr((h+"").length),y=f.d4.lastIndex-E.length,E||(E=E||f.Fc.units[e]||b,y===r.length&&(r+=E,O.e+=E)),b!==E&&(u=q(t,e,p,E)||0),O._pt={_next:O._pt,p:g||1===m?g:",",s:u,c:h-u,m:c&&c<4||"zIndex"===e?Math.round:0});O.c=y<r.length?r.substring(y,r.length):""}else O.r="display"===e&&"none"===r?v:A;return f.bQ.test(r)&&(O.e=0),this._pt=O,O},tt={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},et=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(t=n,n=r,r=t),e[0]=tt[n]||n,e[1]=tt[r]||r,e.join(" ")},nt=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,a=e.t,s=a.style,o=e.u,l=a._gsap;if("all"===o||!0===o)s.cssText="",r=1;else for(i=(o=o.split(",")).length;--i>-1;)n=o[i],p[n]&&(r=1,n="transformOrigin"===n?w:P),K(a,n);r&&(K(a,P),l&&(l.svg&&a.removeAttribute("transform"),ct(a,1),l.uncache=1,D(s)))}},rt={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var a=t._pt=new f.Fo(t._pt,e,n,0,0,nt);return a.u=r,a.pr=-10,a.tween=i,t._props.push(n),1}}},it=[1,0,0,1,0,0],at={},st=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},ot=function(t){var e=k(t,P);return st(e)?it:e.substr(7).match(f.SI).map(f.Pr)},lt=function(t,e){var n,r,i,s,o=t._gsap||(0,f.DY)(t),l=t.style,u=ot(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?it:u:(u!==it||t.offsetParent||t===a||o.svg||(i=l.display,l.display="block",(n=t.parentNode)&&t.offsetParent||(s=1,r=t.nextElementSibling,a.appendChild(t)),u=ot(t),i?l.display=i:K(t,"display"),s&&(r?n.insertBefore(t,r):n?n.appendChild(t):a.removeChild(t))),e&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},ut=function(t,e,n,r,i,a){var s,o,l,u=t._gsap,c=i||lt(t,!0),f=u.xOrigin||0,p=u.yOrigin||0,d=u.xOffset||0,h=u.yOffset||0,g=c[0],E=c[1],b=c[2],O=c[3],y=c[4],m=c[5],T=e.split(" "),I=parseFloat(T[0])||0,N=parseFloat(T[1])||0;n?c!==it&&(o=g*O-E*b)&&(l=I*(-E/o)+N*(g/o)-(g*m-E*y)/o,I=I*(O/o)+N*(-b/o)+(b*m-O*y)/o,N=l):(I=(s=W(t)).x+(~T[0].indexOf("%")?I/100*s.width:I),N=s.y+(~(T[1]||T[0]).indexOf("%")?N/100*s.height:N)),r||!1!==r&&u.smooth?(y=I-f,m=N-p,u.xOffset=d+(y*g+m*b)-y,u.yOffset=h+(y*E+m*O)-m):u.xOffset=u.yOffset=0,u.xOrigin=I,u.yOrigin=N,u.smooth=!!r,u.origin=e,u.originIsAbsolute=!!n,t.style[w]="0px 0px",a&&(z(a,u,"xOrigin",f,I),z(a,u,"yOrigin",p,N),z(a,u,"xOffset",d,u.xOffset),z(a,u,"yOffset",h,u.yOffset)),t.setAttribute("data-svg-origin",I+" "+N)},ct=function(t,e){var n=t._gsap||new f.l1(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,a,s,o,l,u,p,E,b,O,y,m,T,I,N,A,v,S,R,L,_,C,x,M,D,F,U,B,Y,G,X,V=t.style,H=n.scaleX<0,W="px",K="deg",z=getComputedStyle(t),$=k(t,w)||"0";return r=i=a=l=u=p=E=b=O=0,s=o=1,n.svg=!(!t.getCTM||!j(t)),z.translate&&("none"===z.translate&&"none"===z.scale&&"none"===z.rotate||(V[P]=("none"!==z.translate?"translate3d("+(z.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==z.rotate?"rotate("+z.rotate+") ":"")+("none"!==z.scale?"scale("+z.scale.split(" ").join(",")+") ":"")+z[P]),V.scale=V.rotate=V.translate="none"),T=lt(t,n.svg),n.svg&&(n.uncache?(M=t.getBBox(),$=n.xOrigin-M.x+"px "+(n.yOrigin-M.y)+"px",x=""):x=!e&&t.getAttribute("data-svg-origin"),ut(t,x||$,!!x||n.originIsAbsolute,!1!==n.smooth,T)),y=n.xOrigin||0,m=n.yOrigin||0,T!==it&&(v=T[0],S=T[1],R=T[2],L=T[3],r=_=T[4],i=C=T[5],6===T.length?(s=Math.sqrt(v*v+S*S),o=Math.sqrt(L*L+R*R),l=v||S?g(S,v)*d:0,(E=R||L?g(R,L)*d+l:0)&&(o*=Math.abs(Math.cos(E*h))),n.svg&&(r-=y-(y*v+m*R),i-=m-(y*S+m*L))):(X=T[6],Y=T[7],F=T[8],U=T[9],B=T[10],G=T[11],r=T[12],i=T[13],a=T[14],u=(I=g(X,B))*d,I&&(x=_*(N=Math.cos(-I))+F*(A=Math.sin(-I)),M=C*N+U*A,D=X*N+B*A,F=_*-A+F*N,U=C*-A+U*N,B=X*-A+B*N,G=Y*-A+G*N,_=x,C=M,X=D),p=(I=g(-R,B))*d,I&&(N=Math.cos(-I),G=L*(A=Math.sin(-I))+G*N,v=x=v*N-F*A,S=M=S*N-U*A,R=D=R*N-B*A),l=(I=g(S,v))*d,I&&(x=v*(N=Math.cos(I))+S*(A=Math.sin(I)),M=_*N+C*A,S=S*N-v*A,C=C*N-_*A,v=x,_=M),u&&Math.abs(u)+Math.abs(l)>359.9&&(u=l=0,p=180-p),s=(0,f.Pr)(Math.sqrt(v*v+S*S+R*R)),o=(0,f.Pr)(Math.sqrt(C*C+X*X)),I=g(_,C),E=Math.abs(I)>2e-4?I*d:0,O=G?1/(G<0?-G:G):0),n.svg&&(x=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!st(k(t,P)),x&&t.setAttribute("transform",x))),Math.abs(E)>90&&Math.abs(E)<270&&(H?(s*=-1,E+=l<=0?180:-180,l+=l<=0?180:-180):(o*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=r-((n.xPercent=r&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+W,n.y=i-((n.yPercent=i&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+W,n.z=a+W,n.scaleX=(0,f.Pr)(s),n.scaleY=(0,f.Pr)(o),n.rotation=(0,f.Pr)(l)+K,n.rotationX=(0,f.Pr)(u)+K,n.rotationY=(0,f.Pr)(p)+K,n.skewX=E+K,n.skewY=b+K,n.transformPerspective=O+W,(n.zOrigin=parseFloat($.split(" ")[2])||0)&&(V[w]=ft($)),n.xOffset=n.yOffset=0,n.force3D=f.Fc.force3D,n.renderTransform=n.svg?Ot:c?bt:dt,n.uncache=0,n},ft=function(t){return(t=t.split(" "))[0]+" "+t[1]},pt=function(t,e,n){var r=(0,f.Wy)(e);return(0,f.Pr)(parseFloat(e)+parseFloat(q(t,"x",n+"px",r)))+r},dt=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bt(t,e)},ht="0deg",gt="0px",Et=") ",bt=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,a=n.x,s=n.y,o=n.z,l=n.rotation,u=n.rotationY,c=n.rotationX,f=n.skewX,p=n.skewY,d=n.scaleX,g=n.scaleY,E=n.transformPerspective,b=n.force3D,O=n.target,y=n.zOrigin,m="",T="auto"===b&&t&&1!==t||!0===b;if(y&&(c!==ht||u!==ht)){var I,N=parseFloat(u)*h,A=Math.sin(N),v=Math.cos(N);N=parseFloat(c)*h,I=Math.cos(N),a=pt(O,a,A*I*-y),s=pt(O,s,-Math.sin(N)*-y),o=pt(O,o,v*I*-y+y)}E!==gt&&(m+="perspective("+E+Et),(r||i)&&(m+="translate("+r+"%, "+i+"%) "),(T||a!==gt||s!==gt||o!==gt)&&(m+=o!==gt||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Et),l!==ht&&(m+="rotate("+l+Et),u!==ht&&(m+="rotateY("+u+Et),c!==ht&&(m+="rotateX("+c+Et),f===ht&&p===ht||(m+="skew("+f+", "+p+Et),1===d&&1===g||(m+="scale("+d+", "+g+Et),O.style[P]=m||"translate(0, 0)"},Ot=function(t,e){var n,r,i,a,s,o=e||this,l=o.xPercent,u=o.yPercent,c=o.x,p=o.y,d=o.rotation,g=o.skewX,E=o.skewY,b=o.scaleX,O=o.scaleY,y=o.target,m=o.xOrigin,T=o.yOrigin,I=o.xOffset,N=o.yOffset,A=o.forceCSS,v=parseFloat(c),S=parseFloat(p);d=parseFloat(d),g=parseFloat(g),(E=parseFloat(E))&&(g+=E=parseFloat(E),d+=E),d||g?(d*=h,g*=h,n=Math.cos(d)*b,r=Math.sin(d)*b,i=Math.sin(d-g)*-O,a=Math.cos(d-g)*O,g&&(E*=h,s=Math.tan(g-E),i*=s=Math.sqrt(1+s*s),a*=s,E&&(s=Math.tan(E),n*=s=Math.sqrt(1+s*s),r*=s)),n=(0,f.Pr)(n),r=(0,f.Pr)(r),i=(0,f.Pr)(i),a=(0,f.Pr)(a)):(n=b,a=O,r=i=0),(v&&!~(c+"").indexOf("px")||S&&!~(p+"").indexOf("px"))&&(v=q(y,"x",c,"px"),S=q(y,"y",p,"px")),(m||T||I||N)&&(v=(0,f.Pr)(v+m-(m*n+T*i)+I),S=(0,f.Pr)(S+T-(m*r+T*a)+N)),(l||u)&&(s=y.getBBox(),v=(0,f.Pr)(v+l/100*s.width),S=(0,f.Pr)(S+u/100*s.height)),s="matrix("+n+","+r+","+i+","+a+","+v+","+S+")",y.setAttribute("transform",s),A&&(y.style[P]=s)},yt=function(t,e,n,r,i){var a,s,o=360,l=(0,f.r9)(i),u=parseFloat(i)*(l&&~i.indexOf("rad")?d:1)-r,c=r+u+"deg";return l&&("short"===(a=i.split("_")[1])&&(u%=o)!==u%180&&(u+=u<0?o:-360),"cw"===a&&u<0?u=(u+36e9)%o-~~(u/o)*o:"ccw"===a&&u>0&&(u=(u-36e9)%o-~~(u/o)*o)),t._pt=s=new f.Fo(t._pt,e,n,r,u,T),s.e=c,s.u="deg",t._props.push(n),s},mt=function(t,e){for(var n in e)t[n]=e[n];return t},Tt=function(t,e,n){var r,i,a,s,o,l,u,c=mt({},n._gsap),d=n.style;for(i in c.svg?(a=n.getAttribute("transform"),n.setAttribute("transform",""),d[P]=e,r=ct(n,1),K(n,P),n.setAttribute("transform",a)):(a=getComputedStyle(n)[P],d[P]=e,r=ct(n,1),d[P]=a),p)(a=c[i])!==(s=r[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(o=(0,f.Wy)(a)!==(u=(0,f.Wy)(s))?q(n,i,a,u):parseFloat(a),l=parseFloat(s),t._pt=new f.Fo(t._pt,r,i,o,l-o,m),t._pt.u=u||0,t._props.push(i));mt(r,c)};(0,f.fS)("padding,margin,Width,Radius",(function(t,e){var n="Top",r="Right",i="Bottom",a="Left",s=(e<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map((function(n){return e<2?t+n:"border"+n+t}));rt[e>1?"border"+t:t]=function(t,e,n,r,i){var a,o;if(arguments.length<4)return a=s.map((function(e){return Q(t,e,n)})),5===(o=a.join(" ")).split(a[0]).length?a[0]:o;a=(r+"").split(" "),o={},s.forEach((function(t,e){return o[t]=a[e]=a[e]||a[(e-1)/2|0]})),t.init(e,o,i)}}));var It={name:"css",register:X,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var a,o,l,u,c,d,h,g,E,b,T,A,v,S,R,L,_=this._props,C=t.style,x=n.vars.startAt;for(h in s||X(),this.styles=this.styles||U(t),L=this.styles.props,this.tween=n,e)if("autoRound"!==h&&(o=e[h],!f.$i[h]||!(0,f.if)(h,e,n,r,t,i)))if(c=typeof o,d=rt[h],"function"===c&&(c=typeof(o=o.call(n,r,t,i))),"string"===c&&~o.indexOf("random(")&&(o=(0,f.UI)(o)),d)d(this,t,h,o,n)&&(R=1);else if("--"===h.substr(0,2))a=(getComputedStyle(t).getPropertyValue(h)+"").trim(),o+="",f.GN.lastIndex=0,f.GN.test(a)||(g=(0,f.Wy)(a),E=(0,f.Wy)(o)),E?g!==E&&(a=q(t,h,a,E)+E):g&&(o+=g),this.add(C,"setProperty",a,o,r,i,0,0,h),_.push(h),L.push(h,C[h]);else if("undefined"!==c){if(x&&h in x?(a="function"===typeof x[h]?x[h].call(n,r,t,i):x[h],(0,f.r9)(a)&&~a.indexOf("random(")&&(a=(0,f.UI)(a)),(0,f.Wy)(a+"")||(a+=f.Fc.units[h]||(0,f.Wy)(Q(t,h))||""),"="===(a+"").charAt(1)&&(a=Q(t,h))):a=Q(t,h),u=parseFloat(a),(b="string"===c&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),l=parseFloat(o),h in y&&("autoAlpha"===h&&(1===u&&"hidden"===Q(t,"visibility")&&l&&(u=0),L.push("visibility",C.visibility),z(this,C,"visibility",u?"inherit":"hidden",l?"inherit":"hidden",!l)),"scale"!==h&&"transform"!==h&&~(h=y[h]).indexOf(",")&&(h=h.split(",")[0])),T=h in p)if(this.styles.save(h),A||((v=t._gsap).renderTransform&&!e.parseTransform||ct(t,e.parseTransform),S=!1!==e.smoothOrigin&&v.smooth,(A=this._pt=new f.Fo(this._pt,C,P,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===h)this._pt=new f.Fo(this._pt,v,"scaleY",v.scaleY,(b?(0,f.cy)(v.scaleY,b+l):l)-v.scaleY||0,m),this._pt.u=0,_.push("scaleY",h),h+="X";else{if("transformOrigin"===h){L.push(w,C[w]),o=et(o),v.svg?ut(t,o,0,S,0,this):((E=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&z(this,v,"zOrigin",v.zOrigin,E),z(this,C,h,ft(a),ft(o)));continue}if("svgOrigin"===h){ut(t,o,1,S,0,this);continue}if(h in at){yt(this,v,h,u,b?(0,f.cy)(u,b+o):o);continue}if("smoothOrigin"===h){z(this,v,"smooth",v.smooth,o);continue}if("force3D"===h){v[h]=o;continue}if("transform"===h){Tt(this,o,t);continue}}else h in C||(h=G(h)||h);if(T||(l||0===l)&&(u||0===u)&&!O.test(o)&&h in C)l||(l=0),(g=(a+"").substr((u+"").length))!==(E=(0,f.Wy)(o)||(h in f.Fc.units?f.Fc.units[h]:g))&&(u=q(t,h,a,E)),this._pt=new f.Fo(this._pt,T?v:C,h,u,(b?(0,f.cy)(u,b+l):l)-u,T||"px"!==E&&"zIndex"!==h||!1===e.autoRound?m:N),this._pt.u=E||0,g!==E&&"%"!==E&&(this._pt.b=a,this._pt.r=I);else if(h in C)J.call(this,t,h,a,b?b+o:o);else{if(!(h in t)){(0,f.lC)(h,o);continue}this.add(t,h,a||t[h],b?b+o:o,r,i)}T||L.push(h,C[h]),_.push(h)}R&&(0,f.JV)(this)},render:function(t,e){if(e.tween._time||!u())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Q,aliases:y,getSetter:function(t,e,n){var r=y[e];return r&&r.indexOf(",")<0&&(e=r),e in p&&e!==w&&(t._gsap.x||Q(t,"x"))?n&&l===n?"scale"===e?_:L:(l=n||{})&&("scale"===e?C:x):t.style&&!(0,f.m2)(t.style[e])?S:~e.indexOf("-")?R:(0,f.S5)(t,e)},core:{_removeProperty:K,_getMatrix:lt}};f.p8.utils.checkPrefix=G,f.p8.core.getStyleSaver=U,function(t,e,n,r){var i=(0,f.fS)(t+","+e+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){p[t]=1}));(0,f.fS)(e,(function(t){f.Fc.units[t]="deg",at[t]=1})),y[i[13]]=t+","+e,(0,f.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");y[e[1]]=i[e[0]]}))}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY"),(0,f.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){f.Fc.units[t]="px"})),f.p8.registerPlugin(It);var Nt=f.p8.registerPlugin(It)||f.p8;Nt.core.Tween},90638:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}e.default=function(t,e){var n=a.default,r={loading:function(t){t.error,t.isLoading;return t.pastDelay,null}};s=t,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](s):s instanceof l)?r.loader=function(){return t}:"function"===typeof t?r.loader=t:"object"===typeof t&&(r=i({},r,t));var s,l;var u=r=i({},r,e);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return n(u);r.loadableGenerated&&delete(r=i({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,o(n,r);delete r.ssr}return n(r)};s(n(67294));var a=s(n(14302));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return delete e.webpack,delete e.modules,t(e)}},16319:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var i=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);e.LoadableContext=i},14302:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,o=(s=n(67294))&&s.__esModule?s:{default:s},l=n(67161),u=n(16319);var c=[],f=[],p=!1;function d(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var e,n,i;return e=t,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,n=this._opts;if(e.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){t._update({}),t._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(t){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach((function(t){return t()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(t){var e=this;return this._callbacks.add(t),function(){e._callbacks.delete(t)}}}])&&r(e.prototype,n),i&&r(e,i),t}();function g(t){return function(t,e){var n=function(){if(!i){var e=new h(t,r);i={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return i.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);r.suspense&&(r.lazy=o.default.lazy(r.loader));var i=null;if(!p&&!r.suspense){var s=r.webpack?r.webpack():r.modules;s&&f.push((function(t){var e=!0,r=!1,i=void 0;try{for(var a,o=s[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;if(-1!==t.indexOf(l))return n()}}catch(u){r=!0,i=u}finally{try{e||null==o.return||o.return()}finally{if(r)throw i}}}))}var c=r.suspense?function(t,e){return o.default.createElement(r.lazy,a({},t,{ref:e}))}:function(t,e){n();var a=o.default.useContext(u.LoadableContext),s=l.useSubscription(i);return o.default.useImperativeHandle(e,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(t){a(t)})),o.default.useMemo((function(){return s.loading||s.error?o.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:i.retry}):s.loaded?o.default.createElement(function(t){return t&&t.__esModule?t.default:t}(s.loaded),t):null}),[t,s])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",o.default.forwardRef(c)}(d,t)}function E(t,e){for(var n=[];t.length;){var r=t.pop();n.push(r(e))}return Promise.all(n).then((function(){if(t.length)return E(t,e)}))}g.preloadAll=function(){return new Promise((function(t,e){E(c).then(t,e)}))},g.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var n=function(){return p=!0,e()};E(f,t).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var b=g;e.default=b},26764:function(){},5152:function(t,e,n){t.exports=n(90638)},35433:function(){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},27046:function(){Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete Prism.languages.go["class-name"]},56543:function(){Prism.languages.julia={comment:{pattern:/(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,lookbehind:!0},regex:{pattern:/r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,greedy:!0},string:{pattern:/"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,greedy:!0},char:{pattern:/(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,lookbehind:!0,greedy:!0},keyword:/\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,operator:/&&|\|\||[-+*^%\xf7\u22bb&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~\u2260\u2264\u2265'\u221a\u221b]/,punctuation:/::?|[{}[\]();,.?]/,constant:/\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[\u03c0\u212f]/}},32334:function(){!function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var e={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:e},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:e},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(Prism)},54803:function(){Prism.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:FALSE|TRUE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:Inf|NaN)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/}},35266:function(){Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/}},68217:function(t,e,n){"use strict";var r=n(96086),i=n(67294);e.useSubscription=function(t){var e=t.getCurrentValue,n=t.subscribe,a=i.useState((function(){return{getCurrentValue:e,subscribe:n,value:e()}}));t=a[0];var s=a[1];return a=t.value,t.getCurrentValue===e&&t.subscribe===n||(a=e(),s({getCurrentValue:e,subscribe:n,value:a})),i.useDebugValue(a),i.useEffect((function(){function t(){if(!i){var t=e();s((function(i){return i.getCurrentValue!==e||i.subscribe!==n||i.value===t?i:r({},i,{value:t})}))}}var i=!1,a=n(t);return t(),function(){i=!0,a()}}),[e,n]),a}},67161:function(t,e,n){"use strict";t.exports=n(68217)}}]);