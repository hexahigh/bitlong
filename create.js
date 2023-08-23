const urlInput = document.getElementById("urlInput")
const createButton = document.getElementById("createButton")
const output = document.getElementById("output")

createButton.addEventListener("click", create)

function create() {
    out = stringToBinary(urlInput.value)
    output = "thisisaveryshortdomain.asso.eu.org?url=" + out
}