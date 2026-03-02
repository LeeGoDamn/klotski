(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();const x=[{name:"横刀立马",minMoves:81,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:4,col:0,label:"兵"},{id:"bing2",type:"1x1",row:3,col:1,label:"兵"},{id:"bing3",type:"1x1",row:3,col:2,label:"兵"},{id:"bing4",type:"1x1",row:4,col:3,label:"兵"}]},{name:"指挥若定",minMoves:70,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:3,col:1,label:"兵"},{id:"bing2",type:"1x1",row:3,col:2,label:"兵"},{id:"bing3",type:"1x1",row:4,col:0,label:"兵"},{id:"bing4",type:"1x1",row:4,col:3,label:"兵"}]},{name:"兵分三路",minMoves:100,blocks:[{id:"caocao",type:"2x2",row:0,col:0,label:"曹操"},{id:"guanyu",type:"2x1-h",row:2,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:2,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:3,col:1,label:"兵"},{id:"bing2",type:"1x1",row:3,col:2,label:"兵"},{id:"bing3",type:"1x1",row:4,col:1,label:"兵"},{id:"bing4",type:"1x1",row:4,col:2,label:"兵"}]},{name:"层层设防",minMoves:60,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:4,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"machao",type:"1x2-v",row:2,col:0,label:"马超"},{id:"huangzhong",type:"1x2-v",row:2,col:3,label:"黄忠"},{id:"bing1",type:"1x1",row:2,col:1,label:"兵"},{id:"bing2",type:"1x1",row:2,col:2,label:"兵"},{id:"bing3",type:"1x1",row:3,col:1,label:"兵"},{id:"bing4",type:"1x1",row:3,col:2,label:"兵"}]},{name:"小试牛刀",minMoves:25,blocks:[{id:"caocao",type:"2x2",row:0,col:1,label:"曹操"},{id:"guanyu",type:"2x1-h",row:3,col:1,label:"关羽"},{id:"zhangfei",type:"1x2-v",row:0,col:0,label:"张飞"},{id:"zhaoyun",type:"1x2-v",row:0,col:3,label:"赵云"},{id:"bing1",type:"1x1",row:2,col:0,label:"兵"},{id:"bing2",type:"1x1",row:2,col:3,label:"兵"},{id:"bing3",type:"1x1",row:3,col:0,label:"兵"},{id:"bing4",type:"1x1",row:3,col:3,label:"兵"}]}],e={blocks:[],selectedId:null,moves:0,levelIndex:0,startTime:null,elapsedTime:0,timerInterval:null,isWon:!1,history:[]},y=4,$=5,I=1,E=3;function w(t){switch(t){case"1x1":return{width:1,height:1};case"1x2-v":return{width:1,height:2};case"2x1-h":return{width:2,height:1};case"2x2":return{width:2,height:2}}}function L(t){const{width:i,height:o}=w(t.type),a=new Set;for(let n=0;n<o;n++)for(let l=0;l<i;l++)a.add(`${t.row+n},${t.col+l}`);return a}function u(t,i,o,a){const n=t.find(c=>c.id===i);if(!n)return!1;const{width:l,height:r}=w(n.type),d=n.row+o,p=n.col+a;if(d<0||p<0||d+r>$||p+l>y)return!1;const m=new Set;t.forEach(c=>{c.id!==i&&L(c).forEach(v=>m.add(v))});const g=new Set;for(let c=0;c<r;c++)for(let v=0;v<l;v++)g.add(`${d+c},${p+v}`);for(const c of g)if(m.has(c))return!1;return!0}function k(t,i){return{up:u(t,i,-1,0),down:u(t,i,1,0),left:u(t,i,0,-1),right:u(t,i,0,1)}}function M(t){const i=t.find(o=>o.id==="caocao");return i?.row===E&&i?.col===I}function h(t){const i=Math.floor(t/60),o=t%60;return`${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`}function B(){const t=["#ff0","#f0f","#0ff","#f00","#0f0","#00f"];for(let i=0;i<50;i++){const o=document.createElement("div");o.className="confetti",o.style.left=Math.random()*100+"vw",o.style.background=t[Math.floor(Math.random()*t.length)],o.style.animationDelay=Math.random()*2+"s",document.body.appendChild(o),setTimeout(()=>o.remove(),5e3)}}function f(){const t=document.getElementById("app"),i=x[e.levelIndex],o=Math.min(70,(window.innerWidth-80)/y),a=e.selectedId?k(e.blocks,e.selectedId):{up:!1,down:!1,left:!1,right:!1},n=a.up||a.down||a.left||a.right;t.innerHTML=`
    <div class="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-1">🧩 华容道</h1>
        <p class="text-gray-400 text-sm">移动方块，让曹操从底部逃出</p>
      </div>

      <!-- Level Selection -->
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        ${x.map((l,r)=>`
          <button 
            class="level-btn ${e.levelIndex===r?"active bg-gradient-to-r from-purple-500 to-pink-500 text-white":"bg-gray-700 text-gray-300"}"
            data-level="${r}"
          >
            ${l.name}
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
          <div class="text-2xl font-bold text-white">${h(e.elapsedTime)}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">时间</div>
        </div>
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${i.minMoves}</div>
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
            width: ${y*o+16}px;
            height: ${$*o+16}px;
          "
        >
          ${e.blocks.map(l=>{const{width:r,height:d}=w(l.type),p=e.selectedId===l.id;return`
              <div
                class="cell ${l.type==="2x2"?"cell-2x2":l.type==="2x1-h"?"cell-2x1-h":l.type==="1x2-v"?"cell-1x2-v":"cell-1x1"} ${p?"selected":""}"
                data-id="${l.id}"
                style="
                  left: ${l.col*o+8}px;
                  top: ${l.row*o+8}px;
                  width: ${r*o-4}px;
                  height: ${d*o-4}px;
                "
              >
                ${l.label}
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

      <!-- Direction Controls -->
      ${e.selectedId&&n?`
        <div class="mb-6 flex flex-col items-center gap-1">
          <button class="direction-btn ${a.up?"":"opacity-30 pointer-events-none"}" data-dir="up" ${a.up?"":"disabled"}>
            ⬆️
          </button>
          <div class="flex gap-1">
            <button class="direction-btn ${a.left?"":"opacity-30 pointer-events-none"}" data-dir="left" ${a.left?"":"disabled"}>
              ⬅️
            </button>
            <div class="w-12 h-12"></div>
            <button class="direction-btn ${a.right?"":"opacity-30 pointer-events-none"}" data-dir="right" ${a.right?"":"disabled"}>
              ➡️
            </button>
          </div>
          <button class="direction-btn ${a.down?"":"opacity-30 pointer-events-none"}" data-dir="down" ${a.down?"":"disabled"}>
            ⬇️
          </button>
        </div>
      `:""}

      <!-- Controls -->
      <div class="flex gap-3">
        <button class="btn btn-secondary" id="resetBtn">🔄 重置</button>
        <button class="btn ${e.history.length>0?"":"opacity-50"}" id="undoBtn" ${e.history.length>0?"":"disabled"}>↩️ 撤销</button>
      </div>

      <!-- Instructions -->
      <div class="mt-6 text-center text-gray-400 text-sm max-w-sm">
        <p>点击方块选中，然后用方向按钮或键盘移动</p>
      </div>
    </div>

    ${e.isWon?`
      <div class="win-overlay">
        <div class="win-modal">
          <div class="text-6xl mb-4">🎉</div>
          <h2 class="text-3xl font-bold text-white mb-2">恭喜通关！</h2>
          <p class="text-xl text-yellow-400 mb-4">${i.name}</p>
          <div class="text-gray-300 mb-6">
            <p>用时：<span class="text-white font-bold">${h(e.elapsedTime)}</span></p>
            <p>步数：<span class="text-white font-bold">${e.moves}</span>（最少 ${i.minMoves} 步）</p>
          </div>
          <div class="flex gap-3 justify-center">
            <button class="btn" id="nextLevelBtn">下一关 ➡️</button>
            <button class="btn btn-secondary" id="replayBtn">再玩一次</button>
          </div>
        </div>
      </div>
    `:""}
  `,document.querySelectorAll(".cell").forEach(l=>{l.addEventListener("click",()=>{const r=l.getAttribute("data-id");e.selectedId===r?e.selectedId=null:e.selectedId=r,f()})}),document.querySelectorAll(".direction-btn").forEach(l=>{l.addEventListener("click",()=>{switch(l.getAttribute("data-dir")){case"up":s(-1,0);break;case"down":s(1,0);break;case"left":s(0,-1);break;case"right":s(0,1);break}})}),document.querySelectorAll(".level-btn").forEach(l=>{l.addEventListener("click",()=>{const r=parseInt(l.getAttribute("data-level"));e.levelIndex=r,b()})}),document.getElementById("resetBtn")?.addEventListener("click",b),document.getElementById("undoBtn")?.addEventListener("click",z),document.getElementById("nextLevelBtn")?.addEventListener("click",()=>{e.levelIndex=(e.levelIndex+1)%x.length,b()}),document.getElementById("replayBtn")?.addEventListener("click",b)}function s(t,i){if(!(!e.selectedId||e.isWon)&&u(e.blocks,e.selectedId,t,i)){const o=e.blocks.find(a=>a.id===e.selectedId);o&&(e.history.push({blockId:o.id,fromRow:o.row,fromCol:o.col,toRow:o.row+t,toCol:o.col+i}),e.startTime||(e.startTime=Date.now(),e.timerInterval=window.setInterval(S,1e3)),o.row+=t,o.col+=i,e.moves++,M(e.blocks)&&(e.isWon=!0,e.timerInterval&&clearInterval(e.timerInterval),B()),f())}}function z(){if(e.history.length===0)return;const t=e.history.pop(),i=e.blocks.find(o=>o.id===t.blockId);i&&(i.row=t.fromRow,i.col=t.fromCol,e.moves--,f())}function S(){if(e.startTime){e.elapsedTime=Math.floor((Date.now()-e.startTime)/1e3);const t=document.getElementById("timer");t&&(t.textContent=h(e.elapsedTime))}}function b(){e.timerInterval&&clearInterval(e.timerInterval);const t=x[e.levelIndex];e.blocks=t.blocks.map(i=>({...i})),e.selectedId=null,e.moves=0,e.startTime=null,e.elapsedTime=0,e.timerInterval=null,e.isWon=!1,e.history=[],f()}document.addEventListener("keydown",t=>{if(!e.isWon)switch(t.key){case"ArrowUp":t.preventDefault(),s(-1,0);break;case"ArrowDown":t.preventDefault(),s(1,0);break;case"ArrowLeft":t.preventDefault(),s(0,-1);break;case"ArrowRight":t.preventDefault(),s(0,1);break}});window.addEventListener("resize",()=>{f()});b();
