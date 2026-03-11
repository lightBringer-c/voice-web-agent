console.log("CONTENT SCRIPT RUNNING");

let voiceLoaded = false;

chrome.runtime.onMessage.addListener(async (msg)=>{

 if(msg.command === "start"){

  if(!voiceLoaded){

   const script = document.createElement("script")
   script.src = chrome.runtime.getURL("voice.js")

   document.body.appendChild(script)

   voiceLoaded = true

  }

  window.postMessage({type:"VOICE_START"})

 }

 if(msg.command === "stop"){

  window.postMessage({type:"VOICE_STOP"})

 }

})