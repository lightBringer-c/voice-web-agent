console.log("Voice Web Agent loaded");

chrome.runtime.onMessage.addListener((request)=>{

    if(request.action==="scrollDown"){

        window.scrollBy({
            top:500,
            behavior:"smooth"
        })

    }

    if(request.action==="scrollUp"){

        window.scrollBy({
            top:-500,
            behavior:"smooth"
        })

    }

})