const urlInput = document.getElementById("urlInput")
const createButton = document.getElementById("createButton")
const output = document.getElementById("output")
const method = document.getElementById("method")

createButton.addEventListener("click", create)

function create() {
    out = createMethod()
    output.value = "https://thisisaveryshortdomain.asso.eu.org?url=" + out
}

function createMethod() {
    var out2
    if (method.value == "binary") {
        out2 = stringToBinary(urlInput.value)
    } else if (method.value == "b64") {
        out2 = btoa(urlInput.value)
    }
    return out2
}