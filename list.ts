interface Enumerable {
    forEach: (fn:(item:any, index:number, list:List) => void) => void;
}

interface List extends Enumerable {
    items: any[];

    add: (item:any) => List;
    remove: (item:any) => List;
    get: (index:number) => any;
    set: (index:number, item:any) => List;
}

const list:List = {
    items: [],

    add(item) {
        this.items.push(item);
        return this;
    },
    remove(item) {
        this.items = this.items.filter(i => i !== item);
        return this;
    },
    get(index) {
        return this.items[index];
    },
    set(index, item) {
        this.items[index] = item;
        return this;
    },
    forEach(fn) {
        for (let i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
}