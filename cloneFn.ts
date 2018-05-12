function clone<T>(value:T):T {
    const json = JSON.stringify(value);
    return JSON.parse(json);
}

let copy = clone<{val: string}>({val: '42'});
let copyArr = clone<Array<number>>([1,2,3]);