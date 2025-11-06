function togglePlay(video) {
  // Останавливаем все другие видео
  document.querySelectorAll('video').forEach(v => {
    if (v !== video && !v.paused) {
      v.pause();
      v.classList.remove('playing');
    }
  });
  
  // Воспроизводим или ставим на паузу текущее видео
  if (video.paused) {
    video.play();
    video.classList.add('playing');
  } else {
    video.pause();
    video.classList.remove('playing');
  }
}

// Автоматическая пауза при окончании видео
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('ended', function() {
    this.classList.remove('playing');
  });
});