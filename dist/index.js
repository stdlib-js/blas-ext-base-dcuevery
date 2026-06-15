"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=q(function(G,p){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(e,r,a,u,i,t,n){var d,v,s,o,f;if(e<=0)return i;for(d=g(i,0),v=!0,s=u,o=n,f=0;f<e;f++)v&&!r[s]&&(v=!1),d[o]=v,s+=a,o+=t;return i}p.exports=B
});var j=q(function(H,l){
var x=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(e,r,a,u,i){var t=x(e,a),n=x(e,i);return E(e,r,a,t,u,i,n)}l.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),y,b=A(z(__dirname,"./native.js"));C(b)?y=D:y=b;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
