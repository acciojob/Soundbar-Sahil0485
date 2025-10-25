const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    stopSounds();

    if (btn.classList.contains('stop')) return;

    const sound = btn.textContent;
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentSound = audio;
  });
});

function stopSounds() {
  if (window.currentSound) {
    window.currentSound.pause();
    window.currentSound.currentTime = 0;
  }
}
