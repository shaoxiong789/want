(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{147:function(e,t,l){var n=l(194);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};l(10)(n,a);n.locals&&(e.exports=n.locals)},194:function(e,t,l){(e.exports=l(11)(!1)).push([e.i,"\n.demo-waterfall ul {\n    max-height: 360px;\n    overflow: scroll;\n    border-top: 1px solid #e5e5e5;\n}\n.demo-waterfall li {\n    line-height: 50px;\n    border-bottom: 1px solid #e5e5e5;\n    background: #fff;\n    text-align: center;\n}\n.demo-waterfall .page-desc {\n    padding: 5px 0;\n    line-height: 1.4;\n    font-size: 14px;\n    text-align: center;\n    color: #666;\n}\n",""])},195:function(e,t,l){"use strict";var n=l(147);l.n(n).a},397:function(e,t,l){"use strict";l.r(t);var n=l(13),a={i18n:{"zh-CN":{text:"当即将滚动到元素底部时，会自动加载更多",tips:"注意：Waterfall 已被废弃，请使用 List 组件代替"},"en-US":{text:"This list will load items will scroll to bottom.",tips:"Waterfall is deprecated and no longer maintained, please use the List component instead."}},data:function(){return{list:[0,1,2,3,4,5,6,7,8,9],disabled:!1}},directives:{WaterfallLower:Object(n.d)("lower")},methods:{loadMore:function(){var e=this;this.disabled=!0,setTimeout(function(){for(var t=0;t<5;t++)e.list.push(e.list.length);e.disabled=!1},200)}}},i=(l(195),l(0)),o=Object(i.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("demo-section",[l("van-notice-bar",[e._v(e._s(e.$t("tips")))]),l("demo-block",{attrs:{title:e.$t("basicUsage")}},[l("p",{staticClass:"page-desc"},[e._v(e._s(e.$t("text")))]),l("ul",{directives:[{name:"waterfall-lower",rawName:"v-waterfall-lower",value:e.loadMore,expression:"loadMore"}],attrs:{"waterfall-disabled":"disabled","waterfall-offset":"400"}},e._l(e.list,function(t){return l("li",[e._v(e._s(t))])}))])],1)},[],!1,null,null,null);t.default=o.exports}}]);