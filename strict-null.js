"use strict";
{
    var value_1;
    value_1 = null;
    value_1 = undefined;
    console.log(value_1);
}
// Еще пример
var element = document.getElementById('message');
element.innerText = 'Welcome'; //ошибка, т.к. может быть null вместо обьекта.
// можно сделать так, если мы знаем, что элемент точно есть
element.innerText = 'Welcome';
// Еще пример
function getElement(selector) {
    var element = document.getElementById(selector);
    if (element === null) {
        //Здесь тип element равен null
        element;
    }
    else {
        //А здесь HTMLElement
        element;
    }
    return element;
}
