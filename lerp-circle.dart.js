(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.jR(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.jS(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.fx(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={fe:function fe(){},
fO:function(a,b,c){if(b.h("B<0>").b(a))return new H.c0(a,b.h("@<0>").w(c).h("c0<1,2>"))
return new H.aP(a,b.h("@<0>").w(c).h("aP<1,2>"))},
n:function(a){return new H.bB("Field '"+a+"' has not been initialized.")},
h4:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fv:function(a,b,c){return a},
cU:function(a,b,c,d){P.ab(b,"start")
if(c!=null){P.ab(c,"end")
if(b>c)H.j(P.ao(b,0,c,"start",null))}return new H.ad(a,b,c,d.h("ad<0>"))},
ix:function(a,b,c,d){if(t.Q.b(a))return new H.bu(a,b,c.h("@<0>").w(d).h("bu<1,2>"))
return new H.aS(a,b,c.h("@<0>").w(d).h("aS<1,2>"))},
h2:function(a,b,c){if(t.Q.b(a)){P.ab(b,"count")
return new H.aZ(a,b,c.h("aZ<0>"))}P.ab(b,"count")
return new H.aq(a,b,c.h("aq<0>"))},
Y:function(){return new P.b2("No element")},
iq:function(){return new P.b2("Too few elements")},
aF:function aF(){},
br:function br(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b){this.a=a
this.$ti=b},
c0:function c0(a,b){this.a=a
this.$ti=b},
bZ:function bZ(){},
R:function R(a,b){this.a=a
this.$ti=b},
bB:function bB(a){this.a=a},
f2:function f2(){},
B:function B(){},
E:function E(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
T:function T(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Q:function Q(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(a){this.$ti=a},
bw:function bw(a){this.$ti=a},
ap:function ap(a,b){this.a=a
this.$ti=b},
cc:function cc(){},
hS:function(a){var s,r=H.hR(a)
if(r!=null)return r
s="minified:"+a
return s},
m:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cp(a)
return s},
ah:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dV:function(a){return H.iA(a)},
iA:function(a){var s,r,q,p
if(a instanceof P.z)return H.V(H.ck(a),null)
if(J.aJ(a)===C.P||t.ak.b(a)){s=C.w(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.V(H.ck(a),null)},
dl:function(a){throw H.b(H.jt(a))},
o:function(a,b){if(a==null)J.t(a)
throw H.b(H.fy(a,b))},
fy:function(a,b){var s,r="index"
if(!H.hr(b))return new P.ak(!0,b,r,null)
s=H.N(J.t(a))
if(b<0||b>=s)return P.fc(b,a,r,null,s)
return P.dW(b,r)},
jt:function(a){return new P.ak(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.cK()
s=new Error()
s.dartException=a
r=H.jT
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
jT:function(){return J.cp(this.dartException)},
j:function(a){throw H.b(a)},
f:function(a){throw H.b(P.aa(a))},
ar:function(a){var s,r,q,p,o,n
a=H.jO(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.e1(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
e2:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
h6:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ff:function(a,b){var s=b==null,r=s?null:b.method
return new H.cI(a,r,s?null:b.receiver)},
aM:function(a){if(a==null)return new H.dT(a)
if(a instanceof H.bx)return H.aL(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.aL(a,a.dartException)
return H.jr(a)},
aL:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jr:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.dK(r,16)&8191)===10)switch(q){case 438:return H.aL(a,H.ff(H.m(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.m(s)+" (Error "+q+")"
return H.aL(a,new H.bN(p,e))}}if(a instanceof TypeError){o=$.hW()
n=$.hX()
m=$.hY()
l=$.hZ()
k=$.i1()
j=$.i2()
i=$.i0()
$.i_()
h=$.i4()
g=$.i3()
f=o.S(s)
if(f!=null)return H.aL(a,H.ff(H.ce(s),f))
else{f=n.S(s)
if(f!=null){f.method="call"
return H.aL(a,H.ff(H.ce(s),f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.ce(s)
return H.aL(a,new H.bN(s,f==null?e:f.method))}}}return H.aL(a,new H.cY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.bS()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.aL(a,new P.ak(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.bS()
return a},
aK:function(a){var s
if(a instanceof H.bx)return a.b
if(a==null)return new H.c5(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.c5(a)},
jH:function(a,b,c,d,e,f){t.Y.a(a)
switch(H.N(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(new P.em("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.jH)
a.$identity=s
return s},
il:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.cS().constructor.prototype):Object.create(new H.aY(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.A()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.fP(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}t.K.a(d)
j.$S=H.ih(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.fP(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ih:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.hE,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.ie:H.id
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
ii:function(a,b,c,d){var s=H.fN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fP:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ik(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ii(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.A()
$.am=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bp
return new Function(p+(o==null?$.bp=H.dB("self"):o)+";return "+n+"."+H.m(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.A()
$.am=p+1
m+=p
p="return function("+m+"){return this."
o=$.bp
return new Function(p+(o==null?$.bp=H.dB("self"):o)+"."+H.m(s)+"("+m+");}")()},
ij:function(a,b,c,d){var s=H.fN,r=H.ig
switch(b?-1:a){case 0:throw H.b(new H.cN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ik:function(a,b){var s,r,q,p,o,n,m,l=$.bp
if(l==null)l=$.bp=H.dB("self")
s=$.fM
if(s==null)s=$.fM=H.dB("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ij(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.m(r)+"(this."+s+");"
n=$.am
if(typeof n!=="number")return n.A()
$.am=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.m(r)+"(this."+s+", "+m+");"
n=$.am
if(typeof n!=="number")return n.A()
$.am=n+1
return new Function(o+n+"}")()},
fx:function(a,b,c,d,e,f,g){return H.il(a,b,c,d,!!e,!!f,g)},
id:function(a,b){return H.de(v.typeUniverse,H.ck(a.a),b)},
ie:function(a,b){return H.de(v.typeUniverse,H.ck(a.c),b)},
fN:function(a){return a.a},
ig:function(a){return a.c},
dB:function(a){var s,r,q,p=new H.aY("self","target","receiver","name"),o=J.dK(Object.getOwnPropertyNames(p),t.W)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.fL("Field name "+a+" not found."))},
cj:function(a){if(a==null)H.ju("boolean expression must not be null")
return a},
ju:function(a){throw H.b(new H.d0(a))},
jR:function(a){throw H.b(new P.cy(a))},
jC:function(a){return v.getIsolateTag(a)},
jS:function(a){return H.j(new H.bB(a))},
kx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jJ:function(a){var s,r,q,p,o,n=H.ce($.hD.$1(a)),m=$.eR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.j1($.hx.$2(a,n))
if(q!=null){m=$.eR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.f0(s)
$.eR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eW[n]=s
return s}if(p==="-"){o=H.f0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.hM(a,s)
if(p==="*")throw H.b(P.h7(n))
if(v.leafTags[n]===true){o=H.f0(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.hM(a,s)},
hM:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
f0:function(a){return J.fD(a,!1,null,!!a.$ik4)},
jL:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.f0(s)
else return J.fD(s,c,null,null)},
jE:function(){if(!0===$.fA)return
$.fA=!0
H.jF()},
jF:function(){var s,r,q,p,o,n,m,l
$.eR=Object.create(null)
$.eW=Object.create(null)
H.jD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hO.$1(o)
if(n!=null){m=H.jL(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jD:function(){var s,r,q,p,o,n,m=C.G()
m=H.bb(C.H,H.bb(C.I,H.bb(C.x,H.bb(C.x,H.bb(C.J,H.bb(C.K,H.bb(C.L(C.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hD=new H.eT(p)
$.hx=new H.eU(o)
$.hO=new H.eV(n)},
bb:function(a,b){return a(b)||b},
is:function(a,b,c,d,e,f){var s=function(g,h){try{return new RegExp(g,h)}catch(r){return r}}(a,""+""+""+""+"")
if(s instanceof RegExp)return s
throw H.b(new P.dI("Illegal RegExp pattern ("+String(s)+")",a))},
jO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cE:function cE(){},
ax:function ax(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bN:function bN(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a){this.a=a},
dT:function dT(a){this.a=a},
bx:function bx(a,b){this.a=a
this.b=b},
c5:function c5(a){this.a=a
this.b=null},
a5:function a5(){},
cV:function cV(){},
cS:function cS(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cN:function cN(a){this.a=a},
d0:function d0(a){this.a=a},
bA:function bA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dM:function dM(a,b){this.a=a
this.b=b
this.c=null},
bD:function bD(a,b){this.a=a
this.$ti=b},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
eV:function eV(a){this.a=a},
cH:function cH(a,b){this.a=a
this.b=b},
eC:function eC(a){this.b=a},
h_:function(a,b){var s=b.c
return s==null?b.c=H.fo(a,b.z,!0):s},
fZ:function(a,b){var s=b.c
return s==null?b.c=H.c9(a,"a7",[b.z]):s},
h0:function(a){var s=a.y
if(s===6||s===7||s===8)return H.h0(a.z)
return s===11||s===12},
iD:function(a){return a.cy},
bd:function(a){return H.eH(v.typeUniverse,a,!1)},
jG:function(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.au(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
au:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.au(a,s,a0,a1)
if(r===s)return b
return H.hj(a,r,!0)
case 7:s=b.z
r=H.au(a,s,a0,a1)
if(r===s)return b
return H.fo(a,r,!0)
case 8:s=b.z
r=H.au(a,s,a0,a1)
if(r===s)return b
return H.hi(a,r,!0)
case 9:q=b.Q
p=H.ci(a,q,a0,a1)
if(p===q)return b
return H.c9(a,b.z,p)
case 10:o=b.z
n=H.au(a,o,a0,a1)
m=b.Q
l=H.ci(a,m,a0,a1)
if(n===o&&l===m)return b
return H.fm(a,n,l)
case 11:k=b.z
j=H.au(a,k,a0,a1)
i=b.Q
h=H.jo(a,i,a0,a1)
if(j===k&&h===i)return b
return H.hh(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ci(a,g,a0,a1)
o=b.z
n=H.au(a,o,a0,a1)
if(f===g&&n===o)return b
return H.fn(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.dz("Attempted to substitute unexpected RTI kind "+c))}},
ci:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.au(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
jp:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.au(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
jo:function(a,b,c,d){var s,r=b.a,q=H.ci(a,r,c,d),p=b.b,o=H.ci(a,p,c,d),n=b.c,m=H.jp(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.d6()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
hB:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.hE(s)
return a.$S()}return null},
hF:function(a,b){var s
if(H.h0(b))if(a instanceof H.a5){s=H.hB(a)
if(s!=null)return s}return H.ck(a)},
ck:function(a){var s
if(a instanceof P.z){s=a.$ti
return s!=null?s:H.fr(a)}if(Array.isArray(a))return H.w(a)
return H.fr(J.aJ(a))},
w:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A:function(a){var s=a.$ti
return s!=null?s:H.fr(a)},
fr:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ja(a,s)},
ja:function(a,b){var s=a instanceof H.a5?a.__proto__.__proto__.constructor:b,r=H.j_(v.typeUniverse,s.name)
b.$ccache=r
return r},
hE:function(a){var s,r,q
H.N(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.eH(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
jy:function(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.dc(a)
q=H.eH(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.dc(q):p},
j9:function(a){var s,r,q,p=this
if(p===t.K)return H.cf(p,a,H.jd)
if(!H.aw(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cf(p,a,H.jg)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hr
else if(r===t.V||r===t.H)q=H.jc
else if(r===t.N)q=H.je
else q=r===t.cJ?H.hp:null
if(q!=null)return H.cf(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.jI)){p.r="$i"+s
return H.cf(p,a,H.jf)}}else if(s===7)return H.cf(p,a,H.j7)
return H.cf(p,a,H.j5)},
cf:function(a,b,c){a.b=c
return a.b(b)},
j8:function(a){var s,r=this,q=H.j4
if(!H.aw(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.j2
else if(r===t.K)q=H.j0
else{s=H.cl(r)
if(s)q=H.j6}r.a=q
return r.a(a)},
fu:function(a){var s,r=a.y
if(!H.aw(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.fu(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
j5:function(a){var s=this
if(a==null)return H.fu(s)
return H.I(v.typeUniverse,H.hF(a,s),null,s,null)},
j7:function(a){if(a==null)return!0
return this.z.b(a)},
jf:function(a){var s,r=this
if(a==null)return H.fu(r)
s=r.r
if(a instanceof P.z)return!!a[s]
return!!J.aJ(a)[s]},
j4:function(a){var s,r=this
if(a==null){s=H.cl(r)
if(s)return a}else if(r.b(a))return a
H.hn(a,r)},
j6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.hn(a,s)},
hn:function(a,b){throw H.b(H.hg(H.h9(a,H.hF(a,b),H.V(b,null))))},
fw:function(a,b,c,d){var s=null
if(H.I(v.typeUniverse,a,s,b,s))return a
throw H.b(H.hg("The type argument '"+H.V(a,s)+"' is not a subtype of the type variable bound '"+H.V(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
h9:function(a,b,c){var s=P.cz(a),r=H.V(b==null?H.ck(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
hg:function(a){return new H.c8("TypeError: "+a)},
U:function(a,b){return new H.c8("TypeError: "+H.h9(a,null,b))},
jd:function(a){return a!=null},
j0:function(a){if(a!=null)return a
throw H.b(H.U(a,"Object"))},
jg:function(a){return!0},
j2:function(a){return a},
hp:function(a){return!0===a||!1===a},
kn:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.U(a,"bool"))},
kp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.U(a,"bool"))},
ko:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.U(a,"bool?"))},
fp:function(a){if(typeof a=="number")return a
throw H.b(H.U(a,"double"))},
kr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.U(a,"double"))},
kq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.U(a,"double?"))},
hr:function(a){return typeof a=="number"&&Math.floor(a)===a},
N:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.U(a,"int"))},
kt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.U(a,"int"))},
ks:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.U(a,"int?"))},
jc:function(a){return typeof a=="number"},
hm:function(a){if(typeof a=="number")return a
throw H.b(H.U(a,"num"))},
kv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.U(a,"num"))},
ku:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.U(a,"num?"))},
je:function(a){return typeof a=="string"},
ce:function(a){if(typeof a=="string")return a
throw H.b(H.U(a,"String"))},
kw:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.U(a,"String"))},
j1:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.U(a,"String?"))},
jl:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.V(a[q],b)
return s},
ho:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.t(a5,"T"+(q+p))
for(o=t.W,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.o(a5,j)
m=C.A.A(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.V(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.V(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.V(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.V(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.V(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
V:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.V(a.z,b)
return s}if(l===7){r=a.z
s=H.V(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.V(a.z,b)+">"
if(l===9){p=H.jq(a.z)
o=a.Q
return o.length!==0?p+("<"+H.jl(o,b)+">"):p}if(l===11)return H.ho(a,b,null)
if(l===12)return H.ho(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.o(b,n)
return b[n]}return"?"},
jq:function(a){var s,r=H.hR(a)
if(r!=null)return r
s="minified:"+a
return s},
hk:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
j_:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.eH(a,b,!1)
else if(typeof m=="number"){s=m
r=H.ca(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.c9(a,b,q)
n[b]=o
return o}else return m},
iY:function(a,b){return H.hl(a.tR,b)},
iX:function(a,b){return H.hl(a.eT,b)},
eH:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.hf(H.hd(a,null,b,c))
r.set(b,s)
return s},
de:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.hf(H.hd(a,b,c,!0))
q.set(c,r)
return r},
iZ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.fm(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aH:function(a,b){b.a=H.j8
b.b=H.j9
return b},
ca:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aH(a,s)
a.eC.set(c,r)
return r},
hj:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.iV(a,b,r,c)
a.eC.set(r,s)
return s},
iV:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aH(a,q)},
fo:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.iU(a,b,r,c)
a.eC.set(r,s)
return s},
iU:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aw(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cl(q.z))return q
else return H.h_(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aH(a,p)},
hi:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.iS(a,b,r,c)
a.eC.set(r,s)
return s},
iS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.c9(a,"a7",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aH(a,q)},
iW:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aH(a,s)
a.eC.set(q,r)
return r},
dd:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
iR:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
c9:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.dd(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aH(a,r)
a.eC.set(p,q)
return q},
fm:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.dd(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aH(a,o)
a.eC.set(q,n)
return n},
hh:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.dd(m)
if(j>0){s=l>0?",":""
r=H.dd(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.iR(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aH(a,o)
a.eC.set(q,r)
return r},
fn:function(a,b,c,d){var s,r=b.cy+("<"+H.dd(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.iT(a,b,c,r,d)
a.eC.set(r,s)
return s},
iT:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.au(a,b,r,0)
m=H.ci(a,c,r,0)
return H.fn(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aH(a,l)},
hd:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hf:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.iM(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.he(a,r,h,g,!1)
else if(q===46)r=H.he(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aG(a.u,a.e,g.pop()))
break
case 94:g.push(H.iW(a.u,g.pop()))
break
case 35:g.push(H.ca(a.u,5,"#"))
break
case 64:g.push(H.ca(a.u,2,"@"))
break
case 126:g.push(H.ca(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.fl(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.c9(p,n,o))
else{m=H.aG(p,a.e,n)
switch(m.y){case 11:g.push(H.fn(p,m,o,a.n))
break
default:g.push(H.fm(p,m,o))
break}}break
case 38:H.iN(a,g)
break
case 42:p=a.u
g.push(H.hj(p,H.aG(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.fo(p,H.aG(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.hi(p,H.aG(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.d6()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.fl(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.hh(p,H.aG(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.fl(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.iP(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aG(a.u,a.e,i)},
iM:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
he:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.hk(s,o.z)[p]
if(n==null)H.j('No "'+p+'" in "'+H.iD(o)+'"')
d.push(H.de(s,o,n))}else d.push(p)
return m},
iN:function(a,b){var s=b.pop()
if(0===s){b.push(H.ca(a.u,1,"0&"))
return}if(1===s){b.push(H.ca(a.u,4,"1&"))
return}throw H.b(P.dz("Unexpected extended operation "+H.m(s)))},
aG:function(a,b,c){if(typeof c=="string")return H.c9(a,c,a.sEA)
else if(typeof c=="number")return H.iO(a,b,c)
else return c},
fl:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aG(a,b,c[s])},
iP:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aG(a,b,c[s])},
iO:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.dz("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.dz("Bad index "+c+" for "+b.i(0)))},
I:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aw(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aw(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.I(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.I(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.I(a,b.z,c,d,e)
if(r===6)return H.I(a,b.z,c,d,e)
return r!==7}if(r===6)return H.I(a,b.z,c,d,e)
if(p===6){s=H.h_(a,d)
return H.I(a,b,c,s,e)}if(r===8){if(!H.I(a,b.z,c,d,e))return!1
return H.I(a,H.fZ(a,b),c,d,e)}if(r===7){s=H.I(a,t.P,c,d,e)
return s&&H.I(a,b.z,c,d,e)}if(p===8){if(H.I(a,b,c,d.z,e))return!0
return H.I(a,b,c,H.fZ(a,d),e)}if(p===7){s=H.I(a,b,c,t.P,e)
return s||H.I(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.I(a,k,c,j,e)||!H.I(a,j,e,k,c))return!1}return H.hq(a,b.z,c,d.z,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return H.hq(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.jb(a,b,c,d,e)}return!1},
hq:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.I(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.I(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
jb:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.I(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.hk(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.I(a,H.de(a,b,l[p]),c,r[p],e))return!1
return!0},
cl:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aw(a))if(r!==7)if(!(r===6&&H.cl(a.z)))s=r===8&&H.cl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jI:function(a){var s
if(!H.aw(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aw:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
hl:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
d6:function d6(){this.c=this.b=this.a=null},
dc:function dc(a){this.a=a},
d5:function d5(){},
c8:function c8(a){this.a=a},
hR:function(a){return v.mangledGlobalNames[a]}},J={
fD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fz:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fA==null){H.jE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.h7("Return interceptor for "+H.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.eA
if(o==null)o=$.eA=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.jJ(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.eA
if(o==null)o=$.eA=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
fR:function(a,b){if(a<0||a>4294967295)throw H.b(P.ao(a,0,4294967295,"length",null))
return J.fT(new Array(a),b)},
fS:function(a,b){if(a<0)throw H.b(P.fL("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.h("r<0>"))},
fT:function(a,b){return J.dK(H.a(a,b.h("r<0>")),b)},
dK:function(a,b){a.fixed$length=Array
return a},
aJ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bz.prototype
return J.cG.prototype}if(typeof a=="string")return J.an.prototype
if(a==null)return J.b0.prototype
if(typeof a=="boolean")return J.cF.prototype
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.z)return a
return J.fz(a)},
a4:function(a){if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.aj.prototype
return a},
jz:function(a){if(typeof a=="number")return J.ay.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.aj.prototype
return a},
av:function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(!(a instanceof P.z))return J.aj.prototype
return a},
W:function(a){if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(a.constructor==Array)return J.r.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.z)return a
return J.fz(a)},
jA:function(a){if(typeof a=="number")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.aj.prototype
return a},
jB:function(a){if(typeof a=="number")return J.ay.prototype
if(typeof a=="string")return J.an.prototype
if(a==null)return a
if(!(a instanceof P.z))return J.aj.prototype
return a},
hC:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.z)return a
return J.fz(a)},
f8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jz(a).A(a,b)},
be:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aJ(a).F(a,b)},
cn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jB(a).v(a,b)},
af:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.av(a).l(a,b)},
fI:function(a,b,c){return J.a4(a).U(a,b,c)},
i5:function(a,b,c,d){return J.hC(a).du(a,b,c,d)},
i6:function(a,b,c,d){return J.hC(a).dH(a,b,c,d)},
i7:function(a,b){return J.a4(a).t(a,b)},
aN:function(a,b){return J.a4(a).D(a,b)},
fJ:function(a,b){return J.a4(a).K(a,b)},
dm:function(a){return J.a4(a).gL(a)},
bf:function(a){return J.aJ(a).gp(a)},
bg:function(a){return J.av(a).gG(a)},
co:function(a){return J.a4(a).gam(a)},
C:function(a){return J.a4(a).gu(a)},
bh:function(a){return J.a4(a).gH(a)},
t:function(a){return J.W(a).gk(a)},
K:function(a,b,c){return J.a4(a).bs(a,b,c)},
fK:function(a,b){return J.a4(a).O(a,b)},
i8:function(a){return J.jA(a).a2(a)},
dn:function(a){return J.a4(a).I(a)},
cp:function(a){return J.aJ(a).i(a)},
a8:function a8(){},
cF:function cF(){},
b0:function b0(){},
aR:function aR(){},
cM:function cM(){},
aj:function aj(){},
az:function az(){},
r:function r(a){this.$ti=a},
dL:function dL(a){this.$ti=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ay:function ay(){},
bz:function bz(){},
cG:function cG(){},
an:function an(){}},P={
iH:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.jv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bc(new P.eh(q),1)).observe(s,{childList:true})
return new P.eg(q,s,r)}else if(self.setImmediate!=null)return P.jw()
return P.jx()},
iI:function(a){self.scheduleImmediate(H.bc(new P.ei(t.M.a(a)),0))},
iJ:function(a){self.setImmediate(H.bc(new P.ej(t.M.a(a)),0))},
iK:function(a){t.M.a(a)
P.iQ(0,a)},
iQ:function(a,b){var s=new P.eF()
s.dl(a,b)
return s},
dj:function(a){return new P.d1(new P.M($.G,a.h("M<0>")),a.h("d1<0>"))},
dh:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
at:function(a,b){P.j3(a,b)},
dg:function(a,b){b.bj(0,a)},
df:function(a,b){b.ci(H.aM(a),H.aK(a))},
j3:function(a,b){var s,r,q=new P.eI(b),p=new P.eJ(b)
if(a instanceof P.M)a.c7(q,p,t.z)
else{s=t.z
if(t.f.b(a))a.bz(q,p,s)
else{r=new P.M($.G,t.c)
r.a=4
r.c=a
r.c7(q,p,s)}}},
dk:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.G.cw(new P.eM(s),t.u,t.S,t.z)},
iL:function(a){return new P.b7(a,1)},
ha:function(){return C.V},
hb:function(a){return new P.b7(a,3)},
hs:function(a,b){return new P.c7(a,b.h("c7<0>"))},
dA:function(a,b){var s=H.fv(a,"error",t.K)
return new P.bo(s,b==null?P.ic(a):b)},
ic:function(a){var s
if(t.C.b(a)){s=a.gb6()
if(s!=null)return s}return C.M},
eq:function(a,b){var s,r,q
for(s=t.c;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.aM()
b.a=a.a
b.c=a.c
P.b6(b,q)}else{q=t.F.a(b.c)
b.a=2
b.c=a
a.c4(q)}},
b6:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.t,r=t.F,q=t.f;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.eK(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.b6(b.a,a)
p.a=m
l=m.a}k=b.a
j=k.c
p.b=o
p.c=j
i=!o
if(i){h=a.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=a.b.b
if(o){h=k.b===g
h=!(h||h)}else h=!1
if(h){s.a(j)
P.eK(c,c,k.b,j.a,j.b)
return}f=$.G
if(f!==g)$.G=g
else f=c
a=a.c
if((a&15)===8)new P.ey(p,b,o).$0()
else if(i){if((a&1)!==0)new P.ex(p,j).$0()}else if((a&2)!==0)new P.ew(b,p).$0()
if(f!=null)$.G=f
a=p.c
if(q.b(a)){k=p.a.$ti
k=k.h("a7<2>").b(a)||!k.Q[1].b(a)}else k=!1
if(k){q.a(a)
e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.aN(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.eq(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.aN(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
jj:function(a,b){var s
if(t.ag.b(a))return b.cw(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw H.b(P.ia(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
ji:function(){var s,r
for(s=$.b9;s!=null;s=$.b9){$.ch=null
r=s.b
$.b9=r
if(r==null)$.cg=null
s.a.$0()}},
jn:function(){$.fs=!0
try{P.ji()}finally{$.ch=null
$.fs=!1
if($.b9!=null)$.fG().$1(P.hy())}},
hv:function(a){var s=new P.d2(a),r=$.cg
if(r==null){$.b9=$.cg=s
if(!$.fs)$.fG().$1(P.hy())}else $.cg=r.b=s},
jm:function(a){var s,r,q,p=$.b9
if(p==null){P.hv(a)
$.ch=$.cg
return}s=new P.d2(a)
r=$.ch
if(r==null){s.b=p
$.b9=$.ch=s}else{q=r.b
s.b=q
$.ch=r.b=s
if(q==null)$.cg=s}},
jP:function(a){var s=null,r=$.G
if(C.f===r){P.ba(s,s,C.f,a)
return}P.ba(s,s,r,t.M.a(r.cf(a)))},
k9:function(a,b){H.fv(a,"stream",t.K)
return new P.da(b.h("da<0>"))},
eK:function(a,b,c,d,e){P.jm(new P.eL(d,e))},
ht:function(a,b,c,d,e){var s,r=$.G
if(r===c)return d.$0()
$.G=c
s=r
try{r=d.$0()
return r}finally{$.G=s}},
hu:function(a,b,c,d,e,f,g){var s,r=$.G
if(r===c)return d.$1(e)
$.G=c
s=r
try{r=d.$1(e)
return r}finally{$.G=s}},
jk:function(a,b,c,d,e,f,g,h,i){var s,r=$.G
if(r===c)return d.$2(e,f)
$.G=c
s=r
try{r=d.$2(e,f)
return r}finally{$.G=s}},
ba:function(a,b,c,d){t.M.a(d)
if(C.f!==c)d=c.cf(d)
P.hv(d)},
eh:function eh(a){this.a=a},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a},
ej:function ej(a){this.a=a},
eF:function eF(){},
eG:function eG(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=!1
this.$ti=b},
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
eM:function eM(a){this.a=a},
b7:function b7(a,b){this.a=a
this.b=b},
b8:function b8(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
c7:function c7(a,b){this.a=a
this.$ti=b},
bo:function bo(a,b){this.a=a
this.b=b},
d3:function d3(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
aV:function aV(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
M:function M(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
en:function en(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a){this.a=a},
ex:function ex(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
d2:function d2(a){this.a=a
this.b=null},
bT:function bT(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
bU:function bU(){},
da:function da(a){this.$ti=a},
cb:function cb(){},
eL:function eL(a,b){this.a=a
this.b=b},
d9:function d9(){},
eD:function eD(a,b){this.a=a
this.b=b},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function(a,b){return new H.bA(a.h("@<0>").w(b).h("bA<1,2>"))},
iu:function(a){return new P.as(a.h("as<0>"))},
iv:function(a){return new P.as(a.h("as<0>"))},
fk:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fj:function(a,b,c){var s=new P.aW(a,b,c.h("aW<0>"))
s.c=a.e
return s},
ip:function(a,b,c){var s,r
if(P.ft(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.t($.a3,a)
try{P.jh(a,s)}finally{if(0>=$.a3.length)return H.o($.a3,-1)
$.a3.pop()}r=P.h3(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fd:function(a,b,c){var s,r
if(P.ft(a))return b+"..."+c
s=new P.cT(b)
C.a.t($.a3,a)
try{r=s
r.a=P.h3(r.a,a,", ")}finally{if(0>=$.a3.length)return H.o($.a3,-1)
$.a3.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ft:function(a){var s,r
for(s=$.a3.length,r=0;r<s;++r)if(a===$.a3[r])return!0
return!1},
jh:function(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.j())return
s=H.m(l.gm())
C.a.t(b,s)
k+=s.length+2;++j}if(!l.j()){if(j<=5)return
if(0>=b.length)return H.o(b,-1)
r=b.pop()
if(0>=b.length)return H.o(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.j()){if(j<=4){C.a.t(b,H.m(p))
return}r=H.m(p)
if(0>=b.length)return H.o(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.j();p=o,o=n){n=l.gm();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.o(b,-1)
k-=b.pop().length+2;--j}C.a.t(b,"...")
return}}q=H.m(p)
r=H.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.t(b,m)
C.a.t(b,q)
C.a.t(b,r)},
fh:function(a,b){var s,r,q=P.iu(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.f)(a),++r)q.t(0,b.a(a[r]))
return q},
fX:function(a){var s,r={}
if(P.ft(a))return"{...}"
s=new P.cT("")
try{C.a.t($.a3,a)
s.a+="{"
r.a=!0
a.cn(0,new P.dP(r,s))
s.a+="}"}finally{if(0>=$.a3.length)return H.o($.a3,-1)
$.a3.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
as:function as(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d7:function d7(a){this.a=a
this.c=this.b=null},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
by:function by(){},
Z:function Z(){},
bG:function bG(){},
dP:function dP(a,b){this.a=a
this.b=b},
b1:function b1(){},
bQ:function bQ(){},
c4:function c4(){},
cd:function cd(){},
im:function(a){if(a instanceof H.a5)return a.i(0)
return"Instance of '"+H.dV(a)+"'"},
fW:function(a,b,c,d){var s,r=c?J.fS(a,d):J.fR(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dO:function(a,b,c){var s,r,q=H.a([],c.h("r<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.f)(a),++r)C.a.t(q,c.a(a[r]))
return J.dK(q,c)},
p:function(a,b,c){var s
if(b)return P.fV(a,c)
s=J.dK(P.fV(a,c),c)
return s},
fV:function(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("r<0>"))
s=H.a([],b.h("r<0>"))
for(r=J.C(a);r.j();)C.a.t(s,r.gm())
return s},
fY:function(a){return new H.cH(a,H.is(a,!1,!0,!1,!1,!1))},
h3:function(a,b,c){var s=J.C(b)
if(!s.j())return a
if(c.length===0){do a+=H.m(s.gm())
while(s.j())}else{a+=H.m(s.gm())
for(;s.j();)a=a+c+H.m(s.gm())}return a},
cz:function(a){if(typeof a=="number"||H.hp(a)||null==a)return J.cp(a)
if(typeof a=="string")return JSON.stringify(a)
return P.im(a)},
dz:function(a){return new P.bn(a)},
fL:function(a){return new P.ak(!1,null,null,a)},
ia:function(a,b,c){return new P.ak(!0,a,b,c)},
dW:function(a,b){return new P.bO(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
iC:function(a,b,c,d){if(a<b||a>c)throw H.b(P.ao(a,b,c,d,null))
return a},
dX:function(a,b,c){if(0>a||a>c)throw H.b(P.ao(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.ao(b,a,c,"end",null))
return b},
ab:function(a,b){if(a<0)throw H.b(P.ao(a,0,null,b,null))
return a},
fc:function(a,b,c,d,e){var s=H.N(e==null?J.t(b):e)
return new P.cD(s,!0,a,c,"Index out of range")},
a9:function(a){return new P.cZ(a)},
h7:function(a){return new P.cX(a)},
ai:function(a){return new P.b2(a)},
aa:function(a){return new P.cx(a)},
D:function D(){},
bn:function bn(a){this.a=a},
cW:function cW(){},
cK:function cK(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cD:function cD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cZ:function cZ(a){this.a=a},
cX:function cX(a){this.a=a},
b2:function b2(a){this.a=a},
cx:function cx(a){this.a=a},
bS:function bS(){},
cy:function cy(a){this.a=a},
em:function em(a){this.a=a},
dI:function dI(a,b){this.a=a
this.b=b},
k:function k(){},
F:function F(){},
L:function L(){},
z:function z(){},
db:function db(){},
cT:function cT(a){this.a=a},
hL:function(a,b,c){H.fw(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
hK:function(a,b,c){H.fw(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
d8:function d8(){this.b=this.a=0},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
iz:function(a){var s=new Path2D(a)
s.toString
return s},
eB:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hc:function(a,b,c,d){var s=W.eB(W.eB(W.eB(W.eB(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
ek:function(a,b,c,d,e){var s=W.hw(new W.el(c),t.B),r=s!=null
if(r&&!0){t.A.a(s)
if(r)J.i5(a,b,s,!1)}return new W.c2(a,b,s,!1,e.h("c2<0>"))},
hw:function(a,b){var s=$.G
if(s===C.f)return a
return s.dT(a,b)},
h:function h(){},
cr:function cr(){},
ct:function ct(){},
aO:function aO(){},
bq:function bq(){},
ag:function ag(){},
dG:function dG(){},
bt:function bt(){},
d:function d(){},
e:function e(){},
S:function S(){},
cC:function cC(){},
a2:function a2(){},
a_:function a_(){},
cL:function cL(){},
cP:function cP(){},
ae:function ae(){},
b5:function b5(){},
ef:function ef(a){this.a=a},
c_:function c_(){},
fb:function fb(a,b){this.a=a
this.$ti=b},
c1:function c1(){},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c2:function c2(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
el:function el(a){this.a=a}},A={P:function P(a,b){this.a=a
this.$ti=b},dJ:function dJ(a){this.a=a},c3:function c3(a,b){this.a=a
this.b=null
this.$ti=b},cO:function cO(){},dY:function dY(a){this.a=a},
fQ:function(a,b){return A.ir(a,b,b)},
ir:function(a,b,c){return P.hs(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$fQ(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.iL(s[m])
case 5:case 3:s.length===n||(0,H.f)(s),++m
q=2
break
case 4:return P.ha()
case 1:return P.hb(o)}}},c)},
aI:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fq:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},L={
h1:function(a){var s=new L.cQ(1,M.fE(),0,a)
s.T()
return s},
h5:function(a,b,c,d,e){var s=new L.bW(d,c,b,a)
s.T()
s.bN(a,b,c,d,e)
return s},
X:function X(){},
cs:function cs(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.r=e
_.x=null},
cR:function cR(){},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
cB:function cB(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
bW:function bW(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.r=d
_.x=null},
bi:function bi(){}},T={dC:function dC(a,b){var _=this
_.c=a
_.d=8
_.f=b
_.r=null},dD:function dD(){},dE:function dE(){}},Z={cq:function cq(){},dp:function dp(a){this.a=a},dq:function dq(a){this.a=a},dr:function dr(a){this.a=a},cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=0
_.r=c
_.x=!1
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.b=_.a=null},bj:function bj(){}},V={
e0:function(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.C(o);o.j();){r=o.gm()
s.push(new V.u(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.C(s);s.j();){q=s.gm()
r.push(new V.u(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.C(r);r.j();){p=r.gm()
q.push(new V.u(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.b3(o,s,a.c,r,a.e)},
iE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.O,d=a.k4,c=V.e0(a.r1),b=a.db
b=b==null?f:J.K(b,new K.aC(),t.G)
if(b==null)b=H.a([],e)
s=t.G
b=P.p(b,!0,s)
r=a.dx
r=r==null?f:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],e):r,!0,s)
q=a.dy
q=q==null?f:J.K(q,new K.aE(),s)
e=P.p(q==null?H.a([],e):q,!0,s)
s=a.x
q=a.y
p=a.gaP()
o=a.gR(a).n()
n=a.gX(a)
m=a.c
if(m===$)m=H.j(H.n("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gB(),j=k.length,i=0;i<k.length;k.length===j||(0,H.f)(k),++i)l.push(k[i].n())
k=a.gY()
j=H.a([],t.l)
for(h=J.C(a.gq(a));h.j();){g=h.gm()
j.push(new M.c(g.a,g.b,g.c))}return new V.bV(a.k3,new M.c(d.a,d.b,d.c),c,f,f,s,q,p,a.Q,!1,a.cx,a.cy,b,r,e,o,n,m,l,k,j)},
i9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.O,d=a.k4,c=V.e0(a.r1),b=a.db
b=b==null?f:J.K(b,new K.aC(),t.G)
if(b==null)b=H.a([],e)
s=t.G
b=P.p(b,!0,s)
r=a.dx
r=r==null?f:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],e):r,!0,s)
q=a.dy
q=q==null?f:J.K(q,new K.aE(),s)
e=P.p(q==null?H.a([],e):q,!0,s)
s=a.x
q=a.y
p=a.gaP()
o=a.gR(a).n()
n=a.gX(a)
m=a.c
if(m===$)m=H.j(H.n("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gB(),j=k.length,i=0;i<k.length;k.length===j||(0,H.f)(k),++i)l.push(k[i].n())
k=a.gY()
j=H.a([],t.l)
for(h=J.C(a.gq(a));h.j();){g=h.gm()
j.push(new M.c(g.a,g.b,g.c))}return new V.bk(a.a9,a.al,a.aa,a.ab,a.aS,a.k3,new M.c(d.a,d.b,d.c),c,f,f,s,q,p,a.Q,!1,a.cx,a.cy,b,r,e,o,n,m,l,k,j)},
fa:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.O,e=a.k4,d=V.e0(a.r1),c=a.db
c=c==null?g:J.K(c,new K.aC(),t.G)
if(c==null)c=H.a([],f)
s=t.G
c=P.p(c,!0,s)
r=a.dx
r=r==null?g:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],f):r,!0,s)
q=a.dy
q=q==null?g:J.K(q,new K.aE(),s)
f=P.p(q==null?H.a([],f):q,!0,s)
s=a.x
q=a.y
p=a.gR(a).n()
o=a.gX(a)
n=a.c
if(n===$)n=H.j(H.n("target"))
n=n==null?g:n.n()
m=H.a([],t.r)
for(l=a.gB(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].n())
l=a.gY()
k=H.a([],t.l)
for(i=J.C(a.gq(a));i.j();){h=i.gm()
k.push(new M.c(h.a,h.b,h.c))}return new V.bs(a.a9,a.al,a.aa,a.ab,a.aS,a.k3,new M.c(e.a,e.b,e.c),d,g,g,s,q,!0,a.Q,!1,a.cx,a.cy,c,r,f,p,o,n,m,l,k)},
fU:function(a,b){var s=null,r=t.O,q=H.a([],r),p=H.a([C.e],r)
r=H.a([],r)
r=new V.bC(0,s,b,a,0.35,C.u,new V.b3(p,r,0,q,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.e,s,s,s,s,s)
r.aJ(C.e,s,s)
r.aH(C.e)
return r},
it:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.O,e=a.k4,d=V.e0(a.r1),c=a.db
c=c==null?g:J.K(c,new K.aC(),t.G)
if(c==null)c=H.a([],f)
s=t.G
c=P.p(c,!0,s)
r=a.dx
r=r==null?g:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],f):r,!0,s)
q=a.dy
q=q==null?g:J.K(q,new K.aE(),s)
f=P.p(q==null?H.a([],f):q,!0,s)
s=a.x
q=a.y
p=a.gR(a).n()
o=a.gX(a)
n=a.c
if(n===$)n=H.j(H.n("target"))
n=n==null?g:n.n()
m=H.a([],t.r)
for(l=a.gB(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].n())
l=a.gY()
k=H.a([],t.l)
for(i=J.C(a.gq(a));i.j();){h=i.gm()
k.push(new M.c(h.a,h.b,h.c))}return new V.bC(a.a9,a.al,a.aa,a.ab,a.k3,new M.c(e.a,e.b,e.c),d,g,g,s,q,a.z,a.Q,!1,a.cx,a.cy,c,r,f,p,o,n,m,l,k)},
b3:function b3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.ch=j
_.cx=k
_.cy=l
_.db=m
_.dx=n
_.dy=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=null
_.f=a0
_.r=a1},
bk:function bk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a9=a
_.al=b
_.aa=c
_.ab=d
_.aS=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
bs:function bs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.a9=a
_.al=b
_.aa=c
_.ab=d
_.aS=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.a9=a
_.al=b
_.aa=c
_.ab=d
_.k3=e
_.k4=f
_.r1=g
_.r2=h
_.rx=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=o
_.cy=p
_.db=q
_.dx=r
_.dy=s
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=null
_.f=a4
_.r=a5},
u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
iy:function(a){var s,r,q,p,o,n,m=a.gR(a).n(),l=a.gX(a),k=a.c
if(k===$)k=H.j(H.n("target"))
k=k==null?null:k.n()
s=H.a([],t.r)
for(r=a.gB(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].n())
r=a.gY()
q=H.a([],t.l)
for(o=J.C(a.gq(a));o.j();){n=o.gm()
q.push(new M.c(n.a,n.b,n.c))}return new Y.x(m,l,k,s,r,q)},
io:function(a){var s,r,q,p,o,n,m=a.gR(a).n(),l=a.gX(a),k=a.c
if(k===$)k=H.j(H.n("target"))
k=k==null?null:k.n()
s=H.a([],t.r)
for(r=a.gB(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].n())
r=a.gY()
q=H.a([],t.l)
for(o=J.C(a.gq(a));o.j();){n=o.gm()
q.push(new M.c(n.a,n.b,n.c))}return new Y.b_(m,l,k,s,r,q)},
x:function x(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
dS:function dS(a){this.a=a},
dR:function dR(a){this.a=a},
dQ:function dQ(){},
b_:function b_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
a6:function a6(a){this.b=a},
a1:function a1(){},
dH:function dH(){this.a=null},
cJ:function cJ(){},
bK:function bK(a){this.a=a},
bL:function bL(a){this.a=a},
bM:function bM(a){this.a=a},
bJ:function bJ(a){this.a=a},
bI:function bI(a){this.a=a}},K={
iF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.db
d=d==null?e:J.K(d,new K.aC(),t.G)
if(d==null)d=H.a([],t.O)
s=t.G
d=P.p(d,!0,s)
r=a.dx
r=r==null?e:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?e:J.K(q,new K.aE(),s)
s=P.p(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gaP()
n=a.gR(a).n()
m=a.gX(a)
l=a.c
if(l===$)l=H.j(H.n("target"))
l=l==null?e:l.n()
k=H.a([],t.r)
for(j=a.gB(),i=j.length,h=0;h<j.length;j.length===i||(0,H.f)(j),++h)k.push(j[h].n())
j=a.gY()
i=H.a([],t.l)
for(g=J.C(a.gq(a));g.j();){f=g.gm()
i.push(new M.c(f.a,f.b,f.c))}return new K.H(q,p,o,a.Q,!1,a.cx,a.cy,d,r,s,n,m,l,k,j,i)},
iG:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.K(e,new K.aC(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.p(e,!0,s)
r=a.dx
r=r==null?f:J.K(r,new K.aD(),s)
r=P.p(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.K(q,new K.aE(),s)
s=P.p(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.gR(a).n()
n=a.gX(a)
m=a.c
if(m===$)m=H.j(H.n("target"))
m=m==null?f:m.n()
l=H.a([],t.r)
for(k=a.gB(),j=k.length,i=0;i<k.length;k.length===j||(0,H.f)(k),++i)l.push(k[i].n())
k=a.gY()
j=H.a([],t.l)
for(h=J.C(a.gq(a));h.j();){g=h.gm()
j.push(new M.c(g.a,g.b,g.c))}return new K.bX(a.k3,a.k4,q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,m,l,k,j)},
H:function H(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
aC:function aC(){},
aD:function aD(){},
aE:function aE(){},
ec:function ec(){},
ed:function ed(){},
e7:function e7(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
e6:function e6(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
eb:function eb(){},
ea:function ea(){},
d_:function d_(){},
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r}},F={cw:function cw(a){this.e=null
this.b=a
this.d=null},dF:function dF(){},
hA:function(a,b,c){var s,r
if(c){if(!$.di.cj(a)){s=t.S
$.di.U(0,a,P.fg(s,s))}if(!$.di.l(0,a).cj(b)){s=$.di.l(0,a)
s.toString
s.U(0,b,F.hA(a,b,!1))}s=$.di.l(0,a).l(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.aT(B.v(b+1,1,1),1,new F.eP(),s)
return C.c.a6(C.a.aT(B.v(a-b,a,-1),1,new F.eQ(),s),r)},
f1:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
eP:function eP(){},
eQ:function eQ(){},
dN:function(a,b,c){return F.iw(a,b,c,c)},
iw:function(a,b,c,d){return P.hs(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$dN(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.W(s),l=0
case 2:if(!(l<m.gk(s))){p=4
break}k=m.l(s,l)
p=H.cj(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.ha()
case 1:return P.hb(n)}}},d)}},B={
v:function(a,b,c){var s,r=H.a([],t.X)
if(c>0)for(s=b;s<a;s+=c)C.a.t(r,s)
else for(s=b;s>a;s+=c)C.a.t(r,s)
return r},
eS:function(a,b){var s,r,q,p=J.av(a)
if(p.gG(a))return H.a([],b.h("r<y<q,0>>"))
s=H.a([],b.h("r<y<q,0>>"))
for(r=t.dq.w(b).h("y<1,2>"),q=0;q<p.gk(a);++q)C.a.t(s,new S.y(q,p.l(a,q),r))
return s},
hQ:function(a,b){if(a.length===0)return b.a(0)
return C.a.ao(a,new B.f6(b))},
f_:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=B.v(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
if(typeof n!=="number")return n.en()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return S.al(null,l)},
js:function(a,b,c){var s,r,q,p,o=B.v(C.b.dV((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.f)(o),++q){p=o[q]
if(typeof p!=="number")return p.v()
n.push(H.a([p*c+b],r))}return S.al(null,n)},
aX:function(a,b,c){var s,r,q,p,o,n=J.av(a)
if(n.gG(a))return a
s=n.gk(a)
if(s>b)throw H.b("Trying to stretch an array to a length shorter than its own")
r=B.v(b,0,1)
q=H.w(r)
p=q.h("Q<1,l>")
o=new H.Q(r,q.h("l(1)").a(new B.f5(b,s)),p)
q=H.a([],c.h("r<0>"))
for(r=new H.T(o,o.gk(o),p.h("T<E.E>")),p=p.h("E.E");r.j();)q.push(n.l(a,C.b.a2(p.a(r.d))))
return q},
jM:function(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("r<0>"))
for(s=B.v(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.v()
n=C.b.a6(p*o,l)
if(n<0||n>=o)return H.o(a,n)
k.push(a[n])}s=H.a([],d.h("r<0>"))
for(r=B.v(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.f)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.v()
m=C.b.a6(p*n,l)
if(m<0||m>=n)return H.o(b,m)
s.push(b[m])}return new S.y(k,s,c.h("@<i<0>>").w(d.h("i<0>")).h("y<1,2>"))},
fF:function(a,b){var s=F.dN(a,new B.f7(b),b)
return P.p(s,!0,s.$ti.h("k.E"))},
hT:function(a,b){var s=P.p(a,!0,b)
if(0>=s.length)return H.o(s,-1)
s.pop()
return s},
hU:function(a,b){var s,r,q,p=H.a([],b.h("r<0>")),o=P.iv(b)
for(s=H.w(a).h("ap<1>"),r=new H.ap(a,s),r=new H.T(r,r.gk(r),s.h("T<E.E>")),s=s.h("E.E");r.j();){q=s.a(r.d)
if(!o.a8(0,q)){C.a.t(p,q)
o.t(0,q)}}s=b.h("ap<0>")
return P.p(new H.ap(p,s),!0,s.h("E.E"))},
f6:function f6(a){this.a=a},
f5:function f5(a,b){this.a=a
this.b=b},
f7:function f7(a){this.a=a},
fC:function(a,b,c){var s,r,q=t.p,p=B.fB(S.al(null,J.K(a,new B.eX(),q).I(0)),S.al(null,J.K(b,new B.eY(),q).I(0)),c,t.I)
q=p.gN(p)
s=H.w(q)
r=s.h("Q<1,u>")
return P.p(new H.Q(q,s.h("u(1)").a(new B.eZ()),r),!0,r.h("E.E"))},
fB:function(a,b,c,d){return d.a(J.f8(J.cn(a,1-c),J.cn(b,c)))},
hH:function(a,b,c,d){return d.a(J.f8(J.cn(a,1-c),J.cn(b,c)))},
hG:function(a,b,c){if(c>=1)return new S.y(b-1,1,t.d)
if(c<=0)return new S.y(a,0,t.d)
return new S.y(J.i8(B.fB(a,b,c,t.V)),C.b.af((b-a)*c,1),t.d)},
hz:function(a){return new B.eO(a,a.length-1)},
f3:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=a.a,q=J.W(r),p=B.v(q.gk(r),0,1),o=p.length,n=a.$ti.Q[1],m=0;m<p.length;p.length===o||(0,H.f)(p),++m){if(q.gk(r)===0)H.j(H.Y())
s.push(n.a(q.l(r,q.gk(r)-1)))}return s}s=t.l
r=H.a([],s)
for(q=a.a,p=J.W(q),o=B.v(p.gk(q),0,1),n=o.length,l=a.$ti,k=l.h("Z.E"),l=l.h("ad<Z.E>"),m=0;m<o.length;o.length===n||(0,H.f)(o),++m){j=H.N(o[m])
i=new H.ad(a,j,null,l)
i.b9(a,j,null,k)
r.push(B.hz(i.I(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=B.v(p.gk(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,H.f)(q),++m){g=q[m]
if(typeof g!=="number")return g.A()
l=H.N(g+1)
P.dX(0,l,r.length)
k=new H.ad(r,0,l,n)
k.b9(r,0,l,o)
s.push(B.hz(k.I(0)).$1(h))}return s},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
eO:function eO(a,b){this.a=a
this.b=b},
eN:function eN(){}},S={
al:function(a,b){var s,r,q=new S.bl(b)
if(a==null){s=q.gN(q).length
r=q.gN(q).length!==0?J.t(C.a.gL(q.gN(q))):0
a=new S.y(s,r,t.o)
s=a}else s=a
q.sdn(t.o.a(s))
return q},
f9:function(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=B.v(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=H.a([],q)
for(n=B.v(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.f)(n),++l)o.push(a)
j.push(o)}return S.al(b,j)},
ds:function(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.a4(a),r=s.gu(a),q=t.n;r.j();){p=r.gm()
o.push(H.a([p.a,p.b,p.c],q))}return S.al(new S.y(s.gk(a),3,t.o),o)},
ib:function(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=B.v(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=H.a([],q)
for(m=B.v(a,0,1),l=m.length,k=J.aJ(o),j=0;j<m.length;m.length===l||(0,H.f)(m),++j)if(k.F(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return S.al(new S.y(a,a,t.o),i)},
bl:function bl(a){this.a=a
this.b=null},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dv:function dv(a){this.a=a},
du:function du(a,b){this.a=a
this.b=b},
dt:function dt(a){this.a=a},
dy:function dy(a){this.a=a},
y:function y(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b4:function b4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},M={c:function c(a,b,c){this.a=a
this.b=b
this.c=c},ee:function ee(a){this.a=a},
hI:function(a,b,c){return a},
hP:function(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},R={
jK:function(){var s,r,q,p,o=document,n=o.getElementById("lerp-circle")
n.toString
s=H.a([],t.L)
r=new Y.bI(0)
r.b8(0)
o=o.createElement("canvas")
t.gA.a(o)
q=new Z.cv(o,n,s,C.d,C.d,r,C.d,C.d)
q.a=new F.cw($.cm())
n.appendChild(o).toString
p=new R.cu()
p.dj()
p.x=q
p.gE(p).gaC()
p.gE(p).cg(p.gC())
o=p.gC()
o.r=p.gE(p)
o.gE(o).cg(o)
n=o.gE(o)
s=n.gaC()
s.d5(n)
n=n.d.getContext("2d")
n.toString
s.e=n
o.d=o.c/1.7777777777777777
n=o.gE(o).gaC()
s=o.c
r=o.d
n.gM().setTransform(1280/s,0,0,-720/r,640-0/s,360-0/r)
o.gE(o).gaC().bv(o.f)
p.ap()},
cu:function cu(){var _=this
_.a=0
_.x=_.f=_.d=null}},U={
jQ:function(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=B.fB(S.ds(a),S.ds(b),c,t.I)
m=H.a([],t.l)
for(r=s.gN(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){o=r[p]
n=J.av(o)
m.push(new M.c(n.l(o,0),n.l(o,1),n.l(o,2)))}return m}}
var w=[C,H,J,P,W,A,L,T,Z,V,Y,K,F,B,S,M,R,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fe.prototype={}
J.a8.prototype={
F:function(a,b){return a===b},
gp:function(a){return H.ah(a)},
i:function(a){return"Instance of '"+H.dV(a)+"'"}}
J.cF.prototype={
i:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$iJ:1}
J.b0.prototype={
F:function(a,b){return null==b},
i:function(a){return"null"},
gp:function(a){return 0},
$iL:1}
J.aR.prototype={
gp:function(a){return 0},
i:function(a){return String(a)}}
J.cM.prototype={}
J.aj.prototype={}
J.az.prototype={
i:function(a){var s=a[$.hV()]
if(s==null)return this.da(a)
return"JavaScript function for "+J.cp(s)},
$iaQ:1}
J.r.prototype={
t:function(a,b){H.w(a).c.a(b)
if(!!a.fixed$length)H.j(P.a9("add"))
a.push(b)},
e1:function(a,b,c){var s,r
H.w(a).h("k<1>").a(c)
if(!!a.fixed$length)H.j(P.a9("insertAll"))
P.iC(b,0,a.length,"index")
if(!t.Q.b(c))c=J.dn(c)
s=J.t(c)
a.length=a.length+s
r=b+s
this.bJ(a,r,a.length,a,b)
this.cW(a,b,r,c)},
eb:function(a,b){var s
if(!!a.fixed$length)H.j(P.a9("remove"))
for(s=0;s<a.length;++s)if(J.be(a[s],b)){a.splice(s,1)
return!0}return!1},
c5:function(a,b,c){var s,r,q,p,o
H.w(a).h("J(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.cj(b.$1(p)))s.push(p)
if(a.length!==r)throw H.b(P.aa(a))}o=s.length
if(o===r)return
this.sk(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
D:function(a,b){var s
H.w(a).h("k<1>").a(b)
if(!!a.fixed$length)H.j(P.a9("addAll"))
if(Array.isArray(b)){this.dt(a,b)
return}for(s=J.C(b);s.j();)a.push(s.gm())},
dt:function(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.b(P.aa(a))
for(r=0;r<s;++r)a.push(b[r])},
bs:function(a,b,c){var s=H.w(a)
return new H.Q(a,s.w(c).h("1(2)").a(b),s.h("@<1>").w(c).h("Q<1,2>"))},
cr:function(a,b){var s,r=P.fW(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.U(r,s,H.m(a[s]))
return r.join(b)},
e6:function(a){return this.cr(a,"")},
O:function(a,b){return H.cU(a,b,null,H.w(a).c)},
ao:function(a,b){var s,r,q
H.w(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.b(H.Y())
if(0>=s)return H.o(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.b(P.aa(a))}return r},
aT:function(a,b,c,d){var s,r,q
d.a(b)
H.w(a).w(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.b(P.aa(a))}return r},
K:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gL:function(a){if(a.length>0)return a[0]
throw H.b(H.Y())},
gH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.Y())},
bJ:function(a,b,c,d,e){var s,r,q,p,o
H.w(a).h("k<1>").a(d)
if(!!a.immutable$list)H.j(P.a9("setRange"))
P.dX(b,c,a.length)
s=c-b
if(s===0)return
P.ab(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.fK(d,e).a3(0,!1)
q=0}p=J.W(r)
if(q+s>p.gk(r))throw H.b(H.iq())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.l(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.l(r,q+o)},
cW:function(a,b,c,d){return this.bJ(a,b,c,d,0)},
aR:function(a,b){var s,r
H.w(a).h("J(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.cj(b.$1(a[r])))return!1
if(a.length!==s)throw H.b(P.aa(a))}return!0},
a8:function(a,b){var s
for(s=0;s<a.length;++s)if(J.be(a[s],b))return!0
return!1},
gG:function(a){return a.length===0},
gam:function(a){return a.length!==0},
i:function(a){return P.fd(a,"[","]")},
a3:function(a,b){var s=H.a(a.slice(0),H.w(a))
return s},
I:function(a){return this.a3(a,!0)},
gu:function(a){return new J.bm(a,a.length,H.w(a).h("bm<1>"))},
gp:function(a){return H.ah(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.j(P.a9("set length"))
if(b<0)throw H.b(P.ao(b,0,null,"newLength",null))
if(b>a.length)H.w(a).c.a(null)
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.b(H.fy(a,b))
return a[b]},
U:function(a,b,c){H.w(a).c.a(c)
if(!!a.immutable$list)H.j(P.a9("indexed set"))
if(b>=a.length||b<0)throw H.b(H.fy(a,b))
a[b]=c},
$iB:1,
$ik:1,
$ii:1}
J.dL.prototype={}
J.bm.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.f(q))
s=r.c
if(s>=p){r.sbZ(null)
return!1}r.sbZ(q[s]);++r.c
return!0},
sbZ:function(a){this.d=this.$ti.h("1?").a(a)},
$iF:1}
J.ay.prototype={
a2:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.a9(""+a+".toInt()"))},
dV:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.b(P.a9(""+a+".ceil()"))},
bB:function(a,b){var s,r
if(b>20)throw H.b(P.ao(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
A:function(a,b){H.hm(b)
return a+b},
v:function(a,b){return a*b},
af:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
a6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c6(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.c6(a,b)},
c6:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.a9("Result of truncating division is "+H.m(s)+": "+H.m(a)+" ~/ "+b))},
dK:function(a,b){var s
if(a>0)s=this.dJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dJ:function(a,b){return b>31?0:a>>>b},
$il:1,
$iO:1}
J.bz.prototype={$iq:1}
J.cG.prototype={}
J.an.prototype={
A:function(a,b){H.ce(b)
return a+b},
d4:function(a,b,c){if(b<0)throw H.b(P.dW(b,null))
if(b>c)throw H.b(P.dW(b,null))
if(c>a.length)throw H.b(P.dW(c,null))
return a.substring(b,c)},
i:function(a){return a},
gp:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk:function(a){return a.length},
$idU:1,
$ia0:1}
H.aF.prototype={
gu:function(a){var s=H.A(this)
return new H.br(J.C(this.gW()),s.h("@<1>").w(s.Q[1]).h("br<1,2>"))},
gk:function(a){return J.t(this.gW())},
gG:function(a){return J.bg(this.gW())},
gam:function(a){return J.co(this.gW())},
O:function(a,b){var s=H.A(this)
return H.fO(J.fK(this.gW(),b),s.c,s.Q[1])},
gL:function(a){return H.A(this).Q[1].a(J.dm(this.gW()))},
gH:function(a){return H.A(this).Q[1].a(J.bh(this.gW()))},
i:function(a){return J.cp(this.gW())}}
H.br.prototype={
j:function(){return this.a.j()},
gm:function(){return this.$ti.Q[1].a(this.a.gm())},
$iF:1}
H.aP.prototype={
gW:function(){return this.a}}
H.c0.prototype={$iB:1}
H.bZ.prototype={
l:function(a,b){return this.$ti.Q[1].a(J.af(this.a,b))},
U:function(a,b,c){var s=this.$ti
J.fI(this.a,b,s.c.a(s.Q[1].a(c)))},
t:function(a,b){var s=this.$ti
J.i7(this.a,s.c.a(s.Q[1].a(b)))},
D:function(a,b){var s=this.$ti
J.aN(this.a,H.fO(s.h("k<2>").a(b),s.Q[1],s.c))},
$iB:1,
$ii:1}
H.R.prototype={
gW:function(){return this.a}}
H.bB.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.f2.prototype={
$0:function(){var s=new P.M($.G,t.ck)
s.bT(null)
return s},
$S:15}
H.B.prototype={}
H.E.prototype={
gu:function(a){var s=this
return new H.T(s,s.gk(s),H.A(s).h("T<E.E>"))},
gG:function(a){return this.gk(this)===0},
gL:function(a){if(this.gk(this)===0)throw H.b(H.Y())
return this.K(0,0)},
gH:function(a){var s=this
if(s.gk(s)===0)throw H.b(H.Y())
return s.K(0,s.gk(s)-1)},
O:function(a,b){return H.cU(this,b,null,H.A(this).h("E.E"))},
a3:function(a,b){return P.p(this,b,H.A(this).h("E.E"))},
I:function(a){return this.a3(a,!0)}}
H.ad.prototype={
b9:function(a,b,c,d){var s,r=this.b
P.ab(r,"start")
s=this.c
if(s!=null){P.ab(s,"end")
if(r>s)throw H.b(P.ao(r,0,s,"start",null))}},
gdC:function(){var s=J.t(this.a),r=this.c
if(r==null||r>s)return s
return r},
gdL:function(){var s=J.t(this.a),r=this.b
if(r>s)return s
return r},
gk:function(a){var s,r=J.t(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.V()
return s-q},
K:function(a,b){var s=this,r=s.gdL()+b
if(b<0||r>=s.gdC())throw H.b(P.fc(b,s,"index",null,null))
return J.fJ(s.a,r)},
O:function(a,b){var s,r,q=this
P.ab(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.bv(q.$ti.h("bv<1>"))
return H.cU(q.a,s,r,q.$ti.c)},
a3:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.W(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.fS(0,n):J.fR(0,n)}r=P.fW(s,m.K(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.U(r,q,m.K(n,o+q))
if(m.gk(n)<l)throw H.b(P.aa(p))}return r},
I:function(a){return this.a3(a,!0)}}
H.T.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a,p=q.gk(q)
if(r.b!==p)throw H.b(P.aa(q))
s=r.c
if(s>=p){r.saw(null)
return!1}r.saw(q.K(0,s));++r.c
return!0},
saw:function(a){this.d=this.$ti.h("1?").a(a)},
$iF:1}
H.aS.prototype={
gu:function(a){var s=H.A(this)
return new H.bH(J.C(this.a),this.b,s.h("@<1>").w(s.Q[1]).h("bH<1,2>"))},
gk:function(a){return J.t(this.a)},
gG:function(a){return J.bg(this.a)},
gL:function(a){return this.b.$1(J.dm(this.a))},
gH:function(a){return this.b.$1(J.bh(this.a))}}
H.bu.prototype={$iB:1}
H.bH.prototype={
j:function(){var s=this,r=s.b
if(r.j()){s.saw(s.c.$1(r.gm()))
return!0}s.saw(null)
return!1},
gm:function(){return this.$ti.Q[1].a(this.a)},
saw:function(a){this.a=this.$ti.h("2?").a(a)}}
H.Q.prototype={
gk:function(a){return J.t(this.a)},
K:function(a,b){return this.b.$1(J.fJ(this.a,b))}}
H.aU.prototype={
gu:function(a){return new H.bY(J.C(this.a),this.b,this.$ti.h("bY<1>"))}}
H.bY.prototype={
j:function(){var s,r
for(s=this.a,r=this.b;s.j();)if(H.cj(r.$1(s.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.aq.prototype={
O:function(a,b){P.ab(b,"count")
return new H.aq(this.a,this.b+b,H.A(this).h("aq<1>"))},
gu:function(a){return new H.bR(J.C(this.a),this.b,H.A(this).h("bR<1>"))}}
H.aZ.prototype={
gk:function(a){var s=J.t(this.a)-this.b
if(s>=0)return s
return 0},
O:function(a,b){P.ab(b,"count")
return new H.aZ(this.a,this.b+b,this.$ti)},
$iB:1}
H.bR.prototype={
j:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.j()
this.b=0
return s.j()},
gm:function(){return this.a.gm()}}
H.bv.prototype={
gu:function(a){return C.F},
gG:function(a){return!0},
gk:function(a){return 0},
gL:function(a){throw H.b(H.Y())},
gH:function(a){throw H.b(H.Y())},
O:function(a,b){P.ab(b,"count")
return this}}
H.bw.prototype={
j:function(){return!1},
gm:function(){throw H.b(H.Y())},
$iF:1}
H.ap.prototype={
gk:function(a){return J.t(this.a)},
K:function(a,b){var s=this.a,r=J.W(s)
return r.K(s,r.gk(s)-1-b)}}
H.cc.prototype={}
H.cE.prototype={
i:function(a){var s="<"+C.a.cr([H.jy(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+s}}
H.ax.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.jG(H.hB(this.a),this.$ti)}}
H.e1.prototype={
S:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.bN.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.cI.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.cY.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.dT.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bx.prototype={}
H.c5.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaA:1}
H.a5.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.hS(r==null?"unknown":r)+"'"},
$iaQ:1,
gem:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cV.prototype={}
H.cS.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.hS(s)+"'"}}
H.aY.prototype={
F:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.aY))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gp:function(a){var s,r=this.c
if(r==null)s=H.ah(this.a)
else s=typeof r!=="object"?J.bf(r):H.ah(r)
return(s^H.ah(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.dV(t.K.a(s))+"'")}}
H.cN.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.d0.prototype={
i:function(a){return"Assertion failed: "+P.cz(this.a)}}
H.bA.prototype={
gk:function(a){return this.a},
gcs:function(){return new H.bD(this,H.A(this).h("bD<1>"))},
cj:function(a){var s
if((a&0x3ffffff)===a){s=this.c
if(s==null)return!1
return this.dA(s,a)}else return this.e2(a)},
e2:function(a){var s=this.d
if(s==null)return!1
return this.bq(this.bf(s,C.c.gp(a)&0x3ffffff),a)>=0},
l:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aK(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aK(p,b)
q=r==null?n:r.b
return q}else return o.e3(b)},
e3:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bf(q,J.bf(a)&0x3ffffff)
r=this.bq(s,a)
if(r<0)return null
return s[r].b},
U:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.A(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.bP(s==null?m.b=m.bg():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bP(r==null?m.c=m.bg():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bg()
p=J.bf(b)&0x3ffffff
o=m.bf(q,p)
if(o==null)m.bi(q,p,[m.ba(b,c)])
else{n=m.bq(o,b)
if(n>=0)o[n].b=c
else o.push(m.ba(b,c))}}},
cn:function(a,b){var s,r,q=this
H.A(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.b(P.aa(q))
s=s.c}},
bP:function(a,b,c){var s,r=this,q=H.A(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aK(a,b)
if(s==null)r.bi(a,b,r.ba(b,c))
else s.b=c},
ba:function(a,b){var s=this,r=H.A(s),q=new H.dM(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
bq:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.be(a[r].a,b))return r
return-1},
i:function(a){return P.fX(this)},
aK:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
bi:function(a,b,c){a[b]=c},
dB:function(a,b){delete a[b]},
dA:function(a,b){return this.aK(a,b)!=null},
bg:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bi(r,s,r)
this.dB(r,s)
return r}}
H.dM.prototype={}
H.bD.prototype={
gk:function(a){return this.a.a},
gG:function(a){return this.a.a===0},
gu:function(a){var s=this.a,r=new H.bE(s,s.r,this.$ti.h("bE<1>"))
r.c=s.e
return r}}
H.bE.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.aa(q))
s=r.c
if(s==null){r.sbQ(null)
return!1}else{r.sbQ(s.a)
r.c=s.c
return!0}},
sbQ:function(a){this.d=this.$ti.h("1?").a(a)},
$iF:1}
H.eT.prototype={
$1:function(a){return this.a(a)},
$S:32}
H.eU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:41}
H.eV.prototype={
$1:function(a){return this.a(H.ce(a))},
$S:37}
H.cH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
cm:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.eC(s)},
$idU:1}
H.eC.prototype={}
H.ac.prototype={
h:function(a){return H.de(v.typeUniverse,this,a)},
w:function(a){return H.iZ(v.typeUniverse,this,a)}}
H.d6.prototype={}
H.dc.prototype={
i:function(a){return H.V(this.a,null)}}
H.d5.prototype={
i:function(a){return this.a}}
H.c8.prototype={}
P.eh.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
P.eg.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:36}
P.ei.prototype={
$0:function(){this.a.$0()},
$S:8}
P.ej.prototype={
$0:function(){this.a.$0()},
$S:8}
P.eF.prototype={
dl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bc(new P.eG(this,b),0),a)
else throw H.b(P.a9("`setTimeout()` not found."))}}
P.eG.prototype={
$0:function(){this.b.$0()},
$S:0}
P.d1.prototype={
bj:function(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bT(b)
else{s=r.a
if(q.h("a7<1>").b(b))s.bV(b)
else s.bc(q.c.a(b))}},
ci:function(a,b){var s=this.a
if(this.b)s.ah(a,b)
else s.dv(a,b)}}
P.eI.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:29}
P.eJ.prototype={
$2:function(a,b){this.a.$2(1,new H.bx(a,t.k.a(b)))},
$S:24}
P.eM.prototype={
$2:function(a,b){this.a(H.N(a),b)},
$S:23}
P.b7.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.m(this.a)+")"}}
P.b8.prototype={
gm:function(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gm()},
j:function(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("F<1>");!0;){r=m.c
if(r!=null)if(r.j())return!0
else m.sc3(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.b7){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sbS(null)
return!1}if(0>=o.length)return H.o(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.C(r))
if(n instanceof P.b8){r=m.d
if(r==null)r=m.d=[]
C.a.t(r,m.a)
m.a=n.a
continue}else{m.sc3(n)
continue}}}}else{m.sbS(q)
return!0}}return!1},
sbS:function(a){this.b=this.$ti.h("1?").a(a)},
sc3:function(a){this.c=this.$ti.h("F<1>?").a(a)},
$iF:1}
P.c7.prototype={
gu:function(a){return new P.b8(this.a(),this.$ti.h("b8<1>"))}}
P.bo.prototype={
i:function(a){return H.m(this.a)},
$iD:1,
gb6:function(){return this.b}}
P.d3.prototype={
ci:function(a,b){var s
H.fv(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.b(P.ai("Future already completed"))
s.ah(a,b)}}
P.c6.prototype={
bj:function(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if(s.a!==0)throw H.b(P.ai("Future already completed"))
s.bX(r.h("1/").a(b))}}
P.aV.prototype={
e8:function(a){if((this.c&15)!==6)return!0
return this.b.b.bw(t.al.a(this.d),a.a,t.cJ,t.K)},
dY:function(a){var s=this.e,r=t.z,q=t.K,p=a.a,o=this.$ti.h("2/"),n=this.b.b
if(t.ag.b(s))return o.a(n.ee(s,p,a.b,r,q,t.k))
else return o.a(n.bw(t.bI.a(s),p,r,q))}}
P.M.prototype={
bz:function(a,b,c){var s,r,q,p=this.$ti
p.w(c).h("1/(2)").a(a)
s=$.G
if(s!==C.f){c.h("@<0/>").w(p.c).h("1(2)").a(a)
if(b!=null)b=P.jj(b,s)}r=new P.M(s,c.h("M<0>"))
q=b==null?1:3
this.bb(new P.aV(r,q,a,b,p.h("@<1>").w(c).h("aV<1,2>")))
return r},
eh:function(a,b){return this.bz(a,null,b)},
c7:function(a,b,c){var s,r=this.$ti
r.w(c).h("1/(2)").a(a)
s=new P.M($.G,c.h("M<0>"))
this.bb(new P.aV(s,19,a,b,r.h("@<1>").w(c).h("aV<1,2>")))
return s},
bb:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.F.a(r.c)
r.c=a}else{if(q===2){s=t.c.a(r.c)
q=s.a
if(q<4){s.bb(a)
return}r.a=q
r.c=s.c}P.ba(null,null,r.b,t.M.a(new P.en(r,a)))}},
c4:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.c.a(m.c)
s=n.a
if(s<4){n.c4(a)
return}m.a=s
m.c=n.c}l.a=m.aN(a)
P.ba(null,null,m.b,t.M.a(new P.ev(l,m)))}},
aM:function(){var s=t.F.a(this.c)
this.c=null
return this.aN(s)},
aN:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bU:function(a){var s,r,q,p=this
p.a=1
try{a.bz(new P.er(p),new P.es(p),t.P)}catch(q){s=H.aM(q)
r=H.aK(q)
P.jP(new P.et(p,s,r))}},
bX:function(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("a7<1>").b(a))if(q.b(a))P.eq(a,r)
else r.bU(a)
else{s=r.aM()
q.c.a(a)
r.a=4
r.c=a
P.b6(r,s)}},
bc:function(a){var s,r=this
r.$ti.c.a(a)
s=r.aM()
r.a=4
r.c=a
P.b6(r,s)},
ah:function(a,b){var s,r,q=this
t.k.a(b)
s=q.aM()
r=P.dA(a,b)
q.a=8
q.c=r
P.b6(q,s)},
bT:function(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a7<1>").b(a)){this.bV(a)
return}this.dw(s.c.a(a))},
dw:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.ba(null,null,s.b,t.M.a(new P.ep(s,a)))},
bV:function(a){var s=this,r=s.$ti
r.h("a7<1>").a(a)
if(r.b(a)){if(a.a===8){s.a=1
P.ba(null,null,s.b,t.M.a(new P.eu(s,a)))}else P.eq(a,s)
return}s.bU(a)},
dv:function(a,b){this.a=1
P.ba(null,null,this.b,t.M.a(new P.eo(this,a,b)))},
$ia7:1}
P.en.prototype={
$0:function(){P.b6(this.a,this.b)},
$S:0}
P.ev.prototype={
$0:function(){P.b6(this.b,this.a.a)},
$S:0}
P.er.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.bc(p.$ti.c.a(a))}catch(q){s=H.aM(q)
r=H.aK(q)
p.ah(s,r)}},
$S:6}
P.es.prototype={
$2:function(a,b){this.a.ah(t.K.a(a),t.k.a(b))},
$S:21}
P.et.prototype={
$0:function(){this.a.ah(this.b,this.c)},
$S:0}
P.ep.prototype={
$0:function(){this.a.bc(this.b)},
$S:0}
P.eu.prototype={
$0:function(){P.eq(this.b,this.a)},
$S:0}
P.eo.prototype={
$0:function(){this.a.ah(this.b,this.c)},
$S:0}
P.ey.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cB(t.fO.a(q.d),t.z)}catch(p){s=H.aM(p)
r=H.aK(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=P.dA(s,r)
o.b=!0
return}if(l instanceof P.M&&l.a>=4){if(l.a===8){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(t.f.b(l)){n=m.b.a
q=m.a
q.c=l.eh(new P.ez(n),t.z)
q.b=!1}},
$S:0}
P.ez.prototype={
$1:function(a){return this.a},
$S:20}
P.ex.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bw(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.aM(l)
r=H.aK(l)
q=this.a
q.c=P.dA(s,r)
q.b=!0}},
$S:0}
P.ew.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.e8(s)&&p.a.e!=null){p.c=p.a.dY(s)
p.b=!1}}catch(o){r=H.aM(o)
q=H.aK(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.dA(r,q)
n.b=!0}},
$S:0}
P.d2.prototype={}
P.bT.prototype={
gk:function(a){var s,r,q=this,p={},o=new P.M($.G,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.dZ(p,q))
t.g5.a(new P.e_(p,o))
W.ek(q.a,q.b,r,!1,s.c)
return o}}
P.dZ.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.e_.prototype={
$0:function(){this.b.bX(this.a.a)},
$S:0}
P.bU.prototype={}
P.da.prototype={}
P.cb.prototype={$ih8:1}
P.eL.prototype={
$0:function(){var s=t.K.a(H.b(this.a))
s.stack=this.b.i(0)
throw s},
$S:0}
P.d9.prototype={
ef:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.f===$.G){a.$0()
return}P.ht(p,p,this,a,t.u)}catch(q){s=H.aM(q)
r=H.aK(q)
P.eK(p,p,this,t.K.a(s),t.k.a(r))}},
eg:function(a,b,c){var s,r,q,p=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.f===$.G){a.$1(b)
return}P.hu(p,p,this,a,b,t.u,c)}catch(q){s=H.aM(q)
r=H.aK(q)
P.eK(p,p,this,t.K.a(s),t.k.a(r))}},
cf:function(a){return new P.eD(this,t.M.a(a))},
dT:function(a,b){return new P.eE(this,b.h("~(0)").a(a),b)},
cB:function(a,b){b.h("0()").a(a)
if($.G===C.f)return a.$0()
return P.ht(null,null,this,a,b)},
bw:function(a,b,c,d){c.h("@<0>").w(d).h("1(2)").a(a)
d.a(b)
if($.G===C.f)return a.$1(b)
return P.hu(null,null,this,a,b,c,d)},
ee:function(a,b,c,d,e,f){d.h("@<0>").w(e).w(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.G===C.f)return a.$2(b,c)
return P.jk(null,null,this,a,b,c,d,e,f)},
cw:function(a,b,c,d){return b.h("@<0>").w(c).w(d).h("1(2,3)").a(a)}}
P.eD.prototype={
$0:function(){return this.a.ef(this.b)},
$S:0}
P.eE.prototype={
$1:function(a){var s=this.c
return this.a.eg(this.b,s.a(a),s)},
$S:function(){return this.c.h("~(0)")}}
P.as.prototype={
dF:function(){return new P.as(H.A(this).h("as<1>"))},
gu:function(a){var s=this,r=new P.aW(s,s.r,H.A(s).h("aW<1>"))
r.c=s.e
return r},
gk:function(a){return this.a},
gG:function(a){return this.a===0},
gam:function(a){return this.a!==0},
a8:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.dz(b)},
dz:function(a){var s=this.d
if(s==null)return!1
return this.c_(s[this.bY(a)],a)>=0},
gL:function(a){var s=this.e
if(s==null)throw H.b(P.ai("No elements"))
return H.A(this).c.a(s.a)},
gH:function(a){var s=this.f
if(s==null)throw H.b(P.ai("No elements"))
return H.A(this).c.a(s.a)},
t:function(a,b){var s,r,q=this
H.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bR(s==null?q.b=P.fk():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bR(r==null?q.c=P.fk():r,b)}else return q.ds(b)},
ds:function(a){var s,r,q,p=this
H.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.fk()
r=p.bY(a)
q=s[r]
if(q==null)s[r]=[p.bh(a)]
else{if(p.c_(q,a)>=0)return!1
q.push(p.bh(a))}return!0},
bR:function(a,b){H.A(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.bh(b)
return!0},
dE:function(){this.r=this.r+1&1073741823},
bh:function(a){var s,r=this,q=new P.d7(H.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dE()
return q},
bY:function(a){return J.bf(a)&1073741823},
c_:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.be(a[r].a,b))return r
return-1}}
P.d7.prototype={}
P.aW.prototype={
gm:function(){return this.$ti.c.a(this.d)},
j:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.aa(q))
else if(r==null){s.sbW(null)
return!1}else{s.sbW(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sbW:function(a){this.d=this.$ti.h("1?").a(a)},
$iF:1}
P.by.prototype={}
P.Z.prototype={
gu:function(a){var s=this
return new H.T(s,s.gk(s),s.$ti.h("T<Z.E>"))},
K:function(a,b){return this.$ti.Q[1].a(J.af(this.a,b))},
gG:function(a){return J.t(this.a)===0},
gam:function(a){return J.t(this.a)!==0},
gL:function(a){var s=this.a,r=J.W(s)
if(r.gk(s)===0)throw H.b(H.Y())
return this.$ti.Q[1].a(r.l(s,0))},
gH:function(a){var s=this.a,r=J.W(s)
if(r.gk(s)===0)throw H.b(H.Y())
return this.$ti.Q[1].a(r.l(s,r.gk(s)-1))},
aR:function(a,b){var s,r,q,p,o=this.$ti
o.h("J(Z.E)").a(b)
s=this.a
r=J.W(s)
q=r.gk(s)
for(o=o.Q[1],p=0;p<q;++p){if(!H.cj(b.$1(o.a(r.l(s,p)))))return!1
if(q!==r.gk(s))throw H.b(P.aa(this))}return!0},
bs:function(a,b,c){var s=this.$ti
return new H.Q(this,s.w(c).h("1(Z.E)").a(b),s.h("@<Z.E>").w(c).h("Q<1,2>"))},
O:function(a,b){return H.cU(this,b,null,this.$ti.h("Z.E"))},
D:function(a,b){var s,r,q,p,o,n=this.$ti
n.h("k<Z.E>").a(b)
s=this.a
r=J.W(s)
q=r.gk(s)
for(p=J.C(b),o=n.Q[1],n=n.c;p.j();){r.t(s,n.a(o.a(p.gm())));++q}},
i:function(a){return P.fd(this,"[","]")}}
P.bG.prototype={}
P.dP.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.m(a)
r.a=s+": "
r.a+=H.m(b)},
$S:18}
P.b1.prototype={
cn:function(a,b){var s,r,q=H.A(this)
q.h("~(1,2)").a(b)
for(s=this.gcs(),s=s.gu(s),q=q.Q[1];s.j();){r=s.gm()
b.$2(r,q.a(this.l(0,r)))}},
gk:function(a){var s=this.gcs()
return s.gk(s)},
i:function(a){return P.fX(this)},
$ibF:1}
P.bQ.prototype={
gG:function(a){return this.a===0},
gam:function(a){return this.a!==0},
i:function(a){return P.fd(this,"{","}")},
O:function(a,b){return H.h2(this,b,H.A(this).c)},
gL:function(a){var s=P.fj(this,this.r,H.A(this).c)
if(!s.j())throw H.b(H.Y())
return s.$ti.c.a(s.d)},
gH:function(a){var s,r,q=P.fj(this,this.r,H.A(this).c)
if(!q.j())throw H.b(H.Y())
s=q.$ti.c
do r=s.a(q.d)
while(q.j())
return r}}
P.c4.prototype={
e5:function(a,b){var s,r,q,p=this,o=p.dF()
for(s=P.fj(p,p.r,H.A(p).c),r=s.$ti.c;s.j();){q=r.a(s.d)
if(b.a8(0,q))o.t(0,q)}return o},
$iB:1,
$ik:1,
$ibP:1}
P.cd.prototype={}
P.D.prototype={
gb6:function(){return H.aK(this.$thrownJsError)}}
P.bn.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cz(s)
return"Assertion failed"}}
P.cW.prototype={}
P.cK.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbe:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbd:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbe()+o+m
if(!q.a)return l
s=q.gbd()
r=P.cz(q.b)
return l+s+": "+r}}
P.bO.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.m(q):""
else if(q==null)s=": Not greater than or equal to "+H.m(r)
else if(q>r)s=": Not in inclusive range "+H.m(r)+".."+H.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.m(r)
return s}}
P.cD.prototype={
gbe:function(){return"RangeError"},
gbd:function(){if(H.N(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.cZ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cX.prototype={
i:function(a){var s="UnimplementedError: "+this.a
return s}}
P.b2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cx.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cz(s)+"."}}
P.bS.prototype={
i:function(a){return"Stack Overflow"},
gb6:function(){return null},
$iD:1}
P.cy.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.em.prototype={
i:function(a){return"Exception: "+this.a}}
P.dI.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.A.d4(q,0,75)+"..."
return r+"\n"+q}}
P.k.prototype={
bs:function(a,b,c){var s=H.A(this)
return H.ix(this,s.w(c).h("1(k.E)").a(b),s.h("k.E"),c)},
aR:function(a,b){var s
H.A(this).h("J(k.E)").a(b)
for(s=this.gu(this);s.j();)if(!H.cj(b.$1(s.gm())))return!1
return!0},
a3:function(a,b){return P.p(this,b,H.A(this).h("k.E"))},
I:function(a){return this.a3(a,!0)},
gk:function(a){var s,r=this.gu(this)
for(s=0;r.j();)++s
return s},
gG:function(a){return!this.gu(this).j()},
gam:function(a){return!this.gG(this)},
O:function(a,b){return H.h2(this,b,H.A(this).h("k.E"))},
gL:function(a){var s=this.gu(this)
if(!s.j())throw H.b(H.Y())
return s.gm()},
gH:function(a){var s,r=this.gu(this)
if(!r.j())throw H.b(H.Y())
do s=r.gm()
while(r.j())
return s},
K:function(a,b){var s,r,q
P.ab(b,"index")
for(s=this.gu(this),r=0;s.j();){q=s.gm()
if(b===r)return q;++r}throw H.b(P.fc(b,this,"index",null,r))},
i:function(a){return P.ip(this,"(",")")}}
P.F.prototype={}
P.L.prototype={
gp:function(a){return P.z.prototype.gp.call(C.Q,this)},
i:function(a){return"null"}}
P.z.prototype={constructor:P.z,$iz:1,
F:function(a,b){return this===b},
gp:function(a){return H.ah(this)},
i:function(a){return"Instance of '"+H.dV(this)+"'"},
toString:function(){return this.i(this)}}
P.db.prototype={
i:function(a){return""},
$iaA:1}
P.cT.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.h.prototype={}
W.cr.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ct.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.aO.prototype={
sdZ:function(a,b){a.height=b},
sel:function(a,b){a.width=b},
$iaO:1}
W.bq.prototype={
sbo:function(a,b){a.fillStyle=b},
sbL:function(a,b){a.strokeStyle=b},
d2:function(a,b){return a.stroke(b)},
$ibq:1}
W.ag.prototype={
gk:function(a){return a.length}}
W.dG.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bt.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.m(r)+", "
s=a.top
s.toString
s=r+H.m(s)+") "
r=a.width
r.toString
r=s+H.m(r)+" x "
s=a.height
s.toString
return r+H.m(s)},
F:function(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gp:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gp(p)
s=a.top
s.toString
s=C.b.gp(s)
r=a.width
r.toString
r=C.b.gp(r)
q=a.height
q.toString
return W.hc(p,s,r,C.b.gp(q))},
$ifi:1}
W.d.prototype={
i:function(a){var s=a.localName
s.toString
return s},
$id:1}
W.e.prototype={$ie:1}
W.S.prototype={
du:function(a,b,c,d){return a.addEventListener(b,H.bc(t.A.a(c),1),!1)},
dH:function(a,b,c,d){return a.removeEventListener(b,H.bc(t.A.a(c),1),!1)},
$iS:1}
W.cC.prototype={
gk:function(a){return a.length}}
W.a2.prototype={$ia2:1}
W.a_.prototype={
i:function(a){var s=a.nodeValue
return s==null?this.d9(a):s}}
W.cL.prototype={$icL:1}
W.cP.prototype={
gk:function(a){return a.length}}
W.ae.prototype={}
W.b5.prototype={
gdP:function(a){var s=new P.M($.G,t.dL),r=t.c4.a(new W.ef(new P.c6(s,t.g4)))
this.dD(a)
r=W.hw(r,t.H)
r.toString
this.dI(a,r)
return s},
dI:function(a,b){var s=a.requestAnimationFrame(H.bc(t.c4.a(b),1))
s.toString
return s},
dD:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ef.prototype={
$1:function(a){this.a.bj(0,H.hm(a))},
$S:14}
W.c_.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.m(r)+", "
s=a.top
s.toString
s=r+H.m(s)+") "
r=a.width
r.toString
r=s+H.m(r)+" x "
s=a.height
s.toString
return r+H.m(s)},
F:function(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gp:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gp(p)
s=a.top
s.toString
s=C.b.gp(s)
r=a.width
r.toString
r=C.b.gp(r)
q=a.height
q.toString
return W.hc(p,s,r,C.b.gp(q))}}
W.fb.prototype={}
W.c1.prototype={}
W.d4.prototype={}
W.c2.prototype={
dU:function(){var s,r=this,q=r.b
if(q==null)return $.fH()
s=r.d
if(s!=null)J.i6(q,r.c,t.A.a(s),!1)
r.b=null
r.sdG(null)
return $.fH()},
sdG:function(a){this.d=t.A.a(a)}}
W.el.prototype={
$1:function(a){return this.a.$1(t.B.a(a))},
$S:22}
P.d8.prototype={
dk:function(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.c.a1(a-s,k)
r=a>>>0
a=C.c.a1(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.c.a1(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.c.a1(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.c.a1(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.c.a1(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.c.a1(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aL()
l.aL()
l.aL()
l.aL()},
aL:function(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.c.a1(o-n+(q-p)+(m-r),4294967296)>>>0},
$iiB:1}
P.aT.prototype={
i:function(a){return"Point("+H.m(this.a)+", "+H.m(this.b)+")"},
F:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a&&this.b===b.b},
gp:function(a){var s=C.b.gp(this.a),r=C.b.gp(this.b),q=H.h4(H.h4(0,s),r)
q=q+((q&67108863)<<3)&536870911
q^=q>>>11
return q+((q&16383)<<15)&536870911}}
A.P.prototype={
gu:function(a){var s=this.$ti,r=J.K(this.a,new A.dJ(this),s.h("F<1>"))
return new A.c3(P.p(r,!1,r.$ti.h("E.E")),s.h("c3<1>"))}}
A.dJ.prototype={
$1:function(a){return J.C(this.a.$ti.h("k<1>").a(a))},
$S:function(){return this.a.$ti.h("F<1>(k<1>)")}}
A.c3.prototype={
j:function(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].j()){p.sc2(null)
return!1}if(r>4294967295)H.j(P.ao(r,0,4294967295,"length",null))
q=J.fT(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.o(o,s)
q[s]=o[s].gm()}p.sc2(q)
return!0},
gm:function(){var s=this.b
return s==null?H.j(P.ai("No element")):s},
sc2:function(a){this.b=this.$ti.h("i<1>?").a(a)},
$iF:1}
L.X.prototype={
gb7:function(){var s=this.x
return s==null?H.j(H.n("startingMobject")):s},
i:function(a){var s=this.r
return this.T()+"("+s.gX(s)+", runTime: "+H.m(this.a)+"s)"},
T:function(){var s=this.bM(0),r=P.fY("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
ay:function(){this.x=this.bl()
this.aB(0)},
bp:function(){this.aB(1)},
az:function(a){},
bl:function(){return this.r.n()},
aE:function(){return H.a([this.r,this.gb7()],t.r)},
bC:function(){var s,r,q,p=H.a([],t.Z)
for(s=this.aE(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)p.push(s[q].aG())
s=t.R
return P.p(new A.P(p,s),!0,s.h("k.E"))},
aq:function(a){var s,r,q
for(s=this.cG(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].cD(a)},
cG:function(){var s,r,q,p,o=H.a([],t.r)
for(s=this.aE(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o.push(p)}return o},
aB:function(a){a=Math.min(1,Math.max(a,0))
this.e4(this.b.$1(a))},
e4:function(a){var s,r,q,p,o,n=this.bC()
for(s=B.v(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
this.br(C.a.l(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.N(o)*q,0)))}},
br:function(a,b){t.a.a(a)}}
L.cs.prototype={
gcc:function(){var s=this.z
return s==null?H.j(H.n("animationsTiming")):s},
gcu:function(){var s=this.Q
return s==null?H.j(H.n("maxEndTime")):s},
dh:function(a,b,c,d,e){var s,r,q=H.a([],t.r)
for(s=this.y,r=0;r<2;++r)q.push(s[r].r)
this.r.ax(t.a.a(B.hU(q,t.j)))
this.e0()},
aE:function(){return t.fh.a(this.r).gB()},
ay:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].ay()},
bp:function(){var s,r
for(s=this.y,r=0;r<2;++r)s[r].bp()},
az:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].az(a)},
aq:function(a){var s,r
for(s=this.y,r=0;r<2;++r)s[r].aq(a)},
e0:function(){var s,r,q,p,o=this
o.sdm(t.gp.a(o.cJ()))
s=H.a([],t.n)
for(r=o.gcc(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].c)
o.Q=H.fp(C.a.aT(s,0,C.p,t.V))
if(o.a===0)o.a=o.gcu()},
cJ:function(){var s,r,q,p,o,n,m,l,k=H.a([],t.fZ)
for(s=this.y,r=t.cL,q=this.c,p=1-q,o=0,n=0;n<2;++n){m=s[n]
l=o+m.a
C.a.t(k,new S.aB(m,o,l,r))
o=o*p+l*q}return k},
aB:function(a){var s,r,q,p,o,n,m,l=a*this.gcu()
for(s=this.gcc(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.aB(m)}},
sdm:function(a){this.z=t.dh.a(a)}}
L.cR.prototype={
br:function(a,b){var s,r
t.a.a(a)
s=J.av(a)
r=[0,b]
s.l(a,0).bu(s.l(a,1),r[0],r[1])}}
L.cQ.prototype={}
L.cB.prototype={
ck:function(){return this.r},
bl:function(){var s=this.d8()
s.bn(1)
if(s instanceof K.H){s.b5(C.i)
s.cY(C.i,0)}return s}}
L.bW.prototype={
gby:function(){var s=this.y
return s==null?H.j(H.n("targetMobject")):s},
gbx:function(){var s=this.z
return s==null?H.j(H.n("targetCopy")):s},
bN:function(a,b,c,d,e){if(e!=null)this.y=e
this.e_()},
e_:function(){if(this.cx!=null)return
this.sea(U.hN())},
ay:function(){var s=this
s.y=s.ck()
s.z=s.gby().n()
s.r.c9(s.gbx())
s.d6()},
ck:function(){return this.gby()},
az:function(a){this.d7(a)},
aE:function(){var s=this
return H.a([s.r,s.gb7(),s.gby(),s.gbx()],t.r)},
bC:function(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gb7(),this.gbx()],r=0;r<3;++r)q.push(s[r].aG())
s=t.R
return P.p(new A.P(q,s),!0,s.h("k.E"))},
br:function(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.av(a)
r=s.l(a,0)
q=s.l(a,1)
s=s.l(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.b5.a(p)
n=p==null?U.hN():p
r.sP(t.y.a(n.$3(q.gq(q),s.gq(s),b)))
r.cq(q,s,b)},
sea:function(a){this.cx=t.b5.a(a)}}
T.dC.prototype={
gE:function(a){var s=this.r
return s==null?H.j(H.n("display")):s},
bm:function(a){var s,r,q,p
t.a.a(a)
s=new T.dD()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.f)(a),++p)C.a.D(r,s.$1(a[p]))
return B.hU(r,t.j)},
cz:function(a){var s,r,q,p,o="renderer"
for(s=this.bm(t.a.a(a)),r=H.w(s).h("ap<1>"),s=new H.ap(s,r),s=new H.T(s,s.gk(s),r.h("T<E.E>")),r=r.h("E.E");s.j();){q=r.a(s.d)
p=this.r
if(q instanceof K.H){p=(p==null?H.j(H.n("display")):p).a;(p==null?H.j(H.n(o)):p).ec(q)}else if((p==null?H.j(H.n("display")):p).a==null)H.j(H.n(o))}},
cC:function(a,b){t.y.a(b)
return!C.a.aR(b,new T.dE())?H.a([C.d],t.l):b}}
T.dD.prototype={
$1:function(a){return a.ae()},
$S:16}
T.dE.prototype={
$1:function(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
L.bi.prototype={
gaC:function(){var s=this.a
return s==null?H.j(H.n("renderer")):s},
gC:function(){var s=this.b
return s==null?H.j(H.n("camera")):s},
cg:function(a){var s
this.b=a
s=this.d
C.y.sel(s,1280)
C.y.sdZ(s,720)},
aO:function(a){return a},
aZ:function(a,b){var s,r,q=this
q.gC()
s=F.f1(a,0,1280,-q.gC().c/2,q.gC().c/2)
q.gC()
r=F.f1(b,720,0,-q.gC().d/2,q.gC().d/2)
q.gC()
return new M.c(s,r,0).A(0,C.d)}}
Z.cq.prototype={
aV:function(){var s=0,r=P.dj(t.V),q,p=this,o,n,m
var $async$aV=P.dk(function(a,b){if(a===1)return P.df(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.at(C.U.gdP(m),$async$aV)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.dg(q,r)}})
return P.dh($async$aV,r)},
b1:function(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gC()
p=F.f1(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gC()
return new M.c(p,F.f1(a.b,q,r,0,720),0)},
dS:function(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new Z.dp(s))
t.g5.a(null)
q=q.c
C.a.D(s.r,H.a([W.ek(r,"mousemove",o,!1,q),W.ek(r,"mousedown",p.a(new Z.dq(s)),!1,q),W.ek(r,"mouseup",p.a(new Z.dr(s)),!1,q)],t.L))},
ek:function(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].dU()}}
Z.dp.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new M.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b1(new P.aT(r,q,t.q))
q=s.aZ(p.a,p.b)
s.ch=q
q.V(0,s.cx)
$.cm().aQ(new Y.bK(C.k))
if(s.x){r=s.ch
s.z=r
s.y.V(0,r)
$.cm().aQ(new Y.bJ(C.n))}},
$S:5}
Z.dq.prototype={
$1:function(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.ch
s.cx=new M.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b1(new P.aT(r,q,t.q))
s.ch=s.aZ(p.a,p.b)
q=a.button
q.toString
r=new Y.bI(q)
r.b8(q)
s.Q=r
$.cm().aQ(new Y.bL(C.l))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new M.c(q,o,r)
s.z=new M.c(q,o,r)},
$S:5}
Z.dr.prototype={
$1:function(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.ch
s.cx=new M.c(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b1(new P.aT(r,q,t.q))
s.ch=s.aZ(p.a,p.b)
q=a.button
q.toString
r=new Y.bI(q)
r.b8(q)
s.Q=r
$.cm().aQ(new Y.bM(C.m))
s.x=!1},
$S:5}
Z.cv.prototype={}
V.b3.prototype={}
V.bV.prototype={
n:function(){return V.iE(this)},
ag:function(a,b){this.bK(a,!1)
this.bH(C.i,!1)
this.dg(a,!0)},
aH:function(a){return this.ag(a,!0)},
b_:function(){var s=this.dd()
return s},
b2:function(){var s=this.de()
return s}}
V.bk.prototype={
n:function(){return V.i9(this)},
aY:function(){var s=this
s.cV()
s.cQ(s.aa,C.d)
s.au(s.ab)},
cV:function(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.a9,r=j.al,q=j.aS,s=B.f_(q,r+s,s).aF(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.f)(s),++o){n=s[o]
h.push(C.j.v(0,Math.cos(n)).A(0,C.o.v(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.f)(h),++o){n=h[o]
s.push(new M.c(-n.b,n.a,n.c))}p=H.a([],i)
for(m=B.v(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.f)(m),++o){k=m[o]
p.push(C.a.l(h,k).A(0,C.a.l(s,k).v(0,q)))}i=H.a([],i)
for(r=B.v(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.f)(r),++o){k=r[o]
i.push(C.a.l(h,k).V(0,C.a.l(s,k).v(0,q)))}s=t.i
j.bG(B.hT(h,s),p,i,B.fF(h,s))}}
V.bs.prototype={
n:function(){return V.fa(this)},
gaP:function(){return!0}}
V.bC.prototype={
n:function(){return V.it(this)},
aY:function(){var s=this
s.cU(H.a([s.aa,s.ab],t.l))
s.dM()},
dM:function(){var s,r,q=this,p=q.a9
if(p===0)return
s=Math.sqrt(q.b2().V(0,q.b_()).e9())
if(s<2*p)return
r=p/s
q.bu(q,r,1-r)}}
Y.x.prototype={
gR:function(a){var s=this.a
return s},
gX:function(a){var s=this.b
return s==null?H.j(H.n("name")):s},
gB:function(){var s=this.d
return s==null?H.j(H.n("submobjects")):s},
gY:function(){var s=this.f
return s==null?H.j(H.n("updatingSuspended")):s},
gq:function(a){var s=this.r
return s==null?H.j(H.n("points")):s},
aJ:function(a,b,c){var s=this,r=s.T()
s.b=r
s.sav(t.a.a(H.a([],t.r)))
s.f=!1
s.sP(t.y.a(H.a([],t.l)))
s.co()
s.aY()},
i:function(a){return this.T()},
T:function(){var s=this.bM(0),r=P.fY("^Instance of '(.*?)'$").cm(s).b
if(1>=r.length)return H.o(r,1)
r=r[1]
r.toString
return r},
co:function(){},
aY:function(){},
ax:function(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.a8(a,this))throw H.b("Mobject can't contain itself")
s=P.p(a,!0,t.j)
for(r=this.gB(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){o=r[p]
if(!C.a.a8(a,o))s.push(o)}this.sav(n.a(s))},
cd:function(a,b,c){var s,r,q,p,o,n,m,l
t.cD.a(c)
if(b==null)b=this.ar(a)
for(s=this.aG(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.C(l==null?H.j(H.n("points")):l)
for(;l.j();)m.push(J.f8(c.$1(l.gm().V(0,b)),b))
n.sP(q.a(m))}},
dQ:function(a){return this.cd(C.d,null,a)},
n:function(){return Y.iy(this)},
cE:function(a,b){var s,r,q,p=this
if(p.gY())return
s=p.e
if(s==null){s=H.a([],t.eM)
p.sdr(s)}r=0
for(;!1;++r)s[r].$2(p,a)
for(s=p.gB(),q=s.length,r=0;r<s.length;s.length===q||(0,H.f)(s),++r)s[r].cE(a,!0)},
cD:function(a){return this.cE(a,!0)},
au:function(a){return this.dQ(new Y.dS(a))},
cQ:function(a,b){return this.cd(C.d,b,new Y.dR(a))},
ag:function(a,b){var s,r,q
for(s=this.gB(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].ag(a,!0)
this.a=a},
aA:function(a,b){var s,r,q
for(s=this.gB(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].aA(a,!0)},
bn:function(a){return this.aA(a,!0)},
ae:function(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gB(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)C.a.D(o,s[q].ae())
p=P.fh(o,t.j)
return P.p(p,!0,H.A(p).c)},
aG:function(){var s=this.ae(),r=H.w(s),q=r.h("aU<1>")
return P.p(new H.aU(s,r.h("J(1)").a(new Y.dQ()),q),!0,q.h("k.E"))},
cH:function(){var s,r,q,p,o=H.a([],t.l)
for(s=this.aG(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q].r
C.a.D(o,p==null?H.j(H.n("points")):p)}return o},
bE:function(){return this.cH()},
b0:function(a,b,c){var s,r,q
t.D.a(c)
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.f)(c),++q)s.push(c[q].cK(a))
if(b<0)return C.a.ao(s,C.v)
else if(b===0)return(C.a.ao(s,C.v)+C.a.ao(s,C.p))/2
else return C.a.ao(s,C.p)},
ar:function(a){var s=this,r=s.bE()
if(r.length===0)return C.d
return new M.c(s.b0(0,C.b.a2(a.a),r),s.b0(1,C.b.a2(a.b),r),s.b0(2,C.b.a2(a.c),r))},
b2:function(){this.bA("getStart")
return J.dm(this.gq(this))},
b_:function(){this.bA("getEnd")
return J.bh(this.gq(this))},
gk:function(a){return this.aI(0).length},
aI:function(a){var s=this,r=H.a([],t.r)
if(J.co(s.gq(s)))r.push(s)
C.a.D(r,s.gB())
return r},
c9:function(a){var s,r,q,p,o,n,m=this
if(J.bg(m.gq(m))&&J.co(a.gq(a)))a.cv()
if(J.bg(a.gq(a))&&J.co(m.gq(m)))m.cv()
s=m.aI(0).length
r=a.aI(0).length
m.c8(Math.max(0,r-s))
a.c8(Math.max(0,s-r))
m.ca(a)
for(q=new A.P(H.a([m.gB(),a.gB()],t.Z),t.R),q=q.gu(q);q.j();){p=q.b
if(p==null)p=H.j(P.ai("No element"))
o=p.length
if(0>=o)return H.o(p,0)
n=p[0]
if(1>=o)return H.o(p,1)
n.c9(p[1])}},
bD:function(){throw H.b("getPointMobject not implemented for "+H.m(this.gcM())+"()")},
ca:function(a){var s=this,r=J.t(s.gq(s)),q=J.t(a.gq(a))
if(r<q)s.cb(a)
else if(r>q)a.cb(s)},
cb:function(a){throw H.b("Not implemented")},
cv:function(){var s=this.n(),r=t.r,q=t.a
s.sav(q.a(H.a([],r)))
this.sP(t.y.a(H.a([],t.l)))
this.ax(q.a(H.a([s],r)))},
c8:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.aI(0).length
if(s===0){r=H.a([],t.r)
for(q=B.v(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)r.push(a1.bD())
a1.sav(t.a.a(r))}n=s+a2
r=t.X
q=H.a([],r)
for(p=B.v(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.f)(p),++o){l=p[o]
if(typeof l!=="number")return l.v()
q.push(C.b.a6(l*s,n))}p=H.a([],r)
for(m=B.v(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.f)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.aJ(i),e=0;e<q.length;q.length===g||(0,H.f)(q),++e)if(f.F(i,q[e]))h.push(1)
else h.push(0)
p.push(B.hQ(h,j))}d=H.a([],t.r)
for(r=new A.P(H.a([a1.gB(),p],t.J),t.w),r=r.gu(r),q=t.j;r.j();){c=r.b
if(c==null)c=H.j(P.ai("No element"))
p=c.length
if(0>=p)return H.o(c,0)
b=q.a(c[0])
if(1>=p)return H.o(c,1)
a=H.N(c[1])
C.a.t(d,b)
for(p=B.v(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.f)(p),++o){a0=b.n()
a0.bn(1)
C.a.t(d,a0)}}a1.sav(t.a.a(d))},
cq:function(a,b,c){},
bu:function(a,b,c){},
bA:function(a){var s
if(J.co(this.gq(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.b(s)},
sav:function(a){this.d=t.hh.a(a)},
sdr:function(a){this.e=t.cI.a(a)},
sP:function(a){this.r=t.D.a(a)}}
Y.dS.prototype={
$1:function(a){return a.A(0,this.a)},
$S:13}
Y.dR.prototype={
$1:function(a){return a.v(0,this.a)},
$S:13}
Y.dQ.prototype={
$1:function(a){t.j.a(a)
return J.t(a.gq(a))>0},
$S:4}
Y.b_.prototype={
n:function(){return Y.io(this)}}
K.H.prototype={
n:function(){return K.iF(this)},
co:function(){var s=this,r=s.db
s.cT(r==null?H.a([s.gR(s)],t.O):r)
r=s.dx
if(r==null)r=H.a([s.gR(s)],t.O)
s.d_(r,s.x)
s.cS(s.dy,s.y)},
at:function(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.D(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.b3(),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)q[o].bI(r,!1)
if(r.length!==0){if(n.db==null)n.sac(r)
q=n.db
q.toString
q=J.t(q)
p=r.length
if(q<p){q=n.db
q.toString
n.sac(B.aX(q,p,t.G))}else{q=n.db
q.toString
if(p<J.t(q)){q=n.db
q.toString
n.sac(B.aX(r,J.t(q),t.G))}}s=H.a([],s)
q=n.db
q.toString
q=B.v(J.t(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.l(r,q[o]))
n.sac(s)}},
b5:function(a){return this.at(a,null,!0)},
bI:function(a,b){return this.at(null,a,b)},
bH:function(a,b){return this.at(a,null,b)},
cT:function(a){return this.at(null,a,!0)},
a_:function(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.D(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.b3(),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)q[o].d0(a,r,!1,e)
if(r.length!==0)if(a){if(n.dy==null)n.saj(r)
q=n.dy
q.toString
q=J.t(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.saj(B.aX(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.t(q)){q=n.dy
q.toString
n.saj(B.aX(r,J.t(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.v(J.t(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.l(r,q[o]))
n.sa0(s)}else{if(n.dx==null)n.sa0(r)
q=n.dx
q.toString
q=J.t(q)
p=r.length
if(q<p){q=n.dx
q.toString
n.sa0(B.aX(q,p,t.G))}else{q=n.dx
q.toString
if(p<J.t(q)){q=n.dx
q.toString
n.sa0(B.aX(r,J.t(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.v(J.t(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.l(r,q[o]))
n.sa0(s)}if(e!=null)if(a)n.y=e
else n.x=e},
cX:function(a){return this.a_(!1,null,null,!0,a)},
d0:function(a,b,c,d){return this.a_(a,null,b,c,d)},
bK:function(a,b){return this.a_(!1,a,null,b,null)},
cY:function(a,b){return this.a_(!1,a,null,!0,b)},
cZ:function(a,b){return this.a_(!1,null,a,b,null)},
d_:function(a,b){return this.a_(!1,null,a,!0,b)},
b4:function(a,b,c,d){return this.a_(!0,a,t.x.a(b),c,d)},
cR:function(a,b){return this.b4(null,a,b,null)},
cS:function(a,b){return this.b4(null,a,!0,b)},
ag:function(a,b){this.bH(a,!0)
this.bK(a,!0)
this.df(a,!0)},
ct:function(a,b){var s,r,q,p=this,o="removeWhere",n=a.a4(),m=a.as(),l=a.x,k=a.Z(!0),j=a.y,i=t.x
i.a(k)
i.a(n)
i.a(m)
p.at(null,n,!1)
p.a_(!1,null,m,!1,l)
p.b4(null,k,!1,j)
s=p.gB()
r=a.gB()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
n=H.w(s).h("J(1)").a(new K.ec())
if(!!s.fixed$length)H.j(P.a9(o))
C.a.c5(s,n,!0)
n=H.w(r).h("J(1)").a(new K.ed())
if(!!r.fixed$length)H.j(P.a9(o))
C.a.c5(r,n,!0)
for(n=t.j,n=B.jM(s,r,n,n),n=P.dO([n.a,n.b],!1,t.z),n=new A.P(new H.R(n,H.w(n).h("R<1,i<H>>")),t.eX),n=n.gu(n);n.j();){q=n.b
if(q==null)q=H.j(P.ai("No element"))
m=q.length
if(0>=m)return H.o(q,0)
l=q[0]
if(1>=m)return H.o(q,1)
l.ct(q[1],!0)}},
e7:function(a){return this.ct(a,!0)},
aA:function(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.C(p.a4());s.j();){r=s.gm()
q=r.d
m.push(new V.u(r.a,r.b,r.c,q*o))}p.bI(m,!0)
m=H.a([],n)
for(s=J.C(p.as());s.j();){r=s.gm()
q=r.d
m.push(new V.u(r.a,r.b,r.c,q*o))}p.cZ(m,!0)
n=H.a([],n)
for(m=J.C(p.Z(!0));m.j();){s=m.gm()
r=s.d
n.push(new V.u(s.a,s.b,s.c,r*o))}p.cR(n,!0)
p.dc(a,!0)},
bn:function(a){return this.aA(a,!0)},
a4:function(){var s=this.db
return s==null?H.a([C.i],t.O):s},
Z:function(a){var s=a?this.dy:this.dx
return s==null||J.bg(s)?H.a([C.i],t.O):s},
as:function(){return this.Z(!1)},
cL:function(){var s,r,q,p,o,n=this.ar(C.d),m=H.a([],t.b)
for(s=[C.j,C.o,C.u],r=t.n,q=0;q<3;++q){p=this.ar(s[q]).V(0,n)
m.push(H.a([p.a,p.b,p.c],r))}o=C.j.bt(S.al(null,m).gej())
return new S.y(n.V(0,o),n.A(0,o),t.hd)},
bG:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.cy
r=a.length
q=H.a([],t.l)
for(r=B.v(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.f)(r),++o)q.push(C.d)
g.sP(f.a(q))
n=H.a([a,b,c,d],t.h)
for(f=B.v(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.f)(f),++o){m=f[o]
l=C.a.l(n,m)
p=g.r
for(p=B.eS(B.v(J.t(p==null?H.j(H.n("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.f)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.j(H.n("points"))
J.fI(h,i.b,l[C.c.af(i.a,l.length)])}}},
dN:function(a){var s,r,q,p,o,n,m=this,l=m.cy,k=[]
for(s=B.f_(l,1,0).dX(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=m.r
k.push(J.bh(o==null?H.j(H.n("points")):o).v(0,1-p).A(0,a.v(0,p)))}s=k.length
if(1>=s)return H.o(k,1)
r=t.i
o=r.a(k[1])
if(2>=s)return H.o(k,2)
n=r.a(k[2])
if(3>=s)return H.o(k,3)
k=r.a(k[3])
m.bA("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.c.af(J.t(m.gq(m)),l)===1){k=r.a(H.a([o,n,k],s))
J.aN(m.gq(m),k)}else{k=r.a(H.a([J.bh(m.gq(m)),o,n,k],s))
J.aN(m.gq(m),k)}return null},
cU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=B.f_(this.cy,1,0).aF(0)
r=t.i
q=S.ds(B.fF(a,r))
p=S.ds(B.hT(a,r))
r=H.a([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.f)(s),++n){m=s[n]
r.push(p.v(0,1-m).A(0,q.v(0,m)))}o=H.a([],t.h)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.f)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.f)(h),++f){e=h[f]
d=J.av(e)
i.push(new M.c(d.l(e,0),d.l(e,1),d.l(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.o(o,0)
l=o[0]
if(1>=r)return H.o(o,1)
k=o[1]
if(2>=r)return H.o(o,2)
i=o[2]
if(3>=r)return H.o(o,3)
this.bG(l,k,i,o[3])},
bk:function(a,b){var s=this.cx,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
dW:function(a,b){var s
if(!this.bk(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.cx+0.00001*Math.abs(s))return!1
return!0},
aX:function(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.dN(a,new K.e7(l,C.c.af(J.t(a),this.cy)),t.i)
l.a=P.p(s,!0,s.$ti.h("k.E"))
s=H.a([],t.dm)
for(r=B.v(J.t(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,H.f)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.A()
s.push(new S.b4(J.af(m,n+0),J.af(l.a,n+1),J.af(l.a,n+2),J.af(l.a,n+3),p))}return s},
c1:function(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.cy
r=B.v(a.length,s,s)
q=H.w(r)
q=P.p(new H.aU(r,q.h("J(1)").a(b),q.h("aU<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.X)
C.a.D(r,q)
p=H.a([],t.h)
for(r=new A.P(H.a([r,q],t.gL),t.eN),r=r.gu(r),q=H.w(a),o=q.c,q=q.h("ad<1>");r.j();){n=r.b
if(n==null)n=H.j(P.ai("No element"))
if(1>=n.length)return H.o(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.V()
if(typeof l!=="number")return H.dl(l)
if(m-l>=s){H.N(l)
H.N(m)
P.dX(l,m,a.length)
k=new H.ad(a,l,m,q)
k.b9(a,l,m,o)
p.push(k.I(0))}}return p},
bF:function(a){t.y.a(a)
return this.c1(a,new K.e9(this,a))},
cO:function(a){t.y.a(a)
return this.c1(a,new K.e8(this,a))},
c0:function(a){var s=F.dN(this.gq(this),new K.e3(this,a),t.i)
return P.p(s,!0,s.$ti.h("k.E"))},
cI:function(){var s,r=this
if(J.t(r.gq(r))===1)return r.gq(r)
s=t.eR
s=A.fQ(P.p(new A.P(H.a([r.c0(0),r.c0(r.cy-1)],t.h),s),!0,s.h("k.E")),t.i)
return P.p(s,!0,s.$ti.h("k.E"))},
bE:function(){var s,r,q,p=H.a([],t.l)
for(s=this.b3(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)C.a.D(p,s[q].cI())
return p},
ca:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.m.a(a2)
a0.dO(a2)
if(J.t(a0.gq(a0))===J.t(a2.gq(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.bg(n==null?H.j(H.n(a1)):n)){n=q.a(H.a([o.ar(C.d)],r))
m=o.r
J.aN(m==null?H.j(H.n(a1)):m,n)}n=o.r
if(C.c.af(J.t(n==null?H.j(H.n(a1)):n),o.cy)===1){n=o.r
o.dN(J.bh(n==null?H.j(H.n(a1)):n))}}s=t.i
l=a0.bF(P.p(a0.gq(a0),!0,s))
k=a2.bF(P.p(a2.gq(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.cy
f=new K.e6(g)
for(s=B.v(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.W(c)
m=J.W(d)
b=Math.max(0,C.c.a6(n.gk(c)-m.gk(d),g))
a=Math.max(0,C.c.a6(m.gk(d)-n.gk(c),g))
d=a0.cp(b,d)
c=a0.cp(a,c)
C.a.D(i,d)
C.a.D(h,c)}a0.sP(q.a(i))
a2.sP(q.a(h))},
cp:function(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=B.v(this.cy*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)C.a.D(s,a8)
return s}o=this.aX(a8)
n=o.length
m=n+a7
s=t.X
r=H.a([],s)
for(q=B.v(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.f)(q),++p){k=q[p]
if(typeof k!=="number")return k.v()
r.push(C.b.a6(k*n,m))}q=H.a([],s)
for(l=B.v(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.f)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.aJ(k),e=0;e<r.length;r.length===g||(0,H.f)(r),++e)h.push(f.F(k,r[e])?1:0)
q.push(B.hQ(h,i))}d=H.a([],t.l)
for(s=new A.P(H.a([o,q],t.J),t.w),s=s.gu(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.j();){c=s.b
if(c==null)c=H.j(P.ai(a6))
h=c.length
if(0>=h)return H.o(c,0)
b=i.a(c[0])
if(1>=h)return H.o(c,1)
a=B.f_(H.N(c[1])+1,1,0).aF(0)
for(h=new A.P(H.a([a,B.fF(a,r)],q),l),h=h.gu(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.j();){a2=h.b
if(a2==null)a2=H.j(P.ai(a6))
a3=P.dO([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.o(a2,0)
a5=a2[0]
if(1>=a4)return H.o(a2,1)
C.a.D(d,B.f3(new H.R(a3,H.w(a3).h("R<1,c>")),a5,a2[1]))}}return d},
dO:function(a){var s,r,q,p,o,n,m,l,k=new K.e4(),j=new K.e5()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.W(o)
l=J.W(n)
if(m.gk(o)>l.gk(n))j.$3(p,a,B.aX(n,m.gk(o),r))
else if(l.gk(n)>m.gk(o))j.$3(p,this,B.aX(o,l.gk(n),r))}},
bD:function(){var s=null,r=this.ar(C.d),q=new K.bX(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.e,s,s,s,s,s)
q.aJ(C.e,s,s)
q.sP(t.y.a(H.a([r],t.l)))
q.e7(this)
return q},
cq:function(a,b,c){var s,r=this,q=t.m
q.a(a)
q.a(b)
r.sac(B.fC(a.a4(),b.a4(),c))
r.sa0(B.fC(a.as(),b.as(),c))
r.saj(B.fC(a.Z(!0),b.Z(!0),c))
q=t.V
r.sd3(B.hH(a.x,b.x,c,q))
r.sdR(B.hH(a.y,b.y,c,q))
s=new K.eb()
if(c===1){q=b.db
r.sac(q!=null?s.$1(q):null)
q=b.dx
r.sa0(q!=null?s.$1(q):null)
q=b.dy
r.saj(q!=null?s.$1(q):null)
r.x=b.x
r.y=b.y}},
bu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.m.a(a)
if(b<=0&&c>=1){e.sP(t.y.a(P.p(a.gq(a),!0,t.i)))
return}s=t.y
r=a.aX(s.a(P.p(a.gq(a),!0,t.i)))
q=r.length
p=B.hG(0,q,b)
o=B.hG(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.sP(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dn(r[n])
j=s.a(B.f3(new H.R(j,H.w(j).h("R<1,c>")),m,k))
J.aN(e.gq(e),j)}else{if(n>>>0!==n||n>=j)return H.o(r,n)
j=J.dn(r[n])
j=s.a(B.f3(new H.R(j,H.w(j).h("R<1,c>")),m,1))
J.aN(e.gq(e),j)
for(j=n+1,P.dX(j,l,r.length),j=H.cU(r,j,l,H.w(r).c),i=j.$ti,j=new H.T(j,j.gk(j),i.h("T<E.E>")),i=i.h("E.E"),h=t.z;j.j();){g=i.a(j.d)
g=P.dO([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.R(g,H.w(g).h("R<1,c>")))
f=e.r
J.aN(f==null?H.j(H.n("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.o(r,l)
j=J.dn(r[l])
j=s.a(B.f3(new H.R(j,H.w(j).h("R<1,c>")),0,k))
J.aN(e.gq(e),j)}},
b3:function(){var s,r,q,p,o=H.a([],t.d_)
for(s=this.ae(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(p instanceof K.H)o.push(p)}return o},
sd3:function(a){this.x=H.fp(a)},
sdR:function(a){this.y=H.fp(a)},
sac:function(a){this.db=t.x.a(a)},
sa0:function(a){this.dx=t.x.a(a)},
saj:function(a){this.dy=t.x.a(a)},
gaP:function(){return this.z}}
K.aC.prototype={
$1:function(a){return t.G.a(a).n()},
$S:1}
K.aD.prototype={
$1:function(a){return t.G.a(a).n()},
$S:1}
K.aE.prototype={
$1:function(a){return t.G.a(a).n()},
$S:1}
K.ec.prototype={
$1:function(a){return!(t.j.a(a) instanceof K.H)},
$S:4}
K.ed.prototype={
$1:function(a){return!(t.j.a(a) instanceof K.H)},
$S:4}
K.e7.prototype={
$2:function(a,b){t.i.a(b)
return a<J.t(this.a.a)-this.b},
$S:12}
K.e9.prototype={
$1:function(a){var s,r,q
H.N(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.dW(r,s[a])},
$S:11}
K.e8.prototype={
$1:function(a){var s,r,q
H.N(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.o(s,r)
r=s[r]
if(a<0||a>=q)return H.o(s,a)
return!this.a.bk(r,s[a])},
$S:11}
K.e3.prototype={
$2:function(a,b){t.i.a(b)
return C.c.af(a,this.a.cy)===this.b},
$S:12}
K.e6.prototype={
$2:function(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=B.v(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(C.a.gH(C.a.gH(a)))
return s}if(b<0)return H.o(a,b)
return a[b]},
$S:25}
K.e4.prototype={
$2:function(a,b){switch(a){case"fillColors":return b.a4()
case"strokeColors":return b.as()
case"backgroundStrokeColors":return b.Z(!1)
default:throw H.b(u.c+a)}},
$S:26}
K.e5.prototype={
$3:function(a,b,c){t.U.a(c)
switch(a){case"fillColors":b.sac(c)
break
case"strokeColors":b.sa0(c)
break
case"backgroundStrokeColors":b.saj(c)
break
default:throw H.b(u.c+a)}},
$S:27}
K.eb.prototype={
$1:function(a){var s=t.G
return P.p(J.K(t.U.a(a),new K.ea(),s),!0,s)},
$S:28}
K.ea.prototype={
$1:function(a){return t.G.a(a).n()},
$S:1}
K.d_.prototype={}
K.bX.prototype={
n:function(){return K.iG(this)}}
Z.bj.prototype={
gE:function(a){var s=this.d
return s==null?H.j(H.n("display")):s},
d1:function(a){this.d=a}}
F.cw.prototype={
gM:function(){var s=this.e
return s==null?H.j(H.n("ctx")):s},
bv:function(a){var s,r,q=this,p=q.gE(q).gC(),o=q.gE(q).aO(a)
C.h.sbo(q.gM(),o.aD())
s=p.c
r=p.d
q.gM().fillRect(0-s/2,0-r/2,p.c,p.d)},
ec:function(a){var s,r,q,p,o,n,m=this,l=t.y.a(P.p(a.gq(a),!0,t.i)),k=m.gE(m).gC().cC(a,l)
if(k.length===0)return
s=a.cO(k)
for(l=s.length,r="",q=0;q<s.length;s.length===l||(0,H.f)(s),++q)r+=m.cP(a,s[q])
p=W.iz(r)
m.ce(p,a,!0)
o=a.a4()
if(J.t(o)>1)C.h.sbo(m.gM(),m.cl(a,o))
else{n=m.gE(m).aO(J.af(a.a4(),0))
C.h.sbo(m.gM(),n.aD())}m.gM().fill(p)
m.ce(p,a,!1)},
cP:function(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.aX(b)
r=J.a4(b)
q=r.gL(b)
p="M "+H.m(q.a)+" "+H.m(q.b)
o=a.bk(r.gL(b),r.gH(b))
for(r=s.length,n=0;n<s.length;s.length===r||(0,H.f)(s),++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+H.m(l.a)+" "+H.m(l.b)+" "+H.m(k.a)+" "+H.m(k.b)+" "+H.m(j.a)+" "+H.m(j.b)}return o?p+" Z":p},
cl:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.U.a(b)
s=a.cL()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.gE(g).gC().cC(a,r)
r=g.gM()
p=q.length
if(0>=p)return H.o(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.o(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.W(b)
m=1/(o.gk(b)-1)
l=B.js(m+1,0,m).aF(0)
for(r=B.v(o.gk(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.f)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.j(H.n("display"))
h=i.aO(o.l(b,j))
p.addColorStop(C.a.l(l,j),h.aD())}return p},
ce:function(a,b,c){var s,r,q,p,o=this,n=c?b.y:b.x
if(n===0)return
s=b.Z(c)
r=o.gE(o).gC().c
o.gM().lineWidth=n*0.01*(r/14.222222222222221)
r=J.a4(s)
q=r.aR(s,new F.dF())
if(r.gG(s)||q)return
if(r.gk(s)>1)C.h.sbL(o.gM(),o.cl(b,s))
else{p=o.gE(o).aO(J.dm(b.Z(c)))
C.h.sbL(o.gM(),p.aD())}C.h.d2(o.gM(),a)}}
F.dF.prototype={
$1:function(a){return t.G.a(a).d===0},
$S:45}
A.cO.prototype={
gan:function(){var s=this.d
return s==null?H.j(H.n("mobjects")):s},
gC:function(){var s=this.f
return s==null?H.j(H.n("camera")):s},
gE:function(a){var s=this.x
return s==null?H.j(H.n("display")):s},
dj:function(){this.f=new T.dC(14.222222222222221,C.e)
new P.d8().dk(0)
this.sbO(t.a.a(H.a([],t.r)))},
ap:function(){var s=0,r=P.dj(t.z),q=1,p,o=[],n=this,m,l,k
var $async$ap=P.dk(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.gE(n).dS()
s=2
return P.at(null,$async$ap)
case 2:q=4
s=7
return P.at(n.a7(),$async$ap)
case 7:q=1
s=6
break
case 4:q=3
k=p
H.aM(k)
throw k
s=6
break
case 3:s=1
break
case 6:l=n.gC()
l.gE(l).gaC().bv(l.f)
n.gC().cz(n.gan())
s=8
return P.at(null,$async$ap)
case 8:n.gE(n).ek()
return P.dg(null,r)
case 1:return P.df(p,r)}})
return P.dh($async$ap,r)},
aq:function(a){var s,r,q
for(s=this.gan(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].cD(a)},
ax:function(a){t.a.a(a)
this.cA(a)
C.a.e1(this.gan(),0,a)},
ed:function(a,b){var s,r=this,q=t.a
q.a(b)
s=P.p(b,!0,t.j)
C.a.D(s,r.gC().bm(b))
r.sbO(q.a(r.cN(r.gan(),s)))},
cA:function(a){return this.ed(!0,a)},
cN:function(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new A.dY(s).$2(a,P.fh(b,H.w(b).c))
return s},
aW:function(a){var s=0,r=P.dj(t.z),q=this,p,o,n,m
var $async$aW=P.dk(function(b,c){if(b===1)return P.df(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.x
s=4
return P.at((o==null?H.j(H.n("display")):o).aV(),$async$aW)
case 4:n=c
p+=n
o=a.a
a.aq(n)
a.aB(p/o)
q.aq(n)
o=q.f
if(o==null)o=H.j(H.n("camera"))
m=o.r
m=(m==null?H.j(H.n("display")):m).a
if(m==null)m=H.j(H.n("renderer"))
m.bv(o.f)
o=q.f
if(o==null)o=H.j(H.n("camera"))
m=q.d
o.cz(m==null?H.j(H.n("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.dg(null,r)}})
return P.dh($async$aW,r)},
ad:function(a,b){var s=0,r=P.dj(t.z),q=this,p,o
var $async$ad=P.dk(function(c,d){if(c===1)return P.df(d,r)
while(true)switch(s){case 0:o=q.gC().bm(q.gan())
b.ay()
p=b.r
if(!C.a.a8(o,p)){q.ax(t.a.a(H.a([p],t.r)))
C.a.D(o,p.ae())}s=2
return P.at(q.aW(b),$async$ad)
case 2:b.bp()
b.az(q)
q.aq(0)
return P.dg(null,r)}})
return P.dh($async$ad,r)},
sbO:function(a){this.d=t.hh.a(a)}}
A.dY.prototype={
$2:function(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.f)(a),++q){p=a[q]
if(b.a8(0,p))continue
o=p.ae()
n=b.e5(0,P.fh(o,H.w(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.j(H.n("submobjects")):o,n)}else C.a.t(r,p)}},
$S:30}
B.f6.prototype={
$2:function(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S:function(){return this.a.h("0(0,0)")}}
B.f5.prototype={
$1:function(a){return H.N(a)/this.a*this.b},
$S:31}
B.f7.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("J(q,0)")}}
B.eX.prototype={
$1:function(a){return t.G.a(a).I(0)},
$S:9}
B.eY.prototype={
$1:function(a){return t.G.a(a).I(0)},
$S:9}
B.eZ.prototype={
$1:function(a){var s
t.p.a(a)
s=J.av(a)
return new V.u(s.l(a,0),s.l(a,1),s.l(a,2),s.l(a,3))},
$S:33}
B.eO.prototype={
$1:function(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=B.eS(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.dl(m)
l.push(J.cn(n.b,Math.pow(q,p-m)*Math.pow(a,m)*F.hA(p,m,!0)))}return C.a.ao(l,new B.eN())},
$S:34}
B.eN.prototype={
$2:function(a,b){var s=t.i
return s.a(a).A(0,s.a(b))},
$S:35}
V.u.prototype={
n:function(){var s=this
return new V.u(s.a,s.b,s.c,s.d)},
I:function(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aD:function(){var s=this
return"rgba("+C.b.a2(s.a*255)+", "+C.b.a2(s.b*255)+", "+C.b.a2(s.c*255)+", "+H.m(s.d)+")"},
i:function(a){return this.aD()}}
Y.a6.prototype={
i:function(a){return this.b}}
Y.a1.prototype={}
Y.dH.prototype={
gak:function(){var s=this.a
return s==null?H.j(H.n("eventListeners")):s},
di:function(){var s,r,q=P.fg(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.U(0,C.S[r],H.a([],s))
this.sdq(t.cH.a(q))},
ai:function(a,b,c){var s,r,q
H.fw(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.p(c.h("i<cA<0>>").a(b),!0,c.h("cA<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gH(s)
C.a.eb(s,q)
r=q.eo(a)}},
aQ:function(a){var s,r=this
switch(a.a){case C.k:t.gt.a(a)
s=r.gak().l(0,C.k)
s.toString
r.ai(a,s,t.e)
break
case C.l:t.a8.a(a)
s=r.gak().l(0,C.l)
s.toString
r.ai(a,s,t.e)
break
case C.m:t.dN.a(a)
s=r.gak().l(0,C.m)
s.toString
r.ai(a,s,t.e)
break
case C.n:t.fV.a(a)
s=r.gak().l(0,C.n)
s.toString
r.ai(a,s,t.e)
break
case C.q:t.fw.a(a)
s=r.gak().l(0,C.q)
s.toString
r.ai(a,s,t.e)
break
case C.r:t.bf.a(a)
s=r.gak().l(0,C.r)
s.toString
r.ai(a,s,t.e)
break}},
sdq:function(a){this.a=t.dC.a(a)}}
Y.cJ.prototype={}
Y.bK.prototype={}
Y.bL.prototype={}
Y.bM.prototype={}
Y.bJ.prototype={}
Y.bI.prototype={
b8:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
F.eP.prototype={
$2:function(a,b){return H.N(a)*H.N(b)},
$S:7}
F.eQ.prototype={
$2:function(a,b){return H.N(a)*H.N(b)},
$S:7}
S.bl.prototype={
gN:function(a){return this.a},
gJ:function(a){var s=this.b
return s==null?H.j(H.n("shape")):s},
A:function(a,b){return this.aU(0,new S.dw(typeof b=="number"?S.f9(b,this.gJ(this)):t.I.a(b)))},
v:function(a,b){return this.aU(0,new S.dx(typeof b=="number"?S.f9(b,this.gJ(this)):t.I.a(b)))},
aU:function(a,b){var s,r,q,p=this
t.fA.a(b)
s=B.eS(p.gN(p),t.p)
r=H.w(s)
q=r.h("Q<1,i<l>>")
q=P.p(new H.Q(s,r.h("i<l>(1)").a(new S.dv(b)),q),!0,q.h("E.E"))
return S.al(p.gJ(p),q)},
a5:function(a){var s,r
t.o.a(a)
s=a.a
r=this.gN(this)
if(s>>>0!==s||s>=r.length)return H.o(r,s)
return J.af(r[s],a.b)},
aF:function(a){var s=this.gN(this),r=H.w(s),q=r.h("Q<1,l>")
return P.p(new H.Q(s,r.h("l(1)").a(new S.dt(a)),q),!0,q.h("E.E"))},
gej:function(){return this.aU(0,new S.dy(this))},
bt:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.gJ(a0),a2=a0.gJ(a0).b,a3=a5.gJ(a5).b,a4=S.f9(0,new S.y(a0.gJ(a0).a,a5.gJ(a5).b,t.o))
for(a1=B.v(a1.a,0,1),s=a1.length,r=a5.a,q=a0.a,p=a4.a,o=0;o<a1.length;a1.length===s||(0,H.f)(a1),++o){n=a1[o]
for(m=B.v(a3,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.f)(m),++k){j=m[k]
for(i=B.v(a2,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,H.f)(i),++g){f=i[g]
e=C.a.l(p,n)
d=J.av(e)
c=d.l(e,j)
b=J.af(C.a.l(q,n),f)
a=J.af(C.a.l(r,f),j)
if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.dl(a)
if(typeof c!=="number")return c.A()
d.U(e,j,c+b*a)}}}return a4},
dX:function(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gN(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)for(p=J.C(s[q]);p.j();)o.push(p.gm())
return o},
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.m(d.gJ(d).a)+"x"+H.m(d.gJ(d).b),b=H.a([],t.X)
for(s=d.gN(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)for(p=J.C(s[q]);p.j();)b.push(C.b.bB(p.gm(),6).length)
o=C.a.aT(b,6,C.E,t.S)
for(b=d.gN(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.f)(b),++q){m=b[q]
n+="      "
for(l=J.C(m);l.j();){k=l.gm()
j=k<0?"-":" "
k=Math.abs(k)
i=C.b.bB(k,6)
h=H.a([],p)
for(i=B.v(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.f)(i),++f)h.push(" ")
e=C.a.e6(h)
n=n+j+C.b.bB(k,6)+e}n+="\n"}return c+" matrix\n"+n},
sdn:function(a){this.b=t.gv.a(a)}}
S.dw.prototype={
$2:function(a,b){return a+this.a.a5(t.o.a(b))},
$S:2}
S.dx.prototype={
$2:function(a,b){return a*this.a.a5(t.o.a(b))},
$S:2}
S.dv.prototype={
$1:function(a){var s,r,q
t.fz.a(a)
s=B.eS(a.b,t.V)
r=H.w(s)
q=r.h("Q<1,l>")
return P.p(new H.Q(s,r.h("l(1)").a(new S.du(this.a,a)),q),!0,q.h("E.E"))},
$S:38}
S.du.prototype={
$1:function(a){t.d.a(a)
return this.a.$2(a.b,new S.y(this.b.a,a.a,t.o))},
$S:39}
S.dt.prototype={
$1:function(a){return J.af(t.p.a(a),this.a)},
$S:40}
S.dy.prototype={
$2:function(a,b){var s=t.o
s.a(b)
return this.a.a5(new S.y(b.b,b.a,s))},
$S:2}
M.c.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof M.c&&this.a===b.a&&this.b===b.b&&this.c===b.c},
A:function(a,b){var s=this
if(typeof b=="number")return new M.c(s.a+b,s.b+b,s.c+b)
else if(b instanceof M.c)return new M.c(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.b("Vector3 only support addition by num or Vector3")},
V:function(a,b){var s=this
if(typeof b=="number")return new M.c(s.a-b,s.b-b,s.c-b)
else if(b instanceof M.c)return new M.c(s.a-b.a,s.b-b.b,s.c-b.c)
else throw H.b("Vector3 only support subtraction by num or Vector3")},
v:function(a,b){return new M.c(this.a*b,this.b*b,this.c*b)},
e9:function(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
cK:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.b("No component at index "+a+" on a vector3")}},
ei:function(){var s=t.n
s=S.al(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
bt:function(a){var s=S.ib(3).aU(0,new M.ee(a)).bt(this.ei()),r=t.o
return new M.c(s.a5(new S.y(0,0,r)),s.a5(new S.y(1,0,r)),s.a5(new S.y(2,0,r)))},
i:function(a){return"vec3("+H.m(this.a)+", "+H.m(this.b)+", "+H.m(this.c)+")"}}
M.ee.prototype={
$2:function(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gJ(r).a
if(typeof s!=="number")return s.cF()
if(typeof q!=="number")return H.dl(q)
if(s<q){s=b.b
q=r.gJ(r).b
if(typeof s!=="number")return s.cF()
if(typeof q!=="number")return H.dl(q)
q=s>=q
s=q}else s=!0
return s?a:r.a5(b)},
$S:2}
S.y.prototype={
i:function(a){return"["+H.m(this.a)+", "+H.m(this.b)+"]"},
F:function(a,b){if(b==null)return!1
return b instanceof S.y&&J.be(b.a,this.a)&&J.be(b.b,this.b)},
gp:function(a){var s=J.bf(this.a),r=J.bf(this.b)
return A.fq(A.aI(A.aI(0,C.c.gp(s)),C.c.gp(r)))}}
S.aB.prototype={
i:function(a){return"["+this.a.i(0)+", "+H.m(this.b)+", "+H.m(this.c)+"]"},
F:function(a,b){if(b==null)return!1
return b instanceof S.aB&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gp:function(a){var s=H.ah(this.a),r=C.b.gp(this.b),q=C.b.gp(this.c)
return A.fq(A.aI(A.aI(A.aI(0,C.c.gp(s)),C.c.gp(r)),C.c.gp(q)))}}
S.b4.prototype={
I:function(a){var s=this
return P.dO([s.a,s.b,s.c,s.d],!1,t.z)},
i:function(a){var s=this
return"["+s.a.i(0)+", "+s.b.i(0)+", "+s.c.i(0)+", "+s.d.i(0)+"]"},
F:function(a,b){var s=this
if(b==null)return!1
return b instanceof S.b4&&b.a.F(0,s.a)&&b.b.F(0,s.b)&&b.c.F(0,s.c)&&b.d.F(0,s.d)},
gp:function(a){var s=this,r=H.ah(s.a),q=H.ah(s.b),p=H.ah(s.c),o=H.ah(s.d)
return A.fq(A.aI(A.aI(A.aI(A.aI(0,C.c.gp(r)),C.c.gp(q)),C.c.gp(p)),C.c.gp(o)))}}
R.cu.prototype={
a7:function(){var s=0,r=P.dj(t.z),q=this,p,o,n,m,l,k,j,i
var $async$a7=P.dk(function(a,b){if(a===1)return P.df(b,r)
while(true)switch(s){case 0:k=t.O
j=H.a([],k)
i=H.a([C.e],k)
k=H.a([],k)
p=new V.bs(0,6.283185307179586,1,C.d,9,0.35,C.u,new V.b3(i,k,0,j,0),null,null,4,0,!1,0.01,!1,0.000001,4,null,null,null,C.e,null,null,null,null,null)
p.aJ(C.e,null,null)
p.aH(C.e)
p.b5(C.N)
p.cX(0)
p.au(C.j.v(0,5))
o=V.fa(p)
n=V.fa(p)
n.au(C.D.v(0,10))
n.b5(C.O)
k=C.o.v(0,1.5)
m=V.fU(C.C.v(0,1.5),k)
m.aH(C.z)
m.au(C.j.v(0,6))
k=C.o.v(0,1.5)
l=V.fU(C.C.v(0,1.5),k)
l.aH(C.z)
l.au(C.D.v(0,6))
k=H.a([L.h1(m),L.h1(l)],t.bt)
j=new Y.b_(C.e,null,null,null,null,null)
j.aJ(C.e,null,null)
i=t.a
j.ax(i.a(C.T))
j=new L.cs(k,0,M.f4(),0.2,j)
j.T()
j.dh(k,null,0.2,M.f4(),0)
s=2
return P.at(q.ad(0,j),$async$a7)
case 2:i=i.a(H.a([p],t.r))
q.cA(i)
C.a.D(q.gan(),i)
i=new L.cB(1,M.fE(),0,p)
i.T()
i.bN(p,0,M.fE(),1,null)
s=3
return P.at(q.ad(0,i),$async$a7)
case 3:case 4:if(!!0){s=5
break}s=6
return P.at(q.ad(0,L.h5(p,0,M.f4(),1,o)),$async$a7)
case 6:s=7
return P.at(q.ad(0,L.h5(p,0,M.f4(),1,n)),$async$a7)
case 7:s=4
break
case 5:return P.dg(null,r)}})
return P.dh($async$a7,r)}};(function aliases(){var s=J.a8.prototype
s.d9=s.i
s=J.aR.prototype
s.da=s.i
s=P.z.prototype
s.bM=s.i
s=L.X.prototype
s.d6=s.ay
s.d7=s.az
s.d8=s.bl
s=Y.x.prototype
s.df=s.ag
s.dc=s.aA
s.de=s.b2
s.dd=s.b_
s=K.H.prototype
s.dg=s.ag
s=Z.bj.prototype
s.d5=s.d1})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_0u
s(P,"jv","iI",3)
s(P,"jw","iJ",3)
s(P,"jx","iK",3)
r(P,"hy","jn",0)
q(P,"jN",2,null,["$1$2","$2"],["hL",function(a,b){return P.hL(a,b,t.H)}],42,0)
q(P,"hJ",2,null,["$1$2","$2"],["hK",function(a,b){return P.hK(a,b,t.H)}],43,0)
p(Y.x.prototype,"gcM","T",19)
q(U,"hN",3,null,["$3"],["jQ"],44,0)
q(M,"f4",1,null,["$3$inflection$pauseRatio","$1"],["hI",function(a){return M.hI(a,null,null)}],10,0)
q(M,"fE",1,null,["$3$inflection$pauseRatio","$1"],["hP",function(a){return M.hP(a,null,null)}],10,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.z,null)
q(P.z,[H.fe,J.a8,J.bm,P.k,H.br,P.D,H.a5,H.T,P.F,H.bw,H.e1,H.dT,H.bx,H.c5,P.b1,H.dM,H.bE,H.cH,H.eC,H.ac,H.d6,H.dc,P.eF,P.d1,P.b7,P.b8,P.bo,P.d3,P.aV,P.M,P.d2,P.bT,P.bU,P.da,P.cb,P.cd,P.d7,P.aW,P.Z,P.bQ,P.bS,P.em,P.dI,P.L,P.db,P.cT,W.fb,P.d8,P.aT,A.c3,L.X,T.dC,L.bi,K.d_,Y.x,Z.bj,A.cO,V.u,Y.a6,Y.a1,Y.dH,Y.bI,S.bl,M.c,S.y,S.aB,S.b4])
q(J.a8,[J.cF,J.b0,J.aR,J.r,J.ay,J.an,W.S,W.bq,W.dG,W.bt,W.e,W.cL])
q(J.aR,[J.cM,J.aj,J.az])
r(J.dL,J.r)
q(J.ay,[J.bz,J.cG])
q(P.k,[H.aF,H.B,H.aS,H.aU,H.aq,P.by])
q(H.aF,[H.aP,H.cc])
r(H.c0,H.aP)
r(H.bZ,H.cc)
r(H.R,H.bZ)
q(P.D,[H.bB,P.cW,H.cI,H.cY,H.cN,P.bn,H.d5,P.cK,P.ak,P.cZ,P.cX,P.b2,P.cx,P.cy])
q(H.a5,[H.f2,H.cE,H.cV,H.eT,H.eU,H.eV,P.eh,P.eg,P.ei,P.ej,P.eG,P.eI,P.eJ,P.eM,P.en,P.ev,P.er,P.es,P.et,P.ep,P.eu,P.eo,P.ey,P.ez,P.ex,P.ew,P.dZ,P.e_,P.eL,P.eD,P.eE,P.dP,W.ef,W.el,A.dJ,T.dD,T.dE,Z.dp,Z.dq,Z.dr,Y.dS,Y.dR,Y.dQ,K.aC,K.aD,K.aE,K.ec,K.ed,K.e7,K.e9,K.e8,K.e3,K.e6,K.e4,K.e5,K.eb,K.ea,F.dF,A.dY,B.f6,B.f5,B.f7,B.eX,B.eY,B.eZ,B.eO,B.eN,F.eP,F.eQ,S.dw,S.dx,S.dv,S.du,S.dt,S.dy,M.ee])
q(H.B,[H.E,H.bv,H.bD])
q(H.E,[H.ad,H.Q,H.ap])
r(H.bu,H.aS)
q(P.F,[H.bH,H.bY,H.bR])
r(H.aZ,H.aq)
r(H.ax,H.cE)
r(H.bN,P.cW)
q(H.cV,[H.cS,H.aY])
r(H.d0,P.bn)
r(P.bG,P.b1)
r(H.bA,P.bG)
r(H.c8,H.d5)
q(P.by,[P.c7,A.P])
r(P.c6,P.d3)
r(P.d9,P.cb)
r(P.c4,P.cd)
r(P.as,P.c4)
q(P.ak,[P.bO,P.cD])
q(W.S,[W.a_,W.b5])
q(W.a_,[W.d,W.ag])
r(W.h,W.d)
q(W.h,[W.cr,W.ct,W.aO,W.cC,W.cP])
r(W.ae,W.e)
r(W.a2,W.ae)
r(W.c_,W.bt)
r(W.c1,P.bT)
r(W.d4,W.c1)
r(W.c2,P.bU)
q(L.X,[L.cs,L.cR,L.bW])
r(L.cQ,L.cR)
r(L.cB,L.bW)
r(Z.cq,L.bi)
r(Z.cv,Z.cq)
r(V.b3,K.d_)
q(Y.x,[K.H,Y.b_])
q(K.H,[V.bV,K.bX])
q(V.bV,[V.bk,V.bC])
r(V.bs,V.bk)
r(F.cw,Z.bj)
r(Y.cJ,Y.a1)
q(Y.cJ,[Y.bK,Y.bL,Y.bM,Y.bJ])
r(R.cu,A.cO)
s(H.cc,P.Z)
s(P.cd,P.bQ)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",l:"double",O:"num",a0:"String",J:"bool",L:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","u(u)","l(l,y<q,q>)","~(~())","J(x)","~(a2)","L(@)","q(q,q)","L()","i<l>(u)","l(l{inflection:l?,pauseRatio:l?})","J(q)","J(q,c)","c(c)","~(O)","a7<L>()","i<x>(x)","J(c)","~(z?,z?)","a0()","M<@>(@)","L(z,aA)","~(e)","~(q,@)","L(@,aA)","i<c>(i<i<c>>,@)","i<u>(a0,H)","~(a0,H,i<u>)","i<u>(i<u>)","~(@)","~(i<x>,bP<x>)","l(q)","@(@)","u(i<l>)","c(l)","c(c,c)","L(~())","@(a0)","i<l>(y<q,i<l>>)","l(y<q,l>)","l(i<l>)","@(@,a0)","0^(0^,0^)<O>","0^(0^,0^)<O>","i<c>(i<c>,i<c>,l)","J(u)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.iY(v.typeUniverse,JSON.parse('{"cM":"aR","aj":"aR","az":"aR","jV":"e","k1":"e","jU":"d","k2":"d","ka":"d","jW":"h","k7":"h","k3":"a_","k_":"a_","k8":"a2","jY":"ae","jX":"ag","kb":"ag","cF":{"J":[]},"b0":{"L":[]},"r":{"i":["1"],"B":["1"],"k":["1"]},"dL":{"r":["1"],"i":["1"],"B":["1"],"k":["1"]},"bm":{"F":["1"]},"ay":{"l":[],"O":[]},"bz":{"l":[],"q":[],"O":[]},"cG":{"l":[],"O":[]},"an":{"a0":[],"dU":[]},"B":{"k":["1"]},"aF":{"k":["2"]},"br":{"F":["2"]},"aP":{"aF":["1","2"],"k":["2"],"k.E":"2"},"c0":{"aP":["1","2"],"aF":["1","2"],"B":["2"],"k":["2"],"k.E":"2"},"bZ":{"Z":["2"],"i":["2"],"aF":["1","2"],"B":["2"],"k":["2"]},"R":{"bZ":["1","2"],"Z":["2"],"i":["2"],"aF":["1","2"],"B":["2"],"k":["2"],"k.E":"2","Z.E":"2"},"bB":{"D":[]},"E":{"B":["1"],"k":["1"]},"ad":{"E":["1"],"B":["1"],"k":["1"],"E.E":"1","k.E":"1"},"T":{"F":["1"]},"aS":{"k":["2"],"k.E":"2"},"bu":{"aS":["1","2"],"B":["2"],"k":["2"],"k.E":"2"},"bH":{"F":["2"]},"Q":{"E":["2"],"B":["2"],"k":["2"],"E.E":"2","k.E":"2"},"aU":{"k":["1"],"k.E":"1"},"bY":{"F":["1"]},"aq":{"k":["1"],"k.E":"1"},"aZ":{"aq":["1"],"B":["1"],"k":["1"],"k.E":"1"},"bR":{"F":["1"]},"bv":{"B":["1"],"k":["1"],"k.E":"1"},"bw":{"F":["1"]},"ap":{"E":["1"],"B":["1"],"k":["1"],"E.E":"1","k.E":"1"},"cE":{"a5":[],"aQ":[]},"ax":{"a5":[],"aQ":[]},"bN":{"D":[]},"cI":{"D":[]},"cY":{"D":[]},"c5":{"aA":[]},"a5":{"aQ":[]},"cV":{"a5":[],"aQ":[]},"cS":{"a5":[],"aQ":[]},"aY":{"a5":[],"aQ":[]},"cN":{"D":[]},"d0":{"D":[]},"bA":{"b1":["1","2"],"bF":["1","2"]},"bD":{"B":["1"],"k":["1"],"k.E":"1"},"bE":{"F":["1"]},"cH":{"dU":[]},"d5":{"D":[]},"c8":{"D":[]},"M":{"a7":["1"]},"b8":{"F":["1"]},"c7":{"k":["1"],"k.E":"1"},"bo":{"D":[]},"c6":{"d3":["1"]},"cb":{"h8":[]},"d9":{"cb":[],"h8":[]},"as":{"bQ":["1"],"bP":["1"],"B":["1"],"k":["1"]},"aW":{"F":["1"]},"by":{"k":["1"]},"bG":{"b1":["1","2"],"bF":["1","2"]},"b1":{"bF":["1","2"]},"c4":{"bQ":["1"],"bP":["1"],"B":["1"],"k":["1"]},"l":{"O":[]},"q":{"O":[]},"i":{"B":["1"],"k":["1"]},"bP":{"B":["1"],"k":["1"]},"a0":{"dU":[]},"bn":{"D":[]},"cW":{"D":[]},"cK":{"D":[]},"ak":{"D":[]},"bO":{"D":[]},"cD":{"D":[]},"cZ":{"D":[]},"cX":{"D":[]},"b2":{"D":[]},"cx":{"D":[]},"bS":{"D":[]},"cy":{"D":[]},"db":{"aA":[]},"a2":{"e":[]},"ae":{"e":[]},"h":{"d":[],"S":[]},"cr":{"d":[],"S":[]},"ct":{"d":[],"S":[]},"aO":{"d":[],"S":[]},"ag":{"S":[]},"bt":{"fi":["O"]},"d":{"S":[]},"cC":{"d":[],"S":[]},"a_":{"S":[]},"cP":{"d":[],"S":[]},"b5":{"S":[]},"c_":{"fi":["O"]},"c1":{"bT":["1"]},"d4":{"c1":["1"],"bT":["1"]},"c2":{"bU":["1"]},"d8":{"iB":[]},"P":{"k":["i<1>"],"k.E":"i<1>"},"c3":{"F":["i<1>"]},"cs":{"X":[]},"cR":{"X":[]},"cQ":{"X":[]},"cB":{"X":[]},"bW":{"X":[]},"cq":{"bi":[]},"cv":{"bi":[]},"b3":{"d_":[]},"bV":{"H":[],"x":[]},"bk":{"H":[],"x":[]},"bs":{"H":[],"x":[]},"bC":{"H":[],"x":[]},"b_":{"x":[]},"H":{"x":[]},"bX":{"H":[],"x":[]},"cw":{"bj":[]},"cJ":{"a1":[]},"bK":{"a1":[]},"bL":{"a1":[]},"bM":{"a1":[]},"bJ":{"a1":[]},"cu":{"cO":[]}}'))
H.iX(v.typeUniverse,JSON.parse('{"cc":2,"by":1,"bG":2,"c4":1,"cd":1}'))
var u={c:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=H.bd
return{dq:s("@<q>"),I:s("bl"),t:s("bo"),gA:s("aO"),G:s("u"),Q:s("B<@>"),C:s("D"),B:s("e"),en:s("a6"),e:s("a1"),Y:s("aQ"),f:s("a7<@>"),fh:s("b_"),v:s("ax<l>"),R:s("P<x>"),w:s("P<z>"),eX:s("P<H>"),eR:s("P<c>"),ca:s("P<l>"),eN:s("P<q>"),hf:s("k<@>"),bt:s("r<X>"),aM:s("r<bl>"),O:s("r<u>"),aE:s("r<cA<a1>>"),Z:s("r<i<x>>"),J:s("r<i<z>>"),h:s("r<i<c>>"),b:s("r<i<l>>"),gL:s("r<i<q>>"),r:s("r<x>"),L:s("r<bU<@>>"),s:s("r<a0>"),fZ:s("r<aB<X,l,l>>"),dm:s("r<b4<c,c,c,c>>"),d_:s("r<H>"),l:s("r<c>"),n:s("r<l>"),gn:s("r<@>"),X:s("r<q>"),eM:s("r<x(x,l)>"),T:s("b0"),cj:s("az"),fw:s("k5"),bf:s("k6"),U:s("i<u>"),gF:s("i<cA<a1>>"),dF:s("i<i<c>>"),a:s("i<x>"),gp:s("i<aB<X,l,l>>"),y:s("i<c>"),p:s("i<l>"),aH:s("i<@>"),cH:s("bF<a6,i<cA<a1>>>"),j:s("x"),fV:s("bJ"),E:s("a2"),gt:s("bK"),a8:s("bL"),dN:s("bM"),P:s("L"),K:s("z"),q:s("aT<O>"),eU:s("fi<O>"),bA:s("bP<x>"),k:s("aA"),N:s("a0"),e3:s("ad<c>"),hd:s("y<c,c>"),d:s("y<q,l>"),o:s("y<q,q>"),fz:s("y<q,i<l>>"),cL:s("aB<X,l,l>"),bl:s("b4<c,c,c,c>"),ak:s("aj"),m:s("H"),i:s("c"),cD:s("c(c)"),do:s("d4<a2>"),ck:s("M<L>"),c:s("M<@>"),fJ:s("M<q>"),dL:s("M<O>"),g4:s("c6<O>"),cJ:s("J"),al:s("J(z)"),fT:s("J(q)"),V:s("l"),fA:s("l(l,y<q,q>)"),z:s("@"),fO:s("@()"),bI:s("@(z)"),ag:s("@(z,aA)"),S:s("q"),aw:s("0&*"),_:s("z*"),eH:s("a7<L>?"),x:s("i<u>?"),hh:s("i<x>?"),dh:s("i<aB<X,l,l>>?"),D:s("i<c>?"),b5:s("i<c>(i<c>,i<c>,l)?"),cI:s("i<x(x,l)>?"),dC:s("bF<a6,i<cA<a1>>>?"),W:s("z?"),gv:s("y<q,q>?"),F:s("aV<@,@>?"),g:s("d7?"),A:s("@(e)?"),g5:s("~()?"),H:s("O"),u:s("~"),M:s("~()"),c4:s("~(O)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.y=W.aO.prototype
C.h=W.bq.prototype
C.P=J.a8.prototype
C.a=J.r.prototype
C.c=J.bz.prototype
C.Q=J.b0.prototype
C.b=J.ay.prototype
C.A=J.an.prototype
C.R=J.az.prototype
C.B=J.cM.prototype
C.t=J.aj.prototype
C.U=W.b5.prototype
C.p=new H.ax(P.hJ(),t.v)
C.E=new H.ax(P.hJ(),H.bd("ax<q>"))
C.v=new H.ax(P.jN(),t.v)
C.F=new H.bw(H.bd("bw<0&>"))
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.L=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.K=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.J=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.x=function(hooks) { return hooks; }

C.f=new P.d9()
C.M=new P.db()
C.i=new V.u(0,0,0,0)
C.z=new V.u(0,0,0,1)
C.e=new V.u(1,1,1,1)
C.N=new V.u(0.51373,0.75686,0.40392,1)
C.O=new V.u(0.94118,0.67451,0.37255,1)
C.k=new Y.a6("EventType.mouseMovedEvent")
C.l=new Y.a6("EventType.mousePressedEvent")
C.m=new Y.a6("EventType.mouseReleasedEvent")
C.n=new Y.a6("EventType.mouseDraggedEvent")
C.q=new Y.a6("EventType.keyPressedEvent")
C.r=new Y.a6("EventType.keyReleasedEvent")
C.S=H.a(s([C.k,C.l,C.m,C.n,C.q,C.r]),H.bd("r<a6>"))
C.T=H.a(s([]),t.r)
C.d=new M.c(0,0,0)
C.u=new M.c(0,0,1)
C.o=new M.c(0,1,0)
C.C=new M.c(0,-1,0)
C.j=new M.c(1,0,0)
C.D=new M.c(-1,0,0)
C.V=new P.b7(null,2)})();(function staticFields(){$.eA=null
$.am=0
$.bp=null
$.fM=null
$.hD=null
$.hx=null
$.hO=null
$.eR=null
$.eW=null
$.fA=null
$.b9=null
$.cg=null
$.ch=null
$.fs=!1
$.G=C.f
$.a3=H.a([],H.bd("r<z>"))
$.di=P.fg(t.S,H.bd("bF<q,q>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"jZ","hV",function(){return H.jC("_$dart_dartClosure")})
s($,"ky","fH",function(){return C.f.cB(new H.f2(),H.bd("a7<L>"))})
s($,"kc","hW",function(){return H.ar(H.e2({
toString:function(){return"$receiver$"}}))})
s($,"kd","hX",function(){return H.ar(H.e2({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ke","hY",function(){return H.ar(H.e2(null))})
s($,"kf","hZ",function(){return H.ar(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ki","i1",function(){return H.ar(H.e2(void 0))})
s($,"kj","i2",function(){return H.ar(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"kh","i0",function(){return H.ar(H.h6(null))})
s($,"kg","i_",function(){return H.ar(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"kl","i4",function(){return H.ar(H.h6(void 0))})
s($,"kk","i3",function(){return H.ar(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"km","fG",function(){return P.iH()})
r($,"k0","cm",function(){var q=new Y.dH()
q.di()
return q})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.a8,DOMError:J.a8,MediaError:J.a8,NavigatorUserMediaError:J.a8,OverconstrainedError:J.a8,PositionError:J.a8,SQLError:J.a8,HTMLAudioElement:W.h,HTMLBRElement:W.h,HTMLBaseElement:W.h,HTMLBodyElement:W.h,HTMLButtonElement:W.h,HTMLContentElement:W.h,HTMLDListElement:W.h,HTMLDataElement:W.h,HTMLDataListElement:W.h,HTMLDetailsElement:W.h,HTMLDialogElement:W.h,HTMLDivElement:W.h,HTMLEmbedElement:W.h,HTMLFieldSetElement:W.h,HTMLHRElement:W.h,HTMLHeadElement:W.h,HTMLHeadingElement:W.h,HTMLHtmlElement:W.h,HTMLIFrameElement:W.h,HTMLImageElement:W.h,HTMLInputElement:W.h,HTMLLIElement:W.h,HTMLLabelElement:W.h,HTMLLegendElement:W.h,HTMLLinkElement:W.h,HTMLMapElement:W.h,HTMLMediaElement:W.h,HTMLMenuElement:W.h,HTMLMetaElement:W.h,HTMLMeterElement:W.h,HTMLModElement:W.h,HTMLOListElement:W.h,HTMLObjectElement:W.h,HTMLOptGroupElement:W.h,HTMLOptionElement:W.h,HTMLOutputElement:W.h,HTMLParagraphElement:W.h,HTMLParamElement:W.h,HTMLPictureElement:W.h,HTMLPreElement:W.h,HTMLProgressElement:W.h,HTMLQuoteElement:W.h,HTMLScriptElement:W.h,HTMLShadowElement:W.h,HTMLSlotElement:W.h,HTMLSourceElement:W.h,HTMLSpanElement:W.h,HTMLStyleElement:W.h,HTMLTableCaptionElement:W.h,HTMLTableCellElement:W.h,HTMLTableDataCellElement:W.h,HTMLTableHeaderCellElement:W.h,HTMLTableColElement:W.h,HTMLTableElement:W.h,HTMLTableRowElement:W.h,HTMLTableSectionElement:W.h,HTMLTemplateElement:W.h,HTMLTextAreaElement:W.h,HTMLTimeElement:W.h,HTMLTitleElement:W.h,HTMLTrackElement:W.h,HTMLUListElement:W.h,HTMLUnknownElement:W.h,HTMLVideoElement:W.h,HTMLDirectoryElement:W.h,HTMLFontElement:W.h,HTMLFrameElement:W.h,HTMLFrameSetElement:W.h,HTMLMarqueeElement:W.h,HTMLElement:W.h,HTMLAnchorElement:W.cr,HTMLAreaElement:W.ct,HTMLCanvasElement:W.aO,CanvasRenderingContext2D:W.bq,CDATASection:W.ag,CharacterData:W.ag,Comment:W.ag,ProcessingInstruction:W.ag,Text:W.ag,DOMException:W.dG,DOMRectReadOnly:W.bt,SVGAElement:W.d,SVGAnimateElement:W.d,SVGAnimateMotionElement:W.d,SVGAnimateTransformElement:W.d,SVGAnimationElement:W.d,SVGCircleElement:W.d,SVGClipPathElement:W.d,SVGDefsElement:W.d,SVGDescElement:W.d,SVGDiscardElement:W.d,SVGEllipseElement:W.d,SVGFEBlendElement:W.d,SVGFEColorMatrixElement:W.d,SVGFEComponentTransferElement:W.d,SVGFECompositeElement:W.d,SVGFEConvolveMatrixElement:W.d,SVGFEDiffuseLightingElement:W.d,SVGFEDisplacementMapElement:W.d,SVGFEDistantLightElement:W.d,SVGFEFloodElement:W.d,SVGFEFuncAElement:W.d,SVGFEFuncBElement:W.d,SVGFEFuncGElement:W.d,SVGFEFuncRElement:W.d,SVGFEGaussianBlurElement:W.d,SVGFEImageElement:W.d,SVGFEMergeElement:W.d,SVGFEMergeNodeElement:W.d,SVGFEMorphologyElement:W.d,SVGFEOffsetElement:W.d,SVGFEPointLightElement:W.d,SVGFESpecularLightingElement:W.d,SVGFESpotLightElement:W.d,SVGFETileElement:W.d,SVGFETurbulenceElement:W.d,SVGFilterElement:W.d,SVGForeignObjectElement:W.d,SVGGElement:W.d,SVGGeometryElement:W.d,SVGGraphicsElement:W.d,SVGImageElement:W.d,SVGLineElement:W.d,SVGLinearGradientElement:W.d,SVGMarkerElement:W.d,SVGMaskElement:W.d,SVGMetadataElement:W.d,SVGPathElement:W.d,SVGPatternElement:W.d,SVGPolygonElement:W.d,SVGPolylineElement:W.d,SVGRadialGradientElement:W.d,SVGRectElement:W.d,SVGScriptElement:W.d,SVGSetElement:W.d,SVGStopElement:W.d,SVGStyleElement:W.d,SVGElement:W.d,SVGSVGElement:W.d,SVGSwitchElement:W.d,SVGSymbolElement:W.d,SVGTSpanElement:W.d,SVGTextContentElement:W.d,SVGTextElement:W.d,SVGTextPathElement:W.d,SVGTextPositioningElement:W.d,SVGTitleElement:W.d,SVGUseElement:W.d,SVGViewElement:W.d,SVGGradientElement:W.d,SVGComponentTransferFunctionElement:W.d,SVGFEDropShadowElement:W.d,SVGMPathElement:W.d,Element:W.d,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,SubmitEvent:W.e,EventTarget:W.S,HTMLFormElement:W.cC,MouseEvent:W.a2,DragEvent:W.a2,PointerEvent:W.a2,WheelEvent:W.a2,Document:W.a_,DocumentFragment:W.a_,HTMLDocument:W.a_,ShadowRoot:W.a_,XMLDocument:W.a_,Attr:W.a_,DocumentType:W.a_,Node:W.a_,Path2D:W.cL,HTMLSelectElement:W.cP,CompositionEvent:W.ae,FocusEvent:W.ae,KeyboardEvent:W.ae,TextEvent:W.ae,TouchEvent:W.ae,UIEvent:W.ae,Window:W.b5,DOMWindow:W.b5,ClientRect:W.c_,DOMRect:W.c_})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=R.jK
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=lerp-circle.dart.js.map
