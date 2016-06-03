const parent = document.getElementById('background');
const targetNode = parent && parent.firstElementChild;

const reg = /url\("(.*)"\)/;
const url = targetNode && targetNode.style.backgroundImage.match(reg)[1];

chrome.extension.sendRequest(url ? window.location.href + url : '');
