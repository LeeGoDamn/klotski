import './style.css'

// Block types
type BlockType = '1x1' | '1x2-v' | '2x1-h' | '2x2'

interface Block {
  id: string
  type: BlockType
  row: number
  col: number
  label: string
}

interface Level {
  name: string
  blocks: Block[]
  minMoves: number
}

// Classic Klotski levels
const LEVELS: Level[] = [
  {
    name: '横刀立马',
    minMoves: 81,
    blocks: [
      { id: 'caocao', type: '2x2', row: 0, col: 1, label: '曹操' },
      { id: 'guanyu', type: '2x1-h', row: 2, col: 1, label: '关羽' },
      { id: 'zhangfei', type: '1x2-v', row: 0, col: 0, label: '张飞' },
      { id: 'zhaoyun', type: '1x2-v', row: 0, col: 3, label: '赵云' },
      { id: 'machao', type: '1x2-v', row: 2, col: 0, label: '马超' },
      { id: 'huangzhong', type: '1x2-v', row: 2, col: 3, label: '黄忠' },
      { id: 'bing1', type: '1x1', row: 4, col: 0, label: '兵' },
      { id: 'bing2', type: '1x1', row: 3, col: 1, label: '兵' },
      { id: 'bing3', type: '1x1', row: 3, col: 2, label: '兵' },
      { id: 'bing4', type: '1x1', row: 4, col: 3, label: '兵' },
    ],
  },
  {
    name: '指挥若定',
    minMoves: 70,
    blocks: [
      { id: 'caocao', type: '2x2', row: 0, col: 1, label: '曹操' },
      { id: 'guanyu', type: '2x1-h', row: 2, col: 1, label: '关羽' },
      { id: 'zhangfei', type: '1x2-v', row: 0, col: 0, label: '张飞' },
      { id: 'zhaoyun', type: '1x2-v', row: 0, col: 3, label: '赵云' },
      { id: 'machao', type: '1x2-v', row: 2, col: 0, label: '马超' },
      { id: 'huangzhong', type: '1x2-v', row: 2, col: 3, label: '黄忠' },
      { id: 'bing1', type: '1x1', row: 3, col: 1, label: '兵' },
      { id: 'bing2', type: '1x1', row: 3, col: 2, label: '兵' },
      { id: 'bing3', type: '1x1', row: 4, col: 0, label: '兵' },
      { id: 'bing4', type: '1x1', row: 4, col: 3, label: '兵' },
    ],
  },
  {
    name: '兵分三路',
    minMoves: 100,
    blocks: [
      { id: 'caocao', type: '2x2', row: 0, col: 0, label: '曹操' },
      { id: 'guanyu', type: '2x1-h', row: 2, col: 1, label: '关羽' },
      { id: 'zhangfei', type: '1x2-v', row: 0, col: 2, label: '张飞' },
      { id: 'zhaoyun', type: '1x2-v', row: 0, col: 3, label: '赵云' },
      { id: 'machao', type: '1x2-v', row: 2, col: 0, label: '马超' },
      { id: 'huangzhong', type: '1x2-v', row: 2, col: 3, label: '黄忠' },
      { id: 'bing1', type: '1x1', row: 3, col: 1, label: '兵' },
      { id: 'bing2', type: '1x1', row: 3, col: 2, label: '兵' },
      { id: 'bing3', type: '1x1', row: 4, col: 1, label: '兵' },
      { id: 'bing4', type: '1x1', row: 4, col: 2, label: '兵' },
    ],
  },
  {
    name: '层层设防',
    minMoves: 60,
    blocks: [
      { id: 'caocao', type: '2x2', row: 0, col: 1, label: '曹操' },
      { id: 'guanyu', type: '2x1-h', row: 4, col: 1, label: '关羽' },
      { id: 'zhangfei', type: '1x2-v', row: 0, col: 0, label: '张飞' },
      { id: 'zhaoyun', type: '1x2-v', row: 0, col: 3, label: '赵云' },
      { id: 'machao', type: '1x2-v', row: 2, col: 0, label: '马超' },
      { id: 'huangzhong', type: '1x2-v', row: 2, col: 3, label: '黄忠' },
      { id: 'bing1', type: '1x1', row: 2, col: 1, label: '兵' },
      { id: 'bing2', type: '1x1', row: 2, col: 2, label: '兵' },
      { id: 'bing3', type: '1x1', row: 3, col: 1, label: '兵' },
      { id: 'bing4', type: '1x1', row: 3, col: 2, label: '兵' },
    ],
  },
  {
    name: '小试牛刀',
    minMoves: 25,
    blocks: [
      { id: 'caocao', type: '2x2', row: 0, col: 1, label: '曹操' },
      { id: 'guanyu', type: '2x1-h', row: 3, col: 1, label: '关羽' },
      { id: 'zhangfei', type: '1x2-v', row: 0, col: 0, label: '张飞' },
      { id: 'zhaoyun', type: '1x2-v', row: 0, col: 3, label: '赵云' },
      { id: 'bing1', type: '1x1', row: 2, col: 0, label: '兵' },
      { id: 'bing2', type: '1x1', row: 2, col: 3, label: '兵' },
      { id: 'bing3', type: '1x1', row: 3, col: 0, label: '兵' },
      { id: 'bing4', type: '1x1', row: 3, col: 3, label: '兵' },
    ],
  },
]

interface GameState {
  blocks: Block[]
  selectedId: string | null
  moves: number
  levelIndex: number
  startTime: number | null
  elapsedTime: number
  timerInterval: number | null
  isWon: boolean
}

const state: GameState = {
  blocks: [],
  selectedId: null,
  moves: 0,
  levelIndex: 0,
  startTime: null,
  elapsedTime: 0,
  timerInterval: null,
  isWon: false,
}

const BOARD_COLS = 4
const BOARD_ROWS = 5
const EXIT_COL = 1
const EXIT_ROW = 3

function getBlockDimensions(type: BlockType): { width: number; height: number } {
  switch (type) {
    case '1x1':
      return { width: 1, height: 1 }
    case '1x2-v':
      return { width: 1, height: 2 }
    case '2x1-h':
      return { width: 2, height: 1 }
    case '2x2':
      return { width: 2, height: 2 }
  }
}

function getOccupiedCells(block: Block): Set<string> {
  const { width, height } = getBlockDimensions(block.type)
  const cells = new Set<string>()
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      cells.add(`${block.row + r},${block.col + c}`)
    }
  }
  return cells
}

function canMove(blocks: Block[], blockId: string, dRow: number, dCol: number): boolean {
  const block = blocks.find(b => b.id === blockId)
  if (!block) return false

  const { width, height } = getBlockDimensions(block.type)
  const newRow = block.row + dRow
  const newCol = block.col + dCol

  // Check bounds
  if (newRow < 0 || newCol < 0 || newRow + height > BOARD_ROWS || newCol + width > BOARD_COLS) {
    return false
  }

  // Get all occupied cells except this block
  const occupiedCells = new Set<string>()
  blocks.forEach(b => {
    if (b.id !== blockId) {
      getOccupiedCells(b).forEach(cell => occupiedCells.add(cell))
    }
  })

  // Check if new position overlaps with any block
  const newCells = new Set<string>()
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      newCells.add(`${newRow + r},${newCol + c}`)
    }
  }

  for (const cell of newCells) {
    if (occupiedCells.has(cell)) return false
  }

  return true
}

function checkWin(blocks: Block[]): boolean {
  const caocao = blocks.find(b => b.id === 'caocao')
  return caocao?.row === EXIT_ROW && caocao?.col === EXIT_COL
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

function createConfetti() {
  const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f']
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div')
    confetti.className = 'confetti'
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 2 + 's'
    document.body.appendChild(confetti)
    setTimeout(() => confetti.remove(), 5000)
  }
}

function renderGame() {
  const app = document.getElementById('app')!
  const level = LEVELS[state.levelIndex]
  const cellSize = Math.min(70, (window.innerWidth - 80) / BOARD_COLS)

  app.innerHTML = `
    <div class="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <!-- Header -->
      <div class="text-center mb-6">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-1">🧩 华容道</h1>
        <p class="text-gray-400 text-sm">移动方块，让曹操从底部逃出</p>
      </div>

      <!-- Level Selection -->
      <div class="flex flex-wrap justify-center gap-2 mb-4">
        ${LEVELS.map((l, i) => `
          <button 
            class="level-btn ${state.levelIndex === i ? 'active bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-700 text-gray-300'}"
            data-level="${i}"
          >
            ${l.name}
          </button>
        `).join('')}
      </div>

      <!-- Stats -->
      <div class="flex justify-center gap-4 mb-6">
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${state.moves}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">步数</div>
        </div>
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${formatTime(state.elapsedTime)}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">时间</div>
        </div>
        <div class="stats-card text-center">
          <div class="text-2xl font-bold text-white">${level.minMoves}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wide">最少</div>
        </div>
      </div>

      <!-- Game Board -->
      <div class="relative mb-8">
        <div 
          class="board"
          style="
            --cell-size: ${cellSize}px;
            --gap: 4px;
            width: ${BOARD_COLS * cellSize + 16}px;
            height: ${BOARD_ROWS * cellSize + 16}px;
          "
        >
          ${state.blocks.map(block => {
            const { width, height } = getBlockDimensions(block.type)
            const isSelected = state.selectedId === block.id
            const cellClass = block.type === '2x2' ? 'cell-2x2' :
                              block.type === '2x1-h' ? 'cell-2x1-h' :
                              block.type === '1x2-v' ? 'cell-1x2-v' : 'cell-1x1'
            
            return `
              <div
                class="cell ${cellClass} ${isSelected ? 'selected' : ''}"
                data-id="${block.id}"
                style="
                  left: ${block.col * cellSize + 8}px;
                  top: ${block.row * cellSize + 8}px;
                  width: ${width * cellSize - 4}px;
                  height: ${height * cellSize - 4}px;
                "
              >
                ${block.label}
              </div>
            `
          }).join('')}
        </div>
        
        <!-- Exit indicator -->
        <div 
          class="exit"
          style="
            --cell-size: ${cellSize}px;
            --gap: 4px;
            width: ${2 * cellSize + 4}px;
            left: ${EXIT_COL * cellSize + 8}px;
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

    ${state.isWon ? `
      <div class="win-overlay">
        <div class="win-modal">
          <div class="text-6xl mb-4">🎉</div>
          <h2 class="text-3xl font-bold text-white mb-2">恭喜通关！</h2>
          <p class="text-xl text-yellow-400 mb-4">${level.name}</p>
          <div class="text-gray-300 mb-6">
            <p>用时：<span class="text-white font-bold">${formatTime(state.elapsedTime)}</span></p>
            <p>步数：<span class="text-white font-bold">${state.moves}</span>（最少 ${level.minMoves} 步）</p>
          </div>
          <div class="flex gap-3 justify-center">
            <button class="btn" id="nextLevelBtn">下一关 ➡️</button>
            <button class="btn btn-secondary" id="replayBtn">再玩一次</button>
          </div>
        </div>
      </div>
    ` : ''}
  `

  // Add event listeners
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const id = cell.getAttribute('data-id')!
      if (state.selectedId === id) {
        state.selectedId = null
      } else {
        state.selectedId = id
      }
      renderGame()
    })
  })

  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const levelIndex = parseInt(btn.getAttribute('data-level')!)
      state.levelIndex = levelIndex
      resetGame()
    })
  })

  document.getElementById('resetBtn')?.addEventListener('click', resetGame)
  
  document.getElementById('undoBtn')?.addEventListener('click', () => {
    // Simple reset for now - could implement proper undo history
    resetGame()
  })

  document.getElementById('nextLevelBtn')?.addEventListener('click', () => {
    state.levelIndex = (state.levelIndex + 1) % LEVELS.length
    resetGame()
  })

  document.getElementById('replayBtn')?.addEventListener('click', resetGame)
}

function moveBlock(dRow: number, dCol: number) {
  if (!state.selectedId || state.isWon) return

  if (canMove(state.blocks, state.selectedId, dRow, dCol)) {
    const block = state.blocks.find(b => b.id === state.selectedId)
    if (block) {
      // Start timer on first move
      if (!state.startTime) {
        state.startTime = Date.now()
        state.timerInterval = window.setInterval(updateTimer, 1000)
      }

      block.row += dRow
      block.col += dCol
      state.moves++

      // Check win
      if (checkWin(state.blocks)) {
        state.isWon = true
        if (state.timerInterval) {
          clearInterval(state.timerInterval)
        }
        createConfetti()
      }

      renderGame()
    }
  }
}

function updateTimer() {
  if (state.startTime) {
    state.elapsedTime = Math.floor((Date.now() - state.startTime) / 1000)
    const timerEl = document.getElementById('timer')
    if (timerEl) timerEl.textContent = formatTime(state.elapsedTime)
  }
}

function resetGame() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval)
  }

  const level = LEVELS[state.levelIndex]
  state.blocks = level.blocks.map(b => ({ ...b }))
  state.selectedId = null
  state.moves = 0
  state.startTime = null
  state.elapsedTime = 0
  state.timerInterval = null
  state.isWon = false

  renderGame()
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (state.isWon) return

  switch (e.key) {
    case 'ArrowUp':
      e.preventDefault()
      moveBlock(-1, 0)
      break
    case 'ArrowDown':
      e.preventDefault()
      moveBlock(1, 0)
      break
    case 'ArrowLeft':
      e.preventDefault()
      moveBlock(0, -1)
      break
    case 'ArrowRight':
      e.preventDefault()
      moveBlock(0, 1)
      break
  }
})

// Handle window resize
window.addEventListener('resize', () => {
  renderGame()
})

// Initialize
resetGame()
