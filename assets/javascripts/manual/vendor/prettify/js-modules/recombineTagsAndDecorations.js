/**
 * Breaks {@code job.sourceCode} around style boundaries in
 * {@code job.decorations} and modifies {@code job.sourceNode} in place.
 * @param {Object} job like <pre>{
 *    sourceCode: {string} source as plain text,
 *    spans: {Array.<number|Node>} alternating span start indices into source
 *       and the text node or element (e.g. {@code <BR>}) corresponding to that
 *       span.
 *    decorations: {Array.<number|string} an array of style classes preceded
 *       by the position at which they start in job.sourceCode in order
 * }</pre>
 * @private
 */
function recombineTagsAndDecorations(e){var t=/\bMSIE\b/.test(navigator.userAgent),n=/\n/g,r=e.sourceCode,i=r.length,s=0,o=e.spans,u=o.length,a=0,f=e.decorations,l=f.length,c=0;f[l]=i;var h,p;for(p=h=0;p<l;)f[p]!==f[p+2]?(f[h++]=f[p++],f[h++]=f[p++]):p+=2;l=h;for(p=h=0;p<l;){var d=f[p],v=f[p+1],m=p+2;while(m+2<=l&&f[m+1]===v)m+=2;f[h++]=d,f[h++]=v,p=m}l=f.length=h;var g=null;while(a<u){var y=o[a],b=o[a+2]||i,w=f[c],E=f[c+2]||i,m=Math.min(b,E),S=o[a+1],x;if(S.nodeType!==1&&(x=r.substring(s,m))){t&&(x=x.replace(n,"\r")),S.nodeValue=x;var T=S.ownerDocument,N=T.createElement("SPAN");N.className=f[c+1];var C=S.parentNode;C.replaceChild(N,S),N.appendChild(S),s<b&&(o[a+1]=S=T.createTextNode(r.substring(m,b)),C.insertBefore(S,N.nextSibling))}s=m,s>=b&&(a+=2),s>=E&&(c+=2)}};