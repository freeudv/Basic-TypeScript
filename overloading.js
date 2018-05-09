"use strict";
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return Number(x) + Number(y);
    }
    else {
        return NaN;
    }
}
add(1, 2);
add('1', '2');
