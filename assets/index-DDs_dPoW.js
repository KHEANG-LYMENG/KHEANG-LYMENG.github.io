import{r as m,a as xe,L as E,B as be,R as ve,b as R,c as ye}from"./react-vendor-C_xdAh7T.js";import{H as j}from"./hls.js-D2w2W2WZ.js";import{P as B}from"./plyr-Bx69nal5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var le={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=m,we=Symbol.for("react.element"),Ne=Symbol.for("react.fragment"),Ce=Object.prototype.hasOwnProperty,je=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_e={key:!0,ref:!0,__self:!0,__source:!0};function ce(e,n,t){var s,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(s in n)Ce.call(n,s)&&!_e.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:we,type:e,key:i,ref:a,props:o,_owner:je.current}}D.Fragment=Ne;D.jsx=ce;D.jsxs=ce;le.exports=D;var r=le.exports,P={},H=xe;P.createRoot=H.createRoot,P.hydrateRoot=H.hydrateRoot;function Re(){return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-green-500",children:r.jsx("div",{className:"container mx-auto px-4 py-16",children:r.jsxs("div",{className:"max-w-4xl mx-auto text-center text-white",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("img",{src:"/profile.jpg",alt:"Profile Avatar",className:"w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/30 object-cover"}),r.jsx("h1",{className:"text-4xl sm:text-6xl font-bold mb-6",children:"KHEANG LYMENG"})]}),r.jsxs("div",{className:"grid gap-8 md:grid-cols-2 mb-12",children:[r.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Interested in"}),r.jsxs("ul",{className:"space-y-2",children:[r.jsx("li",{children:"Frontend Development"}),r.jsx("li",{children:"Backend Development"}),r.jsx("li",{children:"Artificial Intelligence"}),r.jsx("li",{})]})]}),r.jsxs("div",{className:"bg-white/10 backdrop-blur-lg rounded-xl p-6",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Projects"}),r.jsxs("div",{className:"space-y-4",children:[r.jsx(E,{to:"/schoolproject",className:"block w-full py-3 px-6 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:"School Projects →"}),r.jsx(E,{to:"/sideproject",className:"block w-full py-3 px-6 bg-white/20 hover:bg-white/30 rounded-lg transition-colors",children:"Side Projects →"})]})]})]})]})})})}function Se(){return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-green-500",children:r.jsx("div",{className:"container mx-auto px-4 py-16",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white text-center mb-12",children:"School Projects"}),r.jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[r.jsx(E,{to:"/schoolproject/math",className:"group block bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors",children:r.jsxs("div",{className:"text-white",children:[r.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Basic Math Practice"}),r.jsx("p",{className:"opacity-90 mb-4",children:"Basic math exercises for students with instant feedback and progress tracking."}),r.jsx("span",{className:"inline-block text-sm font-semibold group-hover:translate-x-1 transition-transform",children:"Try it out →"})]})}),r.jsx(E,{to:"/schoolproject/folktale",className:"group block bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors",children:r.jsxs("div",{className:"text-white",children:[r.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Folktale Generator"}),r.jsx("p",{className:"opacity-90 mb-4",children:"Generate and listen to children's folk tales with interactive reading features."}),r.jsx("span",{className:"inline-block text-sm font-semibold group-hover:translate-x-1 transition-transform",children:"Try it out →"})]})})]}),r.jsx(E,{to:"/",className:"inline-block mt-12 text-white hover:text-white/80 transition-colors",children:"← Back to Portfolio"})]})})})}const F=e=>{switch(e){case"1-digit":return Math.floor(Math.random()*9)+1;case"2-digit":return Math.floor(Math.random()*90)+10;case"3-digit":return Math.floor(Math.random()*900)+100}},Oe=(e,n)=>{let t,s;switch(e){case"+":t=F(n),s=F(n);break;case"-":t=F(n),s=n==="1-digit"?Math.floor(Math.random()*t)+1:Math.floor(Math.random()*(t-1))+1;break;case"×":t=n==="1-digit"?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*12)+1,s=n==="1-digit"?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*12)+1;break;case"÷":s=n==="1-digit"?Math.floor(Math.random()*9)+1:Math.floor(Math.random()*12)+1,t=s*(Math.floor(Math.random()*10)+1);break;default:t=0,s=0}return[t,s]},Ae=(e,n,t)=>{switch(t){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return e/n;default:return 0}},Ie=e=>e<=4?"Bad":e<=6?"Medium":e<=8?"Good":e===9?"Very Good":"Excellence",Te=({selectedOperation:e,onOperationChange:n})=>{const t=["+","-","×","÷"];return r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.map(s=>r.jsx("button",{onClick:()=>n(s),className:`px-4 py-2 text-xl rounded min-w-[48px] ${e===s?"bg-blue-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:s},s))})},Me=({selectedDifficulty:e,onDifficultyChange:n})=>{const t=["1-digit","2-digit","3-digit"];return r.jsxs("div",{className:"mb-4",children:[r.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Select Difficulty:"}),r.jsx("div",{className:"flex flex-wrap gap-2",children:t.map(s=>r.jsx("button",{onClick:()=>n(s),className:`px-3 py-2 text-sm sm:px-4 sm:text-base rounded ${e===s?"bg-purple-500 text-white":"bg-gray-200 hover:bg-gray-300"}`,children:s},s))})]})},ke=({exercises:e,onAnswerChange:n})=>r.jsx("div",{className:"space-y-4 mb-6",children:e.map(t=>r.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-3 bg-gray-50 rounded-lg",children:[r.jsxs("span",{className:"font-bold w-8",children:[t.id,"."]}),r.jsxs("div",{className:"text-lg sm:text-xl whitespace-nowrap",children:[t.num1," ",t.operation," ",t.num2," ="]}),r.jsx("input",{type:"number",value:t.userAnswer,onChange:s=>n(t.id,s.target.value),disabled:t.isAnswered,className:"border-2 border-gray-300 rounded px-3 py-1 w-20 sm:w-24 text-center",placeholder:"?"}),t.isAnswered&&r.jsx("div",{className:`text-sm sm:text-base ${t.userAnswer===t.correctAnswer.toString()?"text-green-600":"text-red-600"}`,children:t.userAnswer===t.correctAnswer.toString()?"✓ Correct!":`✗ Correct answer: ${t.correctAnswer}`})]},t.id))}),Le=({correctCount:e,totalExercises:n})=>{const t=Ie(e);return r.jsxs("div",{className:"text-center p-4 bg-gray-100 rounded-lg",children:[r.jsx("h2",{className:"text-lg sm:text-xl font-bold mb-2",children:"Results"}),r.jsxs("p",{className:"mb-2 text-sm sm:text-base",children:["You got ",e," out of ",n," correct!"]}),r.jsxs("p",{className:`text-xl sm:text-2xl font-bold ${t==="Excellence"?"text-purple-600":t==="Very Good"?"text-green-600":t==="Good"?"text-blue-600":t==="Medium"?"text-yellow-600":"text-red-600"}`,children:["Rating: ",t]})]})},K=({onClick:e,children:n,variant:t="primary"})=>{const s="px-4 sm:px-6 py-2 rounded font-medium transition-colors text-sm sm:text-base whitespace-nowrap",o={primary:"bg-green-500 text-white hover:bg-green-600",secondary:"bg-blue-500 text-white hover:bg-blue-600"};return r.jsx("button",{onClick:e,className:`${s} ${o[t]}`,children:n})};function De(){const[e,n]=m.useState("+"),[t,s]=m.useState("1-digit"),[o,i]=m.useState([]),[a,l]=m.useState(!1),u=()=>{const d=Array.from({length:10},(c,h)=>{const[b,O]=Oe(e,t);return{id:h+1,num1:b,num2:O,operation:e,userAnswer:"",correctAnswer:Ae(b,O,e),isAnswered:!1}});i(d),l(!1)};m.useEffect(()=>{u()},[e,t]);const f=(d,c)=>{i(o.map(h=>h.id===d?{...h,userAnswer:c}:h))},x=()=>{i(o.map(d=>({...d,isAnswered:!0}))),l(!0)},p=o.filter(d=>d.userAnswer===d.correctAnswer.toString()).length;return r.jsx("div",{className:"min-h-screen bg-gray-100 py-4 sm:py-8 px-4",children:r.jsxs("div",{className:"max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg",children:[r.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-center mb-6",children:"Basic Math Practice"}),r.jsxs("div",{className:"mb-6",children:[r.jsx(Te,{selectedOperation:e,onOperationChange:d=>n(d)}),r.jsx(Me,{selectedDifficulty:t,onDifficultyChange:d=>s(d)})]}),r.jsx(ke,{exercises:o,onAnswerChange:f}),r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6",children:[r.jsx(K,{onClick:x,children:"Check Answers"}),r.jsx(K,{variant:"secondary",onClick:u,children:"New Exercises"})]}),a&&r.jsx(Le,{correctCount:p,totalExercises:o.length}),r.jsx("div",{children:r.jsx(E,{to:"/schoolproject",className:"inline-block mt-12 text-black hover:text-blue-500/80 transition-colors",children:"← Back to School Projects"})})]})})}function Ge(){return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-teal-500 to-green-500",children:r.jsx("div",{className:"container mx-auto px-4 py-16",children:r.jsxs("div",{className:"max-w-4xl mx-auto",children:[r.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white text-center mb-12",children:"Side Projects"}),r.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:r.jsx(E,{to:"/sideproject/khmertv",className:"group block bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors",children:r.jsxs("div",{className:"text-white",children:[r.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Khmer TV"}),r.jsx("p",{className:"opacity-90 mb-4",children:"Watch Cambodian TV channels online streaming."}),r.jsx("span",{className:"inline-block text-sm font-semibold group-hover:translate-x-1 transition-transform",children:"Watch Now →"})]})})}),r.jsx(E,{to:"/",className:"inline-block mt-12 text-white hover:text-white/80 transition-colors",children:"← Back to Portfolio"})]})})})}const Fe=({src:e})=>{const n=m.useRef(null),t=m.useRef(),s=m.useRef(),[o,i]=m.useState(""),[a,l]=m.useState(0),u=3;return m.useEffect(()=>{let f=!0;const x=async()=>{if(!n.current)return;s.current&&s.current.destroy(),t.current&&t.current.destroy();const p=n.current;p.removeAttribute("src"),p.load();const d={controls:["play-large","play","progress","current-time","mute","volume","fullscreen"]};try{if(j.isSupported()){const c=new j({xhrSetup:h=>{h.withCredentials=!1},enableWorker:!0,lowLatencyMode:!0,backBufferLength:90,maxBufferSize:3e7,maxBufferLength:30,maxMaxBufferLength:60,startLevel:-1,abrEwmaDefaultEstimate:5e5,manifestLoadingTimeOut:2e4,manifestLoadingMaxRetry:3,manifestLoadingRetryDelay:1e3,levelLoadingTimeOut:2e4,levelLoadingMaxRetry:3,levelLoadingRetryDelay:1e3});return s.current=c,new Promise((h,b)=>{c.on(j.Events.MEDIA_ATTACHED,()=>{console.log("HLS Media Attached"),c.loadSource(e)}),c.on(j.Events.MANIFEST_PARSED,()=>{console.log("HLS Manifest Parsed"),f&&(t.current=new B(p,d),h(null))}),c.on(j.Events.ERROR,(O,g)=>{if(console.warn("HLS Error:",g),g.fatal)switch(g.type){case j.ErrorTypes.NETWORK_ERROR:a<u?(console.log(`Retrying stream (${a+1}/${u})`),l(C=>C+1),c.startLoad()):(i("Network error: Please check your connection"),b(new Error("Network error")));break;case j.ErrorTypes.MEDIA_ERROR:console.log("Attempting to recover media error"),c.recoverMediaError();break;default:i("Failed to load stream"),b(new Error("Fatal HLS error"));break}}),c.attachMedia(p)})}else if(p.canPlayType("application/vnd.apple.mpegurl"))return p.src=e,new Promise(c=>{p.addEventListener("loadedmetadata",()=>{f&&(t.current=new B(p,d),c(null))})})}catch(c){console.error("Video player error:",c),i("Failed to load video stream")}};return i(""),l(0),x(),()=>{f=!1,s.current&&s.current.destroy(),t.current&&t.current.destroy()}},[e]),r.jsx("div",{className:"w-full aspect-video bg-black relative",children:o?r.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75",children:r.jsx("p",{children:o})}):r.jsx("video",{ref:n,className:"w-full h-full",crossOrigin:"anonymous",playsInline:!0})})},Pe=({channels:e,onChannelSelect:n,selectedChannel:t})=>r.jsxs("div",{className:"bg-gray-800 p-4 rounded-lg",children:[r.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Channels"}),r.jsx("div",{className:"space-y-2 max-h-[60vh] overflow-y-auto",children:e.map((s,o)=>r.jsx("button",{onClick:()=>n(s),className:`w-full text-left p-3 rounded-lg transition-colors ${(t==null?void 0:t.url)===s.url?"bg-blue-600 text-white":"bg-gray-700 text-gray-200 hover:bg-gray-600"}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[s.logo&&r.jsx("img",{src:s.logo,alt:s.name,className:"w-8 h-8 object-contain"}),r.jsx("span",{className:"truncate",children:s.name})]})},o))})]}),Ue=async e=>{const n=`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`,t=await fetch(n);if(!t.ok)throw new Error(`Failed to fetch playlist: ${t.statusText}`);return t.text()};async function $e(e){try{const t=(await Ue(e)).split(`
`),s=[];let o={};for(let i=0;i<t.length;i++){const a=t[i].trim();if(a.startsWith("#EXTINF:")){const l=a.match(/tvg-name="([^"]*)"/)||a.match(/,(.*)$/),u=a.match(/tvg-logo="([^"]*)"/),f=a.match(/group-title="([^"]*)"/);o.name=l?l[1].trim():"Unknown Channel",o.logo=u?u[1]:void 0,o.group=f?f[1]:void 0}else a.match(/^https?:\/\//)&&(o.url=a,o.name&&o.url&&s.push(o),o={})}return s.filter(i=>i.url&&i.name&&(i.url.includes(".m3u8")||i.url.includes("/live/"))).sort((i,a)=>i.name.localeCompare(a.name))}catch(n){throw console.error("Error parsing M3U file:",n),new Error("Failed to load channel list. Please try again later.")}}const Be="https://iptv-org.github.io/iptv/countries/kh.m3u";function He(){const[e,n]=m.useState([]),[t,s]=m.useState(),[o,i]=m.useState(!0),[a,l]=m.useState("");m.useEffect(()=>{(async()=>{try{i(!0),l("");const x=await $e(Be);n(x),x.length>0&&s(x[0])}catch(x){l(x instanceof Error?x.message:"Failed to load channels")}finally{i(!1)}})()},[]);const u=f=>{s(f)};return o?r.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:r.jsx("div",{className:"text-white text-xl",children:"Loading channels..."})}):a?r.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:r.jsxs("div",{className:"text-white text-xl text-center",children:[r.jsx("p",{className:"text-red-500 mb-4",children:a}),r.jsx("button",{onClick:()=>window.location.reload(),className:"bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",children:"Try Again"})]})}):r.jsx("div",{className:"min-h-screen bg-gray-900 p-4",children:r.jsxs("div",{className:"container mx-auto",children:[r.jsxs("div",{className:"mb-6 flex items-center justify-between",children:[r.jsx("h1",{className:"text-3xl font-bold text-white",children:"Khmer TV"}),r.jsx(E,{to:"/sideproject",className:"text-blue-400 hover:text-blue-300 transition-colors",children:"← Back to Side Projects"})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[r.jsx("div",{className:"lg:col-span-3",children:t?r.jsx(Fe,{src:t.url},t.url):r.jsx("div",{className:"aspect-video bg-gray-800 flex items-center justify-center text-white",children:"Select a channel to start watching"})}),r.jsx("div",{children:r.jsx(Pe,{channels:e,onChannelSelect:u,selectedChannel:t})})]})]})})}var Y;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(Y||(Y={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(q||(q={}));var V;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(V||(V={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=["user","model","function","system"];var J;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(J||(J={}));var z;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(z||(z={}));var X;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(X||(X={}));var Q;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(Q||(Q={}));var A;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(A||(A={}));var Z;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Z||(Z={}));var ee;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(ee||(ee={}));var te;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(te||(te={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class S extends v{constructor(n,t){super(n),this.response=t}}class de extends v{constructor(n,t,s,o){super(n),this.status=t,this.statusText=s,this.errorDetails=o}}class N extends v{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="https://generativelanguage.googleapis.com",Ye="v1beta",qe="0.21.0",Ve="genai-js";var _;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(_||(_={}));class We{constructor(n,t,s,o,i){this.model=n,this.task=t,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,t;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Ye;let i=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Ke}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function Je(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${Ve}/${qe}`),n.join(" ")}async function ze(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Je(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let s=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new N(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new N(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new N(`Header name ${o} can only be set using the apiClient field`);t.append(o,i)}}return t}async function Xe(e,n,t,s,o,i){const a=new We(e,n,t,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},tt(i)),{method:"POST",headers:await ze(a),body:o})}}async function M(e,n,t,s,o,i={},a=fetch){const{url:l,fetchOptions:u}=await Xe(e,n,t,s,o,i);return Qe(l,u,a)}async function Qe(e,n,t=fetch){let s;try{s=await t(e,n)}catch(o){Ze(o,e)}return s.ok||await et(s,e),s}function Ze(e,n){let t=e;throw e instanceof de||e instanceof N||(t=new v(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function et(e,n){let t="",s;try{const o=await e.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new de(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,s)}function tt(e){const n={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const t=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>t.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{t.abort()}),n.signal=t.signal}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new S(`${w(e)}`,e);return nt(e)}else if(e.promptFeedback)throw new S(`Text not available. ${w(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new S(`${w(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),ne(e)[0]}else if(e.promptFeedback)throw new S(`Function call not available. ${w(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),L(e.candidates[0]))throw new S(`${w(e)}`,e);return ne(e)}else if(e.promptFeedback)throw new S(`Function call not available. ${w(e)}`,e)},e}function nt(e){var n,t,s,o;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function ne(e){var n,t,s,o;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const st=[A.RECITATION,A.SAFETY,A.LANGUAGE];function L(e){return!!e.finishReason&&st.includes(e.finishReason)}function w(e){var n,t,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];L(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function I(e){return this instanceof I?(this.v=e,this):new I(e)}function ot(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(e,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(d){s[d]&&(o[d]=function(c){return new Promise(function(h,b){i.push([d,c,h,b])>1||l(d,c)})})}function l(d,c){try{u(s[d](c))}catch(h){p(i[0][3],h)}}function u(d){d.value instanceof I?Promise.resolve(d.value.v).then(f,x):p(i[0][2],d)}function f(d){l("next",d)}function x(d){l("throw",d)}function p(d,c){d(c),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function rt(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=lt(n),[s,o]=t.tee();return{stream:at(s),response:it(o)}}async function it(e){const n=[],t=e.getReader();for(;;){const{done:s,value:o}=await t.read();if(s)return U(ct(n));n.push(o)}}function at(e){return ot(this,arguments,function*(){const t=e.getReader();for(;;){const{value:s,done:o}=yield I(t.read());if(o)break;yield yield I(U(s))}})}function lt(e){const n=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:l})=>{if(l){if(o.trim()){s.error(new v("Failed to parse stream"));return}s.close();return}o+=a;let u=o.match(se),f;for(;u;){try{f=JSON.parse(u[1])}catch{s.error(new v(`Error parsing JSON response: "${u[1]}"`));return}s.enqueue(f),o=o.substring(u[0].length),u=o.match(se)}return i()})}}})}function ct(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of e){if(s.candidates)for(const o of s.candidates){const i=o.index;if(t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:o.index}),t.candidates[i].citationMetadata=o.citationMetadata,t.candidates[i].groundingMetadata=o.groundingMetadata,t.candidates[i].finishReason=o.finishReason,t.candidates[i].finishMessage=o.finishMessage,t.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[i].content||(t.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const l of o.content.parts)l.text&&(a.text=l.text),l.functionCall&&(a.functionCall=l.functionCall),l.executableCode&&(a.executableCode=l.executableCode),l.codeExecutionResult&&(a.codeExecutionResult=l.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[i].content.parts.push(a)}}s.usageMetadata&&(t.usageMetadata=s.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e,n,t,s){const o=await M(n,_.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),s);return rt(o)}async function he(e,n,t,s){const i=await(await M(n,_.GENERATE_CONTENT,e,!1,JSON.stringify(t),s)).json();return{response:U(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function T(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return dt(n)}function dt(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(t.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new v("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new v("No content is provided for sending chat message.");return s?n:t}function ut(e,n){var t;let s={model:n==null?void 0:n.model,generationConfig:n==null?void 0:n.generationConfig,safetySettings:n==null?void 0:n.safetySettings,tools:n==null?void 0:n.tools,toolConfig:n==null?void 0:n.toolConfig,systemInstruction:n==null?void 0:n.systemInstruction,cachedContent:(t=n==null?void 0:n.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new N("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=T(e);s.contents=[i]}return{generateContentRequest:s}}function oe(e){let n;return e.contents?n=e:n={contents:[T(e)]},e.systemInstruction&&(n.systemInstruction=fe(e.systemInstruction)),n}function ht(e){return typeof e=="string"||Array.isArray(e)?{content:T(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ft={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function mt(e){let n=!1;for(const t of e){const{role:s,parts:o}=t;if(!n&&s!=="user")throw new v(`First content should be with role 'user', got ${s}`);if(!W.includes(s))throw new v(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(W)}`);if(!Array.isArray(o))throw new v("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new v("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of o)for(const u of re)u in l&&(i[u]+=1);const a=ft[s];for(const l of re)if(!a.includes(l)&&i[l]>0)throw new v(`Content with role '${s}' can't contain '${l}' part`);n=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="SILENT_ERROR";class gt{constructor(n,t,s,o={}){this.model=t,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(mt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n,t={}){var s,o,i,a,l,u;await this._sendPromise;const f=T(n),x={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,f]},p=Object.assign(Object.assign({},this._requestOptions),t);let d;return this._sendPromise=this._sendPromise.then(()=>he(this._apiKey,this.model,x,p)).then(c=>{var h;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(f);const b=Object.assign({parts:[],role:"model"},(h=c.response.candidates)===null||h===void 0?void 0:h[0].content);this._history.push(b)}else{const b=w(c.response);b&&console.warn(`sendMessage() was unsuccessful. ${b}. Inspect response object for details.`)}d=c}),await this._sendPromise,d}async sendMessageStream(n,t={}){var s,o,i,a,l,u;await this._sendPromise;const f=T(n),x={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,f]},p=Object.assign(Object.assign({},this._requestOptions),t),d=ue(this._apiKey,this.model,x,p);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(ie)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(f);const h=Object.assign({},c.candidates[0].content);h.role||(h.role="model"),this._history.push(h)}else{const h=w(c);h&&console.warn(`sendMessageStream() was unsuccessful. ${h}. Inspect response object for details.`)}}).catch(c=>{c.message!==ie&&console.error(c)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(e,n,t,s){return(await M(n,_.COUNT_TOKENS,e,!1,JSON.stringify(t),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,n,t,s){return(await M(n,_.EMBED_CONTENT,e,!1,JSON.stringify(t),s)).json()}async function bt(e,n,t,s){const o=t.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await M(n,_.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(n,t,s={}){this.apiKey=n,this._requestOptions=s,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=fe(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(n,t={}){var s;const o=oe(n),i=Object.assign(Object.assign({},this._requestOptions),t);return he(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(n,t={}){var s;const o=oe(n),i=Object.assign(Object.assign({},this._requestOptions),t);return ue(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(n){var t;return new gt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this._requestOptions)}async countTokens(n,t={}){const s=ut(n,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return pt(this.apiKey,this.model,s,o)}async embedContent(n,t={}){const s=ht(n),o=Object.assign(Object.assign({},this._requestOptions),t);return xt(this.apiKey,this.model,s,o)}async batchEmbedContents(n,t={}){const s=Object.assign(Object.assign({},this._requestOptions),t);return bt(this.apiKey,this.model,n,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new v("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ae(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t,s){if(!n.name)throw new N("Cached content must contain a `name` field.");if(!n.model)throw new N("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(t!=null&&t[a]&&n[a]&&(t==null?void 0:t[a])!==n[a]){if(a==="model"){const l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,u=n.model.startsWith("models/")?n.model.replace("models/",""):n.model;if(l===u)continue}throw new N(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${n[a]})`)}const i=Object.assign(Object.assign({},t),{model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n});return new ae(this.apiKey,i,s)}}const yt=()=>{const[e,n]=m.useState(""),[t,s]=m.useState(""),[o,i]=m.useState(!1),[a,l]=m.useState(!1),[u,f]=m.useState(null),x="speechSynthesis"in window,[p,d]=m.useState({word:"",start:0,end:0}),c="AIzaSyD2Bse9wnSzYjqvSzq51poS3EwULIBa-Wo",h=new vt(c),b=async()=>{i(!0);try{const g=h.getGenerativeModel({model:"gemini-pro"}),k=(await(await g.generateContent(`Generate a creative and engaging theme or concept for a preschool children's folk tale. The theme should include:
      
  - A simple moral or lesson (e.g., kindness, sharing, helping others).
  - Fun and relatable characters (e.g., animals, toys, magical beings).
  - A playful and imaginative setting.
      
  The theme should be summarized in 1-2 sentences.`)).response.text()).trim(),me=`Based on the following theme, generate a short, simple, and engaging title for a preschool children's folk tale:
      
  Theme: "${k}"
      
  The title should:
  - Be 2-5 words long.
  - Use simple and familiar language suitable for preschool children.
  - Be playful and rhythmic, making it fun to say aloud.
  - Reflect the key elements of the theme.
  - Be memorable and easy to understand for young readers and listeners.`,$=(await(await g.generateContent(me)).response.text()).replace(/"/g,"").trim();s($);const ge=`Write a charming and simple folk tale for preschool children, around 200 words, based on the following theme and title:
  
  Theme: "${k}"
  Title: "${$}"
  
  The story should:
  - Include a clear beginning, middle, and end.
  - Use simple vocabulary and short sentences.
  - Repeat key phrases to reinforce language learning.
  - Teach the moral or lesson described in the theme.
  - Feature the fun, relatable characters and imaginative setting described in the theme.
  - Be warm and friendly in tone, with a playful rhythm that captivates young listeners.
  - Avoid complex ideas, scary themes, or advanced words.
  - End with a positive and memorable message for children.`,pe=await(await g.generateContent(ge)).response.text();n(pe.trim())}catch(g){console.error("Error generating folktale:",g)}finally{i(!1)}},O=()=>{if(a){window.speechSynthesis.cancel(),l(!1);return}u&&window.speechSynthesis.cancel();const g=new SpeechSynthesisUtterance(e),G=window.speechSynthesis.getVoices().find(y=>y.name.includes("Female")||y.lang.includes("en")&&y.name.toLowerCase().includes("female"));G?(g.voice=G,g.pitch=.9,g.rate=.9,g.volume=.8):console.warn("No female voice found, using default voice"),g.onboundary=y=>{const k=e.substring(y.charIndex,y.charIndex+y.charLength);d({word:k,start:y.charIndex,end:y.charIndex+y.charLength})},g.onend=()=>l(!1),g.onstart=()=>l(!0),f(g),window.speechSynthesis.speak(g)};return r.jsx("div",{className:"min-h-screen p-8 bg-gradient-to-b from-blue-50 to-purple-50",children:r.jsxs("div",{className:"max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6",children:[r.jsx("h1",{className:"text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Children's Folk Tale Generator"}),!x&&r.jsx("div",{className:"text-red-500 mb-4 text-center",children:"Text-to-speech is not supported in your browser"}),r.jsx("div",{className:"flex justify-center mb-8",children:r.jsxs("button",{onClick:b,disabled:o,className:"relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",children:[r.jsx("span",{className:"relative z-10",children:o?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"animate-pulse",children:"Generating..."}),r.jsx("span",{className:"ml-2 animate-spin",children:"✨"})]}):"Generate Folk Tale"}),r.jsx("span",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"})]})}),e&&r.jsxs("div",{className:"mt-6 space-y-6",children:[r.jsx("div",{className:"text-center mb-6",children:r.jsx("h2",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:t})}),r.jsx("div",{className:"bg-white p-6 rounded-xl shadow-md border border-gray-100",children:r.jsx("div",{className:"whitespace-pre-wrap",children:e.split("").map((g,C)=>r.jsx("span",{className:C>=p.start&&C<p.end?"bg-yellow-200":"",children:g},C))})}),r.jsx("div",{className:"flex justify-center mt-8",children:r.jsxs("button",{onClick:O,className:"relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl",children:[r.jsx("span",{className:"relative z-10",children:a?r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Stop Reading"}),r.jsx("span",{className:"ml-2 animate-pulse",children:"⏸️"})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Read Aloud"}),r.jsx("span",{className:"ml-2",children:"🔊"})]})}),r.jsx("span",{className:"absolute inset-0 rounded-full bg-gradient-to-r from-green-600 to-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300"})]})})]}),r.jsx("div",{children:r.jsx(E,{to:"/schoolproject",className:"inline-block mt-12 text-black hover:text-blue-500/80 transition-colors",children:"← Back to School Projects"})})]})})};function Et(){return r.jsx(be,{children:r.jsxs(ve,{children:[r.jsx(R,{path:"/",element:r.jsx(Re,{})}),r.jsx(R,{path:"/schoolproject",element:r.jsx(Se,{})}),r.jsx(R,{path:"/schoolproject/math",element:r.jsx(De,{})}),r.jsx(R,{path:"/sideproject",element:r.jsx(Ge,{})}),r.jsx(R,{path:"/sideproject/khmertv",element:r.jsx(He,{})}),r.jsx(R,{path:"/schoolproject/folktale",element:r.jsx(yt,{})})]})})}P.createRoot(document.getElementById("root")).render(r.jsx(ye.StrictMode,{children:r.jsx(Et,{})}));
