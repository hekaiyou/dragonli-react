(this["webpackJsonpdragonli-react"]=this["webpackJsonpdragonli-react"]||[]).push([[5],{162:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n(141),i=n(142),l=n(145),o=n(144),c=n(0),s=n.n(c),u=n(166),h=n(163),d=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={text:"",url:""},a}return Object(i.a)(n,[{key:"handleTextFieldChange",value:function(t){this.setState({text:t.target.value})}},{key:"handleButtonClick",value:function(){var t=this.state.text;""!==t.trim()&&this.setState({url:"http://192.168.5.170:6002/dragonli/1.0/tts/?text="+t})}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(a.jsx)(u.a,{id:"tts-text",onChange:function(e){return t.handleTextFieldChange(e)},label:"TTS Text",multiline:!0,rows:3,fullWidth:!0}),Object(a.jsx)("p",{}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){return t.handleButtonClick()},fullWidth:!0,children:"Text To Speech"}),Object(a.jsx)("p",{}),Object(a.jsx)("audio",{controls:!0,autoPlay:!0,src:this.state.url,type:"audio/wav",children:"Your browser does not support the audio element."})]})})}}]),n}(s.a.Component);e.default=d}}]);
//# sourceMappingURL=5.3697c8bd.chunk.js.map