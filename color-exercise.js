function rgbToHex(args) {
    //{r: 255, g: 0, b: 0}
    var r = args.r, g = args.g, b = args.b;
    return [r, g, b]
        .map(function (dec) { return dec.toString(16); }) // ['ff', '0', '0']
        .map(function (hex) { return hex.length === 1 ? "0" + hex : hex; }) //['ff', '00', '00']
        .join('');
}
function hexToRgb(hex) {
    //FF000
    //F00
    if (hex.length === 3) {
        var _a = hex.split(''), hr = _a[0], hg = _a[1], hb = _a[2]; //['F', '0', '0']
        return hexToRgb("" + hr + hr + hg + hg + hb + hb);
    }
    var _b = [0, 2, 4]
        .map(function (offset) { return hex.substring(offset, offset + 2); }) //['FF', '00', '00']
        .map(function (hex) { return parseInt(hex, 16); }), r = _b[0], g = _b[1], b = _b[2]; //[255, 0, 0]
    return { r: r, g: g, b: b };
}
console.log(rgbToHex({ r: 255, g: 255, b: 0 })); // 'ff0000'
console.log(hexToRgb('ffff00')); //{r: 0, g: 255, b: 0}
