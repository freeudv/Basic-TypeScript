"use strict";
function clone(value) {
    var json = JSON.stringify(value);
    return JSON.parse(json);
}
var copy = clone({ val: '42' });
var copyArr = clone([1, 2, 3]);
