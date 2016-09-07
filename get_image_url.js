console.log('begin');
var hostname = document.location.hostname;
var targetNode = null;

if (/momentumdash.com/.test(hostname)) {
    const parent = document.getElementById('background');
    targetNode = parent && parent.firstElementChild;
} else if(/bing.com/.test(hostname)) {
    targetNode = document.getElementById('bgDiv');
}

console.log('getImageUrl');
var url = getImageUrl(targetNode);

if (url) {
    console.log('sendRequest', url);
    chrome.extension.sendRequest(url ? resolveUrl(url) : '');
}

function resolveUrl(url) {
    if (/^https?/.test(url)) {
        return url;
    }
    return window.location.href + '/' + url;
}

function getImageUrl(ele) {
    if (!ele) return null;
    const reg = /url\("(.*)"\)/;
    return window.getComputedStyle(ele).backgroundImage.match(reg)[1];
}
