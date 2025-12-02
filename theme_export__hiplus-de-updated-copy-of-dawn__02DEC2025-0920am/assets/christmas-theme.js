document.addEventListener('DOMContentLoaded', function() {
  // Create snowflakes
  function createSnowflakes() {
    const snowflakesCount = 50;
    const container = document.body;
    
    for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      
      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2;
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      
      // Random position
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.top = '-10px';
      
      // Random animation duration between 5s and 15s
      const duration = Math.random() * 10 + 5;
      snowflake.style.animation = `fall ${duration}s linear infinite`;
      
      // Random delay up to 5s
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      
      // Random opacity for variety
      snowflake.style.opacity = Math.random() * 0.5 + 0.3;
      
      container.appendChild(snowflake);
    }
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
          <div class="countdown-label">Tage</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${hours}</div>
          <div class="countdown-label">Stunden</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${minutes}</div>
          <div class="countdown-label">Minuten</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${seconds}</div>
          <div class="countdown-label">Sekunden</div>
        </div>
      `;
    }
  }

  // Add Christmas badge to products in the Christmas collection
  function addChristmasBadges() {
    // Only add badges on the Christmas collection page
    if (!window.location.pathname.includes('/collections/weihnachten') && 
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
      badge.textContent = '🎄 Weihnachtsangebot';
      product.style.position = 'relative';
      product.appendChild(badge);
    });
  }

  // Initialize all Christmas features
  function initChristmasTheme() {
    // Only run between December 1st and 25th
    const now = new Date();
    if (now.getMonth() === 11 && now.getDate() <= 25) {
      createSnowflakes();
      
      // Update countdown every second
      updateCountdown();
      setInterval(updateCountdown, 1000);
      
      // Add badges to Christmas collection products
      addChristmasBadges();
      
      // Add holiday class to body
      document.body.classList.add('holiday-theme');
    }
  }

  // Initialize the theme
  initChristmasTheme();
});
