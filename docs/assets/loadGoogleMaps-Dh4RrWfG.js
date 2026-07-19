import{A as nf,r as qs,T as ju}from"./index-CIgpqoE9.js";function qu(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Wt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fi={duration:.5,overwrite:!1,delay:0},$u,Ve,le,vt=1e8,re=1/vt,nu=Math.PI*2,bg=nu/4,Sg=0,sf=Math.sqrt,Pg=Math.cos,Cg=Math.sin,ke=function(e){return typeof e=="string"},ge=function(e){return typeof e=="function"},en=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},Ft=function(e){return typeof e=="object"},Ze=function(e){return e!==!1},Wu=function(){return typeof window<"u"},Vs=function(e){return ge(e)||ke(e)},of=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,kg=/random\([^)]+\)/g,Dg=/,\s*/g,sh=/(?:-?\.?\d|\.)+/gi,af=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uf=/[+-]=-?[.\d]+/,Og=/[^,'"\[\]\s]+/gi,Ng=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Pt,ru,Gu,_t={},ro={},cf,lf=function(e){return(ro=jr(e,_t))&&it},Ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bi=function(e,t){return!t&&console.warn(e)},hf=function(e,t){return e&&(_t[e]=t)&&ro&&(ro[e]=t)||_t},zi=function(){return 0},Vg={suppressEvents:!0,isStart:!0,kill:!1},$s={suppressEvents:!0,kill:!1},xg={suppressEvents:!0},Qu={},Tn=[],iu={},df,at={},Na={},oh=30,Hs=[],Xu="",Yu=function(e){var t=e[0],n,i;if(Ft(t)||ge(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hs.length;i--&&!Hs[i].targetTest(t););n=Hs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vf(e[i],n)))||e.splice(i,1);return e},nr=function(e){return e._gsap||Yu(Tt(e))[0]._gsap},ff=function(e,t,n){return(n=e[t])&&ge(n)?e[t]():Hu(n)&&e.getAttribute&&e.getAttribute(t)||n},et=function(e,t){return(e=e.split(",")).forEach(t)||e},ve=function(e){return Math.round(e*1e5)/1e5||0},he=function(e){return Math.round(e*1e7)/1e7||0},Vr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Mg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},io=function(){var e=Tn.length,t=Tn.slice(0),n,i;for(iu={},Tn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ju=function(e){return!!(e._initted||e._startAt||e.add)},pf=function(e,t,n,i){Tn.length&&!Ve&&io(),e.render(t,n,!!(Ve&&t<0&&Ju(e))),Tn.length&&!Ve&&io()},_f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Og).length<2?t:ke(e)?e.trim():e},mf=function(e){return e},mt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},jr=function(e,t){for(var n in t)e[n]=t[n];return e},ah=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ft(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},so=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ci=function(e){var t=e.parent||de,n=e.keyframes?Lg($e(e.keyframes)):mt;if(Ze(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ug=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},gf=function(e,t,n,i,s){var o=e[i],u;if(s)for(u=t[s];o&&o[s]>u;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},No=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Sn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},su=function(e,t,n,i){return e._startAt&&(Ve?e._startAt.revert($s):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Bg=function r(e){return!e||e._ts&&r(e.parent)},uh=function(e){return e._repeat?qr(e._tTime,e=e.duration()+e._rDelay)*e:0},qr=function(e,t){var n=Math.floor(e=he(e/t));return e&&n===e?n-1:n},oo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=he(e._start+(e._tDur/Math.abs(e._ts||e._rts||re)||0))},xo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=he(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||rr(n,e)),e},yf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=oo(e.rawTime(),t),(!t._dur||ts(0,t.totalDuration(),n)-t._tTime>re)&&t.render(n,!0)),rr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-re}},kt=function(e,t,n,i){return t.parent&&Sn(t),t._start=he((en(n)?n:n||e!==de?gt(e,n,t):e._time)+t._delay),t._end=he(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gf(e,t,"_first","_last",e._sort?"_start":0),ou(t)||(e._recent=t),i||yf(e,t),e._ts<0&&xo(e,e._tTime),e},vf=function(e,t){return(_t.ScrollTrigger||Ku("scrollTrigger",t))&&_t.ScrollTrigger.create(t,e)},Tf=function(e,t,n,i,s){if(ec(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ve&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&df!==ut.frame)return Tn.push(e),e._lazy=[s,i],1},zg=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jg=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&zg(e)&&!(!e._initted&&ou(e))||(e._ts<0||e._dp._ts<0)&&!ou(e))?0:1,u=e._rDelay,c=0,l,d,p;if(u&&e._repeat&&(c=ts(0,e._tDur,t),d=qr(c,u),e._yoyo&&d&1&&(o=1-o),d!==qr(e._tTime,u)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ve||i||e._zTime===re||!t&&e._zTime){if(!e._initted&&Tf(e,t,i,n,c))return;for(p=e._zTime,e._zTime=t||(n?re:0),n||(n=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&su(e,t,n,!0),e._onUpdate&&!n&&lt(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&lt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sn(e,1),!n&&!Ve&&(lt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},qg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$r=function(e,t,n,i){var s=e._repeat,o=he(t)||0,u=e._tTime/e._tDur;return u&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:he(o*(s+1)+e._rDelay*s):o,u>0&&!i&&xo(e,e._tTime=e._tDur*u),e.parent&&Vo(e),n||rr(e.parent,e),e},ch=function(e){return e instanceof Ye?rr(e):$r(e,e._dur)},$g={_start:0,endTime:zi,totalDuration:zi},gt=function r(e,t,n){var i=e.labels,s=e._recent||$g,o=e.duration()>=vt?s.endTime(!1):e._dur,u,c,l;return ke(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",u=t.indexOf("="),c==="<"||c===">"?(u>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(u<0?s:n).totalDuration()/100:1)):u<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(u-1)+t.substr(u+1)),l&&n&&(c=c/100*($e(n)?n[0]:n).totalDuration()),u>1?r(e,t.substr(0,u-1),n)+c:o+c)):t==null?o:+t},ki=function(e,t,n){var i=en(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],u,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(u=o,c=n;c&&!("immediateRender"in u);)u=c.vars.defaults||{},c=Ze(c.vars.inherit)&&c.parent;o.immediateRender=Ze(u.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new we(t[0],o,t[s+1])},Un=function(e,t){return e||e===0?t(e):t},ts=function(e,t,n){return n<e?e:n>t?t:n},qe=function(e,t){return!ke(e)||!(t=Ng.exec(e))?"":t[1]},Hg=function(e,t,n){return Un(n,function(i){return ts(e,t,i)})},au=[].slice,Ef=function(e,t){return e&&Ft(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ft(e[0]))&&!e.nodeType&&e!==Pt},Wg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ke(i)&&!t||Ef(i,1)?(s=n).push.apply(s,Tt(i)):n.push(i)})||n},Tt=function(e,t,n){return le&&!t&&le.selector?le.selector(e):ke(e)&&!n&&(ru||!Hr())?au.call((t||Gu).querySelectorAll(e),0):$e(e)?Wg(e,n):Ef(e)?au.call(e,0):e?[e]:[]},uu=function(e){return e=Tt(e)[0]||Bi("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Tt(t,n.querySelectorAll?n:n===e?Bi("Invalid scope")||Gu.createElement("div"):e)}},wf=function(e){return e.sort(function(){return .5-Math.random()})},If=function(e){if(ge(e))return e;var t=Ft(e)?e:{each:e},n=ir(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},u=i>0&&i<1,c=isNaN(i)||u,l=t.axis,d=i,p=i;return ke(i)?d=p={center:.5,edges:.5,end:1}[i]||0:!u&&c&&(d=i[0],p=i[1]),function(_,v,I){var T=(I||t).length,R=o[T],D,C,k,N,V,L,E,g,y;if(!R){if(y=t.grid==="auto"?0:(t.grid||[1,vt])[1],!y){for(E=-vt;E<(E=I[y++].getBoundingClientRect().left)&&y<T;);y<T&&y--}for(R=o[T]=[],D=c?Math.min(y,T)*d-.5:i%y,C=y===vt?0:c?T*p/y-.5:i/y|0,E=0,g=vt,L=0;L<T;L++)k=L%y-D,N=C-(L/y|0),R[L]=V=l?Math.abs(l==="y"?N:k):sf(k*k+N*N),V>E&&(E=V),V<g&&(g=V);i==="random"&&wf(R),R.max=E-g,R.min=g,R.v=T=(parseFloat(t.amount)||parseFloat(t.each)*(y>T?T-1:l?l==="y"?T/y:y:Math.max(y,T/y))||0)*(i==="edges"?-1:1),R.b=T<0?s-T:s,R.u=qe(t.amount||t.each)||0,n=n&&T<0?sy(n):n}return T=(R[_]-R.min)/R.max||0,he(R.b+(n?n(T):T)*R.v)+R.u}},cu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=he(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(en(n)?0:qe(n))}},Af=function(e,t){var n=$e(e),i,s;return!n&&Ft(e)&&(i=n=e.radius||vt,e.values?(e=Tt(e.values),(s=!en(e[0]))&&(i*=i)):e=cu(e.increment)),Un(t,n?ge(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var u=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=vt,d=0,p=e.length,_,v;p--;)s?(_=e[p].x-u,v=e[p].y-c,_=_*_+v*v):_=Math.abs(e[p]-u),_<l&&(l=_,d=p);return d=!i||l<=i?e[d]:o,s||d===o||en(o)?d:d+qe(o)}:cu(e))},Rf=function(e,t,n,i){return Un($e(e)?!t:n===!0?!!(n=0):!i,function(){return $e(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Gg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Kg=function(e,t){return function(n){return e(parseFloat(n))+(t||qe(n))}},Qg=function(e,t,n){return Sf(e,t,0,1,n)},bf=function(e,t,n){return Un(n,function(i){return e[~~t(i)]})},Xg=function r(e,t,n){var i=t-e;return $e(e)?bf(e,r(0,e.length),t):Un(n,function(s){return(i+(s-e)%i)%i+e})},Yg=function r(e,t,n){var i=t-e,s=i*2;return $e(e)?bf(e,r(0,e.length-1),t):Un(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ji=function(e){return e.replace(kg,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Dg);return Rf(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Sf=function(e,t,n,i,s){var o=t-e,u=i-n;return Un(s,function(c){return n+((c-e)/o*u||0)})},Jg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!s){var o=ke(e),u={},c,l,d,p,_;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if($e(e)&&!$e(t)){for(d=[],p=e.length,_=p-2,l=1;l<p;l++)d.push(r(e[l-1],e[l]));p--,s=function(I){I*=p;var T=Math.min(_,~~I);return d[T](I-T)},n=t}else i||(e=jr($e(e)?[]:{},e));if(!d){for(c in t)Zu.call(u,e,c,"get",t[c]);s=function(I){return rc(I,u)||(o?e.p:e)}}}return Un(n,s)},lh=function(e,t,n){var i=e.labels,s=vt,o,u,c;for(o in i)u=i[o]-t,u<0==!!n&&u&&s>(u=Math.abs(u))&&(c=o,s=u);return c},lt=function(e,t,n){var i=e.vars,s=i[t],o=le,u=e._ctx,c,l,d;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Tn.length&&io(),u&&(le=u),d=c?s.apply(l,c):s.call(l),le=o,d},Ei=function(e){return Sn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ve),e.progress()<1&&lt(e,"onInterrupt"),e},Nr,Pf=[],Cf=function(e){if(e)if(e=!e.name&&e.default||e,Wu()||e.headless){var t=e.name,n=ge(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:zi,render:rc,add:Zu,kill:_y,modifier:py,rawVars:0},o={targetTest:0,get:0,getSetter:nc,aliases:{},register:0};if(Hr(),e!==i){if(at[t])return;mt(i,mt(so(e,s),o)),jr(i.prototype,jr(s,so(e,o))),at[i.prop=t]=i,e.targetTest&&(Hs.push(i),Qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hf(t,i),e.register&&e.register(it,i,tt)}else Pf.push(e)},ne=255,wi={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},Va=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ne+.5|0},kf=function(e,t,n){var i=e?en(e)?[e>>16,e>>8&ne,e&ne]:0:wi.black,s,o,u,c,l,d,p,_,v,I;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wi[e])i=wi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),u=e.charAt(3),e="#"+s+s+o+o+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ne,e&ne]}else if(e.substr(0,3)==="hsl"){if(i=I=e.match(sh),!t)c=+i[0]%360/360,l=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(l+1):d+l-d*l,s=d*2-o,i.length>3&&(i[3]*=1),i[0]=Va(c+1/3,s,o),i[1]=Va(c,s,o),i[2]=Va(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(af),n&&i.length<4&&(i[3]=1),i}else i=e.match(sh)||wi.transparent;i=i.map(Number)}return t&&!I&&(s=i[0]/ne,o=i[1]/ne,u=i[2]/ne,p=Math.max(s,o,u),_=Math.min(s,o,u),d=(p+_)/2,p===_?c=l=0:(v=p-_,l=d>.5?v/(2-p-_):v/(p+_),c=p===s?(o-u)/v+(o<u?6:0):p===o?(u-s)/v+2:(s-o)/v+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Df=function(e){var t=[],n=[],i=-1;return e.split(En).forEach(function(s){var o=s.match(Or)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hh=function(e,t,n){var i="",s=(e+i).match(En),o=t?"hsla(":"rgba(",u=0,c,l,d,p;if(!s)return e;if(s=s.map(function(_){return(_=kf(_,t,1))&&o+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(d=Df(e),c=n.c,c.join(i)!==d.c.join(i)))for(l=e.replace(En,"1").split(Or),p=l.length-1;u<p;u++)i+=l[u]+(~c.indexOf(u)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!l)for(l=e.split(En),p=l.length-1;u<p;u++)i+=l[u]+s[u];return i+l[p]},En=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wi)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Zg=/hsl[a]?\(/,Of=function(e){var t=e.join(" "),n;if(En.lastIndex=0,En.test(t))return n=Zg.test(t),e[1]=hh(e[1],n),e[0]=hh(e[0],n,Df(e[1])),!0},qi,ut=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,u=[],c,l,d,p,_,v,I=function T(R){var D=r()-i,C=R===!0,k,N,V,L;if((D>e||D<0)&&(n+=D-t),i+=D,V=i-n,k=V-o,(k>0||C)&&(L=++p.frame,_=V-p.time*1e3,p.time=V=V/1e3,o+=k+(k>=s?4:s-k),N=1),C||(c=l(T)),N)for(v=0;v<u.length;v++)u[v](V,_,L,R)};return p={time:0,frame:0,tick:function(){I(!0)},deltaRatio:function(R){return _/(1e3/(R||60))},wake:function(){cf&&(!ru&&Wu()&&(Pt=ru=window,Gu=Pt.document||{},_t.gsap=it,(Pt.gsapVersions||(Pt.gsapVersions=[])).push(it.version),lf(ro||Pt.GreenSockGlobals||!Pt.gsap&&Pt||{}),Pf.forEach(Cf)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),l=d||function(R){return setTimeout(R,o-p.time*1e3+1|0)},qi=1,I(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),qi=0,l=zi},lagSmoothing:function(R,D){e=R||1/0,t=Math.min(D||33,e)},fps:function(R){s=1e3/(R||240),o=p.time*1e3+s},add:function(R,D,C){var k=D?function(N,V,L,E){R(N,V,L,E),p.remove(k)}:R;return p.remove(R),u[C?"unshift":"push"](k),Hr(),k},remove:function(R,D){~(D=u.indexOf(R))&&u.splice(D,1)&&v>=D&&v--},_listeners:u},p})(),Hr=function(){return!qi&&ut.wake()},Q={},ey=/^[\d.\-M][\d.\-,\s]/,ty=/["']/g,ny=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,u,c,l;s<o;s++)c=n[s],u=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,u),t[i]=isNaN(l)?l.replace(ty,"").trim():+l,i=c.substr(u+1).trim();return t},ry=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},iy=function(e){var t=(e+"").split("("),n=Q[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ny(t[1])]:ry(e).split(",").map(_f)):Q._CE&&ey.test(e)?Q._CE("",e):n},sy=function(e){return function(t){return 1-e(1-t)}},ir=function(e,t){return e&&(ge(e)?e:Q[e]||iy(e))||t},_r=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return et(e,function(u){Q[u]=_t[u]=s,Q[o=u.toLowerCase()]=n;for(var c in s)Q[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Q[u+"."+c]=s[c]}),s},Nf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xa=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/nu*(Math.asin(1/i)||0),u=function(d){return d===1?1:i*Math.pow(2,-10*d)*Cg((d-o)*s)+1},c=e==="out"?u:e==="in"?function(l){return 1-u(1-l)}:Nf(u);return s=nu/s,c.config=function(l,d){return r(e,l,d)},c},Ma=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nf(n);return i.config=function(s){return r(e,s)},i};et("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;_r(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Q.Linear.easeNone=Q.none=Q.Linear.easeIn;_r("Elastic",xa("in"),xa("out"),xa());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(u){return u<t?r*u*u:u<n?r*Math.pow(u-1.5/e,2)+.75:u<i?r*(u-=2.25/e)*u+.9375:r*Math.pow(u-2.625/e,2)+.984375};_r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);_r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});_r("Circ",function(r){return-(sf(1-r*r)-1)});_r("Sine",function(r){return r===1?1:-Pg(r*bg)+1});_r("Back",Ma("in"),Ma("out"),Ma());Q.SteppedEase=Q.steps=_t.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-re;return function(u){return((i*ts(0,o,u)|0)+s)*n}}};Fi.ease=Q["quad.out"];et("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xu+=r+","+r+"Params,"});var Vf=function(e,t){this.id=Sg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ff,this.set=t?t.getSetter:nc},$i=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,le&&(this._ctx=le,le.data.push(this)),qi||ut.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xo(this,n),!s._dp||s.parent||yf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kt(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?oo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(ts(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Vo(this),Fg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=he(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&kt(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xg);var i=Ve;return Ve=n,Ju(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ve=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ch(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ch(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gt(this,n),Ze(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ze(i)),this._dur||(this._zTime=-re),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-re)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var u=ge(n)?n:mf,c=function(){var d=i.then;i.then=null,s&&s(),ge(u)&&(u=u(i))&&(u.then||u===i)&&(i.then=d),o(u),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){Ei(this)},r})();mt($i.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Ye=(function(r){rf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ze(n.sortChildren),de&&kt(n.parent||de,Wt(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&vf(Wt(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ki(0,arguments,this),this},t.from=function(i,s,o){return ki(1,arguments,this),this},t.fromTo=function(i,s,o,u){return ki(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ci(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new we(i,s,gt(this,o),1),this},t.call=function(i,s,o){return kt(this,we.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,u,c,l,d){return o.duration=s,o.stagger=o.stagger||u,o.onComplete=l,o.onCompleteParams=d,o.parent=this,new we(i,o,gt(this,c)),this},t.staggerFrom=function(i,s,o,u,c,l,d){return o.runBackwards=1,Ci(o).immediateRender=Ze(o.immediateRender),this.staggerTo(i,s,o,u,c,l,d)},t.staggerFromTo=function(i,s,o,u,c,l,d,p){return u.startAt=o,Ci(u).immediateRender=Ze(u.immediateRender),this.staggerTo(i,s,u,c,l,d,p)},t.render=function(i,s,o){var u=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,d=i<=0?0:he(i),p=this._zTime<0!=i<0&&(this._initted||!l),_,v,I,T,R,D,C,k,N,V,L,E;if(this!==de&&d>c&&i>=0&&(d=c),d!==this._tTime||o||p){if(u!==this._time&&l&&(d+=this._time-u,i+=this._time-u),_=d,N=this._start,k=this._ts,D=!k,p&&(l||(u=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,R=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(R*100+i,s,o);if(_=he(d%R),d===c?(T=this._repeat,_=l):(V=he(d/R),T=~~V,T&&T===V&&(_=l,T--),_>l&&(_=l)),V=qr(this._tTime,R),!u&&this._tTime&&V!==T&&this._tTime-V*R-this._dur<=0&&(V=T),L&&T&1&&(_=l-_,E=1),T!==V&&!this._lock){var g=L&&V&1,y=g===(L&&T&1);if(T<V&&(g=!g),u=g?0:d%l?l:d,this._lock=1,this.render(u||(E?0:he(T*R)),s,!l)._lock=0,this._tTime=d,!s&&this.parent&&lt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,V=T),u&&u!==this._time||D!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,u=g?l:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!D)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=qg(this,he(u),he(_)),C&&(d-=_-(_=C._start))),this._tTime=d,this._time=_,this._act=!!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,u=0),!u&&d&&l&&!s&&!V&&(lt(this,"onStart"),this._tTime!==d))return this;if(_>=u&&i>=0)for(v=this._first;v;){if(I=v._next,(v._act||_>=v._start)&&v._ts&&C!==v){if(v.parent!==this)return this.render(i,s,o);if(v.render(v._ts>0?(_-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(_-v._start)*v._ts,s,o),_!==this._time||!this._ts&&!D){C=0,I&&(d+=this._zTime=-re);break}}v=I}else{v=this._last;for(var A=i<0?i:_;v;){if(I=v._prev,(v._act||A<=v._end)&&v._ts&&C!==v){if(v.parent!==this)return this.render(i,s,o);if(v.render(v._ts>0?(A-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(A-v._start)*v._ts,s,o||Ve&&Ju(v)),_!==this._time||!this._ts&&!D){C=0,I&&(d+=this._zTime=A?-re:re);break}}v=I}}if(C&&!s&&(this.pause(),C.render(_>=u?0:-re)._zTime=_>=u?1:-1,this._ts))return this._start=N,Vo(this),this.render(i,s,o);this._onUpdate&&!s&&lt(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&u)&&(N===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(d===c&&this._ts>0||!d&&this._ts<0)&&Sn(this,1),!s&&!(i<0&&!u)&&(d||u||!c)&&(lt(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(en(s)||(s=gt(this,s,i)),!(i instanceof $i)){if($e(i))return i.forEach(function(u){return o.add(u,s)}),this;if(ke(i))return this.addLabel(i,s);if(ge(i))i=we.delayedCall(0,i);else return this}return this!==i?kt(this,i,s):this},t.getChildren=function(i,s,o,u){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=-vt);for(var c=[],l=this._first;l;)l._start>=u&&(l instanceof we?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return ke(i)?this.removeLabel(i):ge(i)?this.killTweensOf(i):(i.parent===this&&No(this,i),i===this._recent&&(this._recent=this._last),rr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he(ut.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=gt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var u=we.delayedCall(0,s||zi,o);return u.data="isPause",this._hasPause=1,kt(this,u,gt(this,i))},t.removePause=function(i){var s=this._first;for(i=gt(this,i);s;)s._start===i&&s.data==="isPause"&&Sn(s),s=s._next},t.killTweensOf=function(i,s,o){for(var u=this.getTweensOf(i,o),c=u.length;c--;)mn!==u[c]&&u[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],u=Tt(i),c=this._first,l=en(s),d;c;)c instanceof we?Mg(c._targets,u)&&(l?(!mn||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(d=c.getTweensOf(u,s)).length&&o.push.apply(o,d),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,u=gt(o,i),c=s,l=c.startAt,d=c.onStart,p=c.onStartParams,_=c.immediateRender,v,I=we.to(o,mt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:s.duration||Math.abs((u-(l&&"time"in l?l.time:o._time))/o.timeScale())||re,onStart:function(){if(o.pause(),!v){var R=s.duration||Math.abs((u-(l&&"time"in l?l.time:o._time))/o.timeScale());I._dur!==R&&$r(I,R,0,1).render(I._time,!0,!0),v=1}d&&d.apply(I,p||[])}},s));return _?I.render(0):I},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,mt({startAt:{time:gt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),lh(this,gt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),lh(this,gt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+re)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var u=this._first,c=this.labels,l;for(i=he(i);u;)u._start>=o&&(u._start+=i,u._end+=i),u=u._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return rr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),rr(this)},t.totalDuration=function(i){var s=0,o=this,u=o._last,c=vt,l,d,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(p=o.parent;u;)l=u._prev,u._dirty&&u.totalDuration(),d=u._start,d>c&&o._sort&&u._ts&&!o._lock?(o._lock=1,kt(o,u,d-u._delay,1)._lock=0):c=d,d<0&&u._ts&&(s-=d,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=he(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),u._end>s&&u._ts&&(s=u._end),u=l;$r(o,o===de&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(de._ts&&(pf(de,oo(i,de)),df=ut.frame),ut.frame>=oh){oh+=pt.autoSleep||120;var s=de._first;if((!s||!s._ts)&&pt.autoSleep&&ut._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ut.sleep()}}},e})($i);mt(Ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var oy=function(e,t,n,i,s,o,u){var c=new tt(this._pt,e,t,0,1,Bf,null,s),l=0,d=0,p,_,v,I,T,R,D,C;for(c.b=n,c.e=i,n+="",i+="",(D=~i.indexOf("random("))&&(i=ji(i)),o&&(C=[n,i],o(C,e,t),n=C[0],i=C[1]),_=n.match(Oa)||[];p=Oa.exec(i);)I=p[0],T=i.substring(l,p.index),v?v=(v+1)%5:T.substr(-5)==="rgba("&&(v=1),I!==_[d++]&&(R=parseFloat(_[d-1])||0,c._pt={_next:c._pt,p:T||d===1?T:",",s:R,c:I.charAt(1)==="="?Vr(R,I)-R:parseFloat(I)-R,m:v&&v<4?Math.round:0},l=Oa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=u,(uf.test(i)||D)&&(c.e=0),this._pt=c,c},Zu=function(e,t,n,i,s,o,u,c,l,d){ge(i)&&(i=i(s||0,e,o));var p=e[t],_=n!=="get"?n:ge(p)?l?e[t.indexOf("set")||!ge(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():p,v=ge(p)?l?hy:Uf:tc,I;if(ke(i)&&(~i.indexOf("random(")&&(i=ji(i)),i.charAt(1)==="="&&(I=Vr(_,i)+(qe(_)||0),(I||I===0)&&(i=I))),!d||_!==i||lu)return!isNaN(_*i)&&i!==""?(I=new tt(this._pt,e,t,+_||0,i-(_||0),typeof p=="boolean"?fy:Ff,0,v),l&&(I.fp=l),u&&I.modifier(u,this,e),this._pt=I):(!p&&!(t in e)&&Ku(t,i),oy.call(this,e,t,_,i,v,c||pt.stringFilter,l))},ay=function(e,t,n,i,s){if(ge(e)&&(e=Di(e,s,t,n,i)),!Ft(e)||e.style&&e.nodeType||$e(e)||of(e))return ke(e)?Di(e,s,t,n,i):e;var o={},u;for(u in e)o[u]=Di(e[u],s,t,n,i);return o},xf=function(e,t,n,i,s,o){var u,c,l,d;if(at[e]&&(u=new at[e]).init(s,u.rawVars?t[e]:ay(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new tt(n._pt,s,e,0,1,u.render,u,0,u.priority),n!==Nr))for(l=n._ptLookup[n._targets.indexOf(s)],d=u._props.length;d--;)l[u._props[d]]=c;return u},mn,lu,ec=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,u=i.immediateRender,c=i.lazy,l=i.onUpdate,d=i.runBackwards,p=i.yoyoEase,_=i.keyframes,v=i.autoRevert,I=e._dur,T=e._startAt,R=e._targets,D=e.parent,C=D&&D.data==="nested"?D.vars.targets:R,k=e._overwrite==="auto"&&!$u,N=e.timeline,V=i.easeReverse||p,L,E,g,y,A,b,S,w,Y,ce,ye,ee,Pe;if(N&&(!_||!s)&&(s="none"),e._ease=ir(s,Fi.ease),e._rEase=V&&(ir(V)||e._ease),e._from=!N&&!!i.runBackwards,e._from&&(e.ratio=1),!N||_&&!i.stagger){if(w=R[0]?nr(R[0]).harness:0,ee=w&&i[w.prop],L=so(i,Qu),T&&(T._zTime<0&&T.progress(1),t<0&&d&&u&&!v?T.render(-1,!0):T.revert(d&&I?$s:Vg),T._lazy=0),o){if(Sn(e._startAt=we.set(R,mt({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!T&&Ze(c),startAt:null,delay:0,onUpdate:l&&function(){return lt(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ve||!u&&!v)&&e._startAt.revert($s),u&&I&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&I&&!T){if(t&&(u=!1),g=mt({overwrite:!1,data:"isFromStart",lazy:u&&!T&&Ze(c),immediateRender:u,stagger:0,parent:D},L),ee&&(g[w.prop]=ee),Sn(e._startAt=we.set(R,g)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ve?e._startAt.revert($s):e._startAt.render(-1,!0)),e._zTime=t,!u)r(e._startAt,re,re);else if(!t)return}for(e._pt=e._ptCache=0,c=I&&Ze(c)||c&&!I,E=0;E<R.length;E++){if(A=R[E],S=A._gsap||Yu(R)[E]._gsap,e._ptLookup[E]=ce={},iu[S.id]&&Tn.length&&io(),ye=C===R?E:C.indexOf(A),w&&(Y=new w).init(A,ee||L,e,ye,C)!==!1&&(e._pt=y=new tt(e._pt,A,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(St){ce[St]=y}),Y.priority&&(b=1)),!w||ee)for(g in L)at[g]&&(Y=xf(g,L,e,ye,A,C))?Y.priority&&(b=1):ce[g]=y=Zu.call(e,A,g,"get",L[g],ye,C,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),k&&e._pt&&(mn=e,de.killTweensOf(A,ce,e.globalTime(t)),Pe=!e.parent,mn=0),e._pt&&c&&(iu[S.id]=1)}b&&zf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Pe,_&&t<=0&&N.render(vt,!0,!0)},uy=function(e,t,n,i,s,o,u,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,p,_,v;if(!l)for(l=e._ptCache[t]=[],_=e._ptLookup,v=e._targets.length;v--;){if(d=_[v][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return lu=1,e.vars[t]="+=0",ec(e,u),lu=0,c?Bi(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(d)}for(v=l.length;v--;)p=l[v],d=p._pt||p,d.s=(i||i===0)&&!s?i:d.s+(i||0)+o*d.c,d.c=n-d.s,p.e&&(p.e=ve(n)+qe(p.e)),p.b&&(p.b=d.s+qe(p.b))},cy=function(e,t){var n=e[0]?nr(e[0]).harness:0,i=n&&n.aliases,s,o,u,c;if(!i)return t;s=jr({},t);for(o in i)if(o in s)for(c=i[o].split(","),u=c.length;u--;)s[c[u]]=s[o];return s},ly=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,u;if($e(t))u=n[e]||(n[e]=[]),t.forEach(function(c,l){return u.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)u=n[o]||(n[o]=[]),o==="ease"||u.push({t:parseFloat(e),v:t[o],e:s})},Di=function(e,t,n,i,s){return ge(e)?e.call(t,n,i,s):ke(e)&&~e.indexOf("random(")?ji(e):e},Mf=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Lf={};et(Mf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Lf[r]=1});var we=(function(r){rf(e,r);function e(n,i,s,o){var u;typeof i=="number"&&(s.duration=i,i=s,s=null),u=r.call(this,o?i:Ci(i))||this;var c=u.vars,l=c.duration,d=c.delay,p=c.immediateRender,_=c.stagger,v=c.overwrite,I=c.keyframes,T=c.defaults,R=c.scrollTrigger,D=i.parent||de,C=($e(n)||of(n)?en(n[0]):"length"in i)?[n]:Tt(n),k,N,V,L,E,g,y,A;if(u._targets=C.length?Yu(C):Bi("GSAP target "+n+" not found. https://gsap.com",!pt.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=v,I||_||Vs(l)||Vs(d)){i=u.vars;var b=i.easeReverse||i.yoyoEase;if(k=u.timeline=new Ye({data:"nested",defaults:T||{},targets:D&&D.data==="nested"?D.vars.targets:C}),k.kill(),k.parent=k._dp=Wt(u),k._start=0,_||Vs(l)||Vs(d)){if(L=C.length,y=_&&If(_),Ft(_))for(E in _)~Mf.indexOf(E)&&(A||(A={}),A[E]=_[E]);for(N=0;N<L;N++)V=so(i,Lf),V.stagger=0,b&&(V.easeReverse=b),A&&jr(V,A),g=C[N],V.duration=+Di(l,Wt(u),N,g,C),V.delay=(+Di(d,Wt(u),N,g,C)||0)-u._delay,!_&&L===1&&V.delay&&(u._delay=d=V.delay,u._start+=d,V.delay=0),k.to(g,V,y?y(N,g,C):0),k._ease=Q.none;k.duration()?l=d=0:u.timeline=0}else if(I){Ci(mt(k.vars.defaults,{ease:"none"})),k._ease=ir(I.ease||i.ease||"none");var S=0,w,Y,ce;if($e(I))I.forEach(function(ye){return k.to(C,ye,">")}),k.duration();else{V={};for(E in I)E==="ease"||E==="easeEach"||ly(E,I[E],V,I.easeEach);for(E in V)for(w=V[E].sort(function(ye,ee){return ye.t-ee.t}),S=0,N=0;N<w.length;N++)Y=w[N],ce={ease:Y.e,duration:(Y.t-(N?w[N-1].t:0))/100*l},ce[E]=Y.v,k.to(C,ce,S),S+=ce.duration;k.duration()<l&&k.to({},{duration:l-k.duration()})}}l||u.duration(l=k.duration())}else u.timeline=0;return v===!0&&!$u&&(mn=Wt(u),de.killTweensOf(C),mn=0),kt(D,Wt(u),s),i.reversed&&u.reverse(),i.paused&&u.paused(!0),(p||!l&&!I&&u._start===he(D._time)&&Ze(p)&&Bg(Wt(u))&&D.data!=="nested")&&(u._tTime=-re,u.render(Math.max(0,-d)||0)),R&&vf(Wt(u),R),u}var t=e.prototype;return t.render=function(i,s,o){var u=this._time,c=this._tDur,l=this._dur,d=i<0,p=i>c-re&&!d?c:i<re?0:i,_,v,I,T,R,D,C,k;if(!l)jg(this,i,s,o);else if(p!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(_=p,k=this.timeline,this._repeat){if(T=l+this._rDelay,this._repeat<-1&&d)return this.totalTime(T*100+i,s,o);if(_=he(p%T),p===c?(I=this._repeat,_=l):(R=he(p/T),I=~~R,I&&I===R?(_=l,I--):_>l&&(_=l)),D=this._yoyo&&I&1,D&&(_=l-_),R=qr(this._tTime,T),_===u&&!o&&this._initted&&I===R)return this._tTime=p,this;I!==R&&this.vars.repeatRefresh&&!D&&!this._lock&&_!==T&&this._initted&&(this._lock=o=1,this.render(he(T*I),!0).invalidate()._lock=0)}if(!this._initted){if(Tf(this,d?i:_,o,s,p))return this._tTime=0,this;if(u!==this._time&&!(o&&this.vars.repeatRefresh&&I!==R))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._rEase){var N=_<u;if(N!==this._inv){var V=N?u:l-u;this._inv=N,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=u,this._invRecip=V?(N?-1:1)/V:0,this._invScale=N?-this.ratio:1-this.ratio,this._invEase=N?this._rEase:this._ease}this.ratio=C=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=C=this._ease(_/l);if(this._from&&(this.ratio=C=1-C),this._tTime=p,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!u&&p&&!s&&!R&&(lt(this,"onStart"),this._tTime!==p))return this;for(v=this._pt;v;)v.r(C,v.d),v=v._next;k&&k.render(i<0?i:k._dur*k._ease(_/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&su(this,i,s,o),lt(this,"onUpdate")),this._repeat&&I!==R&&this.vars.onRepeat&&!s&&this.parent&&lt(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&su(this,i,!0,!0),(i||!l)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Sn(this,1),!s&&!(d&&!u)&&(p||u||D)&&(lt(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,u,c){qi||ut.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||ec(this,l),d=this._ease(l/this._dur),uy(this,i,s,o,u,d,l,c)?this.resetTo(i,s,o,u,1):(xo(this,0),this.parent||gf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ei(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ve),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mn&&mn.vars.overwrite!==!0)._first||Ei(this),this.parent&&o!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/o,0,1),this}var u=this._targets,c=i?Tt(i):u,l=this._ptLookup,d=this._pt,p,_,v,I,T,R,D;if((!s||s==="all")&&Ug(u,c))return s==="all"&&(this._pt=0),Ei(this);for(p=this._op=this._op||[],s!=="all"&&(ke(s)&&(T={},et(s,function(C){return T[C]=1}),s=T),s=cy(u,s)),D=u.length;D--;)if(~c.indexOf(u[D])){_=l[D],s==="all"?(p[D]=s,I=_,v={}):(v=p[D]=p[D]||{},I=s);for(T in I)R=_&&_[T],R&&((!("kill"in R.d)||R.d.kill(T)===!0)&&No(this,R,"_pt"),delete _[T]),v!=="all"&&(v[T]=1)}return this._initted&&!this._pt&&d&&Ei(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ki(1,arguments)},e.delayedCall=function(i,s,o,u){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:u})},e.fromTo=function(i,s,o){return ki(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return de.killTweensOf(i,s,o)},e})($i);mt(we.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});et("staggerTo,staggerFrom,staggerFromTo",function(r){we[r]=function(){var e=new Ye,t=au.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var tc=function(e,t,n){return e[t]=n},Uf=function(e,t,n){return e[t](n)},hy=function(e,t,n,i){return e[t](i.fp,n)},dy=function(e,t,n){return e.setAttribute(t,n)},nc=function(e,t){return ge(e[t])?Uf:Hu(e[t])&&e.setAttribute?dy:tc},Ff=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},py=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},_y=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?No(this,t,"_pt"):t.dep||(n=1),t=i;return!n},my=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},tt=(function(){function r(t,n,i,s,o,u,c,l,d){this.t=n,this.s=s,this.c=o,this.p=i,this.r=u||Ff,this.d=c||this,this.set=l||tc,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=my,this.m=n,this.mt=s,this.tween=i},r})();et(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Qu[r]=1});_t.TweenMax=_t.TweenLite=we;_t.TimelineLite=_t.TimelineMax=Ye;de=new Ye({sortChildren:!1,defaults:Fi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pt.stringFilter=Of;var sr=[],Ws={},gy=[],dh=0,yy=0,La=function(e){return(Ws[e]||gy).map(function(t){return t()})},hu=function(){var e=Date.now(),t=[];e-dh>2&&(La("matchMediaInit"),sr.forEach(function(n){var i=n.queries,s=n.conditions,o,u,c,l;for(u in i)o=Pt.matchMedia(i[u]).matches,o&&(c=1),o!==s[u]&&(s[u]=o,l=1);l&&(n.revert(),c&&t.push(n))}),La("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dh=e,La("matchMedia"))},jf=(function(){function r(t,n){this.selector=n&&uu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ge(n)&&(s=i,i=n,n=ge);var o=this,u=function(){var l=le,d=o.selector,p;return l&&l!==o&&l.data.push(o),s&&(o.selector=uu(s)),le=o,p=i.apply(o,arguments),ge(p)&&o._r.push(p),le=l,o.selector=d,o.isReverted=!1,p};return o.last=u,n===ge?u(o,function(c){return o.add(null,c)}):n?o[n]=u:u},e.ignore=function(n){var i=le;le=null,n(this),le=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof we&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var u=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(d){return u.splice(u.indexOf(d),1)}));for(u.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Ye?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof we)&&l.revert&&l.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0})():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),i)for(var o=sr.length;o--;)sr[o].id===this.id&&sr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),vy=(function(){function r(t){this.contexts=[],this.scope=t,le&&le.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)||(n={matches:n});var o=new jf(0,s||this.scope),u=o.conditions={},c,l,d;le&&!o.selector&&(o.selector=le.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?d=1:(c=Pt.matchMedia(n[l]),c&&(sr.indexOf(o)<0&&sr.push(o),(u[l]=c.matches)&&(d=1),c.addListener?c.addListener(hu):c.addEventListener("change",hu)));return d&&i(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ao={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Cf(i)})},timeline:function(e){return new Ye(e)},getTweensOf:function(e,t){return de.getTweensOf(e,t)},getProperty:function(e,t,n,i){ke(e)&&(e=Tt(e)[0]);var s=nr(e||{}).get,o=n?mf:_f;return n==="native"&&(n=""),e&&(t?o((at[t]&&at[t].get||s)(e,t,n,i)):function(u,c,l){return o((at[u]&&at[u].get||s)(e,u,c,l))})},quickSetter:function(e,t,n){if(e=Tt(e),e.length>1){var i=e.map(function(d){return it.quickSetter(d,t,n)}),s=i.length;return function(d){for(var p=s;p--;)i[p](d)}}e=e[0]||{};var o=at[t],u=nr(e),c=u.harness&&(u.harness.aliases||{})[t]||t,l=o?function(d){var p=new o;Nr._pt=0,p.init(e,n?d+n:d,Nr,0,[e]),p.render(1,p),Nr._pt&&rc(1,Nr)}:u.set(e,c);return o?l:function(d){return l(e,c,n?d+n:d,u,1)}},quickTo:function(e,t,n){var i,s=it.to(e,mt((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,d){return s.resetTo(t,c,l,d)};return o.tween=s,o},isTweening:function(e){return de.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ir(e.ease,Fi.ease)),ah(Fi,e||{})},config:function(e){return ah(pt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(u){return u&&!at[u]&&!_t[u]&&Bi(t+" effect requires "+u+" plugin.")}),Na[t]=function(u,c,l){return n(Tt(u),mt(c||{},s),l)},o&&(Ye.prototype[t]=function(u,c,l){return this.add(Na[t](u,Ft(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Q[e]=ir(t)},parseEase:function(e,t){return arguments.length?ir(e,t):Q},getById:function(e){return de.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ye(e),i,s;for(n.smoothChildTiming=Ze(e.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,i=de._first;i;)s=i._next,(t||!(!i._dur&&i instanceof we&&i.vars.onComplete===i._targets[0]))&&kt(n,i,i._start-i._delay),i=s;return kt(de,n,0),n},context:function(e,t){return e?new jf(e,t):le},matchMedia:function(e){return new vy(e)},matchMediaRefresh:function(){return sr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hu()},addEventListener:function(e,t){var n=Ws[e]||(Ws[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ws[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Xg,wrapYoyo:Yg,distribute:If,random:Rf,snap:Af,normalize:Qg,getUnit:qe,clamp:Hg,splitColor:kf,toArray:Tt,selector:uu,mapRange:Sf,pipe:Gg,unitize:Kg,interpolate:Jg,shuffle:wf},install:lf,effects:Na,ticker:ut,updateRoot:Ye.updateRoot,plugins:at,globalTimeline:de,core:{PropTween:tt,globals:hf,Tween:we,Timeline:Ye,Animation:$i,getCache:nr,_removeLinkedListItem:No,reverting:function(){return Ve},context:function(e){return e&&le&&(le.data.push(e),e._ctx=le),le},suppressOverwrites:function(e){return $u=e}}};et("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ao[r]=we[r]});ut.add(Ye.updateRoot);Nr=ao.to({},{duration:0});var Ty=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ey=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Ty(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Ua=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(u){var c,l;if(ke(s)&&(c={},et(s,function(d){return c[d]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Ey(u,s)}}}},it=ao.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,u,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",u=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),u.op=o,u.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ve?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ua("roundProps",cu),Ua("modifiers"),Ua("snap",Af))||ao;we.version=Ye.version=it.version="3.15.0";cf=1;Wu()&&Hr();Q.Power0;Q.Power1;Q.Power2;Q.Power3;Q.Power4;Q.Linear;Q.Quad;Q.Cubic;Q.Quart;Q.Quint;Q.Strong;Q.Elastic;Q.Back;Q.SteppedEase;Q.Bounce;Q.Sine;Q.Expo;Q.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fh,gn,xr,ic,Zn,ph,sc,wy=function(){return typeof window<"u"},tn={},Xn=180/Math.PI,Mr=Math.PI/180,br=Math.atan2,_h=1e8,oc=/([A-Z])/g,Iy=/(left|right|width|margin|padding|x)/i,Ay=/[\s,\(]\S/,Dt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ry=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},by=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sy=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Py=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$f=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Cy=function(e,t,n){return e.style[t]=n},ky=function(e,t,n){return e.style.setProperty(t,n)},Dy=function(e,t,n){return e._gsap[t]=n},Oy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ny=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Vy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},fe="transform",nt=fe+"Origin",xy=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in tn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Dt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return n.tfm[u]=Gt(i,u)}):this.tfm[e]=o.x?o[e]:Gt(i,e),e===nt&&(this.tfm.zOrigin=o.zOrigin);else return Dt.transform.split(",").forEach(function(u){return r.call(n,u,t)});if(this.props.indexOf(fe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nt,t,"")),e=fe}(s||t)&&this.props.push(e,t,s[e])},Hf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},My=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(oc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sc(),(!s||!s.isStart)&&!n[fe]&&(Hf(n),i.zOrigin&&n[nt]&&(n[nt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wf=function(e,t){var n={target:e,props:[],revert:My,save:xy};return e._gsap||it.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Gf,fu=function(e,t){var n=gn.createElementNS?gn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gn.createElement(e);return n&&n.style?n:gn.createElement(e)},ht=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(oc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Wr(t)||t,1)||""},mh="O,Moz,ms,Ms,Webkit".split(","),Wr=function(e,t,n){var i=t||Zn,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mh[o]:"")+e},pu=function(){wy()&&window.document&&(fh=window,gn=fh.document,xr=gn.documentElement,Zn=fu("div")||{style:{}},fu("div"),fe=Wr(fe),nt=fe+"Origin",Zn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gf=!!Wr("perspective"),sc=it.core.reverting,ic=1)},gh=function(e){var t=e.ownerSVGElement,n=fu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),xr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),xr.removeChild(n),s},yh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kf=function(e){var t,n;try{t=e.getBBox()}catch{t=gh(e),n=1}return t&&(t.width||t.height)||n||(t=gh(e)),t&&!t.width&&!t.x&&!t.y?{x:+yh(e,["x","cx","x1"])||0,y:+yh(e,["y","cy","y1"])||0,width:0,height:0}:t},Qf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kf(e))},Pn=function(e,t){if(t){var n=e.style,i;t in tn&&t!==nt&&(t=fe),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(oc,"-$1").toLowerCase())):n.removeAttribute(t)}},yn=function(e,t,n,i,s,o){var u=new tt(e._pt,t,n,0,1,o?$f:qf);return e._pt=u,u.b=i,u.e=s,e._props.push(n),u},vh={deg:1,rad:1,turn:1},Ly={grid:1,flex:1},Cn=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",u=Zn.style,c=Iy.test(t),l=e.tagName.toLowerCase()==="svg",d=(l?"client":"offset")+(c?"Width":"Height"),p=100,_=i==="px",v=i==="%",I,T,R,D;if(i===o||!s||vh[i]||vh[o])return s;if(o!=="px"&&!_&&(s=r(e,t,n,"px")),D=e.getCTM&&Qf(e),(v||o==="%")&&(tn[t]||~t.indexOf("adius")))return I=D?e.getBBox()[c?"width":"height"]:e[d],ve(v?s/I*p:s/100*I);if(u[c?"width":"height"]=p+(_?o:i),T=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,D&&(T=(e.ownerSVGElement||{}).parentNode),(!T||T===gn||!T.appendChild)&&(T=gn.body),R=T._gsap,R&&v&&R.width&&c&&R.time===ut.time&&!R.uncache)return ve(s/R.width*p);if(v&&(t==="height"||t==="width")){var C=e.style[t];e.style[t]=p+i,I=e[d],C?e.style[t]=C:Pn(e,t)}else(v||o==="%")&&!Ly[ht(T,"display")]&&(u.position=ht(e,"position")),T===e&&(u.position="static"),T.appendChild(Zn),I=Zn[d],T.removeChild(Zn),u.position="absolute";return c&&v&&(R=nr(T),R.time=ut.time,R.width=T[d]),ve(_?I*s/p:I&&s?p/I*s:0)},Gt=function(e,t,n,i){var s;return ic||pu(),t in Dt&&t!=="transform"&&(t=Dt[t],~t.indexOf(",")&&(t=t.split(",")[0])),tn[t]&&t!=="transform"?(s=Wi(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:co(ht(e,nt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=uo[t]&&uo[t](e,t,n)||ht(e,t)||ff(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cn(e,t,s,n)+n:s},Uy=function(e,t,n,i){if(!n||n==="none"){var s=Wr(t,e,1),o=s&&ht(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ht(e,"borderTopColor"))}var u=new tt(this._pt,e.style,t,0,1,Bf),c=0,l=0,d,p,_,v,I,T,R,D,C,k,N,V;if(u.b=n,u.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ht(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(T=e.style[t],e.style[t]=i,i=ht(e,t)||i,T?e.style[t]=T:Pn(e,t)),d=[n,i],Of(d),n=d[0],i=d[1],_=n.match(Or)||[],V=i.match(Or)||[],V.length){for(;p=Or.exec(i);)R=p[0],C=i.substring(c,p.index),I?I=(I+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(I=1),R!==(T=_[l++]||"")&&(v=parseFloat(T)||0,N=T.substr((v+"").length),R.charAt(1)==="="&&(R=Vr(v,R)+N),D=parseFloat(R),k=R.substr((D+"").length),c=Or.lastIndex-k.length,k||(k=k||pt.units[t]||N,c===i.length&&(i+=k,u.e+=k)),N!==k&&(v=Cn(e,t,T,k)||0),u._pt={_next:u._pt,p:C||l===1?C:",",s:v,c:D-v,m:I&&I<4||t==="zIndex"?Math.round:0});u.c=c<i.length?i.substring(c,i.length):""}else u.r=t==="display"&&i==="none"?$f:qf;return uf.test(i)&&(u.e=0),this._pt=u,u},Th={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Th[n]||n,t[1]=Th[i]||i,t.join(" ")},By=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,u,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)u=s[l],tn[u]&&(c=1,u=u==="transformOrigin"?nt:fe),Pn(n,u);c&&(Pn(n,fe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wi(n,1),o.uncache=1,Hf(i)))}},uo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new tt(e._pt,t,n,0,0,By);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Hi=[1,0,0,1,0,0],Xf={},Yf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eh=function(e){var t=ht(e,fe);return Yf(t)?Hi:t.substr(7).match(af).map(ve)},ac=function(e,t){var n=e._gsap||nr(e),i=e.style,s=Eh(e),o,u,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Hi:s):(s===Hi&&!e.offsetParent&&e!==xr&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,u=e.nextElementSibling,xr.appendChild(e)),s=Eh(e),c?i.display=c:Pn(e,"display"),l&&(u?o.insertBefore(e,u):o?o.appendChild(e):xr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},_u=function(e,t,n,i,s,o){var u=e._gsap,c=s||ac(e,!0),l=u.xOrigin||0,d=u.yOrigin||0,p=u.xOffset||0,_=u.yOffset||0,v=c[0],I=c[1],T=c[2],R=c[3],D=c[4],C=c[5],k=t.split(" "),N=parseFloat(k[0])||0,V=parseFloat(k[1])||0,L,E,g,y;n?c!==Hi&&(E=v*R-I*T)&&(g=N*(R/E)+V*(-T/E)+(T*C-R*D)/E,y=N*(-I/E)+V*(v/E)-(v*C-I*D)/E,N=g,V=y):(L=Kf(e),N=L.x+(~k[0].indexOf("%")?N/100*L.width:N),V=L.y+(~(k[1]||k[0]).indexOf("%")?V/100*L.height:V)),i||i!==!1&&u.smooth?(D=N-l,C=V-d,u.xOffset=p+(D*v+C*T)-D,u.yOffset=_+(D*I+C*R)-C):u.xOffset=u.yOffset=0,u.xOrigin=N,u.yOrigin=V,u.smooth=!!i,u.origin=t,u.originIsAbsolute=!!n,e.style[nt]="0px 0px",o&&(yn(o,u,"xOrigin",l,N),yn(o,u,"yOrigin",d,V),yn(o,u,"xOffset",p,u.xOffset),yn(o,u,"yOffset",_,u.yOffset)),e.setAttribute("data-svg-origin",N+" "+V)},Wi=function(e,t){var n=e._gsap||new Vf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",u="deg",c=getComputedStyle(e),l=ht(e,nt)||"0",d,p,_,v,I,T,R,D,C,k,N,V,L,E,g,y,A,b,S,w,Y,ce,ye,ee,Pe,St,an,qn,Me,Re,wt,st;return d=p=_=T=R=D=C=k=N=0,v=I=1,n.svg=!!(e.getCTM&&Qf(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[fe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[fe]!=="none"?c[fe]:"")),i.scale=i.rotate=i.translate="none"),E=ac(e,n.svg),n.svg&&(n.uncache?(Pe=e.getBBox(),l=n.xOrigin-Pe.x+"px "+(n.yOrigin-Pe.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),_u(e,ee||l,!!ee||n.originIsAbsolute,n.smooth!==!1,E)),V=n.xOrigin||0,L=n.yOrigin||0,E!==Hi&&(b=E[0],S=E[1],w=E[2],Y=E[3],d=ce=E[4],p=ye=E[5],E.length===6?(v=Math.sqrt(b*b+S*S),I=Math.sqrt(Y*Y+w*w),T=b||S?br(S,b)*Xn:0,C=w||Y?br(w,Y)*Xn+T:0,C&&(I*=Math.abs(Math.cos(C*Mr))),n.svg&&(d-=V-(V*b+L*w),p-=L-(V*S+L*Y))):(st=E[6],Re=E[7],an=E[8],qn=E[9],Me=E[10],wt=E[11],d=E[12],p=E[13],_=E[14],g=br(st,Me),R=g*Xn,g&&(y=Math.cos(-g),A=Math.sin(-g),ee=ce*y+an*A,Pe=ye*y+qn*A,St=st*y+Me*A,an=ce*-A+an*y,qn=ye*-A+qn*y,Me=st*-A+Me*y,wt=Re*-A+wt*y,ce=ee,ye=Pe,st=St),g=br(-w,Me),D=g*Xn,g&&(y=Math.cos(-g),A=Math.sin(-g),ee=b*y-an*A,Pe=S*y-qn*A,St=w*y-Me*A,wt=Y*A+wt*y,b=ee,S=Pe,w=St),g=br(S,b),T=g*Xn,g&&(y=Math.cos(g),A=Math.sin(g),ee=b*y+S*A,Pe=ce*y+ye*A,S=S*y-b*A,ye=ye*y-ce*A,b=ee,ce=Pe),R&&Math.abs(R)+Math.abs(T)>359.9&&(R=T=0,D=180-D),v=ve(Math.sqrt(b*b+S*S+w*w)),I=ve(Math.sqrt(ye*ye+st*st)),g=br(ce,ye),C=Math.abs(g)>2e-4?g*Xn:0,N=wt?1/(wt<0?-wt:wt):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Yf(ht(e,fe)),ee&&e.setAttribute("transform",ee))),Math.abs(C)>90&&Math.abs(C)<270&&(s?(v*=-1,C+=T<=0?180:-180,T+=T<=0?180:-180):(I*=-1,C+=C<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=_+o,n.scaleX=ve(v),n.scaleY=ve(I),n.rotation=ve(T)+u,n.rotationX=ve(R)+u,n.rotationY=ve(D)+u,n.skewX=C+u,n.skewY=k+u,n.transformPerspective=N+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[nt]=co(l)),n.xOffset=n.yOffset=0,n.force3D=pt.force3D,n.renderTransform=n.svg?jy:Gf?Jf:zy,n.uncache=0,n},co=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fa=function(e,t,n){var i=qe(t);return ve(parseFloat(t)+parseFloat(Cn(e,"x",n+"px",i)))+i},zy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jf(e,t)},Kn="0deg",vi="0px",Qn=") ",Jf=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,u=n.y,c=n.z,l=n.rotation,d=n.rotationY,p=n.rotationX,_=n.skewX,v=n.skewY,I=n.scaleX,T=n.scaleY,R=n.transformPerspective,D=n.force3D,C=n.target,k=n.zOrigin,N="",V=D==="auto"&&e&&e!==1||D===!0;if(k&&(p!==Kn||d!==Kn)){var L=parseFloat(d)*Mr,E=Math.sin(L),g=Math.cos(L),y;L=parseFloat(p)*Mr,y=Math.cos(L),o=Fa(C,o,E*y*-k),u=Fa(C,u,-Math.sin(L)*-k),c=Fa(C,c,g*y*-k+k)}R!==vi&&(N+="perspective("+R+Qn),(i||s)&&(N+="translate("+i+"%, "+s+"%) "),(V||o!==vi||u!==vi||c!==vi)&&(N+=c!==vi||V?"translate3d("+o+", "+u+", "+c+") ":"translate("+o+", "+u+Qn),l!==Kn&&(N+="rotate("+l+Qn),d!==Kn&&(N+="rotateY("+d+Qn),p!==Kn&&(N+="rotateX("+p+Qn),(_!==Kn||v!==Kn)&&(N+="skew("+_+", "+v+Qn),(I!==1||T!==1)&&(N+="scale("+I+", "+T+Qn),C.style[fe]=N||"translate(0, 0)"},jy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,u=n.y,c=n.rotation,l=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,v=n.target,I=n.xOrigin,T=n.yOrigin,R=n.xOffset,D=n.yOffset,C=n.forceCSS,k=parseFloat(o),N=parseFloat(u),V,L,E,g,y;c=parseFloat(c),l=parseFloat(l),d=parseFloat(d),d&&(d=parseFloat(d),l+=d,c+=d),c||l?(c*=Mr,l*=Mr,V=Math.cos(c)*p,L=Math.sin(c)*p,E=Math.sin(c-l)*-_,g=Math.cos(c-l)*_,l&&(d*=Mr,y=Math.tan(l-d),y=Math.sqrt(1+y*y),E*=y,g*=y,d&&(y=Math.tan(d),y=Math.sqrt(1+y*y),V*=y,L*=y)),V=ve(V),L=ve(L),E=ve(E),g=ve(g)):(V=p,g=_,L=E=0),(k&&!~(o+"").indexOf("px")||N&&!~(u+"").indexOf("px"))&&(k=Cn(v,"x",o,"px"),N=Cn(v,"y",u,"px")),(I||T||R||D)&&(k=ve(k+I-(I*V+T*E)+R),N=ve(N+T-(I*L+T*g)+D)),(i||s)&&(y=v.getBBox(),k=ve(k+i/100*y.width),N=ve(N+s/100*y.height)),y="matrix("+V+","+L+","+E+","+g+","+k+","+N+")",v.setAttribute("transform",y),C&&(v.style[fe]=y)},qy=function(e,t,n,i,s){var o=360,u=ke(s),c=parseFloat(s)*(u&&~s.indexOf("rad")?Xn:1),l=c-i,d=i+l+"deg",p,_;return u&&(p=s.split("_")[1],p==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),p==="cw"&&l<0?l=(l+o*_h)%o-~~(l/o)*o:p==="ccw"&&l>0&&(l=(l-o*_h)%o-~~(l/o)*o)),e._pt=_=new tt(e._pt,t,n,i,l,Ry),_.e=d,_.u="deg",e._props.push(n),_},wh=function(e,t){for(var n in t)e[n]=t[n];return e},$y=function(e,t,n){var i=wh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,u,c,l,d,p,_,v,I;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[fe]=t,u=Wi(n,1),Pn(n,fe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[fe],o[fe]=t,u=Wi(n,1),o[fe]=l);for(c in tn)l=i[c],d=u[c],l!==d&&s.indexOf(c)<0&&(v=qe(l),I=qe(d),p=v!==I?Cn(n,c,l,I):parseFloat(l),_=parseFloat(d),e._pt=new tt(e._pt,u,c,p,_-p,du),e._pt.u=I||0,e._props.push(c));wh(u,i)};et("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(u){return e<2?r+u:"border"+u+r});uo[e>1?"border"+r:r]=function(u,c,l,d,p){var _,v;if(arguments.length<4)return _=o.map(function(I){return Gt(u,I,l)}),v=_.join(" "),v.split(_[0]).length===5?_[0]:v;_=(d+"").split(" "),v={},o.forEach(function(I,T){return v[I]=_[T]=_[T]||_[(T-1)/2|0]}),u.init(c,v,p)}});var Zf={name:"css",register:pu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,u=e.style,c=n.vars.startAt,l,d,p,_,v,I,T,R,D,C,k,N,V,L,E,g,y;ic||pu(),this.styles=this.styles||Wf(e),g=this.styles.props,this.tween=n;for(T in t)if(T!=="autoRound"&&(d=t[T],!(at[T]&&xf(T,t,n,i,e,s)))){if(v=typeof d,I=uo[T],v==="function"&&(d=d.call(n,i,e,s),v=typeof d),v==="string"&&~d.indexOf("random(")&&(d=ji(d)),I)I(this,e,T,d,n)&&(E=1);else if(T.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(T)+"").trim(),d+="",En.lastIndex=0,En.test(l)||(R=qe(l),D=qe(d),D?R!==D&&(l=Cn(e,T,l,D)+D):R&&(d+=R)),this.add(u,"setProperty",l,d,i,s,0,0,T),o.push(T),g.push(T,0,u[T]);else if(v!=="undefined"){if(c&&T in c?(l=typeof c[T]=="function"?c[T].call(n,i,e,s):c[T],ke(l)&&~l.indexOf("random(")&&(l=ji(l)),qe(l+"")||l==="auto"||(l+=pt.units[T]||qe(Gt(e,T))||""),(l+"").charAt(1)==="="&&(l=Gt(e,T))):l=Gt(e,T),_=parseFloat(l),C=v==="string"&&d.charAt(1)==="="&&d.substr(0,2),C&&(d=d.substr(2)),p=parseFloat(d),T in Dt&&(T==="autoAlpha"&&(_===1&&Gt(e,"visibility")==="hidden"&&p&&(_=0),g.push("visibility",0,u.visibility),yn(this,u,"visibility",_?"inherit":"hidden",p?"inherit":"hidden",!p)),T!=="scale"&&T!=="transform"&&(T=Dt[T],~T.indexOf(",")&&(T=T.split(",")[0]))),k=T in tn,k){if(this.styles.save(T),y=d,v==="string"&&d.substring(0,6)==="var(--"){if(d=ht(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=d,d=ht(e,"perspective"),A?e.style.perspective=A:Pn(e,"perspective")}p=parseFloat(d)}if(N||(V=e._gsap,V.renderTransform&&!t.parseTransform||Wi(e,t.parseTransform),L=t.smoothOrigin!==!1&&V.smooth,N=this._pt=new tt(this._pt,u,fe,0,1,V.renderTransform,V,0,-1),N.dep=1),T==="scale")this._pt=new tt(this._pt,V,"scaleY",V.scaleY,(C?Vr(V.scaleY,C+p):p)-V.scaleY||0,du),this._pt.u=0,o.push("scaleY",T),T+="X";else if(T==="transformOrigin"){g.push(nt,0,u[nt]),d=Fy(d),V.svg?_u(e,d,0,L,0,this):(D=parseFloat(d.split(" ")[2])||0,D!==V.zOrigin&&yn(this,V,"zOrigin",V.zOrigin,D),yn(this,u,T,co(l),co(d)));continue}else if(T==="svgOrigin"){_u(e,d,1,L,0,this);continue}else if(T in Xf){qy(this,V,T,_,C?Vr(_,C+d):d);continue}else if(T==="smoothOrigin"){yn(this,V,"smooth",V.smooth,d);continue}else if(T==="force3D"){V[T]=d;continue}else if(T==="transform"){$y(this,d,e);continue}}else T in u||(T=Wr(T)||T);if(k||(p||p===0)&&(_||_===0)&&!Ay.test(d)&&T in u)R=(l+"").substr((_+"").length),p||(p=0),D=qe(d)||(T in pt.units?pt.units[T]:R),R!==D&&(_=Cn(e,T,l,D)),this._pt=new tt(this._pt,k?V:u,T,_,(C?Vr(_,C+p):p)-_,!k&&(D==="px"||T==="zIndex")&&t.autoRound!==!1?Py:du),this._pt.u=D||0,k&&y!==d?(this._pt.b=l,this._pt.e=y,this._pt.r=Sy):R!==D&&D!=="%"&&(this._pt.b=l,this._pt.r=by);else if(T in u)Uy.call(this,e,T,l,C?C+d:d);else if(T in e)this.add(e,T,l||e[T],C?C+d:d,i,s);else if(T!=="parseTransform"){Ku(T,d);continue}k||(T in u?g.push(T,0,u[T]):typeof e[T]=="function"?g.push(T,2,e[T]()):g.push(T,1,l||e[T])),o.push(T)}}E&&zf(this)},render:function(e,t){if(t.tween._time||!sc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gt,aliases:Dt,getSetter:function(e,t,n){var i=Dt[t];return i&&i.indexOf(",")<0&&(t=i),t in tn&&t!==nt&&(e._gsap.x||Gt(e,"x"))?n&&ph===n?t==="scale"?Oy:Dy:(ph=n||{})&&(t==="scale"?Ny:Vy):e.style&&!Hu(e.style[t])?Cy:~t.indexOf("-")?ky:nc(e,t)},core:{_removeProperty:Pn,_getMatrix:ac}};it.utils.checkPrefix=Wr;it.core.getStyleSaver=Wf;(function(r,e,t,n){var i=et(r+","+e+","+t,function(s){tn[s]=1});et(e,function(s){pt.units[s]="deg",Xf[s]=1}),Dt[i[13]]=r+","+e,et(n,function(s){var o=s.split(":");Dt[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");et("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pt.units[r]="px"});it.registerPlugin(Zf);var Hy=it.registerPlugin(Zf)||it;Hy.core.Tween;const Wy=()=>{};var Ih={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gy=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],u=r[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,u=o?r[i+1]:0,c=i+2<r.length,l=c?r[i+2]:0,d=s>>2,p=(s&3)<<4|u>>4;let _=(u&15)<<2|l>>6,v=l&63;c||(v=64,o||(_=64)),n.push(t[d],t[p],t[_],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ep(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Gy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const l=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||l==null||p==null)throw new Ky;const _=s<<2|u>>4;if(n.push(_),l!==64){const v=u<<4&240|l>>2;if(n.push(v),p!==64){const I=l<<6&192|p;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ky extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qy=function(r){const e=ep(r);return tp.encodeByteArray(e,!0)},lo=function(r){return Qy(r).replace(/\./g,"")},np=function(r){try{return tp.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=()=>Xy().__FIREBASE_DEFAULTS__,Jy=()=>{if(typeof process>"u"||typeof Ih>"u")return;const r=Ih.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&np(r[1]);return e&&JSON.parse(e)},Mo=()=>{try{return Wy()||Yy()||Jy()||Zy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},rp=r=>{var e,t;return(t=(e=Mo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},ip=r=>{const e=rp(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},sp=()=>{var r;return(r=Mo())===null||r===void 0?void 0:r.config},op=r=>{var e;return(e=Mo())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uc(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[lo(JSON.stringify(t)),lo(JSON.stringify(o)),""].join(".")}const Oi={};function tv(){const r={prod:[],emulator:[]};for(const e of Object.keys(Oi))Oi[e]?r.emulator.push(e):r.prod.push(e);return r}function nv(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ah=!1;function cc(r,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||Oi[r]===e||Oi[r]||Ah)return;Oi[r]=e;function t(_){return`__firebase__banner__${_}`}const n="__firebase__banner",s=tv().prod.length>0;function o(){const _=document.getElementById(n);_&&_.remove()}function u(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,v){_.setAttribute("width","24"),_.setAttribute("id",v),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function l(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Ah=!0,o()},_}function d(_,v){_.setAttribute("id",v),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=nv(n),v=t("text"),I=document.getElementById(v)||document.createElement("span"),T=t("learnmore"),R=document.getElementById(T)||document.createElement("a"),D=t("preprendIcon"),C=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const k=_.element;u(k),d(R,T);const N=l();c(C,D),k.append(C,I,R,N),document.body.appendChild(k)}s?(I.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function iv(){var r;const e=(r=Mo())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ov(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function av(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uv(){const r=He();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function cv(){return!iv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lv(){try{return typeof indexedDB=="object"}catch{return!1}}function hv(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="FirebaseError";class jt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=dv,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fv(s,n):"Error",u=`${this.serviceName}: ${o} (${i}).`;return new jt(i,u,n)}}function fv(r,e){return r.replace(pv,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const pv=/\{\$([^}]+)}/g;function _v(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ur(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Rh(s)&&Rh(o)){if(!ur(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Rh(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ii(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ai(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function mv(r,e){const t=new gv(r,e);return t.subscribe.bind(t)}class gv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");yv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yv(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ba(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(r){return r&&r._delegate?r._delegate:r}class kn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ev;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ev(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Tv(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tv(r){return r===Yn?void 0:r}function Ev(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const Iv={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Av=G.INFO,Rv={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},bv=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Rv[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Av,this._logHandler=bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Iv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Sv=(r,e)=>e.some(t=>r instanceof t);let bh,Sh;function Pv(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cv(){return Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,mu=new WeakMap,cp=new WeakMap,za=new WeakMap,hc=new WeakMap;function kv(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(wn(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&up.set(t,r)}).catch(()=>{}),hc.set(e,r),e}function Dv(r){if(mu.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});mu.set(r,e)}let gu={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return mu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||cp.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ov(r){gu=r(gu)}function Nv(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ja(this),e,...t);return cp.set(n,e.sort?e.sort():[e]),wn(n)}:Cv().includes(r)?function(...e){return r.apply(ja(this),e),wn(up.get(this))}:function(...e){return wn(r.apply(ja(this),e))}}function Vv(r){return typeof r=="function"?Nv(r):(r instanceof IDBTransaction&&Dv(r),Sv(r,Pv())?new Proxy(r,gu):r)}function wn(r){if(r instanceof IDBRequest)return kv(r);if(za.has(r))return za.get(r);const e=Vv(r);return e!==r&&(za.set(r,e),hc.set(e,r)),e}const ja=r=>hc.get(r);function xv(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),u=wn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(wn(o.result),c.oldVersion,c.newVersion,wn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),u}const Mv=["get","getKey","getAll","getAllKeys","count"],Lv=["put","add","delete","clear"],qa=new Map;function Ph(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Lv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Mv.includes(t)))return;const s=async function(o,...u){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(u.shift())),(await Promise.all([l[t](...u),i&&c.done]))[0]};return qa.set(e,s),s}Ov(r=>({...r,get:(e,t,n)=>Ph(e,t)||r.get(e,t,n),has:(e,t)=>!!Ph(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fv(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Fv(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",Ch="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new lc("@firebase/app"),Bv="@firebase/app-compat",zv="@firebase/analytics-compat",jv="@firebase/analytics",qv="@firebase/app-check-compat",$v="@firebase/app-check",Hv="@firebase/auth",Wv="@firebase/auth-compat",Gv="@firebase/database",Kv="@firebase/data-connect",Qv="@firebase/database-compat",Xv="@firebase/functions",Yv="@firebase/functions-compat",Jv="@firebase/installations",Zv="@firebase/installations-compat",eT="@firebase/messaging",tT="@firebase/messaging-compat",nT="@firebase/performance",rT="@firebase/performance-compat",iT="@firebase/remote-config",sT="@firebase/remote-config-compat",oT="@firebase/storage",aT="@firebase/storage-compat",uT="@firebase/firestore",cT="@firebase/ai",lT="@firebase/firestore-compat",hT="firebase",dT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="[DEFAULT]",fT={[yu]:"fire-core",[Bv]:"fire-core-compat",[jv]:"fire-analytics",[zv]:"fire-analytics-compat",[$v]:"fire-app-check",[qv]:"fire-app-check-compat",[Hv]:"fire-auth",[Wv]:"fire-auth-compat",[Gv]:"fire-rtdb",[Kv]:"fire-data-connect",[Qv]:"fire-rtdb-compat",[Xv]:"fire-fn",[Yv]:"fire-fn-compat",[Jv]:"fire-iid",[Zv]:"fire-iid-compat",[eT]:"fire-fcm",[tT]:"fire-fcm-compat",[nT]:"fire-perf",[rT]:"fire-perf-compat",[iT]:"fire-rc",[sT]:"fire-rc-compat",[oT]:"fire-gcs",[aT]:"fire-gcs-compat",[uT]:"fire-fst",[lT]:"fire-fst-compat",[cT]:"fire-vertex","fire-js":"fire-js",[hT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,pT=new Map,Tu=new Map;function kh(r,e){try{r.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cr(r){const e=r.name;if(Tu.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,r);for(const t of ho.values())kh(t,r);for(const t of pT.values())kh(t,r);return!0}function Lo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ct(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new ns("app","Firebase",_T);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=dT;function lp(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:vu,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(t||(t=sp()),!t)throw In.create("no-options");const s=ho.get(i);if(s){if(ur(t,s.options)&&ur(n,s.config))return s;throw In.create("duplicate-app",{appName:i})}const o=new wv(i);for(const c of Tu.values())o.addComponent(c);const u=new mT(t,n,o);return ho.set(i,u),u}function dc(r=vu){const e=ho.get(r);if(!e&&r===vu&&sp())return lp();if(!e)throw In.create("no-app",{appName:r});return e}function Nt(r,e,t){var n;let i=(n=fT[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(u.join(" "));return}cr(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebase-heartbeat-database",yT=1,Gi="firebase-heartbeat-store";let $a=null;function hp(){return $a||($a=xv(gT,yT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gi)}catch(t){console.warn(t)}}}}).catch(r=>{throw In.create("idb-open",{originalErrorMessage:r.message})})),$a}async function vT(r){try{const t=(await hp()).transaction(Gi),n=await t.objectStore(Gi).get(dp(r));return await t.done,n}catch(e){if(e instanceof jt)nn.warn(e.message);else{const t=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(t.message)}}}async function Dh(r,e){try{const n=(await hp()).transaction(Gi,"readwrite");await n.objectStore(Gi).put(e,dp(r)),await n.done}catch(t){if(t instanceof jt)nn.warn(t.message);else{const n=In.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nn.warn(n.message)}}}function dp(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1024,ET=30;class wT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new AT(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Oh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ET){const o=RT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){nn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oh(),{heartbeatsToSend:n,unsentEntries:i}=IT(this._heartbeatsCache.heartbeats),s=lo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nn.warn(t),""}}}function Oh(){return new Date().toISOString().substring(0,10)}function IT(r,e=TT){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Nh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class AT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lv()?hv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nh(r){return lo(JSON.stringify({version:2,heartbeats:r})).length}function RT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(r){cr(new kn("platform-logger",e=>new Uv(e),"PRIVATE")),cr(new kn("heartbeat",e=>new wT(e),"PRIVATE")),Nt(yu,Ch,r),Nt(yu,Ch,"esm2017"),Nt("fire-js","")}bT("");var ST="firebase",PT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(ST,PT,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="firebasestorage.googleapis.com",pp="storageBucket",CT=120*1e3,kT=600*1e3,DT=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends jt{constructor(e,t,n=0){super(Ha(e),`Firebase Storage: ${t} (${Ha(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ha(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Ha(r){return"storage/"+r}function fc(){const r="An unknown error occurred, please check the error payload for server response.";return new _e(ue.UNKNOWN,r)}function OT(r){return new _e(ue.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function NT(r){return new _e(ue.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function VT(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(ue.UNAUTHENTICATED,r)}function xT(){return new _e(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MT(r){return new _e(ue.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function _p(){return new _e(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mp(){return new _e(ue.CANCELED,"User canceled the upload/download.")}function LT(r){return new _e(ue.INVALID_URL,"Invalid URL '"+r+"'.")}function UT(r){return new _e(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function FT(){return new _e(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pp+"' property when initializing the app?")}function gp(){return new _e(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BT(){return new _e(ue.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zT(){return new _e(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jT(r){return new _e(ue.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Eu(r){return new _e(ue.INVALID_ARGUMENT,r)}function yp(){return new _e(ue.APP_DELETED,"The Firebase app was deleted.")}function qT(r){return new _e(ue.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ni(r,e){return new _e(ue.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Ti(r){throw new _e(ue.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=dt.makeFromUrl(e,t)}catch{return new dt(e,"")}if(n.path==="")return n;throw UT(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${d}/b/${i}/o${_}`,"i"),I={bucket:1,path:3},T=t===fp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",D=new RegExp(`^https?://${T}/${i}/${R}`,"i"),k=[{regex:u,indices:c,postModify:s},{regex:v,indices:I,postModify:l},{regex:D,indices:{bucket:1,path:2},postModify:l}];for(let N=0;N<k.length;N++){const V=k[N],L=V.regex.exec(e);if(L){const E=L[V.indices.bucket];let g=L[V.indices.path];g||(g=""),n=new dt(E,g),V.postModify(n);break}}if(n==null)throw LT(e);return n}}class $T{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(r,e,t){let n=1,i=null,s=null,o=!1,u=0;function c(){return u===2}let l=!1;function d(...R){l||(l=!0,e.apply(null,R))}function p(R){i=setTimeout(()=>{i=null,r(v,c())},R)}function _(){s&&clearTimeout(s)}function v(R,...D){if(l){_();return}if(R){_(),d.call(null,R,...D);return}if(c()||o){_(),d.call(null,R,...D);return}n<64&&(n*=2);let k;u===1?(u=2,k=0):k=(n+Math.random())*1e3,p(k)}let I=!1;function T(R){I||(I=!0,_(),!l&&(i!==null?(R||(u=2),clearTimeout(i),p(0)):R||(u=1)))}return p(0),s=setTimeout(()=>{o=!0,T(!0)},t),T}function WT(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(r){return r!==void 0}function KT(r){return typeof r=="function"}function QT(r){return typeof r=="object"&&!Array.isArray(r)}function Uo(r){return typeof r=="string"||r instanceof String}function Vh(r){return pc()&&r instanceof Blob}function pc(){return typeof Blob<"u"}function xh(r,e,t,n){if(n<e)throw Eu(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Eu(`Invalid value for '${r}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(r,e,t){let n=e;return t==null&&(n=`https://${e}`),`${t}://${n}/v0${r}`}function vp(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const i=e(n)+"="+e(r[n]);t=t+i+"&"}return t=t.slice(0,-1),t}var or;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(or||(or={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(r,e){const t=r>=500&&r<600,i=[408,429].indexOf(r)!==-1,s=e.indexOf(r)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,n,i,s,o,u,c,l,d,p,_=!0,v=!1){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=p,this.retry=_,this.isUsingEmulator=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,T)=>{this.resolve_=I,this.reject_=T,this.start_()})}start_(){const e=(n,i)=>{if(i){n(!1,new xs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=u=>{const c=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const u=s.getErrorCode()===or.NO_ERROR,c=s.getStatus();if(!u||Tp(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===or.ABORT;n(!1,new xs(!1,null,d));return}const l=this.successCodes_.indexOf(c)!==-1;n(!0,new xs(l,s))})},t=(n,i)=>{const s=this.resolve_,o=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());GT(c)?s(c):s()}catch(c){o(c)}else if(u!==null){const c=fc();c.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,c)):o(c)}else if(i.canceled){const c=this.appDelete_?yp():mp();o(c)}else{const c=_p();o(c)}};this.canceled_?t(!1,new xs(!1,null,!0)):this.backoffId_=HT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xs{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function YT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function JT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ZT(r,e){e&&(r["X-Firebase-GMPID"]=e)}function eE(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function tE(r,e,t,n,i,s,o=!0,u=!1){const c=vp(r.urlParams),l=r.url+c,d=Object.assign({},r.headers);return ZT(d,e),YT(d,t),JT(d,s),eE(d,n),new XT(l,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,i,o,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rE(...r){const e=nE();if(e!==void 0){const t=new e;for(let n=0;n<r.length;n++)t.append(r[n]);return t.getBlob()}else{if(pc())return new Blob(r);throw new _e(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iE(r,e,t){return r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(r){if(typeof atob>"u")throw jT("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wa{constructor(e,t){this.data=e,this.contentType=t||null}}function oE(r,e){switch(r){case Ot.RAW:return new Wa(Ep(e));case Ot.BASE64:case Ot.BASE64URL:return new Wa(wp(r,e));case Ot.DATA_URL:return new Wa(uE(e),cE(e))}throw fc()}function Ep(r){const e=[];for(let t=0;t<r.length;t++){let n=r.charCodeAt(t);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(t<r.length-1&&(r.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=n,o=r.charCodeAt(++t);n=65536|(s&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function aE(r){let e;try{e=decodeURIComponent(r)}catch{throw Ni(Ot.DATA_URL,"Malformed data URL.")}return Ep(e)}function wp(r,e){switch(r){case Ot.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ni(r,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ot.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ni(r,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=sE(e)}catch(i){throw i.message.includes("polyfill")?i:Ni(r,"Invalid character found")}const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}class Ip{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ni(Ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;n!=null&&(this.base64=lE(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function uE(r){const e=new Ip(r);return e.base64?wp(Ot.BASE64,e.rest):aE(e.rest)}function cE(r){return new Ip(r).contentType}function lE(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){let n=0,i="";Vh(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Vh(this.data_)){const n=this.data_,i=iE(n,e,t);return i===null?null:new dn(i)}else{const n=new Uint8Array(this.data_.buffer,e,t-e);return new dn(n,!0)}}static getBlob(...e){if(pc()){const t=e.map(n=>n instanceof dn?n.data_:n);return new dn(rE.apply(null,t))}else{const t=e.map(o=>Uo(o)?oE(Ot.RAW,o).data:o.data_);let n=0;t.forEach(o=>{n+=o.byteLength});const i=new Uint8Array(n);let s=0;return t.forEach(o=>{for(let u=0;u<o.length;u++)i[s++]=o[u]}),new dn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r){let e;try{e=JSON.parse(r)}catch{return null}return QT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function dE(r,e){const t=e.split("/").filter(n=>n.length>0).join("/");return r.length===0?t:r+"/"+t}function Rp(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(r,e){return e}class Ke{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||fE}}let Ms=null;function pE(r){return!Uo(r)||r.length<2?r:Rp(r)}function bp(){if(Ms)return Ms;const r=[];r.push(new Ke("bucket")),r.push(new Ke("generation")),r.push(new Ke("metageneration")),r.push(new Ke("name","fullPath",!0));function e(s,o){return pE(o)}const t=new Ke("name");t.xform=e,r.push(t);function n(s,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=n,r.push(i),r.push(new Ke("timeCreated")),r.push(new Ke("updated")),r.push(new Ke("md5Hash",null,!0)),r.push(new Ke("cacheControl",null,!0)),r.push(new Ke("contentDisposition",null,!0)),r.push(new Ke("contentEncoding",null,!0)),r.push(new Ke("contentLanguage",null,!0)),r.push(new Ke("contentType",null,!0)),r.push(new Ke("metadata","customMetadata",!0)),Ms=r,Ms}function _E(r,e){function t(){const n=r.bucket,i=r.fullPath,s=new dt(n,i);return e._makeStorageReference(s)}Object.defineProperty(r,"ref",{get:t})}function mE(r,e,t){const n={};n.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];n[o.local]=o.xform(n,e[o.server])}return _E(n,r),n}function Sp(r,e,t){const n=Ap(e);return n===null?null:mE(r,n,t)}function gE(r,e,t,n){const i=Ap(e);if(i===null||!Uo(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const d=r.bucket,p=r.fullPath,_="/b/"+o(d)+"/o/"+o(p),v=ei(_,t,n),I=vp({alt:"media",token:l});return v+I})[0]}function Pp(r,e){const t={},n=e.length;for(let i=0;i<n;i++){const s=e[i];s.writable&&(t[s.server]=r[s.local])}return JSON.stringify(t)}class gr{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(r){if(!r)throw fc()}function _c(r,e){function t(n,i){const s=Sp(r,i,e);return Jt(s!==null),s}return t}function yE(r,e){function t(n,i){const s=Sp(r,i,e);return Jt(s!==null),gE(s,i,r.host,r._protocol)}return t}function is(r){function e(t,n){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=xT():i=VT():t.getStatus()===402?i=NT(r.bucket):t.getStatus()===403?i=MT(r.path):i=n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}return e}function mc(r){const e=is(r);function t(n,i){let s=e(n,i);return n.getStatus()===404&&(s=OT(r.path)),s.serverResponse=i.serverResponse,s}return t}function vE(r,e,t){const n=e.fullServerUrl(),i=ei(n,r.host,r._protocol),s="GET",o=r.maxOperationRetryTime,u=new gr(i,s,_c(r,t),o);return u.errorHandler=mc(e),u}function TE(r,e,t){const n=e.fullServerUrl(),i=ei(n,r.host,r._protocol),s="GET",o=r.maxOperationRetryTime,u=new gr(i,s,yE(r,t),o);return u.errorHandler=mc(e),u}function EE(r,e){const t=e.fullServerUrl(),n=ei(t,r.host,r._protocol),i="DELETE",s=r.maxOperationRetryTime;function o(c,l){}const u=new gr(n,i,o,s);return u.successCodes=[200,204],u.errorHandler=mc(e),u}function wE(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function Cp(r,e,t){const n=Object.assign({},t);return n.fullPath=r.path,n.size=e.size(),n.contentType||(n.contentType=wE(null,e)),n}function IE(r,e,t,n,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let k="";for(let N=0;N<2;N++)k=k+Math.random().toString().slice(2);return k}const c=u();o["Content-Type"]="multipart/related; boundary="+c;const l=Cp(e,n,i),d=Pp(l,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,_=`\r
--`+c+"--",v=dn.getBlob(p,n,_);if(v===null)throw gp();const I={name:l.fullPath},T=ei(s,r.host,r._protocol),R="POST",D=r.maxUploadRetryTime,C=new gr(T,R,_c(r,t),D);return C.urlParams=I,C.headers=o,C.body=v.uploadData(),C.errorHandler=is(e),C}class fo{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function gc(r,e){let t=null;try{t=r.getResponseHeader("X-Goog-Upload-Status")}catch{Jt(!1)}return Jt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function AE(r,e,t,n,i){const s=e.bucketOnlyServerUrl(),o=Cp(e,n,i),u={name:o.fullPath},c=ei(s,r.host,r._protocol),l="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=Pp(o,t),_=r.maxUploadRetryTime;function v(T){gc(T);let R;try{R=T.getResponseHeader("X-Goog-Upload-URL")}catch{Jt(!1)}return Jt(Uo(R)),R}const I=new gr(c,l,v,_);return I.urlParams=u,I.headers=d,I.body=p,I.errorHandler=is(e),I}function RE(r,e,t,n){const i={"X-Goog-Upload-Command":"query"};function s(l){const d=gc(l,["active","final"]);let p=null;try{p=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Jt(!1)}p||Jt(!1);const _=Number(p);return Jt(!isNaN(_)),new fo(_,n.size(),d==="final")}const o="POST",u=r.maxUploadRetryTime,c=new gr(t,o,s,u);return c.headers=i,c.errorHandler=is(e),c}const Mh=256*1024;function bE(r,e,t,n,i,s,o,u){const c=new fo(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw BT();const l=c.total-c.current;let d=l;i>0&&(d=Math.min(d,i));const p=c.current,_=p+d;let v="";d===0?v="finalize":l===d?v="upload, finalize":v="upload";const I={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${c.current}`},T=n.slice(p,_);if(T===null)throw gp();function R(N,V){const L=gc(N,["active","final"]),E=c.current+d,g=n.size();let y;return L==="final"?y=_c(e,s)(N,V):y=null,new fo(E,g,L==="final",y)}const D="POST",C=e.maxUploadRetryTime,k=new gr(t,D,R,C);return k.headers=I,k.body=T.uploadData(),k.progressCallback=u||null,k.errorHandler=is(r),k}const Qe={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ga(r){switch(r){case"running":case"pausing":case"canceling":return Qe.RUNNING;case"paused":return Qe.PAUSED;case"success":return Qe.SUCCESS;case"canceled":return Qe.CANCELED;case"error":return Qe.ERROR;default:return Qe.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,t,n){if(KT(e)||t!=null||n!=null)this.next=e,this.error=t??void 0,this.complete=n??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(r){return(...e)=>{Promise.resolve().then(()=>r(...e))}}class PE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=or.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=or.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=or.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,i,s){if(this.sent_)throw Ti("cannot .send() more than once");if(Fn(e)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ti("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ti("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ti("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ti("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CE extends PE{initXhr(){this.xhr_.responseType="text"}}function Jn(){return new CE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=bp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ue.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Tp(i.status,[]))if(s)i=_p();else{this.sleepTime=Math.max(this.sleepTime*2,DT),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ue.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=AE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,Jn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const i=RE(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Jn,t,n);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Mh*this._chunkMultiplier,t=new fo(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=bE(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const u=this._ref.storage._makeRequest(o,Jn,i,s,!1);this._request=u,u.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Mh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=vE(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,Jn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=IE(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,Jn,e,t);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=mp(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ga(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const s=new SE(t||void 0,n||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ga(this._state)){case Qe.SUCCESS:Sr(this._resolve.bind(null,this.snapshot))();break;case Qe.CANCELED:case Qe.ERROR:const t=this._reject;Sr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ga(this._state)){case Qe.RUNNING:case Qe.PAUSED:e.next&&Sr(e.next.bind(e,this.snapshot))();break;case Qe.SUCCESS:e.complete&&Sr(e.complete.bind(e))();break;case Qe.CANCELED:case Qe.ERROR:e.error&&Sr(e.error.bind(e,this._error))();break;default:e.error&&Sr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this._service=e,t instanceof dt?this._location=t:this._location=dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new lr(e,t)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rp(this._location.path)}get storage(){return this._service}get parent(){const e=hE(this._location.path);if(e===null)return null;const t=new dt(this._location.bucket,e);return new lr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw qT(e)}}function DE(r,e,t){return r._throwIfRoot("uploadBytesResumable"),new kE(r,new dn(e),t)}function OE(r){r._throwIfRoot("getDownloadURL");const e=TE(r.storage,r._location,bp());return r.storage.makeRequestWithTokens(e,Jn).then(t=>{if(t===null)throw zT();return t})}function NE(r){r._throwIfRoot("deleteObject");const e=EE(r.storage,r._location);return r.storage.makeRequestWithTokens(e,Jn)}function VE(r,e){const t=dE(r._location.path,e),n=new dt(r._location.bucket,t);return new lr(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(r){return/^[A-Za-z]+:\/\//.test(r)}function ME(r,e){return new lr(r,e)}function kp(r,e){if(r instanceof yc){const t=r;if(t._bucket==null)throw FT();const n=new lr(t,t._bucket);return e!=null?kp(n,e):n}else return e!==void 0?VE(r,e):r}function LE(r,e){if(e&&xE(e)){if(r instanceof yc)return ME(r,e);throw Eu("To use ref(service, url), the first argument must be a Storage instance.")}else return kp(r,e)}function Lh(r,e){const t=e==null?void 0:e[pp];return t==null?null:dt.makeFromBucketSpec(t,r)}function UE(r,e,t,n={}){r.host=`${e}:${t}`;const i=Fn(e);i&&(uc(`https://${r.host}/b`),cc("Storage",!0)),r._isUsingEmulator=!0,r._protocol=i?"https":"http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:ap(s,r.app.options.projectId))}class yc{constructor(e,t,n,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=fp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CT,this._maxUploadRetryTime=kT,this._requests=new Set,i!=null?this._bucket=dt.makeFromBucketSpec(i,this._host):this._bucket=Lh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=Lh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lr(this,e)}_makeRequest(e,t,n,i,s=!0){if(this._deleted)return new $T(yp());{const o=tE(e,this._appId,n,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Uh="@firebase/storage",Fh="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="storage";function FE(r,e,t){return r=ae(r),DE(r,e,t)}function BE(r){return r=ae(r),OE(r)}function zE(r){return r=ae(r),NE(r)}function Op(r,e){return r=ae(r),LE(r,e)}function jE(r=dc(),e){r=ae(r);const n=Lo(r,Dp).getImmediate({identifier:e}),i=ip("storage");return i&&qE(n,...i),n}function qE(r,e,t,n={}){UE(r,e,t,n)}function $E(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),i=r.getProvider("app-check-internal");return new yc(t,n,i,e,mr)}function HE(){cr(new kn(Dp,$E,"PUBLIC").setMultipleInstances(!0)),Nt(Uh,Fh,""),Nt(Uh,Fh,"esm2017")}HE();var Bh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var An,Np;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(A,b,S){for(var w=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)w[Y-2]=arguments[Y];return g.prototype[b].apply(A,w)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,y){y||(y=0);var A=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)A[b]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(b=0;16>b;++b)A[b]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],b=E.g[2];var S=E.g[3],w=g+(S^y&(b^S))+A[0]+3614090360&4294967295;g=y+(w<<7&4294967295|w>>>25),w=S+(b^g&(y^b))+A[1]+3905402710&4294967295,S=g+(w<<12&4294967295|w>>>20),w=b+(y^S&(g^y))+A[2]+606105819&4294967295,b=S+(w<<17&4294967295|w>>>15),w=y+(g^b&(S^g))+A[3]+3250441966&4294967295,y=b+(w<<22&4294967295|w>>>10),w=g+(S^y&(b^S))+A[4]+4118548399&4294967295,g=y+(w<<7&4294967295|w>>>25),w=S+(b^g&(y^b))+A[5]+1200080426&4294967295,S=g+(w<<12&4294967295|w>>>20),w=b+(y^S&(g^y))+A[6]+2821735955&4294967295,b=S+(w<<17&4294967295|w>>>15),w=y+(g^b&(S^g))+A[7]+4249261313&4294967295,y=b+(w<<22&4294967295|w>>>10),w=g+(S^y&(b^S))+A[8]+1770035416&4294967295,g=y+(w<<7&4294967295|w>>>25),w=S+(b^g&(y^b))+A[9]+2336552879&4294967295,S=g+(w<<12&4294967295|w>>>20),w=b+(y^S&(g^y))+A[10]+4294925233&4294967295,b=S+(w<<17&4294967295|w>>>15),w=y+(g^b&(S^g))+A[11]+2304563134&4294967295,y=b+(w<<22&4294967295|w>>>10),w=g+(S^y&(b^S))+A[12]+1804603682&4294967295,g=y+(w<<7&4294967295|w>>>25),w=S+(b^g&(y^b))+A[13]+4254626195&4294967295,S=g+(w<<12&4294967295|w>>>20),w=b+(y^S&(g^y))+A[14]+2792965006&4294967295,b=S+(w<<17&4294967295|w>>>15),w=y+(g^b&(S^g))+A[15]+1236535329&4294967295,y=b+(w<<22&4294967295|w>>>10),w=g+(b^S&(y^b))+A[1]+4129170786&4294967295,g=y+(w<<5&4294967295|w>>>27),w=S+(y^b&(g^y))+A[6]+3225465664&4294967295,S=g+(w<<9&4294967295|w>>>23),w=b+(g^y&(S^g))+A[11]+643717713&4294967295,b=S+(w<<14&4294967295|w>>>18),w=y+(S^g&(b^S))+A[0]+3921069994&4294967295,y=b+(w<<20&4294967295|w>>>12),w=g+(b^S&(y^b))+A[5]+3593408605&4294967295,g=y+(w<<5&4294967295|w>>>27),w=S+(y^b&(g^y))+A[10]+38016083&4294967295,S=g+(w<<9&4294967295|w>>>23),w=b+(g^y&(S^g))+A[15]+3634488961&4294967295,b=S+(w<<14&4294967295|w>>>18),w=y+(S^g&(b^S))+A[4]+3889429448&4294967295,y=b+(w<<20&4294967295|w>>>12),w=g+(b^S&(y^b))+A[9]+568446438&4294967295,g=y+(w<<5&4294967295|w>>>27),w=S+(y^b&(g^y))+A[14]+3275163606&4294967295,S=g+(w<<9&4294967295|w>>>23),w=b+(g^y&(S^g))+A[3]+4107603335&4294967295,b=S+(w<<14&4294967295|w>>>18),w=y+(S^g&(b^S))+A[8]+1163531501&4294967295,y=b+(w<<20&4294967295|w>>>12),w=g+(b^S&(y^b))+A[13]+2850285829&4294967295,g=y+(w<<5&4294967295|w>>>27),w=S+(y^b&(g^y))+A[2]+4243563512&4294967295,S=g+(w<<9&4294967295|w>>>23),w=b+(g^y&(S^g))+A[7]+1735328473&4294967295,b=S+(w<<14&4294967295|w>>>18),w=y+(S^g&(b^S))+A[12]+2368359562&4294967295,y=b+(w<<20&4294967295|w>>>12),w=g+(y^b^S)+A[5]+4294588738&4294967295,g=y+(w<<4&4294967295|w>>>28),w=S+(g^y^b)+A[8]+2272392833&4294967295,S=g+(w<<11&4294967295|w>>>21),w=b+(S^g^y)+A[11]+1839030562&4294967295,b=S+(w<<16&4294967295|w>>>16),w=y+(b^S^g)+A[14]+4259657740&4294967295,y=b+(w<<23&4294967295|w>>>9),w=g+(y^b^S)+A[1]+2763975236&4294967295,g=y+(w<<4&4294967295|w>>>28),w=S+(g^y^b)+A[4]+1272893353&4294967295,S=g+(w<<11&4294967295|w>>>21),w=b+(S^g^y)+A[7]+4139469664&4294967295,b=S+(w<<16&4294967295|w>>>16),w=y+(b^S^g)+A[10]+3200236656&4294967295,y=b+(w<<23&4294967295|w>>>9),w=g+(y^b^S)+A[13]+681279174&4294967295,g=y+(w<<4&4294967295|w>>>28),w=S+(g^y^b)+A[0]+3936430074&4294967295,S=g+(w<<11&4294967295|w>>>21),w=b+(S^g^y)+A[3]+3572445317&4294967295,b=S+(w<<16&4294967295|w>>>16),w=y+(b^S^g)+A[6]+76029189&4294967295,y=b+(w<<23&4294967295|w>>>9),w=g+(y^b^S)+A[9]+3654602809&4294967295,g=y+(w<<4&4294967295|w>>>28),w=S+(g^y^b)+A[12]+3873151461&4294967295,S=g+(w<<11&4294967295|w>>>21),w=b+(S^g^y)+A[15]+530742520&4294967295,b=S+(w<<16&4294967295|w>>>16),w=y+(b^S^g)+A[2]+3299628645&4294967295,y=b+(w<<23&4294967295|w>>>9),w=g+(b^(y|~S))+A[0]+4096336452&4294967295,g=y+(w<<6&4294967295|w>>>26),w=S+(y^(g|~b))+A[7]+1126891415&4294967295,S=g+(w<<10&4294967295|w>>>22),w=b+(g^(S|~y))+A[14]+2878612391&4294967295,b=S+(w<<15&4294967295|w>>>17),w=y+(S^(b|~g))+A[5]+4237533241&4294967295,y=b+(w<<21&4294967295|w>>>11),w=g+(b^(y|~S))+A[12]+1700485571&4294967295,g=y+(w<<6&4294967295|w>>>26),w=S+(y^(g|~b))+A[3]+2399980690&4294967295,S=g+(w<<10&4294967295|w>>>22),w=b+(g^(S|~y))+A[10]+4293915773&4294967295,b=S+(w<<15&4294967295|w>>>17),w=y+(S^(b|~g))+A[1]+2240044497&4294967295,y=b+(w<<21&4294967295|w>>>11),w=g+(b^(y|~S))+A[8]+1873313359&4294967295,g=y+(w<<6&4294967295|w>>>26),w=S+(y^(g|~b))+A[15]+4264355552&4294967295,S=g+(w<<10&4294967295|w>>>22),w=b+(g^(S|~y))+A[6]+2734768916&4294967295,b=S+(w<<15&4294967295|w>>>17),w=y+(S^(b|~g))+A[13]+1309151649&4294967295,y=b+(w<<21&4294967295|w>>>11),w=g+(b^(y|~S))+A[4]+4149444226&4294967295,g=y+(w<<6&4294967295|w>>>26),w=S+(y^(g|~b))+A[11]+3174756917&4294967295,S=g+(w<<10&4294967295|w>>>22),w=b+(g^(S|~y))+A[2]+718787259&4294967295,b=S+(w<<15&4294967295|w>>>17),w=y+(S^(b|~g))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,A=this.B,b=this.h,S=0;S<g;){if(b==0)for(;S<=y;)i(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<g;)if(A[b++]=E.charCodeAt(S++),b==this.blockSize){i(this,A),b=0;break}}else for(;S<g;)if(A[b++]=E[S++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var A=0;32>A;A+=8)E[y++]=this.g[g]>>>A&255;return E};function s(E,g){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function o(E,g){this.h=g;for(var y=[],A=!0,b=E.length-1;0<=b;b--){var S=E[b]|0;A&&S==g||(y[b]=S,A=!1)}this.g=y}var u={};function c(E){return-128<=E&&128>E?s(E,function(g){return new o([g|0],0>g?-1:0)}):new o([E|0],0>E?-1:0)}function l(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return R(l(-E));for(var g=[],y=1,A=0;E>=y;A++)g[A]=E/y|0,y*=4294967296;return new o(g,0)}function d(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return R(d(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=l(Math.pow(g,8)),A=p,b=0;b<E.length;b+=8){var S=Math.min(8,E.length-b),w=parseInt(E.substring(b,b+S),g);8>S?(S=l(Math.pow(g,S)),A=A.j(S).add(l(w))):(A=A.j(y),A=A.add(l(w)))}return A}var p=c(0),_=c(1),v=c(16777216);r=o.prototype,r.m=function(){if(T(this))return-R(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var A=this.i(y);E+=(0<=A?A:4294967296+A)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(I(this))return"0";if(T(this))return"-"+R(this).toString(E);for(var g=l(Math.pow(E,6)),y=this,A="";;){var b=N(y,g).g;y=D(y,b.j(g));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=b,I(y))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function I(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function T(E){return E.h==-1}r.l=function(E){return E=D(this,E),T(E)?-1:I(E)?0:1};function R(E){for(var g=E.g.length,y=[],A=0;A<g;A++)y[A]=~E.g[A];return new o(y,~E.h).add(_)}r.abs=function(){return T(this)?R(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],A=0,b=0;b<=g;b++){var S=A+(this.i(b)&65535)+(E.i(b)&65535),w=(S>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);A=w>>>16,S&=65535,w&=65535,y[b]=w<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function D(E,g){return E.add(R(g))}r.j=function(E){if(I(this)||I(E))return p;if(T(this))return T(E)?R(this).j(R(E)):R(R(this).j(E));if(T(E))return R(this.j(R(E)));if(0>this.l(v)&&0>E.l(v))return l(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],A=0;A<2*g;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<E.g.length;b++){var S=this.i(A)>>>16,w=this.i(A)&65535,Y=E.i(b)>>>16,ce=E.i(b)&65535;y[2*A+2*b]+=w*ce,C(y,2*A+2*b),y[2*A+2*b+1]+=S*ce,C(y,2*A+2*b+1),y[2*A+2*b+1]+=w*Y,C(y,2*A+2*b+1),y[2*A+2*b+2]+=S*Y,C(y,2*A+2*b+2)}for(A=0;A<g;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=g;A<2*g;A++)y[A]=0;return new o(y,0)};function C(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function k(E,g){this.g=E,this.h=g}function N(E,g){if(I(g))throw Error("division by zero");if(I(E))return new k(p,p);if(T(E))return g=N(R(E),g),new k(R(g.g),R(g.h));if(T(g))return g=N(E,R(g)),new k(R(g.g),g.h);if(30<E.g.length){if(T(E)||T(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,A=g;0>=A.l(E);)y=V(y),A=V(A);var b=L(y,1),S=L(A,1);for(A=L(A,2),y=L(y,2);!I(A);){var w=S.add(A);0>=w.l(E)&&(b=b.add(y),S=w),A=L(A,1),y=L(y,1)}return g=D(E,b.j(g)),new k(b,g)}for(b=p;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=l(y),w=S.j(g);T(w)||0<w.l(E);)y-=A,S=l(y),w=S.j(g);I(S)&&(S=_),b=b.add(S),E=D(E,w)}return new k(b,E)}r.A=function(E){return N(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],A=0;A<g;A++)y[A]=this.i(A)&E.i(A);return new o(y,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],A=0;A<g;A++)y[A]=this.i(A)|E.i(A);return new o(y,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],A=0;A<g;A++)y[A]=this.i(A)^E.i(A);return new o(y,this.h^E.h)};function V(E){for(var g=E.g.length+1,y=[],A=0;A<g;A++)y[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(y,E.h)}function L(E,g){var y=g>>5;g%=32;for(var A=E.g.length-y,b=[],S=0;S<A;S++)b[S]=0<g?E.i(S+y)>>>g|E.i(S+y+1)<<32-g:E.i(S+y);return new o(b,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Np=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,An=o}).apply(typeof Bh<"u"?Bh:typeof self<"u"?self:typeof window<"u"?window:{});var Ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vp,Ri,xp,Gs,wu,Mp,Lp,Up;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ls=="object"&&Ls];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function i(a,h){if(h)e:{var f=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function _(a,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function v(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function I(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,O){for(var U=Array(arguments.length-2),te=2;te<arguments.length;te++)U[te-2]=arguments[te];return h.prototype[P].apply(m,U)}}function T(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,O=m.length||0;a.length=P+O;for(let U=0;U<O;U++)a[P+U]=m[U]}else a.push(m)}}class D{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var V=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function L(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let O=0;O<y.length;O++)f=y[O],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){u.setTimeout(()=>{throw a},0)}function w(){var a=St;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Y{constructor(){this.h=this.g=null}add(h,f){const m=ce.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var ce=new D(()=>new ye,a=>a.reset());class ye{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,Pe=!1,St=new Y,an=()=>{const a=u.Promise.resolve(void 0);ee=()=>{a.then(qn)}};var qn=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){S(f)}var h=ce;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Pe=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var wt=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};u.addEventListener("test",f,h),u.removeEventListener("test",f,h)}catch{}return a})();function st(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{N(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Km[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&st.aa.h.call(this)}}I(st,Re);var Km={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _s="closure_listenable_"+(1e6*Math.random()|0),Qm=0;function Xm(a,h,f,m,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=P,this.key=++Qm,this.da=this.fa=!1}function ms(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function gs(a){this.src=a,this.g={},this.h=0}gs.prototype.add=function(a,h,f,m,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var U=la(a,h,m,P);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new Xm(h,this.src,O,!!m,P),h.fa=f,a.push(h)),h};function ca(a,h){var f=h.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,h,void 0),O;(O=0<=P)&&Array.prototype.splice.call(m,P,1),O&&(ms(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function la(a,h,f,m){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==m)return P}return-1}var ha="closure_lm_"+(1e6*Math.random()|0),da={};function ol(a,h,f,m,P){if(Array.isArray(h)){for(var O=0;O<h.length;O++)ol(a,h[O],f,m,P);return null}return f=cl(f),a&&a[_s]?a.K(h,f,l(m)?!!m.capture:!1,P):Ym(a,h,f,!1,m,P)}function Ym(a,h,f,m,P,O){if(!h)throw Error("Invalid event type");var U=l(P)?!!P.capture:!!P,te=pa(a);if(te||(a[ha]=te=new gs(a)),f=te.add(h,f,m,U,O),f.proxy)return f;if(m=Jm(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)wt||(P=U),P===void 0&&(P=!1),a.addEventListener(h.toString(),m,P);else if(a.attachEvent)a.attachEvent(ul(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Jm(){function a(f){return h.call(a.src,a.listener,f)}const h=Zm;return a}function al(a,h,f,m,P){if(Array.isArray(h))for(var O=0;O<h.length;O++)al(a,h[O],f,m,P);else m=l(m)?!!m.capture:!!m,f=cl(f),a&&a[_s]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=la(O,f,m,P),-1<f&&(ms(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=pa(a))&&(h=a.g[h.toString()],a=-1,h&&(a=la(h,f,m,P)),(f=-1<a?h[a]:null)&&fa(f))}function fa(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_s])ca(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(ul(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=pa(h))?(ca(f,a),f.h==0&&(f.src=null,h[ha]=null)):ms(a)}}}function ul(a){return a in da?da[a]:da[a]="on"+a}function Zm(a,h){if(a.da)a=!0;else{h=new st(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&fa(a),a=f.call(m,h)}return a}function pa(a){return a=a[ha],a instanceof gs?a:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(a){return typeof a=="function"?a:(a[_a]||(a[_a]=function(h){return a.handleEvent(h)}),a[_a])}function Le(){Me.call(this),this.i=new gs(this),this.M=this,this.F=null}I(Le,Me),Le.prototype[_s]=!0,Le.prototype.removeEventListener=function(a,h,f,m){al(this,a,h,f,m)};function We(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var P=h;h=new Re(m,a),A(h,P)}if(P=!0,f)for(var O=f.length-1;0<=O;O--){var U=h.g=f[O];P=ys(U,m,!0,h)&&P}if(U=h.g=a,P=ys(U,m,!0,h)&&P,P=ys(U,m,!1,h)&&P,f)for(O=0;O<f.length;O++)U=h.g=f[O],P=ys(U,m,!1,h)&&P}Le.prototype.N=function(){if(Le.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)ms(f[m]);delete a.g[h],a.h--}}this.F=null},Le.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},Le.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function ys(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,O=0;O<h.length;++O){var U=h[O];if(U&&!U.da&&U.capture==f){var te=U.listener,De=U.ha||U.src;U.fa&&ca(a.i,U),P=te.call(De,m)!==!1&&P}}return P&&!m.defaultPrevented}function ll(a,h,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(a,h||0)}function hl(a){a.g=ll(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class eg extends Me{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(a){Me.call(this),this.h=a,this.g={}}I(oi,Me);var dl=[];function fl(a){L(a.g,function(h,f){this.g.hasOwnProperty(f)&&fa(h)},a),a.g={}}oi.prototype.N=function(){oi.aa.N.call(this),fl(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ma=u.JSON.stringify,tg=u.JSON.parse,ng=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function ga(){}ga.prototype.h=null;function pl(a){return a.h||(a.h=a.i())}function _l(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){Re.call(this,"d")}I(ya,Re);function va(){Re.call(this,"c")}I(va,Re);var $n={},ml=null;function vs(){return ml=ml||new Le}$n.La="serverreachability";function gl(a){Re.call(this,$n.La,a)}I(gl,Re);function ui(a){const h=vs();We(h,new gl(h))}$n.STAT_EVENT="statevent";function yl(a,h){Re.call(this,$n.STAT_EVENT,a),this.stat=h}I(yl,Re);function Ge(a){const h=vs();We(h,new yl(h,a))}$n.Ma="timingevent";function vl(a,h){Re.call(this,$n.Ma,a),this.size=h}I(vl,Re);function ci(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},h)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function rg(a,h,f,m,P,O){a.info(function(){if(a.g)if(O)for(var U="",te=O.split("&"),De=0;De<te.length;De++){var J=te[De].split("=");if(1<J.length){var Ue=J[0];J=J[1];var Fe=Ue.split("_");U=2<=Fe.length&&Fe[1]=="type"?U+(Ue+"="+J+"&"):U+(Ue+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+h+`
`+f+`
`+U})}function ig(a,h,f,m,P,O,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+h+`
`+f+`
`+O+" "+U})}function wr(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+og(a,f)+(m?" "+m:"")})}function sg(a,h){a.info(function(){return"TIMEOUT: "+h})}li.prototype.info=function(){};function og(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return ma(f)}catch{return h}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ta;function Es(){}I(Es,ga),Es.prototype.g=function(){return new XMLHttpRequest},Es.prototype.i=function(){return{}},Ta=new Es;function un(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new El}function El(){this.i=null,this.g="",this.h=!1}var wl={},Ea={};function wa(a,h,f){a.L=1,a.v=Rs($t(h)),a.m=f,a.P=!0,Il(a,null)}function Il(a,h){a.F=Date.now(),ws(a),a.A=$t(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Ll(f.i,"t",m),a.C=0,f=a.j.J,a.h=new El,a.g=th(a.j,f?h:null,!a.m),0<a.O&&(a.M=new eg(_(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(dl[0]=P.toString()),P=dl);for(var O=0;O<P.length;O++){var U=ol(f,P[O],m||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ui(),rg(a.i,a.u,a.A,a.l,a.R,a.m)}un.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ht(a)==3?h.j():this.Y(a)},un.prototype.Y=function(a){try{if(a==this.g)e:{const Fe=Ht(this.g);var h=this.g.Ba();const Rr=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||$l(this.g)))){this.J||Fe!=4||h==7||(h==8||0>=Rr?ui(3):ui(2)),Ia(this);var f=this.g.Z();this.X=f;t:if(Al(this)){var m=$l(this.g);a="";var P=m.length,O=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Hn(this),hi(this);var U="";break t}this.h.i=new u.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(O&&h==P-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,ig(this.i,this.u,this.A,this.l,this.R,Fe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var te,De=this.g;if((te=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(te)){var J=te;break t}}J=null}if(f=J)wr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,f);else{this.o=!1,this.s=3,Ge(12),Hn(this),hi(this);break e}}if(this.P){f=!0;let It;for(;!this.J&&this.C<U.length;)if(It=ag(this,U),It==Ea){Fe==4&&(this.s=4,Ge(14),f=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(It==wl){this.s=4,Ge(15),wr(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else wr(this.i,this.l,It,null),Aa(this,It);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||U.length!=0||this.h.h||(this.s=1,Ge(16),f=!1),this.o=this.o&&f,!f)wr(this.i,this.l,U,"[Invalid Chunked Response]"),Hn(this),hi(this);else if(0<U.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ka(Ue),Ue.M=!0,Ge(11))}}else wr(this.i,this.l,U,null),Aa(this,U);Fe==4&&Hn(this),this.o&&!this.J&&(Fe==4?Yl(this.j,this):(this.o=!1,ws(this)))}else Ag(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ge(12)):(this.s=0,Ge(13)),Hn(this),hi(this)}}}catch{}finally{}};function Al(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ag(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Ea:(f=Number(h.substring(f,m)),isNaN(f)?wl:(m+=1,m+f>h.length?Ea:(h=h.slice(m,m+f),a.C=m+f,h)))}un.prototype.cancel=function(){this.J=!0,Hn(this)};function ws(a){a.S=Date.now()+a.I,Rl(a,a.I)}function Rl(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ci(_(a.ba,a),h)}function Ia(a){a.B&&(u.clearTimeout(a.B),a.B=null)}un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(sg(this.i,this.A),this.L!=2&&(ui(),Ge(17)),Hn(this),this.s=2,hi(this)):Rl(this,this.S-a)};function hi(a){a.j.G==0||a.J||Yl(a.j,a)}function Hn(a){Ia(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,fl(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Aa(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ra(f.h,a))){if(!a.K&&Ra(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ds(f),Cs(f);else break e;Ca(f),Ge(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=ci(_(f.Za,f),6e3));if(1>=Pl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Gn(f,11)}else if((a.K||f.g==a)&&Ds(f),!C(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let J=P[h];if(f.T=J[0],J=J[1],f.G==2)if(J[0]=="c"){f.K=J[1],f.ia=J[2];const Ue=J[3];Ue!=null&&(f.la=Ue,f.j.info("VER="+f.la));const Fe=J[4];Fe!=null&&(f.Aa=Fe,f.j.info("SVER="+f.Aa));const Rr=J[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(m=1.5*Rr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const It=a.g;if(It){const Ns=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var O=m.h;O.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ba(O,O.h),O.h=null))}if(m.D){const Da=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(m.ya=Da,ie(m.I,m.D,Da))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var U=a;if(m.qa=eh(m,m.J?m.ia:null,m.W),U.K){Cl(m.h,U);var te=U,De=m.L;De&&(te.I=De),te.B&&(Ia(te),ws(te)),m.g=U}else Ql(m);0<f.i.length&&ks(f)}else J[0]!="stop"&&J[0]!="close"||Gn(f,7);else f.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Gn(f,7):Pa(f):J[0]!="noop"&&f.l&&f.l.ta(J),f.v=0)}}ui(4)}catch{}}var ug=class{constructor(a,h){this.g=a,this.map=h}};function bl(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pl(a){return a.h?1:a.g?a.g.size:0}function Ra(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ba(a,h){a.g?a.g.add(h):a.h=h}function Cl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}bl.prototype.cancel=function(){if(this.i=kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return T(a.i)}function cg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function lg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Dl(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=lg(a),m=cg(a),P=m.length,O=0;O<P;O++)h.call(void 0,m[O],f&&f[O],a)}var Ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var O=a[f].substring(0,m);P=a[f].substring(m+1)}else O=a[f];h(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Wn){this.h=a.h,Is(this,a.j),this.o=a.o,this.g=a.g,As(this,a.s),this.l=a.l;var h=a.i,f=new pi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Nl(this,f),this.m=a.m}else a&&(h=String(a).match(Ol))?(this.h=!1,Is(this,h[1]||"",!0),this.o=di(h[2]||""),this.g=di(h[3]||"",!0),As(this,h[4]),this.l=di(h[5]||"",!0),Nl(this,h[6]||"",!0),this.m=di(h[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Wn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(fi(h,Vl,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,Vl,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fi(f,f.charAt(0)=="/"?pg:fg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fi(f,mg)),a.join("")};function $t(a){return new Wn(a)}function Is(a,h,f){a.j=f?di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Nl(a,h,f){h instanceof pi?(a.i=h,gg(a.i,a.h)):(f||(h=fi(h,_g)),a.i=new pi(h,a.h))}function ie(a,h,f){a.i.set(h,f)}function Rs(a){return ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,dg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vl=/[#\/\?@]/g,fg=/[#\?:]/g,pg=/[#\?]/g,_g=/[#\?@]/g,mg=/#/g;function pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function cn(a){a.g||(a.g=new Map,a.h=0,a.i&&hg(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=pi.prototype,r.add=function(a,h){cn(this),this.i=null,a=Ir(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function xl(a,h){cn(a),h=Ir(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ml(a,h){return cn(a),h=Ir(a,h),a.g.has(h)}r.forEach=function(a,h){cn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(h,P,m,this)},this)},this)},r.na=function(){cn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const P=a[m];for(let O=0;O<P.length;O++)f.push(h[m])}return f},r.V=function(a){cn(this);let h=[];if(typeof a=="string")Ml(this,a)&&(h=h.concat(this.g.get(Ir(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return cn(this),this.i=null,a=Ir(this,a),Ml(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ll(a,h,f){xl(a,h),0<f.length&&(a.i=null,a.g.set(Ir(a,h),T(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const O=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var P=O;U[m]!==""&&(P+="="+encodeURIComponent(String(U[m]))),a.push(P)}}return this.i=a.join("&")};function Ir(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function gg(a,h){h&&!a.j&&(cn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(xl(this,m),Ll(this,P,f))},a)),a.j=h}function yg(a,h){const f=new li;if(u.Image){const m=new Image;m.onload=v(ln,f,"TestLoadImage: loaded",!0,h,m),m.onerror=v(ln,f,"TestLoadImage: error",!1,h,m),m.onabort=v(ln,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=v(ln,f,"TestLoadImage: timeout",!1,h,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function vg(a,h){const f=new li,m=new AbortController,P=setTimeout(()=>{m.abort(),ln(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?ln(f,"TestPingServer: ok",!0,h):ln(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),ln(f,"TestPingServer: error",!1,h)})}function ln(a,h,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function Tg(){this.g=new ng}function Eg(a,h,f){const m=f||"";try{Dl(a,function(P,O){let U=P;l(P)&&(U=ma(P)),h.push(m+O+"="+encodeURIComponent(U))})}catch(P){throw h.push(m+"type="+encodeURIComponent("_badmap")),P}}function bs(a){this.l=a.Ub||null,this.j=a.eb||!1}I(bs,ga),bs.prototype.g=function(){return new Ss(this.l,this.j)},bs.prototype.i=(function(a){return function(){return a}})({});function Ss(a,h){Le.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ss,Le),r=Ss.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,mi(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ul(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ul(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_i(this):mi(this),this.readyState==3&&Ul(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,_i(this))},r.Qa=function(a){this.g&&(this.response=a,_i(this))},r.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,mi(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function mi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fl(a){let h="";return L(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Sa(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Fl(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ie(a,h,f))}function me(a){Le.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(me,Le);var wg=/^https?$/i,Ig=["POST","PUT"];r=me.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ta.g(),this.v=this.o?pl(this.o):pl(Ta),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Bl(this,O);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())f.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),P=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ig,h,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of f)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ql(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Bl(this,O)}};function Bl(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zl(a),Ps(a)}function zl(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,We(this,"complete"),We(this,"abort"),Ps(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),me.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?jl(this):this.bb())},r.bb=function(){jl(this)};function jl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ht(a)!=4||a.Z()!=2)){if(a.u&&Ht(a)==4)ll(a.Ea,0,a);else if(We(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=U===0){var P=String(a.D).match(Ol)[1]||null;!P&&u.self&&u.self.location&&(P=u.self.location.protocol.slice(0,-1)),m=!wg.test(P?P.toLowerCase():"")}f=m}if(f)We(a,"complete"),We(a,"success");else{a.m=6;try{var O=2<Ht(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",zl(a)}}finally{Ps(a)}}}}function Ps(a,h){if(a.g){ql(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||We(a,"ready");try{f.onreadystatechange=m}catch{}}}function ql(a){a.I&&(u.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tg(h)}};function $l(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ag(a){const h={};a=(a.g&&2<=Ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(C(a[m]))continue;var f=b(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[P]||[];h[P]=O,O.push(f)}E(h,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Hl(a){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,a),this.cb=gi("retryDelaySeedMs",1e4,a),this.Wa=gi("forwardChannelMaxRetries",2,a),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bl(a&&a.concurrentRequestLimit),this.Da=new Tg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Hl.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,m){Ge(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=eh(this,null,this.W),ks(this)};function Pa(a){if(Wl(a),a.G==3){var h=a.U++,f=$t(a.I);if(ie(f,"SID",a.K),ie(f,"RID",h),ie(f,"TYPE","terminate"),yi(a,f),h=new un(a,a.j,h),h.L=2,h.v=Rs($t(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=h.v,f=!0),f||(h.g=th(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ws(h)}Zl(a)}function Cs(a){a.g&&(ka(a),a.g.cancel(),a.g=null)}function Wl(a){Cs(a),a.u&&(u.clearTimeout(a.u),a.u=null),Ds(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function ks(a){if(!Sl(a.h)&&!a.s){a.s=!0;var h=a.Ga;ee||an(),Pe||(ee(),Pe=!0),St.add(h,a),a.B=0}}function Rg(a,h){return Pl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ci(_(a.Ga,a,h),Jl(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new un(this,this.j,a);let O=this.o;if(this.S&&(O?(O=g(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Kl(this,P,h),f=$t(this.I),ie(f,"RID",a),ie(f,"CVER",22),this.D&&ie(f,"X-HTTP-Session-Id",this.D),yi(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Fl(O)))+"&"+h:this.m&&Sa(f,this.m,O)),ba(this.h,P),this.Ua&&ie(f,"TYPE","init"),this.P?(ie(f,"$req",h),ie(f,"SID","null"),P.T=!0,wa(P,f,null)):wa(P,f,h),this.G=2}}else this.G==3&&(a?Gl(this,a):this.i.length==0||Sl(this.h)||Gl(this))};function Gl(a,h){var f;h?f=h.l:f=a.U++;const m=$t(a.I);ie(m,"SID",a.K),ie(m,"RID",f),ie(m,"AID",a.T),yi(a,m),a.m&&a.o&&Sa(m,a.m,a.o),f=new un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Kl(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ba(a.h,f),wa(f,m,h)}function yi(a,h){a.H&&L(a.H,function(f,m){ie(h,m,f)}),a.l&&Dl({},function(f,m){ie(h,m,f)})}function Kl(a,h,f){f=Math.min(a.i.length,f);var m=a.l?_(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const U=["count="+f];O==-1?0<f?(O=P[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let te=!0;for(let De=0;De<f;De++){let J=P[De].g;const Ue=P[De].map;if(J-=O,0>J)O=Math.max(0,P[De].g-100),te=!1;else try{Eg(Ue,U,"req"+J+"_")}catch{m&&m(Ue)}}if(te){m=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function Ql(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ee||an(),Pe||(ee(),Pe=!0),St.add(h,a),a.v=0}}function Ca(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ci(_(a.Fa,a),Jl(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ci(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ge(10),Cs(this),Xl(this))};function ka(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function Xl(a){a.g=new un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=$t(a.qa);ie(h,"RID","rpc"),ie(h,"SID",a.K),ie(h,"AID",a.T),ie(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ie(h,"TO",a.ja),ie(h,"TYPE","xmlhttp"),yi(a,h),a.m&&a.o&&Sa(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Rs($t(h)),f.m=null,f.P=!0,Il(f,a)}r.Za=function(){this.C!=null&&(this.C=null,Cs(this),Ca(this),Ge(19))};function Ds(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function Yl(a,h){var f=null;if(a.g==h){Ds(a),ka(a),a.g=null;var m=2}else if(Ra(a.h,h))f=h.D,Cl(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;m=vs(),We(m,new vl(m,f)),ks(a)}else Ql(a);else if(P=h.s,P==3||P==0&&0<h.X||!(m==1&&Rg(a,h)||m==2&&Ca(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:Gn(a,5);break;case 4:Gn(a,10);break;case 3:Gn(a,6);break;default:Gn(a,2)}}}function Jl(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Gn(a,h){if(a.j.info("Error code "+h),h==2){var f=_(a.fb,a),m=a.Xa;const P=!m;m=new Wn(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Is(m,"https"),Rs(m),P?yg(m.toString(),f):vg(m.toString(),f)}else Ge(2);a.G=0,a.l&&a.l.sa(h),Zl(a),Wl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Zl(a){if(a.G=0,a.ka=[],a.l){const h=kl(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.ra()}}function eh(a,h,f){var m=f instanceof Wn?$t(f):new Wn(f);if(m.g!="")h&&(m.g=h+"."+m.g),As(m,m.s);else{var P=u.location;m=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var O=new Wn(null);m&&Is(O,m),h&&(O.g=h),P&&As(O,P),f&&(O.l=f),m=O}return f=a.D,h=a.ya,f&&h&&ie(m,f,h),ie(m,"VER",a.la),yi(a,m),m}function th(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new me(new bs({eb:f})):new me(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}r=nh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Os(){}Os.prototype.g=function(a,h){return new ot(a,h)};function ot(a,h){Le.call(this),this.g=new Hl(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!C(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ar(this)}I(ot,Le),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Pa(this.g)},ot.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ma(a),a=f);h.i.push(new ug(h.Ya++,a)),h.G==3&&ks(h)},ot.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,ot.aa.N.call(this)};function rh(a){ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}I(rh,ya);function ih(){va.call(this),this.status=1}I(ih,va);function Ar(a){this.g=a}I(Ar,nh),Ar.prototype.ua=function(){We(this.g,"a")},Ar.prototype.ta=function(a){We(this.g,new rh(a))},Ar.prototype.sa=function(a){We(this.g,new ih)},Ar.prototype.ra=function(){We(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,Up=function(){return new Os},Lp=function(){return vs()},Mp=$n,wu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Gs=Ts,Tl.COMPLETE="complete",xp=Tl,_l.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",Le.prototype.listen=Le.prototype.K,Ri=_l,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Vp=me}).apply(typeof Ls<"u"?Ls:typeof self<"u"?self:typeof window<"u"?window:{});const zh="@firebase/firestore",jh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new lc("@firebase/firestore");function Pr(){return hr.logLevel}function F(r,...e){if(hr.logLevel<=G.DEBUG){const t=e.map(vc);hr.debug(`Firestore (${ti}): ${r}`,...t)}}function rn(r,...e){if(hr.logLevel<=G.ERROR){const t=e.map(vc);hr.error(`Firestore (${ti}): ${r}`,...t)}}function Dn(r,...e){if(hr.logLevel<=G.WARN){const t=e.map(vc);hr.warn(`Firestore (${ti}): ${r}`,...t)}}function vc(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Fp(r,n,t)}function Fp(r,e,t){let n=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw rn(n),new Error(n)}function Z(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||Fp(e,i,n)}function H(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ze.UNAUTHENTICATED)))}shutdown(){}}class GE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class KE{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zt,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await i(this.currentUser)}))},u=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Z(typeof n.accessToken=="string",31837,{l:n}),new Bp(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class QE{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XE{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new QE(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YE{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const n=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=JE(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Iu(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return W(n,i);{const s=zp(),o=ZE(s.encode($h(r,t)),s.encode($h(e,t)));return o!==0?o:W(n,i)}}t+=n>65535?2:1}return W(r.length,e.length)}function $h(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function ZE(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return W(r[t],e[t]);return W(r.length,e.length)}function Gr(r,e,t){return r.length===e.length&&r.every(((n,i)=>t(n,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="__name__";class Ct{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&q(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Ct.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return W(e.length,t.length)}static compareSegments(e,t){const n=Ct.isNumericId(e),i=Ct.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Ct.extractNumericId(e).compare(Ct.extractNumericId(t)):Iu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return An.fromString(e.substring(4,e.length-2))}}class se extends Ct{construct(e,t,n){return new se(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((i=>i.length>0)))}return new se(t)}static emptyPath(){return new se([])}}const ew=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Ct{construct(e,t,n){return new Ne(e,t,n)}static isValidIdentifier(e){return ew.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hh}static keyField(){return new Ne([Hh])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else u==="`"?(o=!o,i++):u!=="."||o?(n+=u,i++):(s(),i++)}if(s(),o)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(se.fromString(e))}static fromName(e){return new j(se.fromString(e).popFirst(5))}static empty(){return new j(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new se(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(r,e,t){if(!t)throw new B(M.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tw(r,e,t,n){if(e===!0&&n===!0)throw new B(M.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Wh(r){if(!j.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Gh(r){if(j.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function qp(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ec(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q(12329,{type:typeof r})}function bt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ec(r);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function ss(r,e){if(!qp(r))throw new B(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new B(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=-62135596800,Qh=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Qh);return new oe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kh)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qh}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ss(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:Ie("string",oe._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new oe(0,0))}static max(){return new $(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=-1;function nw(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=$.fromTimestamp(n===1e9?new oe(t+1,0):new oe(t,n));return new On(i,j.empty(),e)}function rw(r){return new On(r.readTime,r.key,Ki)}class On{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new On($.min(),j.empty(),Ki)}static max(){return new On($.max(),j.empty(),Ki)}}function iw(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(r){if(r.code!==M.FAILED_PRECONDITION||r.message!==sw)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,n)=>{t(e)}))}static reject(e){return new x(((t,n)=>{n(e)}))}static waitFor(e){return new x(((t,n)=>{let i=0,s=0,o=!1;e.forEach((u=>{++i,u.next((()=>{++s,o&&s===i&&t()}),(c=>n(c)))})),o=!0,s===i&&t()}))}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next((i=>i?x.resolve(i):n()));return t}static forEach(e,t){const n=[];return e.forEach(((i,s)=>{n.push(t.call(this,i,s))})),this.waitFor(n)}static mapArray(e,t){return new x(((n,i)=>{const s=e.length,o=new Array(s);let u=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next((d=>{o[l]=d,++u,u===s&&n(o)}),(d=>i(d)))}}))}static doWhile(e,t){return new x(((n,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):n()};s()}))}}function aw(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ri(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Fo.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=-1;function Bo(r){return r==null}function po(r){return r===0&&1/r==-1/0}function uw(r){return typeof r=="number"&&Number.isInteger(r)&&!po(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="";function cw(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Xh(e)),e=lw(r.get(t),e);return Xh(e)}function lw(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case $p:t+="";break;default:t+=s}}return t}function Xh(r){return r+$p+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Bn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Hp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Us(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Us(this.root,e,this.comparator,!1)}getReverseIterator(){return new Us(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Us(this.root,e,this.comparator,!0)}}class Us{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Oe(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jh(this.data.getIterator())}getIteratorFrom(e){return new Jh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Jh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new ft([])}unionWith(e){let t=new Se(Ne.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Wp("Invalid base64 string: "+s):s}})(e);return new xe(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const hw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(r){if(Z(!!r,39018),typeof r=="string"){let e=0;const t=hw.exec(r);if(Z(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Te(r.seconds),nanos:Te(r.nanos)}}function Te(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Vn(r){return typeof r=="string"?xe.fromBase64String(r):xe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="server_timestamp",Kp="__type__",Qp="__previous_value__",Xp="__local_write_time__";function Ic(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kp])===null||t===void 0?void 0:t.stringValue)===Gp}function zo(r){const e=r.mapValue.fields[Qp];return Ic(e)?zo(e):e}function Qi(r){const e=Nn(r.mapValue.fields[Xp].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,n,i,s,o,u,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=d}}const _o="(default)";class Xi{constructor(e,t){this.projectId=e,this.database=t||_o}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===_o}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="__type__",fw="__max__",Fs={mapValue:{}},Jp="__vector__",mo="value";function xn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ic(r)?4:_w(r)?9007199254740991:pw(r)?10:11:q(28295,{value:r})}function Bt(r,e){if(r===e)return!0;const t=xn(r);if(t!==xn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Qi(r).isEqual(Qi(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nn(i.timestampValue),u=Nn(s.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,s){return Vn(i.bytesValue).isEqual(Vn(s.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)})(r,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),u=Te(s.doubleValue);return o===u?po(o)===po(u):isNaN(o)&&isNaN(u)}return!1})(r,e);case 9:return Gr(r.arrayValue.values||[],e.arrayValue.values||[],Bt);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Yh(o)!==Yh(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!Bt(o[c],u[c])))return!1;return!0})(r,e);default:return q(52216,{left:r})}}function Yi(r,e){return(r.values||[]).find((t=>Bt(t,e)))!==void 0}function Kr(r,e){if(r===e)return 0;const t=xn(r),n=xn(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return(function(s,o){const u=Te(s.integerValue||s.doubleValue),c=Te(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,e);case 3:return Zh(r.timestampValue,e.timestampValue);case 4:return Zh(Qi(r),Qi(e));case 5:return Iu(r.stringValue,e.stringValue);case 6:return(function(s,o){const u=Vn(s),c=Vn(o);return u.compareTo(c)})(r.bytesValue,e.bytesValue);case 7:return(function(s,o){const u=s.split("/"),c=o.split("/");for(let l=0;l<u.length&&l<c.length;l++){const d=W(u[l],c[l]);if(d!==0)return d}return W(u.length,c.length)})(r.referenceValue,e.referenceValue);case 8:return(function(s,o){const u=W(Te(s.latitude),Te(o.latitude));return u!==0?u:W(Te(s.longitude),Te(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ed(r.arrayValue,e.arrayValue);case 10:return(function(s,o){var u,c,l,d;const p=s.fields||{},_=o.fields||{},v=(u=p[mo])===null||u===void 0?void 0:u.arrayValue,I=(c=_[mo])===null||c===void 0?void 0:c.arrayValue,T=W(((l=v==null?void 0:v.values)===null||l===void 0?void 0:l.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return T!==0?T:ed(v,I)})(r.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Fs.mapValue&&o===Fs.mapValue)return 0;if(s===Fs.mapValue)return 1;if(o===Fs.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),l=o.fields||{},d=Object.keys(l);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=Iu(c[p],d[p]);if(_!==0)return _;const v=Kr(u[c[p]],l[d[p]]);if(v!==0)return v}return W(c.length,d.length)})(r.mapValue,e.mapValue);default:throw q(23264,{le:t})}}function Zh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=Nn(r),n=Nn(e),i=W(t.seconds,n.seconds);return i!==0?i:W(t.nanos,n.nanos)}function ed(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Kr(t[i],n[i]);if(s)return s}return W(t.length,n.length)}function Qr(r){return Au(r)}function Au(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Nn(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Vn(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return j.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Au(s);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Au(t.fields[o])}`;return i+"}"})(r.mapValue):q(61005,{value:r})}function Ks(r){switch(xn(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zo(r);return e?16+Ks(e):16;case 5:return 2*r.stringValue.length;case 6:return Vn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,s)=>i+Ks(s)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return Bn(n.fields,((s,o)=>{i+=s.length+Ks(o)})),i})(r.mapValue);default:throw q(13486,{value:r})}}function Ru(r){return!!r&&"integerValue"in r}function Ac(r){return!!r&&"arrayValue"in r}function td(r){return!!r&&"nullValue"in r}function nd(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qs(r){return!!r&&"mapValue"in r}function pw(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Yp])===null||t===void 0?void 0:t.stringValue)===Jp}function Vi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Bn(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Vi(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function _w(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===fw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.value=e}static empty(){return new Je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vi(t)}setAll(e){let t=Ne.emptyPath(),n={},i=[];e.forEach(((o,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=u.popLast()}o?n[u.lastSegment()]=Vi(o):i.push(u.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Qs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Bn(t,((i,s)=>e[i]=s));for(const i of n)delete e[i]}clone(){return new Je(Vi(this.value))}}function Zp(r){const e=[];return Bn(r.fields,((t,n)=>{const i=new Ne([t]);if(Qs(n)){const s=Zp(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,n,i,s,o,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=u}static newInvalidDocument(e){return new je(e,0,$.min(),$.min(),$.min(),Je.empty(),0)}static newFoundDocument(e,t,n,i){return new je(e,1,t,$.min(),n,i,0)}static newNoDocument(e,t){return new je(e,2,t,$.min(),$.min(),Je.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,$.min(),$.min(),Je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.position=e,this.inclusive=t}}function rd(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=j.comparator(j.fromName(o.referenceValue),t.key):n=Kr(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function id(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Bt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t="asc"){this.field=e,this.dir=t}}function mw(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{}class be extends e_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new yw(e,t,n):t==="array-contains"?new Ew(e,n):t==="in"?new ww(e,n):t==="not-in"?new Iw(e,n):t==="array-contains-any"?new Aw(e,n):new be(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new vw(e,n):new Tw(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kr(t,this.value)):t!==null&&xn(this.value)===xn(t)&&this.matchesComparison(Kr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends e_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new zt(e,t)}matches(e){return t_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function t_(r){return r.op==="and"}function n_(r){return gw(r)&&t_(r)}function gw(r){for(const e of r.filters)if(e instanceof zt)return!1;return!0}function bu(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+Qr(r.value);if(n_(r))return r.filters.map((e=>bu(e))).join(",");{const e=r.filters.map((t=>bu(t))).join(",");return`${r.op}(${e})`}}function r_(r,e){return r instanceof be?(function(n,i){return i instanceof be&&n.op===i.op&&n.field.isEqual(i.field)&&Bt(n.value,i.value)})(r,e):r instanceof zt?(function(n,i){return i instanceof zt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((s,o,u)=>s&&r_(o,i.filters[u])),!0):!1})(r,e):void q(19439)}function i_(r){return r instanceof be?(function(t){return`${t.field.canonicalString()} ${t.op} ${Qr(t.value)}`})(r):r instanceof zt?(function(t){return t.op.toString()+" {"+t.getFilters().map(i_).join(" ,")+"}"})(r):"Filter"}class yw extends be{constructor(e,t,n){super(e,t,n),this.key=j.fromName(n.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class vw extends be{constructor(e,t){super(e,"in",t),this.keys=s_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tw extends be{constructor(e,t){super(e,"not-in",t),this.keys=s_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function s_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((n=>j.fromName(n.referenceValue)))}class Ew extends be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ac(t)&&Yi(t.arrayValue,this.value)}}class ww extends be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yi(this.value.arrayValue,t)}}class Iw extends be{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Yi(this.value.arrayValue,t)}}class Aw extends be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ac(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Yi(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t=null,n=[],i=[],s=null,o=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=u,this.Pe=null}}function sd(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Rw(r,e,t,n,i,s,o)}function Rc(r){const e=H(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>bu(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Qr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Qr(n))).join(",")),e.Pe=t}return e.Pe}function bc(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!mw(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!r_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!id(r.startAt,e.startAt)&&id(r.endAt,e.endAt)}function Su(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t=null,n=[],i=[],s=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=u,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function bw(r,e,t,n,i,s,o,u){return new jo(r,e,t,n,i,s,o,u)}function Sc(r){return new jo(r)}function od(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Sw(r){return r.collectionGroup!==null}function xi(r){const e=H(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new Se(Ne.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(u=u.add(l.field))}))})),u})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new yo(s,n))})),t.has(Ne.keyField().canonicalString())||e.Te.push(new yo(Ne.keyField(),n))}return e.Te}function Vt(r){const e=H(r);return e.Ie||(e.Ie=Pw(e,xi(r))),e.Ie}function Pw(r,e){if(r.limitType==="F")return sd(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new yo(i.field,s)}));const t=r.endAt?new go(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new go(r.startAt.position,r.startAt.inclusive):null;return sd(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Pu(r,e,t){return new jo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function qo(r,e){return bc(Vt(r),Vt(e))&&r.limitType===e.limitType}function o_(r){return`${Rc(Vt(r))}|lt:${r.limitType}`}function Cr(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((i=>i_(i))).join(", ")}]`),Bo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((i=>Qr(i))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((i=>Qr(i))).join(",")),`Target(${n})`})(Vt(r))}; limitType=${r.limitType})`}function $o(r,e){return e.isFoundDocument()&&(function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(r,e)&&(function(n,i){for(const s of xi(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(r,e)&&(function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0})(r,e)&&(function(n,i){return!(n.startAt&&!(function(o,u,c){const l=rd(o,u,c);return o.inclusive?l<=0:l<0})(n.startAt,xi(n),i)||n.endAt&&!(function(o,u,c){const l=rd(o,u,c);return o.inclusive?l>=0:l>0})(n.endAt,xi(n),i))})(r,e)}function Cw(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function a_(r){return(e,t)=>{let n=!1;for(const i of xi(r)){const s=kw(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function kw(r,e,t){const n=r.field.isKeyField()?j.comparator(e.key,t.key):(function(s,o,u){const c=o.data.field(s),l=u.data.field(s);return c!==null&&l!==null?Kr(c,l):q(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,((t,n)=>{for(const[i,s]of n)e(i,s)}))}isEmpty(){return Hp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new pe(j.comparator);function sn(){return Dw}const u_=new pe(j.comparator);function bi(...r){let e=u_;for(const t of r)e=e.insert(t.key,t);return e}function c_(r){let e=u_;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function er(){return Mi()}function l_(){return Mi()}function Mi(){return new yr((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Ow=new pe(j.comparator),Nw=new Se(j.comparator);function K(...r){let e=Nw;for(const t of r)e=e.add(t);return e}const Vw=new Se(W);function xw(){return Vw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(e)?"-0":e}}function h_(r){return{integerValue:""+r}}function Mw(r,e){return uw(e)?h_(e):Pc(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this._=void 0}}function Lw(r,e,t){return r instanceof vo?(function(i,s){const o={fields:{[Kp]:{stringValue:Gp},[Xp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ic(s)&&(s=zo(s)),s&&(o.fields[Qp]=s),{mapValue:o}})(t,e):r instanceof Ji?f_(r,e):r instanceof Zi?p_(r,e):(function(i,s){const o=d_(i,s),u=ad(o)+ad(i.Ee);return Ru(o)&&Ru(i.Ee)?h_(u):Pc(i.serializer,u)})(r,e)}function Uw(r,e,t){return r instanceof Ji?f_(r,e):r instanceof Zi?p_(r,e):t}function d_(r,e){return r instanceof To?(function(n){return Ru(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class vo extends Ho{}class Ji extends Ho{constructor(e){super(),this.elements=e}}function f_(r,e){const t=__(e);for(const n of r.elements)t.some((i=>Bt(i,n)))||t.push(n);return{arrayValue:{values:t}}}class Zi extends Ho{constructor(e){super(),this.elements=e}}function p_(r,e){let t=__(e);for(const n of r.elements)t=t.filter((i=>!Bt(i,n)));return{arrayValue:{values:t}}}class To extends Ho{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ad(r){return Te(r.integerValue||r.doubleValue)}function __(r){return Ac(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Fw(r,e){return r.field.isEqual(e.field)&&(function(n,i){return n instanceof Ji&&i instanceof Ji||n instanceof Zi&&i instanceof Zi?Gr(n.elements,i.elements,Bt):n instanceof To&&i instanceof To?Bt(n.Ee,i.Ee):n instanceof vo&&i instanceof vo})(r.transform,e.transform)}class Bw{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Wo{}function m_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Go(r.key,rt.none()):new os(r.key,r.data,rt.none());{const t=r.data,n=Je.empty();let i=new Se(Ne.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new zn(r.key,n,new ft(i.toArray()),rt.none())}}function zw(r,e,t){r instanceof os?(function(i,s,o){const u=i.value.clone(),c=cd(i.fieldTransforms,s,o.transformResults);u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):r instanceof zn?(function(i,s,o){if(!Xs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const u=cd(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(g_(i)),c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(r,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Li(r,e,t,n){return r instanceof os?(function(s,o,u,c){if(!Xs(s.precondition,o))return u;const l=s.value.clone(),d=ld(s.fieldTransforms,c,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(r,e,t,n):r instanceof zn?(function(s,o,u,c){if(!Xs(s.precondition,o))return u;const l=ld(s.fieldTransforms,c,o),d=o.data;return d.setAll(g_(s)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(r,e,t,n):(function(s,o,u){return Xs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u})(r,e,t)}function jw(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=d_(n.transform,i||null);s!=null&&(t===null&&(t=Je.empty()),t.set(n.field,s))}return t||null}function ud(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Gr(n,i,((s,o)=>Fw(s,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class os extends Wo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends Wo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function g_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function cd(r,e,t){const n=new Map;Z(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,u=e.data.field(s.field);n.set(s.field,Uw(o,u,t[i]))}return n}function ld(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Lw(s,o,e))}return n}class Go extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qw extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zw(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Li(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Li(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=l_();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let u=this.applyToLocalView(o,s.mutatedFields);u=t.has(i.key)?null:u;const c=m_(o,u);c!==null&&n.set(i.key,c),o.isValidDocument()||o.convertToNoDocument($.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,((t,n)=>ud(t,n)))&&Gr(this.baseMutations,e.baseMutations,((t,n)=>ud(t,n)))}}class Cc{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Z(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=(function(){return Ow})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Cc(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,X;function Gw(r){switch(r){case M.OK:return q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return q(15467,{code:r})}}function y_(r){if(r===void 0)return rn("GRPC error has no .code"),M.UNKNOWN;switch(r){case Ee.OK:return M.OK;case Ee.CANCELLED:return M.CANCELLED;case Ee.UNKNOWN:return M.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return M.INTERNAL;case Ee.UNAVAILABLE:return M.UNAVAILABLE;case Ee.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ee.NOT_FOUND:return M.NOT_FOUND;case Ee.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ee.ABORTED:return M.ABORTED;case Ee.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ee.DATA_LOSS:return M.DATA_LOSS;default:return q(39323,{code:r})}}(X=Ee||(Ee={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new An([4294967295,4294967295],0);function hd(r){const e=zp().encode(r),t=new Np;return t.update(e),new Uint8Array(t.digest())}function dd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new An([t,n],0),new An([i,s],0)]}class kc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Si(`Invalid padding: ${t}`);if(n<0)throw new Si(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Si(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=An.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(An.fromNumber(n)));return i.compare(Kw)===1&&(i=new An([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=hd(e),[n,i]=dd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new kc(s,i,t);return n.forEach((u=>o.insert(u))),o}insert(e){if(this.fe===0)return;const t=hd(e),[n,i]=dd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(n,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,as.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko($.min(),i,new pe(W),sn(),K())}}class as{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new as(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class v_{constructor(e,t){this.targetId=e,this.De=t}}class T_{constructor(e,t,n=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class fd{constructor(){this.ve=0,this.Ce=pd(),this.Fe=xe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),n=K();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:q(38017,{changeType:s})}})),new as(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=pd()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Qw{constructor(e){this.We=e,this.Ge=new Map,this.ze=sn(),this.je=Bs(),this.Je=Bs(),this.He=new pe(W)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((n,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(Su(s))if(n===0){const o=new j(s.path);this.Xe(t,o,je.newNoDocument(o,$.min()))}else Z(n===1,20013,{expectedCount:n});else{const o=this.ot(t);if(o!==n){const u=this._t(e),c=u?this.ut(u,e,o):1;if(c!==0){this.rt(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,l)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,u;try{o=Vn(n).toUint8Array()}catch(c){if(c instanceof Wp)return Dn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new kc(o,i,s)}catch(c){return Dn(c instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.fe===0?null:u}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach((s=>{const o=this.We.lt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,o)=>{const u=this.st(o);if(u){if(s.current&&Su(u.target)){const c=new j(u.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,je.newNoDocument(c,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}}));let n=K();this.Je.forEach(((s,o)=>{let u=!0;o.forEachWhile((c=>{const l=this.st(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(s))})),this.ze.forEach(((s,o)=>o.setReadTime(e)));const i=new Ko(e,t,this.He,this.ze,n);return this.ze=sn(),this.je=Bs(),this.Je=Bs(),this.He=new pe(W),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new fd,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Se(W),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Se(W),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new fd),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Bs(){return new pe(j.comparator)}function pd(){return new pe(j.comparator)}const Xw={asc:"ASCENDING",desc:"DESCENDING"},Yw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jw={and:"AND",or:"OR"};class Zw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cu(r,e){return r.useProto3Json||Bo(e)?e:{value:e}}function Eo(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function eI(r,e){return Eo(r,e.toTimestamp())}function xt(r){return Z(!!r,49232),$.fromTimestamp((function(t){const n=Nn(t);return new oe(n.seconds,n.nanos)})(r))}function Dc(r,e){return ku(r,e).canonicalString()}function ku(r,e){const t=(function(i){return new se(["projects",i.projectId,"databases",i.database])})(r).child("documents");return e===void 0?t:t.child(e)}function w_(r){const e=se.fromString(r);return Z(S_(e),10190,{key:e.toString()}),e}function Du(r,e){return Dc(r.databaseId,e.path)}function Ka(r,e){const t=w_(e);if(t.get(1)!==r.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new j(A_(t))}function I_(r,e){return Dc(r.databaseId,e)}function tI(r){const e=w_(r);return e.length===4?se.emptyPath():A_(e)}function Ou(r){return new se(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function A_(r){return Z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function _d(r,e,t){return{name:Du(r,e),fields:t.value.mapValue.fields}}function nI(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(l,d){return l.useProto3Json?(Z(d===void 0||typeof d=="string",58123),xe.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),xe.fromUint8Array(d||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&(function(l){const d=l.code===void 0?M.UNKNOWN:y_(l.code);return new B(d,l.message||"")})(o);t=new T_(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Ka(r,n.document.name),s=xt(n.document.updateTime),o=n.document.createTime?xt(n.document.createTime):$.min(),u=new Je({mapValue:{fields:n.document.fields}}),c=je.newFoundDocument(i,s,o,u),l=n.targetIds||[],d=n.removedTargetIds||[];t=new Ys(l,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Ka(r,n.document),s=n.readTime?xt(n.readTime):$.min(),o=je.newNoDocument(i,s),u=n.removedTargetIds||[];t=new Ys([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Ka(r,n.document),s=n.removedTargetIds||[];t=new Ys([],s,i,null)}else{if(!("filter"in e))return q(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Ww(i,s),u=n.targetId;t=new v_(u,o)}}return t}function rI(r,e){let t;if(e instanceof os)t={update:_d(r,e.key,e.value)};else if(e instanceof Go)t={delete:Du(r,e.key)};else if(e instanceof zn)t={update:_d(r,e.key,e.data),updateMask:dI(e.fieldMask)};else{if(!(e instanceof qw))return q(16599,{Rt:e.type});t={verify:Du(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const u=o.transform;if(u instanceof vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof To)return{fieldPath:o.field.canonicalString(),increment:u.Ee};throw q(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:eI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)})(r,e.precondition)),t}function iI(r,e){return r&&r.length>0?(Z(e!==void 0,14353),r.map((t=>(function(i,s){let o=i.updateTime?xt(i.updateTime):xt(s);return o.isEqual($.min())&&(o=xt(s)),new Bw(o,i.transformResults||[])})(t,e)))):[]}function sI(r,e){return{documents:[I_(r,e.path)]}}function oI(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=I_(r,i);const s=(function(l){if(l.length!==0)return b_(zt.create(l,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(l){if(l.length!==0)return l.map((d=>(function(_){return{field:kr(_.field),direction:cI(_.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const u=Cu(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{Vt:t,parent:i}}function aI(r){let e=tI(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){Z(n===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=(function(p){const _=R_(p);return _ instanceof zt&&n_(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((_=>(function(I){return new yo(Dr(I.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(_)))})(t.orderBy));let u=null;t.limit&&(u=(function(p){let _;return _=typeof p=="object"?p.value:p,Bo(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(p){const _=!!p.before,v=p.values||[];return new go(v,_)})(t.startAt));let l=null;return t.endAt&&(l=(function(p){const _=!p.before,v=p.values||[];return new go(v,_)})(t.endAt)),bw(e,i,o,s,u,"F",c,l)}function uI(r,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function R_(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Dr(t.unaryFilter.field);return be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Dr(t.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dr(t.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Dr(t.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(r):r.fieldFilter!==void 0?(function(t){return be.create(Dr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return zt.create(t.compositeFilter.filters.map((n=>R_(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(r):q(30097,{filter:r})}function cI(r){return Xw[r]}function lI(r){return Yw[r]}function hI(r){return Jw[r]}function kr(r){return{fieldPath:r.canonicalString()}}function Dr(r){return Ne.fromServerFormat(r.fieldPath)}function b_(r){return r instanceof be?(function(t){if(t.op==="=="){if(nd(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(td(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nd(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(td(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:lI(t.op),value:t.value}}})(r):r instanceof zt?(function(t){const n=t.getFilters().map((i=>b_(i)));return n.length===1?n[0]:{compositeFilter:{op:hI(t.op),filters:n}}})(r):q(54877,{filter:r})}function dI(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function S_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n,i,s=$.min(),o=$.min(),u=xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.gt=e}}function pI(r){const e=aI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Pu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.Dn=new mI}addToCollectionParentIndex(e,t){return this.Dn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(On.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(On.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class mI{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Se(se.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Se(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P_=41943040;class Xe{static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.DEFAULT_COLLECTION_PERCENTILE=10,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xe.DEFAULT=new Xe(P_,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xe.DISABLED=new Xe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Xr(0)}static ur(){return new Xr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="LruGarbageCollector",gI=1048576;function yd([r,e],[t,n]){const i=W(r,t);return i===0?W(e,n):i}class yI{constructor(e){this.Tr=e,this.buffer=new Se(yd),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();yd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){F(gd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ri(t)?F(gd,"Ignoring IndexedDB error during garbage collection: ",t):await ni(t)}await this.Rr(3e5)}))}}class TI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Fo.ue);const n=new yI(t);return this.Vr.forEachTarget(e,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(md)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),md):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,o,u,c,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(n=p,u=Date.now(),this.removeTargets(e,n,t)))).next((p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((p=>(l=Date.now(),Pr()<=G.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(u-o)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(l-c)+`ms
Total Duration: ${l-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function EI(r,e){return new TI(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.changes=new yr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(n!==null&&Li(n.mutation,i,ft.empty(),oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const i=er();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((s=>{let o=bi();return s.forEach(((u,c)=>{o=o.insert(u,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=er();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const i=[];return n.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,u)=>{t.set(o,u)}))}))}computeViews(e,t,n,i){let s=sn();const o=Mi(),u=(function(){return Mi()})();return t.forEach(((c,l)=>{const d=n.get(l.key);i.has(l.key)&&(d===void 0||d.mutation instanceof zn)?s=s.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Li(d.mutation,l,d.mutation.getFieldMask(),oe.now())):o.set(l.key,ft.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((l,d)=>o.set(l,d))),t.forEach(((l,d)=>{var p;return u.set(l,new II(d,(p=o.get(l))!==null&&p!==void 0?p:null))})),u)))}recalculateAndSaveOverlays(e,t){const n=Mi();let i=new pe(((o,u)=>o-u)),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const u of o)u.keys().forEach((c=>{const l=t.get(c);if(l===null)return;let d=n.get(c)||ft.empty();d=u.applyToLocalView(l,d),n.set(c,d);const p=(i.get(u.batchId)||K()).add(c);i=i.insert(u.batchId,p)}))})).next((()=>{const o=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),l=c.key,d=c.value,p=l_();d.forEach((_=>{if(!s.has(_)){const v=m_(t.get(_),n.get(_));v!==null&&p.set(_,v),s=s.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return x.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,i){return(function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):x.resolve(er());let u=Ki,c=s;return o.next((l=>x.forEach(l,((d,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{c=c.insert(d,_)}))))).next((()=>this.populateOverlays(e,l,s))).next((()=>this.computeViews(e,c,l,K()))).next((d=>({batchId:u,changes:c_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((n=>{let i=bi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,s).next((u=>x.forEach(u,(c=>{const l=(function(p,_){return new jo(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,n,i).next((d=>{d.forEach(((p,_)=>{o=o.insert(p,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i)))).next((o=>{s.forEach(((c,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,je.newInvalidDocument(d)))}));let u=bi();return o.forEach(((c,l)=>{const d=s.get(c);d!==void 0&&Li(d.mutation,l,ft.empty(),oe.now()),$o(t,l)&&(u=u.insert(c,l))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return x.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:xt(i.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:pI(i.bundledQuery),readTime:xt(i.readTime)}})(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.overlays=new pe(j.comparator),this.kr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=er();return x.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&n.set(i,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((i,s)=>{this.wt(e,t,s)})),x.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const i=er(),s=t.length+1,o=new j(t.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new pe(((l,d)=>l-d));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let d=s.get(l.largestBatchId);d===null&&(d=er(),s=s.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const u=er(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,d)=>u.set(l,d))),!(u.size()>=i)););return x.resolve(u)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Hw(t,n));let s=this.kr.get(t);s===void 0&&(s=K(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.sessionToken=xe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.qr=new Se(Ce.Qr),this.$r=new Se(Ce.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Ce(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Gr(e,t){e.forEach((n=>this.removeReference(n,t)))}zr(e){const t=new j(new se([])),n=new Ce(t,e),i=new Ce(t,e+1),s=[];return this.$r.forEachInRange([n,i],(o=>{this.Wr(o),s.push(o.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new j(new se([])),n=new Ce(t,e),i=new Ce(t,e+1);let s=K();return this.$r.forEachInRange([n,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Ce(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return j.comparator(e.key,t.key)||W(e.Hr,t.Hr)}static Ur(e,t){return W(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Se(Ce.Qr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $w(s,t,n,i);this.mutationQueue.push(o);for(const u of i)this.Yr=this.Yr.add(new Ce(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?wc:this.er-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ce(t,0),i=new Ce(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],(o=>{const u=this.Zr(o.Hr);s.push(u)})),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Se(W);return t.forEach((i=>{const s=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],(u=>{n=n.add(u.Hr)}))})),x.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;j.isDocumentKey(s)||(s=s.child(""));const o=new Ce(new j(s),0);let u=new Se(W);return this.Yr.forEachWhile((c=>{const l=c.key.path;return!!n.isPrefixOf(l)&&(l.length===i&&(u=u.add(c.Hr)),!0)}),o),x.resolve(this.ei(u))}ei(e){const t=[];return e.forEach((n=>{const i=this.Zr(n);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Z(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return x.forEach(t.mutations,(i=>{const s=new Ce(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=n}))}rr(e){}containsKey(e,t){const n=new Ce(t,0),i=this.Yr.firstAfterOrEqual(n);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.ni=e,this.docs=(function(){return new pe(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let n=sn();return t.forEach((i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():je.newInvalidDocument(i))})),x.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=sn();const o=t.path,u=new j(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:l,value:{document:d}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||iw(rw(d),n)<=0||(i.has(d.key)||$o(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,t,n,i){q(9500)}ri(e,t){return x.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new kI(this)}getSize(e){return x.resolve(this.size)}}class kI extends wI{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)})),x.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.persistence=e,this.ii=new yr((t=>Rc(t)),bc),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.si=0,this.oi=new Oc,this.targetCount=0,this._i=Xr.ar()}forEachTarget(e,t){return this.ii.forEach(((n,i)=>t(i))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),x.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Xr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.hr(t),x.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach(((o,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)})),x.waitFor(s).next((()=>i))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),x.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.ai={},this.overlays={},this.ui=new Fo(0),this.ci=!1,this.ci=!0,this.li=new SI,this.referenceDelegate=e(this),this.hi=new DI(this),this.indexManager=new _I,this.remoteDocumentCache=(function(i){return new CI(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new fI(t),this.Ti=new RI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new PI(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){F("MemoryPersistence","Starting transaction:",e);const i=new OI(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return x.or(Object.values(this.ai).map((n=>()=>n.containsKey(e,t))))}}class OI extends ow{constructor(e){super(),this.currentSequenceNumber=e}}class Nc{constructor(e){this.persistence=e,this.Ai=new Oc,this.Ri=null}static Vi(e){return new Nc(e)}get mi(){if(this.Ri)return this.Ri;throw q(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.mi,(n=>{const i=j.fromPath(n);return this.fi(e,i).next((s=>{s||t.removeEntry(i,$.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return x.or([()=>x.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class wo{constructor(e,t){this.persistence=e,this.gi=new yr((n=>cw(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=EI(this,t)}static Vi(e,t){return new wo(e,t)}Ii(){}di(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((i=>n+i))))}yr(e){let t=0;return this.gr(e,(n=>{t++})).next((()=>t))}gr(e,t){return x.forEach(this.gi,((n,i)=>this.Sr(e,n,i).next((s=>s?x.resolve():t(i)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(o=>this.Sr(e,o,t).next((u=>{u||(n++,s.removeEntry(o,$.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),x.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ks(e.data.value)),t}Sr(e,t,n){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return x.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vc(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return cv()?8:aw(He())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ys(e,t,i,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new NI;return this.ws(e,t,o).next((u=>{if(s.result=u,this.Rs)return this.Ss(e,t,o,u.size)}))})).next((()=>s.result))}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(Pr()<=G.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Pr()<=G.DEBUG&&F("QueryEngine","Query:",Cr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Pr()<=G.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):x.resolve())}ps(e,t){if(od(t))return x.resolve(null);let n=Vt(t);return this.indexManager.getIndexType(e,n).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Pu(t,null,"F"),n=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=K(...s);return this.gs.getDocuments(e,o).next((u=>this.indexManager.getMinOffset(e,n).next((c=>{const l=this.bs(t,u);return this.Ds(t,l,o,c.readTime)?this.ps(e,Pu(t,null,"F")):this.vs(e,l,t,c)}))))})))))}ys(e,t,n,i){return od(t)||i.isEqual($.min())?x.resolve(null):this.gs.getDocuments(e,n).next((s=>{const o=this.bs(t,s);return this.Ds(t,o,n,i)?x.resolve(null):(Pr()<=G.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cr(t)),this.vs(e,o,t,nw(i,Ki)).next((u=>u)))}))}bs(e,t){let n=new Se(a_(e));return t.forEach(((i,s)=>{$o(e,s)&&(n=n.add(s))})),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return Pr()<=G.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Cr(t)),this.gs.getDocumentsMatchingQuery(e,t,On.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="LocalStore",xI=3e8;class MI{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new pe(W),this.Ms=new yr((s=>Rc(s)),bc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AI(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function LI(r,e,t,n){return new MI(r,e,t,n)}async function k_(r,e){const t=H(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],u=[];let c=K();for(const l of i){o.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}for(const l of s){u.push(l.batchId);for(const d of l.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(n,c).next((l=>({Bs:l,removedBatchIds:o,addedBatchIds:u})))}))}))}function UI(r,e){const t=H(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(u,c,l,d){const p=l.batch,_=p.keys();let v=x.resolve();return _.forEach((I=>{v=v.next((()=>d.getEntry(c,I))).next((T=>{const R=l.docVersions.get(I);Z(R!==null,48541),T.version.compareTo(R)<0&&(p.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),d.addEntry(T)))}))})),v.next((()=>u.mutationQueue.removeMutationBatch(c,p)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=K();for(let l=0;l<u.mutationResults.length;++l)u.mutationResults[l].transformResults.length>0&&(c=c.add(u.batch.mutations[l].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,i)))}))}function D_(r){const e=H(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function FI(r,e){const t=H(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const u=[];e.targetChanges.forEach(((d,p)=>{const _=i.get(p);if(!_)return;u.push(t.hi.removeMatchingKeys(s,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(s,d.addedDocuments,p))));let v=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(xe.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,n)),i=i.insert(p,v),(function(T,R,D){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=xI?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(_,v,d)&&u.push(t.hi.updateTargetData(s,v))}));let c=sn(),l=K();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))})),u.push(BI(s,o,e.documentUpdates).next((d=>{c=d.Ls,l=d.ks}))),!n.isEqual($.min())){const d=t.hi.getLastRemoteSnapshotVersion(s).next((p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n)));u.push(d)}return x.waitFor(u).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,l))).next((()=>c))})).then((s=>(t.Fs=i,s)))}function BI(r,e,t){let n=K(),i=K();return t.forEach((s=>n=n.add(s))),e.getEntries(r,n).next((s=>{let o=sn();return t.forEach(((u,c)=>{const l=s.get(u);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):F(xc,"Ignoring outdated watch update for ",u,". Current version:",l.version," Watch version:",c.version)})),{Ls:o,ks:i}}))}function zI(r,e){const t=H(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=wc),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function jI(r,e){const t=H(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return t.hi.getTargetData(n,e).next((s=>s?(i=s,x.resolve(i)):t.hi.allocateTargetId(n).next((o=>(i=new vn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n}))}async function Nu(r,e,t){const n=H(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!ri(o))throw o;F(xc,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function vd(r,e,t){const n=H(r);let i=$.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,l,d){const p=H(c),_=p.Ms.get(d);return _!==void 0?x.resolve(p.Fs.get(_)):p.hi.getTargetData(l,d)})(n,o,Vt(e)).next((u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,u.targetId).next((c=>{s=c}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?i:$.min(),t?s:K()))).next((u=>(qI(n,Cw(e),u),{documents:u,qs:s})))))}function qI(r,e,t){let n=r.xs.get(e)||$.min();t.forEach(((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),r.xs.set(e,n)}class Td{constructor(){this.activeTargetIds=xw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $I{constructor(){this.Fo=new Td,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Td,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="ConnectivityMonitor";class wd{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){F(Ed,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){F(Ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs=null;function Vu(){return zs===null?zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():zs++,"0x"+zs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="RestConnection",WI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GI{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===_o?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const o=Vu(),u=this.Go(e,t.toUriEncodedString());F(Qa,`Sending RPC '${e}' ${o}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:l}=new URL(u),d=Fn(l);return this.jo(e,u,c,n,d).then((p=>(F(Qa,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Dn(Qa,`RPC '${e}' ${o} failed with error: `,p,"url: ",u,"request:",n),p}))}Jo(e,t,n,i,s,o){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ti})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),n&&n.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const n=WI[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class QI extends GI{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const o=Vu();return new Promise(((u,c)=>{const l=new Vp;l.setWithCredentials(!0),l.listenOnce(xp.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Gs.NO_ERROR:const p=l.getResponseJson();F(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),u(p);break;case Gs.TIMEOUT:F(Be,`RPC '${e}' ${o} timed out`),c(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case Gs.HTTP_ERROR:const _=l.getStatus();if(F(Be,`RPC '${e}' ${o} failed with status:`,_,"response text:",l.getResponseText()),_>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const I=v==null?void 0:v.error;if(I&&I.status&&I.message){const T=(function(D){const C=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(C)>=0?C:M.UNKNOWN})(I.status);c(new B(T,I.message))}else c(new B(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new B(M.UNAVAILABLE,"Connection failed."));break;default:q(9055,{c_:e,streamId:o,l_:l.getLastErrorCode(),h_:l.getLastError()})}}finally{F(Be,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);F(Be,`RPC '${e}' ${o} sending request:`,i),l.send(t,"POST",d,n,15)}))}P_(e,t,n){const i=Vu(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Up(),u=Lp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const d=s.join("");F(Be,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=o.createWebChannel(d,c);this.T_(p);let _=!1,v=!1;const I=new KI({Ho:R=>{v?F(Be,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(_||(F(Be,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),F(Be,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Yo:()=>p.close()}),T=(R,D,C)=>{R.listen(D,(k=>{try{C(k)}catch(N){setTimeout((()=>{throw N}),0)}}))};return T(p,Ri.EventType.OPEN,(()=>{v||(F(Be,`RPC '${e}' stream ${i} transport opened.`),I.s_())})),T(p,Ri.EventType.CLOSE,(()=>{v||(v=!0,F(Be,`RPC '${e}' stream ${i} transport closed`),I.__(),this.I_(p))})),T(p,Ri.EventType.ERROR,(R=>{v||(v=!0,Dn(Be,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),I.__(new B(M.UNAVAILABLE,"The operation could not be completed")))})),T(p,Ri.EventType.MESSAGE,(R=>{var D;if(!v){const C=R.data[0];Z(!!C,16349);const k=C,N=(k==null?void 0:k.error)||((D=k[0])===null||D===void 0?void 0:D.error);if(N){F(Be,`RPC '${e}' stream ${i} received error:`,N);const V=N.status;let L=(function(y){const A=Ee[y];if(A!==void 0)return y_(A)})(V),E=N.message;L===void 0&&(L=M.INTERNAL,E="Unknown error status: "+V+" with message "+N.message),v=!0,I.__(new B(L,E)),p.close()}else F(Be,`RPC '${e}' stream ${i} received:`,C),I.a_(C)}})),T(u,Mp.STAT_EVENT,(R=>{R.stat===wu.PROXY?F(Be,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===wu.NOPROXY&&F(Be,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{I.o_()}),0),I}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Xa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(r){return new Zw(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="PersistentStream";class N_{constructor(e,t,n,i,s,o,u,c){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new O_(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(rn(t.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===t&&this.W_(n,i)}),(n=>{e((()=>{const i=new B(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return F(Id,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(F(Id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XI extends N_{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=nI(this.serializer,e),n=(function(s){if(!("targetChange"in s))return $.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?xt(o.readTime):$.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Ou(this.serializer),t.addTarget=(function(s,o){let u;const c=o.target;if(u=Su(c)?{documents:sI(s,c)}:{query:oI(s,c).Vt},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=E_(s,o.resumeToken);const l=Cu(s,o.expectedCount);l!==null&&(u.expectedCount=l)}else if(o.snapshotVersion.compareTo($.min())>0){u.readTime=Eo(s,o.snapshotVersion.toTimestamp());const l=Cu(s,o.expectedCount);l!==null&&(u.expectedCount=l)}return u})(this.serializer,e);const n=uI(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Ou(this.serializer),t.removeTarget=e,this.k_(t)}}class YI extends N_{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=iI(e.writeResults,e.commitTime),n=xt(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Ou(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>rI(this.serializer,n)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{}class ZI extends JI{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,ku(t,n),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(M.UNKNOWN,s.toString())}))}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Jo(e,ku(t,n),i,o,u,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(M.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class e0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rn(t),this._a=!1):F("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="RemoteStore";class t0{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((o=>{n.enqueueAndForget((async()=>{vr(this)&&(F(dr,"Restarting streams for network reachability change."),await(async function(c){const l=H(c);l.Ia.add(4),await us(l),l.Aa.set("Unknown"),l.Ia.delete(4),await Xo(l)})(this))}))})),this.Aa=new e0(n,i)}}async function Xo(r){if(vr(r))for(const e of r.da)await e(!0)}async function us(r){for(const e of r.da)await e(!1)}function V_(r,e){const t=H(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Fc(t)?Uc(t):ii(t).x_()&&Lc(t,e))}function Mc(r,e){const t=H(r),n=ii(t);t.Ta.delete(e),n.x_()&&x_(t,e),t.Ta.size===0&&(n.x_()?n.B_():vr(t)&&t.Aa.set("Unknown"))}function Lc(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ii(r).H_(e)}function x_(r,e){r.Ra.$e(e),ii(r).Y_(e)}function Uc(r){r.Ra=new Qw({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),ii(r).start(),r.Aa.aa()}function Fc(r){return vr(r)&&!ii(r).M_()&&r.Ta.size>0}function vr(r){return H(r).Ia.size===0}function M_(r){r.Ra=void 0}async function n0(r){r.Aa.set("Online")}async function r0(r){r.Ta.forEach(((e,t)=>{Lc(r,e)}))}async function i0(r,e){M_(r),Fc(r)?(r.Aa.la(e),Uc(r)):r.Aa.set("Unknown")}async function s0(r,e,t){if(r.Aa.set("Online"),e instanceof T_&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,o),i.Ta.delete(u),i.Ra.removeTarget(u))})(r,e)}catch(n){F(dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Io(r,n)}else if(e instanceof Ys?r.Ra.Ye(e):e instanceof v_?r.Ra.it(e):r.Ra.et(e),!t.isEqual($.min()))try{const n=await D_(r.localStore);t.compareTo(n)>=0&&await(function(s,o){const u=s.Ra.Pt(o);return u.targetChanges.forEach(((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ta.get(l);d&&s.Ta.set(l,d.withResumeToken(c.resumeToken,o))}})),u.targetMismatches.forEach(((c,l)=>{const d=s.Ta.get(c);if(!d)return;s.Ta.set(c,d.withResumeToken(xe.EMPTY_BYTE_STRING,d.snapshotVersion)),x_(s,c);const p=new vn(d.target,c,l,d.sequenceNumber);Lc(s,p)})),s.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){F(dr,"Failed to raise snapshot:",n),await Io(r,n)}}async function Io(r,e,t){if(!ri(e))throw e;r.Ia.add(1),await us(r),r.Aa.set("Offline"),t||(t=()=>D_(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{F(dr,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Xo(r)}))}function L_(r,e){return e().catch((t=>Io(r,t,e)))}async function Yo(r){const e=H(r),t=Mn(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:wc;for(;o0(e);)try{const i=await zI(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,a0(e,i)}catch(i){await Io(e,i)}U_(e)&&F_(e)}function o0(r){return vr(r)&&r.Pa.length<10}function a0(r,e){r.Pa.push(e);const t=Mn(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function U_(r){return vr(r)&&!Mn(r).M_()&&r.Pa.length>0}function F_(r){Mn(r).start()}async function u0(r){Mn(r).na()}async function c0(r){const e=Mn(r);for(const t of r.Pa)e.X_(t.mutations)}async function l0(r,e,t){const n=r.Pa.shift(),i=Cc.from(n,e,t);await L_(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await Yo(r)}async function h0(r,e){e&&Mn(r).Z_&&await(async function(n,i){if((function(o){return Gw(o)&&o!==M.ABORTED})(i.code)){const s=n.Pa.shift();Mn(n).N_(),await L_(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Yo(n)}})(r,e),U_(r)&&F_(r)}async function Ad(r,e){const t=H(r);t.asyncQueue.verifyOperationInProgress(),F(dr,"RemoteStore received new credentials");const n=vr(t);t.Ia.add(3),await us(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xo(t)}async function d0(r,e){const t=H(r);e?(t.Ia.delete(2),await Xo(t)):e||(t.Ia.add(2),await us(t),t.Aa.set("Unknown"))}function ii(r){return r.Va||(r.Va=(function(t,n,i){const s=H(t);return s.ia(),new XI(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:n0.bind(null,r),e_:r0.bind(null,r),n_:i0.bind(null,r),J_:s0.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Fc(r)?Uc(r):r.Aa.set("Unknown")):(await r.Va.stop(),M_(r))}))),r.Va}function Mn(r){return r.ma||(r.ma=(function(t,n,i){const s=H(t);return s.ia(),new YI(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:u0.bind(null,r),n_:h0.bind(null,r),ea:c0.bind(null,r),ta:l0.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Yo(r)):(await r.ma.stop(),r.Pa.length>0&&(F(dr,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,u=new Bc(e,t,o,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zc(r,e){if(rn("AsyncQueue",`${e}: ${r}`),ri(r))return new B(M.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{static emptySet(e){return new Lr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||j.comparator(t.key,n.key):(t,n)=>j.comparator(t.key,n.key),this.keyedMap=bi(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Lr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.fa=new pe(j.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):q(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Yr{constructor(e,t,n,i,s,o,u,c,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach((u=>{o.push({type:0,doc:u})})),new Yr(e,t,Lr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class p0{constructor(){this.queries=bd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=H(t),s=i.queries;i.queries=bd(),s.forEach(((o,u)=>{for(const c of u.wa)c.onError(n)}))})(this,new B(M.ABORTED,"Firestore shutting down"))}}function bd(){return new yr((r=>o_(r)),qo)}async function B_(r,e){const t=H(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new f0,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const u=zc(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&jc(t)}async function z_(r,e){const t=H(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function _0(r,e){const t=H(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const u of o.wa)u.Ca(i)&&(n=!0);o.ya=i}}n&&jc(t)}function m0(r,e,t){const n=H(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function jc(r){r.Da.forEach((e=>{e.next()}))}var xu,Sd;(Sd=xu||(xu={})).Fa="default",Sd.Cache="cache";class j_{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Yr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.key=e}}class $_{constructor(e){this.key=e}}class g0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=a_(e),this.eu=new Lr(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Rd,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const _=i.get(d),v=$o(this.query,p)?p:null,I=!!_&&this.mutatedKeys.has(_.key),T=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let R=!1;_&&v?_.data.isEqual(v.data)?I!==T&&(n.track({type:3,doc:v}),R=!0):this.iu(_,v)||(n.track({type:2,doc:v}),R=!0,(c&&this.Xa(v,c)>0||l&&this.Xa(v,l)<0)&&(u=!0)):!_&&v?(n.track({type:0,doc:v}),R=!0):_&&!v&&(n.track({type:1,doc:_}),R=!0,(c||l)&&(u=!0)),R&&(v?(o=o.add(v),s=T?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),n.track({type:1,doc:d})}return{eu:o,ru:n,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((d,p)=>(function(v,I){const T=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{At:R})}};return T(v)-T(I)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(n),i=i!=null&&i;const u=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,l=c!==this.Ya;return this.Ya=c,o.length!==0||l?{snapshot:new Yr(this.query,e.eu,s,o,e.mutatedKeys,c===0,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Rd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const t=[];return e.forEach((n=>{this.Za.has(n)||t.push(new $_(n))})),this.Za.forEach((n=>{e.has(n)||t.push(new q_(n))})),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Yr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const qc="SyncEngine";class y0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class v0{constructor(e){this.key=e,this.lu=!1}}class T0{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new yr((u=>o_(u)),qo),this.Tu=new Map,this.Iu=new Set,this.du=new pe(j.comparator),this.Eu=new Map,this.Au=new Oc,this.Ru={},this.Vu=new Map,this.mu=Xr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function E0(r,e,t=!0){const n=X_(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await H_(n,e,t,!0),i}async function w0(r,e){const t=X_(r);await H_(t,e,!0,!1)}async function H_(r,e,t,n){const i=await jI(r.localStore,Vt(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let u;return n&&(u=await I0(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&V_(r.remoteStore,i),u}async function I0(r,e,t,n,i){r.gu=(p,_,v)=>(async function(T,R,D,C){let k=R.view.nu(D);k.Ds&&(k=await vd(T.localStore,R.query,!1).then((({documents:E})=>R.view.nu(E,k))));const N=C&&C.targetChanges.get(R.targetId),V=C&&C.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(k,T.isPrimaryClient,N,V);return Cd(T,R.targetId,L._u),L.snapshot})(r,p,_,v);const s=await vd(r.localStore,e,!0),o=new g0(e,s.qs),u=o.nu(s.documents),c=as.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),l=o.applyChanges(u,r.isPrimaryClient,c);Cd(r,t,l._u);const d=new y0(e,t,o);return r.Pu.set(e,d),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),l.snapshot}async function A0(r,e,t){const n=H(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter((o=>!qo(o,e)))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Nu(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Mc(n.remoteStore,i.targetId),Mu(n,i.targetId)})).catch(ni)):(Mu(n,i.targetId),await Nu(n.localStore,i.targetId,!0))}async function R0(r,e){const t=H(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Mc(t.remoteStore,n.targetId))}async function b0(r,e,t){const n=N0(r);try{const i=await(function(o,u){const c=H(o),l=oe.now(),d=u.reduce(((v,I)=>v.add(I.key)),K());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let I=sn(),T=K();return c.Os.getEntries(v,d).next((R=>{I=R,I.forEach(((D,C)=>{C.isValidDocument()||(T=T.add(D))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,I))).next((R=>{p=R;const D=[];for(const C of u){const k=jw(C,p.get(C.key).overlayedDocument);k!=null&&D.push(new zn(C.key,k,Zp(k.value.mapValue),rt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,l,D,u)})).next((R=>{_=R;const D=R.applyToLocalDocumentSet(p,T);return c.documentOverlayCache.saveOverlays(v,R.batchId,D)}))})).then((()=>({batchId:_.batchId,changes:c_(p)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),(function(o,u,c){let l=o.Ru[o.currentUser.toKey()];l||(l=new pe(W)),l=l.insert(u,c),o.Ru[o.currentUser.toKey()]=l})(n,i.batchId,t),await cs(n,i.changes),await Yo(n.remoteStore)}catch(i){const s=zc(i,"Failed to persist write");t.reject(s)}}async function W_(r,e){const t=H(r);try{const n=await FI(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Eu.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Z(o.lu,14607):i.removedDocuments.size>0&&(Z(o.lu,42227),o.lu=!1))})),await cs(t,n,e)}catch(n){await ni(n)}}function Pd(r,e,t){const n=H(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach(((s,o)=>{const u=o.view.va(e);u.snapshot&&i.push(u.snapshot)})),(function(o,u){const c=H(o);c.onlineState=u;let l=!1;c.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(u)&&(l=!0)})),l&&jc(c)})(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function S0(r,e,t){const n=H(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let o=new pe(j.comparator);o=o.insert(s,je.newNoDocument(s,$.min()));const u=K().add(s),c=new Ko($.min(),new Map,new pe(W),o,u);await W_(n,c),n.du=n.du.remove(s),n.Eu.delete(e),$c(n)}else await Nu(n.localStore,e,!1).then((()=>Mu(n,e,t))).catch(ni)}async function P0(r,e){const t=H(r),n=e.batch.batchId;try{const i=await UI(t.localStore,e);K_(t,n,null),G_(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await cs(t,i)}catch(i){await ni(i)}}async function C0(r,e,t){const n=H(r);try{const i=await(function(o,u){const c=H(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let d;return c.mutationQueue.lookupMutationBatch(l,u).next((p=>(Z(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(l,p)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,d,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d))).next((()=>c.localDocuments.getDocuments(l,d)))}))})(n.localStore,e);K_(n,e,t),G_(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await cs(n,i)}catch(i){await ni(i)}}function G_(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function K_(r,e,t){const n=H(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function Mu(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((n=>{r.Au.containsKey(n)||Q_(r,n)}))}function Q_(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Mc(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),$c(r))}function Cd(r,e,t){for(const n of t)n instanceof q_?(r.Au.addReference(n.key,e),k0(r,n)):n instanceof $_?(F(qc,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||Q_(r,n.key)):q(19791,{yu:n})}function k0(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(F(qc,"New document in limbo: "+t),r.Iu.add(n),$c(r))}function $c(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new j(se.fromString(e)),n=r.mu.next();r.Eu.set(n,new v0(t)),r.du=r.du.insert(t,n),V_(r.remoteStore,new vn(Vt(Sc(t.path)),n,"TargetPurposeLimboResolution",Fo.ue))}}async function cs(r,e,t){const n=H(r),i=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach(((u,c)=>{o.push(n.gu(c,e,t).then((l=>{var d;if((l||t)&&n.isPrimaryClient){const p=l?!l.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(l){i.push(l);const p=Vc.Es(c.targetId,l);s.push(p)}})))})),await Promise.all(o),n.hu.J_(i),await(async function(c,l){const d=H(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>x.forEach(l,(_=>x.forEach(_.Is,(v=>d.persistence.referenceDelegate.addReference(p,_.targetId,v))).next((()=>x.forEach(_.ds,(v=>d.persistence.referenceDelegate.removeReference(p,_.targetId,v)))))))))}catch(p){if(!ri(p))throw p;F(xc,"Failed to update sequence numbers: "+p)}for(const p of l){const _=p.targetId;if(!p.fromCache){const v=d.Fs.get(_),I=v.snapshotVersion,T=v.withLastLimboFreeSnapshotVersion(I);d.Fs=d.Fs.insert(_,T)}}})(n.localStore,s))}async function D0(r,e){const t=H(r);if(!t.currentUser.isEqual(e)){F(qc,"User change. New user:",e.toKey());const n=await k_(t.localStore,e);t.currentUser=e,(function(s,o){s.Vu.forEach((u=>{u.forEach((c=>{c.reject(new B(M.CANCELLED,o))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await cs(t,n.Bs)}}function O0(r,e){const t=H(r),n=t.Eu.get(e);if(n&&n.lu)return K().add(n.key);{let i=K();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const u=t.Pu.get(o);i=i.unionWith(u.view.tu)}return i}}function X_(r){const e=H(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=S0.bind(null,e),e.hu.J_=_0.bind(null,e.eventManager),e.hu.pu=m0.bind(null,e.eventManager),e}function N0(r){const e=H(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C0.bind(null,e),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return LI(this.persistence,new VI,e.initialUser,this.serializer)}Du(e){return new C_(Nc.Vi,this.serializer)}bu(e){return new $I}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class V0 extends Ao{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Z(this.persistence.referenceDelegate instanceof wo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new vI(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new C_((n=>wo.Vi(n,t)),this.serializer)}}class Lu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Pd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=D0.bind(null,this.syncEngine),await d0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new p0})()}createDatastore(e){const t=Qo(e.databaseInfo.databaseId),n=(function(s){return new QI(s)})(e.databaseInfo);return(function(s,o,u,c){return new ZI(s,o,u,c)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,i,s,o,u){return new t0(n,i,s,o,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Pd(this.syncEngine,t,0)),(function(){return wd.C()?new wd:new HI})())}createSyncEngine(e,t){return(function(i,s,o,u,c,l,d){const p=new T0(i,s,o,u,c,l);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=H(i);F(dr,"RemoteStore shutting down."),s.Ia.add(5),await us(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Lu.provider={build:()=>new Lu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirestoreClient";class x0{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=Tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{F(Ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(F(Ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=zc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ya(r,e){r.asyncQueue.verifyOperationInProgress(),F(Ln,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await k_(e.localStore,i),n=i)})),e.persistence.setDatabaseDeletedListener((()=>{Dn("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{F("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Dn("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=e}async function kd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await M0(r);F(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Ad(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Ad(e.remoteStore,i))),r._onlineComponents=e}async function M0(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F(Ln,"Using user provided OfflineComponentProvider");try{await Ya(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await Ya(r,new Ao)}}else F(Ln,"Using default OfflineComponentProvider"),await Ya(r,new V0(void 0));return r._offlineComponents}async function J_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F(Ln,"Using user provided OnlineComponentProvider"),await kd(r,r._uninitializedComponentsProvider._online)):(F(Ln,"Using default OnlineComponentProvider"),await kd(r,new Lu))),r._onlineComponents}function L0(r){return J_(r).then((e=>e.syncEngine))}async function Z_(r){const e=await J_(r),t=e.eventManager;return t.onListen=E0.bind(null,e.syncEngine),t.onUnlisten=A0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=w0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=R0.bind(null,e.syncEngine),t}function U0(r,e,t={}){const n=new Zt;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,u,c,l){const d=new Y_({next:_=>{d.Ou(),o.enqueueAndForget((()=>z_(s,p)));const v=_.docs.has(u);!v&&_.fromCache?l.reject(new B(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&_.fromCache&&c&&c.source==="server"?l.reject(new B(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(_)},error:_=>l.reject(_)}),p=new j_(Sc(u.path),d,{includeMetadataChanges:!0,ka:!0});return B_(s,p)})(await Z_(r),r.asyncQueue,e,t,n))),n.promise}function F0(r,e,t={}){const n=new Zt;return r.asyncQueue.enqueueAndForget((async()=>(function(s,o,u,c,l){const d=new Y_({next:_=>{d.Ou(),o.enqueueAndForget((()=>z_(s,p))),_.fromCache&&c.source==="server"?l.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(_)},error:_=>l.reject(_)}),p=new j_(u,d,{includeMetadataChanges:!0,ka:!0});return B_(s,p)})(await Z_(r),r.asyncQueue,e,t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="firestore.googleapis.com",Od=!0;class Nd{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tm,this.ssl=Od}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Od;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gI)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=em((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jo{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new WE;switch(n.type){case"firstParty":return new XE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Dd.get(t);n&&(F("ComponentProvider","Removing Datastore"),Dd.delete(t),n.terminate())})(this),Promise.resolve()}}function B0(r,e,t,n={}){var i;r=bt(r,Jo);const s=Fn(e),o=r._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${e}:${t}`;s&&(uc(`https://${c}`),cc("Firestore",!0)),o.host!==tm&&o.host!==c&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:n});if(!ur(l,u)&&(r._setSettings(l),n.mockUserToken)){let d,p;if(typeof n.mockUserToken=="string")d=n.mockUserToken,p=ze.MOCK_USER;else{d=ap(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ze(_)}r._authCredentials=new GE(new Bp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class Ae{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ss(t,Ae._jsonSchema))return new Ae(e,n||null,new j(se.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Ie("string",Ae._jsonSchemaVersion),referencePath:Ie("string")};class Rn extends Zo{constructor(e,t,n){super(e,t,Sc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new j(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function z0(r,e,...t){if(r=ae(r),jp("collection","path",e),r instanceof Jo){const n=se.fromString(e,...t);return Gh(n),new Rn(r,null,n)}{if(!(r instanceof Ae||r instanceof Rn))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return Gh(n),new Rn(r.firestore,null,n)}}function ls(r,e,...t){if(r=ae(r),arguments.length===1&&(e=Tc.newId()),jp("doc","path",e),r instanceof Jo){const n=se.fromString(e,...t);return Wh(n),new Ae(r,null,new j(n))}{if(!(r instanceof Ae||r instanceof Rn))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return Wh(n),new Ae(r.firestore,r instanceof Rn?r.converter:null,new j(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="AsyncQueue";class xd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new O_(this,"async_queue_retry"),this.oc=()=>{const n=Xa();n&&F(Vd,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=Xa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Zt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ri(e))throw e;F(Vd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((n=>{throw this.tc=n,this.nc=!1,rn("INTERNAL UNHANDLED ERROR: ",Md(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Bc.createAndSchedule(this,e,t,n,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&q(47125,{hc:Md(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Md(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class Tr extends Jo{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new xd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xd(e),this._firestoreClient=void 0,await e}}}function j0(r,e){const t=typeof r=="object"?r:dc(),n=typeof r=="string"?r:_o,i=Lo(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=ip("firestore");s&&B0(i,...s)}return i}function ea(r){if(r._terminated)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||q0(r),r._firestoreClient}function q0(r){var e,t,n;const i=r._freezeSettings(),s=(function(u,c,l,d){return new dw(u,c,l,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,em(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new x0(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yt(xe.fromBase64String(e))}catch(t){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yt(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ss(e,yt._jsonSchema))return yt.fromBase64String(e.bytes)}}yt._jsonSchemaVersion="firestore/bytes/1.0",yt._jsonSchema={type:Ie("string",yt._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mt._jsonSchemaVersion}}static fromJSON(e){if(ss(e,Mt._jsonSchema))return new Mt(e.latitude,e.longitude)}}Mt._jsonSchemaVersion="firestore/geoPoint/1.0",Mt._jsonSchema={type:Ie("string",Mt._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ss(e,Lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Lt(e.vectorValues);throw new B(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lt._jsonSchemaVersion="firestore/vectorValue/1.0",Lt._jsonSchema={type:Ie("string",Lt._jsonSchemaVersion),vectorValues:Ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=/^__.*__$/;class H0{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new os(e,this.data,t,this.fieldTransforms)}}class nm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ec:r})}}class Wc{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ro(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(rm(this.Ec)&&$0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class W0{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qo(e)}Dc(e,t,n,i=!1){return new Wc({Ec:e,methodName:t,bc:n,path:Ne.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gc(r){const e=r._freezeSettings(),t=Qo(r._databaseId);return new W0(r._databaseId,!!e.ignoreUndefinedProperties,t)}function im(r,e,t,n,i,s={}){const o=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);Kc("Data must be an object, but it was:",o,n);const u=am(n,o);let c,l;if(s.merge)c=new ft(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const _=Uu(e,p,t);if(!o.contains(_))throw new B(M.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);cm(d,_)||d.push(_)}c=new ft(d),l=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,l=o.fieldTransforms;return new H0(new Je(u),c,l)}class ta extends Hc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ta}}function sm(r,e,t,n){const i=r.Dc(1,e,t);Kc("Data must be an object, but it was:",i,n);const s=[],o=Je.empty();Bn(n,((c,l)=>{const d=Qc(e,c,t);l=ae(l);const p=i.gc(d);if(l instanceof ta)s.push(d);else{const _=na(l,p);_!=null&&(s.push(d),o.set(d,_))}}));const u=new ft(s);return new nm(o,u,i.fieldTransforms)}function om(r,e,t,n,i,s){const o=r.Dc(1,e,t),u=[Uu(e,n,t)],c=[i];if(s.length%2!=0)throw new B(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)u.push(Uu(e,s[_])),c.push(s[_+1]);const l=[],d=Je.empty();for(let _=u.length-1;_>=0;--_)if(!cm(l,u[_])){const v=u[_];let I=c[_];I=ae(I);const T=o.gc(v);if(I instanceof ta)l.push(v);else{const R=na(I,T);R!=null&&(l.push(v),d.set(v,R))}}const p=new ft(l);return new nm(d,p,o.fieldTransforms)}function na(r,e){if(um(r=ae(r)))return Kc("Unsupported field value:",e,r),am(r,e);if(r instanceof Hc)return(function(n,i){if(!rm(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(n,i){const s=[];let o=0;for(const u of n){let c=na(u,i.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}})(r,e)}return(function(n,i){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Mw(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=oe.fromDate(n);return{timestampValue:Eo(i.serializer,s)}}if(n instanceof oe){const s=new oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Eo(i.serializer,s)}}if(n instanceof Mt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yt)return{bytesValue:E_(i.serializer,n._byteString)};if(n instanceof Ae){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dc(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Lt)return(function(o,u){return{mapValue:{fields:{[Yp]:{stringValue:Jp},[mo]:{arrayValue:{values:o.toArray().map((l=>{if(typeof l!="number")throw u.wc("VectorValues must only contain numeric values.");return Pc(u.serializer,l)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${Ec(n)}`)})(r,e)}function am(r,e){const t={};return Hp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(r,((n,i)=>{const s=na(i,e.Vc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function um(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof oe||r instanceof Mt||r instanceof yt||r instanceof Ae||r instanceof Hc||r instanceof Lt)}function Kc(r,e,t){if(!um(t)||!qp(t)){const n=Ec(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function Uu(r,e,t){if((e=ae(e))instanceof hs)return e._internalPath;if(typeof e=="string")return Qc(r,e);throw Ro("Field path arguments must be of type string or ",r,!1,void 0,t)}const G0=new RegExp("[~\\*/\\[\\]]");function Qc(r,e,t){if(e.search(G0)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new hs(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ro(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${i}`),c+=")"),new B(M.INVALID_ARGUMENT,u+r+c)}function cm(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new K0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(hm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class K0 extends lm{data(){return super.data()}}function hm(r,e){return typeof e=="string"?Qc(r,e):e instanceof hs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class X0{convertValue(e,t="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Bn(e,((i,s)=>{n[i]=this.convertValue(s,t)})),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[mo].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((o=>Te(o.doubleValue)));return new Lt(s)}convertGeoPoint(e){return new Mt(Te(e.latitude),Te(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=zo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const t=Nn(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=se.fromString(e);Z(S_(n),9688,{name:e});const i=new Xi(n.get(1),n.get(3)),s=new j(n.popFirst(5));return i.isEqual(t)||rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Pi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ar extends lm{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(hm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ar._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",ar._jsonSchema={type:Ie("string",ar._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Js extends ar{data(e={}){return super.data(e)}}class Ur{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Pi(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Js(this._firestore,this._userDataWriter,n.key,n,new Pi(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((u=>{const c=new Js(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Pi(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>s||u.type!==3)).map((u=>{const c=new Js(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Pi(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,d=-1;return u.type!==0&&(l=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),d=o.indexOf(u.doc.key)),{type:Y0(u.type),doc:c,oldIndex:l,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ur._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Y0(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(r){r=bt(r,Ae);const e=bt(r.firestore,Tr);return U0(ea(e),r._key).then((t=>rA(e,r,t)))}Ur._jsonSchemaVersion="firestore/querySnapshot/1.0",Ur._jsonSchema={type:Ie("string",Ur._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class fm extends X0{constructor(e){super(),this.firestore=e}convertBytes(e){return new yt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function Z0(r){r=bt(r,Zo);const e=bt(r.firestore,Tr),t=ea(e),n=new fm(e);return Q0(r._query),F0(t,r._query).then((i=>new Ur(e,n,r,i)))}function eA(r,e,t){r=bt(r,Ae);const n=bt(r.firestore,Tr),i=dm(r.converter,e,t);return ra(n,[im(Gc(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,rt.none())])}function tA(r,e,t,...n){r=bt(r,Ae);const i=bt(r.firestore,Tr),s=Gc(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof hs?om(s,"updateDoc",r._key,e,t,n):sm(s,"updateDoc",r._key,e),ra(i,[o.toMutation(r._key,rt.exists(!0))])}function nA(r){return ra(bt(r.firestore,Tr),[new Go(r._key,rt.none())])}function ra(r,e){return(function(n,i){const s=new Zt;return n.asyncQueue.enqueueAndForget((async()=>b0(await L0(n),i,s))),s.promise})(ea(r),e)}function rA(r,e,t){const n=t.docs.get(e._key),i=new fm(r);return new ar(r,i,e._key,n,new Pi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Gc(e)}set(e,t,n){this._verifyNotCommitted();const i=Ja(e,this._firestore),s=dm(i.converter,t,n),o=im(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,rt.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=Ja(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof hs?om(this._dataReader,"WriteBatch.update",s._key,t,n,i):sm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,rt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ja(e,this._firestore);return this._mutations=this._mutations.concat(new Go(t._key,rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ja(r,e){if((r=ae(r)).firestore!==e)throw new B(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(r){return ea(r=bt(r,Tr)),new iA(r,(e=>ra(r,e)))}(function(e,t=!0){(function(i){ti=i})(mr),cr(new kn("firestore",((n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),u=new Tr(new KE(n.getProvider("auth-internal")),new YE(o,n.getProvider("app-check-internal")),(function(l,d){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(l.options.projectId,d)})(o,i),o);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u}),"PUBLIC").setMultipleInstances(!0)),Nt(zh,jh,e),Nt(zh,jh,"esm2017")})();function pm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oA=pm,_m=new ns("auth","Firebase",pm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new lc("@firebase/auth");function aA(r,...e){bo.logLevel<=G.WARN&&bo.warn(`Auth (${mr}): ${r}`,...e)}function Zs(r,...e){bo.logLevel<=G.ERROR&&bo.error(`Auth (${mr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(r,...e){throw Yc(r,...e)}function Rt(r,...e){return Yc(r,...e)}function Xc(r,e,t){const n=Object.assign(Object.assign({},oA()),{[e]:t});return new ns("auth","Firebase",n).create(e,{appName:r.name})}function bn(r){return Xc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uA(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Et(r,"argument-error"),Xc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return _m.create(r,...e)}function z(r,e,...t){if(!r)throw Yc(e,...t)}function Qt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zs(e),new Error(e)}function on(r,e){r||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function cA(){return Ld()==="http:"||Ld()==="https:"}function Ld(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cA()||ov()||"connection"in navigator)?navigator.onLine:!0}function hA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=rv()||av()}get(){return lA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(r,e){on(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pA=new ds(3e4,6e4);function jn(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function qt(r,e,t,n,i={}){return gm(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const u=rs(Object.assign({key:r.config.apiKey},o)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const l=Object.assign({method:e,headers:c},s);return sv()||(l.referrerPolicy="no-referrer"),r.emulatorConfig&&Fn(r.emulatorConfig.host)&&(l.credentials="include"),mm.fetch()(await ym(r,r.config.apiHost,t,u),l)})}async function gm(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},dA),e);try{const i=new mA(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw js(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const u=s.ok?o.errorMessage:o.error.message,[c,l]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(r,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw js(r,"email-already-in-use",o);if(c==="USER_DISABLED")throw js(r,"user-disabled",o);const d=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xc(r,d,l);Et(r,d)}}catch(i){if(i instanceof jt)throw i;Et(r,"network-request-failed",{message:String(i)})}}async function ia(r,e,t,n,i={}){const s=await qt(r,e,t,n,i);return"mfaPendingCredential"in s&&Et(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function ym(r,e,t,n){const i=`${e}${t}?${n}`,s=r,o=s.config.emulator?Jc(r.config,i):`${r.config.apiScheme}://${i}`;return fA.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function _A(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Rt(this.auth,"network-request-failed")),pA.get())})}}function js(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Rt(r,e,n);return i.customData._tokenResponse=t,i}function Ud(r){return r!==void 0&&r.enterprise!==void 0}class gA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _A(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yA(r,e){return qt(r,"GET","/v2/recaptchaConfig",jn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(r,e){return qt(r,"POST","/v1/accounts:delete",e)}async function Po(r,e){return qt(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TA(r,e=!1){const t=ae(r),n=await t.getIdToken(e),i=Zc(n);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Ui(Za(i.auth_time)),issuedAtTime:Ui(Za(i.iat)),expirationTime:Ui(Za(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Za(r){return Number(r)*1e3}function Zc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=np(t);return i?JSON.parse(i):(Zs("Failed to decode base64 JWT payload"),null)}catch(i){return Zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fd(r){const e=Zc(r);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof jt&&EA(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function EA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Jr(r,Po(t,{idToken:n}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vm(s.providerUserInfo):[],u=AA(r.providerData,o),c=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(u!=null&&u.length),d=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function IA(r){const e=ae(r);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AA(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function vm(r){return r.map(e=>{var{providerId:t}=e,n=qu(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(r,e){const t=await gm(r,{},async()=>{const n=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await ym(r,i,"/v1/token",`key=${s}`),u=await r._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:n};return r.emulatorConfig&&Fn(r.emulatorConfig.host)&&(c.credentials="include"),mm.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bA(r,e){return qt(r,"POST","/v2/accounts:revokeToken",jn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Fd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await RA(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Fr;return n&&(z(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(r,e){z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=qu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TA(this,e)}reload(){return IA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Co(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await Jr(this,vA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,u,c,l,d;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(u=t.tenantId)!==null&&u!==void 0?u:void 0,R=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=t.createdAt)!==null&&l!==void 0?l:void 0,C=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:N,isAnonymous:V,providerData:L,stsTokenManager:E}=t;z(k&&E,e,"internal-error");const g=Fr.fromJSON(this.name,E);z(typeof k=="string",e,"internal-error"),hn(p,e.name),hn(_,e.name),z(typeof N=="boolean",e,"internal-error"),z(typeof V=="boolean",e,"internal-error"),hn(v,e.name),hn(I,e.name),hn(T,e.name),hn(R,e.name),hn(D,e.name),hn(C,e.name);const y=new At({uid:k,auth:e,email:_,emailVerified:N,displayName:p,isAnonymous:V,photoURL:I,phoneNumber:v,tenantId:T,stsTokenManager:g,createdAt:D,lastLoginAt:C});return L&&Array.isArray(L)&&(y.providerData=L.map(A=>Object.assign({},A))),R&&(y._redirectEventId=R),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new Fr;i.updateFromServerResponse(t);const s=new At({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Co(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vm(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Fr;u.updateFromIdToken(n);const c=new At({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function Xt(r){on(r instanceof Function,"Expected a class definition");let e=Bd.get(r);return e?(on(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Bd.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tm.type="NONE";const zd=Tm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(r,e,t){return`firebase:${r}:${e}:${t}`}class Br{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=eo(this.userKey,i.apiKey,s),this.fullPersistenceKey=eo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?At._fromGetAccountInfoResponse(this.auth,t,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Br(Xt(zd),e,n);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Xt(zd);const o=eo(n,e.config.apiKey,e.name);let u=null;for(const l of t)try{const d=await l._get(o);if(d){let p;if(typeof d=="string"){const _=await Po(e,{idToken:d}).catch(()=>{});if(!_)break;p=await At._fromGetAccountInfoResponse(e,_,d)}else p=At._fromJSON(e,d);l!==s&&(u=p),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Br(s,e,n):(s=c[0],u&&await s._set(o,u.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Br(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Am(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Em(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bm(e))return"Blackberry";if(Sm(e))return"Webos";if(wm(e))return"Safari";if((e.includes("chrome/")||Im(e))&&!e.includes("edge/"))return"Chrome";if(Rm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Em(r=He()){return/firefox\//i.test(r)}function wm(r=He()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Im(r=He()){return/crios\//i.test(r)}function Am(r=He()){return/iemobile/i.test(r)}function Rm(r=He()){return/android/i.test(r)}function bm(r=He()){return/blackberry/i.test(r)}function Sm(r=He()){return/webos/i.test(r)}function el(r=He()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function SA(r=He()){var e;return el(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PA(){return uv()&&document.documentMode===10}function Pm(r=He()){return el(r)||Rm(r)||Sm(r)||bm(r)||/windows phone/i.test(r)||Am(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(r,e=[]){let t;switch(r){case"Browser":t=jd(He());break;case"Worker":t=`${jd(He())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,u)=>{try{const c=e(s);o(c)}catch(c){u(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(r,e={}){return qt(r,"GET","/v2/passwordPolicy",jn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=6;class OA{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:DA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new CA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xt(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),n=await At._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(bn(this));const t=e?ae(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kA(this),t=new OA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await bA(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[Xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(u,this,"internal-error"),u.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&aA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Er(r){return ae(r)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=mv(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VA(r){sa=r}function km(r){return sa.loadJS(r)}function xA(){return sa.recaptchaEnterpriseScript}function MA(){return sa.gapiScript}function LA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class UA{constructor(){this.enterprise=new FA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const BA="recaptcha-enterprise",Dm="NO_RECAPTCHA";class zA{constructor(e){this.type=BA,this.auth=Er(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,u)=>{yA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const l=new gA(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{u(c)})})}function i(s,o,u){const c=window.grecaptcha;Ud(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Dm)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(u=>{if(!t&&Ud(window.grecaptcha))i(u,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xA();c.length!==0&&(c+=u),km(c).then(()=>{i(u,s,o)}).catch(l=>{o(l)})}}).catch(u=>{o(u)})})}}async function $d(r,e,t,n=!1,i=!1){const s=new zA(r);let o;if(i)o=Dm;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const c=u.phoneEnrollmentInfo.phoneNumber,l=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return n?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Bu(r,e,t,n,i){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await $d(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await $d(r,e,t,t==="getOobCode");return n(r,u)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(r,e){const t=Lo(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(ur(s,e??{}))return i;Et(i,"already-initialized")}return t.initialize({options:e})}function qA(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Xt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function $A(r,e,t){const n=Er(r);z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=Om(e),{host:o,port:u}=HA(e),c=u===null?"":`:${u}`,l={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(ur(l,n.config.emulator)&&ur(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,Fn(o)?(uc(`${s}//${o}${c}`),cc("Auth",!0)):WA()}function Om(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function HA(r){const e=Om(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Hd(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Hd(o)}}}function Hd(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function WA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,t){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}async function GA(r,e){return qt(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(r,e){return ia(r,"POST","/v1/accounts:signInWithPassword",jn(r,e))}async function QA(r,e){return qt(r,"POST","/v1/accounts:sendOobCode",jn(r,e))}async function XA(r,e){return QA(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(r,e){return ia(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,e))}async function JA(r,e){return ia(r,"POST","/v1/accounts:signInWithEmailLink",jn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends tl{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new es(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new es(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,t,"signInWithPassword",KA);case"emailLink":return YA(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,n,"signUpPassword",GA);case"emailLink":return JA(e,{idToken:t,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(r,e){return ia(r,"POST","/v1/accounts:signInWithIdp",jn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="http://localhost";class fr extends tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=qu(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new fr(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:ZA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tR(r){const e=Ii(Ai(r)).link,t=e?Ii(Ai(e)).deep_link_id:null,n=Ii(Ai(r)).deep_link_id;return(n?Ii(Ai(n)).link:null)||n||t||e||r}class oa{constructor(e){var t,n,i,s,o,u;const c=Ii(Ai(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(n=c.oobCode)!==null&&n!==void 0?n:null,p=eR((i=c.mode)!==null&&i!==void 0?i:null);z(l&&d&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=tR(e);try{return new oa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,t){return es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=oa.parseLink(t);return z(n,"argument-error"),es._fromEmailAndCode(e,n.code,n.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends fs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fr._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kt.credential(t,n)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends fs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends fs{constructor(){super("twitter.com")}static credential(e,t){return fr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _n.credential(t,n)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await At._fromIdTokenResponse(e,n,i),o=Wd(n);return new Zr({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Wd(n);return new Zr({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Wd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends jt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new ko(e,t,n,i)}}function Nm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(r,s,e,n):s})}async function nR(r,e,t=!1){const n=await Jr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Zr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rR(r,e,t=!1){const{auth:n}=r;if(ct(n.app))return Promise.reject(bn(n));const i="reauthenticate";try{const s=await Jr(r,Nm(n,i,e,r),t);z(s.idToken,n,"internal-error");const o=Zc(s.idToken);z(o,n,"internal-error");const{sub:u}=o;return z(r.uid===u,n,"user-mismatch"),Zr._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(r,e,t=!1){if(ct(r.app))return Promise.reject(bn(r));const n="signIn",i=await Nm(r,n,e),s=await Zr._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function iR(r,e){return Vm(Er(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(r,e,t){var n;z(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),z(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),z(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(z(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(z(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(r,e,t){const n=Er(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,u){z(u.handleCodeInApp,n,"argument-error"),u&&sR(n,o,u)}s(i,t),await Bu(n,i,"getOobCode",XA)}function aR(r,e){const t=oa.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function uR(r,e,t){if(ct(r.app))return Promise.reject(bn(r));const n=ae(r),i=si.credentialWithLink(e,t||So());return z(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),iR(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(r,e){return qt(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=ae(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Jr(n,cR(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const u=n.providerData.find(({providerId:c})=>c==="password");u&&(u.displayName=n.displayName,u.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function hR(r,e,t,n){return ae(r).onIdTokenChanged(e,t,n)}function dR(r,e,t){return ae(r).beforeAuthStateChanged(e,t)}function fR(r,e,t,n){return ae(r).onAuthStateChanged(e,t,n)}function xm(r){return ae(r).signOut()}const Do="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=1e3,_R=10;class Lm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,u,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);PA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_R):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lm.type="LOCAL";const mR=Lm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Um.type="SESSION";const Fm=Um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new aa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(o).map(async l=>l(t.origin,s)),c=await gR(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((u,c)=>{const l=rl("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(_.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function vR(r){Ut().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function TR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ER(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function wR(){return Bm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="firebaseLocalStorageDb",IR=1,Oo="firebaseLocalStorage",jm="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ua(r,e){return r.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function AR(){const r=indexedDB.deleteDatabase(zm);return new ps(r).toPromise()}function zu(){const r=indexedDB.open(zm,IR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Oo,{keyPath:jm})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Oo)?e(n):(n.close(),await AR(),e(await zu()))})})}async function Gd(r,e,t){const n=ua(r,!0).put({[jm]:e,value:t});return new ps(n).toPromise()}async function RR(r,e){const t=ua(r,!1).get(e),n=await new ps(t).toPromise();return n===void 0?null:n.value}function Kd(r,e){const t=ua(r,!0).delete(e);return new ps(t).toPromise()}const bR=800,SR=3;class qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>SR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=aa._getInstance(wR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TR(),!this.activeServiceWorker)return;this.sender=new yR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ER()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await Gd(e,Do,"1"),await Kd(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>RR(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ua(i,!1).getAll();return new ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qm.type="LOCAL";const PR=qm;new ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(r,e){return e?Xt(e):(z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CR(r){return Vm(r.auth,new il(r),r.bypassAuthState)}function kR(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),rR(t,new il(r),r.bypassAuthState)}async function DR(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),nR(t,new il(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:u}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return kR;default:Et(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new ds(2e3,1e4);async function NR(r,e,t){if(ct(r.app))return Promise.reject(Rt(r,"operation-not-supported-in-this-environment"));const n=Er(r);uA(r,e,nl);const i=$m(n,t);return new tr(n,"signInViaPopup",e,i).executeNotNull()}class tr extends Hm{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OR.get())};e()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="pendingRedirect",to=new Map;class xR extends Hm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const n=await MR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MR(r,e){const t=FR(e),n=UR(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function LR(r,e){to.set(r._key(),e)}function UR(r){return Xt(r._redirectPersistence)}function FR(r){return eo(VR,r.config.apiKey,r.name)}async function BR(r,e,t=!1){if(ct(r.app))return Promise.reject(bn(r));const n=Er(r),i=$m(n,e),o=await new xR(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=600*1e3;class jR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qd(e))}saveEventToCache(e){this.cachedEventUids.add(Qd(e)),this.lastProcessedEventTime=Date.now()}}function Qd(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Wm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(r,e={}){return qt(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WR=/^https?/;async function GR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await $R(r);for(const t of e)try{if(KR(t))return}catch{}Et(r,"unauthorized-domain")}function KR(r){const e=So(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!WR.test(t))return!1;if(HR.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new ds(3e4,6e4);function Xd(){const r=Ut().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function XR(r){return new Promise((e,t)=>{var n,i,s;function o(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),t(Rt(r,"network-request-failed"))},timeout:QR.get()})}if(!((i=(n=Ut().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const u=LA("iframefcb");return Ut()[u]=()=>{gapi.load?o():t(Rt(r,"network-request-failed"))},km(`${MA()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw no=null,e})}let no=null;function YR(r){return no=no||XR(r),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new ds(5e3,15e3),ZR="__/auth/iframe",eb="emulator/auth/iframe",tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rb(r){const e=r.config;z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Jc(e,eb):`https://${r.config.authDomain}/${ZR}`,n={apiKey:e.apiKey,appName:r.name,v:mr},i=nb.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${rs(n).slice(1)}`}async function ib(r){const e=await YR(r),t=Ut().gapi;return z(t,r,"internal-error"),e.open({where:document.body,url:rb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tb,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Rt(r,"network-request-failed"),u=Ut().setTimeout(()=>{s(o)},JR.get());function c(){Ut().clearTimeout(u),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ob=500,ab=600,ub="_blank",cb="http://localhost";class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lb(r,e,t,n=ob,i=ab){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const c=Object.assign(Object.assign({},sb),{width:n.toString(),height:i.toString(),top:s,left:o}),l=He().toLowerCase();t&&(u=Im(l)?ub:t),Em(l)&&(e=e||cb,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[v,I])=>`${_}${v}=${I},`,"");if(SA(l)&&u!=="_self")return hb(e||"",u),new Yd(null);const p=window.open(e||"",u,d);z(p,r,"popup-blocked");try{p.focus()}catch{}return new Yd(p)}function hb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function Jd(r,e,t,n,i,s){z(r.config.authDomain,r,"auth-domain-config-required"),z(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:mr,eventId:i};if(e instanceof nl){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",_v(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof fs){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const u=o;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const c=await r._getAppCheckToken(),l=c?`#${pb}=${encodeURIComponent(c)}`:"";return`${_b(r)}?${rs(u).slice(1)}${l}`}function _b({config:r}){return r.emulator?Jc(r,fb):`https://${r.authDomain}/${db}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="webStorageSupport";class mb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=BR,this._overrideRedirectResult=LR}async _openPopup(e,t,n,i){var s;on((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jd(e,t,n,So(),i);return lb(e,o,rl())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Jd(e,t,n,So(),i);return vR(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ib(e),n=new jR(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eu,{type:eu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[eu];o!==void 0&&t(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pm()||wm()||el()}}const gb=mb;var Zd="@firebase/auth",ef="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tb(r){cr(new kn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=n.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cm(r)},l=new NA(n,i,s,c);return qA(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cr(new kn("auth-internal",e=>{const t=Er(e.getProvider("auth").getImmediate());return(n=>new yb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Zd,ef,vb(r)),Nt(Zd,ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=300,wb=op("authIdTokenMaxAge")||Eb;let tf=null;const Ib=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>wb)return;const i=t==null?void 0:t.token;tf!==i&&(tf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ab(r=dc()){const e=Lo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=jA(r,{popupRedirectResolver:gb,persistence:[PR,mR,Fm]}),n=op("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=Ib(s.toString());dR(t,o,()=>o(t.currentUser)),hR(t,u=>o(u))}}const i=rp("auth");return i&&$A(t,`http://${i}`),t}function Rb(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}VA({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Rt("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Rb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tb("Browser");const bb={apiKey:"demo",authDomain:"seashepherd-oceanclean.firebaseapp.com",databaseURL:"https://seashepherd-oceanclean-default-rtdb.firebaseio.com",projectId:"seashepherd-oceanclean",storageBucket:"seashepherd-oceanclean.appspot.com"},Sb={contentType:"image/png"},sl=lp(bb),Gm=jE(sl),pr=j0(sl),Yt=Ab(sl),Pb=new Kt,Cb=async function(r,e,t){try{const n=Op(Gm,`images/${r}/${e}/${t.name}`),i=await FE(n,t,Sb);return await BE(i.ref)}catch{return"error"}},kb=function(r,e,t){const n=Op(Gm,`images/${r}/${e}/${t}`);zE(n).then(()=>{})},Db=async function(r,e){const t=ls(pr,r,e);await nA(t)},Ob=async function(r,e,t){const n=ls(pr,r,e);await tA(n,t)},Nb=async function(r,e,t){const n=ls(pr,r,e);return await eA(n,t)},Vb=async function(r,e){if(e){const n=ls(pr,r,e);return(await J0(n)).data()}return(await Z0(z0(pr,r))).docs.map(n=>n.data())},xb=async function(...r){const e=sA(pr);r.forEach(({method:t,table:n,id:i,obj:s})=>{const o=ls(pr,n,i);t==="post"?e.set(o,s):t==="patch"?e.update(o,s):t==="delete"&&e.delete(o)}),await e.commit()},Mb={url:"https://vonovo123.github.io/SeaShepherd_OceanClean",handleCodeInApp:!0},Wb=async function(r,e){try{await oR(Yt,r,Mb),window.localStorage.setItem("emailForSignIn",r),window.localStorage.setItem("nameForSignIn",e)}catch{throw new Error("인증 이메일 발신에 실패했습니다.<br/>잠시후 다시 시도해주세요.")}},Lb=async function(){try{if(aR(Yt,window.location.href)){const r=window.localStorage.getItem("nameForSignIn"),e=window.localStorage.getItem("emailForSignIn");return await uR(Yt,e,window.location.href),Yt.currentUser&&await lR(Yt.currentUser,{displayName:r}),!0}return!1}catch{throw new Error("이메일 인증에 실패했습니다.<br/>잠시후 다시 시도해주세요.")}},Ub=function(){return new Promise(r=>{fR(Yt,e=>{r(e)})})},Fb=function(){return xm(Yt)},Bb=async function(){const r=await NR(Yt,Pb);return{fullName:r.user.displayName||"",mail:r.user.email||""}},zb=async function(){await xm(Yt)},Gb=nf("auth",()=>{const r=qs({isAuth:!1,fullName:"",mail:"",type:""});function e({fullName:u,mail:c,isAuth:l,type:d}){r.value={fullName:u,mail:c,isAuth:l,type:d}}async function t(){return await Lb()}async function n(){const u=await Ub();u&&e({fullName:u.displayName||"",mail:u.email||"",isAuth:!0,type:"dir"})}async function i(){const u=await Bb();e({fullName:u.fullName,mail:u.mail,isAuth:!0,type:"gmail"})}async function s(){await zb(),e({fullName:"",mail:"",isAuth:!1,type:""})}async function o(){await Fb(),e({fullName:"",mail:"",isAuth:!1,type:""})}return{authInfo:r,setAuthInfo:e,checkDirAuthLink:t,loadDirAuthClient:n,googleSignIn:i,googleSignOut:s,emailSignOut:o}}),jb=async(r,{method:e,table:t,id:n,obj:i})=>{try{if(e==="get")return await Vb(t,n);if(e==="post")return await Nb(t,n,i);if(e==="patch")return await Ob(t,n,i);if(e==="delete")return await Db(t,n)}catch{throw new ju("서버에러입니다 <br/> 잠시후 다시 시도해주세요.","critical","firebase")}},qb=async(...r)=>{try{await xb(...r)}catch{throw new ju("서버에러입니다<br/>잠시후 다시 시도해주세요.","critical","firebase")}},tu={fetch:(r,e)=>jb(r,e),transactionFetchData:(...r)=>qb(...r)},Kb=nf("cleanEvent",()=>{const r=qs([]),e=qs(null),t=qs("");async function n(){const c=await tu.fetch("getEventMarkers",{method:"get",table:"markers"});r.value=c||[]}async function i(c){const l=await tu.fetch("getCleanEvent",{method:"get",table:"events",id:c});if(!l)throw new Error("noData");return e.value=l,l}function s(c){e.value=c}function o(c){t.value=c}async function u(c){let l=[];const d=[...c.photos];delete c.photos;try{const p=d.filter(Boolean).map(_=>Cb(c.date.from,c.userInfo.email,_));if(l=await Promise.all(p),l.includes("error"))throw new ju("파일업로드에 실패했습니다. <br/> 잠시후 다시 시도바랍니다.","critical","storageUpload");return await tu.transactionFetchData({method:"post",table:"events",id:c.id,obj:{...c,photoUrl:l}},{method:"post",table:"markers",id:c.id,obj:{id:c.id,position:c.position,scale:c.scale}}),{photoUrl:l}}catch(p){const _=d.map((v,I)=>v&&l[I]!=="error"?kb(c.date.from,c.userInfo.email,v.name):null);throw await Promise.all(_.filter(Boolean)),p}}return{eventMarkers:r,eventDetail:e,mapSnapshot:t,getEventMarkers:n,getCleanEvent:i,setEventDetail:s,setMapSnapshot:o,setCleanEvent:u}});function Qb(){var e;const r="demo";return(e=window.google)!=null&&e.maps?Promise.resolve(window.google.maps):(window.__googleMapsLoading||(window.__googleMapsLoading=new Promise((t,n)=>{const i=document.createElement("script");i.src=`https://maps.googleapis.com/maps/api/js?key=${r}`,i.async=!0,i.defer=!0,i.onload=()=>t(window.google.maps),i.onerror=()=>n(new Error("구글 지도 불러오기에 실패했습니다.<br/>잠시후 다시 시도 바랍니다.")),document.head.appendChild(i)})),window.__googleMapsLoading)}function Xb(){return"demo"}export{Kb as a,Xb as b,Hy as g,Qb as l,Wb as s,Gb as u};
