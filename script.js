function textToAudio() {
    
    let msg = document.querySelector('.text').value;

   
    let speech = new SpeechSynthesisUtterance();

    
    speech.lang = "en-US"; // Set the language to US English
    speech.text = msg; // Set the text to be spoken
    speech.volume = 1; // Set the volume (0 to 1)
    speech.rate = 1; // Set the speaking rate (0.1 to 10)
    speech.pitch = 1; // Set the pitch (0 to 2)

    
    window.speechSynthesis.speak(speech);
}
