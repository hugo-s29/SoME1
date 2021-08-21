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
a[c]=function(){a[c]=function(){H.iE(b)}
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
if(a[b]!==t)H.iF(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.eD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.eD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.eD(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={eo:function eo(){},
u:function(a){return new H.b5("Field '"+a+"' has not been initialized.")},
f5:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eC:function(a,b,c){return a},
d6:function(){return new P.bg("No element")},
b5:function b5(a){this.a=a},
eg:function eg(){},
b0:function b0(){},
x:function x(){},
bj:function bj(a,b,c,d){var _=this
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
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
a8:function a8(a,b){this.a=a
this.$ti=b},
fN:function(a){var t,s=H.fM(a)
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
dk:function(a){return H.ho(a)},
ho:function(a){var t,s,r,q
if(a instanceof P.r)return H.N(H.bF(a),null)
if(J.bE(a)===C.M||u.ak.b(a)){t=C.v(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.N(H.bF(a),null)},
e9:function(a){throw H.d(H.ii(a))},
k:function(a,b){if(a==null)J.ap(a)
throw H.d(H.eE(a,b))},
eE:function(a,b){var t,s="index"
if(!H.fr(b))return new P.a2(!0,b,s,null)
t=H.ac(J.ap(a))
if(b<0||b>=t)return P.em(b,a,s,null,t)
return P.dl(b,s)},
ii:function(a){return new P.a2(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.c3()
t=new Error()
t.dartException=a
s=H.iG
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
iG:function(){return J.cH(this.dartException)},
o:function(a){throw H.d(a)},
i:function(a){throw H.d(P.a0(a))},
a9:function(a){var t,s,r,q,p,o
a=H.iC(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.c([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.dt(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
du:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
f6:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ep:function(a,b){var t=b==null,s=t?null:b.method
return new H.c0(a,s,t?null:b.receiver)},
ao:function(a){if(a==null)return new H.dh(a)
if(a instanceof H.b1)return H.an(a,u.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.an(a,a.dartException)
return H.ig(a)},
an:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ig:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.cR(s,16)&8191)===10)switch(r){case 438:return H.an(a,H.ep(H.j(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.j(t)+" (Error "+r+")"
return H.an(a,new H.bb(q,f))}}if(a instanceof TypeError){p=$.fR()
o=$.fS()
n=$.fT()
m=$.fU()
l=$.fX()
k=$.fY()
j=$.fW()
$.fV()
i=$.h_()
h=$.fZ()
g=p.I(t)
if(g!=null)return H.an(a,H.ep(H.by(t),g))
else{g=o.I(t)
if(g!=null){g.method="call"
return H.an(a,H.ep(H.by(t),g))}else{g=n.I(t)
if(g==null){g=m.I(t)
if(g==null){g=l.I(t)
if(g==null){g=k.I(t)
if(g==null){g=j.I(t)
if(g==null){g=m.I(t)
if(g==null){g=i.I(t)
if(g==null){g=h.I(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){H.by(t)
return H.an(a,new H.bb(t,g==null?f:g.method))}}}return H.an(a,new H.ci(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.bf()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.an(a,new P.a2(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.bf()
return a},
am:function(a){var t
if(a instanceof H.b1)return a.b
if(a==null)return new H.bq(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bq(a)},
iw:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.ac(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.dH("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.iw)
a.$identity=t
return t},
he:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.cc().constructor.prototype):Object.create(new H.aC(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.a3
if(typeof s!=="number")return s.q()
$.a3=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.eR(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}u.K.a(d)
k.$S=H.ha(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.eR(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
ha:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.fE,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.h8:H.h7
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
hb:function(a,b,c,d){var t=H.eQ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
eR:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.hd(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.hb(s,!q,t,b)
if(s===0){q=$.a3
if(typeof q!=="number")return q.q()
$.a3=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.aY
return new Function(q+(p==null?$.aY=H.cT("self"):p)+";return "+o+"."+H.j(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.a3
if(typeof q!=="number")return q.q()
$.a3=q+1
n+=q
q="return function("+n+"){return this."
p=$.aY
return new Function(q+(p==null?$.aY=H.cT("self"):p)+"."+H.j(t)+"("+n+");}")()},
hc:function(a,b,c,d){var t=H.eQ,s=H.h9
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
hd:function(a,b){var t,s,r,q,p,o,n,m=$.aY
if(m==null)m=$.aY=H.cT("self")
t=$.eP
if(t==null)t=$.eP=H.cT("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.hc(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.j(s)+"(this."+t+");"
o=$.a3
if(typeof o!=="number")return o.q()
$.a3=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.j(s)+"(this."+t+", "+n+");"
o=$.a3
if(typeof o!=="number")return o.q()
$.a3=o+1
return new Function(p+o+"}")()},
eD:function(a,b,c,d,e,f,g){return H.he(a,b,c,d,!!e,!!f,g)},
h7:function(a,b){return H.cz(v.typeUniverse,H.bF(a.a),b)},
h8:function(a,b){return H.cz(v.typeUniverse,H.bF(a.c),b)},
eQ:function(a){return a.a},
h9:function(a){return a.c},
cT:function(a){var t,s,r,q=new H.aC("self","target","receiver","name"),p=J.en(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.eN("Field name "+a+" not found."))},
eB:function(a){if(a==null)H.ij("boolean expression must not be null")
return a},
ij:function(a){throw H.d(new H.cl(a))},
iE:function(a){throw H.d(new P.bQ(a))},
ir:function(a){return v.getIsolateTag(a)},
iF:function(a){return H.o(new H.b5(a))},
jl:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
iy:function(a){var t,s,r,q,p,o=H.by($.fD.$1(a)),n=$.e8[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ed[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.hQ($.fx.$2(a,o))
if(r!=null){n=$.e8[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ed[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.ee(t)
$.e8[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ed[o]=t
return t}if(q==="-"){p=H.ee(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.fK(a,t)
if(q==="*")throw H.d(P.f7(o))
if(v.leafTags[o]===true){p=H.ee(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.fK(a,t)},
fK:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.eJ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ee:function(a){return J.eJ(a,!1,null,!!a.$iiT)},
iA:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ee(t)
else return J.eJ(t,c,null,null)},
it:function(){if(!0===$.eI)return
$.eI=!0
H.iu()},
iu:function(){var t,s,r,q,p,o,n,m
$.e8=Object.create(null)
$.ed=Object.create(null)
H.is()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.fL.$1(p)
if(o!=null){n=H.iA(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
is:function(){var t,s,r,q,p,o,n=C.B()
n=H.aO(C.C,H.aO(C.D,H.aO(C.w,H.aO(C.w,H.aO(C.E,H.aO(C.F,H.aO(C.G(C.v),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.fD=new H.ea(q)
$.fx=new H.eb(p)
$.fL=new H.ec(o)},
aO:function(a,b){return a(b)||b},
hi:function(a,b,c,d,e,f){var t=function(g,h){try{return new RegExp(g,h)}catch(s){return s}}(a,""+""+""+""+"")
if(t instanceof RegExp)return t
throw H.d(new P.d5("Illegal RegExp pattern ("+String(t)+")",a))},
iC:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bW:function bW(){},
af:function af(a,b){this.a=a
this.$ti=b},
dt:function dt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bb:function bb(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a){this.a=a},
dh:function dh(a){this.a=a},
b1:function b1(a,b){this.a=a
this.b=b},
bq:function bq(a){this.a=a
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
b4:function b4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d9:function d9(a,b){this.a=a
this.b=b
this.c=null},
b6:function b6(a,b){this.a=a
this.$ti=b},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ea:function ea(a){this.a=a},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
c_:function c_(a,b){this.a=a
this.b=b},
dX:function dX(a){this.b=a},
f2:function(a,b){var t=b.c
return t==null?b.c=H.ew(a,b.z,!0):t},
f1:function(a,b){var t=b.c
return t==null?b.c=H.bu(a,"V",[b.z]):t},
f3:function(a){var t=a.y
if(t===6||t===7||t===8)return H.f3(a.z)
return t===11||t===12},
hr:function(a){return a.cy},
cF:function(a){return H.e1(v.typeUniverse,a,!1)},
iv:function(a,b){var t,s,r,q,p
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
return H.fj(a,s,!0)
case 7:t=b.z
s=H.ad(a,t,c,a0)
if(s===t)return b
return H.ew(a,s,!0)
case 8:t=b.z
s=H.ad(a,t,c,a0)
if(s===t)return b
return H.fi(a,s,!0)
case 9:r=b.Q
q=H.bD(a,r,c,a0)
if(q===r)return b
return H.bu(a,b.z,q)
case 10:p=b.z
o=H.ad(a,p,c,a0)
n=b.Q
m=H.bD(a,n,c,a0)
if(o===p&&m===n)return b
return H.eu(a,o,m)
case 11:l=b.z
k=H.ad(a,l,c,a0)
j=b.Q
i=H.ic(a,j,c,a0)
if(k===l&&i===j)return b
return H.fh(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.bD(a,h,c,a0)
p=b.z
o=H.ad(a,p,c,a0)
if(g===h&&o===p)return b
return H.ev(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.cR("Attempted to substitute unexpected RTI kind "+d))}},
bD:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.ad(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
id:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.ad(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
ic:function(a,b,c,d){var t,s=b.a,r=H.bD(a,s,c,d),q=b.b,p=H.bD(a,q,c,d),o=b.c,n=H.id(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.cr()
t.a=r
t.b=p
t.c=n
return t},
c:function(a,b){a[v.arrayRti]=b
return a},
fz:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.fE(t)
return a.$S()}return null},
fF:function(a,b){var t
if(H.f3(b))if(a instanceof H.T){t=H.fz(a)
if(t!=null)return t}return H.bF(a)},
bF:function(a){var t
if(a instanceof P.r){t=a.$ti
return t!=null?t:H.ex(a)}if(Array.isArray(a))return H.A(a)
return H.ex(J.bE(a))},
A:function(a){var t=a[v.arrayRti],s=u.m
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
M:function(a){var t=a.$ti
return t!=null?t:H.ex(a)},
ex:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.hZ(a,t)},
hZ:function(a,b){var t=a instanceof H.T?a.__proto__.__proto__.constructor:b,s=H.hM(v.typeUniverse,t.name)
b.$ccache=s
return s},
fE:function(a){var t,s,r
H.ac(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.e1(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
io:function(a){var t,s,r,q=a.x
if(q!=null)return q
t=a.cy
s=t.replace(/\*/g,"")
if(s===t)return a.x=new H.cx(a)
r=H.e1(v.typeUniverse,s,!0)
q=r.x
return a.x=q==null?r.x=new H.cx(r):q},
hY:function(a){var t,s,r,q=this
if(q===u.K)return H.bA(q,a,H.i1)
if(!H.ae(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.bA(q,a,H.i4)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.fr
else if(s===u.W||s===u.H)r=H.i0
else if(s===u.R)r=H.i2
else r=s===u.U?H.fp:null
if(r!=null)return H.bA(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.ix)){q.r="$i"+t
return H.bA(q,a,H.i3)}}else if(t===7)return H.bA(q,a,H.hW)
return H.bA(q,a,H.hU)},
bA:function(a,b,c){a.b=c
return a.b(b)},
hX:function(a){var t,s=this,r=H.hT
if(!H.ae(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.hR
else if(s===u.K)r=H.hP
else{t=H.bG(s)
if(t)r=H.hV}s.a=r
return s.a(a)},
eA:function(a){var t,s=a.y
if(!H.ae(a))if(!(a===u._))if(!(a===u.aw))if(s!==7)t=s===8&&H.eA(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
hU:function(a){var t=this
if(a==null)return H.eA(t)
return H.z(v.typeUniverse,H.fF(a,t),null,t,null)},
hW:function(a){if(a==null)return!0
return this.z.b(a)},
i3:function(a){var t,s=this
if(a==null)return H.eA(s)
t=s.r
if(a instanceof P.r)return!!a[t]
return!!J.bE(a)[t]},
hT:function(a){var t,s=this
if(a==null){t=H.bG(s)
if(t)return a}else if(s.b(a))return a
H.fm(a,s)},
hV:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.fm(a,t)},
fm:function(a,b){throw H.d(H.fg(H.f9(a,H.fF(a,b),H.N(b,null))))},
e7:function(a,b,c,d){var t=null
if(H.z(v.typeUniverse,a,t,b,t))return a
throw H.d(H.fg("The type argument '"+H.N(a,t)+"' is not a subtype of the type variable bound '"+H.N(b,t)+"' of type variable '"+c+"' in '"+d+"'."))},
f9:function(a,b,c){var t=P.bT(a),s=H.N(b==null?H.bF(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
fg:function(a){return new H.bt("TypeError: "+a)},
L:function(a,b){return new H.bt("TypeError: "+H.f9(a,null,b))},
i1:function(a){return a!=null},
hP:function(a){if(a!=null)return a
throw H.d(H.L(a,"Object"))},
i4:function(a){return!0},
hR:function(a){return a},
fp:function(a){return!0===a||!1===a},
jb:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.L(a,"bool"))},
jd:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.L(a,"bool"))},
jc:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.L(a,"bool?"))},
hN:function(a){if(typeof a=="number")return a
throw H.d(H.L(a,"double"))},
jf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"double"))},
je:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"double?"))},
fr:function(a){return typeof a=="number"&&Math.floor(a)===a},
ac:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.L(a,"int"))},
jh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.L(a,"int"))},
jg:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.L(a,"int?"))},
i0:function(a){return typeof a=="number"},
hO:function(a){if(typeof a=="number")return a
throw H.d(H.L(a,"num"))},
jj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"num"))},
ji:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.L(a,"num?"))},
i2:function(a){return typeof a=="string"},
by:function(a){if(typeof a=="string")return a
throw H.d(H.L(a,"String"))},
jk:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.L(a,"String"))},
hQ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.L(a,"String?"))},
i9:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.N(a[r],b)
return t},
fo:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=H.c([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)C.a.m(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.k(a4,k)
n=C.y.q(n,a4[k])
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
if(m===9){q=H.ie(a.z)
p=a.Q
return p.length!==0?q+("<"+H.i9(p,b)+">"):q}if(m===11)return H.fo(a,b,null)
if(m===12)return H.fo(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.k(b,o)
return b[o]}return"?"},
ie:function(a){var t,s=H.fM(a)
if(s!=null)return s
t="minified:"+a
return t},
fk:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
hM:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.e1(a,b,!1)
else if(typeof n=="number"){t=n
s=H.bv(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.bu(a,b,r)
o[b]=p
return p}else return n},
hK:function(a,b){return H.fl(a.tR,b)},
hJ:function(a,b){return H.fl(a.eT,b)},
e1:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.ff(H.fd(a,null,b,c))
s.set(b,t)
return t},
cz:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.ff(H.fd(a,b,c,!0))
r.set(c,s)
return s},
hL:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.eu(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
al:function(a,b){b.a=H.hX
b.b=H.hY
return b},
bv:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.Y(null,null)
t.y=b
t.cy=c
s=H.al(a,t)
a.eC.set(c,s)
return s},
fj:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.hH(a,b,s,c)
a.eC.set(s,t)
return t},
hH:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ae(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.Y(null,null)
r.y=6
r.z=b
r.cy=c
return H.al(a,r)},
ew:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.hG(a,b,s,c)
a.eC.set(s,t)
return t},
hG:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.ae(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.bG(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.aw)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.bG(r.z))return r
else return H.f2(a,b)}}q=new H.Y(null,null)
q.y=7
q.z=b
q.cy=c
return H.al(a,q)},
fi:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.hE(a,b,s,c)
a.eC.set(s,t)
return t},
hE:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ae(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.bu(a,"V",[b])
else if(b===u.P||b===u.T)return u.eH}r=new H.Y(null,null)
r.y=8
r.z=b
r.cy=c
return H.al(a,r)},
hI:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
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
hD:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
bu:function(a,b,c){var t,s,r,q=b
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
eu:function(a,b,c){var t,s,r,q,p,o
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
fh:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.cy(n)
if(k>0){t=m>0?",":""
s=H.cy(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.hD(j)
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
ev:function(a,b,c,d){var t,s=b.cy+("<"+H.cy(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.hF(a,b,c,s,d)
a.eC.set(s,t)
return t},
hF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.ad(a,b,s,0)
n=H.bD(a,c,s,0)
return H.ev(a,o,n,c!==n)}}m=new H.Y(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.al(a,m)},
fd:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ff:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.hy(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.fe(a,s,i,h,!1)
else if(r===46)s=H.fe(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.ak(a.u,a.e,h.pop()))
break
case 94:h.push(H.hI(a.u,h.pop()))
break
case 35:h.push(H.bv(a.u,5,"#"))
break
case 64:h.push(H.bv(a.u,2,"@"))
break
case 126:h.push(H.bv(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.et(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.bu(q,o,p))
else{n=H.ak(q,a.e,o)
switch(n.y){case 11:h.push(H.ev(q,n,p,a.n))
break
default:h.push(H.eu(q,n,p))
break}}break
case 38:H.hz(a,h)
break
case 42:q=a.u
h.push(H.fj(q,H.ak(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.ew(q,H.ak(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.fi(q,H.ak(q,a.e,h.pop()),a.n))
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
H.et(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.fh(q,H.ak(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.et(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.hB(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.ak(a.u,a.e,j)},
hy:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
fe:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.fk(t,p.z)[q]
if(o==null)H.o('No "'+q+'" in "'+H.hr(p)+'"')
d.push(H.cz(t,p,o))}else d.push(q)
return n},
hz:function(a,b){var t=b.pop()
if(0===t){b.push(H.bv(a.u,1,"0&"))
return}if(1===t){b.push(H.bv(a.u,4,"1&"))
return}throw H.d(P.cR("Unexpected extended operation "+H.j(t)))},
ak:function(a,b,c){if(typeof c=="string")return H.bu(a,c,a.sEA)
else if(typeof c=="number")return H.hA(a,b,c)
else return c},
et:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.ak(a,b,c[t])},
hB:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.ak(a,b,c[t])},
hA:function(a,b,c){var t,s,r=b.y
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
if(q===6){t=H.f2(a,d)
return H.z(a,b,c,t,e)}if(s===8){if(!H.z(a,b.z,c,d,e))return!1
return H.z(a,H.f1(a,b),c,d,e)}if(s===7){t=H.z(a,u.P,c,d,e)
return t&&H.z(a,b.z,c,d,e)}if(q===8){if(H.z(a,b,c,d.z,e))return!0
return H.z(a,b,c,H.f1(a,d),e)}if(q===7){t=H.z(a,b,c,u.P,e)
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
if(!H.z(a,l,c,k,e)||!H.z(a,k,e,l,c))return!1}return H.fq(a,b.z,c,d.z,e)}if(q===11){if(b===u.L)return!0
if(t)return!1
return H.fq(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.i_(a,b,c,d,e)}return!1},
fq:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
i_:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.z(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.fk(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.z(a,H.cz(a,b,m[q]),c,s[q],e))return!1
return!0},
bG:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.ae(a))if(s!==7)if(!(s===6&&H.bG(a.z)))t=s===8&&H.bG(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ix:function(a){var t
if(!H.ae(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
ae:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
fl:function(a,b){var t,s,r=Object.keys(b),q=r.length
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
bt:function bt(a){this.a=a},
fM:function(a){return v.mangledGlobalNames[a]}},J={
eJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eH:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.eI==null){H.it()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.f7("Return interceptor for "+H.j(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.dV
if(p==null)p=$.dV=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.iy(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.z
if(t===Object.prototype)return C.z
if(typeof r=="function"){p=$.dV
if(p==null)p=$.dV=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
eV:function(a,b){if(a<0||a>4294967295)throw H.d(P.aF(a,0,4294967295,"length",null))
return J.eX(new Array(a),b)},
eW:function(a,b){if(a<0)throw H.d(P.eN("Length must be a non-negative integer: "+a))
return H.c(new Array(a),b.h("n<0>"))},
eX:function(a,b){return J.en(H.c(a,b.h("n<0>")),b)},
en:function(a,b){a.fixed$length=Array
return a},
bE:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b3.prototype
return J.bZ.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.aD.prototype
if(typeof a=="boolean")return J.bY.prototype
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eH(a)},
fA:function(a){if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
ip:function(a){if(typeof a=="number")return J.av.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
eG:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(!(a instanceof P.r))return J.aa.prototype
return a},
fB:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eH(a)},
iq:function(a){if(typeof a=="number")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.aa.prototype
return a},
fC:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.r)return a
return J.eH(a)},
h0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ip(a).q(a,b)},
aR:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bE(a).v(a,b)},
ej:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string")if(b>>>0===b&&b<a.length)return a[b]
return J.eG(a).w(a,b)},
h1:function(a,b,c,d){return J.fC(a).cD(a,b,c,d)},
h2:function(a,b,c,d){return J.fC(a).cO(a,b,c,d)},
eM:function(a,b){return J.fA(a).H(a,b)},
aS:function(a){return J.bE(a).gj(a)},
cG:function(a){return J.fA(a).gD(a)},
ap:function(a){return J.fB(a).gk(a)},
cH:function(a){return J.bE(a).i(a)},
h3:function(a,b){return J.iq(a).aP(a,b)},
W:function W(){},
bY:function bY(){},
aD:function aD(){},
aw:function aw(){},
c6:function c6(){},
aa:function aa(){},
ah:function ah(){},
n:function n(a){this.$ti=a},
d8:function d8(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
av:function av(){},
b3:function b3(){},
bZ:function bZ(){},
ag:function ag(){}},P={
hs:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.ik()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.aP(new P.dC(r),1)).observe(t,{childList:true})
return new P.dB(r,t,s)}else if(self.setImmediate!=null)return P.il()
return P.im()},
ht:function(a){self.scheduleImmediate(H.aP(new P.dD(u.M.a(a)),0))},
hu:function(a){self.setImmediate(H.aP(new P.dE(u.M.a(a)),0))},
hv:function(a){u.M.a(a)
P.hC(0,a)},
hC:function(a,b){var t=new P.e_()
t.cs(a,b)
return t},
cD:function(a){return new P.cm(new P.D($.w,a.h("D<0>")),a.h("cm<0>"))},
cC:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
aL:function(a,b){P.hS(a,b)},
cB:function(a,b){b.aI(0,a)},
cA:function(a,b){b.bu(H.ao(a),H.am(a))},
hS:function(a,b){var t,s,r=new P.e2(b),q=new P.e3(b)
if(a instanceof P.D)a.bp(r,q,u.z)
else{t=u.z
if(u.d.b(a))a.aO(r,q,t)
else{s=new P.D($.w,u.c)
s.a=4
s.c=a
s.bp(r,q,t)}}},
cE:function(a){var t=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(s){e=s
d=c}}}(a,1)
return $.w.bG(new P.e6(t),u.q,u.S,u.z)},
hw:function(a){return new P.aJ(a,1)},
fa:function(){return C.Z},
fb:function(a){return new P.aJ(a,3)},
fs:function(a,b){return new P.bs(a,b.h("bs<0>"))},
cS:function(a,b){var t=H.eC(a,"error",u.K)
return new P.aX(t,b==null?P.h6(a):b)},
h6:function(a){var t
if(u.C.b(a)){t=a.gaq()
if(t!=null)return t}return C.H},
dL:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.a9()
b.a=a.a
b.c=a.c
P.aI(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.bo(r)}},
aI:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.t,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.e4(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.aI(c.a,b)
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
P.e4(d,d,l.b,k.a,k.b)
return}g=$.w
if(g!==h)$.w=h
else g=d
b=b.c
if((b&15)===8)new P.dT(q,c,p).$0()
else if(j){if((b&1)!==0)new P.dS(q,k).$0()}else if((b&2)!==0)new P.dR(c,q).$0()
if(g!=null)$.w=g
b=q.c
if(r.b(b)){l=q.a.$ti
l=l.h("V<2>").b(b)||!l.Q[1].b(b)}else l=!1
if(l){r.a(b)
f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.aa(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.dL(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.aa(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
i7:function(a,b){var t
if(u.ag.b(a))return b.bG(a,u.z,u.K,u.j)
t=u.bI
if(t.b(a))return t.a(a)
throw H.d(P.h4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
i6:function(){var t,s
for(t=$.aM;t!=null;t=$.aM){$.bC=null
s=t.b
$.aM=s
if(s==null)$.bB=null
t.a.$0()}},
ib:function(){$.ey=!0
try{P.i6()}finally{$.bC=null
$.ey=!1
if($.aM!=null)$.eK().$1(P.fy())}},
fv:function(a){var t=new P.cn(a),s=$.bB
if(s==null){$.aM=$.bB=t
if(!$.ey)$.eK().$1(P.fy())}else $.bB=s.b=t},
ia:function(a){var t,s,r,q=$.aM
if(q==null){P.fv(a)
$.bC=$.bB
return}t=new P.cn(a)
s=$.bC
if(s==null){t.b=q
$.aM=$.bC=t}else{r=s.b
t.b=r
$.bC=s.b=t
if(r==null)$.bB=t}},
iD:function(a){var t=null,s=$.w
if(C.e===s){P.aN(t,t,C.e,a)
return}P.aN(t,t,s,u.M.a(s.br(a)))},
iY:function(a,b){H.eC(a,"stream",u.K)
return new P.cv(b.h("cv<0>"))},
e4:function(a,b,c,d,e){P.ia(new P.e5(d,e))},
ft:function(a,b,c,d,e){var t,s=$.w
if(s===c)return d.$0()
$.w=c
t=s
try{s=d.$0()
return s}finally{$.w=t}},
fu:function(a,b,c,d,e,f,g){var t,s=$.w
if(s===c)return d.$1(e)
$.w=c
t=s
try{s=d.$1(e)
return s}finally{$.w=t}},
i8:function(a,b,c,d,e,f,g,h,i){var t,s=$.w
if(s===c)return d.$2(e,f)
$.w=c
t=s
try{s=d.$2(e,f)
return s}finally{$.w=t}},
aN:function(a,b,c,d){u.M.a(d)
if(C.e!==c)d=c.br(d)
P.fv(d)},
dC:function dC(a){this.a=a},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
e_:function e_(){},
e0:function e0(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=!1
this.$ti=b},
e2:function e2(a){this.a=a},
e3:function e3(a){this.a=a},
e6:function e6(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
aK:function aK(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
bs:function bs(a,b){this.a=a
this.$ti=b},
aX:function aX(a,b){this.a=a
this.b=b},
co:function co(){},
br:function br(a,b){this.a=a
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
dI:function dI(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
cn:function cn(a){this.a=a
this.b=null},
bh:function bh(){},
dq:function dq(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
bi:function bi(){},
cv:function cv(a){this.$ti=a},
bw:function bw(){},
e5:function e5(a,b){this.a=a
this.b=b},
cu:function cu(){},
dY:function dY(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function(a,b){return new H.b4(a.h("@<0>").u(b).h("b4<1,2>"))},
hk:function(a){return new P.ab(a.h("ab<0>"))},
hl:function(a){return new P.ab(a.h("ab<0>"))},
es:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
hx:function(a,b,c){var t=new P.aB(a,b,c.h("aB<0>"))
t.c=a.e
return t},
hg:function(a,b,c){var t,s
if(P.ez(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.c([],u.s)
C.a.m($.S,a)
try{P.i5(a,t)}finally{if(0>=$.S.length)return H.k($.S,-1)
$.S.pop()}s=P.f4(b,u.hf.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
eT:function(a,b,c){var t,s
if(P.ez(a))return b+"..."+c
t=new P.cd(b)
C.a.m($.S,a)
try{s=t
s.a=P.f4(s.a,a,", ")}finally{if(0>=$.S.length)return H.k($.S,-1)
$.S.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ez:function(a){var t,s
for(t=$.S.length,s=0;s<t;++s)if(a===$.S[s])return!0
return!1},
i5:function(a,b){var t,s,r,q,p,o,n,m=a.gD(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=H.j(m.gt())
C.a.m(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return H.k(b,-1)
s=b.pop()
if(0>=b.length)return H.k(b,-1)
r=b.pop()}else{q=m.gt();++k
if(!m.l()){if(k<=4){C.a.m(b,H.j(q))
return}s=H.j(q)
if(0>=b.length)return H.k(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.l();q=p,p=o){o=m.gt();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2;--k}C.a.m(b,"...")
return}}r=H.j(q)
s=H.j(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.m(b,n)
C.a.m(b,r)
C.a.m(b,s)},
eq:function(a,b){var t,s,r=P.hk(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.i)(a),++s)r.m(0,b.a(a[s]))
return r},
f_:function(a){var t,s={}
if(P.ez(a))return"{...}"
t=new P.cd("")
try{C.a.m($.S,a)
t.a+="{"
s.a=!0
a.bz(0,new P.db(s,t))
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
b2:function b2(){},
b8:function b8(){},
db:function db(a,b){this.a=a
this.b=b},
aE:function aE(){},
be:function be(){},
bp:function bp(){},
bx:function bx(){},
hf:function(a){if(a instanceof H.T)return a.i(0)
return"Instance of '"+H.dk(a)+"'"},
eZ:function(a,b,c,d){var t,s=c?J.eW(a,d):J.eV(a,d)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
G:function(a,b,c){var t
if(b)return P.eY(a,c)
t=J.en(P.eY(a,c),c)
return t},
eY:function(a,b){var t,s
if(Array.isArray(a))return H.c(a.slice(0),b.h("n<0>"))
t=H.c([],b.h("n<0>"))
for(s=J.cG(a);s.l();)C.a.m(t,s.gt())
return t},
hq:function(a){return new H.c_(a,H.hi(a,!1,!0,!1,!1,!1))},
f4:function(a,b,c){var t=J.cG(b)
if(!t.l())return a
if(c.length===0){do a+=H.j(t.gt())
while(t.l())}else{a+=H.j(t.gt())
for(;t.l();)a=a+c+H.j(t.gt())}return a},
bT:function(a){if(typeof a=="number"||H.fp(a)||null==a)return J.cH(a)
if(typeof a=="string")return JSON.stringify(a)
return P.hf(a)},
cR:function(a){return new P.aW(a)},
eN:function(a){return new P.a2(!1,null,null,a)},
h4:function(a,b,c){return new P.a2(!0,a,b,c)},
dl:function(a,b){return new P.bc(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.bc(b,c,!0,a,d,"Invalid value")},
f0:function(a,b,c){if(0>a||a>c)throw H.d(P.aF(a,0,c,"start",null))
if(a>b||b>c)throw H.d(P.aF(b,a,c,"end",null))
return b},
dm:function(a,b){if(a<0)throw H.d(P.aF(a,0,null,b,null))
return a},
em:function(a,b,c,d,e){var t=H.ac(e==null?J.ap(b):e)
return new P.bV(t,!0,a,c,"Index out of range")},
a1:function(a){return new P.cj(a)},
f7:function(a){return new P.ch(a)},
cb:function(a){return new P.bg(a)},
a0:function(a){return new P.bP(a)},
v:function v(){},
aW:function aW(a){this.a=a},
cg:function cg(){},
c3:function c3(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bV:function bV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cj:function cj(a){this.a=a},
ch:function ch(a){this.a=a},
bg:function bg(a){this.a=a},
bP:function bP(a){this.a=a},
bf:function bf(){},
bQ:function bQ(a){this.a=a},
dH:function dH(a){this.a=a},
d5:function d5(a,b){this.a=a
this.b=b},
m:function m(){},
E:function E(){},
C:function C(){},
r:function r(){},
cw:function cw(){},
cd:function cd(a){this.a=a},
fJ:function(a,b,c){H.e7(c,u.H,"T","min")
return Math.min(c.a(a),c.a(b))},
fI:function(a,b,c){H.e7(c,u.H,"T","max")
return Math.max(c.a(a),c.a(b))},
ct:function ct(){this.b=this.a=0},
ax:function ax(a,b,c){this.a=a
this.b=b
this.$ti=c}},W={
hn:function(a){var t=new Path2D(a)
t.toString
return t},
dW:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fc:function(a,b,c,d){var t=W.dW(W.dW(W.dW(W.dW(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
dF:function(a,b,c,d,e){var t=W.fw(new W.dG(c),u.B),s=t!=null
if(s&&!0){u.A.a(t)
if(s)J.h1(a,b,t,!1)}return new W.bn(a,b,t,!1,e.h("bn<0>"))},
fw:function(a,b){var t=$.w
if(t===C.e)return a
return t.cW(a,b)},
e:function e(){},
bJ:function bJ(){},
bL:function bL(){},
as:function as(){},
aZ:function aZ(){},
a_:function a_(){},
d0:function d0(){},
b_:function b_(){},
a:function a(){},
b:function b(){},
J:function J(){},
bU:function bU(){},
R:function R(){},
Q:function Q(){},
c4:function c4(){},
ca:function ca(){},
Z:function Z(){},
aH:function aH(){},
dA:function dA(a){this.a=a},
bl:function bl(){},
el:function el(a,b){this.a=a
this.$ti=b},
bm:function bm(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
dG:function dG(a){this.a=a}},A={au:function au(a,b){this.a=a
this.$ti=b},d7:function d7(a){this.a=a},bo:function bo(a,b){this.a=a
this.b=null
this.$ti=b},dn:function dn(){},dp:function dp(a){this.a=a},cU:function cU(){},cW:function cW(a){this.a=a},c5:function c5(a,b,c,d,e){var _=this
_.aJ=a
_.cY=b
_.cZ=c
_.dC=d
_.x=4
_.y=0
_.dy=_.dx=_.db=null
_.a=e
_.r=_.f=_.e=_.d=null},dj:function dj(){},
eU:function(a,b){return A.hh(a,b,b)},
hh:function(a,b,c){return P.fs(function(){var t=a,s=b
var r=0,q=1,p,o,n
return function $async$eU(d,e){if(d===1){p=e
r=q}while(true)switch(r){case 0:o=t.length,n=0
case 2:if(!(n<t.length)){r=4
break}r=5
return P.hw(t[n])
case 5:case 3:t.length===o||(0,H.i)(t),++n
r=2
break
case 4:return P.fa()
case 1:return P.fb(p)}}},c)},
bz:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fn:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911}},T={cX:function cX(a,b){var _=this
_.c=a
_.d=8
_.f=b
_.r=null},cY:function cY(){},cZ:function cZ(){}},L={aT:function aT(){},
iz:function(){var t,s,r,q,p=document,o=p.getElementById("raster-point")
o.toString
t=H.c([],u.E)
s=new Y.b9(0)
s.ar(0)
p=p.createElement("canvas")
u.gA.a(p)
r=new Z.bM(p,o,t,C.c,C.c,s,C.c,C.c)
r.a=new F.bN($.aQ())
o.appendChild(p).toString
q=new L.cV()
q.co()
q.x=r
q.gp(q).ga3()
q.gp(q).bs(q.gn())
p=q.gn()
p.r=q.gp(q)
p.gp(p).bs(p)
o=p.gp(p)
t=o.ga3()
t.ce(o)
o=o.d.getContext("2d")
o.toString
t.e=o
p.d=p.c/1.7777777777777777
o=p.gp(p).ga3()
t=p.c
s=p.d
o.gG().setTransform(1280/t,0,0,-720/s,640-0/t,360-0/s)
p.gp(p).ga3().aM(p.f)
q.Y()},
cV:function cV(){var _=this
_.a=0
_.x=_.f=_.d=null}},Z={bI:function bI(){},cI:function cI(a){this.a=a},cJ:function cJ(a){this.a=a},cK:function cK(a){this.a=a},bM:function bM(a,b,c,d,e,f,g,h){var _=this
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
_.b=_.a=null},aU:function aU(){}},V={
eS:function(a){var t=new V.bR(0,6.283185307179586,0.08,a,new V.ds(),C.f)
t.a7(C.f,null,null)
t.c_(C.f)
return t},
ds:function ds(){},
cf:function cf(){},
bK:function bK(){},
bO:function bO(){},
bR:function bR(a,b,c,d,e,f){var _=this
_.d_=a
_.d0=b
_.d1=c
_.d2=d
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
_.d=d}},U={bX:function bX(){},bS:function bS(a,b){var _=this
_.fx=!1
_.x=a
_.a=b
_.r=_.f=_.e=_.d=null},d1:function d1(a){this.a=a},d2:function d2(a){this.a=a},d3:function d3(a){this.a=a}},Y={l:function l(){},df:function df(a){this.a=a},de:function de(a){this.a=a},dg:function dg(a,b){this.a=a
this.b=b},dc:function dc(){},dd:function dd(a){this.a=a},U:function U(a){this.b=a},P:function P(){},d4:function d4(){this.a=null},H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},c2:function c2(){},ba:function ba(a,b){this.c=a
this.a=b},a5:function a5(a,b){this.c=a
this.a=b},a6:function a6(a,b){this.c=a
this.a=b},a4:function a4(a,b){this.c=a
this.a=b},b9:function b9(a){this.a=a}},K={I:function I(){},dx:function dx(a,b){this.a=a
this.b=b},dy:function dy(a,b){this.a=a
this.b=b},dw:function dw(a,b){this.a=a
this.b=b},dv:function dv(){},ck:function ck(){}},F={bN:function bN(a){this.e=null
this.b=a
this.d=null},d_:function d_(){},
da:function(a,b,c){return F.hm(a,b,c,c)},
hm:function(a,b,c,d){return P.fs(function(){var t=a,s=b,r=c
var q=0,p=1,o,n,m
return function $async$da(e,f){if(e===1){o=f
q=p}while(true)switch(q){case 0:n=0
case 2:if(!(n<t.length)){q=4
break}m=t[n]
q=H.eB(s.$2(n,m))?5:6
break
case 5:q=7
return m
case 7:case 6:case 3:++n
q=2
break
case 4:return P.fa()
case 1:return P.fb(o)}}},d)},
ef:function(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d}},B={
B:function(a,b,c){var t,s=H.c([],u.Y)
if(c>0)for(t=b;t<a;t+=c)C.a.m(s,t)
else for(t=b;t>a;t+=c)C.a.m(s,t)
return s},
eF:function(a,b){var t,s,r
if(a.length===0)return H.c([],b.h("n<t<q,0>>"))
t=H.c([],b.h("n<t<q,0>>"))
for(s=u.dq.u(b).h("t<1,2>"),r=0;r<a.length;++r)C.a.m(t,new S.t(r,a[r],s))
return t},
fG:function(a,b,c){var t,s,r,q,p,o,n=H.c([],u.b)
for(t=B.B(a,0,1),s=t.length,r=a-1,q=u.n,p=0;p<t.length;t.length===s||(0,H.i)(t),++p){o=t[p]/r
n.push(H.c([c*(1-o)+b*o],q))}return S.aq(null,n)},
ih:function(a,b,c){var t,s,r,q=B.B(C.b.aH((a-b)/c),0,1),p=H.c([],u.b)
for(t=q.length,s=u.n,r=0;r<q.length;q.length===t||(0,H.i)(q),++r)p.push(H.c([q[r]*c+b],s))
return S.aq(null,p)},
bH:function(a,b,c){var t,s,r,q,p=a.length
if(p===0)return a
if(p>b)throw H.d("Trying to stretch an array to a length shorter than its own")
t=B.B(b,0,1)
s=H.A(t)
r=s.h("K<1,h>")
q=new H.K(t,s.h("h(1)").a(new B.eh(b,p)),r)
p=H.c([],c.h("n<0>"))
for(t=new H.X(q,q.gk(q),r.h("X<x.E>")),r=r.h("x.E");t.l();){s=C.b.O(r.a(t.d))
if(s<0||s>=a.length)return H.k(a,s)
p.push(a[s])}return p},
fO:function(a,b){var t=F.da(a,new B.ei(b),b)
return P.G(t,!0,t.$ti.h("m.E"))},
fP:function(a,b){var t=P.G(a,!0,b)
if(0>=t.length)return H.k(t,-1)
t.pop()
return t},
iH:function(a,b){var t,s,r,q=H.c([],b.h("n<0>")),p=P.hl(b)
for(t=H.A(a).h("a8<1>"),s=new H.a8(a,t),s=new H.X(s,s.gk(s),t.h("X<x.E>")),t=t.h("x.E");s.l();){r=t.a(s.d)
if(!p.V(0,r)){C.a.m(q,r)
p.m(0,r)}}t=b.h("a8<0>")
return P.G(new H.a8(q,t),!0,t.h("x.E"))},
eh:function eh(a,b){this.a=a
this.b=b},
ei:function ei(a){this.a=a}},S={
aq:function(a,b){var t,s,r=new S.aV(b)
if(a==null){t=r.gK(r).length
s=r.gK(r).length!==0?J.ap(C.a.gW(r.gK(r))):0
a=new S.t(t,s,u.o)
t=a}else t=a
r.sct(u.o.a(t))
return r},
ek:function(a,b){var t,s,r,q,p,o,n,m,l=b.b,k=H.c([],u.b)
for(t=B.B(b.a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.i)(t),++q){p=H.c([],r)
for(o=B.B(l,0,1),n=o.length,m=0;m<o.length;o.length===n||(0,H.i)(o),++m)p.push(a)
k.push(p)}return S.aq(b,k)},
eO:function(a){var t,s,r,q,p,o=H.c([],u.b)
for(t=a.length,s=u.n,r=0;q=a.length,r<q;a.length===t||(0,H.i)(a),++r){p=a[r]
o.push(H.c([p.a,p.b,p.c],s))}return S.aq(new S.t(q,3,u.o),o)},
h5:function(a){var t,s,r,q,p,o,n,m,l,k=H.c([],u.b)
for(t=B.B(a,0,1),s=t.length,r=u.n,q=0;q<t.length;t.length===s||(0,H.i)(t),++q){p=t[q]
o=H.c([],r)
for(n=B.B(a,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.i)(n),++l)if(p===n[l])o.push(1)
else o.push(0)
k.push(o)}return S.aq(new S.t(a,a,u.o),k)},
aV:function aV(a){this.a=a
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
aG:function aG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},M={f:function f(a,b,c){this.a=a
this.b=b
this.c=c},dz:function dz(a){this.a=a}}
var w=[C,H,J,P,W,A,T,L,Z,V,U,Y,K,F,B,S,M]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.eo.prototype={}
J.W.prototype={
v:function(a,b){return a===b},
gj:function(a){return H.a7(a)},
i:function(a){return"Instance of '"+H.dk(a)+"'"}}
J.bY.prototype={
i:function(a){return String(a)},
gj:function(a){return a?519018:218159},
$iy:1}
J.aD.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gj:function(a){return 0},
$iC:1}
J.aw.prototype={
gj:function(a){return 0},
i:function(a){return String(a)}}
J.c6.prototype={}
J.aa.prototype={}
J.ah.prototype={
i:function(a){var t=a[$.fQ()]
if(t==null)return this.cg(a)
return"JavaScript function for "+J.cH(t)},
$iat:1}
J.n.prototype={
m:function(a,b){H.A(a).c.a(b)
if(!!a.fixed$length)H.o(P.a1("add"))
a.push(b)},
de:function(a,b){var t
if(!!a.fixed$length)H.o(P.a1("remove"))
for(t=0;t<a.length;++t)if(J.aR(a[t],b)){a.splice(t,1)
return!0}return!1},
C:function(a,b){H.A(a).h("m<1>").a(b)
if(!!a.fixed$length)H.o(P.a1("addAll"))
this.cC(a,b)
return},
cC:function(a,b){var t,s
u.m.a(b)
t=b.length
if(t===0)return
if(a===b)throw H.d(P.a0(a))
for(s=0;s<t;++s)a.push(b[s])},
bC:function(a,b){var t,s=P.eZ(a.length,"",!1,u.R)
for(t=0;t<a.length;++t)this.P(s,t,H.j(a[t]))
return s.join(b)},
d9:function(a){return this.bC(a,"")},
N:function(a,b){var t,s,r
H.A(a).h("1(1,1)").a(b)
t=a.length
if(t===0)throw H.d(H.d6())
if(0>=t)return H.k(a,0)
s=a[0]
for(r=1;r<t;++r){s=b.$2(s,a[r])
if(t!==a.length)throw H.d(P.a0(a))}return s},
d4:function(a,b,c,d){var t,s,r
d.a(b)
H.A(a).u(d).h("1(1,2)").a(c)
t=a.length
for(s=b,r=0;r<t;++r){s=c.$2(s,a[r])
if(a.length!==t)throw H.d(P.a0(a))}return s},
H:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
gW:function(a){if(a.length>0)return a[0]
throw H.d(H.d6())},
gbE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.d(H.d6())},
b0:function(a,b,c,d,e){var t,s,r,q
H.A(a).h("m<1>").a(d)
if(!!a.immutable$list)H.o(P.a1("setRange"))
P.f0(b,c,a.length)
t=c-b
if(t===0)return
P.dm(e,"skipCount")
s=d
if(e+t>s.length)throw H.d(P.cb("Too few elements"))
if(e<b)for(r=t-1;r>=0;--r){q=e+r
if(q>=s.length)return H.k(s,q)
a[b+r]=s[q]}else for(r=0;r<t;++r){q=e+r
if(q>=s.length)return H.k(s,q)
a[b+r]=s[q]}},
c4:function(a,b,c,d){return this.b0(a,b,c,d,0)},
bx:function(a,b){var t,s
H.A(a).h("y(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(!H.eB(b.$1(a[s])))return!1
if(a.length!==t)throw H.d(P.a0(a))}return!0},
V:function(a,b){var t
for(t=0;t<a.length;++t)if(J.aR(a[t],b))return!0
return!1},
i:function(a){return P.eT(a,"[","]")},
gD:function(a){return new J.ar(a,a.length,H.A(a).h("ar<1>"))},
gj:function(a){return H.a7(a)},
gk:function(a){return a.length},
w:function(a,b){if(b>=a.length||b<0)throw H.d(H.eE(a,b))
return a[b]},
P:function(a,b,c){H.A(a).c.a(c)
if(!!a.immutable$list)H.o(P.a1("indexed set"))
if(b>=a.length||b<0)throw H.d(H.eE(a,b))
a[b]=c},
$im:1,
$ip:1}
J.d8.prototype={}
J.ar.prototype={
gt:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.i(r))
t=s.c
if(t>=q){s.sbi(null)
return!1}s.sbi(r[t]);++s.c
return!0},
sbi:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
J.av.prototype={
O:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.d(P.a1(""+a+".toInt()"))},
aH:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.d(P.a1(""+a+".ceil()"))},
bK:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a1(""+a+".round()"))},
dg:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
aP:function(a,b){var t,s
if(b>20)throw H.d(P.aF(b,0,20,"fractionDigits",null))
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
ap:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
J:function(a,b){return(a|0)===a?a/b|0:this.cT(a,b)},
cT:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.a1("Result of truncating division is "+H.j(t)+": "+H.j(a)+" ~/ "+b))},
cR:function(a,b){var t
if(a>0)t=this.cQ(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
cQ:function(a,b){return b>31?0:a>>>b},
$ih:1,
$iF:1}
J.b3.prototype={$iq:1}
J.bZ.prototype={}
J.ag.prototype={
q:function(a,b){H.by(b)
return a+b},
cd:function(a,b,c){if(b<0)throw H.d(P.dl(b,null))
if(b>c)throw H.d(P.dl(b,null))
if(c>a.length)throw H.d(P.dl(c,null))
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
H.b5.prototype={
i:function(a){var t="LateInitializationError: "+this.a
return t}}
H.eg.prototype={
$0:function(){var t=new P.D($.w,u.ck)
t.bc(null)
return t},
$S:14}
H.b0.prototype={}
H.x.prototype={
gD:function(a){var t=this
return new H.X(t,t.gk(t),H.M(t).h("X<x.E>"))},
N:function(a,b){var t,s,r,q=this
H.M(q).h("x.E(x.E,x.E)").a(b)
t=q.gk(q)
if(t===0)throw H.d(H.d6())
s=q.H(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.H(0,r))
if(t!==q.gk(q))throw H.d(P.a0(q))}return s}}
H.bj.prototype={
cp:function(a,b,c,d){var t,s=this.b
P.dm(s,"start")
t=this.c
if(t!=null){P.dm(t,"end")
if(s>t)throw H.d(P.aF(s,0,t,"start",null))}},
gcI:function(){var t=J.ap(this.a),s=this.c
if(s==null||s>t)return t
return s},
gcS:function(){var t=J.ap(this.a),s=this.b
if(s>t)return t
return s},
gk:function(a){var t,s=J.ap(this.a),r=this.b
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.F()
return t-r},
H:function(a,b){var t=this,s=t.gcS()+b
if(b<0||s>=t.gcI())throw H.d(P.em(b,t,"index",null,null))
return J.eM(t.a,s)},
dn:function(a,b){var t,s,r,q=this,p=q.b,o=q.a,n=J.fB(o),m=n.gk(o),l=q.c
if(l!=null&&l<m)m=l
t=m-p
if(t<=0){o=q.$ti.c
return b?J.eW(0,o):J.eV(0,o)}s=P.eZ(t,n.H(o,p),b,q.$ti.c)
for(r=1;r<t;++r){C.a.P(s,r,n.H(o,p+r))
if(n.gk(o)<m)throw H.d(P.a0(q))}return s},
dm:function(a){return this.dn(a,!0)}}
H.X.prototype={
gt:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a,q=r.gk(r)
if(s.b!==q)throw H.d(P.a0(r))
t=s.c
if(t>=q){s.sb7(null)
return!1}s.sb7(r.H(0,t));++s.c
return!0},
sb7:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
H.K.prototype={
gk:function(a){return J.ap(this.a)},
H:function(a,b){return this.b.$1(J.eM(this.a,b))}}
H.az.prototype={
gD:function(a){var t=this.a
return new H.bk(new J.ar(t,t.length,H.A(t).h("ar<1>")),this.b,this.$ti.h("bk<1>"))}}
H.bk.prototype={
l:function(){var t,s,r
for(t=this.a,s=t.$ti.c,r=this.b;t.l();)if(H.eB(r.$1(s.a(t.d))))return!0
return!1},
gt:function(){var t=this.a
return t.$ti.c.a(t.d)}}
H.a8.prototype={
gk:function(a){return this.a.length},
H:function(a,b){var t=this.a,s=t.length,r=s-1-b
if(r<0||r>=s)return H.k(t,r)
return t[r]}}
H.bW.prototype={
i:function(a){var t="<"+C.a.bC([H.io(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+t}}
H.af.prototype={
$2:function(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S:function(){return H.iv(H.fz(this.a),this.$ti)}}
H.dt.prototype={
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
H.bb.prototype={
i:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.c0.prototype={
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
H.b1.prototype={}
H.bq.prototype={
i:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iai:1}
H.T.prototype={
i:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.fN(s==null?"unknown":s)+"'"},
$iat:1,
gdA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ce.prototype={}
H.cc.prototype={
i:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.fN(t)+"'"}}
H.aC.prototype={
v:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.aC))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gj:function(a){var t,s=this.c
if(s==null)t=H.a7(this.a)
else t=typeof s!=="object"?J.aS(s):H.a7(s)
return(t^H.a7(this.b))>>>0},
i:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.dk(u.K.a(t))+"'")}}
H.c9.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.cl.prototype={
i:function(a){return"Assertion failed: "+P.bT(this.a)}}
H.b4.prototype={
gk:function(a){return this.a},
gbD:function(){return new H.b6(this,H.M(this).h("b6<1>"))},
w:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.ay(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.ay(q,b)
r=s==null?o:s.b
return r}else return p.d7(b)},
d7:function(a){var t,s,r=this.d
if(r==null)return null
t=this.bl(r,J.aS(a)&0x3ffffff)
s=this.bB(t,a)
if(s<0)return null
return t[s].b},
P:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.M(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.b8(t==null?n.b=n.az():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.b8(s==null?n.c=n.az():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.az()
q=J.aS(b)&0x3ffffff
p=n.bl(r,q)
if(p==null)n.aB(r,q,[n.at(b,c)])
else{o=n.bB(p,b)
if(o>=0)p[o].b=c
else p.push(n.at(b,c))}}},
bz:function(a,b){var t,s,r=this
H.M(r).h("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.d(P.a0(r))
t=t.c}},
b8:function(a,b,c){var t,s=this,r=H.M(s)
r.c.a(b)
r.Q[1].a(c)
t=s.ay(a,b)
if(t==null)s.aB(a,b,s.at(b,c))
else t.b=c},
at:function(a,b){var t=this,s=H.M(t),r=new H.d9(s.c.a(a),s.Q[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&67108863
return r},
bB:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aR(a[s].a,b))return s
return-1},
i:function(a){return P.f_(this)},
ay:function(a,b){return a[b]},
bl:function(a,b){return a[b]},
aB:function(a,b,c){a[b]=c},
cH:function(a,b){delete a[b]},
az:function(){var t="<non-identifier-key>",s=Object.create(null)
this.aB(s,t,s)
this.cH(s,t)
return s}}
H.d9.prototype={}
H.b6.prototype={
gk:function(a){return this.a.a},
gD:function(a){var t=this.a,s=new H.b7(t,t.r,this.$ti.h("b7<1>"))
s.c=t.e
return s}}
H.b7.prototype={
gt:function(){return this.$ti.c.a(this.d)},
l:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.a0(r))
t=s.c
if(t==null){s.sb9(null)
return!1}else{s.sb9(t.a)
s.c=t.c
return!0}},
sb9:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
H.ea.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.eb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:19}
H.ec.prototype={
$1:function(a){return this.a(H.by(a))},
$S:23}
H.c_.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
d3:function(a){var t=this.b.exec(a)
if(t==null)return null
return new H.dX(t)},
$idi:1}
H.dX.prototype={}
H.Y.prototype={
h:function(a){return H.cz(v.typeUniverse,this,a)},
u:function(a){return H.hL(v.typeUniverse,this,a)}}
H.cr.prototype={}
H.cx.prototype={
i:function(a){return H.N(this.a,null)}}
H.cq.prototype={
i:function(a){return this.a}}
H.bt.prototype={}
P.dC.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:7}
P.dB.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:36}
P.dD.prototype={
$0:function(){this.a.$0()},
$S:6}
P.dE.prototype={
$0:function(){this.a.$0()},
$S:6}
P.e_.prototype={
cs:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aP(new P.e0(this,b),0),a)
else throw H.d(P.a1("`setTimeout()` not found."))}}
P.e0.prototype={
$0:function(){this.b.$0()},
$S:0}
P.cm.prototype={
aI:function(a,b){var t,s=this,r=s.$ti
r.h("1/?").a(b)
if(b==null)b=r.c.a(b)
if(!s.b)s.a.bc(b)
else{t=s.a
if(r.h("V<1>").b(b))t.be(b)
else t.av(r.c.a(b))}},
bu:function(a,b){var t=this.a
if(this.b)t.T(a,b)
else t.cE(a,b)}}
P.e2.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:9}
P.e3.prototype={
$2:function(a,b){this.a.$2(1,new H.b1(a,u.j.a(b)))},
$S:10}
P.e6.prototype={
$2:function(a,b){this.a(H.ac(a),b)},
$S:11}
P.aJ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.j(this.a)+")"}}
P.aK.prototype={
gt:function(){var t=this.c
if(t==null)return this.$ti.c.a(this.b)
return t.gt()},
l:function(){var t,s,r,q,p,o,n=this
for(t=n.$ti.h("E<1>");!0;){s=n.c
if(s!=null)if(s.l())return!0
else n.sbn(null)
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.aJ){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.sbb(null)
return!1}if(0>=p.length)return H.k(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=t.a(J.cG(s))
if(o instanceof P.aK){s=n.d
if(s==null)s=n.d=[]
C.a.m(s,n.a)
n.a=o.a
continue}else{n.sbn(o)
continue}}}}else{n.sbb(r)
return!0}}return!1},
sbb:function(a){this.b=this.$ti.h("1?").a(a)},
sbn:function(a){this.c=this.$ti.h("E<1>?").a(a)},
$iE:1}
P.bs.prototype={
gD:function(a){return new P.aK(this.a(),this.$ti.h("aK<1>"))}}
P.aX.prototype={
i:function(a){return H.j(this.a)},
$iv:1,
gaq:function(){return this.b}}
P.co.prototype={
bu:function(a,b){var t
H.eC(a,"error",u.K)
t=this.a
if(t.a!==0)throw H.d(P.cb("Future already completed"))
t.T(a,b)}}
P.br.prototype={
aI:function(a,b){var t,s=this.$ti
s.h("1/?").a(b)
t=this.a
if(t.a!==0)throw H.d(P.cb("Future already completed"))
t.bg(s.h("1/").a(b))}}
P.aA.prototype={
dc:function(a){if((this.c&15)!==6)return!0
return this.b.b.aN(u.al.a(this.d),a.a,u.U,u.K)},
d5:function(a){var t=this.e,s=u.z,r=u.K,q=a.a,p=this.$ti.h("2/"),o=this.b.b
if(u.ag.b(t))return p.a(o.dh(t,q,a.b,s,r,u.j))
else return p.a(o.aN(u.bI.a(t),q,s,r))}}
P.D.prototype={
aO:function(a,b,c){var t,s,r,q=this.$ti
q.u(c).h("1/(2)").a(a)
t=$.w
if(t!==C.e){c.h("@<0/>").u(q.c).h("1(2)").a(a)
if(b!=null)b=P.i7(b,t)}s=new P.D(t,c.h("D<0>"))
r=b==null?1:3
this.au(new P.aA(s,r,a,b,q.h("@<1>").u(c).h("aA<1,2>")))
return s},
dk:function(a,b){return this.aO(a,null,b)},
bp:function(a,b,c){var t,s=this.$ti
s.u(c).h("1/(2)").a(a)
t=new P.D($.w,c.h("D<0>"))
this.au(new P.aA(t,19,a,b,s.h("@<1>").u(c).h("aA<1,2>")))
return t},
au:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.au(a)
return}s.a=r
s.c=t.c}P.aN(null,null,s.b,u.M.a(new P.dI(s,a)))}},
bo:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.bo(a)
return}n.a=t
n.c=o.c}m.a=n.aa(a)
P.aN(null,null,n.b,u.M.a(new P.dQ(m,n)))}},
a9:function(){var t=u.F.a(this.c)
this.c=null
return this.aa(t)},
aa:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
bd:function(a){var t,s,r,q=this
q.a=1
try{a.aO(new P.dM(q),new P.dN(q),u.P)}catch(r){t=H.ao(r)
s=H.am(r)
P.iD(new P.dO(q,t,s))}},
bg:function(a){var t,s=this,r=s.$ti
r.h("1/").a(a)
if(r.h("V<1>").b(a))if(r.b(a))P.dL(a,s)
else s.bd(a)
else{t=s.a9()
r.c.a(a)
s.a=4
s.c=a
P.aI(s,t)}},
av:function(a){var t,s=this
s.$ti.c.a(a)
t=s.a9()
s.a=4
s.c=a
P.aI(s,t)},
T:function(a,b){var t,s,r=this
u.j.a(b)
t=r.a9()
s=P.cS(a,b)
r.a=8
r.c=s
P.aI(r,t)},
bc:function(a){var t=this.$ti
t.h("1/").a(a)
if(t.h("V<1>").b(a)){this.be(a)
return}this.cF(t.c.a(a))},
cF:function(a){var t=this
t.$ti.c.a(a)
t.a=1
P.aN(null,null,t.b,u.M.a(new P.dK(t,a)))},
be:function(a){var t=this,s=t.$ti
s.h("V<1>").a(a)
if(s.b(a)){if(a.a===8){t.a=1
P.aN(null,null,t.b,u.M.a(new P.dP(t,a)))}else P.dL(a,t)
return}t.bd(a)},
cE:function(a,b){this.a=1
P.aN(null,null,this.b,u.M.a(new P.dJ(this,a,b)))},
$iV:1}
P.dI.prototype={
$0:function(){P.aI(this.a,this.b)},
$S:0}
P.dQ.prototype={
$0:function(){P.aI(this.b,this.a.a)},
$S:0}
P.dM.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.av(q.$ti.c.a(a))}catch(r){t=H.ao(r)
s=H.am(r)
q.T(t,s)}},
$S:7}
P.dN.prototype={
$2:function(a,b){this.a.T(u.K.a(a),u.j.a(b))},
$S:12}
P.dO.prototype={
$0:function(){this.a.T(this.b,this.c)},
$S:0}
P.dK.prototype={
$0:function(){this.a.av(this.b)},
$S:0}
P.dP.prototype={
$0:function(){P.dL(this.b,this.a)},
$S:0}
P.dJ.prototype={
$0:function(){this.a.T(this.b,this.c)},
$S:0}
P.dT.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.bL(u.fO.a(r.d),u.z)}catch(q){t=H.ao(q)
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
r.c=m.dk(new P.dU(o),u.z)
r.b=!1}},
$S:0}
P.dU.prototype={
$1:function(a){return this.a},
$S:13}
P.dS.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.aN(p.h("2/(1)").a(q.d),n,p.h("2/"),o)}catch(m){t=H.ao(m)
s=H.am(m)
r=this.a
r.c=P.cS(t,s)
r.b=!0}},
$S:0}
P.dR.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=u.t.a(n.a.a.c)
q=n.b
if(q.a.dc(t)&&q.a.e!=null){q.c=q.a.d5(t)
q.b=!1}}catch(p){s=H.ao(p)
r=H.am(p)
q=u.t.a(n.a.a.c)
o=n.b
if(q.a===s)o.c=q
else o.c=P.cS(s,r)
o.b=!0}},
$S:0}
P.cn.prototype={}
P.bh.prototype={
gk:function(a){var t,s,r=this,q={},p=new P.D($.w,u.fJ)
q.a=0
t=r.$ti
s=t.h("~(1)?").a(new P.dq(q,r))
u.g5.a(new P.dr(q,p))
W.dF(r.a,r.b,s,!1,t.c)
return p}}
P.dq.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.h("~(1)")}}
P.dr.prototype={
$0:function(){this.b.bg(this.a.a)},
$S:0}
P.bi.prototype={}
P.cv.prototype={}
P.bw.prototype={$if8:1}
P.e5.prototype={
$0:function(){var t=u.K.a(H.d(this.a))
t.stack=this.b.i(0)
throw t},
$S:0}
P.cu.prototype={
di:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.e===$.w){a.$0()
return}P.ft(q,q,this,a,u.q)}catch(r){t=H.ao(r)
s=H.am(r)
P.e4(q,q,this,u.K.a(t),u.j.a(s))}},
dj:function(a,b,c){var t,s,r,q=null
c.h("~(0)").a(a)
c.a(b)
try{if(C.e===$.w){a.$1(b)
return}P.fu(q,q,this,a,b,u.q,c)}catch(r){t=H.ao(r)
s=H.am(r)
P.e4(q,q,this,u.K.a(t),u.j.a(s))}},
br:function(a){return new P.dY(this,u.M.a(a))},
cW:function(a,b){return new P.dZ(this,b.h("~(0)").a(a),b)},
bL:function(a,b){b.h("0()").a(a)
if($.w===C.e)return a.$0()
return P.ft(null,null,this,a,b)},
aN:function(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.w===C.e)return a.$1(b)
return P.fu(null,null,this,a,b,c,d)},
dh:function(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.w===C.e)return a.$2(b,c)
return P.i8(null,null,this,a,b,c,d,e,f)},
bG:function(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
P.dY.prototype={
$0:function(){return this.a.di(this.b)},
$S:0}
P.dZ.prototype={
$1:function(a){var t=this.c
return this.a.dj(this.b,t.a(a),t)},
$S:function(){return this.c.h("~(0)")}}
P.ab.prototype={
cM:function(){return new P.ab(H.M(this).h("ab<1>"))},
gD:function(a){var t=this,s=new P.aB(t,t.r,H.M(t).h("aB<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
V:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.g.a(t[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){s=this.c
if(s==null)return!1
return u.g.a(s[b])!=null}else return this.cG(b)},
cG:function(a){var t=this.d
if(t==null)return!1
return this.bj(t[this.bh(a)],a)>=0},
m:function(a,b){var t,s,r=this
H.M(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.ba(t==null?r.b=P.es():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.ba(s==null?r.c=P.es():s,b)}else return r.cB(b)},
cB:function(a){var t,s,r,q=this
H.M(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.es()
s=q.bh(a)
r=t[s]
if(r==null)t[s]=[q.aA(a)]
else{if(q.bj(r,a)>=0)return!1
r.push(q.aA(a))}return!0},
ba:function(a,b){H.M(this).c.a(b)
if(u.g.a(a[b])!=null)return!1
a[b]=this.aA(b)
return!0},
cL:function(){this.r=this.r+1&1073741823},
aA:function(a){var t,s=this,r=new P.cs(H.M(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.cL()
return r},
bh:function(a){return J.aS(a)&1073741823},
bj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.aR(a[s].a,b))return s
return-1}}
P.cs.prototype={}
P.aB.prototype={
gt:function(){return this.$ti.c.a(this.d)},
l:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.d(P.a0(r))
else if(s==null){t.sbf(null)
return!1}else{t.sbf(t.$ti.h("1?").a(s.a))
t.c=s.b
return!0}},
sbf:function(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
P.b2.prototype={}
P.b8.prototype={}
P.db.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.j(a)
s.a=t+": "
s.a+=H.j(b)},
$S:20}
P.aE.prototype={
bz:function(a,b){var t,s,r=H.M(this)
r.h("~(1,2)").a(b)
for(t=this.gbD(),t=t.gD(t),r=r.Q[1];t.l();){s=t.gt()
b.$2(s,r.a(this.w(0,s)))}},
gk:function(a){var t=this.gbD()
return t.gk(t)},
i:function(a){return P.f_(this)},
$ic1:1}
P.be.prototype={
i:function(a){return P.eT(this,"{","}")}}
P.bp.prototype={
d8:function(a,b){var t,s,r,q=this,p=q.cM()
for(t=P.hx(q,q.r,H.M(q).c),s=t.$ti.c;t.l();){r=s.a(t.d)
if(b.V(0,r))p.m(0,r)}return p},
$im:1,
$ibd:1}
P.bx.prototype={}
P.v.prototype={
gaq:function(){return H.am(this.$thrownJsError)}}
P.aW.prototype={
i:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bT(t)
return"Assertion failed"}}
P.cg.prototype={}
P.c3.prototype={
i:function(a){return"Throw of null."}}
P.a2.prototype={
gax:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaw:function(){return""},
i:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gax()+p+n
if(!r.a)return m
t=r.gaw()
s=P.bT(r.b)
return m+t+": "+s}}
P.bc.prototype={
gax:function(){return"RangeError"},
gaw:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.j(r):""
else if(r==null)t=": Not greater than or equal to "+H.j(s)
else if(r>s)t=": Not in inclusive range "+H.j(s)+".."+H.j(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.j(s)
return t}}
P.bV.prototype={
gax:function(){return"RangeError"},
gaw:function(){if(H.ac(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gk:function(a){return this.f}}
P.cj.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ch.prototype={
i:function(a){var t="UnimplementedError: "+this.a
return t}}
P.bg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.bP.prototype={
i:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bT(t)+"."}}
P.bf.prototype={
i:function(a){return"Stack Overflow"},
gaq:function(){return null},
$iv:1}
P.bQ.prototype={
i:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.dH.prototype={
i:function(a){return"Exception: "+this.a}}
P.d5.prototype={
i:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.y.cd(r,0,75)+"..."
return s+"\n"+r}}
P.m.prototype={
gk:function(a){var t,s=this.gD(this)
for(t=0;s.l();)++t
return t},
H:function(a,b){var t,s,r
P.dm(b,"index")
for(t=this.gD(this),s=0;t.l();){r=t.gt()
if(b===s)return r;++s}throw H.d(P.em(b,this,"index",null,s))},
i:function(a){return P.hg(this,"(",")")}}
P.E.prototype={}
P.C.prototype={
gj:function(a){return P.r.prototype.gj.call(C.N,this)},
i:function(a){return"null"}}
P.r.prototype={constructor:P.r,$ir:1,
v:function(a,b){return this===b},
gj:function(a){return H.a7(this)},
i:function(a){return"Instance of '"+H.dk(this)+"'"},
toString:function(){return this.i(this)}}
P.cw.prototype={
i:function(a){return""},
$iai:1}
P.cd.prototype={
gk:function(a){return this.a.length},
i:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.e.prototype={}
W.bJ.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.bL.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.as.prototype={
sd6:function(a,b){a.height=b},
sdt:function(a,b){a.width=b},
$ias:1}
W.aZ.prototype={
saK:function(a,b){a.fillStyle=b},
sb4:function(a,b){a.strokeStyle=b},
cc:function(a,b){return a.stroke(b)},
$iaZ:1}
W.a_.prototype={
gk:function(a){return a.length}}
W.d0.prototype={
i:function(a){var t=String(a)
t.toString
return t}}
W.b_.prototype={
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
v:function(a,b){var t,s
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
return W.fc(q,t,s,C.b.gj(r))},
$ier:1}
W.a.prototype={
i:function(a){var t=a.localName
t.toString
return t},
$ia:1}
W.b.prototype={$ib:1}
W.J.prototype={
cD:function(a,b,c,d){return a.addEventListener(b,H.aP(u.A.a(c),1),!1)},
cO:function(a,b,c,d){return a.removeEventListener(b,H.aP(u.A.a(c),1),!1)},
$iJ:1}
W.bU.prototype={
gk:function(a){return a.length}}
W.R.prototype={$iR:1}
W.Q.prototype={
i:function(a){var t=a.nodeValue
return t==null?this.cf(a):t}}
W.c4.prototype={$ic4:1}
W.ca.prototype={
gk:function(a){return a.length}}
W.Z.prototype={}
W.aH.prototype={
gcU:function(a){var t=new P.D($.w,u.dL),s=u.c4.a(new W.dA(new P.br(t,u.g4)))
this.cJ(a)
s=W.fw(s,u.H)
s.toString
this.cP(a,s)
return t},
cP:function(a,b){var t=a.requestAnimationFrame(H.aP(u.c4.a(b),1))
t.toString
return t},
cJ:function(a){var t=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
t.toString
if(t)return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dA.prototype={
$1:function(a){this.a.aI(0,H.hO(a))},
$S:15}
W.bl.prototype={
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
v:function(a,b){var t,s
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
return W.fc(q,t,s,C.b.gj(r))}}
W.el.prototype={}
W.bm.prototype={}
W.cp.prototype={}
W.bn.prototype={
cX:function(){var t,s=this,r=s.b
if(r==null)return $.eL()
t=s.d
if(t!=null)J.h2(r,s.c,u.A.a(t),!1)
s.b=null
s.scN(null)
return $.eL()},
scN:function(a){this.d=u.A.a(a)}}
W.dG.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:16}
P.ct.prototype={
cr:function(a){var t,s,r,q,p,o,n,m=this,l=4294967296
do{t=a>>>0
a=C.d.J(a-t,l)
s=a>>>0
a=C.d.J(a-s,l)
r=(~t>>>0)+(t<<21>>>0)
q=r>>>0
s=(~s>>>0)+((s<<21|t>>>11)>>>0)+C.d.J(r-q,l)>>>0
r=((q^(q>>>24|s<<8))>>>0)*265
t=r>>>0
s=((s^s>>>24)>>>0)*265+C.d.J(r-t,l)>>>0
r=((t^(t>>>14|s<<18))>>>0)*21
t=r>>>0
s=((s^s>>>14)>>>0)*21+C.d.J(r-t,l)>>>0
t=(t^(t>>>28|s<<4))>>>0
s=(s^s>>>28)>>>0
r=(t<<31>>>0)+t
q=r>>>0
p=C.d.J(r-q,l)
r=m.a*1037
o=m.a=r>>>0
n=m.b*1037+C.d.J(r-o,l)>>>0
m.b=n
o=(o^q)>>>0
m.a=o
p=(n^s+((s<<31|t>>>1)>>>0)+p>>>0)>>>0
m.b=p}while(a!==0)
if(p===0&&o===0)m.a=23063
m.a8()
m.a8()
m.a8()
m.a8()},
a8:function(){var t=this,s=t.a,r=4294901760*s,q=r>>>0,p=55905*s,o=p>>>0,n=o+q+t.b
s=n>>>0
t.a=s
t.b=C.d.J(p-o+(r-q)+(n-s),4294967296)>>>0},
$ihp:1}
P.ax.prototype={
i:function(a){return"Point("+H.j(this.a)+", "+H.j(this.b)+")"},
v:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a&&this.b===b.b},
gj:function(a){var t=C.b.gj(this.a),s=C.b.gj(this.b),r=H.f5(H.f5(0,t),s)
r=r+((r&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911}}
A.au.prototype={
gD:function(a){var t=this.a,s=this.$ti,r=s.h("E<1>"),q=H.A(t),p=q.h("@<1>").u(r).h("K<1,2>")
return new A.bo(P.G(new H.K(t,q.u(r).h("1(2)").a(new A.d7(this)),p),!1,p.h("x.E")),s.h("bo<1>"))}}
A.d7.prototype={
$1:function(a){return J.cG(this.a.$ti.h("m<1>").a(a))},
$S:function(){return this.a.$ti.h("E<1>(m<1>)")}}
A.bo.prototype={
l:function(){var t,s,r,q=this,p=q.a
if(p.length===0)return!1
for(t=0;s=p.length,t<s;++t)if(!p[t].l()){q.sbm(null)
return!1}if(s>4294967295)H.o(P.aF(s,0,4294967295,"length",null))
r=J.eX(new Array(s),q.$ti.c)
for(t=0;t<s;++t){if(t>=p.length)return H.k(p,t)
r[t]=p[t].gt()}q.sbm(r)
return!0},
gt:function(){var t=this.b
return t==null?H.o(P.cb("No element")):t},
sbm:function(a){this.b=this.$ti.h("p<1>?").a(a)},
$iE:1}
T.cX.prototype={
gp:function(a){var t=this.r
return t==null?H.o(H.u("display")):t},
by:function(a){var t,s,r,q
u.a.a(a)
t=new T.cY()
s=H.c([],u.r)
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.i)(a),++q)C.a.C(s,t.$1(a[q]))
return B.iH(s,u.k)},
bH:function(a){var t,s,r,q,p="renderer"
for(t=this.by(u.a.a(a)),s=H.A(t).h("a8<1>"),t=new H.a8(t,s),t=new H.X(t,t.gk(t),s.h("X<x.E>")),s=s.h("x.E");t.l();){r=s.a(t.d)
q=this.r
if(r instanceof K.I){q=(q==null?H.o(H.u("display")):q).a;(q==null?H.o(H.u(p)):q).df(r)}else if((q==null?H.o(H.u("display")):q).a==null)H.o(H.u(p))}},
bM:function(a,b){u.y.a(b)
return!C.a.bx(b,new T.cZ())?H.c([C.c],u.l):b}}
T.cY.prototype={
$1:function(a){return a.Z()},
$S:17}
T.cZ.prototype={
$1:function(a){u.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:18}
L.aT.prototype={
ga3:function(){var t=this.a
return t==null?H.o(H.u("renderer")):t},
gn:function(){var t=this.b
return t==null?H.o(H.u("camera")):t},
bs:function(a){var t
this.b=a
t=this.d
C.x.sdt(t,1280)
C.x.sd6(t,720)},
ab:function(a){return a},
al:function(a,b){var t,s,r=this
r.gn()
t=F.ef(a,0,1280,-r.gn().c/2,r.gn().c/2)
r.gn()
s=F.ef(b,720,0,-r.gn().d/2,r.gn().d/2)
r.gn()
return new M.f(t,s,0).q(0,C.c)}}
Z.bI.prototype={
ah:function(){var t=0,s=P.cD(u.W),r,q=this,p,o,n
var $async$ah=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:n=window
n.toString
t=3
return P.aL(C.Y.gcU(n),$async$ah)
case 3:p=b
n=q.f
if(n===0){q.f=p
n=p}o=p-n
q.f=n+o
r=o/1000
t=1
break
case 1:return P.cB(r,s)}})
return P.cC($async$ah,s)},
an:function(a){var t,s,r,q
u.p.a(a)
t=this.d.getBoundingClientRect()
s=t.left
s.toString
r=t.right
r.toString
this.gn()
q=F.ef(a.a,s,r,0,1280)
r=t.top
r.toString
s=t.bottom
s.toString
this.gn()
return new M.f(q,F.ef(a.b,r,s,0,720),0)},
aG:function(){var t=this,s=t.d,r=u.do,q=r.h("~(1)?"),p=q.a(new Z.cI(t))
u.g5.a(null)
r=r.c
C.a.C(t.r,H.c([W.dF(s,"mousemove",p,!1,r),W.dF(s,"mousedown",q.a(new Z.cJ(t)),!1,r),W.dF(s,"mouseup",q.a(new Z.cK(t)),!1,r)],u.E))},
dr:function(){var t,s,r
for(t=this.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)t[r].cX()}}
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
q=t.an(new P.ax(s,r,u.p))
r=t.al(q.a,q.b)
t.ch=r
r.F(0,t.cx)
r=t.ch
$.aQ().ae(new Y.ba(r,C.n))
if(t.x){s=t.z=t.ch
t.y.F(0,s)
$.aQ().ae(new Y.a4(s,C.m))}},
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
q=t.an(new P.ax(s,r,u.p))
t.ch=t.al(q.a,q.b)
r=a.button
r.toString
s=new Y.b9(r)
s.ar(r)
t.Q=s
s=t.ch
$.aQ().ae(new Y.a5(s,C.k))
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
q=t.an(new P.ax(s,r,u.p))
t.ch=t.al(q.a,q.b)
r=a.button
r.toString
s=new Y.b9(r)
s.ar(r)
t.Q=s
s=t.ch
$.aQ().ae(new Y.a6(s,C.l))
t.x=!1},
$S:3}
Z.bM.prototype={}
V.ds.prototype={}
V.cf.prototype={
R:function(a,b){this.b2(a,!1)
this.b_(C.j,!1)
this.ck(a,!0)},
c_:function(a){return this.R(a,!0)}}
V.bK.prototype={
aR:function(){var t=this
t.c3()
t.bZ(t.d1,C.c)
t.a6(t.d2)},
c3:function(){var t,s,r,q,p,o,n,m,l,k=u.l,j=H.c([],k)
for(t=this.d_,s=this.d0,t=B.fG(9,s+t,t).aj(0),r=t.length,q=0;q<t.length;t.length===r||(0,H.i)(t),++q){p=t[q]
j.push(C.i.A(0,Math.cos(p)).q(0,C.o.A(0,Math.sin(p))))}t=H.c([],k)
for(r=j.length,q=0;q<j.length;j.length===r||(0,H.i)(j),++q){p=j[q]
t.push(new M.f(-p.b,p.a,p.c))}r=H.c([],k)
for(o=B.B(j.length-1,0,1),n=o.length,s=s/8/3,q=0;q<o.length;o.length===n||(0,H.i)(o),++q){m=o[q]
if(m<0||m>=j.length)return H.k(j,m)
l=j[m]
if(m>=t.length)return H.k(t,m)
r.push(l.q(0,t[m].A(0,s)))}k=H.c([],k)
for(o=B.B(j.length,1,1),n=o.length,q=0;q<o.length;o.length===n||(0,H.i)(o),++q){m=o[q]
if(m<0||m>=j.length)return H.k(j,m)
l=j[m]
if(m>=t.length)return H.k(t,m)
k.push(l.F(0,t[m].A(0,s)))}t=u.i
this.aZ(B.fP(j,t),r,k,B.fO(j,t))}}
V.bO.prototype={}
V.bR.prototype={}
V.c7.prototype={}
V.c8.prototype={}
V.ay.prototype={}
U.bX.prototype={
cm:function(a){this.aD(u.a.a(H.c([this.x],u.r)))
this.aG()},
aC:function(a,b,c,d){var t,s
H.e7(d,u.e,"IEvent","addEventListener")
t=new Y.H(d.h("y(0)").a(c),b,d.h("H<0>"))
s=$.aQ()
u.gc.a(t)
s=s.gM().w(0,b)
s.toString
C.a.m(s,t)
return t}}
U.bS.prototype={
aG:function(){var t=this
t.scu(u.gl.a(t.aC(0,C.m,new U.d1(t),u.u)))
t.scv(u.c3.a(t.aC(0,C.k,new U.d2(t),u.N)))
t.scw(u.eL.a(t.aC(0,C.l,new U.d3(t),u.f)))},
scu:function(a){u.g7.a(a)},
scv:function(a){u.em.a(a)},
scw:function(a){u.ga.a(a)}}
U.d1.prototype={
$1:function(a){var t
u.u.a(a)
t=this.a
if(t.fx){t.x.bF(a.c)
return!0}return!1},
$S:38}
U.d2.prototype={
$1:function(a){var t,s=this.a,r=s.x,q=u.N.a(a).c,p=q.a
if(p>=r.E(C.V).a-0.1)if(p<=r.E(C.i).a+0.1){p=q.b
p=p>=r.E(C.R).b-0.1&&p<=r.E(C.o).b+0.1
t=p}else t=!1
else t=!1
if(t){s.fx=!0
r.bF(q)
return!0}return!1},
$S:21}
U.d3.prototype={
$1:function(a){u.f.a(a)
return this.a.fx=!1},
$S:22}
Y.l.prototype={
gbt:function(a){var t=this.a
return t},
ga1:function(){var t=this.d
return t==null?H.o(H.u("submobjects")):t},
gbP:function(){var t=this.e
if(t==null){t=H.c([],u.eM)
this.scA(t)}return t},
gX:function(a){var t=this.r
return t==null?H.o(H.u("points")):t},
a7:function(a,b,c){var t=this
t.aV()
t.sb5(u.a.a(H.c([],u.r)))
t.f=!1
t.sas(u.y.a(H.c([],u.l)))
t.bA()
t.aR()},
i:function(a){return this.aV()},
aV:function(){var t=this.cj(0),s=P.hq("^Instance of '(.*?)'$").d3(t).b
if(1>=s.length)return H.k(s,1)
s=s[1]
s.toString
return s},
bA:function(){},
aR:function(){},
aD:function(a){var t,s,r,q,p,o=u.a
o.a(a)
if(C.a.V(a,this))throw H.d("Mobject can't contain itself")
t=P.G(a,!0,u.k)
for(s=this.ga1(),r=s.length,q=0;q<s.length;s.length===r||(0,H.i)(s),++q){p=s[q]
if(!C.a.V(a,p))t.push(p)}this.sb5(o.a(t))},
aE:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
u.cD.a(c)
if(b==null)b=this.E(a)
for(t=this.aT(),s=t.length,r=u.y,q=u.l,p=0;p<t.length;t.length===s||(0,H.i)(t),++p){o=t[p]
n=H.c([],q)
m=o.r
if(m==null)m=H.o(H.u("points"))
l=m.length
k=0
for(;k<m.length;m.length===l||(0,H.i)(m),++k)n.push(J.h0(c.$1(m[k].F(0,b)),b))
o.sas(r.a(n))}},
cV:function(a){return this.aE(C.c,null,a)},
bO:function(a,b){var t,s,r,q=this
if(q.f==null)H.o(H.u("updatingSuspended"))
for(t=q.gbP(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)t[r].$2(q,a)
for(t=q.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)t[r].bO(a,!0)},
bN:function(a){return this.bO(a,!0)},
a6:function(a){return this.cV(new Y.df(a))},
aY:function(a,b,c){return this.aE(b,c,new Y.de(a))},
bY:function(a){return this.aY(a,C.c,null)},
bZ:function(a,b){return this.aY(a,C.c,b)},
cb:function(a,b,c,d){return this.aE(c,d,new Y.dg(b,a))},
bI:function(a,b,c,d,e){var t=this.da(b)
if(t===0)return
this.cb(a/t,b,c,d)},
bF:function(a){this.a6(a.F(0,this.E(C.c)).A(0,new M.f(1,1,1)))},
R:function(a,b){var t,s,r
for(t=this.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)t[r].R(a,!0)
this.a=a},
Z:function(){var t,s,r,q,p=H.c([this],u.r)
for(t=this.ga1(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)C.a.C(p,t[r].Z())
q=P.eq(p,u.k)
return P.G(q,!0,H.M(q).c)},
aT:function(){var t=this.Z(),s=H.A(t),r=s.h("az<1>")
return P.G(new H.az(t,s.h("y(1)").a(new Y.dc()),r),!0,r.h("m.E"))},
aS:function(){var t,s,r,q,p=H.c([],u.l)
for(t=this.aT(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r){q=t[r].r
C.a.C(p,q==null?H.o(H.u("points")):q)}return p},
aW:function(){return this.aS()},
am:function(a,b,c){var t,s,r
u.D.a(c)
t=H.c([],u.n)
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.i)(c),++r)t.push(c[r].ak(a))
if(b<0)return C.a.N(t,C.p)
else if(b===0)return(C.a.N(t,C.p)+C.a.N(t,C.q))/2
else return C.a.N(t,C.q)},
E:function(a){var t=this,s=t.aW()
if(s.length===0)return C.c
return new M.f(t.am(0,C.b.O(a.a),s),t.am(1,C.b.O(a.b),s),t.am(2,C.b.O(a.c),s))},
da:function(a){var t,s,r,q=this.aS()
if(q.length===0)return 1
t=H.A(q)
s=new H.K(q,t.h("h(1)").a(new Y.dd(a)),t.h("K<1,h>"))
r=s.N(0,C.p)
return s.N(0,C.q)-r},
gk:function(a){return this.ca(0).length},
ca:function(a){var t=this,s=H.c([],u.r)
if(t.gX(t).length!==0)s.push(t)
C.a.C(s,t.ga1())
return s},
sb5:function(a){this.d=u.hh.a(a)},
scA:function(a){this.e=u.eU.a(a)},
sas:function(a){this.r=u.D.a(a)}}
Y.df.prototype={
$1:function(a){return a.q(0,this.a)},
$S:4}
Y.de.prototype={
$1:function(a){return a.A(0,this.a)},
$S:4}
Y.dg.prototype={
$1:function(a){var t=this.a
return a.du(t,a.ak(t)*this.b)},
$S:4}
Y.dc.prototype={
$1:function(a){u.k.a(a)
return a.gX(a).length>0},
$S:24}
Y.dd.prototype={
$1:function(a){return u.i.a(a).ak(this.a)},
$S:25}
K.I.prototype={
bA:function(){var t,s=this,r=s.db
s.c0(r==null?H.c([s.gbt(s)],u.O):r)
r=s.dx
if(r==null)r=H.c([s.gbt(s)],u.O)
s.c6(r,s.x)
r=s.dy
t=s.y
s.S(!0,null,u.x.a(r),!0,t)},
a5:function(a,b,c){var t,s,r,q,p,o,n,m=this
u.x.a(b)
t=u.O
s=H.c([],t)
if(b!=null)C.a.C(s,b)
if(a!=null)s.push(a)
if(c)for(r=m.ao(),q=r.length,p=0;p<r.length;r.length===q||(0,H.i)(r),++p)r[p].c1(s,!1)
if(s.length!==0){if(m.db==null)m.saf(s)
r=m.db
q=r.length
o=s.length
if(q<o)m.saf(B.bH(r,o,u.G))
else if(o<q)m.saf(B.bH(s,q,u.G))
t=H.c([],t)
for(r=B.B(m.db.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.i)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.saf(t)}},
a_:function(a){return this.a5(a,null,!0)},
c1:function(a,b){return this.a5(null,a,b)},
c0:function(a){return this.a5(null,a,!0)},
b_:function(a,b){return this.a5(a,null,b)},
S:function(a,b,c,d,e){var t,s,r,q,p,o,n,m=this
u.x.a(c)
t=u.O
s=H.c([],t)
if(c!=null)C.a.C(s,c)
if(b!=null)s.push(b)
if(d)for(r=m.ao(),q=r.length,p=0;p<r.length;r.length===q||(0,H.i)(r),++p)r[p].c7(a,s,!1,e)
if(s.length!==0)if(a){if(m.dy==null)m.saF(s)
r=m.dy
q=r.length
o=s.length
if(q<o)m.saF(B.bH(r,o,u.G))
else if(o<q)m.saF(B.bH(s,q,u.G))
t=H.c([],t)
for(r=B.B(m.dx.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.i)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.sa0(t)}else{if(m.dx==null)m.sa0(s)
r=m.dx
q=r.length
o=s.length
if(q<o)m.sa0(B.bH(r,o,u.G))
else if(o<q)m.sa0(B.bH(s,q,u.G))
t=H.c([],t)
for(r=B.B(m.dx.length,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.i)(r),++p){n=r[p]
if(n<0||n>=s.length)return H.k(s,n)
t.push(s[n])}m.sa0(t)}if(e!=null)if(a)m.y=e
else m.x=e},
b1:function(a){return this.S(!1,null,null,!0,a)},
c7:function(a,b,c,d){return this.S(a,null,b,c,d)},
c5:function(a,b){return this.S(!1,a,null,!0,b)},
c6:function(a,b){return this.S(!1,null,a,!0,b)},
b2:function(a,b){return this.S(!1,a,null,b,null)},
R:function(a,b){this.b_(a,!0)
this.b2(a,!0)
this.ci(a,!0)},
aU:function(){var t=this.db
return t==null?H.c([C.j],u.O):t},
aX:function(a){var t=a?this.dy:this.dx
return t==null||t.length===0?H.c([C.j],u.O):t},
bU:function(){var t,s,r,q,p,o=this.E(C.c),n=H.c([],u.b)
for(t=[C.i,C.o,C.Q],s=u.n,r=0;r<3;++r){q=this.E(t[r]).F(0,o)
n.push(H.c([q.a,q.b,q.c],s))}p=C.i.aL(S.aq(null,n).gdq())
return new S.t(o.F(0,p),o.q(0,p),u.hd)},
aZ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i=u.y
i.a(a)
i.a(b)
i.a(c)
i.a(d)
t=a.length
s=H.c([],u.l)
for(t=B.B(4*t,0,1),r=t.length,q=0;q<t.length;t.length===r||(0,H.i)(t),++q)s.push(C.c)
this.sas(i.a(s))
p=[a,b,c,d]
for(i=B.B(4,0,1),t=i.length,s=u.S,q=0;q<i.length;i.length===t||(0,H.i)(i),++q){o=i[q]
if(o<0||o>=4)return H.k(p,o)
n=p[o]
r=this.r
for(r=B.eF(B.B((r==null?H.o(H.u("points")):r).length,o,4),s),m=r.length,l=0;l<r.length;r.length===m||(0,H.i)(r),++l){k=r[l]
j=this.r
if(j==null)j=H.o(H.u("points"))
C.a.P(j,k.b,n[C.d.ap(k.a,n.length)])}}},
c2:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u.y.a(a)
t=B.fG(4,1,0).aj(0)
s=u.i
r=S.eO(B.fO(a,s))
q=S.eO(B.fP(a,s))
s=H.c([],u.aM)
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.i)(t),++o){n=t[o]
s.push(q.A(0,1-n).q(0,r.A(0,n)))}p=H.c([],u.h)
for(m=s.length,l=u.l,o=0;o<s.length;s.length===m||(0,H.i)(s),++o){k=s[o]
j=H.c([],l)
i=k.a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.i)(i),++g){f=i[g]
e=J.eG(f)
j.push(new M.f(e.w(f,0),e.w(f,1),e.w(f,2)))}p.push(j)}s=p.length
if(0>=s)return H.k(p,0)
m=p[0]
if(1>=s)return H.k(p,1)
l=p[1]
if(2>=s)return H.k(p,2)
j=p[2]
if(3>=s)return H.k(p,3)
this.aZ(m,l,j,p[3])},
bv:function(a,b){var t=b.a
if(Math.abs(a.a-t)>0.000001+0.00001*Math.abs(t))return!1
t=b.b
if(Math.abs(a.b-t)>0.000001+0.00001*Math.abs(t))return!1
return!0},
bS:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h={}
h.a=a
u.y.a(a)
h.a=a
t=F.da(a,new K.dx(h,C.d.ap(a.length,4)),u.i)
h.a=P.G(t,!0,t.$ti.h("m.E"))
t=H.c([],u.dm)
for(s=B.B(h.a.length,0,4),r=s.length,q=u.bl,p=0;p<s.length;s.length===r||(0,H.i)(s),++p){o=s[p]
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
t.push(new S.aG(l,k,j,n[i],q))}return t},
cK:function(a,b){var t,s,r,q,p,o,n,m
u.y.a(a)
u.fT.a(b)
t=B.B(a.length,4,4)
s=H.A(t)
s=P.G(new H.az(t,s.h("y(1)").a(b),s.h("az<1>")),!0,u.S)
s.push(a.length)
t=H.c([0],u.Y)
C.a.C(t,s)
r=H.c([],u.h)
for(t=new A.au(H.c([t,s],u.gL),u.c9),t=t.gD(t),s=H.A(a),q=s.c,s=s.h("bj<1>");t.l();){p=t.b
if(p==null)p=H.o(P.cb("No element"))
if(1>=p.length)return H.k(p,1)
o=p[1]
n=p[0]
if(typeof o!=="number")return o.F()
if(typeof n!=="number")return H.e9(n)
if(o-n>=4){H.ac(n)
H.ac(o)
P.f0(n,o,a.length)
m=new H.bj(a,n,o,s)
m.cp(a,n,o,q)
r.push(m.dm(0))}}return r},
bW:function(a){u.y.a(a)
return this.cK(a,new K.dy(this,a))},
bk:function(a){var t=F.da(this.gX(this),new K.dw(this,a),u.i)
return P.G(t,!0,t.$ti.h("m.E"))},
bT:function(){var t,s=this
if(s.gX(s).length===1)return s.gX(s)
t=u.eR
t=A.eU(P.G(new A.au(H.c([s.bk(0),s.bk(3)],u.h),t),!0,t.h("m.E")),u.i)
return P.G(t,!0,t.$ti.h("m.E"))},
aW:function(){var t,s,r,q=H.c([],u.l)
for(t=this.ao(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)C.a.C(q,t[r].bT())
return q},
ao:function(){var t,s,r,q,p=H.c([],u.d_)
for(t=this.Z(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r){q=t[r]
if(q instanceof K.I)p.push(q)}return p},
saf:function(a){this.db=u.x.a(a)},
sa0:function(a){this.dx=u.x.a(a)},
saF:function(a){this.dy=u.x.a(a)}}
K.dx.prototype={
$2:function(a,b){u.i.a(b)
return a<this.a.a.length-this.b},
$S:5}
K.dy.prototype={
$1:function(a){var t,s,r
H.ac(a)
t=this.b
s=a-1
r=t.length
if(s<0||s>=r)return H.k(t,s)
s=t[s]
if(a<0||a>=r)return H.k(t,a)
return!this.a.bv(s,t[a])},
$S:27}
K.dw.prototype={
$2:function(a,b){u.i.a(b)
return C.d.ap(a,4)===this.b},
$S:5}
K.dv.prototype={}
K.ck.prototype={
cq:function(a){var t=H.c([],u.r)
this.aD(u.a.a(t))}}
Z.aU.prototype={
gp:function(a){var t=this.d
return t==null?H.o(H.u("display")):t},
c8:function(a){this.d=a}}
F.bN.prototype={
gG:function(){var t=this.e
return t==null?H.o(H.u("ctx")):t},
aM:function(a){var t,s,r=this,q=r.gp(r).gn(),p=r.gp(r).ab(a)
C.h.saK(r.gG(),p.a4())
t=q.c
s=q.d
r.gG().fillRect(0-t/2,0-s/2,q.c,q.d)},
df:function(a){var t,s,r,q,p,o,n,m=this,l=u.y.a(P.G(a.gX(a),!0,u.i)),k=m.gp(m).gn().bM(a,l)
if(k.length===0)return
t=a.bW(k)
for(l=t.length,s="",r=0;r<t.length;t.length===l||(0,H.i)(t),++r)s+=m.bX(a,t[r])
q=W.hn(s)
m.bq(q,a,!0)
p=a.aU()
if(p.length>1)C.h.saK(m.gG(),m.bw(a,p))
else{l=m.gp(m)
o=a.aU()
if(0>=o.length)return H.k(o,0)
n=l.ab(o[0])
C.h.saK(m.gG(),n.a4())}m.gG().fill(q)
m.bq(q,a,!1)},
bX:function(a,b){var t,s,r,q,p,o,n,m,l,k
u.y.a(b)
t=a.bS(b)
s=C.a.gW(b)
r="M "+H.j(s.a)+" "+H.j(s.b)
q=a.bv(C.a.gW(b),C.a.gbE(b))
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.i)(t),++o){n=t[o]
m=n.b
l=n.c
k=n.d
r+=" C "+H.j(m.a)+" "+H.j(m.b)+" "+H.j(l.a)+" "+H.j(l.b)+" "+H.j(k.a)+" "+H.j(k.b)}return q?r+" Z":r},
bw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this
u.bF.a(b)
t=a.bU()
s=u.y.a(H.c([t.a,t.b],u.l))
r=i.gp(i).gn().bM(a,s)
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
m=B.ih(n+1,0,n).aj(0)
for(s=B.B(b.length,0,1),p=s.length,l=0;l<s.length;s.length===p||(0,H.i)(s),++l){k=s[l]
o=i.d
if(o==null)o=H.o(H.u("display"))
if(k<0||k>=b.length)return H.k(b,k)
j=o.ab(b[k])
if(k>=m.length)return H.k(m,k)
q.addColorStop(m[k],j.a4())}return q},
bq:function(a,b,c){var t,s,r,q,p=this,o=c?b.y:b.x
if(o===0)return
t=b.aX(c)
s=p.gp(p).gn().c
p.gG().lineWidth=o*0.01*(s/14.222222222222221)
r=C.a.bx(t,new F.d_())
s=t.length
if(s===0||r)return
if(s>1)C.h.sb4(p.gG(),p.bw(b,t))
else{q=p.gp(p).ab(C.a.gW(b.aX(c)))
C.h.sb4(p.gG(),q.a4())}C.h.cc(p.gG(),a)}}
F.d_.prototype={
$1:function(a){return u.G.a(a).d===0},
$S:28}
A.dn.prototype={
ga2:function(){var t=this.d
return t==null?H.o(H.u("mobjects")):t},
gn:function(){var t=this.f
return t==null?H.o(H.u("camera")):t},
gp:function(a){var t=this.x
return t==null?H.o(H.u("display")):t},
co:function(){this.f=new T.cX(14.222222222222221,C.f)
new P.ct().cr(0)
this.sb6(u.a.a(H.c([],u.r)))},
Y:function(){var t=0,s=P.cD(u.z),r=1,q,p=[],o=this,n,m,l
var $async$Y=P.cE(function(a,b){if(a===1){q=b
t=r}while(true)switch(t){case 0:o.gp(o).aG()
t=2
return P.aL(null,$async$Y)
case 2:r=4
t=7
return P.aL(o.ac(),$async$Y)
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
case 6:m=o.gn()
m.gp(m).ga3().aM(m.f)
o.gn().bH(o.ga2())
t=8
return P.aL(null,$async$Y)
case 8:o.gp(o).dr()
return P.cB(null,s)
case 1:return P.cA(q,s)}})
return P.cC($async$Y,s)},
ds:function(a){var t,s,r
for(t=this.ga2(),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)t[r].bN(a)},
bJ:function(a){var t,s=this,r=u.a
r.a(a)
t=P.G(a,!0,u.k)
C.a.C(t,s.gn().by(a))
s.sb6(r.a(s.bV(s.ga2(),t)))},
bV:function(a,b){var t,s=u.a
s.a(a)
s.a(b)
t=H.c([],u.r)
new A.dp(t).$2(a,P.eq(b,H.A(b).c))
return t},
ai:function(){var t=0,s=P.cD(u.z),r=this,q,p,o,n
var $async$ai=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:q=0
case 2:if(!(q<1)){t=3
break}p=r.x
t=4
return P.aL((p==null?H.o(H.u("display")):p).ah(),$async$ai)
case 4:o=b
q+=o
r.ds(o)
p=r.f
if(p==null)p=H.o(H.u("camera"))
n=p.r
n=(n==null?H.o(H.u("display")):n).a
if(n==null)n=H.o(H.u("renderer"))
n.aM(p.f)
p=r.f
if(p==null)p=H.o(H.u("camera"))
n=r.d
p.bH(n==null?H.o(H.u("mobjects")):n)
r.a+=o
t=2
break
case 3:return P.cB(null,s)}})
return P.cC($async$ai,s)},
ad:function(){var t=0,s=P.cD(u.z),r=this
var $async$ad=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:case 2:if(!!0){t=3
break}t=4
return P.aL(r.ai(),$async$ad)
case 4:t=2
break
case 3:return P.cB(null,s)}})
return P.cC($async$ad,s)},
sb6:function(a){this.d=u.hh.a(a)}}
A.dp.prototype={
$2:function(a,b){var t,s,r,q,p,o
u.a.a(a)
u.bA.a(b)
for(t=a.length,s=this.a,r=0;r<a.length;a.length===t||(0,H.i)(a),++r){q=a[r]
if(b.V(0,q))continue
p=q.Z()
o=b.d8(0,P.eq(p,H.A(p).c))
if(o.a!==0){p=q.d
this.$2(p==null?H.o(H.u("submobjects")):p,o)}else C.a.m(s,q)}},
$S:29}
B.eh.prototype={
$1:function(a){return H.ac(a)/this.a*this.b},
$S:30}
B.ei.prototype={
$2:function(a,b){this.a.a(b)
return a!==0},
$S:function(){return this.a.h("y(q,0)")}}
V.O.prototype={
a4:function(){var t=this
return"rgba("+C.b.O(t.a*255)+", "+C.b.O(t.b*255)+", "+C.b.O(t.c*255)+", "+t.d+")"},
i:function(a){return this.a4()}}
Y.U.prototype={
i:function(a){return this.b}}
Y.P.prototype={}
Y.d4.prototype={
gM:function(){var t=this.a
return t==null?H.o(H.u("eventListeners")):t},
cl:function(){var t,s,r=P.hj(u.en,u.gF)
for(t=u.aE,s=0;s<6;++s)r.P(0,C.P[s],H.c([],t))
this.scz(u.cH.a(r))},
U:function(a,b,c){var t,s,r
H.e7(c,u.e,"IEvent","_dispatchOnListnersList")
c.a(a)
t=P.G(c.h("p<H<0>>").a(b),!0,c.h("H<0>"))
s=!1
while(!0){if(!(!s&&t.length!==0))break
r=C.a.gbE(t)
C.a.de(t,r)
r.$ti.c.a(a)
s=r.a.$1(a)}},
ae:function(a){var t,s=this
switch(a.a){case C.n:u.gt.a(a)
t=s.gM().w(0,C.n)
t.toString
s.U(a,t,u.e)
break
case C.k:u.N.a(a)
t=s.gM().w(0,C.k)
t.toString
s.U(a,t,u.e)
break
case C.l:u.f.a(a)
t=s.gM().w(0,C.l)
t.toString
s.U(a,t,u.e)
break
case C.m:u.u.a(a)
t=s.gM().w(0,C.m)
t.toString
s.U(a,t,u.e)
break
case C.r:u.fw.a(a)
t=s.gM().w(0,C.r)
t.toString
s.U(a,t,u.e)
break
case C.t:u.bf.a(a)
t=s.gM().w(0,C.t)
t.toString
s.U(a,t,u.e)
break}},
scz:function(a){this.a=u.dC.a(a)}}
Y.H.prototype={}
Y.c2.prototype={}
Y.ba.prototype={}
Y.a5.prototype={}
Y.a6.prototype={}
Y.a4.prototype={}
Y.b9.prototype={
ar:function(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
S.aV.prototype={
gK:function(a){return this.a},
gB:function(a){var t=this.b
return t==null?H.o(H.u("shape")):t},
q:function(a,b){return this.ag(0,new S.cO(typeof b=="number"?S.ek(b,this.gB(this)):u.eN.a(b)))},
A:function(a,b){var t=S.ek(b,this.gB(this))
return this.ag(0,new S.cP(t))},
ag:function(a,b){var t,s,r,q=this
u.fA.a(b)
t=B.eF(q.gK(q),u.I)
s=H.A(t)
r=s.h("K<1,p<h>>")
r=P.G(new H.K(t,s.h("p<h>(1)").a(new S.cN(b)),r),!0,r.h("x.E"))
return S.aq(q.gB(q),r)},
L:function(a){var t,s
u.o.a(a)
t=a.a
s=this.gK(this)
if(t>>>0!==t||t>=s.length)return H.k(s,t)
return J.ej(s[t],a.b)},
aj:function(a){var t=this.gK(this),s=H.A(t),r=s.h("K<1,h>")
return P.G(new H.K(t,s.h("h(1)").a(new S.cL(a)),r),!0,r.h("x.E"))},
gdq:function(){return this.ag(0,new S.cQ(this))},
aL:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=a.gB(a),a1=a.gB(a).b,a2=a4.gB(a4).b,a3=S.ek(0,new S.t(a.gB(a).a,a4.gB(a4).b,u.o))
for(a0=B.B(a0.a,0,1),t=a0.length,s=a4.a,r=a.a,q=a3.a,p=0;p<a0.length;a0.length===t||(0,H.i)(a0),++p){o=a0[p]
for(n=B.B(a2,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.i)(n),++l){k=n[l]
for(j=B.B(a1,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,H.i)(j),++h){g=j[h]
if(o<0||o>=q.length)return H.k(q,o)
f=q[o]
e=J.eG(f)
d=e.w(f,k)
if(o>=r.length)return H.k(r,o)
c=J.ej(r[o],g)
if(g<0||g>=s.length)return H.k(s,g)
b=J.ej(s[g],k)
if(typeof c!=="number")return c.A()
if(typeof b!=="number")return H.e9(b)
if(typeof d!=="number")return d.q()
e.P(f,k,d+c*b)}}}return a3},
i:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=H.j(c.gB(c).a)+"x"+H.j(c.gB(c).b),a=H.c([],u.Y)
for(t=c.gK(c),s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r){q=t[r]
for(p=q.length,o=0;o<q.length;q.length===p||(0,H.i)(q),++o)a.push(J.h3(q[o],6).length)}n=C.a.d4(a,6,C.A,u.S)
for(a=c.gK(c),t=a.length,s=n+4,p=u.s,m="",r=0;r<a.length;a.length===t||(0,H.i)(a),++r){q=a[r]
m+="      "
for(l=q.length,o=0;o<q.length;q.length===l||(0,H.i)(q),++o){k=q[o]
if(typeof k!=="number")return k.dB()
j=k<0?"-":" "
i=Math.abs(k)
h=C.b.aP(i,6)
g=H.c([],p)
for(h=B.B(s-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,H.i)(h),++e)g.push(" ")
d=C.a.d9(g)
m=m+j+C.b.aP(i,6)+d}m+="\n"}return b+" matrix\n"+m},
sct:function(a){this.b=u.gv.a(a)}}
S.cO.prototype={
$2:function(a,b){return a+this.a.L(u.o.a(b))},
$S:1}
S.cP.prototype={
$2:function(a,b){return a*this.a.L(u.o.a(b))},
$S:1}
S.cN.prototype={
$1:function(a){var t,s,r
u.fz.a(a)
t=B.eF(a.b,u.W)
s=H.A(t)
r=s.h("K<1,h>")
return P.G(new H.K(t,s.h("h(1)").a(new S.cM(this.a,a)),r),!0,r.h("x.E"))},
$S:31}
S.cM.prototype={
$1:function(a){u.ee.a(a)
return this.a.$2(a.b,new S.t(this.b.a,a.a,u.o))},
$S:32}
S.cL.prototype={
$1:function(a){var t
u.I.a(a)
t=this.a
if(t>=a.length)return H.k(a,t)
return a[t]},
$S:33}
S.cQ.prototype={
$2:function(a,b){var t=u.o
t.a(b)
return this.a.L(new S.t(b.b,b.a,t))},
$S:1}
M.f.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof M.f&&this.a===b.a&&this.b===b.b&&this.c===b.c},
q:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a+b,t.b+b,t.c+b)
else if(b instanceof M.f)return new M.f(t.a+b.a,t.b+b.b,t.c+b.c)
else throw H.d("Vector3 only support addition by num or Vector3")},
F:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a-b,t.b-b,t.c-b)
else if(b instanceof M.f)return new M.f(t.a-b.a,t.b-b.b,t.c-b.c)
else throw H.d("Vector3 only support subtraction by num or Vector3")},
A:function(a,b){var t=this
if(typeof b=="number")return new M.f(t.a*b,t.b*b,t.c*b)
else if(b instanceof M.f)return new M.f(t.a*b.a,t.b*b.b,t.c*b.c)
else throw H.d("Vector3 only support multiplication by num or Vector3")},
bQ:function(a,b){return new M.f(this.a/b,this.b/b,this.c/b)},
ak:function(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.d("No component at index "+a+" on a vector3")}},
dl:function(){var t=u.n
t=S.aq(null,H.c([H.c([this.a],t),H.c([this.b],t),H.c([this.c],t)],u.b))
return t},
aQ:function(a,b,c){var t=a==null?this.a:a,s=b==null?this.b:b
return new M.f(t,s,c==null?this.c:c)},
dv:function(a){return this.aQ(a,null,null)},
dw:function(a){return this.aQ(null,a,null)},
dz:function(a){return this.aQ(null,null,a)},
du:function(a,b){if(a===0)return this.dv(b)
else if(a===1)return this.dw(b)
else if(a===2)return this.dz(b)
else throw H.d("Cannot index a vector3 with index="+a)},
aL:function(a){var t=S.h5(3).ag(0,new M.dz(a)).aL(this.dl()),s=u.o
return new M.f(t.L(new S.t(0,0,s)),t.L(new S.t(1,0,s)),t.L(new S.t(2,0,s)))},
i:function(a){return"vec3("+H.j(this.a)+", "+H.j(this.b)+", "+H.j(this.c)+")"}}
M.dz.prototype={
$2:function(a,b){var t,s,r
u.o.a(b)
t=b.a
s=this.a
r=s.gB(s).a
if(typeof t!=="number")return t.bR()
if(typeof r!=="number")return H.e9(r)
if(t<r){t=b.b
r=s.gB(s).b
if(typeof t!=="number")return t.bR()
if(typeof r!=="number")return H.e9(r)
r=t>=r
t=r}else t=!0
return t?a:s.L(b)},
$S:1}
S.t.prototype={
i:function(a){return"["+H.j(this.a)+", "+H.j(this.b)+"]"},
v:function(a,b){if(b==null)return!1
return b instanceof S.t&&J.aR(b.a,this.a)&&J.aR(b.b,this.b)},
gj:function(a){var t=J.aS(this.a),s=J.aS(this.b)
return A.fn(A.bz(A.bz(0,C.d.gj(t)),C.d.gj(s)))}}
S.aG.prototype={
i:function(a){var t=this
return"["+t.a.i(0)+", "+t.b.i(0)+", "+t.c.i(0)+", "+t.d.i(0)+"]"},
v:function(a,b){var t=this
if(b==null)return!1
return b instanceof S.aG&&b.a.v(0,t.a)&&b.b.v(0,t.b)&&b.c.v(0,t.c)&&b.d.v(0,t.d)},
gj:function(a){var t=this,s=H.a7(t.a),r=H.a7(t.b),q=H.a7(t.c),p=H.a7(t.d)
return A.fn(A.bz(A.bz(A.bz(A.bz(0,C.d.gj(s)),C.d.gj(r)),C.d.gj(q)),C.d.gj(p)))}}
A.cU.prototype={
ac:function(){var t=0,s=P.cD(u.z),r=this,q,p,o,n,m,l
var $async$ac=P.cE(function(a,b){if(a===1)return P.cA(b,s)
while(true)switch(t){case 0:o=C.b.aH(14.222222222222221)+1
n=C.d.aH(8)+1
m=H.c([],u.w)
l=V.eS(C.c)
l.a_(C.L)
l.b1(0)
q=new A.c5(m,o,n,l,C.f)
q.a7(C.f,null,null)
q.cq(null)
q.cn(n,o)
p=V.eS(C.i.bQ(0,2))
p.bY(2)
p.a_(C.J)
p.b1(0)
o=u.he.a(new A.cW(q))
C.a.m(p.gbP(),o)
p.bN(0)
o=u.r
n=u.a
m=n.a(H.c([q],o))
r.bJ(m)
C.a.C(r.ga2(),m)
m=new U.bS(p,C.f)
m.a7(C.f,null,null)
m.cm(p)
o=n.a(H.c([m],o))
r.bJ(o)
m=r.ga2()
H.A(m).h("m<1>").a(o)
if(!!m.fixed$length)H.o(P.a1("insertAll"))
n=m.length
m.length=n+1
C.a.b0(m,1,m.length,m,0)
C.a.c4(m,0,1,o)
t=2
return P.aL(r.ad(),$async$ac)
case 2:return P.cB(null,s)}})
return P.cC($async$ac,s)}}
A.cW.prototype={
$2:function(a,b){u.k.a(a)
H.hN(b)
this.a.c9(a.E(C.c))
return a},
$S:34}
A.c5.prototype={
cn:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=H.c([],u.w)
for(t=B.B(d.cY,0,1),s=t.length,r=d.cZ,q=u.l,p=u.i,o=u.Q,n=0;n<t.length;t.length===s||(0,H.i)(t),++n){m=t[n]
l=H.c([],o)
for(k=B.B(r,0,1),j=k.length,i=0;i<k.length;k.length===j||(0,H.i)(k),++i){h=k[i]
g=H.c([C.W,C.S,C.U,C.X],q)
f=new V.ay(C.f)
f.a7(C.f,c,c)
e=P.G(g,!0,p)
e.push(C.a.gW(g))
f.c2(e)
f.bI(1,0,C.c,c,!0)
f.bI(1,1,C.c,c,!0)
f.a6(C.i.A(0,m).q(0,C.o.A(0,h)))
f.c5(C.I,1)
f.a_(C.j)
l.push(f)}b.push(l)}d.sdd(b)
d.aD(u.a.a(d.gb3()))
d.a6(d.E(C.c).A(0,C.T).A(0,-1))},
gb3:function(){var t,s,r,q=H.c([],u.Q)
for(t=this.aJ,s=t.length,r=0;r<t.length;t.length===s||(0,H.i)(t),++r)C.a.C(q,t[r])
return q},
c9:function(a){var t,s,r
a=a.F(0,new M.f(0.5,0,0))
t=u.ao.a(new A.dj())
a=new M.f(t.$1(a.a),t.$1(a.b),t.$1(a.c)).q(0,new M.f(0.5,0,0))
this.a_(C.j)
a=a.F(0,C.a.gW(this.gb3()).E(C.c))
s=C.b.bK(a.a)
r=C.b.bK(a.b)
t=this.aJ
if(s<0||s>=t.length)return H.k(t,s)
t=t[s]
if(r<0||r>=t.length)return H.k(t,r)
t[r].a_(C.K)},
sdd:function(a){this.aJ=u.b4.a(a)}}
A.dj.prototype={
$1:function(a){return C.b.dg(a)},
$S:35}
L.cV.prototype={};(function aliases(){var t=J.W.prototype
t.cf=t.i
t=J.aw.prototype
t.cg=t.i
t=P.r.prototype
t.cj=t.i
t=Y.l.prototype
t.ci=t.R
t=K.I.prototype
t.ck=t.R
t=Z.aU.prototype
t.ce=t.c8})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
t(P,"ik","ht",2)
t(P,"il","hu",2)
t(P,"im","hv",2)
s(P,"fy","ib",0)
r(P,"iB",2,null,["$1$2","$2"],["fJ",function(a,b){return P.fJ(a,b,u.H)}],37,0)
r(P,"fH",2,null,["$1$2","$2"],["fI",function(a,b){return P.fI(a,b,u.H)}],26,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.r,null)
r(P.r,[H.eo,J.W,J.ar,P.v,H.T,P.m,H.X,P.E,H.dt,H.dh,H.b1,H.bq,P.aE,H.d9,H.b7,H.c_,H.dX,H.Y,H.cr,H.cx,P.e_,P.cm,P.aJ,P.aK,P.aX,P.co,P.aA,P.D,P.cn,P.bh,P.bi,P.cv,P.bw,P.bx,P.cs,P.aB,P.be,P.bf,P.dH,P.d5,P.C,P.cw,P.cd,W.el,P.ct,P.ax,A.bo,T.cX,L.aT,K.dv,Y.l,Z.aU,A.dn,V.O,Y.U,Y.P,Y.d4,Y.H,Y.b9,S.aV,M.f,S.t,S.aG])
r(J.W,[J.bY,J.aD,J.aw,J.n,J.av,J.ag,W.J,W.aZ,W.d0,W.b_,W.b,W.c4])
r(J.aw,[J.c6,J.aa,J.ah])
s(J.d8,J.n)
r(J.av,[J.b3,J.bZ])
r(P.v,[H.b5,P.cg,H.c0,H.ci,H.c9,P.aW,H.cq,P.c3,P.a2,P.cj,P.ch,P.bg,P.bP,P.bQ])
r(H.T,[H.eg,H.bW,H.ce,H.ea,H.eb,H.ec,P.dC,P.dB,P.dD,P.dE,P.e0,P.e2,P.e3,P.e6,P.dI,P.dQ,P.dM,P.dN,P.dO,P.dK,P.dP,P.dJ,P.dT,P.dU,P.dS,P.dR,P.dq,P.dr,P.e5,P.dY,P.dZ,P.db,W.dA,W.dG,A.d7,T.cY,T.cZ,Z.cI,Z.cJ,Z.cK,U.d1,U.d2,U.d3,Y.df,Y.de,Y.dg,Y.dc,Y.dd,K.dx,K.dy,K.dw,F.d_,A.dp,B.eh,B.ei,S.cO,S.cP,S.cN,S.cM,S.cL,S.cQ,M.dz,A.cW,A.dj])
r(P.m,[H.b0,H.az,P.b2])
r(H.b0,[H.x,H.b6])
r(H.x,[H.bj,H.K,H.a8])
s(H.bk,P.E)
s(H.af,H.bW)
s(H.bb,P.cg)
r(H.ce,[H.cc,H.aC])
s(H.cl,P.aW)
s(P.b8,P.aE)
s(H.b4,P.b8)
s(H.bt,H.cq)
r(P.b2,[P.bs,A.au])
s(P.br,P.co)
s(P.cu,P.bw)
s(P.bp,P.bx)
s(P.ab,P.bp)
r(P.a2,[P.bc,P.bV])
r(W.J,[W.Q,W.aH])
r(W.Q,[W.a,W.a_])
s(W.e,W.a)
r(W.e,[W.bJ,W.bL,W.as,W.bU,W.ca])
s(W.Z,W.b)
s(W.R,W.Z)
s(W.bl,W.b_)
s(W.bm,P.bh)
s(W.cp,W.bm)
s(W.bn,P.bi)
s(Z.bI,L.aT)
s(Z.bM,Z.bI)
s(V.ds,K.dv)
r(Y.l,[K.I,U.bX])
r(K.I,[V.cf,V.c7,K.ck])
s(V.bK,V.cf)
s(V.bO,V.bK)
s(V.bR,V.bO)
s(V.c8,V.c7)
s(V.ay,V.c8)
s(U.bS,U.bX)
s(F.bN,Z.aU)
s(Y.c2,Y.P)
r(Y.c2,[Y.ba,Y.a5,Y.a6,Y.a4])
s(A.cU,A.dn)
s(A.c5,K.ck)
s(L.cV,A.cU)
t(P.bx,P.be)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",h:"double",F:"num",aj:"String",y:"bool",C:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","h(h,t<q,q>)","~(~())","~(R)","f(f)","y(q,f)","C()","C(@)","@(@)","~(@)","C(@,ai)","~(q,@)","C(r,ai)","D<@>(@)","V<C>()","~(F)","~(b)","p<l>(l)","y(f)","@(@,aj)","~(r?,r?)","y(a5)","y(a6)","@(aj)","y(l)","h(f)","0^(0^,0^)<F>","y(q)","y(O)","~(p<l>,bd<l>)","h(q)","p<h>(t<q,p<h>>)","h(t<q,h>)","h(p<h>)","l(l,h)","h(h)","C(~())","0^(0^,0^)<F>","y(a4)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.hK(v.typeUniverse,JSON.parse('{"c6":"aw","aa":"aw","ah":"aw","iJ":"b","iQ":"b","iI":"a","iR":"a","iZ":"a","iK":"e","iW":"e","iS":"Q","iO":"Q","iX":"R","iM":"Z","iL":"a_","j_":"a_","bY":{"y":[]},"aD":{"C":[]},"n":{"p":["1"],"m":["1"]},"d8":{"n":["1"],"p":["1"],"m":["1"]},"ar":{"E":["1"]},"av":{"h":[],"F":[]},"b3":{"h":[],"q":[],"F":[]},"bZ":{"h":[],"F":[]},"ag":{"aj":[],"di":[]},"b0":{"m":["1"]},"b5":{"v":[]},"x":{"m":["1"]},"bj":{"x":["1"],"m":["1"],"x.E":"1","m.E":"1"},"X":{"E":["1"]},"K":{"x":["2"],"m":["2"],"x.E":"2","m.E":"2"},"az":{"m":["1"],"m.E":"1"},"bk":{"E":["1"]},"a8":{"x":["1"],"m":["1"],"x.E":"1","m.E":"1"},"bW":{"T":[],"at":[]},"af":{"T":[],"at":[]},"bb":{"v":[]},"c0":{"v":[]},"ci":{"v":[]},"bq":{"ai":[]},"T":{"at":[]},"ce":{"T":[],"at":[]},"cc":{"T":[],"at":[]},"aC":{"T":[],"at":[]},"c9":{"v":[]},"cl":{"v":[]},"b4":{"aE":["1","2"],"c1":["1","2"]},"b6":{"m":["1"],"m.E":"1"},"b7":{"E":["1"]},"c_":{"di":[]},"cq":{"v":[]},"bt":{"v":[]},"D":{"V":["1"]},"aK":{"E":["1"]},"bs":{"m":["1"],"m.E":"1"},"aX":{"v":[]},"br":{"co":["1"]},"bw":{"f8":[]},"cu":{"bw":[],"f8":[]},"ab":{"be":["1"],"bd":["1"],"m":["1"]},"aB":{"E":["1"]},"b2":{"m":["1"]},"b8":{"aE":["1","2"],"c1":["1","2"]},"aE":{"c1":["1","2"]},"bp":{"be":["1"],"bd":["1"],"m":["1"]},"h":{"F":[]},"q":{"F":[]},"p":{"m":["1"]},"bd":{"m":["1"]},"aj":{"di":[]},"aW":{"v":[]},"cg":{"v":[]},"c3":{"v":[]},"a2":{"v":[]},"bc":{"v":[]},"bV":{"v":[]},"cj":{"v":[]},"ch":{"v":[]},"bg":{"v":[]},"bP":{"v":[]},"bf":{"v":[]},"bQ":{"v":[]},"cw":{"ai":[]},"R":{"b":[]},"Z":{"b":[]},"e":{"a":[],"J":[]},"bJ":{"a":[],"J":[]},"bL":{"a":[],"J":[]},"as":{"a":[],"J":[]},"a_":{"J":[]},"b_":{"er":["F"]},"a":{"J":[]},"bU":{"a":[],"J":[]},"Q":{"J":[]},"ca":{"a":[],"J":[]},"aH":{"J":[]},"bl":{"er":["F"]},"bm":{"bh":["1"]},"cp":{"bm":["1"],"bh":["1"]},"bn":{"bi":["1"]},"ct":{"hp":[]},"au":{"m":["p<1>"],"m.E":"p<1>"},"bo":{"E":["p<1>"]},"bI":{"aT":[]},"bM":{"aT":[]},"c7":{"I":[],"l":[]},"c8":{"I":[],"l":[]},"ay":{"I":[],"l":[]},"cf":{"I":[],"l":[]},"bK":{"I":[],"l":[]},"bO":{"I":[],"l":[]},"bR":{"I":[],"l":[]},"bX":{"l":[]},"bS":{"l":[]},"I":{"l":[]},"ck":{"I":[],"l":[]},"bN":{"aU":[]},"c2":{"P":[]},"a5":{"P":[]},"a6":{"P":[]},"a4":{"P":[]},"ba":{"P":[]},"c5":{"I":[],"l":[]}}'))
H.hJ(v.typeUniverse,JSON.parse('{"b0":1,"b2":1,"b8":2,"bp":1,"bx":1}'))
0
var u=(function rtii(){var t=H.cF
return{dq:t("@<q>"),eN:t("aV"),t:t("aX"),gA:t("as"),G:t("O"),C:t("v"),B:t("b"),gc:t("H<P>"),gl:t("H<a4>"),c3:t("H<a5>"),eL:t("H<a6>"),en:t("U"),e:t("P"),Z:t("at"),d:t("V<@>"),v:t("af<h>"),eR:t("au<f>"),c9:t("au<q>"),hf:t("m<@>"),aM:t("n<aV>"),O:t("n<O>"),aE:t("n<H<P>>"),w:t("n<p<ay>>"),h:t("n<p<f>>"),b:t("n<p<h>>"),gL:t("n<p<q>>"),r:t("n<l>"),Q:t("n<ay>"),E:t("n<bi<@>>"),s:t("n<aj>"),dm:t("n<aG<f,f,f,f>>"),d_:t("n<I>"),l:t("n<f>"),n:t("n<h>"),m:t("n<@>"),Y:t("n<q>"),eM:t("n<l(l,h)>"),T:t("aD"),L:t("ah"),fw:t("iU"),bf:t("iV"),bF:t("p<O>"),gF:t("p<H<P>>"),b4:t("p<p<ay>>"),a:t("p<l>"),y:t("p<f>"),I:t("p<h>"),cH:t("c1<U,p<H<P>>>"),k:t("l"),he:t("l(l,h)"),u:t("a4"),V:t("R"),gt:t("ba"),N:t("a5"),f:t("a6"),P:t("C"),K:t("r"),p:t("ax<F>"),J:t("er<F>"),bA:t("bd<l>"),j:t("ai"),R:t("aj"),hd:t("t<f,f>"),ee:t("t<q,h>"),o:t("t<q,q>"),fz:t("t<q,p<h>>"),bl:t("aG<f,f,f,f>"),ak:t("aa"),i:t("f"),cD:t("f(f)"),do:t("cp<R>"),ck:t("D<C>"),c:t("D<@>"),fJ:t("D<q>"),dL:t("D<F>"),g4:t("br<F>"),U:t("y"),al:t("y(r)"),fT:t("y(q)"),W:t("h"),fA:t("h(h,t<q,q>)"),ao:t("h(h)"),z:t("@"),fO:t("@()"),bI:t("@(r)"),ag:t("@(r,ai)"),S:t("q"),aw:t("0&*"),_:t("r*"),g7:t("H<a4>?"),em:t("H<a5>?"),ga:t("H<a6>?"),eH:t("V<C>?"),x:t("p<O>?"),hh:t("p<l>?"),D:t("p<f>?"),eU:t("p<l(l,h)>?"),dC:t("c1<U,p<H<P>>>?"),X:t("r?"),gv:t("t<q,q>?"),F:t("aA<@,@>?"),g:t("cs?"),A:t("@(b)?"),g5:t("~()?"),H:t("F"),q:t("~"),M:t("~()"),c4:t("~(F)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.x=W.as.prototype
C.h=W.aZ.prototype
C.M=J.W.prototype
C.a=J.n.prototype
C.d=J.b3.prototype
C.N=J.aD.prototype
C.b=J.av.prototype
C.y=J.ag.prototype
C.O=J.ah.prototype
C.z=J.c6.prototype
C.u=J.aa.prototype
C.Y=W.aH.prototype
C.q=new H.af(P.fH(),u.v)
C.A=new H.af(P.fH(),H.cF("af<q>"))
C.p=new H.af(P.iB(),u.v)
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.H=new P.cw()
C.j=new V.O(0,0,0,0)
C.I=new V.O(0,0,0,1)
C.f=new V.O(1,1,1,1)
C.J=new V.O(0.98824,0.38431,0.33333,1)
C.K=new V.O(0.53333,0.53333,0.53333,1)
C.L=new V.O(0.51373,0.75686,0.40392,1)
C.n=new Y.U("EventType.mouseMovedEvent")
C.k=new Y.U("EventType.mousePressedEvent")
C.l=new Y.U("EventType.mouseReleasedEvent")
C.m=new Y.U("EventType.mouseDraggedEvent")
C.r=new Y.U("EventType.keyPressedEvent")
C.t=new Y.U("EventType.keyReleasedEvent")
C.P=H.c(t([C.n,C.k,C.l,C.m,C.r,C.t]),H.cF("n<U>"))
C.a_=H.c(t([]),u.r)
C.c=new M.f(0,0,0)
C.Q=new M.f(0,0,1)
C.o=new M.f(0,1,0)
C.R=new M.f(0,-1,0)
C.i=new M.f(1,0,0)
C.S=new M.f(1,1,0)
C.T=new M.f(1,1,1)
C.U=new M.f(1,-1,0)
C.V=new M.f(-1,0,0)
C.W=new M.f(-1,1,0)
C.X=new M.f(-1,-1,0)
C.Z=new P.aJ(null,2)})();(function staticFields(){$.dV=null
$.a3=0
$.aY=null
$.eP=null
$.fD=null
$.fx=null
$.fL=null
$.e8=null
$.ed=null
$.eI=null
$.aM=null
$.bB=null
$.bC=null
$.ey=!1
$.w=C.e
$.S=H.c([],H.cF("n<r>"))})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"iN","fQ",function(){return H.ir("_$dart_dartClosure")})
t($,"jm","eL",function(){return C.e.bL(new H.eg(),H.cF("V<C>"))})
t($,"j0","fR",function(){return H.a9(H.du({
toString:function(){return"$receiver$"}}))})
t($,"j1","fS",function(){return H.a9(H.du({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"j2","fT",function(){return H.a9(H.du(null))})
t($,"j3","fU",function(){return H.a9(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"j6","fX",function(){return H.a9(H.du(void 0))})
t($,"j7","fY",function(){return H.a9(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"j5","fW",function(){return H.a9(H.f6(null))})
t($,"j4","fV",function(){return H.a9(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"j9","h_",function(){return H.a9(H.f6(void 0))})
t($,"j8","fZ",function(){return H.a9(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"ja","eK",function(){return P.hs()})
s($,"iP","aQ",function(){var r=new Y.d4()
r.cl()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.W,DOMError:J.W,MediaError:J.W,NavigatorUserMediaError:J.W,OverconstrainedError:J.W,PositionError:J.W,SQLError:J.W,HTMLAudioElement:W.e,HTMLBRElement:W.e,HTMLBaseElement:W.e,HTMLBodyElement:W.e,HTMLButtonElement:W.e,HTMLContentElement:W.e,HTMLDListElement:W.e,HTMLDataElement:W.e,HTMLDataListElement:W.e,HTMLDetailsElement:W.e,HTMLDialogElement:W.e,HTMLDivElement:W.e,HTMLEmbedElement:W.e,HTMLFieldSetElement:W.e,HTMLHRElement:W.e,HTMLHeadElement:W.e,HTMLHeadingElement:W.e,HTMLHtmlElement:W.e,HTMLIFrameElement:W.e,HTMLImageElement:W.e,HTMLInputElement:W.e,HTMLLIElement:W.e,HTMLLabelElement:W.e,HTMLLegendElement:W.e,HTMLLinkElement:W.e,HTMLMapElement:W.e,HTMLMediaElement:W.e,HTMLMenuElement:W.e,HTMLMetaElement:W.e,HTMLMeterElement:W.e,HTMLModElement:W.e,HTMLOListElement:W.e,HTMLObjectElement:W.e,HTMLOptGroupElement:W.e,HTMLOptionElement:W.e,HTMLOutputElement:W.e,HTMLParagraphElement:W.e,HTMLParamElement:W.e,HTMLPictureElement:W.e,HTMLPreElement:W.e,HTMLProgressElement:W.e,HTMLQuoteElement:W.e,HTMLScriptElement:W.e,HTMLShadowElement:W.e,HTMLSlotElement:W.e,HTMLSourceElement:W.e,HTMLSpanElement:W.e,HTMLStyleElement:W.e,HTMLTableCaptionElement:W.e,HTMLTableCellElement:W.e,HTMLTableDataCellElement:W.e,HTMLTableHeaderCellElement:W.e,HTMLTableColElement:W.e,HTMLTableElement:W.e,HTMLTableRowElement:W.e,HTMLTableSectionElement:W.e,HTMLTemplateElement:W.e,HTMLTextAreaElement:W.e,HTMLTimeElement:W.e,HTMLTitleElement:W.e,HTMLTrackElement:W.e,HTMLUListElement:W.e,HTMLUnknownElement:W.e,HTMLVideoElement:W.e,HTMLDirectoryElement:W.e,HTMLFontElement:W.e,HTMLFrameElement:W.e,HTMLFrameSetElement:W.e,HTMLMarqueeElement:W.e,HTMLElement:W.e,HTMLAnchorElement:W.bJ,HTMLAreaElement:W.bL,HTMLCanvasElement:W.as,CanvasRenderingContext2D:W.aZ,CDATASection:W.a_,CharacterData:W.a_,Comment:W.a_,ProcessingInstruction:W.a_,Text:W.a_,DOMException:W.d0,DOMRectReadOnly:W.b_,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,SubmitEvent:W.b,EventTarget:W.J,HTMLFormElement:W.bU,MouseEvent:W.R,DragEvent:W.R,PointerEvent:W.R,WheelEvent:W.R,Document:W.Q,DocumentFragment:W.Q,HTMLDocument:W.Q,ShadowRoot:W.Q,XMLDocument:W.Q,Attr:W.Q,DocumentType:W.Q,Node:W.Q,Path2D:W.c4,HTMLSelectElement:W.ca,CompositionEvent:W.Z,FocusEvent:W.Z,KeyboardEvent:W.Z,TextEvent:W.Z,TouchEvent:W.Z,UIEvent:W.Z,Window:W.aH,DOMWindow:W.aH,ClientRect:W.bl,DOMRect:W.bl})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=L.iz
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=point.dart.js.map
