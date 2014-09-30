var Holder=Holder||{};!function(t,e){function n(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var a=Math.max(e,t),i=Math.min(e,t),s=1/12,o=Math.min(.75*i,.75*a*s);return{height:Math.round(Math.max(n.size,o))}}function a(t){var e=[];for(p in t)t.hasOwnProperty(p)&&e.push(p+":"+t[p]);return e.join(";")}function i(t){var e=t.ctx,a=t.dimensions,i=t.template,s=t.ratio,o=t.holder,r="literal"==o.textmode,l="exact"==o.textmode,c=n(a.width,a.height,i),u=c.height,d=a.width*s,h=a.height*s,f=i.font?i.font:"Arial,Helvetica,sans-serif";canvas.width=d,canvas.height=h,e.textAlign="center",e.textBaseline="middle",e.fillStyle=i.background,e.fillRect(0,0,d,h),e.fillStyle=i.foreground,e.font="bold "+u+"px "+f;var p=i.text?i.text:Math.floor(a.width)+"x"+Math.floor(a.height);if(r){var a=o.dimensions;p=a.width+"x"+a.height}else if(l&&o.exact_dimensions){var a=o.exact_dimensions;p=Math.floor(a.width)+"x"+Math.floor(a.height)}var m=e.measureText(p).width;return m/d>=.75&&(u=Math.floor(.75*u*(d/m))),e.font="bold "+u*s+"px "+f,e.fillText(p,d/2,h/2,d),canvas.toDataURL("image/png")}function s(t){var e=t.dimensions,a=t.template,i=t.holder,s="literal"==i.textmode,o="exact"==i.textmode,r=n(e.width,e.height,a),l=r.height,c=e.width,u=e.height,d=a.font?a.font:"Arial,Helvetica,sans-serif",h=a.text?a.text:Math.floor(e.width)+"x"+Math.floor(e.height);if(s){var e=i.dimensions;h=e.width+"x"+e.height}else if(o&&i.exact_dimensions){var e=i.exact_dimensions;h=Math.floor(e.width)+"x"+Math.floor(e.height)}var f=D({text:h,width:c,height:u,text_height:l,font:d,template:a});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(f)))}function o(t){return v.use_canvas&&!v.use_svg?i(t):s(t)}function r(t,e,n,a){var i=n.dimensions,s=n.theme,r=n.text?decodeURIComponent(n.text):n.text,l=i.width+"x"+i.height;s=r?m(s,{text:r}):s,s=n.font?m(s,{font:n.font}):s,e.setAttribute("data-src",a),n.theme=s,e.holder_data=n,"image"==t?(e.setAttribute("alt",r?r:s.text?s.text+" ["+l+"]":l),(v.use_fallback||!n.auto)&&(e.style.width=i.width+"px",e.style.height=i.height+"px"),v.use_fallback?e.style.backgroundColor=s.background:(e.setAttribute("src",o({ctx:k,dimensions:i,template:s,ratio:x,holder:n})),n.textmode&&"exact"==n.textmode&&(_.push(e),u(e)))):"background"==t?v.use_fallback||(e.style.backgroundImage="url("+o({ctx:k,dimensions:i,template:s,ratio:x,holder:n})+")",e.style.backgroundSize=i.width+"px "+i.height+"px"):"fluid"==t&&(e.setAttribute("alt",r?r:s.text?s.text+" ["+l+"]":l),"%"==i.height.slice(-1)?e.style.height=i.height:null!=n.auto&&n.auto||(e.style.height=i.height+"px"),"%"==i.width.slice(-1)?e.style.width=i.width:null!=n.auto&&n.auto||(e.style.width=i.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),c(e),v.use_fallback?e.style.backgroundColor=s.background:(_.push(e),u(e)))}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function c(e){if(e.holder_data){var n=l(e,t.invisible_error_fn(c));if(n){var a=e.holder_data;a.initial_dimensions=n,a.fluid_data={fluid_height:"%"==a.dimensions.height.slice(-1),fluid_width:"%"==a.dimensions.width.slice(-1),mode:null},a.fluid_data.fluid_width&&!a.fluid_data.fluid_height?(a.fluid_data.mode="width",a.fluid_data.ratio=a.initial_dimensions.width/parseFloat(a.dimensions.height)):!a.fluid_data.fluid_width&&a.fluid_data.fluid_height&&(a.fluid_data.mode="height",a.fluid_data.ratio=parseFloat(a.dimensions.width)/a.initial_dimensions.height)}}}function u(e){var n;n=null==e.nodeType?_:[e];for(var a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i.holder_data){var s=i.holder_data,r=l(i,t.invisible_error_fn(u));if(r){if(s.fluid){if(s.auto)switch(s.fluid_data.mode){case"width":r.height=r.width/s.fluid_data.ratio;break;case"height":r.width=r.height*s.fluid_data.ratio}i.setAttribute("src",o({ctx:k,dimensions:r,template:s.theme,ratio:x,holder:s}))}s.textmode&&"exact"==s.textmode&&(s.exact_dimensions=r,i.setAttribute("src",o({ctx:k,dimensions:s.dimensions,template:s.theme,ratio:x,holder:s})))}}}}function d(e,n){for(var a={theme:m(C.themes.gray,{})},i=!1,s=e.length,o=0;s>o;o++){var r=e[o];t.flags.dimensions.match(r)?(i=!0,a.dimensions=t.flags.dimensions.output(r)):t.flags.fluid.match(r)?(i=!0,a.dimensions=t.flags.fluid.output(r),a.fluid=!0):t.flags.textmode.match(r)?a.textmode=t.flags.textmode.output(r):t.flags.colors.match(r)?a.theme=t.flags.colors.output(r):n.themes[r]?n.themes.hasOwnProperty(r)&&(a.theme=m(n.themes[r],{})):t.flags.font.match(r)?a.font=t.flags.font.output(r):t.flags.auto.match(r)?a.auto=!0:t.flags.text.match(r)&&(a.text=t.flags.text.output(r))}return i?a:!1}function h(t,e){var n="complete",a="readystatechange",i=!1,s=i,o=!0,r=t.document,l=r.documentElement,c=r.addEventListener?"addEventListener":"attachEvent",u=r.addEventListener?"removeEventListener":"detachEvent",d=r.addEventListener?"":"on",h=function(o){(o.type!=a||r.readyState==n)&&(("load"==o.type?t:r)[u](d+o.type,h,i),!s&&(s=!0)&&e.call(t,null))},f=function(){try{l.doScroll("left")}catch(t){return void setTimeout(f,50)}h("poll")};if(r.readyState==n)e.call(t,"lazy");else{if(r.createEventObject&&l.doScroll){try{o=!t.frameElement}catch(p){}o&&f()}r[c](d+"DOMContentLoaded",h,i),r[c](d+a,h,i),t[c](d+"load",h,i)}}function f(t,e){var t=t.match(/^(\W)?(.*)/),e=e||document,n=e["getElement"+(t[1]?"#"==t[1]?"ById":"sByClassName":"sByTagName")],a=n.call(e,t[2]),i=[];return null!==a&&(i=a.length||0===a.length?a:[a]),i}function m(t,e){var n={};for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a]);for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a]);return n}var g={use_svg:!1,use_canvas:!1,use_fallback:!1},v={},y=!1;canvas=document.createElement("canvas");var b=1,w=1,_=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)g.use_fallback=!0;else var k=canvas.getContext("2d");else g.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(g.use_svg=!0,g.use_canvas=!1),g.use_fallback||(b=window.devicePixelRatio||1,w=k.webkitBackingStorePixelRatio||k.mozBackingStorePixelRatio||k.msBackingStorePixelRatio||k.oBackingStorePixelRatio||k.backingStorePixelRatio||1);var x=b/w,C={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};t.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{size:C.themes.gray.size,foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};var D=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var i=document.createElementNS(e,"rect"),s=document.createElementNS(e,"text"),o=document.createTextNode(null);return s.setAttribute("text-anchor","middle"),s.appendChild(o),n.appendChild(i),n.appendChild(s),function(e){return n.setAttribute("width",e.width),n.setAttribute("height",e.height),i.setAttribute("width",e.width),i.setAttribute("height",e.height),i.setAttribute("fill",e.template.background),s.setAttribute("x",e.width/2),s.setAttribute("y",e.height/2),o.nodeValue=e.text,s.setAttribute("style",a({fill:e.template.foreground,"font-weight":"bold","font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),t.serializeToString(n)}}}();for(var $ in t.flags)t.flags.hasOwnProperty($)&&(t.flags[$].match=function(t){return t.match(this.regex)});t.invisible_error_fn=function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},t.add_theme=function(e,n){return null!=e&&null!=n&&(C.themes[e]=n),t},t.add_image=function(e,n){var a=f(n);if(a.length)for(var i=0,s=a.length;s>i;i++){var o=document.createElement("img");o.setAttribute("data-src",e),a[i].appendChild(o)}return t},t.run=function(e){v=m({},g),y=!0;var n=m(C,e),a=[],i=[],s=[];for(null!=n.use_canvas&&n.use_canvas&&(v.use_canvas=!0,v.use_svg=!1),"string"==typeof n.images?i=f(n.images):window.NodeList&&n.images instanceof window.NodeList?i=n.images:window.Node&&n.images instanceof window.Node?i=[n.images]:window.HTMLCollection&&n.images instanceof window.HTMLCollection&&(i=n.images),"string"==typeof n.bgnodes?s=f(n.bgnodes):window.NodeList&&n.elements instanceof window.NodeList?s=n.bgnodes:window.Node&&n.bgnodes instanceof window.Node&&(s=[n.bgnodes]),u=0,c=i.length;c>u;u++)a.push(i[u]);var o=document.getElementById("holderjs-style");o||(o=document.createElement("style"),o.setAttribute("id","holderjs-style"),o.type="text/css",document.getElementsByTagName("head")[0].appendChild(o)),n.nocss||(o.styleSheet?o.styleSheet.cssText+=n.stylesheet:n.stylesheet.length&&o.appendChild(document.createTextNode(n.stylesheet)));for(var l=new RegExp(n.domain+'/(.*?)"?\\)'),c=s.length,u=0;c>u;u++){var h=window.getComputedStyle(s[u],null).getPropertyValue("background-image"),p=h.match(l),b=s[u].getAttribute("data-background-src");if(p){var w=d(p[1].split("/"),n);w&&r("background",s[u],w,h)}else if(null!=b){var w=d(b.substr(b.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&r("background",s[u],w,h)}}for(c=a.length,u=0;c>u;u++){var _,k;k=_=h=null;try{k=a[u].getAttribute("src"),attr_datasrc=a[u].getAttribute("data-src")}catch(x){}if(null==attr_datasrc&&k&&k.indexOf(n.domain)>=0?h=k:attr_datasrc&&attr_datasrc.indexOf(n.domain)>=0&&(h=attr_datasrc),h){var w=d(h.substr(h.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);w&&(w.fluid?r("fluid",a[u],w,h):r("image",a[u],w,h))}}return t},h(e,function(){window.addEventListener?(window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)):window.attachEvent("onresize",u),y||t.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){t.run({})})}),"function"==typeof define&&define.amd&&define([],function(){return t}),function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var a,i,s=0,o=n,r="";e.charAt(0|s)||(o="=",s%1);r+=o.charAt(63&a>>8-8*(s%1))){if(i=e.charCodeAt(s+=.75),i>255)throw new t("'btoa' failed");a=a<<8|i}return r}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var a,i,s=0,o=0,r="";i=e.charAt(o++);~i&&(a=s%4?64*a+i:i,s++%4)?r+=String.fromCharCode(255&a>>(6&-2*s)):0)i=n.indexOf(i);return r})}(),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,n,a,i=document,s=[];if(i.querySelectorAll)return i.querySelectorAll("."+t);if(i.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=i.evaluate(n,i,null,0,null);a=e.iterateNext();)s.push(a);else for(e=i.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+t+"(\\s|$)"),a=0;a<e.length;a++)n.test(e[a].className)&&s.push(e[a]);return s}),window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])})}(Holder,window);