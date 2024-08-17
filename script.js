document.addEventListener("DOMContentLoaded", function() {
    const pencil = document.getElementById('pencil');
    let isJumping = false; // Flag to track animation state
  
    pencil.addEventListener('click', function() {
      if (!isJumping) {
        pencil.style.animationPlayState = 'running'; // Start animation
        isJumping = true;
      } else {
        pencil.style.animationPlayState = 'paused'; // Pause animation
        isJumping = false;
      }
  
      const canvas = pencil.parentElement;
      const canvasRect = canvas.getBoundingClientRect();
      const maxX = canvasRect.width - pencil.width;
      const maxY = canvasRect.height - pencil.height;
    
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
  
      pencil.style.left = randomX + 'px';
      pencil.style.top = randomY + 'px';
    });
  });