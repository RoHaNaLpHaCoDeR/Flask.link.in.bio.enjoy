// Function to play transition sound
function playTransitionSound() {
    const sound = new Audio('static/beep.mp3');
    sound.volume = 1.0; // Ensure full volume
    sound.play().then(() => {
        console.log("Sound played successfully");
    }).catch(error => {
        console.log("Sound play error:", error);
    });
}
function startTimer(step) {
    let timer = 10;
    let timerElement = document.getElementById('timer' + step);
    let progressBar = document.getElementById('progress' + step);
    
    let countdown = setInterval(function () {
        timer--;
        timerElement.textContent = timer;
        progressBar.style.width = ((10 - timer) / 10) * 100 + "%";

        if (timer <= 0) {
            playTransitionSound();  // Play sound before scrolling
        }
        if (timer <= 0) {
            clearInterval(countdown);
            if (step === 3) {
                window.location.href = '/redirect'; // Replace with your redirect URL
            } else {
                let nextStep = step + 1;
                document.getElementById('step' + nextStep).classList.remove('hidden');
                document.getElementById('step' + nextStep).scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => startTimer(nextStep), 1000);
            }
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    startTimer(1);
});