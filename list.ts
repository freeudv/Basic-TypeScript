interface IEnumerable<T> {
    forEach: (fn:(item:T, index:number, list:IEnumerable<T>) => void) => void;
}

interface IList<T> extends IEnumerable<T> {
    add: (item:T) => IList<T>;
    remove: (item:T) => IList<T>;
    get: (index:number) => T;
    set: (index:number, item:T) => IList<T>;
    size: number;
}
// невозможно создать экземпляр на основе абстрактного класса
abstract class Collection<T> {
    protected items: T[] = [];

    get size() {
        return this.items.length;
    }

    abstract get(i:number): T;
    abstract set(i:number, item:T): any;
}

//обобщенный класс с определенным типом данных
class List<T> extends Collection<T> implements IList<T> {
    constructor(...items:T[]) {
        super();
        this.items = items;
    }

    add(item:T) {
        this.items.push(item);
        return this;
    }

    remove(item:T) {
        this.items = this.items.filter(i => i !== item);
        return this;
    }

    get(index:number) {
        return this.items[index];
    }

    set(index:number, item:T) {
        this.items[index] = item;
        return this;
    }

    forEach(fn:Function) {
        for (let i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
}

const numerList = new List<number>(1, 2, 3);

console.log(numerList.add('4')); //ошибка, т.к. мы определили тип элементов numbers.
console.log(numerList.size);

const stringList = new List<string>('a', 'b', 'c');

const matrix = new List<List<number>>();

class SortedList<T> extends List<T> {
    add(item:T) {
        this.items = [...this.items, item].sort();
        return this;
    }
}