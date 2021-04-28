var offline = false;
function listen() {
    window.top.addEventListener('offline', () => {       
        if(!offline) {
            window.top.open("popup.html");
            this.offline = true;  
            setTimeout(()=> {
                this.offline = false; 
            },3000)
        }
    });
}

chrome.windows.onFocusChanged.addListener(function(window) {
    if (!(window == chrome.windows.WINDOW_ID_NONE)) {       
        listen();
    }
});