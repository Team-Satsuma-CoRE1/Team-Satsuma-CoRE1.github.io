document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  // ドットのクリックイベント
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // カルーセルの更新
  function updateCarousel() {
    // アニメーションを一時停止
    carousel.style.animation = 'none';
    carousel.style.transform = `translateX(${-630 * currentSlide}px)`;
    
    // アクティブなドットを更新
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });

    // アニメーションを再開
    setTimeout(() => {
      carousel.style.animation = 'slide 15s infinite linear';
      carousel.style.animationDelay = `${-5 * currentSlide}s`;
    }, 50);
  }

  // 自動スライド時のドット更新
  setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }, 5000); // 5秒ごとに更新
});