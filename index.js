const currentUrl = window.location.href

var url = new URL(currentUrl);
var c = url.searchParams.get("url");
var n = url.searchParams.get("no");

// Check that there is something there otherwhise it will get stuck in a loop
if(c) {
    // Convert input "url" back to a url
    c = binaryToString(c)

    if (c.startsWith("http://") || c.startsWith("https://")) {
        console.log("url:", c)
        ifN(c)
    } else {
        c = "http://" + c
        console.log("url:", c)
        ifN(c)
    }
} else {
    console.log("No url found, not redirecting")
}

function ifN(i) {
    if (!n) {
        console.log("Don't redirect parameter found, not redirecting.")
        window.location = i
    }
}