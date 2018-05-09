"use strict";
var done = false;
var height = 180;
var weight = 75.7;
var hex = 0xf00d;
var binary = 10;
var octl = 484;
var name = 'Andres';
var language = 'TypeScript';
var sentence = "Hi, my name is " + name + ". I am creator of " + language;
// Объявление массива строк;
var companies = ['Microsoft', 'Google', 'Apple'];
companies.push('Facebook');
// Объявление массива строк другим способом - обобщением;
var frameworks = [];
//Дополнительные типы данных в TypeScript
//any
var whatever = 42;
var list = [true, 1, 'string'];
//void - ничего не возвращает.
function showAlert(message) {
    alert(message);
}
//undefined
var u = undefined;
//null
var n = null;
//never - функция никогда не доходит до возврата.
function error(message) {
    throw new Error(message);
}
function infLoop() {
    while (true) {
    }
}
