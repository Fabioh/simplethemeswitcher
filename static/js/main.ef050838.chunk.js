(this.webpackJsonpsimplethemeswitcher=this.webpackJsonpsimplethemeswitcher||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=n(3),l=n(1);var u=function(e,t){var n=Object(r.useState)((function(){var n=localStorage.getItem(e);return n?JSON.parse(n):t})),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,o]},s={title:"light",colors:{primary:"#C62E65",secundary:"#D63AF9",background:"#F5F5F5",text:"#333"}},m={title:"dark",colors:{primary:"#333",secundary:"#C62E65",background:"#222",text:"#fff"}},d=n(2);function f(){var e=Object(d.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    body {\n        background: ",";\n        font-size: 14px;\n        color: ",";\n        font-family: sans-serify\n    }\n"]);return f=function(){return e},e}var h=Object(l.c)(f(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text})),g=n(11),b=n.n(g),p=n(12);function y(){var e=Object(d.a)(["\n    height: 60px;\n    background: ",";\n    color: #FFF;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 30px;\n"]);return y=function(){return e},e}var v=l.d.div(y(),(function(e){return e.theme.colors.primary})),k=function(e){var t=e.toggleTheme,n=Object(r.useContext)(l.a),c=n.colors,o=n.title;return a.a.createElement(v,null,"Hello Word",a.a.createElement(b.a,{onChange:t,checked:"dark"===o,checkedIcon:!1,uncheckedIcon:!1,height:10,width:40,handleDiameter:20,offColor:Object(p.a)(.15,c.primary),onColor:c.secundary}))};var E=function(){var e=u("theme",s),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement(l.b,{theme:n},a.a.createElement("div",{className:"App"},a.a.createElement(h,null),a.a.createElement(k,{toggleTheme:function(){r("light"===n.title?m:s)}})))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ef050838.chunk.js.map