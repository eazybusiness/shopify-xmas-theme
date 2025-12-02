document.addEventListener('DOMContentLoaded', function() {
  
  // Get asset URL helper (Shopify-specific)
  function getAssetUrl(filename) {
    // Try to get asset URL from Shopify's asset_url
    const link = document.querySelector(`link[href*="${filename}"]`);
    if (link) {
      return link.href.replace(/\?.*$/, '').replace(filename, '') + filename;
    }
    // Fallback: construct URL from current page
    const scripts = document.querySelectorAll('script[src*="assets"]');
    if (scripts.length > 0) {
      const assetBase = scripts[0].src.replace(/\/[^/]+$/, '/');
      return assetBase + filename;
    }
    // Last fallback
    return `/cdn/shop/t/1/assets/${filename}`;
  }

  // ========================================
  // SNOWFLAKES WITH IMAGES
  // ========================================
  function createSnowflakes() {
    const snowflakesCount = 25;
    const container = document.body;
    const snowflakeImg = getAssetUrl('snowflakes.png');
    
    for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      
      // Create image element
      const img = document.createElement('img');
      img.src = snowflakeImg;
      img.alt = '';
      img.loading = 'lazy';
      snowflake.appendChild(img);
      
      // Random size between 20px and 50px
      const size = Math.random() * 30 + 20;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      
      // Random position
      snowflake.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration between 8s and 20s
      const duration = Math.random() * 12 + 8;
      snowflake.style.animationDuration = `${duration}s`;
      
      // Random delay up to 10s
      snowflake.style.animationDelay = `${Math.random() * 10}s`;
      
      // Random opacity for variety
      snowflake.style.opacity = Math.random() * 0.4 + 0.4;
      
      container.appendChild(snowflake);
    }
  }

  // ========================================
  // SANTA SLEIGH ANIMATION
  // ========================================
  function createSantaSleigh() {
    const container = document.body;
    
    // Santa sleigh
    const santa = document.createElement('div');
    santa.className = 'santa-sleigh';
    const santaImg = document.createElement('img');
    santaImg.src = getAssetUrl('santa_sleigh.png');
    santaImg.alt = 'Santa Claus';
    santaImg.loading = 'lazy';
    santa.appendChild(santaImg);
    container.appendChild(santa);
    
    // Magic trail behind Santa
    const trail = document.createElement('div');
    trail.className = 'santa-trail';
    const trailImg = document.createElement('img');
    trailImg.src = getAssetUrl('xmas-light.png');
    trailImg.alt = '';
    trailImg.loading = 'lazy';
    trail.appendChild(trailImg);
    container.appendChild(trail);
  }

  // ========================================
  // CORNER DECORATIONS
  // ========================================
  function createCornerDecorations() {
    const container = document.body;
    
    // Left corner - Christmas stocking
    const leftCorner = document.createElement('div');
    leftCorner.className = 'xmas-corner-left';
    const leftImg = document.createElement('img');
    leftImg.src = getAssetUrl('xmas-deko.png');
    leftImg.alt = '';
    leftImg.loading = 'lazy';
    leftCorner.appendChild(leftImg);
    container.appendChild(leftCorner);
    
    // Right corner - Christmas tree
    const rightCorner = document.createElement('div');
    rightCorner.className = 'xmas-corner-right';
    const rightImg = document.createElement('img');
    rightImg.src = getAssetUrl('xmas-tree.png');
    rightImg.alt = '';
    rightImg.loading = 'lazy';
    rightCorner.appendChild(rightImg);
    container.appendChild(rightCorner);
  }

  // ========================================
  // TWINKLING STARS
  // ========================================
  function createTwinklingStars() {
    const container = document.body;
    const positions = [
      { top: '15%', left: '10%', size: 40 },
      { top: '25%', right: '15%', size: 50 },
      { top: '45%', left: '5%', size: 35 },
      { top: '60%', right: '8%', size: 45 },
    ];
    
    positions.forEach((pos, index) => {
      const star = document.createElement('div');
      star.className = 'xmas-stars';
      const img = document.createElement('img');
      img.src = getAssetUrl('xmas-stars.png');
      img.alt = '';
      img.loading = 'lazy';
      star.appendChild(img);
      
      star.style.width = `${pos.size}px`;
      star.style.top = pos.top;
      if (pos.left) star.style.left = pos.left;
      if (pos.right) star.style.right = pos.right;
      star.style.animationDelay = `${index * 0.5}s`;
      
      container.appendChild(star);
    });
  }

  // Christmas countdown
  function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December is 11 (0-indexed)
    
    // If Christmas has passed this year, set for next year
    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    
    const diff = christmas - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Update the countdown display
    const countdownEl = document.getElementById('christmas-countdown');
    if (countdownEl) {
      countdownEl.innerHTML = `
        <div class="countdown-item">
          <div class="countdown-number">${days}</div>
          <div class="countdown-label">Días</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${hours}</div>
          <div class="countdown-label">Horas</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${minutes}</div>
          <div class="countdown-label">Minutos</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${seconds}</div>
          <div class="countdown-label">Segundos</div>
        </div>
      `;
    }
  }

  // Add Christmas badge to products in the Christmas collection
  function addChristmasBadges() {
    // Only add badges on the Christmas collection page
    if (!window.location.pathname.includes('/collections/navidad') && 
        !window.location.pathname.includes('/collections/christmas')) {
      return;
    }
    
    // This selector might need adjustment based on your theme's structure
    const christmasProducts = document.querySelectorAll('.card-wrapper, .product-card, .card');
    
    christmasProducts.forEach(product => {
      // Avoid adding duplicate badges
      if (product.querySelector('.christmas-badge')) return;
      
      const badge = document.createElement('div');
      badge.className = 'christmas-badge';
      badge.textContent = '🎄 Oferta Navideña';
      product.style.position = 'relative';
      product.appendChild(badge);
    });
  }

  // Initialize all Christmas features
  function initChristmasTheme() {
    // Only run between December 1st and 26th
    const now = new Date();
    if (now.getMonth() === 11 && now.getDate() <= 26) {
      // Add holiday class to body
      document.body.classList.add('holiday-theme');
      
      // Snowflakes only
      createSnowflakes();
      
      // Update countdown every second
      updateCountdown();
      setInterval(updateCountdown, 1000);
      
      // Add badges to Christmas collection products
      addChristmasBadges();
    }
  }

  // Initialize the theme
  initChristmasTheme();
});
