console.log("Voice background ready");

chrome.runtime.onMessage.addListener((request) => {

    if (request.action === "startVoice") {

        startVoice();

    }

});

function startVoice(){

    const SpeechRecognition =
        self.SpeechRecognition || self.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;

    recognition.onresult = function(event){

        const command =
          event.results[event.results.length - 1][0].transcript.toLowerCase();

        console.log("Command:",command);

        if(command.includes("scroll down")){
            sendAction("scrollDown")
        }

        if(command.includes("scroll up")){
            sendAction("scrollUp")
        }

    }

    recognition.start()

}

function sendAction(action){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){

        chrome.tabs.sendMessage(tabs[0].id,{
            action:action
        })

    })

}