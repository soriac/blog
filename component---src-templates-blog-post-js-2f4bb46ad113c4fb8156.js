(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",function(){return f});r(58);var n=r(7),a=r.n(n),i=r(168),o=r(9),s=r(0),l=r.n(s),c=r(167),d=r(165),p=r(160),u=Object(i.a)("div",{target:"e3ued470"})("background-color:white;padding:10px;border-radius:5px;box-shadow:0px 0px 10px rgba(0,0,0,0.25);.gatsby-highlight{border-radius:5px;}small{margin:0;}h2,h3{margin:",Object(p.a)(1)," 0 0;}code{border-radius:0 !important;}pre{box-shadow:0 0 10px rgba(0,0,0.25);}"),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title;return Object(o.b)(c.a,{location:this.props.location,title:t},Object(o.b)(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),Object(o.b)(u,null,Object(o.b)("h1",{style:{margin:0}},e.frontmatter.title),Object(o.b)("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",margin:0})},e.frontmatter.date),Object(o.b)("div",{dangerouslySetInnerHTML:{__html:e.html}})))},t}(l.a.Component);t.default=m;var f="3654438753"},160:function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"b",function(){return c});var n=r(170),a=r.n(n),i=r(171),o=r.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new a.a(o.a);var l=s.rhythm,c=s.scale},161:function(e,t,r){var n;e.exports=(n=r(164))&&n.default||n},162:function(e,t,r){"use strict";r(9);var n=r(0),a=r.n(n),i=r(4),o=r.n(i),s=r(36),l=r.n(s);r.d(t,"a",function(){return l.a});r(161),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},163:function(e){e.exports={data:{site:{siteMetadata:{title:"SORIAC"}}}}},164:function(e,t,r){"use strict";r.r(t);r(58);var n=r(0),a=r.n(n),i=r(4),o=r.n(i),s=r(60),l=r(2),c=function(e){var t=e.location,r=l.default.getResourcesForPathnameSync(t.pathname);return r?a.a.createElement(s.a,Object.assign({location:t,pageResources:r},r.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},165:function(e,t,r){"use strict";var n=r(9),a=r(166),i=(r(0),r(4)),o=r.n(i),s=r(172),l=r.n(s);function c(e){var t=e.description,r=e.lang,i=e.meta,o=e.title,s=a.data.site,c=t||s.siteMetadata.description;return Object(n.b)(l.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},166:function(e){e.exports={data:{site:{siteMetadata:{title:"SORIAC",description:"Un espacio para aprender JS y React",author:"Cristian Soria"}}}}},167:function(e,t,r){"use strict";var n=r(7),a=r.n(n),i=r(9),o=r(0),s=r.n(o),l=(r(58),r(169),r(163)),c=r(37),d=r.n(c),p=r(162),u=function(e){return Object(i.b)(p.a,d()({},e,{style:{boxShadow:"none",textDecoration:"none",color:"white"}}))},m=r(160),f=function(e){var t=e.title;return Object(i.b)("h3",{style:{fontFamily:"Monserrat, sans-serif",marginTop:0}},Object(i.b)(u,{to:"/"},t))},h=function(e){var t=e.title,r=Object.assign({},Object(m.b)(1.5),{marginBottom:Object(m.a)(1)});return Object(i.b)("h1",{style:r},Object(i.b)(u,{to:"/"},t))},g=function(e){var t=e.big,r=l.data.site.siteMetadata.title;return t?Object(i.b)(h,{title:r}):Object(i.b)(f,{title:r})},b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,r=e.children;return Object(i.b)("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(24),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75)}},Object(i.b)("header",null,Object(i.b)(g,{big:"/blog/"===t.pathname})),Object(i.b)("main",null,r),Object(i.b)("footer",{style:{marginTop:Object(m.a)(1),color:"white"}},"© ",(new Date).getFullYear(),", Hecho con"," ",Object(i.b)("a",{href:"https://www.gatsbyjs.org",style:{textDecoration:"none",color:"white"}},"Gatsby")))},t}(s.a.Component);t.a=b},168:function(e,t,r){"use strict";var n=r(0),a=r(61),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(a.a)(function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),s=r(59),l=r.n(s),c=r(9),d=r(20),p=r(15),u=o,m=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?u:m};t.a=function e(t,r){var a,i,o;void 0!==r&&(a=r.label,o=r.target,i=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var s=t.__emotion_real===t,u=s&&t.__emotion_base||t;"function"!=typeof i&&s&&(i=t.__emotion_forwardProp);var m=i||f(u),h=!m("as");return function(){var g=arguments,b=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&b.push("label:"+a+";"),null==g[0]||void 0===g[0].raw)b.push.apply(b,g);else{b.push(g[0][0]);for(var y=g.length,v=1;v<y;v++)b.push(g[v],g[0][v])}var k=Object(c.c)(function(e,t,r){return Object(n.createElement)(c.a.Consumer,null,function(a){var s=h&&e.as||u,l="",c=[],g=e;if(null==e.theme){for(var y in g={},e)g[y]=e[y];g.theme=a}"string"==typeof e.className&&(l+=Object(d.a)(t.registered,c,e.className));var v=Object(p.a)(b.concat(c),t.registered,g);Object(d.b)(t,v,"string"==typeof s),l+=t.key+"-"+v.name,void 0!==o&&(l+=" "+o);var k=h&&void 0===i?f(s):m,x={};for(var O in e)h&&"as"===O||k(O)&&(x[O]=e[O]);return x.className=l,x.ref=r||e.innerRef,Object(n.createElement)(s,x)})});return k.displayName=void 0!==a?a:"Styled("+("string"==typeof u?u:u.displayName||u.name||"Component")+")",k.defaultProps=t.defaultProps,k.__emotion_real=k,k.__emotion_base=u,k.__emotion_styles=b,k.__emotion_forwardProp=i,Object.defineProperty(k,"toString",{value:function(){return"."+o}}),k.withComponent=function(t,n){return e(t,void 0!==n?l()({},r||{},n):r).apply(void 0,b)},k}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2f4bb46ad113c4fb8156.js.map