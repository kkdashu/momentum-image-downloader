chrome.extension.onRequest.addListener((url) => {
    if (url) {
        chrome.downloads.download({url}, (arg) => console.log(arg));
    }
})

window.onload = () => {
    chrome.windows.getCurrent((currentWindow) => {
        chrome.tabs.query({
            active: true,
            windowId: currentWindow.id
        }, (activeTabs) => {
            if (activeTabs.length === 0) return;
            chrome.tabs.executeScript(
                activeTabs[0].id, {file: 'get_image_url.js'}
            );
        });
    })
}
