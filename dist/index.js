"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var p=f(function(w,v){
var g=require('@stdlib/assert-is-string/dist').isPrimitive,l=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/utils-parse-json/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),m=require('@stdlib/assert-is-whitespace/dist'),h=require('@stdlib/regexp-eol/dist');function c(e,r){var i,u,a,n,t;if(!g(e))throw new TypeError(o('1uJ3F',e));if(arguments.length>1&&!l(r))throw new TypeError(o('1uJBk',e));if(m(e)||e==="")return[];for(u=h(),a=e.split(u),a[a.length-1].length===0&&a.pop(),n=[],t=0;t<a.length;t++){if(r?i=s(a[t],r):i=s(a[t]),i instanceof Error)return i;n.push(i)}return n}v.exports=c
});var q=p();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
