const urlInput = document.getElementById("urlInput")
const createButton = document.getElementById("createButton")
const output = document.getElementById("output")
const method = document.getElementById("method")

createButton.addEventListener("click", create)

function create() {
    var out
    var type
    type = method.value

    out = createMethod()
    output.value = "https://thisisaveryshortdomain.asso.eu.org?type=" + type + "&url=" + out
}

function createMethod() {
    var out2
    if (method.value == "binary") {
        out2 = stringToBinary(urlInput.value)
    } else if (method.value == "b64") {
        out2 = btoa(urlInput.value)
    }
    else if (method.value == "b64_binary") {
        out2 = btoa(stringToBinary(urlInput.value))
    } else if (method.value == "b64_binary_double") {
        out2 = btoa(stringToBinary(btoa(stringToBinary(urlInput.value))))
    } else if (method.value == "b64_binary_quadruple") {
        out2 = btoa(stringToBinary(btoa(stringToBinary(btoa(stringToBinary(btoa(stringToBinary(urlInput.value))))))))
    }
    return out2
}