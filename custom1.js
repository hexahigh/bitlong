function stringToCustom1(str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('-');
}

function custom1ToString(data) {
    return data.split('-').map(function (bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}