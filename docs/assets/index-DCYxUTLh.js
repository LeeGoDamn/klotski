(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const v=[{name:"横刀立马",minMoves:81,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:4,col:0,label:"兵"},{id:"bing2",type:"1x1",row:3,col:1,label:"兵"},{id:"bing3",type:"1x1",row:3,col:2,label:"兵"},{id:"bing4",type:"1x1",row:4,col:3,label:"兵"}]},{name:"指挥若定",minMoves:70,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:3,col:1,label:"兵"},{id:"bing2",type:"1x1",row:3,col:2,label:"兵"},{id:"bing3",type:"1x1",row:4,col:0,label:"兵"},{id:"bing4",type:"1x1",row:4,col:3,label:"兵"}]},{name:"兵分三路",minMoves:100,blocks:[{id:"caocao",type:"2x2",row:0,col:0,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:2,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:3,col:1,label:"兵"},{id:"bing2",type:"1x1",row:3,col:2,label:"兵"},{id:"bing3",type:"1x1",row:4,col:1,label:"兵"},{id:"bing4",type:"1x1",row:4,col:2,label:"兵"}]},{name:"层层设防",minMoves:60,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:4,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:2,col:1,label:"兵"},{id:"bing2",type:"1x1",row:2,col:2,label:"兵"},{id:"bing3",type:"1x1",row:3,col:1,label:"兵"},{id:"bing4",type:"1x1",row:3,col:2,label:"兵"}]},{name:"小试牛刀",minMoves:25,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:3,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"bing1",type:"1x1",row:2,col:0,label:"兵"},{id:"bing2",type:"1x1",row:2,col:3,label:"兵"},{id:"bing3",type:"1x1",row:3,col:0,label:"兵"},{id:"bing4",type:"1x1",row:3,col:3,label:"兵"}]}],e={blocks:[],selectedId:null,moves:0,levelIndex:0,startTime:null,elapsedTime:0,timerInterval:null,isWon:!1},f=4,g=5,I=1,$=3;function y(l){switch(l){case"1x1":return{width:1,height:1};case"1x2-v":return{width:1,height:2};case"2x1-h":return{width:2,height:1};case"2x2":return{width:2,height:2}}}function E(l){const{width:n,height:o}=y(l.type),i=new Set;for(let t=0;t<o;t++)for(let a=0;a<n;a++)i.add(`${l.row+t},${l.col+a}`);return i}function L(l,n,o,i){const t=l.find(c=>c.id===n);if(!t)return!1;const{width:a,height:r}=y(t.type),p=t.row+o,b=t.col+i;if(p<0||b<0||p+r>g||b+a>f)return!1;const w=new Set;l.forEach(c=>{c.id!==n&&E(c).forEach(d=>w.add(d))});const h=new Set;for(let c=0;c<r;c++)for(let d=0;d<a;d++)h.add(`${p+c},${b+d}`);for(const c of h)if(w.has(c))return!1;return!0}function B(l){const n=l.find(o=>o.id==="caocao");return n?.row===$&&n?.col===I}function m(l){const n=Math.floor(l/60),o=l%60;return`${n.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`}function z(){const l=["#ff0","#f0f","#0ff","#f00","#0f0","#00f"];for(let n=0;n<50;n++){const o=document.createElement("div");o.className="confetti",o.style.left=Math.random()*100+"vw",o.style.background=l[Math.floor(Math.random()*l.length)],o.style.animationDelay=Math.random()*2+"s",document.body.appendChild(o),setTimeout(()=>o.remove(),5e3)}}function u(){const l=document.getElementById("app"),n=v[e.levelIndex],o=Math.min(70,(window.innerWidth-80)/f);l.innerHTML=`
    <div class="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-1">🧩 华容道</h1>
        <p class="text-gray-400 text-sm">移动方块，让曹操从底部逃出</p>
      </div>

      <!-- Level Selection -->
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        ${v.map((i,t)=>`
          <button 
            class="level-btn ${e.levelIndex===t?"active bg-gradient-to-r from-purple-500 to-pink-500 text-white":"bg-gray-700 text-gray-300"}"
            data-level="${t}"
          >
            ${i.name}
          </button>
        `).join("")}
      </div>

      <!-- Stats -->
      <div class="flex justify-center gap-4 mb-6">
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${e.moves}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">步数</div>
        </div>
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${m(e.elapsedTime)}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">时间</div>
        </div>
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${n.minMoves}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">最少</div>
        </div>
      </div>

      <!-- Game Board -->
      <div class="relative mb-8">
        <div 
          class="board"
          style="
            --cell-size: ${o}px;
            --gap: 4px;
            width: ${f*o+16}px;
            height: ${g*o+16}px;
          "
        >
          ${e.blocks.map(i=>{const{width:t,height:a}=y(i.type),r=e.selectedId===i.id;return`
              <div
                class="cell ${i.type==="2x2"?"cell-2x2":i.type==="2x1-h"?"cell-2x1-h":i.type==="1x2-v"?"cell-1x2-v":"cell-1x1"} ${r?"selected":""}"
                data-id="${i.id}"
                style="
                  left: ${i.col*o+8}px;
                  top: ${i.row*o+8}px;
                  width: ${t*o-4}px;
                  height: ${a*o-4}px;
                "
              >
                ${i.label}
              </div>
            `}).join("")}
        </div>
        
        <!-- Exit indicator -->
        <div 
          class="exit"
          style="
            --cell-size: ${o}px;
            --gap: 4px;
            width: ${2*o+4}px;
            left: ${I*o+8}px;
          "
        ></div>
      </div>

      <!-- Controls -->
      <div class="flex gap-3">
        <button class="btn btn-secondary" id="resetBtn">🔄 重置</button>
        <button class="btn" id="undoBtn">↩️ 撤销</button>
      </div>

      <!-- Instructions -->
      <div class="mt-6 text-center text-gray-400 text-sm max-w-sm">
        <p>点击方块选中，再点击方向移动</p>
        <p class="mt-1">或使用键盘方向键</p>
      </div>
    </div>

    ${e.isWon?`
      <div class="win-overlay">
        <div class="win-modal">
          <div class="text-6xl mb-4">🎉</div>
          <h2 class="text-3xl font-bold text-white mb-2">恭喜通关！</h2>
          <p class="text-xl text-yellow-400 mb-4">${n.name}</p>
          <div class="text-gray-300 mb-6">
            <p>用时：<span class="text-white font-bold">${m(e.elapsedTime)}</span></p>
            <p>步数：<span class="text-white font-bold">${e.moves}</span>（最少 ${n.minMoves} 步）</p>
          </div>
          <div class="flex gap-3 justify-center">
            <button class="btn" id="nextLevelBtn">下一关 ➡️</button>
            <button class="btn btn-secondary" id="replayBtn">再玩一次</button>
          </div>
        </div>
      </div>
    `:""}
  `,document.querySelectorAll(".cell").forEach(i=>{i.addEventListener("click",()=>{const t=i.getAttribute("data-id");e.selectedId===t?e.selectedId=null:e.selectedId=t,u()})}),document.querySelectorAll(".level-btn").forEach(i=>{i.addEventListener("click",()=>{const t=parseInt(i.getAttribute("data-level"));e.levelIndex=t,s()})}),document.getElementById("resetBtn")?.addEventListener("click",s),document.getElementById("undoBtn")?.addEventListener("click",()=>{s()}),document.getElementById("nextLevelBtn")?.addEventListener("click",()=>{e.levelIndex=(e.levelIndex+1)%v.length,s()}),document.getElementById("replayBtn")?.addEventListener("click",s)}function x(l,n){if(!(!e.selectedId||e.isWon)&&L(e.blocks,e.selectedId,l,n)){const o=e.blocks.find(i=>i.id===e.selectedId);o&&(e.startTime||(e.startTime=Date.now(),e.timerInterval=window.setInterval(T,1e3)),o.row+=l,o.col+=n,e.moves++,B(e.blocks)&&(e.isWon=!0,e.timerInterval&&clearInterval(e.timerInterval),z()),u())}}function T(){if(e.startTime){e.elapsedTime=Math.floor((Date.now()-e.startTime)/1e3);const l=document.getElementById("timer");l&&(l.textContent=m(e.elapsedTime))}}function s(){e.timerInterval&&clearInterval(e.timerInterval);const l=v[e.levelIndex];e.blocks=l.blocks.map(n=>({...n})),e.selectedId=null,e.moves=0,e.startTime=null,e.elapsedTime=0,e.timerInterval=null,e.isWon=!1,u()}document.addEventListener("keydown",l=>{if(!e.isWon)switch(l.key){case"ArrowUp":l.preventDefault(),x(-1,0);break;case"ArrowDown":l.preventDefault(),x(1,0);break;case"ArrowLeft":l.preventDefault(),x(0,-1);break;case"ArrowRight":l.preventDefault(),x(0,1);break}});window.addEventListener("resize",()=>{u()});s();
