let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // will provide all voices available on the device in voices array
    speech.voice = voices[0]; // adding default voice

    voices.forEach((voice,i)=>(voiceselect.options[i])= new Option(voice.name, i));  // adding all voices in dropdown of select
}

voiceselect.addEventListener("change",()=>{ // changing voice per selected option
    speech.voice = voices[voiceselect.value];
})

document.querySelector("button").addEventListener("click",()=>{  // speaking text in textarea when clicked on listen.
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})