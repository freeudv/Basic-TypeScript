function add(x: number, y:number):number;
function add(x: string, y:string):string;

function add(x: number|string, y:number|string):number {
 if (typeof x === 'number' && typeof y === 'number') {
     return x+y
 } else if (typeof x === 'string' && typeof y === 'string') {
    return Number(x) + Number(y);
 } else {
    return NaN;
 }
}

add(1, 2);
add('1', '2');