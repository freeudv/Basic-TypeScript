"use strict";
var list = {
    items: [],
    add: function (item) {
        this.items.push(item);
        return this;
    },
    remove: function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
        return this;
    },
    get: function (index) {
        return this.items[index];
    },
    set: function (index, item) {
        this.items[index] = item;
        return this;
    },
    forEach: function (fn) {
        for (var i = 0; i < this.items.length; i++) {
            fn(this.items[i], i, this);
        }
    }
};
