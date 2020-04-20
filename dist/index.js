!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactAntTreeSelect=t():e.ReactAntTreeSelect=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("antd")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@feizheng/next-tree-walk")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("@feizheng/noop")},function(e,t){e.exports=require("object-assign")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=(r(5),r(0)),u=r.n(i),c=r(3),f=r.n(c),a=(r(6),r(7),r(2)),l=r(4),s=r.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j="react-ant-tree-select",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,r,n,i,u=(t=c,function(){var e,r=g(t);if(O()){var n=g(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v(this,e)});function c(){return b(this,c),u.apply(this,arguments)}return r=c,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=(e.children,e.items,e.itemsKey,e.template,m(e,["className","children","items","itemsKey","template"]));return o.a.createElement(a.TreeSelect,y({"data-component":j,className:f()(j,t)},r),this.childView)}},{key:"childView",get:function(){var e=this.props,t=e.items,r=e.template,n=e.itemsKey;return s()(t,{template:r,itemsKey:n})}}])&&d(r.prototype,n),i&&d(r,i),c}(n.Component);x.displayName=j,x.version="1.1.4",x.propTypes={className:u.a.string,items:u.a.array,template:u.a.func.isRequired,itemsKey:u.a.oneOfType([u.a.string,u.a.func])},x.defaultProps={items:[],template:function(e,t){var r=e.item,n=r.value,i=r.label;return o.a.createElement(a.TreeSelect.TreeNode,{key:n,value:n,title:i,children:t()})},itemsKey:"children"};t.default=x}])}));