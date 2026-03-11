console.log("Voice Agent Loaded");

chrome.runtime.onMessage.addListener(function(request){

 const command = request.command;

 if(!command) return;

 if(command.includes("scroll down")){

  window.scrollBy({
   top:500,
   behavior:"smooth"
  })

 }

 if(command.includes("scroll up")){

  window.scrollBy({
   top:-500,
   behavior:"smooth"
  })

 }

});