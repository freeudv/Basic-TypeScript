type Color = {r:number, g:number, b:number};

function rgbToHex(args: Color):string {
    //{r: 255, g: 0, b: 0}
    const {r, g, b} = args;
    return [r, g, b]
        .map(dec => dec.toString(16)) // ['ff', '0', '0']
        .map(hex => hex.length === 1 ? `0${hex}` : hex) //['ff', '00', '00']
        .join('');
}

function hexToRgb(hex:string): {r:number, g:number, b:number} {
    //FF000
    //F00
    if (hex.length === 3) {
        let [hr, hg, hb] = hex.split(''); //['F', '0', '0']

        return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`)
    }

    let [r, g, b] = [0, 2, 4]
        .map(offset => hex.substring(offset, offset + 2)) //['FF', '00', '00']
        .map(hex => parseInt(hex, 16)) //[255, 0, 0]
    return {r, g, b}
}

console.log(rgbToHex({r: 255, g: 0, b: 0})); // 'ff0000'
console.log(hexToRgb('ff0000')); //{r: 0, g: 255, b: 0}