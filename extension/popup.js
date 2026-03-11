async function sendCommand(command){

 const [tab] = await chrome.tabs.query({
  active:true,
  currentWindow:true
 })

 chrome.tabs.sendMessage(tab.id,{command})

}

document.getElementById("start").onclick = ()=>{
 sendCommand("start")
}

document.getElementById("stop").onclick = ()=>{
 sendCommand("stop")
}