(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="163",iu=0,La=1,su=2,Bc=1,ou=2,Pn=3,jn=0,Ue=1,mn=2,Wn=0,Wi=1,Ia=2,Na=3,Da=4,ru=5,hi=100,au=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Yr=204,jr=205,mu=206,gu=207,_u=208,vu=209,yu=210,xu=211,Mu=212,Su=213,bu=214,wu=0,Eu=1,Tu=2,wo=3,Au=4,Cu=5,Ru=6,Pu=7,kc=0,Lu=1,Iu=2,qn=0,Nu=1,Du=2,Uu=3,Fu=4,zu=5,Ou=6,Bu=7,Vc=300,ji=301,$i=302,$r=303,Kr=304,Do=306,Zr=1e3,fi=1001,Jr=1002,$e=1003,ku=1004,Is=1005,nn=1006,$o=1007,pi=1008,Xn=1009,Vu=1010,Hu=1011,Hc=1012,Gc=1013,Ki=1014,Gn=1015,Eo=1016,Wc=1017,qc=1018,Ts=1020,Gu=35902,Wu=1021,qu=1022,gn=1023,Xu=1024,Yu=1025,qi=1026,Ss=1027,ju=1028,Xc=1029,$u=1030,Yc=1031,jc=1033,Ko=33776,Zo=33777,Jo=33778,Qo=33779,Ua=35840,Fa=35841,za=35842,Oa=35843,$c=36196,Ba=37492,ka=37496,Va=37808,Ha=37809,Ga=37810,Wa=37811,qa=37812,Xa=37813,Ya=37814,ja=37815,$a=37816,Ka=37817,Za=37818,Ja=37819,Qa=37820,tl=37821,tr=36492,el=36494,nl=36495,Ku=36283,il=36284,sl=36285,ol=36286,Zu=3200,Ju=3201,Kc=0,Qu=1,Hn="",fn="srgb",Zn="srgb-linear",ha="display-p3",Uo="display-p3-linear",To="linear",ne="srgb",Ao="rec709",Co="p3",_i=7680,rl=519,td=512,ed=513,nd=514,Zc=515,id=516,sd=517,od=518,rd=519,Qr=35044,al="300 es",Ln=2e3,Ro=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const ys=Math.PI/180,bs=180/Math.PI;function In(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[o&255]+Te[o>>8&255]+Te[o>>16&255]+Te[o>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ce(o,t,e){return Math.max(t,Math.min(e,o))}function ua(o,t){return(o%t+t)%t}function ad(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function ld(o,t,e){return o!==t?(e-o)/(t-o):0}function xs(o,t,e){return(1-e)*o+e*t}function cd(o,t,e,n){return xs(o,t,1-Math.exp(-e*n))}function hd(o,t=1){return t-Math.abs(ua(o,t*2)-t)}function ud(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function dd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function fd(o,t){return o+Math.floor(Math.random()*(t-o+1))}function pd(o,t){return o+Math.random()*(t-o)}function md(o){return o*(.5-Math.random())}function gd(o){o!==void 0&&(ll=o);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(o){return o*ys}function vd(o){return o*bs}function yd(o){return(o&o-1)===0&&o!==0}function xd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Md(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Sd(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),u=r((t+n)/2),d=s((t-n)/2),h=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*u,l*d,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*d,a*c);break;case"ZXZ":o.set(l*d,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kt(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const cl={DEG2RAD:ys,RAD2DEG:bs,generateUUID:In,clamp:Ce,euclideanModulo:ua,mapLinear:ad,inverseLerp:ld,lerp:xs,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:fd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:_d,radToDeg:vd,isPowerOfTwo:yd,ceilPowerOfTwo:xd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:Sd,normalize:Kt,denormalize:sn};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,s,r,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],w=i[7],R=i[2],T=i[5],C=i[8];return s[0]=r*_+a*y+l*R,s[3]=r*p+a*v+l*T,s[6]=r*m+a*w+l*C,s[1]=c*_+u*y+d*R,s[4]=c*p+u*v+d*T,s[7]=c*m+u*w+d*C,s[2]=h*_+f*y+g*R,s[5]=h*p+f*v+g*T,s[8]=h*m+f*w+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*r-a*c,h=a*l-u*s,f=c*s-r*l,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*r)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(er.makeScale(t,e)),this}rotate(t){return this.premultiply(er.makeRotation(-t)),this}translate(t,e){return this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const er=new Ft;function Jc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Po(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bd(){const o=Po("canvas");return o.style.display="block",o}const hl={};function Qc(o){o in hl||(hl[o]=!0,console.warn(o))}const ul=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dl=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[Zn]:{transfer:To,primaries:Ao,toReference:o=>o,fromReference:o=>o},[fn]:{transfer:ne,primaries:Ao,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Uo]:{transfer:To,primaries:Co,toReference:o=>o.applyMatrix3(dl),fromReference:o=>o.applyMatrix3(ul)},[ha]:{transfer:ne,primaries:Co,toReference:o=>o.convertSRGBToLinear().applyMatrix3(dl),fromReference:o=>o.applyMatrix3(ul).convertLinearToSRGB()}},wd=new Set([Zn,Uo]),Zt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!wd.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=Ns[t].toReference,i=Ns[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Ns[o].primaries},getTransfer:function(o){return o===Hn?To:Ns[o].transfer}};function Xi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vi;class Ed{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Po("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Xi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Td=0;class th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ir(i[r].image)):s.push(ir(i[r]))}else s=ir(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ir(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ed.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;class Fe extends Qi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=fi,i=fi,s=nn,r=pi,a=gn,l=Xn,c=Fe.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=In(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zr:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zr:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Vc;Fe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,w=(f+1)/2,R=(m+1)/2,T=(u+h)/4,C=(d+_)/4,P=(g+p)/4;return v>w&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=C/n):w>R?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=T/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=C/s,i=P/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Cd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rd extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ze=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-a;const m=l*h+c*f+u*g+d*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,m*y);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}const w=a*y;if(l=l*p+h*w,c=c*p+f*w,u=u*p+g*w,d=d*p+_*w,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r],h=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),u=2*(a*e-s*i),d=2*(s*n-r*e);return this.x=e+l*c+r*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sr.copy(this).projectOnVector(t),this.sub(sr)}reflect(t){return this.sub(sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new I,fl=new ze;class As{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ze):Ze.fromBufferAttribute(s,r),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Us.subVectors(this.max,is),yi.subVectors(t.a,is),xi.subVectors(t.b,is),Mi.subVectors(t.c,is),Dn.subVectors(xi,yi),Un.subVectors(Mi,xi),ei.subVectors(yi,Mi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-ei.z,ei.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,ei.z,0,-ei.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-ei.y,ei.x,0];return!or(e,yi,xi,Mi,Us)||(e=[1,0,0,0,1,0,0,0,1],!or(e,yi,xi,Mi,Us))?!1:(Fs.crossVectors(Dn,Un),e=[Fs.x,Fs.y,Fs.z],or(e,yi,xi,Mi,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new I,new I,new I,new I,new I,new I,new I,new I],Ze=new I,Ds=new As,yi=new I,xi=new I,Mi=new I,Dn=new I,Un=new I,ei=new I,is=new I,Us=new I,Fs=new I,ni=new I;function or(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ni.fromArray(o,s);const a=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pd=new As,ss=new I,rr=new I;let Fo=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(rr)),this.expandByPoint(ss.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Mn=new I,ar=new I,zs=new I,Fn=new I,lr=new I,Os=new I,cr=new I;let nh=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ar.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(ar);const s=t.distanceTo(e)*.5,r=-this.direction.dot(zs),a=Fn.dot(this.direction),l=-Fn.dot(zs),c=Fn.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*l-a,h=r*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+r*h+2*a)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(r*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ar).addScaledVector(zs,h),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,s){lr.subVectors(e,t),Os.subVectors(n,t),cr.crossVectors(lr,Os);let r=this.direction.dot(cr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(Fn,Os));if(l<0)return null;const c=a*this.direction.dot(lr.cross(Fn));if(c<0||l+c>r)return null;const u=-a*Fn.dot(cr);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ie{constructor(t,e,n,i,s,r,a,l,c,u,d,h,f,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,u,d,h,f,g,_,p)}set(t,e,n,i,s,r,a,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),s=1/Si.setFromMatrixColumn(t,1).length(),r=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*u,f=r*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=_-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,f=r*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=r*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Id)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),zn.crossVectors(n,Ve),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),zn.crossVectors(n,Ve)),zn.normalize(),Bs.crossVectors(Ve,zn),i[0]=zn.x,i[4]=Bs.x,i[8]=Ve.x,i[1]=zn.y,i[5]=Bs.y,i[9]=Ve.y,i[2]=zn.z,i[6]=Bs.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],w=n[11],R=n[15],T=i[0],C=i[4],P=i[8],M=i[12],x=i[1],D=i[5],O=i[9],E=i[13],F=i[2],U=i[6],z=i[10],X=i[14],B=i[3],j=i[7],Z=i[11],at=i[15];return s[0]=r*T+a*x+l*F+c*B,s[4]=r*C+a*D+l*U+c*j,s[8]=r*P+a*O+l*z+c*Z,s[12]=r*M+a*E+l*X+c*at,s[1]=u*T+d*x+h*F+f*B,s[5]=u*C+d*D+h*U+f*j,s[9]=u*P+d*O+h*z+f*Z,s[13]=u*M+d*E+h*X+f*at,s[2]=g*T+_*x+p*F+m*B,s[6]=g*C+_*D+p*U+m*j,s[10]=g*P+_*O+p*z+m*Z,s[14]=g*M+_*E+p*X+m*at,s[3]=y*T+v*x+w*F+R*B,s[7]=y*C+v*D+w*U+R*j,s[11]=y*P+v*O+w*z+R*Z,s[15]=y*M+v*E+w*X+R*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+_*(+e*l*f-e*c*h+s*r*h-i*r*f+i*c*u-s*l*u)+p*(+e*c*d-e*a*f-s*r*d+n*r*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*h+i*r*d-n*r*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=d*p*c-_*h*c+_*l*f-a*p*f-d*l*m+a*h*m,v=g*h*c-u*p*c-g*l*f+r*p*f+u*l*m-r*h*m,w=u*_*c-g*d*c+g*a*f-r*_*f-u*a*m+r*d*m,R=g*d*l-u*_*l-g*a*h+r*_*h+u*a*p-r*d*p,T=e*y+n*v+i*w+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(_*h*s-d*p*s-_*i*f+n*p*f+d*i*m-n*h*m)*C,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*C,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*C,t[4]=v*C,t[5]=(u*p*s-g*h*s+g*i*f-e*p*f-u*i*m+e*h*m)*C,t[6]=(g*l*s-r*p*s-g*i*c+e*p*c+r*i*m-e*l*m)*C,t[7]=(r*h*s-u*l*s+u*i*c-e*h*c-r*i*f+e*l*f)*C,t[8]=w*C,t[9]=(g*d*s-u*_*s-g*n*f+e*_*f+u*n*m-e*d*m)*C,t[10]=(r*_*s-g*a*s+g*n*c-e*_*c-r*n*m+e*a*m)*C,t[11]=(u*a*s-r*d*s-u*n*c+e*d*c+r*n*f-e*a*f)*C,t[12]=R*C,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*p+e*d*p)*C,t[14]=(g*a*i-r*_*i-g*n*l+e*_*l+r*n*p-e*a*p)*C,t[15]=(r*d*i-u*a*i+u*n*l-e*d*l-r*n*h+e*a*h)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,d=a+a,h=s*c,f=s*u,g=s*d,_=r*u,p=r*d,m=a*d,y=l*c,v=l*u,w=l*d,R=n.x,T=n.y,C=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+w)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-w)*T,i[5]=(1-(h+m))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+v)*C,i[9]=(p-y)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Si.set(i[0],i[1],i[2]).length();const r=Si.set(i[4],i[5],i[6]).length(),a=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/s,u=1/r,d=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=Ln){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(a===Ln)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Ro)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=Ln){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(r-s),h=(e+t)*c,f=(n+i)*u;let g,_;if(a===Ln)g=(r+s)*d,_=-2*d;else if(a===Ro)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new I,Je=new ie,Ld=new I(0,0,0),Id=new I(1,1,1),zn=new I,Bs=new I,Ve=new I,pl=new ie,ml=new ze;class Ke{constructor(t=0,e=0,n=0,i=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const gl=new I,bi=new ze,Sn=new ie,ks=new I,os=new I,Dd=new I,Ud=new ze,_l=new I(1,0,0),vl=new I(0,1,0),yl=new I(0,0,1),xl={type:"added"},Fd={type:"removed"},wi={type:"childadded",child:null},hr={type:"childremoved",child:null};class ye extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new I,e=new Ke,n=new ze,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ft}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(os,ks,this.up):Sn.lookAt(ks,os,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(Sn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),hr.child=t,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new I(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new I,bn=new I,ur=new I,wn=new I,Ei=new I,Ti=new I,Ml=new I,dr=new I,fr=new I,pr=new I;class on{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Qe.subVectors(i,e),bn.subVectors(n,e),ur.subVectors(t,e);const r=Qe.dot(Qe),a=Qe.dot(bn),l=Qe.dot(ur),c=bn.dot(bn),u=bn.dot(ur),d=r*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(r*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(r,wn.y),l.addScaledVector(a,wn.z),l)}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),bn.subVectors(t,e),Qe.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),Qe.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;Ei.subVectors(i,n),Ti.subVectors(s,n),dr.subVectors(t,n);const l=Ei.dot(dr),c=Ti.dot(dr);if(l<=0&&c<=0)return e.copy(n);fr.subVectors(t,i);const u=Ei.dot(fr),d=Ti.dot(fr);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Ei,r);pr.subVectors(t,s);const f=Ei.dot(pr),g=Ti.dot(pr);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ti,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Ml.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(Ml,a);const m=1/(p+_+h);return r=_*m,a=h*m,e.copy(n).addScaledVector(Ei,r).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function mr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=ua(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=mr(r,s,t+1/3),this.g=mr(r,s,t),this.b=mr(r,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return Zt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ce(Ae.r*255,0,255))*65536+Math.round(Ce(Ae.g*255,0,255))*256+Math.round(Ce(Ae.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=u<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=fn){Zt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Vs);const n=xs(On.h,Vs.h,e),i=xs(On.s,Vs.s,e),s=xs(On.l,Vs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new xt;xt.NAMES=sh;let zd=0,gi=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Wi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=jr,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==jr&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Zi extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new I,Hs=new At;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Qc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qr&&(t.usage=this.usage),t}}class oh extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rh extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Od=0;const Ye=new ie,gr=new ye,Ai=new I,He=new As,rs=new As,be=new I;class Le extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?rh:oh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return gr.lookAt(t),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(He.min,rs.min),He.expandByPoint(be),be.addVectors(He.max,rs.max),He.expandByPoint(be)):(He.expandByPoint(rs.min),He.expandByPoint(rs.max))}He.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)be.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(be));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)be.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(t,c),be.add(Ai)),i=Math.max(i,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,u=new I,d=new I,h=new At,f=new At,g=new At,_=new I,p=new I;function m(P,M,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[M].add(_),a[x].add(_),l[P].add(p),l[M].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,M=y.length;P<M;++P){const x=y[P],D=x.start,O=x.count;for(let E=D,F=D+O;E<F;E+=3)m(t.getX(E+0),t.getX(E+1),t.getX(E+2))}const v=new I,w=new I,R=new I,T=new I;function C(P){R.fromBufferAttribute(i,P),T.copy(R);const M=a[P];v.copy(M),v.sub(R.multiplyScalar(R.dot(M))).normalize(),w.crossVectors(T,M);const D=w.dot(l[P])<0?-1:1;r.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,M=y.length;P<M;++P){const x=y[P],D=x.start,O=x.count;for(let E=D,F=D+O;E<F;E+=3)C(t.getX(E+0)),C(t.getX(E+1)),C(t.getX(E+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,r=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new Be(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ie,ii=new nh,Gs=new Fo,bl=new I,Ci=new I,Ri=new I,Pi=new I,_r=new I,Ws=new I,qs=new At,Xs=new At,Ys=new At,wl=new I,El=new I,Tl=new I,js=new I,$s=new I;class zt extends ye{constructor(t=new Le,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_r.fromBufferAttribute(d,t),r?Ws.addScaledVector(_r,u):Ws.addScaledVector(_r.sub(e),u))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),ii.copy(t.ray).recast(t.near),!(Gs.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Gs,bl)===null||ii.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Sl.copy(s).invert(),ii.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let w=y,R=v;w<R;w+=3){const T=a.getX(w),C=a.getX(w+1),P=a.getX(w+2);i=Ks(this,m,t,n,c,u,d,T,C,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);i=Ks(this,r,t,n,c,u,d,y,v,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=r[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=y,R=v;w<R;w+=3){const T=w,C=w+1,P=w+2;i=Ks(this,m,t,n,c,u,d,T,C,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,w=p+2;i=Ks(this,r,t,n,c,u,d,y,v,w),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Bd(o,t,e,n,i,s,r,a){let l;if(t.side===Ue?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===jn,a),l===null)return null;$s.copy(a),$s.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:o}}function Ks(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,Ci),o.getVertexPosition(l,Ri),o.getVertexPosition(c,Pi);const u=Bd(o,t,e,n,Ci,Ri,Pi,js);if(u){i&&(qs.fromBufferAttribute(i,a),Xs.fromBufferAttribute(i,l),Ys.fromBufferAttribute(i,c),u.uv=on.getInterpolation(js,Ci,Ri,Pi,qs,Xs,Ys,new At)),s&&(qs.fromBufferAttribute(s,a),Xs.fromBufferAttribute(s,l),Ys.fromBufferAttribute(s,c),u.uv1=on.getInterpolation(js,Ci,Ri,Pi,qs,Xs,Ys,new At)),r&&(wl.fromBufferAttribute(r,a),El.fromBufferAttribute(r,l),Tl.fromBufferAttribute(r,c),u.normal=on.getInterpolation(js,Ci,Ri,Pi,wl,El,Tl,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};on.getNormal(Ci,Ri,Pi,d.normal),u.face=d}return u}class an extends Le{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function g(_,p,m,y,v,w,R,T,C,P,M){const x=w/C,D=R/P,O=w/2,E=R/2,F=T/2,U=C+1,z=P+1;let X=0,B=0;const j=new I;for(let Z=0;Z<z;Z++){const at=Z*D-E;for(let et=0;et<U;et++){const Bt=et*x-O;j[_]=Bt*y,j[p]=at*v,j[m]=F,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(et/C),d.push(1-Z/P),X+=1}}for(let Z=0;Z<P;Z++)for(let at=0;at<C;at++){const et=h+at+U*Z,Bt=h+at+U*(Z+1),Y=h+(at+1)+U*(Z+1),$=h+(at+1)+U*Z;l.push(et,Bt,$),l.push(Bt,Y,$),B+=6}a.addGroup(f,B,M),f+=B,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(o){const t={};for(let e=0;e<o.length;e++){const n=Ji(o[e]);for(const i in n)t[i]=n[i]}return t}function kd(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function ah(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Vd={clone:Ji,merge:Ne};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,Al=new At,Cl=new At;class We extends lh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Cl),e.subVectors(Cl,Al)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ys*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class Wd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(Li,Ii,t,e);i.layers=this.layers,this.add(i);const s=new We(Li,Ii,t,e);s.layers=this.layers,this.add(s);const r=new We(Li,Ii,t,e);r.layers=this.layers,this.add(r);const a=new We(Li,Ii,t,e);a.layers=this.layers,this.add(a);const l=new We(Li,Ii,t,e);l.layers=this.layers,this.add(l);const c=new We(Li,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ch extends Fe{constructor(t,e,n,i,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ch(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new an(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Wn});s.uniforms.tEquirect.value=e;const r=new zt(i,s),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=nn),new Wd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const vr=new I,Xd=new I,Yd=new Ft;let li=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=vr.subVectors(n,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yd.getNormalMatrix(t),i=this.coplanarPoint(vr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const si=new Fo,Zs=new I;class da{constructor(t=new li,e=new li,n=new li,i=new li,s=new li,r=new li){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],w=i[15];if(n[0].setComponents(l-s,h-c,p-f,w-m).normalize(),n[1].setComponents(l+s,h+c,p+f,w+m).normalize(),n[2].setComponents(l+r,h+u,p+g,w+y).normalize(),n[3].setComponents(l-r,h-u,p-g,w-y).normalize(),n[4].setComponents(l-a,h-d,p-_,w-v).normalize(),e===Ln)n[5].setComponents(l+a,h+d,p+_,w+v).normalize();else if(e===Ro)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zs.x=i.normal.x>0?t.max.x:t.min.x,Zs.y=i.normal.y>0?t.max.y:t.min.y,Zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function jd(o){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(o.bindBuffer(c,a),d.count===-1&&h.length===0&&o.bufferSubData(c,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];o.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(o.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}class Kn extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-r;for(let v=0;v<c;v++){const w=v*d-s;g.push(w,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,w=y+c*(m+1),R=y+1+c*(m+1),T=y+1+c*m;f.push(v,w,T),f.push(w,R,T)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Of=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:$d,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:of,begin_vertex:rf,beginnormal_vertex:af,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:hf,clipping_planes_fragment:uf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:yf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:bf,emissivemap_fragment:wf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Gf,envmap_vertex:If,fog_vertex:Nf,fog_pars_vertex:Df,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:zf,lightmap_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Hf,lights_toon_fragment:Wf,lights_toon_pars_fragment:qf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:jf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:bp,opaque_fragment:wp,packing:Ep,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Cp,dithering_pars_fragment:Rp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Np,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Fp,skinning_pars_vertex:zp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:Vp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:qp,uv_pars_fragment:Xp,uv_pars_vertex:Yp,uv_vertex:jp,worldpos_vertex:$p,background_vert:Kp,background_frag:Zp,backgroundCube_vert:Jp,backgroundCube_frag:Qp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:rm,equirect_frag:am,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:vm,meshphong_frag:ym,meshphysical_vert:xm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:bm,points_vert:wm,points_frag:Em,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Cm,sprite_frag:Rm},rt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},pn={basic:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ne([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ne([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ne([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ne([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ne([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ne([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ne([rt.common,rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ne([rt.lights,rt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};pn.physical={uniforms:Ne([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Js={r:0,b:0,g:0},oi=new Ke,Pm=new ie;function Lm(o,t,e,n,i,s,r){const a=new xt(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const w=o.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Do)?(u===void 0&&(u=new zt(new an(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(m.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(oi)),u.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,(d!==v||h!==v.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new zt(new Kn(2,2),new $n({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,f=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Js,ah(o)),n.buffers.color.setClear(Js.r,Js.g,Js.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Im(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,r=!1;function a(x,D,O,E,F){let U=!1;const z=d(E,O,D);s!==z&&(s=z,c(s.object)),U=f(x,E,O,F),U&&g(x,E,O,F),F!==null&&t.update(F,o.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,w(x,D,O,E),F!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return o.createVertexArray()}function c(x){return o.bindVertexArray(x)}function u(x){return o.deleteVertexArray(x)}function d(x,D,O){const E=O.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let U=F[D.id];U===void 0&&(U={},F[D.id]=U);let z=U[E];return z===void 0&&(z=h(l()),U[E]=z),z}function h(x){const D=[],O=[],E=[];for(let F=0;F<e;F++)D[F]=0,O[F]=0,E[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:E,object:x,attributes:{},index:null}}function f(x,D,O,E){const F=s.attributes,U=D.attributes;let z=0;const X=O.getAttributes();for(const B in X)if(X[B].location>=0){const Z=F[B];let at=U[B];if(at===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),Z===void 0||Z.attribute!==at||at&&Z.data!==at.data)return!0;z++}return s.attributesNum!==z||s.index!==E}function g(x,D,O,E){const F={},U=D.attributes;let z=0;const X=O.getAttributes();for(const B in X)if(X[B].location>=0){let Z=U[B];Z===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const at={};at.attribute=Z,Z&&Z.data&&(at.data=Z.data),F[B]=at,z++}s.attributes=F,s.attributesNum=z,s.index=E}function _(){const x=s.newAttributes;for(let D=0,O=x.length;D<O;D++)x[D]=0}function p(x){m(x,0)}function m(x,D){const O=s.newAttributes,E=s.enabledAttributes,F=s.attributeDivisors;O[x]=1,E[x]===0&&(o.enableVertexAttribArray(x),E[x]=1),F[x]!==D&&(o.vertexAttribDivisor(x,D),F[x]=D)}function y(){const x=s.newAttributes,D=s.enabledAttributes;for(let O=0,E=D.length;O<E;O++)D[O]!==x[O]&&(o.disableVertexAttribArray(O),D[O]=0)}function v(x,D,O,E,F,U,z){z===!0?o.vertexAttribIPointer(x,D,O,F,U):o.vertexAttribPointer(x,D,O,E,F,U)}function w(x,D,O,E){_();const F=E.attributes,U=O.getAttributes(),z=D.defaultAttributeValues;for(const X in U){const B=U[X];if(B.location>=0){let j=F[X];if(j===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){const Z=j.normalized,at=j.itemSize,et=t.get(j);if(et===void 0)continue;const Bt=et.buffer,Y=et.type,$=et.bytesPerElement,ut=Y===o.INT||Y===o.UNSIGNED_INT||j.gpuType===Gc;if(j.isInterleavedBufferAttribute){const lt=j.data,Nt=lt.stride,Ot=j.offset;if(lt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<B.locationSize;Gt++)m(B.location+Gt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Gt=0;Gt<B.locationSize;Gt++)p(B.location+Gt);o.bindBuffer(o.ARRAY_BUFFER,Bt);for(let Gt=0;Gt<B.locationSize;Gt++)v(B.location+Gt,at/B.locationSize,Y,Z,Nt*$,(Ot+at/B.locationSize*Gt)*$,ut)}else{if(j.isInstancedBufferAttribute){for(let lt=0;lt<B.locationSize;lt++)m(B.location+lt,j.meshPerAttribute);x.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let lt=0;lt<B.locationSize;lt++)p(B.location+lt);o.bindBuffer(o.ARRAY_BUFFER,Bt);for(let lt=0;lt<B.locationSize;lt++)v(B.location+lt,at/B.locationSize,Y,Z,at*$,at/B.locationSize*lt*$,ut)}}else if(z!==void 0){const Z=z[X];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(B.location,Z);break;case 3:o.vertexAttrib3fv(B.location,Z);break;case 4:o.vertexAttrib4fv(B.location,Z);break;default:o.vertexAttrib1fv(B.location,Z)}}}}y()}function R(){P();for(const x in n){const D=n[x];for(const O in D){const E=D[O];for(const F in E)u(E[F].object),delete E[F];delete D[O]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const O in D){const E=D[O];for(const F in E)u(E[F].object),delete E[F];delete D[O]}delete n[x.id]}function C(x){for(const D in n){const O=n[D];if(O[x.id]===void 0)continue;const E=O[x.id];for(const F in E)u(E[F].object),delete E[F];delete O[x.id]}}function P(){M(),r=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Nm(o,t,e){let n;function i(l){n=l}function s(l,c){o.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(o.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{d.multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a}function Dm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(v){if(v==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=e.precision!==void 0?e.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=e.logarithmicDepthBuffer===!0,c=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),u=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_TEXTURE_SIZE),h=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),f=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),p=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,y=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:y}}function Um(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new li,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=o.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let w=m.clippingState||null;l.value=w,w=u(g,h,v,f);for(let R=0;R!==v;++R)w[R]=e[R];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,w=f;v!==_;++v,w+=4)r.copy(d[v]).applyMatrix4(y,a),r.normal.toArray(p,w),p[w+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Fm(o){let t=new WeakMap;function e(r,a){return a===$r?r.mapping=ji:a===Kr&&(r.mapping=$i),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===$r||a===Kr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new qd(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class uh extends lh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Rl=[.125,.215,.35,.446,.526,.582],ui=20,yr=new uh,Pl=new xt;let xr=null,Mr=0,Sr=0,br=!1;const ci=(1+Math.sqrt(5))/2,Ni=1/ci,Ll=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ci,Ni),new I(0,ci,-Ni),new I(Ni,0,ci),new I(-Ni,0,ci),new I(ci,Ni,0),new I(-ci,Ni,0)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){xr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xr,Mr,Sr),this._renderer.xr.enabled=br,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xr=this._renderer.getRenderTarget(),Mr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Eo,format:gn,colorSpace:Zn,depthBuffer:!1},i=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(s)),this._blurMaterial=Om(s,t,e)}return i}_compileMaterial(t){const e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Pl),u.toneMapping=qn,u.autoClear=!1;const f=new Zi({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new zt(new an,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Pl),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Qs(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ji||t.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Ll[(i-1)%Ll.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):ui;p>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const m=[];let y=0;for(let C=0;C<ui;++C){const P=C/_,M=Math.exp(-P*P/2);m.push(M),C===0?y+=M:C<p&&(y+=2*M)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const w=this._sizeLods[i],R=3*w*(i>v-Vi?i-v+Vi:0),T=4*(this._cubeSize-w);Qs(e,R,T,3*w,2*w),l.setRenderTarget(e),l.render(d,yr)}}function zm(o){const t=[],e=[],n=[];let i=o;const s=o-Vi+1+Rl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Vi?l=Rl[r-o+Vi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),v=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,P=T>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(M,_*g*T),v.set(h,p*g*T);const x=[T,T,T,T,T,T];w.set(x,m*g*T)}const R=new Le;R.setAttribute("position",new Be(y,_)),R.setAttribute("uv",new Be(v,p)),R.setAttribute("faceIndex",new Be(w,m)),t.push(R),i>Vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(o,t,e){const n=new mi(o,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Om(o,t,e){const n=new Float32Array(ui),i=new I(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Dl(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ul(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bm(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$r||l===Kr,u=l===ji||l===$i;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Il(o)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Il(o)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function km(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vm(o,t,e,n){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",r),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],o.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,w=y.length;v<w;v+=3){const R=y[v+0],T=y[v+1],C=y[v+2];h.push(R,T,T,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,w=y.length/3-1;v<w;v+=3){const R=v+0,T=v+1,C=v+2;h.push(R,T,T,C,C,R)}}else return;const p=new(Jc(h)?rh:oh)(h,1);p.version=_;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Hm(o,t,e){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,h){o.drawElements(n,h,s,d*r),e.update(h,n,1)}function c(d,h,f){f!==0&&(o.drawElementsInstanced(n,h,s,d*r,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f;_++)this.render(d[_]/r,h[_]);else{g.multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];e.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Gm(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wm(o,t,e){const n=new WeakMap,i=new ae;function s(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),p===!0&&(w=3);let R=a.attributes.position.count*w,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*T*4*d),P=new eh(C,R,T,d);P.type=Gn,P.needsUpdate=!0;const M=w*4;for(let D=0;D<d;D++){const O=m[D],E=y[D],F=v[D],U=R*T*4*D;for(let z=0;z<O.count;z++){const X=z*M;g===!0&&(i.fromBufferAttribute(O,z),C[U+X+0]=i.x,C[U+X+1]=i.y,C[U+X+2]=i.z,C[U+X+3]=0),_===!0&&(i.fromBufferAttribute(E,z),C[U+X+4]=i.x,C[U+X+5]=i.y,C[U+X+6]=i.z,C[U+X+7]=0),p===!0&&(i.fromBufferAttribute(F,z),C[U+X+8]=i.x,C[U+X+9]=i.y,C[U+X+10]=i.z,C[U+X+11]=F.itemSize===4?i.w:1)}}h={count:d,texture:P,size:new At(R,T)},n.set(a,h),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",_),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function qm(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}class dh extends Fe{constructor(t,e,n,i,s,r,a,l,c,u){if(u=u!==void 0?u:qi,u!==qi&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=Ki),n===void 0&&u===Ss&&(n=Ts),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new Fe,ph=new dh(1,1);ph.compareFunction=Zc;const mh=new eh,gh=new Rd,_h=new ch,Fl=[],zl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function ts(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Fl[i];if(s===void 0&&(s=new Float32Array(i),Fl[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function xe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Me(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function zo(o,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Xm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Ym(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;o.uniform2fv(this.addr,t),Me(e,t)}}function jm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;o.uniform3fv(this.addr,t),Me(e,t)}}function $m(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;o.uniform4fv(this.addr,t),Me(e,t)}}function Km(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;kl.set(n),o.uniformMatrix2fv(this.addr,!1,kl),Me(e,n)}}function Zm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Bl.set(n),o.uniformMatrix3fv(this.addr,!1,Bl),Me(e,n)}}function Jm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ol.set(n),o.uniformMatrix4fv(this.addr,!1,Ol),Me(e,n)}}function Qm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function t0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;o.uniform2iv(this.addr,t),Me(e,t)}}function e0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;o.uniform3iv(this.addr,t),Me(e,t)}}function n0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;o.uniform4iv(this.addr,t),Me(e,t)}}function i0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function s0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;o.uniform2uiv(this.addr,t),Me(e,t)}}function o0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;o.uniform3uiv(this.addr,t),Me(e,t)}}function r0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;o.uniform4uiv(this.addr,t),Me(e,t)}}function a0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?ph:fh;e.setTexture2D(t||s,i)}function l0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gh,i)}function c0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_h,i)}function h0(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mh,i)}function u0(o){switch(o){case 5126:return Xm;case 35664:return Ym;case 35665:return jm;case 35666:return $m;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return o0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(o,t){o.uniform1fv(this.addr,t)}function f0(o,t){const e=ts(t,this.size,2);o.uniform2fv(this.addr,e)}function p0(o,t){const e=ts(t,this.size,3);o.uniform3fv(this.addr,e)}function m0(o,t){const e=ts(t,this.size,4);o.uniform4fv(this.addr,e)}function g0(o,t){const e=ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function _0(o,t){const e=ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function v0(o,t){const e=ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function y0(o,t){o.uniform1iv(this.addr,t)}function x0(o,t){o.uniform2iv(this.addr,t)}function M0(o,t){o.uniform3iv(this.addr,t)}function S0(o,t){o.uniform4iv(this.addr,t)}function b0(o,t){o.uniform1uiv(this.addr,t)}function w0(o,t){o.uniform2uiv(this.addr,t)}function E0(o,t){o.uniform3uiv(this.addr,t)}function T0(o,t){o.uniform4uiv(this.addr,t)}function A0(o,t,e){const n=this.cache,i=t.length,s=zo(e,i);xe(n,s)||(o.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||fh,s[r])}function C0(o,t,e){const n=this.cache,i=t.length,s=zo(e,i);xe(n,s)||(o.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||gh,s[r])}function R0(o,t,e){const n=this.cache,i=t.length,s=zo(e,i);xe(n,s)||(o.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||_h,s[r])}function P0(o,t,e){const n=this.cache,i=t.length,s=zo(e,i);xe(n,s)||(o.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||mh,s[r])}function L0(o){switch(o){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return y0;case 35667:case 35671:return x0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return P0}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=u0(e.type)}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}}class D0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Vl(o,t){o.seq.push(t),o.map[t.id]=t}function U0(o,t,e){const n=o.name,i=n.length;for(wr.lastIndex=0;;){const s=wr.exec(n),r=wr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){Vl(e,c===void 0?new I0(a,o,t):new N0(a,o,t));break}else{let d=e.map[a];d===void 0&&(d=new D0(a),Vl(e,d)),e=d}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);U0(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Hl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const F0=37297;let z0=0;function O0(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function B0(o){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(o);let n;switch(t===e?n="":t===Co&&e===Ao?n="LinearDisplayP3ToLinearSRGB":t===Ao&&e===Co&&(n="LinearSRGBToLinearDisplayP3"),o){case Zn:case Uo:return[n,"LinearTransferOETF"];case fn:case ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Gl(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O0(o.getShaderSource(t),r)}else return i}function k0(o,t){const e=B0(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function V0(o,t){let e;switch(t){case Nu:e="Linear";break;case Du:e="Reinhard";break;case Uu:e="OptimizedCineon";break;case Fu:e="ACESFilmic";break;case Ou:e="AgX";break;case Bu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function H0(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function G0(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function _s(o){return o!==""}function Wl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(o){return o.replace(q0,Y0)}const X0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Y0(o,t){let e=Ut[t];if(e===void 0){const n=X0.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(o){return o.replace(j0,$0)}function $0(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yl(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K0(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Z0(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ji:case $i:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function J0(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function Q0(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Lu:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function tg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function eg(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=K0(e),c=Z0(e),u=J0(e),d=Q0(e),h=tg(e),f=H0(e),g=G0(s),_=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`)):(p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),m=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==qn?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,k0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),r=ta(r),r=Wl(r,e),r=ql(r,e),a=ta(a),a=Wl(a,e),a=ql(a,e),r=Xl(r),a=Xl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+r,w=y+m+a,R=Hl(i,i.VERTEX_SHADER,v),T=Hl(i,i.FRAGMENT_SHADER,w);i.attachShader(_,R),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(o.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(R).trim(),F=i.getShaderInfoLog(T).trim();let U=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,R,T);else{const X=Gl(i,R,"vertex"),B=Gl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+X+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(E===""||F==="")&&(z=!1);z&&(D.diagnostics={runnable:U,programLog:O,vertexShader:{log:E,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(R),i.deleteShader(T),P=new yo(i,_),M=W0(i,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,F0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let ng=0;class ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sg(t),e.set(t,n)),n}}class sg{constructor(t){this.id=ng++,this.code=t,this.usedTimes=0}}function og(o,t,e,n,i,s,r){const a=new ih,l=new ig,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,D,O,E){const F=O.fog,U=E.geometry,z=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),B=X&&X.mapping===Do?X.image.height:null,j=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=Z!==void 0?Z.length:0;let et=0;U.morphAttributes.position!==void 0&&(et=1),U.morphAttributes.normal!==void 0&&(et=2),U.morphAttributes.color!==void 0&&(et=3);let Bt,Y,$,ut;if(j){const we=pn[j];Bt=we.vertexShader,Y=we.fragmentShader}else Bt=M.vertexShader,Y=M.fragmentShader,l.update(M),$=l.getVertexShaderID(M),ut=l.getFragmentShaderID(M);const lt=o.getRenderTarget(),Nt=E.isInstancedMesh===!0,Ot=E.isBatchedMesh===!0,Gt=!!M.map,V=!!M.matcap,kt=!!X,Et=!!M.aoMap,ge=!!M.lightMap,Ct=!!M.bumpMap,Jt=!!M.normalMap,L=!!M.displacementMap,b=!!M.emissiveMap,q=!!M.metalnessMap,K=!!M.roughnessMap,J=M.anisotropy>0,Q=M.clearcoat>0,St=M.iridescence>0,tt=M.sheen>0,vt=M.transmission>0,wt=J&&!!M.anisotropyMap,ot=Q&&!!M.clearcoatMap,dt=Q&&!!M.clearcoatNormalMap,Rt=Q&&!!M.clearcoatRoughnessMap,ft=St&&!!M.iridescenceMap,pt=St&&!!M.iridescenceThicknessMap,Ht=tt&&!!M.sheenColorMap,Wt=tt&&!!M.sheenRoughnessMap,$t=!!M.specularMap,jt=!!M.specularColorMap,se=!!M.specularIntensityMap,gt=vt&&!!M.transmissionMap,N=vt&&!!M.thicknessMap,it=!!M.gradientMap,nt=!!M.alphaMap,_t=M.alphaTest>0,yt=!!M.alphaHash,Qt=!!M.extensions;let oe=qn;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(oe=o.toneMapping);const le={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Bt,fragmentShader:Y,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ot,instancing:Nt,instancingColor:Nt&&E.instanceColor!==null,instancingMorph:Nt&&E.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Zn,alphaToCoverage:!!M.alphaToCoverage,map:Gt,matcap:V,envMap:kt,envMapMode:kt&&X.mapping,envMapCubeUVHeight:B,aoMap:Et,lightMap:ge,bumpMap:Ct,normalMap:Jt,displacementMap:h&&L,emissiveMap:b,normalMapObjectSpace:Jt&&M.normalMapType===Qu,normalMapTangentSpace:Jt&&M.normalMapType===Kc,metalnessMap:q,roughnessMap:K,anisotropy:J,anisotropyMap:wt,clearcoat:Q,clearcoatMap:ot,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,iridescence:St,iridescenceMap:ft,iridescenceThicknessMap:pt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:Wt,specularMap:$t,specularColorMap:jt,specularIntensityMap:se,transmission:vt,transmissionMap:gt,thicknessMap:N,gradientMap:it,opaque:M.transparent===!1&&M.blending===Wi&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:yt,combine:M.combine,mapUv:Gt&&_(M.map.channel),aoMapUv:Et&&_(M.aoMap.channel),lightMapUv:ge&&_(M.lightMap.channel),bumpMapUv:Ct&&_(M.bumpMap.channel),normalMapUv:Jt&&_(M.normalMap.channel),displacementMapUv:L&&_(M.displacementMap.channel),emissiveMapUv:b&&_(M.emissiveMap.channel),metalnessMapUv:q&&_(M.metalnessMap.channel),roughnessMapUv:K&&_(M.roughnessMap.channel),anisotropyMapUv:wt&&_(M.anisotropyMap.channel),clearcoatMapUv:ot&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(M.sheenRoughnessMap.channel),specularMapUv:$t&&_(M.specularMap.channel),specularColorMapUv:jt&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:gt&&_(M.transmissionMap.channel),thicknessMapUv:N&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Jt||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!U.attributes.uv&&(Gt||nt),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:et,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:oe,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Gt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ne,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qt&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function m(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(x,M),v(x,M),x.push(o.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),M.push(a.mask)}function w(M){const x=g[M.type];let D;if(x){const O=pn[x];D=Vd.clone(O.uniforms)}else D=M.uniforms;return D}function R(M,x){let D;for(let O=0,E=u.length;O<E;O++){const F=u[O];if(F.cacheKey===x){D=F,++D.usedTimes;break}}return D===void 0&&(D=new eg(o,x,M,s),u.push(D)),D}function T(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:P}}function rg(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ag(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function jl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $l(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,h,f,g,_,p){let m=o[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},o[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),t++,m}function a(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,h,f,g,_,p){const m=r(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||ag),n.length>1&&n.sort(h||jl),i.length>1&&i.sort(h||jl)}function u(){for(let d=t,h=o.length;d<h;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function lg(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new $l,o.set(n,[r])):i>=s.length?(r=new $l,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function cg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new xt};break;case"SpotLight":e={position:new I,direction:new I,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new I,halfWidth:new I,halfHeight:new I};break}return o[t.id]=e,e}}}function hg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let ug=0;function dg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function fg(o){const t=new cg,e=hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new ie,r=new ie;function a(c,u){let d=0,h=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,_=0,p=0,m=0,y=0,v=0,w=0,R=0,T=0,C=0,P=0;c.sort(dg);const M=u===!0?Math.PI:1;for(let D=0,O=c.length;D<O;D++){const E=c[D],F=E.color,U=E.intensity,z=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=F.r*U*M,h+=F.g*U*M,f+=F.b*U*M;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],U);P++}else if(E.isDirectionalLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity*M),E.castShadow){const j=E.shadow,Z=e.get(E);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=E.shadow.matrix,v++}n.directional[g]=B,g++}else if(E.isSpotLight){const B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(F).multiplyScalar(U*M),B.distance=z,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[p]=B;const j=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,j.updateMatrices(E),E.castShadow&&C++),n.spotLightMatrix[p]=j.matrix,E.castShadow){const Z=e.get(E);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.spotShadow[p]=Z,n.spotShadowMap[p]=X,R++}p++}else if(E.isRectAreaLight){const B=t.get(E);B.color.copy(F).multiplyScalar(U),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=B,m++}else if(E.isPointLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity*M),B.distance=E.distance,B.decay=E.decay,E.castShadow){const j=E.shadow,Z=e.get(E);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=E.shadow.matrix,w++}n.point[_]=B,_++}else if(E.isHemisphereLight){const B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(U*M),B.groundColor.copy(E.groundColor).multiplyScalar(U*M),n.hemi[y]=B,y++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const x=n.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==p||x.rectAreaLength!==m||x.hemiLength!==y||x.numDirectionalShadows!==v||x.numPointShadows!==w||x.numSpotShadows!==R||x.numSpotMaps!==T||x.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=R+T-C,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,x.directionalLength=g,x.pointLength=_,x.spotLength=p,x.rectAreaLength=m,x.hemiLength=y,x.numDirectionalShadows=v,x.numPointShadows=w,x.numSpotShadows=R,x.numSpotMaps=T,x.numLightProbes=P,n.version=ug++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),d++}else if(v.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Kl(o){const t=new fg(o),e=[],n=[];function i(){e.length=0,n.length=0}function s(u){e.push(u)}function r(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:i,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function pg(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Kl(o),t.set(i,[a])):s>=r.length?(a=new Kl(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class mg extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gg extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yg(o,t,e){let n=new da;const i=new At,s=new At,r=new ae,a=new mg({depthPacking:Ju}),l=new gg,c={},u=e.maxTextureSize,d={[jn]:Ue,[Ue]:jn,[mn]:mn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:_g,fragmentShader:vg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let m=this.type;this.render=function(T,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=o.getRenderTarget(),x=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),O=o.state;O.setBlending(Wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const E=m!==Pn&&this.type===Pn,F=m===Pn&&this.type!==Pn;for(let U=0,z=T.length;U<z;U++){const X=T[U],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const j=B.getFrameExtents();if(i.multiply(j),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,B.mapSize.y=s.y)),B.map===null||E===!0||F===!0){const at=this.type!==Pn?{minFilter:$e,magFilter:$e}:{};B.map!==null&&B.map.dispose(),B.map=new mi(i.x,i.y,at),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const Z=B.getViewportCount();for(let at=0;at<Z;at++){const et=B.getViewport(at);r.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),O.viewport(r),B.updateMatrices(X,at),n=B.getFrustum(),w(C,P,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Pn&&y(B,P),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(M,x,D)};function y(T,C){const P=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(C,null,P,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(C,null,P,f,_,null)}function v(T,C,P,M){let x=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?l:a,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=x.uuid,E=C.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let U=F[E];U===void 0&&(U=x.clone(),F[E]=U,C.addEventListener("dispose",R)),x=U}if(x.visible=C.visible,x.wireframe=C.wireframe,M===Pn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=o.properties.get(x);O.light=P}return x}function w(T,C,P,M,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const E=t.update(T),F=T.material;if(Array.isArray(F)){const U=E.groups;for(let z=0,X=U.length;z<X;z++){const B=U[z],j=F[B.materialIndex];if(j&&j.visible){const Z=v(T,j,M,x);T.onBeforeShadow(o,T,C,P,E,Z,B),o.renderBufferDirect(P,null,E,Z,T,B),T.onAfterShadow(o,T,C,P,E,Z,B)}}}else if(F.visible){const U=v(T,F,M,x);T.onBeforeShadow(o,T,C,P,E,U,null),o.renderBufferDirect(P,null,E,U,T,null),T.onAfterShadow(o,T,C,P,E,U,null)}}const O=T.children;for(let E=0,F=O.length;E<F;E++)w(O[E],C,P,M,x)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const M=c[P],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}function xg(o){function t(){let N=!1;const it=new ae;let nt=null;const _t=new ae(0,0,0,0);return{setMask:function(yt){nt!==yt&&!N&&(o.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){N=yt},setClear:function(yt,Qt,oe,le,we){we===!0&&(yt*=le,Qt*=le,oe*=le),it.set(yt,Qt,oe,le),_t.equals(it)===!1&&(o.clearColor(yt,Qt,oe,le),_t.copy(it))},reset:function(){N=!1,nt=null,_t.set(-1,0,0,0)}}}function e(){let N=!1,it=null,nt=null,_t=null;return{setTest:function(yt){yt?ut(o.DEPTH_TEST):lt(o.DEPTH_TEST)},setMask:function(yt){it!==yt&&!N&&(o.depthMask(yt),it=yt)},setFunc:function(yt){if(nt!==yt){switch(yt){case wu:o.depthFunc(o.NEVER);break;case Eu:o.depthFunc(o.ALWAYS);break;case Tu:o.depthFunc(o.LESS);break;case wo:o.depthFunc(o.LEQUAL);break;case Au:o.depthFunc(o.EQUAL);break;case Cu:o.depthFunc(o.GEQUAL);break;case Ru:o.depthFunc(o.GREATER);break;case Pu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}nt=yt}},setLocked:function(yt){N=yt},setClear:function(yt){_t!==yt&&(o.clearDepth(yt),_t=yt)},reset:function(){N=!1,it=null,nt=null,_t=null}}}function n(){let N=!1,it=null,nt=null,_t=null,yt=null,Qt=null,oe=null,le=null,we=null;return{setTest:function(te){N||(te?ut(o.STENCIL_TEST):lt(o.STENCIL_TEST))},setMask:function(te){it!==te&&!N&&(o.stencilMask(te),it=te)},setFunc:function(te,ln,cn){(nt!==te||_t!==ln||yt!==cn)&&(o.stencilFunc(te,ln,cn),nt=te,_t=ln,yt=cn)},setOp:function(te,ln,cn){(Qt!==te||oe!==ln||le!==cn)&&(o.stencilOp(te,ln,cn),Qt=te,oe=ln,le=cn)},setLocked:function(te){N=te},setClear:function(te){we!==te&&(o.clearStencil(te),we=te)},reset:function(){N=!1,it=null,nt=null,_t=null,yt=null,Qt=null,oe=null,le=null,we=null}}}const i=new t,s=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,w=null,R=null,T=new xt(0,0,0),C=0,P=!1,M=null,x=null,D=null,O=null,E=null;const F=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=z>=2);let B=null,j={};const Z=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),et=new ae().fromArray(Z),Bt=new ae().fromArray(at);function Y(N,it,nt,_t){const yt=new Uint8Array(4),Qt=o.createTexture();o.bindTexture(N,Qt),o.texParameteri(N,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(N,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<nt;oe++)N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY?o.texImage3D(it,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(it+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return Qt}const $={};$[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),ut(o.DEPTH_TEST),s.setFunc(wo),Ct(!1),Jt(La),ut(o.CULL_FACE),Et(Wn);function ut(N){c[N]!==!0&&(o.enable(N),c[N]=!0)}function lt(N){c[N]!==!1&&(o.disable(N),c[N]=!1)}function Nt(N,it){return u[N]!==it?(o.bindFramebuffer(N,it),u[N]=it,N===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=it),N===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(N,it){let nt=h,_t=!1;if(N){nt=d.get(it),nt===void 0&&(nt=[],d.set(it,nt));const yt=N.textures;if(nt.length!==yt.length||nt[0]!==o.COLOR_ATTACHMENT0){for(let Qt=0,oe=yt.length;Qt<oe;Qt++)nt[Qt]=o.COLOR_ATTACHMENT0+Qt;nt.length=yt.length,_t=!0}}else nt[0]!==o.BACK&&(nt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(nt)}function Gt(N){return f!==N?(o.useProgram(N),f=N,!0):!1}const V={[hi]:o.FUNC_ADD,[au]:o.FUNC_SUBTRACT,[lu]:o.FUNC_REVERSE_SUBTRACT};V[cu]=o.MIN,V[hu]=o.MAX;const kt={[uu]:o.ZERO,[du]:o.ONE,[fu]:o.SRC_COLOR,[Yr]:o.SRC_ALPHA,[yu]:o.SRC_ALPHA_SATURATE,[_u]:o.DST_COLOR,[mu]:o.DST_ALPHA,[pu]:o.ONE_MINUS_SRC_COLOR,[jr]:o.ONE_MINUS_SRC_ALPHA,[vu]:o.ONE_MINUS_DST_COLOR,[gu]:o.ONE_MINUS_DST_ALPHA,[xu]:o.CONSTANT_COLOR,[Mu]:o.ONE_MINUS_CONSTANT_COLOR,[Su]:o.CONSTANT_ALPHA,[bu]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(N,it,nt,_t,yt,Qt,oe,le,we,te){if(N===Wn){g===!0&&(lt(o.BLEND),g=!1);return}if(g===!1&&(ut(o.BLEND),g=!0),N!==ru){if(N!==_||te!==P){if((p!==hi||v!==hi)&&(o.blendEquation(o.FUNC_ADD),p=hi,v=hi),te)switch(N){case Wi:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ia:o.blendFunc(o.ONE,o.ONE);break;case Na:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Da:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wi:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ia:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Na:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Da:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,w=null,R=null,T.set(0,0,0),C=0,_=N,P=te}return}yt=yt||it,Qt=Qt||nt,oe=oe||_t,(it!==p||yt!==v)&&(o.blendEquationSeparate(V[it],V[yt]),p=it,v=yt),(nt!==m||_t!==y||Qt!==w||oe!==R)&&(o.blendFuncSeparate(kt[nt],kt[_t],kt[Qt],kt[oe]),m=nt,y=_t,w=Qt,R=oe),(le.equals(T)===!1||we!==C)&&(o.blendColor(le.r,le.g,le.b,we),T.copy(le),C=we),_=N,P=!1}function ge(N,it){N.side===mn?lt(o.CULL_FACE):ut(o.CULL_FACE);let nt=N.side===Ue;it&&(nt=!nt),Ct(nt),N.blending===Wi&&N.transparent===!1?Et(Wn):Et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const _t=N.stencilWrite;r.setTest(_t),_t&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),b(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):lt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(N){M!==N&&(N?o.frontFace(o.CW):o.frontFace(o.CCW),M=N)}function Jt(N){N!==iu?(ut(o.CULL_FACE),N!==x&&(N===La?o.cullFace(o.BACK):N===su?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):lt(o.CULL_FACE),x=N}function L(N){N!==D&&(U&&o.lineWidth(N),D=N)}function b(N,it,nt){N?(ut(o.POLYGON_OFFSET_FILL),(O!==it||E!==nt)&&(o.polygonOffset(it,nt),O=it,E=nt)):lt(o.POLYGON_OFFSET_FILL)}function q(N){N?ut(o.SCISSOR_TEST):lt(o.SCISSOR_TEST)}function K(N){N===void 0&&(N=o.TEXTURE0+F-1),B!==N&&(o.activeTexture(N),B=N)}function J(N,it,nt){nt===void 0&&(B===null?nt=o.TEXTURE0+F-1:nt=B);let _t=j[nt];_t===void 0&&(_t={type:void 0,texture:void 0},j[nt]=_t),(_t.type!==N||_t.texture!==it)&&(B!==nt&&(o.activeTexture(nt),B=nt),o.bindTexture(N,it||$[N]),_t.type=N,_t.texture=it)}function Q(){const N=j[B];N!==void 0&&N.type!==void 0&&(o.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function St(){try{o.compressedTexImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{o.texSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{o.texStorage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{o.texStorage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{o.texImage2D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{o.texImage3D.apply(o,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(N){et.equals(N)===!1&&(o.scissor(N.x,N.y,N.z,N.w),et.copy(N))}function $t(N){Bt.equals(N)===!1&&(o.viewport(N.x,N.y,N.z,N.w),Bt.copy(N))}function jt(N,it){let nt=l.get(it);nt===void 0&&(nt=new WeakMap,l.set(it,nt));let _t=nt.get(N);_t===void 0&&(_t=o.getUniformBlockIndex(it,N.name),nt.set(N,_t))}function se(N,it){const _t=l.get(it).get(N);a.get(it)!==_t&&(o.uniformBlockBinding(it,_t,N.__bindingPointIndex),a.set(it,_t))}function gt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),c={},B=null,j={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,v=null,w=null,R=null,T=new xt(0,0,0),C=0,P=!1,M=null,x=null,D=null,O=null,E=null,et.set(0,0,o.canvas.width,o.canvas.height),Bt.set(0,0,o.canvas.width,o.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:ut,disable:lt,bindFramebuffer:Nt,drawBuffers:Ot,useProgram:Gt,setBlending:Et,setMaterial:ge,setFlipSided:Ct,setCullFace:Jt,setLineWidth:L,setPolygonOffset:b,setScissorTest:q,activeTexture:K,bindTexture:J,unbindTexture:Q,compressedTexImage2D:St,compressedTexImage3D:tt,texImage2D:pt,texImage3D:Ht,updateUBOMapping:jt,uniformBlockBinding:se,texStorage2D:Rt,texStorage3D:ft,texSubImage2D:vt,texSubImage3D:wt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Wt,viewport:$t,reset:gt}}function Mg(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):Po("canvas")}function _(L,b,q){let K=1;const J=Jt(L);if((J.width>q||J.height>q)&&(K=q/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(K*J.width),St=Math.floor(K*J.height);d===void 0&&(d=g(Q,St));const tt=b?g(Q,St):d;return tt.width=Q,tt.height=St,tt.getContext("2d").drawImage(L,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+St+")."),tt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==$e&&L.minFilter!==nn}function m(L){o.generateMipmap(L)}function y(L,b,q,K,J=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=b;if(b===o.RED&&(q===o.FLOAT&&(Q=o.R32F),q===o.HALF_FLOAT&&(Q=o.R16F),q===o.UNSIGNED_BYTE&&(Q=o.R8)),b===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(Q=o.R8UI),q===o.UNSIGNED_SHORT&&(Q=o.R16UI),q===o.UNSIGNED_INT&&(Q=o.R32UI),q===o.BYTE&&(Q=o.R8I),q===o.SHORT&&(Q=o.R16I),q===o.INT&&(Q=o.R32I)),b===o.RG&&(q===o.FLOAT&&(Q=o.RG32F),q===o.HALF_FLOAT&&(Q=o.RG16F),q===o.UNSIGNED_BYTE&&(Q=o.RG8)),b===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(Q=o.RG8UI),q===o.UNSIGNED_SHORT&&(Q=o.RG16UI),q===o.UNSIGNED_INT&&(Q=o.RG32UI),q===o.BYTE&&(Q=o.RG8I),q===o.SHORT&&(Q=o.RG16I),q===o.INT&&(Q=o.RG32I)),b===o.RGB&&q===o.UNSIGNED_INT_5_9_9_9_REV&&(Q=o.RGB9_E5),b===o.RGBA){const St=J?To:Zt.getTransfer(K);q===o.FLOAT&&(Q=o.RGBA32F),q===o.HALF_FLOAT&&(Q=o.RGBA16F),q===o.UNSIGNED_BYTE&&(Q=St===ne?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(Q=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(Q=o.RGB5_A1)}return(Q===o.R16F||Q===o.R32F||Q===o.RG16F||Q===o.RG32F||Q===o.RGBA16F||Q===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(L,b){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==$e&&L.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function w(L){const b=L.target;b.removeEventListener("dispose",w),T(b),b.isVideoTexture&&u.delete(b)}function R(L){const b=L.target;b.removeEventListener("dispose",R),P(b)}function T(L){const b=n.get(L);if(b.__webglInit===void 0)return;const q=L.source,K=h.get(q);if(K){const J=K[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(L),Object.keys(K).length===0&&h.delete(q)}n.remove(L)}function C(L){const b=n.get(L);o.deleteTexture(b.__webglTexture);const q=L.source,K=h.get(q);delete K[b.__cacheKey],r.memory.textures--}function P(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let J=0;J<b.__webglFramebuffer[K].length;J++)o.deleteFramebuffer(b.__webglFramebuffer[K][J]);else o.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)o.deleteFramebuffer(b.__webglFramebuffer[K]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=L.textures;for(let K=0,J=q.length;K<J;K++){const Q=n.get(q[K]);Q.__webglTexture&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(q[K])}n.remove(L)}let M=0;function x(){M=0}function D(){const L=M;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),M+=1,L}function O(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function E(L,b){const q=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(q,L,b);return}}e.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+b)}function F(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){et(q,L,b);return}e.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+b)}function U(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){et(q,L,b);return}e.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+b)}function z(L,b){const q=n.get(L);if(L.version>0&&q.__version!==L.version){Bt(q,L,b);return}e.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+b)}const X={[Zr]:o.REPEAT,[fi]:o.CLAMP_TO_EDGE,[Jr]:o.MIRRORED_REPEAT},B={[$e]:o.NEAREST,[ku]:o.NEAREST_MIPMAP_NEAREST,[Is]:o.NEAREST_MIPMAP_LINEAR,[nn]:o.LINEAR,[$o]:o.LINEAR_MIPMAP_NEAREST,[pi]:o.LINEAR_MIPMAP_LINEAR},j={[td]:o.NEVER,[rd]:o.ALWAYS,[ed]:o.LESS,[Zc]:o.LEQUAL,[nd]:o.EQUAL,[od]:o.GEQUAL,[id]:o.GREATER,[sd]:o.NOTEQUAL};function Z(L,b){if(b.type===Gn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===$o||b.magFilter===Is||b.magFilter===pi||b.minFilter===nn||b.minFilter===$o||b.minFilter===Is||b.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,X[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,X[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,X[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,B[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,B[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$e||b.minFilter!==Is&&b.minFilter!==pi||b.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function at(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",w));const K=b.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const Q=O(b);if(Q!==L.__cacheKey){J[Q]===void 0&&(J[Q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,q=!0),J[Q].usedTimes++;const St=J[L.__cacheKey];St!==void 0&&(J[L.__cacheKey].usedTimes--,St.usedTimes===0&&C(b)),L.__cacheKey=Q,L.__webglTexture=J[Q].texture}return q}function et(L,b,q){let K=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=o.TEXTURE_3D);const J=at(L,b),Q=b.source;e.bindTexture(K,L.__webglTexture,o.TEXTURE0+q);const St=n.get(Q);if(Q.version!==St.__version||J===!0){e.activeTexture(o.TEXTURE0+q);const tt=Zt.getPrimaries(Zt.workingColorSpace),vt=b.colorSpace===Hn?null:Zt.getPrimaries(b.colorSpace),wt=b.colorSpace===Hn||tt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let ot=_(b.image,!1,i.maxTextureSize);ot=Ct(b,ot);const dt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type);let ft=y(b.internalFormat,dt,Rt,b.colorSpace,b.isVideoTexture);Z(K,b);let pt;const Ht=b.mipmaps,Wt=b.isVideoTexture!==!0&&ft!==$c,$t=St.__version===void 0||J===!0,jt=Q.dataReady,se=v(b,ot);if(b.isDepthTexture)ft=o.DEPTH_COMPONENT16,b.type===Gn?ft=o.DEPTH_COMPONENT32F:b.type===Ki?ft=o.DEPTH_COMPONENT24:b.type===Ts&&(ft=o.DEPTH24_STENCIL8),$t&&(Wt?e.texStorage2D(o.TEXTURE_2D,1,ft,ot.width,ot.height):e.texImage2D(o.TEXTURE_2D,0,ft,ot.width,ot.height,0,dt,Rt,null));else if(b.isDataTexture)if(Ht.length>0){Wt&&$t&&e.texStorage2D(o.TEXTURE_2D,se,ft,Ht[0].width,Ht[0].height);for(let gt=0,N=Ht.length;gt<N;gt++)pt=Ht[gt],Wt?jt&&e.texSubImage2D(o.TEXTURE_2D,gt,0,0,pt.width,pt.height,dt,Rt,pt.data):e.texImage2D(o.TEXTURE_2D,gt,ft,pt.width,pt.height,0,dt,Rt,pt.data);b.generateMipmaps=!1}else Wt?($t&&e.texStorage2D(o.TEXTURE_2D,se,ft,ot.width,ot.height),jt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,ot.width,ot.height,dt,Rt,ot.data)):e.texImage2D(o.TEXTURE_2D,0,ft,ot.width,ot.height,0,dt,Rt,ot.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&$t&&e.texStorage3D(o.TEXTURE_2D_ARRAY,se,ft,Ht[0].width,Ht[0].height,ot.depth);for(let gt=0,N=Ht.length;gt<N;gt++)pt=Ht[gt],b.format!==gn?dt!==null?Wt?jt&&e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,gt,0,0,0,pt.width,pt.height,ot.depth,dt,pt.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,gt,ft,pt.width,pt.height,ot.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?jt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,gt,0,0,0,pt.width,pt.height,ot.depth,dt,Rt,pt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,gt,ft,pt.width,pt.height,ot.depth,0,dt,Rt,pt.data)}else{Wt&&$t&&e.texStorage2D(o.TEXTURE_2D,se,ft,Ht[0].width,Ht[0].height);for(let gt=0,N=Ht.length;gt<N;gt++)pt=Ht[gt],b.format!==gn?dt!==null?Wt?jt&&e.compressedTexSubImage2D(o.TEXTURE_2D,gt,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(o.TEXTURE_2D,gt,ft,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?jt&&e.texSubImage2D(o.TEXTURE_2D,gt,0,0,pt.width,pt.height,dt,Rt,pt.data):e.texImage2D(o.TEXTURE_2D,gt,ft,pt.width,pt.height,0,dt,Rt,pt.data)}else if(b.isDataArrayTexture)Wt?($t&&e.texStorage3D(o.TEXTURE_2D_ARRAY,se,ft,ot.width,ot.height,ot.depth),jt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,dt,Rt,ot.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,ft,ot.width,ot.height,ot.depth,0,dt,Rt,ot.data);else if(b.isData3DTexture)Wt?($t&&e.texStorage3D(o.TEXTURE_3D,se,ft,ot.width,ot.height,ot.depth),jt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,dt,Rt,ot.data)):e.texImage3D(o.TEXTURE_3D,0,ft,ot.width,ot.height,ot.depth,0,dt,Rt,ot.data);else if(b.isFramebufferTexture){if($t)if(Wt)e.texStorage2D(o.TEXTURE_2D,se,ft,ot.width,ot.height);else{let gt=ot.width,N=ot.height;for(let it=0;it<se;it++)e.texImage2D(o.TEXTURE_2D,it,ft,gt,N,0,dt,Rt,null),gt>>=1,N>>=1}}else if(Ht.length>0){if(Wt&&$t){const gt=Jt(Ht[0]);e.texStorage2D(o.TEXTURE_2D,se,ft,gt.width,gt.height)}for(let gt=0,N=Ht.length;gt<N;gt++)pt=Ht[gt],Wt?jt&&e.texSubImage2D(o.TEXTURE_2D,gt,0,0,dt,Rt,pt):e.texImage2D(o.TEXTURE_2D,gt,ft,dt,Rt,pt);b.generateMipmaps=!1}else if(Wt){if($t){const gt=Jt(ot);e.texStorage2D(o.TEXTURE_2D,se,ft,gt.width,gt.height)}jt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,dt,Rt,ot)}else e.texImage2D(o.TEXTURE_2D,0,ft,dt,Rt,ot);p(b)&&m(K),St.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Bt(L,b,q){if(b.image.length!==6)return;const K=at(L,b),J=b.source;e.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const Q=n.get(J);if(J.version!==Q.__version||K===!0){e.activeTexture(o.TEXTURE0+q);const St=Zt.getPrimaries(Zt.workingColorSpace),tt=b.colorSpace===Hn?null:Zt.getPrimaries(b.colorSpace),vt=b.colorSpace===Hn||St===tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const wt=b.isCompressedTexture||b.image[0].isCompressedTexture,ot=b.image[0]&&b.image[0].isDataTexture,dt=[];for(let N=0;N<6;N++)!wt&&!ot?dt[N]=_(b.image[N],!0,i.maxCubemapSize):dt[N]=ot?b.image[N].image:b.image[N],dt[N]=Ct(b,dt[N]);const Rt=dt[0],ft=s.convert(b.format,b.colorSpace),pt=s.convert(b.type),Ht=y(b.internalFormat,ft,pt,b.colorSpace),Wt=b.isVideoTexture!==!0,$t=Q.__version===void 0||K===!0,jt=J.dataReady;let se=v(b,Rt);Z(o.TEXTURE_CUBE_MAP,b);let gt;if(wt){Wt&&$t&&e.texStorage2D(o.TEXTURE_CUBE_MAP,se,Ht,Rt.width,Rt.height);for(let N=0;N<6;N++){gt=dt[N].mipmaps;for(let it=0;it<gt.length;it++){const nt=gt[it];b.format!==gn?ft!==null?Wt?jt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,nt.width,nt.height,ft,nt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,Ht,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?jt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,nt.width,nt.height,ft,pt,nt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,Ht,nt.width,nt.height,0,ft,pt,nt.data)}}}else{if(gt=b.mipmaps,Wt&&$t){gt.length>0&&se++;const N=Jt(dt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,se,Ht,N.width,N.height)}for(let N=0;N<6;N++)if(ot){Wt?jt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,dt[N].width,dt[N].height,ft,pt,dt[N].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ht,dt[N].width,dt[N].height,0,ft,pt,dt[N].data);for(let it=0;it<gt.length;it++){const _t=gt[it].image[N].image;Wt?jt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,_t.width,_t.height,ft,pt,_t.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,Ht,_t.width,_t.height,0,ft,pt,_t.data)}}else{Wt?jt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,ft,pt,dt[N]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ht,ft,pt,dt[N]);for(let it=0;it<gt.length;it++){const nt=gt[it];Wt?jt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,ft,pt,nt.image[N]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,Ht,ft,pt,nt.image[N])}}}p(b)&&m(o.TEXTURE_CUBE_MAP),Q.__version=J.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Y(L,b,q,K,J,Q){const St=s.convert(q.format,q.colorSpace),tt=s.convert(q.type),vt=y(q.internalFormat,St,tt,q.colorSpace);if(!n.get(b).__hasExternalTextures){const ot=Math.max(1,b.width>>Q),dt=Math.max(1,b.height>>Q);J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?e.texImage3D(J,Q,vt,ot,dt,b.depth,0,St,tt,null):e.texImage2D(J,Q,vt,ot,dt,0,St,tt,null)}e.bindFramebuffer(o.FRAMEBUFFER,L),Et(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,K,J,n.get(q).__webglTexture,0,kt(b)):(J===o.TEXTURE_2D||J>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,K,J,n.get(q).__webglTexture,Q),e.bindFramebuffer(o.FRAMEBUFFER,null)}function $(L,b,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let K=o.DEPTH_COMPONENT24;if(q||Et(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Gn?K=o.DEPTH_COMPONENT32F:J.type===Ki&&(K=o.DEPTH_COMPONENT24));const Q=kt(b);Et(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Q,K,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Q,K,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,K,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const K=kt(b);q&&Et(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,K,o.DEPTH24_STENCIL8,b.width,b.height):Et(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,K,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,L)}else{const K=b.textures;for(let J=0;J<K.length;J++){const Q=K[J],St=s.convert(Q.format,Q.colorSpace),tt=s.convert(Q.type),vt=y(Q.internalFormat,St,tt,Q.colorSpace),wt=kt(b);q&&Et(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,vt,b.width,b.height):Et(b)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,vt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,vt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ut(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),E(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,J=kt(b);if(b.depthTexture.format===qi)Et(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,K,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,K,0);else if(b.depthTexture.format===Ss)Et(b)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,K,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(L){const b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ut(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=o.createRenderbuffer(),$(b.__webglDepthbuffer[K],L,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),$(b.__webglDepthbuffer,L,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(L,b,q){const K=n.get(L);b!==void 0&&Y(K.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&lt(L)}function Ot(L){const b=L.texture,q=n.get(L),K=n.get(b);L.addEventListener("dispose",R);const J=L.textures,Q=L.isWebGLCubeRenderTarget===!0,St=J.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=o.createTexture()),K.__version=b.version,r.memory.textures++),Q){q.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[tt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)q.__webglFramebuffer[tt][vt]=o.createFramebuffer()}else q.__webglFramebuffer[tt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)q.__webglFramebuffer[tt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(St)for(let tt=0,vt=J.length;tt<vt;tt++){const wt=n.get(J[tt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),r.memory.textures++)}if(L.samples>0&&Et(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let tt=0;tt<J.length;tt++){const vt=J[tt];q.__webglColorRenderbuffer[tt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[tt]);const wt=s.convert(vt.format,vt.colorSpace),ot=s.convert(vt.type),dt=y(vt.internalFormat,wt,ot,vt.colorSpace,L.isXRRenderTarget===!0),Rt=kt(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,dt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,q.__webglColorRenderbuffer[tt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),$(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Q){e.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture),Z(o.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Y(q.__webglFramebuffer[tt][vt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt);else Y(q.__webglFramebuffer[tt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);p(b)&&m(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let tt=0,vt=J.length;tt<vt;tt++){const wt=J[tt],ot=n.get(wt);e.bindTexture(o.TEXTURE_2D,ot.__webglTexture),Z(o.TEXTURE_2D,wt),Y(q.__webglFramebuffer,L,wt,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,0),p(wt)&&m(o.TEXTURE_2D)}e.unbindTexture()}else{let tt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(tt,K.__webglTexture),Z(tt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Y(q.__webglFramebuffer[vt],L,b,o.COLOR_ATTACHMENT0,tt,vt);else Y(q.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,tt,0);p(b)&&m(tt),e.unbindTexture()}L.depthBuffer&&lt(L)}function Gt(L){const b=L.textures;for(let q=0,K=b.length;q<K;q++){const J=b[q];if(p(J)){const Q=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,St=n.get(J).__webglTexture;e.bindTexture(Q,St),m(Q),e.unbindTexture()}}}function V(L){if(L.samples>0&&Et(L)===!1){const b=L.textures,q=L.width,K=L.height;let J=o.COLOR_BUFFER_BIT;const Q=[],St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,tt=n.get(L),vt=b.length>1;if(vt)for(let wt=0;wt<b.length;wt++)e.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let wt=0;wt<b.length;wt++){Q.push(o.COLOR_ATTACHMENT0+wt),L.depthBuffer&&Q.push(St);const ot=tt.__ignoreDepthValues!==void 0?tt.__ignoreDepthValues:!1;if(ot===!1&&(L.depthBuffer&&(J|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&tt.__isTransmissionRenderTarget!==!0&&(J|=o.STENCIL_BUFFER_BIT)),vt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]),ot===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[St]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[St])),vt){const dt=n.get(b[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,dt,0)}o.blitFramebuffer(0,0,q,K,0,0,q,K,J,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let wt=0;wt<b.length;wt++){e.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[wt]);const ot=n.get(b[wt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,tt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,ot,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}}function kt(L){return Math.min(i.maxSamples,L.samples)}function Et(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(L){const b=r.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Ct(L,b){const q=L.colorSpace,K=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Zn&&q!==Hn&&(Zt.getTransfer(q)===ne?(K!==gn||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Jt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=x,this.setTexture2D=E,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=Nt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Et}function Sg(o,t){function e(n,i=Hn){let s;const r=Zt.getTransfer(i);if(n===Xn)return o.UNSIGNED_BYTE;if(n===Wc)return o.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return o.BYTE;if(n===Hu)return o.SHORT;if(n===Hc)return o.UNSIGNED_SHORT;if(n===Gc)return o.INT;if(n===Ki)return o.UNSIGNED_INT;if(n===Gn)return o.FLOAT;if(n===Eo)return o.HALF_FLOAT;if(n===Wu)return o.ALPHA;if(n===qu)return o.RGB;if(n===gn)return o.RGBA;if(n===Xu)return o.LUMINANCE;if(n===Yu)return o.LUMINANCE_ALPHA;if(n===qi)return o.DEPTH_COMPONENT;if(n===Ss)return o.DEPTH_STENCIL;if(n===ju)return o.RED;if(n===Xc)return o.RED_INTEGER;if(n===$u)return o.RG;if(n===Yc)return o.RG_INTEGER;if(n===jc)return o.RGBA_INTEGER;if(n===Ko||n===Zo||n===Jo||n===Qo)if(r===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===za||n===Oa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ba||n===ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ba)return r===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ha||n===Ga||n===Wa||n===qa||n===Xa||n===Ya||n===ja||n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===tl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Va)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return r===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tr||n===el||n===nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===tr)return r===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===il||n===sl||n===ol)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===tr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}class bg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Re extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new $n({vertexShader:Eg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new Kn(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Cg extends Qi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new Ag,p=e.getContextAttributes();let m=null,y=null;const v=[],w=[],R=new At;let T=null;const C=new We;C.layers.enable(1),C.viewport=new ae;const P=new We;P.layers.enable(2),P.viewport=new ae;const M=[C,P],x=new bg;x.layers.enable(1),x.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=v[Y];return $===void 0&&($=new Er,v[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=v[Y];return $===void 0&&($=new Er,v[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=v[Y];return $===void 0&&($=new Er,v[Y]=$),$.getHandSpace()};function E(Y){const $=w.indexOf(Y.inputSource);if($===-1)return;const ut=v[$];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,c||r),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",U);for(let Y=0;Y<v.length;Y++){const $=w[Y];$!==null&&(w[Y]=null,v[Y].disconnect($))}D=null,O=null,_.reset(),t.setRenderTarget(m),f=null,h=null,d=null,i=null,y=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",F),i.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mi(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,ut=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=p.stencil?Ss:qi,ut=p.stencil?Ts:Ki);const Nt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Nt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new mi(h.textureWidth,h.textureHeight,{format:gn,type:Xn,depthTexture:new dh(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const Ot=t.properties.get(y);Ot.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(Y){for(let $=0;$<Y.removed.length;$++){const ut=Y.removed[$],lt=w.indexOf(ut);lt>=0&&(w[lt]=null,v[lt].disconnect(ut))}for(let $=0;$<Y.added.length;$++){const ut=Y.added[$];let lt=w.indexOf(ut);if(lt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=w.length){w.push(ut),lt=Ot;break}else if(w[Ot]===null){w[Ot]=ut,lt=Ot;break}if(lt===-1)break}const Nt=v[lt];Nt&&Nt.connect(ut)}}const z=new I,X=new I;function B(Y,$,ut){z.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);const lt=z.distanceTo(X),Nt=$.projectionMatrix.elements,Ot=ut.projectionMatrix.elements,Gt=Nt[14]/(Nt[10]-1),V=Nt[14]/(Nt[10]+1),kt=(Nt[9]+1)/Nt[5],Et=(Nt[9]-1)/Nt[5],ge=(Nt[8]-1)/Nt[0],Ct=(Ot[8]+1)/Ot[0],Jt=Gt*ge,L=Gt*Ct,b=lt/(-ge+Ct),q=b*-ge;$.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(q),Y.translateZ(b),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const K=Gt+b,J=V+b,Q=Jt-q,St=L+(lt-q),tt=kt*V/J*K,vt=Et*V/J*K;Y.projectionMatrix.makePerspective(Q,St,tt,vt,K,J),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function j(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),x.near=P.near=C.near=Y.near,x.far=P.far=C.far=Y.far,(D!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,O=x.far,C.near=D,C.far=O,P.near=D,P.far=O,C.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const $=Y.parent,ut=x.cameras;j(x,$);for(let lt=0;lt<ut.length;lt++)j(ut[lt],$);ut.length===2?B(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),Z(Y,x,$)};function Z(Y,$,ut){ut===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let at=null;function et(Y,$){if(u=$.getViewerPose(c||r),g=$,u!==null){const ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;ut.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Ot=0;Ot<ut.length;Ot++){const Gt=ut[Ot];let V=null;if(f!==null)V=f.getViewport(Gt);else{const Et=d.getViewSubImage(h,Gt);V=Et.viewport,Ot===0&&(t.setRenderTargetTextures(y,Et.colorTexture,h.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(y))}let kt=M[Ot];kt===void 0&&(kt=new We,kt.layers.enable(Ot),kt.viewport=new ae,M[Ot]=kt),kt.matrix.fromArray(Gt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Gt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(V.x,V.y,V.width,V.height),Ot===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(kt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Ot=d.getDepthInformation(ut[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,i.renderState)}}for(let ut=0;ut<v.length;ut++){const lt=w[ut],Nt=v[ut];lt!==null&&Nt!==void 0&&Nt.update(lt,$,c||r)}_.render(t,x),at&&at(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Bt=new hh;Bt.setAnimationLoop(et),this.setAnimationLoop=function(Y){at=Y},this.dispose=function(){}}}const ri=new Ke,Rg=new ie;function Pg(o,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ah(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ue&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ue&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,w=y.envMapRotation;if(v&&(p.envMap.value=v,ri.copy(w),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(ri)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const R=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*R,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ue&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lg(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const w=v.program;n.uniformBlockBinding(y,w)}function c(y,v){let w=i[y.id];w===void 0&&(g(y),w=u(y),i[y.id]=w,y.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(y,R);const T=t.render.frame;s[y.id]!==T&&(h(y),s[y.id]=T)}function u(y){const v=d();y.__bindingPointIndex=v;const w=o.createBuffer(),R=y.__size,T=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,R,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,w),w}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=i[y.id],w=y.uniforms,R=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let T=0,C=w.length;T<C;T++){const P=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,x=P.length;M<x;M++){const D=P[M];if(f(D,T,M,R)===!0){const O=D.__offset,E=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let U=0;U<E.length;U++){const z=E[U],X=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,O+F,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,O,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,v,w,R){const T=y.value,C=v+"_"+w;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const v=y.uniforms;let w=0;const R=16;for(let C=0,P=v.length;C<P;C++){const M=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,D=M.length;x<D;x++){const O=M[x],E=Array.isArray(O.value)?O.value:[O.value];for(let F=0,U=E.length;F<U;F++){const z=E[F],X=_(z),B=w%R;B!==0&&R-B<X.boundary&&(w+=R-B),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=X.storage}}}const T=w%R;return T>0&&(w+=R-T),y.__size=w,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const y in i)o.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Ig{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const v=this;let w=!1,R=0,T=0,C=null,P=-1,M=null;const x=new ae,D=new ae;let O=null;const E=new xt(0);let F=0,U=e.width,z=e.height,X=1,B=null,j=null;const Z=new ae(0,0,U,z),at=new ae(0,0,U,z);let et=!1;const Bt=new da;let Y=!1,$=!1;const ut=new ie,lt=new At,Nt=new I,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Gt(){return C===null?X:1}let V=n;function kt(A,k){const G=e.getContext(A,k);return G!==null?G:null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),V===null){const k="webgl2";if(V=kt(k,A),V===null)throw kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Et,ge,Ct,Jt,L,b,q,K,J,Q,St,tt,vt,wt,ot,dt,Rt,ft,pt,Ht,Wt,$t,jt,se;function gt(){Et=new km(V),Et.init(),ge=new Dm(V,Et,t),$t=new Sg(V,Et),Ct=new xg(V),Jt=new Gm(V),L=new rg,b=new Mg(V,Et,Ct,L,ge,$t,Jt),q=new Fm(v),K=new Bm(v),J=new jd(V),jt=new Im(V,J),Q=new Vm(V,J,Jt,jt),St=new qm(V,Q,J,Jt),pt=new Wm(V,ge,b),dt=new Um(L),tt=new og(v,q,K,Et,ge,jt,dt),vt=new Pg(v,L),wt=new lg,ot=new pg(Et),ft=new Lm(v,q,K,Ct,St,h,l),Rt=new yg(v,St,ge),se=new Lg(V,Jt,ge,Ct),Ht=new Nm(V,Et,Jt),Wt=new Hm(V,Et,Jt),Jt.programs=tt.programs,v.capabilities=ge,v.extensions=Et,v.properties=L,v.renderLists=wt,v.shadowMap=Rt,v.state=Ct,v.info=Jt}gt();const N=new Cg(v,V);this.xr=N,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(U,z,!1))},this.getSize=function(A){return A.set(U,z)},this.setSize=function(A,k,G=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,z=k,e.width=Math.floor(A*X),e.height=Math.floor(k*X),G===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(U*X,z*X).floor()},this.setDrawingBufferSize=function(A,k,G){U=A,z=k,X=G,e.width=Math.floor(A*G),e.height=Math.floor(k*G),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,k,G,W){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,k,G,W),Ct.viewport(x.copy(Z).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,k,G,W){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,k,G,W),Ct.scissor(D.copy(at).multiplyScalar(X).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Ct.setScissorTest(et=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(A=!0,k=!0,G=!0){let W=0;if(A){let H=!1;if(C!==null){const ct=C.texture.format;H=ct===jc||ct===Yc||ct===Xc}if(H){const ct=C.texture.type,mt=ct===Xn||ct===Ki||ct===Hc||ct===Ts||ct===Wc||ct===qc,Mt=ft.getClearColor(),Tt=ft.getClearAlpha(),Lt=Mt.r,Pt=Mt.g,It=Mt.b;mt?(f[0]=Lt,f[1]=Pt,f[2]=It,f[3]=Tt,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=Lt,g[1]=Pt,g[2]=It,g[3]=Tt,V.clearBufferiv(V.COLOR,0,g))}else W|=V.COLOR_BUFFER_BIT}k&&(W|=V.DEPTH_BUFFER_BIT),G&&(W|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),wt.dispose(),ot.dispose(),L.dispose(),q.dispose(),K.dispose(),St.dispose(),jt.dispose(),se.dispose(),tt.dispose(),N.dispose(),N.removeEventListener("sessionstart",ln),N.removeEventListener("sessionend",cn),Qn.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=Jt.autoReset,k=Rt.enabled,G=Rt.autoUpdate,W=Rt.needsUpdate,H=Rt.type;gt(),Jt.autoReset=A,Rt.enabled=k,Rt.autoUpdate=G,Rt.needsUpdate=W,Rt.type=H}function _t(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){const k=A.target;k.removeEventListener("dispose",yt),Qt(k)}function Qt(A){oe(A),L.remove(A)}function oe(A){const k=L.get(A).programs;k!==void 0&&(k.forEach(function(G){tt.releaseProgram(G)}),A.isShaderMaterial&&tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,G,W,H,ct){k===null&&(k=Ot);const mt=H.isMesh&&H.matrixWorld.determinant()<0,Mt=Qh(A,k,G,W,H);Ct.setMaterial(W,mt);let Tt=G.index,Lt=1;if(W.wireframe===!0){if(Tt=Q.getWireframeAttribute(G),Tt===void 0)return;Lt=2}const Pt=G.drawRange,It=G.attributes.position;let ue=Pt.start*Lt,ke=(Pt.start+Pt.count)*Lt;ct!==null&&(ue=Math.max(ue,ct.start*Lt),ke=Math.min(ke,(ct.start+ct.count)*Lt)),Tt!==null?(ue=Math.max(ue,0),ke=Math.min(ke,Tt.count)):It!=null&&(ue=Math.max(ue,0),ke=Math.min(ke,It.count));const Se=ke-ue;if(Se<0||Se===1/0)return;jt.setup(H,W,Mt,G,Tt);let yn,ce=Ht;if(Tt!==null&&(yn=J.get(Tt),ce=Wt,ce.setIndex(yn)),H.isMesh)W.wireframe===!0?(Ct.setLineWidth(W.wireframeLinewidth*Gt()),ce.setMode(V.LINES)):ce.setMode(V.TRIANGLES);else if(H.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),Ct.setLineWidth(Dt*Gt()),H.isLineSegments?ce.setMode(V.LINES):H.isLineLoop?ce.setMode(V.LINE_LOOP):ce.setMode(V.LINE_STRIP)}else H.isPoints?ce.setMode(V.POINTS):H.isSprite&&ce.setMode(V.TRIANGLES);if(H.isBatchedMesh)ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ce.renderInstances(ue,Se,H.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,qo=Math.min(G.instanceCount,Dt);ce.renderInstances(ue,Se,qo)}else ce.render(ue,Se)};function le(A,k,G){A.transparent===!0&&A.side===mn&&A.forceSinglePass===!1?(A.side=Ue,A.needsUpdate=!0,Ls(A,k,G),A.side=jn,A.needsUpdate=!0,Ls(A,k,G),A.side=mn):Ls(A,k,G)}this.compile=function(A,k,G=null){G===null&&(G=A),p=ot.get(G),p.init(),y.push(p),G.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==G&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const W=new Set;return A.traverse(function(H){const ct=H.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const Mt=ct[mt];le(Mt,G,H),W.add(Mt)}else le(ct,G,H),W.add(ct)}),y.pop(),p=null,W},this.compileAsync=function(A,k,G=null){const W=this.compile(A,k,G);return new Promise(H=>{function ct(){if(W.forEach(function(mt){L.get(mt).currentProgram.isReady()&&W.delete(mt)}),W.size===0){H(A);return}setTimeout(ct,10)}Et.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let we=null;function te(A){we&&we(A)}function ln(){Qn.stop()}function cn(){Qn.start()}const Qn=new hh;Qn.setAnimationLoop(te),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(A){we=A,N.setAnimationLoop(A),A===null?Qn.stop():Qn.start()},N.addEventListener("sessionstart",ln),N.addEventListener("sessionend",cn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,C),p=ot.get(A,y.length),p.init(),y.push(p),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Bt.setFromProjectionMatrix(ut),$=this.localClippingEnabled,Y=dt.init(this.clippingPlanes,$),_=wt.get(A,m.length),_.init(),m.push(_),wa(A,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(B,j),this.info.render.frame++,Y===!0&&dt.beginShadows();const G=p.state.shadowsArray;if(Rt.render(G,A,k),Y===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1)&&ft.render(_,A),p.setupLights(v._useLegacyLights),k.isArrayCamera){const W=k.cameras;for(let H=0,ct=W.length;H<ct;H++){const mt=W[H];Ea(_,A,mt,mt.viewport)}}else Ea(_,A,k);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,k),jt.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function wa(A,k,G,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){W&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const mt=St.update(A),Mt=A.material;Mt.visible&&_.push(A,mt,Mt,G,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){const mt=St.update(A),Mt=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Nt.copy(mt.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Mt)){const Tt=mt.groups;for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++){const It=Tt[Lt],ue=Mt[It.materialIndex];ue&&ue.visible&&_.push(A,mt,ue,G,Nt.z,It)}}else Mt.visible&&_.push(A,mt,Mt,G,Nt.z,null)}}const ct=A.children;for(let mt=0,Mt=ct.length;mt<Mt;mt++)wa(ct[mt],k,G,W)}function Ea(A,k,G,W){const H=A.opaque,ct=A.transmissive,mt=A.transparent;p.setupLightsView(G),Y===!0&&dt.setGlobalState(v.clippingPlanes,G),ct.length>0&&Jh(H,ct,k,G),W&&Ct.viewport(x.copy(W)),H.length>0&&Ps(H,k,G),ct.length>0&&Ps(ct,k,G),mt.length>0&&Ps(mt,k,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Jh(A,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new mi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Eo:Xn,minFilter:pi,samples:4,stencilBuffer:s});const Lt=L.get(p.state.transmissionRenderTarget);Lt.__isTransmissionRenderTarget=!0}const ct=p.state.transmissionRenderTarget;v.getDrawingBufferSize(lt),ct.setSize(lt.x,lt.y);const mt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(E),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Mt=v.toneMapping;v.toneMapping=qn,Ps(A,G,W),b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct);let Tt=!1;for(let Lt=0,Pt=k.length;Lt<Pt;Lt++){const It=k[Lt],ue=It.object,ke=It.geometry,Se=It.material,yn=It.group;if(Se.side===mn&&ue.layers.test(W.layers)){const ce=Se.side;Se.side=Ue,Se.needsUpdate=!0,Ta(ue,G,W,ke,Se,yn),Se.side=ce,Se.needsUpdate=!0,Tt=!0}}Tt===!0&&(b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct)),v.setRenderTarget(mt),v.setClearColor(E,F),v.toneMapping=Mt}function Ps(A,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ct=A.length;H<ct;H++){const mt=A[H],Mt=mt.object,Tt=mt.geometry,Lt=W===null?mt.material:W,Pt=mt.group;Mt.layers.test(G.layers)&&Ta(Mt,k,G,Tt,Lt,Pt)}}function Ta(A,k,G,W,H,ct){A.onBeforeRender(v,k,G,W,H,ct),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,k,G,W,A,ct),H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=Ue,H.needsUpdate=!0,v.renderBufferDirect(G,k,W,H,A,ct),H.side=jn,H.needsUpdate=!0,v.renderBufferDirect(G,k,W,H,A,ct),H.side=mn):v.renderBufferDirect(G,k,W,H,A,ct),A.onAfterRender(v,k,G,W,H,ct)}function Ls(A,k,G){k.isScene!==!0&&(k=Ot);const W=L.get(A),H=p.state.lights,ct=p.state.shadowsArray,mt=H.state.version,Mt=tt.getParameters(A,H.state,ct,k,G),Tt=tt.getProgramCacheKey(Mt);let Lt=W.programs;W.environment=A.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(A.isMeshStandardMaterial?K:q).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",yt),Lt=new Map,W.programs=Lt);let Pt=Lt.get(Tt);if(Pt!==void 0){if(W.currentProgram===Pt&&W.lightsStateVersion===mt)return Ca(A,Mt),Pt}else Mt.uniforms=tt.getUniforms(A),A.onBuild(G,Mt,v),A.onBeforeCompile(Mt,v),Pt=tt.acquireProgram(Mt,Tt),Lt.set(Tt,Pt),W.uniforms=Mt.uniforms;const It=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=dt.uniform),Ca(A,Mt),W.needsLights=eu(A),W.lightsStateVersion=mt,W.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Pt,W.uniformsList=null,Pt}function Aa(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=yo.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Ca(A,k){const G=L.get(A);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Qh(A,k,G,W,H){k.isScene!==!0&&(k=Ot),b.resetTextureUnits();const ct=k.fog,mt=W.isMeshStandardMaterial?k.environment:null,Mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zn,Tt=(W.isMeshStandardMaterial?K:q).get(W.envMap||mt),Lt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,ke=!!G.morphAttributes.color;let Se=qn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);const yn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=yn!==void 0?yn.length:0,Dt=L.get(W),qo=p.state.lights;if(Y===!0&&($===!0||A!==M)){const Xe=A===M&&W.id===P;dt.setState(W,A,Xe)}let re=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==qo.state.version||Dt.outputColorSpace!==Mt||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==Tt||W.fog===!0&&Dt.fog!==ct||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==dt.numPlanes||Dt.numIntersection!==dt.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Pt||Dt.morphTargets!==It||Dt.morphNormals!==ue||Dt.morphColors!==ke||Dt.toneMapping!==Se||Dt.morphTargetsCount!==ce)&&(re=!0):(re=!0,Dt.__version=W.version);let ti=Dt.currentProgram;re===!0&&(ti=Ls(W,k,H));let Ra=!1,ns=!1,Xo=!1;const Ee=ti.getUniforms(),Nn=Dt.uniforms;if(Ct.useProgram(ti.program)&&(Ra=!0,ns=!0,Xo=!0),W.id!==P&&(P=W.id,ns=!0),Ra||M!==A){Ee.setValue(V,"projectionMatrix",A.projectionMatrix),Ee.setValue(V,"viewMatrix",A.matrixWorldInverse);const Xe=Ee.map.cameraPosition;Xe!==void 0&&Xe.setValue(V,Nt.setFromMatrixPosition(A.matrixWorld)),ge.logarithmicDepthBuffer&&Ee.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ee.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ns=!0,Xo=!0)}if(H.isSkinnedMesh){Ee.setOptional(V,H,"bindMatrix"),Ee.setOptional(V,H,"bindMatrixInverse");const Xe=H.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ee.setValue(V,"boneTexture",Xe.boneTexture,b))}H.isBatchedMesh&&(Ee.setOptional(V,H,"batchingTexture"),Ee.setValue(V,"batchingTexture",H._matricesTexture,b));const Yo=G.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&pt.update(H,G,ti),(ns||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,Ee.setValue(V,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=Tt,Nn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Nn.envMapIntensity.value=k.environmentIntensity),ns&&(Ee.setValue(V,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&tu(Nn,Xo),ct&&W.fog===!0&&vt.refreshFogUniforms(Nn,ct),vt.refreshMaterialUniforms(Nn,W,X,z,p.state.transmissionRenderTarget),yo.upload(V,Aa(Dt),Nn,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yo.upload(V,Aa(Dt),Nn,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ee.setValue(V,"center",H.center),Ee.setValue(V,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(V,"normalMatrix",H.normalMatrix),Ee.setValue(V,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xe=W.uniformsGroups;for(let jo=0,nu=Xe.length;jo<nu;jo++){const Pa=Xe[jo];se.update(Pa,ti),se.bind(Pa,ti)}}return ti}function tu(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function eu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,G){L.get(A.texture).__webglTexture=k,L.get(A.depthTexture).__webglTexture=G;const W=L.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const G=L.get(A);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,G=0){C=A,R=k,T=G;let W=!0,H=null,ct=!1,mt=!1;if(A){const Tt=L.get(A);Tt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(V.FRAMEBUFFER,null),W=!1):Tt.__webglFramebuffer===void 0?b.setupRenderTarget(A):Tt.__hasExternalTextures&&b.rebindTextures(A,L.get(A.texture).__webglTexture,L.get(A.depthTexture).__webglTexture);const Lt=A.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(mt=!0);const Pt=L.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pt[k])?H=Pt[k][G]:H=Pt[k],ct=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?H=L.get(A).__webglMultisampledFramebuffer:Array.isArray(Pt)?H=Pt[G]:H=Pt,x.copy(A.viewport),D.copy(A.scissor),O=A.scissorTest}else x.copy(Z).multiplyScalar(X).floor(),D.copy(at).multiplyScalar(X).floor(),O=et;if(Ct.bindFramebuffer(V.FRAMEBUFFER,H)&&W&&Ct.drawBuffers(A,H),Ct.viewport(x),Ct.scissor(D),Ct.setScissorTest(O),ct){const Tt=L.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,G)}else if(mt){const Tt=L.get(A.texture),Lt=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tt.__webglTexture,G||0,Lt)}P=-1},this.readRenderTargetPixels=function(A,k,G,W,H,ct,mt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=L.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){Ct.bindFramebuffer(V.FRAMEBUFFER,Mt);try{const Tt=A.texture,Lt=Tt.format,Pt=Tt.type;if(Lt!==gn&&$t.convert(Lt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Pt===Eo&&(Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float"));if(Pt!==Xn&&$t.convert(Pt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&Pt!==Gn&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&G>=0&&G<=A.height-H&&V.readPixels(k,G,W,H,$t.convert(Lt),$t.convert(Pt),ct)}finally{const Tt=C!==null?L.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(V.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(A,k,G=0){const W=Math.pow(2,-G),H=Math.floor(k.image.width*W),ct=Math.floor(k.image.height*W);b.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,G,0,0,A.x,A.y,H,ct),Ct.unbindTexture()},this.copyTextureToTexture=function(A,k,G,W=0){const H=k.image.width,ct=k.image.height,mt=$t.convert(G.format),Mt=$t.convert(G.type);b.setTexture2D(G,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,W,A.x,A.y,H,ct,mt,Mt,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,W,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,mt,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,W,A.x,A.y,mt,Mt,k.image),W===0&&G.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(A,k,G,W,H=0){const ct=Math.round(A.max.x-A.min.x),mt=Math.round(A.max.y-A.min.y),Mt=A.max.z-A.min.z+1,Tt=$t.convert(W.format),Lt=$t.convert(W.type);let Pt;if(W.isData3DTexture)b.setTexture3D(W,0),Pt=V.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Pt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const It=V.getParameter(V.UNPACK_ROW_LENGTH),ue=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ke=V.getParameter(V.UNPACK_SKIP_PIXELS),Se=V.getParameter(V.UNPACK_SKIP_ROWS),yn=V.getParameter(V.UNPACK_SKIP_IMAGES),ce=G.isCompressedTexture?G.mipmaps[H]:G.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ce.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ce.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,A.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,A.min.z),G.isDataTexture||G.isData3DTexture?V.texSubImage3D(Pt,H,k.x,k.y,k.z,ct,mt,Mt,Tt,Lt,ce.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Pt,H,k.x,k.y,k.z,ct,mt,Mt,Tt,ce.data):V.texSubImage3D(Pt,H,k.x,k.y,k.z,ct,mt,Mt,Tt,Lt,ce),V.pixelStorei(V.UNPACK_ROW_LENGTH,It),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ke),V.pixelStorei(V.UNPACK_SKIP_ROWS,Se),V.pixelStorei(V.UNPACK_SKIP_IMAGES,yn),H===0&&W.generateMipmaps&&V.generateMipmap(Pt),Ct.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,Ct.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ha?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Uo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Oo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new Oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ng extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Qc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new I;class Lo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ea extends gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Di;const as=new I,Ui=new I,Fi=new I,zi=new At,ls=new At,vh=new ie,to=new I,cs=new I,eo=new I,Zl=new At,Tr=new At,Jl=new At;class Ql extends ye{constructor(t=new ea){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dg(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Lo(n,3,0,!1)),Di.setAttribute("uv",new Lo(n,2,3,!1))}this.geometry=Di,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),vh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Fi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;no(to.set(-.5,-.5,0),Fi,r,Ui,i,s),no(cs.set(.5,-.5,0),Fi,r,Ui,i,s),no(eo.set(.5,.5,0),Fi,r,Ui,i,s),Zl.set(0,0),Tr.set(1,0),Jl.set(1,1);let a=t.ray.intersectTriangle(to,cs,eo,!1,as);if(a===null&&(no(cs.set(-.5,.5,0),Fi,r,Ui,i,s),Tr.set(0,1),a=t.ray.intersectTriangle(to,eo,cs,!1,as),a===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:on.getInterpolation(as,to,cs,eo,Zl,Tr,Jl,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function no(o,t,e,n,i,s){zi.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(ls.x=s*zi.x-i*zi.y,ls.y=i*zi.x+s*zi.y):ls.copy(zi),o.copy(t),o.x+=ls.x,o.y+=ls.y,o.applyMatrix4(vh)}class pa extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new ie,na=new nh,io=new Fo,so=new I;class yh extends ye{constructor(t=new Le,e=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,t.ray.intersectsSphere(io)===!1)return;tc.copy(i).invert(),na.copy(t.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);so.fromBufferAttribute(d,p),ec(so,p,l,i,t,e,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,_=f;g<_;g++)so.fromBufferAttribute(d,g),ec(so,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(o,t,e,n,i,s,r){const a=na.distanceSqToPoint(o);if(a<e){const l=new I;na.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:r})}}class nc extends Fe{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn extends Le{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],p=n/2;let m=0;y(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2));function y(){const w=new I,R=new I;let T=0;const C=(e-t)/n;for(let P=0;P<=s;P++){const M=[],x=P/s,D=x*(e-t)+t;for(let O=0;O<=i;O++){const E=O/i,F=E*l+a,U=Math.sin(F),z=Math.cos(F);R.x=D*U,R.y=-x*n+p,R.z=D*z,d.push(R.x,R.y,R.z),w.set(U,C,z).normalize(),h.push(w.x,w.y,w.z),f.push(E,1-x),M.push(g++)}_.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const x=_[M][P],D=_[M+1][P],O=_[M+1][P+1],E=_[M][P+1];u.push(x,D,E),u.push(D,O,E),T+=6}c.addGroup(m,T,0),m+=T}function v(w){const R=g,T=new At,C=new I;let P=0;const M=w===!0?t:e,x=w===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,p*x,0),h.push(0,x,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=i;O++){const F=O/i*l+a,U=Math.cos(F),z=Math.sin(F);C.x=M*z,C.y=p*x,C.z=M*U,d.push(C.x,C.y,C.z),h.push(0,x,0),T.x=U*.5+.5,T.y=z*.5*x+.5,f.push(T.x,T.y),g++}for(let O=0;O<i;O++){const E=R+O,F=D+O;w===!0?u.push(F,F+1,E):u.push(F+1,F,E),P+=3}c.addGroup(m,P,w===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cs extends Jn{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Cs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ve extends Le{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],d=new I,h=new I,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let w=0;m===0&&r===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(i+T*s)*Math.sin(r+v*a),d.y=t*Math.cos(r+v*a),d.z=t*Math.sin(i+T*s)*Math.sin(r+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(T+w,1-v),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=u[m][y+1],w=u[m][y],R=u[m+1][y],T=u[m+1][y+1];(m!==0||r>0)&&f.push(v,w,T),(m!==n-1||l<Math.PI)&&f.push(w,R,T)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class he extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ma extends he{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Bo extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class xh extends Bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ar=new ie,ic=new I,sc=new I;class Mh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Ar.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oc=new ie,hs=new I,Cr=new I;class Ug extends Mh{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(hs),Cr.copy(n.position),Cr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cr),n.updateMatrixWorld(),i.makeTranslation(-hs.x,-hs.y,-hs.z),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class rc extends Bo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fg extends Mh{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zg extends Bo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Og{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ac(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ac();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ac(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);class rn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new rn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],_=i[0],p=i[1],m=i[2],y=i[3],v=i[4],w=i[5],R=i[6],T=i[7],C=i[8];return s[0]=r*_+a*y+l*R,s[1]=r*p+a*v+l*T,s[2]=r*m+a*w+l*C,s[3]=c*_+u*y+d*R,s[4]=c*p+u*v+d*T,s[5]=c*m+u*w+d*C,s[6]=h*_+f*y+g*R,s[7]=h*p+f*v+g*T,s[8]=h*m+f*w+g*C,e}scale(t,e){e===void 0&&(e=new rn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(r=c-l,s[r+i*r]===0){for(a=r+1;a<c;a++)if(s[r+i*a]!==0){u=d;do h=d-u,s[h+i*r]+=s[h+i*a];while(--u);break}}if(s[r+i*r]!==0)for(a=r+1;a<c;a++){const f=s[r+i*a]/s[r+i*r];u=d;do h=d-u,s[h+i*a]=h<=r?0:s[h+i*a]-s[h+i*r]*f;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new rn);const e=3,n=6,i=Bg;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(s=l-a,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const h=i[s+n*r]/i[s+n*s];c=u;do d=u-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*h;while(--c)}}while(--a);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,l=i+i,c=e*r,u=e*a,d=e*l,h=n*a,f=n*l,g=i*l,_=s*r,p=s*a,m=s*l,y=this.elements;return y[3*0+0]=1-(h+g),y[3*0+1]=u-m,y[3*0+2]=d+p,y[3*1+0]=u+m,y[3*1+1]=1-(c+g),y[3*1+2]=f-_,y[3*2+0]=d-p,y[3*2+1]=f+_,y[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new rn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Bg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=kg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Vg;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(lc),lc.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const kg=new S,Vg=new S,lc=new S;class qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,cc),c=cc),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=hc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=hc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(g<0||f>g)}}const cc=new S,hc=[new S,new S,new S,new S,new S,new S,new S,new S];class uc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class bh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class de{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Hg,i=Gg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new de);const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+r*a+i*c-s*l,e.y=i*u+r*l+s*a-n*c,e.z=s*u+r*c+n*l-i*a,e.w=r*u-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new de);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new de),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*s-l*i,d=c*i+l*n-r*s,h=c*s+r*i-a*n,f=-r*n-a*i-l*s;return e.x=u*c+f*-r+d*-l-h*-a,e.y=d*c+f*-a+h*-r-u*-l,e.z=h*c+f*-l+u*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*a+l*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a-l*c*u):i==="YXZ"?(this.x=l*r*a+s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a+l*c*u):i==="ZXY"?(this.x=l*r*a-s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a-l*c*u):i==="ZYX"?(this.x=l*r*a-s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a+l*c*u):i==="YZX"?(this.x=l*r*a+s*c*u,this.y=s*c*a+l*r*u,this.z=s*r*u-l*c*a,this.w=s*r*a-l*c*u):i==="XZY"&&(this.x=l*r*a-s*c*u,this.y=s*c*a-l*r*u,this.z=s*r*u+l*c*a,this.w=s*r*a+l*c*u),this}clone(){return new de(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new de);const i=this.x,s=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,g,_,p;return f=i*l+s*c+r*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),_=Math.sin((1-e)*h)/g,p=Math.sin(e*h)/g):(_=1-e,p=e),n.x=_*i+p*l,n.y=_*s+p*c,n.z=_*r+p*u,n.w=_*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new de);const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+r*u-a*c),i.y+=h*(r*d+a*l-s*u),i.z+=h*(a*d+s*c-r*l),i.w+=h*(-s*l-r*c-a*u),i}}const Hg=new S,Gg=new S,Wg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class st{constructor(t){t===void 0&&(t={}),this.id=st.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}st.idCounter=0;st.types=Wg;class Yt{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new de,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(dc),dc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const dc=new de;class Yi extends st{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:st.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Yi.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new S,r=new S;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,l,c){const u=new S;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(r);_>h&&(h=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new S;p.copy(_),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,r,a,l){const c=new S,u=new S,d=new S,h=new S,f=new S,g=new S;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],c);const y=p.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(c))}else{const m=a?a.length:p.faces.length;for(let y=0;y<m;y++){const v=a?a[y]:y;c.copy(p.faceNormals[v]),n.vmult(c,c);const w=p.testSepAxis(c,t,e,n,i,s);if(w===!1)return!1;w<_&&(_=w,r.copy(c))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],u);const y=p.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(u))}else{const m=l?l.length:t.faces.length;for(let y=0;y<m;y++){const v=l?l[y]:y;u.copy(t.faceNormals[v]),s.vmult(u,u);const w=p.testSepAxis(u,t,e,n,i,s);if(w===!1)return!1;w<_&&(_=w,r.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],h);for(let y=0;y!==t.uniqueEdges.length;y++)if(s.vmult(t.uniqueEdges[y],f),h.cross(f,g),!g.almostZero()){g.normalize();const v=p.testSepAxis(g,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;Yi.project(a,t,n,i,Rr),Yi.project(e,t,s,r,Pr);const l=Rr[0],c=Rr[1],u=Pr[0],d=Pr[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const l=new S,c=new S,u=new S,d=new S,h=new S,f=new S,g=new S,_=new S,p=this,m=[],y=i,v=m;let w=-1,R=Number.MAX_VALUE;for(let x=0;x<p.faces.length;x++){l.copy(p.faceNormals[x]),n.vmult(l,l);const D=l.dot(t);D<R&&(R=D,w=x)}if(w<0)return;const T=p.faces[w];T.connectedFaces=[];for(let x=0;x<p.faces.length;x++)for(let D=0;D<p.faces[x].length;D++)T.indexOf(p.faces[x][D])!==-1&&x!==w&&T.connectedFaces.indexOf(x)===-1&&T.connectedFaces.push(x);const C=T.length;for(let x=0;x<C;x++){const D=p.vertices[T[x]],O=p.vertices[T[(x+1)%C]];D.vsub(O,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(D),n.vmult(f,f),e.vadd(f,f);const E=T.connectedFaces[x];g.copy(this.faceNormals[E]);const F=this.getPlaneConstantOfFace(E);_.copy(g),n.vmult(_,_);const U=F-_.dot(e);for(this.clipFaceAgainstPlane(y,v,_,U);y.length;)y.shift();for(;v.length;)y.push(v.shift())}g.copy(this.faceNormals[w]);const P=this.getPlaneConstantOfFace(w);_.copy(g),n.vmult(_,_);const M=P-_.dot(e);for(let x=0;x<y.length;x++){let D=_.dot(y[x])+M;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=r){const O=y[x];if(D<=1e-6){const E={point:O,normal:_,depth:D};a.push(E)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<a;u++){if(c=t[u],r=n.dot(c)+i,s<0)if(r<0){const d=new S;d.copy(c),e.push(d)}else{const d=new S;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new S;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,l,c,u,d,h=new S;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],c=new S;t.vsub(l,c);const u=a.dot(c),d=new S;s.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,a=qg;let l=0,c=0;const u=Xg,d=t.vertices;u.setZero(),Yt.vectorToLocalFrame(n,i,e,a),Yt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Rr=[],Pr=[];new S;const qg=new S,Xg=new S;class ko extends st{constructor(t){super({type:st.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Yi({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),ko.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)kn.set(s[r][0],s[r][1],s[r][2]),e.vmult(kn,kn),t.vadd(kn,kn),n(kn.x,kn.y,kn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;hn[0].set(s.x,s.y,s.z),hn[1].set(-s.x,s.y,s.z),hn[2].set(-s.x,-s.y,s.z),hn[3].set(-s.x,-s.y,-s.z),hn[4].set(s.x,-s.y,-s.z),hn[5].set(s.x,s.y,-s.z),hn[6].set(-s.x,s.y,-s.z),hn[7].set(s.x,-s.y,s.z);const r=hn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=hn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const kn=new S,hn=[new S,new S,new S,new S,new S,new S,new S,new S],ga={DYNAMIC:1,STATIC:2,KINEMATIC:4},_a={AWAKE:0,SLEEPY:1,SLEEPING:2};class ht extends bh{constructor(t){t===void 0&&(t={}),super(),this.id=ht.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ht.STATIC:ht.DYNAMIC,typeof t.type==typeof ht.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ht.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new de,this.initQuaternion=new de,this.previousQuaternion=new de,this.interpolatedQuaternion=new de,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new rn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new rn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ht.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ht.SLEEPING&&this.dispatchEvent(ht.wakeupEvent)}sleep(){this.sleepState=ht.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ht.AWAKE&&n<i?(this.sleepState=ht.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ht.sleepyEvent)):e===ht.SLEEPY&&n>i?this.wakeUp():e===ht.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ht.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ht.SLEEPING||this.type===ht.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new de;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Yg,r=jg,a=this.quaternion,l=this.aabb,c=$g;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Kg,i=Zg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==ht.DYNAMIC)return;this.sleepState===ht.SLEEPING&&this.wakeUp();const n=Jg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==ht.DYNAMIC)return;const n=Qg,i=t_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ht.DYNAMIC&&(this.sleepState===ht.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==ht.DYNAMIC)return;this.sleepState===ht.SLEEPING&&this.wakeUp();const n=e,i=e_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=n_;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==ht.DYNAMIC)return;const n=i_,i=s_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=o_;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ko.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ht.DYNAMIC||this.type===ht.KINEMATIC)||this.sleepState===ht.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const g=d.elements,_=this.angularFactor,p=l.x*_.x,m=l.y*_.y,y=l.z*_.z;s.x+=t*(g[0]*p+g[1]*m+g[2]*y),s.y+=t*(g[3]*p+g[4]*m+g[5]*y),s.z+=t*(g[6]*p+g[7]*m+g[8]*y),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ht.idCounter=0;ht.COLLIDE_EVENT_NAME="collide";ht.DYNAMIC=ga.DYNAMIC;ht.STATIC=ga.STATIC;ht.KINEMATIC=ga.KINEMATIC;ht.AWAKE=_a.AWAKE;ht.SLEEPY=_a.SLEEPY;ht.SLEEPING=_a.SLEEPING;ht.wakeupEvent={type:"wakeup"};ht.sleepyEvent={type:"sleepy"};ht.sleepEvent={type:"sleep"};const Yg=new S,jg=new de,$g=new qe,Kg=new rn,Zg=new rn;new rn;const Jg=new S,Qg=new S,t_=new S,e_=new S,n_=new S,i_=new S,s_=new S,o_=new S;class wh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ht.STATIC||t.sleepState===ht.SLEEPING)&&(e.type&ht.STATIC||e.sleepState===ht.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=r_;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=a_,i=l_,s=c_,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const r_=new S;new S;new de;new S;const a_={keys:[]},l_=[],c_=[];new S;new S;new S;class h_ extends wh{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Io{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let Eh,Th,Ah,Ch,Rh,Ph,Lh;const va={CLOSEST:1,ANY:2,ALL:4};Eh=st.types.SPHERE;Th=st.types.PLANE;Ah=st.types.BOX;Ch=st.types.CYLINDER;Rh=st.types.CONVEXPOLYHEDRON;Ph=st.types.HEIGHTFIELD;Lh=st.types.TRIMESH;class pe{get[Eh](){return this._intersectSphere}get[Th](){return this._intersectPlane}get[Ah](){return this._intersectBox}get[Ch](){return this._intersectConvex}get[Rh](){return this._intersectConvex}get[Ph](){return this._intersectHeightfield}get[Lh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=pe.ANY,this.result=new Io,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||pe.ANY,this.result=e.result||new Io,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(fc),Lr.length=0,t.broadphase.aabbQuery(t,fc,Lr),this.intersectBodies(Lr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=u_,s=d_;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(T_(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);const u=new S;r.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new S,_=new S,p=new S;r.vsub(n,g);const m=-c.dot(g)/f;l.scale(m,_),r.vadd(_,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=f_;r.from.copy(this.from),r.to.copy(this.to),Yt.pointToLocalFrame(n,e,r.from,r.from),Yt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=p_;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new qe;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(f,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,oo),this._intersectConvex(t.pillarConvex,e,oo,i,s,pc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,oo),this._intersectConvex(t.pillarConvex,e,oo,i,s,pc)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,h=u**2-4*c*d,f=m_,g=g_;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(r.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=__,l=mc,c=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=c?c.length:u.length,y=this.result;for(let v=0;!y.shouldStop&&v<m;v++){const w=c?c[v]:v,R=u[w],T=h[w],C=e,P=n;l.copy(d[R[0]]),C.vmult(l,l),l.vadd(P,l),l.vsub(g,l),C.vmult(T,a);const M=f.dot(a);if(Math.abs(M)<this.precision)continue;const x=a.dot(l)/M;if(!(x<0)){f.scale(x,Oe),Oe.vadd(g,Oe),tn.copy(d[R[0]]),C.vmult(tn,tn),P.vadd(tn,tn);for(let D=1;!y.shouldStop&&D<R.length-1;D++){un.copy(d[R[D]]),dn.copy(d[R[D+1]]),C.vmult(un,un),C.vmult(dn,dn),P.vadd(un,un),P.vadd(dn,dn);const O=Oe.distanceTo(g);!(pe.pointInTriangle(Oe,tn,un,dn)||pe.pointInTriangle(Oe,un,tn,dn))||O>p||this.reportIntersection(a,Oe,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=v_,l=w_,c=E_,u=mc,d=y_,h=x_,f=M_,g=b_,_=S_,p=t.indices;t.vertices;const m=this.from,y=this.to,v=this.direction;c.position.copy(n),c.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,v,d),Yt.pointToLocalFrame(n,e,m,h),Yt.pointToLocalFrame(n,e,y,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const w=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let R=0,T=l.length;!this.result.shouldStop&&R!==T;R++){const C=l[R];t.getNormal(C,a),t.getVertex(p[C*3],tn),tn.vsub(h,u);const P=d.dot(a),M=a.dot(u)/P;if(M<0)continue;d.scale(M,Oe),Oe.vadd(h,Oe),t.getVertex(p[C*3+1],un),t.getVertex(p[C*3+2],dn);const x=Oe.distanceSquared(h);!(pe.pointInTriangle(Oe,un,tn,dn)||pe.pointInTriangle(Oe,tn,un,dn))||x>w||(Yt.vectorToWorldFrame(e,a,_),Yt.pointToWorldFrame(n,e,Oe,g),this.reportIntersection(_,g,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case pe.ALL:this.hasHit=!0,c.set(r,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case pe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l));break;case pe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,di),n.vsub(e,us),t.vsub(e,Ir);const s=di.dot(di),r=di.dot(us),a=di.dot(Ir),l=us.dot(us),c=us.dot(Ir);let u,d;return(u=l*a-r*c)>=0&&(d=s*c-r*a)>=0&&u+d<s*l-r*r}}pe.CLOSEST=va.CLOSEST;pe.ANY=va.ANY;pe.ALL=va.ALL;const fc=new qe,Lr=[],us=new S,Ir=new S,u_=new S,d_=new de,Oe=new S,tn=new S,un=new S,dn=new S;new S;new Io;const pc={faceList:[0]},oo=new S,f_=new pe,p_=[],m_=new S,g_=new S,__=new S;new S;new S;const mc=new S,v_=new S,y_=new S,x_=new S,M_=new S,S_=new S,b_=new S;new qe;const w_=[],E_=new Yt,di=new S,ro=new S;function T_(o,t,e){e.vsub(o,di);const n=di.dot(t);return t.scale(n,ro),ro.vadd(o,ro),e.distanceTo(ro)}class Hi extends wh{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,l=i+r;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const u=i[l];if(this.needBroadphaseCollision(c,u)){if(!Hi.checkBounds(c,u,r))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Hi.insertionSortX(t):e===1?Hi.insertionSortY(t):e===2&&Hi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const g=a[f],_=g.position.x;t+=_,e+=_*_;const p=g.position.y;n+=p,i+=p*p;const m=g.position.z;s+=m,r+=m*m}const u=e-t*t*c,d=i-n*n*c,h=r-s*s*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class A_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class gc{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Rs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Rs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new gc,this.jacobianElementB=new gc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,_c),a.scale(u,vc),n.invInertiaWorldSolve.vmult(r,yc),i.invInertiaWorldSolve.vmult(l,xc),t.multiplyVectors(_c,yc)+e.multiplyVectors(vc,xc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(t.rotational,ao),c+=ao.dot(t.rotational),l.vmult(e.rotational,ao),c+=ao.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=C_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Rs.idCounter=0;const _c=new S,vc=new S,yc=new S,xc=new S,ao=new S,C_=new S;class R_ extends Rs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=P_,c=L_,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=I_,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,l),a.cross(m,c),m.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const y=m.dot(g),v=this.restitution+1,w=v*h.dot(m)-v*u.dot(m)+f.dot(c)-d.dot(l),R=this.computeGiMf();return-y*e-w*n-t*R}getImpactVelocityAlongNormal(){const t=N_,e=D_,n=U_,i=F_,s=z_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const P_=new S,L_=new S,I_=new S,N_=new S,D_=new S,U_=new S,F_=new S,z_=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Mc extends Rs{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=O_,r=B_,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const O_=new S,B_=new S;class Vo{constructor(t,e,n){n=A_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Vo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Vo.idCounter=0;class Ho{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ho.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ho.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new pe;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ms extends st{constructor(t){if(super({type:st.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class k_ extends Yi{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,r=[],a=[],l=[],c=[],u=[],d=Math.cos,h=Math.sin;r.push(new S(-e*h(0),-n*.5,e*d(0))),c.push(0),r.push(new S(-t*h(0),n*.5,t*d(0))),u.push(1);for(let g=0;g<s;g++){const _=2*Math.PI/s*(g+1),p=2*Math.PI/s*(g+.5);g<s-1?(r.push(new S(-e*h(_),-n*.5,e*d(_))),c.push(2*g+2),r.push(new S(-t*h(_),n*.5,t*d(_))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new S(-h(p),0,d(p)))}l.push(c),a.push(new S(0,1,0));const f=[];for(let g=0;g<u.length;g++)f.push(u[u.length-g-1]);l.push(f),super({vertices:r,faces:l,axes:a}),this.type=st.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class Ih extends st{constructor(){super({type:st.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){En.set(0,0,1),e.vmult(En,En);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),En.x===1?i.x=t.x:En.x===-1&&(n.x=t.x),En.y===1?i.y=t.y:En.y===-1&&(n.y=t.y),En.z===1?i.z=t.z:En.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const En=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new qe;new S;new qe;new S;new S;new S;new S;new S;new S;new S;new qe;new S;new Yt;new qe;class V_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class H_ extends V_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,u=t;let d,h,f,g,_,p;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const m=W_,y=q_,v=G_;m.length=a,y.length=a,v.length=a;for(let w=0;w!==a;w++){const R=r[w];v[w]=0,y[w]=R.computeB(u),m[w]=1/R.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],P=C.vlambda,M=C.wlambda;P.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const C=r[T];d=y[T],h=m[T],p=v[T],_=C.computeGWlambda(),f=h*(d-_-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),v[T]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<s)break}for(let T=0;T!==c;T++){const C=l[T],P=C.velocity,M=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),M.vadd(C.wlambda,M)}let w=r.length;const R=1/u;for(;w--;)r[w].multiplier=v[w]*R}return n}}const G_=[],W_=[],q_=[];class X_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Y_ extends X_{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const ee={sphereSphere:st.types.SPHERE,spherePlane:st.types.SPHERE|st.types.PLANE,boxBox:st.types.BOX|st.types.BOX,sphereBox:st.types.SPHERE|st.types.BOX,planeBox:st.types.PLANE|st.types.BOX,convexConvex:st.types.CONVEXPOLYHEDRON,sphereConvex:st.types.SPHERE|st.types.CONVEXPOLYHEDRON,planeConvex:st.types.PLANE|st.types.CONVEXPOLYHEDRON,boxConvex:st.types.BOX|st.types.CONVEXPOLYHEDRON,sphereHeightfield:st.types.SPHERE|st.types.HEIGHTFIELD,boxHeightfield:st.types.BOX|st.types.HEIGHTFIELD,convexHeightfield:st.types.CONVEXPOLYHEDRON|st.types.HEIGHTFIELD,sphereParticle:st.types.PARTICLE|st.types.SPHERE,planeParticle:st.types.PLANE|st.types.PARTICLE,boxParticle:st.types.BOX|st.types.PARTICLE,convexParticle:st.types.PARTICLE|st.types.CONVEXPOLYHEDRON,cylinderCylinder:st.types.CYLINDER,sphereCylinder:st.types.SPHERE|st.types.CYLINDER,planeCylinder:st.types.PLANE|st.types.CYLINDER,boxCylinder:st.types.BOX|st.types.CYLINDER,convexCylinder:st.types.CONVEXPOLYHEDRON|st.types.CYLINDER,heightfieldCylinder:st.types.HEIGHTFIELD|st.types.CYLINDER,particleCylinder:st.types.PARTICLE|st.types.CYLINDER,sphereTrimesh:st.types.SPHERE|st.types.TRIMESH,planeTrimesh:st.types.PLANE|st.types.TRIMESH};class j_{get[ee.sphereSphere](){return this.sphereSphere}get[ee.spherePlane](){return this.spherePlane}get[ee.boxBox](){return this.boxBox}get[ee.sphereBox](){return this.sphereBox}get[ee.planeBox](){return this.planeBox}get[ee.convexConvex](){return this.convexConvex}get[ee.sphereConvex](){return this.sphereConvex}get[ee.planeConvex](){return this.planeConvex}get[ee.boxConvex](){return this.boxConvex}get[ee.sphereHeightfield](){return this.sphereHeightfield}get[ee.boxHeightfield](){return this.boxHeightfield}get[ee.convexHeightfield](){return this.convexHeightfield}get[ee.sphereParticle](){return this.sphereParticle}get[ee.planeParticle](){return this.planeParticle}get[ee.boxParticle](){return this.boxParticle}get[ee.convexParticle](){return this.convexParticle}get[ee.cylinderCylinder](){return this.convexConvex}get[ee.sphereCylinder](){return this.sphereConvex}get[ee.planeCylinder](){return this.planeConvex}get[ee.boxCylinder](){return this.boxConvex}get[ee.convexCylinder](){return this.convexConvex}get[ee.heightfieldCylinder](){return this.heightfieldCylinder}get[ee.particleCylinder](){return this.particleCylinder}get[ee.sphereTrimesh](){return this.sphereTrimesh}get[ee.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Y_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new R_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new Mc(n,i,h*f),p=g.length?g.pop():new Mc(n,i,h*f);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-h*f,_.maxForce=p.maxForce=h*f,_.ri.copy(t.ri),_.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=t.enabled,e.push(_,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ai.setZero(),Oi.setZero(),Bi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ai.vadd(e.ni,ai),Oi.vadd(e.ri,Oi),Bi.vadd(e.rj,Bi)):(ai.vsub(e.ni,ai),Oi.vadd(e.rj,Oi),Bi.vadd(e.ri,Bi));const r=1/t;Oi.scale(r,n.ri),Bi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ai.normalize(),ai.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=Z_,c=J_,u=$_,d=K_;for(let h=0,f=t.length;h!==f;h++){const g=t[h],_=e[h];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&ht.KINEMATIC&&_.type&ht.STATIC||g.type&ht.STATIC&&_.type&ht.KINEMATIC||g.type&ht.KINEMATIC&&_.type&ht.KINEMATIC;for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],l),g.quaternion.vmult(g.shapeOffsets[y],u),u.vadd(g.position,u);const v=g.shapes[y];for(let w=0;w<_.shapes.length;w++){_.quaternion.mult(_.shapeOrientations[w],c),_.quaternion.vmult(_.shapeOffsets[w],d),d.vadd(_.position,d);const R=_.shapes[w];if(!(v.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&v.collisionFilterGroup)||u.distanceTo(d)>v.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;v.material&&R.material&&(T=n.getContactMaterial(v.material,R.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const C=v.type|R.type,P=this[C];if(P){let M=!1;v.type<R.type?M=P.call(this,v,R,u,d,l,c,g,_,v,R,m):M=P.call(this,R,v,d,u,c,l,_,g,v,R,m),M&&m&&(n.shapeOverlapKeeper.set(v.id,R.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,r,a,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,lo),h.ni.scale(h.ni.dot(lo),Sc),lo.vsub(Sc,h.rj),-lo.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}sphereBox(t,e,n,i,s,r,a,l,c,u,d){const h=this.v3pool,f=wv;n.vsub(i,co),e.getSideNormals(f,r);const g=t.radius;let _=!1;const p=Tv,m=Av,y=Cv;let v=null,w=0,R=0,T=0,C=null;for(let z=0,X=f.length;z!==X&&_===!1;z++){const B=Mv;B.copy(f[z]);const j=B.length();B.normalize();const Z=co.dot(B);if(Z<j+g&&Z>0){const at=Sv,et=bv;at.copy(f[(z+1)%3]),et.copy(f[(z+2)%3]);const Bt=at.length(),Y=et.length();at.normalize(),et.normalize();const $=co.dot(at),ut=co.dot(et);if($<Bt&&$>-Bt&&ut<Y&&ut>-Y){const lt=Math.abs(Z-j-g);if((C===null||lt<C)&&(C=lt,R=$,T=ut,v=j,p.copy(B),m.copy(at),y.copy(et),w++,d))return!0}}}if(w){_=!0;const z=this.createContactEquation(a,l,t,e,c,u);p.scale(-g,z.ri),z.ni.copy(p),z.ni.negate(z.ni),p.scale(v,p),m.scale(R,m),p.vadd(m,p),y.scale(T,y),p.vadd(y,z.rj),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.vadd(i,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let P=h.get();const M=Ev;for(let z=0;z!==2&&!_;z++)for(let X=0;X!==2&&!_;X++)for(let B=0;B!==2&&!_;B++)if(P.set(0,0,0),z?P.vadd(f[0],P):P.vsub(f[0],P),X?P.vadd(f[1],P):P.vsub(f[1],P),B?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,M),M.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;_=!0;const j=this.createContactEquation(a,l,t,e,c,u);j.ri.copy(M),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(P),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}h.release(P),P=null;const x=h.get(),D=h.get(),O=h.get(),E=h.get(),F=h.get(),U=f.length;for(let z=0;z!==U&&!_;z++)for(let X=0;X!==U&&!_;X++)if(z%3!==X%3){f[X].cross(f[z],x),x.normalize(),f[z].vadd(f[X],D),O.copy(n),O.vsub(D,O),O.vsub(i,O);const B=O.dot(x);x.scale(B,E);let j=0;for(;j===z%3||j===X%3;)j++;F.copy(n),F.vsub(E,F),F.vsub(D,F),F.vsub(i,F);const Z=Math.abs(B),at=F.length();if(Z<f[j].length()&&at<g){if(d)return!0;_=!0;const et=this.createContactEquation(a,l,t,e,c,u);D.vadd(E,et.rj),et.rj.copy(et.rj),F.negate(et.ni),et.ni.normalize(),et.ri.copy(et.rj),et.ri.vadd(i,et.ri),et.ri.vsub(n,et.ri),et.ri.normalize(),et.ri.scale(g,et.ri),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult)}}h.release(x,D,O,E,F)}planeBox(t,e,n,i,s,r,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,l,t,e,d)}convexConvex(t,e,n,i,s,r,a,l,c,u,d,h,f){const g=Gv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,h,f)){const _=[],p=Wv;t.clipAgainstHull(n,s,e,i,r,g,-100,100,_);let m=0;for(let y=0;y!==_.length;y++){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,u),w=v.ri,R=v.rj;g.negate(v.ni),_[y].normal.negate(p),p.scale(_[y].depth,p),_[y].point.vadd(p,w),R.copy(_[y].point),w.vsub(n,w),R.vsub(i,R),w.vadd(n,w),w.vsub(a.position,w),R.vadd(i,R),R.vsub(l.position,R),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,r,a,l,c,u,d){const h=this.v3pool;n.vsub(i,Rv);const f=e.faceNormals,g=e.faces,_=e.vertices,p=t.radius;let m=!1;for(let y=0;y!==_.length;y++){const v=_[y],w=Nv;r.vmult(v,w),i.vadd(w,w);const R=Iv;if(w.vsub(n,R),R.lengthSquared()<p*p){if(d)return!0;m=!0;const T=this.createContactEquation(a,l,t,e,c,u);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),w.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let y=0,v=g.length;y!==v&&m===!1;y++){const w=f[y],R=g[y],T=Dv;r.vmult(w,T);const C=Uv;r.vmult(_[R[0]],C),C.vadd(i,C);const P=Fv;T.scale(-p,P),n.vadd(P,P);const M=zv;P.vsub(C,M);const x=M.dot(T),D=Ov;if(n.vsub(C,D),x<0&&D.dot(T)>0){const O=[];for(let E=0,F=R.length;E!==F;E++){const U=h.get();r.vmult(_[R[E]],U),i.vadd(U,U),O.push(U)}if(xv(O,T,n)){if(d)return!0;m=!0;const E=this.createContactEquation(a,l,t,e,c,u);T.scale(-p,E.ri),T.negate(E.ni);const F=h.get();T.scale(-x,F);const U=h.get();T.scale(-p,U),n.vsub(i,E.rj),E.rj.vadd(U,E.rj),E.rj.vadd(F,E.rj),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),h.release(F),h.release(U),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);for(let z=0,X=O.length;z!==X;z++)h.release(O[z]);return}else for(let E=0;E!==R.length;E++){const F=h.get(),U=h.get();r.vmult(_[R[(E+1)%R.length]],F),r.vmult(_[R[(E+2)%R.length]],U),i.vadd(F,F),i.vadd(U,U);const z=Pv;U.vsub(F,z);const X=Lv;z.unit(X);const B=h.get(),j=h.get();n.vsub(F,j);const Z=j.dot(X);X.scale(Z,B),B.vadd(F,B);const at=h.get();if(B.vsub(n,at),Z>0&&Z*Z<z.lengthSquared()&&at.lengthSquared()<p*p){if(d)return!0;const et=this.createContactEquation(a,l,t,e,c,u);B.vsub(i,et.rj),B.vsub(n,et.ni),et.ni.normalize(),et.ni.scale(p,et.ri),et.rj.vadd(i,et.rj),et.rj.vsub(l.position,et.rj),et.ri.vadd(n,et.ri),et.ri.vsub(a.position,et.ri),this.result.push(et),this.createFrictionEquationsFromContact(et,this.frictionResult);for(let Bt=0,Y=O.length;Bt!==Y;Bt++)h.release(O[Bt]);h.release(F),h.release(U),h.release(B),h.release(at),h.release(j);return}h.release(F),h.release(U),h.release(B),h.release(at),h.release(j)}for(let E=0,F=O.length;E!==F;E++)h.release(O[E])}}}planeConvex(t,e,n,i,s,r,a,l,c,u,d){const h=Bv,f=kv;f.set(0,0,1),s.vmult(f,f);let g=0;const _=Vv;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,u),v=Hv;f.scale(f.dot(_),v),h.vsub(v,v),v.vsub(n,y.ri),y.ni.copy(f),h.vsub(i,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(a.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,a,l,c,u,d){const h=e.data,f=t.radius,g=e.elementSize,_=ny,p=ey;Yt.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/g)-1,y=Math.ceil((p.x+f)/g)+1,v=Math.floor((p.y-f)/g)-1,w=Math.ceil((p.y+f)/g)+1;if(y<0||w<0||m>h.length||v>h[0].length)return;m<0&&(m=0),y<0&&(y=0),v<0&&(v=0),w<0&&(w=0),m>=h.length&&(m=h.length-1),y>=h.length&&(y=h.length-1),w>=h[0].length&&(w=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const R=[];e.getRectMinMax(m,v,y,w,R);const T=R[0],C=R[1];if(p.z-f>C||p.z+f<T)return;const P=this.result;for(let M=m;M<y;M++)for(let x=v;x<w;x++){const D=P.length;let O=!1;if(e.getConvexTrianglePillar(M,x,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,_,s,r,a,l,t,e,d)),d&&O||(e.getConvexTrianglePillar(M,x,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,_,s,r,a,l,t,e,d)),d&&O))return!0;if(P.length-D>2)return}}boxHeightfield(t,e,n,i,s,r,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,a,l,c,u,d){const h=e.data,f=e.elementSize,g=t.boundingSphereRadius,_=Qv,p=ty,m=Jv;Yt.pointToLocalFrame(i,r,n,m);let y=Math.floor((m.x-g)/f)-1,v=Math.ceil((m.x+g)/f)+1,w=Math.floor((m.y-g)/f)-1,R=Math.ceil((m.y+g)/f)+1;if(v<0||R<0||y>h.length||w>h[0].length)return;y<0&&(y=0),v<0&&(v=0),w<0&&(w=0),R<0&&(R=0),y>=h.length&&(y=h.length-1),v>=h.length&&(v=h.length-1),R>=h[0].length&&(R=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const T=[];e.getRectMinMax(y,w,v,R,T);const C=T[0],P=T[1];if(!(m.z-g>P||m.z+g<C))for(let M=y;M<v;M++)for(let x=w;x<R;x++){let D=!1;if(e.getConvexTrianglePillar(M,x,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,s,r,a,l,null,null,d,p,null)),d&&D||(e.getConvexTrianglePillar(M,x,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,s,r,a,l,null,null,d,p,null)),d&&D))return!0}}sphereParticle(t,e,n,i,s,r,a,l,c,u,d){const h=jv;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,l,c,u,d){const h=qv;h.set(0,0,1),a.quaternion.vmult(h,h);const f=Xv;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=Yv;h.scale(h.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,l,t,e,d)}convexParticle(t,e,n,i,s,r,a,l,c,u,d){let h=-1;const f=Kv,g=Zv;let _=null;const p=$v;if(p.copy(i),p.vsub(n,p),s.conjugate(bc),bc.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,y=t.faces.length;m!==y;m++){const v=[t.worldVertices[t.faces[m][0]]],w=t.worldFaceNormals[m];i.vsub(v[0],wc);const R=-w.dot(wc);if(_===null||Math.abs(R)<Math.abs(_)){if(d)return!0;_=R,h=m,f.copy(w)}}if(h!==-1){const m=this.createContactEquation(l,a,e,t,c,u);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const y=m.ri,v=m.rj;y.vadd(i,y),y.vsub(l.position,y),v.vadd(n,v),v.vsub(a.position,v),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,l,c,u,d){return this.convexHeightfield(e,t,i,n,r,s,l,a,c,u,d)}particleCylinder(t,e,n,i,s,r,a,l,c,u,d){return this.convexParticle(e,t,i,n,r,s,l,a,c,u,d)}sphereTrimesh(t,e,n,i,s,r,a,l,c,u,d){const h=rv,f=av,g=lv,_=cv,p=hv,m=uv,y=mv,v=ov,w=iv,R=gv;Yt.pointToLocalFrame(i,r,n,p);const T=t.radius;y.lowerBound.set(p.x-T,p.y-T,p.z-T),y.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(y,R);const C=sv,P=t.radius*t.radius;for(let E=0;E<R.length;E++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[R[E]*3+F],C),C.vsub(p,w),w.lengthSquared()<=P){if(v.copy(C),Yt.pointToWorldFrame(i,r,v,C),C.vsub(n,w),d)return!0;let U=this.createContactEquation(a,l,t,e,c,u);U.ni.copy(w),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(C),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let E=0;E<R.length;E++)for(let F=0;F<3;F++){e.getVertex(e.indices[R[E]*3+F],h),e.getVertex(e.indices[R[E]*3+(F+1)%3],f),f.vsub(h,g),p.vsub(f,m);const U=m.dot(g);p.vsub(h,m);let z=m.dot(g);if(z>0&&U<0&&(p.vsub(h,m),_.copy(g),_.normalize(),z=m.dot(_),_.scale(z,m),m.vadd(h,m),m.distanceTo(p)<t.radius)){if(d)return!0;const B=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),Yt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,B.rj),Yt.vectorToWorldFrame(r,B.ni,B.ni),Yt.vectorToWorldFrame(r,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}const M=dv,x=fv,D=pv,O=nv;for(let E=0,F=R.length;E!==F;E++){e.getTriangleVertices(R[E],M,x,D),e.getNormal(R[E],O),p.vsub(M,m);let U=m.dot(O);if(O.scale(U,m),p.vsub(m,m),U=m.distanceTo(p),pe.pointInTriangle(m,M,x,D)&&U<t.radius){if(d)return!0;let z=this.createContactEquation(a,l,t,e,c,u);m.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),Yt.pointToWorldFrame(i,r,m,m),m.vsub(l.position,z.rj),Yt.vectorToWorldFrame(r,z.ni,z.ni),Yt.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,i,s,r,a,l,c,u,d){const h=new S,f=Q_;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new S;_.copy(h),Yt.pointToWorldFrame(i,r,_,h);const p=tv;if(h.vsub(n,p),f.dot(p)<=0){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,u);y.ni.copy(f);const v=ev;f.scale(p.dot(f),v),h.vsub(v,v),y.ri.copy(v),y.ri.vsub(a.position,y.ri),y.rj.copy(h),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}}const ai=new S,Oi=new S,Bi=new S,$_=new S,K_=new S,Z_=new de,J_=new de,Q_=new S,tv=new S,ev=new S,nv=new S,iv=new S;new S;const sv=new S,ov=new S,rv=new S,av=new S,lv=new S,cv=new S,hv=new S,uv=new S,dv=new S,fv=new S,pv=new S,mv=new qe,gv=[],lo=new S,Sc=new S,_v=new S,vv=new S,yv=new S;function xv(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=_v;o[(s+1)%i].vsub(r,a);const l=vv;a.cross(t,l);const c=yv;e.vsub(r,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const co=new S,Mv=new S,Sv=new S,bv=new S,wv=[new S,new S,new S,new S,new S,new S],Ev=new S,Tv=new S,Av=new S,Cv=new S,Rv=new S,Pv=new S,Lv=new S,Iv=new S,Nv=new S,Dv=new S,Uv=new S,Fv=new S,zv=new S,Ov=new S;new S;new S;const Bv=new S,kv=new S,Vv=new S,Hv=new S,Gv=new S,Wv=new S,qv=new S,Xv=new S,Yv=new S,jv=new S,bc=new de,$v=new S;new S;const Kv=new S,wc=new S,Zv=new S,Jv=new S,Qv=new S,ty=[0],ey=new S,ny=new S;class Ec{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||Tc(t,u)}a=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||Tc(e,u)}}}function Tc(o,t){o.push((t&4294901760)>>16,t&65535)}const Nr=(o,t)=>o<t?`${o}-${t}`:`${t}-${o}`;class iy{constructor(){this.data={keys:[]}}get(t,e){const n=Nr(t,e);return this.data[n]}set(t,e,n){const i=Nr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Nr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class sy extends bh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new h_,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new H_,this.constraints=[],this.narrowphase=new j_(this),this.collisionMatrix=new uc,this.collisionMatrixPrevious=new uc,this.bodyOverlapKeeper=new Ec,this.shapeOverlapKeeper=new Ec,this.contactmaterials=[],this.contactMaterialTable=new iy,this.defaultMaterial=new Ho("default"),this.defaultContactMaterial=new Vo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Io?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ALL,n.from=t,n.to=e,n.callback=i,Dr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ANY,n.from=t,n.to=e,n.result=i,Dr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.CLOSEST,n.from=t,n.to=e,n.result=i,Dr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ht&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=_e.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=_e.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(_e.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=cy,i=hy,s=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=ht.DYNAMIC;let h=-1/0;const f=this.constraints,g=ly;l.length();const _=l.x,p=l.y,m=l.z;let y=0;for(c&&(h=_e.now()),y=0;y!==s;y++){const E=r[y];if(E.type===d){const F=E.force,U=E.mass;F.x+=U*_,F.y+=U*p,F.z+=U*m}}for(let E=0,F=this.subsystems.length;E!==F;E++)this.subsystems[E].update();c&&(h=_e.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=_e.now()-h);let v=f.length;for(y=0;y!==v;y++){const E=f[y];if(!E.collideConnected)for(let F=n.length-1;F>=0;F-=1)(E.bodyA===n[F]&&E.bodyB===i[F]||E.bodyB===n[F]&&E.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),c&&(h=_e.now());const w=ay,R=e.length;for(y=0;y!==R;y++)w.push(e[y]);e.length=0;const T=this.frictionEquations.length;for(y=0;y!==T;y++)g.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),c&&(u.narrowphase=_e.now()-h),c&&(h=_e.now()),y=0;y<this.frictionEquations.length;y++)a.addEquation(this.frictionEquations[y]);const C=e.length;for(let E=0;E!==C;E++){const F=e[E],U=F.bi,z=F.bj,X=F.si,B=F.sj;let j;if(U.material&&z.material?j=this.getContactMaterial(U.material,z.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,U.material&&z.material&&(U.material.friction>=0&&z.material.friction>=0&&U.material.friction*z.material.friction,U.material.restitution>=0&&z.material.restitution>=0&&(F.restitution=U.material.restitution*z.material.restitution)),a.addEquation(F),U.allowSleep&&U.type===ht.DYNAMIC&&U.sleepState===ht.SLEEPING&&z.sleepState===ht.AWAKE&&z.type!==ht.STATIC){const Z=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),at=z.sleepSpeedLimit**2;Z>=at*2&&(U.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===ht.DYNAMIC&&z.sleepState===ht.SLEEPING&&U.sleepState===ht.AWAKE&&U.type!==ht.STATIC){const Z=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),at=U.sleepSpeedLimit**2;Z>=at*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,z,!0),this.collisionMatrixPrevious.get(U,z)||(ds.body=z,ds.contact=F,U.dispatchEvent(ds),ds.body=U,z.dispatchEvent(ds)),this.bodyOverlapKeeper.set(U.id,z.id),this.shapeOverlapKeeper.set(X.id,B.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=_e.now()-h,h=_e.now()),y=0;y!==s;y++){const E=r[y];E.wakeUpAfterNarrowphase&&(E.wakeUp(),E.wakeUpAfterNarrowphase=!1)}for(v=f.length,y=0;y!==v;y++){const E=f[y];E.update();for(let F=0,U=E.equations.length;F!==U;F++){const z=E.equations[F];a.addEquation(z)}}a.solve(t,this),c&&(u.solve=_e.now()-h),a.removeAllEquations();const P=Math.pow;for(y=0;y!==s;y++){const E=r[y];if(E.type&d){const F=P(1-E.linearDamping,t),U=E.velocity;U.scale(F,U);const z=E.angularVelocity;if(z){const X=P(1-E.angularDamping,t);z.scale(X,z)}}}this.dispatchEvent(ry),c&&(h=_e.now());const x=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(y=0;y!==s;y++)r[y].integrate(t,x,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=_e.now()-h),this.stepnumber+=1,this.dispatchEvent(oy);let O=!0;if(this.allowSleep)for(O=!1,y=0;y!==s;y++){const E=r[y];E.sleepTick(this.time),E.sleepState!==ht.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Tn,An),t){for(let s=0,r=Tn.length;s<r;s+=2)fs.bodyA=this.getBodyById(Tn[s]),fs.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(fs);fs.bodyA=fs.bodyB=null}if(e){for(let s=0,r=An.length;s<r;s+=2)ps.bodyA=this.getBodyById(An[s]),ps.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(ps);ps.bodyA=ps.bodyB=null}Tn.length=An.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Tn,An),n){for(let s=0,r=Tn.length;s<r;s+=2){const a=this.getShapeById(Tn[s]),l=this.getShapeById(Tn[s+1]);Cn.shapeA=a,Cn.shapeB=l,a&&(Cn.bodyA=a.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,r=An.length;s<r;s+=2){const a=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new qe;const Dr=new pe,_e=globalThis.performance||{};if(!_e.now){let o=Date.now();_e.timing&&_e.timing.navigationStart&&(o=_e.timing.navigationStart),_e.now=()=>Date.now()-o}new S;const oy={type:"postStep"},ry={type:"preStep"},ds={type:ht.COLLIDE_EVENT_NAME,body:null,contact:null},ay=[],ly=[],cy=[],hy=[],Tn=[],An=[],fs={type:"beginContact",bodyA:null,bodyB:null},ps={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function uy(o,t,e){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=e===void 0?{}:e;const a=[],l=new Zi({color:n??65280,wireframe:!0}),c=new S,u=new S,d=new S,h=new de,f=new ve(1),g=new an(1,1,1),_=new Kn(10,10,10,10);_.translate(0,0,1e-4);function p(P){const M=new Le,x=[];for(let O=0;O<P.vertices.length;O++){const E=P.vertices[O];x.push(E.x,E.y,E.z)}M.setAttribute("position",new Pe(x,3));const D=[];for(let O=0;O<P.faces.length;O++){const E=P.faces[O],F=E[0];for(let U=1;U<E.length-1;U++){const z=E[U],X=E[U+1];D.push(F,z,X)}}return M.setIndex(D),M.computeBoundingSphere(),M.computeVertexNormals(),M}function m(P){const M=new Le,x=[],D=c,O=u,E=d;for(let F=0;F<P.indices.length/3;F++)P.getTriangleVertices(F,D,O,E),x.push(D.x,D.y,D.z),x.push(O.x,O.y,O.z),x.push(E.x,E.y,E.z);return M.setAttribute("position",new Pe(x,3)),M.computeBoundingSphere(),M.computeVertexNormals(),M}function y(P){const M=new Le,x=P.elementSize||1,D=P.data.flatMap((E,F)=>E.flatMap((U,z)=>[F*x,z*x,U])),O=[];for(let E=0;E<P.data.length-1;E++)for(let F=0;F<P.data[E].length-1;F++){const U=P.data[E].length,z=E*U+F;O.push(z+1,z+U,z+U+1),O.push(z+U,z+1,z)}return M.setIndex(O),M.setAttribute("position",new Pe(D,3)),M.computeBoundingSphere(),M.computeVertexNormals(),M}function v(P){let M=new zt;const{SPHERE:x,BOX:D,PLANE:O,CYLINDER:E,CONVEXPOLYHEDRON:F,TRIMESH:U,HEIGHTFIELD:z}=st.types;switch(P.type){case x:{M=new zt(f,l);break}case D:{M=new zt(g,l);break}case O:{M=new zt(_,l);break}case E:{const X=new Jn(P.radiusTop,P.radiusBottom,P.height,P.numSegments);M=new zt(X,l),P.geometryId=X.id;break}case F:{const X=p(P);M=new zt(X,l),P.geometryId=X.id;break}case U:{const X=m(P);M=new zt(X,l),P.geometryId=X.id;break}case z:{const X=y(P);M=new zt(X,l),P.geometryId=X.id;break}}return o.add(M),M}function w(P,M){const{SPHERE:x,BOX:D,PLANE:O,CYLINDER:E,CONVEXPOLYHEDRON:F,TRIMESH:U,HEIGHTFIELD:z}=st.types;switch(M.type){case x:{const{radius:X}=M;P.scale.set(X*i,X*i,X*i);break}case D:{P.scale.copy(M.halfExtents),P.scale.multiplyScalar(2*i);break}case O:break;case E:{P.scale.set(1*i,1*i,1*i);break}case F:{P.scale.set(1*i,1*i,1*i);break}case U:{P.scale.copy(M.scale).multiplyScalar(i);break}case z:{P.scale.set(1*i,1*i,1*i);break}}}function R(P,M){if(!P)return!1;const{geometry:x}=P;return x instanceof ve&&M.type===st.types.SPHERE||x instanceof an&&M.type===st.types.BOX||x instanceof Kn&&M.type===st.types.PLANE||x.id===M.geometryId&&M.type===st.types.CYLINDER||x.id===M.geometryId&&M.type===st.types.CONVEXPOLYHEDRON||x.id===M.geometryId&&M.type===st.types.TRIMESH||x.id===M.geometryId&&M.type===st.types.HEIGHTFIELD}function T(P,M){let x=a[P],D=!1;return R(x,M)||(x&&o.remove(x),a[P]=x=v(M),D=!0),w(x,M),D}function C(){const P=a,M=c,x=h;let D=0;for(const O of t.bodies)for(let E=0;E!==O.shapes.length;E++){const F=O.shapes[E],U=T(D,F),z=P[D];z&&(O.quaternion.vmult(O.shapeOffsets[E],M),O.position.vadd(M,M),O.quaternion.mult(O.shapeOrientations[E],x),z.position.copy(M),z.quaternion.copy(x),U&&s instanceof Function&&s(O,z,F),!U&&r instanceof Function&&r(O,z,F)),D++}for(let O=D;O<P.length;O++){const E=P[O];E&&o.remove(E)}P.length=D}return{update:C}}class dy{constructor(t){if(!t)throw new Error("BaseMap requires a config object");this.config=t,this._sceneObjects=[]}get id(){return this.config.id}get displayName(){return this.config.displayName}get groundY(){return this.config.groundY}get mapHalf(){return this.config.mapHalf}get gravity(){return new I(...this.config.gravity)}get surfaceNormal(){return new I(...this.config.surfaceNormal)}get spawnPoints(){return this.config.spawnPoints.map(t=>new I(...t))}get obstacles(){return this.config.obstacles}get visuals(){return this.config.visuals}build(t,e=null){throw new Error(`${this.constructor.name} must implement build(scene, physicsWorld)`)}dispose(t){for(const e of this._sceneObjects)t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose());this._sceneObjects=[]}update(t){}_track(t){return this._sceneObjects.push(t),t}_buildSkyAndLights(t){const e=this.visuals;t.background=new xt(e.skyColor),t.fog=new Oo(e.fogColor,e.fogNear,e.fogFar);const n=new zg(e.ambientColor,e.ambientIntensity);t.add(n),this._track(n);const i=new Sh(e.directionalColor,e.directionalIntensity),s=e.directionalPos??[200,300,100];i.position.set(...s),i.castShadow=!0,t.add(i),this._track(i);const r=new xh(e.hemisphereSkyColor,e.hemisphereGroundColor,e.hemisphereIntensity);if(t.add(r),this._track(r),e.starCount>0){const a=new Float32Array(e.starCount*3);for(let d=0;d<e.starCount*3;d++)a[d]=(Math.random()-.5)*1e3;const l=new Le;l.setAttribute("position",new Be(a,3));const c=new pa({color:16777215,size:.4,sizeAttenuation:!0}),u=new yh(l,c);t.add(u),this._track(u)}}_buildObstacleMeshes(t){const e=this.visuals.groundColor;for(const n of this.obstacles){let i;if(n.type==="box"){const s=new an(...n.size),r=new he({color:e,roughness:.35,metalness:.1});i=new zt(s,r)}else if(n.type==="cylinder"){const s=n.radiusTop??n.radius??1,r=n.radiusBottom??n.radius??1,a=new Jn(s,r,n.height,n.segs??8),l=new he({color:e,roughness:.35,metalness:.1});i=new zt(a,l)}else{console.warn(`[BaseMap] Unknown obstacle type: ${n.type}`);continue}i.position.set(...n.pos),n.rotation&&i.rotation.set(...n.rotation),i.castShadow=!0,i.receiveShadow=!0,t.add(i),this._track(i)}}}class fy extends dy{build(t,e=null){this._buildSkyAndLights(t),this._buildGround(t,e),this._buildIceRocks(t,e)}_buildGround(t,e){const n=this.mapHalf*2,i=new Kn(n,n,48,48),s=i.attributes.position;for(let d=0;d<s.count;d++){const h=s.getX(d),f=s.getY(d),g=Math.sin(h*.08)*Math.cos(f*.06)*.18+Math.sin(h*.22+f*.17)*.06;s.setZ(d,g)}i.computeVertexNormals();const r=new he({color:this.visuals.groundColor,roughness:.15,metalness:.05}),a=new zt(i,r);a.rotation.x=-Math.PI/2,a.position.y=this.groundY,a.receiveShadow=!0,t.add(a),this._track(a);const l=new Kn(n,n),c=new he({color:11197951,roughness:.05,metalness:.2,transparent:!0,opacity:.18}),u=new zt(l,c);if(u.rotation.x=-Math.PI/2,u.position.y=this.groundY+.02,t.add(u),this._track(u),e){const d=new ht({mass:0});d.addShape(new Ih),d.quaternion.setFromEuler(-Math.PI/2,0,0),d.position.set(0,this.groundY,0),e.addBody(d),this.groundBody=d}}_buildIceRocks(t,e){this.rocks=[];const n=new he({color:12775167,roughness:.08,metalness:.35,flatShading:!0}),i=new he({color:15268095,roughness:.04,metalness:.55,flatShading:!0});for(const s of this.obstacles){const[r,,a]=s.pos,{radiusBottom:l,radiusTop:c,height:u,segs:d,scale:h}=s,f=new Re,g=new Jn(c,l,u,d),_=g.attributes.position;for(let p=0;p<_.count;p++)_.getY(p)>0&&(_.setX(p,_.getX(p)*(1+Math.sin(p*2.3)*.07)),_.setZ(p,_.getZ(p)*(1+Math.cos(p*1.9)*.07)));if(g.computeVertexNormals(),f.add(new zt(g,n)),h>1.5){const p=u*.45,m=new Cs(l*.28,p,5),y=new zt(m,i);y.position.y=u/2+p/2,f.add(y)}if(f.position.set(r,this.groundY+u/2,a),f.rotation.y=(r*.31+a*.17)%(Math.PI*2),f.castShadow=!0,t.add(f),this._track(f),e){const p=new ht({mass:0});p.addShape(new k_(c,l,u,d)),p.position.set(r,this.groundY+u/2,a),e.addBody(p),this.rocks.push({mesh:f,body:p})}else this.rocks.push({mesh:f})}}}const bt={floor:new he({color:10206676,roughness:.85,metalness:.05}),wall:new he({color:5930920,roughness:.9,metalness:0}),platform:new he({color:8039112,roughness:.75,metalness:.08}),bridge:new he({color:4876416,roughness:.6,metalness:.3}),railing:new he({color:3821664,roughness:.5,metalness:.5}),iceBoulder:new he({color:11392232,roughness:.7,metalness:.1}),crystal:new he({color:8967423,roughness:.1,metalness:.4,transparent:!0,opacity:.82}),spawnPad:new he({color:2792042,roughness:.6,metalness:.2,emissive:667680,emissiveIntensity:.4}),highGround:new he({color:6838440,roughness:.8,metalness:.05}),snow:new he({color:15660799,roughness:1,metalness:0}),ramp:new he({color:6986424,roughness:.8,metalness:.05})};function qt(o,t,e,n,i=0,s=0,r=0){const a=new zt(new an(o,t,e),n);return a.position.set(i,s+t/2,r),a.castShadow=!0,a.receiveShadow=!0,a}function Vn(o,t,e,n,i,s,r,a=0,l=0){const c=new zt(new an(o,t,e),n);return c.position.set(i,s,r),c.rotation.set(a,0,l),c.castShadow=!0,c.receiveShadow=!0,c}function ho(o,t,e,n,i,s,r,a){const l=new zt(new Jn(o,t,e,n),i);return l.position.set(s,r+e/2,a),l.castShadow=!0,l.receiveShadow=!0,l}function Ac(o,t,e,n,i,s,r){const a=new zt(new Cs(o,t,e),n);return a.position.set(i,s+t/2,r),a.castShadow=!0,a}const ws=[];function Xt(o,t,e,n,i,s,r=0,a=0){ws.push({type:"box",position:[o,t+i/2,e],size:[n,i,s],rotation:r!==0||a!==0?[r,0,a]:null})}const py=[{x:-100,y:7,z:100},{x:-116,y:7,z:100},{x:-100,y:7,z:116},{x:-116,y:7,z:116},{x:100,y:7,z:100},{x:116,y:7,z:100},{x:100,y:7,z:116},{x:116,y:7,z:116},{x:-100,y:7,z:-100},{x:-116,y:7,z:-100},{x:-100,y:7,z:-116},{x:-116,y:7,z:-116},{x:100,y:7,z:-100},{x:116,y:7,z:-100},{x:100,y:7,z:-116},{x:116,y:7,z:-116}];function my(o){ws.length=0;const t=new Re;t.name="GlacierCanyon";const e=qt(404,1,404,bt.floor,0,-1,0);t.add(e),[[404,32,12,0,0,-202],[404,32,12,0,0,202],[12,32,404,-202,0,0],[12,32,404,202,0,0]].forEach(([h,f,g,_,p,m])=>{t.add(qt(h,f,g,bt.wall,_,p,m)),Xt(_,p,m,h,f,g)});function n(h,f){const g=h*108,_=f*108,p=new Re;p.add(qt(52,6,52,bt.platform,g,0,_)),Xt(g,0,_,52,6,52),p.add(qt(48,.3,48,bt.snow,g,6,_)),[[g-8,_-8],[g+8,_-8],[g-8,_+8],[g+8,_+8]].forEach(([v,w])=>{p.add(ho(3,3,.3,12,bt.spawnPad,v,6,w))}),[[-14,0],[14,0],[0,-14],[0,14]].forEach(([v,w])=>{p.add(qt(4,4,4,bt.iceBoulder,g+v,6,_+w)),Xt(g+v,6,_+w,4,4,4)}),p.add(qt(52,2.5,1.5,bt.wall,g,6,_+f*26)),Xt(g,6,_+f*26,52,2.5,1.5),p.add(qt(1.5,2.5,52,bt.wall,g+h*26,6,_)),Xt(g+h*26,6,_,1.5,2.5,52);const m=f*Math.atan2(6,22);p.add(Vn(40,1.5,24,bt.ramp,g,3.881,_-f*34,-m,0)),Xt(g,3.131,_-f*34,40,1.5,24,-m,0);const y=h*Math.atan2(6,22);return p.add(Vn(24,1.5,40,bt.ramp,g-h*34,3.881,_,0,y)),Xt(g-h*34,3.131,_,24,1.5,40,0,y),p}t.add(n(-1,1)),t.add(n(1,1)),t.add(n(-1,-1)),t.add(n(1,-1));function i(h,f){const g=new Re;if(g.add(qt(46,10,46,bt.highGround,h,0,f)),Xt(h,0,f,46,10,46),g.add(qt(42,.3,42,bt.snow,h,10,f)),g.add(qt(4,5,4,bt.iceBoulder,h+10,10,f-10)),Xt(h+10,10,f-10,4,5,4),g.add(qt(5,4,4,bt.iceBoulder,h-12,10,f+12)),Xt(h-12,10,f+12,5,4,4),[[46,2,1.5,h,10,f-22],[46,2,1.5,h,10,f+22],[1.5,2,46,h-22,10,f],[1.5,2,46,h+22,10,f]].forEach(([_,p,m,y,v,w])=>{g.add(qt(_,p,m,bt.wall,y,v,w)),Xt(y,v,w,_,p,m)}),h===0){const _=f>0?1:-1,p=_*Math.atan2(10,28);g.add(Vn(36,1.5,34,bt.ramp,h,6.424,f-_*36,-p,0)),Xt(h,5.674,f-_*36,36,1.5,34,-p,0)}else{const _=h>0?1:-1,p=_*Math.atan2(10,28);g.add(Vn(34,1.5,36,bt.ramp,h-_*36,6.424,f,0,p)),Xt(h-_*36,5.674,f,34,1.5,36,0,p)}return g}t.add(i(0,-85)),t.add(i(0,85)),t.add(i(-85,0)),t.add(i(85,0)),t.add(qt(16,2,90,bt.bridge,0,10,0)),Xt(0,10,0,16,2,90),t.add(qt(1,2.5,90,bt.railing,-8.5,12,0)),t.add(qt(1,2.5,90,bt.railing,8.5,12,0)),t.add(qt(90,2,16,bt.bridge,0,12,0)),Xt(0,12,0,90,2,16),t.add(qt(90,2.5,1,bt.railing,0,14,-8.5)),t.add(qt(90,2.5,1,bt.railing,0,14,8.5)),t.add(qt(1.5,3,14,bt.railing,-20,14,0)),Xt(-20,14,0,1.5,3,14),t.add(qt(1.5,3,14,bt.railing,20,14,0)),Xt(20,14,0,1.5,3,14),[[-28,-6],[28,-6],[-28,6],[28,6]].forEach(([h,f])=>{t.add(ho(1.8,2.5,14,8,bt.bridge,h,0,f)),Xt(h,0,f,3.6,14,3.6)}),[[-6,-28],[-6,28],[6,-28],[6,28]].forEach(([h,f])=>{t.add(ho(1.8,2.5,12,8,bt.bridge,h,0,f)),Xt(h,0,f,3.6,12,3.6)});const s=Math.atan2(4,26);t.add(Vn(28,1.5,14,bt.ramp,60,12.87,0,0,-s)),Xt(60,12.12,0,28,1.5,14,0,-s),t.add(Vn(28,1.5,14,bt.ramp,-60,12.87,0,0,s)),Xt(-60,12.12,0,28,1.5,14,0,s);const r=Math.atan2(2,26);t.add(Vn(14,1.5,28,bt.ramp,0,11.822,60,-r,0)),Xt(0,11.072,60,14,1.5,28,-r,0),t.add(Vn(14,1.5,28,bt.ramp,0,11.822,-60,r,0)),Xt(0,11.072,-60,14,1.5,28,r,0),t.add(ho(4.5,6,3,8,bt.platform,0,14,0)),Xt(0,14,0,9,3,9),t.add(Ac(3.5,22,7,bt.crystal,0,17,0)),[[-5,2],[5,-2],[3,5],[-3,-5],[-7,0],[7,0]].forEach(([h,f],g)=>{t.add(Ac(1.4-g*.1,12-g,6,bt.crystal,h,17,f))});const a=new rc(4500223,6,100);a.position.set(0,36,0),t.add(a);function l(h,f){const g=new Re,_=h*62,p=f*62;return g.add(qt(28,22,48,bt.wall,_,0,p+f*8)),Xt(_,0,p+f*8,28,22,48),g.add(qt(48,22,28,bt.wall,_+h*8,0,p)),Xt(_+h*8,0,p,48,22,28),g.add(qt(26,.3,46,bt.snow,_,22,p+f*8)),g.add(qt(46,.3,26,bt.snow,_+h*8,22,p)),g.add(qt(6,22,12,bt.wall,_+h*17,0,p+f*26)),Xt(_+h*17,0,p+f*26,6,22,12),g.add(qt(12,22,6,bt.wall,_+h*26,0,p+f*17)),Xt(_+h*26,0,p+f*17,12,22,6),g}t.add(l(-1,1)),t.add(l(1,1)),t.add(l(-1,-1)),t.add(l(1,-1)),[[0,0,38,20,3,1.5],[0,0,-38,20,3,1.5],[38,0,0,1.5,3,20],[-38,0,0,1.5,3,20],[18,0,22,4,5,4],[-18,0,-22,4,5,4],[18,0,-22,4,5,4],[-18,0,22,4,5,4]].forEach(([h,f,g,_,p,m])=>{t.add(qt(_,p,m,bt.iceBoulder,h,f,g)),Xt(h,f,g,_,p,m)}),[[-42,0,0],[42,0,0],[0,0,-42],[0,0,42],[-30,0,30],[30,0,30],[-30,0,-30],[30,0,-30],[-60,0,50],[60,0,50],[-60,0,-50],[60,0,-50],[-50,0,60],[50,0,60],[-50,0,-60],[50,0,-60],[-145,0,0],[145,0,0],[0,0,-145],[0,0,145],[-140,0,50],[140,0,50],[-140,0,-50],[140,0,-50],[-50,0,140],[50,0,140],[-50,0,-140],[50,0,-140]].forEach(([h,f,g])=>{const _=3.5+Math.abs(Math.sin(h*.13+g*.07))*2.5;t.add(qt(_,_+1.5,_,bt.iceBoulder,h,f,g)),Xt(h,f,g,_,_+1.5,_)});function u(h,f){const g=new Re,_=h==="X"?f*158:0,p=h==="Z"?f*158:0,m=h==="X"?28:160,y=h==="Z"?28:160;g.add(qt(m,4,y,bt.platform,_,0,p)),Xt(_,0,p,m,4,y),g.add(qt(m-4,.3,y-4,bt.snow,_,4,p));const v=5;for(let P=0;P<v;P++){const M=(P/(v-1)-.5)*130,x=h==="Z"?M:_,D=h==="X"?M:p;g.add(qt(5,6,5,bt.iceBoulder,x,4,D)),Xt(x,4,D,5,6,5)}const w=h==="X"?3:170,R=h==="Z"?3:170,T=h==="X"?f*142:0,C=h==="Z"?f*142:0;return g.add(qt(w,18,R,bt.wall,T,0,C)),Xt(T,0,C,w,18,R),g}t.add(u("X",1)),t.add(u("X",-1)),t.add(u("Z",1)),t.add(u("Z",-1)),[[0,-197,404,6],[0,197,404,6],[-197,0,6,404],[197,0,6,404],[-60,28,18,8],[55,-25,14,10],[20,90,16,6],[-30,-80,12,14]].forEach(([h,f,g,_])=>{t.add(qt(g,.5,_,bt.snow,h,0,f))});const d=new Sh(16774368,1.8);return d.position.set(180,240,120),d.castShadow=!0,d.shadow.mapSize.width=4096,d.shadow.mapSize.height=4096,d.shadow.camera.near=1,d.shadow.camera.far=700,d.shadow.camera.left=-220,d.shadow.camera.right=220,d.shadow.camera.top=220,d.shadow.camera.bottom=-220,d.shadow.bias=-.001,t.add(d),t.add(new xh(11589887,14544639,.7)),[[0,5,0,2254506,1,70],[-158,5,0,4491468,1.2,80],[158,5,0,4491468,1.2,80],[0,5,-158,4491468,1.2,80],[0,5,158,4491468,1.2,80],[-108,10,-108,8939212,1.5,60],[108,10,-108,8939212,1.5,60],[-108,10,108,8939212,1.5,60],[108,10,108,8939212,1.5,60]].forEach(([h,f,g,_,p,m])=>{const y=new rc(_,p,m);y.position.set(h,f,g),t.add(y)}),t.userData.zones={CENTER:{position:new I(0,15,0),label:"Center Bridge"},NORTH_MID:{position:new I(0,11,-85),label:"North Mid"},SOUTH_MID:{position:new I(0,11,85),label:"South Mid"},WEST_MID:{position:new I(-85,11,0),label:"West Mid"},EAST_MID:{position:new I(85,11,0),label:"East Mid"},NW_SPAWN:{position:new I(-108,8,-108),label:"NW Spawn"},NE_SPAWN:{position:new I(108,8,-108),label:"NE Spawn"},SW_SPAWN:{position:new I(-108,8,108),label:"SW Spawn"},SE_SPAWN:{position:new I(108,8,108),label:"SE Spawn"},WEST_FLANK:{position:new I(-158,5,0),label:"West Flank"},EAST_FLANK:{position:new I(158,5,0),label:"East Flank"},NORTH_FLANK:{position:new I(0,5,-158),label:"North Flank"},SOUTH_FLANK:{position:new I(0,5,158),label:"South Flank"}},o.add(t),console.log(JSON.stringify(ws)),t}class gy{constructor(t){this.groundY=0,this.mapHalf=200,this.gravity=new I(0,-28,0),this.surfaceNormal=new I(0,1,0),this.spawnPoints=py.map(e=>new I(e.x,e.y,e.z))}build(t,e){if(my(t),this.minimapObstacles=ws.map(n=>({type:n.type,position:{x:n.position[0],y:n.position[1],z:n.position[2]},size:{x:n.size[0],y:n.size[1],z:n.size[2]},rotation:n.rotation})),t.fog=new Oo(13166847,180,520),this._obstacleBodies=[],this._groundBody=null,e){const n=new ht({mass:0});n.addShape(new Ih),n.quaternion.setFromEuler(-Math.PI/2,0,0),n.position.set(0,this.groundY,0),e.addBody(n),this._groundBody=n;for(const i of ws){if(i.type!=="box")continue;const s=new ko(new S(i.size[0]/2,i.size[1]/2,i.size[2]/2)),r=new ht({mass:0,shape:s});r.position.set(i.position[0],i.position[1],i.position[2]),i.rotation&&r.quaternion.setFromEuler(i.rotation[0],i.rotation[1],i.rotation[2]),e.addBody(r),this._obstacleBodies.push(r)}}}update(t){}dispose(t,e){if(e&&(this._groundBody&&(e.removeBody(this._groundBody),this._groundBody=null),this._obstacleBodies)){for(const n of this._obstacleBodies)e.removeBody(n);this._obstacleBodies=[]}}}const _y={id:"ice_planet",displayName:"Ice Planet",groundY:0,mapHalf:200,gravity:[0,-28,0],surfaceNormal:[0,1,0],spawnPoints:[[30,2,0],[27.716,2,11.481],[21.213,2,21.213],[11.481,2,27.716],[0,2,30],[-11.481,2,27.716],[-21.213,2,21.213],[-27.716,2,11.481],[-30,2,0],[-27.716,2,-11.481],[-21.213,2,-21.213],[-11.481,2,-27.716],[0,2,-30],[11.481,2,-27.716],[21.213,2,-21.213],[27.716,2,-11.481]],teamSpawns:{blue:[[30,2,0],[27.716,2,11.481],[21.213,2,21.213],[11.481,2,27.716],[0,2,30],[-11.481,2,27.716],[-21.213,2,21.213],[-27.716,2,11.481]],red:[[-30,2,0],[-27.716,2,-11.481],[-21.213,2,-21.213],[-11.481,2,-27.716],[0,2,-30],[11.481,2,-27.716],[21.213,2,-21.213],[27.716,2,-11.481]]},obstacles:[{type:"cylinder",pos:[35,2.88,20],radiusBottom:2.7,radiusTop:1.35,height:5.76,segs:6,scale:1.8},{type:"cylinder",pos:[-42,4,15],radiusBottom:3.75,radiusTop:1.875,height:8,segs:6,scale:2.5},{type:"cylinder",pos:[18,2.08,-38],radiusBottom:1.95,radiusTop:.975,height:4.16,segs:6,scale:1.3},{type:"cylinder",pos:[28,2.56,-30],radiusBottom:2.4,radiusTop:1.2,height:5.12,segs:6,scale:1.6},{type:"cylinder",pos:[-25,3.2,-28],radiusBottom:3,radiusTop:1.5,height:6.4,segs:6,scale:2},{type:"cylinder",pos:[58,4.48,-14],radiusBottom:4.2,radiusTop:2.1,height:8.96,segs:6,scale:2.8},{type:"cylinder",pos:[-20,2.56,48],radiusBottom:2.4,radiusTop:1.2,height:5.12,segs:6,scale:1.6},{type:"cylinder",pos:[-52,3.52,-12],radiusBottom:3.3,radiusTop:1.65,height:7.04,segs:6,scale:2.2},{type:"cylinder",pos:[8,2.24,55],radiusBottom:2.1,radiusTop:1.05,height:4.48,segs:6,scale:1.4}],visuals:{skyColor:662074,fogColor:662074,fogNear:80,fogFar:280,ambientColor:3359846,ambientIntensity:.9,directionalColor:16773341,directionalIntensity:1.8,directionalPos:[200,300,100],hemisphereSkyColor:4491451,hemisphereGroundColor:1122867,hemisphereIntensity:.6,groundColor:9357544,starCount:2e3}},vy={id:"glacier_canyon",displayName:"Glacier Canyon",groundY:0,mapHalf:200,gravity:[0,-28,0],surfaceNormal:[0,1,0],spawnPoints:[[-100,7,100],[-116,7,100],[-100,7,116],[-116,7,116],[100,7,100],[116,7,100],[100,7,116],[116,7,116],[-100,7,-100],[-116,7,-100],[-100,7,-116],[-116,7,-116],[100,7,-100],[116,7,-100],[100,7,-116],[116,7,-116]],teamSpawns:{blue:[[-100,7,-100],[-116,7,-100],[-100,7,-116],[-116,7,-116],[100,7,-100],[116,7,-100],[100,7,-116],[116,7,-116]],red:[[-100,7,100],[-116,7,100],[-100,7,116],[-116,7,116],[100,7,100],[116,7,100],[100,7,116],[116,7,116]]},obstacles:[{type:"box",pos:[0,16,-202],size:[404,32,12],rotation:null},{type:"box",pos:[0,16,202],size:[404,32,12],rotation:null},{type:"box",pos:[-202,16,0],size:[12,32,404],rotation:null},{type:"box",pos:[202,16,0],size:[12,32,404],rotation:null},{type:"box",pos:[-108,3,108],size:[52,6,52],rotation:null},{type:"box",pos:[-122,8,108],size:[4,4,4],rotation:null},{type:"box",pos:[-94,8,108],size:[4,4,4],rotation:null},{type:"box",pos:[-108,8,94],size:[4,4,4],rotation:null},{type:"box",pos:[-108,8,122],size:[4,4,4],rotation:null},{type:"box",pos:[-108,7.25,134],size:[52,2.5,1.5],rotation:null},{type:"box",pos:[-134,7.25,108],size:[1.5,2.5,52],rotation:null},{type:"box",pos:[-108,3.881,74],size:[40,1.5,24],rotation:[-.2662520491509253,0,0]},{type:"box",pos:[-74,3.881,108],size:[24,1.5,40],rotation:[0,0,-.2662520491509253]},{type:"box",pos:[108,3,108],size:[52,6,52],rotation:null},{type:"box",pos:[94,8,108],size:[4,4,4],rotation:null},{type:"box",pos:[122,8,108],size:[4,4,4],rotation:null},{type:"box",pos:[108,8,94],size:[4,4,4],rotation:null},{type:"box",pos:[108,8,122],size:[4,4,4],rotation:null},{type:"box",pos:[108,7.25,134],size:[52,2.5,1.5],rotation:null},{type:"box",pos:[134,7.25,108],size:[1.5,2.5,52],rotation:null},{type:"box",pos:[108,3.881,74],size:[40,1.5,24],rotation:[-.2662520491509253,0,0]},{type:"box",pos:[74,3.881,108],size:[24,1.5,40],rotation:[0,0,.2662520491509253]},{type:"box",pos:[-108,3,-108],size:[52,6,52],rotation:null},{type:"box",pos:[-122,8,-108],size:[4,4,4],rotation:null},{type:"box",pos:[-94,8,-108],size:[4,4,4],rotation:null},{type:"box",pos:[-108,8,-122],size:[4,4,4],rotation:null},{type:"box",pos:[-108,8,-94],size:[4,4,4],rotation:null},{type:"box",pos:[-108,7.25,-134],size:[52,2.5,1.5],rotation:null},{type:"box",pos:[-134,7.25,-108],size:[1.5,2.5,52],rotation:null},{type:"box",pos:[-108,3.881,-74],size:[40,1.5,24],rotation:[.2662520491509253,0,0]},{type:"box",pos:[-74,3.881,-108],size:[24,1.5,40],rotation:[0,0,-.2662520491509253]},{type:"box",pos:[108,3,-108],size:[52,6,52],rotation:null},{type:"box",pos:[94,8,-108],size:[4,4,4],rotation:null},{type:"box",pos:[122,8,-108],size:[4,4,4],rotation:null},{type:"box",pos:[108,8,-122],size:[4,4,4],rotation:null},{type:"box",pos:[108,8,-94],size:[4,4,4],rotation:null},{type:"box",pos:[108,7.25,-134],size:[52,2.5,1.5],rotation:null},{type:"box",pos:[134,7.25,-108],size:[1.5,2.5,52],rotation:null},{type:"box",pos:[108,3.881,-74],size:[40,1.5,24],rotation:[.2662520491509253,0,0]},{type:"box",pos:[74,3.881,-108],size:[24,1.5,40],rotation:[0,0,.2662520491509253]},{type:"box",pos:[0,5,-85],size:[46,10,46],rotation:null},{type:"box",pos:[10,12.5,-95],size:[4,5,4],rotation:null},{type:"box",pos:[-12,12,-73],size:[5,4,4],rotation:null},{type:"box",pos:[0,11,-107],size:[46,2,1.5],rotation:null},{type:"box",pos:[0,11,-63],size:[46,2,1.5],rotation:null},{type:"box",pos:[-22,11,-85],size:[1.5,2,46],rotation:null},{type:"box",pos:[22,11,-85],size:[1.5,2,46],rotation:null},{type:"box",pos:[0,6.424,-49],size:[36,1.5,34],rotation:[.3430239404207034,0,0]},{type:"box",pos:[0,5,85],size:[46,10,46],rotation:null},{type:"box",pos:[10,12.5,75],size:[4,5,4],rotation:null},{type:"box",pos:[-12,12,97],size:[5,4,4],rotation:null},{type:"box",pos:[0,11,63],size:[46,2,1.5],rotation:null},{type:"box",pos:[0,11,107],size:[46,2,1.5],rotation:null},{type:"box",pos:[-22,11,85],size:[1.5,2,46],rotation:null},{type:"box",pos:[22,11,85],size:[1.5,2,46],rotation:null},{type:"box",pos:[0,6.424,49],size:[36,1.5,34],rotation:[-.3430239404207034,0,0]},{type:"box",pos:[-85,5,0],size:[46,10,46],rotation:null},{type:"box",pos:[-75,12.5,-10],size:[4,5,4],rotation:null},{type:"box",pos:[-97,12,12],size:[5,4,4],rotation:null},{type:"box",pos:[-85,11,-22],size:[46,2,1.5],rotation:null},{type:"box",pos:[-85,11,22],size:[46,2,1.5],rotation:null},{type:"box",pos:[-107,11,0],size:[1.5,2,46],rotation:null},{type:"box",pos:[-63,11,0],size:[1.5,2,46],rotation:null},{type:"box",pos:[-49,6.424,0],size:[34,1.5,36],rotation:[0,0,-.3430239404207034]},{type:"box",pos:[85,5,0],size:[46,10,46],rotation:null},{type:"box",pos:[95,12.5,-10],size:[4,5,4],rotation:null},{type:"box",pos:[73,12,12],size:[5,4,4],rotation:null},{type:"box",pos:[85,11,-22],size:[46,2,1.5],rotation:null},{type:"box",pos:[85,11,22],size:[46,2,1.5],rotation:null},{type:"box",pos:[63,11,0],size:[1.5,2,46],rotation:null},{type:"box",pos:[107,11,0],size:[1.5,2,46],rotation:null},{type:"box",pos:[49,6.424,0],size:[34,1.5,36],rotation:[0,0,.3430239404207034]},{type:"box",pos:[0,11,0],size:[16,2,90],rotation:null},{type:"box",pos:[0,13,0],size:[90,2,16],rotation:null},{type:"box",pos:[-20,15.5,0],size:[1.5,3,14],rotation:null},{type:"box",pos:[20,15.5,0],size:[1.5,3,14],rotation:null},{type:"box",pos:[-28,7,-6],size:[3.6,14,3.6],rotation:null},{type:"box",pos:[28,7,-6],size:[3.6,14,3.6],rotation:null},{type:"box",pos:[-28,7,6],size:[3.6,14,3.6],rotation:null},{type:"box",pos:[28,7,6],size:[3.6,14,3.6],rotation:null},{type:"box",pos:[-6,6,-28],size:[3.6,12,3.6],rotation:null},{type:"box",pos:[-6,6,28],size:[3.6,12,3.6],rotation:null},{type:"box",pos:[6,6,-28],size:[3.6,12,3.6],rotation:null},{type:"box",pos:[6,6,28],size:[3.6,12,3.6],rotation:null},{type:"box",pos:[60,12.87,0],size:[28,1.5,14],rotation:[0,0,-.15264932839526518]},{type:"box",pos:[-60,12.87,0],size:[28,1.5,14],rotation:[0,0,.15264932839526518]},{type:"box",pos:[0,11.822,60],size:[14,1.5,28],rotation:[-.07677189126977804,0,0]},{type:"box",pos:[0,11.822,-60],size:[14,1.5,28],rotation:[.07677189126977804,0,0]},{type:"box",pos:[0,15.5,0],size:[9,3,9],rotation:null},{type:"box",pos:[-62,11,70],size:[28,22,48],rotation:null},{type:"box",pos:[-70,11,62],size:[48,22,28],rotation:null},{type:"box",pos:[-79,11,88],size:[6,22,12],rotation:null},{type:"box",pos:[-88,11,79],size:[12,22,6],rotation:null},{type:"box",pos:[62,11,70],size:[28,22,48],rotation:null},{type:"box",pos:[70,11,62],size:[48,22,28],rotation:null},{type:"box",pos:[79,11,88],size:[6,22,12],rotation:null},{type:"box",pos:[88,11,79],size:[12,22,6],rotation:null},{type:"box",pos:[-62,11,-70],size:[28,22,48],rotation:null},{type:"box",pos:[-70,11,-62],size:[48,22,28],rotation:null},{type:"box",pos:[-79,11,-88],size:[6,22,12],rotation:null},{type:"box",pos:[-88,11,-79],size:[12,22,6],rotation:null},{type:"box",pos:[62,11,-70],size:[28,22,48],rotation:null},{type:"box",pos:[70,11,-62],size:[48,22,28],rotation:null},{type:"box",pos:[79,11,-88],size:[6,22,12],rotation:null},{type:"box",pos:[88,11,-79],size:[12,22,6],rotation:null},{type:"box",pos:[0,1.5,38],size:[20,3,1.5],rotation:null},{type:"box",pos:[0,1.5,-38],size:[20,3,1.5],rotation:null},{type:"box",pos:[38,1.5,0],size:[1.5,3,20],rotation:null},{type:"box",pos:[-38,1.5,0],size:[1.5,3,20],rotation:null},{type:"box",pos:[18,2.5,22],size:[4,5,4],rotation:null},{type:"box",pos:[-18,2.5,-22],size:[4,5,4],rotation:null},{type:"box",pos:[18,2.5,-22],size:[4,5,4],rotation:null},{type:"box",pos:[-18,2.5,22],size:[4,5,4],rotation:null},{type:"box",pos:[-42,3.4166440012445705,0],size:[5.333288002489141,6.833288002489141,5.333288002489141],rotation:null},{type:"box",pos:[42,3.4166440012445705,0],size:[5.333288002489141,6.833288002489141,5.333288002489141],rotation:null},{type:"box",pos:[0,2.7502874809022124,-42],size:[4.000574961804425,5.500574961804425,4.000574961804425],rotation:null},{type:"box",pos:[0,2.7502874809022124,42],size:[4.000574961804425,5.500574961804425,4.000574961804425],rotation:null},{type:"box",pos:[-30,3.717309538597744,30],size:[5.934619077195488,7.434619077195488,5.934619077195488],rotation:null},{type:"box",pos:[30,2.8492693727486573,30],size:[4.198538745497315,5.698538745497315,4.198538745497315],rotation:null},{type:"box",pos:[-30,2.8492693727486573,-30],size:[4.198538745497315,5.698538745497315,4.198538745497315],rotation:null},{type:"box",pos:[30,3.717309538597744,-30],size:[5.934619077195488,7.434619077195488,5.934619077195488],rotation:null},{type:"box",pos:[-60,3.645207420936819,50],size:[5.790414841873638,7.290414841873638,5.790414841873638],rotation:null},{type:"box",pos:[60,3.692524062377611,50],size:[5.885048124755222,7.385048124755222,5.885048124755222],rotation:null},{type:"box",pos:[-60,3.692524062377611,-50],size:[5.885048124755222,7.385048124755222,5.885048124755222],rotation:null},{type:"box",pos:[60,3.645207420936819,-50],size:[5.790414841873638,7.290414841873638,5.790414841873638],rotation:null},{type:"box",pos:[-50,3.4321315152209,60],size:[5.3642630304418,6.8642630304418,5.3642630304418],rotation:null},{type:"box",pos:[50,3.695793770337735,60],size:[5.89158754067547,7.39158754067547,5.89158754067547],rotation:null},{type:"box",pos:[-50,3.695793770337735,-60],size:[5.89158754067547,7.39158754067547,5.89158754067547],rotation:null},{type:"box",pos:[50,3.4321315152209,-60],size:[5.3642630304418,6.8642630304418,5.3642630304418],rotation:null},{type:"box",pos:[-145,2.5005550980583076,0],size:[3.5011101961166156,5.001110196116615,3.5011101961166156],rotation:null},{type:"box",pos:[145,2.5005550980583076,0],size:[3.5011101961166156,5.001110196116615,3.5011101961166156],rotation:null},{type:"box",pos:[0,3.3291270281887475,-145],size:[5.158254056377495,6.658254056377495,5.158254056377495],rotation:null},{type:"box",pos:[0,3.3291270281887475,145],size:[5.158254056377495,6.658254056377495,5.158254056377495],rotation:null},{type:"box",pos:[-140,3.557183538928668,50],size:[5.614367077857336,7.114367077857336,5.614367077857336],rotation:null},{type:"box",pos:[140,2.8588158141596605,50],size:[4.217631628319321,5.717631628319321,4.217631628319321],rotation:null},{type:"box",pos:[-140,2.8588158141596605,-50],size:[4.217631628319321,5.717631628319321,4.217631628319321],rotation:null},{type:"box",pos:[140,3.557183538928668,-50],size:[5.614367077857336,7.114367077857336,5.614367077857336],rotation:null},{type:"box",pos:[-50,2.6971821176790614,140],size:[3.8943642353581227,5.394364235358123,3.8943642353581227],rotation:null},{type:"box",pos:[50,3.197565339108474,140],size:[4.895130678216948,6.395130678216948,4.895130678216948],rotation:null},{type:"box",pos:[-50,3.197565339108474,-140],size:[4.895130678216948,6.395130678216948,4.895130678216948],rotation:null},{type:"box",pos:[50,2.6971821176790614,-140],size:[3.8943642353581227,5.394364235358123,3.8943642353581227],rotation:null},{type:"box",pos:[158,2,0],size:[28,4,160],rotation:null},{type:"box",pos:[158,7,-65],size:[5,6,5],rotation:null},{type:"box",pos:[158,7,-32.5],size:[5,6,5],rotation:null},{type:"box",pos:[158,7,0],size:[5,6,5],rotation:null},{type:"box",pos:[158,7,32.5],size:[5,6,5],rotation:null},{type:"box",pos:[158,7,65],size:[5,6,5],rotation:null},{type:"box",pos:[142,9,0],size:[3,18,170],rotation:null},{type:"box",pos:[-158,2,0],size:[28,4,160],rotation:null},{type:"box",pos:[-158,7,-65],size:[5,6,5],rotation:null},{type:"box",pos:[-158,7,-32.5],size:[5,6,5],rotation:null},{type:"box",pos:[-158,7,0],size:[5,6,5],rotation:null},{type:"box",pos:[-158,7,32.5],size:[5,6,5],rotation:null},{type:"box",pos:[-158,7,65],size:[5,6,5],rotation:null},{type:"box",pos:[-142,9,0],size:[3,18,170],rotation:null},{type:"box",pos:[0,2,158],size:[160,4,28],rotation:null},{type:"box",pos:[-65,7,158],size:[5,6,5],rotation:null},{type:"box",pos:[-32.5,7,158],size:[5,6,5],rotation:null},{type:"box",pos:[0,7,158],size:[5,6,5],rotation:null},{type:"box",pos:[32.5,7,158],size:[5,6,5],rotation:null},{type:"box",pos:[65,7,158],size:[5,6,5],rotation:null},{type:"box",pos:[0,9,142],size:[170,18,3],rotation:null},{type:"box",pos:[0,2,-158],size:[160,4,28],rotation:null},{type:"box",pos:[-65,7,-158],size:[5,6,5],rotation:null},{type:"box",pos:[-32.5,7,-158],size:[5,6,5],rotation:null},{type:"box",pos:[0,7,-158],size:[5,6,5],rotation:null},{type:"box",pos:[32.5,7,-158],size:[5,6,5],rotation:null},{type:"box",pos:[65,7,-158],size:[5,6,5],rotation:null},{type:"box",pos:[0,9,-142],size:[170,18,3],rotation:null}],visuals:{skyColor:11061480,fogColor:13689072,fogNear:60,fogFar:220,ambientColor:15266047,ambientIntensity:1.2,directionalColor:12573951,directionalIntensity:1.4,directionalPos:[100,200,-100],hemisphereSkyColor:11193582,hemisphereGroundColor:6719658,hemisphereIntensity:.8,groundColor:13164008,starCount:0}},Nh={ice_planet:_y,glacier_canyon:vy};function yy(o){const t=Nh[o];if(!t)throw new Error(`Unknown map id: "${o}". Available: ${Dh().join(", ")}`);return t}function Dh(){return Object.keys(Nh)}const Ur="glacier_canyon",xy={ice_planet:fy,glacier_canyon:gy};function My(o){const t=xy[o];if(!t)throw new Error(`No client map class for: ${o}`);const e=yy(o);return new t(e)}function Sy(){return Dh()}class by{constructor(){this._ctx=new(window.AudioContext||window.webkitAudioContext),this._masterGain=this._ctx.createGain(),this._masterGain.gain.value=1,this._masterGain.connect(this._ctx.destination),this._musicMasterGain=this._ctx.createGain(),this._musicMasterGain.gain.value=.55,this._musicMasterGain.connect(this._masterGain),this._sfxGain=this._ctx.createGain(),this._sfxGain.gain.value=2,this._sfxGain.connect(this._masterGain),this._slideNode=null,this._slideGain=null,this._musicRunning=!1,this._musicNodes=[],this._musicTimers=[],this._melodyTimeout=null,this._chordTimeout=null,this._chordState=1,this._melodyChain=null,this._hiHatStrong=!0}resume(){this._ctx.state==="suspended"&&this._ctx.resume()}startMusic(){if(this._musicRunning)return;this._musicRunning=!0;const t=this._ctx.currentTime;this._musicMasterGain.gain.cancelScheduledValues(t),this._musicMasterGain.gain.setValueAtTime(0,t),this._musicMasterGain.gain.linearRampToValueAtTime(.55,t+2),this._startSubBass(),this._startChordPads(),this._startVinylCrackle(),this._startHiHat(),this._startMelody()}stopMusic(){this._musicRunning=!1,this._melodyTimeout&&clearTimeout(this._melodyTimeout),this._chordTimeout&&clearTimeout(this._chordTimeout),this._musicTimers.forEach(i=>clearTimeout(i)),this._musicTimers=[],this._melodyChain=null,this._chordState=1,this._hiHatStrong=!0;const e=this._ctx.currentTime,n=this._musicNodes;this._musicNodes=[],this._musicMasterGain.gain.cancelScheduledValues(e),this._musicMasterGain.gain.setValueAtTime(this._musicMasterGain.gain.value,e),this._musicMasterGain.gain.linearRampToValueAtTime(0,e+1.5),setTimeout(()=>{for(const i of n){try{i.stop?.()}catch{}try{i.disconnect?.()}catch{}}},1600)}_startSubBass(){const t=this._ctx,e=t.createOscillator();e.type="sine",e.frequency.value=55;const n=t.createOscillator();n.type="sine",n.frequency.value=.6;const i=t.createGain();i.gain.value=.06;const s=t.createGain();s.gain.value=.06,n.connect(i),i.connect(s.gain),e.connect(s),s.connect(this._musicMasterGain),e.start(),n.start(),this._musicNodes.push(e,n,i,s)}_startChordPads(){const t=this._ctx,e=[130,164,196],n=[110,130,164],i=t.createGain();i.gain.value=.04,i.connect(this._musicMasterGain);const s=t.createGain();s.gain.value=0,s.connect(this._musicMasterGain);for(const r of e){const a=t.createOscillator();a.type="triangle",a.frequency.value=r;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=400,a.connect(l),l.connect(i),a.start(),this._musicNodes.push(a,l)}for(const r of n){const a=t.createOscillator();a.type="triangle",a.frequency.value=r;const l=t.createBiquadFilter();l.type="lowpass",l.frequency.value=400,a.connect(l),l.connect(s),a.start(),this._musicNodes.push(a,l)}this._musicNodes.push(i,s),this._scheduleChordCrossfade(i,s)}_scheduleChordCrossfade(t,e){this._musicRunning&&(this._chordTimeout=setTimeout(()=>{if(!this._musicRunning)return;const n=this._ctx.currentTime,i=2;this._chordState===1?(t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+i),e.gain.cancelScheduledValues(n),e.gain.setValueAtTime(e.gain.value,n),e.gain.linearRampToValueAtTime(.04,n+i),this._chordState=2):(e.gain.cancelScheduledValues(n),e.gain.setValueAtTime(e.gain.value,n),e.gain.linearRampToValueAtTime(0,n+i),t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(.04,n+i),this._chordState=1),this._scheduleChordCrossfade(t,e)},8e3))}_buildShortReverb(){const t=this._ctx,e=Math.ceil(t.sampleRate*.3),n=t.createBuffer(2,e,t.sampleRate);for(let s=0;s<2;s++){const r=n.getChannelData(s);for(let a=0;a<e;a++)r[a]=(Math.random()*2-1)*Math.pow(1-a/e,3)}const i=t.createConvolver();return i.buffer=n,i}_startMelody(){if(!this._musicRunning)return;const t=this._ctx;if(!this._melodyChain){const s=t.createBiquadFilter();s.type="bandpass",s.frequency.value=1200,s.Q.value=.8;const r=this._buildShortReverb(),a=t.createGain();a.gain.value=.55;const l=t.createGain();l.gain.value=.45,s.connect(r),r.connect(a),a.connect(this._musicMasterGain),s.connect(l),l.connect(this._musicMasterGain),this._melodyChain={bandpass:s},this._musicNodes.push(s,r,a,l)}const e=[523,587,659,784,880];if(Math.random()<.2){this._melodyTimeout=setTimeout(()=>this._startMelody(),350+Math.random()*550);return}const i=e[Math.floor(Math.random()*e.length)];if(this._playMelodyNote(i),Math.random()<.1){const s=setTimeout(()=>{this._musicRunning&&this._playMelodyNote(i)},80);this._musicTimers.push(s)}this._melodyTimeout=setTimeout(()=>this._startMelody(),350+Math.random()*550)}_playMelodyNote(t){if(!this._melodyChain)return;const e=this._ctx,n=e.currentTime,{bandpass:i}=this._melodyChain,s=e.createOscillator();s.type="triangle",s.frequency.value=t;const r=e.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(.12,n+.008),r.gain.setValueAtTime(.12,n+.008+.15),r.gain.linearRampToValueAtTime(1e-4,n+.008+.15+.25),s.connect(r),r.connect(i);const a=.008+.15+.25+.02;s.start(n),s.stop(n+a),s.onended=()=>{try{r.disconnect()}catch{}}}_startHiHat(){this._hiHatStrong=!0,this._tickHiHat()}_tickHiHat(){if(!this._musicRunning)return;const t=this._ctx,e=Math.ceil(t.sampleRate*.05),n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let d=0;d<e;d++)i[d]=Math.random()*2-1;const s=t.createBufferSource();s.buffer=n;const r=t.createBiquadFilter();r.type="highpass",r.frequency.value=8e3;const a=t.createGain(),l=t.currentTime,c=this._hiHatStrong?.04:.025;a.gain.setValueAtTime(c,l),a.gain.exponentialRampToValueAtTime(1e-4,l+.05),s.connect(r),r.connect(a),a.connect(this._musicMasterGain),s.start(l),this._hiHatStrong=!this._hiHatStrong;const u=setTimeout(()=>this._tickHiHat(),500);this._musicTimers.push(u)}_startVinylCrackle(){const t=this._ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=Math.random()*2-1;const s=t.createBufferSource();s.buffer=n,s.loop=!0;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=2e3,r.Q.value=.3;const a=t.createGain();a.gain.value=.015,s.connect(r),r.connect(a),a.connect(this._musicMasterGain),s.start(),this._musicNodes.push(s,a)}_makeNoise(t,e,n,i,s){const r=this._ctx,a=Math.ceil(r.sampleRate*t),l=r.createBuffer(1,a,r.sampleRate),c=l.getChannelData(0);for(let g=0;g<a;g++)c[g]=Math.random()*2-1;const u=r.createBufferSource();u.buffer=l;const d=r.createBiquadFilter();d.type=e,d.frequency.value=n,d.Q.value=i;const h=r.createGain(),f=r.currentTime;h.gain.setValueAtTime(s,f),h.gain.exponentialRampToValueAtTime(1e-4,f+t),u.connect(d),d.connect(h),h.connect(this._sfxGain),u.start(f),u.stop(f+t+.01)}_makeTone(t,e,n,i=0){const s=this._ctx,r=s.currentTime+i,a=s.createOscillator();a.type="sine",a.frequency.value=t;const l=s.createGain();l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(l),l.connect(this._sfxGain),a.start(r),a.stop(r+e+.01)}shoot(){this._makeNoise(.08,"lowpass",600,1,.25)}hitTerrain(){this._makeNoise(.06,"lowpass",350,1,.2)}hitPlayer(t=1){const e=Math.max(0,Math.min(1,t));this._makeNoise(.07,"lowpass",500,1,.05+.3*e)}meleeSwoosh(){this._makeNoise(.12,"bandpass",600,1.5,.35)}meleeHit(){this._makeNoise(.06,"lowpass",200,1,.5),setTimeout(()=>{if(this._ctx.state!=="running")return;const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.value=180;const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.08),n.connect(i),i.connect(this._sfxGain),n.start(e),n.stop(e+.09)},30)}jump(t=!1){t?(this._makeTone(320,.07,.18,0),this._makeTone(420,.07,.18,.025)):this._makeTone(320,.07,.18)}footstep(){this._makeNoise(.045,"lowpass",110,1,.3)}slideStart(){if(this._slideNode)return;const t=this._ctx,e=t.sampleRate,n=t.createBuffer(1,e,e),i=n.getChannelData(0);for(let u=0;u<e;u++)i[u]=Math.random()*2-1;const s=t.createBufferSource();s.buffer=n,s.loop=!0;const r=t.createBiquadFilter();r.type="highpass",r.frequency.value=80;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=300;const l=t.createGain(),c=t.currentTime;l.gain.setValueAtTime(1e-4,c),l.gain.linearRampToValueAtTime(.08,c+.1),s.connect(r),r.connect(a),a.connect(l),l.connect(this._sfxGain),s.start(c),this._slideNode=s,this._slideGain=l}slideStop(){if(!this._slideNode)return;const e=this._ctx.currentTime,n=this._slideNode,i=this._slideGain;this._slideNode=null,this._slideGain=null,i.gain.cancelScheduledValues(e),i.gain.setTargetAtTime(1e-4,e,.05),n.stop(e+.3)}pickup(){const t=this._ctx,e=t.currentTime;for(const n of[880,1320]){const i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(n,e),i.frequency.linearRampToValueAtTime(n+5,e+.18);const s=t.createGain();s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.18),i.connect(s),s.connect(this._sfxGain),i.start(e),i.stop(e+.19)}}kill(){this._makeTone(523,.08,.25,0),this._makeTone(659,.12,.3,.06)}died(){const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.linearRampToValueAtTime(180,e+.6);const i=t.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.6),n.connect(i),i.connect(this._sfxGain),n.start(e),n.stop(e+.61);const s=Math.ceil(t.sampleRate*.08),r=t.createBuffer(1,s,t.sampleRate),a=r.getChannelData(0);for(let d=0;d<s;d++)a[d]=Math.random()*2-1;const l=t.createBufferSource();l.buffer=r;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=200,c.Q.value=1;const u=t.createGain();u.gain.setValueAtTime(.15,e+.8),u.gain.exponentialRampToValueAtTime(1e-4,e+.88),l.connect(c),c.connect(u),u.connect(this._sfxGain),l.start(e+.8),l.stop(e+.89)}win(){const t=this._ctx,e=t.currentTime,n=[{freq:523,t:0},{freq:659,t:.2},{freq:784,t:.4},{freq:659,t:.6},{freq:1047,t:.68}];for(const{freq:s,t:r}of n){const a=t.createOscillator();a.type="sine",a.frequency.value=s;const l=t.createGain();l.gain.setValueAtTime(.3,e+r),l.gain.exponentialRampToValueAtTime(1e-4,e+r+.12),a.connect(l),l.connect(this._sfxGain),a.start(e+r),a.stop(e+r+.13)}const i=e+.8;for(const s of[523,659,784]){const r=t.createOscillator();r.type="sine",r.frequency.value=s;const a=t.createGain();a.gain.setValueAtTime(.2,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.4),r.connect(a),a.connect(this._sfxGain),r.start(i),r.stop(i+.41)}}takeDamage(){const t=this._ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(250,e),n.frequency.linearRampToValueAtTime(100,e+.18);const i=t.createGain();i.gain.setValueAtTime(.22,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(i),i.connect(this._sfxGain),n.start(e),n.stop(e+.19)}setMasterVolume(t){this._masterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this._ctx.currentTime,.05)}setMusicVolume(t){this._musicMasterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this._ctx.currentTime,.05)}setSFXVolume(t){this._sfxGain.gain.setTargetAtTime(Math.max(0,Math.min(1,t)),this._ctx.currentTime,.05)}}const De=new by,uo=7049144,Fr=16754765,fo=16775408,Cc=1710638,wy=11193582,zr=45,Ey=.88,Ty=.08,Ay=9,Rc=45,po=3,Cy=4,mo=32,go=24;function Ry(o,t={}){return new ma({color:o,roughness:1,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new xt(16777215),flatShading:!1,...t})}function Gi(o,t=.015){const e=o.attributes.position;for(let n=0;n<e.count;n++){const i=e.getX(n),s=e.getY(n),r=e.getZ(n),l=(Math.sin(i*9.1+s*3.7)*.5+Math.cos(s*7.3+r*5.1)*.3+Math.sin(r*11.2+i*2.8)*.2)*t,c=Math.sqrt(i*i+s*s+r*r)||1;e.setXYZ(n,i+i/c*l,s+s/c*l,r+r/c*l)}return o.computeVertexNormals(),o}function Ge({geometry:o,materialProperties:t={},color:e,position:n={x:0,y:0,z:0},rotation:i={x:0,y:0,z:0},scale:s={x:1,y:1,z:1},fluffy:r=!0,colorRole:a=null}){const l=r?Ry(e,t):new he({color:e,flatShading:!1,roughness:.8,metalness:.05,...t}),c=new zt(o,l);return c.position.set(n.x,n.y,n.z),c.rotation.set(i.x,i.y,i.z),c.scale.set(s.x,s.y,s.z),a&&(c.userData.colorRole=a),c}function Pc(o,t=24){const e=new ve(o*1.06,t,t);Gi(e,.025);const n=new Zi({color:wy,transparent:!0,opacity:.18,depthWrite:!1,side:Ue}),i=new zt(e,n);return i.userData.colorRole="fuzz",i}function Uh(o,t){const e=t instanceof xt?t:new xt(t),n=e.clone().lerp(new xt(16777215),.5);o.traverse(i=>{!i.isMesh||!i.userData.colorRole||(Array.isArray(i.material)?i.material=i.material.map(s=>s.clone()):i.material=i.material.clone(),i.userData.colorRole==="body"?i.material.color.copy(e):i.userData.colorRole==="fuzz"&&i.material.color.copy(n))})}function Fh(){const o=new Re,t=new Re;t.position.y=1.35;const e=new ve(.6,mo,go);Gi(e,.012),t.add(Ge({geometry:e,color:uo,colorRole:"body"})),t.add(Pc(.6,28));const n=new ve(.55,mo,go);Gi(n,.008),t.add(Ge({geometry:n,color:fo,position:{x:0,y:-.05,z:.15},scale:{x:1,y:.9,z:.95}}));const i=new ve(.09,16,12),s={flatShading:!1,roughness:.2,metalness:.1};t.add(Ge({geometry:i,materialProperties:s,color:Cc,position:{x:-.2,y:.05,z:.55},fluffy:!1})),t.add(Ge({geometry:i,materialProperties:s,color:Cc,position:{x:.2,y:.05,z:.55},fluffy:!1}));const r=new ve(.025,8,8),a=new Zi({color:16777215}),l=new zt(r,a);l.position.set(-.18,.08,.62),t.add(l);const c=new zt(r,a);c.position.set(.22,.08,.62),t.add(c),t.add(Ge({geometry:new Cs(.18,.3,24),color:Fr,position:{x:0,y:-.15,z:.65},rotation:{x:Math.PI/2.2,y:0,z:0},materialProperties:{roughness:.5,metalness:.05},fluffy:!1}));const u=new ve(.12,12,10),d=new Zi({color:16758465,transparent:!0,opacity:.35}),h=new zt(u,d);h.position.set(-.35,-.08,.42),h.scale.set(1,.6,.3),t.add(h);const f=new zt(u,d);f.position.set(.35,-.08,.42),f.scale.set(1,.6,.3),t.add(f);const g=new Re;g.position.y=.1;const _=new ve(.8,mo,go);Gi(_,.018),g.add(Ge({geometry:_,color:uo,scale:{x:1,y:1.1,z:.9},colorRole:"body"}));const p=Pc(.8,32);p.scale.set(1,1.1,.9),g.add(p);const m=new ve(.6,mo,go);Gi(m,.012),g.add(Ge({geometry:m,color:fo,position:{x:0,y:-.1,z:.35},scale:{x:1,y:1.1,z:.6}}));const y=new Re,v=new ve(.25,20,16),w=new ve(.22,20,16),R=Ge({geometry:v,color:uo,position:{x:-.75,y:.15,z:.1},rotation:{x:-.1,y:-.1,z:.35},scale:{x:1.2,y:1.8,z:.6},colorRole:"body"});R.add(Ge({geometry:w,color:fo,position:{x:.05,y:-.05,z:-.15},scale:{x:1.1,y:1.7,z:.5}}));const T=Ge({geometry:v,color:uo,position:{x:.75,y:.15,z:.1},rotation:{x:-.1,y:.1,z:-.35},scale:{x:1.2,y:1.8,z:.6},colorRole:"body"});T.add(Ge({geometry:w,color:fo,position:{x:-.05,y:-.05,z:-.15},scale:{x:1.1,y:1.7,z:.5}}));const C=new ve(.18,16,12),P=Ge({geometry:C,color:Fr,position:{x:-.3,y:-.85,z:.25},rotation:{x:0,y:.1,z:0},scale:{x:1,y:.55,z:1.4},materialProperties:{roughness:.55,metalness:.05},fluffy:!1}),M=Ge({geometry:C,color:Fr,position:{x:.3,y:-.85,z:.25},rotation:{x:0,y:-.1,z:0},scale:{x:1,y:.55,z:1.4},materialProperties:{roughness:.55,metalness:.05},fluffy:!1});return y.add(R,T,P,M),o.add(t,g,y),o.userData={flipL:R,flipR:T,footL:P,footR:M},o}class Py{constructor(t,e,n,i=null){this.scene=t,this.physicsWorld=e,this.map=n,this._spawnPosition=i,this.hp=100,this.ammo=20,this.kills=0,this.slideFuel=po,this.playerColor=new xt(4500223),this._grounded=!1,this._groundedByCollision=!1,this._floorNormal=new I(0,1,0),this._spaceWasHeld=!1,this._yaw=0,this._aimPitch=0,this._waddleTime=0,this.isFallen=!1,this._fallTimer=0,this.isSliding=!1,this._stunTimer=0,this._bodyPitch=0,this._canAirDash=!0,this._lastFootPhaseCount=0,this._wasSliding=!1,this.keys={},this.mouse={dx:0,dy:0},this._buildMesh(),this._buildPhysics(),this._setupInput()}_buildMesh(){this.group=Fh(),this._flipL=this.group.userData.flipL,this._flipR=this.group.userData.flipR,this._footL=this.group.userData.footL,this._footR=this.group.userData.footR,this.leftFlipper=this._flipL,this.rightFlipper=this._flipR;const t=new Re,e=new an(.4,.35,.25),n=new he({color:9127187,flatShading:!1,roughness:.85}),i=new zt(e,n);i.position.set(-.6,.05,.1),i.rotation.y=Math.PI/8,i.rotation.z=Math.PI/16;const s=new Jn(.75,.75,.06,32,1,!0),r=new he({color:6044193,side:mn,roughness:.85,flatShading:!1}),a=new zt(s,r);a.rotation.x=Math.PI/2,a.rotation.y=-Math.PI/6,a.scale.set(1,1,1.1),t.add(i,a),this.group.add(t);const l=new ve(.2,28,20);Gi(l,.018);const c=new ma({color:16776440,roughness:1,metalness:0,sheen:1,sheenRoughness:.3,sheenColor:new xt(13426175)});this.heldSnowball=new zt(l,c),this.heldSnowball.position.set(0,-.4,.1),this.heldSnowball.visible=!1,this._flipR.add(this.heldSnowball),this.scene.add(this.group)}_buildPhysics(){const t=new Ms(.9);this.body=new ht({mass:1,shape:t,linearDamping:.85,angularDamping:1,collisionFilterGroup:2,collisionFilterMask:-1});const e=this._spawnPosition?.x??0,n=this._spawnPosition?.y??this.map.groundY+2,i=this._spawnPosition?.z??0;this.body.position.set(e,n,i),this.body.previousPosition.set(e,n,i),this.physicsWorld.addBody(this.body),this.body.addEventListener("collide",s=>{const r=s.contact,a=r.bi===this.body?r.ri:r.rj;if(a.y<-.3){this._groundedByCollision=!0;const l=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z);l>.001&&this._floorNormal.set(-a.x/l,-a.y/l,-a.z/l)}})}_setupInput(){document.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="Space"&&!t.repeat&&De.jump(!1)}),document.addEventListener("keyup",t=>{this.keys[t.code]=!1}),document.addEventListener("click",()=>{document.body.requestPointerLock()}),document.addEventListener("mousemove",t=>{document.pointerLockElement&&(this.mouse.dx+=t.movementX,this.mouse.dy+=t.movementY)})}update(t){const e=this.map.groundY;this.body.position.y<e+.9&&(this.body.position.y=e+.9,this.body.velocity.y<0&&(this.body.velocity.y=0));const n=this.body.velocity.x,i=this.body.velocity.y,s=this.body.velocity.z,r=Math.sqrt(n*n+i*i+s*s);if(r>30){const $=30/r;this.body.velocity.set(n*$,i*$,s*$)}const a=this.body.position,l=new I(a.x,a.y,a.z),c=this.map.surfaceNormal,u=this.map.gravity;this.body.applyForce(new S(u.x,u.y,u.z),new S(0,0,0)),this._grounded=l.y<e+1.6||this._groundedByCollision,this._groundedByCollision=!1,this._grounded&&(this._canAirDash=!0),this._yaw-=this.mouse.dx*.002,this._aimPitch+=this.mouse.dy*.002,this._aimPitch=cl.clamp(this._aimPitch,-Math.PI/6,Math.PI/3),this.mouse.dx=0,this.mouse.dy=0;let d=!0;this._stunTimer>0&&(this._stunTimer-=t,d=!1),this._fallTimer>0&&(this._fallTimer-=t,d=!1,this._fallTimer<=0&&(this.isFallen=!1)),this.isSliding=d&&this._grounded&&(this.keys.ControlLeft||this.keys.ControlRight);const h=c.clone(),f=this._grounded?this._floorNormal.clone():h.clone(),g=new I(0,1,0);let _=g.clone().sub(h.clone().multiplyScalar(g.dot(h)));_.lengthSq()<.001&&_.set(1,0,0),_.normalize();const p=new ze().setFromAxisAngle(h,this._yaw),m=_.clone().applyQuaternion(p),y=new I().crossVectors(m,h).normalize(),v=new I;if(d&&(this.keys.KeyW&&v.addScaledVector(m,1),this.keys.KeyS&&v.addScaledVector(m,-1),this.keys.KeyA&&v.addScaledVector(y,-1),this.keys.KeyD&&v.addScaledVector(y,1)),d&&!this._grounded&&this.keys.ShiftLeft&&this._canAirDash&&v.lengthSq()>0){this._canAirDash=!1;const $=v.clone().normalize(),ut=10;this.body.applyImpulse(new S($.x*ut,$.y*ut,$.z*ut),new S(0,0,0))}const w=d&&this._grounded&&this.keys.ShiftLeft&&this.slideFuel>0;if(w?(this.slideFuel-=t,this.slideFuel<=0&&!this.isFallen&&(this.isFallen=!0,this._fallTimer=.75,this.isSliding=!1)):this._grounded&&!this.isFallen&&(this.slideFuel=Math.min(po,this.slideFuel+t*(po/Cy))),v.lengthSq()>0)if(v.addScaledVector(f,-v.dot(f)),v.lengthSq()<1e-4)v.set(0,0,0);else{v.normalize();let $=zr;this._grounded?this.isSliding?$=w?Rc*1.5:zr*.5:w&&($=Rc):$=zr*.2,d&&this.body.applyForce(new S(v.x*$,v.y*$,v.z*$),new S(0,0,0))}const R=new I(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),T=f.clone().multiplyScalar(R.dot(f)),C=R.clone().sub(T);if(this._grounded){let $=Ey;this.isSliding&&($=.99),this.isFallen&&($=.8),C.multiplyScalar(Math.pow($,t*60)),!v.lengthSq()&&C.length()<Ty&&C.set(0,0,0)}const P=T.add(C);this.body.velocity.set(P.x,P.y,P.z);const M=!!this.keys.Space&&!this._spaceWasHeld;if(this._spaceWasHeld=!!this.keys.Space,d&&M&&this._grounded&&!this.isSliding){const $=f.clone().multiplyScalar(Ay);this.body.applyImpulse(new S($.x,$.y,$.z),new S(0,0,0))}this._waddleTime+=t;const x=v.lengthSq()>0,D=this._waddleTime*(w?12:8);if(this._grounded&&x&&!this.isSliding&&!this.isFallen){const $=Math.floor(D/Math.PI);$!==this._lastFootPhaseCount&&(De.footstep(),this._lastFootPhaseCount=$)}else this._lastFootPhaseCount=Math.floor(D/Math.PI);let O=0,E=0;const F=this.isSliding||this.isFallen?Math.PI/2:0;if(this._bodyPitch=cl.lerp(this._bodyPitch||0,F,10*t),E+=this._bodyPitch,d&&!this.isSliding&&!this.isFallen)if(x){this._footL.position.y=-.85+Math.max(0,Math.sin(D))*.25,this._footR.position.y=-.85+Math.max(0,Math.sin(D+Math.PI))*.25,this._footL.position.z=.25+Math.sin(D)*.15,this._footR.position.z=.25+Math.sin(D+Math.PI)*.15,O=Math.sin(D)*.2,E+=Math.abs(Math.sin(D*2))*.05;const $=Math.sin(D)*.25;this._flipL.rotation.z=.28+Math.abs($),this._flipL.rotation.x=$,this._flipR.rotation.z=-.28-Math.abs($),this._flipR.rotation.x=-$}else this._footL.position.set(-.3,-.85,.25),this._footR.position.set(.3,-.85,.25),this._flipL.rotation.set(-.08,-.18,-.28),this._flipR.rotation.set(-.08,.18,.28);else this._footL.position.set(-.3,-.6,-.2),this._footR.position.set(.3,-.6,-.2),this.isSliding?(this._flipL.rotation.set(.5,0,1),this._flipR.rotation.set(.5,0,-1)):this.isFallen&&(this._flipL.rotation.set(0,0,1.5),this._flipR.rotation.set(0,0,-1.5));const U=m.clone(),z=c.clone(),X=new I().crossVectors(z,U).normalize(),B=new ie().makeBasis(X,z,U),j=new ze().setFromRotationMatrix(B),Z=new ze().setFromEuler(new Ke(E,0,O));j.multiply(Z),this.group.quaternion.copy(j);const at=this._bodyPitch>.5?.5:0;this.group.position.copy(l.clone().addScaledVector(c,at));const et=document.getElementById("hp-bar"),Bt=document.getElementById("hp-val"),Y=document.getElementById("fuel-bar");et&&(et.style.width=this.hp+"%"),Bt&&(Bt.textContent=this.hp),Y&&(Y.style.width=this.slideFuel/po*100+"%")}getMuzzlePosition(){this.group.updateMatrixWorld(!0);const t=new I;return this.heldSnowball.getWorldPosition(t),t}applyRecoil(){}takeMeleeHit(t){if(this._stunTimer>0)return;De.takeDamage(),this.isFallen=!0,this._fallTimer=.5,this._stunTimer=.5,this.isSliding=!1;const n=new I(this.body.position.x,this.body.position.y,this.body.position.z).sub(t).normalize(),i=this.map.surfaceNormal;n.addScaledVector(i,.3).normalize(),this.body.applyImpulse(new S(n.x*12,n.y*12,n.z*12),new S(0,0,0))}getState(){return{position:this.body.position.clone(),quaternion:this.body.quaternion.clone(),velocity:this.body.velocity.clone(),hp:this.hp,kills:this.kills}}}const Lc=1,Ly=1.5;class Iy{constructor(t,e,n){this._camera=t,this._player=e,this._map=n,this._forward=new I(0,0,-1);const i=new I(e.body.position.x,e.body.position.y,e.body.position.z),s=n.surfaceNormal;this._currentPosition=i.clone().addScaledVector(s,Lc+2),this._currentLookat=i.clone()}update(t){const e=this._player.body.position,n=new I(e.x,e.y,e.z),i=this._map.surfaceNormal,s=i.clone(),r=new I(0,1,0);let a=r.clone().sub(s.clone().multiplyScalar(r.dot(s)));a.lengthSq()<.001&&a.set(1,0,0),a.normalize();const l=new ze().setFromAxisAngle(s,this._player._yaw),c=a.clone().applyQuaternion(l),u=new I().crossVectors(c,s).normalize(),d=n.clone().addScaledVector(i,1.5),h=this._player._aimPitch,f=new ze().setFromAxisAngle(u,-h),g=c.clone().applyQuaternion(f),_=d.clone().addScaledVector(g,-5).addScaledVector(s,Lc).addScaledVector(u,Ly),p=d.clone().addScaledVector(g,20),m=1-Math.pow(.001,t);this._currentPosition.lerp(_,m),this._currentLookat.lerp(p,m);const y=this._map.groundY+1.5;this._currentPosition.y<y&&(this._currentPosition.y=y),this._camera.position.copy(this._currentPosition),this._camera.up.copy(i),this._camera.lookAt(this._currentLookat),this._forward.copy(g)}get forward(){return this._forward.clone()}get pitch(){return this._player._aimPitch}}const ms=200,ki=new I(0,-99999,0);class Ny{constructor(t){this._scene=t,this._particles=Array.from({length:ms},()=>({active:!1,position:new I,velocity:new I,life:0,maxLife:1,baseR:1,baseG:1,baseB:1})),this._positions=new Float32Array(ms*3),this._colors=new Float32Array(ms*3);const e=new Le;e.setAttribute("position",new Be(this._positions,3)),e.setAttribute("color",new Be(this._colors,3));const n=new pa({size:.35,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this._points=new yh(e,n),this._points.frustumCulled=!1,t.add(this._points)}emit(t,e,n,i,s,r){const a=n instanceof xt?n:new xt(n),l=e.clone().normalize(),c=r*Math.PI/180;let u=0;for(let d=0;d<ms&&u<i;d++){const h=this._particles[d];if(h.active)continue;h.active=!0,h.position.copy(t),h.life=.2+Math.random()*.3,h.maxLife=h.life;const f=Math.random()*Math.PI*2,g=Math.random()*c,_=new I(Math.sin(g)*Math.cos(f),Math.sin(g)*Math.sin(f),Math.cos(g)),p=new ze().setFromUnitVectors(new I(0,0,1),l);_.applyQuaternion(p),h.velocity.copy(_).multiplyScalar(s*(.7+Math.random()*.6)),h.baseR=a.r,h.baseG=a.g,h.baseB=a.b,u++}}update(t){const e=this._points.geometry.attributes.position;for(let n=0;n<ms;n++){const i=this._particles[n],s=n*3;if(!i.active){this._positions[s]=ki.x,this._positions[s+1]=ki.y,this._positions[s+2]=ki.z;continue}if(i.life-=t,i.life<=0){i.active=!1,this._positions[s]=ki.x,this._positions[s+1]=ki.y,this._positions[s+2]=ki.z;continue}i.position.addScaledVector(i.velocity,t),i.velocity.multiplyScalar(.92),this._positions[s]=i.position.x,this._positions[s+1]=i.position.y,this._positions[s+2]=i.position.z;const r=Math.max(0,i.life/i.maxLife);this._colors[s]=i.baseR*r,this._colors[s+1]=i.baseG*r,this._colors[s+2]=i.baseB*r}e.needsUpdate=!0,this._points.geometry.attributes.color.needsUpdate=!0}}const Dy=50,Uy=50,Fy=.8,Or=3,zy=.5,Oy=2,Br=20,By=80,ky=1.5,Vy=.15,Hy=.05,Gy=.15,kr=4,Wy=6,Vr=.75,Ic=20,Nc=80;class qy{constructor(t,e,n,i,s,r=null,a=null){this._scene=t,this._physics=e,this._player=n,this._camera=i,this._particles=s,this._network=r,this._map=a,this._remotePlayers=[],this._magazine=Br,this._reserve=By,this._reloading=!1,this._reloadTimer=0,this._fireCooldown=0,this._isCharging=!1,this._chargeTimer=0,this._crushed=!1,this._meleeTimer=0,this._meleeState="idle",this._meleeCooldown=0,this._meleePending=null,this._activeSnowballs=[],this._pool=[],this._buildPool(),this._setupInput()}_buildPool(){const t=new ve(.25,8,8);for(let e=0;e<Dy;e++){const n=new he({color:this._player.playerColor,roughness:.95,metalness:0}),i=new zt(t,n);i.visible=!1,this._scene.add(i);const s=new ht({mass:.01,shape:new Ms(.25),linearDamping:0,angularDamping:1,collisionFilterGroup:2,collisionFilterMask:1});s.sleep(),this._physics.addBody(s),this._pool.push({mesh:i,body:s,active:!1,life:0,scale:1})}}_getInactive(){return this._pool.find(t=>!t.active)??null}_setupInput(){document.addEventListener("mousedown",t=>{if(!(t.button!==0||!document.pointerLockElement)&&!(this._player.isFallen||this._player._stunTimer>0)&&this._meleeState==="idle"){if(this._magazine<=0){this._startReload();return}this._isCharging=!0,this._chargeTimer=0,this._crushed=!1,this._player.heldSnowball.visible=!0,this._player.heldSnowball.scale.set(1,1,1)}}),document.addEventListener("mouseup",t=>{t.button===0&&this._isCharging&&this._releaseCharge()}),document.addEventListener("keydown",t=>{t.code==="KeyR"&&this._startReload(),t.code==="KeyF"&&this.tryMelee(this._remotePlayers)})}_releaseCharge(){if(this._isCharging=!1,this._player.heldSnowball.visible=!1,this._player._flipR.rotation.x=0,this._crushed)return;const t=1+Math.min(this._chargeTimer,kr)*Vr;this._chargeTimer<.2?(this._fireCooldown=0,this.tryShoot(1)):this.tryShoot(t)}_selfCrush(){this._crushed=!0,this._isCharging=!1,this._player.heldSnowball.visible=!1,this._player._flipR.rotation.x=0,this._player.isFallen=!0,this._player._fallTimer=3;const t=1+kr*Vr;this.tryShoot(t,!0)}tryShoot(t=1,e=!1){if(this._reloading||this._fireCooldown>0||this._magazine<=0){this._magazine<=0&&!this._reloading&&this._startReload();return}this._fireCooldown=zy,this._magazine--;const n=this._getInactive();if(!n)return;const i=this._camera.forward,s=new I,a=.25*t;n.mesh.scale.set(t,t,t),n.scale=t;const l=f=>{if(!n.active)return;const g=f.body;if(g===this._player.body)return;const _=this._remotePlayers.find(v=>v.body===g);if(_){const v=Math.min(Nc,Math.round(Ic*n.scale));_.hp=Math.max(0,(_.hp??100)-v),this._network&&this._network.sendHit(_.id,v);const w=new I(g.position.x,g.position.y,g.position.z);this._particles.emit(w,new I(0,1,0),this._player.playerColor,12,6,60),this._particles.emit(w,new I(0,1,0),16777215,4,3,45);const R=new I(this._player.body.position.x,this._player.body.position.y,this._player.body.position.z),T=1-Math.min(w.distanceTo(R)/50,1);De.hitPlayer(T)}else De.hitTerrain();const p=new I(n.body.position.x,n.body.position.y,n.body.position.z),m=this._map?this._map.surfaceNormal:new I(0,1,0);this._particles.emit(p,m,this._player.playerColor,8,5,45),this._particles.emit(p,m,16777215,4,3,60),n.body.removeEventListener("collide",l);const y=this._activeSnowballs.indexOf(n);y!==-1&&this._despawnSnowball(n,y)};n.body.addEventListener("collide",l),n._onCollide=l,n.body.shapes.length=0,n.body.shapeOffsets.length=0,n.body.shapeOrientations.length=0,n.body.addShape(new Ms(a)),n.body.mass=.01*t,n.body.updateMassProperties(),n.body.wakeUp();let c=i.clone(),u=Uy*(1+(t-1)*.15);if(e){const f=new I(this._player.body.position.x,this._player.body.position.y,this._player.body.position.z),g=this._map?this._map.surfaceNormal:new I(0,1,0);f.addScaledVector(g,3),n.body.position.set(f.x,f.y,f.z),n.body.velocity.set(0,0,0)}else{const f=new I(this._player.body.position.x,this._player.body.position.y,this._player.body.position.z),g=this._map?this._map.surfaceNormal:new I(0,1,0);s.copy(f).addScaledVector(g,.5).addScaledVector(i,1.2+a),n.body.position.set(s.x,s.y,s.z),c=i.clone(),n.body.velocity.set(c.x*u,c.y*u,c.z*u)}if(n.mesh.visible=!0,n.active=!0,n.life=Or,n.mesh.material.color.copy(this._player.playerColor),De.shoot(),this._activeSnowballs.push(n),this._network&&!e){const f="#"+this._player.playerColor.getHexString();this._network.sendProjectile({position:{x:s.x,y:s.y,z:s.z},velocity:{x:c.x*u,y:c.y*u,z:c.z*u},scale:t,color:f,lifetime:Or})}const d=Math.floor(30*t),h=s.clone().addScaledVector(c,1);this._particles.emit(h,c,16777215,d,8,20),this._magazine===0&&this._startReload()}_startReload(){this._reloading||this._reserve<=0||this._magazine===Br||(this._reloading=!0,this._reloadTimer=Oy)}_finishReload(){const t=Br-this._magazine,e=Math.min(t,this._reserve);this._magazine+=e,this._reserve-=e,this._reloading=!1}tryMelee(t){this._meleeState!=="idle"||this._meleeCooldown>0||(this._meleeState="windup",this._meleeTimer=0,this._meleeCooldown=ky,this._meleePending={remotePlayers:t,hitChecked:!1},De.meleeSwoosh())}_updateMelee(t){if(this._meleeState==="idle")return;this._meleeTimer+=t;const e=this._player.rightFlipper;let n=0,i=0;if(this._meleeState==="windup"){const s=Math.min(this._meleeTimer/Vy,1);e.rotation.x=-s*2.5,e.rotation.z=s*1,n=-s*.3,i=-s*.4,s>=1&&(this._meleeState="hold",this._meleeTimer=0)}else if(this._meleeState==="hold"){const s=Math.min(this._meleeTimer/Hy,1);e.rotation.x=-2.5+s*3.5,e.rotation.z=1-s*1.5,n=-.3+s*.7,i=-.4+s*.8,!this._meleePending.hitChecked&&s>=.5&&(this._meleePending.hitChecked=!0,this._checkMeleeHit(this._meleePending.remotePlayers)),s>=1&&(this._meleeState="return",this._meleeTimer=0)}else if(this._meleeState==="return"){const s=Math.min(this._meleeTimer/Gy,1);e.rotation.x=1*(1-s),e.rotation.z=-.5*(1-s),n=.4*(1-s),i=.4*(1-s),s>=1&&(this._meleeState="idle")}if(n!==0||i!==0){const s=new ze().setFromEuler(new Ke(n,0,i));this._player.group.quaternion.multiply(s)}}_checkMeleeHit(t){if(!t||t.length===0)return;const e=new I(this._player.body.position.x,this._player.body.position.y,this._player.body.position.z),n=this._map?this._map.surfaceNormal:new I(0,1,0),i=new I(0,1,0);let s=i.clone().sub(n.clone().multiplyScalar(i.dot(n)));s.lengthSq()<.001&&s.set(1,0,0),s.normalize();const r=new ze().setFromAxisAngle(n,this._player._yaw),a=s.clone().applyQuaternion(r),l=e.clone().addScaledVector(a,2);for(const c of t)if(c.position&&l.distanceTo(c.position)<3.5){const u=c.position.clone().sub(e).normalize();this._particles.emit(c.position,u,16776960,10,6,30),this._network&&this._network.sendMeleeHit(c.id)}}update(t){if(this._fireCooldown=Math.max(0,this._fireCooldown-t),this._meleeCooldown=Math.max(0,this._meleeCooldown-t),this._isCharging){this._chargeTimer+=t,this._player._flipR.rotation.x=-Math.PI/1.5;const e=1+Math.min(this._chargeTimer,kr)*Vr;this._player.heldSnowball.scale.set(e,e,e),this._chargeTimer>=Wy&&!this._crushed&&this._selfCrush()}this._reloading&&(this._reloadTimer-=t,this._reloadTimer<=0&&this._finishReload()),this._updateMelee(t);for(let e=this._activeSnowballs.length-1;e>=0;e--){const n=this._activeSnowballs[e];n.life-=t,n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion),n.active&&Math.random()>.3/n.mesh.scale.x&&this._particles.emit(n.mesh.position,new I(0,1,0),16777215,1,1,360);const i=new I(n.body.position.x,n.body.position.y,n.body.position.z),s=28*Fy*Math.max(.3,1-(n.scale-1)*.15),r=n.body.mass;if(n.body.applyForce(new S(0,-s*r,0),new S(0,0,0)),!n._hitRemote){for(const c of this._remotePlayers){if(!c.position)continue;const u=1.2*(n.scale??1);if(i.distanceTo(c.position)<u){n._hitRemote=!0;const d=Math.min(Nc,Math.round(Ic*(n.scale??1)));this._network&&this._network.sendHit(c.id,d),this._particles.emit(i,new I(0,1,0),this._player.playerColor,12,6,60),this._particles.emit(i,new I(0,1,0),16777215,4,3,45);const h=new I(this._player.body.position.x,this._player.body.position.y,this._player.body.position.z),f=1-Math.min(i.distanceTo(h)/50,1);De.hitPlayer(f),this._despawnSnowball(n,e);break}}if(!n.active)continue}const a=this._map?this._map.groundY:0,l=i.y<a+.3&&n.life<Or-.1;if(l||n.life<=0){if(l){const c=this._map?this._map.surfaceNormal:new I(0,1,0);this._particles.emit(i,c,this._player.playerColor,8,5,45),this._particles.emit(i,c,16777215,4,3,60),De.hitTerrain()}this._despawnSnowball(n,e)}}}_despawnSnowball(t,e){t._onCollide&&(t.body.removeEventListener("collide",t._onCollide),t._onCollide=null),t.body.shapes.length=0,t.body.shapeOffsets.length=0,t.body.shapeOrientations.length=0,t.body.addShape(new Ms(.25)),t.body.mass=.01,t.body.updateMassProperties(),t.mesh.scale.set(1,1,1),t.active=!1,t._hitRemote=!1,t.mesh.visible=!1,t.body.sleep(),t.body.position.set(0,-9999,0),t.body.velocity.set(0,0,0),this._activeSnowballs.splice(e,1)}get ammo(){return this._magazine}get reserveAmmo(){return this._reserve}get isReloading(){return this._reloading}get isCharging(){return this._isCharging}get chargeAmount(){return Math.min(this._chargeTimer/4,1)}set remotePlayers(t){this._remotePlayers=t??[]}}class Xy{constructor(){this._el={},this._killFeedEntries=[],this._notifyTimer=null,this._vignetteTimer=null,this._injectStyles(),this._buildDOM(),this._cacheEls()}_injectStyles(){const t=`
      #hud-root * { box-sizing: border-box; user-select: none; pointer-events: none; font-family: 'Segoe UI', system-ui, sans-serif; }
      #hud-root { position: fixed; inset: 0; z-index: 100; }

      /* crosshair */
      #hud-crosshair { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 24px; height: 24px; }
      .ch-line { position: absolute; background: rgba(255,255,255,0.85); border-radius: 1px; transition: transform 0.12s ease; }
      .ch-top    { width: 2px; height: 8px; top: 0;    left: 11px; }
      .ch-bottom { width: 2px; height: 8px; bottom: 0; left: 11px; }
      .ch-left   { height: 2px; width: 8px; left: 0;   top: 11px; }
      .ch-right  { height: 2px; width: 8px; right: 0;  top: 11px; }
      #hud-crosshair.shooting .ch-top    { transform: translateY(-4px); }
      #hud-crosshair.shooting .ch-bottom { transform: translateY(4px); }
      #hud-crosshair.shooting .ch-left   { transform: translateX(-4px); }
      #hud-crosshair.shooting .ch-right  { transform: translateX(4px); }

      /* charge ring */
      #hud-charge { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 56px; height: 56px; opacity: 0; transition: opacity 0.1s; }
      #hud-charge.visible { opacity: 1; }
      #hud-charge svg { width: 100%; height: 100%; transform: rotate(-90deg); }
      #hud-charge-text { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #fff; font-weight: 600; }

      /* bottom-left: HP */
      #hud-hp { position: absolute; bottom: 28px; left: 24px; display: flex; flex-direction: column; gap: 5px; width: 180px; }
      #hud-hp-label { display: flex; align-items: center; gap: 6px; }
      #hud-hp-value { font-size: 22px; font-weight: 700; color: #fff; line-height: 1; }
      #hud-hp-bar { width: 100%; height: 6px; background: rgba(255,255,255,0.15); border-radius: 3px; overflow: hidden; }
      #hud-hp-fill { height: 100%; width: 100%; background: #4488ff; border-radius: 3px; transition: width 0.25s ease, background 0.4s ease; }
      #hud-hp.danger #hud-hp-fill { background: #ff4444; animation: hpPulse 0.6s ease-in-out infinite alternate; }
      @keyframes hpPulse { from { opacity: 1; } to { opacity: 0.5; } }

      /* bottom-left (below HP): Stamina */
      #hud-stamina { position: absolute; bottom: 0px; left: 24px; display: flex; flex-direction: column; gap: 3px; width: 180px; }
      #hud-stamina-label { font-size: 10px; color: rgba(255,255,255,0.45); letter-spacing: 0.08em; }
      #hud-stamina-bar { width: 100%; height: 4px; background: rgba(255,255,255,0.12); border-radius: 2px; overflow: hidden; }
      #hud-stamina-fill { height: 100%; width: 100%; background: #44ddaa; border-radius: 2px; transition: width 0.1s linear, background 0.3s ease; }
      #hud-stamina.low  #hud-stamina-fill { background: #ffaa33; }
      #hud-stamina.empty #hud-stamina-fill { background: #ff4444; animation: hpPulse 0.5s ease-in-out infinite alternate; }
      #hud-stamina.fallen #hud-stamina-label { color: #ff8844; }

      /* bottom-right: Ammo — sits above the minimap */
      #hud-ammo { position: absolute; bottom: 160px; right: 24px; display: flex; flex-direction: column; align-items: flex-end; gap: 3px; }
      #hud-ammo-main { display: flex; align-items: baseline; gap: 6px; }
      #hud-ammo-mag { font-size: 32px; font-weight: 700; color: #fff; line-height: 1; transition: color 0.2s; }
      #hud-ammo-reserve { font-size: 14px; color: rgba(255,255,255,0.5); }
      #hud-ammo-status { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; height: 16px; }
      #hud-ammo.empty #hud-ammo-mag { color: #ff4444; }
      #hud-ammo.reloading #hud-ammo-mag { color: #ffaa33; }
      .ammo-flash { animation: ammoFlash 0.4s ease-in-out infinite alternate; }
      @keyframes ammoFlash { from { opacity: 1; } to { opacity: 0.3; } }

      /* top-right: kill feed */
      #hud-killfeed { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; align-items: flex-end; gap: 5px; width: 260px; }
      .kill-entry { background: rgba(0,0,0,0.45); padding: 5px 10px; border-radius: 4px; font-size: 13px; color: #fff; white-space: nowrap; animation: killFadeIn 0.2s ease; transition: opacity 0.5s; }
      .kill-entry .killer { color: #88ccff; font-weight: 600; }
      .kill-entry .victim { color: #ff8888; font-weight: 600; }
      .kill-entry.fading { opacity: 0; }
      @keyframes killFadeIn { from { opacity: 0; transform: translateX(8px); } to { opacity: 1; transform: none; } }

      /* top-left: player count */
      #hud-count { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.4); padding: 6px 12px; border-radius: 4px; font-size: 13px; color: rgba(255,255,255,0.8); }

      /* top-center: zone timer */
      #hud-zone { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,30,0.5); padding: 6px 16px; border-radius: 4px; font-size: 13px; color: #aaddff; text-align: center; display: none; }
      #hud-zone.visible { display: block; }
      #hud-zone.urgent { animation: zonePulse 0.5s ease-in-out infinite alternate; }
      @keyframes zonePulse { from { color: #aaddff; } to { color: #fff; } }

      /* center: notification */
      #hud-notify { position: absolute; top: 42%; left: 50%; transform: translate(-50%,-50%); font-size: 28px; font-weight: 700; color: #fff; text-shadow: 0 0 20px rgba(100,180,255,0.8); letter-spacing: 0.05em; text-align: center; opacity: 0; transition: opacity 0.15s; }
      #hud-notify.visible { opacity: 1; }

      /* state banner */
      #hud-state-banner { position: absolute; top: 38%; left: 50%; transform: translate(-50%,-50%); font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.7); letter-spacing: 0.15em; text-align: center; opacity: 0; transition: opacity 0.2s; }
      #hud-state-banner.visible { opacity: 1; }

      /* damage vignette */
      #hud-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 50%, #aaccff 130%); opacity: 0; transition: opacity 0.08s ease-in; }

      /* minimap */
      #hud-minimap { position: absolute; bottom: 28px; right: 24px; width: 120px; height: 120px; }
      #hud-minimap canvas { width: 100%; height: 100%; border-radius: 50%; }
    `,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}_buildDOM(){const t=document.createElement("div");t.id="hud-root",t.innerHTML=`
      <div id="hud-crosshair">
        <div class="ch-line ch-top"></div>
        <div class="ch-line ch-bottom"></div>
        <div class="ch-line ch-left"></div>
        <div class="ch-line ch-right"></div>
      </div>

      <div id="hud-charge">
        <svg viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="24" stroke="rgba(255,255,255,0.15)" stroke-width="3"/>
          <circle id="hud-charge-arc" cx="28" cy="28" r="24"
            stroke="#44ccff" stroke-width="3" stroke-linecap="round"
            stroke-dasharray="150.8" stroke-dashoffset="150.8"/>
        </svg>
        <div id="hud-charge-text"></div>
      </div>

      <div id="hud-hp">
        <div id="hud-hp-label">
          <span style="font-size:16px">🐧</span>
          <span id="hud-hp-value">100</span>
        </div>
        <div id="hud-hp-bar"><div id="hud-hp-fill"></div></div>
      </div>

      <div id="hud-stamina">
        <div id="hud-stamina-label">STAMINA</div>
        <div id="hud-stamina-bar"><div id="hud-stamina-fill"></div></div>
      </div>

      <div id="hud-ammo">
        <div id="hud-ammo-main">
          <span id="hud-ammo-mag">20</span>
          <span id="hud-ammo-reserve">/ 80</span>
        </div>
        <div id="hud-ammo-status"></div>
      </div>

      <div id="hud-killfeed"></div>
      <div id="hud-count">— alive 🐧</div>
      <div id="hud-zone">❄ Blizzard closes in <span id="hud-zone-time">--</span>s</div>
      <div id="hud-notify"></div>
      <div id="hud-state-banner"></div>
      <div id="hud-vignette"></div>
      <div id="hud-minimap"><canvas id="hud-minimap-canvas" width="120" height="120"></canvas></div>
    `,document.body.appendChild(t)}_cacheEls(){["hud-crosshair","hud-charge","hud-charge-arc","hud-charge-text","hud-hp","hud-hp-value","hud-hp-fill","hud-stamina","hud-stamina-label","hud-stamina-fill","hud-ammo","hud-ammo-mag","hud-ammo-reserve","hud-ammo-status","hud-killfeed","hud-count","hud-zone","hud-zone-time","hud-notify","hud-state-banner","hud-vignette"].forEach(t=>{this._el[t]=document.getElementById(t)}),this._minimapCanvas=document.getElementById("hud-minimap-canvas"),this._minimapCtx=this._minimapCanvas.getContext("2d"),this._minimapSize=120,this._minimapRange=200,this._minimapBgCanvas=null,this._zoneRadius=null,this._zoneActive=!1}update(t,e,n=[]){this._updateHP(t.hp),this._updateStamina(t.slideFuel,t.isFallen),this._updateAmmo(e.ammo,e.reserveAmmo,e.isReloading),this._updateCharge(e._isCharging,e._chargeTimer),this._updateStateBanner(t._stunTimer,t.isFallen),this._updateMinimap(t,n,t._yaw??0)}setMap(t){this._minimapRange=t.mapHalf??200,this._minimapBgCanvas=this._prerenderMapBg(t)}_prerenderMapBg(t){const e=this._minimapSize,n=e/2,i=this._minimapRange,s=document.createElement("canvas");s.width=s.height=e;const r=s.getContext("2d"),a=[];if(t.minimapObstacles)for(const d of t.minimapObstacles)d.type==="box"&&a.push({x:d.position.x,z:d.position.z,w:d.size.x,d:d.size.z,topY:d.position.y+d.size.y/2});else if(t.obstacles)for(const d of t.obstacles)d.type==="box"&&a.push({x:d.pos[0],z:d.pos[2],w:d.size[0],d:d.size[2],topY:d.pos[1]+d.size[1]/2});a.sort((d,h)=>d.topY-h.topY);const l=d=>n+d/i*n,c=d=>n+d/i*n,u=d=>d/(i*2)*e;for(const d of a){const h=l(d.x),f=c(d.z),g=u(d.w),_=u(d.d);if(d.w>i||d.d>i){r.strokeStyle="rgba(120,160,200,0.5)",r.lineWidth=1,r.strokeRect(h-g/2,f-_/2,g,_);continue}let p;d.topY<4?p="rgba(60,100,150,0.70)":d.topY<9?p="rgba(90,130,190,0.75)":d.topY<13?p="rgba(110,155,220,0.80)":p="rgba(160,200,255,0.88)",r.fillStyle=p,r.fillRect(h-g/2,f-_/2,g,_)}return s}setZone(t,e){this._zoneRadius=t,this._zoneActive=e}_updateMinimap(t,e,n){const i=this._minimapCtx,s=this._minimapSize,r=s/2,a=this._minimapRange;i.clearRect(0,0,s,s),i.save(),i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.clip(),i.fillStyle="rgba(5,15,35,0.80)",i.fillRect(0,0,s,s),this._minimapBgCanvas&&i.drawImage(this._minimapBgCanvas,0,0),i.strokeStyle="rgba(255,255,255,0.07)",i.lineWidth=.5,i.beginPath(),i.moveTo(r,0),i.lineTo(r,s),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(s,r),i.stroke();const l=T=>r+T/a*r,c=T=>r+T/a*r;if(this._zoneActive&&this._zoneRadius!=null&&this._zoneRadius<a*2){const T=this._zoneRadius/a*r;i.beginPath(),i.arc(r,r,T,0,Math.PI*2),i.strokeStyle="rgba(100,200,255,0.7)",i.lineWidth=1.5,i.stroke(),i.save(),i.beginPath(),i.arc(r,r,r,0,Math.PI*2),i.arc(r,r,T,0,Math.PI*2,!0),i.fillStyle="rgba(80,140,200,0.18)",i.fill(),i.restore()}for(const T of e){if(!T.position)continue;const C=l(T.position.x),P=c(T.position.z);Math.hypot(C-r,P-r)>r-2||(i.beginPath(),i.arc(C,P,4.5,0,Math.PI*2),i.fillStyle=T.color||"#ff5555",i.fill(),i.strokeStyle="rgba(0,0,0,0.5)",i.lineWidth=1,i.stroke())}const u=l(t.body.position.x),d=c(t.body.position.z),h=Math.sin(n),f=-Math.cos(n),g=9,_=4.5,p=u+h*g,m=d+f*g,y=u-f*_,v=d+h*_,w=u+f*_,R=d-h*_;i.beginPath(),i.moveTo(p,m),i.lineTo(y,v),i.lineTo(w,R),i.closePath(),i.fillStyle="#ffffff",i.shadowColor="rgba(100,200,255,0.8)",i.shadowBlur=4,i.fill(),i.shadowBlur=0,i.restore(),i.save(),i.beginPath(),i.arc(r,r,r-1,0,Math.PI*2),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=1.5,i.stroke(),i.restore()}_updateHP(t){const e=Math.max(0,Math.min(100,t));this._el["hud-hp-value"].textContent=Math.round(t),this._el["hud-hp-fill"].style.width=e+"%",this._el["hud-hp"].classList.toggle("danger",t<=30)}_updateStamina(t,e){const i=Math.max(0,Math.min(1,t/3))*100;this._el["hud-stamina-fill"].style.width=i+"%",this._el["hud-stamina"].classList.toggle("low",i<50&&i>10),this._el["hud-stamina"].classList.toggle("empty",i<=10),this._el["hud-stamina"].classList.toggle("fallen",e),this._el["hud-stamina-label"].textContent=e?"WIPEOUT":"STAMINA"}_updateAmmo(t,e,n){const i=this._el["hud-ammo-status"];this._el["hud-ammo-mag"].textContent=t,this._el["hud-ammo-reserve"].textContent="/ "+e,this._el["hud-ammo"].classList.toggle("empty",t===0&&!n),this._el["hud-ammo"].classList.toggle("reloading",n),n?(i.textContent="RELOADING...",i.style.color="#ffaa33",i.classList.add("ammo-flash")):t===0?(i.textContent="RELOAD  [R]",i.style.color="#ff5533",i.classList.add("ammo-flash")):(i.textContent="",i.classList.remove("ammo-flash"))}_updateCharge(t,e){if(this._el["hud-charge"].classList.toggle("visible",t),!t)return;const n=Math.min(e/4,1);this._el["hud-charge-arc"].setAttribute("stroke-dashoffset",(150.8*(1-n)).toFixed(1)),this._el["hud-charge-arc"].setAttribute("stroke",n<.5?"#44ccff":n<.85?"#ffaa33":"#ff4444"),this._el["hud-charge-text"].textContent=n>=1?"MAX":""}_updateStateBanner(t,e){const n=this._el["hud-state-banner"];t>0?(n.textContent="★ STUNNED ★",n.classList.add("visible")):e?(n.textContent="💥 WIPEOUT",n.classList.add("visible")):n.classList.remove("visible")}shootFeedback(){const t=this._el["hud-crosshair"];t.classList.add("shooting"),setTimeout(()=>t.classList.remove("shooting"),150)}takeDamage(){this._vignetteTimer&&clearTimeout(this._vignetteTimer);const t=this._el["hud-vignette"];t.style.transition="opacity 0.08s ease-in",t.style.opacity="0.55",this._vignetteTimer=setTimeout(()=>{t.style.transition="opacity 0.5s ease-out",t.style.opacity="0"},120)}addKill(t,e,n){const i=n==="melee"?"🐧":"❄",s=document.createElement("div");s.className="kill-entry",s.innerHTML=`<span class="killer">${t}</span> ${i} <span class="victim">${e}</span>`,this._el["hud-killfeed"].appendChild(s),this._killFeedEntries.push(s),this._killFeedEntries.length>5&&this._killFeedEntries.shift().remove(),setTimeout(()=>{s.classList.add("fading"),setTimeout(()=>{s.remove()},500)},5e3)}notify(t,e=2e3){this._notifyTimer&&clearTimeout(this._notifyTimer);const n=this._el["hud-notify"];n.textContent=t,n.classList.add("visible"),this._notifyTimer=setTimeout(()=>n.classList.remove("visible"),e)}setZoneTimer(t){const e=this._el["hud-zone"];if(t===null){e.classList.remove("visible","urgent");return}e.classList.add("visible"),e.classList.toggle("urgent",t<5),this._el["hud-zone-time"].textContent=Math.ceil(t)}setPlayerCount(t,e){this._el["hud-count"].textContent=`${t} / ${e} alive 🐧`}show(){document.getElementById("hud-root").style.display=""}hide(){document.getElementById("hud-root").style.display="none"}}const vn=Object.create(null);vn.open="0";vn.close="1";vn.ping="2";vn.pong="3";vn.message="4";vn.upgrade="5";vn.noop="6";const xo=Object.create(null);Object.keys(vn).forEach(o=>{xo[vn[o]]=o});const ia={type:"error",data:"parser error"},zh=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Oh=typeof ArrayBuffer=="function",Bh=o=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(o):o&&o.buffer instanceof ArrayBuffer,ya=({type:o,data:t},e,n)=>zh&&t instanceof Blob?e?n(t):Dc(t,n):Oh&&(t instanceof ArrayBuffer||Bh(t))?e?n(t):Dc(new Blob([t]),n):n(vn[o]+(t||"")),Dc=(o,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(o)};function Uc(o){return o instanceof Uint8Array?o:o instanceof ArrayBuffer?new Uint8Array(o):new Uint8Array(o.buffer,o.byteOffset,o.byteLength)}let Hr;function Yy(o,t){if(zh&&o.data instanceof Blob)return o.data.arrayBuffer().then(Uc).then(t);if(Oh&&(o.data instanceof ArrayBuffer||Bh(o.data)))return t(Uc(o.data));ya(o,!1,e=>{Hr||(Hr=new TextEncoder),t(Hr.encode(e))})}const Fc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let o=0;o<Fc.length;o++)vs[Fc.charCodeAt(o)]=o;const jy=o=>{let t=o.length*.75,e=o.length,n,i=0,s,r,a,l;o[o.length-1]==="="&&(t--,o[o.length-2]==="="&&t--);const c=new ArrayBuffer(t),u=new Uint8Array(c);for(n=0;n<e;n+=4)s=vs[o.charCodeAt(n)],r=vs[o.charCodeAt(n+1)],a=vs[o.charCodeAt(n+2)],l=vs[o.charCodeAt(n+3)],u[i++]=s<<2|r>>4,u[i++]=(r&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c},$y=typeof ArrayBuffer=="function",xa=(o,t)=>{if(typeof o!="string")return{type:"message",data:kh(o,t)};const e=o.charAt(0);return e==="b"?{type:"message",data:Ky(o.substring(1),t)}:xo[e]?o.length>1?{type:xo[e],data:o.substring(1)}:{type:xo[e]}:ia},Ky=(o,t)=>{if($y){const e=jy(o);return kh(e,t)}else return{base64:!0,data:o}},kh=(o,t)=>{switch(t){case"blob":return o instanceof Blob?o:new Blob([o]);case"arraybuffer":default:return o instanceof ArrayBuffer?o:o.buffer}},Vh="",Zy=(o,t)=>{const e=o.length,n=new Array(e);let i=0;o.forEach((s,r)=>{ya(s,!1,a=>{n[r]=a,++i===e&&t(n.join(Vh))})})},Jy=(o,t)=>{const e=o.split(Vh),n=[];for(let i=0;i<e.length;i++){const s=xa(e[i],t);if(n.push(s),s.type==="error")break}return n};function Qy(){return new TransformStream({transform(o,t){Yy(o,e=>{const n=e.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}o.data&&typeof o.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(e)})}})}let Gr;function _o(o){return o.reduce((t,e)=>t+e.length,0)}function vo(o,t){if(o[0].length===t)return o.shift();const e=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)e[i]=o[0][n++],n===o[0].length&&(o.shift(),n=0);return o.length&&n<o[0].length&&(o[0]=o[0].slice(n)),e}function tx(o,t){Gr||(Gr=new TextDecoder);const e=[];let n=0,i=-1,s=!1;return new TransformStream({transform(r,a){for(e.push(r);;){if(n===0){if(_o(e)<1)break;const l=vo(e,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(_o(e)<2)break;const l=vo(e,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(_o(e)<8)break;const l=vo(e,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(ia);break}i=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(_o(e)<i)break;const l=vo(e,i);a.enqueue(xa(s?l:Gr.decode(l),t)),n=0}if(i===0||i>o){a.enqueue(ia);break}}}})}const Hh=4;function me(o){if(o)return ex(o)}function ex(o){for(var t in me.prototype)o[t]=me.prototype[t];return o}me.prototype.on=me.prototype.addEventListener=function(o,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+o]=this._callbacks["$"+o]||[]).push(t),this};me.prototype.once=function(o,t){function e(){this.off(o,e),t.apply(this,arguments)}return e.fn=t,this.on(o,e),this};me.prototype.off=me.prototype.removeListener=me.prototype.removeAllListeners=me.prototype.removeEventListener=function(o,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+o];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+o],this;for(var n,i=0;i<e.length;i++)if(n=e[i],n===t||n.fn===t){e.splice(i,1);break}return e.length===0&&delete this._callbacks["$"+o],this};me.prototype.emit=function(o){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+o],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,i=e.length;n<i;++n)e[n].apply(this,t)}return this};me.prototype.emitReserved=me.prototype.emit;me.prototype.listeners=function(o){return this._callbacks=this._callbacks||{},this._callbacks["$"+o]||[]};me.prototype.hasListeners=function(o){return!!this.listeners(o).length};const Go=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),je=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),nx="arraybuffer";function Gh(o,...t){return t.reduce((e,n)=>(o.hasOwnProperty(n)&&(e[n]=o[n]),e),{})}const ix=je.setTimeout,sx=je.clearTimeout;function Wo(o,t){t.useNativeTimers?(o.setTimeoutFn=ix.bind(je),o.clearTimeoutFn=sx.bind(je)):(o.setTimeoutFn=je.setTimeout.bind(je),o.clearTimeoutFn=je.clearTimeout.bind(je))}const ox=1.33;function rx(o){return typeof o=="string"?ax(o):Math.ceil((o.byteLength||o.size)*ox)}function ax(o){let t=0,e=0;for(let n=0,i=o.length;n<i;n++)t=o.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Wh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function lx(o){let t="";for(let e in o)o.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(o[e]));return t}function cx(o){let t={},e=o.split("&");for(let n=0,i=e.length;n<i;n++){let s=e[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}class hx extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class Ma extends me{constructor(t){super(),this.writable=!1,Wo(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new hx(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=xa(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=lx(t);return e.length?"?"+e:""}}class ux extends Ma{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};Jy(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,Zy(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Wh()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let qh=!1;try{qh=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const dx=qh;function fx(){}class px extends ux{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class _n extends me{constructor(t,e,n){super(),this.createRequest=t,Wo(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=Gh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=_n.requestsCount++,_n.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=fx,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete _n.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}_n.requestsCount=0;_n.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",zc);else if(typeof addEventListener=="function"){const o="onpagehide"in je?"pagehide":"unload";addEventListener(o,zc,!1)}}function zc(){for(let o in _n.requests)_n.requests.hasOwnProperty(o)&&_n.requests[o].abort()}const mx=function(){const o=Xh({xdomain:!1});return o&&o.responseType!==null}();class gx extends px{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=mx&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new _n(Xh,this.uri(),t)}}function Xh(o){const t=o.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||dx))return new XMLHttpRequest}catch{}if(!t)try{return new je[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Yh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class _x extends Ma{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Yh?{}:Gh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;ya(n,this.supportsBinary,s=>{try{this.doWrite(n,s)}catch{}i&&Go(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Wh()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Wr=je.WebSocket||je.MozWebSocket;class vx extends _x{createSocket(t,e,n){return Yh?new Wr(t,e,n):e?new Wr(t,e):new Wr(t)}doWrite(t,e){this.ws.send(e)}}class yx extends Ma{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=tx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),i=Qy();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const r={type:"open"};this.query.sid&&(r.data=`{"sid":"${this.query.sid}"}`),this._writer.write(r).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;this._writer.write(n).then(()=>{i&&Go(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const xx={websocket:vx,webtransport:yx,polling:gx},Mx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Sx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function sa(o){if(o.length>8e3)throw"URI too long";const t=o,e=o.indexOf("["),n=o.indexOf("]");e!=-1&&n!=-1&&(o=o.substring(0,e)+o.substring(e,n).replace(/:/g,";")+o.substring(n,o.length));let i=Mx.exec(o||""),s={},r=14;for(;r--;)s[Sx[r]]=i[r]||"";return e!=-1&&n!=-1&&(s.source=t,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=bx(s,s.path),s.queryKey=wx(s,s.query),s}function bx(o,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function wx(o,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(e[i]=s)}),e}const oa=typeof addEventListener=="function"&&typeof removeEventListener=="function",Mo=[];oa&&addEventListener("offline",()=>{Mo.forEach(o=>o())},!1);class Yn extends me{constructor(t,e){if(super(),this.binaryType=nx,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const n=sa(t);e.hostname=n.host,e.secure=n.protocol==="https"||n.protocol==="wss",e.port=n.port,n.query&&(e.query=n.query)}else e.host&&(e.hostname=sa(e.host).host);Wo(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},e.transports.forEach(n=>{const i=n.prototype.name;this.transports.push(i),this._transportsByName[i]=n}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=cx(this.opts.query)),oa&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Mo.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=Hh,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Yn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}onOpen(){this.readyState="open",Yn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(e+=rx(i)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Go(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,i){if(typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:t,data:e,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(Yn.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),oa&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Mo.indexOf(this._offlineEventListener);n!==-1&&Mo.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}}Yn.protocol=Hh;class Ex extends Yn{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let e=this.createTransport(t),n=!1;Yn.priorWebsocketSuccess=!1;const i=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;Yn.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=e.name,this.emitReserved("upgradeError",h)}}))};function s(){n||(n=!0,u(),e.close(),e=null)}const r=d=>{const h=new Error("probe error: "+d);h.transport=e.name,s(),this.emitReserved("upgradeError",h)};function a(){r("transport closed")}function l(){r("socket closed")}function c(d){e&&d.name!==e.name&&s()}const u=()=>{e.removeListener("open",i),e.removeListener("error",r),e.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};e.once("open",i),e.once("error",r),e.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}let Tx=class extends Ex{constructor(t,e={}){const n=typeof t=="object"?t:e;(!n.transports||n.transports&&typeof n.transports[0]=="string")&&(n.transports=(n.transports||["polling","websocket","webtransport"]).map(i=>xx[i]).filter(i=>!!i)),super(t,n)}};function Ax(o,t="",e){let n=o;e=e||typeof location<"u"&&location,o==null&&(o=e.protocol+"//"+e.host),typeof o=="string"&&(o.charAt(0)==="/"&&(o.charAt(1)==="/"?o=e.protocol+o:o=e.host+o),/^(https?|wss?):\/\//.test(o)||(typeof e<"u"?o=e.protocol+"//"+o:o="https://"+o),n=sa(o)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+t,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}const Cx=typeof ArrayBuffer=="function",Rx=o=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(o):o.buffer instanceof ArrayBuffer,jh=Object.prototype.toString,Px=typeof Blob=="function"||typeof Blob<"u"&&jh.call(Blob)==="[object BlobConstructor]",Lx=typeof File=="function"||typeof File<"u"&&jh.call(File)==="[object FileConstructor]";function Sa(o){return Cx&&(o instanceof ArrayBuffer||Rx(o))||Px&&o instanceof Blob||Lx&&o instanceof File}function So(o,t){if(!o||typeof o!="object")return!1;if(Array.isArray(o)){for(let e=0,n=o.length;e<n;e++)if(So(o[e]))return!0;return!1}if(Sa(o))return!0;if(o.toJSON&&typeof o.toJSON=="function"&&arguments.length===1)return So(o.toJSON(),!0);for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)&&So(o[e]))return!0;return!1}function Ix(o){const t=[],e=o.data,n=o;return n.data=ra(e,t),n.attachments=t.length,{packet:n,buffers:t}}function ra(o,t){if(!o)return o;if(Sa(o)){const e={_placeholder:!0,num:t.length};return t.push(o),e}else if(Array.isArray(o)){const e=new Array(o.length);for(let n=0;n<o.length;n++)e[n]=ra(o[n],t);return e}else if(typeof o=="object"&&!(o instanceof Date)){const e={};for(const n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=ra(o[n],t));return e}return o}function Nx(o,t){return o.data=aa(o.data,t),delete o.attachments,o}function aa(o,t){if(!o)return o;if(o&&o._placeholder===!0){if(typeof o.num=="number"&&o.num>=0&&o.num<t.length)return t[o.num];throw new Error("illegal attachments")}else if(Array.isArray(o))for(let e=0;e<o.length;e++)o[e]=aa(o[e],t);else if(typeof o=="object")for(const e in o)Object.prototype.hasOwnProperty.call(o,e)&&(o[e]=aa(o[e],t));return o}const Dx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Vt;(function(o){o[o.CONNECT=0]="CONNECT",o[o.DISCONNECT=1]="DISCONNECT",o[o.EVENT=2]="EVENT",o[o.ACK=3]="ACK",o[o.CONNECT_ERROR=4]="CONNECT_ERROR",o[o.BINARY_EVENT=5]="BINARY_EVENT",o[o.BINARY_ACK=6]="BINARY_ACK"})(Vt||(Vt={}));class Ux{constructor(t){this.replacer=t}encode(t){return(t.type===Vt.EVENT||t.type===Vt.ACK)&&So(t)?this.encodeAsBinary({type:t.type===Vt.EVENT?Vt.BINARY_EVENT:Vt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Vt.BINARY_EVENT||t.type===Vt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Ix(t),n=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(n),i}}class ba extends me{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===Vt.BINARY_EVENT;n||e.type===Vt.BINARY_ACK?(e.type=n?Vt.EVENT:Vt.ACK,this.reconstructor=new Fx(e),e.attachments===0&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(Sa(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(Vt[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Vt.BINARY_EVENT||n.type===Vt.BINARY_ACK){const s=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const r=t.substring(s,e);if(r!=Number(r)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(r);if(!zx(a)||a<0)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const s=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(s,e)}else n.nsp="/";const i=t.charAt(e+1);if(i!==""&&Number(i)==i){const s=e+1;for(;++e;){const r=t.charAt(e);if(r==null||Number(r)!=r){--e;break}if(e===t.length)break}n.id=Number(t.substring(s,e+1))}if(t.charAt(++e)){const s=this.tryParse(t.substr(e));if(ba.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Vt.CONNECT:return Oc(e);case Vt.DISCONNECT:return e===void 0;case Vt.CONNECT_ERROR:return typeof e=="string"||Oc(e);case Vt.EVENT:case Vt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Dx.indexOf(e[0])===-1);case Vt.ACK:case Vt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Fx{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Nx(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const zx=Number.isInteger||function(o){return typeof o=="number"&&isFinite(o)&&Math.floor(o)===o};function Oc(o){return Object.prototype.toString.call(o)==="[object Object]"}const Ox=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ba,Encoder:Ux,get PacketType(){return Vt}},Symbol.toStringTag,{value:"Module"}));function en(o,t,e){return o.on(t,e),function(){o.off(t,e)}}const Bx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class $h extends me{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[en(t,"open",this.onopen.bind(this)),en(t,"packet",this.onpacket.bind(this)),en(t,"error",this.onerror.bind(this)),en(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,i,s;if(Bx.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const r={type:Vt.EVENT,data:e};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,d=e.pop();this._registerAckCallback(u,d),r.id=u}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(t,e){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=e;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},i),r=(...a)=>{this.io.clearTimeoutFn(s),e.apply(this,a)};r.withError=!0,this.acks[t]=r}emitWithAck(t,...e){return new Promise((n,i)=>{const s=(r,a)=>r?i(r):n(a);s.withError=!0,e.push(s),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...s)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(i)):(this._queue.shift(),e&&e(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Vt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Vt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Vt.EVENT:case Vt.BINARY_EVENT:this.onevent(t);break;case Vt.ACK:case Vt.BINARY_ACK:this.onack(t);break;case Vt.DISCONNECT:this.ondisconnect();break;case Vt.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...i){n||(n=!0,e.packet({type:Vt.ACK,id:t,data:i}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Vt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function es(o){o=o||{},this.ms=o.min||100,this.max=o.max||1e4,this.factor=o.factor||2,this.jitter=o.jitter>0&&o.jitter<=1?o.jitter:0,this.attempts=0}es.prototype.duration=function(){var o=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*o);o=Math.floor(t*10)&1?o+e:o-e}return Math.min(o,this.max)|0};es.prototype.reset=function(){this.attempts=0};es.prototype.setMin=function(o){this.ms=o};es.prototype.setMax=function(o){this.max=o};es.prototype.setJitter=function(o){this.jitter=o};class la extends me{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Wo(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new es({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const i=e.parser||Ox;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Tx(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=en(e,"open",function(){n.onopen(),t&&t()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},r=en(e,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),e.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(r),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(en(t,"ping",this.onping.bind(this)),en(t,"data",this.ondata.bind(this)),en(t,"error",this.onerror.bind(this)),en(t,"close",this.onclose.bind(this)),en(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Go(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new $h(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const gs={};function bo(o,t){typeof o=="object"&&(t=o,o=void 0),t=t||{};const e=Ax(o,t.path||"/socket.io"),n=e.source,i=e.id,s=e.path,r=gs[i]&&s in gs[i].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||r;let l;return a?l=new la(n,t):(gs[i]||(gs[i]=new la(n,t)),l=gs[i]),e.query&&!t.query&&(t.query=e.queryKey),l.socket(e.path,t)}Object.assign(bo,{Manager:la,Socket:$h,io:bo,connect:bo});const kx="http://localhost:3000",Vx=3,Hx=100,Gx=2e3;class Wx{constructor(){this._socket=null,this._playerId=null,this._currentMapId=null,this._latency=NaN,this._serverPos=null,this._onJoinedCb=null,this._onGameStateCb=null,this._onPlayerDiedCb=null,this._onGameOverCb=null,this._onMeleeConfirmedCb=null,this._onRespawnCb=null,this._onProjectileCb=null,this._remoteMap=new Map,this._remotePlayers=[]}connect(t){return new Promise((e,n)=>{this._socket=bo(kx,{transports:["websocket"]}),this._socket.once("connect_error",n),this._socket.on("connect",()=>{console.log("[Network] connected, joining as",t),this._socket.emit("join",{username:t})}),this._socket.once("joined",i=>{this._playerId=i.playerId,this._currentMapId=i.mapId??null,console.log("[Network] joined, playerId =",i.playerId,"map =",this._currentMapId),e(i),this._onJoinedCb&&this._onJoinedCb(i)}),this._socket.on("gameState",i=>{this._handleGameState(i),this._onGameStateCb&&this._onGameStateCb(i)}),this._socket.on("playerDied",i=>{this._onPlayerDiedCb&&this._onPlayerDiedCb(i)}),this._socket.on("meleeConfirmed",i=>{this._onMeleeConfirmedCb&&this._onMeleeConfirmedCb(i)}),this._socket.on("playerRespawned",i=>{this._onRespawnCb&&this._onRespawnCb(i)}),this._socket.on("remoteProjectile",i=>{this._onProjectileCb&&this._onProjectileCb(i)}),this._socket.on("gameOver",i=>{this._onGameOverCb&&this._onGameOverCb(i)}),this._socket.on("pong",({serverTime:i,clientTime:s})=>{this._latency=(Date.now()-s)/2}),this._socket.on("disconnect",()=>{console.warn("[Network] disconnected from server")}),this._pingInterval=setInterval(()=>{this._socket?.connected&&this._socket.emit("ping",{clientTime:Date.now()})},Gx)})}_handleGameState(t){if(!t.players)return;const e=Date.now(),n=new Set;for(const i of t.players){if(i.id===this._playerId){this._serverPos=new I(i.position.x,i.position.y,i.position.z);continue}n.add(i.id),this._remoteMap.has(i.id)||this._remoteMap.set(i.id,{id:i.id,username:i.username,color:i.color,position:new I,quaternion:new ze,hp:i.hp,kills:i.kills??0,alive:i.alive,charging:!1,chargeAmount:0,body:null,_buffer:[]});const s=this._remoteMap.get(i.id);s.hp=i.hp,s.alive=i.alive,s.color=i.color,i.username&&(s.username=i.username),s.charging=!!i.charging,s.chargeAmount=i.chargeAmount??0,s._buffer.push({position:new I(i.position.x,i.position.y,i.position.z),quaternion:new ze(i.quaternion.x,i.quaternion.y,i.quaternion.z,i.quaternion.w),timestamp:e}),s._buffer.length>Vx&&s._buffer.shift()}for(const i of this._remoteMap.keys())n.has(i)||(console.log("[Network] remote player left:",i),this._remoteMap.delete(i));this._remotePlayers=[...this._remoteMap.values()]}update(t,e){const n=Date.now()-Hx;for(const i of this._remotePlayers)this._interpolate(i,n);if(this._serverPos&&e){const i=e.body.position,s=this._serverPos.x-i.x,r=this._serverPos.y-i.y,a=this._serverPos.z-i.z;Math.sqrt(s*s+r*r+a*a)>2&&(e.body.position.x+=s*.2,e.body.position.y+=r*.2,e.body.position.z+=a*.2),this._serverPos=null}}_interpolate(t,e){const n=t._buffer;if(n.length===0)return;if(n.length===1){t.position.copy(n[0].position),t.quaternion.copy(n[0].quaternion);return}let i=n[0],s=n[n.length-1];for(let l=0;l<n.length-1;l++)if(n[l].timestamp<=e&&e<=n[l+1].timestamp){i=n[l],s=n[l+1];break}const r=s.timestamp-i.timestamp,a=r>0?Math.max(0,Math.min(1,(e-i.timestamp)/r)):1;t.position.lerpVectors(i.position,s.position,a),t.quaternion.slerpQuaternions(i.quaternion,s.quaternion,a)}sendInput(t){this._socket?.connected&&this._socket.emit("input",t)}sendHit(t,e){this._socket?.connected&&this._socket.emit("hit",{targetId:t,damage:e})}sendMeleeHit(t){this._socket?.connected&&this._socket.emit("meleeHit",{targetId:t})}onJoined(t){this._onJoinedCb=t}onGameState(t){this._onGameStateCb=t}onPlayerDied(t){this._onPlayerDiedCb=t}onGameOver(t){this._onGameOverCb=t}onMeleeConfirmed(t){this._onMeleeConfirmedCb=t}onRespawn(t){this._onRespawnCb=t}onProjectile(t){this._onProjectileCb=t}sendProjectile(t){this._socket?.connected&&this._socket.emit("spawnProjectile",t)}requestMapChange(t){this._socket?.connected&&this._socket.emit("requestMapChange",{mapId:t})}get latency(){return this._latency}get playerId(){return this._playerId}get remotePlayers(){return this._remotePlayers}get currentMapId(){return this._currentMapId}}const qx=.75,Xx=4;class Yx{constructor(t,e,n){this._scene=t,this._physics=n,this._id=e.id,this._username=e.username||"Penguin",this._color=e.color||"#44aaff",this._networkState=null,this._hp=100,this._time=0,this._lastPos=new I,this._moving=!1,this._dead=!1,this._falling=!1,this._buildMesh(),this._buildLabel(),this._buildHPBar(),this._buildHeldSnowball(),this._buildBody(),t.add(this.group)}_buildBody(){this.body=new ht({mass:0,type:ht.KINEMATIC,shape:new Ms(.9),collisionFilterGroup:1,collisionFilterMask:-1}),this.body.position.set(0,-9999,0),this._physics&&this._physics.addBody(this.body)}_buildMesh(){this.group=Fh(),Uh(this.group,this._color)}_buildHeldSnowball(){const t=new ve(.2,28,20),e=new ma({color:16776440,roughness:1,metalness:0,sheen:1,sheenRoughness:.3,sheenColor:new xt(13426175)});this._heldSnowball=new zt(t,e),this._heldSnowball.visible=!1;const n=this.group.userData,i=n.flipR||n.rightFlipper;i?(i.add(this._heldSnowball),this._heldSnowball.position.set(0,-.4,.1)):(this.group.add(this._heldSnowball),this._heldSnowball.position.set(.5,1,.4))}_buildLabel(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,0.5)",this._roundRect(e,4,4,248,56,12),e.fill(),e.fillStyle="#ffffff",e.font="bold 28px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText(this._username.slice(0,14),128,34);const n=new nc(t),i=new ea({map:n,depthTest:!1});this._label=new Ql(i),this._label.position.y=2.8,this._label.scale.set(2.5,.6,1),this._label.frustumCulled=!1,this.group.add(this._label)}_buildHPBar(){this._hpCanvas=document.createElement("canvas"),this._hpCanvas.width=256,this._hpCanvas.height=16,this._hpTex=new nc(this._hpCanvas);const t=new ea({map:this._hpTex,depthTest:!1});this._hpSprite=new Ql(t),this._hpSprite.position.y=2.3,this._hpSprite.scale.set(2,.2,1),this._hpSprite.frustumCulled=!1,this.group.add(this._hpSprite),this.updateHPBar(100)}updateHPBar(t){const e=this._hpCanvas.getContext("2d");e.clearRect(0,0,256,16),e.fillStyle="rgba(0,0,0,0.4)",e.fillRect(0,0,256,16);const n=Math.max(0,Math.min(100,t))/100;let i;t>60?i="#4488ff":t>30?i="#ffaa33":i="#ff4444",e.fillStyle=i,e.fillRect(0,0,Math.round(256*n),16),this._hpTex.needsUpdate=!0}setNetworkState(t){this._networkState=t}update(t){if(this._dead||!this._networkState)return;this._time+=t;const e=this._networkState;this._falling||(this.group.position.copy(e.position),this.group.quaternion.copy(e.quaternion)),this.body&&(this.body.position.set(e.position.x,e.position.y+.9,e.position.z),this.body.velocity.set(0,0,0)),e.hp!==this._hp&&(this._hp=e.hp,this.updateHPBar(this._hp)),this._updateChargeVisuals(e);const n=this._lastPos.distanceTo(e.position);this._moving=n>.05,this._lastPos.copy(e.position);const i=this.group.userData,s=!!e.charging;if(this._moving&&i.flipL&&i.flipR&&!s){const r=Math.sin(this._time*8)*(Math.PI/12);i.flipL.rotation.z=r,i.flipR.rotation.z=-r;const a=Math.sin(this._time*8)*.05;this.group.position.y+=a}}_updateChargeVisuals(t){if(!this._heldSnowball)return;const e=this.group.userData,n=e.flipR||e.rightFlipper,i=!!t.charging,s=Math.max(0,Math.min(1,t.chargeAmount??0));if(i){this._heldSnowball.visible=!0;const r=1+s*Xx*qx;this._heldSnowball.scale.set(r,r,r),n&&(n.rotation.x=-Math.PI/1.5)}else this._heldSnowball.visible=!1,this._heldSnowball.scale.set(1,1,1),n&&!this._moving&&(n.rotation.x=0)}playDeathAnimation(t,e){this._dead||(this._dead=!0,this._heldSnowball&&(this._heldSnowball.visible=!1),t==="snowball"?this._deathSnowball():this._deathMelee(e||new I(0,0,-1)))}playFallAnimation(){if(this._falling||this._dead)return;this._falling=!0;const t=150,e=500,n=300,i=performance.now(),s=()=>{const r=performance.now()-i;if(r<t){const a=r/t;this.group.rotation.x=Math.PI/2*a,requestAnimationFrame(s)}else if(r<t+e)this.group.rotation.x=Math.PI/2,requestAnimationFrame(s);else if(r<t+e+n){const a=(r-t-e)/n;this.group.rotation.x=Math.PI/2*(1-a),requestAnimationFrame(s)}else this.group.rotation.x=0,this._falling=!1};requestAnimationFrame(s)}_deathSnowball(){const t=[],e=this.group.userData,n=[e.headGroup,e.bodyGroup,e.flipL,e.flipR].filter(Boolean),i=n.length?n:[...this.group.children].filter(l=>l.isMesh||l.isGroup);for(const l of i){this.group.remove(l),this._scene.add(l),l.position.copy(this.group.position);const c=new I((Math.random()-.5)*10,3+Math.random()*5,(Math.random()-.5)*10);l.userData._deathVel=c,t.push(l),l.traverse(u=>{u.isMesh&&(u.material=u.material.clone(),u.material.transparent=!0)})}const s=performance.now(),r=1200,a=()=>{const l=performance.now()-s,c=Math.min(l/r,1),u=1-c,d=.016;for(const h of t)h.userData._deathVel.y-=9.8*d,h.position.addScaledVector(h.userData._deathVel,d),h.rotation.x+=d*2,h.rotation.z+=d*1.5,h.traverse(f=>{f.isMesh&&(f.material.opacity=u)});if(c<1)requestAnimationFrame(a);else for(const h of t)this._scene.remove(h),h.traverse(f=>{f.isMesh&&(f.geometry.dispose(),f.material.dispose())})};this._scene.remove(this.group),requestAnimationFrame(a)}_deathMelee(t){const e=this.group.position.clone(),n=e.clone().addScaledVector(t.normalize(),-4),i=performance.now();this.group.traverse(l=>{l.isMesh&&(l.material=l.material.clone(),l.material.transparent=!0,l.material.opacity=1)});const s=500,r=300,a=()=>{const l=performance.now()-i;if(l<s){const c=l/s;this.group.position.lerpVectors(e,n,c),this.group.rotation.y+=.2}else{const c=Math.min((l-s)/r,1),u=1-c;if(this.group.traverse(d=>{d.isMesh&&(d.material.opacity=u)}),c>=1){this.dispose();return}}requestAnimationFrame(a)};requestAnimationFrame(a)}dispose(){this._scene.remove(this.group),this.body&&this._physics&&(this._physics.removeBody(this.body),this.body=null),this.group.traverse(t=>{t.isMesh&&(t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose()),t.isSprite&&(t.material?.map?.dispose(),t.material?.dispose())}),this._hpTex&&this._hpTex.dispose()}get id(){return this._id}get position(){return this.group.position}get hp(){return this._hp}_roundRect(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+s-r),t.quadraticCurveTo(e+i,n+s,e+i-r,n+s),t.lineTo(e+r,n+s),t.quadraticCurveTo(e,n+s,e,n+s-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath()}}class jx{constructor(t){this.username=t,this.clock=new Og,this._inputSeq=0}async start(){this._initRenderer(),this._initScene(),this._initPhysics(),this.hud=new Xy,this.hud.show(),this.network=new Wx;let t=null;try{t=await Promise.race([this.network.connect(this.username),new Promise((l,c)=>setTimeout(()=>c(new Error("timeout")),3e3))])}catch(l){console.warn("[Game] server offline, running solo:",l.message)}const e=new URLSearchParams(window.location.search).get("map"),n=t?.mapId??null,i=this._resolveMapId(e??n??Ur);e&&e!==n&&(console.log(`[Game] URL map "${e}" differs from server map "${n}" — requesting server switch`),this.network.requestMapChange(e)),this.map=My(i),this.map.build(this.scene,this.physicsWorld),this.hud.setMap(this.map),this._debugGroup=new Re,this._debugGroup.visible=!1,this.scene.add(this._debugGroup),this._cannonDebugger=new uy(this._debugGroup,this.physicsWorld,{color:65280,onInit:(l,c)=>{c.material.depthTest=!1,c.material.transparent=!0,c.material.opacity=.75,c.renderOrder=999}}),this._debugPhysics=!1,this._debugLabel=this._createDebugLabel(),window.addEventListener("keydown",l=>{l.code==="Backquote"&&(this._debugPhysics=!this._debugPhysics,this._debugGroup.visible=this._debugPhysics,this._debugLabel.style.display=this._debugPhysics?"block":"none",console.log("[Physics Debug]",this._debugPhysics?"ON — green = physics bodies":"OFF"))});const s=t?.spawnPosition,r=this.map.spawnPoints?.[0],a=s??(r?{x:r.x,y:r.y,z:r.z}:null);this.player=new Py(this.scene,this.physicsWorld,this.map,a),this.thirdPersonCamera=new Iy(this.camera,this.player,this.map),this.particles=new Ny(this.scene),this.weapon=new qy(this.scene,this.physicsWorld,this.player,this.thirdPersonCamera,this.particles,this.network,this.map),t?.color&&(this.player.playerColor.set(t.color),Uh(this.player.group,t.color)),this._lastKnownHp=100,this._isDead=!1,this.network.onGameState(l=>{this.weapon.remotePlayers=this.network.remotePlayers,l.zone?.timeToShrink!=null&&this.hud.setZoneTimer(l.zone.timeToShrink),l.zone!=null&&this.hud.setZone(l.zone.radius,l.zone.active);const c=this.network.remotePlayers.length+1,u=this.network.remotePlayers.filter(h=>h.alive).length+1;this.hud.setPlayerCount(u,c);const d=l.players?.find(h=>h.id===this.network.playerId);if(d&&d.hp<this._lastKnownHp){this.hud.takeDamage(),De.takeDamage(),this.player.hp=d.hp;const h=new I(this.player.body.position.x,this.player.body.position.y+1,this.player.body.position.z);this.particles.emit(h,new I(0,1,0),11193599,10,4,360)}d&&(this._lastKnownHp=d.hp)}),this._remoteMeshes=new Map,this.network.onMeleeConfirmed(({targetId:l,attackerId:c})=>{De.meleeHit();const u=this._remoteMeshes.get(l);if(u&&u.playFallAnimation(),l===this.network.playerId){const d=this._remoteMeshes.get(c),h=d?d.position:new I;this.player.takeMeleeHit(h),this.hud.takeDamage()}}),this.network.onPlayerDied(({id:l,killerName:c,victimName:u,method:d,knockbackDir:h})=>{if(this.hud.addKill(c,u,d),d==="snowball"&&this.hud.notify("WADDLED! ❄",2e3),d==="melee"&&this.hud.notify("SLAPPED! 🐧",2e3),c===this.username&&De.kill(),l===this.network.playerId)De.died(),this._isDead=!0,this.player.group.visible=!1,this.player.isFallen=!0,this.player._fallTimer=999,this.hud.notify("YOU DIED... respawning 🐧",3e3);else{const f=this._remoteMeshes.get(l);f&&f.playDeathAnimation(d,h)}}),this.network.onRespawn(({id:l,spawnPosition:c,hp:u})=>{l===this.network.playerId&&(this._isDead=!1,this.player.group.visible=!0,this.player.isFallen=!1,this.player._fallTimer=0,this.player.hp=u,this._lastKnownHp=u,this.player.body.position.set(c.x,c.y,c.z),this.player.body.previousPosition.set(c.x,c.y,c.z),this.player.body.velocity.set(0,0,0),this.player.body.force.set(0,0,0),this.player.body.aabbNeedsUpdate=!0,this.hud.notify("BACK IN THE WADDLE! 🐧",1500))}),this.network.onGameOver(({winnerName:l})=>{this.hud.notify(`🏆 ${l} WINS!`,6e3),l===this.username&&De.win()}),this._remoteProjectiles=[],this.network.onProjectile(l=>{this._spawnRemoteProjectile(l)}),this._animate()}_spawnRemoteProjectile({position:t,velocity:e,scale:n=1,color:i="#ffffff",lifetime:s=3}){const r=new ve(.25*n,6,6),a=new he({color:i,roughness:.95}),l=new zt(r,a);l.position.set(t.x,t.y,t.z),this.scene.add(l),this._remoteProjectiles.push({mesh:l,velocity:new I(e.x,e.y,e.z),life:s,scale:n})}_updateRemoteProjectiles(t){const e=this.map.gravity.y*.8,n=this.map.groundY;for(let i=this._remoteProjectiles.length-1;i>=0;i--){const s=this._remoteProjectiles[i];s.life-=t,s.velocity.y+=e*t,s.mesh.position.addScaledVector(s.velocity,t);const r=s.mesh.position.y<n+.3&&s.life<2.9;(r||s.life<=0)&&(r&&this.particles.emit(s.mesh.position.clone(),new I(0,1,0),s.mesh.material.color,6,4,45),this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this._remoteProjectiles.splice(i,1))}}_resolveMapId(t){return Sy().includes(t)?t:(console.warn(`[Game] unknown map "${t}", falling back to ${Ur}`),Ur)}_initRenderer(){this.renderer=new Ig({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}_initScene(){this.scene=new Ng,this.scene.background=new xt(662074),this.camera=new We(70,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,100,0)}_initPhysics(){this.physicsWorld=new sy({gravity:new S(0,0,0),broadphase:new Hi,allowSleep:!1}),this.physicsWorld.defaultContactMaterial.friction=.05,this.physicsWorld.defaultContactMaterial.restitution=0,this.physicsWorld.solver.iterations=20}_animate(){requestAnimationFrame(()=>this._animate());const t=Math.min(this.clock.getDelta(),.05);if(this.physicsWorld.step(1/60,t,10),this.player){this.player.update(t),this.thirdPersonCamera.update(t),this.weapon.update(t),this.particles.update(t),this._updateRemoteProjectiles(t),this.network.update(t,this.player);const e=this.network.remotePlayers;for(const i of e)if(!this._remoteMeshes.has(i.id)){const s=new Yx(this.scene,{id:i.id,username:i.username,color:i.color},this.physicsWorld);s.setNetworkState(i),this._remoteMeshes.set(i.id,s)}for(const[i,s]of this._remoteMeshes)e.find(r=>r.id===i)?s.update(t):(s.dispose(),this._remoteMeshes.delete(i));this.weapon.remotePlayers=[...this._remoteMeshes.values()].map(i=>({id:i.id,position:i.position,hp:i.hp,body:i.body??null})),this.network.sendInput({seq:this._inputSeq++,delta:t,forward:!!this.player.keys.KeyW,back:!!this.player.keys.KeyS,left:!!this.player.keys.KeyA,right:!!this.player.keys.KeyD,jump:!!this.player.keys.Space,sprint:!!this.player.keys.ShiftLeft,yaw:this.player._yaw,pitch:this.player._aimPitch,reload:!!this.player.keys.KeyR,melee:!!this.player.keys.KeyF,charging:!!this.weapon.isCharging,chargeAmount:this.weapon.chargeAmount??0,position:{x:this.player.body.position.x,y:this.player.body.position.y,z:this.player.body.position.z},quaternion:{x:this.player.group.quaternion.x,y:this.player.group.quaternion.y,z:this.player.group.quaternion.z,w:this.player.group.quaternion.w},velocity:{x:this.player.body.velocity.x,y:this.player.body.velocity.y,z:this.player.body.velocity.z}});const n=[...this._remoteMeshes.values()].map(i=>({position:i.position,color:i._color}));this.hud.update(this.player,this.weapon,n)}if(this._debugPhysics)try{this._cannonDebugger.update()}catch(e){console.error("[PhysicsDebug]",e)}this.renderer.render(this.scene,this.camera)}_createDebugLabel(){const t=document.createElement("div");return t.textContent="PHYSICS DEBUG ON  [` to toggle]",Object.assign(t.style,{position:"fixed",top:"8px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.65)",color:"#00ff00",fontFamily:"monospace",fontSize:"13px",padding:"4px 12px",borderRadius:"4px",pointerEvents:"none",zIndex:"9999",display:"none"}),document.body.appendChild(t),t}}const Es=new Audio("/music/bg.mp3");Es.loop=!0;Es.volume=.15;function No(){Es.play().catch(()=>{}),document.removeEventListener("click",No),document.removeEventListener("keydown",No)}document.addEventListener("click",No);document.addEventListener("keydown",No);const Kh=document.getElementById("username-input"),$x=document.getElementById("join-btn"),qr=document.getElementById("username-error"),Xr=document.getElementById("lobby");$x.addEventListener("click",Zh);Kh.addEventListener("keydown",o=>{o.key==="Enter"&&Zh()});function Zh(){const o=Kh.value.trim();if(o.length<2){qr.textContent="Username must be at least 2 characters.";return}if(!/^[a-zA-Z0-9_]+$/.test(o)){qr.textContent="Only letters, numbers, and underscores.";return}qr.textContent="",De.resume(),Es.pause(),Es.currentTime=0,Xr.style.transition="opacity 0.5s",Xr.style.opacity="0",setTimeout(()=>{Xr.style.display="none",new jx(o).start()},500)}
