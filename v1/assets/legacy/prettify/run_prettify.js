!function(){var e=null;!function(){function t(e){function t(){try{r.doScroll("left")}catch(e){return s(t,50),void 0}i("poll")}function i(t){("readystatechange"!=t.type||"complete"==a.readyState)&&(("load"==t.type?n:a)[d](u+t.type,i,!1),!l&&(l=!0))&&e.call(n,t.type||t)}var o=a.addEventListener,l=!1,c=!0,h=o?"addEventListener":"attachEvent",d=o?"removeEventListener":"detachEvent",u=o?"":"on";if("complete"==a.readyState)e.call(n,"lazy");else{if(a.createEventObject&&r.doScroll){try{c=!n.frameElement}catch(p){}c&&t()}a[h](u+"DOMContentLoaded",i,!1),a[h](u+"readystatechange",i,!1),n[h](u+"load",i,!1)}}function i(){p&&t(function(){var e=m.length;_(e?function(){for(var t=0;e>t;++t)!function(e){s(function(){n.exports[m[e]].apply(n,arguments)},0)}(t)}:void 0)})}for(var n=window,s=n.setTimeout,a=document,r=a.documentElement,o=a.head||a.getElementsByTagName("head")[0]||r,l="",c=a.scripts,h=c.length;--h>=0;){var d=c[h],u=d.src.match(/^[^#?]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(u){l=u[1]||"",d.parentNode.removeChild(d);break}}var p=!0,f=[],g=[],m=[];for(l.replace(/[&?]([^&=]+)=([^&]+)/g,function(e,t,i){i=decodeURIComponent(i),t=decodeURIComponent(t),"autorun"==t?p=!/^[0fn]/i.test(i):"lang"==t?f.push(i):"skin"==t?g.push(i):"callback"==t&&m.push(i)}),h=0,l=f.length;l>h;++h)!function(){var t=a.createElement("script");t.onload=t.onerror=t.onreadystatechange=function(){t&&(!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onerror=t.onload=t.onreadystatechange=e,--v,v||s(i,0),t.parentNode&&t.parentNode.removeChild(t),t=e)},t.type="text/javascript",t.src="https://google-code-prettify.googlecode.com/svn/loader/lang-"+encodeURIComponent(f[h])+".js",o.insertBefore(t,o.firstChild)}(f[h]);for(var v=f.length,c=[],h=0,l=g.length;l>h;++h)c.push("https://google-code-prettify.googlecode.com/svn/loader/skins/"+encodeURIComponent(g[h])+".css");c.push("https://google-code-prettify.googlecode.com/svn/loader/prettify.css"),function(e){function t(n){if(n!==i){var s=a.createElement("link");s.rel="stylesheet",s.type="text/css",i>n+1&&(s.error=s.onerror=function(){t(n+1)}),s.href=e[n],o.appendChild(s)}}var i=e.length;t(0)}(c);var _=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var t;return function(){function i(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var i=e.charAt(1);return(t=d[i])?t:i>="0"&&"7">=i?parseInt(e.substring(1),8):"u"===i||"x"===i?parseInt(e.substring(2),16):e.charCodeAt(1)}function i(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function n(e){var n=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],s="^"===n[0],a=["["];s&&a.push("^");for(var s=s?1:0,r=n.length;r>s;++s){var o=n[s];if(/\\[bdsw]/i.test(o))a.push(o);else{var l,o=t(o);r>s+2&&"-"===n[s+1]?(l=t(n[s+2]),s+=2):l=o,e.push([o,l]),65>l||o>122||(65>l||o>90||e.push([32|Math.max(65,o),32|Math.min(l,90)]),97>l||o>122||e.push([-33&Math.max(97,o),-33&Math.min(l,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),n=[],r=[],s=0;s<e.length;++s)o=e[s],o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):n.push(r=o);for(s=0;s<n.length;++s)o=n[s],a.push(i(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&a.push("-"),a.push(i(o[1])));return a.push("]"),a.join("")}function s(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),s=t.length,o=[],l=0,c=0;s>l;++l){var h=t[l];"("===h?++c:"\\"===h.charAt(0)&&(h=+h.substring(1))&&(c>=h?o[h]=-1:t[l]=i(h))}for(l=1;l<o.length;++l)-1===o[l]&&(o[l]=++a);for(c=l=0;s>l;++l)h=t[l],"("===h?(++c,o[c]||(t[l]="(?:")):"\\"===h.charAt(0)&&(h=+h.substring(1))&&c>=h&&(t[l]="\\"+o[h]);for(l=0;s>l;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&r)for(l=0;s>l;++l)h=t[l],e=h.charAt(0),h.length>=2&&"["===e?t[l]=n(h):"\\"!==e&&(t[l]=h.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var a=0,r=!1,o=!1,l=0,c=e.length;c>l;++l){var h=e[l];if(h.ignoreCase)o=!0;else if(/[a-z]/i.test(h.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){r=!0,o=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},u=[],l=0,c=e.length;c>l;++l){if(h=e[l],h.global||h.multiline)throw Error(""+h);u.push("(?:"+s(h)+")")}return RegExp(u.join("|"),o?"gi":"g")}function n(e,t){function i(e){var l=e.nodeType;if(1==l){if(!n.test(e.className)){for(l=e.firstChild;l;l=l.nextSibling)i(l);l=e.nodeName.toLowerCase(),("br"===l||"li"===l)&&(s[o]="\n",r[o<<1]=a++,r[1|o++<<1]=e)}}else(3==l||4==l)&&(l=e.nodeValue,l.length&&(l=t?l.replace(/\r\n?/g,"\n"):l.replace(/[\t\n\r ]+/g," "),s[o]=l,r[o<<1]=a,a+=l.length,r[1|o++<<1]=e))}var n=/(?:^|\s)nocode(?:\s|$)/,s=[],a=0,r=[],o=0;return i(e),{a:s.join("").replace(/\n$/,""),d:r}}function a(e,t,i,n){t&&(e={a:t,e:e},i(e),n.push.apply(n,e.g))}function r(e){for(var t=void 0,i=e.firstChild;i;i=i.nextSibling)var n=i.nodeType,t=1===n?t?e:i:3===n?C.test(i.nodeValue)?e:t:t;return t===e?void 0:t}function o(t,n){function s(e){for(var t=e.e,i=[t,"pln"],c=0,h=e.a.match(r)||[],u={},p=0,f=h.length;f>p;++p){var g,m=h[p],v=u[m],_=void 0;if("string"==typeof v)g=!1;else{var b=o[m.charAt(0)];if(b)_=m.match(b[1]),v=b[0];else{for(g=0;l>g;++g)if(b=n[g],_=m.match(b[1])){v=b[0];break}_||(v="pln")}(g=v.length>=5&&"lang-"===v.substring(0,5))&&(!_||"string"!=typeof _[1])&&(g=!1,v="src"),g||(u[m]=v)}if(b=c,c+=m.length,g){g=_[1];var y=m.indexOf(g),w=y+g.length;_[2]&&(w=m.length-_[2].length,y=w-g.length),v=v.substring(5),a(t+b,m.substring(0,y),s,i),a(t+b+y,g,d(v,g),i),a(t+b+w,m.substring(w),s,i)}else i.push(t+b,v)}e.g=i}var r,o={};!function(){for(var s=t.concat(n),a=[],l={},c=0,h=s.length;h>c;++c){var d=s[c],u=d[3];if(u)for(var p=u.length;--p>=0;)o[u.charAt(p)]=d;d=d[1],u=""+d,l.hasOwnProperty(u)||(a.push(d),l[u]=e)}a.push(/[\S\s]/),r=i(a)}();var l=n.length;return s}function l(t){var i=[],n=[];t.tripleQuotedStrings?i.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]):t.multiLineStrings?i.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]):i.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&n.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var s=t.hashComments;if(s&&(t.cStyleComments?(s>1?i.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]):i.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),n.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):i.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(n.push(["com",/^\/\/[^\n\r]*/,e]),n.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),s=t.regexLiterals){var a=(s=s>1?"":"\n\r")?".":"[\\S\\s]";n.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+a+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+a+")*(?:\\x5D|$))+/")+")")])}return(s=t.types)&&n.push(["typ",s]),s=(""+t.keywords).replace(/^ | $/g,""),s.length&&n.push(["kwd",RegExp("^(?:"+s.replace(/[\s,]+/g,"|")+")\\b"),e]),i.push(["pln",/^\s+/,e," \r\n	 "]),s="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(s+="(?!s*/)"),n.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(s),e]),o(i,n)}function c(e,t,i){function n(e){var t=e.nodeType;if(1!=t||a.test(e.className)){if((3==t||4==t)&&i){var l=e.nodeValue,c=l.match(r);c&&(t=l.substring(0,c.index),e.nodeValue=t,(l=l.substring(c.index+c[0].length))&&e.parentNode.insertBefore(o.createTextNode(l),e.nextSibling),s(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)s(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)n(e)}function s(e){function t(e,i){var n=i?e.cloneNode(!1):e,s=e.parentNode;if(s){var s=t(s,1),a=e.nextSibling;s.appendChild(n);for(var r=a;r;r=a)a=r.nextSibling,s.appendChild(r)}return n}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var i,e=t(e.nextSibling,0);(i=e.parentNode)&&1===i.nodeType;)e=i;c.push(e)}for(var a=/(?:^|\s)nocode(?:\s|$)/,r=/\r\n?|\n/,o=e.ownerDocument,l=o.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],h=0;h<c.length;++h)n(c[h]);t===(0|t)&&c[0].setAttribute("value",t);var d=o.createElement("ol");d.className="linenums";for(var t=Math.max(0,0|t-1)||0,h=0,u=c.length;u>h;++h)l=c[h],l.className="L"+(h+t)%10,l.firstChild||l.appendChild(o.createTextNode(" ")),d.appendChild(l);e.appendChild(d)}function h(e,t){for(var i=t.length;--i>=0;){var n=t[i];T.hasOwnProperty(n)?p.console&&console.warn("cannot override language handler %s",n):T[n]=e}}function d(e,t){return e&&T.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),T[e]}function u(e){var t=e.h;try{var i=n(e.c,e.i),s=i.a;e.a=s,e.d=i.d,e.e=0,d(t,s)(e);var a=/\bMSIE\s(\d+)/.exec(navigator.userAgent),a=a&&+a[1]<=8,t=/\n/g,r=e.a,o=r.length,i=0,l=e.d,c=l.length,s=0,h=e.g,u=h.length,f=0;h[u]=o;var g,m;for(m=g=0;u>m;)h[m]!==h[m+2]?(h[g++]=h[m++],h[g++]=h[m++]):m+=2;for(u=g,m=g=0;u>m;){for(var v=h[m],_=h[m+1],b=m+2;u>=b+2&&h[b+1]===_;)b+=2;h[g++]=v,h[g++]=_,m=b}h.length=g;var y,w=e.c;w&&(y=w.style.display,w.style.display="none");try{for(;c>s;){var S,C=l[s+2]||o,k=h[f+2]||o,b=Math.min(C,k),T=l[s+1];if(1!==T.nodeType&&(S=r.substring(i,b))){a&&(S=S.replace(t,"\r")),T.nodeValue=S;var E=T.ownerDocument,D=E.createElement("span");D.className=h[f+1];var x=T.parentNode;x.replaceChild(D,T),D.appendChild(T),C>i&&(l[s+1]=T=E.createTextNode(r.substring(b,C)),x.insertBefore(T,D.nextSibling))}i=b,i>=C&&(s+=2),i>=k&&(f+=2)}}finally{w&&(w.style.display=y)}}catch(R){p.console&&console.log(R&&R.stack||R)}}var p=window,f=["break,continue,do,else,for,if,return,while"],g=[[f,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],m=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],v=[g,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],_=[v,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],g=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],b=[f,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],y=[f,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],w=[f,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],f=[f,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,C=/\S/,k=l({keywords:[m,_,g,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",b,y,f],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),T={};h(k,["default-code"]),h(o([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),h(o([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),h(o([],[["atv",/^[\S\s]+/]]),["uq.val"]),h(l({keywords:m,hashComments:!0,cStyleComments:!0,types:S}),["c","cc","cpp","cxx","cyc","m"]),h(l({keywords:"null,true,false"}),["json"]),h(l({keywords:_,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:S}),["cs"]),h(l({keywords:v,cStyleComments:!0}),["java"]),h(l({keywords:f,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),h(l({keywords:b,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),h(l({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),h(l({keywords:y,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),h(l({keywords:g,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),h(l({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),h(l({keywords:w,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),h(o([],[["str",/^[\S\s]+/]]),["regex"]);var E=p.PR={createSimpleLexer:o,registerLangHandler:h,sourceDecorator:l,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,i){var n=document.createElement("div");return n.innerHTML="<pre>"+e+"</pre>",n=n.firstChild,i&&c(n,i,!0),u({h:t,j:i,c:n,i:1}),n.innerHTML},prettyPrint:t=t=function(t,i){function n(){for(var i=p.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;v<l.length&&g.now()<i;v++){for(var a=l[v],h=k,d=a;d=d.previousSibling;){var f=d.nodeType,T=(7===f||8===f)&&d.nodeValue;if(T?!/^\??prettify\b/.test(T):3!==f||/\S/.test(d.nodeValue))break;if(T){h={},T.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,i){h[t]=i});break}}if(d=a.className,(h!==k||b.test(d))&&!y.test(d)){for(f=!1,T=a.parentNode;T;T=T.parentNode)if(C.test(T.tagName)&&T.className&&b.test(T.className)){f=!0;break}if(!f){if(a.className+=" prettyprinted",f=h.lang,!f){var E,f=d.match(_);!f&&(E=r(a))&&S.test(E.tagName)&&(f=E.className.match(_)),f&&(f=f[1])}if(w.test(a.tagName))T=1;else var T=a.currentStyle,D=o.defaultView,T=(T=T?T.whiteSpace:D&&D.getComputedStyle?D.getComputedStyle(a,e).getPropertyValue("white-space"):0)&&"pre"===T.substring(0,3);D=h.linenums,(D="true"===D||+D)||(D=(D=d.match(/\blinenums\b(?::(\d+))?/))?D[1]&&D[1].length?+D[1]:!0:!1),D&&c(a,D,T),m={h:f,c:a,j:D,i:T},u(m)}}}v<l.length?s(n,250):"function"==typeof t&&t()}for(var a=i||document.body,o=a.ownerDocument||document,a=[a.getElementsByTagName("pre"),a.getElementsByTagName("code"),a.getElementsByTagName("xmp")],l=[],h=0;h<a.length;++h)for(var d=0,f=a[h].length;f>d;++d)l.push(a[h][d]);var a=e,g=Date;g.now||(g={now:function(){return+new Date}});var m,v=0,_=/\blang(?:uage)?-([\w.]+)(?!\S)/,b=/\bprettyprint\b/,y=/\bprettyprinted\b/,w=/pre|xmp/i,S=/^code$/i,C=/^(?:pre|code|xmp)$/i,k={};n()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return E})}(),t}();v||s(i,0)}()}();