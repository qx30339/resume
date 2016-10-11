webpackJsonp([0],{117:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}var a=e(324),o=i(a),r=e(316),s=i(r);new o["default"]({el:"app",render:function(n){return n(s["default"])}})},119:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(318),o=i(a),r=e(317),s=i(r),l=e(309),c=i(l),u=e(310),p=i(u);t["default"]={data:function(){return{appText:c["default"],codesText:p["default"],loadApp:!1,loadCodes:!1,counter:0,textClasses:[],preLoad:["css-0","css-1","css-2"]}},methods:{addCSS:function(){this.textClasses.push(this.preLoad[this.counter++]),2===this.counter&&e(315)},addApp:function(){this.loadApp=!0},addCodes:function(){this.loadCodes=!0}},components:{Resume:o["default"],Codes:s["default"]}}},120:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(305),o=i(a),r=e(307),s=i(r),l=e(306),c=i(l),u=e(85),p=i(u),d=e(86),h=i(d),f={stylus:s["default"],javascript:c["default"]};Object.keys(f).forEach(function(n){return o["default"].registerLanguage(n,f[n])}),t["default"]={data:function(){return{blockCounter:0,charCounter:0,codeHtml:"",codeProgress:""}},props:{codesText:{type:String,required:!0},callback:{type:Function,"default":function(){}}},computed:{codes:function(){return this.codesText.split(/ *\/\/ await\n/g)},curBlock:function(){return this.codes[this.blockCounter]}},methods:{printCodes:function(){(0,p["default"])({promiseNumber:this.codes.length,step:this.printBlock,interval:300},function(){})},printBlock:function(n){var t=this;if((0,h["default"])(this),void 0!==this.curBlock)return function(){(0,p["default"])({promiseNumber:t.curBlock.length,step:t.printChar,interval:8},function(){t.codeProgress="",t.codeHtml+=o["default"].highlightAuto(t.curBlock).value,t.blockCounter++,t.charCounter=0,n()})}},printChar:function(n){var t=this,e=this.curBlock[this.charCounter];return(0,h["default"])(this),function(){t.codeProgress+=e,t.charCounter++,n()}}},mounted:function(){this.printCodes()}}},121:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(85),o=i(a),r=e(86),s=i(r),l=e(311),c=i(l),u=e(312),p=i(u);t["default"]={data:function(){return{pug:c["default"].split(/ *\/\/ await\n{2}/),xml:p["default"].replace(/(\n| {2})/g,"").split("<!-- await-->"),blockCounter:0,charCounter:0,codeHtml:"",codeProgress:""}},computed:{curBlock:function(){return this.pug[this.blockCounter]}},methods:{printResume:function(){(0,o["default"])({promiseNumber:this.pug.length,step:this.printBlock,interval:250},function(){})},printBlock:function(n){var t=this;if((0,s["default"])(this),void 0!==this.curBlock)return function(){(0,o["default"])({promiseNumber:t.curBlock.length,step:t.printChar,interval:3},function(){t.codeProgress="",t.codeHtml+=t.xml[t.blockCounter++],t.emitAdd(["app","css","codes"]),t.charCounter=0,n()})}},printChar:function(n){var t=this,e=this.curBlock[this.charCounter];return(0,s["default"])(this),function(){t.codeProgress+=e,t.charCounter++,n()}},emitAdd:function(n){var t=this,e=this.curBlock;e&&n.forEach(function(n){e.includes("++"+n)&&(t.$emit("add-"+n),t.blockCounter++)})}},mounted:function(){this.printResume()}}},304:function(n,t,e){t=n.exports=e(115)(),t.push([n.i,"\n* {\n  box-sizing: border-box;\n  -webkit-transition: all .4s ease-out;\n  transition: all .4s ease-out;\n}\nhtml, body, #app {\n  height: 100%;\n}\nbody, pre {\n  margin: 0;\n}\n#app {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1.5%;\n}\n#app section {\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    margin-top: 1.2%;\n}\n#app section pre {\n      border-radius: 6px;\n      overflow-y: auto;\n      white-space: pre-wrap;\n      max-height: 97%;\n      word-wrap: break-word;\n}\n#app section pre a {\n        color: #d19a66;\n        text-decoration: none;\n}\n#app #app-vue {\n    margin-left: 1.2%;\n    margin-right: 1.2%;\n}\n#app #resume {\n    -ms-flex-preferred-size: 40%;\n        flex-basis: 40%;\n}\n#app #resume pre h2:first-child {\n      margin-top: 5px;\n}\n#app #resume pre ul:last-child {\n      margin-bottom: 0;\n}\n.css-0 section {\n  margin-top: 1.5% !important;\n}\n.css-0 section pre {\n    padding: 12px;\n    color: #abb2bf;\n    border: 5px solid #000;\n}\n.css-1 pre {\n  background-color: #282c34;\n}\n",""])},309:function(n,t){n.exports='//- template lang="pug"\n#app(:class="textClasses")\n  section#resume\n    resume(\n      @add-css="addCSS",\n      @add-app="addApp",\n      @add-codes="addCodes"\n    )\n  // await\n\n  section#app-vue\n    codes(\n      v-if="loadApp",\n      :codes-text="appText"\n    )\n  // await\n\n  section#codes-vue\n    codes(\n      v-if="loadCodes",\n      :codes-text="codesText"\n    )\n  // await\n\n// script\nimport Resume from \'components/Resume\'\nimport Codes from \'components/Codes\'\n// await\n\nimport appText from \'assets/text/app.txt\'\nimport codesText from \'assets/text/codes.txt\'\n// await\n\nexport default {\n  data () {\n    return {\n      appText,\n      codesText,\n      loadApp: false,\n      loadCodes: false,\n      counter: 0,\n      textClasses: [],\n      preLoad: [\n        \'css-0\',\n        \'css-1\',\n        \'css-2\'\n      ]\n    }\n  },\n// await\n\n  methods: {\n    addCSS () {\n      this.textClasses\n        .push(this.preLoad[this.counter++])\n\n      if (this.counter === 2) {\n        require(\'highlight.js/styles/atom-one-dark.css\')\n      }\n    },\n// await\n\n    addApp () {\n      this.loadApp = true\n    },\n\n    addCodes () {\n      this.loadCodes = true\n    }\n  },\n// await\n\n  components: {\n    Resume,\n    Codes\n  }\n}\n// await\n\n// style lang="sass"\n$code: #abb2bf\n$code-bg: #282c34\n$code-border: #000\n$link: #d19a66\n// await\n\n*\n  box-sizing: border-box\n  transition: all .4s ease-out\n\nhtml, body, #app\n  height: 100%\n\nbody, pre\n  margin: 0\n// await\n\n#app\n  display: flex\n  padding: 0 1.5%\n  // await\n\n  section\n    flex-basis: 30%\n    margin-top: 1.2%\n\n    pre\n      border-radius: 6px\n      overflow-y: auto\n      white-space: pre-wrap\n      max-height: 97%\n      word-wrap: break-word\n\n      a\n        color: $link\n        text-decoration: none\n  // await\n\n  #app-vue\n    margin:\n      left: 1.2%\n      right: 1.2%\n\n  #resume\n    flex-basis: 40%\n\n    pre\n      h2:first-child\n        margin-top: 5px\n\n      ul:last-child\n        margin-bottom: 0\n// await\n\n.css-0\n  section\n    margin-top: 1.5% !important\n\n    pre\n      padding: 12px\n      color: $code\n      border: 5px solid $code-border\n// await\n\n.css-1\n  pre\n    background-color: $code-bg\n// await\n\n.css-2\n  pre\n'},310:function(n,t){n.exports="//- template lang=\"pug\"\npre\n  code(v-html=\"codeHtml\")\n  // await\n\n  code {{ codeProgress }}\n  // await\n\n// script\nimport hljs from 'highlight.js/lib/highlight'\n\nimport stylus from 'highlight.js/lib/languages/stylus'\nimport javascript from 'highlight.js/lib/languages/javascript'\n// await\n\nimport promisify from 'assets/js/promisify'\nimport scrollToBottom from 'assets/js/scrollToBottom'\n// await\n\nconst langs = {\n  stylus,\n  javascript\n}\n\nObject\n  .keys(langs)\n  .forEach(lang =>\n    hljs.registerLanguage(lang, langs[lang]))\n// await\n\nexport default {\n  data () {\n    return {\n      blockCounter: 0,\n      charCounter: 0,\n      codeHtml: '',\n      codeProgress: ''\n    }\n  },\n// await\n\n  props: {\n    codesText: {\n      type: String,\n      required: true\n    },\n// await\n\n    callback: {\n      type: Function,\n      default () {}\n    }\n  },\n// await\n\n  computed: {\n    codes () {\n      return this.codesText\n        .split(/ *\\/\\/ await\\n/g)\n    },\n\n    curBlock () {\n      return this.codes[this.blockCounter]\n    }\n  },\n// await\n\n  methods: {\n    printCodes () {\n      promisify({\n        promiseNumber: this.codes.length,\n        step: this.printBlock,\n        interval: 300\n      }, () => {\n\n      })\n    },\n// await\n\n    printBlock (resolve) {\n      scrollToBottom(this)\n\n      if (this.curBlock === undefined) {\n        return\n      }\n\n      return () => {\n        promisify({\n          promiseNumber: this.curBlock.length,\n          step: this.printChar,\n          interval: 8\n        }, () => {\n          this.codeProgress = ''\n          this.codeHtml += hljs.highlightAuto(this.curBlock).value\n\n          this.blockCounter++\n          this.charCounter = 0\n\n          resolve()\n        })\n      }\n    },\n// await\n\n    printChar (resolve) {\n      const curChar = this.curBlock[this.charCounter]\n\n      scrollToBottom(this)\n\n      return () => {\n        this.codeProgress += curChar\n        this.charCounter++\n\n        resolve()\n      }\n    }\n  },\n// await\n\n  mounted () {\n    this.printCodes()\n  }\n}\n"},311:function(n,t){n.exports='h2 Shen Ting\n// await\n\nh3 Web Developer\n// await\n\n//- ++app\n// await\n\n// await\n\n// await\n\n// await\n\n// await\n\n// await\n\nh3 Skills\n// await\n\nul\n  li HTML\n    ul\n      li Pug\n  // await\n\n  //- ++css\n  // await\n\n  li CSS\n    ul\n      li Flexbox\n      li Sass\n      li Bootstrap\n      li Amaze UI\n      li WeUI\n  // await\n\n  //- ++css\n  // await\n\n  li Javascript\n    ul\n      li jQuery\n      li ECMAScript 6\n      li Vue\n      li Node\n  // await\n\n  //- ++codes\n  // await\n\n  li Utilities\n    ul\n      li Gulp\n      li webpack\n      li Babel\n      li Mocha\n      li Chai\n  // await\n\n  li Tools\n    ul\n      li Git\n      li npm\n      li Photoshop\n  // await\n\nh3 Experience\n// await\n\nul\n  li\n    a(\n      href="http://www.sfdai.com/",\n      target="_blank"\n    ) 杭州商富信息科技有限公司\n    |  2016.3 - 2016.8\n// await\n\nh3 Projects\n// await\n\nul\n  li\n    a(\n      href="https://github.com/pciapcib/node-zhihu-daily",\n      target="_blank"\n    ) node-zhihu-daily\n    |  2016.9\n    p A Zhihu Daily CLI reader by Node.js\n  // await\n\n  //- ++css\n  // await\n\n  li\n    a(\n      href="https://github.com/pciapcib/node-dictionary",\n      target="_blank"\n    ) node-dictionary\n    |  2016.9\n    p A tiny CLI tool for querying and translating by Node.js\n  // await\n\n  li\n    a(\n      href="http://www.beejc.com",\n      target="_blank"\n    ) 蜜蜂聚财\n    |  2016.5 - 2016.8\n    p A P2P single page application for car loans by Vue.js\n  // await\n\n  li\n    a(\n      href="https://github.com/pciapcib/cClock",\n      target="_blank"\n    ) cClock\n    |  2016.3\n    p A flat and dynamic clock by Canvas\n  // await\n\n  li\n    a(\n      href="https://github.com/pciapcib/jZoom",\n      target="_blank"\n    ) jZoom\n    |  2016.3\n    p A tiny and easy-using jQuery plugin for zooming images\n  // await\n\nh3 Education\n// await\n\nul\n  li Faculty of Science, Ningbo University\n  li Bachelor\'s degree, Physics(Education)\n  li 2011.9 - 2015.6\n// await\n\nh3 Contact\n// await\n\nul\n  li\n    | E-mail: \n    a(href="mailto:pciapcib@163.com") pciapcib@163.com\n  // await\n\n  li\n    | Github: \n    a(\n      href="https://github.com/pciapcib",\n      target="_blank"\n    ) github.com/pciapcib\n  // await\n\n  li\n    | Blog: \n    a(\n      href="http://shenting.me",\n      target="_blank"\n    ) shenting.me\n'},312:function(n,t){n.exports='<h2>Shen Ting</h2>\n<!-- await-->\n<h3>Web Developer</h3>\n<!-- await-->\n<!-- await-->\n<!-- await-->\n<!-- await-->\n<!-- await-->\n<!-- await-->\n<!-- await-->\n<h3>Skills</h3>\n<!-- await-->\n<ul>\n  <li>HTML\n    <ul>\n      <li>Pug</li>\n    </ul>\n  </li>\n  <!-- await-->\n  <!-- await-->\n  <li>CSS\n    <ul>\n      <li>Flexbox</li>\n      <li>Sass</li>\n      <li>Bootstrap</li>\n      <li>Amaze UI</li>\n      <li>WeUI</li>\n    </ul>\n  </li>\n  <!-- await-->\n  <!-- await-->\n  <li>Javascript\n    <ul>\n      <li>jQuery</li>\n      <li>ECMAScript 6</li>\n      <li>Vue</li>\n      <li>Node</li>\n    </ul>\n  </li>\n  <!-- await-->\n  <!-- await-->\n  <li>Utilities\n    <ul>\n      <li>Gulp</li>\n      <li>webpack</li>\n      <li>Babel</li>\n      <li>Mocha</li>\n      <li>Chai</li>\n    </ul>\n  </li>\n  <!-- await-->\n  <li>Tools\n    <ul>\n      <li>Git</li>\n      <li>npm</li>\n      <li>Photoshop</li>\n    </ul>\n  </li>\n  <!-- await-->\n</ul>\n<h3>Experience</h3>\n<!-- await-->\n<ul>\n  <li><a href="http://www.sfdai.com/" target="_blank">杭州商富信息科技有限公司</a> 2016.3 - 2016.8</li>\n</ul>\n<!-- await-->\n<h3>Projects</h3>\n<!-- await-->\n<ul>\n  <li><a href="https://github.com/pciapcib/node-zhihu-daily" target="_blank">node-zhihu-daily</a> 2016.9\n    <p>A Zhihu Daily CLI reader by Node.js</p>\n  </li>\n  <!-- await-->\n  <!-- await-->\n  <li><a href="https://github.com/pciapcib/node-dictionary" target="_blank">node-dictionary</a> 2016.9\n    <p>A tiny CLI tool for querying and translating by Node.js</p>\n  </li>\n  <!-- await-->\n  <li><a href="http://www.beejc.com" target="_blank">蜜蜂聚财</a> 2016.5 - 2016.8\n    <p>A P2P single page application for car loans by Vue.js</p>\n  </li>\n  <!-- await-->\n  <li><a href="https://github.com/pciapcib/cClock" target="_blank">cClock</a> 2016.3\n    <p>A flat and dynamic clock by Canvas</p>\n  </li>\n  <!-- await-->\n  <li><a href="https://github.com/pciapcib/jZoom" target="_blank">jZoom</a> 2016.3\n    <p>A tiny and easy-using jQuery plugin for zooming images</p>\n  </li>\n  <!-- await-->\n</ul>\n<h3>Education</h3>\n<!-- await-->\n<ul>\n  <li>Faculty of Science, Ningbo University</li>\n  <li>Bachelor\'s degree, Physics(Education)</li>\n  <li>2011.9 - 2015.6</li>\n</ul>\n<!-- await-->\n<h3>Contact</h3>\n<!-- await-->\n<ul>\n  <li>E-mail: <a href="mailto:pciapcib@163.com">pciapcib@163.com</a></li>\n  <!-- await-->\n  <li>Github: <a href="https://github.com/pciapcib" target="_blank">github.com/pciapcib</a></li>\n  <!-- await-->\n  <li>Blog: <a href="http://shenting.me" target="_blank">shenting.me</a></li>\n</ul>'},316:function(n,t,e){var i,a;e(323),i=e(119);var o=e(319);a=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(a=i=i["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,n.exports=i},317:function(n,t,e){var i,a;i=e(120);var o=e(321);a=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(a=i=i["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,n.exports=i},318:function(n,t,e){var i,a;i=e(121);var o=e(320);a=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(a=i=i["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,n.exports=i},319:function(module,exports){module.exports={render:function(){with(this)return _h("div",{"class":textClasses,attrs:{id:"app"}},[_h("section",{attrs:{id:"resume"}},[_h("resume",{on:{"add-css":addCSS,"add-app":addApp,"add-codes":addCodes}})]),_h("section",{attrs:{id:"app-vue"}},[loadApp?_h("codes",{attrs:{"codes-text":appText}}):_e()]),_h("section",{attrs:{id:"codes-vue"}},[loadCodes?_h("codes",{attrs:{"codes-text":codesText}}):_e()])])},staticRenderFns:[]}},320:function(module,exports){module.exports={render:function(){with(this)return _h("pre",[_h("code",{domProps:{innerHTML:_s(codeHtml)}}),_h("code",[_s(codeProgress)])])},staticRenderFns:[]}},321:function(module,exports){module.exports={render:function(){with(this)return _h("pre",[_h("code",{domProps:{innerHTML:_s(codeHtml)}}),_h("code",[_s(codeProgress)])])},staticRenderFns:[]}},323:function(n,t,e){var i=e(304);"string"==typeof i&&(i=[[n.i,i,""]]);e(322)(i,{});i.locals&&(n.exports=i.locals)},325:function(n,t,e){e(118),n.exports=e(117)},85:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(n,t){var e=n.promiseNumber,i=n.step,a=n.interval;return new Array(e).fill(function(){return new Promise(function(n){return setTimeout(i(n),a)})}).reduce(function(n,t){return n.then(t)},Promise.resolve()).then(t)}},86:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(n){var t=n.$el;t.scrollTop=t.scrollHeight}}},[325]);