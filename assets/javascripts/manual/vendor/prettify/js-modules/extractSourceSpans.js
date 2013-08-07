/**
 * Split markup into a string of source code and an array mapping ranges in
 * that string to the text nodes in which they appear.
 *
 * <p>
 * The HTML DOM structure:</p>
 * <pre>
 * (Element   "p"
 *   (Element "b"
 *     (Text  "print "))       ; #1
 *   (Text    "'Hello '")      ; #2
 *   (Element "br")            ; #3
 *   (Text    "  + 'World';")) ; #4
 * </pre>
 * <p>
 * corresponds to the HTML
 * {@code <p><b>print </b>'Hello '<br>  + 'World';</p>}.</p>
 *
 * <p>
 * It will produce the output:</p>
 * <pre>
 * {
 *   sourceCode: "print 'Hello '\n  + 'World';",
 *   //                 1         2
 *   //       012345678901234 5678901234567
 *   spans: [0, #1, 6, #2, 14, #3, 15, #4]
 * }
 * </pre>
 * <p>
 * where #1 is a reference to the {@code "print "} text node above, and so
 * on for the other text nodes.
 * </p>
 *
 * <p>
 * The {@code} spans array is an array of pairs.  Even elements are the start
 * indices of substrings, and odd elements are the text nodes (or BR elements)
 * that contain the text for those substrings.
 * Substrings continue until the next index or the end of the source.
 * </p>
 *
 * @param {Node} node an HTML DOM subtree containing source-code.
 * @return {Object} source code and the text nodes in which they occur.
 */
function extractSourceSpans(e){function a(e){switch(e.nodeType){case 1:if(t.test(e.className))return;for(var o=e.firstChild;o;o=o.nextSibling)a(o);var f=e.nodeName;if("BR"===f||"LI"===f)n[s]="\n",i[s<<1]=r++,i[s++<<1|1]=e;break;case 3:case 4:var l=e.nodeValue;l.length&&(u?l=l.replace(/\r\n?/g,"\n"):l=l.replace(/[ \t\r\n]+/g," "),n[s]=l,i[s<<1]=r,r+=l.length,i[s++<<1|1]=e)}}var t=/(?:^|\s)nocode(?:\s|$)/,n=[],r=0,i=[],s=0,o;e.currentStyle?o=e.currentStyle.whiteSpace:window.getComputedStyle&&(o=document.defaultView.getComputedStyle(e,null).getPropertyValue("white-space"));var u=o&&"pre"===o.substring(0,3);return a(e),{sourceCode:n.join("").replace(/\n$/,""),spans:i}};