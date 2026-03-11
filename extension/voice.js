console.log("VOICE SCRIPT LOADED");

let recognition = null;

window.addEventListener("message",(event)=>{

 if(event.data.type === "VOICE_START"){

  startVoice()

 }

 if(event.data.type === "VOICE_STOP"){

  stopVoice()

 }

})

function startVoice(){

 if(recognition){
  console.log("Voice already running")
  return
 }

 const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

 recognition = new SpeechRecognition()

 recognition.lang = "en-US"
 recognition.continuous = true

 recognition.start()

 console.log("Voice started")

 recognition.onresult = (event)=>{

  const command =
   event.results[event.results.length-1][0].transcript.toLowerCase()

  console.log("Voice command:",command)

  if(command.includes("scroll down")){
   window.scrollBy({top:500,behavior:"smooth"})
  }

  if(command.includes("scroll up")){
   window.scrollBy({top:-500,behavior:"smooth"})
  }

 }

 recognition.onend = ()=>{
  console.log("Voice ended")
  recognition = null
 }

}

function stopVoice(){

 if(recognition){
  recognition.stop()
  recognition = null
  console.log("Voice stopped")
 }

}