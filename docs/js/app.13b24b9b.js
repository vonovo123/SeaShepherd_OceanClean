(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4d50":"e9b17807","chunk-2d222d54":"80a6d3d2","chunk-0853ae49":"0aad2170","chunk-5698458e":"d94a3c87"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-0853ae49":1,"chunk-5698458e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0c4d50":"31d6cfe0","chunk-2d222d54":"31d6cfe0","chunk-0853ae49":"d081227e","chunk-5698458e":"b80c9768"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SeaShepherd_OceanClean/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"27a5":function(e,t,r){},"32e9":function(e,t,r){"use strict";var n=r("d4ec"),a=r("262e"),o=r("2caf"),c=r("9072"),u=(r("b0c0"),function(e){Object(a["a"])(r,e);var t=Object(o["a"])(r);function r(e,a,o){var c;return Object(n["a"])(this,r),c=t.call(this),c.message=e,c.type=a,c.name=o,c}return r}(Object(c["a"])(Error)));t["a"]=u},"34c6":function(e,t,r){"use strict";r("c516")},"399a":function(e,t,r){},4127:function(e,t,r){"use strict";r("27a5")},"43b1":function(e,t,r){"use strict";r("399a")},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"namespaced",(function(){return T})),r.d(n,"state",(function(){return C})),r.d(n,"mutations",(function(){return N})),r.d(n,"getters",(function(){return D})),r.d(n,"actions",(function(){return H}));var a={};r.r(a),r.d(a,"namespaced",(function(){return F})),r.d(a,"state",(function(){return B})),r.d(a,"mutations",(function(){return K})),r.d(a,"getters",(function(){return V})),r.d(a,"actions",(function(){return J}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var o,c=r("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"main"},[r("router-view")],1),r("ErrorMessage",{directives:[{name:"show",rawName:"v-show",value:"critical"!==e.error.type&&e.error.flag,expression:"error.type !== 'critical' && error.flag"}],attrs:{errorMessage:e.error.message}}),r("CriticalErrorMessage",{directives:[{name:"show",rawName:"v-show",value:"critical"===e.error.type&&e.error.flag,expression:"error.type === 'critical' && error.flag"}],attrs:{criticalErrorMessage:e.error.message}})],1)},i=[],s=r("5530"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"errorMessage"},[r("div",{staticClass:"customMessage",domProps:{innerHTML:e._s(e.errorMessageHTML)}})])},p=[],f={data:function(){return{}},props:{errorMessage:String},computed:{errorMessageHTML:function(){var e="<div>".concat(this.errorMessage,"</div>");return e}}},h=f,m=(r("43b1"),r("2877")),d=Object(m["a"])(h,l,p,!1,null,null,null),g=d.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"criticalErrorMessage",on:{click:e.goHome}},[r("div",{staticClass:"customCriticalMessageWrapper"},[r("div",{staticClass:"customCriticalMessage",domProps:{innerHTML:e._s(e.criticalErrorMessageHTML)}}),r("div",[e._v("터치시 처음화면으로 돌아갑니다.")])])])},b=[],w=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),O=r("1da1"),j=(r("96cf"),r("ac1f"),r("5319"),r("2f62")),y=r("2909"),k=r("ade3"),x=(r("159b"),r("caad"),r("2532"),r("b0c0"),r("32e9")),S=r("8c5a"),E=function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=r.method,a=r.table,o=r.id,c=r.obj,e.prev=1,"get"!==n){e.next=8;break}return e.next=5,Object(S["f"])(a,o);case 5:return e.abrupt("return",e.sent);case 8:if("post"!==n){e.next=14;break}return e.next=11,Object(S["h"])(a,o,c);case 11:return e.abrupt("return",e.sent);case 14:if("patch"!==n){e.next=20;break}return e.next=17,Object(S["g"])(a,o,c);case 17:return e.abrupt("return",e.sent);case 20:if("delete"!==n){e.next=24;break}return e.next=23,Object(S["d"])(a,o);case 23:return e.abrupt("return",e.sent);case 24:e.next=29;break;case 26:throw e.prev=26,e.t0=e["catch"](1),new x["a"]("서버에러입니다 <br/> 잠시후 다시 시도해주세요.","critical","firebase");case 29:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S["b"].apply(void 0,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e["catch"](0),new x["a"]("서버에러입니다<br/>잠시후 다시 시도해주세요.","critical","firebase");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),A=E,I={fetch:function(e,t){return A(e,t)},transactionFetchData:function(){return R.apply(void 0,arguments)}},_=I,T=!0,C={eventMarkers:[],eventDetail:"",mapSnapshot:""},M="SET_EVENT_MARKERS",P="SET_EVENT_DETAIL",N=(o={},Object(k["a"])(o,M,(function(e,t){e.eventMarkers=t})),Object(k["a"])(o,P,(function(e,t){e.eventDetail=t})),Object(k["a"])(o,"SET_MAP_SNAPSHOT",(function(e,t){e.mapSnapshot=t})),o),D={EventMarkerData:function(e){return e.eventMarkers},EventDetail:function(e){return e.eventDetail},MapSnapShot:function(e){return e.mapSnapshot}},H={getEventMarkers:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,_.fetch("getEventMarkers",{method:"get",table:"markers"});case 3:n=e.sent,r(M,n);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getCleanEvent:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,_.fetch("getCleanEvent",{method:"get",table:"events",id:r});case 3:if(a=e.sent,a){e.next=6;break}throw new Error("noData");case 6:return n(P,a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),setEventDetail:function(e,t){var r=e.commit;return new Promise((function(e,n){r(P,t),e()}))},setMapSnapshot:function(e,t){var r=e.commit;r("SET_MAP_SNAPSHOT",t)},setCleanEvent:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=[],a=Object(y["a"])(r.photos),delete r.photos,e.prev=4,o=[],a.forEach((function(e){e&&o.push(Object(S["k"])(r.date.from,r.userInfo.email,e))})),e.next=9,Promise.all(o);case 9:if(c=e.sent,n=Object(y["a"])(c),!n.includes("error")){e.next=13;break}throw new x["a"]("파일업로드에 실패했습니다. <br/> 잠시후 다시 시도바랍니다.","critical","storageUpload");case 13:return e.next=15,_.transactionFetchData({method:"post",table:"events",id:r.id,obj:Object(s["a"])(Object(s["a"])({},r),{},{photoUrl:n})},{method:"post",table:"markers",id:r.id,obj:{id:r.id,position:r.position,scale:r.scale}});case 15:return e.abrupt("return",{photoUrl:n});case 18:return e.prev=18,e.t0=e["catch"](4),u=[],a.forEach((function(e,t){"error"!==n[t]&&e&&u.push(Object(S["e"])(r.date.from,r.userInfo.email,e.name))})),e.next=24,Promise.all(u);case 24:case"end":return e.stop()}}),e,null,[[4,18]])})));function t(t,r){return e.apply(this,arguments)}return t}()},L=r("ed18"),U=r.n(L),F=!0;U.a.config({path:"../.env"});var G="AIzaSyCXVH4IUV06E6o_wtJjllitCNf99XT2B8E",B={apiAuthInfo:{apiKey:G,clientId:"819954997763-50ogor1sa12gthhqr0gc1to9th02orvk.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/people/v1/rest"],scope:"https://www.googleapis.com/auth/userinfo.profile"},authInfo:{isAuth:!1,fullName:"",mail:"",type:""}},K={SET_AUTH_INFO:function(e,t){var r=t.fullName,n=t.mail,a=t.isAuth,o=t.type;e.authInfo.fullName=r,e.authInfo.mail=n,e.authInfo.isAuth=a,e.authInfo.type=o}},V={AuthInfo:function(e){return e.authInfo},ApiAuthInfo:function(e){return e.apiAuthInfo}},J={loadGoogleAuthClient:function(){gapi.load("client:auth2",J.initGoogleAuthClient)},loadDirAuthClient:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J.checkDirAuthStatus();case 2:t=e.sent,t&&J.updateDirAuthStatus(t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),initGoogleAuthClient:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.client.init(B.apiAuthInfo);case 2:J.updateGoogleAuthStatus();case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),checkGoogleAuthStatus:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().isSignedIn.get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),updateGoogleAuthStatus:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=gapi.auth2.getAuthInstance().isSignedIn.get(),!t){e.next=6;break}return e.next=4,gapi.client.people.people.get({resourceName:"people/me",personFields:"names,emailAddresses"});case 4:r=e.sent,B.authInfo={fullName:r.result.names[0].displayName,mail:r.result.emailAddresses[0].value,isAuth:!0,type:"gmail"};case 6:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),checkDirAuthStatus:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["c"])();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),checkDirAuthLink:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["a"])();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),updateDirAuthStatus:function(e){B.authInfo={fullName:e.displayName,mail:e.email,isAuth:!0,type:"dir"}},setAuthInfo:function(e,t){var r=e.commit;return new Promise((function(e,n){r("SET_AUTH_INFO",t),e()}))},googleSignIn:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().signIn();case 2:return e.next=4,J.updateGoogleAuthStatus();case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),googleSignOut:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().signOut();case 2:B.authInfo={fullName:"",mail:"",isAuth:!1,type:""};case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()};c["a"].use(j["a"]);var $=new j["a"].Store({modules:{cleanEventStore:n,authStore:a},state:{currentPosition:{lat:0,lng:0},currentAddress:"주소가 정확히지 않습니다.",error:{flag:!1,type:"",message:""}},mutations:{SET_CUR_POSITON:function(e,t){c["a"].set(e.currentPosition,"lat",t.lat),c["a"].set(e.currentPosition,"lng",t.lng)},SET_CUR_ADDRESS:function(e,t){e.currentAddress=t},SET_ERROR:function(e,t){e.error={flag:!0,type:t.type,message:t.message},"critical"!==t.type&&setTimeout((function(){e.error={flag:!1,type:"",message:""}}),3e3)},INIT_ERROR:function(e){e.error={flag:!1,type:"",message:""}}},getters:{CurPosition:function(e){return e.currentPosition},getError:function(e){return e.error}},actions:{moveToMaps:function(){z.replace({name:"maps/Main"})},moveToAuth:function(){z.replace({name:"auth/Main"})},moveToRegistEvent:function(){z.push({name:"regist/Main"})},moveToRealHome:function(){z.push({name:"realhome"})},clickCriticError:function(e){var t=e.commit;t("INIT_ERROR"),moveToRealHome()},setError:function(e,t){var r=e.commit,n=t.message,a=t.type;console.log(n),console.log(a);var o="test";r("SET_ERROR",new x["a"](n,a,o))},setCurPosition:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r){e.next=24;break}if(!navigator.geolocation){e.next=21;break}return e.prev=3,a=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},e.next=7,a();case 7:if(o=e.sent,o){e.next=10;break}throw new Error("noAccess");case 10:n("SET_CUR_POSITON",{lat:o.coords.latitude,lng:o.coords.longitude}),e.next=19;break;case 13:throw e.prev=13,e.t0=e["catch"](3),console.log(e.t0.message),c="브라우저가 GPS정보를 제공하지 않습니다.<br/>5.0버전 이상의 Chrome/Safari 브라우저로 이용바랍니다.","noAccess"===e.t0.message&&(c="현재위치정보를 확인 할 수 없습니다."),new Error(c);case 19:e.next=22;break;case 21:throw new Error("브라우저 및 PC의 위치 엑세스를 허용해주세요.");case 22:e.next=25;break;case 24:n("SET_CUR_POSITON",r);case 25:case"end":return e.stop()}}),e,null,[[3,13]])})));function t(t,r){return e.apply(this,arguments)}return t}(),setCurAddress:function(e,t){var r=e.commit;r("SET_CUR_ADDRESS",t)}}});c["a"].use(w["a"]);var q=[{path:"/",name:"realhome",component:function(){return Promise.all([r.e("chunk-2d222d54"),r.e("chunk-5698458e")]).then(r.bind(null,"ea82"))}},{path:"/maps/main",name:"maps/Main",component:function(){return Promise.all([r.e("chunk-2d222d54"),r.e("chunk-0853ae49")]).then(r.bind(null,"3b1e"))}},{path:"/error",name:"/error",component:function(){return r.e("chunk-2d0c4d50").then(r.bind(null,"3d09"))}}],X=new w["a"]({mode:"history",base:"/SeaShepherd_OceanClean/",routes:q});X.beforeEach((function(e,t,r){navigator.onLine?r():(console.log("internetDisconnet"),$.dispatch("setError",{message:"인터넷 연결상태를 확인해주세요.",type:"critical"}))}));var z=X,Q={data:function(){return{}},props:{criticalErrorMessage:String},computed:{criticalErrorMessageHTML:function(){var e="<div>".concat(this.criticalErrorMessage,"</div>");return e}},methods:{goHome:function(){z.push({name:"realhome"}),setTimeout((function(){z.go()}),1e3)}}},W=Q,Y=(r("34c6"),Object(m["a"])(W,v,b,!1,null,null,null)),Z=Y.exports,ee={data:function(){return{errorMessage:"test"}},components:{ErrorMessage:g,CriticalErrorMessage:Z},methods:Object(s["a"])({},Object(j["b"])({loadGoogleAuthClient:"authStore/loadGoogleAuthClient",loadDirAuthClient:"authStore/loadDirAuthClient"})),mounted:function(){},computed:Object(s["a"])({},Object(j["c"])({error:"getError"}))},te=ee,re=(r("4127"),Object(m["a"])(te,u,i,!1,null,null,null)),ne=re.exports,ae=r("f309");c["a"].use(ae["a"]);var oe=new ae["a"]({}),ce=r("ad3d"),ue=r("9062"),ie=r.n(ue);r("e40d");c["a"].component("font-awesome-icon",ce["a"]),c["a"].config.productionTip=!1,c["a"].use(ie.a),new c["a"]({store:$,router:z,vuetify:oe,render:function(e){return e(ne)}}).$mount("#app")},"8c5a":function(e,t,r){"use strict";r.d(t,"k",(function(){return v})),r.d(t,"e",(function(){return b})),r.d(t,"d",(function(){return w})),r.d(t,"g",(function(){return O})),r.d(t,"h",(function(){return j})),r.d(t,"f",(function(){return y})),r.d(t,"b",(function(){return k})),r.d(t,"i",(function(){return S})),r.d(t,"a",(function(){return E})),r.d(t,"c",(function(){return R})),r.d(t,"j",(function(){return A}));var n=r("1da1"),a=(r("96cf"),r("99af"),r("b0c0"),r("d81d"),r("e9c4"),r("d3b7"),r("159b"),r("260b")),o=r("ed18"),c=r.n(o),u=r("588e"),i=r("e71f"),s=r("ea7b");c.a.config({path:"../.env"});var l="AIzaSyA_VDwU58UN1eSHjLSsaKI-LbX8llEnIwQ",p={apiKey:l,authDomain:"seashepherd-oceanclean.firebaseapp.com",databaseURL:"https://seashepherd-oceanclean-default-rtdb.firebaseio.com",projectId:"seashepherd-oceanclean",storageBucket:"seashepherd-oceanclean.appspot.com"},f={contentType:"image/png"},h=Object(a["a"])(p),m=Object(u["c"])(h),d=Object(i["f"])(h),g=Object(s["a"])(h),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(u["d"])(m,"images/".concat(t,"/").concat(r,"/").concat(n.name)),e.next=4,Object(u["e"])(a,n,f);case 4:return o=e.sent,e.next=7,Object(u["b"])(o.ref);case 7:return c=e.sent,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return","error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r,n){return e.apply(this,arguments)}}(),b=function(e,t,r){var n=Object(u["d"])(m,"images/".concat(e,"/").concat(t,"/").concat(r));Object(u["a"])(n).then((function(){}))},w=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(i["c"])(d,t,r),e.next=3,Object(i["b"])(n);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["c"])(d,t,r),e.next=3,Object(i["h"])(a,n);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(i["c"])(d,t,r),e.next=3,Object(i["g"])(a,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return n=Object(i["c"])(d,t,r),e.next=4,Object(i["d"])(n);case 4:return a=e.sent,e.abrupt("return",a.data());case 8:return e.next=10,Object(i["e"])(Object(i["a"])(d,t));case 10:return o=e.sent,c=o.docs.map((function(e){return e.data()})),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a,o,c=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=c.length,r=new Array(t),n=0;n<t;n++)r[n]=c[n];return console.log("batch: ".concat(JSON.stringify(r))),a=Object(i["i"])(d),o=null,r.forEach((function(e){var t=e.method,r=e.table,n=e.id,c=e.obj;o=Object(i["c"])(d,r,n),"post"===t?a.set(o,c):"patch"===t?a.update(o,c):"delete"===t&&a.delete(o,c)})),e.next=7,a.commit();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x={url:"https://vonovo123.github.io/SeaShepherd_OceanClean",handleCodeInApp:!0},S=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,Object(s["d"])(g,t,x),window.localStorage.setItem("emailForSignIn",t),window.localStorage.setItem("nameForSignIn",r),e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),new Error("인증 이메일 발신에 실패했습니다.<br/>잠시후 다시 시도해주세요.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),E=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!Object(s["b"])(g,window.location.href)){e.next=10;break}return t=window.localStorage.getItem("nameForSignIn"),r=window.localStorage.getItem("emailForSignIn"),e.next=6,Object(s["e"])(g,r,window.location.href);case 6:return Object(s["g"])(g.currentUser,{displayName:t}),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e["catch"](0),console.log(e.t0),new Error("이메일 인증에 실패했습니다.<br/>잠시후 다시 시도해주세요.");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),R=function(){return new Promise((function(e,t){Object(s["c"])(g,(function(t){e(t)}))}))},A=function(){Object(s["f"])(g)}},c516:function(e,t,r){}});
//# sourceMappingURL=app.13b24b9b.js.map