(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8104],{71736:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";n.r(t);var r=0,s=1,i=2,o=3,l=4;class a{constructor(e,t,n){this.startInOld=e,this.startInNew=t,this.size=n}get endInOld(){return this.startInOld+this.size}get endInNew(){return this.startInNew+this.size}}class c{constructor(){this.blockSize=0,this.repeatingWordsAccuracy=0,this.ignoreWhitespaceDifferences=!1}}const d=/^\s*<\/?[^>]+>\s*$/,h=/<[^\s>]+/,u=/^(\s|&nbsp;)+$/,p=/[\w\#@]+/,f=["<img"];function w(e){return!f.some((t=>null!==e&&e.startsWith(t)))&&d.test(e)}function m(e,t,n){return["<",t,' class="',n,'">',e,"</",t,">"].join("")}function g(e){return"<"===e}function I(e){return"&"===e}function W(e){return";"===e}function k(e){return u.test(e)}function N(e){return p.test(e)}function v(e,t,n){return e.push(t),e.length>n&&e.shift(),e.length!==n?null:e.join("")}class O{constructor(e,t,n,r,s,i,o){this.oldWords=e,this.newWords=t,this.startInOld=n,this.endInOld=r,this.startInNew=s,this.endInNew=i,this.options=o}indexNewWords(){this.wordIndices=new Map;let e=[];for(let t=this.startInNew;t<this.endInNew;t++){let n=v(e,this.normalizeForIndex(this.newWords[t]),this.options.blockSize);null!==n&&(this.wordIndices.has(n)?this.wordIndices.get(n).push(t):this.wordIndices.set(n,[t]))}}normalizeForIndex(e){return e=function(e){return w(e)?function(e){return h.exec(e)[0]+(e.endsWith("/>")?"/>":">")}(e):e}(e),this.options.IgnoreWhiteSpaceDifferences&&k(e)?" ":e}findMatch(){if(this.indexNewWords(),this.removeRepeatingWords(),0===this.wordIndices.length)return null;let e=this.startInOld,t=this.startInNew,n=0,r=new Map;const s=this.options.blockSize;let i=[];for(let o=this.startInOld;o<this.endInOld;o++){let l=v(i,this.normalizeForIndex(this.oldWords[o]),s);if(null===l)continue;let a=new Map;if(this.wordIndices.has(l)){for(let i of this.wordIndices.get(l)){let l=(r.has(i-1)?r.get(i-1):0)+1;a.set(i,l),l>n&&(e=o-l-s+2,t=i-l-s+2,n=l)}r=a}else r=a}return 0!==n?new a(e,t,n+s-1):null}removeRepeatingWords(){let e=this.newWords.length+this.options.repeatingWordsAccuracy,t=Array.from(this.wordIndices.entries()).filter((t=>t[1].length>e)).map((e=>e[0]));for(let n of t)this.wordIndices.delete(n)}}class x{constructor(e,t,n,r,s){this.action=e,this.startInOld=t,this.endInOld=n,this.startInNew=r,this.endInNew=s}}var Z=0,b=1,y=2,C=3;function E(e,t){let n={mode:Z,currentWord:[],words:[]},r=function(e,t){let n=new Map;if(null===t)return n;for(let r of t){let t;for(;null!==(t=r.exec(e));){if(n.has(t.index))throw new Error("One or more block expressions result in a text sequence that overlaps. Current expression: "+r.toString());n.set(t.index,t.index+t[0].length)}}return n}(e,t),s=!!r.size,i=!1,o=-1;for(let a=0;a<e.length;a++){var l=e[a];if(s){o===index&&(o=-1,i=!1);let e=0;if(r.has(index)&&(i=!0,o=e=r.get(index)),i){n.currentWord.push(l),n.mode=Z;continue}}switch(n.mode){case Z:g(l)?T(n,"<",b):I(l)?T(n,l,C):k(l)?T(n,l,y):N(l)&&(0===n.currentWord.length||N(n.currentWord[n.currentWord.length-1]))?n.currentWord.push(l):T(n,l,Z);break;case b:">"===l?(n.currentWord.push(l),n.words.push(n.currentWord.join("")),n.currentWord=[],n.mode=k(l)?y:Z):n.currentWord.push(l);break;case y:g(l)?T(n,l,b):I(l)?T(n,l,C):k(l)?n.currentWord.push(l):T(n,l,Z);break;case C:if(g(l))T(n,l,b);else if(k(l))T(n,l,y);else if(W(l)){let e=!0;if(0!==n.currentWord.length&&(n.currentWord.push(l),n.words.push(n.currentWord.join("")),n.words.length>2&&k(n.words[n.words.length-2])&&k(n.words[n.words.length-1]))){let t=n.words[n.words.length-2],r=n.words[n.words.length-1];n.words.splice(n.words.length-2,2),n.currentWord=[(t+r).split()],n.mode=y,e=!1}e&&(n.currentWord=[],n.mode=Z)}else N(l)?n.currentWord.push(l):T(n,l,Z)}}return 0!==n.currentWord.length&&n.words.push(n.currentWord.join("")),n.words}function T(e,t,n){0!==e.currentWord.length&&e.words.push(e.currentWord.join("")),e.currentWord=[t],e.mode=n}const G=new Map([["</strong>",0],["</em>",0],["</b>",0],["</i>",0],["</big>",0],["</small>",0],["</u>",0],["</sub>",0],["</strike>",0],["</s>",0]]),M=/<((strong)|(b)|(i)|(em)|(big)|(small)|(u)|(sub)|(sup)|(strike)|(s))[\>\s]+/gi;class z{constructor(e,t){this.content=[],this.newText=t,this.oldText=e,this.specialTagDiffStack=[],this.newWords=[],this.oldWords=[],this.matchGranularity=0,this.blockExpressions=[],this.repeatingWordsAccuracy=1,this.ignoreWhiteSpaceDifferences=!1,this.orphanMatchThreshold=0}build(){if(this.oldText===this.newText)return this.newText;this.splitInputsIntoWords(),this.matchGranularity=Math.min(4,this.oldWords.length,this.newWords.length);let e=this.operations();for(let t of e)this.performOperation(t);return this.content.join("")}addBlockExpression(e){this.blockExpressions.push(e)}splitInputsIntoWords(){this.oldWords=E(this.oldText,this.blockExpressions),this.oldText=null,this.newWords=E(this.newText,this.blockExpressions),this.newText=null}performOperation(e){switch(e.action){case r:this.processEqualOperation(e);break;case s:this.processDeleteOperation(e,"diffdel");break;case i:this.processInsertOperation(e,"diffins");break;case o:break;case l:this.processReplaceOperation(e)}}processReplaceOperation(e){this.processDeleteOperation(e,"diffmod"),this.processInsertOperation(e,"diffmod")}processInsertOperation(e,t){let n=this.newWords.filter(((t,n)=>n>=e.startInNew&&n<e.endInNew));this.insertTag("ins",t,n)}processDeleteOperation(e,t){let n=this.oldWords.filter(((t,n)=>n>=e.startInOld&&n<e.endInOld));this.insertTag("del",t,n)}processEqualOperation(e){let t=this.newWords.filter(((t,n)=>n>=e.startInNew&&n<e.endInNew));this.content.push(t.join(""))}insertTag(e,t,n){for(;n.length;){let r=this.extractConsecutiveWords(n,(e=>!w(e))),s="",i=!1;if(0!==r.length){let n=m(r.join(""),e,t);this.content.push(n)}else{if(M.test(n[0])){if(this.specialTagDiffStack.push(n[0]),s='<ins class="mod">',"del"===e)for(n.shift();n.length>0&&M.test(n[0]);)n.shift()}else if(G.has(n[0])){let t=0===this.specialTagDiffStack.length?null:this.specialTagDiffStack.pop();if(null!==t&&t===n[0].replace(/\//g,"")&&(s="</ins>",i=!0),"del"===e)for(n.shift();n.length>0&&G.has(n[0]);)n.shift()}if(0===n.length&&0===s.length)break;i?this.content.push(s+this.extractConsecutiveWords(n,w).join("")):this.content.push(this.extractConsecutiveWords(n,w).join("")+s)}}}extractConsecutiveWords(e,t){let n=null;for(let r=0;r<e.length;r++){let s=e[r];if(0===r&&" "===s&&(e[r]="&nbsp;"),!t(s)){n=r;break}}if(null!==n){let t=e.filter(((e,t)=>t>=0&&t<n));return n>0&&e.splice(0,n),t}{let t=e.filter(((t,n)=>n>=0&&n<e.length));return e.splice(0,e.length),t}}operations(){let e=0,t=0,n=[],c=this.matchingBlocks();c.push(new a(this.oldWords.length,this.newWords.length,0));let d=this.removeOrphans(c);for(let a of d){let c,d=e===a.startInOld,h=t===a.startInNew;(c=d||h?d&&!h?i:d?o:s:l)!==o&&n.push(new x(c,e,a.startInOld,t,a.startInNew)),0!==a.length&&n.push(new x(r,a.startInOld,a.endInOld,a.startInNew,a.endInNew)),e=a.endInOld,t=a.endInNew}return n}*removeOrphans(e){let t=null,n=null;for(let r of e){if(null===n){t=new a(0,0,0),n=r;continue}if(t.endInOld===n.startInOld&&t.endInNew===n.startInNew||n.endInOld===r.startInOld&&n.endInNew===r.startInNew){yield n,t=n,n=r;continue}let e=(e,t)=>e+t.length,s=this.oldWords.slice(t.endInOld,r.startInOld).reduce(e,0),i=this.newWords.slice(t.endInNew,r.startInNew).reduce(e,0);this.newWords.slice(n.startInNew,n.endInNew).reduce(e,0)>Math.max(s,i)*this.orphanMatchThreshold&&(yield n),t=n,n=r}yield n}matchingBlocks(){let e=[];return this.findMatchingBlocks(0,this.oldWords.length,0,this.newWords.length,e),e}findMatchingBlocks(e,t,n,r,s){let i=this.findMatch(e,t,n,r);null!==i&&(e<i.startInOld&&n<i.startInNew&&this.findMatchingBlocks(e,i.startInOld,n,i.startInNew,s),s.push(i),i.endInOld<t&&i.endInNew<r&&this.findMatchingBlocks(i.endInOld,t,i.endInNew,r,s))}findMatch(e,t,n,r){for(let s=this.matchGranularity;s>0;s--){let i=new c;i.blockSize=s,i.repeatingWordsAccuracy=this.repeatingWordsAccuracy,i.ignoreWhitespaceDifferences=this.ignoreWhiteSpaceDifferences;let o=new O(this.oldWords,this.newWords,e,t,n,r,i).findMatch();if(null!==o)return o}return null}}z.execute=function(e,t){return new z(e,t).build()},t.default=z},function(e,t,n){e.exports=n(0)}])},47027:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(87462),s=n(94578),i=n(13871),o=n(18232),l=n(86010),a=n(67294),c=n(95929),d=n(28935),h=n(12519),u=n(92248),p=n(90902);function f(e){var t=e.children,n=e.className,s=e.content,i=(0,l.Z)(n,"description"),o=(0,d.Z)(f,e),c=(0,h.Z)(f,e);return a.createElement(c,(0,r.Z)({},o,{className:i}),u.kK(t)?s:t)}f.handledProps=["as","children","className","content"],f.propTypes={},f.create=(0,p.u5)(f,(function(e){return{content:e}}));var w=f;function m(e){var t=e.children,n=e.className,s=e.content,i=(0,l.Z)("header",n),o=(0,d.Z)(m,e),c=(0,h.Z)(m,e);return a.createElement(c,(0,r.Z)({},o,{className:i}),u.kK(t)?s:t)}m.handledProps=["as","children","className","content"],m.propTypes={},m.create=(0,p.u5)(m,(function(e){return{content:e}}));var g=m;function I(e){var t=e.children,n=e.className,s=e.content,i=e.description,o=e.floated,p=e.header,f=e.verticalAlign,m=(0,l.Z)((0,c.cD)(o,"floated"),(0,c.Ok)(f),"content",n),W=(0,d.Z)(I,e),k=(0,h.Z)(I,e);return u.kK(t)?a.createElement(k,(0,r.Z)({},W,{className:m}),g.create(p),w.create(i),s):a.createElement(k,(0,r.Z)({},W,{className:m}),t)}I.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],I.propTypes={},I.create=(0,p.u5)(I,(function(e){return{content:e}}));var W=I,k=n(45150);function N(e){var t=e.className,n=e.verticalAlign,s=(0,l.Z)((0,c.Ok)(n),t),i=(0,d.Z)(N,e);return a.createElement(k.Z,(0,r.Z)({},i,{className:s}))}N.handledProps=["className","verticalAlign"],N.propTypes={},N.create=(0,p.u5)(N,(function(e){return{name:e}}));var v=N,O=n(445),x=n(52190),Z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){t.props.disabled||(0,o.Z)(t.props,"onClick",e,t.props)},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,s=e.children,i=e.className,o=e.content,p=e.description,f=e.disabled,m=e.header,I=e.icon,k=e.image,N=e.value,Z=(0,h.Z)(t,this.props),b=(0,l.Z)((0,c.lG)(n,"active"),(0,c.lG)(f,"disabled"),(0,c.lG)("li"!==Z,"item"),i),y=(0,d.Z)(t,this.props),C="li"===Z?{value:N}:{"data-value":N};if(!u.kK(s))return a.createElement(Z,(0,r.Z)({},C,{role:"listitem",className:b,onClick:this.handleClick},y),s);var E=v.create(I,{autoGenerateKey:!1}),T=x.Z.create(k,{autoGenerateKey:!1});if(!(0,a.isValidElement)(o)&&(0,O.Z)(o))return a.createElement(Z,(0,r.Z)({},C,{role:"listitem",className:b,onClick:this.handleClick},y),E||T,W.create(o,{autoGenerateKey:!1,defaultProps:{header:m,description:p}}));var G=g.create(m,{autoGenerateKey:!1}),M=w.create(p,{autoGenerateKey:!1});return E||T?a.createElement(Z,(0,r.Z)({},C,{role:"listitem",className:b,onClick:this.handleClick},y),E||T,(o||G||M)&&a.createElement(W,null,G,M,o)):a.createElement(Z,(0,r.Z)({},C,{role:"listitem",className:b,onClick:this.handleClick},y),G,M,o)},t}(a.Component);Z.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],Z.propTypes={},Z.create=(0,p.u5)(Z,(function(e){return{content:e}}));var b=Z;function y(e){var t=e.children,n=e.className,s=e.content,i=(0,d.Z)(y,e),o=(0,h.Z)(y,e),p=(0,l.Z)((0,c.lG)("ul"!==o&&"ol"!==o,"list"),n);return a.createElement(o,(0,r.Z)({},i,{className:p}),u.kK(t)?s:t)}y.handledProps=["as","children","className","content"],y.propTypes={};var C=y,E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).handleItemOverrides=function(e){return{onClick:function(n,r){(0,o.Z)(e,"onClick",n,r),(0,o.Z)(t.props,"onItemClick",n,r)}}},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,s=n.animated,o=n.bulleted,p=n.celled,f=n.children,w=n.className,m=n.content,g=n.divided,I=n.floated,W=n.horizontal,k=n.inverted,N=n.items,v=n.link,O=n.ordered,x=n.relaxed,Z=n.selection,y=n.size,C=n.verticalAlign,E=(0,l.Z)("ui",y,(0,c.lG)(s,"animated"),(0,c.lG)(o,"bulleted"),(0,c.lG)(p,"celled"),(0,c.lG)(g,"divided"),(0,c.lG)(W,"horizontal"),(0,c.lG)(k,"inverted"),(0,c.lG)(v,"link"),(0,c.lG)(O,"ordered"),(0,c.lG)(Z,"selection"),(0,c.sU)(x,"relaxed"),(0,c.cD)(I,"floated"),(0,c.Ok)(C),"list",w),T=(0,d.Z)(t,this.props),G=(0,h.Z)(t,this.props);return u.kK(f)?u.kK(m)?a.createElement(G,(0,r.Z)({role:"list",className:E},T),(0,i.Z)(N,(function(t){return b.create(t,{overrideProps:e.handleItemOverrides})}))):a.createElement(G,(0,r.Z)({role:"list",className:E},T),m):a.createElement(G,(0,r.Z)({role:"list",className:E},T),f)},t}(a.Component);E.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],E.propTypes={},E.Content=W,E.Description=w,E.Header=g,E.Icon=v,E.Item=b,E.List=C;var T=E}}]);