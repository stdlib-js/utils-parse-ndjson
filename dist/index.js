"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=f(function(w,v){
var g=require('@stdlib/assert-is-string/dist').isPrimitive,l=require('@stdlib/assert-is-function/dist'),s=require('@stdlib/utils-parse-json/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),m=require('@stdlib/assert-is-whitespace/dist'),h=require('@stdlib/regexp-eol/dist');function c(r,e){var a,u,i,n,t;if(!g(r))throw new TypeError(o('1uJ3F',r));if(arguments.length>1&&!l(e))throw new TypeError(o('1uJBk',r));if(m(r)||r==="")return[];for(u=h(),i=r.split(u),i[i.length-1].length===0&&i.pop(),n=[],t=0;t<i.length;t++){if(e?a=s(i[t],e):a=s(i[t]),a instanceof Error)return a;n.push(a)}return n}v.exports=c
});var q=p();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
