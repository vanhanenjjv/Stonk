(this.webpackJsonpstonk=this.webpackJsonpstonk||[]).push([[0],{518:function(e,t){},533:function(e,t){},551:function(e,t,n){n(552),e.exports=n(827)},558:function(e,t,n){},827:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",(function(){return Y}));var a={};n.r(a),n.d(a,"default",(function(){return q}));n(557),n(558);var c=n(116),o=n.n(c),i=n(352),u=n.n(i),l=n(511),s=n.n(l),d=n(0),j=n.n(d),f=n(69),b=n.n(f),h=n(107),v=n(512),x=n.n(v),O=n(535),g=(n(828),Object(O.b)(x.a)),p=n(832),m=n(838),k={username:"vanhanenjjv",repository:"Stonk",commitHash:"d8fc087\n",link:"https://github.com/".concat("vanhanenjjv","/").concat("Stonk")},y=n(38),C=function(e){var t=e.children;return Object(y.jsxs)(p.a,{children:[Object(y.jsx)(p.a.Content,{style:{width:"100%",alignSelf:"center",maxWidth:900,padding:"0 16px",margin:"16px 0 0 0"},children:t}),Object(y.jsx)(p.a.Footer,{style:{textAlign:"center"},children:Object(y.jsx)(m.a.Link,{type:"secondary",rel:"noopener",target:"_blank",href:"".concat(k.link,"/commit/").concat(k.commitHash),children:k.commitHash})})]})},D=n(839),w=n(841),S=n(111),M=n(842),R=function(e){var t=e.title,n=e.onBack,r=e.extra;return Object(y.jsx)(D.a,{title:t,subTitle:"",onBack:n,ghost:!1,extra:Object(y.jsxs)(w.b,{size:"middle",children:[r,Object(y.jsx)(S.a,{shape:"circle",size:"large",rel:"noopener",href:k.link,target:"_blank",children:Object(y.jsx)(M.a,{})},"GitHub")]})})},I=n(837),E=n(73),F=n.n(E),L=n(517),A=n(836),_=n(843),B=function(e){return Object(y.jsxs)(A.a.Dragger,{beforeUpload:function(t){return t.text().then(function(){var n=Object(L.a)(F.a.mark((function n(r){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.onReceive({name:t.name,text:r});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),!1},maxCount:1,showUploadList:!1,children:[Object(y.jsx)("p",{className:"ant-upload-drag-icon",children:Object(y.jsx)(_.a,{})}),Object(y.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(y.jsx)("p",{className:"ant-upload-hint",children:"more text goes here"})]})},U=n(83);var T=function(e){if("number"===typeof e)return e;var t=String(e);return Number(t.startsWith("$")?t.slice(1):t)},Y=function(){return j.a.useReducer((function(e,t){switch(t.type){case"SET_SOURCE":var n=t.file.text.split("\n").slice(1).filter((function(e){return e})).map((function(e){var t=e.split(",").map((function(e){return e.trim()})),n=Object(h.a)(t,6),r=n[0],a=n[1],c=n[2],i=n[3],u=n[4],l=n[5];return{date:o()(r),close:T(a),volume:Number(c),open:T(i),high:T(u),low:T(l),priceChange:Math.abs(T(u)-T(l))}})).sort((function(e,t){return e.date.unix()-t.date.unix()})).map((function(e,t,n){if(t<5)return e;var r=100*(1-n.slice(t-5,t).reduce((function(e,t){return e+t.close}),0)/5/e.open);return Object(U.a)(Object(U.a)({},e),{},{sma5Percentage:r})}));return Object(U.a)(Object(U.a)({},e),{},{source:{name:t.file.name,data:n}});case"CLEAR_SOURCE":return Object(U.a)(Object(U.a)({},e),{},{source:void 0})}}),{})};n(518);var H=function(e){var t=Y(),n=Object(h.a)(t,2),r=n[0].source,a=n[1];return j.a.useEffect((function(){var t;(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.length)&&r.data.length>0&&(e.onUpload(null===r||void 0===r?void 0:r.data),a({type:"CLEAR_SOURCE"}))}),[null===r||void 0===r?void 0:r.data]),Object(y.jsxs)(w.b,{style:{width:"100%"},direction:"vertical",children:[Object(y.jsx)(R,{title:"Upload"}),Object(y.jsx)(I.a,{children:Object(y.jsx)(B,{onReceive:function(e){a({type:"SET_SOURCE",file:e})}})})]})},N=n(834),P=n(213),$=n(121),V=n(840),G=function(e){var t=function(){var t=j.a.useMemo((function(){for(var t={current:[],longest:[]},n=1;n<e.stockData.length;++n){var r=e.stockData[n];e.stockData[n-1].close>r.close?t.current=[]:(t.current.push(r),t.current>t.longest&&(t.longest=t.current))}return t.longest}),[e.stockData]),n=j.a.useMemo((function(){return[0===t.length?void 0:t[0],0===t.length?void 0:t[t.length-1]]}),[t]),r=Object(h.a)(n,2),a=r[0],c=r[1],o=j.a.useMemo((function(){return t.length}),[t]),i=j.a.useMemo((function(){var e="DD.MM.YYYY",t=null===a||void 0===a?void 0:a.date.format(e),n=null===c||void 0===c?void 0:c.date.format(e);return"".concat(t," - ").concat(n)}),[a,c]),u=j.a.useMemo((function(){var e,t,n=null!==(e=null===a||void 0===a?void 0:a.close)&&void 0!==e?e:0;return(100*((null!==(t=null===c||void 0===c?void 0:c.close)&&void 0!==t?t:0)/n-1)).toFixed(1)}),[a,c]);return Object(y.jsx)(I.a,{title:"Longest bullish trend",children:Object(y.jsxs)(P.a,{gutter:8,justify:"space-around",children:[Object(y.jsx)($.a,{children:Object(y.jsx)(V.a,{title:"Lasted",value:o,suffix:"days"})}),Object(y.jsx)($.a,{children:Object(y.jsx)(V.a,{title:"From",value:i})}),Object(y.jsx)($.a,{children:Object(y.jsx)(V.a,{title:"Value increased",value:u,suffix:"%"})})]})})};return Object(y.jsx)(t,{})},W=n(534),z=function(e){var t=j.a.useMemo((function(){return e.stockData.map((function(e){return Object(U.a)(Object(U.a)({},e),{},{date:e.date.format("YYYY-MM-DD")})}))}),[e.stockData]);return Object(y.jsx)(I.a,{children:Object(y.jsx)(W.a,{width:400,height:500,xField:"date",yField:["open","close","high","low"],data:t})})},J=n(835),K=function(e){var t=e.records;return Object(y.jsx)(J.a,{scroll:{x:!0},columns:[{title:"Date",dataIndex:"date",render:function(e){return o()(e).format("ll")},sorter:function(e,t){return e.date.unix()-t.date.unix()}},{title:"Close",dataIndex:"close",render:function(e){return"$".concat(e)},sorter:function(e,t){return e.close-t.close}},{title:"Volume",dataIndex:"volume",sorter:function(e,t){return e.volume-t.volume}},{title:"Open",dataIndex:"open",render:function(e){return"$".concat(e)},sorter:function(e,t){return e.open-t.open}},{title:"High",dataIndex:"high",render:function(e){return"$".concat(e)},sorter:function(e,t){return e.high-t.high}},{title:"Low",dataIndex:"low",render:function(e){return"$".concat(e)},sorter:function(e,t){return e.low-t.low}},{title:"Change",dataIndex:"priceChange",render:function(e){return"$".concat(e.toFixed(2))},sorter:function(e,t){return e.priceChange-t.priceChange}},{title:"SMA5",dataIndex:"sma5Percentage",render:function(e){return e?"".concat(e.toFixed(2),"%"):"n/a"},sorter:function(e,t){var n,r;return(null!==(n=e.sma5Percentage)&&void 0!==n?n:0)-(null!==(r=t.sma5Percentage)&&void 0!==r?r:0)}}],dataSource:t,rowKey:function(e){return e.date.unix()}})},q=function(e){var t,n,r={records:null!==(t=null===e||void 0===e?void 0:e.records)&&void 0!==t?t:[],recordsInRange:null!==(n=null===e||void 0===e?void 0:e.records)&&void 0!==n?n:[],range:[null,null],uploadModalVisible:!1};return j.a.useReducer((function(e,t){switch(t.type){case"SET_RANGE":return Object(U.a)(Object(U.a)({},e),{},{recordsInRange:e.records.filter((function(e){var n,r,a,c,i=o()(e.date),u=null===(n=t.range)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.subtract(1,"day"),l=null===(a=t.range)||void 0===a||null===(c=a[1])||void 0===c?void 0:c.add(1,"day");return u&&!l?i.isAfter(u,"day"):!u&&l?i.isBefore(l,"day"):!u||!l||i.isBetween(u,l,"day")})),range:t.range});case"SHOW_MODAL":return Object(U.a)(Object(U.a)({},e),{},{uploadModalVisible:!0});case"HIDE_MODAL":return Object(U.a)(Object(U.a)({},e),{},{uploadModalVisible:!1})}}),r)};n(533);var Q=function(e){var t=q({records:e.stockData}),n=Object(h.a)(t,2),r=n[0],a=n[1];return Object(y.jsxs)(w.b,{direction:"vertical",style:{width:"100%"},children:[Object(y.jsx)(R,{title:"Analytics",onBack:e.onBack,extra:Object(y.jsx)(g.RangePicker,{onChange:function(e){return a({type:"SET_RANGE",range:null!==e&&void 0!==e?e:[null,null]})}})}),Object(y.jsx)(N.a,{children:"Statistics"}),Object(y.jsx)(G,{stockData:r.recordsInRange}),Object(y.jsx)(N.a,{children:"Chart"}),Object(y.jsx)(z,{stockData:r.recordsInRange}),Object(y.jsx)(N.a,{children:"Table"}),Object(y.jsx)(K,{records:r.recordsInRange})]})},X=function(){var e=j.a.useState([]),t=Object(h.a)(e,2),n=t[0],r=t[1],a=j.a.useCallback((function(){return r([])}),[]);return Object(y.jsx)(C,{children:0===n.length?Object(y.jsx)(H,{onUpload:r}):Object(y.jsx)(Q,{onBack:a,stockData:n})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,844)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.extend(u.a),o.a.extend(s.a),b.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(X,{})}),document.getElementById("root")),Z()}},[[551,1,2]]]);
//# sourceMappingURL=main.2847b66c.chunk.js.map