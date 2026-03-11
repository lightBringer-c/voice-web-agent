const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;

document.getElementById("start").onclick = function(){

 recognition.start();

 console.log("voice started");

}

recognition.onresult = function(event){

 const command =
 event.results[event.results.length-1][0].transcript.toLowerCase();

 console.log("command:",command);

 chrome.tabs.query({active:true,currentWindow:true},function(tabs){

  chrome.tabs.sendMessage(tabs[0].id,{
   command:command
  })

 })

}