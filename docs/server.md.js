webpackJsonp([36,59],{1570:function(n,s){n.exports={content:["article",["p","Ant Design Pro \u662f\u4e00\u5957\u57fa\u4e8e React \u6280\u672f\u6808\u7684\u5355\u9875\u9762\u5e94\u7528\uff0c\u6211\u4eec\u63d0\u4f9b\u7684\u662f\u524d\u7aef\u4ee3\u7801\u548c\u672c\u5730\u6a21\u62df\u6570\u636e\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\n\u901a\u8fc7 Restful API \u7684\u5f62\u5f0f\u548c\u4efb\u4f55\u6280\u672f\u6808\u7684\u670d\u52a1\u7aef\u5e94\u7528\u4e00\u8d77\u5de5\u4f5c\u3002\u4e0b\u9762\u5c06\u7b80\u5355\u4ecb\u7ecd\u548c\u670d\u52a1\u7aef\u4ea4\u4e92\u7684\u57fa\u672c\u5199\u6cd5\u3002"],["h2","\u524d\u7aef\u8bf7\u6c42\u6d41\u7a0b"],["p","\u5728 Ant Design Pro \u4e2d\uff0c\u4e00\u4e2a\u5b8c\u6574\u7684\u524d\u7aef UI \u4ea4\u4e92\u5230\u670d\u52a1\u7aef\u5904\u7406\u6d41\u7a0b\u662f\u8fd9\u6837\u7684\uff1a"],["ol",["li",["p","UI \u7ec4\u4ef6\u4ea4\u4e92\u64cd\u4f5c\uff1b"]],["li",["p","\u8c03\u7528 model \u7684 effect\uff1b"]],["li",["p","\u8c03\u7528\u7edf\u4e00\u7ba1\u7406\u7684 service \u8bf7\u6c42\u51fd\u6570\uff1b"]],["li",["p","\u4f7f\u7528\u5c01\u88c5\u7684 request.js \u53d1\u9001\u8bf7\u6c42\uff1b"]],["li",["p","\u83b7\u53d6\u670d\u52a1\u7aef\u8fd4\u56de\uff1b"]],["li",["p","\u7136\u540e\u8c03\u7528 reducer \u6539\u53d8 state\uff1b"]],["li",["p","\u66f4\u65b0 model\u3002"]]],["p","\u4ece\u4e0a\u9762\u7684\u6d41\u7a0b\u53ef\u4ee5\u770b\u51fa\uff0c\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\u7ef4\u62a4\uff0c\u7edf\u4e00\u7684\u8bf7\u6c42\u5904\u7406\u90fd\u653e\u5728 ",["code","services"]," \u6587\u4ef6\u5939\u4e2d\uff0c\u5e76\u4e14\u4e00\u822c\u6309\u7167 model \u7ef4\u5ea6\u8fdb\u884c\u62c6\u5206\u6587\u4ef6\uff0c\u5982\uff1a"],["pre",{lang:null,highlighted:'services<span class="token operator">/</span>\n  user<span class="token punctuation">.</span>js\n  api<span class="token punctuation">.</span>js\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","services/\n  user.js\n  api.js\n  ..."]],["p","\u5176\u4e2d\uff0c",["code","utils/request.js"]," \u662f\u57fa\u4e8e ",["a",{title:null,href:"https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch"},"fetch"]," \u7684\u5c01\u88c5\uff0c\u4fbf\u4e8e\u7edf\u4e00\u5904\u7406 POST\uff0cGET \u7b49\u8bf7\u6c42\u53c2\u6570\uff0c\u8bf7\u6c42\u5934\uff0c\u4ee5\u53ca\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u7b49\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"},"request.js"],"\u3002"],["p","\u4f8b\u5982\u5728 services \u4e2d\u7684\u4e00\u4e2a\u8bf7\u6c42\u7528\u6237\u4fe1\u606f\u7684\u4f8b\u5b50\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> services<span class="token operator">/</span>user<span class="token punctuation">.</span>js\nimport request from <span class="token string">\'../utils/request\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport async function <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">\'/api/users\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\nexport async function <span class="token function">queryCurrent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  return <span class="token function">request</span><span class="token punctuation">(</span><span class="token string">\'/api/currentUser\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">/</span><span class="token operator">/</span> models<span class="token operator">/</span>user<span class="token punctuation">.</span>js\nimport { queryCurrent } from <span class="token string">\'../services/user\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\neffects<span class="token punctuation">:</span> {\n  <span class="token operator">*</span><span class="token function">fetch</span><span class="token punctuation">(</span>{ payload }<span class="token punctuation">,</span> { call<span class="token punctuation">,</span> put }<span class="token punctuation">)</span> {\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> yield <span class="token function">call</span><span class="token punctuation">(</span>queryUsers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  }<span class="token punctuation">,</span>\n}'},["code","// services/user.js\nimport request from '../utils/request';\n\nexport async function query() {\n  return request('/api/users');\n}\n\nexport async function queryCurrent() {\n  return request('/api/currentUser');\n}\n\n// models/user.js\nimport { queryCurrent } from '../services/user';\n...\neffects: {\n  *fetch({ payload }, { call, put }) {\n    ...\n    const response = yield call(queryUsers);\n    ...\n  },\n}"]],["h3","Effect \u5904\u7406\u5f02\u6b65\u8bf7\u6c42"],["p","\u5728\u5904\u7406\u590d\u6742\u7684\u5f02\u6b65\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u5f88\u5bb9\u6613\u8ba9\u903b\u8f91\u6df7\u4e71\uff0c\u9677\u5165\u5d4c\u5957\u9677\u9631\uff0c\u6240\u4ee5 Ant Design Pro \u7684\u5e95\u5c42\u57fa\u7840\u6846\u67b6 ",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," \u4f7f\u7528 ",["code","effect"]," \u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u540c\u6b65\u5316\u5f02\u6b65\u8bf7\u6c42\uff1a"],["pre",{lang:"js",highlighted:'effects<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token operator">*</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> payload <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'changeLoading\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// \u5f02\u6b65\u8bf7\u6c42 1</span>\n    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>queryFakeList<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'save\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> response<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// \u5f02\u6b65\u8bf7\u6c42 2</span>\n    <span class="token keyword">const</span> response2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>queryFakeList2<span class="token punctuation">,</span> payload<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'save2\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> response2<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'changeLoading\'</span><span class="token punctuation">,</span>\n      payload<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code","effects: {\n  *fetch({ payload }, { call, put }) {\n    yield put({\n      type: 'changeLoading',\n      payload: true,\n    });\n    // \u5f02\u6b65\u8bf7\u6c42 1\n    const response = yield call(queryFakeList, payload);\n    yield put({\n      type: 'save',\n      payload: response,\n    });\n    // \u5f02\u6b65\u8bf7\u6c42 2\n    const response2 = yield call(queryFakeList2, payload);\n    yield put({\n      type: 'save2',\n      payload: response2,\n    });\n    yield put({\n      type: 'changeLoading',\n      payload: false,\n    });\n  },\n},"]],["p","\u901a\u8fc7 ",["a",{title:null,href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*"},"generator"]," \u548c ",["a",{title:null,href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield"},"yield"]," \u4f7f\u5f97\u5f02\u6b65\u8c03\u7528\u7684\u903b\u8f91\u5904\u7406\u8ddf\u540c\u6b65\u4e00\u6837\uff0c\u66f4\u591a\u53ef\u53c2\u770b ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md#async-logic"},"dva async logic"],"\u3002"],["h2","\u4ece mock \u76f4\u63a5\u5207\u6362\u5230\u670d\u52a1\u7aef\u8bf7\u6c42"],["p","\u901a\u5e38\u6765\u8bb2\u53ea\u8981 mock \u7684\u63a5\u53e3\u548c\u771f\u5b9e\u7684\u670d\u52a1\u7aef\u63a5\u53e3\u4fdd\u6301\u4e00\u81f4\uff0c\u90a3\u4e48\u53ea\u9700\u8981\u91cd\u5b9a\u5411 mock \u5230\u5bf9\u5e94\u7684\u670d\u52a1\u7aef\u63a5\u53e3\u5373\u53ef\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .roadhogrc.mock.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/*\'</span><span class="token punctuation">:</span> <span class="token string">\'https://your.server.com/api/\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// .roadhogrc.mock.js\nexport default {\n  'GET /api/*': 'https://your.server.com/api/',\n};"]],["h3","\u5173\u95ed mock"],["p","\u5173\u95ed mock \u7684\u65b9\u6cd5\u6211\u4eec\u63a8\u8350\u91c7\u7528\u73af\u5883\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u5728 ",["code","package.json"]," \u4e2d\u8bbe\u7f6e\uff1a"],["pre",{lang:"js",highlighted:'<span class="token string">"script"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"roadhog server"</span><span class="token punctuation">,</span>\n  <span class="token string">"start:no-proxy"</span><span class="token punctuation">:</span> <span class="token string">"NO_PROXY=true roadhog server"</span>\n<span class="token punctuation">}</span>'},["code",'"script" : {\n  "start": "roadhog server",\n  "start:no-proxy": "NO_PROXY=true roadhog server"\n}']],["p","\u7136\u540e\u5728 ",["code",".roadhogrc.mock.js"]," \u4e2d\u505a\u4e2a\u5224\u65ad\u5373\u53ef\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> noProxy <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NO_PROXY <span class="token operator">===</span> <span class="token string">\'true\'</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> noProxy <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token function">delay</span><span class="token punctuation">(</span>proxy<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const noProxy = process.env.NO_PROXY === 'true';\n...\nexport default noProxy ? {} : delay(proxy, 1000);"]]],meta:{order:6,title:{"en-US":"Work with Server","zh-CN":"\u548c\u670d\u52a1\u7aef\u8fdb\u884c\u4ea4\u4e92"},type:"\u5165\u95e8",filename:"docs/server.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u524d\u7aef\u8bf7\u6c42\u6d41\u7a0b",title:"\u524d\u7aef\u8bf7\u6c42\u6d41\u7a0b"},"\u524d\u7aef\u8bf7\u6c42\u6d41\u7a0b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4ece-mock-\u76f4\u63a5\u5207\u6362\u5230\u670d\u52a1\u7aef\u8bf7\u6c42",title:"\u4ece mock \u76f4\u63a5\u5207\u6362\u5230\u670d\u52a1\u7aef\u8bf7\u6c42"},"\u4ece mock \u76f4\u63a5\u5207\u6362\u5230\u670d\u52a1\u7aef\u8bf7\u6c42"]]]}}});