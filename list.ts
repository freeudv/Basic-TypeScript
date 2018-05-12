interface IEnumerable {
    forEach: (fn:(item:any, index:number, list:IEnumerable) => void) => void;
}

interface IList extends IEnumerable {
    //items: any[];

    add: (item:any) => IList;
    remove: (item:any) => IList;
    get: (index:number) => any;
    set: (index:number, item:any) => IList;
    size: number;
}
// невозможно создать экземпляр на основе абстрактного класса
abstract class Collection {
    protected items: any[] = [];

    get size() {
        return this.items.length;
    }

    abstract get(i:number): any;
    abstract set(i:number, item:any): any;
}

class List extends Collection implements IList {
    static of(...items:any[]) {
        return new List(...items);
    }

    constructor(...items:any[]) {
        super();
        this.items = items;
    }

    add(item:any) {
        this.items.push(item);
        return this;
    }

    remove(item:any) {
        this.items = this.items.filter(i => i !== item);
        return this;
    }

    get(index:number) {
        return this.items[index];
    }

    set(index:number, item:any) {
        this.items[index] = item;
        return this;
    }

    forEach(fn:Function) {
        for (let i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
}

const list = new List(1, 2, 3);
const list1 = List.of(10, 20, 30); //можно и так через статический метод.

console.log(list.add(4));
console.log(list.items); //ошибка, т.к. свойство закрытое.
console.log(list.get(1));
console.log(list.size);

class SortedList extends List {
    add(item:any) {
        this.items = [...this.items, item].sort();
        return this;
    }
}