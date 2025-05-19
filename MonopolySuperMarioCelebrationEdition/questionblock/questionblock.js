const sounds = ["sound/1.mp3", "sound/2.mp3", "sound/3.mp3", "sound/4.mp3", "sound/power-up.mp3", "sound/death.mp3", "sound/bowser-laugh.mp3"]; 
        
        let audioPlaying = false; // Flag to track whether a sound is playing

        document.getElementById("image").addEventListener("click", () => {
            if (audioPlaying) return; // Prevent function if sound is playing

            audioPlaying = true; // Set flag to true
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
            const audio = new Audio(randomSound);

            audio.play();
            audio.addEventListener("ended", () => {
                audioPlaying = false; // Reset flag when sound ends
            });
        });
        
    document.getElementById("image").addEventListener("click", handleClick);
    document.getElementById("image").addEventListener("mouseup", handleRelease);

    document.getElementById("image").addEventListener("touchstart", handleClick);
    document.getElementById("image").addEventListener("touchend", handleRelease);

function handleClick() {
    document.getElementById('image').className = ''
}

function handleRelease() {
    document.getElementById('image').className = ''
}