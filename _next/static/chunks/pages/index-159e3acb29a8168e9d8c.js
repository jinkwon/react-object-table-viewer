(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7853:function(e,t,r){"use strict";r.r(t);var n=r(5893);r(7294);t.default=function(e){return(0,n.jsx)("pre",{style:{fontSize:"11px",backgroundColor:"#eee"},children:e.children})}},526:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893);r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=function e(t){var r=l({layout:"vertical"},t),c=r.data,a=Object.keys(c||{})||[];return(0,n.jsxs)("table",{className:r.className,style:l({},r.style),children:["vertical"===r.layout&&(0,n.jsx)("tbody",{children:a.map((function(t,a){var o=c[t],i="object"===typeof o;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{style:l({},r.keyStyle),children:t}),i&&(0,n.jsx)("td",{children:(0,n.jsx)(e,l(l({},r),{},{data:o}))}),!i&&(0,n.jsx)("td",{style:l({whiteSpace:"nowrap"},r.valueStyle),children:"".concat(o)})]},a)}))}),"horizontal"===r.layout&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("thead",{children:a.map((function(e,t){return(0,n.jsx)("th",{style:l({},r.keyStyle),children:e},t)}))}),(0,n.jsx)("tbody",{children:a.map((function(t,a){var o=c[t],i="object"===typeof o;return(0,n.jsxs)(n.Fragment,{children:[i&&(0,n.jsx)("td",{children:(0,n.jsx)(e,l(l({},r),{},{data:o}))}),!i&&(0,n.jsx)("td",{style:l({whiteSpace:"nowrap"},r.valueStyle),children:"".concat(o)},a)]})}))})]})]})},i="1.0.7",s=r(7853),u=function(){var e={hello:"world",abc:123,users:["John","Jeff","Sam"],dataArray:[{userName:"John"},{userName:"Jeff"},{userName:"Sam"}],data:{b:{c:3,d:4,e:[1,"a",2,"b",3,"c"]}}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h1",{children:["react-object-table-viewer ",i]}),(0,n.jsx)("h2",{children:"How to use"}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"https://github.com/jinkwon/react-object-table-viewer",children:"https://github.com/jinkwon/react-object-table-viewer"})}),(0,n.jsx)("h2",{children:"Example"}),(0,n.jsx)("h3",{children:"Properties"}),(0,n.jsx)(s.default,{children:"\nexport interface PropTypes {\n  data?: Record<string, unknown>;\n  style?: CSSProperties;\n  keyStyle?: CSSProperties;\n  valueStyle?: CSSProperties;\n  className?: string;\n  layout?: TableViewerLayoutType;\n}\n\n<ReactObjectTableViewer\n  layout={'vertical'}\n  style={{\n    border: '1px solid #ccc'\n  }}\n  keyStyle={{\n    color: '#ff0000'\n  }}\n  valueStyle={{\n    color: '#00ff00'\n  }}\n  data={data}\n/>\n\n"}),(0,n.jsx)("h2",{children:"Horizontal"}),(0,n.jsx)(o,{layout:"horizontal",style:{border:"1px solid #ccc"},keyStyle:{color:"#ff0000"},valueStyle:{color:"#00ff00"},data:e}),(0,n.jsx)("h2",{children:"Vertical"}),(0,n.jsx)(o,{layout:"vertical",style:{border:"1px solid #ccc"},keyStyle:{color:"#ff0000"},valueStyle:{color:"#00ff00"},data:e})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(526)}])}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);