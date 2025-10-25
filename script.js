const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');
const buttonsContainer = document.getElementById('buttons');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Stop all existing sounds
    stopSounds();

    if (btn.classList.contains('stop')) return;

    const soundName = btn.textContent.trim();

    // Create audio element (so Cypress can detect it)
    const audio = document.createElement('audio');
    audio.src = `sounds/${soundName}.mp3`;
    audio.setAttribute('controls', 'true'); // optional (not required for test)
    audio.play();

    // Add audio to DOM (so Cypress finds it)
    buttonsContainer.appendChild(audio);
  });
});

function stopSounds() {
  // Stop and remove any existing <audio> elements
  const existingAudios = document.querySelectorAll('audio');
  existingAudios.forEach(aud => {
    aud.pause();
    aud.currentTime = 0;
    aud.remove();
  });
}
