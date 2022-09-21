import{_ as s,c as n,o as a,a as l}from"./app.d5222136.js";var p="/assets/event_loop.2b1faf02.png",o="/assets/node_event_loop.8d45a511.png";const E=JSON.parse('{"title":"BOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001DOM/CSS/\u6E32\u67D3\u6811\u3001\u89E3\u6790\u4E0E\u52A0\u8F7D\u3001\u56DE\u6D41\u4E0E\u91CD\u7ED8","slug":"\u4E00\u3001dom-css-\u6E32\u67D3\u6811\u3001\u89E3\u6790\u4E0E\u52A0\u8F7D\u3001\u56DE\u6D41\u4E0E\u91CD\u7ED8"},{"level":3,"title":"1. \u89E3\u6790\u3001 \u52A0\u8F7D","slug":"_1-\u89E3\u6790\u3001-\u52A0\u8F7D"},{"level":3,"title":"2. \u56DE\u6D41\u3001\u91CD\u7ED8","slug":"_2-\u56DE\u6D41\u3001\u91CD\u7ED8"},{"level":2,"title":"\u4E8C\u3001\u65F6\u95F4\u7EBF\u3001\u89E3\u6790\u4E0E\u6E32\u67D3\u3001\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570","slug":"\u4E8C\u3001\u65F6\u95F4\u7EBF\u3001\u89E3\u6790\u4E0E\u6E32\u67D3\u3001\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570"},{"level":3,"title":"1. \u65F6\u95F4\u7EBF","slug":"_1-\u65F6\u95F4\u7EBF"},{"level":3,"title":"2. \u9875\u9762\u52A0\u8F7D\u76843\u4E2A\u9636\u6BB5","slug":"_2-\u9875\u9762\u52A0\u8F7D\u76843\u4E2A\u9636\u6BB5"},{"level":3,"title":"3. window.onload \u548C DOMContentLoaded \u533A\u522B\uFF1F","slug":"_3-window-onload-\u548C-domcontentloaded-\u533A\u522B\uFF1F"},{"level":3,"title":"4. \u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570 domReady","slug":"_4-\u5C01\u88C5\u6587\u6863\u89E3\u6790\u5B8C\u6BD5\u51FD\u6570-domready"},{"level":2,"title":"\u4E09\u3001\u6E32\u67D3\u5F15\u64CE\u3001\u58F0\u660EHTML\u3001\u6E32\u67D3\u6A21\u5F0F","slug":"\u4E09\u3001\u6E32\u67D3\u5F15\u64CE\u3001\u58F0\u660Ehtml\u3001\u6E32\u67D3\u6A21\u5F0F"},{"level":3,"title":"1. \u6D4F\u89C8\u5668\u8BF7\u6C42\u4E00\u4E2A\u7F51\u9875\u7684\u6D41\u7A0B","slug":"_1-\u6D4F\u89C8\u5668\u8BF7\u6C42\u4E00\u4E2A\u7F51\u9875\u7684\u6D41\u7A0B"},{"level":3,"title":"2. \u6D4F\u89C8\u5668\u4E0E\u9875\u9762\u6E32\u67D3","slug":"_2-\u6D4F\u89C8\u5668\u4E0E\u9875\u9762\u6E32\u67D3"},{"level":3,"title":"3. \u6E32\u67D3\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F","slug":"_3-\u6E32\u67D3\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F"},{"level":3,"title":"4. \u8C08\u8C08IE6\u4EE5\u524D\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u6027","slug":"_4-\u8C08\u8C08ie6\u4EE5\u524D\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u6027"},{"level":3,"title":"5. \u8C08\u8C08IE6\u5F00\u59CB\u4EE5\u540E\u6D4F\u89C8\u5668\u517C\u5BB9\u6027","slug":"_5-\u8C08\u8C08ie6\u5F00\u59CB\u4EE5\u540E\u6D4F\u89C8\u5668\u517C\u5BB9\u6027"},{"level":3,"title":"6. \u6D4F\u89C8\u5668\u6A21\u5F0F\uFF08compatMode\uFF09","slug":"_6-\u6D4F\u89C8\u5668\u6A21\u5F0F\uFF08compatmode\uFF09"},{"level":3,"title":"7. DTD\u6587\u6863\u7C7B\u578B","slug":"_7-dtd\u6587\u6863\u7C7B\u578B"},{"level":2,"title":"\u56DB\u3001\u5256\u6790JavaScript\u7684\u6267\u884C\u673A\u5236","slug":"\u56DB\u3001\u5256\u6790javascript\u7684\u6267\u884C\u673A\u5236"},{"level":3,"title":"1. \u8FDB\u7A0B\u3001\u7EBF\u7A0B","slug":"_1-\u8FDB\u7A0B\u3001\u7EBF\u7A0B"},{"level":3,"title":"2. \u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684","slug":"_2-\u6D4F\u89C8\u5668\u662F\u591A\u8FDB\u7A0B\u7684"},{"level":3,"title":"3. \u4E3A\u4EC0\u4E48JS\u5F15\u64CE\u8BBE\u8BA1\u4E4B\u521D\u5C31\u662F\u5355\u7EBF\u7A0B\u7684\uFF1F","slug":"_3-\u4E3A\u4EC0\u4E48js\u5F15\u64CE\u8BBE\u8BA1\u4E4B\u521D\u5C31\u662F\u5355\u7EBF\u7A0B\u7684\uFF1F"},{"level":3,"title":"4. \u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B","slug":"_4-\u4E8B\u4EF6\u9A71\u52A8\u6A21\u578B"},{"level":2,"title":"\u4E94\u3001\u6DF1\u5165\u4E86\u89E3BOM\u662F\u4F55\u79CD\u5B58\u5728","slug":"\u4E94\u3001\u6DF1\u5165\u4E86\u89E3bom\u662F\u4F55\u79CD\u5B58\u5728"},{"level":3,"title":"1. JavaScript\u7EC4\u6210\u90E8\u5206","slug":"_1-javascript\u7EC4\u6210\u90E8\u5206"},{"level":3,"title":"2. \u4EC0\u4E48\u662FBOM\uFF1F","slug":"_2-\u4EC0\u4E48\u662Fbom\uFF1F"},{"level":2,"title":"\u516D\u3001window\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u516D\u3001window\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":2,"title":"\u4E03\u3001navigator\u4E0Ehistory\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u4E03\u3001navigator\u4E0Ehistory\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":3,"title":"1. navigator","slug":"_1-navigator"},{"level":3,"title":"2. userAgent","slug":"_2-useragent"},{"level":3,"title":"3. history","slug":"_3-history"},{"level":2,"title":"\u516B\u3001screen\u4E0Elocation\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5","slug":"\u516B\u3001screen\u4E0Elocation\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5"},{"level":3,"title":"1. screen","slug":"_1-screen"},{"level":3,"title":"2. location \u5B9A\u4F4D","slug":"_2-location-\u5B9A\u4F4D"},{"level":2,"title":"\u4E5D\u3001\u4E8B\u4EF6\u73AF Event Loop","slug":"\u4E5D\u3001\u4E8B\u4EF6\u73AF-event-loop"},{"level":3,"title":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B","slug":"\u8FDB\u7A0B\u4E0E\u7EBF\u7A0B"},{"level":3,"title":"\u6E32\u67D3\u8FDB\u7A0B","slug":"\u6E32\u67D3\u8FDB\u7A0B"},{"level":3,"title":"\u6848\u4F8B\u5206\u6790","slug":"\u6848\u4F8B\u5206\u6790"},{"level":3,"title":"\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1","slug":"\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1-1"},{"level":3,"title":"setImmediate \u548C setTimeout","slug":"setimmediate-\u548C-settimeout"},{"level":3,"title":"MessageChannel \u4E0E postMessage","slug":"messagechannel-\u4E0E-postmessage"},{"level":3,"title":"requestAnimationFrame \u4E0E setInterval","slug":"requestanimationframe-\u4E0E-setinterval"},{"level":3,"title":"MutationObserver \u4E0E nextTick","slug":"mutationobserver-\u4E0E-nexttick"},{"level":3,"title":"NodeJS \u57FA\u672C\u8BA4\u77E5","slug":"nodejs-\u57FA\u672C\u8BA4\u77E5"},{"level":3,"title":"NodeJS \u64C5\u957F\u505A\u4EC0\u4E48","slug":"nodejs-\u64C5\u957F\u505A\u4EC0\u4E48"},{"level":3,"title":"JS \u5355\u7EBF\u7A0B\u4E0E\u591A\u7EBF\u7A0B\u5BF9\u6BD4","slug":"js-\u5355\u7EBF\u7A0B\u4E0E\u591A\u7EBF\u7A0B\u5BF9\u6BD4"},{"level":3,"title":"\u540C\u6B65\u4E0E\u5F02\u6B65\u3001\u963B\u585E\u4E0E\u975E\u963B\u585E","slug":"\u540C\u6B65\u4E0E\u5F02\u6B65\u3001\u963B\u585E\u4E0E\u975E\u963B\u585E"},{"level":3,"title":"NodeJS \u4E8B\u4EF6\u73AF","slug":"nodejs-\u4E8B\u4EF6\u73AF"},{"level":3,"title":"NodeJS \u4E8B\u4EF6\u73AF\u6848\u4F8B\u5206\u6790","slug":"nodejs-\u4E8B\u4EF6\u73AF\u6848\u4F8B\u5206\u6790"}],"relativePath":"bom/index.md"}'),e={name:"bom/index.md"},t=l("",375),c=[t];function r(F,y,D,A,i,C){return a(),n("div",null,c)}var g=s(e,[["render",r]]);export{E as __pageData,g as default};