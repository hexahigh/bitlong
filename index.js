const currentUrl = window.location.href

var url = new URL(currentUrl);
var c = url.searchParams.get("url");
var n = url.searchParams.get("no");
var t = url.searchParams.get("type");

// Check that there is something there otherwhise it will get stuck in a loop
if (c) {
    checkType()
    checkHTTP()

} else {
    console.log("No url found, not redirecting")
}

function ifN(i) {
    if (!n) {
        console.log("Don't redirect parameter found, not redirecting.")
        window.location = i
    }
}

function checkHTTP() {
    if (c.startsWith("http://") || c.startsWith("https://")) {
        console.log("url:", c)
        ifN(c)
    } else {
        c = "http://" + c
        console.log("url:", c)
        ifN(c)
    }
}

function checkType() {
    if (t == "binary") {
        c = binaryToString(c)
    } else if (t == "b64") {
        c = atob(c)
    } else if (t == "b64_binary") {
        c = atob(binaryToString(c))
    } else if (t == "b64_binary_double") {
        c = binaryToString(atob(binaryToString(atob(c))))
    } else if (t == "b64_binary_quadruple") {
        c = binaryToString(atob(binaryToString(atob(binaryToString(atob(binaryToString(atob(c))))))))
    }

}


function copyOutput() {
    // Select the text field
    output.select();
    output.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(output.value);
}