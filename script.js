//your JS code here. If required.
// Get all the buttons and the stop button
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

// Initialize the audio variable
let currentAudio = null;

// Function to play the sound
function playSound(event) {
    const soundFile = event.target.dataset.sound;

    // If a sound is already playing, stop it before playing a new one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }

    // Create a new audio element and play the selected sound
    currentAudio = new Audio(`sounds/${soundFile}`);
    currentAudio.play();
}

// Function to stop the sound
function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the audio to the beginning
    }
}

// Attach event listeners to the buttons
buttons.forEach(button => {
    if (button.classList.contains('btn') && !button.classList.contains('stop')) {
        button.addEventListener('click', playSound);
    }
});

// Attach event listener to the stop button
stopButton.addEventListener('click', stopSound);
