chrome.webRequest.onBeforeRequest.addListner(
    function(details) { return { cancel: true } }, { urls: defaultFilters }, ["blocking"]
)

defaultFilters = [
    "*://*doubleclick.net/",
    "*://*google.com/",
]