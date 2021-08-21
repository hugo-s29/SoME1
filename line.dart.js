(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.iH(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.iI(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.eG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.eG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.eG(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={er:function er(){},
u:function(a){return new H.b6("Field '"+a+"' has not been initialized.")},
f8:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eF:function(a,b,c){return a},
d6:function(){return new P.bh("No element")},
b6:function b6(a){this.a=a},
ei:function ei(){},
b1:function b1(){},
x:function x(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.$ti=c},
a8:function a8(a,b){this.a=a
this.$ti=b},
fQ:function(a){var t,s=H.fP(a)
if(s!=null)return s
t="minified:"+a
return t},
j:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.cH(a)
return t},
a7:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dm:function(a){return H.hr(a)},
hr:function(a){var t,s,r,q
if(a instanceof P.r)return H.N(H.bG(a),null)
if(J.bF(a)===C.O||u.ak.b(a)){t=C.v(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.N(H.bG(a),null)},
eb:function(a){throw H.d(H.il(a))},
k:function(a,b){if(a==null)J.ap(a)
throw H.d(H.eH(a,b))},
eH:function(a,b){var t,s="index"
if(!H.fu(b))return new P.a2(!0,b,s,null)
t=H.ac(J.ap(a))
if(b<0||b>=t)return P.ep(b,a,s,null,t)
return P.dn(b,s)},
il:function(a){return new P.a2(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.c4()
t=new Error()
t.dartException=a
s=H.iJ
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
iJ:function(){return J.cH(this.dartException)},
o:function(a){throw H.d(a)},
h:function(a){throw H.d(P.a0(a))},
a9:function(a){var t,s,r,q,p,o
a=H.iF(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.c([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.dv(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
dw:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
f9:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
es:function(a,b){var t=b==null,s=t?null:b.method
return new H.c1(a,s,t?null:b.receiver)},
ao:function(a){if(a==null)return new H.dh(a)
if(a instanceof H.b2)return H.an(a,u.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.an(a,a.dartException)
return H.ij(a)},
an:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ij:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.cU(s,16)&8191)===10)switch(r){case 438:return H.an(a,H.es(H.j(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.j(t)+" (Error "+r+")"
return H.an(a,new H.bc(q,f))}}if(a instanceof TypeError){p=$.fU()
o=$.fV()
n=$.fW()
m=$.fX()
l=$.h_()
k=$.h0()
j=$.fZ()
$.fY()
i=$.h2()
h=$.h1()
g=p.I(t)
if(g!=null)return H.an(a,H.es(H.bz(t),g))
else{g=o.I(t)
if(g!=null){g.method="call"
return H.an(a,H.es(H.bz(t),g))}else{g=n.I(t)
if(g==null){g=m.I(t)
if(g==null){g=l.I(t)
if(g==null){g=k.I(t)
if(g==null){g=j.I(t)
if(g==null){g=m.I(t)
if(g==null){g=i.I(t)
if(g==null){g=h.I(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.bz(t)
return H.an(a,new H.bc(t,g==null?f:g.method))}}}return H.an(a,new H.ci(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.bg()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.an(a,new P.a2(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.bg()
return a},
am:function(a){var t
if(a instanceof H.b2)return a.b
if(a==null)return new H.br(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.br(a)},
iz:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.dJ("Unsupported number of arguments for wrapped closure"))},
aQ:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iz)
a.$identity=t
return t},
hh:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.cc().constructor.prototype):Object.create(new H.aC(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.a3
if(typeof s!=="number")return s.m()
$.a3=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.eU(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}u.K.a(d)
k.$S=H.hd(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eU(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
hd:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.fH,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.hb:H.ha
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
he:function(a,b,c,d){var t=H.eT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
eU:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.hg(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.he(s,!q,t,b)
if(s===0){q=$.a3
if(typeof q!=="number")return q.m()
$.a3=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aZ
return new Function(q+(p==null?$.aZ=H.cT("self"):p)+";return "+o+"."+H.j(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.a3
if(typeof q!=="number")return q.m()
$.a3=q+1
n+=q
q="return function("+n+"){return this."
p=$.aZ
return new Function(q+(p==null?$.aZ=H.cT("self"):p)+"."+H.j(t)+"("+n+");}")()},
hf:function(a,b,c,d){var t=H.eT,s=H.hc
switch(b?-1:a){case 0:throw H.d(new H.c9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
hg:function(a,b){var t,s,r,q,p,o,n,m=$.aZ
if(m==null)m=$.aZ=H.cT("self")
t=$.eS
if(t==null)t=$.eS=H.cT("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.hf(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.j(s)+"(this."+t+");"
o=$.a3
if(typeof o!=="number")return o.m()
$.a3=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.j(s)+"(this."+t+", "+n+");"
o=$.a3
if(typeof o!=="number")return o.m()
$.a3=o+1
return new Function(p+o+"}")()},
eG:function(a,b,c,d,e,f,g){return H.hh(a,b,c,d,!!e,!!f,g)},
ha:function(a,b){return H.cz(v.typeUniverse,H.bG(a.a),b)},
hb:function(a,b){return H.cz(v.typeUniverse,H.bG(a.c),b)},
eT:function(a){return a.a},
hc:function(a){return a.c},
cT:function(a){var t,s,r,q=new H.aC("self","target","receiver","name"),p=J.eq(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.eQ("Field name "+a+" not found."))},
eE:function(a){if(a==null)H.im("boolean expression must not be null")
return a},
im:function(a){throw H.d(new H.cl(a))},
iH:function(a){throw H.d(new P.bR(a))},
iu:function(a){return v.getIsolateTag(a)},
iI:function(a){return H.o(new H.b6(a))},
jo:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iB:function(a){var t,s,r,q,p,o=H.bz($.fG.$1(a)),n=$.ea[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ef[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.hT($.fA.$2(a,o))
if(r!=null){n=$.ea[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ef[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.eg(t)
$.ea[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ef[o]=t
return t}if(q==="-"){p=H.eg(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.fN(a,t)
if(q==="*")throw H.d(P.fa(o))
if(v.leafTags[o]===true){p=H.eg(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.fN(a,t)},
fN:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.eM(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
eg:function(a){return J.eM(a,!1,null,!!a.$iiW)},
iD:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.eg(t)
else return J.eM(t,c,null,null)},
iw:function(){if(!0===$.eL)return
$.eL=!0
H.ix()},
ix:function(){var t,s,r,q,p,o,n,m
$.ea=Object.create(null)
$.ef=Object.create(null)
H.iv()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.fO.$1(p)
if(o!=null){n=H.iD(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
iv:function(){var t,s,r,q,p,o,n=C.F()
n=H.aP(C.G,H.aP(C.H,H.aP(C.w,H.aP(C.w,H.aP(C.I,H.aP(C.J,H.aP(C.K(C.v),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.fG=new H.ec(q)
$.fA=new H.ed(p)
$.fO=new H.ee(o)},
aP:function(a,b){return a(b)||b},
hl:function(a,b,c,d,e,f){var t=function(g,h){try{return new RegExp(g,h)}catch(s){return s}}(a,""+""+""+""+"")
if(t instanceof RegExp)return t
throw H.d(new P.d5("Illegal RegExp pattern ("+String(t)+")",a))},
iF:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bX:function bX(){},
af:function af(a,b){this.a=a
this.$ti=b},
dv:function dv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bc:function bc(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a){this.a=a},
dh:function dh(a){this.a=a},
b2:function b2(a,b){this.a=a
this.b=b},
br:function br(a){this.a=a
this.b=null},
T:function T(){},
ce:function ce(){},
cc:function cc(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a){this.a=a},
cl:function cl(a){this.a=a},
b5:function b5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d9:function d9(a,b){this.a=a
this.b=b
this.c=null},
b7:function b7(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
dZ:function dZ(a){this.b=a},
f5:function(a,b){var t=b.c
return t==null?b.c=H.ez(a,b.z,!0):t},
f4:function(a,b){var t=b.c
return t==null?b.c=H.bv(a,"V",[b.z]):t},
f6:function(a){var t=a.y
if(t===6||t===7||t===8)return H.f6(a.z)
return t===11||t===12},
hu:function(a){return a.cy},
cF:function(a){return H.e3(v.typeUniverse,a,!1)},
iy:function(a,b){var t,s,r,q,p
if(a==null)return null
t=b.Q
s=a.cx
if(s==null)s=a.cx=new Map()
r=b.cy
q=s.get(r)
if(q!=null)return q
p=H.ad(v.typeUniverse,a.z,t,0)
s.set(r,p)
return p},
ad:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.ad(a,t,c,a0)
if(s===t)return b
return H.fm(a,s,!0)
case 7:t=b.z
s=H.ad(a,t,c,a0)
if(s===t)return b
return H.ez(a,s,!0)
case 8:t=b.z
s=H.ad(a,t,c,a0)
if(s===t)return b
return H.fl(a,s,!0)
case 9:r=b.Q
q=H.bE(a,r,c,a0)
if(q===r)return b
return H.bv(a,b.z,q)
case 10:p=b.z
o=H.ad(a,p,c,a0)
n=b.Q
m=H.bE(a,n,c,a0)
if(o===p&&m===n)return b
return H.ex(a,o,m)
case 11:l=b.z
k=H.ad(a,l,c,a0)
j=b.Q
i=H.ig(a,j,c,a0)
if(k===l&&i===j)return b
return H.fk(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bE(a,h,c,a0)
p=b.z
o=H.ad(a,p,c,a0)
if(g===h&&o===p)return b
return H.ey(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cR("Attempted to substitute unexpected RTI kind "+d))}},
bE:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.ad(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
ih:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.ad(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
ig:function(a,b,c,d){var t,s=b.a,r=H.bE(a,s,c,d),q=b.b,p=H.bE(a,q,c,d),o=b.c,n=H.ih(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cr()
t.a=r
t.b=p
t.c=n
return t},
c:function(a,b){a[v.arrayRti]=b
return a},
fC:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.fH(t)
return a.$S()}return null},
fI:function(a,b){var t
if(H.f6(b))if(a instanceof H.T){t=H.fC(a)
if(t!=null)return t}return H.bG(a)},
bG:function(a){var t
if(a instanceof P.r){t=a.$ti
return t!=null?t:H.eA(a)}if(Array.isArray(a))return H.B(a)
return H.eA(J.bF(a))},
B:function(a){var t=a[v.arrayRti],s=u.m
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
M:function(a){var t=a.$ti
return t!=null?t:H.eA(a)},
eA:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.i1(a,t)},
i1:function(a,b){var t=a instanceof H.T?a.__proto__.__proto__.constructor:b,s=H.hP(v.typeUniverse,t.name)
b.$ccache=s
return s},
fH:function(a){var t,s,r
H.ac(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.e3(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
ir:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.cx(a)
r=H.e3(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.cx(r):q},
i0:function(a){var t,s,r,q=this
if(q===u.K)return H.bB(q,a,H.i4)
if(!H.ae(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.bB(q,a,H.i7)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.fu
else if(s===u.W||s===u.H)r=H.i3
else if(s===u.R)r=H.i5
else r=s===u.U?H.fs:null
if(r!=null)return H.bB(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.iA)){q.r="$i"+t
return H.bB(q,a,H.i6)}}else if(t===7)return H.bB(q,a,H.hZ)
return H.bB(q,a,H.hX)},
bB:function(a,b,c){a.b=c
return a.b(b)},
i_:function(a){var t,s=this,r=H.hW
if(!H.ae(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.hU
else if(s===u.K)r=H.hS
else{t=H.bH(s)
if(t)r=H.hY}s.a=r
return s.a(a)},
eD:function(a){var t,s=a.y
if(!H.ae(a))if(!(a===u._))if(!(a===u.aw))if(s!==7)t=s===8&&H.eD(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hX:function(a){var t=this
if(a==null)return H.eD(t)
return H.z(v.typeUniverse,H.fI(a,t),null,t,null)},
hZ:function(a){if(a==null)return!0
return this.z.b(a)},
i6:function(a){var t,s=this
if(a==null)return H.eD(s)
t=s.r
if(a instanceof P.r)return!!a[t]
return!!J.bF(a)[t]},
hW:function(a){var t,s=this
if(a==null){t=H.bH(s)
if(t)return a}else if(s.b(a))return a
H.fp(a,s)},
hY:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.fp(a,t)},
fp:function(a,b){throw H.d(H.fj(H.fc(a,H.fI(a,b),H.N(b,null))))},
e9:function(a,b,c,d){var t=null
if(H.z(v.typeUniverse,a,t,b,t))return a
throw H.d(H.fj("The type argument '"+H.N(a,t)+"' is not a subtype of the type variable bound '"+H.N(b,t)+"' of type variable '"+c+"' in '"+d+"'."))},
fc:function(a,b,c){var t=P.bU(a),s=H.N(b==null?H.bG(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
fj:function(a){return new H.bu("TypeError: "+a)},
L:function(a,b){return new H.bu("TypeError: "+H.fc(a,null,b))},
i4:function(a){return a!=null},
hS:function(a){if(a!=null)return a
throw H.d(H.L(a,"Object"))},
i7:function(a){return!0},
hU:function(a){return a},
fs:function(a){return!0===a||!1===a},
je:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.L(a,"bool"))},
jg:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.L(a,"bool"))},
jf:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.L(a,"bool?"))},
hQ:function(a){if(typeof a=="number")return a
throw H.d(H.L(a,"double"))},
ji:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"double"))},
jh:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"double?"))},
fu:function(a){return typeof a=="number"&&Math.floor(a)===a},
ac:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.L(a,"int"))},
jk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.L(a,"int"))},
jj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.L(a,"int?"))},
i3:function(a){return typeof a=="number"},
hR:function(a){if(typeof a=="number")return a
throw H.d(H.L(a,"num"))},
jm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"num"))},
jl:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"num?"))},
i5:function(a){return typeof a=="string"},
bz:function(a){if(typeof a=="string")return a
throw H.d(H.L(a,"String"))},
jn:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.L(a,"String"))},
hT:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.L(a,"String?"))},
ic:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.N(a[r],b)
return t},
fr:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=H.c([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)C.a.n(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.k(a4,k)
n=C.A.m(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.N(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.N(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.N(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.N(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.N(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
N:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.N(a.z,b)
return t}if(m===7){s=a.z
t=H.N(s,b)
r=s.y
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.N(a.z,b)+">"
if(m===9){q=H.ii(a.z)
p=a.Q
return p.length!==0?q+("<"+H.ic(p,b)+">"):q}if(m===11)return H.fr(a,b,null)
if(m===12)return H.fr(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.k(b,o)
return b[o]}return"?"},
ii:function(a){var t,s=H.fP(a)
if(s!=null)return s
t="minified:"+a
return t},
fn:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
hP:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.e3(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bw(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bv(a,b,r)
o[b]=p
return p}else return n},
hN:function(a,b){return H.fo(a.tR,b)},
hM:function(a,b){return H.fo(a.eT,b)},
e3:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.fi(H.fg(a,null,b,c))
s.set(b,t)
return t},
cz:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.fi(H.fg(a,b,c,!0))
r.set(c,s)
return s},
hO:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.ex(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
al:function(a,b){b.a=H.i_
b.b=H.i0
return b},
bw:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.Y(null,null)
t.y=b
t.cy=c
s=H.al(a,t)
a.eC.set(c,s)
return s},
fm:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.hK(a,b,s,c)
a.eC.set(s,t)
return t},
hK:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ae(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.Y(null,null)
r.y=6
r.z=b
r.cy=c
return H.al(a,r)},
ez:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.hJ(a,b,s,c)
a.eC.set(s,t)
return t},
hJ:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.ae(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.bH(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.aw)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.bH(r.z))return r
else return H.f5(a,b)}}q=new H.Y(null,null)
q.y=7
q.z=b
q.cy=c
return H.al(a,q)},
fl:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.hH(a,b,s,c)
a.eC.set(s,t)
return t},
hH:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ae(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bv(a,"V",[b])
else if(b===u.P||b===u.T)return u.eH}r=new H.Y(null,null)
r.y=8
r.z=b
r.cy=c
return H.al(a,r)},
hL:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.Y(null,null)
t.y=13
t.z=b
t.cy=r
s=H.al(a,t)
a.eC.set(r,s)
return s},
cy:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
hG:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bv:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.cy(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.Y(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.al(a,s)
a.eC.set(q,r)
return r},
ex:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.cy(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.Y(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.al(a,p)
a.eC.set(r,o)
return o},
fk:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cy(n)
if(k>0){t=m>0?",":""
s=H.cy(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.hG(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.Y(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.al(a,p)
a.eC.set(r,s)
return s},
ey:function(a,b,c,d){var t,s=b.cy+("<"+H.cy(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.hI(a,b,c,s,d)
a.eC.set(s,t)
return t},
hI:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.ad(a,b,s,0)
n=H.bE(a,c,s,0)
return H.ey(a,o,n,c!==n)}}m=new H.Y(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.al(a,m)},
fg:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fi:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.hB(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.fh(a,s,i,h,!1)
else if(r===46)s=H.fh(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.ak(a.u,a.e,h.pop()))
break
case 94:h.push(H.hL(a.u,h.pop()))
break
case 35:h.push(H.bw(a.u,5,"#"))
break
case 64:h.push(H.bw(a.u,2,"@"))
break
case 126:h.push(H.bw(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.ew(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.bv(q,o,p))
else{n=H.ak(q,a.e,o)
switch(n.y){case 11:h.push(H.ey(q,n,p,a.n))
break
default:h.push(H.ex(q,n,p))
break}}break
case 38:H.hC(a,h)
break
case 42:q=a.u
h.push(H.fm(q,H.ak(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.ez(q,H.ak(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.fl(q,H.ak(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.cr()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
H.ew(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.fk(q,H.ak(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.ew(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.hE(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.ak(a.u,a.e,j)},
hB:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
fh:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.fn(t,p.z)[q]
if(o==null)H.o('No "'+q+'" in "'+H.hu(p)+'"')
d.push(H.cz(t,p,o))}else d.push(q)
return n},
hC:function(a,b){var t=b.pop()
if(0===t){b.push(H.bw(a.u,1,"0&"))
return}if(1===t){b.push(H.bw(a.u,4,"1&"))
return}throw H.d(P.cR("Unexpected extended operation "+H.j(t)))},
ak:function(a,b,c){if(typeof c=="string")return H.bv(a,c,a.sEA)
else if(typeof c=="number")return H.hD(a,b,c)
else return c},
ew:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.ak(a,b,c[t])},
hE:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.ak(a,b,c[t])},
hD:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.cR("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.cR("Bad index "+c+" for "+b.i(0)))},
z:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.ae(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.ae(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.z(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.z(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.z(a,b.z,c,d,e)
if(s===6)return H.z(a,b.z,c,d,e)
return s!==7}if(s===6)return H.z(a,b.z,c,d,e)
if(q===6){t=H.f5(a,d)
return H.z(a,b,c,t,e)}if(s===8){if(!H.z(a,b.z,c,d,e))return!1
return H.z(a,H.f4(a,b),c,d,e)}if(s===7){t=H.z(a,u.P,c,d,e)
return t&&H.z(a,b.z,c,d,e)}if(q===8){if(H.z(a,b,c,d.z,e))return!0
return H.z(a,b,c,H.f4(a,d),e)}if(q===7){t=H.z(a,b,c,u.P,e)
return t||H.z(a,b,c,d.z,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.L)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.z(a,l,c,k,e)||!H.z(a,k,e,l,c))return!1}return H.ft(a,b.z,c,d.z,e)}if(q===11){if(b===u.L)return!0
if(t)return!1
return H.ft(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.i2(a,b,c,d,e)}return!1},
ft:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.z(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.z(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.z(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.z(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.z(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
i2:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.z(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.fn(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.z(a,H.cz(a,b,m[q]),c,s[q],e))return!1
return!0},
bH:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.ae(a))if(s!==7)if(!(s===6&&H.bH(a.z)))t=s===8&&H.bH(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
iA:function(a){var t
if(!H.ae(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
ae:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
fo:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
cr:function cr(){this.c=this.b=this.a=null},
cx:function cx(a){this.a=a},
cq:function cq(){},
bu:function bu(a){this.a=a},
fP:function(a){return v.mangledGlobalNames[a]}},J={
eM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eK:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.eL==null){H.iw()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.fa("Return interceptor for "+H.j(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.dX
if(p==null)p=$.dX=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.iB(a)
if(q!=null)return q
if(typeof a=="function")return C.Q
t=Object.getPrototypeOf(a)
if(t==null)return C.B
if(t===Object.prototype)return C.B
if(typeof r=="function"){p=$.dX
if(p==null)p=$.dX=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
eY:function(a,b){if(a<0||a>4294967295)throw H.d(P.aG(a,0,4294967295,"length",null))
return J.f_(new Array(a),b)},
eZ:function(a,b){if(a<0)throw H.d(P.eQ("Length must be a non-negative integer: "+a))
return H.c(new Array(a),b.h("m<0>"))},
f_:function(a,b){return J.eq(H.c(a,b.h("m<0>")),b)},
eq:function(a,b){a.fixed$length=Array
return a},
bF:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b4.prototype
return J.c_.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.aD.prototype
if(typeof a=="boolean")return J.bZ.prototype
if(a.constructor==Array)return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eK(a)},
fD:function(a){if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
is:function(a){if(typeof a=="number")return J.av.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
eJ:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
fE:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eK(a)},
it:function(a){if(typeof a=="number")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aa.prototype
return a},
fF:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eK(a)},
h3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.is(a).m(a,b)},
aS:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bF(a).w(a,b)},
el:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.eJ(a).A(a,b)},
h4:function(a,b,c,d){return J.fF(a).cG(a,b,c,d)},
h5:function(a,b,c,d){return J.fF(a).cR(a,b,c,d)},
eP:function(a,b){return J.fD(a).H(a,b)},
aT:function(a){return J.bF(a).gj(a)},
cG:function(a){return J.fD(a).gF(a)},
ap:function(a){return J.fE(a).gk(a)},
cH:function(a){return J.bF(a).i(a)},
h6:function(a,b){return J.it(a).aS(a,b)},
W:function W(){},
bZ:function bZ(){},
aD:function aD(){},
aw:function aw(){},
c6:function c6(){},
aa:function aa(){},
ah:function ah(){},
m:function m(a){this.$ti=a},
d8:function d8(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
av:function av(){},
b4:function b4(){},
c_:function c_(){},
ag:function ag(){}},P={
hv:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.io()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aQ(new P.dE(r),1)).observe(t,{childList:true})
return new P.dD(r,t,s)}else if(self.setImmediate!=null)return P.ip()
return P.iq()},
hw:function(a){self.scheduleImmediate(H.aQ(new P.dF(u.M.a(a)),0))},
hx:function(a){self.setImmediate(H.aQ(new P.dG(u.M.a(a)),0))},
hy:function(a){u.M.a(a)
P.hF(0,a)},
hF:function(a,b){var t=new P.e1()
t.cv(a,b)
return t},
cD:function(a){return new P.cm(new P.D($.w,a.h("D<0>")),a.h("cm<0>"))},
cC:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
aM:function(a,b){P.hV(a,b)},
cB:function(a,b){b.aK(0,a)},
cA:function(a,b){b.by(H.ao(a),H.am(a))},
hV:function(a,b){var t,s,r=new P.e4(b),q=new P.e5(b)
if(a instanceof P.D)a.bt(r,q,u.z)
else{t=u.z
if(u.d.b(a))a.aR(r,q,t)
else{s=new P.D($.w,u.c)
s.a=4
s.c=a
s.bt(r,q,t)}}},
cE:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.w.bK(new P.e8(t),u.q,u.S,u.z)},
hz:function(a){return new P.aK(a,1)},
fd:function(){return C.Z},
fe:function(a){return new P.aK(a,3)},
fv:function(a,b){return new P.bt(a,b.h("bt<0>"))},
cS:function(a,b){var t=H.eF(a,"error",u.K)
return new P.aY(t,b==null?P.h9(a):b)},
h9:function(a){var t
if(u.C.b(a)){t=a.gas()
if(t!=null)return t}return C.L},
dN:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.aa()
b.a=a.a
b.c=a.c
P.aJ(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.bs(r)}},
aJ:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.t,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.e6(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aJ(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.e6(d,d,l.b,k.a,k.b)
return}g=$.w
if(g!==h)$.w=h
else g=d
b=b.c
if((b&15)===8)new P.dV(q,c,p).$0()
else if(j){if((b&1)!==0)new P.dU(q,k).$0()}else if((b&2)!==0)new P.dT(c,q).$0()
if(g!=null)$.w=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.h("V<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.ab(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dN(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.ab(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
ia:function(a,b){var t
if(u.ag.b(a))return b.bK(a,u.z,u.K,u.j)
t=u.bI
if(t.b(a))return t.a(a)
throw H.d(P.h7(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
i9:function(){var t,s
for(t=$.aN;t!=null;t=$.aN){$.bD=null
s=t.b
$.aN=s
if(s==null)$.bC=null
t.a.$0()}},
ie:function(){$.eB=!0
try{P.i9()}finally{$.bD=null
$.eB=!1
if($.aN!=null)$.eN().$1(P.fB())}},
fy:function(a){var t=new P.cn(a),s=$.bC
if(s==null){$.aN=$.bC=t
if(!$.eB)$.eN().$1(P.fB())}else $.bC=s.b=t},
id:function(a){var t,s,r,q=$.aN
if(q==null){P.fy(a)
$.bD=$.bC
return}t=new P.cn(a)
s=$.bD
if(s==null){t.b=q
$.aN=$.bD=t}else{r=s.b
t.b=r
$.bD=s.b=t
if(r==null)$.bC=t}},
iG:function(a){var t=null,s=$.w
if(C.e===s){P.aO(t,t,C.e,a)
return}P.aO(t,t,s,u.M.a(s.bv(a)))},
j0:function(a,b){H.eF(a,"stream",u.K)
return new P.cv(b.h("cv<0>"))},
e6:function(a,b,c,d,e){P.id(new P.e7(d,e))},
fw:function(a,b,c,d,e){var t,s=$.w
if(s===c)return d.$0()
$.w=c
t=s
try{s=d.$0()
return s}finally{$.w=t}},
fx:function(a,b,c,d,e,f,g){var t,s=$.w
if(s===c)return d.$1(e)
$.w=c
t=s
try{s=d.$1(e)
return s}finally{$.w=t}},
ib:function(a,b,c,d,e,f,g,h,i){var t,s=$.w
if(s===c)return d.$2(e,f)
$.w=c
t=s
try{s=d.$2(e,f)
return s}finally{$.w=t}},
aO:function(a,b,c,d){u.M.a(d)
if(C.e!==c)d=c.bv(d)
P.fy(d)},
dE:function dE(a){this.a=a},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.a=a},
dG:function dG(a){this.a=a},
e1:function e1(){},
e2:function e2(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=!1
this.$ti=b},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
e8:function e8(a){this.a=a},
aK:function aK(a,b){this.a=a
this.b=b},
aL:function aL(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
bt:function bt(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b){this.a=a
this.b=b},
co:function co(){},
bs:function bs(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dK:function dK(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a},
dU:function dU(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
cn:function cn(a){this.a=a
this.b=null},
bi:function bi(){},
ds:function ds(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
bj:function bj(){},
cv:function cv(a){this.$ti=a},
bx:function bx(){},
e7:function e7(a,b){this.a=a
this.b=b},
cu:function cu(){},
e_:function e_(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function(a,b){return new H.b5(a.h("@<0>").v(b).h("b5<1,2>"))},
hn:function(a){return new P.ab(a.h("ab<0>"))},
ho:function(a){return new P.ab(a.h("ab<0>"))},
ev:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
hA:function(a,b,c){var t=new P.aB(a,b,c.h("aB<0>"))
t.c=a.e
return t},
hj:function(a,b,c){var t,s
if(P.eC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.c([],u.s)
C.a.n($.S,a)
try{P.i8(a,t)}finally{if(0>=$.S.length)return H.k($.S,-1)
$.S.pop()}s=P.f7(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
eW:function(a,b,c){var t,s
if(P.eC(a))return b+"..."+c
t=new P.cd(b)
C.a.n($.S,a)
try{s=t
s.a=P.f7(s.a,a,", ")}finally{if(0>=$.S.length)return H.k($.S,-1)
$.S.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
eC:function(a){var t,s
for(t=$.S.length,s=0;s<t;++s)if(a===$.S[s])return!0
return!1},
i8:function(a,b){var t,s,r,q,p,o,n,m=a.gF(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=H.j(m.gu())
C.a.n(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return H.k(b,-1)
s=b.pop()
if(0>=b.length)return H.k(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.l()){if(k<=4){C.a.n(b,H.j(q))
return}s=H.j(q)
if(0>=b.length)return H.k(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.l();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2;--k}C.a.n(b,"...")
return}}r=H.j(q)
s=H.j(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.n(b,n)
C.a.n(b,r)
C.a.n(b,s)},
et:function(a,b){var t,s,r=P.hn(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.h)(a),++s)r.n(0,b.a(a[s]))
return r},
f2:function(a){var t,s={}
if(P.eC(a))return"{...}"
t=new P.cd("")
try{C.a.n($.S,a)
t.a+="{"
s.a=!0
a.bD(0,new P.db(s,t))
t.a+="}"}finally{if(0>=$.S.length)return H.k($.S,-1)
$.S.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
ab:function ab(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cs:function cs(a){this.a=a
this.c=this.b=null},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
b3:function b3(){},
b9:function b9(){},
db:function db(a,b){this.a=a
this.b=b},
aE:function aE(){},
bf:function bf(){},
bq:function bq(){},
by:function by(){},
hi:function(a){if(a instanceof H.T)return a.i(0)
return"Instance of '"+H.dm(a)+"'"},
f1:function(a,b,c,d){var t,s=c?J.eZ(a,d):J.eY(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
G:function(a,b,c){var t
if(b)return P.f0(a,c)
t=J.eq(P.f0(a,c),c)
return t},
f0:function(a,b){var t,s
if(Array.isArray(a))return H.c(a.slice(0),b.h("m<0>"))
t=H.c([],b.h("m<0>"))
for(s=J.cG(a);s.l();)C.a.n(t,s.gu())
return t},
ht:function(a){return new H.c0(a,H.hl(a,!1,!0,!1,!1,!1))},
f7:function(a,b,c){var t=J.cG(b)
if(!t.l())return a
if(c.length===0){do a+=H.j(t.gu())
while(t.l())}else{a+=H.j(t.gu())
for(;t.l();)a=a+c+H.j(t.gu())}return a},
bU:function(a){if(typeof a=="number"||H.fs(a)||null==a)return J.cH(a)
if(typeof a=="string")return JSON.stringify(a)
return P.hi(a)},
cR:function(a){return new P.aX(a)},
eQ:function(a){return new P.a2(!1,null,null,a)},
h7:function(a,b,c){return new P.a2(!0,a,b,c)},
dn:function(a,b){return new P.bd(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
f3:function(a,b,c){if(0>a||a>c)throw H.d(P.aG(a,0,c,"start",null))
if(a>b||b>c)throw H.d(P.aG(b,a,c,"end",null))
return b},
dp:function(a,b){if(a<0)throw H.d(P.aG(a,0,null,b,null))
return a},
ep:function(a,b,c,d,e){var t=H.ac(e==null?J.ap(b):e)
return new P.bW(t,!0,a,c,"Index out of range")},
a1:function(a){return new P.cj(a)},
fa:function(a){return new P.ch(a)},
cb:function(a){return new P.bh(a)},
a0:function(a){return new P.bQ(a)},
v:function v(){},
aX:function aX(a){this.a=a},
cg:function cg(){},
c4:function c4(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bW:function bW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cj:function cj(a){this.a=a},
ch:function ch(a){this.a=a},
bh:function bh(a){this.a=a},
bQ:function bQ(a){this.a=a},
bg:function bg(){},
bR:function bR(a){this.a=a},
dJ:function dJ(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
l:function l(){},
E:function E(){},
C:function C(){},
r:function r(){},
cw:function cw(){},
cd:function cd(a){this.a=a},
fM:function(a,b,c){H.e9(c,u.H,"T","min")
return Math.min(c.a(a),c.a(b))},
fL:function(a,b,c){H.e9(c,u.H,"T","max")
return Math.max(c.a(a),c.a(b))},
ct:function ct(){this.b=this.a=0},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
hq:function(a){var t=new Path2D(a)
t.toString
return t},
dY:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ff:function(a,b,c,d){var t=W.dY(W.dY(W.dY(W.dY(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
dH:function(a,b,c,d,e){var t=W.fz(new W.dI(c),u.B),s=t!=null
if(s&&!0){u.A.a(t)
if(s)J.h4(a,b,t,!1)}return new W.bo(a,b,t,!1,e.h("bo<0>"))},
fz:function(a,b){var t=$.w
if(t===C.e)return a
return t.cZ(a,b)},
e:function e(){},
bK:function bK(){},
bM:function bM(){},
as:function as(){},
b_:function b_(){},
a_:function a_(){},
d0:function d0(){},
b0:function b0(){},
a:function a(){},
b:function b(){},
J:function J(){},
bV:function bV(){},
R:function R(){},
Q:function Q(){},
c5:function c5(){},
ca:function ca(){},
Z:function Z(){},
aI:function aI(){},
dC:function dC(a){this.a=a},
bm:function bm(){},
eo:function eo(a,b){this.a=a
this.$ti=b},
bn:function bn(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
dI:function dI(a){this.a=a}},A={au:function au(a,b){this.a=a
this.$ti=b},d7:function d7(a){this.a=a},bp:function bp(a,b){this.a=a
this.b=null
this.$ti=b},dq:function dq(){},dr:function dr(a){this.a=a},cU:function cU(){},cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},aF:function aF(a,b,c,d,e){var _=this
_.aL=a
_.d0=b
_.d1=c
_.dE=d
_.x=4
_.y=0
_.dy=_.dx=_.db=null
_.a=e
_.r=_.f=_.e=_.d=null},dl:function dl(){},dj:function dj(){},dk:function dk(){},
eX:function(a,b){return A.hk(a,b,b)},
hk:function(a,b,c){return P.fv(function(){var t=a,s=b
var r=0,q=1,p,o,n
return function $async$eX(d,e){if(d===1){p=e
r=q}while(true)switch(r){case 0:o=t.length,n=0
case 2:if(!(n<t.length)){r=4
break}r=5
return P.hz(t[n])
case 5:case 3:t.length===o||(0,H.h)(t),++n
r=2
break
case 4:return P.fd()
case 1:return P.fe(p)}}},c)},
bA:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fq:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},T={cX:function cX(a,b){var _=this
_.c=a
_.d=8
_.f=b
_.r=null},cY:function cY(){},cZ:function cZ(){}},L={aU:function aU(){}},Z={bJ:function bJ(){},cI:function cI(a){this.a=a},cJ:function cJ(a){this.a=a},cK:function cK(a){this.a=a},bN:function bN(a,b,c,d,e,f,g,h){var _=this
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
_.b=_.a=null},aV:function aV(){}},V={
en:function(a){var t=new V.bS(0,6.283185307179586,0.08,a,new V.du(),C.f)
t.a8(C.f,null,null)
t.c1(C.f)
return t},
du:function du(){},
cf:function cf(){},
bL:function bL(){},
bP:function bP(){},
bS:function bS(a,b,c,d,e,f){var _=this
_.d2=a
_.d3=b
_.d4=c
_.d5=d
_.r1=e
_.x=4
_.y=0
_.dy=_.dx=_.db=null
_.a=f
_.r=_.f=_.e=_.d=null},
c7:function c7(){},
c8:function c8(){},
ay:function ay(a){var _=this
_.x=4
_.y=0
_.dy=_.dx=_.db=null
_.a=a
_.r=_.f=_.e=_.d=null},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},U={
eV:function(a){var t=new U.bT(a,C.f)
t.a8(C.f,null,null)
t.cp(a)
return t},
bY:function bY(){},
bT:function bT(a,b){var _=this
_.fx=!1
_.x=a
_.a=b
_.r=_.f=_.e=_.d=null},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
d3:function d3(a){this.a=a}},Y={n:function n(){},df:function df(a){this.a=a},de:function de(a){this.a=a},dg:function dg(a,b){this.a=a
this.b=b},dc:function dc(){},dd:function dd(a){this.a=a},U:function U(a){this.b=a},P:function P(){},d4:function d4(){this.a=null},H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},c3:function c3(){},bb:function bb(a,b){this.c=a
this.a=b},a5:function a5(a,b){this.c=a
this.a=b},a6:function a6(a,b){this.c=a
this.a=b},a4:function a4(a,b){this.c=a
this.a=b},ba:function ba(a){this.a=a}},K={I:function I(){},dz:function dz(a,b){this.a=a
this.b=b},dA:function dA(a,b){this.a=a
this.b=b},dy:function dy(a,b){this.a=a
this.b=b},dx:function dx(){},ck:function ck(){}},F={bO:function bO(a){this.e=null
this.b=a
this.d=null},d_:function d_(){},
da:function(a,b,c){return F.hp(a,b,c,c)},
hp:function(a,b,c,d){return P.fv(function(){var t=a,s=b,r=c
var q=0,p=1,o,n,m
return function $async$da(e,f){if(e===1){o=f
q=p}while(true)switch(q){case 0:n=0
case 2:if(!(n<t.length)){q=4
break}m=t[n]
q=H.eE(s.$2(n,m))?5:6
break
case 5:q=7
return m
case 7:case 6:case 3:++n
q=2
break
case 4:return P.fd()
case 1:return P.fe(o)}}},d)},
eh:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d}},B={
A:function(a,b,c){var t,s=H.c([],u.Y)
if(c>0)for(t=b;t<a;t+=c)C.a.n(s,t)
else for(t=b;t>a;t+=c)C.a.n(s,t)
return s},
eI:function(a,b){var t,s,r
if(a.length===0)return H.c([],b.h("m<t<q,0>>"))
t=H.c([],b.h("m<t<q,0>>"))
for(s=u.dq.v(b).h("t<1,2>"),r=0;r<a.length;++r)C.a.n(t,new S.t(r,a[r],s))
return t},
fJ:function(a,b,c){var t,s,r,q,p,o,n=H.c([],u.b)
for(t=B.A(a,0,1),s=t.length,r=a-1,q=u.n,p=0;p<t.length;t.length===s||(0,H.h)(t),++p){o=t[p]/r
n.push(H.c([c*(1-o)+b*o],q))}return S.aq(null,n)},
ik:function(a,b,c){var t,s,r,q=B.A(C.b.a2((a-b)/c),0,1),p=H.c([],u.b)
for(t=q.length,s=u.n,r=0;r<q.length;q.length===t||(0,H.h)(q),++r)p.push(H.c([q[r]*c+b],s))
return S.aq(null,p)},
bI:function(a,b,c){var t,s,r,q,p=a.length
if(p===0)return a
if(p>b)throw H.d("Trying to stretch an array to a length shorter than its own")
t=B.A(b,0,1)
s=H.B(t)
r=s.h("K<1,i>")
q=new H.K(t,s.h("i(1)").a(new B.ej(b,p)),r)
p=H.c([],c.h("m<0>"))
for(t=new H.X(q,q.gk(q),r.h("X<x.E>")),r=r.h("x.E");t.l();){s=C.b.P(r.a(t.d))
if(s<0||s>=a.length)return H.k(a,s)
p.push(a[s])}return p},
fR:function(a,b){var t=F.da(a,new B.ek(b),b)
return P.G(t,!0,t.$ti.h("l.E"))},
fS:function(a,b){var t=P.G(a,!0,b)
if(0>=t.length)return H.k(t,-1)
t.pop()
return t},
iK:function(a,b){var t,s,r,q=H.c([],b.h("m<0>")),p=P.ho(b)
for(t=H.B(a).h("a8<1>"),s=new H.a8(a,t),s=new H.X(s,s.gk(s),t.h("X<x.E>")),t=t.h("x.E");s.l();){r=t.a(s.d)
if(!p.W(0,r)){C.a.n(q,r)
p.n(0,r)}}t=b.h("a8<0>")
return P.G(new H.a8(q,t),!0,t.h("x.E"))},
ej:function ej(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a}},S={
aq:function(a,b){var t,s,r=new S.aW(b)
if(a==null){t=r.gL(r).length
s=r.gL(r).length!==0?J.ap(C.a.gX(r.gL(r))):0
a=new S.t(t,s,u.o)
t=a}else t=a
r.scw(u.o.a(t))
return r},
em:function(a,b){var t,s,r,q,p,o,n,m,l=b.b,k=H.c([],u.b)
for(t=B.A(b.a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.h)(t),++q){p=H.c([],r)
for(o=B.A(l,0,1),n=o.length,m=0;m<o.length;o.length===n||(0,H.h)(o),++m)p.push(a)
k.push(p)}return S.aq(b,k)},
eR:function(a){var t,s,r,q,p,o=H.c([],u.b)
for(t=a.length,s=u.n,r=0;q=a.length,r<q;a.length===t||(0,H.h)(a),++r){p=a[r]
o.push(H.c([p.a,p.b,p.c],s))}return S.aq(new S.t(q,3,u.o),o)},
h8:function(a){var t,s,r,q,p,o,n,m,l,k=H.c([],u.b)
for(t=B.A(a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.h)(t),++q){p=t[q]
o=H.c([],r)
for(n=B.A(a,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.h)(n),++l)if(p===n[l])o.push(1)
else o.push(0)
k.push(o)}return S.aq(new S.t(a,a,u.o),k)},
aW:function aW(a){this.a=a
this.b=null},
cO:function cO(a){this.a=a},
cP:function cP(a){this.a=a},
cN:function cN(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
cL:function cL(a){this.a=a},
cQ:function cQ(a){this.a=a},
t:function t(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},M={f:function f(a,b,c){this.a=a
this.b=b
this.c=c},dB:function dB(a){this.a=a}},G={
iC:function(){var t,s,r,q,p=document,o=p.getElementById("bresenham-line")
o.toString
t=H.c([],u.E)
s=new Y.ba(0)
s.at(0)
p=p.createElement("canvas")
u.gA.a(p)
r=new Z.bN(p,o,t,C.c,C.c,s,C.c,C.c)
r.a=new F.bO($.aR())
o.appendChild(p).toString
q=new G.cV()
q.cr()
q.x=r
q.gt(q).ga4()
q.gt(q).bw(q.gq())
p=q.gq()
p.r=q.gt(q)
p.gt(p).bw(p)
o=p.gt(p)
t=o.ga4()
t.ci(o)
o=o.d.getContext("2d")
o.toString
t.e=o
p.d=p.c/1.7777777777777777
o=p.gt(p).ga4()
t=p.c
s=p.d
o.gG().setTransform(1280/t,0,0,-720/s,640-0/t,360-0/s)
p.gt(p).ga4().aO(p.f)
q.Z()},
cV:function cV(){var _=this
_.a=0
_.x=_.f=_.d=null}}
var w=[C,H,J,P,W,A,T,L,Z,V,U,Y,K,F,B,S,M,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.er.prototype={}
J.W.prototype={
w:function(a,b){return a===b},
gj:function(a){return H.a7(a)},
i:function(a){return"Instance of '"+H.dm(a)+"'"}}
J.bZ.prototype={
i:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iy:1}
J.aD.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gj:function(a){return 0},
$iC:1}
J.aw.prototype={
gj:function(a){return 0},
i:function(a){return String(a)}}
J.c6.prototype={}
J.aa.prototype={}
J.ah.prototype={
i:function(a){var t=a[$.fT()]
if(t==null)return this.ck(a)
return"JavaScript function for "+J.cH(t)},
$iat:1}
J.m.prototype={
n:function(a,b){H.B(a).c.a(b)
if(!!a.fixed$length)H.o(P.a1("add"))
a.push(b)},
dh:function(a,b){var t
if(!!a.fixed$length)H.o(P.a1("remove"))
for(t=0;t<a.length;++t)if(J.aS(a[t],b)){a.splice(t,1)
return!0}return!1},
E:function(a,b){H.B(a).h("l<1>").a(b)
if(!!a.fixed$length)H.o(P.a1("addAll"))
this.cF(a,b)
return},
cF:function(a,b){var t,s
u.m.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.a0(a))
for(s=0;s<t;++s)a.push(b[s])},
bG:function(a,b){var t,s=P.f1(a.length,"",!1,u.R)
for(t=0;t<a.length;++t)this.R(s,t,H.j(a[t]))
return s.join(b)},
dd:function(a){return this.bG(a,"")},
O:function(a,b){var t,s,r
H.B(a).h("1(1,1)").a(b)
t=a.length
if(t===0)throw H.d(H.d6())
if(0>=t)return H.k(a,0)
s=a[0]
for(r=1;r<t;++r){s=b.$2(s,a[r])
if(t!==a.length)throw H.d(P.a0(a))}return s},
d7:function(a,b,c,d){var t,s,r
d.a(b)
H.B(a).v(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.d(P.a0(a))}return s},
H:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gX:function(a){if(a.length>0)return a[0]
throw H.d(H.d6())},
gbI:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.d(H.d6())},
b5:function(a,b,c,d,e){var t,s,r,q
H.B(a).h("l<1>").a(d)
if(!!a.immutable$list)H.o(P.a1("setRange"))
P.f3(b,c,a.length)
t=c-b
if(t===0)return
P.dp(e,"skipCount")
s=d
if(e+t>s.length)throw H.d(P.cb("Too few elements"))
if(e<b)for(r=t-1;r>=0;--r){q=e+r
if(q>=s.length)return H.k(s,q)
a[b+r]=s[q]}else for(r=0;r<t;++r){q=e+r
if(q>=s.length)return H.k(s,q)
a[b+r]=s[q]}},
c6:function(a,b,c,d){return this.b5(a,b,c,d,0)},
bB:function(a,b){var t,s
H.B(a).h("y(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!H.eE(b.$1(a[s])))return!1
if(a.length!==t)throw H.d(P.a0(a))}return!0},
W:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aS(a[t],b))return!0
return!1},
i:function(a){return P.eW(a,"[","]")},
gF:function(a){return new J.ar(a,a.length,H.B(a).h("ar<1>"))},
gj:function(a){return H.a7(a)},
gk:function(a){return a.length},
A:function(a,b){if(b>=a.length||b<0)throw H.d(H.eH(a,b))
return a[b]},
R:function(a,b,c){H.B(a).c.a(c)
if(!!a.immutable$list)H.o(P.a1("indexed set"))
if(b>=a.length||b<0)throw H.d(H.eH(a,b))
a[b]=c},
$il:1,
$ip:1}
J.d8.prototype={}
J.ar.prototype={
gu:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.h(r))
t=s.c
if(t>=q){s.sbm(null)
return!1}s.sbm(r[t]);++s.c
return!0},
sbm:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
J.av.prototype={
P:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.a1(""+a+".toInt()"))},
a2:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.d(P.a1(""+a+".ceil()"))},
bO:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a1(""+a+".round()"))},
aP:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aS:function(a,b){var t,s
if(b>20)throw H.d(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0)s=1/a<0
else s=!1
if(s)return"-"+t
return t},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
aq:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
K:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.a1("Result of truncating division is "+H.j(t)+": "+H.j(a)+" ~/ "+b))},
cU:function(a,b){var t
if(a>0)t=this.cT(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
cT:function(a,b){return b>31?0:a>>>b},
$ii:1,
$iF:1}
J.b4.prototype={$iq:1}
J.c_.prototype={}
J.ag.prototype={
m:function(a,b){H.bz(b)
return a+b},
cg:function(a,b,c){if(b<0)throw H.d(P.dn(b,null))
if(b>c)throw H.d(P.dn(b,null))
if(c>a.length)throw H.d(P.dn(c,null))
return a.substring(b,c)},
i:function(a){return a},
gj:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gk:function(a){return a.length},
$idi:1,
$iaj:1}
H.b6.prototype={
i:function(a){var t="LateInitializationError: "+this.a
return t}}
H.ei.prototype={
$0:function(){var t=new P.D($.w,u.ck)
t.bg(null)
return t},
$S:15}
H.b1.prototype={}
H.x.prototype={
gF:function(a){var t=this
return new H.X(t,t.gk(t),H.M(t).h("X<x.E>"))},
O:function(a,b){var t,s,r,q=this
H.M(q).h("x.E(x.E,x.E)").a(b)
t=q.gk(q)
if(t===0)throw H.d(H.d6())
s=q.H(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.H(0,r))
if(t!==q.gk(q))throw H.d(P.a0(q))}return s}}
H.bk.prototype={
cs:function(a,b,c,d){var t,s=this.b
P.dp(s,"start")
t=this.c
if(t!=null){P.dp(t,"end")
if(s>t)throw H.d(P.aG(s,0,t,"start",null))}},
gcL:function(){var t=J.ap(this.a),s=this.c
if(s==null||s>t)return t
return s},
gcV:function(){var t=J.ap(this.a),s=this.b
if(s>t)return t
return s},
gk:function(a){var t,s=J.ap(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.B()
return t-r},
H:function(a,b){var t=this,s=t.gcV()+b
if(b<0||s>=t.gcL())throw H.d(P.ep(b,t,"index",null,null))
return J.eP(t.a,s)},
dr:function(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.fE(o),m=n.gk(o),l=q.c
if(l!=null&&l<m)m=l
t=m-p
if(t<=0){o=q.$ti.c
return b?J.eZ(0,o):J.eY(0,o)}s=P.f1(t,n.H(o,p),b,q.$ti.c)
for(r=1;r<t;++r){C.a.R(s,r,n.H(o,p+r))
if(n.gk(o)<m)throw H.d(P.a0(q))}return s},
dq:function(a){return this.dr(a,!0)}}
H.X.prototype={
gu:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a,q=r.gk(r)
if(s.b!==q)throw H.d(P.a0(r))
t=s.c
if(t>=q){s.sbb(null)
return!1}s.sbb(r.H(0,t));++s.c
return!0},
sbb:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
H.K.prototype={
gk:function(a){return J.ap(this.a)},
H:function(a,b){return this.b.$1(J.eP(this.a,b))}}
H.az.prototype={
gF:function(a){var t=this.a
return new H.bl(new J.ar(t,t.length,H.B(t).h("ar<1>")),this.b,this.$ti.h("bl<1>"))}}
H.bl.prototype={
l:function(){var t,s,r
for(t=this.a,s=t.$ti.c,r=this.b;t.l();)if(H.eE(r.$1(s.a(t.d))))return!0
return!1},
gu:function(){var t=this.a
return t.$ti.c.a(t.d)}}
H.a8.prototype={
gk:function(a){return this.a.length},
H:function(a,b){var t=this.a,s=t.length,r=s-1-b
if(r<0||r>=s)return H.k(t,r)
return t[r]}}
H.bX.prototype={
i:function(a){var t="<"+C.a.bG([H.ir(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+t}}
H.af.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.iy(H.fC(this.a),this.$ti)}}
H.dv.prototype={
I:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.bc.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.c1.prototype={
i:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.ci.prototype={
i:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.dh.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.b2.prototype={}
H.br.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iai:1}
H.T.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.fQ(s==null?"unknown":s)+"'"},
$iat:1,
gdC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ce.prototype={}
H.cc.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.fQ(t)+"'"}}
H.aC.prototype={
w:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.aC))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gj:function(a){var t,s=this.c
if(s==null)t=H.a7(this.a)
else t=typeof s!=="object"?J.aT(s):H.a7(s)
return(t^H.a7(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.dm(u.K.a(t))+"'")}}
H.c9.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.cl.prototype={
i:function(a){return"Assertion failed: "+P.bU(this.a)}}
H.b5.prototype={
gk:function(a){return this.a},
gbH:function(){return new H.b7(this,H.M(this).h("b7<1>"))},
A:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.aA(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.aA(q,b)
r=s==null?o:s.b
return r}else return p.da(b)},
da:function(a){var t,s,r=this.d
if(r==null)return null
t=this.bp(r,J.aT(a)&0x3ffffff)
s=this.bF(t,a)
if(s<0)return null
return t[s].b},
R:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.M(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.bc(t==null?n.b=n.aB():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.bc(s==null?n.c=n.aB():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.aB()
q=J.aT(b)&0x3ffffff
p=n.bp(r,q)
if(p==null)n.aD(r,q,[n.av(b,c)])
else{o=n.bF(p,b)
if(o>=0)p[o].b=c
else p.push(n.av(b,c))}}},
bD:function(a,b){var t,s,r=this
H.M(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.a0(r))
t=t.c}},
bc:function(a,b,c){var t,s=this,r=H.M(s)
r.c.a(b)
r.Q[1].a(c)
t=s.aA(a,b)
if(t==null)s.aD(a,b,s.av(b,c))
else t.b=c},
av:function(a,b){var t=this,s=H.M(t),r=new H.d9(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
bF:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aS(a[s].a,b))return s
return-1},
i:function(a){return P.f2(this)},
aA:function(a,b){return a[b]},
bp:function(a,b){return a[b]},
aD:function(a,b,c){a[b]=c},
cK:function(a,b){delete a[b]},
aB:function(){var t="<non-identifier-key>",s=Object.create(null)
this.aD(s,t,s)
this.cK(s,t)
return s}}
H.d9.prototype={}
H.b7.prototype={
gk:function(a){return this.a.a},
gF:function(a){var t=this.a,s=new H.b8(t,t.r,this.$ti.h("b8<1>"))
s.c=t.e
return s}}
H.b8.prototype={
gu:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.a0(r))
t=s.c
if(t==null){s.sbd(null)
return!1}else{s.sbd(t.a)
s.c=t.c
return!0}},
sbd:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
H.ec.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.ed.prototype={
$2:function(a,b){return this.a(a,b)},
$S:20}
H.ee.prototype={
$1:function(a){return this.a(H.bz(a))},
$S:24}
H.c0.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
d6:function(a){var t=this.b.exec(a)
if(t==null)return null
return new H.dZ(t)},
$idi:1}
H.dZ.prototype={}
H.Y.prototype={
h:function(a){return H.cz(v.typeUniverse,this,a)},
v:function(a){return H.hO(v.typeUniverse,this,a)}}
H.cr.prototype={}
H.cx.prototype={
i:function(a){return H.N(this.a,null)}}
H.cq.prototype={
i:function(a){return this.a}}
H.bu.prototype={}
P.dE.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:7}
P.dD.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:36}
P.dF.prototype={
$0:function(){this.a.$0()},
$S:8}
P.dG.prototype={
$0:function(){this.a.$0()},
$S:8}
P.e1.prototype={
cv:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aQ(new P.e2(this,b),0),a)
else throw H.d(P.a1("`setTimeout()` not found."))}}
P.e2.prototype={
$0:function(){this.b.$0()},
$S:0}
P.cm.prototype={
aK:function(a,b){var t,s=this,r=s.$ti
r.h("1/?").a(b)
if(b==null)b=r.c.a(b)
if(!s.b)s.a.bg(b)
else{t=s.a
if(r.h("V<1>").b(b))t.bi(b)
else t.ax(r.c.a(b))}},
by:function(a,b){var t=this.a
if(this.b)t.U(a,b)
else t.cH(a,b)}}
P.e4.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:10}
P.e5.prototype={
$2:function(a,b){this.a.$2(1,new H.b2(a,u.j.a(b)))},
$S:11}
P.e8.prototype={
$2:function(a,b){this.a(H.ac(a),b)},
$S:12}
P.aK.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.j(this.a)+")"}}
P.aL.prototype={
gu:function(){var t=this.c
if(t==null)return this.$ti.c.a(this.b)
return t.gu()},
l:function(){var t,s,r,q,p,o,n=this
for(t=n.$ti.h("E<1>");!0;){s=n.c
if(s!=null)if(s.l())return!0
else n.sbr(null)
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.aK){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.sbf(null)
return!1}if(0>=p.length)return H.k(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=t.a(J.cG(s))
if(o instanceof P.aL){s=n.d
if(s==null)s=n.d=[]
C.a.n(s,n.a)
n.a=o.a
continue}else{n.sbr(o)
continue}}}}else{n.sbf(r)
return!0}}return!1},
sbf:function(a){this.b=this.$ti.h("1?").a(a)},
sbr:function(a){this.c=this.$ti.h("E<1>?").a(a)},
$iE:1}
P.bt.prototype={
gF:function(a){return new P.aL(this.a(),this.$ti.h("aL<1>"))}}
P.aY.prototype={
i:function(a){return H.j(this.a)},
$iv:1,
gas:function(){return this.b}}
P.co.prototype={
by:function(a,b){var t
H.eF(a,"error",u.K)
t=this.a
if(t.a!==0)throw H.d(P.cb("Future already completed"))
t.U(a,b)}}
P.bs.prototype={
aK:function(a,b){var t,s=this.$ti
s.h("1/?").a(b)
t=this.a
if(t.a!==0)throw H.d(P.cb("Future already completed"))
t.bk(s.h("1/").a(b))}}
P.aA.prototype={
df:function(a){if((this.c&15)!==6)return!0
return this.b.b.aQ(u.al.a(this.d),a.a,u.U,u.K)},
d8:function(a){var t=this.e,s=u.z,r=u.K,q=a.a,p=this.$ti.h("2/"),o=this.b.b
if(u.ag.b(t))return p.a(o.dj(t,q,a.b,s,r,u.j))
else return p.a(o.aQ(u.bI.a(t),q,s,r))}}
P.D.prototype={
aR:function(a,b,c){var t,s,r,q=this.$ti
q.v(c).h("1/(2)").a(a)
t=$.w
if(t!==C.e){c.h("@<0/>").v(q.c).h("1(2)").a(a)
if(b!=null)b=P.ia(b,t)}s=new P.D(t,c.h("D<0>"))
r=b==null?1:3
this.aw(new P.aA(s,r,a,b,q.h("@<1>").v(c).h("aA<1,2>")))
return s},
dm:function(a,b){return this.aR(a,null,b)},
bt:function(a,b,c){var t,s=this.$ti
s.v(c).h("1/(2)").a(a)
t=new P.D($.w,c.h("D<0>"))
this.aw(new P.aA(t,19,a,b,s.h("@<1>").v(c).h("aA<1,2>")))
return t},
aw:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.aw(a)
return}s.a=r
s.c=t.c}P.aO(null,null,s.b,u.M.a(new P.dK(s,a)))}},
bs:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.bs(a)
return}n.a=t
n.c=o.c}m.a=n.ab(a)
P.aO(null,null,n.b,u.M.a(new P.dS(m,n)))}},
aa:function(){var t=u.F.a(this.c)
this.c=null
return this.ab(t)},
ab:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
bh:function(a){var t,s,r,q=this
q.a=1
try{a.aR(new P.dO(q),new P.dP(q),u.P)}catch(r){t=H.ao(r)
s=H.am(r)
P.iG(new P.dQ(q,t,s))}},
bk:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("V<1>").b(a))if(r.b(a))P.dN(a,s)
else s.bh(a)
else{t=s.aa()
r.c.a(a)
s.a=4
s.c=a
P.aJ(s,t)}},
ax:function(a){var t,s=this
s.$ti.c.a(a)
t=s.aa()
s.a=4
s.c=a
P.aJ(s,t)},
U:function(a,b){var t,s,r=this
u.j.a(b)
t=r.aa()
s=P.cS(a,b)
r.a=8
r.c=s
P.aJ(r,t)},
bg:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("V<1>").b(a)){this.bi(a)
return}this.cI(t.c.a(a))},
cI:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.aO(null,null,t.b,u.M.a(new P.dM(t,a)))},
bi:function(a){var t=this,s=t.$ti
s.h("V<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.aO(null,null,t.b,u.M.a(new P.dR(t,a)))}else P.dN(a,t)
return}t.bh(a)},
cH:function(a,b){this.a=1
P.aO(null,null,this.b,u.M.a(new P.dL(this,a,b)))},
$iV:1}
P.dK.prototype={
$0:function(){P.aJ(this.a,this.b)},
$S:0}
P.dS.prototype={
$0:function(){P.aJ(this.b,this.a.a)},
$S:0}
P.dO.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.ax(q.$ti.c.a(a))}catch(r){t=H.ao(r)
s=H.am(r)
q.U(t,s)}},
$S:7}
P.dP.prototype={
$2:function(a,b){this.a.U(u.K.a(a),u.j.a(b))},
$S:13}
P.dQ.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:0}
P.dM.prototype={
$0:function(){this.a.ax(this.b)},
$S:0}
P.dR.prototype={
$0:function(){P.dN(this.b,this.a)},
$S:0}
P.dL.prototype={
$0:function(){this.a.U(this.b,this.c)},
$S:0}
P.dV.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.bP(u.fO.a(r.d),u.z)}catch(q){t=H.ao(q)
s=H.am(q)
r=n.c&&u.t.a(n.b.a.c).a===t
p=n.a
if(r)p.c=u.t.a(n.b.a.c)
else p.c=P.cS(t,s)
p.b=!0
return}if(m instanceof P.D&&m.a>=4){if(m.a===8){r=n.a
r.c=u.t.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.dm(new P.dW(o),u.z)
r.b=!1}},
$S:0}
P.dW.prototype={
$1:function(a){return this.a},
$S:14}
P.dU.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.aQ(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.ao(m)
s=H.am(m)
r=this.a
r.c=P.cS(t,s)
r.b=!0}},
$S:0}
P.dT.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=u.t.a(n.a.a.c)
q=n.b
if(q.a.df(t)&&q.a.e!=null){q.c=q.a.d8(t)
q.b=!1}}catch(p){s=H.ao(p)
r=H.am(p)
q=u.t.a(n.a.a.c)
o=n.b
if(q.a===s)o.c=q
else o.c=P.cS(s,r)
o.b=!0}},
$S:0}
P.cn.prototype={}
P.bi.prototype={
gk:function(a){var t,s,r=this,q={},p=new P.D($.w,u.fJ)
q.a=0
t=r.$ti
s=t.h("~(1)?").a(new P.ds(q,r))
u.g5.a(new P.dt(q,p))
W.dH(r.a,r.b,s,!1,t.c)
return p}}
P.ds.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.dt.prototype={
$0:function(){this.b.bk(this.a.a)},
$S:0}
P.bj.prototype={}
P.cv.prototype={}
P.bx.prototype={$ifb:1}
P.e7.prototype={
$0:function(){var t=u.K.a(H.d(this.a))
t.stack=this.b.i(0)
throw t},
$S:0}
P.cu.prototype={
dk:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.e===$.w){a.$0()
return}P.fw(q,q,this,a,u.q)}catch(r){t=H.ao(r)
s=H.am(r)
P.e6(q,q,this,u.K.a(t),u.j.a(s))}},
dl:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.e===$.w){a.$1(b)
return}P.fx(q,q,this,a,b,u.q,c)}catch(r){t=H.ao(r)
s=H.am(r)
P.e6(q,q,this,u.K.a(t),u.j.a(s))}},
bv:function(a){return new P.e_(this,u.M.a(a))},
cZ:function(a,b){return new P.e0(this,b.h("~(0)").a(a),b)},
bP:function(a,b){b.h("0()").a(a)
if($.w===C.e)return a.$0()
return P.fw(null,null,this,a,b)},
aQ:function(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.w===C.e)return a.$1(b)
return P.fx(null,null,this,a,b,c,d)},
dj:function(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.w===C.e)return a.$2(b,c)
return P.ib(null,null,this,a,b,c,d,e,f)},
bK:function(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
P.e_.prototype={
$0:function(){return this.a.dk(this.b)},
$S:0}
P.e0.prototype={
$1:function(a){var t=this.c
return this.a.dl(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.ab.prototype={
cP:function(){return new P.ab(H.M(this).h("ab<1>"))},
gF:function(a){var t=this,s=new P.aB(t,t.r,H.M(t).h("aB<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
W:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return u.g.a(s[b])!=null}else return this.cJ(b)},
cJ:function(a){var t=this.d
if(t==null)return!1
return this.bn(t[this.bl(a)],a)>=0},
n:function(a,b){var t,s,r=this
H.M(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.be(t==null?r.b=P.ev():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.be(s==null?r.c=P.ev():s,b)}else return r.cE(b)},
cE:function(a){var t,s,r,q=this
H.M(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.ev()
s=q.bl(a)
r=t[s]
if(r==null)t[s]=[q.aC(a)]
else{if(q.bn(r,a)>=0)return!1
r.push(q.aC(a))}return!0},
be:function(a,b){H.M(this).c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.aC(b)
return!0},
cO:function(){this.r=this.r+1&1073741823},
aC:function(a){var t,s=this,r=new P.cs(H.M(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.cO()
return r},
bl:function(a){return J.aT(a)&1073741823},
bn:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aS(a[s].a,b))return s
return-1}}
P.cs.prototype={}
P.aB.prototype={
gu:function(){return this.$ti.c.a(this.d)},
l:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.d(P.a0(r))
else if(s==null){t.sbj(null)
return!1}else{t.sbj(t.$ti.h("1?").a(s.a))
t.c=s.b
return!0}},
sbj:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
P.b3.prototype={}
P.b9.prototype={}
P.db.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.j(a)
s.a=t+": "
s.a+=H.j(b)},
$S:21}
P.aE.prototype={
bD:function(a,b){var t,s,r=H.M(this)
r.h("~(1,2)").a(b)
for(t=this.gbH(),t=t.gF(t),r=r.Q[1];t.l();){s=t.gu()
b.$2(s,r.a(this.A(0,s)))}},
gk:function(a){var t=this.gbH()
return t.gk(t)},
i:function(a){return P.f2(this)},
$ic2:1}
P.bf.prototype={
i:function(a){return P.eW(this,"{","}")}}
P.bq.prototype={
dc:function(a,b){var t,s,r,q=this,p=q.cP()
for(t=P.hA(q,q.r,H.M(q).c),s=t.$ti.c;t.l();){r=s.a(t.d)
if(b.W(0,r))p.n(0,r)}return p},
$il:1,
$ibe:1}
P.by.prototype={}
P.v.prototype={
gas:function(){return H.am(this.$thrownJsError)}}
P.aX.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bU(t)
return"Assertion failed"}}
P.cg.prototype={}
P.c4.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gaz:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gay:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gaz()+p+n
if(!r.a)return m
t=r.gay()
s=P.bU(r.b)
return m+t+": "+s}}
P.bd.prototype={
gaz:function(){return"RangeError"},
gay:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.j(r):""
else if(r==null)t=": Not greater than or equal to "+H.j(s)
else if(r>s)t=": Not in inclusive range "+H.j(s)+".."+H.j(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.j(s)
return t}}
P.bW.prototype={
gaz:function(){return"RangeError"},
gay:function(){if(H.ac(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gk:function(a){return this.f}}
P.cj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ch.prototype={
i:function(a){var t="UnimplementedError: "+this.a
return t}}
P.bh.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bQ.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bU(t)+"."}}
P.bg.prototype={
i:function(a){return"Stack Overflow"},
gas:function(){return null},
$iv:1}
P.bR.prototype={
i:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.dJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.d5.prototype={
i:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.A.cg(r,0,75)+"..."
return s+"\n"+r}}
P.l.prototype={
gk:function(a){var t,s=this.gF(this)
for(t=0;s.l();)++t
return t},
H:function(a,b){var t,s,r
P.dp(b,"index")
for(t=this.gF(this),s=0;t.l();){r=t.gu()
if(b===s)return r;++s}throw H.d(P.ep(b,this,"index",null,s))},
i:function(a){return P.hj(this,"(",")")}}
P.E.prototype={}
P.C.prototype={
gj:function(a){return P.r.prototype.gj.call(C.P,this)},
i:function(a){return"null"}}
P.r.prototype={constructor:P.r,$ir:1,
w:function(a,b){return this===b},
gj:function(a){return H.a7(this)},
i:function(a){return"Instance of '"+H.dm(this)+"'"},
toString:function(){return this.i(this)}}
P.cw.prototype={
i:function(a){return""},
$iai:1}
P.cd.prototype={
gk:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.e.prototype={}
W.bK.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.bM.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.as.prototype={
sd9:function(a,b){a.height=b},
sdv:function(a,b){a.width=b},
$ias:1}
W.b_.prototype={
saM:function(a,b){a.fillStyle=b},
sb8:function(a,b){a.strokeStyle=b},
cf:function(a,b){return a.stroke(b)},
$ib_:1}
W.a_.prototype={
gk:function(a){return a.length}}
W.d0.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.b0.prototype={
i:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.j(s)+", "
t=a.top
t.toString
t=s+H.j(t)+") "
s=a.width
s.toString
s=t+H.j(s)+" x "
t=a.height
t.toString
return s+H.j(t)},
w:function(a,b){var t,s
if(b==null)return!1
if(u.J.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gj:function(a){var t,s,r,q=a.left
q.toString
q=C.b.gj(q)
t=a.top
t.toString
t=C.b.gj(t)
s=a.width
s.toString
s=C.b.gj(s)
r=a.height
r.toString
return W.ff(q,t,s,C.b.gj(r))},
$ieu:1}
W.a.prototype={
i:function(a){var t=a.localName
t.toString
return t},
$ia:1}
W.b.prototype={$ib:1}
W.J.prototype={
cG:function(a,b,c,d){return a.addEventListener(b,H.aQ(u.A.a(c),1),!1)},
cR:function(a,b,c,d){return a.removeEventListener(b,H.aQ(u.A.a(c),1),!1)},
$iJ:1}
W.bV.prototype={
gk:function(a){return a.length}}
W.R.prototype={$iR:1}
W.Q.prototype={
i:function(a){var t=a.nodeValue
return t==null?this.cj(a):t}}
W.c5.prototype={$ic5:1}
W.ca.prototype={
gk:function(a){return a.length}}
W.Z.prototype={}
W.aI.prototype={
gcX:function(a){var t=new P.D($.w,u.dL),s=u.c4.a(new W.dC(new P.bs(t,u.g4)))
this.cM(a)
s=W.fz(s,u.H)
s.toString
this.cS(a,s)
return t},
cS:function(a,b){var t=a.requestAnimationFrame(H.aQ(u.c4.a(b),1))
t.toString
return t},
cM:function(a){var t=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
t.toString
if(t)return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dC.prototype={
$1:function(a){this.a.aK(0,H.hR(a))},
$S:16}
W.bm.prototype={
i:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.j(s)+", "
t=a.top
t.toString
t=s+H.j(t)+") "
s=a.width
s.toString
s=t+H.j(s)+" x "
t=a.height
t.toString
return s+H.j(t)},
w:function(a,b){var t,s
if(b==null)return!1
if(u.J.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gj:function(a){var t,s,r,q=a.left
q.toString
q=C.b.gj(q)
t=a.top
t.toString
t=C.b.gj(t)
s=a.width
s.toString
s=C.b.gj(s)
r=a.height
r.toString
return W.ff(q,t,s,C.b.gj(r))}}
W.eo.prototype={}
W.bn.prototype={}
W.cp.prototype={}
W.bo.prototype={
d_:function(){var t,s=this,r=s.b
if(r==null)return $.eO()
t=s.d
if(t!=null)J.h5(r,s.c,u.A.a(t),!1)
s.b=null
s.scQ(null)
return $.eO()},
scQ:function(a){this.d=u.A.a(a)}}
W.dI.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:17}
P.ct.prototype={
cu:function(a){var t,s,r,q,p,o,n,m=this,l=4294967296
do{t=a>>>0
a=C.d.K(a-t,l)
s=a>>>0
a=C.d.K(a-s,l)
r=(~t>>>0)+(t<<21>>>0)
q=r>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.d.K(r-q,l)>>>0
r=((q^(q>>>24|s<<8))>>>0)*265
t=r>>>0
s=((s^s>>>24)>>>0)*265+C.d.K(r-t,l)>>>0
r=((t^(t>>>14|s<<18))>>>0)*21
t=r>>>0
s=((s^s>>>14)>>>0)*21+C.d.K(r-t,l)>>>0
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=r>>>0
p=C.d.K(r-q,l)
r=m.a*1037
o=m.a=r>>>0
n=m.b*1037+C.d.K(r-o,l)>>>0
m.b=n
o=(o^q)>>>0
m.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p>>>0)>>>0
m.b=p}while(a!==0)
if(p===0&&o===0)m.a=23063
m.a9()
m.a9()
m.a9()
m.a9()},
a9:function(){var t=this,s=t.a,r=4294901760*s,q=r>>>0,p=55905*s,o=p>>>0,n=o+q+t.b
s=n>>>0
t.a=s
t.b=C.d.K(p-o+(r-q)+(n-s),4294967296)>>>0},
$ihs:1}
P.ax.prototype={
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
w:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&this.b===b.b},
gj:function(a){var t=C.b.gj(this.a),s=C.b.gj(this.b),r=H.f8(H.f8(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.au.prototype={
gF:function(a){var t=this.a,s=this.$ti,r=s.h("E<1>"),q=H.B(t),p=q.h("@<1>").v(r).h("K<1,2>")
return new A.bp(P.G(new H.K(t,q.v(r).h("1(2)").a(new A.d7(this)),p),!1,p.h("x.E")),s.h("bp<1>"))}}
A.d7.prototype={
$1:function(a){return J.cG(this.a.$ti.h("l<1>").a(a))},
$S:function(){return this.a.$ti.h("E<1>(l<1>)")}}
A.bp.prototype={
l:function(){var t,s,r,q=this,p=q.a
if(p.length===0)return!1
for(t=0;s=p.length,t<s;++t)if(!p[t].l()){q.sbq(null)
return!1}if(s>4294967295)H.o(P.aG(s,0,4294967295,"length",null))
r=J.f_(new Array(s),q.$ti.c)
for(t=0;t<s;++t){if(t>=p.length)return H.k(p,t)
r[t]=p[t].gu()}q.sbq(r)
return!0},
gu:function(){var t=this.b
return t==null?H.o(P.cb("No element")):t},
sbq:function(a){this.b=this.$ti.h("p<1>?").a(a)},
$iE:1}
T.cX.prototype={
gt:function(a){var t=this.r
return t==null?H.o(H.u("display")):t},
bC:function(a){var t,s,r,q
u.a.a(a)
t=new T.cY()
s=H.c([],u.r)
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.h)(a),++q)C.a.E(s,t.$1(a[q]))
return B.iK(s,u.k)},
bL:function(a){var t,s,r,q,p="renderer"
for(t=this.bC(u.a.a(a)),s=H.B(t).h("a8<1>"),t=new H.a8(t,s),t=new H.X(t,t.gk(t),s.h("X<x.E>")),s=s.h("x.E");t.l();){r=s.a(t.d)
q=this.r
if(r instanceof K.I){q=(q==null?H.o(H.u("display")):q).a;(q==null?H.o(H.u(p)):q).di(r)}else if((q==null?H.o(H.u("display")):q).a==null)H.o(H.u(p))}},
bQ:function(a,b){u.y.a(b)
return!C.a.bB(b,new T.cZ())?H.c([C.c],u.l):b}}
T.cY.prototype={
$1:function(a){return a.a_()},
$S:18}
T.cZ.prototype={
$1:function(a){u.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:19}
L.aU.prototype={
ga4:function(){var t=this.a
return t==null?H.o(H.u("renderer")):t},
gq:function(){var t=this.b
return t==null?H.o(H.u("camera")):t},
bw:function(a){var t
this.b=a
t=this.d
C.x.sdv(t,1280)
C.x.sd9(t,720)},
ac:function(a){return a},
am:function(a,b){var t,s,r=this
r.gq()
t=F.eh(a,0,1280,-r.gq().c/2,r.gq().c/2)
r.gq()
s=F.eh(b,720,0,-r.gq().d/2,r.gq().d/2)
r.gq()
return new M.f(t,s,0).m(0,C.c)}}
Z.bJ.prototype={
ai:function(){var t=0,s=P.cD(u.W),r,q=this,p,o,n
var $async$ai=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:n=window
n.toString
t=3
return P.aM(C.Y.gcX(n),$async$ai)
case 3:p=b
n=q.f
if(n===0){q.f=p
n=p}o=p-n
q.f=n+o
r=o/1000
t=1
break
case 1:return P.cB(r,s)}})
return P.cC($async$ai,s)},
ao:function(a){var t,s,r,q
u.p.a(a)
t=this.d.getBoundingClientRect()
s=t.left
s.toString
r=t.right
r.toString
this.gq()
q=F.eh(a.a,s,r,0,1280)
r=t.top
r.toString
s=t.bottom
s.toString
this.gq()
return new M.f(q,F.eh(a.b,r,s,0,720),0)},
aJ:function(){var t=this,s=t.d,r=u.do,q=r.h("~(1)?"),p=q.a(new Z.cI(t))
u.g5.a(null)
r=r.c
C.a.E(t.r,H.c([W.dH(s,"mousemove",p,!1,r),W.dH(s,"mousedown",q.a(new Z.cJ(t)),!1,r),W.dH(s,"mouseup",q.a(new Z.cK(t)),!1,r)],u.E))},
dt:function(){var t,s,r
for(t=this.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)t[r].d_()}}
Z.cI.prototype={
$1:function(a){var t,s,r,q
u.V.a(a)
t=this.a
s=t.ch
t.cx=new M.f(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.ao(new P.ax(s,r,u.p))
r=t.am(q.a,q.b)
t.ch=r
r.B(0,t.cx)
r=t.ch
$.aR().af(new Y.bb(r,C.o))
if(t.x){s=t.z=t.ch
t.y.B(0,s)
$.aR().af(new Y.a4(s,C.m))}},
$S:3}
Z.cJ.prototype={
$1:function(a){var t,s,r,q,p
u.V.a(a)
t=this.a
s=t.ch
t.cx=new M.f(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.ao(new P.ax(s,r,u.p))
t.ch=t.am(q.a,q.b)
r=a.button
r.toString
s=new Y.ba(r)
s.at(r)
t.Q=s
s=t.ch
$.aR().af(new Y.a5(s,C.k))
t.x=!0
s=t.ch
r=s.a
p=s.b
s=s.c
t.y=new M.f(r,p,s)
t.z=new M.f(r,p,s)},
$S:3}
Z.cK.prototype={
$1:function(a){var t,s,r,q
u.V.a(a)
t=this.a
s=t.ch
t.cx=new M.f(s.a,s.b,s.c)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.ao(new P.ax(s,r,u.p))
t.ch=t.am(q.a,q.b)
r=a.button
r.toString
s=new Y.ba(r)
s.at(r)
t.Q=s
s=t.ch
$.aR().af(new Y.a6(s,C.l))
t.x=!1},
$S:3}
Z.bN.prototype={}
V.du.prototype={}
V.cf.prototype={
S:function(a,b){this.b6(a,!1)
this.b4(C.i,!1)
this.cn(a,!0)},
c1:function(a){return this.S(a,!0)}}
V.bL.prototype={
aU:function(){var t=this
t.c5()
t.c0(t.d4,C.c)
t.a7(t.d5)},
c5:function(){var t,s,r,q,p,o,n,m,l,k=u.l,j=H.c([],k)
for(t=this.d2,s=this.d3,t=B.fJ(9,s+t,t).ak(0),r=t.length,q=0;q<t.length;t.length===r||(0,H.h)(t),++q){p=t[q]
j.push(C.j.p(0,Math.cos(p)).m(0,C.n.p(0,Math.sin(p))))}t=H.c([],k)
for(r=j.length,q=0;q<j.length;j.length===r||(0,H.h)(j),++q){p=j[q]
t.push(new M.f(-p.b,p.a,p.c))}r=H.c([],k)
for(o=B.A(j.length-1,0,1),n=o.length,s=s/8/3,q=0;q<o.length;o.length===n||(0,H.h)(o),++q){m=o[q]
if(m<0||m>=j.length)return H.k(j,m)
l=j[m]
if(m>=t.length)return H.k(t,m)
r.push(l.m(0,t[m].p(0,s)))}k=H.c([],k)
for(o=B.A(j.length,1,1),n=o.length,q=0;q<o.length;o.length===n||(0,H.h)(o),++q){m=o[q]
if(m<0||m>=j.length)return H.k(j,m)
l=j[m]
if(m>=t.length)return H.k(t,m)
k.push(l.B(0,t[m].p(0,s)))}t=u.i
this.b3(B.fS(j,t),r,k,B.fR(j,t))}}
V.bP.prototype={}
V.bS.prototype={}
V.c7.prototype={}
V.c8.prototype={}
V.ay.prototype={}
U.bY.prototype={
cp:function(a){this.aF(u.a.a(H.c([this.x],u.r)))
this.aJ()},
aE:function(a,b,c,d){var t,s
H.e9(d,u.e,"IEvent","addEventListener")
t=new Y.H(d.h("y(0)").a(c),b,d.h("H<0>"))
s=$.aR()
u.gc.a(t)
s=s.gN().A(0,b)
s.toString
C.a.n(s,t)
return t}}
U.bT.prototype={
aJ:function(){var t=this
t.scz(u.gl.a(t.aE(0,C.m,new U.d1(t),u.u)))
t.scA(u.c3.a(t.aE(0,C.k,new U.d2(t),u.N)))
t.scB(u.eL.a(t.aE(0,C.l,new U.d3(t),u.f)))},
scz:function(a){u.g7.a(a)},
scA:function(a){u.em.a(a)},
scB:function(a){u.ga.a(a)}}
U.d1.prototype={
$1:function(a){var t
u.u.a(a)
t=this.a
if(t.fx){t.x.bJ(a.c)
return!0}return!1},
$S:38}
U.d2.prototype={
$1:function(a){var t,s=this.a,r=s.x,q=u.N.a(a).c,p=q.a
if(p>=r.C(C.D).a-0.1)if(p<=r.C(C.j).a+0.1){p=q.b
p=p>=r.C(C.C).b-0.1&&p<=r.C(C.n).b+0.1
t=p}else t=!1
else t=!1
if(t){s.fx=!0
r.bJ(q)
return!0}return!1},
$S:22}
U.d3.prototype={
$1:function(a){u.f.a(a)
return this.a.fx=!1},
$S:23}
Y.n.prototype={
gbx:function(a){var t=this.a
return t},
ga1:function(){var t=this.d
return t==null?H.o(H.u("submobjects")):t},
gbT:function(){var t=this.e
if(t==null){t=H.c([],u.eM)
this.scD(t)}return t},
gY:function(a){var t=this.r
return t==null?H.o(H.u("points")):t},
a8:function(a,b,c){var t=this
t.aY()
t.sb9(u.a.a(H.c([],u.r)))
t.f=!1
t.sau(u.y.a(H.c([],u.l)))
t.bE()
t.aU()},
i:function(a){return this.aY()},
aY:function(){var t=this.cm(0),s=P.ht("^Instance of '(.*?)'$").d6(t).b
if(1>=s.length)return H.k(s,1)
s=s[1]
s.toString
return s},
bE:function(){},
aU:function(){},
aF:function(a){var t,s,r,q,p,o=u.a
o.a(a)
if(C.a.W(a,this))throw H.d("Mobject can't contain itself")
t=P.G(a,!0,u.k)
for(s=this.ga1(),r=s.length,q=0;q<s.length;s.length===r||(0,H.h)(s),++q){p=s[q]
if(!C.a.W(a,p))t.push(p)}this.sb9(o.a(t))},
aH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
u.cD.a(c)
if(b==null)b=this.C(a)
for(t=this.aW(),s=t.length,r=u.y,q=u.l,p=0;p<t.length;t.length===s||(0,H.h)(t),++p){o=t[p]
n=H.c([],q)
m=o.r
if(m==null)m=H.o(H.u("points"))
l=m.length
k=0
for(;k<m.length;m.length===l||(0,H.h)(m),++k)n.push(J.h3(c.$1(m[k].B(0,b)),b))
o.sau(r.a(n))}},
cY:function(a){return this.aH(C.c,null,a)},
bS:function(a,b){var t,s,r,q=this
if(q.f==null)H.o(H.u("updatingSuspended"))
for(t=q.gbT(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)t[r].$2(q,a)
for(t=q.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)t[r].bS(a,!0)},
bR:function(a){return this.bS(a,!0)},
a7:function(a){return this.cY(new Y.df(a))},
b2:function(a,b,c){return this.aH(b,c,new Y.de(a))},
b1:function(a){return this.b2(a,C.c,null)},
c0:function(a,b){return this.b2(a,C.c,b)},
ce:function(a,b,c,d){return this.aH(c,d,new Y.dg(b,a))},
bM:function(a,b,c,d,e){var t=this.de(b)
if(t===0)return
this.ce(a/t,b,c,d)},
bJ:function(a){this.a7(a.B(0,this.C(C.c)).p(0,new M.f(1,1,1)))},
S:function(a,b){var t,s,r
for(t=this.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)t[r].S(a,!0)
this.a=a},
a_:function(){var t,s,r,q,p=H.c([this],u.r)
for(t=this.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)C.a.E(p,t[r].a_())
q=P.et(p,u.k)
return P.G(q,!0,H.M(q).c)},
aW:function(){var t=this.a_(),s=H.B(t),r=s.h("az<1>")
return P.G(new H.az(t,s.h("y(1)").a(new Y.dc()),r),!0,r.h("l.E"))},
aV:function(){var t,s,r,q,p=H.c([],u.l)
for(t=this.aW(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r){q=t[r].r
C.a.E(p,q==null?H.o(H.u("points")):q)}return p},
b_:function(){return this.aV()},
an:function(a,b,c){var t,s,r
u.D.a(c)
t=H.c([],u.n)
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.h)(c),++r)t.push(c[r].al(a))
if(b<0)return C.a.O(t,C.p)
else if(b===0)return(C.a.O(t,C.p)+C.a.O(t,C.q))/2
else return C.a.O(t,C.q)},
C:function(a){var t=this,s=t.b_()
if(s.length===0)return C.c
return new M.f(t.an(0,C.b.P(a.a),s),t.an(1,C.b.P(a.b),s),t.an(2,C.b.P(a.c),s))},
de:function(a){var t,s,r,q=this.aV()
if(q.length===0)return 1
t=H.B(q)
s=new H.K(q,t.h("i(1)").a(new Y.dd(a)),t.h("K<1,i>"))
r=s.O(0,C.p)
return s.O(0,C.q)-r},
gk:function(a){return this.cd(0).length},
cd:function(a){var t=this,s=H.c([],u.r)
if(t.gY(t).length!==0)s.push(t)
C.a.E(s,t.ga1())
return s},
sb9:function(a){this.d=u.hh.a(a)},
scD:function(a){this.e=u.eU.a(a)},
sau:function(a){this.r=u.D.a(a)}}
Y.df.prototype={
$1:function(a){return a.m(0,this.a)},
$S:4}
Y.de.prototype={
$1:function(a){return a.p(0,this.a)},
$S:4}
Y.dg.prototype={
$1:function(a){var t=this.a
return a.dw(t,a.al(t)*this.b)},
$S:4}
Y.dc.prototype={
$1:function(a){u.k.a(a)
return a.gY(a).length>0},
$S:25}
Y.dd.prototype={
$1:function(a){return u.i.a(a).al(this.a)},
$S:26}
K.I.prototype={
bE:function(){var t,s=this,r=s.db
s.c2(r==null?H.c([s.gbx(s)],u.O):r)
r=s.dx
if(r==null)r=H.c([s.gbx(s)],u.O)
s.c8(r,s.x)
r=s.dy
t=s.y
s.T(!0,null,u.x.a(r),!0,t)},
a6:function(a,b,c){var t,s,r,q,p,o,n,m=this
u.x.a(b)
t=u.O
s=H.c([],t)
if(b!=null)C.a.E(s,b)
if(a!=null)s.push(a)
if(c)for(r=m.ap(),q=r.length,p=0;p<r.length;r.length===q||(0,H.h)(r),++p)r[p].c3(s,!1)
if(s.length!==0){if(m.db==null)m.sag(s)
r=m.db
q=r.length
o=s.length
if(q<o)m.sag(B.bI(r,o,u.G))
else if(o<q)m.sag(B.bI(s,q,u.G))
t=H.c([],t)
for(r=B.A(m.db.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.h)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.sag(t)}},
J:function(a){return this.a6(a,null,!0)},
c3:function(a,b){return this.a6(null,a,b)},
c2:function(a){return this.a6(null,a,!0)},
b4:function(a,b){return this.a6(a,null,b)},
T:function(a,b,c,d,e){var t,s,r,q,p,o,n,m=this
u.x.a(c)
t=u.O
s=H.c([],t)
if(c!=null)C.a.E(s,c)
if(b!=null)s.push(b)
if(d)for(r=m.ap(),q=r.length,p=0;p<r.length;r.length===q||(0,H.h)(r),++p)r[p].c9(a,s,!1,e)
if(s.length!==0)if(a){if(m.dy==null)m.saI(s)
r=m.dy
q=r.length
o=s.length
if(q<o)m.saI(B.bI(r,o,u.G))
else if(o<q)m.saI(B.bI(s,q,u.G))
t=H.c([],t)
for(r=B.A(m.dx.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.h)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.sa0(t)}else{if(m.dx==null)m.sa0(s)
r=m.dx
q=r.length
o=s.length
if(q<o)m.sa0(B.bI(r,o,u.G))
else if(o<q)m.sa0(B.bI(s,q,u.G))
t=H.c([],t)
for(r=B.A(m.dx.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.h)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.sa0(t)}if(e!=null)if(a)m.y=e
else m.x=e},
ar:function(a){return this.T(!1,null,null,!0,a)},
c9:function(a,b,c,d){return this.T(a,null,b,c,d)},
c7:function(a,b){return this.T(!1,a,null,!0,b)},
c8:function(a,b){return this.T(!1,null,a,!0,b)},
b6:function(a,b){return this.T(!1,a,null,b,null)},
S:function(a,b){this.b4(a,!0)
this.b6(a,!0)
this.cl(a,!0)},
aX:function(){var t=this.db
return t==null?H.c([C.i],u.O):t},
b0:function(a){var t=a?this.dy:this.dx
return t==null||t.length===0?H.c([C.i],u.O):t},
bX:function(){var t,s,r,q,p,o=this.C(C.c),n=H.c([],u.b)
for(t=[C.j,C.n,C.S],s=u.n,r=0;r<3;++r){q=this.C(t[r]).B(0,o)
n.push(H.c([q.a,q.b,q.c],s))}p=C.j.aN(S.aq(null,n).gds())
return new S.t(o.B(0,p),o.m(0,p),u.hd)},
b3:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i=u.y
i.a(a)
i.a(b)
i.a(c)
i.a(d)
t=a.length
s=H.c([],u.l)
for(t=B.A(4*t,0,1),r=t.length,q=0;q<t.length;t.length===r||(0,H.h)(t),++q)s.push(C.c)
this.sau(i.a(s))
p=[a,b,c,d]
for(i=B.A(4,0,1),t=i.length,s=u.S,q=0;q<i.length;i.length===t||(0,H.h)(i),++q){o=i[q]
if(o<0||o>=4)return H.k(p,o)
n=p[o]
r=this.r
for(r=B.eI(B.A((r==null?H.o(H.u("points")):r).length,o,4),s),m=r.length,l=0;l<r.length;r.length===m||(0,H.h)(r),++l){k=r[l]
j=this.r
if(j==null)j=H.o(H.u("points"))
C.a.R(j,k.b,n[C.d.aq(k.a,n.length)])}}},
c4:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u.y.a(a)
t=B.fJ(4,1,0).ak(0)
s=u.i
r=S.eR(B.fR(a,s))
q=S.eR(B.fS(a,s))
s=H.c([],u.aM)
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.h)(t),++o){n=t[o]
s.push(q.p(0,1-n).m(0,r.p(0,n)))}p=H.c([],u.h)
for(m=s.length,l=u.l,o=0;o<s.length;s.length===m||(0,H.h)(s),++o){k=s[o]
j=H.c([],l)
i=k.a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.h)(i),++g){f=i[g]
e=J.eJ(f)
j.push(new M.f(e.A(f,0),e.A(f,1),e.A(f,2)))}p.push(j)}s=p.length
if(0>=s)return H.k(p,0)
m=p[0]
if(1>=s)return H.k(p,1)
l=p[1]
if(2>=s)return H.k(p,2)
j=p[2]
if(3>=s)return H.k(p,3)
this.b3(m,l,j,p[3])},
bz:function(a,b){var t=b.a
if(Math.abs(a.a-t)>0.000001+0.00001*Math.abs(t))return!1
t=b.b
if(Math.abs(a.b-t)>0.000001+0.00001*Math.abs(t))return!1
return!0},
bV:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h={}
h.a=a
u.y.a(a)
h.a=a
t=F.da(a,new K.dz(h,C.d.aq(a.length,4)),u.i)
h.a=P.G(t,!0,t.$ti.h("l.E"))
t=H.c([],u.dm)
for(s=B.A(h.a.length,0,4),r=s.length,q=u.bl,p=0;p<s.length;s.length===r||(0,H.h)(s),++p){o=s[p]
n=h.a
m=n.length
if(o<0||o>=m)return H.k(n,o)
l=n[o]
k=o+1
if(k>=m)return H.k(n,k)
k=n[k]
j=o+2
if(j>=m)return H.k(n,j)
j=n[j]
i=o+3
if(i>=m)return H.k(n,i)
t.push(new S.aH(l,k,j,n[i],q))}return t},
cN:function(a,b){var t,s,r,q,p,o,n,m
u.y.a(a)
u.fT.a(b)
t=B.A(a.length,4,4)
s=H.B(t)
s=P.G(new H.az(t,s.h("y(1)").a(b),s.h("az<1>")),!0,u.S)
s.push(a.length)
t=H.c([0],u.Y)
C.a.E(t,s)
r=H.c([],u.h)
for(t=new A.au(H.c([t,s],u.gL),u.c9),t=t.gF(t),s=H.B(a),q=s.c,s=s.h("bk<1>");t.l();){p=t.b
if(p==null)p=H.o(P.cb("No element"))
if(1>=p.length)return H.k(p,1)
o=p[1]
n=p[0]
if(typeof o!=="number")return o.B()
if(typeof n!=="number")return H.eb(n)
if(o-n>=4){H.ac(n)
H.ac(o)
P.f3(n,o,a.length)
m=new H.bk(a,n,o,s)
m.cs(a,n,o,q)
r.push(m.dq(0))}}return r},
bZ:function(a){u.y.a(a)
return this.cN(a,new K.dA(this,a))},
bo:function(a){var t=F.da(this.gY(this),new K.dy(this,a),u.i)
return P.G(t,!0,t.$ti.h("l.E"))},
bW:function(){var t,s=this
if(s.gY(s).length===1)return s.gY(s)
t=u.eR
t=A.eX(P.G(new A.au(H.c([s.bo(0),s.bo(3)],u.h),t),!0,t.h("l.E")),u.i)
return P.G(t,!0,t.$ti.h("l.E"))},
b_:function(){var t,s,r,q=H.c([],u.l)
for(t=this.ap(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)C.a.E(q,t[r].bW())
return q},
ap:function(){var t,s,r,q,p=H.c([],u.d_)
for(t=this.a_(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r){q=t[r]
if(q instanceof K.I)p.push(q)}return p},
sag:function(a){this.db=u.x.a(a)},
sa0:function(a){this.dx=u.x.a(a)},
saI:function(a){this.dy=u.x.a(a)}}
K.dz.prototype={
$2:function(a,b){u.i.a(b)
return a<this.a.a.length-this.b},
$S:6}
K.dA.prototype={
$1:function(a){var t,s,r
H.ac(a)
t=this.b
s=a-1
r=t.length
if(s<0||s>=r)return H.k(t,s)
s=t[s]
if(a<0||a>=r)return H.k(t,a)
return!this.a.bz(s,t[a])},
$S:28}
K.dy.prototype={
$2:function(a,b){u.i.a(b)
return C.d.aq(a,4)===this.b},
$S:6}
K.dx.prototype={}
K.ck.prototype={
ct:function(a){var t=H.c([],u.r)
this.aF(u.a.a(t))}}
Z.aV.prototype={
gt:function(a){var t=this.d
return t==null?H.o(H.u("display")):t},
ca:function(a){this.d=a}}
F.bO.prototype={
gG:function(){var t=this.e
return t==null?H.o(H.u("ctx")):t},
aO:function(a){var t,s,r=this,q=r.gt(r).gq(),p=r.gt(r).ac(a)
C.h.saM(r.gG(),p.a5())
t=q.c
s=q.d
r.gG().fillRect(0-t/2,0-s/2,q.c,q.d)},
di:function(a){var t,s,r,q,p,o,n,m=this,l=u.y.a(P.G(a.gY(a),!0,u.i)),k=m.gt(m).gq().bQ(a,l)
if(k.length===0)return
t=a.bZ(k)
for(l=t.length,s="",r=0;r<t.length;t.length===l||(0,H.h)(t),++r)s+=m.c_(a,t[r])
q=W.hq(s)
m.bu(q,a,!0)
p=a.aX()
if(p.length>1)C.h.saM(m.gG(),m.bA(a,p))
else{l=m.gt(m)
o=a.aX()
if(0>=o.length)return H.k(o,0)
n=l.ac(o[0])
C.h.saM(m.gG(),n.a5())}m.gG().fill(q)
m.bu(q,a,!1)},
c_:function(a,b){var t,s,r,q,p,o,n,m,l,k
u.y.a(b)
t=a.bV(b)
s=C.a.gX(b)
r="M "+H.j(s.a)+" "+H.j(s.b)
q=a.bz(C.a.gX(b),C.a.gbI(b))
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.h)(t),++o){n=t[o]
m=n.b
l=n.c
k=n.d
r+=" C "+H.j(m.a)+" "+H.j(m.b)+" "+H.j(l.a)+" "+H.j(l.b)+" "+H.j(k.a)+" "+H.j(k.b)}return q?r+" Z":r},
bA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this
u.bF.a(b)
t=a.bX()
s=u.y.a(H.c([t.a,t.b],u.l))
r=i.gt(i).gq().bQ(a,s)
s=i.gG()
q=r.length
if(0>=q)return H.k(r,0)
p=r[0]
o=p.a
p=p.b
if(1>=q)return H.k(r,1)
q=r[1]
q=s.createLinearGradient(o,p,q.a,q.b)
q.toString
n=1/(b.length-1)
m=B.ik(n+1,0,n).ak(0)
for(s=B.A(b.length,0,1),p=s.length,l=0;l<s.length;s.length===p||(0,H.h)(s),++l){k=s[l]
o=i.d
if(o==null)o=H.o(H.u("display"))
if(k<0||k>=b.length)return H.k(b,k)
j=o.ac(b[k])
if(k>=m.length)return H.k(m,k)
q.addColorStop(m[k],j.a5())}return q},
bu:function(a,b,c){var t,s,r,q,p=this,o=c?b.y:b.x
if(o===0)return
t=b.b0(c)
s=p.gt(p).gq().c
p.gG().lineWidth=o*0.01*(s/14.222222222222221)
r=C.a.bB(t,new F.d_())
s=t.length
if(s===0||r)return
if(s>1)C.h.sb8(p.gG(),p.bA(b,t))
else{q=p.gt(p).ac(C.a.gX(b.b0(c)))
C.h.sb8(p.gG(),q.a5())}C.h.cf(p.gG(),a)}}
F.d_.prototype={
$1:function(a){return u.G.a(a).d===0},
$S:29}
A.dq.prototype={
ga3:function(){var t=this.d
return t==null?H.o(H.u("mobjects")):t},
gq:function(){var t=this.f
return t==null?H.o(H.u("camera")):t},
gt:function(a){var t=this.x
return t==null?H.o(H.u("display")):t},
cr:function(){this.f=new T.cX(14.222222222222221,C.f)
new P.ct().cu(0)
this.sba(u.a.a(H.c([],u.r)))},
Z:function(){var t=0,s=P.cD(u.z),r=1,q,p=[],o=this,n,m,l
var $async$Z=P.cE(function(a,b){if(a===1){q=b
t=r}while(true)switch(t){case 0:o.gt(o).aJ()
t=2
return P.aM(null,$async$Z)
case 2:r=4
t=7
return P.aM(o.ad(),$async$Z)
case 7:r=1
t=6
break
case 4:r=3
l=q
H.ao(l)
throw l
t=6
break
case 3:t=1
break
case 6:m=o.gq()
m.gt(m).ga4().aO(m.f)
o.gq().bL(o.ga3())
t=8
return P.aM(null,$async$Z)
case 8:o.gt(o).dt()
return P.cB(null,s)
case 1:return P.cA(q,s)}})
return P.cC($async$Z,s)},
du:function(a){var t,s,r
for(t=this.ga3(),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)t[r].bR(a)},
bN:function(a){var t,s=this,r=u.a
r.a(a)
t=P.G(a,!0,u.k)
C.a.E(t,s.gq().bC(a))
s.sba(r.a(s.bY(s.ga3(),t)))},
bY:function(a,b){var t,s=u.a
s.a(a)
s.a(b)
t=H.c([],u.r)
new A.dr(t).$2(a,P.et(b,H.B(b).c))
return t},
aj:function(){var t=0,s=P.cD(u.z),r=this,q,p,o,n
var $async$aj=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:q=0
case 2:if(!(q<1)){t=3
break}p=r.x
t=4
return P.aM((p==null?H.o(H.u("display")):p).ai(),$async$aj)
case 4:o=b
q+=o
r.du(o)
p=r.f
if(p==null)p=H.o(H.u("camera"))
n=p.r
n=(n==null?H.o(H.u("display")):n).a
if(n==null)n=H.o(H.u("renderer"))
n.aO(p.f)
p=r.f
if(p==null)p=H.o(H.u("camera"))
n=r.d
p.bL(n==null?H.o(H.u("mobjects")):n)
r.a+=o
t=2
break
case 3:return P.cB(null,s)}})
return P.cC($async$aj,s)},
ae:function(){var t=0,s=P.cD(u.z),r=this
var $async$ae=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:case 2:if(!!0){t=3
break}t=4
return P.aM(r.aj(),$async$ae)
case 4:t=2
break
case 3:return P.cB(null,s)}})
return P.cC($async$ae,s)},
sba:function(a){this.d=u.hh.a(a)}}
A.dr.prototype={
$2:function(a,b){var t,s,r,q,p,o
u.a.a(a)
u.bA.a(b)
for(t=a.length,s=this.a,r=0;r<a.length;a.length===t||(0,H.h)(a),++r){q=a[r]
if(b.W(0,q))continue
p=q.a_()
o=b.dc(0,P.et(p,H.B(p).c))
if(o.a!==0){p=q.d
this.$2(p==null?H.o(H.u("submobjects")):p,o)}else C.a.n(s,q)}},
$S:30}
B.ej.prototype={
$1:function(a){return H.ac(a)/this.a*this.b},
$S:31}
B.ek.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("y(q,0)")}}
V.O.prototype={
a5:function(){var t=this
return"rgba("+C.b.P(t.a*255)+", "+C.b.P(t.b*255)+", "+C.b.P(t.c*255)+", "+t.d+")"},
i:function(a){return this.a5()}}
Y.U.prototype={
i:function(a){return this.b}}
Y.P.prototype={}
Y.d4.prototype={
gN:function(){var t=this.a
return t==null?H.o(H.u("eventListeners")):t},
co:function(){var t,s,r=P.hm(u.en,u.gF)
for(t=u.aE,s=0;s<6;++s)r.R(0,C.R[s],H.c([],t))
this.scC(u.cH.a(r))},
V:function(a,b,c){var t,s,r
H.e9(c,u.e,"IEvent","_dispatchOnListnersList")
c.a(a)
t=P.G(c.h("p<H<0>>").a(b),!0,c.h("H<0>"))
s=!1
while(!0){if(!(!s&&t.length!==0))break
r=C.a.gbI(t)
C.a.dh(t,r)
r.$ti.c.a(a)
s=r.a.$1(a)}},
af:function(a){var t,s=this
switch(a.a){case C.o:u.gt.a(a)
t=s.gN().A(0,C.o)
t.toString
s.V(a,t,u.e)
break
case C.k:u.N.a(a)
t=s.gN().A(0,C.k)
t.toString
s.V(a,t,u.e)
break
case C.l:u.f.a(a)
t=s.gN().A(0,C.l)
t.toString
s.V(a,t,u.e)
break
case C.m:u.u.a(a)
t=s.gN().A(0,C.m)
t.toString
s.V(a,t,u.e)
break
case C.r:u.fw.a(a)
t=s.gN().A(0,C.r)
t.toString
s.V(a,t,u.e)
break
case C.t:u.bf.a(a)
t=s.gN().A(0,C.t)
t.toString
s.V(a,t,u.e)
break}},
scC:function(a){this.a=u.dC.a(a)}}
Y.H.prototype={}
Y.c3.prototype={}
Y.bb.prototype={}
Y.a5.prototype={}
Y.a6.prototype={}
Y.a4.prototype={}
Y.ba.prototype={
at:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
S.aW.prototype={
gL:function(a){return this.a},
gD:function(a){var t=this.b
return t==null?H.o(H.u("shape")):t},
m:function(a,b){return this.ah(0,new S.cO(typeof b=="number"?S.em(b,this.gD(this)):u.eN.a(b)))},
p:function(a,b){var t=S.em(b,this.gD(this))
return this.ah(0,new S.cP(t))},
ah:function(a,b){var t,s,r,q=this
u.fA.a(b)
t=B.eI(q.gL(q),u.I)
s=H.B(t)
r=s.h("K<1,p<i>>")
r=P.G(new H.K(t,s.h("p<i>(1)").a(new S.cN(b)),r),!0,r.h("x.E"))
return S.aq(q.gD(q),r)},
M:function(a){var t,s
u.o.a(a)
t=a.a
s=this.gL(this)
if(t>>>0!==t||t>=s.length)return H.k(s,t)
return J.el(s[t],a.b)},
ak:function(a){var t=this.gL(this),s=H.B(t),r=s.h("K<1,i>")
return P.G(new H.K(t,s.h("i(1)").a(new S.cL(a)),r),!0,r.h("x.E"))},
gds:function(){return this.ah(0,new S.cQ(this))},
aN:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.gD(a),a1=a.gD(a).b,a2=a4.gD(a4).b,a3=S.em(0,new S.t(a.gD(a).a,a4.gD(a4).b,u.o))
for(a0=B.A(a0.a,0,1),t=a0.length,s=a4.a,r=a.a,q=a3.a,p=0;p<a0.length;a0.length===t||(0,H.h)(a0),++p){o=a0[p]
for(n=B.A(a2,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.h)(n),++l){k=n[l]
for(j=B.A(a1,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,H.h)(j),++h){g=j[h]
if(o<0||o>=q.length)return H.k(q,o)
f=q[o]
e=J.eJ(f)
d=e.A(f,k)
if(o>=r.length)return H.k(r,o)
c=J.el(r[o],g)
if(g<0||g>=s.length)return H.k(s,g)
b=J.el(s[g],k)
if(typeof c!=="number")return c.p()
if(typeof b!=="number")return H.eb(b)
if(typeof d!=="number")return d.m()
e.R(f,k,d+c*b)}}}return a3},
i:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=H.j(c.gD(c).a)+"x"+H.j(c.gD(c).b),a=H.c([],u.Y)
for(t=c.gL(c),s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r){q=t[r]
for(p=q.length,o=0;o<q.length;q.length===p||(0,H.h)(q),++o)a.push(J.h6(q[o],6).length)}n=C.a.d7(a,6,C.E,u.S)
for(a=c.gL(c),t=a.length,s=n+4,p=u.s,m="",r=0;r<a.length;a.length===t||(0,H.h)(a),++r){q=a[r]
m+="      "
for(l=q.length,o=0;o<q.length;q.length===l||(0,H.h)(q),++o){k=q[o]
if(typeof k!=="number")return k.dD()
j=k<0?"-":" "
i=Math.abs(k)
h=C.b.aS(i,6)
g=H.c([],p)
for(h=B.A(s-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,H.h)(h),++e)g.push(" ")
d=C.a.dd(g)
m=m+j+C.b.aS(i,6)+d}m+="\n"}return b+" matrix\n"+m},
scw:function(a){this.b=u.gv.a(a)}}
S.cO.prototype={
$2:function(a,b){return a+this.a.M(u.o.a(b))},
$S:1}
S.cP.prototype={
$2:function(a,b){return a*this.a.M(u.o.a(b))},
$S:1}
S.cN.prototype={
$1:function(a){var t,s,r
u.fz.a(a)
t=B.eI(a.b,u.W)
s=H.B(t)
r=s.h("K<1,i>")
return P.G(new H.K(t,s.h("i(1)").a(new S.cM(this.a,a)),r),!0,r.h("x.E"))},
$S:32}
S.cM.prototype={
$1:function(a){u.ee.a(a)
return this.a.$2(a.b,new S.t(this.b.a,a.a,u.o))},
$S:33}
S.cL.prototype={
$1:function(a){var t
u.I.a(a)
t=this.a
if(t>=a.length)return H.k(a,t)
return a[t]},
$S:34}
S.cQ.prototype={
$2:function(a,b){var t=u.o
t.a(b)
return this.a.M(new S.t(b.b,b.a,t))},
$S:1}
M.f.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof M.f&&this.a===b.a&&this.b===b.b&&this.c===b.c},
m:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a+b,t.b+b,t.c+b)
else if(b instanceof M.f)return new M.f(t.a+b.a,t.b+b.b,t.c+b.c)
else throw H.d("Vector3 only support addition by num or Vector3")},
B:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a-b,t.b-b,t.c-b)
else if(b instanceof M.f)return new M.f(t.a-b.a,t.b-b.b,t.c-b.c)
else throw H.d("Vector3 only support subtraction by num or Vector3")},
p:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a*b,t.b*b,t.c*b)
else if(b instanceof M.f)return new M.f(t.a*b.a,t.b*b.b,t.c*b.c)
else throw H.d("Vector3 only support multiplication by num or Vector3")},
al:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.d("No component at index "+a+" on a vector3")}},
dn:function(){var t=u.n
t=S.aq(null,H.c([H.c([this.a],t),H.c([this.b],t),H.c([this.c],t)],u.b))
return t},
aT:function(a,b,c){var t=a==null?this.a:a,s=b==null?this.b:b
return new M.f(t,s,c==null?this.c:c)},
dz:function(a){return this.aT(a,null,null)},
dA:function(a){return this.aT(null,a,null)},
dB:function(a){return this.aT(null,null,a)},
dw:function(a,b){if(a===0)return this.dz(b)
else if(a===1)return this.dA(b)
else if(a===2)return this.dB(b)
else throw H.d("Cannot index a vector3 with index="+a)},
aN:function(a){var t=S.h8(3).ah(0,new M.dB(a)).aN(this.dn()),s=u.o
return new M.f(t.M(new S.t(0,0,s)),t.M(new S.t(1,0,s)),t.M(new S.t(2,0,s)))},
aG:function(a){u.ao.a(a)
return new M.f(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
i:function(a){return"vec3("+H.j(this.a)+", "+H.j(this.b)+", "+H.j(this.c)+")"}}
M.dB.prototype={
$2:function(a,b){var t,s,r
u.o.a(b)
t=b.a
s=this.a
r=s.gD(s).a
if(typeof t!=="number")return t.bU()
if(typeof r!=="number")return H.eb(r)
if(t<r){t=b.b
r=s.gD(s).b
if(typeof t!=="number")return t.bU()
if(typeof r!=="number")return H.eb(r)
r=t>=r
t=r}else t=!0
return t?a:s.M(b)},
$S:1}
S.t.prototype={
i:function(a){return"["+H.j(this.a)+", "+H.j(this.b)+"]"},
w:function(a,b){if(b==null)return!1
return b instanceof S.t&&J.aS(b.a,this.a)&&J.aS(b.b,this.b)},
gj:function(a){var t=J.aT(this.a),s=J.aT(this.b)
return A.fq(A.bA(A.bA(0,C.d.gj(t)),C.d.gj(s)))}}
S.aH.prototype={
i:function(a){var t=this
return"["+t.a.i(0)+", "+t.b.i(0)+", "+t.c.i(0)+", "+t.d.i(0)+"]"},
w:function(a,b){var t=this
if(b==null)return!1
return b instanceof S.aH&&b.a.w(0,t.a)&&b.b.w(0,t.b)&&b.c.w(0,t.c)&&b.d.w(0,t.d)},
gj:function(a){var t=this,s=H.a7(t.a),r=H.a7(t.b),q=H.a7(t.c),p=H.a7(t.d)
return A.fq(A.bA(A.bA(A.bA(A.bA(0,C.d.gj(s)),C.d.gj(r)),C.d.gj(q)),C.d.gj(p)))}}
A.cU.prototype={
ad:function(){var t=0,s=P.cD(u.z),r=this,q,p,o,n,m,l,k
var $async$ad=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:n=C.b.a2(14.222222222222221)+1
m=C.d.a2(8)+1
l=H.c([],u.w)
k=V.en(C.c)
k.J(C.N)
k.ar(0)
q=new A.aF(l,n,m,k,C.f)
q.a8(C.f,null,null)
q.ct(null)
q.cq(m,n)
p=V.en(C.D.p(0,3).m(0,C.C))
p.b1(2)
p.J(C.y)
p.ar(0)
o=V.en(C.j.p(0,2).m(0,C.n.p(0,3)))
o.b1(2)
o.J(C.y)
o.ar(0)
n=u.he.a(new A.cW(q,p,o))
C.a.n(q.gbT(),n)
q.bR(0)
n=u.r
m=u.a
l=m.a(H.c([q],n))
r.bN(l)
C.a.E(r.ga3(),l)
n=m.a(H.c([U.eV(p),U.eV(o)],n))
r.bN(n)
m=r.ga3()
H.B(m).h("l<1>").a(n)
if(!!m.fixed$length)H.o(P.a1("insertAll"))
l=m.length
m.length=l+2
C.a.b5(m,2,m.length,m,0)
C.a.c6(m,0,2,n)
t=2
return P.aM(r.ae(),$async$ad)
case 2:return P.cB(null,s)}})
return P.cC($async$ad,s)}}
A.cW.prototype={
$2:function(a,b){var t
u.k.a(a)
H.hQ(b)
t=this.a
t.cb(this.b.C(C.c),this.c.C(C.c))
return t},
$S:35}
A.aF.prototype={
cq:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=H.c([],u.w)
for(t=B.A(d.d0,0,1),s=t.length,r=d.d1,q=u.l,p=u.i,o=u.Q,n=0;n<t.length;t.length===s||(0,H.h)(t),++n){m=t[n]
l=H.c([],o)
for(k=B.A(r,0,1),j=k.length,i=0;i<k.length;k.length===j||(0,H.h)(k),++i){h=k[i]
g=H.c([C.W,C.T,C.V,C.X],q)
f=new V.ay(C.f)
f.a8(C.f,c,c)
e=P.G(g,!0,p)
e.push(C.a.gX(g))
f.c4(e)
f.bM(1,0,C.c,c,!0)
f.bM(1,1,C.c,c,!0)
f.a7(C.j.p(0,m).m(0,C.n.p(0,h)))
f.c7(C.M,1)
f.J(C.i)
l.push(f)}b.push(l)}d.sdg(b)
d.aF(u.a.a(d.gb7()))
d.a7(d.C(C.c).p(0,C.U).p(0,-1))},
gb7:function(){var t,s,r,q=H.c([],u.Q)
for(t=this.aL,s=t.length,r=0;r<t.length;t.length===s||(0,H.h)(t),++r)C.a.E(q,t[r])
return q},
aZ:function(a){var t,s,r
a=a.B(0,C.a.gX(this.gb7()).C(C.c))
t=C.b.bO(a.a)
s=C.b.bO(a.b)
r=this.aL
if(t<0||t>=r.length)return H.k(r,t)
r=r[t]
if(s<0||s>=r.length)return H.k(r,s)
return r[s]},
cc:function(a){a=a.B(0,new M.f(0.5,0,0)).aG(new A.dl()).m(0,new M.f(0.5,0,0))
this.J(C.i)
this.aZ(a).J(C.z)},
cb:function(a,b){var t,s,r,q,p
this.J(C.i)
a=a.B(0,new M.f(0.5,0,0))
b=b.B(0,new M.f(0.5,0,0))
a=a.aG(new A.dj())
b=b.aG(new A.dk())
a=a.m(0,new M.f(0.5,0,0))
b=b.m(0,new M.f(0.5,0,0))
t=Math.abs(a.a-b.a)
s=Math.abs(a.b-b.b)
r=t>s?C.b.a2(t):C.b.a2(s)
if(r===0)return this.cc(a)
for(t=B.A(r+1,0,1),s=t.length,q=0;q<t.length;t.length===s||(0,H.h)(t),++q){p=t[q]/r
this.aZ(a.p(0,1-p).m(0,b.p(0,p))).J(C.z)}},
sdg:function(a){this.aL=u.b4.a(a)}}
A.dl.prototype={
$1:function(a){return C.b.aP(a)},
$S:5}
A.dj.prototype={
$1:function(a){return C.b.aP(a)},
$S:5}
A.dk.prototype={
$1:function(a){return C.b.aP(a)},
$S:5}
G.cV.prototype={};(function aliases(){var t=J.W.prototype
t.cj=t.i
t=J.aw.prototype
t.ck=t.i
t=P.r.prototype
t.cm=t.i
t=Y.n.prototype
t.cl=t.S
t=K.I.prototype
t.cn=t.S
t=Z.aV.prototype
t.ci=t.ca})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
t(P,"io","hw",2)
t(P,"ip","hx",2)
t(P,"iq","hy",2)
s(P,"fB","ie",0)
r(P,"iE",2,null,["$1$2","$2"],["fM",function(a,b){return P.fM(a,b,u.H)}],37,0)
r(P,"fK",2,null,["$1$2","$2"],["fL",function(a,b){return P.fL(a,b,u.H)}],27,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.r,null)
r(P.r,[H.er,J.W,J.ar,P.v,H.T,P.l,H.X,P.E,H.dv,H.dh,H.b2,H.br,P.aE,H.d9,H.b8,H.c0,H.dZ,H.Y,H.cr,H.cx,P.e1,P.cm,P.aK,P.aL,P.aY,P.co,P.aA,P.D,P.cn,P.bi,P.bj,P.cv,P.bx,P.by,P.cs,P.aB,P.bf,P.bg,P.dJ,P.d5,P.C,P.cw,P.cd,W.eo,P.ct,P.ax,A.bp,T.cX,L.aU,K.dx,Y.n,Z.aV,A.dq,V.O,Y.U,Y.P,Y.d4,Y.H,Y.ba,S.aW,M.f,S.t,S.aH])
r(J.W,[J.bZ,J.aD,J.aw,J.m,J.av,J.ag,W.J,W.b_,W.d0,W.b0,W.b,W.c5])
r(J.aw,[J.c6,J.aa,J.ah])
s(J.d8,J.m)
r(J.av,[J.b4,J.c_])
r(P.v,[H.b6,P.cg,H.c1,H.ci,H.c9,P.aX,H.cq,P.c4,P.a2,P.cj,P.ch,P.bh,P.bQ,P.bR])
r(H.T,[H.ei,H.bX,H.ce,H.ec,H.ed,H.ee,P.dE,P.dD,P.dF,P.dG,P.e2,P.e4,P.e5,P.e8,P.dK,P.dS,P.dO,P.dP,P.dQ,P.dM,P.dR,P.dL,P.dV,P.dW,P.dU,P.dT,P.ds,P.dt,P.e7,P.e_,P.e0,P.db,W.dC,W.dI,A.d7,T.cY,T.cZ,Z.cI,Z.cJ,Z.cK,U.d1,U.d2,U.d3,Y.df,Y.de,Y.dg,Y.dc,Y.dd,K.dz,K.dA,K.dy,F.d_,A.dr,B.ej,B.ek,S.cO,S.cP,S.cN,S.cM,S.cL,S.cQ,M.dB,A.cW,A.dl,A.dj,A.dk])
r(P.l,[H.b1,H.az,P.b3])
r(H.b1,[H.x,H.b7])
r(H.x,[H.bk,H.K,H.a8])
s(H.bl,P.E)
s(H.af,H.bX)
s(H.bc,P.cg)
r(H.ce,[H.cc,H.aC])
s(H.cl,P.aX)
s(P.b9,P.aE)
s(H.b5,P.b9)
s(H.bu,H.cq)
r(P.b3,[P.bt,A.au])
s(P.bs,P.co)
s(P.cu,P.bx)
s(P.bq,P.by)
s(P.ab,P.bq)
r(P.a2,[P.bd,P.bW])
r(W.J,[W.Q,W.aI])
r(W.Q,[W.a,W.a_])
s(W.e,W.a)
r(W.e,[W.bK,W.bM,W.as,W.bV,W.ca])
s(W.Z,W.b)
s(W.R,W.Z)
s(W.bm,W.b0)
s(W.bn,P.bi)
s(W.cp,W.bn)
s(W.bo,P.bj)
s(Z.bJ,L.aU)
s(Z.bN,Z.bJ)
s(V.du,K.dx)
r(Y.n,[K.I,U.bY])
r(K.I,[V.cf,V.c7,K.ck])
s(V.bL,V.cf)
s(V.bP,V.bL)
s(V.bS,V.bP)
s(V.c8,V.c7)
s(V.ay,V.c8)
s(U.bT,U.bY)
s(F.bO,Z.aV)
s(Y.c3,Y.P)
r(Y.c3,[Y.bb,Y.a5,Y.a6,Y.a4])
s(A.cU,A.dq)
s(A.aF,K.ck)
s(G.cV,A.cU)
t(P.by,P.bf)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",i:"double",F:"num",aj:"String",y:"bool",C:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","i(i,t<q,q>)","~(~())","~(R)","f(f)","i(i)","y(q,f)","C(@)","C()","@(@)","~(@)","C(@,ai)","~(q,@)","C(r,ai)","D<@>(@)","V<C>()","~(F)","~(b)","p<n>(n)","y(f)","@(@,aj)","~(r?,r?)","y(a5)","y(a6)","@(aj)","y(n)","i(f)","0^(0^,0^)<F>","y(q)","y(O)","~(p<n>,be<n>)","i(q)","p<i>(t<q,p<i>>)","i(t<q,i>)","i(p<i>)","aF(n,i)","C(~())","0^(0^,0^)<F>","y(a4)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.hN(v.typeUniverse,JSON.parse('{"c6":"aw","aa":"aw","ah":"aw","iM":"b","iT":"b","iL":"a","iU":"a","j1":"a","iN":"e","iZ":"e","iV":"Q","iR":"Q","j_":"R","iP":"Z","iO":"a_","j2":"a_","bZ":{"y":[]},"aD":{"C":[]},"m":{"p":["1"],"l":["1"]},"d8":{"m":["1"],"p":["1"],"l":["1"]},"ar":{"E":["1"]},"av":{"i":[],"F":[]},"b4":{"i":[],"q":[],"F":[]},"c_":{"i":[],"F":[]},"ag":{"aj":[],"di":[]},"b1":{"l":["1"]},"b6":{"v":[]},"x":{"l":["1"]},"bk":{"x":["1"],"l":["1"],"x.E":"1","l.E":"1"},"X":{"E":["1"]},"K":{"x":["2"],"l":["2"],"x.E":"2","l.E":"2"},"az":{"l":["1"],"l.E":"1"},"bl":{"E":["1"]},"a8":{"x":["1"],"l":["1"],"x.E":"1","l.E":"1"},"bX":{"T":[],"at":[]},"af":{"T":[],"at":[]},"bc":{"v":[]},"c1":{"v":[]},"ci":{"v":[]},"br":{"ai":[]},"T":{"at":[]},"ce":{"T":[],"at":[]},"cc":{"T":[],"at":[]},"aC":{"T":[],"at":[]},"c9":{"v":[]},"cl":{"v":[]},"b5":{"aE":["1","2"],"c2":["1","2"]},"b7":{"l":["1"],"l.E":"1"},"b8":{"E":["1"]},"c0":{"di":[]},"cq":{"v":[]},"bu":{"v":[]},"D":{"V":["1"]},"aL":{"E":["1"]},"bt":{"l":["1"],"l.E":"1"},"aY":{"v":[]},"bs":{"co":["1"]},"bx":{"fb":[]},"cu":{"bx":[],"fb":[]},"ab":{"bf":["1"],"be":["1"],"l":["1"]},"aB":{"E":["1"]},"b3":{"l":["1"]},"b9":{"aE":["1","2"],"c2":["1","2"]},"aE":{"c2":["1","2"]},"bq":{"bf":["1"],"be":["1"],"l":["1"]},"i":{"F":[]},"q":{"F":[]},"p":{"l":["1"]},"be":{"l":["1"]},"aj":{"di":[]},"aX":{"v":[]},"cg":{"v":[]},"c4":{"v":[]},"a2":{"v":[]},"bd":{"v":[]},"bW":{"v":[]},"cj":{"v":[]},"ch":{"v":[]},"bh":{"v":[]},"bQ":{"v":[]},"bg":{"v":[]},"bR":{"v":[]},"cw":{"ai":[]},"R":{"b":[]},"Z":{"b":[]},"e":{"a":[],"J":[]},"bK":{"a":[],"J":[]},"bM":{"a":[],"J":[]},"as":{"a":[],"J":[]},"a_":{"J":[]},"b0":{"eu":["F"]},"a":{"J":[]},"bV":{"a":[],"J":[]},"Q":{"J":[]},"ca":{"a":[],"J":[]},"aI":{"J":[]},"bm":{"eu":["F"]},"bn":{"bi":["1"]},"cp":{"bn":["1"],"bi":["1"]},"bo":{"bj":["1"]},"ct":{"hs":[]},"au":{"l":["p<1>"],"l.E":"p<1>"},"bp":{"E":["p<1>"]},"bJ":{"aU":[]},"bN":{"aU":[]},"c7":{"I":[],"n":[]},"c8":{"I":[],"n":[]},"ay":{"I":[],"n":[]},"cf":{"I":[],"n":[]},"bL":{"I":[],"n":[]},"bP":{"I":[],"n":[]},"bS":{"I":[],"n":[]},"bY":{"n":[]},"bT":{"n":[]},"I":{"n":[]},"ck":{"I":[],"n":[]},"bO":{"aV":[]},"c3":{"P":[]},"a5":{"P":[]},"a6":{"P":[]},"a4":{"P":[]},"bb":{"P":[]},"aF":{"I":[],"n":[]}}'))
H.hM(v.typeUniverse,JSON.parse('{"b1":1,"b3":1,"b9":2,"bq":1,"by":1}'))
0
var u=(function rtii(){var t=H.cF
return{dq:t("@<q>"),eN:t("aW"),t:t("aY"),gA:t("as"),G:t("O"),C:t("v"),B:t("b"),gc:t("H<P>"),gl:t("H<a4>"),c3:t("H<a5>"),eL:t("H<a6>"),en:t("U"),e:t("P"),Z:t("at"),d:t("V<@>"),v:t("af<i>"),eR:t("au<f>"),c9:t("au<q>"),hf:t("l<@>"),aM:t("m<aW>"),O:t("m<O>"),aE:t("m<H<P>>"),w:t("m<p<ay>>"),h:t("m<p<f>>"),b:t("m<p<i>>"),gL:t("m<p<q>>"),r:t("m<n>"),Q:t("m<ay>"),E:t("m<bj<@>>"),s:t("m<aj>"),dm:t("m<aH<f,f,f,f>>"),d_:t("m<I>"),l:t("m<f>"),n:t("m<i>"),m:t("m<@>"),Y:t("m<q>"),eM:t("m<n(n,i)>"),T:t("aD"),L:t("ah"),fw:t("iX"),bf:t("iY"),bF:t("p<O>"),gF:t("p<H<P>>"),b4:t("p<p<ay>>"),a:t("p<n>"),y:t("p<f>"),I:t("p<i>"),cH:t("c2<U,p<H<P>>>"),k:t("n"),he:t("n(n,i)"),u:t("a4"),V:t("R"),gt:t("bb"),N:t("a5"),f:t("a6"),P:t("C"),K:t("r"),p:t("ax<F>"),J:t("eu<F>"),bA:t("be<n>"),j:t("ai"),R:t("aj"),hd:t("t<f,f>"),ee:t("t<q,i>"),o:t("t<q,q>"),fz:t("t<q,p<i>>"),bl:t("aH<f,f,f,f>"),ak:t("aa"),i:t("f"),cD:t("f(f)"),do:t("cp<R>"),ck:t("D<C>"),c:t("D<@>"),fJ:t("D<q>"),dL:t("D<F>"),g4:t("bs<F>"),U:t("y"),al:t("y(r)"),fT:t("y(q)"),W:t("i"),fA:t("i(i,t<q,q>)"),ao:t("i(i)"),z:t("@"),fO:t("@()"),bI:t("@(r)"),ag:t("@(r,ai)"),S:t("q"),aw:t("0&*"),_:t("r*"),g7:t("H<a4>?"),em:t("H<a5>?"),ga:t("H<a6>?"),eH:t("V<C>?"),x:t("p<O>?"),hh:t("p<n>?"),D:t("p<f>?"),eU:t("p<n(n,i)>?"),dC:t("c2<U,p<H<P>>>?"),X:t("r?"),gv:t("t<q,q>?"),F:t("aA<@,@>?"),g:t("cs?"),A:t("@(b)?"),g5:t("~()?"),H:t("F"),q:t("~"),M:t("~()"),c4:t("~(F)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.x=W.as.prototype
C.h=W.b_.prototype
C.O=J.W.prototype
C.a=J.m.prototype
C.d=J.b4.prototype
C.P=J.aD.prototype
C.b=J.av.prototype
C.A=J.ag.prototype
C.Q=J.ah.prototype
C.B=J.c6.prototype
C.u=J.aa.prototype
C.Y=W.aI.prototype
C.q=new H.af(P.fK(),u.v)
C.E=new H.af(P.fK(),H.cF("af<q>"))
C.p=new H.af(P.iE(),u.v)
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.e=new P.cu()
C.L=new P.cw()
C.i=new V.O(0,0,0,0)
C.M=new V.O(0,0,0,1)
C.f=new V.O(1,1,1,1)
C.y=new V.O(0.98824,0.38431,0.33333,1)
C.z=new V.O(0.53333,0.53333,0.53333,1)
C.N=new V.O(0.51373,0.75686,0.40392,1)
C.o=new Y.U("EventType.mouseMovedEvent")
C.k=new Y.U("EventType.mousePressedEvent")
C.l=new Y.U("EventType.mouseReleasedEvent")
C.m=new Y.U("EventType.mouseDraggedEvent")
C.r=new Y.U("EventType.keyPressedEvent")
C.t=new Y.U("EventType.keyReleasedEvent")
C.R=H.c(t([C.o,C.k,C.l,C.m,C.r,C.t]),H.cF("m<U>"))
C.a_=H.c(t([]),u.r)
C.c=new M.f(0,0,0)
C.S=new M.f(0,0,1)
C.n=new M.f(0,1,0)
C.C=new M.f(0,-1,0)
C.j=new M.f(1,0,0)
C.T=new M.f(1,1,0)
C.U=new M.f(1,1,1)
C.V=new M.f(1,-1,0)
C.D=new M.f(-1,0,0)
C.W=new M.f(-1,1,0)
C.X=new M.f(-1,-1,0)
C.Z=new P.aK(null,2)})();(function staticFields(){$.dX=null
$.a3=0
$.aZ=null
$.eS=null
$.fG=null
$.fA=null
$.fO=null
$.ea=null
$.ef=null
$.eL=null
$.aN=null
$.bC=null
$.bD=null
$.eB=!1
$.w=C.e
$.S=H.c([],H.cF("m<r>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"iQ","fT",function(){return H.iu("_$dart_dartClosure")})
t($,"jp","eO",function(){return C.e.bP(new H.ei(),H.cF("V<C>"))})
t($,"j3","fU",function(){return H.a9(H.dw({
toString:function(){return"$receiver$"}}))})
t($,"j4","fV",function(){return H.a9(H.dw({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"j5","fW",function(){return H.a9(H.dw(null))})
t($,"j6","fX",function(){return H.a9(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"j9","h_",function(){return H.a9(H.dw(void 0))})
t($,"ja","h0",function(){return H.a9(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"j8","fZ",function(){return H.a9(H.f9(null))})
t($,"j7","fY",function(){return H.a9(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"jc","h2",function(){return H.a9(H.f9(void 0))})
t($,"jb","h1",function(){return H.a9(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"jd","eN",function(){return P.hv()})
s($,"iS","aR",function(){var r=new Y.d4()
r.co()
return r})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.W,DOMError:J.W,MediaError:J.W,NavigatorUserMediaError:J.W,OverconstrainedError:J.W,PositionError:J.W,SQLError:J.W,HTMLAudioElement:W.e,HTMLBRElement:W.e,HTMLBaseElement:W.e,HTMLBodyElement:W.e,HTMLButtonElement:W.e,HTMLContentElement:W.e,HTMLDListElement:W.e,HTMLDataElement:W.e,HTMLDataListElement:W.e,HTMLDetailsElement:W.e,HTMLDialogElement:W.e,HTMLDivElement:W.e,HTMLEmbedElement:W.e,HTMLFieldSetElement:W.e,HTMLHRElement:W.e,HTMLHeadElement:W.e,HTMLHeadingElement:W.e,HTMLHtmlElement:W.e,HTMLIFrameElement:W.e,HTMLImageElement:W.e,HTMLInputElement:W.e,HTMLLIElement:W.e,HTMLLabelElement:W.e,HTMLLegendElement:W.e,HTMLLinkElement:W.e,HTMLMapElement:W.e,HTMLMediaElement:W.e,HTMLMenuElement:W.e,HTMLMetaElement:W.e,HTMLMeterElement:W.e,HTMLModElement:W.e,HTMLOListElement:W.e,HTMLObjectElement:W.e,HTMLOptGroupElement:W.e,HTMLOptionElement:W.e,HTMLOutputElement:W.e,HTMLParagraphElement:W.e,HTMLParamElement:W.e,HTMLPictureElement:W.e,HTMLPreElement:W.e,HTMLProgressElement:W.e,HTMLQuoteElement:W.e,HTMLScriptElement:W.e,HTMLShadowElement:W.e,HTMLSlotElement:W.e,HTMLSourceElement:W.e,HTMLSpanElement:W.e,HTMLStyleElement:W.e,HTMLTableCaptionElement:W.e,HTMLTableCellElement:W.e,HTMLTableDataCellElement:W.e,HTMLTableHeaderCellElement:W.e,HTMLTableColElement:W.e,HTMLTableElement:W.e,HTMLTableRowElement:W.e,HTMLTableSectionElement:W.e,HTMLTemplateElement:W.e,HTMLTextAreaElement:W.e,HTMLTimeElement:W.e,HTMLTitleElement:W.e,HTMLTrackElement:W.e,HTMLUListElement:W.e,HTMLUnknownElement:W.e,HTMLVideoElement:W.e,HTMLDirectoryElement:W.e,HTMLFontElement:W.e,HTMLFrameElement:W.e,HTMLFrameSetElement:W.e,HTMLMarqueeElement:W.e,HTMLElement:W.e,HTMLAnchorElement:W.bK,HTMLAreaElement:W.bM,HTMLCanvasElement:W.as,CanvasRenderingContext2D:W.b_,CDATASection:W.a_,CharacterData:W.a_,Comment:W.a_,ProcessingInstruction:W.a_,Text:W.a_,DOMException:W.d0,DOMRectReadOnly:W.b0,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,SubmitEvent:W.b,EventTarget:W.J,HTMLFormElement:W.bV,MouseEvent:W.R,DragEvent:W.R,PointerEvent:W.R,WheelEvent:W.R,Document:W.Q,DocumentFragment:W.Q,HTMLDocument:W.Q,ShadowRoot:W.Q,XMLDocument:W.Q,Attr:W.Q,DocumentType:W.Q,Node:W.Q,Path2D:W.c5,HTMLSelectElement:W.ca,CompositionEvent:W.Z,FocusEvent:W.Z,KeyboardEvent:W.Z,TextEvent:W.Z,TouchEvent:W.Z,UIEvent:W.Z,Window:W.aI,DOMWindow:W.aI,ClientRect:W.bm,DOMRect:W.bm})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=G.iC
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=line.dart.js.map
