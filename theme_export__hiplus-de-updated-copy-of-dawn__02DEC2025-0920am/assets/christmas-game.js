/**
 * Christmas Bike Delivery Game
 * A simple mobile-first game for HiPlus store
 */

class ChristmasBikeGame {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.canvas = this.container.querySelector('.xmas-game-canvas');
    this.scoreDisplay = this.container.querySelector('.xmas-game-score');
    this.overlay = this.container.querySelector('.xmas-game-overlay');
    this.overlayTitle = this.overlay.querySelector('h3');
    this.overlayScore = this.overlay.querySelector('.final-score');
    this.startBtn = this.container.querySelector('.xmas-game-btn');
    
    this.player = null;
    this.obstacles = [];
    this.presents = [];
    this.score = 0;
    this.highScore = parseInt(localStorage.getItem('xmasBikeHighScore')) || 0;
    this.isPlaying = false;
    this.isJumping = false;
    this.gameSpeed = 5;
    this.spawnTimer = 0;
    this.presentTimer = 0;
    this.gameLoop = null;
    
    this.init();
  }
  
  init() {
    // Create player
    this.createPlayer();
    
    // Create background stars
    this.createStars();
    
    // Update high score display
    const highScoreEl = this.container.querySelector('.xmas-game-highscore');
    if (highScoreEl) {
      highScoreEl.textContent = `Récord: ${this.highScore}`;
    }
    
    // Event listeners
    this.startBtn.addEventListener('click', () => this.startGame());
    this.canvas.addEventListener('click', () => this.jump());
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.jump();
    }, { passive: false });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && this.isPlaying) {
        e.preventDefault();
        this.jump();
      }
    });
  }
  
  createPlayer() {
    this.player = document.createElement('div');
    this.player.className = 'xmas-game-player';
    this.player.innerHTML = this.getBikeSVG();
    this.canvas.appendChild(this.player);
  }
  
  createStars() {
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.className = 'xmas-game-star';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.top = Math.random() * 50 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 2 + 's';
      this.canvas.appendChild(star);
    }
  }
  
  getBikeSVG() {
    return `
      <svg viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Back wheel -->
        <circle cx="12" cy="38" r="10" stroke="#333" stroke-width="3" fill="none"/>
        <circle cx="12" cy="38" r="3" fill="#333"/>
        <!-- Front wheel -->
        <circle cx="48" cy="38" r="10" stroke="#333" stroke-width="3" fill="none"/>
        <circle cx="48" cy="38" r="3" fill="#333"/>
        <!-- Frame -->
        <path d="M12 38 L30 20 L48 38 M30 20 L30 38 M12 38 L30 38" stroke="#c41e3a" stroke-width="3" stroke-linecap="round"/>
        <!-- Handlebars -->
        <path d="M30 20 L42 18 M40 14 L44 22" stroke="#333" stroke-width="2" stroke-linecap="round"/>
        <!-- Seat -->
        <ellipse cx="22" cy="18" rx="6" ry="3" fill="#8B4513"/>
        <!-- Rider (Santa) -->
        <circle cx="24" cy="8" r="6" fill="#FFE4C4"/>
        <path d="M18 4 Q24 -2 30 4" fill="#c41e3a"/>
        <circle cx="30" cy="2" r="3" fill="white"/>
        <!-- Present basket -->
        <rect x="34" y="10" width="12" height="10" fill="#228b22" rx="2"/>
        <path d="M34 15 H46 M40 10 V20" stroke="#c41e3a" stroke-width="2"/>
      </svg>
    `;
  }
  
  getObstacleSVG(type) {
    if (type === 'tree') {
      return `
        <svg viewBox="0 0 40 60" width="40" height="60" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,0 40,50 0,50" fill="#228b22"/>
          <polygon points="20,15 35,50 5,50" fill="#1a6b1a"/>
          <rect x="15" y="50" width="10" height="10" fill="#8B4513"/>
          <!-- Decorations -->
          <circle cx="15" cy="25" r="3" fill="#c41e3a"/>
          <circle cx="25" cy="35" r="3" fill="#FFD700"/>
          <circle cx="18" cy="42" r="3" fill="#4169E1"/>
        </svg>
      `;
    } else if (type === 'snowman') {
      return `
        <svg viewBox="0 0 40 55" width="40" height="55" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="45" r="12" fill="white" stroke="#ddd" stroke-width="1"/>
          <circle cx="20" cy="28" r="9" fill="white" stroke="#ddd" stroke-width="1"/>
          <circle cx="20" cy="14" r="7" fill="white" stroke="#ddd" stroke-width="1"/>
          <!-- Face -->
          <circle cx="17" cy="12" r="1.5" fill="#333"/>
          <circle cx="23" cy="12" r="1.5" fill="#333"/>
          <path d="M20 15 L22 17 L20 16" fill="orange"/>
          <!-- Hat -->
          <rect x="13" y="4" width="14" height="3" fill="#333"/>
          <rect x="15" y="0" width="10" height="5" fill="#333"/>
          <!-- Scarf -->
          <path d="M11 22 Q20 26 29 22" stroke="#c41e3a" stroke-width="3" fill="none"/>
        </svg>
      `;
    } else {
      // Gift box obstacle
      return `
        <svg viewBox="0 0 35 40" width="35" height="40" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="10" width="30" height="28" fill="#c41e3a" rx="2"/>
          <rect x="0" y="8" width="34" height="8" fill="#a01830" rx="2"/>
          <path d="M17 8 V38" stroke="#FFD700" stroke-width="4"/>
          <path d="M2 24 H32" stroke="#FFD700" stroke-width="4"/>
          <path d="M10 8 Q17 0 24 8" stroke="#FFD700" stroke-width="3" fill="none"/>
        </svg>
      `;
    }
  }
  
  getPresentSVG() {
    const colors = ['#c41e3a', '#228b22', '#4169E1', '#FFD700'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `
      <svg viewBox="0 0 30 30" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="24" height="20" fill="${color}" rx="2"/>
        <rect x="1" y="6" width="28" height="6" fill="${color}" rx="2" opacity="0.8"/>
        <path d="M15 6 V28" stroke="white" stroke-width="3"/>
        <path d="M3 16 H27" stroke="white" stroke-width="3"/>
        <path d="M8 6 Q15 0 22 6" stroke="white" stroke-width="2" fill="none"/>
      </svg>
    `;
  }
  
  startGame() {
    this.score = 0;
    this.gameSpeed = 5;
    this.isPlaying = true;
    this.spawnTimer = 0;
    this.presentTimer = 0;
    
    // Clear existing obstacles and presents
    this.obstacles.forEach(o => o.element.remove());
    this.presents.forEach(p => p.element.remove());
    this.obstacles = [];
    this.presents = [];
    
    // Hide overlay
    this.overlay.classList.add('hidden');
    
    // Update score display
    this.updateScore();
    
    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  }
  
  jump() {
    if (!this.isPlaying || this.isJumping) return;
    
    this.isJumping = true;
    this.player.classList.add('jumping');
    
    setTimeout(() => {
      this.player.classList.remove('jumping');
      this.isJumping = false;
    }, 500);
  }
  
  spawnObstacle() {
    const types = ['tree', 'snowman', 'giftbox'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const obstacle = document.createElement('div');
    obstacle.className = 'xmas-game-obstacle';
    obstacle.innerHTML = this.getObstacleSVG(type);
    obstacle.style.right = '-50px';
    
    this.canvas.appendChild(obstacle);
    this.obstacles.push({
      element: obstacle,
      x: this.canvas.offsetWidth + 50,
      width: 40,
      height: type === 'tree' ? 60 : 55
    });
  }
  
  spawnPresent() {
    const present = document.createElement('div');
    present.className = 'xmas-game-present';
    present.innerHTML = this.getPresentSVG();
    present.style.right = '-40px';
    present.style.bottom = (Math.random() * 80 + 80) + 'px';
    
    this.canvas.appendChild(present);
    this.presents.push({
      element: present,
      x: this.canvas.offsetWidth + 40,
      collected: false
    });
  }
  
  update() {
    if (!this.isPlaying) return;
    
    // Spawn obstacles
    this.spawnTimer++;
    if (this.spawnTimer > 100 - Math.min(this.score, 50)) {
      this.spawnObstacle();
      this.spawnTimer = 0;
    }
    
    // Spawn presents
    this.presentTimer++;
    if (this.presentTimer > 60) {
      this.spawnPresent();
      this.presentTimer = 0;
    }
    
    // Move obstacles
    this.obstacles.forEach((obstacle, index) => {
      obstacle.x -= this.gameSpeed;
      obstacle.element.style.right = (this.canvas.offsetWidth - obstacle.x) + 'px';
      
      // Remove off-screen obstacles
      if (obstacle.x < -50) {
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
        this.score += 1; // Point for avoiding obstacle
        this.updateScore();
      }
      
      // Collision detection
      if (this.checkCollision(obstacle)) {
        this.gameOver();
        return;
      }
    });
    
    // Move presents
    this.presents.forEach((present, index) => {
      present.x -= this.gameSpeed;
      present.element.style.right = (this.canvas.offsetWidth - present.x) + 'px';
      
      // Remove off-screen presents
      if (present.x < -40) {
        present.element.remove();
        this.presents.splice(index, 1);
      }
      
      // Collect present
      if (!present.collected && this.checkPresentCollection(present)) {
        present.collected = true;
        present.element.style.opacity = '0';
        present.element.style.transform = 'scale(1.5)';
        present.element.style.transition = 'all 0.2s';
        this.score += 5;
        this.updateScore();
        
        setTimeout(() => {
          present.element.remove();
          const idx = this.presents.indexOf(present);
          if (idx > -1) this.presents.splice(idx, 1);
        }, 200);
      }
    });
    
    // Increase speed gradually
    if (this.score > 0 && this.score % 20 === 0) {
      this.gameSpeed = Math.min(12, 5 + this.score / 20);
    }
    
    this.gameLoop = requestAnimationFrame(() => this.update());
  }
  
  checkCollision(obstacle) {
    const playerRect = {
      left: 50,
      right: 110,
      bottom: this.isJumping ? 120 : 40,
      top: this.isJumping ? 170 : 90
    };
    
    const obstacleRect = {
      left: obstacle.x - obstacle.width,
      right: obstacle.x,
      bottom: 40,
      top: 40 + obstacle.height
    };
    
    return !(playerRect.right < obstacleRect.left || 
             playerRect.left > obstacleRect.right || 
             playerRect.top < obstacleRect.bottom ||
             playerRect.bottom > obstacleRect.top);
  }
  
  checkPresentCollection(present) {
    const playerRect = {
      left: 50,
      right: 110,
      bottom: this.isJumping ? 120 : 40,
      top: this.isJumping ? 170 : 90
    };
    
    const presentBottom = parseInt(present.element.style.bottom) || 80;
    const presentRect = {
      left: present.x - 30,
      right: present.x,
      bottom: presentBottom,
      top: presentBottom + 30
    };
    
    return !(playerRect.right < presentRect.left || 
             playerRect.left > presentRect.right || 
             playerRect.top < presentRect.bottom ||
             playerRect.bottom > presentRect.top);
  }
  
  updateScore() {
    this.scoreDisplay.textContent = `🎁 ${this.score}`;
  }
  
  gameOver() {
    this.isPlaying = false;
    cancelAnimationFrame(this.gameLoop);
    
    // Flash effect
    this.canvas.classList.add('hit');
    setTimeout(() => this.canvas.classList.remove('hit'), 300);
    
    // Update high score
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('xmasBikeHighScore', this.highScore);
    }
    
    // Show overlay
    this.overlayTitle.textContent = '¡Chocaste!';
    this.overlayScore.textContent = `Puntos: ${this.score}`;
    
    const highScoreEl = this.container.querySelector('.xmas-game-highscore');
    if (highScoreEl) {
      highScoreEl.textContent = `Récord: ${this.highScore}`;
    }
    
    this.startBtn.textContent = '🔄 Jugar de Nuevo';
    this.overlay.classList.remove('hidden');
  }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const gameContainer = document.getElementById('xmas-bike-game');
  if (gameContainer) {
    new ChristmasBikeGame('xmas-bike-game');
  }
});
