"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// невозможно создать экземпляр на основе абстрактного класса
var Collection = /** @class */ (function () {
    function Collection() {
        this.items = [];
    }
    Object.defineProperty(Collection.prototype, "size", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    return Collection;
}());
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    List.of = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return new (List.bind.apply(List, [void 0].concat(items)))();
    };
    List.prototype.add = function (item) {
        this.items.push(item);
        return this;
    };
    List.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
        return this;
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    List.prototype.set = function (index, item) {
        this.items[index] = item;
        return this;
    };
    List.prototype.forEach = function (fn) {
        for (var i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    };
    return List;
}(Collection));
var list = new List(1, 2, 3);
var list1 = List.of(10, 20, 30); //можно и так через статический метод.
console.log(list.add(4));
console.log(list.items); //ошибка, т.к. свойство закрытое.
console.log(list.get(1));
console.log(list.size);
var SortedList = /** @class */ (function (_super) {
    __extends(SortedList, _super);
    function SortedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortedList.prototype.add = function (item) {
        this.items = this.items.concat([item]).sort();
        return this;
    };
    return SortedList;
}(List));
