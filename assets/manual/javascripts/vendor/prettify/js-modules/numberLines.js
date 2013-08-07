/**
 * Given a DOM subtree, wraps it in a list, and puts each line into its own
 * list item.
 *
 * @param {Node} node modified in place.  Its content is pulled into an
 *     HTMLOListElement, and each line is moved into a separate list item.
 *     This requires cloning elements, so the input might not have unique
 *     IDs after numbering.
 */
function numberLines(e,t){function f(e){switch(e.nodeType){case 1:if(n.test(e.className))break;if("BR"===e.nodeName)l(e),e.parentNode&&e.parentNode.removeChild(e);else for(var t=e.firstChild;t;t=t.nextSibling)f(t);break;case 3:case 4:if(o){var s=e.nodeValue,u=s.match(r);if(u){var a=s.substring(0,u.index);e.nodeValue=a;var c=s.substring(u.index+u[0].length);if(c){var h=e.parentNode;h.insertBefore(i.createTextNode(c),e.nextSibling)}l(e),a||e.parentNode.removeChild(e)}}}}function l(e){function t(e,n){var r=n?e.cloneNode(!1):e,i=e.parentNode;if(i){var s=t(i,1),o=e.nextSibling;s.appendChild(r);for(var u=o;u;u=o)o=u.nextSibling,s.appendChild(u)}return r}while(!e.nextSibling){e=e.parentNode;if(!e)return}var n=t(e.nextSibling,0);for(var r;(r=n.parentNode)&&r.nodeType===1;)n=r;a.push(n)}var n=/(?:^|\s)nocode(?:\s|$)/,r=/\r\n?|\n/,i=e.ownerDocument,s;e.currentStyle?s=e.currentStyle.whiteSpace:window.getComputedStyle&&(s=i.defaultView.getComputedStyle(e,null).getPropertyValue("white-space"));var o=s&&"pre"===s.substring(0,3),u=i.createElement("LI");while(e.firstChild)u.appendChild(e.firstChild);var a=[u];for(var c=0;c<a.length;++c)f(a[c]);t===(t|0)&&a[0].setAttribute("value",t);var h=i.createElement("OL");h.className="linenums";var p=Math.max(0,t-1|0)||0;for(var c=0,d=a.length;c<d;++c)u=a[c],u.className="L"+(c+p)%10,u.firstChild||u.appendChild(i.createTextNode(" ")),h.appendChild(u);e.appendChild(h)};