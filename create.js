const urlInput = document.getElementById("urlInput")
const createButton = document.getElementById("createButton")
const output = document.getElementById("output")
const method = document.getElementById("method")

createButton.addEventListener("click", create)

function create() {
    var out, type

    out, type = createMethod()
    output.value = "https://thisisaveryshortdomain.asso.eu.org?type=" + type + "&url=" + out
}

function createMethod() {
    var out2
    var type2
    if (method.value == "binary") {
        out2 = stringToBinary(urlInput.value)
        type2 = "binary"
    } else if (method.value == "b64") {
        out2 = btoa(urlInput.value)
        type2 = "binary"
    }
    else if (method.value == "b64_binary") {
        out2 = btoa(stringToBinary(urlInput.value))
        type2 = "b64_binary"
    }
    return out2, type
}