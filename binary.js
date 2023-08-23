function stringToBinary(str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

function binaryToString(binary) {
    return binary.split(' ').map(function (bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}